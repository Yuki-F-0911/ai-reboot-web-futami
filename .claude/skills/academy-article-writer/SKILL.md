---
name: academy-article-writer
description: |
  AIリブートアカデミーブログ（/academy/blog）に新記事を追加するスキル。slug と主KWを受け取り、構成案→本文執筆→コード実装（3ファイル）まで完走する。
  Use when: 「記事を書いて」「ブログ記事を追加」「academy/blogにslugを実装」と言われたとき。
metadata:
  version: "1.0"
  project: "ai-reboot-web"
  language: "ja"
---

# Academy Article Writer

AIリブートアカデミーブログの新記事を、slug と主KW から構成案・本文・コード実装まで一貫して生成するスキル。

## Reference Files

詳細仕様は `references/` を **必要に応じて** 読み込む。

- [project-structure.md](references/project-structure.md) — ファイル構成・コードテンプレート
- [writing-rules.md](references/writing-rules.md) — 文体ルール・AIスロップ禁止表現・E-E-A-T
- [quality-checklist.md](references/quality-checklist.md) — 公開前チェックリスト（SEO/AIO/LINE CTA）

## 入力（必須）

- **slug**: 例 `dify-beginner-guide`
- **主KW**: 例 `Dify 使い方`
- **サブKW**（任意）: 2〜4個
- **ターゲット層**: 法人 / 個人 / 学習者

## Workflow

```
Phase 1: 構成案生成
  → ペルソナ・検索意図・H2×6/H3×3 の見出し構成
  → AIO対応（各H2が自己完結）・内部リンク3本・LINE CTA 配置
  → FAQSchema Q&A 5〜7問
  → docs/article-draft-{slug}.md に出力

Phase 2: 本文執筆
  → 5,000〜8,000字、専門家視点で記述
  → references/writing-rules.md を参照して文体チェック

Phase 3: コード実装（3ファイル同時生成）
  → app/academy/blog/{slug}/page.tsx
  → components/academyLanding/blog/{slug}/{PascalCase}Page.tsx
  → app/academy/blog/page.tsx の blogPosts 配列に追記
  → references/project-structure.md のテンプレを使用
```

## 成果物

- `docs/article-draft-{slug}.md`（構成案）
- 上記 3 ファイル（コード実装）
