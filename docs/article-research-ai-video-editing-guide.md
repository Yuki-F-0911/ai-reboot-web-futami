---
title: "リサーチメモ｜ai-video-editing-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-video-editing-guide.md"
  - "app/academy/blog/ai-video-editing-guide/page.tsx"
  - "components/academyLanding/blog/ai-video-editing-guide/AiVideoEditingGuidePage.tsx"
status: "draft"
dependencies:
  upstream: []
  downstream:
    - "app/academy/blog/ai-video-editing-guide/page.tsx"
    - "components/academyLanding/blog/ai-video-editing-guide/AiVideoEditingGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチメモ: ai-video-editing-guide

## 1. 一次情報（公式）まとめ

確認日: **2026-02-20**

1. CapCut Pro価格（公式リソース）
- URL: `https://www.capcut.com/resource/capcut-pro-pc`
- 主要確認点:
  - Pro価格の記載（例: 月額2,180円 / 年額19,800円 / Teams 2,590円/席）。
  - Freeでも編集可能だが、Pro機能エクスポート時にアップグレードが必要という説明。

2. CapCut Desktop記事（公式リソース）
- URL: `https://www.capcut.com/resource/capcut-desktop-download`
- 主要確認点:
  - Pro価格として `US$7.99/月` `US$74.99/年` の記載。
  - Free版の基本編集機能（カット、速度調整、テキスト、エフェクト、1080p出力）記載。
  - Proでのみウォーターマークなしテンプレート・高度機能の説明。

3. CapCut Free利用記事（公式リソース）
- URL: `https://www.capcut.com/resource/can-you-use-capcut-for-free`
- 主要確認点:
  - Free利用が可能であること。
  - 一部テンプレート・エフェクト・素材で有料制限があること。

4. CapCut Material License Agreement
- URL: `https://www.capcut.net/ja-jp/clause/platform-materials-license-agreement`
- 主要確認点:
  - Dual Use Materials は商用/非商用で利用可能。
  - Non-Commercial Materials は非商用のみ。
  - Commercial Sounds は商用利用可だが条件付き。

5. CapCut Terms of Service
- URL: `https://www.capcut.com/clause/terms-of-service`
- 主要確認点:
  - Company Content（素材等）の商用/非商用条件は Material License Agreement で定義される。
  - 利用者は個別のライセンス区分確認が必要。

6. Descript Pricing
- URL: `https://www.descript.com/pricing`
- 主要確認点:
  - Free / Hobbyist / Creator / Business のプラン構成。
  - 有料で字幕翻訳、AI吹替、高度編集機能が拡張。

7. Descript: Language support for transcription and captioning
- URL: `https://help.descript.com/hc/en-us/articles/10242630151309-Language-support-for-transcription-and-captioning`
- 主要確認点:
  - Transcription/Captioningの対応言語一覧に日本語が含まれていない。

8. Descript: Translate and Dub to 30+ languages
- URL: `https://help.descript.com/hc/en-us/articles/4834173597837-Translate-and-Dub-to-30-languages`
- 主要確認点:
  - 日本語を含む30+言語へのAI吹替対応が案内されている。

9. Descript: Translated Captions language options
- URL: `https://help.descript.com/hc/en-us/articles/10164806394509-Translated-Captions-language-options`
- 主要確認点:
  - 日本語を含む多言語字幕翻訳の対応が明示されている。

10. Descript Terms of Service
- URL: `https://www.descript.com/terms-of-service`
- 主要確認点:
  - Input/Outputの権利帰属はユーザー側にある旨。
  - 生成出力の一意性保証がない旨と、権利侵害回避責任は利用者側である旨。

11. VEED Terms and Conditions
- URL: `https://www.veed.io/terms-and-conditions`
- 主要確認点:
  - User Contentの権利はユーザー側に残る。
  - Freeプラン利用時、製品改善目的のデータ利用許諾が含まれる条項あり。

12. VEED比較記事（公式Learn）
- URL: `https://www.veed.io/learn/veed-vs-descript`
- 主要確認点:
  - VEED Lite/Pro/Enterprise の料金レンジ（年払い前提値）が記載。
  - SNS向け編集、自動字幕、テンプレート運用の説明。

13. Adobe Pricing（Premiere Pro）
- URL: `https://www.adobe.com/creativecloud/plans.html`
- 主要確認点:
  - Premiere Pro単体プラン価格（表示例: US$22.99/月、年契約・月払い）。

14. Adobe Firefly FAQ（商用利用）
- URL: `https://helpx.adobe.com/firefly/using/generative-credits-faq.html`
- 主要確認点:
  - Firefly生成物はベータ以外で商用利用可能。
  - ベータ機能生成物は補償対象外である点が明記。

