---
title: "AIリブート ブログ戦略拡張（記事#31〜47）"
version: "1.1"
last_updated: "2026-02-19"
author: "Claude Code（さかもと依頼）"
related_docs: [
  "docs/content-strategy-2026-02.md",
  "docs/content-strategy-batch2.md",
  "docs/seo-keyword-dictionary.md",
  "docs/blog-production-calendar.md",
  "app/academy/blog/page.tsx"
]
status: "draft"
changelog:
  - "v1.1 2026-02-19: Google AI Studio を2記事に分割（#38/#39）、合計17本に変更"
  - "v1.0 2026-02-19: 初版作成（16本）"
dependencies:
  upstream: [
    "docs/content-strategy-batch2.md",
    "docs/blog-production-calendar.md"
  ]
  downstream: ["app/academy/blog/*"]
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

## TL;DR

- **記事#31〜47（17本）**は、既存58記事・batch2計画20本でカバーされていない「個人実践系」と「最新ツール解説系」の2グループを中心に設計。
- 最優先（S）は **「転職×AI活用」「ChatGPT実践テクニック集」** の2本。検索潜在量×LINE登録率×内部リンク効果がすべて高い。
- **Google AI Studio は2記事に分割：** `google-ai-studio-guide`（入門/概要）と `google-ai-studio-app-build-guide`（App Build特化）→ それぞれ独立したKWで検索需要を二重取り。
- **⚠️ slug競合2件を要確認：** `ai-sales-prompt-templates`（batch2 #24と同slug）、`small-business-ai-checklist`（batch2 #30と同slug）→ 本計画ではそれぞれ **batch2 carry-over扱い** および **slug変更（`freelancer-ai-checklist`）** を推奨。
- **⚠️ コンテンツ重複1件：** `ai-video-generation-comparison` は既存 `ai-video-tool-comparison` と近接 → 「2026年・生成AI特化（Kling/Runway/Seedance）」に絞り差別化が必要。
- グループB（最新ツール）のうち **Manus AI・Genspark・Google AI Studio** は指名検索が急増中 → トレンドが冷める前に早期公開を優先。
- 個人向けフィルタを適用：法人特化・エンジニア特化は Bランク以下に抑制。

---

## 1. キーワードギャップ分析（既存58記事との重複確認）

### 1-1. 既存カバー済み領域（追加不要）

| 領域 | 代表slug |
|---|---|
| AI基礎/主要ツール入門 | what-is-generative-ai, chatgpt-claude-beginners-guide, chatgpt-start-guide-smartphone, gpt-vs-claude-comparison, gemini-beginners-guide |
| 自動化ツール | dify-beginner-guide, workflow-automation-comparison |
| AIコーディング基礎 | claude-code-intro, github-copilot-guide, ai-coding-for-beginners, python-ai-intro |
| AI会議/議事録 | ai-meeting-tools-comparison |
| AI検索 | perplexity-ai-guide, notebooklm-guide |
| キャリア/副業 | ai-career-change-cases, ai-engineer-career-change, reskilling-over-40, ai-side-business-guide, ai-portfolio-guide |
| 資格/学習 | ai-certification-guide, g-e-certification-comparison, generative-ai-passport-guide |
| 画像・動画生成 | ai-image-generation-guide, ai-video-tool-comparison |
| 部門別活用 | ai-hr-recruiting, ai-accounting-guide |
| 法人ガバナンス/補助金 | ai-guideline-template, shadow-ai-countermeasures, dx-reskilling-subsidy-guide, education-training-benefit-ai |

### 1-2. batch2 計画済みで未実装の記事（2026-02-19時点）

> batch2 に含まれるが app/academy/blog/ に未作成の記事。batch3とのslug競合に注意。

| batch2 # | slug | 状態 |
|---|---|---|
| #18 | ai-legal-guide | 未実装 |
| #19 | ai-customer-support-guide | 未実装 |
| #20 | rag-vs-finetuning-guide | 未実装 |
| #21 | vector-db-intro | 未実装 |
| **#24** | **ai-sales-prompt-templates** | **未実装 ← batch3候補#36と競合** |
| #25 | ai-adoption-proposal-template | 未実装 |
| #26 | aio-seo-strategy-guide | 未実装 |
| #27 | ai-training-subsidy-guide | 未実装 |
| #28 | power-automate-ai-guide | 未実装 |
| **#30** | **small-business-ai-checklist** | **未実装 ← batch3候補#37と競合** |

