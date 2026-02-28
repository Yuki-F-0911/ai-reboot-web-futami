---
title: "生成AI用語集 機能設計書"
version: "1.2"
last_updated: "2026-02-25"
author: "さかもと"
status: "draft"
related_docs:
  - "docs/README.md"
  - "docs/04-development/ai-reboot-academy-implementation-plan.md"
  - "docs/04-development/url-params-detailed-guide.md"
---

# 生成AI用語集 設計書

## 1. 概要・目的

### 1.1 目的
- 本機能は SEO/AIO 対策として「`〜とは`」系検索クエリの獲得を主目的とする。
- 生成AIに関する基礎用語を体系化し、検索流入からの最初の接点ページとして機能させる。
- 単なる辞書ではなく、初心者が次に学ぶべき関連用語へ遷移しやすい導線を設計する。

### 1.2 ターゲットユーザー
- 生成AIの情報収集を始めた初心者
- 業務活用を進める中級者（用語の再確認・比較が必要な層）

### 1.3 期待する効果
- 集客: ロングテール検索（例: 「RAGとは」「プロンプトエンジニアリングとは」）からの自然流入増加
- 認知向上: `AI Reboot` の専門性を用語レベルで継続接触させる
- 信頼性構築: 公式情報源・学術情報に基づく定義で、情報の正確性を担保する

## 2. コンテンツ要件

### 2.1 用語選定基準（50〜100件）
- 生成AI領域の主要概念を優先（LLM、RAG、エージェント、推論、評価、ガバナンス等）
- 検索意図が明確な「`〜とは`」クエリに対応できる語を優先
- 初学者がつまずきやすい専門語を含める
- ベンダー固有語だけに偏らず、汎用概念を中心に構成する
- 初期は 30件を公開し、Phaseごとに 50件、最終的に 100件近くまで拡張する

### 2.2 記事フォーマット
各用語ページは以下の項目を必須とする。

| 項目 | 必須 | 内容 |
|---|---|---|
| 用語名 | 必須 | 見出し表示名（例: Retrieval-Augmented Generation） |
| 読み | 必須 | 日本語読み（例: リトリーバル・オーグメンテッド・ジェネレーション） |
| スラッグ | 必須 | URL用識別子（例: `rag`） |
| 一文定義 | 必須 | 140文字以内で要点を説明 |
| 詳細解説 | 必須 | 仕組み、用途、注意点を初心者向けに解説 |
| 関連用語 | 必須 | 2〜6件。内部リンク化する |
| カテゴリ | 必須 | 基礎概念、モデル、実装、評価、法務・倫理など |
| 出典 | 必須 | 1次情報を優先した参照元（タイトル・URL・参照日） |
| 更新日 | 必須 | 内容更新日（ISO日付） |

### 2.3 出典ポリシー（信頼性）
- 優先順位1: 公式ドキュメント（OpenAI、Google、Anthropic、Meta、Microsoft 等）
- 優先順位2: 標準化/研究コミュニティ資料（arXiv、学会論文、技術レポート）
- 優先順位3: Wikipedia 等の二次情報（補足用途に限定）
- 1ページに最低1つの一次情報を含める
- 出典の記載形式を統一（`title`, `url`, `publisher`, `accessedAt`）

### 2.4 「〜とは」スタイルの解説ガイドライン
- 冒頭1文で結論を先に示す（「Xとは、YのためのZです。」）
- 2段落目で「なぜ必要か」を示す
- 3段落目で「具体例・ユースケース」を示す
- 難語を連続させず、用語が出るたびに短い補足を添える
- 断定が難しい内容は「一般的には」「代表例として」を明示する

## 3. アーキテクチャ設計

### 3.1 ルーティング
- 一覧: `/glossary`
- 個別: `/glossary/[slug]`
- App Router 構成案:
  - `app/glossary/page.tsx`
  - `app/glossary/[slug]/page.tsx`
- `app/glossary/[slug]/not-found.tsx`（**必須**）
- 各個別ページ（`app/glossary/[slug]/page.tsx`）に `export const dynamicParams = false;` を設定し、未定義スラッグへのアクセスを自動 404 にする

### 3.2 データ管理方式
- SSG前提でローカルデータを管理する
- 管理方式:
  - `data/glossary.ts`（単一ファイル管理）または
  - `data/glossary/`（用語単位分割。拡張時はこちらを推奨）
- 型定義例:

```ts
export type GlossarySource = {
  title: string;
  url: string;
  publisher: string;
  accessedAt: string; // YYYY-MM-DD
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  reading: string;
  category: "基礎概念" | "モデル" | "実装" | "評価" | "法務・倫理";
  summary: string; // 140文字以内
  description: string;
  relatedSlugs: string[];
  sources: GlossarySource[];
  updatedAt: string; // YYYY-MM-DD
};
```

### 3.3 コンポーネント設計
- `GlossaryList`: 一覧ページの全体レイアウトと検索結果表示
- `GlossaryCard`: 用語カード（名称、読み、短い定義、カテゴリ）
- `GlossaryDetail`: 個別ページ本文（定義、詳細、出典）
- `RelatedTerms`: 関連用語リンク群
- 補助コンポーネント（推奨）:
  - `GlossaryKanaIndex`: 50音インデックス
  - `GlossaryCategoryFilter`: カテゴリフィルタ
  - `GlossarySearchBox`: キーワード検索

