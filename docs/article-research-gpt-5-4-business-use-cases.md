# リサーチ記録: gpt-5-4-business-use-cases
作成日: 2026-03-06

## 0-A: SEOキーワード調査

### 検索意図
- 主KW `GPT-5.4 ビジネス活用` の主軸は `情報収集（Know）` + `操作方法（Do）`
- 読者が知りたいのは「GPT-5.4で何ができるか」より「GPT-5.2以前と比べて、仕事で何が変わったか」「自分の業務にどう落とすか」
- クリックを取りやすい派生意図:
  - `GPT-5.4 何が変わった`
  - `ChatGPT 仕事 使い方 2026`
  - `GPT-5.4 Excel`
  - `GPT-5.4 契約書 要約`
  - `GPT-5.4 Plus Pro 違い`
  - `GPT-5.4 料金`

### 競合上位5記事の分析（SERPメモ）
| 順位帯 | メディア/ドメイン | 主な切り口 | 構成傾向 | 弱い点 |
|---|---|---|---|---|
| 1 | OpenAI公式 | リリース概要、ベンチマーク、提供プラン | 概要 → ベンチ → 安全性/性能 | 日本のビジネス現場に翻訳されていない |
| 2 | GIGAZINE | 新機能の速報、数値の要点 | リリース要約型 | 実務導入の粒度が浅い |
| 3 | MoMo / AI解説系ブログ | 何が変わったか、料金、使い方 | 機能紹介型 | 職種別の業務手順が少ない |
| 4 | AGI Lab / AIニュース系 | リリースニュース、業界インパクト | ニュース要約型 | 数値はあるが運用設計がない |
| 5 | NewSphere / IT系メディア | リリース解説、競合比較 | 概要 + 所感 | 日本語読者向けの具体的な導入例が少ない |

### AIリブートの差別化ポイント
- `何ができるか` の列挙ではなく `何が変わったか` を Before/After で整理する
- OpenAI公式の性能数値を、管理職・実務担当の `業務単位` に翻訳する
- X/コミュニティで話題化しやすい利用文脈（Excel、契約書、広告、会議録、サポート）を、日本の業務フローに落とす
- `今週から試す手順` と `コスト試算` まで入れて、導入判断に直結させる

### サジェスト・関連KW
- GPT-5.4 Plus 使える
- GPT-5.4 Pro 違い
- GPT-5.4 料金
- GPT-5.4 Excel
- GPT-5.4 契約書
- GPT-5.4 会議録
- GPT-5.4 翻訳
- ChatGPT 仕事 効率化
- ChatGPT 市場調査
- ChatGPT ビジネスメール

## 0-B: 一次情報ソース

| # | 内容要約 | URL | 確認日 |
|---|---|---|---|
| 1 | GPT-5.4の正式リリース。GDPval 83.0%、OSWorld-Verified 75.0%、1M context、BrowseComp 82.7、エラー率33%/18%減 | https://openai.com/index/introducing-gpt-5-4/ | 2026-03-06 |
| 2 | GPT-5.4 System Card。長文・安全性・評価設計の補足 | https://openai.com/index/gpt-5-4-system-card/ | 2026-03-06 |
| 3 | API価格。GPT-5.4 input $2.50/1M、output $15.00/1M | https://openai.com/api/pricing/ | 2026-03-06 |
| 4 | ChatGPT Plus価格 $20/month | https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus | 2026-03-06 |
| 5 | ChatGPT Pro価格 $200/month | https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro | 2026-03-06 |
| 6 | ChatGPT for Excel and Google Sheets の正式発表 | https://openai.com/index/introducing-chatgpt-for-excel-and-google-sheets/ | 2026-03-06 |
| 7 | ChatGPTのデータ分析機能。xlsx/CSV対応、Python実行、グラフ生成 | https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt | 2026-03-06 |
| 8 | Zendesk事例。80% automation を目標にした service agents | https://openai.com/index/zendesk/ | 2026-03-06 |
| 9 | MavenAGI事例。93%の問い合わせ自律回答、解決時間60%減、チケットコスト80%減 | https://openai.com/index/mavenagi/ | 2026-03-06 |
| 10 | Zenken事例。知識労働で30〜50%時短、年間5,000万円の外注費削減、翻訳・要約・市場分析で活用 | https://openai.com/index/zenken/ | 2026-03-06 |
| 11 | OpenAI Academy: ChatGPT for any role。メール・フォローアップ・文章明瞭化の公式プロンプト例 | https://academy.openai.com/home/clubs/work-users-ynjqu/resources/chatgpt-for-any-role | 2026-03-06 |
| 12 | OpenAI Academy: Customizing ChatGPT。トーン変更・社内/顧客/役員向け書き分け | https://academy.openai.com/public/clubs/work-users-ynjqu/resources/customizing-chatgpt/ | 2026-03-06 |
| 13 | OpenAI Academy: Canvas。共同編集で文書・企画・コードを下書きするワークスペース | https://academy.openai.com/public/clubs/work-users-ynjqu/resources/canvas | 2026-03-06 |
| 14 | OpenAI Academy: Writing with canvas in ChatGPT。会議メモ/文字起こしから下書き、Time to first draft: Under 2 minutes | https://academy.openai.com/public/videos/writing-with-canvas-in-chatgpt-2025-04-11 | 2026-03-06 |
| 15 | OpenAI Academy: Deep research。コンサル/戦略、金融、法務向けのソース付きリサーチ | https://academy.openai.com/public/clubs/work-users-ynjqu/resources/deep-research | 2026-03-06 |
| 16 | OpenAI Academy: Market research with ChatGPT。競合・市場調査をソース付きでまとめる活用 | https://academy.openai.com/en/public/videos/market-research-with-chatgpt-2025-04-11 | 2026-03-06 |
| 17 | OpenAI Academy: Web search。最新の市場動向・競合情報を ChatGPT 検索で扱う説明 | https://academy.openai.com/public/clubs/work-users-ynjqu/resources/web-search/ | 2026-03-06 |

