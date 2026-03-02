# Glossary SEOクラスター 週次KPI設計書

作成日: 2026-03-03
担当: Claude Code（B-2タスク）

---

## 1. 現状分析

### /glossary トップページ実績（2026-02 月次・SC集計）

| 指標 | 実績値 | 備考 |
|------|--------|------|
| 週次セッション数 | 25 PV/週（推定） | 2月月次 PV=1196 の内数 |
| エンゲージ率 | 73% | 全ページ平均 31.6% を大幅上回る |
| 平均滞在時間 | 200秒以上 | 用語一覧の熟読を示す |
| コンバージョン | 0 | LINE / briefing / contact いずれも 0 |

### Search Console 上位ページ（Glossary）

| ページ | CTR | 順位 | インプレッション |
|--------|-----|------|----------------|
| /glossary/flow-matching | 18.2% | 推定 1-3位 | 高 |
| /glossary/ (トップ) | - | - | 集計中 |

**課題**: 高エンゲージ・高滞在 にもかかわらず CV 導線ゼロ = 週25PVが全て離脱コスト

---

## 2. SEOクラスター構造

```
/glossary/ (ハブ)
├── /glossary/flow-matching      ← CTR 18.2%・起点ページ
├── /glossary/llm                ← 基礎概念・高検索量
├── /glossary/rag                ← 実装系・滞在長
├── /glossary/prompt-engineering ← エンジニア系ユーザー流入
├── /glossary/hallucination      ← 初心者流入
└── ...（30語以上収録）
```

### クラスター戦略

- **ハブ（/glossary/）**: 用語一覧 → LINE CTA → /academy への導線
- **スポーク（各用語ページ）**: 個別深掘り → RelatedTerms → /blog 記事へ内部リンク
- **ブリッジ（/blog/）**: 用語を活用した実践記事 → 用語集へ逆リンク

---

## 3. 週次KPI（追加分）

### 既存KPI（全体）
- 月次セッション数: 971（2月）→ 1200（3月目標）
- LINE クリック率: 0（2月）→ 月5件（3月目標）

### Glossaryクラスター専用KPI

| KPI | 計測方法 | 現在値 | 3週後目標 |
|-----|----------|--------|-----------|
| Glossaryセッション数 | GA4 > ページ別 | 25/週（推定） | **40/週** |
| Glossary→ブログ回遊率 | GA4 > 経路分析 | 測定中 | 20%以上 |
| Glossary起点 line_register_click | GA4 > イベント（source=blog_cta_box） | 0 | **週2件** |
| /glossary トップ エンゲージ率 | GA4 | 73% | 75%以上を維持 |
| flow-matching CTR | Search Console | 18.2% | 20%以上 |

### 計測セットアップ

`LineCtaBox` は `trackEvent.lineRegisterClick("blog_cta_box")` を onClick で送信するため、
GA4 カスタムイベント `line_register_click` に `source: blog_cta_box` で記録される。

---

## 4. 優先度別改善ロードマップ（3週間）

### Week 1（2026-03-03 実施済み）

- [x] `/glossary` トップページに `LineCtaBox` 追加（CV導線設置）
- [ ] `flow-matching` ページから関連ブログ記事への内部リンク強化
  - 対象: `/blog/workflow-automation-comparison` 等
  - 実装: RelatedTerms または本文末尾にリンクカード追加

### Week 2（2026-03-10 目標）

- [ ] 高CTRページの title / description 最適化
  - `/glossary/flow-matching`: 現タイトルを CTR 向上向けに A/B 検討
  - `/glossary/llm`: 「LLMとは」系ロングテールキーワードを追加
- [ ] Search Console インプレッション上位5ページの metaDescription 改善
- [ ] `/glossary/` トップの h2 見出しに構造化データ（FAQ schema）追加を検討

### Week 3（2026-03-17 目標）

- [ ] Glossaryセクション独立ナビゲーション検討
  - Header に「用語集」タブ追加（現在 /blog のみ）
  - または Footer に「生成AI用語集」リンク追加
- [ ] Glossary → Academy のコンバージョンファネル計測レポート作成
- [ ] Week 1-2 の KPI 振り返りと Week 4-6 ロードマップ策定

---

## 5. 参考データ

- 2月月次レポート: `docs/05-operations/analytics-reports/2026-02-monthly.md`
- 3月早期データ: `docs/05-operations/analytics-reports/2026-03-monthly.md`
- LineCtaBox 実装: `components/blog/LineCtaBox.tsx`
- Glossaryトップ: `app/(site)/glossary/page.tsx`
