# GAS AX-1エントリー 自動返信設定ガイド

このドキュメントでは、AX-1戦略ブリーフィングのエントリーフォームからの自動返信メール機能をGoogle Apps Script (GAS)で実装する方法を説明します。

## 概要

フォーム送信時に、以下のフローで自動返信メールが送信されます：

1. ユーザーがエントリーフォームを送信
2. Next.js API (`/api/ax1-entry`) がリクエストを受信
3. APIがSlack通知とGAS Webhookにデータを送信（並行処理）
4. GASが自動返信メールを申込者に送信
5. （オプション）GASがスプレッドシートにデータを記録

## 環境変数の設定

`.env.local` または `.env.production` に以下を追加：

```env
# GAS Webhook URL（AX-1エントリーフォーム用）
GAS_AX1_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

## GASスクリプトの作成

### 1. 新しいGoogle Apps Scriptプロジェクトを作成

1. [Google Apps Script](https://script.google.com) にアクセス
2. 「新しいプロジェクト」をクリック
3. プロジェクト名を「AX-1 エントリー自動返信」などに設定

### 2. スクリプトコード

以下のコードを `Code.gs` に貼り付けてください：

```javascript
/**
 * AX-1 戦略ブリーフィング エントリー - 自動返信スクリプト
 */

// 設定
var CONFIG = {
  SENDER_NAME: 'AX1セミナー事務局',
  SENDER_EMAIL: 'katiko3751@gmail.com',  // テスト用（本番: ai-reboot@willforward.co.jp）
  NOTIFICATION_EMAIL: 'katiko3751@gmail.com',  // テスト用（本番: info@ai-reboot.io）
  SPREADSHEET_ID: '',  // スプレッドシートID（オプション）
  SHEET_NAME: 'AX-1エントリー'
};

/**
 * POSTリクエストを受け取るエンドポイント
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // 自動返信メールを送信
    sendAutoReplyEmail(data);
    
    // スプレッドシートに記録（設定されている場合）
    if (CONFIG.SPREADSHEET_ID) {
      recordToSpreadsheet(data);
    }
    
    // 管理者に通知メールを送信（設定されている場合）
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

/**
 * 申込者への自動返信メールを送信
 */
function sendAutoReplyEmail(data) {
  var subject = '【AX-1】エントリーを受け付けました - AIリブート';
  
  var body = data.name + ' 様\n\n' +
    'この度は、AX-1 AI戦略ブリーフィングにエントリーいただき、\n' +
    '誠にありがとうございます。\n\n' +
    '以下の内容でエントリーを受け付けました。\n' +
    '審査の上、参加可否をご連絡いたします。\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '■ エントリー内容\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '【基本情報】\n' +
    'お名前: ' + data.name + '\n' +
    '会社名: ' + data.companyName + '\n' +
    '役職: ' + data.position + '\n' +
    '従業員数: ' + data.employeeCount + '\n' +
    'メールアドレス: ' + data.email + '\n\n';
  
  // 任意項目を追加（入力されている場合）
  if (data.industry || data.aiUsageStatus || data.howDidYouKnow) {
    body += '【追加情報】\n';
    if (data.industry) {
      body += '業種: ' + data.industry + '\n';
    }
    if (data.aiUsageStatus) {
      body += 'AI活用状況: ' + data.aiUsageStatus + '\n';
    }
    if (data.howDidYouKnow) {
      body += '知ったきっかけ: ' + data.howDidYouKnow + '\n';
    }
    body += '\n';
  }
  
  body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '■ AX-1 開催概要\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '日時: 2026年2月18日（火）10:00〜19:00\n' +
    '会場: 東京都内（参加確定者に詳細をご連絡）\n' +
    '定員: 限定20名（審査制）\n' +
    '参加費: ¥50,000（税込）\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '審査結果は、数日以内にメールにてご連絡いたします。\n' +
    'しばらくお待ちくださいますようお願い申し上げます。\n\n' +
    'ご質問がございましたら、お気軽にご連絡ください。\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    'AX1セミナー事務局\n' +
    '株式会社ウィルフォワード\n\n' +
    'Email: ai-reboot@willforward.co.jp\n' +
    'Web: https://ai-reboot.io/corporate/ax1\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '※ このメールは自動送信されています。\n' +
    '※ 心当たりのない場合は、お手数ですがこのメールを削除してください。';

  GmailApp.sendEmail(data.email, subject, body, {
    name: CONFIG.SENDER_NAME,
    from: CONFIG.SENDER_EMAIL
  });
  
  console.log('Auto-reply email sent to:', data.email);
}

