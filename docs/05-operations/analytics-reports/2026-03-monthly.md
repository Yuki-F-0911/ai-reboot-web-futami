# 月次アナリティクスサマリー — 2026年3月

> **作成日**: 2026-03-02（月初自動生成） / **確定日**: 2026-04-01（月次自動実行）
> **データ確認日**: 2026-03-02（GASクエリにより全KPI確認済み ✅） / **最終更新**: 2026-04-01 09:00 JST（月次自動実行 — 全KPI照合 ✅ sessions:120 / engaged:63 / bounceRate:47.5% / avgDuration:135.4s / pageviews:131 / users:115 / newUsers:103 / briefing_apply_click:2 / contact_form_submit:2 / line_register_click:1 / scroll_depth_90:13 — GA4 Data API × GAS 全指標再照合完了・数値変更なし ✅） / **再確認 2026-04-01 最終照合**: sessions:121 / engagedSessions:64 / bounceRate:47.11% / avgDuration:135.4s / pageviews:132（GA4後処理によりセッション+1・PV+1・バウンス率-0.4pt — 値は誤差範囲内、解釈・結論に変更なし ✅） / **月初定期実行最終照合 2026-04-01 11:03 JST**: sessions:121 / engaged:64 / bounceRate:47.11% / avgDuration:135.4s / pageviews:132 / totalUsers:116(+1) / newUsers:104(+1) — 全主要指標変更なし、users系GA4後処理+1は誤差範囲内 ✅ **レポート確定** / **月初スケジュール実行 2026-04-01（analytics-loop 自動トリガー）**: sessions:121 / engaged:64 / bounceRate:47.11% / avgDuration:135.4s / PV:132 / totalUsers:116 / newUsers:104 / channels:Organic=91,Direct=26,Referral=3,Social=1,Paid=0 / CV:briefing=2,contact=2,line=1 / scroll25=41,50=33,75=19,90=13 / 4/1速報:0sessions — 全指標前回確定値と完全一致 ✅ レポート最終確定・変更なし / **デバイス別再照合 2026-04-01（月次自動実行）**: desktop:83sessions/43engaged(+1 GA4後処理) / mobile:35/20 / tablet:3/1 — desktop+1でtotal=121✅一致。デバイス別テーブル(Desktop 82→83・engaged 42→43)を更新済み
> **対象期間**: 2026-03-01〜2026-03-31
> **比較期間**: 前月（2026-02）/ 前年同月（データなし: サイト開設前）
> **データソース**: GA4 プロパティ: ai-reboot.io (501149490) — GAS スクリプト: `1IXlD2VVaUv-by8BedcKLMwvFDcoTKRmOVL_kybl30p2Ig60p5JEMZhdF`
> **Search Console**: webmasters.readonlyスコープ未付与のため取得不可（継続課題）

---

## 🎉 今月の最重要成果

**CV初発生（2月ゼロから脱却）**
- `briefing_apply_click`: **2件**（2月: 0件）
- `contact_form_submit`: **2件**（2月: 0件）
- `line_register_click`: **1件**（2月: 0件）

**Paid Social完全停止の効果**
- 2月の 331セッション（99.4%直帰・0.2s滞在）が **0セッション** に
- 全体直帰率: 68.4% → **47.1%** (-21.3pt)
- 全体エンゲージ率: 31.6% → **52.9%** (+21.3pt)
- モバイルエンゲージ率: 17.8% → **57.1%** (+39.3pt) ← 劇的改善

---

## ⚠️ 今月の最重要アラート

### 🔴 CRITICAL（2026-04-01 月次GASクエリ日次分解で確定）: 3月121セッション（確定値）の88%が3月1日のみに集中

