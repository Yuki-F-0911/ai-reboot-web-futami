# Action Plan — 2026-03-23

> 作成日: 2026-03-23
> 対象レポート: `2026-03-23-00.md`（暫定版 T+24h）
> 前回レビュー参照: `2026-03-16-codex-review.md`
> 作成者: Claude Sonnet 4.6（analytics-loop Step 3）

---

## GASデータ取得結果（Task A）

### A-1: line_register_click ページ別発生源

```
取得結果: ❌ 取得不可
原因: GAS CLIスクリプトアカウントが GA4 property/501149490 への
      アクセス権限を持っていない（rowsなし・認証問題）。
      Search Console と同様の OAuth スコープ問題と推定。

対応方針:
  Option A（推奨）: GA4 Explore → Free Form
    → Dimension: Event Name + Page Location
    → Metric: Event Count
    → Filter: event_name = "line_register_click"
    → 実行してどのページURLからクリックされたか確認

  Option B: GAS Webエディタで別スクリプトID（月次自動実行スクリプト）を使用
    Script ID: 1IXlD2VVaUv-by8BedcKLMwvFDcoTKRmOVL_kybl30p2Ig60p5JEMZhdF
```

### A-2: /rebooters 遷移先分析

```
取得結果: ❌ 取得不可
原因1: GA4 Data API に `nextPagePath` ディメンションは存在しない（UA専用）。
        エラー: "Field nextPagePath is not a valid dimension"
原因2: A-1と同様のアカウント権限問題でページ別セッションデータも未取得。

代替確認方法:
  GA4 Explore → User Explorer または Path Exploration
  → Starting Point: /rebooters
  → ユーザーフロー（次のページへの遷移先）を確認
```

---

## アクションプラン

### 🔴 優先度: 今週中（Claude実施）

---

#### B-1: `generative-ai-passport-guide` FV改善

| 項目 | 内容 |
|------|------|
| **問題** | scroll_25到達率 13.7%→11.5%（PV=61・4週連続低下） |
| **担当** | Claude Code |
| **工数見積** | 2〜3時間 |
| **ETA** | 2026-03-24（月）中 |
| **対象ファイル** | `app/(site)/academy/blog/generative-ai-passport-guide/page.tsx` または `components/academyLanding/blog/generative-ai-passport-guide/` 配下 |
| **期待効果** | scroll_25到達率 11.5% → 20%+ |

**実装内容（優先度順）**:

1. **H1直下に「この記事でわかること」ボックスを追加**（最優先）
   ```jsx
   // FV最上部（H1の直後）に設置
   <aside className="summary-box bg-depth-50 border border-depth-200 rounded-xl p-4 mb-6">
     <h2 className="text-sm font-semibold text-depth-600 mb-2">この記事でわかること</h2>
     <ul className="text-sm text-depth-700 space-y-1">
       <li>✓ 生成AI活用能力検定の概要・難易度・受験料</li>
       <li>✓ 合格するための最短学習ルート</li>
       <li>✓ 資格取得後のキャリアへの活かし方</li>
     </ul>
   </aside>
   ```

2. **目次（Table of Contents）をFV内上部に配置**
   - 現在の目次位置が深すぎる場合、H1直下のsummary-boxの後に移動
   - スクロール誘発効果を狙う

3. **リード文を「問い→答え→価値」構成に改善**
   - 最初の50文字以内に「誰のための記事か・何が得られるか」を明示
   - 現状の書き出しが抽象的であれば修正

**計測ポイント**: 来週の scroll_25到達率（目標: 11.5% → 20%+）

---

#### B-2: `/glossary/claude-code` CTA追加

| 項目 | 内容 |
|------|------|
| **問題** | scroll_25=7件（急上昇）なのにCTAが未設置でCV機会損失 |
| **担当** | Claude Code |
| **工数** | 15分 |
| **ETA** | 2026-03-23（本日）✅ |
| **対象ファイル** | `app/(site)/glossary/[slug]/page.tsx` Line 84 |
| **ステータス** | **✅ 実装済み**（本セッションで実装完了） |

**実装内容**:
```tsx
// Line 84: shouldInsertLineCta に "claude-code" を追加
const shouldInsertLineCta = slug === "ai-debate" || slug === "anthropic-api" || slug === "claude-code";
```

commit: `feat: glossary/claude-code にLineCtaBox追加`

---

### 🟡 優先度: 今週中（Claude実施）

---

#### B-3: `/academy/blog/ai-trends-february-2026` FV改善

| 項目 | 内容 |
|------|------|
| **問題** | PV=38（前週比+46%急増）、直帰率60.5%、scroll_25到達率18.4% |
| **担当** | Claude Code |
| **工数見積** | 2〜3時間 |
| **ETA** | 2026-03-25（火）中 |
| **対象ファイル** | `app/(site)/academy/blog/ai-trends-february-2026/page.tsx` または `components/academyLanding/blog/ai-trends-february-2026/` 配下 |
| **期待効果** | 直帰率 60.5% → 45%以下、scroll_25到達率 18.4% → 30%+ |

**実装内容（優先度順）**:

