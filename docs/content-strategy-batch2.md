---
title: "AIリブート ブログ戦略拡張（記事#11〜30）"
version: "1.0"
last_updated: "2026-02-19"
author: "Claude Code（さかもと依頼）"
related_docs: [
  "docs/content-strategy-2026-02.md",
  "docs/seo-keyword-dictionary.md",
  "docs/blog-production-calendar.md",
  "app/academy/blog/page.tsx"
]
status: "draft"
dependencies:
  upstream: [
    "docs/content-strategy-2026-02.md",
    "docs/blog-production-calendar.md"
  ]
  downstream: ["app/academy/blog/*"]
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

## TL;DR

- **記事#11〜30（20本）**は、既存57記事（47本+計画済み10本）でカバーされていない6クラスターを中心に設計。
- 最優先（S）は「Dify入門・n8n比較・Claude Code入門・稟議計画書テンプレ」の4本。検索潜在量×LINE登録率×内部リンク効果がすべて高い。
- **季節インサート**として4月公開の「新入社員AIスタートガイド」を前倒し（4月1週目）。
- LINE登録特典は「配布物の種類」で差別化：テンプレ/チェックリスト/事例集/診断の4型を使い分ける。
- AIOインデックス対応として、FAQ構造・比較表・チェックリストを記事内に必ず1要素以上含める。

---

## 1. キーワードギャップ分析（既存57本との重複確認）

### 1-1. 既存カバー済み領域（追加不要）
| 領域 | 代表slug |
|---|---|
| AI基礎/主要ツール入門 | what-is-generative-ai, chatgpt-claude-beginners-guide, gpt-vs-claude-comparison, gemini-beginners-guide |
| RAG基礎/活用 | what-is-rag, rag-use-cases |
| AIエージェント基礎/構築 | what-is-ai-agent, ai-agent-build-guide |
| ガバナンス（計画済み#1〜10） | ai-guideline-template, shadow-ai-countermeasures, ai-data-leak-patterns, what-is-mcp, ai-agent-deployment-checklist 等 |
| 法人研修/補助金 | corporate-ai-training, dx-reskilling-subsidy-guide, education-training-benefit-ai |
| キャリア/副業 | ai-engineer-career-change, ai-side-business-guide, reskilling-over-40 |

### 1-2. 発見した主要ギャップ（20本の根拠）

| ギャップカテゴリ | 未カバーKW例 | 優先理由 |
|---|---|---|
| **AIワークフロー自動化ツール** | Dify 使い方 / n8n Make Zapier 比較 / Power Automate AI連携 | エージェント化の土台。検索増加中。テンプレ配布でLINE率高 |
| **最新AIツール（2026年需要急上昇）** | Claude Code 使い方 / Perplexity AI 使い方 | 指名検索化が進む前に先行獲得 |
| **AI議事録・会議ツール** | AI 議事録 ツール 比較 / Fireflies 使い方 | 比較意図が強く即購買に近い。テンプレで差別化 |
| **部門別プロンプト/運用設計** | 生成AI 経理 / 生成AI 法務 / 生成AI カスタマーサポート | 高単価法人のニーズと直結。ai-hr-recruitingの次の展開 |
| **技術基礎（RAG発展/LLM評価）** | RAG ファインチューニング 違い / LLM 評価 / ベクターデータベース | PoC→本番移行フェーズの必須知識。エージェントクラスター強化 |
| **資格/ポートフォリオ** | 生成AIパスポート 勉強法 / AI ポートフォリオ 作り方 | 初心者の最初の目標→アカデミー申込への最短ルート |
| **法人CV直結（稟議/助成金）** | 生成AI 稟議 計画書 / AI研修 助成金 申し込み | ガバナンス記事群の「最後の一押し」。CV率最高クラス |
| **AIO/SEO/コンテンツ戦略** | LLMO GEO / AI Overviews 対策 | 法人マーケ・広報担当への新規リーチ |
| **季節性（4月・新年度）** | 新入社員 AI 活用 / 小規模事業者 AI 活用 | 4月は「仕事始め×AI」検索が急増。年1回の旬 |

