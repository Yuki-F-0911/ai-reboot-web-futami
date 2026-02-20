---
# batch8 記事・改善計画

## 目的
SEO/AIOによる集客 → LPへ誘導 → LINE登録 のCVRを、**記事内導線と特典訴求**で引き上げる。  
batch8は「新規本数の最大化」より、**LINE登録率改善とAIO引用率改善**を優先する。  
`app/academy/blog/page.tsx` の定義ベースで、公開記事は 129 本（2026-02-20確認）。

## スコープ境界

### batch8でやること
- LINE特典（01〜06）を記事文脈に合わせて訴求し、mid-article CTAを優先実装する
- AIO/LLMO向けに上位10記事をリライトする（Answer Box + FAQ + 比較/手順表）
- 新規は「未カバー4本 + 既存1本更新」に絞る
- 補助金/資格/比較/LLM運用の4サイロで内部リンクを強化する

### batch8でやらないこと
- 記事全件（129本）への一括改修
- 未検証の数値・統計を根拠にした追記
- LINE運用基盤の全面刷新（今回は配布文・導線最適化まで）

## 前提・依存関係
- LINE登録先URLは `https://bexn9pao.autosns.app/line` を継続利用する
- 特典本文は `docs/line-bonus-01-guideline.md` 〜 `docs/line-bonus-06-30day-study-plan.md` を正本とする
- LPは `/briefing` を第一候補として改修し、要件不整合時のみ `/academy/line-cta` 新設に切り替える
- 記事一覧・既存重複判定は `app/academy/blog/page.tsx` と `app/academy/blog/*/page.tsx` を根拠にする

## Priority 1: LINE CVR強化（最重要）

### 1-1. LINE特典訴求マッピング（全体設計）

| 特典ID | 特典内容 | 主な適用記事タイプ | LINE導線 | 実施難易度 |
|---|---|---|---|---|
| 01 | 社内AI利用ガイドライン雛形 | 法人導入/ガバナンス | 「LINE登録でガイドライン雛形を受け取る」 | 中 |
| 02 | AI導入効果チェックリスト | 導入検討/比較/自動化 | 「LINE登録で導入効果チェックリストを受け取る」 | 低 |
| 03 | AI活用ROI試算シート | 補助金/費用/稟議 | 「LINE登録でROI試算シートを受け取る」 | 低 |
| 04 | AI転職テンプレ | 転職/キャリア | 「LINE登録で職務経歴書テンプレを受け取る」 | 低 |
| 05 | 業種別プロンプト50選 | 実務活用/ツール比較 | 「LINE登録でプロンプト50選を受け取る」 | 低 |
| 06 | 30日学習プラン | 資格/学習/リスキリング | 「LINE登録で30日学習プランを受け取る」 | 低 |

### 1-2. 高流入想定記事への mid-article CTA 追加（補助金・資格・比較）

| # | slug | URL | 主KW | LINE導線（mid-article） | 実施難易度 |
|---|---|---|---|---|---|
| 1 | dx-reskilling-subsidy-guide | `/academy/blog/dx-reskilling-subsidy-guide` | DXリスキリング助成金 | 特典03（ROI試算）訴求 | 中 |
| 2 | education-training-benefit-ai | `/academy/blog/education-training-benefit-ai` | 教育訓練給付金 AI講座 | 特典03（ROI試算）訴求 | 中 |
| 3 | ai-course-ranking | `/academy/blog/ai-course-ranking` | AI講座 ランキング | 特典06（30日学習）訴求 | 中 |
| 4 | ai-certification-guide | `/academy/blog/ai-certification-guide` | AI資格 おすすめ | 特典06（30日学習）訴求 | 中 |
| 5 | g-e-certification-comparison | `/academy/blog/g-e-certification-comparison` | G検定 E検定 違い | 特典06（30日学習）訴求 | 中 |
| 6 | workflow-automation-comparison | `/academy/blog/workflow-automation-comparison` | Make Zapier n8n 比較 | 特典02（導入効果チェック）訴求 | 中 |
| 7 | chatgpt-plan-comparison | `/academy/blog/chatgpt-plan-comparison` | ChatGPT Plus Pro 比較 | 特典05（プロンプト50選）訴求 | 中 |
| 8 | ai-coding-tool-comparison-2026 | `/academy/blog/ai-coding-tool-comparison-2026` | AIコーディングツール 比較 | 特典03（ROI試算）訴求 | 中 |