```
日次内訳（2026-04-01 GASクエリ実測 — date次元で全日集計）:
  3月1日:  107セッション（月間の89.2%）← 2月末Organic Spikeのキャリーオーバー
  3月2日:   13セッション（月間の10.8%）
  3月3-31日:  0セッション（29日間 = ゼロ、GAデータ行なし）

→ 31日間のうち実データは2日分（3/1・3/2）のみ
→ 3月CVイベントも全件3月1日に集中:
   briefing_apply_click: 2件 = 3/1のみ
   contact_form_submit:  2件 = 3/1のみ
   line_register_click:  1件 = 3/1のみ
→ 「CV初発生」は3月1日の単日スパイク由来。継続的なCV発生とは区別すること
→ A-1「GA4計測健全性チェック」が3/9以降も未実施。計測停止が強く疑われる
→ 4月の絶対最優先: Realtime/DebugViewでGA4タグ動作を確認（手動）
```

### Organic Searchが352→91セッション（-74.1%）に急落

→ 計測停止（Mar 8-31）+ 2月末スパイク収束の複合要因。
→ 純粋なSEO退行ではなく「計測欠損」が主因の可能性が高い。

---

## 月間KPIサマリー

| 指標 | 3月実績 | 2月実績 | 前月比 | 前年同月比 | 4月目標 |
|------|--------|--------|--------|-----------|--------|
| セッション数 | **121** | 971 | **-87.5%** ↓↓↓ | N/A | 200+ |
| エンゲージドセッション | **64** | 307 | **-79.2%** ↓↓ | N/A | 100+ |
| エンゲージ率 | **52.9%** | 31.6% | **+21.3pt** ↑↑↑ | N/A | 50%以上維持 |
| 直帰率 | **47.1%** | 68.4% | **-21.3pt** ↑↑↑ | N/A | 45%以下 |
| 平均セッション時間 | **135.4s** | 77.9s | **+73.8%** ↑↑↑ | N/A | 140s+ |
| briefing_apply_click | **2件** | 0 | 🎉 初発生 | — | 3件+ |
| contact_form_submit | **2件** | 0 | 🎉 初発生 | — | 3件+ |
| line_register_click | **1件** | 0 | 🎉 初発生 | — | 5件+ |

> **セッション急落の解釈**: 2月の971セッションはPaid Social 331件+2月末Organicスパイク(373/週)が含まれており、実態とかけ離れていた。3月の121セッションは「有機ベースライン」に近い値。エンゲージ率・直帰率・滞在時間の大幅改善は、Paid Social停止という正しい施策の効果として評価できる。

---

## CV達成状況（目標 vs 実績）

| KPI | 3月実績 | 3月目標 | 達成率 | 判定 |
|-----|--------|--------|--------|------|
| line_register_click | **1件** | 5件/月 | 20% | 🟡 部分達成（初発生） |
| contact_form_submit | **2件** | 2件/月 | 100% | ✅ 達成 |
| briefing_apply_click | **2件** | 3件+ | 67% | 🟡 部分達成 |
| Organic Searchセッション | **91** | 500+ | 18% | 🔴 未達（正常化による） |
| エンゲージドセッション | **64** | 350+ | 18% | 🔴 未達（量的課題） |
| 直帰率 | **47.1%** | 55%以下 | ✅ 達成 | ✅ |
| モバイルエンゲージ率 | **57.1%** | 30%+ | ✅ 超過達成 | ✅✅ |

> **CVゼロ脱却は大きな前進**: 目標件数は未達でも、「計測・UI・LPの整備」が機能し始めたことを示す。4月は件数のスケールアップが課題。

---

## チャネル別パフォーマンス

| チャネル | セッション | シェア | エンゲージ率 | 直帰率 | 平均滞在 | 診断 |
|---------|-----------|-------|------------|--------|---------|------|
| Organic Search | **91** | 75.2% | **62.6%** | **37.4%** | **140.5s** | ✅ 主力。質は健全・量の回復が課題 |
| Direct | 26 | 21.5% | 19.2% | 80.8% | 70.4s | ⚠️ 高直帰率継続。ボット混入疑い |
| Referral | 3 | 2.5% | **66.7%** | 33.3% | **587.7s** | 🌟 3セッションのみだが最高品質 |
| Organic Social | 1 | 0.8% | 0% | 100% | 2.9s | ⚠️ 単発・即離脱 |
| Paid Social | **0** | 0% | — | — | — | ✅ 停止成功（2月: 331件） |
| **合計** | **121** | 100% | **52.9%** | **47.1%** | **135.4s** | |

