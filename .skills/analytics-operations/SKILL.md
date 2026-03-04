---
name: analytics-operations
description: AIリブートアカデミーのアナリティクス運用（analytics-loop、KPI、GA4/GAS設定、CTA施策、計測基盤チェック）の実行ガイド。
---

# Analytics Operations

AIリブートアカデミーの継続改善に向けたアナリティクス運用スキル。
週次・月次レポート運用、KPIトラッキング、analytics-loopの実行手順、計測基盤の健全性確認を定義する。

## Use When

- 週次/ 月次のGA4・Search Consoleレポートを作成/レビューするとき
- analytics-loopを実行し、アクションプランまで落とし込むとき
- KPI目標との差分を確認して施策を更新するとき
- `line_register_click` など主要イベントの計測健全性を点検するとき

## レポート体系

- **保存先**: `docs/05-operations/analytics-reports/`
- **週次レポート（暫定版）**: 毎週日曜22:00 自動生成（`YYYY-MM-DD-00.md`）
- **週次レポート（確定版）**: 毎週水曜22:00 自動更新（同ファイルを上書き）
- **月次サマリー**: 毎月1日9:00 自動生成（`YYYY-MM-monthly.md`）

## GA4 / GAS 設定

- **GA4 プロパティID**: `501149490`（ai-reboot.io）
- **GAS スクリプトID**: `1IXlD2VVaUv-by8BedcKLMwvFDcoTKRmOVL_kybl30p2Ig60p5JEMZhdF`
- **Search Console スコープ**: `appsscript.json` に追加済み。再認証は GAS エディタで webmasters 関数を手動実行

## KPI目標（更新: 2026-03-03）

| 指標 | 現状（2/24-3/2） | 目標（2026-03-24） |
|------|-------------------|-----------------|
| line_register_click | 1/週（CVR 0.15%） | 3/週（CVR 0.5%） |
| SC CTR（全体） | 1.17% | 1.5%以上 |
| ai-trends SC CTR | 0.5% | 2.0%以上（A-3実施済み 2026-03-03） |
| chatgpt-plus SC CTR | 0.6% | 2.0%以上（A-4実施済み 2026-03-03） |
| Glossaryセッション | 25/週 | 40/週（SEOクラスター化） |
| Organic Searchセッション | 537/週 | 700/週 |
| GA4計測健全性 | ❓ 未確認（3週連続） | ✅ 確認済み（手動要） |

## analytics-loopの流れ

実行手順（GASコマンド・分析フレームワーク・レポートフォーマット）は `.claude/skills/analytics-loop/SKILL.md` を参照。

全体ループ:
1. Claude: analytics-loop スキルでデータ取得・レポート作成
2. Codex: このスキル（analytics-operations）を参照しながらレポートレビュー
3. Claude: Codex指摘を反映したレポート改善 + action-plan.md 作成
4. Master: 即時タスクをエージェントに委任 + autorun スケジュール登録
5. Master: AGENTS.md / memory.md 更新

## Glossary SEOクラスター（新設: 2026-03-03）

- Glossaryが3週連続で高パフォーマンス → 正式SEOクラスターとして運用
- **計画書**: `docs/05-operations/analytics-reports/glossary-cluster-plan.md`
- **週次KPI追加**: Glossaryセッション / Glossary→ブログ回遊率 / Glossary起点 line_register_click
- **重点ページ**: `/glossary/flow-matching`（CTR 18.2%）→ インプレ拡大施策

## CTA段階実装スケジュール（2026-03-03〜）

- mcp-tool記事: ✅ 既存実装確認済み（3箇所：25%/62%/末尾）
- gemini-3記事: autorun登録済み（2026-03-05 10:00実行）
- kling-ai記事: autorun登録済み（2026-03-07 10:00実行）
- 測定: page_path別 line_register_click を週次レポートで追跡

## SEO title改善ログ（効果測定用）

| 変更日 | 記事スラグ | 変更ID | 旧CTR | 目標CTR |
|--------|----------|--------|-------|---------|
| 2026-03-03 | ai-trends-february-2026 | A-3 | 0.5% | 2.0%+ |
| 2026-03-03 | chatgpt-plus-honest-review-2026 | A-4 | 0.6% | 2.0%+ |

効果測定: 3/10（1週間後）のSCデータで前後比較

## 計測基盤チェック（未実施・要対応）

⚠️ 以下は3週連続未実施。次のanalytics-loop実行前に必ず手動実施:
- **A-1**: GA4 Realtime/DebugView確認 + `line_register_click` 発火確認（30分）
- **A-2**: ボット除外・内部トラフィック設定のスクリーンショット証跡化（20分）
- 証跡保存先: `docs/05-operations/analytics-reports/evidence/`

## 重要コンポーネント

- `lib/analytics.ts` — `trackEvent.lineRegisterClick()` 等のGA4イベント
- `components/ui/MobileStickyBar.tsx` — モバイル固定LINEバナー
- `components/academyLanding/common/FloatingLineCta.tsx` — LINE CTA コンポーネント
- `components/blog/LineCtaBox.tsx` — 記事内LINE CTA（props なし = デフォルトコピー使用必須）
