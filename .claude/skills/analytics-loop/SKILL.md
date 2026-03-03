# Analytics Loop Skill — AI Reboot (ai-reboot.io)

12時間ごとにGA4とSearch Consoleのデータを取得・分析し、具体的な改善アクションを提案するスキル。
改善→計測→改善のループを自律的に回す。

## Trigger

以下のいずれかで起動:
- cockpit autorun (12時間間隔)
- 「分析して」「analytics loop」「GA4確認」「サーチコンソール確認」

---

## 実行フロー（毎回この順で実行）

```
Step 1: GA4データ取得 (GAS × 4コマンド)
Step 2: Search Consoleデータ取得 (GAS × 2コマンド)
Step 3: 前回レポートとの差分比較
Step 4: 分析フレームワーク適用
Step 5: レポート出力 + アクション提案
```

---

## Step 1: GA4データ取得

GA4 Property ID: `501149490`
サイト: `ai-reboot.io`

### 1-A. チャネル別セッション・エンゲージメント（直近7日 vs 前7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"dateRanges":[{"startDate":"7daysAgo","endDate":"today","name":"current"},{"startDate":"14daysAgo","endDate":"8daysAgo","name":"previous"}],"dimensions":[{"name":"sessionDefaultChannelGroup"}],"metrics":[{"name":"sessions"},{"name":"engagedSessions"},{"name":"bounceRate"},{"name":"averageSessionDuration"},{"name":"newUsers"}],"limit":10}; var r = UrlFetchApp.fetch("https://analyticsdata.googleapis.com/v1beta/properties/501149490:runReport",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

### 1-B. キーイベント（CV）集計（直近7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"dateRanges":[{"startDate":"7daysAgo","endDate":"today","name":"current"},{"startDate":"14daysAgo","endDate":"8daysAgo","name":"previous"}],"dimensions":[{"name":"eventName"}],"metrics":[{"name":"eventCount"},{"name":"sessions"}],"dimensionFilter":{"orGroup":{"expressions":[{"filter":{"fieldName":"eventName","stringFilter":{"matchType":"EXACT","value":"contact_form_submit"}}},{"filter":{"fieldName":"eventName","stringFilter":{"matchType":"EXACT","value":"briefing_apply_click"}}},{"filter":{"fieldName":"eventName","stringFilter":{"matchType":"EXACT","value":"line_register_click"}}}]}},"limit":10}; var r = UrlFetchApp.fetch("https://analyticsdata.googleapis.com/v1beta/properties/501149490:runReport",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

### 1-C. スクロール深度（コンテンツ消費率）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"dateRanges":[{"startDate":"7daysAgo","endDate":"today"}],"dimensions":[{"name":"eventName"},{"name":"pagePath"}],"metrics":[{"name":"eventCount"}],"dimensionFilter":{"filter":{"fieldName":"eventName","stringFilter":{"matchType":"BEGINS_WITH","value":"scroll_depth_"}}},"orderBys":[{"metric":{"metricName":"eventCount"},"desc":true}],"limit":20}; var r = UrlFetchApp.fetch("https://analyticsdata.googleapis.com/v1beta/properties/501149490:runReport",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

### 1-D. トップページ パフォーマンス（直近7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"dateRanges":[{"startDate":"7daysAgo","endDate":"today","name":"current"},{"startDate":"14daysAgo","endDate":"8daysAgo","name":"previous"}],"dimensions":[{"name":"pagePath"},{"name":"pageTitle"}],"metrics":[{"name":"screenPageViews"},{"name":"engagedSessions"},{"name":"bounceRate"},{"name":"averageSessionDuration"}],"orderBys":[{"metric":{"metricName":"screenPageViews"},"desc":true}],"limit":15}; var r = UrlFetchApp.fetch("https://analyticsdata.googleapis.com/v1beta/properties/501149490:runReport",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

---

## Step 2: Search Consoleデータ取得

サイトURL: `sc-domain:ai-reboot.io`（ドメインプロパティ。URL Prefixの `https://ai-reboot.io/` ではないので注意）

### 2-A. 検索パフォーマンス クエリ別（直近7日 vs 前7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"startDate":"2026-02-22","endDate":"2026-03-01","dimensions":["query"],"rowLimit":20,"startRow":0,"dataState":"final"}; var r = UrlFetchApp.fetch("https://searchconsole.googleapis.com/webmasters/v3/sites/sc-domain%3Aai-reboot.io/searchAnalytics/query",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

> **注意**: プロパティは `sc-domain:ai-reboot.io`（ドメインプロパティ）。URLエンコードは `sc-domain%3Aai-reboot.io`。
> `https%3A%2F%2Fai-reboot.io%2F` を使うと403 "insufficient permission" エラーになる。

### 2-B. ページ別パフォーマンス（直近7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"startDate":"2026-02-22","endDate":"2026-03-01","dimensions":["page"],"rowLimit":15,"startRow":0}; var r = UrlFetchApp.fetch("https://searchconsole.googleapis.com/webmasters/v3/sites/sc-domain%3Aai-reboot.io/searchAnalytics/query",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

> **日付について**: GASコマンド内の日付を実行時の日付に合わせて更新すること（`startDate`=7日前, `endDate`=昨日）。

---

