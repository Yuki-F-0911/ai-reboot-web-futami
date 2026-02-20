---
title: "記事リサーチ｜AI OCR 書類自動化ガイド"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-document-ocr-guide.md"
  - "app/academy/blog/ai-document-ocr-guide/page.tsx"
  - "components/academyLanding/blog/ai-document-ocr-guide/AiDocumentOcrGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/ai-document-ocr-guide/page.tsx"
    - "components/academyLanding/blog/ai-document-ocr-guide/AiDocumentOcrGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-document-ocr-guide

## 1. 記事メタ
- slug: `ai-document-ocr-guide`
- 主KW: `AI OCR 書類 自動化`
- サブKW:
  - `AI 書類読み取り 2026`
  - `OCR 請求書 自動処理`
  - `帳票 AI 自動入力`
- ターゲット: 法人（経理・バックオフィス担当）
- 確認日: `2026-02-20`

## 2. 一次情報（公式）ソース
1. AIRead（公式）サービス概要
   - https://airead.ai/
   - 取得論点: 画像処理・仕分け・文字認識・CSV出力を含むAI OCR。オンプレ/クラウド/LGWANで利用可能。

2. AIRead on Cloud 価格
   - https://airead.ai/airead-on-cloud/
   - 取得論点: フリー・スタンダードプランの月額と従量課金単価（例: 100枚プラン13,200円/月、超過110円/枚など）を明示。

3. AIRead 電子帳簿保存法FAQ
   - https://airead.ai/faq_journalize/
   - 取得論点: 電帳法対応に必要な「取引年月日/金額/取引先」で検索できる形式への出力に言及。

4. DX Suite 利用料金（公式ヘルプ）
   - https://dx-suite.zendesk.com/hc/ja/articles/36811321425945
   - 取得論点: 基本料金とデータ処理料金（トライアル/スタンダード/ライトの単価）を明示。

5. DX Suite 電子取引データ保存（公式ヘルプ）
   - https://dx-suite.zendesk.com/hc/ja/articles/33857266427161
   - 取得論点: 電帳法保存要件に関連する検索項目（取引年月日/金額/取引先）の設定に言及。

6. Microsoft Document Intelligence 価格（公式 API）
   - https://prices.azure.com/api/retail/prices?api-version=2023-01-01-preview&currencyCode=USD&$filter=productName%20eq%20%27Azure%20Document%20Intelligence%27%20and%20armRegionName%20eq%20%27eastasia%27%20and%20priceType%20eq%20%27Consumption%27
   - 取得論点: S0 Batch Read / Layout / Custom pages 等の従量単価を取得可能（地域・SKUごと）。

7. Microsoft Document Intelligence 精度・信頼度
   - https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence?view=doc-intel-4.0.0
   - 取得論点: confidence（0〜1）の解釈、低信頼時の人手レビュー推奨、カスタムモデル精度スコアの扱いを明示。

8. Microsoft OCR 言語サポート
   - https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/language-support/ocr?view=doc-intel-4.0.0
   - 取得論点: 日本語（ja）はOCR対象言語としてサポート。印字/手書きテキスト対応の記載あり。

9. Google Document AI 価格（公式）
   - https://cloud.google.com/document-ai/pricing
   - 取得論点: OCR Processor / Form Parser / Custom Extractor等のページ単価が公開される。

10. Google Document AI 評価指標
    - https://cloud.google.com/document-ai/docs/evaluate
    - 取得論点: confidence は quality 指標の一部だが、精度を直接表す指標ではない点を明記。

11. 国税庁 電子帳簿等保存制度特設サイト
    - https://www.nta.go.jp/law/joho-zeikaishaku/sonota/jirei/tokusetsu/
    - 取得論点: 電子帳簿保存法の制度全体と電子取引データ保存義務の確認案内。

12. 国税庁 電子取引データ保存要件
    - https://www.nta.go.jp/law/joho-zeikaishaku/sonota/jirei/tokusetsu/01.htm
    - 取得論点: 令和6年（2024年）以降、電子取引データは要件を満たした電子保存が必要。

13. freee API schema（公式）
    - https://github.com/freee/freee-api-schema
    - 取得論点: 会計APIの公開スキーマに `deals` `receipts` `invoices` `wallet_txns` 等がある。

14. freee 会計 API OpenAPI（公式）
    - https://raw.githubusercontent.com/freee/freee-api-schema/master/v2020_06_15/open-api-3/api-schema.json
    - 取得論点: 書類読取結果を取引/証憑/入出金へ連携するAPIパス設計が可能。

15. マネーフォワード クラウド API リファレンス（公式）
    - https://apireference.biz.moneyforward.com/
    - 取得論点: クラウド会計/請求書系API連携の参照先（利用可否は契約・公開範囲依存）。

## 3. 変動情報（価格・仕様）整理

