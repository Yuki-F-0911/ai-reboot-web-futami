# /ai-topics 設計書（ファイルベース運用）

最終更新: 2026-03-04（レビュー反映）  
対象: `ai-reboot-web`（Next.js App Router）

## 0. レビュー反映サマリ
- `/ai-topics` は **TypeScriptファイルベース運用** を採用する。
- 参照コンポーネントの実在を確認済み:
  - `components/seo/StructuredData.tsx` (`ArticleStructuredData`, `BreadcrumbStructuredData`)
  - `components/blog/LineCtaBox.tsx`
- 既存実装との整合を明記:
  - `app/sitemap.ts` は静的配列 + 動的生成の混在構成。`/ai-topics` 追加方針を追記。
  - `lib/analytics.ts` の `lineRegisterClick(source: string)` はすでに任意 source 文字列を受け取れるため、初期は拡張不要。
- 抜けていた要件を追記:
  - Markdown文字列 (`content`) の描画方式（`marked` + `dangerouslySetInnerHTML`）と安全対策。
  - `AiTopicArticle` 周辺の TypeScript 型定義を明文化。
  - OG画像生成の既存基盤（`lib/og-image.tsx` + `opengraph-image.tsx`）の利用方針。
  - 週次運用での `index.ts` 手動更新を段階的に自動化する方針。
  - HTML/Markdown混在リスク、記事増加時のビルド時間リスクへの対処。

---

## 1. 要件定義

### 1.1 URL設計
- 一覧: `/ai-topics`
- 詳細: `/ai-topics/[id]`
- 補助導線（任意。初期リリース対象外）:
  - タグ一覧: `/ai-topics/tag/[tag]`
  - RSS: `/ai-topics/feed.xml`

### 1.2 記事データモデル（必須）
`AiTopicArticle` で以下を管理する。

- `id: string`（URL slug）
- `title: string`
- `summary: string`（一覧/description/OG共用。120-160字目安）
- `content: string`（Markdown文字列）
- `contentFormat: "markdown"`（初期は markdown 固定）
- `thumbnail: { url: string; width: number; height: number }`
- `publishedAt: string`（ISO 8601）
- `updatedAt: string`（ISO 8601）
- `tags: string[]`（表示用）
- `classification`
  - `cadence: "weekly" | "monthly"`
  - `period: string`（例: `2026-W10` / `2026-03`）
  - `topics: string[]`（例: `["chatgpt", "workflow", "policy"]`）
- `relatedLinks`
  - `blogSlugs?: string[]`
  - `glossarySlugs?: string[]`
- `seo`
  - `ogTitle?: string`
  - `ogDescription?: string`
  - `ogImagePath?: string`（未指定時はサイト共通OG）
- `meta`
  - `sourceNote?: string`（情報確認日の明記など）
  - `draft?: boolean`（true は公開対象外）

### 1.3 コンテンツ管理方式（採用）
- 採用: `data/ai-topics/articles/*.ts` に1記事1ファイル
- 集約: `data/ai-topics/index.ts`（初期は明示export）
- 理由:
  - 既存構成（静的TS/TSX）と整合
  - 型安全・レビュー容易
  - Gitベースの週次更新に適合

### 1.4 SEO要件
- 一覧・詳細ともに `generateMetadata` 実装
- 詳細ページ:
  - `title`, `description`
  - `openGraph`（画像/公開日/更新日）
  - `twitter` card
  - `alternates.canonical`
- 構造化データ:
  - `ArticleStructuredData`
  - `BreadcrumbStructuredData`
- RSS:
  - `/ai-topics/feed.xml`（最新50件）
- サイトマップ:
  - `/ai-topics`
  - `/ai-topics/[id]`

### 1.5 JSON-LD `@type` 方針（既存統一）
- 既存 `ArticleStructuredData` は内部で `ArticleJsonLd` を呼び、現在 `@type` は `Article` 固定。
- 初期実装は **`Article` で統一**（既存 academy/blog と整合）。
- `BlogPosting` を使う場合は、先に `components/blog/ArticleJsonLd.tsx` を拡張して `@type` 可変化する。

### 1.6 ISR / キャッシュ方針
- `export const revalidate = 3600`（一覧/詳細/RSS）
- 詳細は `dynamicParams = false` + `generateStaticParams`
- 注意:
  - コンテンツソースがリポジトリ内のため、更新反映はデプロイ前提
  - ISRは再生成頻度制御用途。運用は「週次更新 -> デプロイ」

---

## 2. アーキテクチャ設計

