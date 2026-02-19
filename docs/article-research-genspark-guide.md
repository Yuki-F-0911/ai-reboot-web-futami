---
title: "記事リサーチ｜Gensparkとは？"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-genspark-guide.md"
  - "app/academy/blog/genspark-guide/page.tsx"
  - "components/academyLanding/blog/genspark-guide/GensparkGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/genspark-guide/page.tsx"
    - "components/academyLanding/blog/genspark-guide/GensparkGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: genspark-guide

## 1. 記事メタ
- slug: `genspark-guide`
- 主KW: `Genspark 使い方` / `Genspark とは`
- サブKW:
  - `Genspark Perplexity 違い`
  - `AI検索 比較 2026`
  - `Genspark 無料`
- 確認日: `2026-02-19`

## 2. 一次情報（公式）ソース
1. Genspark公式トップ  
   - https://www.genspark.ai/
   - 取得論点: 「AI Agent Engine」「信頼できるソースを統合」「無料クレジット訴求（1,000 credits）」。
2. Genspark利用規約（Terms）
   - https://www.genspark.ai/terms
   - 取得論点: Free Serviceは利用可能だが、機能制限・日次クレジット制限がある。Paidサービスは追加機能や制限緩和がある。
3. Genspark Help Center（Membership and Subscription Plans）
   - https://www.genspark.ai/helpcenter/terms-and-policies/membership-and-subscription-plans
   - 取得論点: 無料ユーザーは日次クレジットで利用、上位プランは追加機能と利用枠の拡張。
4. Genspark Help Center（Paid Subscription）
   - https://www.genspark.ai/helpcenter/terms-and-policies/paid-subscription
   - 取得論点: 支払い・返金・プラン変更関連の基本ポリシー。
5. OpenAI 公式事例（Genspark）
   - https://openai.com/index/genspark/
   - 取得論点: GensparkがOpenAI APIを活用し、短期間で成長したという事例（ARR言及あり）。
6. AWS 公式事例（Genspark）
   - https://aws.amazon.com/solutions/case-studies/genspark-case-study/
   - 取得論点: サービス構成・拡張性・成長指標（ARR言及あり）。
7. Perplexity Help（What is Perplexity Pro? / Plans and Pricing / Advanced models）
   - https://www.perplexity.ai/help-center/en/articles/10354919-what-is-perplexity-pro
   - https://www.perplexity.ai/hub/getting-started/plans-and-pricing
   - https://www.perplexity.ai/help-center/en/articles/10354917-what-advanced-ai-models-are-included-in-a-perplexity-pro-subscription
   - 取得論点: Free/Pro/Max/Enterpriseのプラン体系、Proは高度モデル利用が可能、機能と価格は更新されうる。

## 3. SNS・コミュニティ実声（要約）
1. Reddit（r/ChatGPT）  
   - 「Gensparkのエージェント検索を評価する声」「実際に使って驚いた」という肯定反応。
2. Reddit（r/perplexity_ai）  
   - 「Perplexityからの乗り換え比較」「生成結果の見た目や操作感は好意的だが、信頼性は検証が必要」という声。
3. Reddit（r/perplexity_ai）  
   - 「Genspark Pages と Perplexity Spaces の比較議論」「用途次第で優劣が変わる」という中立意見。
4. Reddit（r/perplexity_ai）  
   - 「初見で速さや見やすさを評価」「一方で情報の裏取りは必須」という慎重意見。
5. Product Hunt / 外部レビュー系
   - 初期ユーザーによる高評価レビューがある一方、長期運用・料金妥当性・安定性は追加検証が必要という論点が見られる。

## 4. 主要Claimと照合
| Claim | Source A | Source B | 判定 |
|---|---|---|---|
| GensparkはAIエージェント型の検索体験を提供する | Genspark公式トップ | OpenAI公式事例 | OK |
| Gensparkは無料で利用開始できるが制限がある | Genspark Terms | Genspark Help（Membership） | OK |
| Gensparkの有料プランで利用枠・機能が拡張される | Genspark Terms | Genspark Help（Paid Subscription） | OK |
| PerplexityはFree/Pro/Max/Enterpriseの複数プランを持つ | Perplexity Plans and Pricing | Perplexity Pro Help | OK |
| Perplexity Proは高度モデルを含む（内容は更新されうる） | Perplexity Advanced models | Perplexity Pro Help | OK |
| Gensparkは2025-2026で急成長とされる | OpenAI公式事例 | AWS公式事例 | OK（数値の時点差は本文で注記） |

## 5. 変動情報と注記方針
- 料金、無料枠、モデル提供範囲は更新が速いため、本文では具体価格を断定せず「確認日: 2026-02-19」を明記。
- 成長指標（ARR）は発表時点・計測条件の差異がありうるため、比較で断定せず「公式事例での公表値」として扱う。

## 6. 本文反映メモ
- 冒頭3行で「Gensparkとは何か」を明確化する。
- Perplexity比較は表形式で、機能優劣ではなく「使い分け基準」を提示する。
- FAQで「無料で使えるか」「日本語対応」を明示回答。
- 内部リンクは以下を必須挿入:
  - `/academy/blog/perplexity-ai-guide`
  - `/academy/blog/notebooklm-guide`
  - `/academy/blog/chatgpt-advanced-tips`
- AIリブートアカデミー言及時は3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境）を反映。