### 1-3. LINE登録LPの整備（新設 or 既存強化）

| タスク | 対象slug/URL | 主KW | LINE導線 | 実施難易度 |
|---|---|---|---|---|
| `/briefing` をLINE特典訴求型に改修（第一候補） | `/briefing` | AI講座 無料相談 / AI講座 説明会 | 特典01〜06を用途別に提示し、LINE登録へ一本化 | 高 |
| `academy` 配下にLINE専用LPを新設（代替案） | `/academy/line-cta` | AI学習 LINE 特典 | 記事タイプ別に特典訴求→`https://bexn9pao.autosns.app/line` | 中 |

### 1-4. 計測実装（記事別・特典別）

| タスク | 対象slug/URL | 主KW | LINE導線 | 実施難易度 |
|---|---|---|---|---|
| 記事別パラメータ運用（`?src=blog&slug=...&bonus=...`） | 上記 1-2 対象8記事 | - | 特典クリック率を記事別に取得 | 中 |
| 特典別の配布メッセージ整備（01〜06） | LINE配布運用 | - | 登録直後に該当特典を自動返信 | 中 |

## Priority 2: AIO/LLMO対応（上位10記事リライト）

実装方針: 各記事に「冒頭Answer Box（3〜5行）」「FAQ補強（最低6問）」「比較表/手順表の明示」「更新日明記」を追加。

| # | slug | URL | 主KW | LINE導線 | 実施難易度 |
|---|---|---|---|---|---|
| 1 | dx-reskilling-subsidy-guide | `/academy/blog/dx-reskilling-subsidy-guide` | DXリスキリング助成金 | 特典03 | 中 |
| 2 | education-training-benefit-ai | `/academy/blog/education-training-benefit-ai` | 教育訓練給付金 AI | 特典03 | 中 |
| 3 | ai-course-ranking | `/academy/blog/ai-course-ranking` | AI講座 ランキング | 特典06 | 中 |
| 4 | ai-certification-guide | `/academy/blog/ai-certification-guide` | AI資格 おすすめ | 特典06 | 中 |
| 5 | g-e-certification-comparison | `/academy/blog/g-e-certification-comparison` | G検定 E検定 比較 | 特典06 | 中 |
| 6 | workflow-automation-comparison | `/academy/blog/workflow-automation-comparison` | Make Zapier n8n 比較 | 特典02 | 中 |
| 7 | chatgpt-plan-comparison | `/academy/blog/chatgpt-plan-comparison` | ChatGPT 料金 比較 | 特典05 | 中 |
| 8 | ai-coding-tool-comparison-2026 | `/academy/blog/ai-coding-tool-comparison-2026` | AIコーディングツール 比較 | 特典03 | 中 |
| 9 | ai-research-tool-2026 | `/academy/blog/ai-research-tool-2026` | AI情報収集ツール 比較 | 特典05 | 中 |
| 10 | ai-smartphone-apps | `/academy/blog/ai-smartphone-apps` | AIアプリ おすすめ スマホ 2026 | 特典06 | 低 |

## Priority 3: 新規記事（2026年2〜3月トピック）

### 3-1. 未カバー判定（既存重複チェック）