/**
 * 管理者への通知メールを送信
 */
function sendNotificationEmail(data) {
  var subject = '【AX-1 新規エントリー】' + data.companyName + ' - ' + data.name + '様';
  
  var body = '🚀 新しいAX-1エントリーがありました。\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '■ エントリー者情報\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '【基本情報】\n' +
    'お名前: ' + data.name + '\n' +
    '会社名: ' + data.companyName + '\n' +
    '役職: ' + data.position + '\n' +
    '従業員数: ' + data.employeeCount + '\n' +
    'メールアドレス: ' + data.email + '\n\n';
  
  if (data.industry || data.aiUsageStatus || data.howDidYouKnow) {
    body += '【追加情報】\n';
    if (data.industry) {
      body += '業種: ' + data.industry + '\n';
    }
    if (data.aiUsageStatus) {
      body += 'AI活用状況: ' + data.aiUsageStatus + '\n';
    }
    if (data.howDidYouKnow) {
      body += '知ったきっかけ: ' + data.howDidYouKnow + '\n';
    }
    body += '\n';
  }
  
  body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '申込日時: ' + new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }) + '\n\n' +
    '⚡ 審査の上、参加可否をご連絡してください。';

  GmailApp.sendEmail(CONFIG.NOTIFICATION_EMAIL, subject, body, {
    name: 'AX-1 System'
  });
  
  console.log('Notification email sent to:', CONFIG.NOTIFICATION_EMAIL);
}

/**
 * スプレッドシートにデータを記録
 */
function recordToSpreadsheet(data) {
  var spreadsheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
  
  // シートが存在しない場合は作成
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
    // ヘッダー行を追加
    sheet.appendRow([
      '申込日時', 'お名前', '会社名', '役職', '従業員数',
      'メールアドレス', '業種', 'AI活用状況', '知ったきっかけ',
      '審査ステータス', 'メモ'
    ]);
    // ヘッダーをスタイリング
    sheet.getRange(1, 1, 1, 11).setFontWeight('bold').setBackground('#1e3a5f').setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
  
  // データを追加
  sheet.appendRow([
    new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }),
    data.name,
    data.companyName,
    data.position,
    data.employeeCount,
    data.email,
    data.industry || '',
    data.aiUsageStatus || '',
    data.howDidYouKnow || '',
    '未審査',
    ''
  ]);
  
  console.log('Data recorded to spreadsheet');
}

/**
 * GETリクエスト用（動作確認用）
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'AX-1 Entry Auto-Reply Webhook is running',
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * テスト用関数 - 実際に自分にメールを送信してテスト
 * GASエディタから直接実行できます
 */
function testAutoReply() {
  var testData = {
    name: 'テスト 太郎',
    companyName: 'テスト株式会社',
    email: Session.getActiveUser().getEmail(),  // 自分のメールに送信
    position: '代表取締役',
    employeeCount: '11〜50名',
    industry: 'IT・テクノロジー',
    aiUsageStatus: '一部の社員が個人的に使用している',
    howDidYouKnow: 'SNS（X, Facebook, LinkedIn等）'
  };
  
  sendAutoReplyEmail(testData);
  console.log('Test email sent to:', testData.email);
}

/**
 * テスト用関数 - 管理者通知メールをテスト
 */
