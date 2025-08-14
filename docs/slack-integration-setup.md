# Slack連携セットアップガイド

お問い合わせフォームの内容をSlackに通知する設定手順です。

## 1. Slack Webhook URLの取得

### 方法1: Incoming Webhooksアプリを使用（推奨・簡単）

1. **Slack Appディレクトリにアクセス**
   - Slackワークスペースにログイン
   - 左サイドバーの「その他」→「アプリ」をクリック
   - 「Appディレクトリを参照する」をクリック

2. **Incoming WebHooksアプリを追加**
   - 検索バーで「Incoming WebHooks」を検索
   - 「Incoming WebHooks」アプリを選択
   - 「Slackに追加」ボタンをクリック

3. **チャンネルを選択**
   - 通知を送信したいチャンネルを選択
   - 「Incoming Webhooks インテグレーションの追加」をクリック

4. **Webhook URLをコピー**
   - 設定画面に表示されるWebhook URLをコピー
   - 形式：`https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX`

### 方法2: カスタムアプリを作成（高度な設定が必要な場合）

1. **Slack API サイトにアクセス**
   - <https://api.slack.com/apps> にアクセス

2. **新しいアプリを作成**
   - 「Create New App」をクリック
   - 「From scratch」を選択
   - アプリ名を入力（例：「AIリブート問い合わせ通知」）
   - ワークスペースを選択

3. **Incoming Webhooksを有効化**
   - 左側メニューから「Incoming Webhooks」を選択
   - 「Activate Incoming Webhooks」をONに切り替え
   - ページ下部の「Add New Webhook to Workspace」をクリック
   - 通知を送信したいチャンネルを選択
   - 「許可する」をクリック

4. **Webhook URLをコピー**
   - 生成されたWebhook URLをコピー
   - 形式：`https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX`

## 2. 環境変数の設定

1. **`.env.local`ファイルを作成**

   ```bash
   cp .env.local.example .env.local
   ```

2. **Webhook URLを設定**
   `.env.local`ファイルを開き、コピーしたURLを設定：

   ```
   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX
   ```

## 3. 動作確認

1. **開発サーバーを再起動**

   ```bash
   npm run dev
   ```

2. **お問い合わせフォームからテスト送信**
   - <http://localhost:3000> にアクセス
   - お問い合わせフォームに必要事項を入力
   - 送信ボタンをクリック

3. **Slackチャンネルを確認**
   - 指定したチャンネルに通知が届いていることを確認

## 通知フォーマット

Slackに送信される通知は以下の情報を含みます：

### 個人のお客様の場合

- 種別（個人）
- 件名
- お名前
- メールアドレス
- 電話番号（任意）
- お問い合わせ内容
- 受信日時

### 法人のお客様の場合

- 種別（法人）
- 件名
- 会社名
- ご担当者名
- 部署（任意）
- 役職（任意）
- メールアドレス
- 電話番号（任意）
- 従業員数（任意）
- お問い合わせ内容
- 受信日時

## トラブルシューティング

### 通知が届かない場合

1. **環境変数の確認**
   - `.env.local`ファイルにWebhook URLが正しく設定されているか確認
   - URLの前後に余計なスペースがないか確認

2. **サーバーログの確認**
   - 開発サーバーのコンソールにエラーが出ていないか確認
   - 「Slack Webhook URLが設定されていません」という警告が出る場合は環境変数が読み込まれていない

3. **Webhook URLの有効性**
   - Webhook URLが無効化されていないか確認
   - Slackアプリの設定画面で確認可能

4. **ネットワーク環境**
   - 企業ネットワークなどでSlackへのアクセスが制限されていないか確認

### 「ボットユーザーがありません」エラーが出る場合

このエラーは、カスタムアプリを作成する際にボット機能を有効にしようとした場合に発生します。

**解決方法：**
- 方法1の「Incoming Webhooksアプリ」を使用してください（ボット不要）
- または、カスタムアプリの場合は「Incoming Webhooks」機能のみを使用し、ボット機能は使用しないでください

## セキュリティに関する注意事項

- `.env.local`ファイルは`.gitignore`に含まれているため、Gitにはコミットされません
- Webhook URLは外部に公開しないよう注意してください
- 本番環境では環境変数管理サービス（Vercel、Netlify等）を使用して安全に管理してください

## 本番環境での設定

### Vercelの場合

1. Vercelのダッシュボードにログイン
2. プロジェクトの「Settings」→「Environment Variables」
3. `SLACK_WEBHOOK_URL`を追加

### Netlifyの場合

1. Netlifyのダッシュボードにログイン
2. プロジェクトの「Site settings」→「Environment variables」
3. `SLACK_WEBHOOK_URL`を追加