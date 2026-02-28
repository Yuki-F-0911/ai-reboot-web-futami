---
title: "生成AI用語集 設計書レビュー"
reviewed_by: "Claude Code"
reviewed_at: "2026-02-25"
target_doc: "docs/04-development/glossary-design.md"
status: "complete"
---

# 生成AI用語集 設計書レビュー

## ✅ 問題なし

- **SSG + ローカルデータ方式**は適切。`data/static-news.ts` の既存パターンと一致しており、API依存なしでビルド時生成できる
- **App Router ルーティング設計**（`app/glossary/page.tsx` + `app/glossary/[slug]/page.tsx`）は Next.js 15 の規約に沿っている
- **`generateStaticParams` の言及**が正しく、既存のダイナミックルートパターンと整合する
- **`GlossaryTerm` 型定義**（slug / term / reading / summary / description / relatedSlugs / sources / updatedAt）は過不足なく設計されている
- **DefinedTerm JSON-LDの最低プロパティ**（`@context`, `@type`, `name`, `description`, `inDefinedTermSet`, `url`）は AIO 対策として妥当
- **冒頭定義文と JSON-LD の説明文を一致させる**方針は AIO（AI Overview）クロール対策として効果的
- **出典ポリシーの優先順位**（公式 → arXiv/論文 → Wikipedia）は信頼性担保として十分
- **「〜とは」スタイルガイドライン**（結論先出し → なぜ必要か → 具体例）は初心者向けコンテンツとして実用的
- **相互リンク原則**（A→B かつ B→A）は内部リンク評価上有効
- **Phase 1〜3 の論理的な優先順序**（基本ページ → フィルタ → ブログ連携）は適切

---

## ⚠️ 改善推奨（SHOULD）

### SEO・メタデータ設計

- **Open Graph / og:image が未定義**
  - 既存の `what-is-rag/page.tsx` では `openGraph.images` を設定している。用語集個別ページも OGP 画像設定を `generateMetadata` に含めること
  - 修正案: `openGraph: { images: [{ url: pageOgImageUrl, width: 1200, height: 630 }] }` を設計書に追記

- **canonical URL の言及がない**
  - 既存記事はすべて `alternates.canonical` を設定している。用語集も設定必須
  - 修正案: 5.1 に `canonical: ${baseUrl}/glossary/${slug}` を追記

- **keywords メタ**の記載がない
  - 既存記事は `keywords` 配列でロングテール語をカバーしている
  - 修正案: 各用語の keywords は `["${term}とは", "${term} わかりやすく", "${term} 意味"]` のひな型を設計書に示す

- **sitemap の changeFrequency / priority が未指定**
  - 5.2 には「sitemap 生成対象に追加」とあるが値が書かれていない
  - 推奨値: `/glossary` → priority 0.8 / weekly、`/glossary/[slug]` → priority 0.7 / monthly（`updatedAt` を lastModified に使う）

### コンテンツ品質

- **`description` フィールドのフォーマット（テキスト or HTML or Markdown）が未定義**
  - レンダリング実装に影響するため型定義と合わせて明示すること
  - 推奨: Markdown 文字列（`marked` など既存ライブラリで変換）

- **詳細解説の最低文字数が未定義**
  - SEO 観点では 500 文字以上推奨。「2〜3段落」だけでは実装者によってブレる
  - 修正案: 記事フォーマットテーブルに「詳細解説: 500文字以上・3段落」を追記

- **Phase 1 で公開する 30 件の用語リストが未定義**
  - 完了条件が「30件すべてで詳細ページが生成される」だが、どの30件かが不明
  - 修正案: 設計書または別ファイル（`data/glossary-initial-terms.md`）に候補リストを記載する

### 実装設計

- **クライアントサイド検索の実装方式が未指定**（Phase 2）
  - SSG + クライアント検索の場合、Fuse.js 等のライブラリ選定とバンドルサイズへの影響を明記すること
  - 推奨: Phase 2 に「`Fuse.js` または `minisearch` を採用し、ビルド時に検索インデックスを JSON 出力する」と追記