---

## 2. 優先順位マトリクス

スコアリング基準（各3点満点）：
- **検索潜在量**：ロングテールKWの月間検索見込み（3=高, 2=中, 1=低）
- **LINE親和性**：テンプレ/チェックリスト/診断の自然さ（3=高, 2=中, 1=低）
- **内部リンク効果**：既存記事群との相乗効果（3=高, 2=中, 1=低）
- **実装コスト逆数**：制作工数の逆（3=低コスト, 2=中, 1=高コスト）
- **合計9点以上→S / 7〜8点→A / 5〜6点→B**

| # | タイトル（短縮） | 検索潜在量 | LINE親和性 | 内部リンク | 実装コスト逆 | 計 | 優先度 |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| 11 | Dify使い方完全ガイド | 3 | 3 | 3 | 2 | 11 | **S** |
| 12 | n8n/Make/Zapier比較 | 3 | 3 | 3 | 2 | 11 | **S** |
| 13 | Claude Code入門 | 3 | 3 | 2 | 3 | 11 | **S** |
| 25 | 稟議が通る導入計画書 | 3 | 3 | 3 | 3 | 12 | **S** |
| 14 | AI議事録ツール比較 | 3 | 3 | 2 | 3 | 11 | **S** |
| 29 | 新入社員AIスタートガイド | 3 | 3 | 2 | 3 | 11 | **S**（季節限定） |
| 15 | Perplexity AI活用ガイド | 2 | 2 | 2 | 3 | 9 | **A** |
| 16 | LLM評価・品質管理入門 | 2 | 3 | 3 | 2 | 10 | **A** |
| 17 | 経理の生成AI活用 | 2 | 3 | 2 | 2 | 9 | **A** |
| 18 | 法務の生成AI活用 | 2 | 3 | 2 | 2 | 9 | **A** |
| 19 | CS/カスタマーサポートAI | 2 | 3 | 2 | 2 | 9 | **A** |
| 20 | RAG vs ファインチューニング | 2 | 2 | 3 | 2 | 9 | **A** |
| 22 | 生成AIパスポート勉強法 | 3 | 3 | 2 | 3 | 11 | **A** |
| 23 | AIポートフォリオの作り方 | 2 | 3 | 2 | 3 | 10 | **A** |
| 24 | 営業の生成AIテンプレ20選 | 2 | 3 | 2 | 2 | 9 | **A** |
| 27 | AI研修の助成金活用手順 | 2 | 3 | 3 | 2 | 10 | **A** |
| 30 | 小規模事業者AIチェックリスト | 2 | 3 | 2 | 3 | 10 | **A** |
| 21 | ベクターDB入門/比較 | 1 | 2 | 3 | 2 | 8 | **B** |
| 26 | AIO/SEO戦略ガイド | 2 | 2 | 1 | 2 | 7 | **B** |
| 28 | Power Automate×生成AI | 1 | 2 | 2 | 2 | 7 | **B** |

---

## 3. 記事#11〜30 優先リスト

