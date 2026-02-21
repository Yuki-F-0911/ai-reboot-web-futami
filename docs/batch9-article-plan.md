---
# batch9 記事・改善計画

## 目的
batch8（2026-02-20完了・push済み）の積み残し完全消化 + 計測基盤の確立 + 2026年2〜3月ホットトピック新規記事。
「記事品質 → AIO引用率 → LINE登録 → LP転換」の全レイヤーを計測可能な状態にする。

## 現状把握（2026-02-21確認）

### 記事数
- `app/academy/blog/page.tsx` の `blogPosts` 定義: **129本**
- `app/academy/blog/` の実ディレクトリ数: **134フォルダ**

### batch7 残り記事（未作成）
| slug | 主KW | 状況 |
|------|------|------|
| `gpt-5-3-guide` | GPT-5.3 使い方 | `blogPosts` 未登録・ディレクトリ未作成 |
| `claude-code-beginners-guide` | Claude Code 入門 | `blogPosts` 未登録・ディレクトリ未作成 |

### batch8 Sprint 8-1 実施状況
- `?bonus=bonus05` パラメータを持つ記事: **1本のみ**（`openai-o3-o4mini-guide`）
- `MidCtaSection` コンポーネントは `components/academyLanding/sections/MidCtaSection.tsx` に実装済みだが、ブログ記事ページへの実挿入は**0件**
- 対象8記事（`dx-reskilling-subsidy-guide` 等）のmid-article CTAは**未実装**

### batch8 Sprint 8-4 実施状況
- `/briefing` LP改修: 未確認（Sprint 8-4スコープ内）
- 記事別パラメータ（`src=blog&slug=...&bonus=...`）: 未実装
- 週次計測テンプレート（`docs/05-operations/line-bonus-distribution-operations.md`）: 未作成

---

## スコープ境界

### batch9 でやること
- **Priority 1**: batch7 残り2記事の作成（`gpt-5-3-guide`・`claude-code-beginners-guide`）
- **Priority 2**: batch8 Sprint 8-1 未実施のmid-article CTA実装（対象8記事へのbonus/slugパラメータ付与）
- **Priority 3**: 計測基盤確立（`/briefing` LP改修・週次計測テンプレート・パラメータ統一展開）
- **Priority 4**: 新規記事4〜5本（2026年2〜3月ホットトピック）

### batch9 でやらないこと
- 全129本への一括CTA見直し（Priority 2対象8本に限定）
- `/briefing` の全面デザインリニューアル（テキスト・導線変更のみ）
- AIOリライト追加（batch8のリライト効果計測を優先）
- 新規カテゴリ・サイロの新設

---

## Priority 1: batch7 残り記事（検索ボリューム確保）

### 1-1. 記事定義・執筆方向

| # | slug | 主KW | サブKW | ターゲット | 執筆方向 |
|---|------|------|--------|-----------|---------|
| 1 | `gpt-5-3-guide` | GPT-5.3 使い方 | Codex Spark・GPT-5系モデル・OpenAI最新モデル | 中級者・エンジニア志望 | GPT-5.3とCodex Sparkの位置付け整理。GPT-5.2との違い・Cerebras連携による高速生成・Plus/Pro/API料金・実務適用シーン（高速要約・大量バッチ処理）・GPT-5.2との役割分担チャートを盛り込む |
| 2 | `claude-code-beginners-guide` | Claude Code 入門 | Claude Code 使い方・CLI AIコーディング・Anthropic開発ツール | 非エンジニア〜入門エンジニア | `claude-code-intro`（料金・概要）の実践続編として差別化。インストールからhello worldまで・CLAUDE.md設定・/slashコマンド一覧・Cursor vs Claude Codeの選び方・セキュリティとpermission modeをステップ付きで解説 |

### 1-2. LINE特典マッピング

| slug | 特典ID | LINE導線文言 |
|------|--------|------------|
| `gpt-5-3-guide` | 特典05（プロンプト50選） | 「LINE登録で業種別プロンプト50選を受け取る」 |
| `claude-code-beginners-guide` | 特典03（ROI試算シート） | 「LINE登録でAI導入ROI試算シートを受け取る」 |

### 1-3. 既存記事との重複回避

