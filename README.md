# AIリブート Webサイト

## 概要

ウィルフォワード社が提供する「AIリブート事業」の公式Webサイトです。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **フォント**: Noto Sans JP, Inter

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プロダクションモードでの起動
npm run start
```

開発サーバー起動後、[http://localhost:3000](http://localhost:3000) でサイトを確認できます。

## プロジェクト構造

```
ai-reboot-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   └── globals.css        # グローバルスタイル
├── components/            # Reactコンポーネント
│   ├── ui/               # 基本UIコンポーネント
│   ├── layout/           # レイアウトコンポーネント
│   └── sections/         # ページセクション
├── lib/                   # ユーティリティ
│   ├── utils/            # ユーティリティ関数
│   └── types/            # TypeScript型定義
├── public/               # 静的ファイル
│   └── images/           # 画像ファイル
└── styles/               # 追加スタイル
```

## ブランドガイドライン

### カラーパレット

- **メインカラー（グラデーション）**:
  - ピンク: `#FF4B8B`
  - パープル: `#9747FF`
  - ブルー: `#3B82F6`

### 主要コンポーネント

- **Button**: プライマリ、セカンダリ、テキストボタン
- **Card**: ホバーエフェクト付きカード
- **GradientText**: グラデーションテキスト
- **Header**: レスポンシブナビゲーション
- **Footer**: フッター情報

## 開発コマンド

```bash
# リント
npm run lint

# 型チェック
npm run type-check
```

## デプロイ

### Vercel

最も簡単なデプロイ方法は [Vercel Platform](https://vercel.com/new) を使用することです。

### その他のホスティング

Next.js対応の以下のサービスでもデプロイ可能：
- Netlify
- AWS Amplify
- Google Cloud Run
- Heroku

詳細は [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。