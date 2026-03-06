# リサーチ記録: gpt-5-4
作成日: 2026-03-06

## 0-A: SEOキーワード調査

### 検索意図の分類

| KW | 意図タイプ | 主軸 |
|----|-----------|------|
| GPT-5.4 とは | Know（情報収集） | ✅ 主軸 |
| GPT-5.4 使い方 | Do（操作方法） | ✅ 主軸 |
| GPT-5.4 性能 | Compare（比較） | 副軸 |
| OpenAI 最新モデル | Know | 副軸 |
| GPT5.4 日本語 | Do | 副軸 |

**主軸判定**: Know（情報収集）×Do（操作方法）の複合型。
速報記事として「何が変わったか（Know）」と「今すぐどう使うか（Do）」を両立させる。

### 競合上位5記事の分析

| 記事 | H2構成の傾向 | 差別化余地 |
|------|-------------|-----------|
| TechCrunch (英語) | リリース概要・モデル一覧・価格 | 日本語での実務活用が薄い |
| SHIFT AI TIMES | GPT-5系モデル比較 | GPT-5.4固有の詳細が薄い |
| 9to5Mac | 6つの改善点の箇条書き | 各ポイントの深掘り不足 |
| VentureBeat | コンピュータ使用・Excelプラグイン | 実際の業務シーン未記述 |
| interestingengineering | 技術仕様中心 | ビジネスパーソン向け文脈なし |

### AIリブートの差別化ポイント

1. **日本語ユーザー視点での実務シーン**を具体的に描く（競合に欠けている）
2. **3モデル（標準・Thinking・Pro）の使い分け判断軸**を整理（混乱を解消）
3. **前モデル（GPT-5.2）からの具体的な改善数値**を出典付きで提示
4. **「今すぐ試せる」速報記事**として鮮度を最大化

### サジェスト・関連KW

- GPT-5.4 ChatGPT Plus 使える
- GPT-5.4 Pro 違い
- GPT-5.4 API 料金
- GPT-5.4 Thinking とは
- GPT-5.4 コンピュータ使用
- OpenAI GPT-5.4 リリース日
- GPT-5.4 日本語 精度
- GPT-5.4 vs Claude vs Gemini

---

## 0-B: 一次情報ソース

| # | 内容要約 | URL | 確認日 |
|---|---------|-----|--------|
| 1 | GPT-5.4公式発表ページ（OpenAI Blog） | https://openai.com/index/introducing-gpt-5-4/ | 2026-03-06 |
| 2 | GPT-5.4モデル仕様（OpenAI API Docs） | https://developers.openai.com/api/docs/models/gpt-5.4 | 2026-03-06 |
| 3 | ChatGPT料金プラン（全プラン対応状況） | https://chatgpt.com/pricing | 2026-03-06 |
| 4 | TechCrunch: GPT-5.4 Thinking/Pro リリース詳報 | https://techcrunch.com/2026/03/05/openai-launches-gpt-5-4-with-pro-and-thinking-versions/ | 2026-03-06 |
| 5 | VentureBeat: コンピュータ使用・Excelプラグイン詳細 | https://venturebeat.com/technology/openai-launches-gpt-5-4-with-native-computer-use-mode-financial-plugins-for | 2026-03-06 |
| 6 | OpenAI API Pricing | https://openai.com/api/pricing/ | 2026-03-06 |

### 確認済み主要事実

- **リリース日**: 2026年3月5日（日本時間3月6日未明）
- **モデルラインナップ**: GPT-5.4（標準）/ GPT-5.4 Thinking / GPT-5.4 Pro の3種
- **コンテキストウィンドウ**: APIで最大100万トークン（OpenAI史上最大）
- **対応プラン**:
  - GPT-5.4 Thinking: Plus・Team・Pro プラン
  - GPT-5.4 Pro: Pro・Enterprise プラン
- **API価格**（確認日: 2026-03-06、サードパーティ情報を含む）:
  - Input: $2.50/1M tokens
  - Cached Input: $0.625/1M tokens
  - Output: $20.00/1M tokens
  - ※272K超の入力は2倍料金。直接OpenAI公式で最新料金を確認推奨 [要確認: 公式価格ページで再確認を]

