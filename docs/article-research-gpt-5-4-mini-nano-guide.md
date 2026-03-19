# リサーチ記録: gpt-5-4-mini-nano-guide
作成日: 2026-03-18

## 0-A: SEOキーワード調査

### 検索意図
- **主軸**: 情報収集（Know）+ 操作方法（Do）
  - 「mini と nano の違いは？」「無料で使えるの？」「APIでのコストは？」が検索の中心

### 競合上位記事の分析
| 媒体 | 特徴 |
|---|---|
| GIGAZINE | リリース当日速報。スペック概要のみ |
| SBBizIT | 日本語速報。プランごとの利用可否あり |
| 窓の杜 | 短い速報。性能説明なし |
| OpenAI公式 | 仕様・ベンチマーク公式情報 |
| adam.holter.com | 英語。詳細なベンチマーク比較あり |

### AIリブートの差別化ポイント
- Claude Haiku 4.5 / Gemini 3 Flash との価格・性能を数値で比較
- ユースケース別（API開発者、ChatGPT一般ユーザー）の使い分け表
- nano の「サブエージェント向け」用途を具体的シナリオで解説
- 長文処理の限界（MRCR v2: mini 47.7% vs full 86.0%）を正直に提示

### サジェスト・関連KW
- GPT-5.4 mini 無料 / GPT-5.4 mini 使い方 / GPT-5.4 nano API
- GPT-5.4 mini Claude Haiku 比較 / GPT-5.4 nano コスト
- GPT-5.4 mini 違い nano / 軽量AI モデル 比較 2026
- GPT-5.4 mini どこで使える / GPT-5.4 nano 活用シーン

## 0-B: 一次情報ソース

| # | 内容要約 | URL | 確認日 |
|---|---------|-----|--------|
| 1 | OpenAI公式: mini/nano発表ブログ（仕様・ベンチマーク） | https://openai.com/index/introducing-gpt-5-4-mini-and-nano/ | 2026-03-18 |
| 2 | OpenAI公式: APIプライシング | https://openai.com/api/pricing/ | 2026-03-18 |
| 3 | 9to5Mac: mini/nano発表レポート | https://9to5mac.com/2026/03/17/openai-releases-gpt-5-4-mini-and-nano-its-most-capable-small-models-yet/ | 2026-03-18 |
| 4 | The New Stack: サブエージェント時代向け設計の解説 | https://thenewstack.io/gpt-54-nano-mini/ | 2026-03-18 |
| 5 | Simon Willison: 詳細ベンチマーク分析 | https://simonwillison.net/2026/Mar/17/mini-and-nano/ | 2026-03-18 |
| 6 | Microsoft Tech Community: Azure AI Foundryでの提供 | https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/introducing-openai's-gpt-5-4-mini-and-gpt-5-4-nano-for-low-latency-ai/4500569 | 2026-03-18 |
| 7 | GIGAZINE: 日本語速報 | https://gigazine.net/news/20260318-openai-gpt-5-4-mini-nano/ | 2026-03-18 |
| 8 | portkey.ai: GPT-5 nano vs Claude Haiku 4.5 比較 | https://portkey.ai/blog/gpt-5-nano-vs-claude-haiku-4-5/ | 2026-03-18 |

## 0-C: X調査結果

### 取得失敗
Grok-4-fast の学習カットオフが2023年のため、2026年3月17日リリースのGPT-5.4 mini/nano の X投稿は取得不可。
WebSearch (9to5Google, The New Stack, Hacker News) で代替調査を実施。

### WebSearch 代替から得たトレンド・反応
- **開発者コミュニティ**: 「サブエージェントのコスト削減」に最大の注目。nano ($0.20/M) でバッチ処理タスクを安く回せる点が話題
- **ChatGPTユーザー**: mini が無料プランで使えるようになった点を歓迎。速度改善（2倍速）が実感しやすいとの声
- **比較議論**: Claude Haiku 4.5 と GPT-5.4 nano の比較が増加。nano は入力コストで圧倒的に安いが、Haiku はマルチターン会話の品質で評価が高い
- **懸念**: long context（64K〜128K）でのmini の精度低下（MRCR v2: 47.7%）を指摘する技術系の声あり

## 0-D: ファクトチェック

| Claim | ソース1 | ソース2 | 判定 |
|-------|---------|---------|------|
| 2026年3月17日リリース | OpenAI公式ブログ | 9to5Mac | ✅ |
| GPT-5.4 mini: $0.75/M入力, $3.00/M出力 | adam.holter.com | OpenAI pricing | ✅ |
| GPT-5.4 nano: $0.20/M入力, $1.25/M出力 | OpenAI公式 | blockchain.news | ✅ |
| mini は ChatGPT 無料ユーザーも利用可 | OpenAI公式 | 9to5Google | ✅ |
| nano は API のみ（ChatGPT UI不可） | OpenAI公式 | GIGAZINE | ✅ |
| コンテキスト窓 400K tokens（mini） | adam.holter.com | — | ⚠️ 1ソース |
| SWE-Bench Pro: mini 54.4%, full 57.7% | adam.holter.com | — | ⚠️ 1ソース |
| OSWorld-Verified: mini 72.1%, full 75.0% | adam.holter.com | — | ⚠️ 1ソース |
| MRCR v2: mini 47.7%, full 86.0% | adam.holter.com | — | ⚠️ 1ソース |
| mini は GPT-5 mini より 2倍速 | OpenAI公式 | 9to5Mac | ✅ |
| Claude Haiku 4.5: $1.00/$5.00 | portkey.ai | — | ⚠️ 1ソース |
| Gemini 3 Flash: $0.50/$3.00 | respan.ai | — | ⚠️ 1ソース |

## 構成案への反映メモ

1. **リード**: 「無料でも使える」「APIコストが下がる」2つの軸で読者を分けてリード
2. **比較表**: mini / nano / Claude Haiku 4.5 / Gemini 3 Flash の4モデルで価格・用途を一表に
3. **long context 警告**: MRCR v2 の数値で「長文が多い用途は full モデルを検討」と正直に書く
4. **API コスト試算**: nano を使って「76,000枚の画像を$52で処理」（Simon Willison より）を実例に
5. **ChatGPT 無料の使い方**: 操作手順を明確に（Thinking から選ぶ）
