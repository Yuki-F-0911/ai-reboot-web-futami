# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
└── effects/           # ビジュアルエフェクト
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
   - `.cursor/rules/project-design.mdc` のルールに従う
   - 更新時は「============Rulesを確認============」と宣言

2. **デザイン作成時**
   - `prompts/design-agent.md` のプロンプトに従う

3. **コンポーネント作成時**
   - 既存コンポーネントのパターンを踏襲
   - サービス別コンポーネントは適切なディレクトリに配置

## 関連ドキュメント

- `/docs/` - プロジェクトドキュメント
- `README.md` - 基本的なセットアップ手順
- `project-config.yaml` - プロジェクト設定
- `.cursor/rules/project-design.mdc` - ドキュメント更新ルール