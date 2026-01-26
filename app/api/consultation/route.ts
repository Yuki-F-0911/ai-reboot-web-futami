import { NextRequest, NextResponse } from 'next/server';

// Slack Webhook URL（環境変数から取得）
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
// GAS Webhook URL（環境変数から取得）- 自動返信用
const GAS_WEBHOOK_URL = process.env.GAS_CONSULTATION_WEBHOOK_URL;

interface ConsultationFormData {
  // 会社情報
  companyName: string;
  department: string;
  position: string;
  employeeCount: string;
  // 担当者情報
  contactPerson: string;
  email: string;
  phone: string;
  // 相談内容
  currentStatus: string;
  consultationContent: string;
  preferredDate: string;
  howDidYouKnow: string;
  // プライバシーポリシー同意
  privacyAgreed: boolean;
}

// 従業員数のラベル変換
const employeeCountLabels: Record<string, string> = {
  '1-10': '1〜10名',
  '11-50': '11〜50名',
  '51-100': '51〜100名',
  '101-300': '101〜300名',
  '301-500': '301〜500名',
  '501-1000': '501〜1,000名',
  '1001+': '1,001名以上',
};

// AI活用状況のラベル変換
const currentStatusLabels: Record<string, string> = {
  'not-started': 'まだAIは導入していない',
  'individual-use': '一部の社員が個人的に使用している',
  'trial': '試験的に導入中',
  'partial-deployment': '一部部署で本格導入済み',
  'company-wide': '全社的に導入済み',
};

// 知ったきっかけのラベル変換
const howDidYouKnowLabels: Record<string, string> = {
  'search': 'Google等の検索',
  'sns': 'SNS（X, Facebook, LinkedIn等）',
  'referral': '知人・同僚からの紹介',
  'seminar': 'セミナー・イベント',
  'media': 'メディア記事',
  'other': 'その他',
};

// Slack通知を送信する関数
async function sendSlackNotification(data: ConsultationFormData) {
  if (!SLACK_WEBHOOK_URL) {
    console.warn('Slack Webhook URLが設定されていません');
    return;
  }

  console.log('[Slack通知] 無料相談申込 - 送信開始');

  try {
    const blocks: Array<Record<string, unknown>> = [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '📋 法人向け無料相談の申込がありました',
          emoji: true
        }
      },
      {
        type: 'divider'
      },
      // 会社情報
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*🏢 会社情報*'
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*会社名:*\n${data.companyName}`
          },
          {
            type: 'mrkdwn',
            text: `*従業員数:*\n${employeeCountLabels[data.employeeCount] || data.employeeCount}`
          }
        ]
      },
    ];

    // 部署・役職（任意項目）
    if (data.department || data.position) {
      const optionalFields = [];
      if (data.department) {
        optionalFields.push({
          type: 'mrkdwn',
          text: `*部署:*\n${data.department}`
        });
      }
      if (data.position) {
        optionalFields.push({
          type: 'mrkdwn',
          text: `*役職:*\n${data.position}`
        });
      }
      blocks.push({
        type: 'section',
        fields: optionalFields
      });
    }

    // 担当者情報
    blocks.push(
      {
        type: 'divider'
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*👤 ご担当者情報*'
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*お名前:*\n${data.contactPerson}`
          },
          {
            type: 'mrkdwn',
            text: `*電話番号:*\n${data.phone}`
          }
        ]
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*メールアドレス:*\n${data.email}`
          }
        ]
      }
    );

    // 相談内容
    blocks.push(
      {
        type: 'divider'
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*💬 ご相談内容*'
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*AI活用状況:*\n${currentStatusLabels[data.currentStatus] || data.currentStatus}`
          }
        ]
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*相談内容:*\n\`\`\`\n${data.consultationContent}\n\`\`\``
        }
      }
    );

    // 希望日時（任意）
    if (data.preferredDate) {
      blocks.push({
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*ご希望の相談日時:*\n${data.preferredDate}`
          }
        ]
      });
    }

    // 知ったきっかけ（任意）
    if (data.howDidYouKnow) {
      blocks.push({
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*知ったきっかけ:*\n${howDidYouKnowLabels[data.howDidYouKnow] || data.howDidYouKnow}`
          }
        ]
      });
    }

    // フッター
    blocks.push(
      {
        type: 'divider'
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `📅 受信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })} | 📧 2営業日以内に返信が必要です`
          }
        ]
      }
    );

    // Slackに送信
    console.log('[Slack通知] リクエスト送信中...');
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blocks,
        text: `新しい無料相談申込: ${data.companyName} - ${data.contactPerson}様`
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Slack通知の送信に失敗しました:', response.status, response.statusText, errorText);
    } else {
      console.log('[Slack通知] 送信成功');
    }
  } catch (error) {
    console.error('Slack通知エラー:', error);
  }
}