### 2.1 ファイル構成
```text
app/(site)/ai-topics/
  page.tsx
  [id]/page.tsx
  feed.xml/route.ts
  # 必要になったら:
  # [id]/opengraph-image.tsx

app/api/ai-topics/
  route.ts                     # 「もっと見る」採用時のみ

components/aiTopics/
  AiTopicsListClient.tsx
  AiTopicArticle.tsx
  AiTopicsSidebar.tsx
  AiTopicsTagChips.tsx

data/ai-topics/
  index.ts
  articles/
    2026-03-04-weekly-ai-news.ts
    2026-03-11-weekly-ai-news.ts
    ...

types/
  ai-topic.ts

lib/
  ai-topics.ts                 # 取得/検索/関連記事判定
  ai-topics-markdown.ts        # Markdown描画ヘルパー
  ai-topics-tag-helper.ts      # タグ・分類ヘルパー
```

### 2.2 データソース定義
- 主要データソース: `data/ai-topics/articles/*.ts`
- 一覧表示ソース: `getAllAiTopics()` の戻り値を `publishedAt desc` でソート
- `人気タグ` のソース: 全記事 `tags` の集計（PV起点ではなくコンテンツ起点）
- `関連記事` のソース:
  - 1次: `classification.topics` 一致
  - 2次: `cadence` 一致
  - 3次: `publishedAt` 新しい順
- sitemap / RSS ソース: 同一 `getAllAiTopics()` を利用（別管理禁止）

### 2.3 TypeScript 型定義（明文化）
`types/ai-topic.ts` は以下を定義する。

```ts
export type AiTopicCadence = "weekly" | "monthly";
export type AiTopicContentFormat = "markdown";

export type AiTopicClassification = {
  cadence: AiTopicCadence;
  period: string;
  topics: string[];
};

export type AiTopicRelatedLinks = {
  blogSlugs?: string[];
  glossarySlugs?: string[];
};

export type AiTopicArticle = {
  id: string;
  title: string;
  summary: string;
  content: string;
  contentFormat: AiTopicContentFormat;
  thumbnail: { url: string; width: number; height: number };
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  classification: AiTopicClassification;
  relatedLinks?: AiTopicRelatedLinks;
  seo?: {
    ogTitle?: string;
    ogDescription?: string;
    ogImagePath?: string;
  };
  meta?: {
    sourceNote?: string;
    draft?: boolean;
  };
};
```

### 2.4 Markdown描画方式（既存実装準拠）
- 採用: 既存 `components/blog/BlogArticle.tsx` / `components/news/NewsDetail.tsx` に合わせて `marked` を利用。
- レンダリング:
  - `marked.parse(content)` -> HTML
  - React側は `dangerouslySetInnerHTML`
- 追加安全策（必須）:
  - 記事データ中の raw HTML (`<script>`, `iframe` など) は禁止
  - `lib/ai-topics-markdown.ts` で HTMLトークン検出時に build エラー
  - 許可タグの方針を設計書内で固定（見出し/段落/リスト/表/リンク/画像）

### 2.5 `app/sitemap.ts` との整合
- 既存 `app/sitemap.ts` は:
  - `staticPages` 配列
  - academy blog のファイル探索
  - microCMS (`news`/`blog`)
  - glossary
  を結合して返却する構成。
- `/ai-topics` 追加時は同構成を崩さず、以下を追加:
  - `aiTopicsIndexPage`
  - `aiTopicDetailPages`（`updatedAt` を `lastModified` に使用）

---

## 3. コンポーネント設計

### 3.1 一覧ページ
- ページ: `app/(site)/ai-topics/page.tsx`
- 構成:
  - Hero（更新頻度と価値の説明）
  - 最新記事リスト（カード）
  - `cadence` 切替チップ（週次/月次）
  - トピックタグチップ
  - 「もっと見る」（必要時のみ `app/api/ai-topics`）

### 3.2 詳細ページ
- ページ: `app/(site)/ai-topics/[id]/page.tsx`
- 構成:
  - `AiTopicArticle`（本文、タグ、公開日/更新日）
  - サイドバー（関連記事、人気タグ、内部導線）
  - CTA（本文中1回 + 末尾1回）
- 再利用する既存部品:
  - `ArticleStructuredData`
  - `BreadcrumbStructuredData`
  - `LineCtaBox`
  - `ArticleShareButtons`（必要時）

### 3.3 データ量増加を見越した設計
- 一覧用データは `content` を使わない（カード表示用に軽量化）
- `getAiTopics()` は `limit/offset` を受ける
- 初期はSSR/SSGで十分。記事数が増えたら API ロードモア導入

---

## 4. SEO・コンテンツマーケ要件

### 4.1 OG画像方針
- 初期:
  - `ogImagePath` 未指定時は既存の共通OG（`/opengraph-image`）を使用
- 拡張:
  - 記事ごとOGが必要になったら `app/(site)/ai-topics/[id]/opengraph-image.tsx` を追加
  - 生成は既存 `lib/og-image.tsx` の `createOgImage` を再利用

### 4.2 内部リンク戦略
- 記事末尾に「次に読む」を標準搭載
  - `/academy/blog` 関連 2件
  - `/glossary` 関連用語 2件
