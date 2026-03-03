# Action Plan — 2026-03-09

> **対象レポート**: 2026-03-09-00.md（暫定版）
> **Codexレビュー参照**: 2026-03-09-codex-review.md
> **作成日**: 2026-03-09
> **前提**: 計測基盤の健全性確認を施策実行より先に行うこと（Codex指摘 #1）

---

## A. 即時実施タスク（今週中・工数2h以内）

### A-1. GA4計測健全性チェック

| 項目 | 詳細 |
|------|------|
| **担当エージェント** | 手動確認（ブラウザ操作が必要） |
| **工数見積** | 30分 |
| **優先度** | 🔴 今日中 |

**作業手順:**
1. GA4 管理画面（https://analytics.google.com）→ プロパティ: ai-reboot.io (501149490)
2. **Realtime** タブ: 現在のアクティブユーザー数と過去30分のイベントを確認
3. **DebugView**: 開発環境でページを開き、`page_view`・`session_start`・`user_engagement` が正しく発火しているか確認
4. **Measurement ID**: `app/layout.tsx` または `components/GoogleAnalytics.tsx` の `NEXT_PUBLIC_GA_MEASUREMENT_ID` が正しいG-IDを指しているか確認
5. 確認結果を本レポートのデータ信頼度セクションに追記

**期待効果:**
- 今週の13セッション急落が「計測欠損」ではないことを証明
- 以降の週次レポートに `measurement_status: verified/unverified` フラグを付与できる

---

### A-2. ボット除外・内部トラフィック除外設定の証跡化

| 項目 | 詳細 |
|------|------|
| **担当エージェント** | 手動確認（GA4管理画面） |
| **工数見積** | 20分 |
| **優先度** | 🔴 今日中 |

**作業手順:**
1. GA4 管理画面 → 管理 → データストリーム → ウェブストリーム詳細
2. **ボットフィルタリング**: 「既知のボットとスパイダーからのヒットを除外する」が有効になっているか確認 → スクリーンショット保存
3. **内部トラフィック除外**: 管理 → データフィルター → 内部トラフィックフィルターの定義（IPアドレス）を確認 → スクリーンショット保存
4. スクリーンショットを `docs/05-operations/analytics-reports/evidence/` ディレクトリに保存

**期待効果:**
- Direct 100%直帰（1.8s）の原因がボット除外後も残っているか判明
- 計測データの信頼性に関する監査証跡として機能

---

### A-3. `/academy/blog/workflow-automation-comparison` にCV導線追加

| 項目 | 詳細 |
|------|------|
| **担当エージェント** | claude（コード実装） |
| **作業ディレクトリ** | `app/(site)/academy/blog/workflow-automation-comparison/` |
| **工数見積** | 45分 |
| **優先度** | 🔴 今日中〜今週中 |

**作業指示（コックピットでそのままタスク作成できるレベル）:**

```
タスク: workflow-automation-comparison記事にLINE CTA追加

対象ファイル:
  - app/(site)/academy/blog/workflow-automation-comparison/page.tsx（または対応するMDXファイル）
  - components/academyLanding/common/ 以下のCTAコンポーネントを参照

実装内容:
1. 記事本文の中盤（50%地点）に `<LineCtaBox />` を挿入（props なし = デフォルトコピーを使用）
   - ※独自コピーは絶対に入れないこと。LineCtaBox のデフォルト値を必ず使う
   - GA4イベントは LineCtaBox 内で自動発火される

2. 記事末尾にも `<LineCtaBox />` を配置（同様に props なし）

3. モバイル対応: CTAブロックはmd:hidden ではなく全デバイスで表示

参照: components/blog/LineCtaBox.tsx（デフォルトコピーはこちらで管理）
LINE URL: https://bexn9pao.autosns.app/line（LineCtaBox 内で設定済み）
```

**期待効果:**
- 203s滞在・100%エンゲージユーザーへのCV導線確立
- `line_register_click` イベント増加（現在: 今週0件）
- 週次CVRの改善（基準値: 現在0%）

---

### A-4. `/glossary/ai-debate` のGA4イベント分解

| 項目 | 詳細 |
|------|------|
| **担当エージェント** | 手動確認（GA4 DebugView） |
| **工数見積** | 30分 |
| **優先度** | 🟡 今週中 |

