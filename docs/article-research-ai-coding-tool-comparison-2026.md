---
title: "記事リサーチ｜ai-coding-tool-comparison-2026"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-coding-tool-comparison-2026.md"
  - "app/academy/blog/ai-coding-tool-comparison-2026/page.tsx"
  - "components/academyLanding/blog/ai-coding-tool-comparison-2026/AiCodingToolComparison2026Page.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "docs/article-draft-ai-coding-tool-comparison-2026.md"
    - "app/academy/blog/ai-coding-tool-comparison-2026/page.tsx"
    - "components/academyLanding/blog/ai-coding-tool-comparison-2026/AiCodingToolComparison2026Page.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-coding-tool-comparison-2026

## 0. 調査条件
- 対象テーマ: `AIコーディングツール 比較 2026`
- 主KW: `AIコーディングツール 比較 2026`
- サブKW:
  - `Cursor vs Claude Code vs GitHub Copilot`
  - `Vibe Coding ツール`
  - `AI IDE 比較`
- ターゲット: 入門〜中級エンジニア（乗り換え検討含む）
- 確認日: `2026-02-20`
- 記事目的:
  - 2026年2月時点の3強（Cursor / Claude Code / GitHub Copilot）を、料金・機能・運用差で比較する
  - Vibe Coding対応力（非エンジニアにとっての扱いやすさ）を実務観点で整理する
  - GitHub Copilot Agent HQ（Claude+Codex統合）の最新発表内容を反映する

