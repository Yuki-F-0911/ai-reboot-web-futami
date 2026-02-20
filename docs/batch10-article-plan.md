---
title: "batch10 記事・CV最適化計画"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs: [
  "docs/batch9-article-plan.md",
  "docs/05-operations/line-bonus-distribution-operations.md",
  "app/academy/blog/page.tsx",
  "app/briefing/page.tsx",
  "components/seo/StructuredData.tsx"
]
status: "draft"
dependencies:
  upstream: [
    "docs/batch9-article-plan.md",
    "docs/05-operations/line-bonus-distribution-operations.md"
  ]
  downstream: [
    "app/briefing/page.tsx",
    "components/academyLanding/sections/HeroSection.tsx",
    "components/academyLanding/sections/MidCtaSection.tsx",
    "components/academyLanding/sections/PreFooterCtaSection.tsx",
    "components/academyLanding/sections/FinalCtaSection.tsx",
    "app/academy/blog/*/page.tsx",
    "components/academyLanding/blog/*/*Page.tsx"
  ]
impact_level: "high"
---

<!-- ============Rulesを確認============ -->

# batch10 記事・CV最適化計画

## 目的
batch10は、SEO/AIO流入をLINE登録へ確実に転換するフェーズとする。  
最優先は `/briefing` と主要導線のCVR改善、次点でAIO実装率向上、並行して2026年2〜3月ホットトピックの未カバー領域を埋める。

## 現状把握（2026-02-20確認）

### 1. 記事数・カバレッジ
- `app/academy/blog/page.tsx` の `blogPosts`: **138本**
- `app/academy/blog/*/page.tsx` の実ルート: **139本**
- 差分: `openai-responses-api-guide` が一覧未登録（流入機会の取りこぼし）

カテゴリ内訳（`blogPosts`基準）:
- 実務活用: 41
- 最新AIツール: 34
- AI基礎知識: 21
- 法人向け: 21
- 資格・スキル: 10
- キャリア・転職: 7
- 副業・フリーランス: 3
- AIO/マーケ: 1

### 2. CV導線実装状況
- `?src=blog&slug=...&bonus=...` 付きLINE導線を持つ記事: **11/139（7.9%）**
- `/briefing` は特典01〜06カード導線を実装済み
- ただし `academy` 主要CTA（Hero/Mid/PreFooter/Final）は現状「直接LINE」遷移で、`/briefing` 経由計測が不十分

### 3. AIO実装状況
- `FAQStructuredData` 実装: **139/139（100%）**
- `FAQStructuredData` は `FAQPage` JSON-LD を出力（`components/seo/StructuredData.tsx`）
- Answer Box相当の明示実装（`Answer Box`/`answer-box`）: **9/139（6.5%）**
  - AIO回答最適化はFAQ先行で、冒頭即答ブロックが不足

### 4. 既存記事リライト候補（6ヶ月基準）
- `modifiedTime` 基準で **6ヶ月以上未更新の記事は0件**
- よって batch10 では「日付」ではなく「陳腐化リスク（モデル更新・制度更新）」基準で候補を選定する

---

## Priority 1（最優先）: コンバージョン最適化

### 施策 1-1. `/briefing` LP改善（受取率向上）
- ヒーロー直下に「用途別最短導線（法人導入/個人学習/転職）」を追加
- 特典カードに「対象者」「受取後にできること」「所要時間」を明記
- ファーストビューに1クリックCTA（スクロール不要）を固定

### 施策 1-2. トップ/アカデミーTOP導線の統一
- `academy` の主要CTAを `/briefing?src=academy-{placement}` 経由へ段階移行
- トップページにも `/briefing?src=top-{placement}` を追加
- 直接LINE導線はバックアップとして残し、A/Bで比較

### 施策 1-3. 高流入記事CVR計測の定常化
- GSC/GA4で週次「流入上位20記事」を抽出
- 上位20記事のCTAクリック率・LINE CVRを `docs/05-operations/line-bonus-distribution-operations.md` 形式で記録
- 下位5記事を毎週改善対象に固定

### 施策 1-4. 記事内CTAの優先改修
- 高流入上位10記事へ mid-article CTA を追加/改善
- bonus割当を検索意図に合わせ再設計（比較系→bonus02/03、学習系→bonus06、法人稟議系→bonus01/03）

### 施策 1-5. 記事一覧漏れの修正
- `openai-responses-api-guide` を `blogPosts` に登録し、内部回遊と自然流入を回復

---

## Priority 2: AIO（AI Overview）最適化継続

### 施策 2-1. Answer Box 実装率の引き上げ
- 高優先20記事（流入上位×CV意図）へ冒頭3〜5行の即答ブロックを追加
- 目標: **6.5% → 25%以上（batch10終了時）**

### 施策 2-2. FAQ品質の強化
- FAQ数を高優先記事で最低8問に統一
- 本文記述とFAQ回答の語彙整合をチェック（不一致による構造化評価低下を回避）

### 施策 2-3. JSON-LD技術SEOの運用化
- FAQPage/Article/Breadcrumbの必須フィールド欠損をCIで検査
- 主要記事のRich Results Testをスプリントごとに再検証

