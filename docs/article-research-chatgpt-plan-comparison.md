---
title: "記事リサーチ｜chatgpt-plan-comparison"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-chatgpt-plan-comparison.md"
  - "app/academy/blog/chatgpt-plan-comparison/page.tsx"
  - "components/academyLanding/blog/chatgpt-plan-comparison/ChatgptPlanComparisonPage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/chatgpt-plan-comparison/page.tsx"
    - "components/academyLanding/blog/chatgpt-plan-comparison/ChatgptPlanComparisonPage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: chatgpt-plan-comparison

## 0. 調査条件
- 対象テーマ: `ChatGPT 無料 有料 違い / ChatGPT Plus Pro 比較 2026 / ChatGPT 料金 2026 / ChatGPT プラン 選び方`
- 確認日: `2026-02-20`
- 目的: ChatGPT初心者が「無料で十分か」「Plus/Proに課金すべきか」を、料金・上限・モデルアクセス・運用手順で判断できる状態を作る
- 方針: 料金・機能・上限・決済・解約はOpenAI公式一次情報を優先。SNS/コミュニティ実声は補助根拠として扱う

## 1. 一次情報（公式）ソース
1. [ChatGPT Pricing（OpenAI公式）](https://chatgpt.com/pricing)
   - Free/Plus/Proの機能差（GPT-5.2 Instant/Thinking/Pro、Codex agent、deep research、Sora）を確認
2. [What is ChatGPT Plus?（OpenAI Help）](https://help.openai.com/en/articles/6950777)
   - Plus料金 `$20/month`、機能、課金管理/解約導線を確認
3. [What is ChatGPT Pro?（OpenAI Help）](https://help.openai.com/en/articles/9793128)
   - Pro料金 `$200/month`、無制限アクセス（ガードレール付き）、Codex agent拡張を確認
4. [GPT-5.2 in ChatGPT（OpenAI Help）](https://help.openai.com/en/articles/11909943-gpt-52-in-chatgpt)
   - 無料/Plusの具体上限（Free: `10 messages/5h`、Plus/Go: `160 messages/3h`）、Thinking上限、Proの無制限方針を確認
5. [Introducing GPT-5.3-Codex（OpenAI）](https://openai.com/index/introducing-gpt-5-3-codex/)
   - GPT-5.3-Codexは「paid ChatGPT plans」でCodex surfaces（app/CLI/IDE/web）提供である点を確認
6. [Multi-currency billing（OpenAI Help）](https://help.openai.com/en/articles/10421635)
   - Web決済の通貨/決済手段（全地域でクレジット/デビット）を確認
7. [How do I cancel my ChatGPT subscription?（OpenAI Help）](https://help.openai.com/en/articles/7232927-how-do-i-cancel-my-chatgpt-plus)
   - Web契約の変更/解約手順、解約反映タイミングを確認
8. [ChatGPT iOS app: Upgrading to a paid subscription（OpenAI Help）](https://help.openai.com/en/articles/7905739-chatgpt-ios-app-upgrading-to-the-plus-plan)
   - iOSアプリ経由のApple課金導線、Free→ProはWebアップグレード必須を確認
9. [How to cancel your Apple subscription for ChatGPT in the ChatGPT iOS app（OpenAI Help）](https://help.openai.com/en/articles/7905690)
   - iOS側の解約手順を確認
10. [How to cancel a subscription in the ChatGPT Android app（OpenAI Help）](https://help.openai.com/en/articles/8258076)
   - Android側の解約手順を確認
11. [The Japanese Consumption Tax on your OpenAI Invoices（OpenAI Help）](https://help.openai.com/en/articles/10242647)
   - 日本向け請求でJCT 10%適用（2025-01-01以降）を確認

## 2. SNS・コミュニティ実声（補助根拠）
1. [r/codex: Is the new GPT Codex 5.3 Model only for paid plans?（2026-02-05）](https://www.reddit.com/r/codex/comments/1qwyur2/is_the_new_gpt_codex_53_model_only_for_paid_plans/)
   - 無料プランでは見えない/有料で表示される報告（提供タイミング差の体感）
2. [r/codex: PSA: free accountではCodex 5.3が使えない（2026-02-06）](https://www.reddit.com/r/codex/comments/1qxcf16/psa_if_you_are_using_a_free_account_codex_53_is/)
   - 無料アカウントでの非対応エラー報告、再ログインで改善した個別報告
3. [r/ChatGPT: ChatGPT Go vs Plus vs Pro（2026-02-08）](https://www.reddit.com/r/ChatGPT/comments/1qzg6uy/chatgpt_go_vs_plus_vs_pro_2026_quick_breakdown/)
   - 「Plusは多くの人向け、Proは明確な高頻度用途向け」というユーザー側の判断基準
4. [OpenAI Community: Plus上限の見えにくさに関する要望（2025-04-03）](https://community.openai.com/t/please-clarify-usage-limits-for-plus-users-in-chat/1208888)
   - 有料ユーザーでも「上限の可視性が低い」と感じる運用課題
5. [r/OpenAI: GPT-5.2応答品質への不満投稿（2025-12-18）](https://www.reddit.com/r/OpenAI/comments/1pptr3f/gpt52_has_turned_chatgpt_into_an_overregulated/)
   - 安全挙動/回答トーンに対する否定的実声（主観が強く偏りあり）

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| Plusは`$20/月`、Proは`$200/月`（いずれも月額） | What is ChatGPT Plus? | What is ChatGPT Pro? | 採用 |
| FreeでもGPT-5.2は使えるが、上限後はminiへ切替 | GPT-5.2 in ChatGPT | ChatGPT Pricing（Free: Limited access to flagship GPT-5.2） | 採用 |
| 無料の実質上限は`10メッセージ/5時間`、Plusは`160メッセージ/3時間` | GPT-5.2 in ChatGPT | Plus記事の「usage limits vary」補足 | 採用（変動注意を明記） |
| PlusはGPT-5.2 Thinkingが拡張、ProはGPT-5.2 Proを利用可 | ChatGPT Pricing（モデル比較行） | GPT-5.2 in ChatGPT（Availability per Tier） | 採用 |
| GPT-5.3-Codexは有料ChatGPTプラン向けに提供 | Introducing GPT-5.3-Codex | ChatGPT Pricing（Codex agent: Free=No, Plus=Yes, Pro=Expanded） | 採用（Codex accessはプラン差あり） |
| Web決済はクレカ/デビット、モバイル課金はApple/Google管理 | Multi-currency billing | iOS/Android/重複課金防止の記事群 | 採用 |
| 日本の請求はJCT 10%が適用される | Japanese Consumption Tax article | Plus/Pro請求管理記事（請求ポータル案内） | 採用 |

## 4. 記事反映方針
- 冒頭で「2026-02-20時点の確認情報」であることを明記
- Free/Plus/Pro比較表を最初に配置し、初心者の判断コストを下げる
- 「無料で十分」「Plus課金条件」を先に示し、Proは高頻度・高負荷用途に限定して整理
- GPT-5.2（標準利用）とGPT-5.3-Codex（コーディング特化）のアクセス条件を別表で明示
- 用途別推奨（副業・学習・エンジニア・ビジネス）を提示し、判断の着地を作る
- プラン変更/解約はWeb・iOS・Androidで手順を分け、重複課金注意を併記

## 5. 変動情報・不確実情報
- 上限/提供モデル/機能は更新されるため、本文に確認日（`2026-02-20`）を固定表示する
- 「1日あたり上限」は公式表記が`5時間/3時間`単位のため、日次換算は参考値として扱う
- Apple Pay表記はOpenAI側で一般手段として明記されていないため、以下で明示:
  - `Web`: クレジット/デビット（公式明記）
  - `iOS`: Apple App Store課金（Apple側支払い手段に依存）
  - `[要確認: Apple Payという名称で表示されるかはApple ID設定・地域条件依存]`