| 既存記事 | 分離ポイント |
|---------|------------|
| `chatgpt-gpt5-guide` | GPT-5とGPT-5.2の使い分け中心。batch9の`gpt-5-3-guide`はGPT-5.3/Codex Sparkに特化 |
| `claude-code-intro` | 概要・料金・始め方。batch9の`claude-code-beginners-guide`は具体的なCLI操作と開発ワークフローに特化 |

---

## Priority 2: batch8 Sprint 8-1 CTA未実装補完

### 2-1. mid-article CTA実装対象（bonus/slugパラメータ付与）

| # | slug | 特典ID | lineUrl（更新後） | 実施内容 |
|---|------|--------|-------------------|---------|
| 1 | `dx-reskilling-subsidy-guide` | 特典03 | `?src=blog&slug=dx-reskilling-subsidy-guide&bonus=bonus03` | 本文中段に「LINE登録でROI試算シートを受け取る」CTAブロック追加 |
| 2 | `education-training-benefit-ai` | 特典03 | `?src=blog&slug=education-training-benefit-ai&bonus=bonus03` | 同上 |
| 3 | `ai-course-ranking` | 特典06 | `?src=blog&slug=ai-course-ranking&bonus=bonus06` | 本文中段に「LINE登録で30日学習プランを受け取る」CTAブロック追加 |
| 4 | `ai-certification-guide` | 特典06 | `?src=blog&slug=ai-certification-guide&bonus=bonus06` | 同上 |
| 5 | `g-e-certification-comparison` | 特典06 | `?src=blog&slug=g-e-certification-comparison&bonus=bonus06` | 同上 |
| 6 | `workflow-automation-comparison` | 特典02 | `?src=blog&slug=workflow-automation-comparison&bonus=bonus02` | 本文中段に「LINE登録で導入効果チェックリストを受け取る」CTAブロック追加 |
| 7 | `chatgpt-plan-comparison` | 特典05 | `?src=blog&slug=chatgpt-plan-comparison&bonus=bonus05` | 本文中段に「LINE登録でプロンプト50選を受け取る」CTAブロック追加 |
| 8 | `ai-coding-tool-comparison-2026` | 特典03 | `?src=blog&slug=ai-coding-tool-comparison-2026&bonus=bonus03` | 本文中段に「LINE登録でROI試算シートを受け取る」CTAブロック追加 |

### 2-2. 既存パラメータ統一（`openai-o3-o4mini-guide` 修正）

| slug | 現状 | 修正後 |
|------|------|--------|
| `openai-o3-o4mini-guide` | `?bonus=bonus05` | `?src=blog&slug=openai-o3-o4mini-guide&bonus=bonus05` |

### 2-3. mid-article CTA実装仕様

- **挿入位置**: 記事本文の3分の1〜2分の1付近（見出しh2の直後が理想）
- **コンポーネント**: 既存 `MidCtaSection` を流用するか、inline CTA Boxとして個別実装
- **デザイン**: LINEグリーン背景・特典アイコン・1行キャッチ・CTA文言・LINE緑ボタン

---

## Priority 3: 計測基盤確立

### 3-1. `/briefing` LP改修（LINE特典受取型）

- **対象ファイル**: `app/briefing/page.tsx`（および関連コンポーネント）
- **変更内容**:
  - ヒーロー見出しを「AIリブートアカデミー 説明会・相談窓口」から「6つの特典を無料で受け取る」に変更
  - 特典01〜06をカード形式で並べ、それぞれにLINE登録リンク（パラメータ付き）を設置
  - 末尾に「AIリブートアカデミーについて詳しく見る」リンクを追加
- **URLパラメータ規則**: `https://bexn9pao.autosns.app/line?src=briefing&bonus=bonus0X`

### 3-2. 週次計測テンプレート作成

- **対象ファイル**: `docs/05-operations/line-bonus-distribution-operations.md`（新規作成）
- **記載内容**:
  - 計測指標定義（記事別CTR・特典別クリック数・LINE登録率）
  - 週次レビュー手順（UTMパラメータ確認→記事別ランキング作成→改善案PickUp）
  - 特典別配布メッセージの管理表（特典01〜06のメッセージ内容・配布条件）
  - bonus命名規則（`bonus01`〜`bonus06`）の定義表

### 3-3. /briefing 改修後の記事CTA統一

