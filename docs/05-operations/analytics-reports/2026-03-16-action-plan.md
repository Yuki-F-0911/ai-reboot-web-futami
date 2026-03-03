# Action Plan — 2026-03-16

> **対象レポート**: 2026-03-16-00.md（暫定版）
> **作成日**: 2026-03-16
> **前提**: 前回（A-3）が3週連続未実施。Claude実施可能なコード実装を最優先とし、手動確認項目は参考情報として残す方針に変更。

---

## A. 即時確認結果（2026-03-16 実施済み）

### A-1. `/academy/blog/workflow-automation-comparison` CTA → ✅ **設置済み確認**

```
確認日: 2026-03-16
確認ファイル: components/academyLanding/blog/workflow-automation-comparison/WorkflowAutomationComparisonPage.tsx
設置箇所: line 351（本文中盤）/ line 600（本文末尾）
インポート: import LineCtaBox from "@/components/blog/LineCtaBox"; (line 8)

過去3週間「未実施」と記録していたのは、grep 対象ファイルの誤りが原因。
app/(site)/academy/blog/{slug}/page.tsx はルートラッパー（〜119行）であり、
実コンテンツは components/academyLanding/blog/{slug}/ に存在する。
今後の確認手順: components/academyLanding/blog/{slug}/{ComponentName}Page.tsx を対象にする。
```

---

### A-2. `/academy/blog/gpt-vs-claude-2026` CTA → ✅ **設置済み確認**

```
確認日: 2026-03-16
確認ファイル: components/academyLanding/blog/gpt-vs-claude-2026/GptVsClaude2026Page.tsx
設置箇所: line 475 / line 531 / line 615（3箇所）
今週の line_register_click 2件はこのページからの発火の可能性あり
```

---

## B. 今週中タスク（Claude実施）

### B-1. `/glossary/anthropic-api` にCTA追加

| 項目 | 詳細 |
|------|------|
| **担当** | claude（コード実装） |
| **工数見積** | 45分 |
| **優先度** | 🟡 今週中 |

**注意点:**
- Glossaryは `app/(site)/glossary/[slug]/page.tsx` の動的ルートで管理
- `content/glossary/anthropic-api.mdx`（またはJSONデータ）を確認してCTA挿入箇所を特定
- Glossaryテンプレートに共通CTAを追加する場合は全Glossaryページに影響するため慎重に

**実装方針（選択肢）:**
```
Option A（推奨・安全）: GlossaryページのSlugが "anthropic-api" の場合のみ条件付きCTA追加
Option B（広範囲）: 全Glossaryページのテンプレートに末尾CTA追加
  → rowCount=383のスクロールイベントがあるため、全体的な改善の可能性あり
```

---

### B-2. `/academy/blog/ai-trends-february-2026` の直帰率改善（62.5% → 40%目標）

| 項目 | 詳細 |
|------|------|
| **担当** | claude |
| **ファイル** | `app/(site)/academy/blog/ai-trends-february-2026/page.tsx`（またはMDX） |
| **工数見積** | 60分 |
| **優先度** | 🟡 今週中 |

**改善内容:**
1. ファーストビューの改善（最初の3文で読者の疑問に即答する構成）
2. 目次を本文開始直後（100px以内）に配置
3. FV内に一言概要ブロックを追加（TLDR的なまとめ）
4. 内部リンク（関連記事）を記事前半に追加

---

## C. 参考（手動確認・ユーザー実施）

### C-1. Search Console OAuth 再認証

前回（2026-03-09）と同様の手順で再認証:
```
1. GAS Webエディタ → clasp 認証フロー再実行
2. webmasters.readonly スコープを再付与
3. gas コマンドで接続テスト
```
参照: 2026-03-09-00.md の「技術的な課題 → Search Console GAS OAuth 解決方法」

### C-2. GA4計測健全性チェック（3週連続未実施）

```
確認内容:
1. GA4 Realtime → 現在のアクティブユーザーと過去30分イベント
2. DebugView → page_view・session_start・user_engagement 発火確認
3. Measurement ID（G-ZLQ46ESV8H）の実装箇所: components/GoogleAnalytics.tsx
```

---

## 優先順位マトリクス

```
今日（2026-03-16）確認済み:
  A-1: workflow-automation-comparison CTA → ✅ 設置済み（line 351, 600）
  A-2: gpt-vs-claude CTA → ✅ 設置済み（line 475, 531, 615）

今週中（Claude実施）:
  B-1: glossary/anthropic-api CTA追加（Glossary構造確認してから実装）
  B-2: ai-trends-february-2026 直帰率改善

ユーザー手動確認（いつでも）:
  C-1: Search Console 再認証
  C-2: GA4 Realtime/DebugView 確認
```

---

## KPI目標（2026-03-23 次回レポート時点）

| 指標 | 現状 | 目標 | 施策 |
|------|------|------|------|
| line_register_click | 2/週 | 5/週 | A-1, A-2: CTA追加 |
| briefing_apply_click | 2/週 | 3/週 | A-1, A-2: CTA追加 |
| CVR (line) | 0.25% | 0.8% | CTA追加+FV改善 |
| Organic 平均時間 | 129.3s | 150s | B-2: 直帰率改善 |
| Direct 直帰率 | 88.6% | 70%以下 | C-2: ボット除外確認 |
| search console接続 | ❌ | ✅ | C-1: OAuth再認証 |