### 1-3. 発見した主要ギャップ（batch3の根拠）

| ギャップカテゴリ | 未カバーKW例 | 優先理由 |
|---|---|---|
| **転職・就活×AI** | 転職 AI 活用 / ChatGPT 職務経歴書 / AI 面接対策 | 転職市場のAI活用ニーズ急増。テンプレ配布でLINE率が非常に高い |
| **ChatGPT実践（上級）** | ChatGPT 使いこなし / ChatGPT 仕事 活用 / GPT 活用法 | 入門記事の発展先が存在しない。全入門記事からのハブ記事になれる |
| **勉強・資格・語学学習×AI** | AI 勉強法 / ChatGPT 勉強 / AI 語学 学習 | 個人学習ニーズはポテンシャル大。学習プランがLINE特典として最適 |
| **フリーランス・副業×AI効率化** | フリーランス AI 活用 / 副業 AI 効率化 / ソロワーカー 生成AI | ai-side-business-guideより実務寄り。提案書・請求書テンプレでLINE率高 |
| **AI×コンテンツ制作（個人向け）** | AI ブログ 書き方 / SNS AI 活用 / YouTube台本 AI | コンテンツ制作者の増加。個人ブロガー・SNS運用者の実践ニーズ |
| **Google AI Studio（入門）** | Google AI Studio 使い方 / Google AI Studio とは | 無料で使えるGemini API環境として急速に普及。指名検索急増中 |
| **Google AI Studio App Build** | Google AI Studio App Build 使い方 / Google AI Studio アプリ作成 | App Build機能は独立KWとして検索需要あり。入門記事と棲み分け可能 |
| **Manus AI** | Manus AI 使い方 / Manus とは / AIエージェント サービス | 2025年話題のAIエージェントサービス。指名検索ピーク前に先行獲得が必要 |
| **Genspark** | Genspark 使い方 / Genspark とは / AI検索 次世代 | Perplexityと並ぶAI検索の新興プレイヤー。perplexity-ai-guideからの内部リンクで流入増 |
| **動画生成AI比較（2026年版）** | 動画生成AI 比較 2026 / Kling 比較 / Runway Sora 違い | 既存ai-video-tool-comparisonより新世代ツール（Kling/Seedance）特化。差別化可能 |
| **Cursor×AIコーディング** | Cursor 使い方 / Cursor とは 非エンジニア / AI IDE 入門 | claude-code-introと並ぶ需要。非エンジニアへの間口が広い |
| **Suno（音楽生成）** | Suno 使い方 / AI 音楽 生成 無料 / Suno プロンプト | BGM制作・コンテンツ制作者向け。創作系コンテンツクラスターの補完 |
| **コンテキストエンジニアリング** | コンテキストエンジニアリング とは / AI 出力 改善 方法 | AI活用の「次の一手」として注目。非エンジニア向けに噛み砕く価値あり |
| **OpenAI Atlas** | OpenAI Atlas とは / AI ブラウザ 使い方 | OpenAIのAIブラウザ。ユーザー注目度高いが認知拡大フェーズ |
| **Anthropic Cowork** | Anthropic Cowork 使い方 / Cowork AI とは | AnthropicのClaude活用チームプロダクト。認知度向上フェーズ |

---

## 2. 優先順位マトリクス

スコアリング基準（各3点満点）：
- **検索潜在量**：ロングテールKWの月間検索見込み（3=高, 2=中, 1=低）
- **LINE親和性**：テンプレ/チェックリスト/診断の自然さ（3=高, 2=中, 1=低）
- **内部リンク効果**：既存記事群との相乗効果（3=高, 2=中, 1=低）
- **実装コスト逆数**：制作工数の逆（3=低コスト, 2=中, 1=高コスト）
- **合計9点以上→S / 7〜8点→A / 5〜6点→B**
- **個人向けフィルタ**：法人特化・エンジニア特化は原則Bランク以下

