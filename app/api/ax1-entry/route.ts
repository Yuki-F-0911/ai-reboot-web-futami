import { NextRequest, NextResponse } from 'next/server';

// Slack Webhook URL（環境変数から取得）
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
// GAS Webhook URL（環境変数から取得）- 自動返信用
const GAS_WEBHOOK_URL = process.env.GAS_AX1_WEBHOOK_URL;

interface AX1EntryFormData {
  // 必須項目
  name: string;
  companyName: string;
  email: string;
  position: string;
  employeeCount: string;
  // 任意項目
  industry?: string;
  aiUsageStatus?: string;
  howDidYouKnow?: string;
  entryType?: "ax1" | "ax1-special";
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
const aiUsageStatusLabels: Record<string, string> = {
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

// 業種のラベル変換
const industryLabels: Record<string, string> = {
  'it-tech': 'IT・テクノロジー',
  'manufacturing': '製造業',
  'finance': '金融・保険',
  'retail': '小売・卸売',
  'service': 'サービス業',
  'healthcare': '医療・ヘルスケア',
  'education': '教育・研修',
  'consulting': 'コンサルティング',
  'real-estate': '不動産',
  'construction': '建設・建築',
  'media': 'メディア・広告',
  'other': 'その他',
};

// Slack通知を送信する関数
async function sendSlackNotification(data: AX1EntryFormData) {
  if (!SLACK_WEBHOOK_URL) {
    console.warn('Slack Webhook URLが設定されていません');
    return;
  }

  console.log('[Slack通知] AX1エントリー - 送信開始');

  try {
    const requiresScreening = data.entryType !== "ax1-special";
    const blocks: Array<Record<string, unknown>> = [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '🚀 AX-1 戦略ブリーフィングへのエントリーがありました',
          emoji: true
        }
      },
      {
        type: 'divider'
      },
      // 基本情報
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*📋 基本情報*'
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*お名前:*\n${data.name}`
          },
          {
            type: 'mrkdwn',
            text: `*会社名:*\n${data.companyName}`
          }
        ]
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*メールアドレス:*\n${data.email}`
          },
          {
            type: 'mrkdwn',
            text: `*役職:*\n${data.position}`
          }
        ]
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*従業員数:*\n${employeeCountLabels[data.employeeCount] || data.employeeCount}`
          }
        ]
      },
    ];

    // 任意項目のセクション
    const optionalFields = [];
    
    if (data.industry) {
      optionalFields.push({
        type: 'mrkdwn',
        text: `*業種:*\n${industryLabels[data.industry] || data.industry}`
      });
    }
    
    if (data.aiUsageStatus) {
      optionalFields.push({
        type: 'mrkdwn',
        text: `*AI活用状況:*\n${aiUsageStatusLabels[data.aiUsageStatus] || data.aiUsageStatus}`
      });
    }

    if (optionalFields.length > 0) {
      blocks.push(
        {
          type: 'divider'
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*📊 追加情報*'
          }
        },
        {
          type: 'section',
          fields: optionalFields
        }
      );
    }

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
            text: `📅 受信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })} | ⚡ ${requiresScreening ? '審査後、参加可否をご連絡ください' : '参加案内のご連絡をお願いします'}`
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
        text: `AX-1エントリー: ${data.companyName} - ${data.name}様（${data.position}）`
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
async function sendAutoReplyViaGAS(data: AX1EntryFormData) {
  if (!GAS_WEBHOOK_URL) {
    console.warn('GAS Webhook URLが設定されていません。自動返信メールは送信されません。');
    return;
  }

  console.log('[GAS自動返信] AX1エントリー - 送信開始 -', data.email);

  try {
    const payload = {
      type: 'ax1-entry',
      timestamp: new Date().toISOString(),
      entryType: data.entryType ?? "ax1",
      // 必須項目
      name: data.name,
      companyName: data.companyName,
      email: data.email,
      position: data.position,
      employeeCount: employeeCountLabels[data.employeeCount] || data.employeeCount,
      // 任意項目
      industry: data.industry ? (industryLabels[data.industry] || data.industry) : '',
      aiUsageStatus: data.aiUsageStatus ? (aiUsageStatusLabels[data.aiUsageStatus] || data.aiUsageStatus) : '',
      howDidYouKnow: data.howDidYouKnow ? (howDidYouKnowLabels[data.howDidYouKnow] || data.howDidYouKnow) : '',
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
    const data: AX1EntryFormData = await request.json();

    // バリデーション - 必須項目
    const requiredFields = [
      { field: 'name', message: 'お名前は必須です' },
      { field: 'companyName', message: '会社名は必須です' },
      { field: 'email', message: 'メールアドレスは必須です' },
      { field: 'position', message: '役職は必須です' },
      { field: 'employeeCount', message: '従業員数は必須です' },
    ];

    for (const { field, message } of requiredFields) {
      if (!data[field as keyof AX1EntryFormData]) {
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

    // 開発環境ではコンソールに出力
    if (process.env.NODE_ENV === 'development') {
      console.log('========== AX-1エントリー受信 ==========');
      console.log('お名前:', data.name);
      console.log('会社名:', data.companyName);
      console.log('メール:', data.email);
      console.log('役職:', data.position);
      console.log('従業員数:', employeeCountLabels[data.employeeCount]);
      console.log('業種:', data.industry ? industryLabels[data.industry] : '未選択');
      console.log('AI活用状況:', data.aiUsageStatus ? aiUsageStatusLabels[data.aiUsageStatus] : '未選択');
      console.log('知ったきっかけ:', data.howDidYouKnow ? howDidYouKnowLabels[data.howDidYouKnow] : '未選択');
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
    const requiresScreening = data.entryType !== "ax1-special";
    return NextResponse.json(
      { 
        success: true,
        message: requiresScreening
          ? 'エントリーを受け付けました。審査の上、ご連絡いたします。'
          : 'エントリーを受け付けました。担当よりご連絡いたします。'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('AX1 entry form error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
