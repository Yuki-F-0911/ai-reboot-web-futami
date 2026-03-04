---
name: analytics-loop
description: |
  GA4とSearch Consoleのデータを取得・分析し、具体的な改善アクションを提案するスキル。
  LINE友達追加×CTAクリックの時刻相関分析も含む。
  Use when: 「分析して」「analytics loop」「GA4確認」「サーチコンソール確認」と言われたとき。
metadata:
  version: "2.0"
  project: "ai-reboot-web"
  language: "ja"
---

# Analytics Loop — AI Reboot (ai-reboot.io)

GA4・Search Console・LINE CVデータを取得・分析し、改善→計測→改善のループを自律的に回すスキル。

---

## 実行フロー

```
Step 1: GA4データ取得 (GAS × 5コマンド)
Step 2: Search Consoleデータ取得 (GAS × 2コマンド)
Step 3: LINE Conversion Attribution (GAS × 1コマンド)
Step 4: 前回レポートとの差分比較
Step 5: 分析フレームワーク適用
Step 6: レポート出力 + アクション提案
```

---

## Step 1: GA4データ取得

GA4 Property ID: `501149490` / サイト: `ai-reboot.io`

### 1-A. チャネル別セッション・エンゲージメント（直近7日 vs 前7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"dateRanges":[{"startDate":"7daysAgo","endDate":"today","name":"current"},{"startDate":"14daysAgo","endDate":"8daysAgo","name":"previous"}],"dimensions":[{"name":"sessionDefaultChannelGroup"}],"metrics":[{"name":"sessions"},{"name":"engagedSessions"},{"name":"bounceRate"},{"name":"averageSessionDuration"},{"name":"newUsers"}],"limit":10}; var r = UrlFetchApp.fetch("https://analyticsdata.googleapis.com/v1beta/properties/501149490:runReport",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

### 1-B. キーイベント（CV）集計（直近7日 vs 前7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"dateRanges":[{"startDate":"7daysAgo","endDate":"today","name":"current"},{"startDate":"14daysAgo","endDate":"8daysAgo","name":"previous"}],"dimensions":[{"name":"eventName"}],"metrics":[{"name":"eventCount"},{"name":"sessions"}],"dimensionFilter":{"orGroup":{"expressions":[{"filter":{"fieldName":"eventName","stringFilter":{"matchType":"EXACT","value":"contact_form_submit"}}},{"filter":{"fieldName":"eventName","stringFilter":{"matchType":"EXACT","value":"briefing_apply_click"}}},{"filter":{"fieldName":"eventName","stringFilter":{"matchType":"EXACT","value":"line_register_click"}}},{"filter":{"fieldName":"eventName","stringFilter":{"matchType":"EXACT","value":"line_friend_add_complete"}}}]}},"limit":20}; var r = UrlFetchApp.fetch("https://analyticsdata.googleapis.com/v1beta/properties/501149490:runReport",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

### 1-C. スクロール深度（コンテンツ消費率）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"dateRanges":[{"startDate":"7daysAgo","endDate":"today"}],"dimensions":[{"name":"eventName"},{"name":"pagePath"}],"metrics":[{"name":"eventCount"}],"dimensionFilter":{"filter":{"fieldName":"eventName","stringFilter":{"matchType":"BEGINS_WITH","value":"scroll_depth_"}}},"orderBys":[{"metric":{"metricName":"eventCount"},"desc":true}],"limit":20}; var r = UrlFetchApp.fetch("https://analyticsdata.googleapis.com/v1beta/properties/501149490:runReport",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

### 1-D. トップページ パフォーマンス（直近7日 vs 前7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"dateRanges":[{"startDate":"7daysAgo","endDate":"today","name":"current"},{"startDate":"14daysAgo","endDate":"8daysAgo","name":"previous"}],"dimensions":[{"name":"pagePath"},{"name":"pageTitle"}],"metrics":[{"name":"screenPageViews"},{"name":"engagedSessions"},{"name":"bounceRate"},{"name":"averageSessionDuration"}],"orderBys":[{"metric":{"metricName":"screenPageViews"},"desc":true}],"limit":15}; var r = UrlFetchApp.fetch("https://analyticsdata.googleapis.com/v1beta/properties/501149490:runReport",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