15. YouTube Help（Shorts）
- URL: `https://support.google.com/youtube/answer/15424877?hl=en`
- 主要確認点:
  - Shortsは最長3分。
  - 縦型または正方形比率の動画が対象。

16. TikTok Creative Center（Ad Specs）
- URL: `https://ads.tiktok.com/business/creativecenter/quicktools/ad-specs/en`
- 主要確認点:
  - 推奨比率 9:16。
  - 推奨尺 21〜30秒（広告クリエイティブ基準）。

## 2. コミュニティ実声（SNS/掲示板）

確認日: **2026-02-20**

1. Reddit: CapCut free export制限への不満
- URL: `https://www.reddit.com/r/capcut/comments/1lx7rxf/new_update_no_more_free_exports/`
- 声の要点:
  - 懸念: 更新後に無料エクスポート条件が変わったと感じる声。
  - 示唆: Free運用はテンプレ/素材依存で挙動差が出るため、都度の公開条件確認が必要。

2. Reddit: CapCut templateで透かし発生
- URL: `https://www.reddit.com/r/VideoEditing/comments/1jk0v6b/capcut_now_making_videos_with_templates_have/`
- 声の要点:
  - 懸念: テンプレート利用時にウォーターマークが入るケース報告。
  - 示唆: 「無料=常に透かしなし」ではない前提で素材選定が必要。

3. Reddit: Premiere Pro課金価値の議論
- URL: `https://www.reddit.com/r/videoediting/comments/1li0ix0/is_premiere_pro_worth_it_in_2026/`
- 声の要点:
  - 肯定: 長期運用・他Adobe製品連携の強み。
  - 懸念: 個人初心者には費用対効果が合わないケースあり。

4. Reddit: Descript subscription評価
- URL: `https://www.reddit.com/r/descript/comments/1bk5v4f/what_do_you_think_of_descript_worth_subscription/`
- 声の要点:
  - 肯定: テキスト編集起点のワークフローの速さ。
  - 懸念: 使い方が噛み合わないとコストが先行しやすい。

5. Reddit: 初心者向け編集ソフト相談
- URL: `https://www.reddit.com/r/VideoEditing/comments/1j0foeg/need_a_software_recommendation_for_noob/`
- 声の要点:
  - 肯定: まずCapCut等で短尺運用の習慣化を勧める声。
  - 懸念: 早すぎる高額課金は継続率が落ちるという指摘。

## 3. Claim別ファクトチェック

| Claim | 検証結果 | 根拠1 | 根拠2 | 補足 |
|---|---|---|---|---|
| CapCut Pro価格は一意ではなく、表示条件で変わる | Confirmed | CapCut Pro PC記事（円建て） | CapCut Desktop記事（ドル建て） | 地域・通貨・プラン導線で価格差。購入前に課金画面で確認必須。 |
| CapCut無料版でも編集は可能だが、機能/素材で制限がある | Confirmed | CapCut Free記事 | CapCut Desktop記事（Free/Pro差分） | テンプレ・素材で透かし/制限が変動。 |
| Descriptは転写日本語と翻訳/吹替日本語で対応状況が異なる | Confirmed | Descript language support（転写言語） | Translate and Dub / Translated Captions（日本語含む） | 転写は未対応、翻訳・吹替は日本語対応。 |
| 商用利用可否は「ツール本体」より素材ライセンス条件が重要 | Confirmed | CapCut Materials License | VEED Terms / Descript Terms | 同じツールでも素材ごとに条件差。 |
| Premiere Proの課金判断は「運用頻度×連携価値」で変わる | Confirmed | Adobe Pricing | Reddit実声（Premiere課金価値議論） | 初心者は無料/低額からの段階導入が妥当。 |
| Shorts/TikTok最適化は尺と縦型比率を先に固定すると再現性が上がる | Confirmed | YouTube Help（3分・縦/正方形） | TikTok Ad Specs（9:16・推奨尺） | Instagramは仕様更新頻度が高く都度確認が必要。 |

## 4. 変動情報の扱い

- 料金（CapCut / Descript / VEED / Premiere）:
  - **確認日: 2026-02-20** を本文明記。
  - 表示通貨・年払い/月払い・地域差で値が変動するため、断定ではなく「公式購入画面確認」を併記。
- 日本語対応（Descript）:
  - 機能別に明記（転写は未対応、翻訳/吹替は対応）。
- 商用利用:
  - 規約と素材ライセンスを分離して説明し、最終責任は利用者にあることを記載。

## 5. 執筆時の注意

- 主軸は「初心者が無料で試して、必要時だけ課金する判断基準」に置く。
- CapCutの価格表記は複数公式値があるため、本文で差異を明示して誤認を防ぐ。
- アカデミーCTAは3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と学ぶ環境）で書き、特定ツール操作習得の文脈にしない。