- batch9 Priority 2対象8記事 + `openai-o3-o4mini-guide` の末尾CTA URLも `/briefing` を中間LPとして挟む設計に対応するか判断
- **方針**: URLパラメータのみで計測を完結させる方式を優先し、LPリダイレクトは optional

---

## Priority 4: 新規記事（2026年2〜3月ホットトピック）

### 4-1. 未カバー判定（既存重複チェック）

| 候補slug | 既存記事との関係 | 判定 |
|---------|----------------|------|
| `gpt-5-3-codex-spark-guide` | `chatgpt-gpt5-guide`はGPT-5/5.2中心。Codex Spark特化記事は未整備 | 新規（P1と統合して `gpt-5-3-guide` として作成） |
| `github-copilot-agent-hq-guide` | `github-copilot-guide`はCopilot基礎のみ。Agent HQ（2026年2月Claude/Codex統合）は未カバー | 未カバー → **新規作成** |
| `openai-codex-app-guide` | Codex概念記事なし。macOS/iOS Codex Appは完全未カバー | 未カバー → **新規作成** |
| `ai-pc-copilot-plus-guide` | `microsoft-copilot-guide`はソフトウェアのみ。Copilot+PC（ARM/NPU搭載ハード）は未カバー | 未カバー → **新規作成** |
| `n8n-vs-make-comparison` | `n8n-beginner-guide`・`make-automation-guide`は個別あり。2ツール直接比較は未カバー | 準未カバー → **新規作成（差別化余地あり）** |
| `what-is-ai-agent`（リライト） | 2026年3月時点でOperator/Atlas/Manus/Gensparkの記述不足。batch6以来未更新 | リライト推奨 |

### 4-2. 新規記事一覧

| # | slug | URL | 主KW | サブKW | ターゲット | 執筆方向 | LINE特典 |
|---|------|-----|------|--------|-----------|---------|---------|
| 1 | `github-copilot-agent-hq-guide` | `/academy/blog/github-copilot-agent-hq-guide` | GitHub Copilot Agent HQ 使い方 | Copilot Agent・Claude Copilot連携・AIコーディング2026 | 中級エンジニア・テックリード | 2026年2月の「Claude + Codex統合」を軸に、Agent HQの起動方法、Issue→PR自動化、Copilot Workspace との使い分け、セキュリティ設定（許可リポジトリ限定）までを解説 | 特典03（ROI試算） |
| 2 | `openai-codex-app-guide` | `/academy/blog/openai-codex-app-guide` | Codex App 使い方 | OpenAI Codex・macOS AIコーディング・Codex Spark | エンジニア志望・macOSユーザー | 2026年2月2日リリースのmacOS版Codex Appの使い方。Codex SparkとCodex Classicの違い、ローカルコード読み取り、Cursor/Claude Codeとの使い分けチャート | 特典05（プロンプト50選） |
| 3 | `ai-pc-copilot-plus-guide` | `/academy/blog/ai-pc-copilot-plus-guide` | Copilot+ PC 活用 | AI PC おすすめ・NPU・Windows AI機能・Recall | ビジネスパーソン・PCリプレース検討者 | Copilot+PCの定義（NPU40TOPS以上）、主要機能（Recall/Live Captions/AI画像生成）、搭載機種比較（Surface/ThinkPad X1等）、購入前チェック5点、在宅ワークへの活用シーン | 特典02（導入効果チェック） |
| 4 | `n8n-vs-make-comparison` | `/academy/blog/n8n-vs-make-comparison` | n8n Make 比較 | n8n vs Make・ワークフロー自動化 選び方・セルフホスト | 自動化担当者・中小企業IT担当 | n8nとMake.comを「費用・セルフホスト可否・生成AI連携・学習コスト・サポート」の5軸で比較。用途別おすすめフローチャート付き。`workflow-automation-comparison`との差別化：2ツール限定の深堀り版 | 特典02（導入効果チェック） |
| 5 | `what-is-ai-agent`（リライト） | `/academy/blog/what-is-ai-agent` | AIエージェント とは | AIエージェント 種類・ChatGPT Operator・Manus・Claude Computer Use | 初心者・導入検討者 | 2026年3月版として全面更新。概念部分（ReActループ・Tooluse・メモリ）はAnswer Box化し、Operator/Atlas/Manus/Genspark/Claude Codeの勢力図表を追加。FAQ 8問以上に強化 | 特典01（ガイドライン雛形） |