### 1-E. デバイス別パフォーマンス（直近7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var body = {"dateRanges":[{"startDate":"7daysAgo","endDate":"today","name":"current"},{"startDate":"14daysAgo","endDate":"8daysAgo","name":"previous"}],"dimensions":[{"name":"deviceCategory"}],"metrics":[{"name":"sessions"},{"name":"bounceRate"},{"name":"engagedSessions"},{"name":"averageSessionDuration"}],"limit":5}; var r = UrlFetchApp.fetch("https://analyticsdata.googleapis.com/v1beta/properties/501149490:runReport",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

---

## Step 2: Search Consoleデータ取得

サイトURL: `sc-domain:ai-reboot.io`（ドメインプロパティ）

> **注意**: `https%3A%2F%2Fai-reboot.io%2F` を使うと403エラー。必ず `sc-domain%3Aai-reboot.io` を使うこと。

### 2-A. 検索クエリ別パフォーマンス（直近7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var today = new Date(); var endDate = Utilities.formatDate(new Date(today.getTime() - 2*24*60*60*1000), "Asia/Tokyo", "yyyy-MM-dd"); var startDate = Utilities.formatDate(new Date(today.getTime() - 9*24*60*60*1000), "Asia/Tokyo", "yyyy-MM-dd"); var body = {"startDate":startDate,"endDate":endDate,"dimensions":["query"],"rowLimit":20,"startRow":0,"dataState":"final"}; var r = UrlFetchApp.fetch("https://searchconsole.googleapis.com/webmasters/v3/sites/sc-domain%3Aai-reboot.io/searchAnalytics/query",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

### 2-B. ページ別パフォーマンス（直近7日）

```bash
gas 'var token = ScriptApp.getOAuthToken(); var today = new Date(); var endDate = Utilities.formatDate(new Date(today.getTime() - 2*24*60*60*1000), "Asia/Tokyo", "yyyy-MM-dd"); var startDate = Utilities.formatDate(new Date(today.getTime() - 9*24*60*60*1000), "Asia/Tokyo", "yyyy-MM-dd"); var body = {"startDate":startDate,"endDate":endDate,"dimensions":["page"],"rowLimit":15,"startRow":0}; var r = UrlFetchApp.fetch("https://searchconsole.googleapis.com/webmasters/v3/sites/sc-domain%3Aai-reboot.io/searchAnalytics/query",{method:"POST",headers:{"Authorization":"Bearer "+token},contentType:"application/json",payload:JSON.stringify(body)}); return JSON.parse(r.getContentText());'
```

---

## Step 3: LINE Conversion Attribution（時刻相関分析）

`line_register_click`（CTAクリック）と `line_friend_add_complete`（友達追加）を分単位で突き合わせ、直前5分以内のクリックを友達追加の流入元として推定する。

