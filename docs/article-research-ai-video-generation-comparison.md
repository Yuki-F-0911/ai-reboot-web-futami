---
title: "リサーチメモ｜ai-video-generation-comparison"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-video-generation-comparison.md"
  - "app/academy/blog/ai-video-generation-comparison/page.tsx"
  - "components/academyLanding/blog/ai-video-generation-comparison/AiVideoGenerationComparisonPage.tsx"
status: "draft"
dependencies:
  upstream: []
  downstream:
    - "app/academy/blog/ai-video-generation-comparison/page.tsx"
    - "components/academyLanding/blog/ai-video-generation-comparison/AiVideoGenerationComparisonPage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチメモ: ai-video-generation-comparison

## 1. 一次情報（公式）まとめ

確認日: **2026-02-19**

1. Runway Pricing
- URL: `https://runwayml.com/pricing`
- 主要確認点:
  - Standard / Pro / Unlimited / Enterprise のプラン構成。
  - 料金レンジ（年払い前提の参考額）が公開されている。

2. Runway Help: Can I use my generations for commercial purposes?
- URL: `https://help.runwayml.com/hc/en-us/articles/17466859757587-Can-I-use-my-generations-for-commercial-purposes`
- 主要確認点:
  - 有料プランでの商用利用可否。
  - Freeプランは商用利用不可という制約。

3. OpenAI Help: Sora in ChatGPT
- URL: `https://help.openai.com/en/articles/9957612-generating-videos-on-sora/`
- 主要確認点:
  - SoraはChatGPT Plus / Pro / Team で利用可能。
  - プランごとに解像度・時間・同時生成数などの制限が異なる。
  - 混雑時は待ち時間が発生する。

4. OpenAI News: Introducing ChatGPT Pro
- URL: `https://openai.com/index/introducing-chatgpt-pro/`
- 主要確認点:
  - Proが月額200ドルで提供されること。
  - Plusとの差分説明。

5. OpenAI Terms of Use
- URL: `https://openai.com/policies/terms-of-use/`
- 主要確認点:
  - 生成物の権利（Output ownership）の基本方針。
  - 第三者権利侵害の禁止を含む利用責任。

6. ByteDance Seed Team公式: Introducing Seedance 2.0
- URL: `https://team.doubao.com/en/articles/seedance_2_0`
- 主要確認点:
  - Seedance 2.0の位置づけ（動画生成モデル）。
  - Dreamina / Doubao経由で利用可能という提供導線。
  - 画質評価の外部ベンチマーク提示（記事内記載）。

7. ByteDance Seed Team公式: Seedance 1.0
- URL: `https://seed.bytedance.com/en/tech/seedance`
- 主要確認点:
  - テキスト/画像からの動画生成に対応。
  - 1080p・10秒動画の生成時間（約41秒）など速度に関する記述。

8. Kuaishou Investor Relations: Kling AI updates
- URL: `https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-independent-app-introducing-image-editing`
- 主要確認点:
  - Klingのサブスクリプション開始情報（中国本土向け）。
  - 料金・クレジット運用に関する公式発表があること。

## 2. コミュニティ実声（SNS/掲示板）

確認日: **2026-02-19**

1. Reddit: Runway Unlimited usage confusion
- URL: `https://www.reddit.com/r/RunwayML/comments/1j9nhz9/anyone_else_feeling_misled_about_unlimited/`
- 声の要点:
  - 懸念: Unlimited表記と実運用制限の認識差。
  - 示唆: プラン説明だけでなく「公正利用条件」まで読む必要がある。

2. Reddit: Sora generation quality discussion
- URL: `https://www.reddit.com/r/singularity/comments/1i6f8b2/sora_is_out_now_for_plus_and_pro_users/`
- 声の要点:
  - 肯定: 初動でのアクセス性・生成結果に対する評価。
  - 懸念: 品質のばらつき、解像度/待ち時間への不満が混在。

3. Reddit: Kling renewal/billing friction
- URL: `https://www.reddit.com/r/KlingAI/comments/1l8k02c/kling_ai_renewal_issue_no_response_after_payment/`
- 声の要点:
  - 懸念: 更新処理やサポート応答速度への不満。
  - 示唆: 商用利用前に課金運用・サポート導線の確認が必要。

4. Reddit: Seedance 2.0 community first impressions
- URL: `https://www.reddit.com/r/singularity/comments/1lyj3xk/bytedance_drops_seedance_20_the_new_stateoftheart/`
- 声の要点:
  - 肯定: 画質・動き表現への高評価。
  - 懸念: 実務運用でのコスト・提供地域の情報不足。

## 3. Claim別ファクトチェック

| Claim | 検証結果 | 根拠 |
|---|---|---|
| SoraはChatGPTの有料プランで利用できる | Confirmed | OpenAI Help: Sora in ChatGPT |
| Soraのプラン差は解像度/長さ/同時生成数に影響する | Confirmed | OpenAI Help: Sora in ChatGPT |
| Runwayは有料プランで商用利用可能、Freeでは不可 | Confirmed | Runway Help: commercial use |
| SeedanceはByteDance公式で動画生成モデルとして公開されている | Confirmed | Seedance 2.0 / Seedance 1.0 |
| Seedanceは実測速度情報（41秒/10秒1080p）を公式が提示している | Confirmed | Seedance 1.0 |
| Klingは公式IRでサブスク/クレジット運用が案内されている | Confirmed | Kuaishou IR |
| 4ツールの料金・機能は短期間で変わる | Confirmed | 各公式ページで更新前提、コミュニティ報告でも変動影響あり |

## 4. 変動情報の扱い

- 料金・無料枠・クレジット: 変動が速いため記事本文に「**確認日: 2026-02-19**」を明記。
- 商用利用: 契約プランと利用規約で差が出るため、断定を避けて公式規約への確認導線を置く。
- 日本語対応: 公式が明示していない項目は「要確認」と明記し、推測断定を避ける。

## 5. 執筆時の注意

- 本記事は「テキスト/画像→動画生成AI」の比較に限定し、Vrew等の編集ツール比較とは明確に分ける。
- 生成品質は「傾向」として表現し、固定的な優劣断定を避ける。
- 商用利用は「ツール規約 + 第三者権利 + 自社運用ルール」の3点セットで記述する。