---

## 実施順序

1. **Priority 1**（batch7残り2記事） → 検索ボリューム確保が先
2. **Priority 2**（mid-article CTA 8記事） → LINE登録率改善
3. **Priority 3**（計測基盤） → 効果計測可能状態にする
4. **Priority 4**（新規4本+リライト1本） → 記事数・カバレッジ拡大

---

## 実装タスク（Sprint分解）

### Sprint 9-1（batch7残り記事・新規2本）
- [ ] `gpt-5-3-guide` route 作成
  - 対象: `app/academy/blog/gpt-5-3-guide/page.tsx`
- [ ] `gpt-5-3-guide` 本文コンポーネント作成
  - 対象: `components/academyLanding/blog/gpt-5-3-guide/Gpt53GuidePage.tsx`
- [ ] `claude-code-beginners-guide` route 作成
  - 対象: `app/academy/blog/claude-code-beginners-guide/page.tsx`
- [ ] `claude-code-beginners-guide` 本文コンポーネント作成
  - 対象: `components/academyLanding/blog/claude-code-beginners-guide/ClaudeCodeBeginnersGuidePage.tsx`
- [ ] 記事一覧への追記（2本）
  - 対象: `app/academy/blog/page.tsx`

### Sprint 9-2（mid-article CTA実装・計測パラメータ付与）
- [ ] `dx-reskilling-subsidy-guide` mid-article CTAブロック追加（特典03・パラメータ付き）
  - 対象: `components/academyLanding/blog/dx-reskilling-subsidy-guide/DxReskillingSubsidyGuidePage.tsx`
- [ ] `education-training-benefit-ai` mid-article CTAブロック追加（特典03）
  - 対象: `components/academyLanding/blog/education-training-benefit-ai/EducationTrainingBenefitAiPage.tsx`
- [ ] `ai-course-ranking` mid-article CTAブロック追加（特典06）
  - 対象: `components/academyLanding/blog/ai-course-ranking/AiCourseRankingPage.tsx`
- [ ] `ai-certification-guide` mid-article CTAブロック追加（特典06）
  - 対象: `components/academyLanding/blog/ai-certification-guide/AiCertificationGuidePage.tsx`
- [ ] `g-e-certification-comparison` mid-article CTAブロック追加（特典06）
  - 対象: `components/academyLanding/blog/g-e-certification-comparison/GECertificationComparisonPage.tsx`
- [ ] `workflow-automation-comparison` lineUrlにパラメータ追加 + mid-article CTA確認（特典02）
  - 対象: `components/academyLanding/blog/workflow-automation-comparison/WorkflowAutomationComparisonPage.tsx`
- [ ] `chatgpt-plan-comparison` mid-article CTAブロック追加（特典05）
  - 対象: `components/academyLanding/blog/chatgpt-plan-comparison/ChatgptPlanComparisonPage.tsx`
- [ ] `ai-coding-tool-comparison-2026` mid-article CTAブロック追加（特典03）
  - 対象: `components/academyLanding/blog/ai-coding-tool-comparison-2026/AiCodingToolComparison2026Page.tsx`
- [ ] `openai-o3-o4mini-guide` lineUrlを完全パラメータ形式に修正
  - 対象: `components/academyLanding/blog/openai-o3-o4mini-guide/OpenaiO3O4miniGuidePage.tsx`

### Sprint 9-3（計測基盤・LP整備）
- [ ] `/briefing` LP改修（LINE特典受取型）
  - 対象: `app/briefing/page.tsx`
- [ ] 週次計測テンプレート作成
  - 対象: `docs/05-operations/line-bonus-distribution-operations.md`（新規作成）
- [ ] 記事別パラメータ命名規則の定義ドキュメント追記
  - 対象: `docs/05-operations/line-bonus-distribution-operations.md`

### Sprint 9-4（新規記事4本+リライト1本）
- [ ] `github-copilot-agent-hq-guide` route + コンポーネント作成
  - 対象: `app/academy/blog/github-copilot-agent-hq-guide/page.tsx`
  - 対象: `components/academyLanding/blog/github-copilot-agent-hq-guide/GithubCopilotAgentHqGuidePage.tsx`