### 施策 2-4. 内部リンク再設計
- Answer Box末尾から `/briefing` と関連記事（比較/導入/料金）へ2本以上の意図リンクを固定

---

## Priority 3: 新規記事（2026年2〜3月ホットトピック）

### 施策 3-1. 未カバートピックの優先投入（法人向け・CV直結）
以下は、既存 `blogPosts` で未カバー、かつ法人導入判断に直結するテーマを優先する。

| # | 候補slug | 主KW | 狙い | LINE特典 |
|---|---|---|---|---|
| 1 | `claude-sonnet-4-6-guide` | Claude Sonnet 4.6 使い方 | 2026-02-17公開の新モデル需要を獲得。Opus 4.6との使い分けで実務導線化 | bonus03 |
| 2 | `assistants-api-migration-checklist-2026` | Assistants API 移行 | 2026-08-26 sunset期限に向けた移行チェックで法人案件を獲得 | bonus01 |
| 3 | `ai-cybersecurity-defender-guide` | AI サイバーセキュリティ 導入 | 2026-02-20公開のDefender向けAI活用を、SOC/CSIRT文脈で解説 | bonus02 |
| 4 | `eu-ai-act-2026-compliance-jp` | EU AI Act 2026 対応 | 2026-08-02義務化に向けた日本企業向け実務チェックリスト | bonus01 |
| 5 | `enterprise-ai-cost-governance-2026` | 生成AI コスト最適化 企業 | インフラ/推論コストをCFO視点で可視化し、導入相談へ接続 | bonus03 |

### 施策 3-2. 企画前チェック（重複回避）
- 既存記事とのカニバリ確認（`slug`・主KW・検索意図）
- 新規記事は「法人導入判断」「稟議・運用チェック」「テンプレ受取導線」を必須化

---

## Priority 4: 既存記事リライト候補（陳腐化リスク基準）

### 施策 4-1. リライト候補（一次）
| slug | 理由 | 優先度 |
|---|---|---|
| `gpt-vs-claude-2026` | 比較軸が最新モデル更新に追随しづらい | 高 |
| `ai-coding-tool-comparison-2026` | Copilot Agent HQ/Codex App以降の比較観点を再整理要 | 高 |
| `microsoft-copilot-guide` | Copilot+ PC・推論インフラ文脈の追記余地 | 中 |
| `ai-legal-guide` | EU AI Act 2026適用フェーズを明示する必要 | 高 |
| `ai-research-tool-2026` | Deep Research系の機能更新速度が高く陳腐化リスクが高い | 中 |

### 施策 4-2. リライト判定基準
- 主要比較表の更新日が60日超
- 価格/プラン/制度情報に差分発生
- Answer Box未実装、またはFAQが6問未満

---

## Sprint分解（batch10）

### Sprint 10-1（計測と導線の土台）
- `/briefing` CV導線改善（FV CTA・用途別導線）
- `academy` 主要CTAの `/briefing` 経由化（A/B）
- 高流入20記事の計測シート初回作成
- `openai-responses-api-guide` の一覧登録

### Sprint 10-2（AIO + 高流入CV改善）
- 高優先20記事のAnswer Box追加（最低10本）
- FAQ 8問化と本文整合チェック
- 高流入上位10記事のmid-article CTA最適化
- JSON-LD検証フロー運用化

### Sprint 10-3（新規投入 + リライト）
- 新規3〜5本公開（Priority 3候補）
- 既存リライト3本以上実施
- 週次レビュー2サイクルでCVR改善効果を検証

---

## 受け入れ条件（batch10完了判定）
- [ ] `/briefing` のLP改善が反映され、`src` 別計測が可能
- [ ] `academy` 主要CTAの少なくとも50%が `/briefing` 経由化
- [ ] 高流入上位20記事のCVR計測表が2週分埋まっている
- [ ] Answer Box実装率が **25%以上** に到達
- [ ] 高優先記事のFAQが8問以上で、FAQPage JSON-LDと本文が一致
- [ ] 新規記事が3本以上公開され、うち2本以上が法人向けテーマ
- [ ] リライト記事が3本以上公開され、更新日・比較表・CTAが最新化
- [ ] `blogPosts` と実ルートの差分（一覧漏れ）が解消されている

---

## 参照した外部トピック（2026-02-20時点）
- Anthropic: Claude Sonnet 4.6 公開（2026-02-17）
- OpenAI Docs: Assistants API sunset予定（target sunset date: 2026-08-26）
- Anthropic News: Defender向けフロンティアAI機能公開（2026-02-20）
- EU AI Act: 2026-08-02 適用フェーズ情報（欧州委員会）

## 更新履歴

| バージョン | 更新日 | 更新者 | 更新内容 | 影響ドキュメント |
|---|---|---|---|---|
| 1.0 | 2026-02-20 | さかもと | batch10計画書を新規作成（CV最適化/AIO/新規記事/リライト計画） | `app/briefing/page.tsx`, `app/academy/blog/page.tsx`, `components/academyLanding/blog/*` |