**作業手順（1,421秒の正当性検証）:**
1. GA4 → 探索 → 自由形式 → ページパス = `/glossary/ai-debate` でフィルタ
2. 以下のイベント別でセグメント分解:
   ```
   確認項目:
   - session_start (セッション数: 2が正しいか)
   - user_engagement (エンゲージメント回数)
   - scroll_depth_25/50/75/90 (ScrollDepthTrackerから)
   - page_view count per session
   - country, device_category, browser
   - hostname (本番ドメインか確認)
   ```
3. ボット/タブ放置の判定条件:
   - `user_engagement` なしで `session_duration` が長い → タブ放置
   - country=unknown or browser=unusual → ボット疑い
4. 判定結果を記録し、正当性確認後にA-5へ進む

**期待効果:**
- 1,421s数値の信頼性判定
- 以降のGlossaryページ評価基準の確立

---

### A-5. `/glossary/ai-debate` にLINE CTA追加（A-4完了後）

| 項目 | 詳細 |
|------|------|
| **担当エージェント** | claude（コード実装） |
| **作業ディレクトリ** | `app/(site)/glossary/ai-debate/` |
| **工数見積** | 30分 |
| **優先度** | 🟡 今週中（A-4完了後） |
| **ブロッカー** | A-4（イベント分解）の完了 |

**作業指示:**

```
タスク: /glossary/ai-debate ページにLINE CTA追加 + メタ最適化

1. メタディスクリプション最適化:
   - 現在: 確認して変更
   - 推奨: 「AIディベートとは何か？AIを使った討論・議論の最前線を解説。AI×ディベートの活用法を専門家がわかりやすく解説します。」
   - title: 「AIディベートとは | AI Reboot Glossary」（現在のタイトルを確認して最適化）

2. ページ内CTA追加:
   - 位置: 本文70%地点（1,421sの滞在者が到達しているはずの位置）
   - `<LineCtaBox />` を props なしで配置（独自コピー禁止。デフォルトコピーを使う）
   - イベントは LineCtaBox 内で自動発火

参照: components/blog/LineCtaBox.tsx（コピーの管理はここで一元化）
```

**期待効果:**
- 深読みユーザー（推定: AIディベート研究者・学生）への高質CTA
- SEO: メタディスクリプション改善でCTRアップ期待

---

### A-6. モバイル直帰率改善（`/academy` ページ）

| 項目 | 詳細 |
|------|------|
| **担当エージェント** | claude（コード実装） |
| **作業ディレクトリ** | `app/(site)/academy/` |
| **工数見積** | 60分 |
| **優先度** | 🟡 今週中 |

**作業指示（改善計画P2/P3との整合）:**

```
タスク: /academy ページのモバイル直帰率改善

現状: Mobile 直帰率 75%（4セッション中3件直帰）

確認・改善箇所:
1. モバイルファーストビュー確認:
   - Hero セクション（components/academyLanding/sections/HeroSection.tsx）
   - モバイル表示でCTAボタンが画面内に収まっているか
   - フォントサイズ・行間が読みやすいか（typography skill参照）

2. MobileStickyBar の最適化（components/ui/MobileStickyBar.tsx）:
   - 現在: scroll>300px で表示
   - 変更案: scroll>150px に早める（より早くCTAを見せる）
   - ただし UX への影響を確認してから実装

3. ページロード速度:
   - 画像の遅延読み込み確認（next/image の priority 属性）
   - LCP要素の特定と最適化

参照: components/ui/MobileStickyBar.tsx
参照: components/academyLanding/sections/HeroSection.tsx
```

**期待効果:**
- モバイル直帰率: 75% → 50%以下（目標）
- MobileStickyBarのline_register_click 増加

---

## B. 今週〜来週のタスク（工数4h以上）

### B-1. 週次レポート自動化改善（暫定版/確定版2段構成）

| 項目 | 詳細 |
|------|------|
| **担当エージェント** | claude |
| **工数見積** | 3-4h |
| **優先度** | 🟡 来週着手 |

**設計方針:**
```
現状: 手動で週次レポート作成（1種類）

改善後:
  暫定版（T+24h）: 日曜22:00自動生成
    - GA4データ取得（GAS）
    - data_freshness: provisional フラグ付与
    - 「確定版は水曜に更新」と明記

  確定版（T+72h）: 水曜22:00自動更新
    - 暫定版の数値を更新
    - data_freshness: final フラグ付与
    - 暫定版との差分セクション追加

実装方法:
  - GASのtime-based triggerで日曜・水曜22:00に自動実行
  - analytics-loop スキルをトリガーベースで呼び出し
  - レポートファイル名: YYYY-MM-DD-00.md（暫定）/ YYYY-MM-DD-final.md（確定）
```