| # | タイトル（短縮） | 検索潜在量 | LINE親和性 | 内部リンク | 実装コスト逆 | 計 | 優先度 | 備考 |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|---|
| 31 | 転職×AI活用ガイド | 3 | 3 | 2 | 3 | **11** | **S** | |
| 32 | ChatGPT実践テクニック集 | 3 | 3 | 3 | 2 | **11** | **S** | |
| 33 | AI×勉強・資格・語学 | 2 | 3 | 2 | 3 | **10** | **A** | |
| 37 | 個人事業主AIチェックリスト | 2 | 3 | 2 | 3 | **10** | **A** | slug変更推奨 |
| 38 | Google AI Studio完全ガイド | 3 | 2 | 2 | 2 | **9** | **A** | トレンド優先 |
| 39 | Google AI Studio App Build | 2 | 2 | 3 | 2 | **9** | **A** | #38と連携 |
| 41 | Manus AI解説 | 3 | 2 | 1 | 3 | **9** | **A** | トレンド優先 |
| 42 | Genspark解説 | 2 | 2 | 2 | 3 | **9** | **A** | perplexity連携 |
| 34 | フリーランス×AI活用術 | 2 | 3 | 2 | 2 | **9** | **A** | |
| 35 | AI×コンテンツ・SNS制作 | 2 | 3 | 2 | 2 | **9** | **A** | |
| 36 | 営業AIプロンプト20選 | 2 | 3 | 2 | 2 | **9** | **A** | ⚠️batch2 #24 carry-over |
| 43 | 動画生成AI比較2026 | 2 | 2 | 2 | 2 | **8** | **A** | ⚠️既存ai-video-tool-comparisonと差別化必要 |
| 46 | Cursor×AIコーディング入門 | 2 | 2 | 2 | 2 | **8** | **A** | 個人向けフィルタ適用 |
| 40 | Suno音楽生成入門 | 2 | 1 | 1 | 3 | **7** | **B** | 仕事直結弱め |
| 44 | OpenAI Atlas解説 | 2 | 1 | 1 | 3 | **7** | **B** | 認知拡大フェーズ |
| 45 | コンテキストエンジニアリングとは | 1 | 2 | 2 | 2 | **7** | **B** | 技術的・非エンジニア向けに要噛み砕き |
| 47 | Anthropic Cowork活用ガイド | 1 | 2 | 2 | 2 | **7** | **B** | 認知度低・将来性あり |

---

## 3. 記事#31〜47 優先リスト

> ⚠️ **slug競合に関する注意事項**
> - **#36 `ai-sales-prompt-templates`**：batch2 #24 と完全に同じslug。batch2で未実装のため **batch2 carry-over** として扱うことを推奨。batch3の記事番号を割り当てる場合はbatch2 #24と統合管理してください。
> - **#37 `freelancer-ai-checklist`（変更後）**：元の提案slug `small-business-ai-checklist` はbatch2 #30 と衝突。フリーランス・個人事業主特化で内容も異なるため、slugを `freelancer-ai-checklist` に変更します。
> - **#43 `ai-video-generation-comparison`**：既存 `ai-video-tool-comparison` との差別化が必要。「2026年版・生成AI特化（Kling/Runway/Seedance/Sora）」という切り口で明確に分ける。
> - **#38/#39 Google AI Studio 2記事分割**：`google-ai-studio-guide`（入門）→`google-ai-studio-app-build-guide`（App Build特化）は相互内部リンクで連携させる。

