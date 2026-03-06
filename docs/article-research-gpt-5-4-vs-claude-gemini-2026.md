# リサーチ記録: gpt-5-4-vs-claude-gemini-2026
作成日: 2026-03-06

---

## 0-A: SEOキーワード調査

### 検索意図
主KW「GPT-5.4 Claude Gemini 比較」は **比較（Compare）型** が主軸。

- 「最強の1つを決めたい」よりも「どの用途ならどれを選ぶべきか」を知りたい意図が強い
- サブKWからは「ChatGPT Gemini 違い 2026」「AIモデル選び方」など、導入判断・課金判断の文脈が混在
- 既存AIユーザーは、単純な性能比較よりも「コーディング」「長文文書」「Google Workspace」「情シス/法務レビュー」での使い分けを求めている

### 競合上位記事の傾向
1. **GPT-5.4 vs Gemini 3.1 Pro の2モデル比較**
   - ベンチマーク、API価格、速度比較を前面に出す記事が多い
   - 「どちらが上か」の勝敗構図が強く、実務ルーティングが薄い
2. **GPT-5.4 vs Claude 4.6 の2モデル比較**
   - コーディング性能・長文精度・安全性を比較するが、GeminiのWorkspace/モバイル軸が抜ける
3. **ChatGPT vs Gemini 2026 の一般向け比較**
   - 個人課金とGoogle連携に寄る構成が多く、IT担当者向けのセキュリティ/運用論点が浅い
4. **Claude vs Gemini の比較記事**
   - 長文文書・業務文書・要約での差は扱うが、GPT-5.4のマルチモーダル/スピード軸が抜ける
5. **AIモデルの選び方記事**
   - 初心者向けの一般論に寄りがちで、既存AIユーザー向けの「1本化ではなくルーティング」が整理されていない

### AIリブートの差別化ポイント
1. **「最強決定」ではなく「用途別ルーティング」を主軸にする**
2. **リリース直後の比較議論で実際に強かった論点**
   - コーディング速度
   - 長文・高精度の文書作成
   - Google Workspace直結
   - セキュリティ/管理性
   をそのままH2へ反映する
3. **個人課金だけでなく、チーム導入・API単価まで1記事で整理する**
4. **既存AIユーザー・IT担当者向けに「どのモデルを標準、どのモデルを補助に置くか」を判断できる形にする**

### サジェスト・関連KW
- GPT-5.4 vs Claude
- ChatGPT Gemini 違い 2026
- Claude Gemini 比較
- AIモデル 選び方 2026
- ChatGPT Claude Gemini どれがいい
- AI コーディング 比較 2026
- Google Workspace AI 比較
- 企業向け AI モデル 選定

---

## 0-B: 一次情報ソース

| # | 内容要約 | URL | 確認日 |
|---|---------|-----|--------|
| 1 | OpenAI公式: GPT-5.4発表。ChatGPT / API / Codex提供、Coding・Computer Use・1M context・高速化を確認 | https://openai.com/index/introducing-gpt-5-4/ | 2026-03-06 |
| 2 | OpenAI公式: ChatGPTプランページ。Plus / Pro / Business / Enterpriseの機能差分を確認 | https://openai.com/chatgpt/pricing/ | 2026-03-06 |
| 3 | OpenAI公式: ChatGPT Plusヘルプ。Plusは$20/月（更新: 2026-03上旬） | https://help.openai.com/en/articles/6950777-chatgpt-plus | 2026-03-06 |
| 4 | OpenAI公式: ChatGPT Proヘルプ。Proは$200/月 | https://help.openai.com/en/articles/9793128/ | 2026-03-06 |
| 5 | OpenAI公式: API pricing。GPT-5.4は input $2.50 / output $15.00 per 1M tokens | https://openai.com/api/pricing/ | 2026-03-06 |
| 6 | Anthropic公式: Claude Sonnet 4.6。1M context（beta/API）、coding・enterprise workflows・価格 $3/$15 | https://www.anthropic.com/claude/sonnet | 2026-03-06 |
| 7 | Anthropic公式: Claude Opus 4.6。coding・enterprise workflows・価格 $5/$25 | https://www.anthropic.com/claude/opus | 2026-03-06 |
| 8 | Anthropic公式: Claude pricing。Free / Pro / Max と Team / Enterprise のプラン差分、Pro $17年払い・$20月払い、Max from $100 | https://www.anthropic.com/pricing | 2026-03-06 |
| 9 | Google公式: Gemini subscriptions。Google AI Pro は ¥2,900/月、Gemini in Gmail/Docs/Vids、Gemini Code Assist / CLI拡張 | https://gemini.google/subscriptions/ | 2026-03-06 |
|10 | Google公式: Workspace pricing。Business Standard ¥1,600/月、Plus ¥2,500/月、Gemini AI assistant in Gmail/Docs/Meet included | https://workspace.google.com/pricing.html | 2026-03-06 |
|11 | Google公式: Gemini Developer API pricing。Gemini 3.1 Pro Preview は input $2 / output $12 per 1M tokens | https://ai.google.dev/gemini-api/docs/pricing | 2026-03-06 |

