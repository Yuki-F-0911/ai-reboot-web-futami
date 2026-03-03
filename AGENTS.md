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