| # | slug | タイトル案 | 主KW | サブKW | クラスター | LINE導線 | 優先度 |
|---|---|---|---|---|---|---|---|
| 31 | `ai-job-hunting-guide` | AI×転職完全ガイド｜職務経歴書・面接対策・企業研究の実践テクニック | 転職 AI 活用 / ChatGPT 職務経歴書 | AI 面接 対策 / AI 企業研究 / 転職活動 生成AI | キャリア | 職務経歴書テンプレ（職種3種）＋面接想定QA生成プロンプト | **S** |
| 32 | `chatgpt-advanced-tips` | ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips | ChatGPT 使いこなし / ChatGPT 仕事 活用 | GPT-4o 活用法 / ChatGPT 業務効率化 / プロンプト コツ | ツール発展/ハブ | 業種別プロンプト集（5職種×10パターン）PDF | **S** |
| 33 | `ai-study-learning-guide` | AI×勉強・資格・語学学習完全ガイド｜ChatGPTで最短合格する方法 | AI 勉強 活用 / ChatGPT 勉強法 | AI 語学 学習 / 生成AI 資格勉強 / AI 問題集 作成 | 学習/資格 | 30日学習プランテンプレ（資格・語学・スキルアップ） | **A** |
| 34 | `ai-freelance-work-guide` | フリーランス・副業のAI活用術｜提案・作業・請求まで効率化する実践ガイド | フリーランス AI 活用 / 副業 AI 効率化 | ソロワーカー 生成AI / 個人事業主 AI ツール | 副業/フリーランス | フリーランス向けAIワークフロー図＋提案書テンプレ | **A** |
| 35 | `ai-content-sns-guide` | AI×ブログ・SNS・YouTube台本の作り方｜コンテンツ制作を10倍速にする | AI ブログ 書き方 / SNS AI 活用 | YouTube 台本 AI / Instagram AI 投稿 / ブログ ChatGPT | コンテンツ制作 | SNS投稿テンプレ（Twitter/X・Instagram・LinkedIn別） | **A** |
| 36 | `ai-sales-prompt-templates` | 営業の生成AIプロンプト20選｜提案書・メール・ヒアリング設計まで | 生成AI 営業 活用 / 営業 プロンプト テンプレ | 提案書 AI 作成 / 営業メール AI 生成 | 部門別活用 | テンプレ20選PDF配布 | **A** ⚠️batch2 #24 carry-over |
| 37 | `freelancer-ai-checklist` | 個人事業主・フリーランスのためのAI活用チェックリスト50｜今日からできること | 個人事業主 生成AI / フリーランス AI チェックリスト | 個人事業主 ChatGPT 使い方 / ソロ AI 効率化 | 副業/フリーランス | AI活用チェックリスト50項目（PDF）＋無料相談案内 | **A** |
| 38 | `google-ai-studio-guide` | Google AI Studio使い方完全ガイド｜Geminiモデルをすぐ試せるAI開発環境 | Google AI Studio 使い方 / Google AI Studio とは | Gemini API 始め方 / Google AI Studio 無料 / Google AI Studio 日本語 | 最新ツール | Google AI Studio クイックスタートチェックリスト（10ステップ） | **A** |
| 39 | `google-ai-studio-app-build-guide` | Google AI StudioのApp Build機能とは？アプリ作成の始め方と活用法 | Google AI Studio App Build 使い方 / Google AI Studio アプリ作成 | AI アプリ 作成 ノーコード / Gemini アプリ 開発 / Google AI Studio 機能 | 最新ツール/ノーコード | App Build テンプレアプリ集（業務用3パターン） | **A** |
| 40 | `suno-ai-music-guide` | Sunoで音楽を作る方法入門｜プロンプトから楽曲生成・ビジネス活用まで | Suno 使い方 / AI 音楽 生成 無料 | Suno プロンプト 書き方 / Suno 商用利用 / BGM AI 作成 | コンテンツ制作 | Sunoプロンプトテンプレ集（ジャンル×ムード別） | **B** |
| 41 | `manus-ai-guide` | Manus AIとは？使い方と活用シーン解説｜AIエージェントで仕事を自動化する | Manus AI 使い方 / Manus とは | Manus AI 日本語 / AIエージェント サービス 比較 / Manus vs ChatGPT | 最新ツール/エージェント | Manusで自動化できる業務10選チェックリスト | **A** |
| 42 | `genspark-guide` | Gensparkとは？AI検索の新世代ツールを徹底解説｜Perplexityとの違いと使い分け | Genspark 使い方 / Genspark とは | Genspark Perplexity 違い / AI検索 比較 2026 / Genspark 無料 | 最新ツール/AI検索 | AI検索ツール選び方チャート（用途別4択）PDF | **A** |
| 43 | `ai-video-generation-comparison` | 動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方 | 動画生成AI 比較 / Kling 使い方 | Runway AI 使い方 / Sora 使い方 / Seedance とは / 動画生成 無料 | 動画・マルチモーダル | 動画生成AI選定チャート（用途×予算別）PDF | **A** ⚠️既存ai-video-tool-comparisonと差別化必要 |
| 44 | `openai-atlas-guide` | OpenAI Atlasとは？AIブラウザの使い方と活用シーン完全解説 | OpenAI Atlas とは / AI ブラウザ 使い方 | OpenAI Atlas 日本語 / AI エージェント ブラウザ / Atlas vs Operator | 最新ツール | Atlasで効率化できるWeb作業チェックリスト | **B** |
| 45 | `context-engineering-guide` | コンテキストエンジニアリングとは？AIの出力品質を上げる設計思想を非エンジニアが解説 | コンテキストエンジニアリング とは / AI プロンプト 設計 | Context Engineering 意味 / AI 指示 精度 上げる / プロンプト設計 基礎 | 技術理解/AI基礎 | コンテキスト設計チェックシート（10項目）PDF | **B** |
| 46 | `cursor-ai-coding-guide` | Cursor × AIコーディング入門｜非エンジニアでも使える実践ガイド | Cursor 使い方 / AI コーディング 入門 | Cursor とは 非エンジニア / Cursor vs GitHub Copilot / AI IDE 比較 | AIコーディング | Cursorスタートチェックリスト（7日間）＋プロンプト集 | **A** |
| 47 | `anthropic-cowork-guide` | AnthropicのCoworkとは？使い方と活用シーン完全ガイド | Anthropic Cowork 使い方 / Cowork AI とは | Claude Teams 活用 / Anthropic チーム向け AI / Cowork vs Teams | 最新ツール | Cowork導入チェックリスト（チーム規模別）PDF | **B** |