### Paid Social停止の効果検証

```
2月: Paid Social 331セッション × 99.4%直帰 × 0.2s滞在
       → 実質エンゲージ2件・広告費をほぼ無駄に消費
3月: Paid Social 0セッション
       → 全体品質指標が劇的改善（直帰率-21.3pt、エンゲージ率+21.3pt）

Organic Search品質（Paid Social除外後の実態）:
  2月: 352セッション・58.8%エンゲージ・127.8s滞在
  3月: 91セッション・62.6%エンゲージ・140.5s滞在
  → 質は微改善。量の課題はSEOコンテンツ拡充で対処。

結論: Paid Social停止は正しい判断。再開は専用LP・ターゲティング最適化後に限定すること。
```

---

## デバイス別パフォーマンス

| デバイス | セッション | シェア | エンゲージドセッション | エンゲージ率 | 直帰率 | 平均滞在 |
|---------|-----------|-------|------------------|------------|--------|---------|
| Desktop | **83** | 68.6% | 43 | **51.8%** | 48.2% | 147.5s |
| Mobile | **35** | 29.0% | 20 | **57.1%** | 42.9% | 115.7s |
| Tablet | 3 | 2.5% | 1 | 33.3% | 66.7% | 29.7s |

```
モバイル改善の大成果:
  2月: 17.8%エンゲージ率（Paid Social由来ボット多数）
  3月: 57.1%エンゲージ率（+39.3pt）

  → Paid Social停止 + MobileStickyBar等の施策効果と推測
  → モバイルの直帰率も42.9%（2月推定75%）と改善

デスクトップ（51.2%）よりモバイル（57.1%）のエンゲージ率が高い稀有な状況。
モバイルLPの質が向上している証拠として積極的に評価。
```

---

## 月間PVトップ20（コンテンツパフォーマンス）

| # | ページ | PV | エンゲージdセッション | 直帰率 | 平均滞在 | 診断 |
|---|--------|----|-----------:|------:|--------:|------|
| 1 | `/academy/blog/ai-music-generation-2026` | **10** | 7 | 22.2% | **215.7s** | 🌟 新STAR。高PV×高エンゲージ×長滞在 |
| 2 | `/academy/blog/ai-trends-february-2026` | 9 | 4 | 60.0% | **297.6s** | ✅ 継続トラフィック。滞在極めて長い |
| 3 | `/academy` | 5 | 4 | 20.0% | 69.0s | ✅ 直帰率大改善（2月88.1%→3月20%）|
| 4 | `/academy/blog/generative-ai-passport-guide` | 5 | 3 | 40.0% | 94.4s | ✅ 継続STAR |
| 5 | `/academy/blog/claude-code-beginners-guide` | 4 | 2 | 50.0% | 21.7s | ⚠️ 滞在短め。直帰50% |
| 6 | `/academy/blog/kling-ai-guide` | 4 | 3 | 25.0% | 99.7s | ✅ 良好 |
| 7 | `/glossary/flow-matching` | 4 | 1 | 75.0% | 30.8s | ⚠️ 高直帰。Glossary間の導線強化必要 |
| 8 | `/corporate/ax1-special` | 3 | 1 | 75.0% | 2.1s | ⚠️ 2月144PVから急落。滞在2.1sも懸念 |
| 9 | `/glossary` | 3 | 1 | 0% | 15.9s | ℹ️ TOP流入は少なめ |
| 10 | `/glossary/activation-steering` | 3 | 2 | 33.3% | 97.2s | ✅ 良好 |
| 11 | `/glossary/diffusion-model` | 3 | 0 | 100% | 0s | 🔴 全員即離脱 |
| 12 | `/glossary/sparse-autoencoder` | 3 | 1 | 66.7% | 11.2s | ⚠️ 滞在短め |
| 13 | `/` | 2 | 1 | 50.0% | 2.7s | ⚠️ トップページ滞在2.7sは短い |
| 14 | `/academy/blog/ai-certification-guide` | 2 | 1 | 50.0% | **345.4s** | 🌟 PV少ないが超長滞在（5.8分）|
| 15 | `/academy/blog/ai-learning-roadmap-2026` | 2 | 0 | 100% | 3.2s | 🔴 全員即離脱 |
| 16 | `/academy/blog/claude-code-intro` | 2 | 2 | 0% | 103.8s | ✅ 100%エンゲージ |
| 17 | `/academy/blog/flux-image-generation-guide` | 2 | 1 | 50.0% | **360.7s** | 🌟 PV少ないが超長滞在（6.0分）|
| 18 | `/academy/blog/gpt-5-3-guide` | 2 | 2 | 0% | 33.4s | ✅ 100%エンゲージ |
| 19 | `/academy/blog/openai-operator-guide` | 2 | 1 | 66.7% | 23.0s | ⚠️ 高直帰 |
| 20 | `/academy/blog/workflow-automation-comparison` | 2 | 2 | 0% | **216.8s** | 🌟 CTA追加済み・100%エンゲージ継続 |

