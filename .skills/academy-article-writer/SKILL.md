---
name: academy-article-writer
description: |
  AIリブートアカデミーブログ（/academy/blog）に新記事を追加するスキル。slug と主KWを受け取り、事前リサーチ（一次情報/SNS実声/ファクトチェック）→構成案→本文執筆→コード実装（3ファイル）まで完走する。
  Use when: 「記事を書いて」「ブログ記事を追加」「academy/blogにslugを実装」と言われたとき。
metadata:
  version: "1.1"
  project: "ai-reboot-web"
  language: "ja"
---

# Academy Article Writer

AIリブートアカデミーブログの新記事を、slug と主KW から構成案・本文・コード実装まで一貫して生成するスキル。

## Reference Files

詳細仕様は `references/` を **必要に応じて** 読み込む。

- [project-structure.md](references/project-structure.md) — ファイル構成・コードテンプレート
- [writing-rules.md](references/writing-rules.md) — 文体ルール・AIスロップ禁止表現・E-E-A-T
- [quality-checklist.md](references/quality-checklist.md) — 公開前チェックリスト（SEO/AIO/LINE CTA/根拠確認）

## 入力（必須）

- **slug**: 例 `dify-beginner-guide`
- **主KW**: 例 `Dify 使い方`
- **サブKW**（任意）: 2〜4個
- **ターゲット層**: 法人 / 個人 / 学習者

## Workflow

```
Phase 0: リサーチ・ファクトチェック
  → 一次情報（公式ドキュメント/公的資料/一次統計）を最低3件収集
  → SNS・コミュニティ上の実利用者の声を3〜5件収集（肯定/懸念/つまずきが偏らないように）
  → 主要主張を Claim 単位で分解し、2ソース以上で照合
  → 変動しやすい情報（料金/仕様/制度/数値）は確認日（YYYY-MM-DD）を明記
  → 不確実情報は `[要確認: ...]` として残す
  → docs/article-research-{slug}.md に出力

Phase 1: 構成案生成
  → ペルソナ・検索意図・H2×6/H3×3 の見出し構成
  → AIO対応（各H2が自己完結）・内部リンク3本・LINE CTA 配置
  → FAQSchema Q&A 5〜7問
  → docs/article-draft-{slug}.md に出力

Phase 2: 本文執筆
  → 5,000〜8,000字、専門家視点で記述
  → Phase 0 の一次情報と実利用者の声を反映（個人情報/固有IDは出さずに要約）
  → references/writing-rules.md を参照して文体チェック

Phase 3: コード実装（3ファイル同時生成）
  → app/academy/blog/{slug}/page.tsx
  → components/academyLanding/blog/{slug}/{PascalCase}Page.tsx
  → app/academy/blog/page.tsx の blogPosts 配列に追記
  → references/project-structure.md のテンプレを使用
```

## 成果物

- `docs/article-research-{slug}.md`（一次情報・SNS実声・ファクトチェック記録）
- `docs/article-draft-{slug}.md`（構成案）
- 上記 3 ファイル（コード実装）

## 必須制約：アカデミーCTA ポジショニング

記事末尾のアカデミー誘導CTAは **references/writing-rules.md の「アカデミーCTA ポジショニング（CRITICAL）」を必ず参照**すること。

要点:
- アカデミーは「3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と学ぶ環境）」を提供する場
- 記事テーマのツール（Dify・RAG・Python・Power Automate等）の操作/実装を教える場所**ではない**
- CTAタイトル・本文から「〜の活用方法を体系的に学べる」「ツール操作を習得」「実装できる力」等の表現を**排除する**