---

## 4. クラスター設計図（内部リンク構造）

### Cluster H: キャリア・転職クラスター（強化）

```
[ハブ] how-to-learn-generative-ai ── ai-for-non-engineers
         │
         ├── skills-for-ai-era-career ──→ #31 ai-job-hunting-guide（転職・就活の実践へ）
         │                                       └──→ ai-portfolio-guide（batch2 #23）
         │                                       └──→ ai-career-change-cases
         ├── ai-engineer-career-change ──→ #31 ai-job-hunting-guide
         └── reskilling-over-40 ──→ #33 ai-study-learning-guide（学習法へ）
```

**転職クラスターの内部リンク方針：**
- `ai-job-hunting-guide` は career クラスターのCV最終ステップ記事として設計
- `ai-portfolio-guide`（batch2 #23）→ `ai-job-hunting-guide` へ forward リンク追記
- `skills-for-ai-era-career` → `ai-job-hunting-guide` へ導線設置

### Cluster I: ChatGPT発展・ツール習熟クラスター（新規ハブ）

```
[新ハブ] #32 chatgpt-advanced-tips
         │
         ├── ←入口← chatgpt-claude-beginners-guide（基礎完了後の次ステップ）
         ├── ←入口← chatgpt-start-guide-smartphone（スマホユーザーの発展）
         ├── →発展→ #35 ai-content-sns-guide（コンテンツ制作への応用）
         ├── →発展→ #36 ai-sales-prompt-templates（営業特化へ）
         ├── →発展→ prompt-template-for-work（プロンプト詳細へ）
         └── →発展→ #31 ai-job-hunting-guide（転職応用へ）
```

**方針：** `chatgpt-advanced-tips` は既存入門記事からの「次のステップ」として全入門記事にCTAリンクを追加。最高トラフィックの発展ハブ記事になれる。

### Cluster J: 副業・フリーランス・個人実践クラスター（拡張）

```
[既存ハブ] ai-side-business-guide
         │
         ├── #34 ai-freelance-work-guide（フリーランス実践）
         │       └──→ #37 freelancer-ai-checklist（チェックリスト完結）
         ├── #35 ai-content-sns-guide
         │       └──→ #40 suno-ai-music-guide（音楽BGMコンテンツへ）
         └── #33 ai-study-learning-guide ──→ ai-certification-guide（資格取得へ）
                                             └──→ generative-ai-passport-guide（batch2 #22）
```

### Cluster K: コンテンツ制作クラスター（新規）

```
[新ハブ] #35 ai-content-sns-guide
         │
         ├── ←入口← #32 chatgpt-advanced-tips
         ├── →関連→ ai-image-generation-guide（画像生成へ）
         ├── →関連→ ai-presentation-workflow（プレゼン制作へ）
         ├── →関連→ #43 ai-video-generation-comparison（動画生成へ）
         └── →関連→ #40 suno-ai-music-guide（BGM制作へ）
```

### Cluster L: 最新AIツール発見クラスター（新規）

```
[既存ハブ] perplexity-ai-guide (batch2 #15)
         │
         └── #42 genspark-guide（AI検索の次世代ツール）
                 ←相互→ perplexity-ai-guide（使い分けガイドとして相互リンク）

[既存] gemini-beginners-guide
         └──→ #38 google-ai-studio-guide（Gemini API活用の発展）
                      └──→ #39 google-ai-studio-app-build-guide（App Build詳細）
                                    └──→ #45 context-engineering-guide（プロンプト設計深堀り）

[独立] #41 manus-ai-guide ──→ what-is-ai-agent（エージェント基礎へ）
                             └──→ ai-agent-build-guide（自分で作るへ）

[独立] #44 openai-atlas-guide ──→ chatgpt-claude-beginners-guide（OpenAI製品全体へ）
[独立] #47 anthropic-cowork-guide ──→ gpt-vs-claude-comparison（Claude比較へ）
```

