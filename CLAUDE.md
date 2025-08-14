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
   - `.cursor/rules/project-design.mdc` のルールに従う
   - 更新時は「============Rulesを確認============」と宣言

2. **デザイン作成時**
   - `prompts/design-agent.md` のプロンプトに従う

3. **画像生成プロンプト作成時**
   - `prompts/image-prompt-engineer.md` のプロンプトに従う
   - 構造化YAML形式で詳細な画像生成プロンプトを設計

4. **コンポーネント作成時**
   - 既存コンポーネントのパターンを踏襲
   - サービス別コンポーネントは適切なディレクトリに配置

5. **作業ログの記録**
   - 重要な作業完了時に、このファイルの「AIの作業ログ」セクションに記録を残す
   - フォーマットに従って、実施内容・次回への申し送り・参考情報を記載
   - コンテキストを失わない開発のため、詳細かつ明確に記録

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
- `../project-config.yaml` - プロジェクト設定
- `../.cursor/rules/project-design.mdc` - ドキュメント更新ルール
- `../prompts/design-agent.md` - デザイン作成プロンプト
- `prompts/image-prompt-engineer.md` - 画像生成プロンプト作成プロンプト

---

## 📝 AIの作業ログ - コンテキストを失わない開発

### なぜ作業ログを残すのか？

**従来の問題：**
- AIとの会話が長くなると前の内容を忘れる
- 新しいセッションで一から説明し直し  
- チーム間でAIの作業内容が共有されない

**解決策：** AIに定期的にログを残してもらい、コンテキストを維持する

### 作業ログフォーマット

```markdown
## YYYY-MM-DD 作業ログ

### 実施内容
1. [作業項目1]
   - 具体的な実装内容
   - 採用した技術的判断
   - 変更したファイル
   
2. [作業項目2]
   - ...

### 次回への申し送り
- 未完了のタスク
- 検討事項
- 注意点

### 参考リンク・情報
- 関連Issue
- 参考にしたドキュメント
- 実装時の議論
```

---

## 2025-01-14 作業ログ

### 実施内容

1. **ヘッダー・フッターのロゴリンク修正**
   - `components/layout/Header.tsx`: ロゴリンクを `/academy` から `/` に変更
   - `components/layout/Footer.tsx`: 同様にトップページへのリンクに修正
   - 技術的判断: トップページが完成したため、正しいルーティングに更新

2. **MicroCMSマークダウン対応実装**
   - `lib/microcms.ts`: `md-content` フィールドを型定義に追加
   - `components/news/NewsDetail.tsx`: マークダウンレンダリング機能を実装
   - marked ライブラリのインストール（v15.0.6）
   - 技術的判断: md-contentがある場合は優先使用、なければ通常のHTMLコンテンツをフォールバック

3. **マークダウンスタイリング強化**
   - Tailwind CSS prose クラスを詳細にカスタマイズ
   - 見出し、リスト、引用、コードブロック、テーブルなど全要素に対応
   - GitHub Flavored Markdown（GFM）を有効化

### 次回への申し送り

- **パフォーマンス最適化**
  - マークダウンのサーバーサイドレンダリング検討
  - 大量のニュース記事がある場合のページネーション最適化

- **コンテンツ管理改善**
  - MicroCMSでのプレビュー機能実装
  - 画像アップロード機能の追加

### 参考情報

- markedライブラリ: https://marked.js.org/
- MicroCMS APIフィールド名の制限により `md-content` と命名（ハイフン使用）
- Tailwind Typography plugin のproseクラスをカスタマイズ

---

## 2025-01-04 作業ログ

### 実施内容

1. **FVノイズグリッチ演出の実装**
   - `components/effects/NoiseGlitch.tsx`: ノイズ・走査線・アーティファクトをCanvasで描画
   - `components/effects/GlitchText.tsx`: 文字単位のグリッチエフェクトコンポーネント
   - `components/home/QuietDialogue.tsx`: スクロール連動の5段階演出を追加
   - 技術的判断: Framer Motion + Canvas APIでパフォーマンスと表現力を両立

2. **演出の5つのフェーズ実装**
   - 第1段階（0-20%）: 混沌 - ノイズ最大、「AIに支配されるか」がグリッチ
   - 第2段階（20-40%）: 問いかけ - メッセージが「AIを支配するか」に切り替わる
   - 第3段階（40-60%）: 覚醒の予兆 - 両メッセージが明滅、「物語の主人公は」出現
   - 第4段階（60-80%）: 確信 - メッセージ巨大化、金色ハイライト
   - 第5段階（80-100%）: 静寂と力 - 完璧な静寂、明朝体で脈動

3. **コンセプトドキュメント作成**
   - `docs/02-design/improvements/fv-noise-glitch-concept.md`
   - ソクラテス式論法による5回の自問自答でコンセプトを練り上げ
   - 「情報のエントロピーが秩序へ収束する瞬間」を視覚化

### 次回への申し送り

- **パフォーマンス最適化**
  - Canvas描画のRAF最適化
  - モバイル版の軽量エフェクト実装
  - prefers-reduced-motion対応

- **演出の微調整**
  - 文字変化のタイミング調整
  - 重要単語の判定ロジック改善
  - 背景画像とのブレンド最適化

### 参考情報

- ユーザー要望: 「ノイズの中から立ち上がる演出」「タイポグラフィの芸術性」
- 技術選定: Framer Motion（既存）+ Canvas API（新規）
- 参考: グリッチアート、アニメ・漫画タイトルデザイン

---

## 2025-01-01 作業ログ

### 実施内容

1. **横スクロール問題の修正**
   - `app/globals.css`: body に `overflow-x-hidden` を追加
   - `app/layout.tsx`: main タグに `overflow-x-hidden` を追加
   - 原因: コンテナからはみ出る要素があったため

2. **トップページのUI修正**
   - `components/home/HomeHero.tsx`: 「WILL FORWARD × AI REBOOT」テキストを削除
   - ユーザーの要望に基づく変更

3. **ドキュメント構造の大規模整理**
   - 新しい階層構造を作成（7カテゴリ: プロジェクト、デザイン、コンテンツ、開発、運用、アーカイブ、アセット）
   - すべてのドキュメントを適切なフォルダに移動
   - ルートディレクトリのクリーンアップ実施
   - `docs/README.md` を作成してドキュメント一覧を提供

4. **CLAUDE.md の更新**
   - 新しいドキュメント構造を反映
   - 作業ログセクションを追加
   - プロジェクト固有のルールに「作業ログの記録」を追加

### 次回への申し送り

- **デザイン改善提案の実装**（`docs/02-design/improvements/design-improvement-proposal.md` 参照）
  - ビジュアルヒエラルキーの強化
  - インタラクティブ要素の実装
  - モバイル体験の向上
  
- **未設定の開発環境**
  - テストフレームワークの導入検討
  - Prettierなどのフォーマッター設定
  - CI/CDパイプラインの構築

- **コンテンツの更新**
  - `docs/03-content/messaging/core-message.md` が更新されている様子
  - `docs/03-content/pages/academy.md` も変更あり

### 参考情報

- デザイン改善提案書: `/docs/02-design/improvements/design-improvement-proposal.md`
- プロジェクト概要: `/docs/01-project/overview.md`
- ブランドガイドライン: `/docs/02-design/brand-guidelines.md`