### 3.4 SEO実装
- `generateMetadata` でページ単位の title/description を生成
- JSON-LD は `DefinedTerm` を基本採用
- FAQ形式の追記があるページのみ `FAQPage` を追加利用
- `generateStaticParams` により個別ページをビルド時に静的生成

## 4. 実装方針

### 4.1 パフォーマンス
- 一覧・詳細とも SSG を採用し、TTFBと安定性を優先
- 用語データをビルド時に読み込むことで API 依存をなくす

### 4.2 スタイリング
- Tailwind CSS で既存のデザインシステムに合わせる
- 一覧はカードUI、詳細は可読性を重視した本文レイアウトを採用

### 4.3 50音順インデックス + カテゴリフィルタ
- 50音インデックスで先頭文字ごとに絞り込む
- 英数字開始の用語は「英数」グループへ集約
- カテゴリフィルタは複合条件に対応（例: `基礎概念` + `評価`）

### 4.4 関連用語リンク
- `relatedSlugs` に基づき自動表示
- 相互リンク（A→B かつ B→A）を原則とする
- ページ末尾に「次に読む用語」を設置し回遊を促進する

## 5. SEO/AIO最適化方針

### 5.1 メタ情報
- `title`: `「{用語名}とは？わかりやすく解説｜AI Reboot」`
- `description`: 140文字以内で定義を簡潔に記述
- `alternates.canonical`: ``${baseUrl}/glossary/${slug}`` を設定
- `openGraph.images`: 共通OGP画像または用語専用OGP画像を設定（推奨: 1200x630）
- `hreflang`: 日本語のみ運用のため不要

### 5.2 サイトマップ
- `/glossary` と `/glossary/[slug]` を sitemap 生成対象に追加
- `/glossary/[slug]` はダイナミックルートのため、既存のファイルシステムスキャン（`getAppRouteSlugs`）では自動検出できない。`data/glossary.ts` から `glossaryTerms` をインポートしてマッピングすることで、用語追加時に sitemap が自動更新される。
- `app/sitemap.ts` への追加実装:

```ts
import { glossaryTerms } from "@/data/glossary";

// sitemap() 関数内に追加
const glossaryIndexPage: MetadataRoute.Sitemap = [
  { url: `${baseUrl}/glossary`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
];

const glossaryDetailPages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
  url: `${baseUrl}/glossary/${term.slug}`,
  lastModified: term.updatedAt,
  changeFrequency: "monthly",
  priority: 0.6,
}));

// return の配列に [...glossaryIndexPage, ...glossaryDetailPages] を追加する
```

### 5.3 JSON-LD（DefinedTerm）
- 各用語ページに `DefinedTerm` を出力
- 最低限含めるプロパティ:
  - `@context`, `@type`, `name`, `description`, `inDefinedTermSet`, `url`
- AIO対策として、冒頭定義文と JSON-LD の説明文の意味を一致させる

## 6. 実装フェーズ

### Phase 1: 基本ページ + 30件データ
- 範囲:
  - `/glossary` 一覧
  - `/glossary/[slug]` 詳細
  - 初期データ 30件
    - LLM
    - GPT
    - 生成AI
    - プロンプト
    - RAG
    - ファインチューニング
    - エンベディング
    - トークン
    - ハルシネーション
    - マルチモーダル
    - エージェント
    - CoT（Chain of Thought）
    - Few-shot学習
    - Zero-shot学習
    - RLHF
    - SFT
    - LoRA
    - 量子化
    - 推論
    - プロンプトエンジニアリング
    - システムプロンプト
    - コンテキストウィンドウ
    - Function Calling
    - ベクトルDB
    - セマンティック検索
    - AIガバナンス
    - バイアス
    - 評価指標（BLEU/ROUGE）
    - マルチエージェント
    - オーケストレーション
  - `generateMetadata` と `DefinedTerm` JSON-LD
- 完了条件:
  - 30件すべてで詳細ページが生成される
  - 内部リンク切れがない

### Phase 2: フィルタ・検索機能
- 範囲:
  - 50音インデックス
  - カテゴリフィルタ
  - キーワード検索（用語名・定義対象）
  - クライアントサイド検索ライブラリは `Fuse.js` を推奨（軽量・型定義あり）
- 完了条件:
  - 複数条件で期待通りに絞り込める
  - モバイル/PCで操作性が破綻しない

### Phase 3: 関連記事（ブログ）リンク
- 範囲:
  - 各用語に関連ブログ記事を紐づけ
  - 詳細ページ下部に関連記事導線を追加
- 完了条件:
  - 用語→記事、記事→用語の回遊導線が成立
  - 計測指標（遷移率・回遊率）を追える状態になっている
  - GA4 カスタムイベント（`glossary_view`、`glossary_link_click`）で計測できる

## 運用メモ

- 用語追加時は以下を同時更新する。
  - 用語データ
  - 関連用語リンク
  - sitemap 対象
  - 必要に応じて FAQ/ブログ関連付け
- 用語の定義更新時は `updatedAt` と出典参照日を更新する。

## 更新履歴

| バージョン | 更新日 | 更新者 | 更新内容 | 影響ドキュメント |
|---|---|---|---|---|
| 1.0 | 2026-02-25 | さかもと | 初版作成（生成AI用語集の設計方針を定義） | docs/04-development/glossary-design.md |
| 1.2 | 2026-02-25 | さかもと | レビュー指摘反映（sitemap統合方法、メタ情報補足、Phase要件具体化） | docs/04-development/glossary-design.md |