| # | slug案 | タイトル案 | 主KW（ロングテール） | サブKW | クラスター | LINE導線 | 優先度 |
|---|---|---|---|---|---|---|---|
| 11 | `dify-beginner-guide` | Difyの使い方完全ガイド｜ノーコードでAI業務ボットを最短で作る方法 | Dify 使い方 / Dify とは | Dify 料金 / Dify 事例 / Dify 日本語 | エージェント実装 | Difyスターターテンプレ（ユースケース5パターン） | **S** |
| 12 | `workflow-automation-comparison` | n8n・Make・Zapier比較｜AI自動化ワークフローの選び方と始め方 | n8n Make Zapier 比較 / AI 自動化 ツール | ノーコード 自動化 / Integromat 使い方 / Zapier AI | エージェント実装 | 自動化ユースケース集（業種別10事例） | **S** |
| 13 | `claude-code-intro` | Claude Code入門｜AIコーディングアシスタントの始め方と実務活用 | Claude Code 使い方 / Claude Code とは | AI コーディング 効率化 / AIエディタ 比較 | ツール/AI基礎 | 7日スタートチェックリスト | **S** |
| 14 | `ai-meeting-tools-comparison` | AI議事録ツール比較｜Fireflies・Otter・Notion AIの選び方と会議効率化 | AI 議事録 ツール 比較 / AI 文字起こし おすすめ | Fireflies 使い方 / Otter AI 日本語 / Notion AI 議事録 | 実務活用 | 議事録テンプレ（5会議タイプ別） | **S** |
| 15 | `perplexity-ai-guide` | Perplexity AI活用ガイド｜AI検索で情報収集を劇的に効率化する方法 | Perplexity 使い方 / Perplexity AI とは | AI検索 使い方 / Perplexity ChatGPT 違い | ツール/AI基礎 | 情報収集フローテンプレ | **A** |
| 16 | `llm-evaluation-guide` | LLM評価・品質管理入門｜ハルシネーション対策と出力品質を測る指標 | LLM 評価 方法 / ハルシネーション 対策 | 生成AI 品質 テスト / AI 出力 評価 基準 | エージェント実装 | 評価観点チェックリスト（10項目） | **A** |
| 17 | `ai-accounting-guide` | 経理の生成AI活用ガイド｜仕訳・レポート・経費精算の現実的な使い方 | 生成AI 経理 活用 / AI 経理 業務効率化 | 経理 ChatGPT 使い方 / AI 仕訳 自動化 | 部門別活用 | 経理向けプロンプト集（月次業務10選） | **A** |
| 18 | `ai-legal-guide` | 法務の生成AI活用ガイド｜契約レビューを"任せない"運用設計 | 生成AI 法務 活用 / 契約書 AI レビュー | AI 契約書 作成 / 生成AI リーガル | 部門別活用 | 法務活用チェックリスト（リスク管理） | **A** |
| 19 | `ai-customer-support-guide` | カスタマーサポートのAI活用｜一次対応・ナレッジ管理・品質管理の実装 | 生成AI カスタマーサポート / AI FAQ ボット | CS AI 導入 / チャットボット 生成AI 比較 | 部門別活用 | FAQテンプレ（一次対応20問答） | **A** |
| 20 | `rag-vs-finetuning-guide` | RAGとファインチューニング、どちらを選ぶ？社内データ活用の判断フレーム | RAG ファインチューニング 違い / 社内データ 生成AI | LLM カスタマイズ 方法 / ファインチューニング 費用 | 技術基礎 | 用途別判断フローチャート（3ステップ） | **A** |
| 21 | `vector-db-intro` | ベクターデータベース入門｜Pinecone・Weaviate・ChromaDBの比較と選び方 | ベクターデータベース とは / ベクトルDB 比較 | Pinecone 使い方 / ChromaDB 入門 / RAG 実装 | 技術基礎/RAG | RAG実装チェックリスト | **B** |
| 22 | `generative-ai-passport-guide` | 生成AIパスポートとは？難易度・勉強法・最短合格プラン | 生成AIパスポート 勉強法 / 生成AIパスポート とは | 生成AI 資格 おすすめ / 生成AI 検定 難易度 | 資格/キャリア | 30日合格学習プラン（日程付き） | **A** |
| 23 | `ai-portfolio-guide` | AI活用ポートフォリオの作り方｜転職・副業で差がつく成果物の設計 | AI ポートフォリオ 作り方 / AI転職 ポートフォリオ | 生成AI 実績 作り方 / AI副業 案件獲得 | キャリア | 成果物テンプレ（3職種別） | **A** |
| 24 | `ai-sales-prompt-templates` | 営業の生成AI活用テンプレ20選｜提案書・メール・ヒアリング設計まで | 生成AI 営業 活用 / 営業 プロンプト テンプレ | 提案書 AI 作成 / 営業メール AI 生成 | 部門別活用 | テンプレ20選PDF配布 | **A** |
| 25 | `ai-adoption-proposal-template` | 稟議が通る生成AI導入計画書の作り方｜目的・リスク・費用を1枚で整理 | 生成AI 稟議 書き方 / 生成AI 導入 計画書 | AI導入 承認 / 生成AI 稟議 通し方 | 法人CV直結 | 計画書テンプレ（A4一枚版・Google Docs） | **S** |
| 26 | `aio-seo-strategy-guide` | AI Overviews時代のSEO完全ガイド｜"AIに引用される"コンテンツ設計チェック | LLMO GEO とは / AI Overviews 対策 | AIO SEO / AI検索 コンテンツ 最適化 | AIO/マーケ | AIO診断チェックリスト（15項目） | **B** |
| 27 | `ai-training-subsidy-guide` | 生成AI研修に助成金を使う手順｜対象条件・落とし穴・申請フロー完全版 | AI研修 助成金 申請 / リスキリング 補助金 法人 | 人材開発支援助成金 AI / 社員研修 補助金 | 補助金/法人 | 申請フローチェックリスト | **A** |
| 28 | `power-automate-ai-guide` | Power Automate × 生成AI活用｜Microsoft環境の現場自動化レシピ集 | Power Automate 生成AI / Power Automate AI連携 | Copilot Studio 使い方 / Microsoft AI 自動化 | エージェント実装 | 自動化レシピ集（Microsoft環境10選） | **B** |
| 29 | `new-employee-ai-starter-guide` | 新入社員のAI活用スタートガイド2026｜最初の1ヶ月でやること完全版 | 新入社員 AI 活用 / 新社会人 生成AI 始め方 | 社会人 AI 最初 / 新卒 ChatGPT 使い方 | 季節/初心者 | 7日スタートキット（毎日1タスク形式） | **S**（4月限定） |
| 30 | `small-business-ai-checklist` | 小規模事業者のAI活用チェックリスト｜補助金活用から現場導入まで | 小規模事業者 AI活用 / 個人事業主 生成AI 始め方 | 中小企業 AI 初めて / 個人事業主 ChatGPT | 初心者/法人 | 導入チェックリスト（30項目） | **A** |