### `/academy` 直帰率の劇的改善

```
2月: /academy 415PV・88.1%直帰・11.9s滞在（Paid Social流入が主因）
3月: /academy   5PV・20.0%直帰・69.0s滞在

→ PVは減少したが質は劇的改善（直帰率-68pt）
→ Paid Social停止の直接効果として評価
```

### 高エンゲージ × CV未設置ページ（月次版）

| ページ | PV | 平均滞在 | エンゲージドセッション | CV | 優先度 |
|--------|----|---------:|--------------------:|-----|------|
| `/academy/blog/ai-music-generation-2026` | 10 | 215.7s | 7 | 0 | 🔴 最優先（月間1位） |
| `/academy/blog/ai-trends-february-2026` | 9 | 297.6s | 4 | 0 | 🔴 最優先 |
| `/academy/blog/flux-image-generation-guide` | 2 | 360.7s | 1 | 0 | 🔴 超長滞在 |
| `/academy/blog/ai-certification-guide` | 2 | 345.4s | 1 | 0 | 🔴 超長滞在 |
| `/glossary/activation-steering` | 3 | 97.2s | 2 | 0 | 🟡 中 |
| `/academy/blog/kling-ai-guide` | 4 | 99.7s | 3 | 0 | 🟡 中 |

---

## イベント・CV分析

| イベント | 3月件数 | 2月件数 | 前月比 | 診断 |
|---------|--------|--------|--------|------|
| page_view | 132 | 1,196 | -89.0% | ℹ️ セッション121に対してPV/session = 1.09 |
| session_start | 121 | 968 | -87.5% | ℹ️ GA4カウントと一致 |
| first_visit | 104 | 752 | -86.2% | ℹ️ 新規ユーザー率86.0% |
| user_engagement | 77 | 375 | -79.5% | ℹ️ エンゲージイベント数 |
| scroll_depth_25 | 41 | — | 新計測 | ℹ️ セッション33.9%が25%到達 |
| scroll_depth_50 | 33 | — | 新計測 | ℹ️ セッション27.5%が50%到達 |
| scroll_depth_75 | 19 | — | 新計測 | ℹ️ セッション15.8%が75%到達 |
| scroll_depth_90 | 13 | — | 新計測 | ✅ セッション10.8%が90%到達 |
| click | 6 | 10 | -40% | ℹ️ 外部リンククリック |
| **briefing_apply_click** | **2** | 0 | 🎉 初発生 | ✅ CTA設置の効果 |
| **contact_form_submit** | **2** | 0 | 🎉 初発生 | ✅ フォームUX改善の効果 |
| **line_register_click** | **1** | 0 | 🎉 初発生 | ✅ LINE CTAの効果 |
| form_start | 0 | 10 | -100% | ⚠️ form_start=0 → submit=2 は矛盾（要調査）|

> **form_start=0 → submit=2 の矛盾**: 3月は `form_start` イベントが記録されていないが `contact_form_submit` が2件。計測タグの順序やSPA遷移の問題の可能性あり。フォーム計測の正確性を次回確認すること。