**Google AI Studio 2記事の内部リンク設計：**
- `google-ai-studio-guide`（#38）の末尾 → `google-ai-studio-app-build-guide`（#39）へ「さらに詳しく：App Build機能」
- `google-ai-studio-app-build-guide`（#39）の冒頭 → `google-ai-studio-guide`（#38）へ「まず全体像を知る」

### Cluster M: AI動画・マルチモーダルクラスター（強化）

```
[既存] ai-video-tool-comparison ─── multimodal-ai-intro
         │
         └── #43 ai-video-generation-comparison（2026年生成AI特化版）
                 ├── ←差別化明記← ai-video-tool-comparison（旧版・編集ツール中心）
                 └── →関連→ ai-image-generation-guide（静止画生成との比較）
```

**差別化ポイント：**
- `ai-video-tool-comparison`（既存）: Vrew・Captions等の編集・字幕・AI議事録連携ツール全般
- `ai-video-generation-comparison`（新規）: テキスト/画像→動画生成AI（Kling/Runway/Seedance/Sora）の生成能力比較に特化

### Cluster N: AIコーディング入門クラスター（強化）

```
[既存] github-copilot-guide ── claude-code-intro (batch2 #13)
         │
         └── #46 cursor-ai-coding-guide
                 ├── ←入口← ai-coding-for-beginners（初心者からの発展）
                 ├── ←入口← github-copilot-guide（Copilot比較として流入）
                 └── →発展→ claude-code-intro（Claude Code との比較・使い分け）
```

---

## 5. 推奨公開スケジュール（2026年6月〜9月）

### 方針

- **トレンド系ツール（Manus AI・Genspark・Google AI Studio）は6月前半に前倒し**（指名検索のピーク前に先行獲得）
- **S優先記事（転職AI・ChatGPT活用）は6月末〜7月**（夏の転職シーズンに合わせる）
- **Google AI Studio 2記事は連続公開**（#38 を先に出して1〜2週後に #39 でApp Build特化記事）
- **A記事（学習・フリーランス・コンテンツ）は7月〜8月**（夏の副業・スキルアップ需要）
- **B記事（Suno・Atlas・技術系）は9月以降**（制作時間確保＋認知度の醸成を待つ）
- 週1〜2本ペース（月4〜8本）を維持

```
【6月 Week 1〜2：トレンドツール先行獲得】
6/02 (火)  #41 manus-ai-guide              ← 指名検索ピーク前に先行
6/05 (金)  #42 genspark-guide              ← perplexity-ai-guide と相乗効果
6/09 (火)  #38 google-ai-studio-guide      ← Gemini API急成長の波に乗る
6/12 (金)  #39 google-ai-studio-app-build-guide  ← #38の1週後、App Build特化

【6月 Week 3〜4：S記事・転職シーズン前倒し】
6/16 (火)  #31 ai-job-hunting-guide        ← 夏の転職活動シーズン開始前
6/23 (火)  #32 chatgpt-advanced-tips       ← CV最高クラス・ハブ記事として全記事に告知

【7月 Week 1〜2：個人実践系A記事】
7/01 (水)  #33 ai-study-learning-guide     ← 夏の資格・語学学習ニーズ
7/07 (火)  #34 ai-freelance-work-guide
7/10 (金)  #35 ai-content-sns-guide

【7月 Week 3〜4：業務特化×個人事業主】
7/14 (月)  #37 freelancer-ai-checklist     ← チェックリスト系はLINE率高
7/17 (木)  #36 ai-sales-prompt-templates   ← batch2 #24 carry-over確認後に実装

【8月 Week 1〜2：ツール比較×コーディング】
8/04 (火)  #43 ai-video-generation-comparison   ← ai-video-tool-comparisonとの差別化明記
8/07 (金)  #46 cursor-ai-coding-guide

【8月 Week 3〜4：B記事始動】
8/18 (火)  #40 suno-ai-music-guide
8/25 (火)  #47 anthropic-cowork-guide

【9月 Week 1〜2：技術寄り×新興ツール】
9/01 (月)  #45 context-engineering-guide   ← 非エンジニア向けに噛み砕いた構成で
9/08 (月)  #44 openai-atlas-guide          ← 認知度醸成を待ってから公開
```

