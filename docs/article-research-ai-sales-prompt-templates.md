---
title: "記事リサーチ｜ai-sales-prompt-templates"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-sales-prompt-templates.md"
  - "app/academy/blog/ai-sales-prompt-templates/page.tsx"
  - "components/academyLanding/blog/ai-sales-prompt-templates/AiSalesPromptTemplatesPage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/ai-sales-prompt-templates/page.tsx"
    - "components/academyLanding/blog/ai-sales-prompt-templates/AiSalesPromptTemplatesPage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-sales-prompt-templates

## 0. 調査条件
- 対象テーマ: `生成AI 営業 活用 / 営業 プロンプト テンプレ`
- 確認日: `2026-02-19`
- 目的: 営業の実務シーン別に「そのまま使える」プロンプト20本を提示し、導入時の情報管理リスクまで1本で判断できる記事を作る
- 方針: セキュリティ・データ取り扱いは一次情報を優先。コミュニティ実声は補助根拠として扱う

## 1. 一次情報（公式）ソース
1. [OpenAI API data usage policies](https://openai.com/policies/api-data-usage-policies/)  
   - API経由データはデフォルトで学習利用されない点、保持と利用条件の原則
2. [OpenAI: Business data privacy, security, and compliance](https://openai.com/business-data/)  
   - ChatGPT Enterprise/Business/EduおよびAPIの業務利用時のデータ取り扱い方針
3. [OpenAI: Enterprise privacy](https://openai.com/enterprise-privacy/)  
   - 業務利用時のプライバシー保護、管理者コントロール、モデル学習利用に関する説明
4. [OpenAI: How your data is used to improve model performance](https://openai.com/policies/how-your-data-is-used-to-improve-model-performance/)  
   - 個人利用とビジネス利用のデータ学習利用ポリシー差分
5. [内閣府: AI事業者ガイドライン（第1.1版）](https://www8.cao.go.jp/cstp/ai/ai_guideline.html)  
   - 日本国内でのAI利用における事業者向けガバナンスの基本原則
6. [Salesforce: State of Sales](https://www.salesforce.com/resources/research-reports/state-of-sales/)  
   - 営業活動におけるAI活用の傾向（調査レポート）

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit r/sales: best chatgpt prompts for sales](https://www.reddit.com/r/sales/comments/1kh78k5/best_chatgpt_prompts_for_sales/)  
   - 肯定: メール下書き・商談準備・反論想定のテンプレが実用的という声
2. [Reddit r/sales: has anyone used chatgpt for sales](https://www.reddit.com/r/sales/comments/1j9m6ex/has_anyone_used_chatgpt_for_sales/)  
   - 肯定/懸念混在: 初回文面や要約には有効だが、顧客文脈不足だと浅くなるという指摘
3. [Reddit r/sales: using chatgpt for outbound sales emails](https://www.reddit.com/r/sales/comments/1huz968/using_chatgpt_for_outbound_sales_emails/)  
   - つまずき: テンプレ感が強い文面になり返信率が落ちる、変数設計が重要という声
4. [Reddit r/ChatGPT: what are your top 5 prompts that you use every week](https://www.reddit.com/r/ChatGPT/comments/1gl6j22/what_are_your_top_5_prompts_that_you_use_every/)  
   - 定着観点: 週次で再利用する固定テンプレを持つ運用が継続しやすい
5. [Reddit r/PromptEngineering: prompt engineering is less about fancy wording](https://www.reddit.com/r/PromptEngineering/comments/1hvxyup/prompt_engineering_is_less_about_fancy_wording/)  
   - 実務観点: 表現の工夫より、目的・制約・出力形式の構造化が効く

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 営業活用は「業務シーン単位」でテンプレ化すると再利用性が上がる | Reddit r/sales（複数スレ） | r/PromptEngineering（構造化重視） | 採用 |
| 出力品質は、曖昧依頼より「役割・目的・制約・形式」を固定した方が安定しやすい | r/PromptEngineering | r/ChatGPT（週次テンプレ運用） | 採用 |
| 機密情報入力はツール種別と契約条件で判断が分かれるため、社内ルール先行が必須 | OpenAI business data | OpenAI enterprise privacy | 採用 |
| API利用は業務システム連携向きだが、UI利用と課金・統制責任が異なる | OpenAI API data usage policies | OpenAI business data | 採用 |
| 国内運用では、社内ガイドラインと責任分界の明文化が前提になる | 内閣府AI事業者ガイドライン | OpenAI enterprise privacy | 採用 |

## 4. 記事反映方針
- 20プロンプトを4カテゴリ（事前準備/提案書・資料作成/メール・コミュニケーション/振り返り・改善）で固定
- 各プロンプトを `[変数]` 形式でコピペ利用できるよう統一
- 中盤で「ChatGPTに機密情報を入れても大丈夫か」を独立H2で明示
- 内部リンク3本（`chatgpt-advanced-tips` / `prompt-template-for-work` / `ai-business-efficiency-cases`）を本文内で自然導線化
- LINE CTAは指定文言で3箇所配置

## 5. 不確実情報・注意点
- 価格・プラン仕様は変動しやすいため固定金額は記載しない
- 「安全性」の断定は避け、契約プラン・設定・社内規程で確認が必要である前提で記述
- コミュニティ投稿は補助根拠に限定し、断定根拠は一次情報ベースで構成
