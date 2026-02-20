---
title: "記事リサーチ｜ai-notion-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-notion-guide.md"
  - "app/academy/blog/ai-notion-guide/page.tsx"
  - "components/academyLanding/blog/ai-notion-guide/AiNotionGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["[TODO] project-config.yaml（user.name確認済み）"]
  downstream:
    - "app/academy/blog/ai-notion-guide/page.tsx"
    - "components/academyLanding/blog/ai-notion-guide/AiNotionGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-notion-guide

## 0. 調査条件
- 対象テーマ: `Notion AI 使い方`
- サブテーマ: `Notion AI Plus 2026 / Notion 仕事効率化 / Notion AI 活用術`
- 確認日: `2026-02-20`
- ターゲット: 個人・法人（ビジネスパーソン、フリーランス、チーム導入担当）
- 方針: 料金・仕様・制限は一次情報（Notion公式）を優先。コミュニティは補助根拠として扱う

## 1. 一次情報（公式）ソース
1. [Notion pricing（英語）](https://www.notion.com/pricing?locale=en)  
   - Free/Plus/Business/Enterpriseの価格、Business/EnterpriseでAI利用可能の記述を確認
2. [Notion Help: What is Notion AI?](https://www.notion.com/help/notion-ai-faqs)  
   - Free/Plusでの「limited complimentary AI responses」、Business/Enterpriseでの利用可否を確認
3. [Notion Help: Notion AI and your data](https://www.notion.com/help/notion-ai-security-practices)  
   - 学習データ利用方針（学習に使わない）、権限準拠、一部AI subprocessorsの30日保持を確認
4. [Notion Help: Data sources and AI Connectors](https://www.notion.com/help/enterprise-search)  
   - Enterprise Searchの接続アプリ、Workspace ownerによる接続管理、プラン条件を確認
5. [Notion Help: Use Notion AI with your databases](https://www.notion.com/help/guides/use-notion-ai-with-your-databases)  
   - データベース活用の具体（summaries, insights）を確認
6. [Notion Help: Change your language and region settings](https://www.notion.com/help/changing-your-language)  
   - 日本語UI対応、Notion AIの日本語回答対応を確認
7. [Notion Releases（2026-01-20）](https://www.notion.com/releases/2026-01-20)  
   - GPT-5.2 / Claude Opus 4.5 / Gemini 3選択、Instant tasks、AI blocksの更新を確認
8. [Notion Releases index](https://www.notion.com/releases)  
   - 2026年2月にもモデル更新が継続していることを確認

## 2. コミュニティ実声（SNS/フォーラム）
1. [Reddit: Want to add Notion AI to Plus plan but no option](https://www.reddit.com/r/Notion/comments/1k6w6v3/want_to_add_notion_ai_to_plus_plan_but_no_option/)  
   - PlusプランでAI追加が見つからないという混乱。プラン/時期で表示差分が起きる実声
2. [Reddit: Databases with linked pages and Notion AI](https://www.reddit.com/r/Notion/comments/1ljw04w/databases_with_linked_pages_and_notion_ai/)  
   - データベース参照範囲の理解不足で期待と出力がズレるケース
3. [Reddit: One month of using Notion AI every day ...](https://www.reddit.com/r/Notion/comments/1n2h5hu/one_month_of_using_notion_ai_every_day_as_a/)  
   - 日常業務での定着報告（毎日利用の実感）と、用途を絞ると効果が出やすいという実声
4. [Reddit: Why is Notion not translating to other languages with AI](https://www.reddit.com/r/Notion/comments/1mi9w32/why_is_notion_not_translating_to_other_languages/)  
   - 言語処理の期待差（翻訳/表現品質）への不満と改善要求
5. [Reddit: Notion AI can now search your apps and web](https://www.reddit.com/r/Notion/comments/1ifgs9u/notion_ai_can_now_search_your_apps_and_web/)  
   - Enterprise Searchの有効性を評価する声と、接続・権限設定への懸念が混在

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 2026年時点でNotion AIの本格利用はBusiness/Enterpriseが中心 | pricing（Business/Enterprise with Notion AI） | Notion AI FAQ（Free/Plusはlimited responses） | 採用 |
| 「Notion AI Plus」は現行公式名称よりも検索上の通称として扱うべき | pricing（PlusにAI同梱の明示なし） | コミュニティ実声（Plusで追加UIが見つからない） | 採用（本文で誤解防止） |
| Notion AIはデータベース要約・抽出に有効で、業務テンプレに組み込むと再利用しやすい | DBガイド（活用例） | コミュニティ実声（日常利用報告） | 採用 |
| 日本語UI/日本語回答は対応しているが、実務では用語統一レビューが必要 | language設定ヘルプ | コミュニティの翻訳不満投稿 | 採用 |
| エンタープライズ利用では「使えること」より「権限とデータ境界」が重要 | AI security（権限準拠・学習利用方針） | Enterprise Search（接続管理はworkspace owner） | 採用 |
| Notion AIの機能は2026年も更新頻度が高く、モデル選択機能が強化されている | Releases（2026-01-20） | Releases index（2026-02-09） | 採用 |

## 4. 料金メモ（USD→円換算）
- 公式価格（`pricing?locale=en`）
  - Plus: `$10〜$12`/seat/month（請求条件・地域で変動）
  - Business: `$20〜$24`/seat/month（請求条件・地域で変動）
  - Enterprise: `Contact sales`
- 円換算目安:
  - 為替参照（2026-02-20確認）: [XE USD/JPY](https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=JPY) で `1 USD ≈ 153.5 JPY`（時点で変動）
  - 記事では実務上の目安として `1 USD = 155円前後` を使用

## 5. 記事反映方針
- 冒頭で「Notion AI Plus 2026」という検索語の誤解を解く  
  - 現在の公式表現はプラン名より「どのプランでAIを本格利用できるか」を確認する設計
- H2ごとに自己完結で、個人利用と法人利用の判断軸を並記
- 実務ユースケースは「議事録」「タスク管理」「ドキュメント整理」で統一し、ChatGPT/Gemini連携とDB連携を分離して説明
- 変動情報（料金、モデル、利用可否）は確認日 `2026-02-20` を併記

## 6. 不確実情報と扱い
- PlusプランへのAI追加UI表示はアカウント・契約履歴で差がある可能性  
  - 記事では「現在の公式価格ページを確認する」運用を推奨
- 為替は日次で変動  
  - 円換算は概算として提示し、契約時は決済時点で再計算する前提を明記
