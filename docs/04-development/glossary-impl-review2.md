---
title: "生成AI用語集 実装コード再レビュー（第2回）"
reviewed_by: "Codex (GPT-5)"
reviewed_at: "2026-02-25"
target_scope:
  - "types/glossary.ts"
  - "data/glossary.ts"
  - "app/glossary/page.tsx"
  - "app/glossary/[slug]/page.tsx"
  - "components/glossary/GlossaryCard.tsx"
  - "components/glossary/RelatedTerms.tsx"
  - "components/glossary/categoryUtils.ts"
status: "complete"
author: "さかもと"
---

# ============Rulesを確認============

## ✅ 解消済み

- MUST #2（CTAの3本柱反映）は解消。`/Users/mocchalera/Dev/ai-reboot-web/app/glossary/page.tsx:171`-`173` と `/Users/mocchalera/Dev/ai-reboot-web/app/glossary/[slug]/page.tsx:185` で、**生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境** を含む文言になっている。
- SHOULD #1（カテゴリ表示ロジック共通化）は解消。`/Users/mocchalera/Dev/ai-reboot-web/components/glossary/categoryUtils.ts:1` が新規追加され、`/Users/mocchalera/Dev/ai-reboot-web/components/glossary/GlossaryCard.tsx:3` と `/Users/mocchalera/Dev/ai-reboot-web/app/glossary/[slug]/page.tsx:6` から共通参照されている。
- SHOULD #2（主要用語の相互リンク補完）は解消。`/Users/mocchalera/Dev/ai-reboot-web/data/glossary.ts:16`（llm→gpt/rag/agent）、`:45`（gpt→llm/prompt）、`:103`（prompt→gpt）、`:132`（rag→llm/agent）、`:306`（agent→llm/rag）を確認。
- SHOULD #3（`getAllGlossaryTerms()` の防御的コピー）は解消。`/Users/mocchalera/Dev/ai-reboot-web/data/glossary.ts:876`-`877` で `return [...glossaryTerms];` に修正されている。

## ❌ 未解消・新規問題

- MUST #1 は未解消。`/Users/mocchalera/Dev/ai-reboot-web/data/glossary.ts:126` と `:129` に「最新情報」が残っており、時点依存表現の除去要件（「最新版」「現在の〜」等の排除）を満たしていない。

## 総評

**追加修正が必要**。  
MUSTのうち1件（時点依存表現）が残っているため、本番投入判定には未達。
