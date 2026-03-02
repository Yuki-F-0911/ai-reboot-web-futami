/**
 * セミナー申込 Google Form → Slack 通知スクリプト
 *
 * 【設定手順】
 * 1. Slack App で Incoming Webhook URL を作成
 *    - https://api.slack.com/apps → Create New App → Incoming Webhooks
 *    - 通知先チャンネルを選択して Webhook URL を取得
 *
 * 2. Google Forms のスプレッドシートを開く
 *    - 拡張機能 → Apps Script
 *    - このコードを貼り付け
 *
 * 3. スクリプトプロパティを設定
 *    - Apps Script 画面左の ⚙ (プロジェクトの設定)
 *    - 「スクリプト プロパティ」→「プロパティを追加」
 *    - プロパティ名: SLACK_WEBHOOK_URL
 *    - 値: Slack Incoming Webhook の URL
 *
 * 4. トリガーを設定
 *    - Apps Script 画面左の ⏰ (トリガー)
 *    - 「トリガーを追加」
 *    - 関数: onFormSubmit
 *    - イベントの種類: フォーム送信時
 *    - 保存して権限を承認
 */

function onFormSubmit(e) {
  const responses = e.namedValues;
  const webhookUrl = PropertiesService.getScriptProperties().getProperty('SLACK_WEBHOOK_URL');

  if (!webhookUrl) {
    console.error('SLACK_WEBHOOK_URL が設定されていません');
    return;
  }

  const fields = Object.entries(responses)
    .map(([key, value]) => `*${key}:* ${value}`)
    .join('\n');

  const timestamp = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });

  const payload = {
    text: `📩 *セミナー申込がありました*\n\n${fields}\n\n_${timestamp}_`
  };

  try {
    UrlFetchApp.fetch(webhookUrl, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload)
    });
  } catch (error) {
    console.error('Slack通知の送信に失敗しました:', error);
  }
}