- **`relatedSlugs` の参照整合性チェックが未言及**
  - A→B を設定しても B が存在しない場合、内部リンク切れが発生する
  - 修正案: Phase 1 完了条件に「ビルド時に `relatedSlugs` に含まれる slug がすべてデータ内に存在することを検証するスクリプトを実行する」を追記

- **Phase 3 の計測指標（遷移率・回遊率）の実装手段が未定義**
  - 「追える状態になっている」だけでは完了条件が曖昧
  - 修正案: GA4 イベント名を指定する（例: `glossary_to_blog_click`、`glossary_related_term_click`）か、既存アナリティクス設定への統合方法を記載する

---

## ❌ 修正必須（MUST）

### 1. sitemap.ts への統合方法が不十分

**問題:**
設計書 5.2 に「用語追加時に sitemap が自動更新される構成にする」とあるが、**実現方法が記述されていない**。

現在の `app/sitemap.ts` を確認すると:
- 静的ページは手動で配列に追加（`staticPages`）
- `academy/blog` の動的スラッグは **ファイルシステムスキャン**（`getAppRouteSlugs` 関数）で取得している

`/glossary/[slug]` はダイナミックルートのため、**ファイルシステムスキャンでは自動検出できない**。
`data/glossary.ts` からデータをインポートしてマッピングする実装が必要。

**修正案:** 設計書 5.2 に以下を追記する。

```ts
// app/sitemap.ts に追加するコード例
import { glossaryTerms } from "@/data/glossary";

const glossaryIndexPage: MetadataRoute.Sitemap = [
  { url: `${baseUrl}/glossary`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
];

const glossaryDetailPages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
  url: `${baseUrl}/glossary/${term.slug}`,
  lastModified: new Date(term.updatedAt),
  changeFrequency: "monthly",
  priority: 0.7,
}));
```

この実装例を設計書の 5.2 か 3.4 に明記すること。

---

### 2. `category` 表記の不一致

**問題:**
設計書内で同じカテゴリの表記が2通り存在している。

- 2.2 の記事フォーマットテーブル: `法務/倫理`（スラッシュ）
- 3.2 の TypeScript 型定義: `"法務・倫理"`（中点）

TypeScript の Union 型はリテラル一致で機能するため、どちらかに統一しないとデータと型が食い違う。

**修正案:**
`"法務・倫理"` に統一し（技術文書での中点が標準的）、2.2 のテーブルも `法務・倫理` に修正する。

---

### 3. `not-found.tsx` が「任意」になっている

**問題:**
3.1 に `app/glossary/[slug]/not-found.tsx（任意）` とあるが、実装しない場合は存在しないスラッグへのアクセスで Next.js のデフォルト 404 ページが表示される。

- **UX**: ブランドと無関係な 404 ページになる
- **SEO**: 404 ページへのクロール時、/glossary のサイト構造が正しく伝わらない

`generateStaticParams` を使用している場合、ビルド時に生成されないスラッグへのアクセスは `not-found.tsx` か `dynamicParams = false` の設定で制御する必要がある。

**修正案:**
- `not-found.tsx` を **必須** に変更する
- 合わせて `app/glossary/[slug]/page.tsx` に `export const dynamicParams = false;` を追記することを明記する（未知スラッグへのアクセスを自動 404 にする）

---

## 総評

設計書全体の完成度は **70点 / 100点** 程度。

**優れている点:**
- コンテンツ品質への配慮（出典ポリシー・スタイルガイドライン）が具体的で実用的
- AIO 対策（JSON-LD と本文の一致）を意識した設計
- Phase 分割の論理性

**主要な不足点:**
- `sitemap.ts` への統合方法（MUST #1）が最大のリスク。これが未定義のまま実装すると、Phase 1 完了後も用語ページがサイトマップに反映されない可能性がある
- `not-found.tsx` の必須化（MUST #3）は実装者が見落としやすいため早期対応が必要
- カテゴリ表記不一致（MUST #2）はデータ投入前に修正が必要

**推奨する次ステップ:**
1. MUST 3件を設計書に反映する（30分以内）
2. Phase 1 の初期30件リストを別ファイルで作成する
3. `data/glossary.ts` の型定義と空のデータ配列をファイル作成し、sitemap.ts への組み込みを実装から検証する