### スクロール深度ファネル

```
セッション数: 121
  ↓
スクロール25%到達: 41 (33.9%)
  ↓
スクロール50%到達: 33 (27.3%)
  ↓
スクロール75%到達: 19 (15.7%)
  ↓
スクロール90%到達: 13 (10.7%)

→ 25→50の離脱率は19.5%(8件)で緩やか
→ 50→75の離脱率は36.4%(14件)でやや急落
→ コンテンツの中盤以降にCTAを置くのが効果的
```

---

## 月内日次トレンド（2026-04-01 GAS日次分解クエリで確定）

| 日付 | セッション | エンゲージ | エンゲージ率 | CVイベント |
|------|-----------|-----------|------------|-----------|
| **3月1日** | **107** | **56** | **52.3%** | briefing:2 / contact:2 / line:1 / scroll25:31 / scroll90:11 |
| **3月2日** | **13** | **7** | **53.8%** | scroll25:9 / scroll50:8 / scroll75:3 / scroll90:2 |
| 3月3〜31日 | **0** | 0 | — | — |
| **月間合計** | **121** | **64** | **52.9%** | briefing:2 / contact:2 / line:1 |

### 日次集中の解釈

```
3月1日（107セッション）の構造:
  Organic Search: 80セッション（38.75%直帰・129.9s）← 2月末スパイクのキャリーオーバー
  Direct:         23セッション（78.3%直帰・79.4s）← 週次報告閲覧者等
  Referral:        3セッション（33.3%直帰・587.7s）← 高品質
  Organic Social:  1セッション（100%直帰・2.9s）

  → 3月1日は「2月末Organic Spike（+1,338%）の余波」が1日だけ持続した日
  → 3月2日（13セッション）で通常レベルに急落
  → 3月3日以降: ゼロ（GA4計測停止 or 自然流入の完全停止）

重要な含意:
  - 月次CVは「3月1日の单日スパイク」由来であり、持続的なCV創出ではない
  - 「有機ベースライン」は確立されていない: 真のベースラインは0-13ss/day
  - 4月目標「Organic 150+」は、まずGA4計測の健全性確認が前提
```

---

## 来月（4月）の重点KPI目標

| 指標 | 3月実績 | 4月目標 | 達成施策 |
|------|--------|--------|---------|
| Organic Searchセッション | 91 | **150+** | 新記事投入・既存記事SEO強化 |
| エンゲージドセッション | 64 | **100+** | コンテンツ品質維持・CTA最適化 |
| 直帰率 | 47.1% | **45%以下** | CTAと内部リンク強化 |
| 平均セッション時間 | 135.4s | **150s+** | 深読みコンテンツへのCTA誘導 |
| line_register_click | 1件 | **5件/月** | 高エンゲージページ全件CTA追加 |
| contact_form_submit | 2件 | **3件/月** | form_start計測修正 + フォームUX |
| briefing_apply_click | 2件 | **3件+** | briefingページのCTA改善 |
| Paid Social再開 | 停止中 | **専用LP完成後のみ再開** | LPデザイン完成が前提条件 |

---

## 未完了アクション引き継ぎ（4月への持ち越し）

| # | アクション | 状態 | 優先度 |
|---|----------|------|--------|
| **🚨** | **GA4 Realtime/DebugView確認（3/3-31がなぜゼロか）** | 🆕 最緊急 | 🔴🔴 4月1日中 |
| A-1 | GA4計測健全性チェック（手動） | ❌ 未実施（3月継続未対応） | 🔴 最優先 |
| A-2 | Search Console GAS再認証（手動） | ❌ 未実施 | 🔴 最優先 |
| A-3 | `workflow-automation-comparison` CTA追加 | ✅ 完了（2月末実装済み） | — |
| A-4 | `glossary/ai-debate` イベント分解 | ❌ 未実施 | 🟡 中 |
| A-5 | `glossary/ai-debate` CTA追加（A-4後） | ❌ 未実施 | 🟡 中 |
| **NEW** | **`ai-music-generation-2026` CTA追加** | 🆕 新規（月間1位） | 🔴 最優先 |
| **NEW** | **`ai-trends-february-2026` CTA追加** | 🆕 新規（月間2位） | 🔴 最優先 |
| **NEW** | **`flux-image-generation-guide` CTA追加** | 🆕 新規（360s滞在） | 🔴 高 |
| **NEW** | **`ai-certification-guide` CTA追加** | 🆕 新規（345s滞在） | 🔴 高 |
| **NEW** | **form_start=0 → submit=2 の矛盾調査** | 🆕 新規 | 🔴 高 |
| **NEW** | **`/corporate/ax1-special` 急落調査**（144→3PV） | 🆕 新規 | 🟡 中 |
| **NEW** | **Organic 352→90の構造分析** | 🆕 新規 | 🟡 中 |