function testNotificationEmail() {
  var testData = {
    name: 'テスト 太郎',
    companyName: 'テスト株式会社',
    email: 'test@example.com',
    position: '代表取締役',
    employeeCount: '11〜50名',
    industry: 'IT・テクノロジー',
    aiUsageStatus: '一部の社員が個人的に使用している',
    howDidYouKnow: 'SNS（X, Facebook, LinkedIn等）'
  };
  
  sendNotificationEmail(testData);
  console.log('Test notification email sent!');
}
```

### 3. デプロイ手順

1. GASエディタで「デプロイ」→「新しいデプロイ」をクリック
2. 「種類の選択」で「ウェブアプリ」を選択
3. 設定：
   - 説明: 「AX-1エントリー自動返信」
   - 次のユーザーとして実行: 「自分」
   - アクセスできるユーザー: 「全員」
4. 「デプロイ」をクリック
5. 初回は権限の承認が必要です。「アクセスを承認」→ Googleアカウントを選択 → 「詳細」→「（安全ではないページ）に移動」→「許可」
6. 表示されたURLをコピー

### 4. 環境変数に設定

コピーしたURLを `.env.local` に設定：

```env
GAS_AX1_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

### 5. 動作確認

1. GASエディタで `testAutoReply` 関数を選択して実行
2. 自分のメールアドレスに自動返信メールが届くことを確認
3. `testNotificationEmail` 関数を実行して管理者通知メールを確認

## スプレッドシート連携（オプション）

エントリーデータをスプレッドシートに記録したい場合：

1. 新しいGoogleスプレッドシートを作成
2. URLからスプレッドシートIDをコピー
   - 例: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
3. GASスクリプトの `CONFIG.SPREADSHEET_ID` にIDを設定

スプレッドシートには以下の列が自動作成されます：
- 申込日時
- お名前
- 会社名
- 役職
- 従業員数
- メールアドレス
- 業種
- AI活用状況
- 知ったきっかけ
- 審査ステータス
- メモ

## 自動返信メールの内容

申込者には以下の情報を含むメールが送信されます：

1. **エントリー確認**
   - 入力された全項目の確認
2. **開催概要**
   - 日時・会場・定員・参加費
3. **今後の流れ**
   - 審査後に連絡する旨
4. **お問い合わせ先**

## Gmailエイリアス設定（送信元メールアドレスの設定）

`ai-reboot@willforward.co.jp` から送信するには、Gmailでエイリアスとして設定する必要があります。

### 設定手順

1. **Gmail設定を開く**
   - Gmail → 右上の歯車アイコン → 「すべての設定を表示」

2. **「アカウントとインポート」タブを選択**
   - 「名前」セクションを探す

3. **「他のメールアドレスを追加」をクリック**
   - 名前: `AX1セミナー事務局`
   - メールアドレス: `ai-reboot@willforward.co.jp`
   - 「エイリアスとして扱います」にチェック

4. **確認メールの認証**
   - 確認メールが送信されるので、リンクをクリックして認証

5. **GASで使用可能に**
   - 設定完了後、GASの `from` オプションで使用できるようになります

### 注意事項

- エイリアスが設定されていない場合、`from` オプションは無視され、デフォルトのGmailアドレスから送信されます
- Google Workspace（旧G Suite）の場合は、管理者による追加設定が必要な場合があります

## トラブルシューティング

### メールが送信されない

1. GASの実行ログを確認（表示→実行数）
2. Gmail送信の権限が承認されているか確認
3. 1日のメール送信上限（無料アカウント: 100通/日）に達していないか確認

### 送信元メールアドレスが変わらない

1. Gmailでエイリアスが正しく設定されているか確認
2. エイリアスの認証が完了しているか確認
3. `CONFIG.SENDER_EMAIL` の値が正確か確認

### Webhookがエラーを返す

1. GASのデプロイが正しく行われているか確認
2. 「アクセスできるユーザー」が「全員」になっているか確認
3. GASの実行ログでエラー内容を確認

### スプレッドシートに記録されない

1. `CONFIG.SPREADSHEET_ID` が正しく設定されているか確認
2. スプレッドシートへのアクセス権限があるか確認

## セキュリティ考慮事項

- GAS Webhook URLは環境変数で管理し、コードにハードコードしない
- 本番環境ではIPアドレス制限やAPIキー認証の追加を検討
- 個人情報を含むスプレッドシートへのアクセス権限を適切に管理
- スプレッドシートは組織内のメンバーのみにアクセス権限を付与

## 更新履歴

| バージョン | 更新日 | 更新者 | 更新内容 |
|------------|--------|--------|----------|
| 1.0 | 2026-01-27 | - | 初版作成 |