---

### B-2. high_engagement × zero_conversion ページの自動抽出スクリプト

| 項目 | 詳細 |
|------|------|
| **担当エージェント** | claude |
| **工数見積** | 2-3h |
| **優先度** | 🟡 今週〜来週 |

**設計仕様:**
```typescript
// 抽出条件
interface HighEngagementZeroCVPage {
  path: string;
  avgEngagementTime: number; // > 60s
  engagementRate: number;    // > 50%
  conversionEvents: number;  // === 0
  sessions: number;          // >= 2 (外れ値フィルタ)
}

// GASでの実装イメージ
// 1. GA4 Data API で engagementTime > 60s かつ CVイベント=0 のページを抽出
// 2. セッション数>=2 でフィルタ（母数チェック）
// 3. 結果をレポートの「改善候補」セクションに自動挿入
```

**期待効果:**
- 週次レポートの「high_engagement × zero_CV」候補が自動化
- CTAが未設置のページを漏れなく検出

---

### B-3. Search Console統合レポートテンプレートの設計

| 項目 | 詳細 |
|------|------|
| **担当エージェント** | claude |
| **工数見積** | 2h（Search Console復旧後） |
| **優先度** | 🟢 Search Console復旧後に着手 |
| **ブロッカー** | Search Console GAS再認証（A-2完了後） |

**設計内容:**
```markdown
# Search Console統合テンプレート（設計案）

## 追加セクション（復旧後に挿入）
### Search Console クエリ分析
| # | クエリ | クリック | インプレッション | CTR | 平均順位 | 診断 |
|---|--------|---------|---------------|-----|---------|------|
| 1 | ...    | ...     | ...           | ...| ...     | ...  |

### 高インプレッション・低CTR（クイックウィン候補）
- 基準: impressions >= 100 かつ ctr < 3%
- アクション: title/description の最適化

### GA4 × Search Console マッピング
- GSCクエリ ↔ GA4ランディングページの対応確認
```

---

## C. autorun（スケジュール登録候補）

| スケジュール | タスク | GAS関数 | 優先度 |
|------------|--------|---------|--------|
| **毎週日曜 22:00** | 週次レポート作成（暫定版） | `generateWeeklyReport_provisional()` | 🔴 高 |
| **毎週水曜 22:00** | 週次レポート確定版更新 | `updateWeeklyReport_final()` | 🔴 高 |
| **毎月1日 9:00** | 月次アナリティクスサマリー作成 | `generateMonthlySummary()` | 🟡 中 |
| 毎週月曜 9:00 | high_engagement×zero_CV 自動抽出 | `extractHighEngagementZeroCV()` | 🟡 中 |
| 毎週月曜 9:00 | 前週KPI自動フラグ（±70%チェック） | `flagKPIAnomalies()` | 🟡 中 |

**実装手順（GASトリガー設定）:**
```
1. GAS Webエディタ → トリガー（時計アイコン）
2. 「トリガーを追加」→ 関数名・時間ベース・週次/月次 を設定
3. 失敗通知メール: mocchalera@gmail.com
```

---

## 優先順位マトリクス（実施順）

```
今日中（3/9）:
  A-1: GA4計測健全性チェック（手動・30分）
  A-2: ボット除外証跡化（手動・20分）
  A-3: workflow-automation-comparison CTA追加（claude・45分）

今週中（3/9-3/12）:
  A-4: ai-debate イベント分解（手動・30分）
  A-5: ai-debate CTA追加（claude・30分、A-4後）
  A-6: モバイル直帰率改善（claude・60分）
  確定版レポート更新（3/12 22:00）

来週（3/13-3/19）:
  B-1: 週次レポート自動化改善
  B-2: high_engagement×zero_CV 自動抽出
  B-3: Search Console統合テンプレート（再認証後）
  C: autorun スケジュール登録
```

---

## KPI目標（3週間後: 2026-03-30）

| 指標 | 現状 | 目標 | 施策 |
|------|------|------|------|
| line_register_click | 0/週 | 3/週 | A-3, A-5: CTA追加 |
| モバイル直帰率 | 75% | 50%以下 | A-6: モバイル改善 |
| Organic Searchセッション | 10/週 | 30/週 | SEO + Glossary拡充 |
| Search Console接続 | ❌ | ✅ | A-2: 再認証 |
| 週次レポート自動化 | 手動 | 自動化（日曜・水曜） | B-1: GASトリガー |