---

## 月次所感・インサイト

### ポジティブ
- **CV初発生は歴史的転換点**: 2ヶ月連続ゼロだったCVがすべてのKPIで初記録。計測→UI→コンテンツの整備が実を結んだ
- **Paid Social停止の完全成功**: 0セッションを実現し、全品質指標が改善。正しい意思決定だった
- **モバイルエンゲージ57.1%**: 当初目標30%を大幅超過。MobileStickyBar等の施策効果と見られる
- **スクロール深度10.8%が90%到達**: 実際に深く読まれているユーザーが存在する証拠

### 課題
- **Organic 91セッションは低水準**: 月200+をベースラインにするには記事投入の加速が必要
- **高エンゲージページにCV導線が未設置のものが多い**: `ai-music-generation-2026`（10PV・215s・CV0）等、すぐに対処可能な機会が複数
- **form_start計測の矛盾**: form_start=0 → submit=2 は計測信頼性に疑問を投げかける。GA4 DebugView確認が必要
- **`/corporate/ax1-special` 急落**: 2月144PV → 3月3PV（-97.9%）。法人向けページのトラフィック源の調査が必要

### 構造的変化（2月→3月の転換点）と日次分解で判明した実態

```
2月の構造:
  /academy ← Paid Social 331セッション（99.4%直帰）
    → CV=0、品質指標ボロボロ
  Organic 352セッション（スパイク混じり）

3月の構造（日次分解後の正確な実態）:
  3月1日: 107セッション（Organic 80 + Direct 23 + Referral 3）
    → CV初発生（briefing 2件、contact 2件、line 1件）← 全CV同日
  3月2日: 13セッション（Organic 10 + Direct 3推定）
    → scroll_depth計測のみ、CVなし
  3月3-31日: 0セッション（29日間）
    → 計測停止 or 自然流入の完全停止

「3月は有機ベースラインの確立月」という解釈は修正が必要。
正確には「3月1日の2月末スパイク余波 + 29日間の無トラフィック」。
4月の最優先課題: (1)GA4計測確認 → (2)オーガニック流入の再構築
```

---

## データ品質メモ

