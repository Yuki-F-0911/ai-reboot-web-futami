---
title: "記事リサーチ｜ai-smartphone-apps"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-smartphone-apps.md"
  - "app/academy/blog/ai-smartphone-apps/page.tsx"
  - "components/academyLanding/blog/ai-smartphone-apps/AiSmartphoneAppsPage.tsx"
status: "draft"
dependencies:
  upstream:
    - "../project-config.yaml"
  downstream:
    - "app/academy/blog/ai-smartphone-apps/page.tsx"
    - "components/academyLanding/blog/ai-smartphone-apps/AiSmartphoneAppsPage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-smartphone-apps

## 0. 調査条件
- 対象テーマ: `AI アプリ おすすめ スマホ 2026`
- 主KW: `AI アプリ おすすめ スマホ 2026`
- サブKW:
  - `iPhone AI アプリ`
  - `Android AI アプリ`
  - `無料 AI アプリ 日本語`
- ターゲット: 個人（AI初心者・スマホメインユーザー）
- 確認日: `2026-02-20`
- 収集方針:
  - App Store評価は Apple Lookup API（JPストア）で `averageUserRating` / `userRatingCount` を取得
  - Google Play評価は公式ページの JSON-LD `ratingValue` / `ratingCount` を取得
  - Google Playダウンロード数は公式ページ表示のDL帯（`10,000,000+` 形式）を取得
  - App StoreはDL数が公開されないため、評価件数で代替し、DL数は `[要確認]` 扱いにする