## 0-C: X調査結果

### 使用クエリ
1. `What are people saying on X (Twitter) about GPT-5.4 for business use?`
2. `What are people saying on X (Twitter) about OpenAI GPT-5.4 spreadsheet modeling and Excel workflows for finance teams?`
3. `X(Twitter)で『GPT-5.4 仕事 使い方』『GPT-5.4 業務効率化』について最近どんな文脈が多いか`

### 取得メモ
- Grok API は実行したが、1本目と2本目で `GPT-5.4 を未発表モデルとして扱う` 古い知識が混ざった
- そのため、`GPT-5.4 固有のX実声を直接事実認定に使うのは不可`
- ただし補助的に拾えた温度感は以下:
  - スプレッドシート/財務モデリングは「数式作成」より「シナリオ比較・異常値チェック・説明文生成」で反応が強い
  - 仕事文脈では「業務効率化」より「報告書・メール・会議録が短くなる」「手戻りが減る」が刺さりやすい
  - 不安は一貫して `精度 / 機密情報 / AI依存`

### 構成に反映した点
- 記事本文で `Xでバズった` を断定しない
- 代わりに `話題になりやすい業務単位` として、Excel・契約書・会議録・広告・サポートを採用
- 「神ツール」「未来が変わる」系の誇張ワードは使わず、Before/After と KPI で整理する

### 取得失敗・制約
- Grok API自体は応答したが、2026-03-05 リリース直後の `GPT-5.4 固有トレンド` の鮮度は不足
- 0-C は `温度感の補助インプット` として利用し、本文の断定根拠はすべて公式ソース側で担保する

## 0-D: ファクトチェック

| Claim | ソース1 | ソース2 | 判定 |
|---|---|---|---|
| GPT-5.4 は 2026-03-05 に公開された | OpenAI release | GPT-5.4 System Card | ✅ |
| GPT-5.4 は 1M tokens context をサポートする | OpenAI release | GPT-5.4 System Card | ✅ |
| GPT-5.4 は GDPval 83.0%、OSWorld 75.0%、BrowseComp 82.7 を記録 | OpenAI release | GPT-5.4 System Card | ✅ |
| GPT-5.4 はスプレッドシート業務が強く、投資銀行アナリスト相当タスクで 87.3% | OpenAI release | Excel/Sheets launch（同日発表） | ✅ |
| 法務の長文契約レビューで Harvey が BigLaw Bench 91% と評価 | OpenAI release | GPT-5.4 System Card | ✅ |
| サポート自動化は 70%前後を狙える現実的ライン | Zendesk 80% automation 目標 | MavenAGI 93% autonomous support | ✅（記事では「狙える条件」として表現） |
| ChatGPT Plus は $20/month、Pro は $200/month | Plus help | Pro help | ✅ |
| API料金は input $2.50 / output $15.00 per 1M tokens | API pricing | release内の API/Codex availability note | ✅ |
| ChatGPT で xlsx/CSV のデータ分析、グラフ生成、Python実行ができる | Data analysis with ChatGPT | Excel/Sheets launch | ✅ |
| 市場調査・競合調査に deep research / web search が向く | OpenAI Academy Deep research | OpenAI Academy Market research / Web search | ✅ |
| GPT-5.4 Thinking の ChatGPT 利用可否は Plus/Team/Pro | OpenAI release | [要確認: Help Center の一般プラン説明は 2026-02-13 時点のため未追随] | ⚠️ |

## 構成案への反映メモ
- H2-1 で `仕事が変わる理由` を 3点に絞る
  - エラー減少
  - 長文/複数資料をまとめて扱える
  - Web/PC/Excel までまたいで動く
- H2-2 は `職種別活用10選`
  - 顧客対応
  - マーケ
  - 管理職/PM
  - 財務/経営企画
  - 法務/調達
  - 営業
  - 海外営業/人事
  - 企画
  - 経営企画/マーケリサーチ
  - データ分析
- H2-3 以降は `今週から始める手順` `コスト試算` `注意点` `FAQ`
- コストはドル建てで明記し、日本円換算は為替変動が大きいため避ける