### 3-1. 2026年時点の価格確認（公式）
| サービス | 価格情報（確認日 2026-02-20） | 出典 |
|---|---|---|
| AIRead | 100枚プラン `13,200円/月`、超過 `110円/枚`。1000枚超過後 `55円/枚`。 | AIRead on Cloud |
| DX Suite | スタンダード/ライトで基本料金 `50,000円`、処理単価例 `90/130/120`（項目種別別）。 | DX Suite 公式ヘルプ |
| Microsoft Document Intelligence | East Asia の retail API で `S0 Batch Read` `0.6〜1.5 USD/1K pages`、`S0 Batch Layout 10 USD/1K`、`S0 Custom Pages 30 USD/1K` を確認。 | Azure Retail Prices API |
| Google Document AI | OCR Processor `1.5 USD/1,000ページ`、Form Parser `30 USD/1,000ページ`、Custom Extractor `30 USD/1,000ページ`。 | Google Cloud Pricing |

### 3-2. 精度情報（公式）
| サービス | 公式に確認できた精度関連情報 | 判定 |
|---|---|---|
| AIRead | 高精度・手書き/非定型対応の説明はあるが、全体正解率の公開値は確認できず。 | `[要確認: 公開ベンチマーク値]` |
| DX Suite | 信頼度・運用設計に関する情報はあるが、全社共通の固定精度値は公式ヘルプでは確認できず。 | `[要確認: 最新の公式精度ベンチマーク]` |
| Microsoft Document Intelligence | confidence (0〜1) と custom model の accuracy スコア概念を明記。臨界業務は人手レビュー推奨。 | OK |
| Google Document AI | confidence は quality 指標の一部で、accuracy を直接示す値ではないと明記。 | OK |

## 4. 電子帳簿保存法対応の整理（2026年時点）
| 観点 | 事実 | 出典 |
|---|---|---|
| 制度要件 | 電子取引データは要件を満たした電子保存が必要（2024年以降）。 | 国税庁 |
| AIRead | 検索要件（取引年月日/金額/取引先）を満たす項目抽出の説明あり。 | AIRead FAQ |
| DX Suite | 検索項目抽出の説明あり（電帳法向け運用の前提）。 | DX Suite FAQ |
| Microsoft / Google | OCRエンジン機能中心。保存要件（訂正削除履歴・検索要件・運用証跡）は別システム設計が必要。 | 国税庁 + 各サービス仕様（推論） |

## 5. 日本語手書き文字認識の精度限界（運用観点）
- Microsoftは日本語OCR（印字/手書き）をサポートする一方、field/tableごとに confidence が変動し、人手レビュー導線を推奨。
- Googleも confidence を絶対精度として扱わない設計で、評価セットによる継続検証が必要。
- 以上から、請求書・領収書・契約書の実務では「手書き欄」「押印付近」「低解像度FAX」は低信頼検知→人手確認に回す設計が現実的。

## 6. freee / マネーフォワード API 連携パターン
### パターンA: 請求書・領収書→証憑/取引登録（freee）
- OCR後の正規化JSONを生成
- `receipts` / `deals` / `wallet_txns` に順次投入
- confidenceが閾値未満の場合は保留キューに格納して人手確認

### パターンB: 帳票種別ごとに分岐して会計/請求APIに連携
- 請求書: 取引先・金額・税区分を抽出して請求系APIへ
- 領収書: 支払日・金額・勘定科目候補を会計APIへ
- 契約書: 期限・更新条項をメタデータ化し台帳へ

### パターンC: 二重登録防止 + 監査ログ
- 書類ハッシュで重複検知
- OCR結果と修正履歴を監査ログ化
- 電帳法保存システムに証憑原本＋検索キーを連携

## 7. SNS・コミュニティ実声（要約）
1. Reddit（r/Accounting）
   - 領収書OCRは「完全自動」よりも人手レビュー併用のほうが運用が安定するという声。
2. Reddit（r/microsoft）
   - Microsoft系の請求書OCRは導入しやすいが、フォーマット差分対応で調整工数が発生するという声。
3. Reddit（r/smallbusiness）
   - 中小企業の請求書OCR運用で、ベンダー選定時は認識精度だけでなく再学習・運用負荷を見るべきという声。
4. Reddit（r/GoogleCloud）
   - Document AIは評価データを回し続けないと業務帳票で品質変動が出るという声。

## 8. 主要Claimと照合
| Claim | Source A | Source B | 判定 |
|---|---|---|---|
| 2026年時点でもAI OCR料金は「定額+従量」または「ページ従量」が主流 | AIRead on Cloud | DX Suite料金 / Azure / GCP pricing | OK |
| 精度は単一の「正解率%」より confidence と運用設計で担保する傾向 | MS accuracy-confidence | GCP evaluate | OK |
| 電帳法対応はOCR単体で完結せず、保存要件に沿ったシステム設計が必要 | 国税庁特設サイト | 各AI OCR FAQ | OK |
| freee/マネーフォワード連携は、証憑APIと取引APIの分離設計が実務的 | freee OpenAPI | MF API reference | `[要確認: MF側の最新公開エンドポイント]` |

## 9. 本文反映メモ
- 冒頭で「AI OCRは認識だけでなく、仕訳連携と保存要件対応までが設計対象」と明確化する。
- 比較表は「価格」「精度指標の公開性」「電帳法対応のしやすさ」「向く企業規模」の4軸で整理。
- ROIは「削減時間→人件費換算→運用コスト控除→回収月数」の順に計算式で提示。
- アカデミーCTAは3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境）のみで締める。