1. **「この記事でわかること」ボックスをH1直下に追加**（B-1と同様の構造）
   ```jsx
   <aside className="summary-box ...">
     <h2>この記事でわかること</h2>
     <ul>
       <li>✓ 2026年2月の最重要AIトレンド3選</li>
       <li>✓ 各トレンドがビジネスに与える具体的影響</li>
       <li>✓ 今すぐ着手できるアクション</li>
     </ul>
   </aside>
   ```

2. **記事3〜4番目の見出し手前に内部リンクCTAを追加**
   - 「直帰せず別記事へ誘導」でサイト全体エンゲージ率向上
   - 例: `ai-music-generation-2026`、`gemini-3-practical-guide` へのリンク

3. **metadescription見直し**（Search Console復旧後）
   - 「2026年2月 生成AI重大ニュース」など月次感を強調

**計測ポイント**: 来週の直帰率（目標: 60.5% → 45%以下）

---

### ✋ ユーザー手動確認（Claude実施不可）

---

#### C-1: CV発生源 GA4 Explore で確認

| 項目 | 内容 |
|------|------|
| **重要度** | 🔴 最高（全アクションの根拠になる） |
| **担当** | ユーザー（手動） |
| **工数** | 30分 |
| **ETA** | 今週中 |

**手順**:
```
GA4 管理画面 → Explore → Free Form 探索レポート
  → Dimension: Event Name + Page Location
  → Metric: Event Count
  → Filter: event_name = "line_register_click"
  → 期間: 2026-03-16 〜 2026-03-22
  → 実行 → どのページURLからクリックされたか確認

期待する発見:
  最有力: /gpt-vs-claude-2026（LineCtaBox × 3設置済み・平均231s滞在）
  次点: /workflow-automation-comparison（LineCtaBox × 2設置済み）
  意外枠: /rebooters 経由の紹介者
```

**ビジネスインパクト**: CV発生源確定後、同属性ページへのCTA投資優先度を決定できる

---

#### C-2: Search Console OAuth 再認証

| 項目 | 内容 |
|------|------|
| **重要度** | 🔴 高（3週連続未実施） |
| **担当** | ユーザー（手動） |
| **工数** | 15〜30分 |
| **ETA** | 今週中 |

**手順**:
```
Option A（推奨）: GAS Webエディタ
  1. script.google.com でスクリプト ID:
     1IXlD2VVaUv-by8BedcKLMwvFDcoTKRmOVL_kybl30p2Ig60p5JEMZhdF を開く
  2. 「承認が必要です」→ clasp OAuth 再実行
  3. webmasters.readonly スコープを承認

Option B: Search Console UI で手動確認
  → https://search.google.com/search-console
  → ai-reboot.io プロパティ → 検索アナリティクス
```

**復旧後に確認すること**:
- 流入クエリ上位（generative-ai-passportやclaude-codeの流入クエリ確認）
- CTR改善余地のある記事の特定

---

#### C-3: Direct チャネル ボット調査

| 項目 | 内容 |
|------|------|
| **重要度** | 🟡 中（4週連続未実施） |
| **担当** | ユーザー（手動） |
| **工数** | 30〜60分 |
| **ETA** | 今月中 |

**手順**:
```
GA4 Explore → Free Form
  → Segment: Channel = Direct
  → Dimension: Landing Page + Country + Device
  → Filter: Session Duration < 5s
  → 日本以外の Country が多ければボット確定

対応:
  Admin → Data Streams → Configure Tag Settings
  → "Define internal traffic" にオフィスIP・開発環境IPを登録
```

---

## 優先度サマリー

| # | アクション | 担当 | 工数 | ETA | 状態 |
|---|----------|------|------|-----|------|
| B-2 | /glossary/claude-code CTA追加 | Claude | 15分 | 2026-03-23 | ✅ 完了 |
| B-1 | generative-ai-passport-guide FV改善 | Claude | 2〜3h | 2026-03-24 | ⬜ 未着手 |
| C-1 | CV発生源 GA4 Explore確認 | ユーザー | 30分 | 今週中 | ❌ 未実施 |
| C-2 | Search Console OAuth再認証 | ユーザー | 30分 | 今週中 | ❌ 3週連続未実施 |
| B-3 | ai-trends-february-2026 FV改善 | Claude | 2〜3h | 2026-03-25 | ⬜ 未着手 |
| C-3 | Direct ボット調査 | ユーザー | 60分 | 今月中 | ❌ 4週連続未実施 |

---

## 次週（2026-03-30）確認ポイント

- [ ] generative-ai-passport-guide の scroll_25到達率（11.5% → 20%+）
- [ ] /glossary/claude-code の line_register_click 発火確認（CTA追加後初回）
- [ ] ai-trends-february-2026 の直帰率（60.5% → 45%以下）
- [ ] /rebooters の直帰率0%継続確認（PV継続増加するか）
- [ ] gemini-3-practical-guide のTop15継続確認（新規CTA投資判断）
- [ ] CV発生源の確定（C-1実施後）
- [ ] Search Console データ復旧確認（C-2実施後）

---

*生成: Claude Sonnet 4.6 / analytics-loop Step 3 / 2026-03-23*