```bash
gas 'var propertyId = "501149490"; var ga4Url = "https://analyticsdata.googleapis.com/v1beta/properties/" + propertyId + ":runReport"; var token = ScriptApp.getOAuthToken(); var h = { "Authorization": "Bearer " + token, "Content-Type": "application/json" }; var clickPayload = { dateRanges: [{ startDate: "30daysAgo", endDate: "today" }], dimensions: [{ name: "dateHourMinute" }, { name: "pagePath" }], metrics: [{ name: "eventCount" }], dimensionFilter: { filter: { fieldName: "eventName", stringFilter: { matchType: "EXACT", value: "line_register_click" } } }, orderBys: [{ dimension: { dimensionName: "dateHourMinute" } }], limit: 1000 }; var cr = UrlFetchApp.fetch(ga4Url, { method: "POST", headers: h, payload: JSON.stringify(clickPayload), muteHttpExceptions: true }); var cd = JSON.parse(cr.getContentText()); var addPayload = { dateRanges: [{ startDate: "30daysAgo", endDate: "today" }], dimensions: [{ name: "dateHourMinute" }], metrics: [{ name: "eventCount" }], dimensionFilter: { filter: { fieldName: "eventName", stringFilter: { matchType: "EXACT", value: "line_friend_add_complete" } } }, orderBys: [{ dimension: { dimensionName: "dateHourMinute" } }], limit: 1000 }; var ar = UrlFetchApp.fetch(ga4Url, { method: "POST", headers: h, payload: JSON.stringify(addPayload), muteHttpExceptions: true }); var ad = JSON.parse(ar.getContentText()); var clickRows = cd.rows ? cd.rows.map(function(r) { var dhm = r.dimensionValues[0].value; return { time: dhm, display: dhm.slice(0,4)+"/"+dhm.slice(4,6)+"/"+dhm.slice(6,8)+" "+dhm.slice(8,10)+":"+dhm.slice(10,12), ms: new Date(dhm.slice(0,4)+"-"+dhm.slice(4,6)+"-"+dhm.slice(6,8)+"T"+dhm.slice(8,10)+":"+dhm.slice(10,12)+":00+09:00").getTime(), page: r.dimensionValues[1].value, count: parseInt(r.metricValues[0].value) }; }) : []; var addRows = ad.rows ? ad.rows.map(function(r) { var dhm = r.dimensionValues[0].value; return { time: dhm, display: dhm.slice(0,4)+"/"+dhm.slice(4,6)+"/"+dhm.slice(6,8)+" "+dhm.slice(8,10)+":"+dhm.slice(10,12), ms: new Date(dhm.slice(0,4)+"-"+dhm.slice(4,6)+"-"+dhm.slice(6,8)+"T"+dhm.slice(8,10)+":"+dhm.slice(10,12)+":00+09:00").getTime(), count: parseInt(r.metricValues[0].value) }; }) : []; var correlations = addRows.map(function(addEvent) { var within5 = clickRows.filter(function(c) { return c.ms >= addEvent.ms - 5*60*1000 && c.ms <= addEvent.ms; }); var within1h = clickRows.filter(function(c) { return c.ms >= addEvent.ms - 60*60*1000 && c.ms < addEvent.ms - 5*60*1000; }); return { addTime: addEvent.display, addCount: addEvent.count, within5min: within5.map(function(c){return c.page+"("+c.display+")"}).join(", ") || "(なし)", within1h: within1h.map(function(c){return c.page+"("+c.display+")"}).join(", ") || "(なし)", attribution: within5.length > 0 ? within5[within5.length-1].page : (within1h.length > 0 ? within1h[within1h.length-1].page+" [1h以内]" : "不明") }; }); return { clickTotal: clickRows.length, addTotal: addRows.length, correlations: correlations, clickByPage: clickRows.reduce(function(acc, r) { acc[r.page] = (acc[r.page] || 0) + r.count; return acc; }, {}) };'
```

**分析結果の解釈:**
- `correlations`: 各友達追加の推定流入ページ（5分ウィンドウで一致したクリック）
- `clickByPage`: ページ別CTAクリック合計（クリックが多いページ = CTA露出が多い）
- 友達追加が0件の場合はスキップしてレポートに「計測開始 YYYY-MM-DD」と記録

---

## Step 4: 差分比較

前回レポート（`docs/05-operations/analytics-reports/` 以下の最新ファイル）と比較:
- セッション数の増減（±20%で要注記）
- キーイベント発火数の増減
- 直帰率の改善/悪化
- 新たに浮上したクエリ・ページ

---

## Step 5: 分析フレームワーク

### 5-1. CV漏斗チェック（最優先）