| 候補slug | 既存状況 | 判定 | 方針 |
|---|---|---|---|
| openai-o3-o4mini-guide | `app/academy/blog` 配下に同slugなし。`o3/o4-mini` 文字列の既存記事ヒットなし | 未カバー | 新規作成 |
| make-automation-guide | `workflow-automation-comparison` は存在するが、Make特化の実装記事は未整備 | 準未カバー | 新規作成（Make特化で差別化） |
| llm-cost-optimization-guide | `ai-adoption-cost-roi` は導入費用/ROI中心。API運用最適化特化記事は未整備 | 準未カバー | 新規作成（API費最適化に特化） |
| ai-smartphone-apps-2026 | `ai-smartphone-apps` が既に「スマホ版2026」で公開済み | カバー済み | 新規作成せず既存強化へ |
| perplexity-pages-guide | `perplexity-ai-guide` は一般解説。Pages特化記事は未整備 | 未カバー | 新規作成 |

### 3-2. batch8で実施する新規/強化

| # | slug | URL | 主KW | 差別化ポイント | LINE導線 | 実施難易度 |
|---|---|---|---|---|---|---|
| 1 | openai-o3-o4mini-guide | `/academy/blog/openai-o3-o4mini-guide` | OpenAI o3 o4-mini 使い方 | GPT-5系記事と分離し、推論用途別の選定軸に特化 | 特典05 | 中 |
| 2 | make-automation-guide | `/academy/blog/make-automation-guide` | Make.com 生成AI 自動化 | 比較記事ではなく「Makeで1本作る手順」中心にする | 特典02 | 中 |
| 3 | llm-cost-optimization-guide | `/academy/blog/llm-cost-optimization-guide` | LLM API コスト最適化 | ROI記事と分離し、トークン/キャッシュ/モデル選定の運用に集中 | 特典03 | 高 |
| 4 | perplexity-pages-guide | `/academy/blog/perplexity-pages-guide` | Perplexity Pages 使い方 | Perplexity一般記事から独立し、Pages公開導線を解説 | 特典05 | 中 |
| 5 | ai-smartphone-apps（更新） | `/academy/blog/ai-smartphone-apps` | AIアプリ スマホ 2026 | 新規ではなく既存記事へAnswer Box/FAQ/内部リンク追記 | 特典06 | 低 |

## Priority 4: 内部リンク・サイロ構造強化

| タスク | 対象slug（ハブ） | URL | 主KW | LINE導線 | 実施難易度 |
|---|---|---|---|---|---|
| 補助金・資格サイロ再編 | `ai-course-ranking` | `/academy/blog/ai-course-ranking` | AI講座 比較 | 特典06（学習計画）を共通CTA化 | 中 |
| 補助金導線の相互リンク強化 | `dx-reskilling-subsidy-guide` | `/academy/blog/dx-reskilling-subsidy-guide` | AI 補助金 | 特典03（ROI試算）を共通CTA化 | 中 |
| ツール比較サイロ再編 | `workflow-automation-comparison` | `/academy/blog/workflow-automation-comparison` | 自動化ツール 比較 | 特典02（導入効果チェック）を共通CTA化 | 中 |
| LLM運用サイロ新設（batch8新規含む） | `llm-cost-optimization-guide` | `/academy/blog/llm-cost-optimization-guide` | LLM コスト最適化 | 特典03（ROI試算）を共通CTA化 | 高 |

## 実施順序
1. Priority 1-1〜1-4（LINE特典訴求・計測・LP方針の確定）
2. Priority 1-2（高流入8記事へmid-article CTA実装）
3. Priority 2（AIOリライト上位10記事）
4. Priority 3（新規4本＋既存1本更新）
5. Priority 4（内部リンク/サイロ再編）
6. 週次レビュー（記事別LINE登録率、特典クリック率、AIO流入変化を確認）

## 実装タスク（移行版）

### Sprint 8-1（LINE導線の即時改善）
- [ ] 共通CTAコピー改修（「無料相談」中心から「特典受け取り」中心へ）
  - 対象: `components/academyLanding/blog/workflow-automation-comparison/WorkflowAutomationComparisonPage.tsx`
  - 対象: `components/academyLanding/blog/chatgpt-plan-comparison/ChatgptPlanComparisonPage.tsx`
  - 対象: `components/academyLanding/blog/ai-coding-tool-comparison-2026/AiCodingToolComparison2026Page.tsx`
