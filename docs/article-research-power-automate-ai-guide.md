---
title: "記事リサーチ｜Power Automate × 生成AI活用"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-power-automate-ai-guide.md"
  - "app/academy/blog/power-automate-ai-guide/page.tsx"
  - "components/academyLanding/blog/power-automate-ai-guide/PowerAutomateAiGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/power-automate-ai-guide/page.tsx"
    - "components/academyLanding/blog/power-automate-ai-guide/PowerAutomateAiGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: power-automate-ai-guide

## 1. 記事メタ
- slug: `power-automate-ai-guide`
- 主KW:
  - `Power Automate 生成AI`
  - `Power Automate AI連携`
- サブKW:
  - `Copilot Studio 使い方`
  - `Microsoft AI 自動化`
  - `Power Automate ChatGPT 連携`
- 確認日: `2026-02-19`

## 2. 一次情報（公式）ソース
1. Power Automate 概要
   - https://learn.microsoft.com/en-us/power-automate/overview
   - 取得論点: Power Automateはクラウドフロー/デスクトップフローを中心に業務自動化を構築できる。
2. Teams連携（メッセージ起点）
   - https://learn.microsoft.com/en-us/power-automate/trigger-flow-teams-message
   - 取得論点: Teamsメッセージからフロー起動可能。アダプティブカードで入力取得も可能。
3. Teams連携（投稿アクション）
   - https://learn.microsoft.com/en-us/power-automate/teams/send-a-message-in-teams
   - 取得論点: TeamsへFlow botまたはユーザーとして投稿可能。
4. AI Builderのプロンプト実行
   - https://learn.microsoft.com/en-us/ai-builder/use-a-custom-prompt-in-flow
   - 取得論点: Power Automate内で`Run a prompt`を使い、AI生成処理をフローに組み込める。GPT系（Azure OpenAI基盤）で提供。
5. AI Builderライセンス概要
   - https://learn.microsoft.com/en-us/ai-builder/administer-licensing
   - 取得論点: AI Builder機能はAI Builder creditsまたはCopilot Creditsを消費。2025年11月以降の変更点あり。
6. Copilot Studio Agent flows 概要
   - https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview
   - 取得論点: Agent flowは自然言語/デザイナーで作成でき、Copilot Studio容量で課金。Power Automateフローを変換可能（一方向）。
7. Copilot Studio Agent flows FAQ
   - https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-faqs
   - 取得論点: Agent flowはPower Automateクラウドフローと用途・課金が異なる。Premium Connector利用可。
8. Copilot Studio ライセンス
   - https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing
   - 取得論点: Copilot Creditsが共通通貨。2025-09-01以降メッセージ課金から移行。
9. Azure OpenAI Connector
   - https://learn.microsoft.com/en-us/connectors/azureopenai/
   - 取得論点: Power Automate/Copilot StudioからAzure OpenAIへ接続可能。Premium Connector扱い。
10. Power AutomateライセンスFAQ
    - https://learn.microsoft.com/en-us/power-platform/admin/power-automate-licensing/faqs
    - 取得論点: Premium Connector利用時のユーザー/フロー課金条件（自動フローとインスタントフローで要件差）が明示される。
11. Excel Online (Business) Connector
    - https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/
    - 取得論点: Excel Online連携は標準コネクタ。同時更新やスロットリングなど実務上の制約がある。
12. Power Automateデスクトップ自動化（無人実行）
    - https://learn.microsoft.com/en-us/power-automate/desktop-flows/run-unattended-desktop-flows
    - 取得論点: 無人実行には実行環境・ライセンス要件・セッション制約がある。

## 3. SNS・コミュニティ実声（要約）
1. Reddit（r/copilotstudio, 2024-06）
   - Azure OpenAIのナレッジ連携をCopilot Studio標準機能だけで安定運用しづらく、Power Automate経由の回避策を選んだという声。
2. Reddit（r/PowerAutomate, 2025-09）
   - AI Builderで請求書処理を作ると実装効果は高いが、コスト制約で継続運用に悩む声。
3. Reddit（r/copilotstudio, 2025-06）
   - Copilot Studio/Power Automate単体ではJavaScript実装に限界があり、Azure Functions等の外部実装を併用したという声。
4. Reddit（r/copilotstudio, 2025-11）
   - Premium ConnectorとCopilot Studioライセンスの関係で迷う声。公式FAQ参照で理解したというやり取り。
5. Reddit（r/copilotstudio, 2025-02）
   - ナレッジ更新自動化で重複管理に苦労した声。標準機能だけでは運用ルール設計が必要という指摘。

## 4. 主要Claimと照合
| Claim | Source A | Source B | 判定 |
|---|---|---|---|
| Teams投稿/メッセージを起点にPower Automateを実行できる | Teams overview | Trigger flow from Teams message | OK |
| Power Automateフロー内で生成AI処理（プロンプト実行）を組み込める | AI Builder prompt in flow | AI Builder licensing docs | OK |
| Copilot StudioのAgent flowはPower Automateクラウドフローと別課金体系 | Agent flows overview | Agent flows FAQ | OK |
| Copilot StudioでPremium Connectorを使える | Agent flows FAQ | Copilot Studio licensing | OK |
| Azure OpenAIはPower AutomateからPremium Connectorで利用可能 | Azure OpenAI connector docs | Power Automate licensing FAQ | OK |
| AI Builder creditsは2025-2026で制度変更がある | AI Builder licensing overview | End of AI Builder credits | OK |

## 5. 変動情報と注記方針
- 料金・ライセンス・クレジット消費レートは更新が速いため、本文では金額断定を避け、`確認日: 2026-02-19` を明記。
- Power Platform機能リリースはテナント・リージョン差があるため、本文で「利用可否は管理者設定と環境依存」を明示。
- コミュニティ情報は補助根拠として扱い、実装要件は公式ドキュメントを優先。

## 6. 本文反映メモ
- 「個人でできる範囲」と「IT部門が必要な範囲」を表で分離する。
- 10レシピはTeams/Excel/Outlook/SharePoint中心で、Microsoft 365利用者の即効性を優先。
- 「Azure OpenAI vs Copilot Studio」は比較ではなく判断フロー形式で提示。
- 内部リンクは以下4本を文脈接続で必ず挿入:
  - `/academy/blog/workflow-automation-comparison`
  - `/academy/blog/dify-beginner-guide`
  - `/academy/blog/ai-business-efficiency-cases`
  - `/academy/blog/ai-hr-recruiting`
- アカデミー言及時は3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境）を明記。