---

## 4. クラスター設計図（内部リンク構造）

### Cluster A: エージェント実装・運用（強化）

```
[ハブ] what-is-ai-agent ─── ai-agent-build-guide
         │
         ├── [計画#9] ai-agent-deployment-checklist ──→ #16 llm-evaluation-guide
         │                                               └──→ #21 vector-db-intro
         ├── [計画#10] what-is-mcp ──→ #11 dify-beginner-guide
         │                              └──→ #12 workflow-automation-comparison
         │                                     └──→ #28 power-automate-ai-guide
         └── #16 llm-evaluation-guide ──→ #20 rag-vs-finetuning-guide
                                           └──→ #21 vector-db-intro
```

**新規記事→既存記事への上り導線：**
- `dify-beginner-guide` → `what-is-ai-agent`（基礎理解）, `ai-agent-build-guide`（発展）
- `workflow-automation-comparison` → `dify-beginner-guide`（ノーコード詳細）, `ai-agent-deployment-checklist`（運用設計）
- `llm-evaluation-guide` → `what-is-rag`（RAGの品質評価へ）, `ai-agent-deployment-checklist`（承認フロー）

### Cluster B: 部門別活用（新規クラスター）

```
[ハブ] ai-business-efficiency-cases ── ai-hr-recruiting
         │
         ├── #17 ai-accounting-guide（経理）
         ├── #18 ai-legal-guide（法務）  ──→ [計画#4] ai-copyright-commercial-guide
         ├── #19 ai-customer-support-guide（CS）──→ prompt-template-for-work
         └── #24 ai-sales-prompt-templates（営業）──→ prompt-template-for-work
```

**部門別クラスターの内部リンク方針：**
- 各部門記事は `ai-business-efficiency-cases` と `ai-hr-recruiting` から流入受け
- 法務記事は `ai-copyright-commercial-guide`（著作権）へ発展リンク
- CS/営業記事は `prompt-template-for-work` と相互送客

