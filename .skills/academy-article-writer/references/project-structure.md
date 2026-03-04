# プロジェクト構造とコードテンプレート

## ファイル構成

```
ai-reboot-web/
├── app/academy/blog/
│   ├── page.tsx                          # blogPosts 配列に追記
│   └── {slug}/page.tsx                   # 新規作成
├── components/academyLanding/blog/
│   └── {slug}/{PascalCase}Page.tsx       # 新規作成
└── public/images/blog/{slug}/slide-01.png
```

## page.tsx テンプレート

既存記事 `what-is-generative-ai/page.tsx` を読んでそのまま踏襲すること。
必須要素:
- `Metadata`（title 60字以内、description 120〜160字、keywords 4〜6個）
- `ArticleStructuredData`, `BreadcrumbStructuredData`, `FAQStructuredData`
- `publishedTime` / `modifiedTime`（JST）
- `faqItems` 配列（5〜7問、`as const`）

## コンポーネント主要クラス

| 用途 | クラス名 |
|---|---|
| H2見出し | `blog-h2` |
| H3見出し | `blog-h3` |
| 段落 | `blog-p` |
| リスト | `blog-ul` / `blog-ol` / `blog-li` |
| 比較テーブル | `blog-table` |
| LINEボタン | `line-cta-button` |
| CTAボックス | `blog-cta-box` |
| 内部リンク | `blog-link` |

既存コンポーネント（例: `WhatIsGenerativeAiPage.tsx`）を読んでクラス・構造を踏襲すること。

## blogPosts 追記

```typescript
{
  slug: "{slug}",
  title: "{記事タイトル（日本語）}",
  summary: "{1〜2文のサマリー}",
  category: "AI基礎知識" | "実務活用" | "資格・スキル" | "キャリア・転職" | "法人向け",
  thumbnail: "/images/blog/{slug}/slide-01.png",
},
```
