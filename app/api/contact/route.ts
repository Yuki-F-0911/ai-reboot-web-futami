import { NextRequest, NextResponse } from 'next/server';

// メール送信先
const RECIPIENT_EMAIL = 'info@ai-reboot.io';

// Slack Webhook URL（環境変数から取得）
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

interface ContactFormData {
  contactType: 'individual' | 'corporate';
  // 共通項目
  email: string;
  subject: string;
  message: string;
  // 個人用項目
  name?: string;
  phone?: string;
  // 法人用項目
  companyName?: string;
  department?: string;
  position?: string;
  employeeCount?: string;
  contactPerson?: string;
  companyPhone?: string;
}

// Slack通知を送信する関数
async function sendSlackNotification(data: ContactFormData) {
  if (!SLACK_WEBHOOK_URL) {
    console.warn('Slack Webhook URLが設定されていません');
    return;
  }

  try {
    // Slackメッセージの構築
    const blocks: Array<Record<string, unknown>> = [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '🔔 新しいお問い合わせが届きました',
          emoji: true
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*種別:*\n${data.contactType === 'individual' ? '👤 個人' : '🏢 法人'}`
          },
          {
            type: 'mrkdwn',
            text: `*件名:*\n${data.subject}`
          }
        ]
      },
      {
        type: 'divider'
      }
    ];

    // 個人/法人別の情報を追加
    if (data.contactType === 'individual') {
      blocks.push({
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*お名前:*\n${data.name}`
          },
          {
            type: 'mrkdwn',
            text: `*メールアドレス:*\n${data.email}`
          }
        ]
      });
      if (data.phone) {
        blocks.push({
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*電話番号:*\n${data.phone}`
            }
          ]
        });
      }
    } else {
      const corporateFields = [
        {
          type: 'mrkdwn',
          text: `*会社名:*\n${data.companyName}`
        },
        {
          type: 'mrkdwn',
          text: `*ご担当者名:*\n${data.contactPerson}`
        }
      ];
      blocks.push({
        type: 'section',
        fields: corporateFields
      });

      const additionalFields = [];
      if (data.department) {
        additionalFields.push({
          type: 'mrkdwn',
          text: `*部署:*\n${data.department}`
        });
      }
      if (data.position) {
        additionalFields.push({
          type: 'mrkdwn',
          text: `*役職:*\n${data.position}`
        });
      }
      if (additionalFields.length > 0) {
        blocks.push({
          type: 'section',
          fields: additionalFields
        });
      }

      const contactFields = [
        {
          type: 'mrkdwn',
          text: `*メールアドレス:*\n${data.email}`
        }
      ];
      if (data.companyPhone) {
        contactFields.push({
          type: 'mrkdwn',
          text: `*電話番号:*\n${data.companyPhone}`
        });
      }
      blocks.push({
        type: 'section',
        fields: contactFields
      });

      if (data.employeeCount) {
        blocks.push({
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*従業員数:*\n${data.employeeCount}`
            }
          ]
        });
      }
    }

    // お問い合わせ内容を追加
    blocks.push(
      {
        type: 'divider'
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*お問い合わせ内容:*\n\`\`\`\n${data.message}\n\`\`\``
        }
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `受信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`
          }
        ]
      }
    );

    // Slackに送信
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blocks,
        text: `新しいお問い合わせ: ${data.subject}` // フォールバックテキスト
      }),
    });

    if (!response.ok) {
      console.error('Slack通知の送信に失敗しました:', response.statusText);
    } else {
      console.log('Slack通知を送信しました');
    }
  } catch (error) {
    console.error('Slack通知エラー:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // バリデーション
    if (!data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // 個人/法人別の必須項目チェック
    if (data.contactType === 'individual' && !data.name) {
      return NextResponse.json(
        { error: 'お名前は必須です' },
        { status: 400 }
      );
    }

    if (data.contactType === 'corporate') {
      if (!data.companyName || !data.contactPerson) {
        return NextResponse.json(
          { error: '会社名とご担当者名は必須です' },
          { status: 400 }
        );
      }
    }

    // メール本文を構築
    let emailBody = `AIリブートWebサイトからのお問い合わせ\n\n`;
    emailBody += `【お問い合わせ種別】${data.contactType === 'individual' ? '個人' : '法人'}\n\n`;

    if (data.contactType === 'individual') {
      emailBody += `【お名前】${data.name}\n`;
      if (data.phone) emailBody += `【電話番号】${data.phone}\n`;
    } else {
      emailBody += `【会社名】${data.companyName}\n`;
      if (data.department) emailBody += `【部署名】${data.department}\n`;
      emailBody += `【ご担当者名】${data.contactPerson}\n`;
      if (data.position) emailBody += `【役職】${data.position}\n`;
      if (data.employeeCount) emailBody += `【従業員数】${data.employeeCount}\n`;
      if (data.companyPhone) emailBody += `【電話番号】${data.companyPhone}\n`;
    }

    emailBody += `【メールアドレス】${data.email}\n`;
    emailBody += `【件名】${data.subject}\n\n`;
    emailBody += `【お問い合わせ内容】\n${data.message}\n`;

    // ここで実際のメール送信処理を行います
    // 例: SendGrid, AWS SES, Nodemailerなどを使用
    // 現在は仮の実装として成功レスポンスを返します
    
    // 開発環境ではコンソールに出力
    if (process.env.NODE_ENV === 'development') {
      console.log('========== お問い合わせ受信 ==========');
      console.log(`送信先: ${RECIPIENT_EMAIL}`);
      console.log(emailBody);
      console.log('=====================================');
    }

    // Slack通知を送信（非同期で実行、エラーが発生してもレスポンスには影響しない）
    sendSlackNotification(data).catch(error => {
      console.error('Slack通知の送信でエラーが発生しました:', error);
    });

    // TODO: 実際のメール送信実装
    // 例: SendGridを使用する場合
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: RECIPIENT_EMAIL,
      from: 'noreply@ai-reboot.io', // 送信元メールアドレス
      replyTo: data.email, // 返信先を問い合わせ者のメールアドレスに
      subject: `[Webサイトお問い合わせ] ${data.subject}`,
      text: emailBody,
    };
    
    await sgMail.send(msg);
    */

    // 成功レスポンス
    return NextResponse.json(
      { 
        success: true,
        message: 'お問い合わせを受け付けました' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}