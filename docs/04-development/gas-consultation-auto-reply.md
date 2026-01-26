# GAS 無料相談申込 自動返信設定ガイド

このドキュメントでは、法人向け無料相談フォームの自動返信メール機能をGoogle Apps Script (GAS)で実装する方法を説明します。

## 概要

フォーム送信時に、以下のフローで自動返信メールが送信されます：

1. ユーザーがフォームを送信
2. Next.js API (`/api/consultation`) がリクエストを受信
3. APIがGAS Webhookにデータを送信
4. GASが自動返信メールを申込者に送信
5. （オプション）GASがスプレッドシートにデータを記録

## 環境変数の設定

`.env.local` または `.env.production` に以下を追加：

```env
# GAS Webhook URL（無料相談フォーム用）
GAS_CONSULTATION_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

## GASスクリプトの作成

### 1. 新しいGoogle Apps Scriptプロジェクトを作成

1. [Google Apps Script](https://script.google.com) にアクセス
2. 「新しいプロジェクト」をクリック
3. プロジェクト名を「AI Reboot 無料相談自動返信」などに設定

### 2. スクリプトコード

以下のコードを `Code.gs` に貼り付けてください：

```javascript
/**
 * AI Reboot 法人向け無料相談 - 自動返信スクリプト
 */

// 設定
var CONFIG = {
  SENDER_NAME: 'AIリブート研修事務局',
  NOTIFICATION_EMAIL: 'info@ai-reboot.io',
  SPREADSHEET_ID: '',
  SHEET_NAME: '無料相談申込'
};

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    sendAutoReplyEmail(data);
    if (CONFIG.SPREADSHEET_ID) {
      recordToSpreadsheet(data);
    }
    if (CONFIG.NOTIFICATION_EMAIL) {
      sendNotificationEmail(data);
    }
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: '自動返信メールを送信しました'
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('Error:', error);
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendAutoReplyEmail(data) {
  var subject = '【AIリブート研修】無料相談のお申し込みありがとうございます';
  var body = data.contactPerson + ' 様\n\n' +
    'この度は、AIリブート研修の無料相談にお申し込みいただき、\n' +
    '誠にありがとうございます。\n\n' +
    '以下の内容でお申し込みを受け付けました。\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '■ お申し込み内容\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '【会社情報】\n' +
    '会社名: ' + data.companyName + '\n' +
    '部署名: ' + (data.department || '未入力') + '\n' +
    '役職: ' + (data.position || '未入力') + '\n' +
    '従業員数: ' + data.employeeCount + '\n\n' +
    '【ご担当者情報】\n' +
    'お名前: ' + data.contactPerson + '\n' +
    'メールアドレス: ' + data.email + '\n' +
    '電話番号: ' + data.phone + '\n\n' +
    '【ご相談内容】\n' +
    '現在のAI活用状況: ' + data.currentStatus + '\n\n' +
    'ご相談内容:\n' + data.consultationContent + '\n\n' +
    'ご希望の相談日時: ' + (data.preferredDate || '特になし') + '\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '担当者より2営業日以内にご連絡いたします。\n' +
    'しばらくお待ちくださいますようお願い申し上げます。\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    'AIリブート研修事務局\n' +
    '株式会社ウィルフォワード\n\n' +
    'Email: info@ai-reboot.io\n' +
    'Web: https://ai-reboot.io/corporate\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '※ このメールは自動送信されています。';

  GmailApp.sendEmail(data.email, subject, body, {
    name: CONFIG.SENDER_NAME
  });
  console.log('Auto-reply email sent to:', data.email);
}

