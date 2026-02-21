---
title: "高流入記事CVR計測シート"
version: "1.0"
last_updated: "2026-02-21"
author: "さかもと"
status: "draft"
---

# 高流入記事CVR計測シート（batch10 Sprint 10-1）

## 1. 概要

- 目的: 高流入記事のCTAクリック率・LINE CVRを週次で計測し、改善を継続する
- 計測ツール: GA4（CTAクリックイベント）+ LINEバックエンド（`src=blog&slug=...` の登録数）
- 更新頻度: 毎週月曜日
- 対象: `app/academy/blog/page.tsx` の `blogPosts` から優先条件で選定した20記事
- CVR定義: `週次LINE登録 / 週次CTAクリック * 100`

## 2. 対象記事20本リスト（ひな形）

- 選定ルール: `comparison / vs` を最優先、次に `subsidy / certification / benefit`、次に `guide` を含むslug
- CTA設置数の算出: `LineCtaBox` + `MidArticleCtaBox` の実装個数（`components/academyLanding/blog/{slug}/*.tsx`）

| # | slug | 記事タイトル | カテゴリ | CTA設置数 | 週次CTAクリック | 週次LINE登録 | CVR% | 改善アクション |
|---|---|---|---|---|---|---|---|---|
| 1 | n8n-vs-make-comparison | n8nとMake比較ガイド｜2ツール深掘りで選ぶワークフロー自動化【2026年版】 | 比較系 | 2 |  |  |  |  |
| 2 | ai-coding-tool-comparison-2026 | AIコーディングツール比較 2026年版｜Cursor・Claude Code・GitHub Copilotの選び方 | 比較系 | 3 |  |  |  |  |
| 3 | gpt-vs-claude-2026 | ChatGPTとClaude比較 2026年版｜GPT-5.2 vs Claude 3.7 Sonnetの選び方 | 比較系 | 3 |  |  |  |  |
| 4 | workflow-automation-comparison | ワークフロー自動化ツール比較｜Make・Zapier・n8nを徹底比較【2026年版】 | 比較系 | 2 |  |  |  |  |
| 5 | rag-vs-finetuning-guide | RAGとファインチューニング、どちらを選ぶ？社内データ活用の判断フレーム | 比較系 | 3 |  |  |  |  |
| 6 | g-e-certification-comparison | G検定とE検定の違いを徹底比較｜難易度・費用・向いている人 | 比較系 | 1 |  |  |  |  |
| 7 | chatgpt-plan-comparison | ChatGPT無料・Plus・Proの違いを比較｜2026年版の料金と選び方 | 比較系 | 3 |  |  |  |  |
| 8 | gpt-vs-claude-comparison | GPT-4とClaude徹底比較｜性能・得意分野・料金の違いを解説【2026年版】 | 比較系 | 0 |  |  |  |  |
| 9 | ai-video-tool-comparison | AI動画生成ツールおすすめ比較｜用途別の選び方と始め方 | 比較系 | 0 |  |  |  |  |
| 10 | ai-video-generation-comparison | 動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方 | 比較系 | 3 |  |  |  |  |
| 11 | ai-meeting-tools-comparison | AI議事録ツール比較2026｜Fireflies・Otter・Notion AIの選び方と会議効率化 | 比較系 | 0 |  |  |  |  |
| 12 | dx-reskilling-subsidy-guide | DXリスキリング助成金ガイド｜対象条件・申請手順・併用可否を解説 | 補助金・資格系 | 1 |  |  |  |  |
| 13 | ai-certification-guide | AI資格おすすめ一覧｜難易度・費用を比較 | 補助金・資格系 | 1 |  |  |  |  |
| 14 | ai-training-subsidy-guide | 生成AI研修に助成金を使う手順｜対象条件・落とし穴・申請フロー完全版 | 補助金・資格系 | 0 |  |  |  |  |
| 15 | education-training-benefit-ai | 教育訓練給付金でAI講座を受講するガイド | 補助金・資格系 | 1 |  |  |  |  |
| 16 | github-copilot-agent-hq-guide | GitHub Copilot Agent HQ使い方ガイド｜Issue→PR自動化とClaude Code使い分け【2026年版】 | ツール使い方系 | 2 |  |  |  |  |
| 17 | openai-codex-app-guide | Codex App使い方ガイド｜macOS版の始め方とSpark/Classic比較【2026年版】 | ツール使い方系 | 2 |  |  |  |  |
| 18 | ai-pc-copilot-plus-guide | Copilot+ PC活用ガイド｜NPU 40TOPS基準と購入前チェック5点【2026年版】 | ツール使い方系 | 2 |  |  |  |  |
| 19 | gpt-5-3-guide | GPT-5.3 使い方ガイド｜Codex・Spark連携・料金・Claude Opus 4.6比較【2026年2月版】 | ツール使い方系 | 3 |  |  |  |  |
| 20 | claude-code-beginners-guide | Claude Code入門｜インストール・基本コマンド・Vibe Coding活用まで【2026年版】 | ツール使い方系 | 3 |  |  |  |  |

## 3. 計測設定メモ

### 3-1. GA4でのCTAクリックイベント設定（概要）

- イベント名は `blog_cta_click` を推奨
- 付与パラメータ: `src=blog`、`slug`、`cta_type`（line/mid など）、`placement`（first_view/mid/final など）
- 週次集計は「前週 月曜〜日曜」で固定し、記事別（slug別）のクリック数を記録

### 3-2. LINEバックエンドで `src=blog` を確認する方法（概要）

- 友だち登録/登録完了ログから `src=blog` かつ `slug` パラメータ付き流入を抽出
- 週次で `slug` ごとの登録数を集計し、上表の「週次LINE登録」に転記
- `slug` が欠損する流入は「その他」に別集計し、計測漏れ有無を確認

### 3-3. 改善判断基準（初期しきい値）

- `CVR < 2.0%`: 改善対象（CTA文言、CTA位置、記事導線を優先見直し）
- `2.0% <= CVR < 4.0%`: 要観察（見出し直下CTAや中段CTAのAB検討）
- `CVR >= 4.0%`: 維持運用（流入増加施策を優先）

## 4. 週次レビュー記録（テンプレート）

| 週 | 上位5記事 | 改善施策 | 結果 |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## 更新履歴

| バージョン | 更新日 | 更新者 | 更新内容 | 影響ドキュメント |
|---|---|---|---|---|
| 1.0 | 2026-02-21 | さかもと | 初版作成（高流入20記事CVR計測ひな形） | docs/05-operations/article-cvr-tracking.md |