### Cluster C: 技術基礎（RAG発展）

```
[ハブ] what-is-rag ── rag-use-cases
         │
         ├── #20 rag-vs-finetuning-guide
         │       └──→ #21 vector-db-intro（実装詳細）
         └── [計画#9] ai-agent-deployment-checklist（RAGの権限設計）
```

### Cluster D: ツール・AI基礎（拡張）

```
[ハブ] chatgpt-claude-beginners-guide
         │
         ├── gpt-vs-claude-comparison
         ├── gemini-beginners-guide ──→ notebooklm-guide ──→ #15 perplexity-ai-guide
         ├── github-copilot-guide ──→ #13 claude-code-intro
         └── #14 ai-meeting-tools-comparison（会議効率化）
```

**導線設計：**
- `notebooklm-guide` → `perplexity-ai-guide`（AI検索ツール全体像へ）
- `github-copilot-guide` → `claude-code-intro`（AIコーディングの次のステップ）

### Cluster E: キャリア・資格（拡張）

```
[ハブ] how-to-learn-generative-ai ── ai-for-non-engineers
         │
         ├── ai-certification-guide ──→ g-e-certification-comparison
         │       └──→ #22 generative-ai-passport-guide（生成AIパスポート特化）
         ├── ai-engineer-career-change ──→ #23 ai-portfolio-guide
         └── ai-side-business-guide ──→ #23 ai-portfolio-guide
```

### Cluster F: 法人CV直結（最終導線）

```
[ガバナンスハブ] ai-guideline-template
         │
         ├── ai-adoption-cost-roi ──→ #25 ai-adoption-proposal-template（稟議化）
         ├── ai-poc-guide ──→ #25 ai-adoption-proposal-template
         └── dx-reskilling-subsidy-guide ──→ #27 ai-training-subsidy-guide（法人向け詳細）
```

### Cluster G: 新年度・初心者（季節クラスター）

```
[ハブ] how-to-learn-generative-ai
         │
         ├── #29 new-employee-ai-starter-guide（4月限定・新入社員）
         │       └──→ chatgpt-claude-beginners-guide（ツール入門）
         └── #30 small-business-ai-checklist（小規模事業者）
                 └──→ corporate-ai-adoption-guide（中小企業導入ガイド）
```

---

## 5. 推奨公開スケジュール（2026年4月〜6月）

### 方針
- **S優先記事は4月中に投入**（新年度の検索需要ピークを逃さない）
- **部門別テンプレ記事は5月**（新年度の現場課題が顕在化するタイミング）
- **技術基礎・AIO系は6月**（内容の深さが必要なため制作期間を十分に確保）
- 週1〜2本ペース（月4〜8本）を維持

```
【4月 Week 1：新年度スタート×高CV記事を前倒し】
4/01 (水)  #29 new-employee-ai-starter-guide   ← 季節性最優先
4/03 (金)  #25 ai-adoption-proposal-template   ← CV最高クラス

【4月 Week 2：超需要ツール記事】
4/07 (火)  #11 dify-beginner-guide
4/10 (金)  #13 claude-code-intro

【4月 Week 3：AI自動化比較】
4/14 (月)  #12 workflow-automation-comparison
4/17 (木)  #14 ai-meeting-tools-comparison

【4月 Week 4：部門別×資格導線】
4/21 (月)  #22 generative-ai-passport-guide
4/24 (木)  #17 ai-accounting-guide

【5月 Week 1：部門別×キャリア】
5/01 (金)  #15 perplexity-ai-guide
5/08 (金)  #18 ai-legal-guide

【5月 Week 2：CS×営業テンプレ】
5/12 (火)  #19 ai-customer-support-guide
5/15 (金)  #24 ai-sales-prompt-templates

【5月 Week 3：技術基礎×ポートフォリオ】
5/19 (火)  #16 llm-evaluation-guide
5/22 (金)  #23 ai-portfolio-guide

【5月 Week 4：助成金×小規模事業者】
5/26 (火)  #27 ai-training-subsidy-guide
5/29 (金)  #30 small-business-ai-checklist

【6月 Week 1〜2：技術系深堀り】
6/02 (火)  #20 rag-vs-finetuning-guide
6/05 (金)  #21 vector-db-intro

【6月 Week 3〜4：MS環境×AIO系】
6/09 (火)  #28 power-automate-ai-guide
6/12 (金)  #26 aio-seo-strategy-guide
```