- 本文中リンク:
  - 専門用語初出 -> `/glossary/[slug]`
  - 実践文脈 -> `/academy/blog/[slug]`

### 4.3 LINE CTA・計測
- 既存 `LineCtaBox` を使用
- 配置:
  - 本文 60-70% で1回
  - 末尾で1回
- 計測:
  - `trackEvent.lineRegisterClick(source)` を利用
  - 初期 source: `ai_topics_mid_cta`, `ai_topics_end_cta`
  - `lib/analytics.ts` の改修は不要（`source: string` 既存対応）

---

## 5. 実装フェーズ計画

### Phase 1: 型とデータ基盤
1. `types/ai-topic.ts`
2. `data/ai-topics/articles/*.ts`（初期3-5本）
3. `data/ai-topics/index.ts`
4. `lib/ai-topics.ts`
5. `lib/ai-topics-markdown.ts`
6. `lib/ai-topics-tag-helper.ts`

### Phase 2: 一覧/詳細ルート
1. `app/(site)/ai-topics/page.tsx`
2. `app/(site)/ai-topics/[id]/page.tsx`
3. `components/aiTopics/AiTopicsListClient.tsx`
4. `components/aiTopics/AiTopicArticle.tsx`
5. `components/aiTopics/AiTopicsSidebar.tsx`

### Phase 3: SEO/配信
1. `app/(site)/ai-topics/feed.xml/route.ts`
2. `app/sitemap.ts`（`/ai-topics` + 詳細）
3. `app/robots.ts`（基本変更不要。確認のみ）

### Phase 4: 運用補助
1. `scripts/generate-ai-topics-index.mjs`（任意。index自動生成）
2. `app/api/ai-topics/route.ts`（ロードモア採用時のみ）
3. CTA位置・内部リンク最終調整

---

## 6. 変更対象ファイル一覧（概要）

| ファイル | 種別 | 変更概要 |
|---|---|---|
| `types/ai-topic.ts` | 新規 | 型定義 |
| `data/ai-topics/articles/*.ts` | 新規 | 記事データ |
| `data/ai-topics/index.ts` | 新規 | 記事集約 |
| `lib/ai-topics.ts` | 新規 | 取得/検索 |
| `lib/ai-topics-markdown.ts` | 新規 | Markdown描画/検証 |
| `lib/ai-topics-tag-helper.ts` | 新規 | タグ判定 |
| `app/(site)/ai-topics/page.tsx` | 新規 | 一覧 |
| `app/(site)/ai-topics/[id]/page.tsx` | 新規 | 詳細 |
| `components/aiTopics/*` | 新規 | UI群 |
| `app/(site)/ai-topics/feed.xml/route.ts` | 新規 | RSS |
| `app/sitemap.ts` | 変更 | サイトマップ追加 |
| `scripts/generate-ai-topics-index.mjs` | 新規（任意） | 手動更新削減 |

---

## 7. 運用フロー（週次）
1. `data/ai-topics/articles/` に新規記事を追加
2. 初期運用:
   - `data/ai-topics/index.ts` に export 追加
3. 記事本数が増えたら（目安: 30件以上）:
   - `scripts/generate-ai-topics-index.mjs` で index 自動更新へ移行
4. 必須チェック:
   - `npm run lint`
   - `npx tsc --noEmit`
   - `npm run build`
5. デプロイ後チェック:
   - `/ai-topics`
   - `/ai-topics/feed.xml`
   - `/sitemap.xml` に `ai-topics` URLが含まれること
   - LINE CTAクリックで `line_register_click` が発火すること

---

## 8. リスクと対処

### 8.1 `content` の Markdown/HTML 混在リスク
- リスク:
  - `marked` + `dangerouslySetInnerHTML` では生HTMLが混入するとXSS面で危険
- 対処:
  - 記事データは Markdown 専用（raw HTML 禁止）
  - `lib/ai-topics-markdown.ts` で HTMLトークン検出時に build fail
  - 将来 HTML許可が必要なら `react-markdown + rehype-sanitize` へ移行検討

### 8.2 記事増加時のビルド時間リスク
- リスク:
  - 記事数増加で `generateStaticParams`/sitemap/feed 生成時間が増える
- 対処:
  - 一覧は軽量データ中心に処理
  - 記事本数増加時に index 自動生成でヒューマンエラーを削減
  - 100件超でビルド時間を再測定し、必要なら ISR中心運用に切替

---

## 9. 受け入れ条件（Definition of Done）
- `/ai-topics` 一覧と `/ai-topics/[id]` 詳細が表示される
- 詳細に `ArticleStructuredData` / `BreadcrumbStructuredData` / `LineCtaBox` が適用される
- `/ai-topics/feed.xml` が最新50件を返す
- `/sitemap.xml` に `/ai-topics` と詳細URLが含まれる
- `npm run lint` / `npx tsc --noEmit` / `npm run build` が通る
- 週次運用手順が「手動でも回る / 将来自動化可能」の両立になっている