---

## 0-C: X調査結果（WebSearch代替）

### X調査: WebSearchで代替（XAI_API_KEY未設定のためスキップ）

WebSearch結果から読み取れるトレンド・ユーザーの関心：

### 盛り上がっているトピック

- 「コンピュータ使用（Computer Use）」機能 — エージェントがPC操作を自動化できる点への反応大
- 「1Mトークンのコンテキスト」 — 大量文書の一括処理への期待
- 「Excel/Googleスプレッドシート連携」 — ビジネスパーソンの実務への影響
- Thinking vs Pro の使い分けの混乱 — どちらを選べばいいかの質問が多い

### 利用者の言葉・文脈（手触り感）

- 「GPT-5.4はオフィスワーカーを置き換える」という論調（GDPval 83%の根拠から）
- 「スプレッドシートが得意」という具体的な使い方イメージ
- 「前モデルより33%エラーが減った」という数値への注目
- 日本語ユーザーは「日本語でも精度は上がったか」「Plusで使えるか」を重視

### 見落とされている切り口

- 「3モデルの使い分け」を分かりやすく整理した日本語記事が少ない
- 「日本のビジネス現場」での具体的な活用シーンが乏しい
- GPT-5.3-Codexとの関係性（GPT-5.4はcodexの能力を内包した初のメインラインモデル）

---

## 0-D: ファクトチェック

| Claim | ソース1 | ソース2 | 判定 |
|-------|---------|---------|------|
| リリース日: 2026年3月5日 | openai.com/index/introducing-gpt-5-4/ | techcrunch.com（2026-03-05付け） | ✅ 確認済 |
| コンテキスト最大100万トークン | developers.openai.com/api/docs/models/gpt-5.4 | interestingengineering.com | ✅ 確認済 |
| GPT-5.4 Thinking: Plus・Team・Pro利用可 | 9to5mac.com | techcrunch.com | ✅ 確認済 |
| GPT-5.4 Pro: Pro・Enterprise限定 | 9to5mac.com | openai.com | ✅ 確認済 |
| GPT-5.2比でエラー33%減 | openai.com（発表内） | VentureBeat引用 | ✅ 確認済 |
| GDPval 83%（44職種で専門家を上回る） | openai.com発表 | nxcode.io引用 | ✅ 確認済 |
| OSWorld-Verified 75.0%（人間72.4%超） | openai.com発表 | officechai.com引用 | ✅ 確認済 |
| スプレッドシートモデリング 87.5% | openai.com発表 | nxcode.io | ✅ 確認済 |
| API Input価格: $2.50/1M tokens | OpenRouter/third-party | evolink.ai | ⚠️ サードパーティ情報。公式openai.com/api/pricing/で要確認 |
| GPT-5.4がGPT-5.3-Codexの能力を内包 | nxcode.io引用 | interestingengineering.com | ✅ 確認済 |

---

## 構成案への反映メモ（Phase 1インプット）

### ペルソナ
- AIに興味を持ち始めた会社員・ビジネスパーソン（エンジニア〜非エンジニア）
- 「GPT-5.4が出たと聞いて、今の自分のプランで使えるか・何が変わるか知りたい」
- 「Plus契約しているがGPT-5.4 ThinkingとProどちらを使えばいいか混乱している」

### 記事の核心
1. **速報性**: 2026年3月5日リリースの最新情報を一次情報付きで提供
2. **使い分け明確化**: 標準・Thinking・Proの3モデルを判断軸で整理
3. **数値で差別化**: GPT-5.2比でのエラー減少率・GDPval・OSWorld数値を文脈付きで解説
4. **日本語実務シーン**: Excelや業務文書処理での具体例

### H2構成案
1. Answer Box（要点まとめ）
2. GPT-5.4とは？ — 3行で理解する最大の変化
3. 3モデルの使い分け：標準・Thinking・Proの違い
4. 前モデル（GPT-5.2）から何が変わったか：数値で確認
5. 今すぐ使える：プラン別の利用方法
6. ビジネス現場での活用シーン（日本語対応含む）
7. よくある質問（FAQ）
