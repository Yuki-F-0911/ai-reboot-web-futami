# AGENTS.md

## Scope
- This file is the canonical agent context for this repository.
- Keep `CLAUDE.md` and `GEMINI.md` aligned as symlinks to this file.
- Apply these rules to coding, docs, and content tasks.
- When editing academy-facing copy (blog/LP/CTA/FAQ), always reflect all three pillars:
  - 生成AI活用力
  - 自己理解・キャリアデザイン
  - 仲間と共に学ぶ環境

## Required Commands
- Install: `npm install`
- Lint: `npm run lint`
- Typecheck: `npx tsc --noEmit`
- Build validation: `npm run build`
- Local dev (only when explicitly requested): `npm run dev`

## Hard Constraints
- Use `rg` for search/discovery.
- Do not start long-running background processes unless the user asks.
- Do not commit secrets, credentials, or API keys.
- Keep changes minimal and task-scoped; avoid unrelated refactors.
- For analytics-loop/report tasks, follow `.codex/skills/analytics-operations/SKILL.md` and store outputs under `docs/05-operations/analytics-reports/`.
- Avoid academy messaging that frames the offer as only “AIスキルを教えるスクール”.

## Skills
- Custom skills live in `.skills/` (the canonical location, Git-managed).
- `.claude/skills` is a symlink to `../.skills`; do not store skills directly there.
- To expose a skill to Claude Code globally, symlink: `~/.claude/skills/{name} → {repo}/.skills/{name}`.
- For /ai-topics weekly article tasks, follow `.skills/ai-topics-article-writer/SKILL.md`; new articles go in `data/ai-topics/articles/` and must be exported from `data/ai-topics/index.ts`.

## File Structure (Critical)
- Academy blog: ルートラッパーは `app/(site)/academy/blog/{slug}/page.tsx`（〜120行）
  - 実コンテンツは `components/academyLanding/blog/{slug}/{ComponentName}Page.tsx` が正
  - CTA有無の確認は必ずコンポーネントファイルで行うこと
- Glossary: 動的ルート `app/(site)/glossary/[slug]/page.tsx` の `shouldInsertLineCta` 変数でCTA制御
  - 現在の対象スラッグ: `ai-debate`, `anthropic-api`, `claude-code`

## Analytics Loop
- GA4 Property ID: `501149490`
- GAS Script ID: `1IXlD2VVaUv-by8BedcKLMwvFDcoTKRmOVL_kybl30p2Ig60p5JEMZhdF`
- Reports: `docs/05-operations/analytics-reports/` (YYYY-MM-DD-00.md 形式)
- GA4 Data API に `nextPagePath` ディメンションは存在しない（UA専用）
- autorun (9d1b67db): 12h間隔でマスターエージェントがanalytics-loopを自動実行

## Current KPIs (2026-03-23 時点)
- Sessions: 844/週 (+6.8% 週次成長中)
- Organic Search: 666/週 (CVR 0.24%, 目標2%)
- line_register_click: 2/週（目標5/週）
- Search Console: ❌ 403継続（3週連続、OAuth再認証必要）
- generative-ai-passport-guide scroll_25: 11.5%（悪化中。要FV改善）

## Task Workflow
- Locate target files quickly with `rg`.
- Implement the smallest valid patch first.
- Run required checks for changed scope: `npm run lint` and `npx tsc --noEmit`; run `npm run build` when routes/config/rendering are affected.
- Update docs only when behavior/policy changed.
- If agent context files are edited, keep this file concise and make linked files point here.

## Definition of Done
- Required commands for the touched scope pass.
- Diff is limited to task-relevant files.
- `CLAUDE.md` and `GEMINI.md` resolve to `AGENTS.md`.
- Output/content respects repository constraints above.