---

## 0-C: X調査結果

### 実施方法
- `XAI_API_KEY` 確認済み
- `grok-4-fast` を使用
- `tools` パラメータは未使用
- 実行日: 2026-03-06

### 使用クエリ
1. `Summarize what people on X (Twitter) were saying on March 5-6, 2026 about GPT-5.4 vs Claude vs Gemini...`
2. `For X/Twitter discussions on March 5-6, 2026 about GPT-5.4 vs Claude vs Gemini, extract only the recurring user concerns and decision criteria...`
3. `Summarize the tone of Japanese X/Twitter reactions on March 5-6, 2026 comparing GPT-5.4, Claude, and Gemini...`
4. `Summarize practical routing patterns discussed on X/Twitter around March 5-6, 2026 when choosing between GPT-5.4, Claude, and Gemini...`

### トレンドとして拾えたもの
- 「結局どれが最強か」より **タスク別に分ける前提** で比較する空気が強い
- GPT-5.4 は「回転の速さ」「コーディング」「マルチモーダル」を軸に語られやすい
- Claude は「長文の一貫性」「レビュー」「安全寄り」を軸に評価されやすい
- Gemini は「Google Workspace」「モバイル」「料金感」を軸に比較されやすい
- 既存AIユーザーほど、1本化より「ドラフトはA、レビューはB、Google業務はC」のルーティング発想を取っている

### 記事への反映方針
- X調査は**引用しない**
- 事実の根拠には使わず、構成と語り口にのみ反映する
- H2を「強み一覧」「用途別早見表」「コーディング」「ビジネス文書」「価格」に固定したのは、この調査結果を踏まえたもの

### 取得時の注意
- Grok出力にはモデル名や細部でノイズが混じる箇所があった
- よって、本文の数値・仕様・価格はすべて公式ソースで別途照合した

---

## 0-D: ファクトチェック

| Claim | ソース1 | ソース2 | 判定 |
|-------|---------|---------|------|
| GPT-5.4は2026-03-05に発表され、ChatGPT / API / Codexで提供 | OpenAI GPT-5.4発表 | 既存社内記事 `gpt-5-4` 実装方針と整合 | ✅ 確認済 |
| GPT-5.4は1M context、computer use、coding強化が主軸 | OpenAI GPT-5.4発表 | OpenAI API pricing / Codex言及 | ✅ 確認済 |
| GPT-5.4 API価格は input $2.50 / output $15.00 per 1M | OpenAI API pricing | — | ✅ 公式確認 |
| ChatGPT Plusは$20/月 | OpenAI Help: What is ChatGPT Plus? | OpenAI pricing snippet | ✅ 確認済 |
| ChatGPT Proは$200/月 | OpenAI Help: What is ChatGPT Pro? | OpenAI pricing snippet | ✅ 確認済 |
| ChatGPT Businessは$25 / user / month billed annually | OpenAI pricing snippet | ChatGPT pricing pageのBusiness欄 | ✅ 確認済 |
| Claude Proは$17年払い / $20月払い | Anthropic pricing | — | ✅ 公式確認 |
| Claude Maxは$100から | Anthropic pricing | — | ✅ 公式確認 |
| Claude Sonnet 4.6は1M context beta/API・$3 / $15 | Anthropic Sonnet 4.6 | Anthropic pricing | ✅ 確認済 |
| Claude Opus 4.6は$5 / $25 | Anthropic Opus 4.6 | Anthropic pricing | ✅ 確認済 |
| Google AI Proは¥2,900/月 | Gemini subscriptions | — | ✅ 公式確認 |
| Google Workspace Business Standardは¥1,600/月でGemini AI assistantを含む | Workspace pricing | Gemini subscriptions（Googleツールから直接アクセス） | ✅ 確認済 |
| Gemini 3.1 Pro Preview API価格は input $2 / output $12 per 1M | Gemini API pricing | — | ✅ 公式確認 |
| ClaudeはTeam / Enterpriseで SSO, SCIM, audit logs, HIPAA-ready 等の管理機能が強い | Anthropic pricing | Claude Opus/Sonnet の enterprise workflows / trust and safety | ✅ 確認済 |

---

## 構成案への反映メモ

1. 冒頭結論は「最強を1つ選ぶ時代ではなく、用途別ルーティングが正解」にする
2. H2は以下で固定:
   - 3モデルの強み一覧
   - 用途別おすすめ早見表
   - コーディング比較
   - ビジネス文書比較
   - 価格・プラン比較
   - FAQ
3. 価格比較は**個人課金**と**チーム/API**を同時に置き、IT担当者がそのまま比較できる形にする
4. Geminiは「価格が安い」だけでなく、**Workspaceに既に払っている企業では追加負担を抑えやすい** と整理する
5. 既存記事への内部リンク:
   - `/academy/blog/gpt-5-4`
   - `/academy/blog/gemini-vs-chatgpt-2026`
   - `/academy/blog/claude-beginner-guide`
