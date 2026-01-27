# GEMINI.md

This file provides guidance to Gemini when working with code in this repository.

## プロジェクト概要

AIリブート事業のWebサイト - Next.js 15 (App Router) を使用したモダンなWebアプリケーション

### 技術スタック
- **Framework**: Next.js 15.4.2 (App Router)
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.17
- **Animation**: Framer Motion 12.23.6
- **Font**: Noto Sans JP, Inter

## 開発コマンド

```bash
# 開発サーバー起動 (http://localhost:3000)
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start

# リント実行
npm run lint

# 型チェック (package.jsonに未定義のため手動実行)
npx tsc --noEmit
```

## アーキテクチャ概要

### ディレクトリ構造
```
app/                    # Next.js App Router
├── layout.tsx         # ルートレイアウト (Header/Footer含む)
├── page.tsx           # ホームページ
├── academy/           # アカデミー事業ページ
├── corporate/         # 法人向け事業ページ
└── test/              # テストページ

components/
├── ui/                # 汎用UIコンポーネント
│   ├── Button.tsx     # カスタムボタン
│   ├── Card.tsx       # カードコンポーネント
│   └── GradientText.tsx # グラデーションテキスト
├── layout/            # レイアウトコンポーネント
├── sections/          # ページセクション (複数バージョンあり)
├── academy/           # アカデミー専用コンポーネント
├── corporate/         # 法人向け専用コンポーネント
├── home/              # ホームページ専用コンポーネント
└── effects/           # ビジュアルエフェクト

docs/                   # ドキュメント (整理済み)
├── 01-project/        # プロジェクト管理
├── 02-design/         # デザイン関連
├── 03-content/        # コンテンツ
├── 04-development/    # 開発ドキュメント
├── 05-operations/     # 運用ドキュメント
├── 06-archives/       # アーカイブ
└── 07-assets/         # アセット
```

### 主要な設計パターン

1. **コンポーネント構成**
   - 複数バージョンのコンポーネント存在 (Hero, HeroNew, HeroReborn等)
   - サービス別の専用コンポーネント (academy/, corporate/)

2. **スタイリングアプローチ**
   - Tailwind CSS のユーティリティクラス使用
   - カスタムテーマ設定 (tailwind.config.ts)
   - Will ブランドカラー: will-primary, will-secondary等
   - カスタムアニメーション: gradient-shift, organic-float等

3. **ルーティング**
   - App Router使用
   - `/` - ホーム
   - `/academy` - アカデミー事業
   - `/corporate` - 法人向け事業

## 開発時の注意事項

### Tailwindカスタム設定
プロジェクト独自の設定が多数存在:
- **カラー**: `will-*` プレフィックスのカスタムカラー
- **グラデーション**: `will-gradient`, `growth-gradient`, `harmony-gradient`, `aurora`
- **アニメーション**: `gradient-shift`, `organic-float`, `pulse-glow`, `thought-emerge`
- **シャドウ**: `subtle`, `soft`, `elevated`, `floating`, `glow`

### TypeScript設定
- Strict mode 有効
- パスエイリアス: `@/*` でルートディレクトリ参照

### 現在の制約
- テストフレームワーク未設定
- フォーマッター未設定 (Prettier等)
- CI/CD パイプライン未構築

## プロジェクト固有のルール

1. **ドキュメント更新時**
   - 既存のドキュメントの構成やスタイルを参考にしてください。

2. **デザイン作成時**
   - `docs/02-design/` 以下のデザイン関連ドキュメントを参考にしてください。

3. **コンポーネント作成時**
   - 既存コンポーネントのパターンを踏襲してください。
   - サービス別コンポーネントは適切なディレクトリに配置してください。

## 関連ドキュメント

### プロジェクトドキュメント構成
- `/docs/README.md` - ドキュメント一覧とガイド
- `/docs/01-project/` - プロジェクト管理文書
  - `overview.md` - プロジェクト概要
  - `sitemap.md` - サイトマップ
  - `site-concept.md` - サイトコンセプト
- `/docs/02-design/` - デザイン関連文書
  - `brand-guidelines.md` - ブランドガイドライン
  - `design-system.md` - デザインシステム
  - `improvements/` - 改善提案
- `/docs/03-content/` - コンテンツ文書
  - `pages/` - 各ページのコンテンツ
  - `messaging/` - メッセージング戦略
- `/docs/04-development/` - 開発文書（今後追加予定）
- `/docs/05-operations/` - 運用文書
  - `design-check-report.md` - デザインチェックレポート
- `/docs/06-archives/` - アーカイブ文書
- `/docs/07-assets/` - アセット類
  - `images/` - 画像素材
  - `presentations/` - プレゼンテーション資料

### その他の重要文書
- `README.md` - 基本的なセットアップ手順

## カスタムスキル（デザイン関連）

デザイン作業時は `.gemini/skills/` 配下のスキルを参照してください。

| スキル | パス | 用途 |
|--------|------|------|
| **Radical Design** | `.gemini/skills/radical-design/SKILL.md` | Anti-Averageなデザイン、日本的美学のデジタル翻訳 |
| **Typography** | `.gemini/skills/typography/SKILL.md` | 日本語・英語両対応のタイポグラフィ |
| **Hero Design** | `.gemini/skills/hero-design/SKILL.md` | ヒーローセクション設計、LCP最適化 |

