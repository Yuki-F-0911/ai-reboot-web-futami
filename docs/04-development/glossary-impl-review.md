---
title: "生成AI用語集 実装コードレビュー"
reviewed_by: "Codex (GPT-5)"
reviewed_at: "2026-02-25"
target_scope:
  - "types/glossary.ts"
  - "data/glossary.ts"
  - "app/glossary/page.tsx"
  - "app/glossary/[slug]/page.tsx"
  - "app/glossary/[slug]/not-found.tsx"
  - "components/glossary/GlossaryCard.tsx"
  - "components/glossary/RelatedTerms.tsx"
  - "app/sitemap.ts"
status: "complete"
author: "さかもと"
---

# ============Rulesを確認============

## ✅ 問題なし

- 型定義は概ね適切。`GlossaryTerm` / `GlossarySource` の必須フィールド設計は要件に沿っている（`/Users/mocchalera/Dev/ai-reboot-web/types/glossary.ts:1`）。
- Next.js 15 の静的生成構成は正しい。`dynamicParams = false` と `generateStaticParams()` の組み合わせで未定義 slug の 404 化ができている（`/Users/mocchalera/Dev/ai-reboot-web/app/glossary/[slug]/page.tsx:7`、`:11`）。
- `generateStaticParams()` は 30件すべての slug を返していることを実測確認（30/30、欠落なし）。
- `generateMetadata()` で `title` / `description` / `alternates.canonical` / OGP / Twitter を個別ページに設定できている（`/Users/mocchalera/Dev/ai-reboot-web/app/glossary/[slug]/page.tsx:24-56` 相当）。
- DefinedTerm JSON-LD は必須プロパティを満たしている（`@context`, `@type`, `name`, `description`, `inDefinedTermSet`, `url`）（`/Users/mocchalera/Dev/ai-reboot-web/app/glossary/[slug]/page.tsx:75-86` 相当）。
- sitemap 統合は要件通り。`/glossary` と `/glossary/[slug]` を `data/glossary.ts` 起点で生成できている（`/Users/mocchalera/Dev/ai-reboot-web/app/sitemap.ts:185-194` 相当）。
- データ整合性チェック結果:
  - 用語件数: 30件
  - `relatedSlugs` 参照切れ: 0件
  - `summary` 140文字超過: 0件
  - 出典 URL 形式不正: 0件
  - 重複 slug: 0件
- `npx tsc --noEmit` は成功（型エラーなし）。

## ⚠️ 改善推奨（SHOULD）

- `categoryColorMap` が重複定義されており、片方の型安全性が弱い。
  - 該当: `/Users/mocchalera/Dev/ai-reboot-web/components/glossary/GlossaryCard.tsx:4`（`Record<GlossaryTerm["category"], string>`）
  - 該当: `/Users/mocchalera/Dev/ai-reboot-web/app/glossary/[slug]/page.tsx:59`（`Record<string, string>`）
  - 修正案: `types/glossary.ts` に `GlossaryCategory` を export し、`constants/glossary.ts` へ共通マップを集約。

- `relatedSlugs` の相互リンク原則（設計書 4.4）に未一致が多い（26件）。
  - 例: `gpt` が `prompt` と `rlhf` を関連に持つが、逆方向が未設定（`/Users/mocchalera/Dev/ai-reboot-web/data/glossary.ts:45`、`:103`、`:422`）。
  - 修正案: 片方向参照を許容する方針に設計書を更新するか、相互リンク自動検証スクリプトを追加してデータを同期。

- `getAllGlossaryTerms()` が内部配列をそのまま返しており、将来の誤変更に弱い。
  - 該当: `/Users/mocchalera/Dev/ai-reboot-web/data/glossary.ts:876-878` 相当
  - 修正案: `ReadonlyArray<GlossaryTerm>` を返す、または `return [...glossaryTerms]` にして防御的コピーを返す。

## ❌ 修正必須（MUST）

- 用語の正確性に時点依存の不整合がある（事実の陳腐化リスク）。
  - 該当: `/Users/mocchalera/Dev/ai-reboot-web/data/glossary.ts:39`（「GPT-4o等の最新版」）
  - 該当: `/Users/mocchalera/Dev/ai-reboot-web/data/glossary.ts:44`（「現在のGPT-4oは...」）
  - 問題: 「最新版」「現在」は更新が止まると誤情報化し、用語集の信頼性とSEO評価（E-E-A-T）を下げる。
  - 修正案: 時点を固定した表現に変更（例: 「2026年2月時点で公開されている主要モデルの一つ」）か、モデル名を一般化（「最新世代モデル」）して陳腐化を回避。

- アカデミー誘導CTA文言が、プロジェクトの必須3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境）を満たしていない。
  - 該当: `/Users/mocchalera/Dev/ai-reboot-web/app/glossary/page.tsx:171`
  - 該当: `/Users/mocchalera/Dev/ai-reboot-web/app/glossary/[slug]/page.tsx:189-192` 相当
  - 問題: 「AIスキル習得」単独訴求に寄っており、運用ルール（CRITICAL）違反。
  - 修正案: CTAコピーを3要素を含む表現へ変更（例: 実務スキル + 自己理解 + 仲間との学習環境を1セットで訴求）。

## 総評

**修正が必要**。

実装の骨格（型、ルーティング、SSG、metadata、JSON-LD、sitemap、データ整合性）は合格水準です。一方で、**時点依存の文言による正確性リスク**と**CTAの必須ポジショニング不一致**は公開前に解消すべきです。これら2点を直せば、品質・SEOともに本番投入可能です。