// GASに送信して自動返信メールを送る関数
async function sendAutoReplyViaGAS(data: ConsultationFormData) {
  if (!GAS_WEBHOOK_URL) {
    console.warn('GAS Webhook URLが設定されていません。自動返信メールは送信されません。');
    return;
  }

  console.log('[GAS自動返信] 送信開始 -', data.email);

  try {
    const payload = {
      type: 'consultation',
      timestamp: new Date().toISOString(),
      // 会社情報
      companyName: data.companyName,
      department: data.department || '',
      position: data.position || '',
      employeeCount: employeeCountLabels[data.employeeCount] || data.employeeCount,
      // 担当者情報
      contactPerson: data.contactPerson,
      email: data.email,
      phone: data.phone,
      // 相談内容
      currentStatus: currentStatusLabels[data.currentStatus] || data.currentStatus,
      consultationContent: data.consultationContent,
      preferredDate: data.preferredDate || '',
      howDidYouKnow: howDidYouKnowLabels[data.howDidYouKnow] || data.howDidYouKnow || '',
    };

    const response = await fetch(GAS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GAS自動返信の送信に失敗しました:', response.status, response.statusText, errorText);
    } else {
      console.log('[GAS自動返信] 送信成功');
    }
  } catch (error) {
    console.error('GAS自動返信エラー:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ConsultationFormData = await request.json();

    // バリデーション
    const requiredFields = [
      { field: 'companyName', message: '会社名は必須です' },
      { field: 'contactPerson', message: 'ご担当者名は必須です' },
      { field: 'email', message: 'メールアドレスは必須です' },
      { field: 'phone', message: '電話番号は必須です' },
      { field: 'employeeCount', message: '従業員数は必須です' },
      { field: 'currentStatus', message: 'AI活用状況は必須です' },
      { field: 'consultationContent', message: 'ご相談内容は必須です' },
    ];

    for (const { field, message } of requiredFields) {
      if (!data[field as keyof ConsultationFormData]) {
        return NextResponse.json(
          { error: message },
          { status: 400 }
        );
      }
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // プライバシーポリシー同意チェック
    if (!data.privacyAgreed) {
      return NextResponse.json(
        { error: 'プライバシーポリシーへの同意が必要です' },
        { status: 400 }
      );
    }

    // 開発環境ではコンソールに出力
    if (process.env.NODE_ENV === 'development') {
      console.log('========== 無料相談申込受信 ==========');
      console.log('会社名:', data.companyName);
      console.log('担当者:', data.contactPerson);
      console.log('メール:', data.email);
      console.log('従業員数:', employeeCountLabels[data.employeeCount]);
      console.log('AI活用状況:', currentStatusLabels[data.currentStatus]);
      console.log('相談内容:', data.consultationContent);
      console.log('=====================================');
    }

    // Slack通知とGAS自動返信を並行して実行
    await Promise.all([
      sendSlackNotification(data).catch(error => {
        console.error('Slack通知の送信でエラーが発生しました:', error);
      }),
      sendAutoReplyViaGAS(data).catch(error => {
        console.error('GAS自動返信の送信でエラーが発生しました:', error);
      }),
    ]);

    // 成功レスポンス
    return NextResponse.json(
      { 
        success: true,
        message: '無料相談のお申し込みを受け付けました' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Consultation form error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