### 優先度別の柔軟調整ルール
- **S記事は日程死守**（新入社員記事は4/1週以外で出すと効果半減）
- **A記事は±1週の範囲で調整可**
- **B記事は制作リソース次第でSkip→翌期に繰り越し可**

---

## 6. LINE CTA 設計ガイド

### 6-1. コンテンツタイプ別の特典マッピング

| コンテンツタイプ | 記事例（#番号） | LINE特典の種類 | 特典内容（具体例） | CTA文言例 |
|---|---|---|---|---|
| **ツール入門/使い方** | #11, #13, #14, #15 | テンプレ・スターターキット | Dify FAQボットテンプレ / 議事録フォーマット5種 / Claude Codeスタートチェック | 「【無料】〇〇スターターキットをLINEで受け取る」 |
| **比較/選定** | #12, #20, #21 | ユースケース集・判断シート | 自動化ツール比較表（詳細版）/ RAG vs FT判断フロー | 「【無料】比較表＋選び方チェックをLINEで受け取る」 |
| **部門別活用** | #17, #18, #19, #24 | プロンプト集・テンプレ | 経理月次プロンプト10選 / 法務チェックリスト / CS対応20問答 | 「【無料】〇〇部門向けプロンプト集をLINEで受け取る」 |
| **資格/学習** | #22 | 学習プラン | 生成AIパスポート30日合格プラン | 「【無料】最短合格プランをLINEで受け取る」 |
| **キャリア/副業** | #23 | 成果物テンプレ | 職種別ポートフォリオ構成テンプレ3種 | 「【無料】成果物テンプレをLINEで受け取る」 |
| **法人CV直結** | #25, #27 | 計画書/申請チェック | 稟議計画書テンプレA4一枚 / 助成金申請フローチャート | 「【無料】〇〇テンプレをLINEで受け取る＋無料相談」 |
| **季節/初心者** | #29, #30 | スタートキット | 7日間チャレンジ（毎日1タスク）/ 導入チェックリスト30項目 | 「【無料】7日スタートキットをLINEで受け取る」 |
| **AIO/SEO** | #26 | 診断チェック | AIO対応診断15項目チェックシート | 「【無料】AIO診断チェックをLINEで受け取る（壁打ち付き）」 |

### 6-2. LINE特典の品質基準（優先度S記事）

**S記事は特典の完成度が登録率を左右するため、公開前に特典を先に作る。**

| # | 特典名 | フォーマット | 制作工数目安 |
|---|---|---|---|
| #11 | Difyスターターテンプレ（5ユースケース付き） | Notion/Google Docs | 2〜3時間 |
| #12 | AI自動化ツール選定ガイド（比較表詳細版） | スプレッドシート | 3〜4時間 |
| #13 | Claude Codeスタートチェックリスト（7日版） | PDF/Notion | 2時間 |
| #14 | 会議タイプ別議事録テンプレ（5種） | Google Docs | 3時間 |
| #25 | 稟議計画書テンプレ（A4一枚・Google Docs） | Google Docs | 4〜5時間 |
| #29 | 7日間AIスタートキット（毎日1タスク形式） | Notion/PDF | 4時間 |

### 6-3. ナーチャリングシナリオ（記事流入→LINE→申込）

**法人（ガバナンス/PoC/研修系記事流入）**
```
Day0: テンプレ配布 + 「導入時の3つのよくある落とし穴」
Day2: 事例（中小企業がPoC30日で本番導入した話）
Day4: テンプレの使い方動画30秒
Day6: 「無料壁打ち相談（30分）」申込案内
```