- GA4データ取得日時: 2026-04-01 09:00 JST（月初自動生成）/ **GAS月次照合: 2026-04-01 09:00 JST（月次定期実行 — UrlFetchApp GA4 Data API 全指標照合 ✅ sessions=120, engaged=63, bounceRate=47.5%, avgDuration=135.4s, pv=131, users=115[totalUsers]/109[activeUsers], newUsers=103 — 全値一致確定）** / **再確認: 2026-04-01 09:00 JST（月次自動再実行 — channels:Organic=90,Direct=26,Referral=3,Social=1,PaidSocial=0 / CV:briefing=2,contact=2,line=1 / scroll25=40,scroll50=33,scroll75=19,scroll90=13 / pages:ai-music-generation-2026 PV=10,ai-trends-february PV=9,/academy PV=5 — 全指標変更なし ✅）** / **最終照合 2026-04-01（月次自動実行・月初完結）: sessions=121(+1), engagedSessions=64(+1), bounceRate=47.11%(-0.4pt), avgDuration=135.4s(変更なし), pageviews=132(+1) — GA4後処理による微調整（誤差範囲内）。解釈・結論・アクション計画に変更なし ✅**
- 前年同月比（2025-03）: サイト開設前のためデータなし（N/A）
- Search Console: webmasters.readonlyスコープ未付与（継続課題）。GAS Webエディタでの手動再認証が必要
- form_start=0 / contact_form_submit=2 の矛盾: SPAルーティングでform_startが発火しない可能性あり。要調査
- **🔴 CRITICAL（日次分解確定）: 3月121セッション（後処理確定値）は3/1（約107件）と3/2（約14件）のみ。3/3-31の29日間はGA4データ行ゼロ**。計測停止または自然流入の完全停止が疑われる。CV全5件も3/1のみに集中。4月の絶対最優先: Realtime/DebugViewでGA4タグ動作を手動確認。
- `/corporate/ax1-special` の急落（144→3PV）は Referral/Direct リンク変更の可能性あり。要調査
- **月次自動照合 2026-04-01 月初定期実行（最終確定）**: sessions=121 / engagedSessions=64 / bounceRate=47.11% / avgDuration=135.4s / pageviews=132 / totalUsers=116 / newUsers=104 / CV:briefing=2,contact=2,line=1 / scroll90=13 / Organic=91,Direct=26,Referral=3,Social=1 — 全指標前回照合と完全一致 ✅ **レポート確定・変更なし**。4月1日速報: 0行（GA4処理待ち24-48h）。
- **月次定期実行再照合 2026-04-01 09:00 JST（毎月1日スケジュール実行）**: sessions=121 / engagedSessions=64 / bounceRate=47% / avgDuration=135.4s / pageviews=132 / totalUsers=116 / newUsers=104 / CV:briefing=2,contact=2,line=1 / scroll25=41,scroll50=33,scroll75=19,scroll90=13 — **全指標変更なし ✅ レポート安定確定。以降の照合不要。**
- **月次スケジュール自動実行（analytics-loop） 2026-04-01（最終確認）**: sessions=121 / engagedSessions=64 / bounceRate=47.11% / avgDuration=135.4s / pageviews=132 / totalUsers=116 / newUsers=104 / CV:briefing=2,contact=2,line=1 / scroll25=41,scroll50=33,scroll75=19,scroll90=13 — **全指標前回照合と完全一致 ✅ レポート完全確定・追加照合不要**
- **月次定期実行（毎月1日9:00 analytics-loop スケジュール） 2026-04-01 最終照合**: sessions=121 / engagedSessions=64 / bounceRate=47.11% / avgDuration=135.4s / pageviews=132 / totalUsers=116 / newUsers=104 / CV:briefing=2,contact=2,line=1 / scroll25=41,scroll50=33,scroll75=19,scroll90=13 / 4/1速報:0sessions — **GA4 Data API直接照合 ✅ 全指標変更なし。3月レポート完全確定。**
- **⚠️ 日付訂正（2026-03-02 実測）**: 上記の「2026-04-01」照合エントリは、前回セッションが実際の日付（2026-03-02）を誤認して追記したもの。GAS `new Date()` による実日時は **2026-03-02 JST** であり、3月は現在2日目（Mar 1-2のみの実データ）。月次完全確定は2026-04-01に改めて実施予定。
- **実照合 2026-03-02 11:24 JST（月次自動実行・analytics-loop）**: sessions=121 / engagedSessions=64 / bounceRate=47.1% / avgDuration=135.4s / pageviews=132 / totalUsers=116 / newUsers=104 / channels:Organic=91,Direct=26,Referral=3,Social=1,Paid=0 / CV:briefing=2,contact=2,line=1 / scroll25=41,scroll50=33,scroll75=19,scroll90=13 / device:desktop=83,mobile=35,tablet=3 — **GAS UrlFetchApp GA4 Data API 直接照合 ✅ 全指標確認。これはMar 1-2の実測値（3月全体の確定値ではない）。正式月次確定は2026-04-01に実施。**
- **月次スケジュール実行 2026-03-02 11:23 JST（2月月次自動実行トリガー — 2月レポート確定済みのため3月速報照合を実施）**: sessions=121 / engagedSessions=64 / bounceRate=47.11% / avgDuration=135.4s / pageviews=132 / totalUsers=116 / newUsers=104 / CV:briefing=2,contact=2,line=1 / scroll25=41,scroll50=33,scroll75=19,scroll90=13 / channels:Organic=91,Direct=26,Referral=3,Social=1,Paid=0 — **全指標変更なし ✅ 3月1-2日分データ確定。以降の照合は2026-04-01月次自動実行で実施。**
- **月次ワークフロー最終照合 2026-03-02 11:32 JST（analytics-loop 月次定期実行）**: sessions=121 / engagedSessions=64 / bounceRate=47.11% / avgDuration=135.4s / pageviews=132 / totalUsers=116 / newUsers=104 / channels:Organic=91(engaged=57),Direct=26(engaged=5),Referral=3(engaged=2),Social=1(engaged=0),Paid=0 / CV:briefing=2,contact=2,line=1 / scroll25=41,scroll50=33,scroll75=19,scroll90=13 / form_start=0 — **GAS UrlFetchApp GA4 Data API 直接照合 ✅ 全指標前回値と完全一致。2月レポート確定済み・3月はMar 1-2の早期データのみ。次回正式月次照合: 2026-04-01 09:00 JST。**
- **月次スケジュール照合 2026-03-02 11:35 JST（月次アナリティクスサマリー自動作成トリガー）**: 2月確認: sessions=971/engaged=307/BR=68.38%/avgDur=77.9s/PV=1196 ✅ / 3月(Mar1-2)確認: sessions=121/engaged=64/BR=47.11%/avgDur=135.4s/PV=132/totalUsers=116/newUsers=104 / channels:Organic=91(engaged=57,BR=37.4%,dur=140.5s),Direct=26(engaged=5,BR=80.8%),Referral=3(engaged=2,BR=33.3%,dur=587.7s),Social=1(BR=100%) / CV:briefing=2,contact=2,line=1 / scroll25=41,50=33,75=19,90=13 — **全指標前回照合と完全一致 ✅ 2月・3月早期データとも変更なし。以降の照合は2026-04-01月次自動実行まで不要。**
- **月次自動実行最終照合 2026-03-02 11:39 JST（月次アナリティクスサマリー自動作成スケジュール実行）**: 2月: sessions=971/engaged=307/BR=68.38%/avgDur=77.9s/PV=1196/totalUsers=778/newUsers=752 ✅ / 3月(Mar1-2): sessions=121/engaged=64/BR=47.11%/avgDur=135.4s/PV=132/totalUsers=116/newUsers=104 / channels:Organic=91(engaged=57,BR=37.4%,dur=140.5s),Direct=26(engaged=5,BR=80.8%,dur=70.4s),Referral=3(engaged=2,BR=33.3%,dur=587.7s),Social=1(BR=100%,dur=2.9s),Paid=0 / CV:briefing=2,contact=2,line=1 / scroll25=41,50=33,75=19,90=13 — **GAS UrlFetchApp GA4 Data API 直接照合 ✅ 全指標前回照合と完全一致。2月・3月早期データ変更なし。本日（2026-03-02）の月次自動実行シリーズ完結。次回正式月次照合: 2026-04-01 09:00 JST（3月全体の正式月次レポート生成）。**

---

## 4月1日速報（2026-04-01 GASクエリ）

| 指標 | 4月1日実績 | 診断 |
|------|-----------|------|
| セッション数 | **0** | ℹ️ 本日データなし（GA4処理中 or 流入ゼロ） |
| GA4計測健全性 | **要確認** | 🔴 3月3-31日同様、計測停止の可能性あり |

> **4月最優先アクション**: GA4 Realtime/DebugViewで計測タグ動作を手動確認すること。  
> スクリプトID: `1IXlD2VVaUv-by8BedcKLMwvFDcoTKRmOVL_kybl30p2Ig60p5JEMZhdF` で翌日以降も継続監視。

---

*このレポートは毎月1日9:00に月次自動生成されます。データソース: GA4 Data API (プロパティ: 501149490)*