## Step 3: 差分比較

前回レポート（`docs/05-operations/analytics-reports/` 以下の最新ファイル）と比較して以下を確認:
- セッション数の増減
- キーイベント発火数の増減
- 直帰率の改善/悪化
- 新たに浮上したクエリ・ページ

---

## Step 4: 分析フレームワーク

取得データに対して以下の順で分析を行う。

### 4-1. CV漏斗チェック（最優先）

```
セッション数 → エンゲージドセッション → キーイベント（3種）→ CVR算出

目標CVR:
- line_register_click: セッションの2%以上
- briefing_apply_click: セッションの0.5%以上
- contact_form_submit: セッションの0.3%以上
```

**警告ラインを下回った場合**: どのステップで離脱しているかを特定 → 改善案提示

### 4-2. コンテンツ消費率チェック（SEO品質指標）

```
scroll_depth_25 / page_view = 25%到達率（目標: 70%以上）
scroll_depth_50 / page_view = 50%到達率（目標: 40%以上）
scroll_depth_75 / page_view = 75%到達率（目標: 20%以上）
```

**到達率が低いページ** = 冒頭で離脱 → CTAの早期配置、リード文の改善

### 4-3. SEO機会マトリクス

Search Consoleデータから以下のパターンを発見:

| パターン | 条件 | アクション |
|---------|------|---------|
| **Quick Win** | 表示回数 > 500 AND CTR < 3% AND 順位 4〜15位 | タイトル・メタ改善で即効性あり |
| **コンテンツ深化** | 順位 1〜3位 AND 表示回数が少ない | 関連キーワードで記事拡充 |
| **新規開拓** | 表示回数増加中 AND 順位 > 20位 | 専用ページ/記事の新規作成 |
| **要保護** | CTR > 10% AND 順位が下落中 | 内部リンク強化、コンテンツ更新 |

### 4-4. デバイス別エンゲージメント

```
モバイル直帰率の基準値: 60%以下が目標（現状: 92% → 要改善継続）
デスクトップとの差: 20pt以内が健全
```

### 4-5. 流入チャネル品質評価

```
Organic Search:   エンゲージ率 > 50% が健全
Direct:          エンゲージ率 > 45% が健全
Paid Social:     エンゲージ率 > 10% が最低ライン（現状: ほぼ0% = 広告ランディング問題）
Referral:        どのサイトからか確認、連携強化を検討
```

---

## Step 5: レポート出力フォーマット

分析完了後、以下のフォーマットでレポートを出力する。

```markdown
# Analytics Report — YYYY-MM-DD HH:MM

## サマリー（3行以内）
- 今期の状況を端的に
- 前回比で最も変化した指標
- 今回の最重要アクション1つ

## 主要KPI（前回比）
| 指標 | 今期 | 前期 | 変化 |
| --- | --- | --- | --- |
| セッション数 | | | |
| エンゲージ率 | | | |
| line_register_click | | | |
| briefing_apply_click | | | |
| contact_form_submit | | | |

## SEO発見（Quick Winのみ抽出）
1. クエリ「XXX」: 表示回数XXX、CTR XX%、順位XX → タイトル改善案
2. ...

## コンテンツパフォーマンス
- scroll_depth_75到達率トップ3ページ
- 直帰率ワースト3ページ + 改善案

## 今回のアクション（優先順位付き）
### 🔴 即対応（今日中）
- 具体的タスク + ファイルパス

### 🟡 今週中
- 具体的タスク + ファイルパス

### 🟢 次回まで様子見
- 監視項目
```

レポートは `docs/05-operations/analytics-reports/YYYY-MM-DD-HH.md` に保存する。

---

## Autorun設定

このスキルを12時間ごとに自動実行するには、cockpitで以下を実行:

```bash
./autorun create \
  --name "AI Reboot Analytics Loop" \
  --instruction "analytics-loopスキルを実行してください。GA4とSearch Consoleのデータを取得・分析し、docs/05-operations/analytics-reports/ にレポートを保存して、改善アクションを提案してください。" \
  --directory /Users/mocchalera/Dev/ai-reboot-web \
  --type interval \
  --minutes 720
```

---

## 既知の制約・注意事項

- **GA4データの遅延**: 実データは24〜48時間遅延。リアルタイムは前回分析との差分で補完
- **GAS スコープ**: Search Console APIに403エラーが出る場合、GASプロジェクトにwebmastersスコープを追加するか、Search Console UIから手動でデータを取得して分析
- **日付の更新**: Search Console GASコマンドの日付を毎回実行時の日付に更新すること
- **レポート蓄積**: `docs/05-operations/analytics-reports/` ディレクトリがない場合は `mkdir -p` で作成

---

## コンテキスト（プロジェクト固有の背景）

- **GA4 Property ID**: 501149490
- **Measurement ID**: G-ZLQ46ESV8H
- **主要課題**: モバイル直帰率92%（有料ソーシャル広告起因）、CV計測は2026-03から開始
- **キーイベント登録済み**: contact_form_submit / briefing_apply_click / line_register_click
- **過去の分析ドキュメント**: `docs/05-operations/ga4-analytics-improvement-plan.md`
- **トラッキングコード**: `lib/analytics.ts`, `components/layout/ScrollDepthTracker.tsx`