**個人（キャリア/副業系記事流入）**
```
Day0: 成果物テンプレ配布 + 「AIスキル診断3問」
Day2: 職種別ロードマップ（3択から選ぶ）
Day4: 週3時間で3ヶ月継続した人の変化
Day6: 「無料説明会」または「アカデミー概要PDF」
```

**初心者（入門/使い方記事流入）**
```
Day0: 7日スタートキット配布
Day2: Day3の課題ヒント＋よくある失敗
Day5: 「1週間完走しましたか？」フォローアップ
Day7: 「次のステップ」→アカデミー無料説明会案内
```

---

## 7. AIOインデックス対応チェックリスト（全記事共通）

Perplexity・ChatGPT検索・Gemini検索でのスニペット採用を高めるための構造要件：

| 要件 | 実装方法 | 優先度 |
|---|---|---|
| 記事冒頭に「3行要約」ボックス | 結論→理由→行動の順 | 必須 |
| FAQ構造（H2またはH3に「Q:〜?」形式） | 各記事3問以上 | 必須 |
| 比較表・チェックリストを本文中に1つ以上 | 具体的な数値/項目で構成 | 必須 |
| 「〜とは」「〜の違い」「〜の選び方」を見出しに含める | H2レベルで明示 | 推奨 |
| 著者情報・更新日・一次情報（公式リンク）の明示 | E-E-A-T対応 | 推奨 |
| 構造化データ（FAQPage/HowTo schema） | JSON-LD実装 | 推奨 |

---

## 8. 制作チェックリスト（記事別）

各記事の制作開始前に確認すること：

- [ ] 特典（テンプレ/チェックリスト）を事前に作成した
- [ ] 既存記事との内部リンク設計（上りリンク2本以上・下りリンク1本以上）
- [ ] 主KWをtitle・H1・メタディスクリプションに含めた
- [ ] FAQ構造（最低3問）を組み込んだ
- [ ] 比較表またはチェックリストが1つ以上ある
- [ ] 3行要約ボックスが冒頭にある
- [ ] LINE CTAが記事内に2箇所以上（中間・末尾）
- [ ] 公開日に合わせて特典のLINE配信設定を完了した

---

## 参考：既存57記事との重複確認済みslug一覧

本計画に含まれる20記事のslugはすべて以下との重複なし（2026-02-19時点確認済み）：

```
[既存47記事slug]
what-is-generative-ai, what-is-ai-agent, ai-agent-build-guide, multimodal-ai-intro,
how-to-learn-generative-ai, ai-for-non-engineers, ai-coding-for-beginners, github-copilot-guide,
python-ai-intro, prompt-template-for-work, ai-presentation-workflow, ai-business-efficiency-cases,
what-is-rag, rag-use-cases, ai-data-analysis-excel, dx-reskilling-subsidy-guide,
ai-certification-guide, g-e-certification-comparison, ai-course-ranking, skills-for-ai-era-career,
ai-career-change-cases, ai-engineer-career-change, corporate-ai-adoption-guide, ai-poc-guide,
ai-training-curriculum, ai-agent-deployment-checklist, what-is-mcp, ai-guideline-template,
ai-adoption-cost-roi, shadow-ai-countermeasures, ai-copyright-commercial-guide, corporate-ai-training,
reskilling-over-40, education-training-benefit-ai, ai-school-for-working-adults,
chatgpt-claude-beginners-guide, chatgpt-start-guide-smartphone, gpt-vs-claude-comparison,
corporate-ai-training-internal, ai-training-kpi, ai-data-leak-patterns, ai-hr-recruiting,
ai-side-business-guide, gemini-beginners-guide, notebooklm-guide, ai-image-generation-guide,
ai-video-tool-comparison

[計画済み10記事slug（blog-production-calendar.md）]
ai-guideline-template, shadow-ai-countermeasures, ai-data-leak-patterns, ai-copyright-commercial-guide,
ai-adoption-cost-roi, ai-poc-guide, ai-training-curriculum, ai-training-kpi,
ai-agent-deployment-checklist, what-is-mcp
```