### 優先度別の柔軟調整ルール

- **S記事は6月末〜7月頭を死守**（転職シーズンとchatgptハブ化の機会損失を防ぐ）
- **トレンド系（Manus/Genspark/Google AI Studio）は±2週の早倒し可**（鮮度が命）
- **Google AI Studio #38/#39 は必ず連続公開**（間隔1〜2週を目安）
- **A記事は±2週の範囲で調整可**
- **B記事は制作リソース次第でSkip→翌期に繰り越し可**

---

## 6. ⚠️ 要確認アクション

### 6-1. slug競合解消（実装前に必ず確認）

| 問題 | 推奨アクション |
|---|---|
| `ai-sales-prompt-templates`（#36）= batch2 #24 の同slug | batch2 #24 と統合管理。batch2の記事担当が実装済みの場合はbatch3から除外。未実装なら本リスト（#36）として一元管理。 |
| `small-business-ai-checklist`（batch2 #30）との内容近接 | batch3は `freelancer-ai-checklist`（#37）に変更。フリーランス・個人事業主の「業務効率化」に特化し差別化する。 |

### 6-2. コンテンツ差別化（公開前に必ず確認）

| 問題 | 推奨差別化ポイント |
|---|---|
| `ai-video-generation-comparison`（#43）vs 既存 `ai-video-tool-comparison` | 既存：Vrew・Captions等のAI編集ツール全般。新規：テキスト→動画生成AI（Kling/Runway/Seedance/Sora）の生成能力比較に特化。記事冒頭に「〇〇との違い」セクションを設け、相互リンクで補完関係を明示する。 |
| `cursor-ai-coding-guide`（#46）vs 既存 `claude-code-intro`・`github-copilot-guide` | Cursor記事は「ノーコード・非エンジニアによるApp作成」寄りの切り口にし、比較セクションを設けて3ツールの相互送客を実現。 |
| `google-ai-studio-guide`（#38）vs `google-ai-studio-app-build-guide`（#39）の棲み分け | #38：Google AI Studioの全体像・モデル試用・プロンプトテスト（入門〜中級）。#39：App Build機能のみに特化、実際にアプリを作る手順（中級〜）。冒頭で「この記事の対象読者」を明記して検索意図を分ける。 |

### 6-3. 個人向けフィルタ再確認

以下はターゲット（仕事でAIを活用したい非エンジニアの会社員・社会人）への直結度が低い記事。
公開優先度を下げるか、切り口を個人ユーザー向けに調整すること：

| # | slug | 懸念点 | 対応策 |
|---|---|---|---|
| 45 | context-engineering-guide | 技術概念。エンジニア向けに傾きやすい | 「ChatGPTに指示を上手く伝える設計術」として非エンジニア向けに書き直す |
| 46 | cursor-ai-coding-guide | コーディングは個人向けだが技術ハードルあり | 「ノーコード感覚で使えるCursor」「非エンジニアがLPを1日で作れた」事例で訴求 |
| 47 | anthropic-cowork-guide | B2B寄り/認知度が低い | チーム利用ではなく個人の「Claude活用術」にフォーカスする切り口も検討 |

---

## 7. LINE CTA 設計ガイド（batch3版）

### 7-1. コンテンツタイプ別の特典マッピング

| コンテンツタイプ | 記事例 | LINE特典の種類 | 特典内容（具体例） | CTA文言例 |
|---|---|---|---|---|
| **転職・就活** | #31 | テンプレ | 職務経歴書テンプレ（職種3種）＋面接QA生成プロンプト | 「【無料】AI活用転職テンプレをLINEで受け取る」 |
| **実践テクニック集** | #32 | プロンプト集 | 業種別プロンプト50選PDF（5職種×10パターン） | 「【無料】プロンプト50選PDFをLINEで受け取る」 |
| **学習・資格** | #33 | 学習プラン | 30日学習プランテンプレ（資格・語学・スキルアップ3パターン） | 「【無料】30日学習プランをLINEで受け取る」 |
| **フリーランス・副業** | #34, #37 | チェックリスト・テンプレ | フリーランス向けAIワークフロー図＋提案書テンプレ | 「【無料】副業AIスターターキットをLINEで受け取る」 |
| **コンテンツ制作** | #35, #40 | テンプレ | SNS投稿テンプレ（Twitter/X・Instagram・LinkedIn別）/ Sunoプロンプト集 | 「【無料】SNS投稿テンプレをLINEで受け取る」 |
| **Google AI Studio** | #38, #39 | チェックリスト | クイックスタートチェックリスト / App Buildテンプレアプリ集 | 「【無料】Google AI StudioスタートガイドをLINEで受け取る」 |
| **最新ツール解説** | #41, #42, #44, #47 | チェックリスト | ツール別クイックスタートチェックリスト | 「【無料】〇〇スタートガイドをLINEで受け取る」 |
| **比較・選定** | #43, #46 | 選定シート | 動画生成AI選定チャート / AIコーディングツール比較表 | 「【無料】比較表＋選び方チェックをLINEで受け取る」 |
| **技術解説（噛み砕き）** | #45 | チェックシート | コンテキスト設計チェックシート（10項目）PDF | 「【無料】出力精度UPチェックシートをLINEで受け取る」 |

