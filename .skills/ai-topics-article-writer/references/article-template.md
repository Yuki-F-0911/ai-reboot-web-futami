# Article Template

## TypeScript ファイルテンプレート

ファイル名: `data/ai-topics/articles/{YYYY-MM-DD}-weekly-ai-news.ts`

```typescript
import type { AiTopicArticle } from '@/types/ai-topic'

export const weeklyAiNews{YYYYMMDD}: AiTopicArticle = {
  id: '{YYYY-MM-DD}-weekly-ai-news',
  // title: SEO/AIO向けフォーマット → 「{メイントピック1}・{メイントピック2}など — 生成AI週報（{YYYY}年{M}月{D}日）」
  // 例: 「GPT-5.3新機能・EU AI法 など — 生成AI週報（2026年3月4日）」
  // ルール: ① エンティティ名（製品・企業・法律）を先頭に ② 日付は年月日で明示 ③「今週」は使わない
  title: '{メイントピック1}・{メイントピック2}など — 生成AI週報（{YYYY}年{M}月{D}日）',
  summary: '{120〜160字の要約。OGPのdescriptionにも使う}',
  content: `{Markdown本文}`,
  contentFormat: 'markdown',
  thumbnail: {
    url: '/images/ogp-default.webp',
    width: 1200,
    height: 630,
  },
  publishedAt: '{YYYY-MM-DD}T09:00:00+09:00',
  updatedAt: '{YYYY-MM-DD}T09:00:00+09:00',
  tags: ['{タグ1}', '{タグ2}', '{タグ3}', '{タグ4}'],
  classification: {
    period: '{YYYY-W{NN}}',   // 例: 2026-W11
    topics: ['{topic1}', '{topic2}', '{topic3}'],  // 英語lowercase
  },
  relatedLinks: {
    blogSlugs: ['{academy-blog-slug-1}', '{academy-blog-slug-2}'],
    glossarySlugs: ['{glossary-slug-1}', '{glossary-slug-2}'],
  },
  seo: {
    // ogTitle: title の短縮版（60字以内）。カバー画像のタイトルにも使われる
    // 例: 「GPT-5.3・EU AI法など：生成AI週報 2026/3/4」
    ogTitle: '{メイントピック}など：生成AI週報 {YYYY}/{M}/{D}',
    ogDescription: '{120字以内のOG説明文}',
  },
  meta: {
    sourceNote: '情報確認日: {YYYY-MM-DD}',
    // ⛔ draft: true は設定禁止。設定すると記事が完全非表示になる
  },
}
```

## Markdown 本文テンプレート

```markdown
## 今週の要点

{リード文：今週のAIトレンドを2〜3文で俯瞰。「なぜ今週重要か」を一文で締める。}

---

### 1. {トピック名}

{200〜400字の解説。}
- {ポイント1}
- {ポイント2}
- {ビジネスへの示唆}

> 出典: [{ソース名}]({URL})（{確認日}）

---

### 2. {トピック名}

{同上}

---

### 3. {トピック名}

{同上}

---

## 今週の実践アクション（3つ）

1. {具体的・すぐできる行動1}
2. {具体的・すぐできる行動2}
3. {具体的・すぐできる行動3}

## 次に読む

- 関連記事: [記事タイトル](/academy/blog/{slug})
- 基礎用語: [{用語名}](/glossary/{slug})
```

## 変数置換ルール

| 変数 | 例 |
|---|---|
| `{YYYY-MM-DD}` | `2026-03-11` |
| `{YYYYMMDD}` | `20260311` |
| `{YYYY}` | `2026` |
| `{M}` | `3` |
| `{N}` | `2`（第N週、月初から数える） |
| `{NN}` | `11`（ISO 週番号、ゼロ埋め） |
| topics | `chatgpt`, `claude`, `llm`, `policy`, `workflow`, `image-gen`, `voice`, `agent`, `multimodal` など英語 lowercase |

## index.ts 更新ルール

```typescript
// 先頭の import 群に追加
import { weeklyAiNews{YYYYMMDD} } from '@/data/ai-topics/articles/{YYYY-MM-DD}-weekly-ai-news'

// aiTopicsArticleSource 配列の先頭に追加（新しい記事を先頭へ）
const aiTopicsArticleSource: AiTopicArticle[] = [
  weeklyAiNews{YYYYMMDD},  // ← 追加
  // 既存エントリはそのまま残す
]
```
