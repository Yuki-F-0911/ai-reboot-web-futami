---
title: "記事リサーチ｜elevenlabs-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-elevenlabs-guide.md"
  - "app/academy/blog/elevenlabs-guide/page.tsx"
  - "components/academyLanding/blog/elevenlabs-guide/ElevenlabsGuidePage.tsx"
status: "draft"
dependencies:
  upstream:
    - "../project-config.yaml"
  downstream:
    - "app/academy/blog/elevenlabs-guide/page.tsx"
    - "components/academyLanding/blog/elevenlabs-guide/ElevenlabsGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: elevenlabs-guide

## 0. 調査条件
- 対象テーマ: `ElevenLabs 使い方`
- 主KW: `ElevenLabs 使い方`
- サブKW:
  - `AI音声合成 ツール`
  - `テキスト読み上げ AI`
  - `ナレーション 自動化 2026`
- ターゲット: 初心者〜中級者（YouTube・ポッドキャスト・動画制作者・企業広報）
- 確認日: `2026-02-20`
- 方針: 料金・無料枠・商用利用・音声クローン規約は公式情報優先。日本語品質は公式記載＋コミュニティ実声で補完。

## 1. 一次情報（公式）ソース
1. [ElevenLabs Pricing](https://elevenlabs.io/pricing)
2. [How do I use text to speech?](https://help.elevenlabs.io/hc/en-us/articles/13313366123153-How-do-I-use-text-to-speech)
3. [Which languages are supported?](https://help.elevenlabs.io/hc/en-us/articles/13313483690001-Which-languages-are-supported)
4. [Text to Speech（公式Docs）](https://elevenlabs.io/docs/product-guides/playground/text-to-speech)
5. [How many Professional Voice Clones can I have?](https://help.elevenlabs.io/hc/en-us/articles/24352686926609-How-many-Professional-Voice-Clones-can-I-have)
6. [Can I clone my own voice?](https://help.elevenlabs.io/hc/en-us/articles/13016469570833-Can-I-clone-my-own-voice)
7. [Voice Changer（Speech to Speech）](https://elevenlabs.io/docs/capabilities/speech-to-speech/voice-changer)
8. [ElevenLabs Terms of Service](https://elevenlabs.io/terms)
9. [VOICEVOX 製品ページ（料金）](https://voicevox.hiroshiba.jp/product/)
10. [VOICEVOX 利用規約](https://voicevox.hiroshiba.jp/term/)
11. [NijiVoice Docs: Getting Started](https://docs.nijivoice.com/getting-started)
12. [NijiVoice Docs: クレジット表記ガイド](https://docs.nijivoice.com/guideline/credit)
13. [NijiVoice 公式サイト](https://nijivoice.com)
14. [CoeFont 料金ページ（selectPlan）](https://coefont.cloud/mall/selectPlan)
15. [CoeFont ユーザーガイド](https://coefont.studio/help)

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit: If you're not using ElevenLabs for podcasting...](https://www.reddit.com/r/ElevenLabs/comments/1j95a38/if_youre_not_using_elevenlabs_for_podcasting/)
   - 傾向: 肯定。英語ナレーションの自然さ評価が高い。
2. [Reddit: ElevanLabs cost budgeting](https://www.reddit.com/r/ElevenLabs/comments/1jlv55q/elevanlabs_cost_budgeting/)
   - 傾向: 懸念。長尺運用でクレジット管理が難しいという声。
3. [Reddit: ElevenLabs Japanese support](https://www.reddit.com/r/ElevenLabs/comments/1f9i1w8/elevenlabs_japanese_support/)
   - 傾向: つまずき。固有名詞・漢字読みに調整が必要という報告。
4. [Reddit: Voice clone verification](https://www.reddit.com/r/ElevenLabs/comments/1jh0f0c/voice_clone_verification/)
   - 傾向: 懸念。本人確認や安全審査に時間がかかるケース。
5. [Reddit: Billing and credit reset issue](https://www.reddit.com/r/ElevenLabs/comments/1j9a34j/billing_and_credit_reset_issue/)
   - 傾向: 懸念。請求周期とクレジット残高理解の不足で混乱しやすい。

## 3. 主要ファクト整理（ElevenLabs 料金・無料枠）

| プラン | 月額（公式表示） | クレジット | 商用利用 | 主な制限（2026-02-20確認） |
|---|---:|---:|---|---|
| Free | `$0` | `10k / 月` | 不可（非商用） | クレジット少量、商用不可、機能制限あり |
| Starter | `$5 / 月` | `30k / 月` | 可能 | 初期導入向け |
| Creator | `$11 / 月` | `100k / 月` | 可能 | 音声制作の継続運用向け |
| Pro | `$99 / 月` | `500k / 月` | 可能 | チーム運用・大量生成向け |

補足:
- 価格は公式Pricingページに表示される標準月額。年払い・キャンペーンは変動するため都度確認が必要。
- Termsには「Freeプランは非商用」「Paidプランは商用利用可」の整理が明記されている（確認日: 2026-02-20）。

## 4. 主要ファクト整理（音声クローン・悪用防止）

| 論点 | 公式整理 | 実務上の注意 |
|---|---|---|
| クローン可能な声 | 本人の声、または明示許諾を得た声のみ | 社内利用でも同意記録を残す |
| 年齢/本人確認 | 18歳以上、カード認証や検証フローあり | 導入前に承認担当を決める |
| Professional Voice Clone枠 | Free/Starter: 0、Creator/Pro: 1（上位プランで増加） | 本番運用前に枠上限を確認 |
| 安全ポリシー | 著名人なりすまし等の悪用を禁止・検知 | 外部公開前に社内審査を通す |

## 5. 日本語対応状況（公式 + 実声）
- 公式ヘルプでは日本語は対応言語に含まれる。
- 公式Docsでは `Multilingual v2` と `Eleven v3` 系列で日本語対応が示される。
- Reddit実声では「全体品質は高いが、漢字読みに補正が必要」「固有名詞はルビ相当の工夫が必要」という傾向がある。
- したがって、記事では「日本語は正式対応済み。ただし読み上げ原稿の前処理（読み・区切り・英数字の表記統一）が品質を左右する」と整理する。

## 6. 競合比較の一次情報整理（VOICEVOX / NijiVoice / CoeFont）

| サービス | 価格情報（公式） | 商用利用 | 日本語強み | 注意点 |
|---|---|---|---|---|
| ElevenLabs | Free/Starter/Creator/Proを公式公開 | Paidで商用可 | 多言語・ナレーション自然度が高い | クレジット管理とクローン規約理解が必須 |
| VOICEVOX | 製品ページに「無料」記載 | 規約遵守で商用可 | 日本語TTS特化、導入しやすい | 話者ごとの利用条件確認が必要 |
| NijiVoice | 公式Docsと公式サイトあり（料金詳細は要確認） | 規約とクレジット表記ルールあり | 日本語・感情表現訴求 | `[要確認: 2026-02-20時点の公開価格体系]` |
| CoeFont | selectPlanでFree/Standard/Plusを公開 | プラン条件に応じて可 | 日本語音声資産が多い | 無料枠は文字数・クレジット表記条件に制約あり |

## 7. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| ElevenLabsは2026年2月時点でFree/Starter/Creator/Proの段階プランを公開している | ElevenLabs Pricing | ElevenLabs Terms（Free/paidの利用条件） | 採用 |
| Freeは非商用、Paidは商用利用可 | ElevenLabs Terms | Pricing説明文 | 採用 |
| 音声クローンは本人または明示許諾が必要で、悪用防止の安全フローがある | Can I clone my own voice? | Voice Changer docs / PVC関連ヘルプ | 採用 |
| 日本語は公式対応言語に含まれる | Which languages are supported? | Text to Speech docs（モデル対応言語） | 採用 |
| 日本語品質は原稿前処理で差が出る | Reddit Japanese support実声 | ElevenLabs公式ガイド（音声品質調整項目） | 採用（補助根拠付き） |
| VOICEVOXは無料で商用利用可能（規約条件あり） | VOICEVOX 製品ページ | VOICEVOX 利用規約 | 採用 |
| CoeFontはFree/有料プランで利用条件が分かれる | CoeFont selectPlan | CoeFont ユーザーガイド | 採用 |

## 8. 不確実情報・要確認事項
- `[要確認: NijiVoiceの最新料金詳細]`
  - 公式Docsでは価格詳細を直接確認しづらく、公式サイトの動的表示依存がある。
- `[要確認: ElevenLabsの地域別税/請求表示]`
  - 支払い通貨・税表示はアカウント地域で変わる可能性がある。
- `[要確認: 日本語読み上げの定量評価値（WER/CER）]`
  - 公式で日本語専用の公開指標は限定的。

## 9. 記事反映方針
- 冒頭で「最初にFreeで試し、収益運用はPaidへ切り替える」判断軸を提示する。
- 手順は「アカウント作成 → 初回音声生成 → 音声クローン」の順に初心者が迷わない形にする。
- 日本語対応は「対応済み」と断定しつつ、固有名詞や漢字読みの実務的な補正手順を提示する。
- 比較パートは価格・商用可否・日本語運用負荷で表形式に統一する。
- LINE CTAは2〜3回挿入し、記事末尾アカデミーCTAは3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境）のみで記述する。