### 7-2. S記事の特典制作スケジュール（公開前に完成させる）

| # | 特典名 | フォーマット | 制作工数目安 |
|---|---|---|---|
| #31 | AI転職テンプレ（職種3種＋面接プロンプト集） | Google Docs | 3〜4時間 |
| #32 | 業種別プロンプト50選PDF（5職種×10パターン） | PDF/Notion | 4〜5時間 |

---

## 8. AIOインデックス対応チェックリスト（全記事共通）

Perplexity・ChatGPT検索・Gemini検索でのスニペット採用を高めるための構造要件（batch2と同一）：

| 要件 | 実装方法 | 優先度 |
|---|---|---|
| 記事冒頭に「3行要約」ボックス | 結論→理由→行動の順 | 必須 |
| FAQ構造（H2またはH3に「Q:〜?」形式） | 各記事3問以上 | 必須 |
| 比較表・チェックリストを本文中に1つ以上 | 具体的な数値/項目で構成 | 必須 |
| 「〜とは」「〜の違い」「〜の選び方」を見出しに含める | H2レベルで明示 | 推奨 |
| 著者情報・更新日・一次情報（公式リンク）の明示 | E-E-A-T対応 | 推奨 |
| 構造化データ（FAQPage/HowTo schema） | JSON-LD実装 | 推奨 |

---

## 9. 制作チェックリスト（記事別）

各記事の制作開始前に確認すること：

- [ ] slug競合確認済み（#36・#37 は特に注意）
- [ ] 既存記事との差別化ポイントを明確化（#38/#39 の棲み分け、#43・#46）
- [ ] 個人向けフィルタ通過確認（法人・エンジニア特化になっていないか）
- [ ] #38→#39 の内部リンクが双方向に設置されているか
- [ ] 特典（テンプレ/チェックリスト）を事前に作成した
- [ ] 既存記事との内部リンク設計（上りリンク2本以上・下りリンク1本以上）
- [ ] 主KWをtitle・H1・メタディスクリプションに含めた
- [ ] FAQ構造（最低3問）を組み込んだ
- [ ] 比較表またはチェックリストが1つ以上ある
- [ ] 3行要約ボックスが冒頭にある
- [ ] LINE CTAが記事内に2箇所以上（中間・末尾）
- [ ] 公開日に合わせて特典のLINE配信設定を完了した

---

## 参考：既存58記事との重複確認済みslug一覧

本計画に含まれる記事のうち、以下を除く全slugは既存58記事と重複なし（2026-02-19確認済み）：

```
⚠️ 競合・注意記事：
ai-sales-prompt-templates        → batch2 #24 と同slug（未実装）→ 統合管理推奨
small-business-ai-checklist      → batch2 #30 と同slug（未実装）→ freelancer-ai-checklist に変更

⚠️ コンテンツ近接：
ai-video-generation-comparison   → ai-video-tool-comparison（実装済み）と近接 → 差別化要

✅ 新規slug（重複なし）：
ai-job-hunting-guide, chatgpt-advanced-tips, ai-study-learning-guide,
ai-freelance-work-guide, ai-content-sns-guide, freelancer-ai-checklist,
google-ai-studio-guide, google-ai-studio-app-build-guide,
suno-ai-music-guide, manus-ai-guide, genspark-guide,
ai-video-generation-comparison, openai-atlas-guide, context-engineering-guide,
cursor-ai-coding-guide, anthropic-cowork-guide
```
