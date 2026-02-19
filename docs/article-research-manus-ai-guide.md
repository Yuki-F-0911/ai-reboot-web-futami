---
title: "リサーチメモ｜manus-ai-guide"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-manus-ai-guide.md"
  - "app/academy/blog/manus-ai-guide/page.tsx"
  - "components/academyLanding/blog/manus-ai-guide/ManusAiGuidePage.tsx"
status: "draft"
dependencies:
  upstream: []
  downstream:
    - "app/academy/blog/manus-ai-guide/page.tsx"
    - "components/academyLanding/blog/manus-ai-guide/ManusAiGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチメモ: manus-ai-guide

## 1. 一次情報（公式）まとめ

確認日: **2026-02-19**

1. Manus公式トップ
- URL: `https://manus.im/`
- 主要確認点:
  - 「general AI agent」「turn your thoughts into actions」の位置づけ。
  - サービス名・ブランド文脈。

2. Manus Help Center: Introduction to Manus
- URL: `https://manus.im/help-center/en/articles/11476964-introduction-to-manus/`
- 主要確認点:
  - Manusが「A general AI agent that turns your thoughts into actions」と定義されている。
  - 会話に留まらず、タスク完了まで進める設計思想。

3. Manus Docs: Plans and Billing
- URL: `https://manus.im/docs/introduction/plans`
- 主要確認点:
  - Free / Starter / Pro / Max / Enterprise のプラン構造。
  - クレジットベースの管理。

4. Manus Help Center: Current membership pricing
- URL: `https://manus.im/help-center/en/articles/11086234-current-membership-pricing`
- 主要確認点:
  - 無料枠が存在。
  - 有料プランの概算価格帯。
  - 料金は更新される前提。

5. Manus Help Center: What is credit and how do I use it?
- URL: `https://manus.im/help-center/en/articles/11084363-what-is-credit-and-how-do-i-use-it`
- 主要確認点:
  - クレジットの基本概念。
  - タスク完了時にクレジットを消費する運用。

6. Manus Help Center: Where is Manus available currently?
- URL: `https://manus.im/help-center/en/articles/11478381-where-is-manus-available-currently`
- 主要確認点:
  - 利用可能リージョンに日本が含まれる。

7. Manus Help Center: How do I change Manus language?
- URL: `https://manus.im/help-center/en/articles/11477784-how-do-i-change-manus-language`
- 主要確認点:
  - `Language` 設定から日本語等へ変更可能。

8. Manus Help Center: Security & Privacy
- URL: `https://manus.im/help-center/en/collections/13002998-security-privacy`
- 主要確認点:
  - セキュリティ関連記事群の存在。

9. Manus Help Center: How Manus manages website logins in cloud browser
- URL: `https://manus.im/help-center/en/articles/11477032-how-manus-manages-website-logins-in-cloud-browser`
- 主要確認点:
  - Cloud Browser上でのログイン管理の説明。
  - セッション隔離の考え方。

10. Manus Help Center: Will Manus use user data for model training?
- URL: `https://manus.im/help-center/en/articles/11497350-will-manus-use-user-data-for-model-training`
- 主要確認点:
  - ユーザーデータをモデル学習に使わない旨の明記。

11. Manus Help Center: Where is my data stored?
- URL: `https://manus.im/help-center/en/articles/11497462-where-is-my-data-stored`
- 主要確認点:
  - データ保存リージョン（米国サーバー）に関する記述。

12. Manus Docs: API and Integrations
- URL: `https://manus.im/docs/integrations/manus-api`
- 主要確認点:
  - APIと統合機能が提供されること。

13. Manus vs ChatGPT
- URL: `https://manus.im/versus/chatgpt`
- 主要確認点:
  - ベンダー視点の比較軸（対話中心 vs タスク実行中心）。

## 2. コミュニティ実声（SNS/掲示板）

確認日: **2026-02-19**

1. Reddit: Honest reviews thread
- URL: `https://www.reddit.com/r/ManusOfficial/comments/1j4gkdz/i_need_your_honest_reviews/`
- 声の要点:
  - 肯定: 「実アプリを作れた」「一定用途では有用」。
  - 懸念: 「クレジット消費が速い」「用途によって費用対効果が変わる」。

2. Reddit: Account terminated thread
- URL: `https://www.reddit.com/r/ManusOfficial/comments/1j87r6f/my_account_just_got_terminated_after_1_hours_of/`
- 声の要点:
  - 懸念: アカウント対応・サポートへの不満。
  - 運用観点: 本番利用前に検証環境とサポート導線の確認が必要。

3. Reddit: Security issue thread
- URL: `https://www.reddit.com/r/ManusOfficial/comments/1j0cn5j/dangerous_security_issue_with_manus_ai_anyone/`
- 声の要点:
  - 懸念: ログイン・課金・権限周りの不安。
  - 運用観点: 高権限アカウントを直接連携しない運用が前提。

4. Reddit: Expensive utility bill thread
- URL: `https://www.reddit.com/r/ManusOfficial/comments/1kkw65e/the_most_expensive_ai_utility_bill_ive_ever_seen/`
- 声の要点:
  - 懸念: コスト予測の難しさ。
  - 運用観点: クレジット上限管理と対象タスクの制限が重要。

## 3. Claim別ファクトチェック

| Claim | 検証結果 | 根拠 |
|---|---|---|
| ManusはAIエージェントサービスとして提供される | Confirmed | 公式トップ / Introduction |
| 無料で試せるプランがある | Confirmed | Plans / Current membership pricing |
| 日本語UIで使える | Confirmed | Language変更記事 / 提供地域記事 |
| セキュリティ情報はヘルプに明示されている | Confirmed | Security collection / Cloud browser記事 |
| ユーザーデータをモデル学習に使わない方針がある | Confirmed | Will Manus use user data for model training |
| データ保存先は米国と明記されている | Confirmed | Where is my data stored |
| ChatGPTとの違いは「対話中心か、タスク実行中心か」で説明可能 | Confirmed（ベンダー比較） | Manus vs ChatGPT / Introduction |

## 4. 変動情報の扱い

- 料金・クレジット: 更新頻度が高いため記事本文に「**確認日: 2026-02-19**」を明記。
- プラン構成・機能差: 公式Plansページ参照を促し、断定しすぎない。
- リージョン・言語対応: 公式ヘルプ更新に追従する前提で記述。

## 5. 執筆時の注意

- 2025年に話題化した背景は触れるが、時期断定は「2025年に注目度が上昇」に留める。
- セキュリティは「安全」と断定せず、運用側の確認項目（権限、上限、ログ）をセットで提示。
- コミュニティ実声は補助根拠として扱い、個人ID・固有情報は本文で非表示にする。