- [ ] 補助金・資格3記事へmid-article CTA追加（特典03/06）
  - 対象: `components/academyLanding/blog/dx-reskilling-subsidy-guide/DxReskillingSubsidyGuidePage.tsx`
  - 対象: `components/academyLanding/blog/education-training-benefit-ai/EducationTrainingBenefitAiPage.tsx`
  - 対象: `components/academyLanding/blog/ai-certification-guide/AiCertificationGuidePage.tsx`
- [ ] 特典訴求テキストをブログ一覧導線にも反映
  - 対象: `app/academy/blog/page.tsx`

### Sprint 8-2（AIOリライト）
- [ ] 上位10記事に Answer Box セクション追加
  - 対象: `components/academyLanding/blog/ai-smartphone-apps/AiSmartphoneAppsPage.tsx`
  - 対象: `components/academyLanding/blog/ai-research-tool-2026/AiResearchTool2026Page.tsx`
  - 対象: `components/academyLanding/blog/ai-course-ranking/AiCourseRankingPage.tsx`
- [ ] FAQ不足記事を6問以上へ統一（route側 `faqItems` と本文FAQを一致）
  - 対象: `app/academy/blog/*/page.tsx`（Priority2対象10記事）

### Sprint 8-3（新規記事）
- [ ] 新規4記事の route 作成
  - 対象: `app/academy/blog/openai-o3-o4mini-guide/page.tsx`
  - 対象: `app/academy/blog/make-automation-guide/page.tsx`
  - 対象: `app/academy/blog/llm-cost-optimization-guide/page.tsx`
  - 対象: `app/academy/blog/perplexity-pages-guide/page.tsx`
- [ ] 新規4記事の本文コンポーネント作成
  - 対象: `components/academyLanding/blog/openai-o3-o4mini-guide/OpenaiO3O4MiniGuidePage.tsx`
  - 対象: `components/academyLanding/blog/make-automation-guide/MakeAutomationGuidePage.tsx`
  - 対象: `components/academyLanding/blog/llm-cost-optimization-guide/LlmCostOptimizationGuidePage.tsx`
  - 対象: `components/academyLanding/blog/perplexity-pages-guide/PerplexityPagesGuidePage.tsx`
- [ ] 記事一覧への追記とカテゴリ整合
  - 対象: `app/academy/blog/page.tsx`

### Sprint 8-4（LP・計測）
- [ ] `/briefing` をLINE特典受取導線に改修（フォームデモ文言を解消）
  - 対象: `app/briefing/page.tsx`
- [ ] 記事別パラメータ付与（`src/slug/bonus`）
  - 対象: Priority1-2対象8記事の `lineUrl` 定義
- [ ] 週次計測運用テンプレ作成（特典別CTR/登録率）
  - 対象: `docs/05-operations/line-bonus-distribution-operations.md`

## リスク・代替案・ロールバック

| リスク | 影響 | 代替案 | ロールバック |
|---|---|---|---|
| 記事別CTAの訴求が強すぎて離脱増 | 滞在時間低下 | CTAを本文1箇所に限定しA/Bで段階投入 | 既存末尾CTAのみへ戻す |
| 新規記事が既存とカニバる | SEO評価分散 | 主KWを再分解し、既存記事へ統合も許容 | 新規公開停止し既存リライトへ切替 |
| `/briefing` 改修が工数超過 | Priority1遅延 | `/academy/line-cta` を先行公開 | `/briefing` は現状維持で運用継続 |
| 計測パラメータ運用が崩れる | 効果測定不可 | bonus/slug命名規則を固定化 | パラメータ追加前の共通URL運用へ一時復帰 |

## 受け入れ条件（batch8完了判定）
- [ ] Priority1対象記事で、記事中段CTAからLINE導線が機能している
- [ ] 新規/更新対象の全記事にAnswer Box + FAQが実装されている
- [ ] Priority3の重複回避方針（新規4本/既存1本更新）が守られている
- [ ] サイロ別の相互リンク追加が完了している
- [ ] 記事別・特典別の計測パラメータが運用に反映されている
---
