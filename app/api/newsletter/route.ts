import { NextRequest, NextResponse } from 'next/server';

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

interface NewsletterFormData {
  email: string;
  source?: string; // どのページから登録したか
}

async function sendSlackNotification(data: NewsletterFormData) {
  if (!SLACK_WEBHOOK_URL) {
    console.warn('Slack Webhook URLが設定されていません');
    return;
  }

  const blocks = [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '📧 メルマガ登録がありました',
        emoji: true,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*メールアドレス:*\n${data.email}`,
        },
        {
          type: 'mrkdwn',
          text: `*登録ページ:*\n${data.source ?? '不明'}`,
        },
      ],
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `📅 ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`,
        },
      ],
    },
  ];

  await fetch(SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      blocks,
      text: `メルマガ登録: ${data.email}`,
    }),
  });
}

export async function POST(request: NextRequest) {
  try {
    const data: NewsletterFormData = await request.json();

    if (!data.email) {
      return NextResponse.json({ error: 'メールアドレスは必須です' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: '有効なメールアドレスを入力してください' }, { status: 400 });
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[Newsletter] 登録:', data.email, 'source:', data.source);
    }

    await sendSlackNotification(data).catch((err) => {
      console.error('Slack通知エラー:', err);
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: 'サーバーエラーが発生しました' }, { status: 500 });
  }
}