## 1. 一次情報（公式）ソース
1. [Apple Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
2. [Google Play: ChatGPT](https://play.google.com/store/apps/details?id=com.openai.chatgpt&hl=en_US&gl=US)
3. [Google Play: Google Gemini](https://play.google.com/store/apps/details?id=com.google.android.apps.bard&hl=en_US&gl=US)
4. [Google Play: Claude by Anthropic](https://play.google.com/store/apps/details?id=com.anthropic.claude&hl=en_US&gl=US)
5. [Google Play: Perplexity](https://play.google.com/store/apps/details?id=ai.perplexity.app.android&hl=en_US&gl=US)
6. [Google Play: Microsoft Copilot](https://play.google.com/store/apps/details?id=com.microsoft.copilot&hl=en_US&gl=US)
7. [Google Play: Canva](https://play.google.com/store/apps/details?id=com.canva.editor&hl=en_US&gl=US)
8. [Google Play: Adobe Express](https://play.google.com/store/apps/details?id=com.adobe.spark.post&hl=en_US&gl=US)
9. [Google Play: Photoroom](https://play.google.com/store/apps/details?id=com.photoroom.app&hl=en_US&gl=US)
10. [Google Play: Picsart](https://play.google.com/store/apps/details?id=com.picsart.studio&hl=en_US&gl=US)
11. [Google Play: Remini](https://play.google.com/store/apps/details?id=com.bigwinepot.nwdn.international&hl=en_US&gl=US)
12. [Google Play: Otter](https://play.google.com/store/apps/details?id=com.aisense.otter&hl=en_US&gl=US)
13. [Google Play: Recorder](https://play.google.com/store/apps/details?id=com.google.android.apps.recorder&hl=en_US&gl=US)
14. [Google Play: DeepL](https://play.google.com/store/apps/details?id=com.deepl.mobiletranslator&hl=en_US&gl=US)
15. [Google Play: Google Translate](https://play.google.com/store/apps/details?id=com.google.android.apps.translate&hl=en_US&gl=US)
16. [Google Play: Microsoft Translator](https://play.google.com/store/apps/details?id=com.microsoft.translator&hl=en_US&gl=US)
17. [Google Play: Papago](https://play.google.com/store/apps/details?id=com.naver.labs.translator&hl=en_US&gl=US)
18. [Google Play: Notion](https://play.google.com/store/apps/details?id=notion.id&hl=en_US&gl=US)
19. [Google Play: Grammarly](https://play.google.com/store/apps/details?id=com.grammarly.android.keyboard&hl=en_US&gl=US)
20. [OpenAI ChatGPT Pricing](https://openai.com/chatgpt/pricing/)
21. [Anthropic Pricing](https://www.anthropic.com/pricing)
22. [Perplexity Pro](https://www.perplexity.ai/pro)
23. [Canva Pricing](https://www.canva.com/pricing/)
24. [Adobe Express Pricing](https://www.adobe.com/express/pricing)
25. [Photoroom Pricing](https://www.photoroom.com/pricing)
26. [Picsart Pricing](https://picsart.com/pricing)
27. [Otter Pricing](https://otter.ai/pricing)
28. [Notta Pricing](https://www.notta.ai/pricing)
29. [LINE WORKS AiNote 料金](https://line-works.com/ai-product/ainote/price/)
30. [DeepL Pro](https://www.deepl.com/pro)
31. [Notion Pricing](https://www.notion.so/pricing)
32. [Grammarly Plans](https://www.grammarly.com/plans)

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit: claude for ios has arrived](https://www.reddit.com/r/ClaudeAI/comments/1d5oc8q/claude_for_ios_has_arrived/)
   - 傾向: 肯定。音声入力・UI品質への評価。
2. [Reddit: Claude Android app is here](https://www.reddit.com/r/ClaudeAI/comments/1hl7ho7/claude_android_app_is_here/)
   - 傾向: 肯定/懸念混在。導入歓迎と、無料枠上限への言及。
3. [Reddit: Perplexity app bugs and missing features](https://www.reddit.com/r/perplexity_ai/comments/1mk4v44/perplexity_app_bugs_and_missing_features/)
   - 傾向: 懸念。モバイル版の挙動・同期面の課題。
4. [Reddit: Otter AI not transcribing files accurately](https://www.reddit.com/r/Journalism/comments/17za4kg/otter_ai_not_transcribing_files_accurately/)
   - 傾向: 懸念。固有名詞・専門語の補正工数が必要。
5. [Reddit: Pixel Recorder speaker labels discussion](https://www.reddit.com/r/GooglePixel/comments/t5k15l/pixel_6_recorder_is_there_a_way_to_rename_speaker/)
   - 傾向: つまずき。話者ラベルの扱い・運用制約に関する実声。

## 3. 2026年スナップショット（20アプリ）

注記:
- App StoreのDL数は公開されないため `N/A`。
- Google PlayのDL帯はストア表示値（`xx,xxx,xxx+`）。
- 評価は確認時点のスナップショット。

| # | アプリ | カテゴリ | App Store評価（件数） | Google Play評価（件数 / DL帯） | 無料プラン制限（要点） | 日本語対応 |
|---|---|---|---|---|---|---|
| 1 | ChatGPT | チャット | 4.8（1,407,664） | 4.8（39,452,562 / 1,000,000,000+） | 無料あり。高負荷時・高度機能は制限あり | 対応 |
| 2 | Google Gemini | チャット | 4.6（484,384） | 4.6（28,617,118 / 1,000,000,000+） | 無料あり。上位機能はGoogle One系で拡張 | 対応 |
| 3 | Claude | チャット | 4.6（9,181） | 4.6（204,177 / 10,000,000+） | 無料あり。利用上限あり | 対応 |
| 4 | Perplexity | チャット | 4.7（74,817） | 4.6（1,800,790 / 50,000,000+） | 無料あり。Pro系機能は回数・機能制限 | 対応 |
| 5 | Microsoft Copilot | チャット | 4.7（70,900） | 4.7（2,168,171 / 50,000,000+） | 無料あり。Copilot Proは有料 | 対応 |
| 6 | Canva | 画像 | 4.7（496,282） | 4.8（24,515,872 / 500,000,000+） | 無料あり。ブランド機能等はPro | 対応 |
| 7 | Adobe Express | 画像 | 4.7（28,695） | 4.6（715,422 / 100,000,000+） | 無料あり。Premium機能は有料 | 対応 |
| 8 | Photoroom | 画像 | 4.7（33,028） | 4.7（3,787,289 / 100,000,000+） | 無料あり。高機能/商用用途は有料プラン中心 | 対応 |
| 9 | Picsart | 画像 | 4.5（246,724） | 4.1（12,247,090 / 1,000,000,000+） | 無料あり。広告・一部機能制限あり | 対応 |
| 10 | Remini | 画像 | 4.5（49,116） | 4.1（5,698,096 / 500,000,000+） | 無料あり。回数制限/高画質機能は有料中心 | 対応 |
| 11 | Otter | 音声 | 4.7（5,100） | 4.3（25,947 / 5,000,000+） | 無料: 月300分・1会話30分（公式） | 部分対応（英語中心） |
| 12 | Notta | 音声 | 4.3（22,514） | N/A（提供ページ確認できず） | 無料: 月120分（公式） | 対応 |
| 13 | LINE WORKS AiNote | 音声 | 4.6（4,106） | N/A（提供ページ確認できず） | 無料: 月300分/音声1件60分（公式） | 対応 |
| 14 | Google Recorder | 音声 | iOS提供なし | 3.3（14,719 / [要確認]） | 基本無料（Pixel向け） | 対応（端末依存） |
| 15 | DeepL | 翻訳 | 4.7（33,979） | 4.6（395,500 / 10,000,000+） | 無料あり。用量・機能拡張はPro | 対応 |
| 16 | Google Translate | 翻訳 | 3.6（20,571） | 4.3（9,062,757 / 1,000,000,000+） | 無料 | 対応 |
| 17 | Microsoft Translator | 翻訳 | 4.5（30,471） | 4.3（792,044 / 50,000,000+） | 無料 | 対応 |
| 18 | Papago | 翻訳 | 4.5（14,666） | 4.6（166,579 / 10,000,000+） | 無料 | 対応（日韓強め） |
| 19 | Notion | 生産性 | 4.7（43,438） | 4.7（337,636 / 10,000,000+） | 無料あり。Notion AI本格利用は有料帯中心 | 対応 |
| 20 | Grammarly | 生産性 | 4.5（3,472） | 4.2（256,810 / 50,000,000+） | 無料あり。高度な校正はPremium | 部分対応（英語中心） |

## 4. iPhone vs Android 差分（記事反映用）
- iOS限定/強め:
  - Notta、LINE WORKS AiNoteはApp Store側の導線が明確。Play側は同一アプリの公式ページ確認に難あり。
- Android限定:
  - Google RecorderはiOS非提供（Pixel系利用が前提）。
- 両対応で差が少ない:
  - ChatGPT / Gemini / Claude / Perplexity / Copilot / Canva / Adobe Express / DeepL / Google Translate / Papago / Notion / Grammarly

## 5. 主要Claimの照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 2026年時点で主要AIチャット5アプリはスマホで高評価かつ大規模利用されている | App Store Lookup（各アプリの評価・件数） | Google Play（ratingCount / DL帯） | 採用 |
| App StoreはDL数の公開が弱く、評価件数で比較する方が実務的 | Apple Search/Lookup API項目 | 各App StoreページにDL帯表示なし | 採用 |
| 無料で強いのは翻訳系（Google Translate, Microsoft Translator, Papago） | 各公式ストアページ（無料提供） | 料金ページ不在 + アプリ課金導線の差 | 採用 |
| 音声文字起こしは無料枠が明確で、上限が早く到達しやすい | Otter Pricing（月300分/30分） | Notta Pricing（月120分）/ AiNote料金（300分） | 採用 |
| 日本語対応の実用度は「対応有無」より用途依存（翻訳、議事録、長文チャット）で差が出る | ストア説明（対応言語） | SNS実声（Perplexity/Otter/Claude） | 採用 |
| iPhone vs Androidで使えるアプリ差は一部残る | App StoreでAiNote/Notta確認 | Google Playで同名導線の欠落あり | 採用（要注記） |

## 6. 不確実情報・要確認事項
- `[要確認: Google Recorder の Google Play DL帯]`
  - ストアHTMLの抽出上、関連アプリ数値混入の可能性があるため記事ではDL帯を断定しない。
- `[要確認: Notta / LINE WORKS AiNote の Google Play公式ページ]`
  - 2026-02-20時点で確実な公式ページを確認できず、iOS中心で記載する。
- `[要確認: ChatGPT/Gemini/Claude の無料メッセージ上限の厳密値]`
  - 変動しやすく、公式も固定回数を常時公開しないため「制限あり」表現に留める。

## 7. 記事反映方針
- 20アプリをカテゴリ別で提示しつつ、初心者向けに「無料で始める順序」を明示する。
- iPhone vs Android差は、可用性差（Recorder / Notta / AiNote）に絞って誤認を避ける。
- 「完全無料TOP5」は翻訳・録音・軽量チャット中心で選定し、課金導線を分離して説明する。
- 課金判断は「使用頻度」「回数上限」「業務インパクト」「日本語品質」でフレーム化する。
- アカデミーCTAは3本柱のみで記述し、特定アプリ習得スクールと誤解される表現は避ける。

