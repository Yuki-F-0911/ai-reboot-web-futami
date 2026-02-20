---
title: "記事リサーチ｜ai-transcription-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-transcription-guide.md"
  - "app/academy/blog/ai-transcription-guide/page.tsx"
  - "components/academyLanding/blog/ai-transcription-guide/AiTranscriptionGuidePage.tsx"
status: "draft"
dependencies:
  upstream:
    - "../project-config.yaml"
  downstream:
    - "app/academy/blog/ai-transcription-guide/page.tsx"
    - "components/academyLanding/blog/ai-transcription-guide/AiTranscriptionGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-transcription-guide

## 0. 調査条件
- 対象テーマ: `AI 文字起こし アプリ 比較`
- 主KW: `AI 文字起こし アプリ 比較`
- サブKW:
  - `Notta 使い方`
  - `Clova Note`
  - `Whisper 文字起こし`
  - `録音 自動 テキスト化`
- ターゲット: 個人・法人（会議録、インタビュー、講義）
- 確認日: `2026-02-20`
- 方針: 料金・無料枠・連携可否は公式情報優先。精度は公式説明＋第三者評価（コミュニティ実声）で補完。

## 1. 一次情報（公式）ソース
1. [Notta Pricing](https://www.notta.ai/pricing)
2. [Notta: Integrate with Zoom, Google Meet, or Teams meetings](https://www.notta.ai/en/help-center/integration-meeting)
3. [Notta: Connect Google Calendar to Notta](https://www.notta.ai/en/help-center/connect-google-calendar)
4. [Notta: Why is my Notta transcribed text inaccurate?](https://www.notta.ai/en/help-center/transcription-inaccurate)
5. [LINE WORKS AiNote 料金ページ](https://line-works.com/ai-product/ainote/price/)
6. [LINE WORKS AiNote サービス紹介](https://line-works.com/ai-product/ainote/)
7. [CLOVA Note 終了のお知らせ](https://clovanote.naver.com/)
8. [Otter Pricing](https://otter.ai/pricing)
9. [Otter: Supported languages](https://help.otter.ai/hc/en-us/articles/360060257534-Supported-languages)
10. [Otter: What does Otter support?](https://help.otter.ai/hc/en-us/articles/1500003556801-What-does-Otter-support)
11. [Otter: How does Otter AI transcription work?](https://help.otter.ai/hc/en-us/articles/8217309157268-How-does-Otter-AI-transcription-work)
12. [OpenAI API Pricing（Speech to Text）](https://openai.com/api/pricing/)
13. [OpenAI docs: Speech to text guide](https://platform.openai.com/docs/guides/speech-to-text)
14. [OpenAI Whisper リポジトリ](https://github.com/openai/whisper)
15. [OpenAI Whisper 論文](https://arxiv.org/abs/2212.04356)
16. [Google Blog: Recorder app (Pixel)](https://blog.google/products/pixel/recorder/)

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit: Whisper API gives inaccurate timestamps/transcriptions](https://www.reddit.com/r/OpenAI/comments/1h6x6ji/whisper_api_gives_inaccurate_timestamps_and/)
   - 傾向: 懸念。録音条件や話者重なりで誤認識が増える報告。
2. [Reddit: Otter AI not transcribing files accurately](https://www.reddit.com/r/Journalism/comments/17za4kg/otter_ai_not_transcribing_files_accurately/)
   - 傾向: 懸念。固有名詞・専門用語の補正が必要という声。
3. [App Store: LINE WORKS AiNote レビュー](https://apps.apple.com/jp/app/line-works-ainote/id6448897762)
   - 傾向: 肯定/懸念が混在。会議メモ効率化の肯定と、固有名詞や雑音時の修正コストへの言及。
4. [Reddit: Pixel Recorder speaker labels discussion](https://www.reddit.com/r/GooglePixel/comments/t5k15l/pixel_6_recorder_is_there_a_way_to_rename_speaker/)
   - 傾向: つまずき。話者ラベルの扱いに制約があるという声。
5. [Reddit: Whisper model quality depends on source audio](https://www.reddit.com/r/OpenAI/comments/1h6x6ji/whisper_api_gives_inaccurate_timestamps_and/)
   - 傾向: 懸念。音質・マイク距離・重なり発話の影響が大きい。

## 3. 主要ファクト整理（2026年料金・無料枠）

| サービス | 無料プラン範囲 | 有料プラン主要価格（公式） | 補足 |
|---|---|---|---|
| Notta | 月120分 | Pro: `$8.17/月`（年払い）、`$13.49/月`（月払い） / Business: `$16.67/月`（年払い）、`$27.99/月`（月払い） | Enterpriseは要問い合わせ |
| LINE WORKS AiNote（旧Clova Note後継） | 月300分、音声1件60分まで | SOLO: `9,600円/年`（1席）または`1,200円/月` / TEAM: `16,800円/年`（チーム） | 価格・上限はプランにより差分 |
| Otter.ai | 月300分、1会話30分まで、文字起こしインポート3回（生涯） | Pro: `$16.99/月` または `$8.33/月`（年払い） / Business: `$30/月` または `$20/月`（年払い） | Team契約は最少席数あり |
| Whisper（OpenAI API） | OSS利用は自己ホストで従量なし（環境コスト別） | API: `gpt-4o-mini-transcribe $3/1M input tokens`、`gpt-4o-transcribe $6/1M input tokens` | モデル選択で精度/コスト調整 |
| Google Recorder | Pixel端末アプリとして実質無料 | なし | 端末依存。クラウド会議bot型ではない |

## 4. 主要ファクト整理（Zoom / Meet / Teams 連携）

| サービス | Zoom | Google Meet | Microsoft Teams | 根拠 |
|---|---|---|---|---|
| Notta | 対応 | 対応 | 対応 | Notta統合ページ・カレンダー連携説明 |
| LINE WORKS AiNote | 対応 | 対応 | 対応 | 公式ページに「Web会議録音（Zoom/Meet/Teams/Webex）」記載 |
| Otter.ai | 対応 | 対応 | 対応 | 料金ページに連携記載（プラン差あり） |
| Whisper | 非対応（標準機能なし） | 非対応（標準機能なし） | 非対応（標準機能なし） | API/OSS提供であり、会議連携は自前実装前提 |
| Google Recorder | 非対応（標準機能なし） | 非対応（標準機能なし） | 非対応（標準機能なし） | Pixel録音アプリで会議bot連携機能は公式記載なし |

## 5. 日本語精度（公式スペック + 第三者評価）
- 共通確認事項:
  - Notta / AiNote / Otter は公式で「高精度」「AI transcription」を訴求するが、WER/CERの公開値は限定的。
  - Otterヘルプは言語対応記載に揺れがあり、ページ間で表現差がある（`Supported languages` と `What does Otter support?` で差分）。
  - Whisperは論文で多言語性能を示すが、実運用精度は音質・話者重なり・固有名詞で大きく変動。
- 実務で発生しやすい誤り:
  - 方言・早口・重なり発話で誤認識率が上がる
  - 人名/社名/製品名など固有名詞での変換誤り
  - 話者分離（speaker diarization）は会議音質に依存
- 第三者評価（補助根拠）:
  - Reddit/App Store上では「下書きとしては有効だが、配布前に人手校正が必須」が共通傾向。

## 6. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| Nottaは2026時点で無料120分/月、有料はPro/Businessで段階化 | Notta Pricing | Notta Help（プラン/利用枠） | 採用 |
| Otter無料は300分/月かつ1会話30分制限 | Otter Pricing | Otterヘルプ（free plan説明） | 採用 |
| Clova Noteは終了し、法人向け後継はLINE WORKS AiNote | CLOVA Note公式告知 | LINE WORKS AiNote公式 | 採用 |
| Whisperは標準で会議ツール連携を持たず、API/OSS実装前提 | OpenAI speech-to-text docs | Whisper GitHub | 採用 |
| 会議連携（Zoom/Meet/Teams）はNotta/Otter/AiNoteで対応、Recorder/Whisperは非bot型 | Notta integration docs | Otter pricing + LINE WORKS公式 + Google Recorder公式説明 | 採用 |
| 日本語精度はツール単体より録音条件で差が出る | Notta精度改善ヘルプ | Otter transcription FAQ / Reddit実声 | 採用 |

## 7. 不確実情報・要確認事項
- `[要確認: Otterの日本語サポート表記]`
  - Otterの公式ヘルプページ間で記載に差分があるため、導入前に最新ヘルプで再確認が必要。
- `[要確認: Google Recorderの言語/機能差分]`
  - Pixel世代・OSバージョン差で利用機能が異なる可能性。
- `[要確認: LINE WORKS AiNote TEAMの月額換算表記]`
  - 公式価格は年額中心のため、月額比較は見積条件で変動。

## 8. 記事反映方針
- Clova Noteを「現行比較対象」ではなく「終了済みサービスとしての注意点」として整理し、実運用比較はAiNoteで提示する。
- 比較軸を「リアルタイム」「録音ファイル」「会議連携」「日本語精度」「無料枠」「有料価値」に固定。
- 「音声→文字起こし→ChatGPT要約→議事録テンプレ転記」の実務フローを具体化する。
- LINE CTAは2〜3回、アカデミーCTAは3本柱のみで設計し、ツール操作習得の誤解を避ける。