```
セッション数 → エンゲージドセッション → キーイベント → CVR算出

目標CVR:
- line_register_click:      セッションの2%以上
- line_friend_add_complete: line_register_click の10%以上（友達追加転換率）
- briefing_apply_click:     セッションの0.5%以上
- contact_form_submit:      セッションの0.3%以上
```

**警告ラインを下回った場合**: 離脱ステップを特定 → 改善案提示

### 5-2. コンテンツ消費率チェック

```
scroll_depth_25 / page_view = 25%到達率（目標: 70%以上）
scroll_depth_50 / page_view = 50%到達率（目標: 40%以上）
scroll_depth_75 / page_view = 75%到達率（目標: 20%以上）
```

**到達率が低いページ** = 冒頭で離脱 → CTAの早期配置・リード文改善

### 5-3. SEO機会マトリクス

| パターン | 条件 | アクション |
|---------|------|---------|
| **Quick Win** | 表示回数 > 500 AND CTR < 3% AND 順位 4〜15位 | タイトル・メタ改善で即効性あり |
| **コンテンツ深化** | 順位 1〜3位 AND 表示回数が少ない | 関連キーワードで記事拡充 |
| **新規開拓** | 表示回数増加中 AND 順位 > 20位 | 専用ページ/記事の新規作成 |
| **要保護** | CTR > 10% AND 順位が下落中 | 内部リンク強化・コンテンツ更新 |

### 5-4. デバイス別エンゲージメント

```
モバイル直帰率の基準値: 60%以下が目標
デスクトップとの差: 20pt以内が健全
```

### 5-5. 流入チャネル品質評価

```
Organic Search:  エンゲージ率 > 50% が健全
Direct:          エンゲージ率 > 45% が健全
Paid Social:     エンゲージ率 > 10% が最低ライン
Referral:        参照元を確認・連携強化を検討
```

---

## Step 6: レポート出力フォーマット

`docs/05-operations/analytics-reports/YYYY-MM-DD-HH.md` に保存。

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
| line_friend_add_complete | | | |
| briefing_apply_click | | | |
| contact_form_submit | | | |

## LINE Conversion Attribution
| 友達追加時刻 | 直前5分のクリック元ページ | 判定 |
| --- | --- | --- |
| (Step 3の結果を記載) | | |

> クリック別集計: ページX: N件, ページY: N件 ...

## SEO発見（Quick Winのみ抽出）
1. クエリ「XXX」: 表示回数XXX、CTR XX%、順位XX → タイトル改善案

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

---

## 既知の制約・注意事項

- **GA4データの遅延**: 実データは24〜48時間遅延。当日分は暫定値
- **SC データのラグ**: Search Console は 2〜3日遅延。直近2日は空になる場合あり
- **line_friend_add_complete**: 2026-03-03 計測開始。それ以前はデータなし
- **Attribution精度**: 時刻相関は5分ウィンドウで推定。マルチデバイス（PCでクリック→スマホで追加）は追えない
- **レポートディレクトリ**: `docs/05-operations/analytics-reports/` がない場合は `mkdir -p` で作成

---

## コンテキスト（プロジェクト固有の背景）

- **GA4 Property ID**: `501149490`
- **Measurement ID**: `G-ZLQ46ESV8H`
- **LINE OA**: `https://bexn9pao.autosns.app/line`（autosns経由）
- **Webhook**: `https://ai-reboot.io/api/line/webhook`（2026-03-03 稼働開始）
- **主要課題**: モバイル直帰率、Paid Social エンゲージ率低迷、LINE友達追加CVR
- **キーイベント登録済み**: `contact_form_submit` / `briefing_apply_click` / `line_register_click` / `line_friend_add_complete`
- **過去の分析ドキュメント**: `docs/05-operations/analytics-reports/` 配下の最新レポートを参照
- **トラッキングコード**: `lib/analytics.ts`, `components/layout/ScrollDepthTracker.tsx`, `lib/ga4MeasurementProtocol.ts`