- [ ] `openai-codex-app-guide` route + コンポーネント作成
  - 対象: `app/academy/blog/openai-codex-app-guide/page.tsx`
  - 対象: `components/academyLanding/blog/openai-codex-app-guide/OpenaiCodexAppGuidePage.tsx`
- [ ] `ai-pc-copilot-plus-guide` route + コンポーネント作成
  - 対象: `app/academy/blog/ai-pc-copilot-plus-guide/page.tsx`
  - 対象: `components/academyLanding/blog/ai-pc-copilot-plus-guide/AiPcCopilotPlusGuidePage.tsx`
- [ ] `n8n-vs-make-comparison` route + コンポーネント作成
  - 対象: `app/academy/blog/n8n-vs-make-comparison/page.tsx`
  - 対象: `components/academyLanding/blog/n8n-vs-make-comparison/N8nVsMakeComparisonPage.tsx`
- [ ] `what-is-ai-agent` リライト（Answer Box追加・AIエージェント勢力図2026年版更新・FAQ 8問以上）
  - 対象: `components/academyLanding/blog/what-is-ai-agent/WhatIsAiAgentPage.tsx`
- [ ] 記事一覧への追記（4本）
  - 対象: `app/academy/blog/page.tsx`

---

## リスク・代替案・ロールバック

| リスク | 影響 | 代替案 | ロールバック |
|--------|------|--------|------------|
| mid-article CTA多用による離脱率増加 | 滞在時間低下・SEO評価悪化 | 各記事1箇所に限定し位置を記事種別で統一 | 追加CTAを削除して末尾CTAのみに戻す |
| `gpt-5-3-guide` の内容がカニバる（`chatgpt-gpt5-guide`等） | SEO評価分散 | 既存記事にGPT-5.3セクションを追記する方式に切替 | 新規記事を非公開化して既存記事への内部リンクに変更 |
| `/briefing` 改修の工数超過 | Priority 3遅延 | パラメータ付きURLを直接LINEに飛ばす形を維持 | `/briefing` は現状維持。パラメータ管理だけ先行 |
| 計測パラメータ不整合（slug名ミス等） | 効果測定の精度低下 | `docs/05-operations/` に命名規則表を先行作成 | 共通URL運用に一時復帰 |
| `what-is-ai-agent` リライトで既存ランキングが下落 | 流入減 | 大幅変更前に新URLで別記事化しA/Bテスト | git revertで既存内容に即戻し |

---

## 受け入れ条件（batch9完了判定）

- [ ] `gpt-5-3-guide`・`claude-code-beginners-guide` が `app/academy/blog/page.tsx` の `blogPosts` に登録されており、ページが正常表示される
- [ ] Priority 2対象8記事 + `openai-o3-o4mini-guide` に、`?src=blog&slug=...&bonus=...` 形式のパラメータが含まれるLINE導線が本文中に存在する
- [ ] `/briefing` がLINE特典受取型の導線（特典01〜06の提示）に改修されている
- [ ] `docs/05-operations/line-bonus-distribution-operations.md` が作成されており、週次計測の手順・命名規則が記載されている
- [ ] Sprint 9-4の新規4本がすべて公開状態で `app/academy/blog/page.tsx` に登録されている
- [ ] `what-is-ai-agent` にAnswer Box・勢力図表・FAQ 8問以上が実装されている
- [ ] 全変更がbuildエラーなく通ること（`npm run build` クリーン）

---

## 参考・依存ファイル

| ファイル | 役割 |
|---------|------|
| `app/academy/blog/page.tsx` | 記事一覧の正本（blogPosts定義）|
| `components/academyLanding/sections/MidCtaSection.tsx` | mid-article CTA共通コンポーネント（流用候補）|
| `docs/line-bonus-01-guideline.md` 〜 `docs/line-bonus-06-30day-study-plan.md` | 特典テキストの正本 |
| `docs/batch8-article-plan.md` | Sprint 8-1〜8-4の設計詳細（Priority 2の前提） |
| `docs/batch7-article-plan.md` | Priority 1の前提計画 |
| `app/briefing/page.tsx` | Priority 3の改修対象 |
