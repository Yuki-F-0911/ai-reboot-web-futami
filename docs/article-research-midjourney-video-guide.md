---
title: "記事リサーチ｜midjourney-video-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-midjourney-video-guide.md"
  - "app/academy/blog/midjourney-video-guide/page.tsx"
  - "components/academyLanding/blog/midjourney-video-guide/MidjourneyVideoGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/midjourney-video-guide/page.tsx"
    - "components/academyLanding/blog/midjourney-video-guide/MidjourneyVideoGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: midjourney-video-guide

## 0. 調査条件
- 対象テーマ: `Midjourney 動画生成 使い方 / Midjourney V1 Video / AI動画 静止画から動画 / Midjourney アニメーション`
- 確認日: `2026-02-20`
- 目的: Midjourneyユーザー（初級〜中級）が、V1 Videoを安全に試し、他ツールとの使い分け判断までできる状態を作る
- 方針: Midjourney公式を最優先。Runway/Kling比較は公式一次情報または公式発表を優先し、不確実情報は `[要確認]` を明示

## 1. 一次情報（公式）ソース
1. [Midjourney Updates: Introducing our V1 Video Model](https://updates.midjourney.com/introducing-our-v1-video-model/)  
   - 2025-06-18公開。V1 Video正式発表日、Extend（+4秒）の仕様、価格方針（画像比8倍）を確認
2. [Midjourney Docs: Video](https://docs.midjourney.com/docs/video)  
   - Image-to-Videoの開始点（Animateボタン）、Auto/Manual、Low/High motion、4秒開始、最大21秒、360p/480p/720pを確認
3. [Midjourney Docs: Video Settings](https://docs.midjourney.com/hc/en-us/articles/32804058614669-Video-Settings)  
   - Video Mode、Auto/Manual、Motion設定、VideoUpscale（HD）とプラン制限を確認
4. [Midjourney Docs: Plans](https://docs.midjourney.com/docs/plans)  
   - Basic/Standard/Pro/Megaの料金、Fast時間、Relax/Stealth差分を確認
5. [Midjourney Docs: Plan Tiers](https://docs.midjourney.com/docs/plan-tiers)  
   - Video generationは全プランFastで利用可、HDアップスケールはStandard以上（Basic不可）を確認
6. [Midjourney Docs: Using Images & Videos Commercially](https://docs.midjourney.com/hc/en-us/articles/27870375276557-Using-Images-Videos-Commercially)  
   - 画像/動画の商用利用可否、会社規模（年商1M USD超）によるPro/Mega要件を確認
7. [Midjourney Terms of Service](https://docs.midjourney.com/docs/terms-of-service)  
   - 生成物利用に関する規約上の責任、権利/禁止事項を確認

## 2. 比較対象の一次情報（Runway / Kling）
1. [Runway Help: Introducing Gen-3 Alpha](https://help.runwayml.com/hc/en-us/articles/30468518520115-Introducing-Gen-3-Alpha)  
   - Gen-3の位置づけ（High-fidelity / Consistent）、Text/Image/Video inputs を確認
2. [Runway Help: Gen-3 Alpha Turbo FAQ](https://help.runwayml.com/hc/en-us/articles/34962917429459-Gen-3-Alpha-Turbo-FAQ)  
   - 5秒/10秒生成、Extendで最大40秒（10秒×3回）を確認
3. [Runway Help: Commercial use](https://help.runwayml.com/hc/en-us/articles/17466859757587-Can-I-use-my-generations-for-commercial-purposes)  
   - Freeは商用不可、有料プランで商用可を確認
4. [Runway Pricing](https://runwayml.com/pricing/)  
   - 現行プランの課金体系を確認（確認日ベース）
5. [PR Newswire: Kling AI 2.0 Master](https://www.prnewswire.com/news-releases/kling-ai-unveils-kling-2-0-master-model-and-multi-elements-editor-2-0-at-beijing-zgc-forum-open-source-night-302436529.html)  
   - Kling 2.0 Master公開と機能訴求（公式発表）を確認
6. [PR Newswire: Kling AI launches subscriptions in China](https://www.prnewswire.com/news-releases/kuaishous-kling-ai-launches-independent-app-introducing-image-editing-and-a-new-subscription-plan-for-global-users-302279154.html)  
   - 課金・クレジット運用の公式発表（地域依存）を確認

## 3. SNS・コミュニティ実声（補助根拠）
> 個人情報・固有IDは記載せず要点のみ。肯定/懸念/つまずきを混在させる。

1. [Reddit: V1 Video model: Tips for creating better videos](https://www.reddit.com/r/midjourney/comments/1lj95e9/v1_video_model_tips_for_creating_better_videos/)  
   - つまずき: 初回は動きが大きすぎる場合があり、`Low Motion` で安定させる実務知見が共有されている
2. [Reddit: Video just dropped](https://www.reddit.com/r/midjourney/comments/1le4x5g/video_just_dropped/)  
   - 肯定: 静止画から短尺モーションを即作れる体験価値が高いという初動評価
3. [Reddit: How are you making videos?](https://www.reddit.com/r/midjourney/comments/1ll7k6d/how_are_you_making_videos/)  
   - つまずき: カメラワークや動きの制御が難しいケースがあり、画像構図設計が重要という声
4. [Reddit: V1 First impression](https://www.reddit.com/r/midjourney/comments/1le6n03/v1_first_impression/)  
   - 懸念: Extendを重ねると品質がぶれる場面があるという報告
5. [Reddit: V1 video features list and issues](https://www.reddit.com/r/midjourney/comments/1legxgx/v1_video_features_list_and_issues/)  
   - 肯定/懸念混在: 4モードの仕様整理は有用だが、手元では破綻例もあるという実感値

## 4. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| C1: Midjourney V1 Videoの正式公開日は2025-06-18 | Introducing our V1 Video Model | Video docs（機能説明） | 採用 |
| C2: V1 Videoは静止画（Image）から動画化する設計 | Video docs | Video Settings | 採用 |
| C3: 開始は4秒、Extendで+4秒ずつ、最大21秒 | Video docs | V1 Video announcement | 採用 |
| C4: 解像度は360p/480p/720p。HDはVideoUpscale | Video docs | Video Settings | 採用 |
| C5: HD（VideoUpscale）はStandard以上で利用可、Basicは不可 | Video Settings | Plan Tiers | 採用 |
| C6: 動画生成自体は全プランでFastモード利用可 | Plan Tiers | Plans | 採用 |
| C7: Auto/ManualとLow/High Motionで挙動を選べる | Video docs | Video Settings | 採用 |
| C8: 商用利用は可能だが、年商1M USD超企業はPro/Mega要件 | Using Images & Videos Commercially | Terms of Service | 採用 |
| C9: DiscordでもWebでもAnimate起点で操作できる | Video docs | Midjourney in Discord（運用導線） | 採用 |
| C10: Runway Gen-3は長尺拡張時の上限（最大40秒）が明示されている | Gen-3 Alpha Turbo FAQ | Introducing Gen-3 Alpha | 採用 |
| C11: RunwayはFree商用不可、有料商用可 | Runway commercial use | Runway pricing（課金体系） | 採用 |
| C12: Klingは公式発表で機能/課金更新が継続しているが、グローバル常設価格の追跡は難しい | Kling公式PR（2件） | コミュニティ実声 | 採用（価格詳細は要確認） |

## 5. 変動情報・不確実情報
- Midjourney料金・秒数上限・アップスケール可否は更新される可能性があるため、本文に確認日 `2026-02-20` を明記
- Klingのグローバル向け常時価格・クレジット詳細は公開導線が地域で分かれる  
  - `[要確認: Kling公式グローバル価格ページの常時参照先]`
- 動画品質（破綻率）はプロンプトと入力画像依存が強いため、絶対比較を避ける

## 6. 記事反映方針
- 冒頭で日付を明記して誤解を防ぐ  
  - 「V1 Video正式リリースは2025-06-18（2026年ではない）」
- 初心者向け導線を2系統で提示  
  - Web: 画像選択 -> Animateボタン -> Auto/Manual -> Motion選択  
  - Discord: 画像呼び出し -> Animate導線 -> 追加設定
- 主要スペックを表で即確認できるようにする  
  - 秒数、解像度、プラン条件、HD可否
- 比較は「向いている工程」で整理  
  - Midjourney: スタイル静止画から短尺モーション化  
  - Runway Gen-3: 編集込みで長めの映像プロトタイピング  
  - Kling: 実験的な映像表現やバリエーション探索（価格詳細は要確認）

## 7. 本文に入れる注記
- 価格・仕様・規約の確認日: `2026-02-20`
- 商用利用は「規約 + 第三者権利 + 契約条件」の3点確認を必須化
- `[要確認: Kling公式グローバル価格ページの安定URL]`