function sendNotificationEmail(data) {
  var subject = '【新規申込】無料相談 - ' + data.companyName;
  var body = '新しい無料相談の申込がありました。\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '■ 申込者情報\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '【会社情報】\n' +
    '会社名: ' + data.companyName + '\n' +
    '部署名: ' + (data.department || '未入力') + '\n' +
    '役職: ' + (data.position || '未入力') + '\n' +
    '従業員数: ' + data.employeeCount + '\n\n' +
    '【ご担当者情報】\n' +
    'お名前: ' + data.contactPerson + '\n' +
    'メールアドレス: ' + data.email + '\n' +
    '電話番号: ' + data.phone + '\n\n' +
    '【ご相談内容】\n' +
    '現在のAI活用状況: ' + data.currentStatus + '\n\n' +
    'ご相談内容:\n' + data.consultationContent + '\n\n' +
    'ご希望の相談日時: ' + (data.preferredDate || '特になし') + '\n' +
    '知ったきっかけ: ' + (data.howDidYouKnow || '未入力') + '\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '申込日時: ' + new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }) + '\n\n' +
    '2営業日以内にご連絡をお願いします。';

  GmailApp.sendEmail(CONFIG.NOTIFICATION_EMAIL, subject, body, {
    name: 'AI Reboot System'
  });
  console.log('Notification email sent to:', CONFIG.NOTIFICATION_EMAIL);
}

function recordToSpreadsheet(data) {
  var spreadsheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
  
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
    sheet.appendRow([
      '申込日時', '会社名', '部署名', '役職', '従業員数',
      '担当者名', 'メールアドレス', '電話番号', 'AI活用状況',
      '相談内容', '希望日時', '知ったきっかけ', 'ステータス'
    ]);
    sheet.getRange(1, 1, 1, 13).setFontWeight('bold').setBackground('#f0f0f0');
  }
  
  sheet.appendRow([
    new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }),
    data.companyName,
    data.department || '',
    data.position || '',
    data.employeeCount,
    data.contactPerson,
    data.email,
    data.phone,
    data.currentStatus,
    data.consultationContent,
    data.preferredDate || '',
    data.howDidYouKnow || '',
    '未対応'
  ]);
  console.log('Data recorded to spreadsheet');
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'AI Reboot Consultation Auto-Reply Webhook is running'
  })).setMimeType(ContentService.MimeType.JSON);
}

function testAutoReply() {
  var testData = {
    companyName: 'テスト株式会社',
    department: '人事部',
    position: '部長',
    employeeCount: '101〜300名',
    contactPerson: 'テスト 太郎',
    email: 'test@example.com',
    phone: '03-1234-5678',
    currentStatus: '一部の社員が個人的に使用している',
    consultationContent: 'AI研修の導入を検討しています。',
    preferredDate: '平日10時〜17時希望',
    howDidYouKnow: 'Google等の検索'
  };
  sendAutoReplyEmail(testData);
  console.log('Test email sent!');
}
```

### 3. デプロイ手順

1. GASエディタで「デプロイ」→「新しいデプロイ」をクリック
2. 「種類の選択」で「ウェブアプリ」を選択
3. 設定：
   - 説明: 「無料相談自動返信」
   - 次のユーザーとして実行: 「自分」
   - アクセスできるユーザー: 「全員」
4. 「デプロイ」をクリック
5. 表示されたURLをコピー

### 4. 環境変数に設定

コピーしたURLを `.env.local` に設定：

```env
GAS_CONSULTATION_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

## スプレッドシート連携（オプション）

申込データをスプレッドシートに記録したい場合：

1. 新しいGoogleスプレッドシートを作成
2. URLからスプレッドシートIDをコピー
   - 例: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
3. GASスクリプトの `CONFIG.SPREADSHEET_ID` にIDを設定

## トラブルシューティング

### メールが送信されない

1. GASの実行ログを確認
2. Gmail送信の権限が承認されているか確認
3. 1日のメール送信上限（無料アカウント: 100通/日）に達していないか確認

### Webhookがエラーを返す

1. GASのデプロイが正しく行われているか確認
2. 「アクセスできるユーザー」が「全員」になっているか確認
3. GASの実行ログでエラー内容を確認

## セキュリティ考慮事項

- GAS Webhook URLは環境変数で管理し、コードにハードコードしない
- 本番環境ではIPアドレス制限やAPIキー認証の追加を検討
- 個人情報を含むスプレッドシートへのアクセス権限を適切に管理