## 1. 一次情報（公式）ソース
1. [Cursor Pricing](https://www.cursor.com/pricing)
   - Hobby / Pro / Pro+ / Teams / Ultra の価格体系
2. [Cursor Changelog](https://cursor.com/changelog)
   - Agentの長時間タスク、Subagents、Skills、Background agent 等の更新履歴
3. [Cursor Docs: Maximum context mode](https://docs.cursor.com/en/context/max-mode)
   - 通常200kコンテキスト、Max modeで一部モデルは1M対応という説明
4. [Anthropic pricing](https://www.anthropic.com/pricing)
   - Claude Free / Pro / Max / Team の価格
5. [Anthropic Support: model selection in Claude Code](https://support.anthropic.com/en/articles/10187002-what-llm-models-does-claude-code-use)
   - Claude Codeで利用モデルを切り替える手順（`/model`）
6. [Anthropic Docs: Claude Code models](https://docs.anthropic.com/en/docs/claude-code/models)
   - `sonnet`, `opus`, `sonnet[1m]` などのモデルエイリアスと利用条件
7. [GitHub Copilot Plans](https://github.com/features/copilot/plans)
   - Free / Pro / Pro+ の価格、プレミアムリクエスト体系
8. [GitHub Docs: Plans for GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/plans-for-github-copilot)
   - Business `$19/user/month`、Enterprise `$39/user/month` 等
9. [GitHub Docs: Choosing the right AI model for your task](https://docs.github.com/en/copilot/concepts/about-ai-models-in-copilot)
   - Copilotで利用可能な複数モデル、モデル利用ポリシー
10. [GitHub Blog Changelog: Coding agent and Agent mode with MCP support](https://github.blog/changelog/2026-02-10-coding-agent-and-agent-mode-with-mcp-support-are-now-in-public-preview/)
    - 2026-02-10 公開、Agent HQ、Copilot coding agent、Claude/Codex統合に関する一次発表

## 2. SNS・コミュニティ実声（補助根拠）
1. [r/cursor: Copilot vs Cursor](https://www.reddit.com/r/cursor/comments/1gixm8e/copilot_vs_cursor/)
   - 肯定: Cursorは文脈把握とファイル横断編集が強いという声
2. [r/cursor: Why is everyone leaving Cursor?](https://www.reddit.com/r/cursor/comments/1jba3k9/why_is_everyone_leaving_cursor/)
   - 懸念: 価格・安定性・期待値ギャップに関する不満
3. [r/ClaudeAI: Is Claude Code Max really worth it?](https://www.reddit.com/r/ClaudeAI/comments/1mynlyb/is_claude_code_max_really_worth_it/)
   - 懸念: 高頻度利用時の費用対効果の個人差
4. [r/vibecoding: Curious to know what coding assistant everyone uses](https://www.reddit.com/r/vibecoding/comments/1m8a5qj/curious_to_know_what_coding_assistant_everyone/)
   - 肯定/比較: Vibe Coding用途でツール併用が一般化している実感
5. [r/GithubCopilot: Agent mode in VS Code](https://www.reddit.com/r/GithubCopilot/comments/1ij0p14/agent_mode_in_vs_code/)
   - つまずき: 初期設定と権限理解で混乱しやすい

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 2026-02-20時点のCursor主要価格は Pro `$20`、Pro+ `$60`、Teams `$40/user`、Ultra `$200` | Cursor Pricing | Cursor plans/search結果（公式ページ要約） | 採用 |
| CursorはAgent機能を継続強化中で、Background agentやSubagentsが公開済み | Cursor Changelog | Cursor Changelog内の2.4系更新 | 採用 |
| Cursorのコンテキスト運用は通常200k、Max modeで一部モデルは1Mに拡張可能 | Cursor Docs: max mode | Cursor Changelog/価格ページのMax context言及 | 採用 |
| Claude Codeは`/model`でモデル選択でき、`sonnet[1m]`等の選択肢がある | Anthropic Support | Anthropic Docs: Claude Code models | 採用 |
| Copilotの個人向け価格は Pro `$10/月`、Pro+ `$39/月`（年払いあり） | GitHub Copilot Plans | GitHub Docs: plans for Copilot | 採用 |
| Copilot Business/Enterpriseはそれぞれ `$19/$39` per user per month | GitHub Docs: plans | GitHub Copilot Plans（法人向け説明） | 採用 |
| GitHub Copilot Agent HQは2026-02-10にPublic Preview発表。Claude/Codex含む複数モデルがAgent文脈で選択可能 | GitHub Blog Changelog (2026-02-10) | GitHub Docs: about AI models in Copilot | 採用 |
| Copilot coding agentセッションはプレミアムリクエスト消費対象 | GitHub Blog Changelog (2026-02-10) | GitHub Copilot Plans（premium requests記述） | 採用 |
| 非エンジニア文脈では「1ツール固定」より「用途別併用」のほうが満足度が高い傾向がある | Reddit（vibecoding/cursor） | Reddit（ClaudeAI/GithubCopilot） | 採用（補助根拠） |

## 4. 料金比較（2026-02-20確認）

### 4-1. 個人向け

| ツール | 無料枠 | 主な有料プラン | 年間コスト目安（税別） |
|---|---|---|---|
| Cursor | Hobbyあり | Pro `$20/月`, Pro+ `$60/月`, Ultra `$200/月` | Pro `$240/年`, Pro+ `$720/年`, Ultra `$2,400/年` |
| Claude Code（Claudeプラン経由） | Claude Freeあり | Pro `$20/月` or `$17/月`(年払い), Max `$100/$200/月` | Pro `$200〜$240/年`, Max `$1,200〜$2,400/年` |
| GitHub Copilot | Freeあり | Pro `$10/月` or `$100/年`, Pro+ `$39/月` or `$390/年` | Pro `$100〜$120/年`, Pro+ `$390〜$468/年` |

### 4-2. チーム向け（1ユーザーあたり）

| ツール | チーム系プラン | 年間コスト目安（1席） |
|---|---|---|
| Cursor | Teams `$40/user/month` | `$480/年` |
| Claude | Team Standard `$25/user/month` or `$20/user/month`(年払い) | `$240〜$300/年` |
| GitHub Copilot | Business `$19/user/month`, Enterprise `$39/user/month` | `$228/年` / `$468/年` |

## 5. 主要比較観点の整理
- Agent/Composer:
  - CursorはAgent中心で進化継続。Composer由来の流れは維持されつつ、実運用はAgent機能が主軸
  - Claude CodeはCLI Agentに特化し、明示的な権限制御とモデル切替が強み
  - GitHub CopilotはIDE補完中心からAgent HQへ拡張し、タスク実行の守備範囲を広げている
- コンテキスト長:
  - Cursor: 通常200k、Max modeで一部1M
  - Claude Code: `sonnet[1m]` 等で1M対応ルートあり
  - Copilot: 一律固定ではなく、選択モデルと機能（Chat/Agent）依存で運用
- モデル選択:
  - Cursor: OpenAI / Anthropic / Gemini系モデルを横断利用
  - Claude Code: Claudeファミリー中心（`/model`で切替）
  - Copilot: GPT系に加えClaude/Gemini/Codex系モデルをタスクに応じて選択

## 6. 記事への反映方針
- 価格は必ず「確認日: 2026-02-20」を明記し、断定時点を固定する
- 「どれが最強か」ではなく、用途別（Webアプリ開発・スクリプト自動化・コードレビュー）で推奨を分岐する
- Vibe Coding評価は「非エンジニアの初速」と「保守運用の難度」を分けて説明する
- Agent HQは機能紹介だけでなく、プレミアムリクエスト消費や権限管理の注意点を併記する
- 記事末アカデミーCTAは3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境）に限定する

## 7. 変動情報・注意点
- 価格・プレミアムリクエスト・モデル提供範囲は短期間で更新される可能性がある
- Copilotのモデルラインナップはロールアウトで差分が出るため、アカウント単位で確認が必要
- CursorのUI表現（Composer/Agentの見え方）はバージョンで変わりやすい

## 8. 未確定・要確認メモ
- `[要確認: Cursor UI上の「Composer」名称の最新表示有無]`
  - Changelog上はAgent機能が中心。UIラベルは配布チャネルと版で揺れがある可能性
- `[要確認: Copilot Agent HQの対応IDE一覧と制限事項の最新版]`
  - 公開プレビュー中のため、対象範囲が拡張される可能性
- `[要確認: Claude Codeにおける1Mコンテキストのプラン別制限詳細]`
  - モデルエイリアス提供は確認済みだが、実利用条件は契約形態で差がある
