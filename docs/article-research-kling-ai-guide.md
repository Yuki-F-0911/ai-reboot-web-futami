---
title: "リサーチメモ｜kling-ai-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-kling-ai-guide.md"
  - "app/academy/blog/kling-ai-guide/page.tsx"
  - "components/academyLanding/blog/kling-ai-guide/KlingAiGuidePage.tsx"
status: "draft"
dependencies:
  upstream: []
  downstream:
    - "app/academy/blog/kling-ai-guide/page.tsx"
    - "components/academyLanding/blog/kling-ai-guide/KlingAiGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチメモ: kling-ai-guide

確認日: **2026-02-20**

## 1. 一次情報（公式）まとめ

1. Kuaishou IR: Kling AI one-year anniversary release  
- URL: `https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-unveils-upgraded-ai-models-and-product-features-one-year-anniversary`  
- 主要確認点:
  - Kling 2.0 / 2.1 系アップデートの公式発表。
  - 「最大3分」「1080p」「30fps」仕様の言及（ニュースリリース文脈）。

2. Kuaishou IR: Kling AI launches independent app  
- URL: `https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-independent-app-introducing-image-editing`  
- 主要確認点:
  - 中国本土向けサブスク開始。
  - Freeユーザーのデイリークレジット（66）と、5秒1080p生成時のクレジット消費（10）の記載。
  - 月次/年次プラン（人民元建て）の記載。

3. OpenAI Help: Generating videos on Sora  
- URL: `https://help.openai.com/en/articles/9957612-generating-videos-on-sora/`  
- 主要確認点:
  - Sora利用可能プラン（Plus/Pro）。
  - Plus/Proの解像度・尺・同時生成数の差分。

4. OpenAI Pricing  
- URL: `https://openai.com/chatgpt/pricing/`  
- 主要確認点:
  - ChatGPT Plus $20/月、Pro $200/月。

5. OpenAI Terms of Use  
- URL: `https://openai.com/policies/terms-of-use/`  
- 主要確認点:
  - Outputの権利帰属、利用者責任、第三者権利侵害回避。

6. Runway Help: What does your plan include?  
- URL: `https://help.runwayml.com/hc/en-us/articles/15124877443219-What-does-your-plan-include`  
- 主要確認点:
  - Standard/Pro/Unlimitedの価格とクレジット数（2026-02-20時点）。

7. Runway Help: Can I use my generations for commercial purposes?  
- URL: `https://help.runwayml.com/hc/en-us/articles/17466859757587-Can-I-use-my-generations-for-commercial-purposes`  
- 主要確認点:
  - Freeプランは商用利用不可。
  - 有料プランは商用利用可能（規約順守前提）。

## 2. 二次情報（照合用）

1. Tech in Asia（Kuaishou IR内容の報道）  
- URL: `https://www.techinasia.com/news/kuaishou-kling-ai-launches-independent-app-for-image-and-video-generation`  
- 主要確認点:
  - 66クレジット/日、5秒1080p=10クレジット、中国本土向け価格の再掲。

2. MENAFN（GlobeNewswire配信文の転載）  
- URL: `https://menafn.com/1108570846/Kling-AI-Launches-Independent-App-Introducing-Image-Editing-and-Enhanced-Models`  
- 主要確認点:
  - 同発表の料金・クレジット記述を別経路で照合。

## 3. SNS・コミュニティ実声（補助根拠）

1. Reddit: Kling renewal/billing friction  
- URL: `https://www.reddit.com/r/KlingAI/comments/1l8k02c/kling_ai_renewal_issue_no_response_after_payment/`  
- 要点:
  - 課金更新やサポート応答での不満。
  - 商用運用前に請求/サポート動線の検証が必要。

2. Reddit: Kling payment method concern  
- URL: `https://www.reddit.com/r/KlingAI/comments/1m9mrsy/any_way_to_pay_without_credit_card/`  
- 要点:
  - 支払い手段の制約に関する相談が散見。
  - 地域・決済手段差が導入障壁になる。

3. Reddit: Kling prompt quality tips  
- URL: `https://www.reddit.com/r/KlingAI/comments/1md4ee7/any_tips_for_getting_better_results/`  
- 要点:
  - 画角/動き指定の具体化で品質が安定するという実践知。

4. Reddit: Runway Unlimited perception gap  
- URL: `https://www.reddit.com/r/RunwayML/comments/1j9nhz9/anyone_else_feeling_misled_about_unlimited/`  
- 要点:
  - Unlimited表記と実運用感のギャップ報告。

5. Reddit: Sora Plus/Pro initial impressions  
- URL: `https://www.reddit.com/r/singularity/comments/1i6f8b2/sora_is_out_now_for_plus_and_pro_users/`  
- 要点:
  - 品質評価と待ち時間/生成制限の議論が混在。

## 4. Claim別ファクトチェック

| Claim | 判定 | 根拠 |
|---|---|---|
| KlingはKuaishou開発の動画生成AIで、最大3分・1080p・30fpsに対応 | Confirmed | Kuaishou IR（1周年発表） |
| Klingは無料枠（デイリークレジット）があり、5秒1080p生成で10クレジット消費 | Confirmed（中国本土向け） | Kuaishou IR（独立アプリ発表）+ Tech in Asia照合 |
| Klingの料金は無料枠＋サブスク課金で運用される | Confirmed（中国本土向け） | Kuaishou IR（独立アプリ発表）+ MENAFN照合 |
| RunwayのStandard/Proは価格・月次クレジットが公式公開されている | Confirmed | Runway Help: plan include |
| RunwayはFreeで商用利用不可、有料プランは商用利用可能 | Confirmed | Runway Help: commercial purposes |
| SoraはChatGPT Plus/Proで利用し、Proはより高解像度・長尺・同時生成数が大きい | Confirmed | OpenAI Help: Sora + OpenAI Pricing |
| OpenAI生成物は規約上ユーザーへ権利帰属されるが、法令・第三者権利順守が必要 | Confirmed | OpenAI Terms of Use |
| Klingグローバル価格（`app.klingai.com/global`）の最新数値 | [要確認] | 取得制限により公式ページ本文を直接取得できず。公開画面で再確認が必要 |
| Klingの商用利用条件（無料/有料別の細則） | [要確認] | 公式利用規約本文の直接取得制限あり。案件利用前にTerms現行版を再確認すること |

## 5. 本記事での執筆方針

- 料金は「**確認日: 2026-02-20**」を明記し、Klingは「中国本土向けIR値」と「グローバル版要確認」を分けて記載。
- 「Klingの使い方」はUIの一般手順（登録→モデル選択→Text/Image to Video→生成）を中心に、数値断定は公式裏取り済み項目に限定。
- Runway Gen-3・Soraとの比較は、品質の優劣を断定せず、**価格/商用条件/使い勝手**を意思決定軸で整理。
- 商用利用の章では、ツール規約に加え「第三者権利」「社内承認フロー」「素材管理」をセットで提示。
