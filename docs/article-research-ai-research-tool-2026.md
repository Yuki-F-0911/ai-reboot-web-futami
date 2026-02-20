---
title: "記事リサーチ｜ai-research-tool-2026"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-research-tool-2026.md"
  - "app/academy/blog/ai-research-tool-2026/page.tsx"
  - "components/academyLanding/blog/ai-research-tool-2026/AiResearchTool2026Page.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/ai-research-tool-2026/page.tsx"
    - "components/academyLanding/blog/ai-research-tool-2026/AiResearchTool2026Page.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-research-tool-2026

## 0. 調査条件
- 対象テーマ: `AI情報収集 ツール 比較 2026`
- 主KW: `AI情報収集 ツール 比較 2026`
- サブKW:
  - `Perplexity vs Deep Research`
  - `Genspark AI`
  - `リサーチ AI おすすめ`
- 確認日: `2026-02-20`
- ターゲット: 中級者・研究者・マーケター（AIで情報収集・調査を効率化したい人）
- 方針:
  - 料金・プラン・提供可否は一次情報（公式ヘルプ/公式価格ページ）優先
  - 変動情報は確認日を明記し、確認不能項目は `[要確認: ...]` で残す
  - SNS/コミュニティ声は補助根拠（肯定/懸念を混在）

## 1. 一次情報（公式）ソース
1. [OpenAI Help: What is included in ChatGPT plans?](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus)
   - Plus/Pro/Businessの料金と主機能、Deep Research利用可否の記載を確認（確認日: 2026-02-20）。
2. [OpenAI Help: Connectors in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt)
   - Plus/Pro/Business/Enterprise/EduでCustom connectors（MCP）を利用可能と明記。
3. [OpenAI Help: ChatGPT usage limits（Release notes）](https://help.openai.com/en/articles/6825453-chatgpt-usage-limits)
   - `2026-02-10` のDeep Research更新（MCP接続、連携アプリ、対象サイト指定）を確認。
4. [OpenAI: ChatGPT pricing](https://chatgpt.com/pricing)
   - Deep research access が有料系プラン機能に含まれることを確認。
5. [Perplexity Pricing](https://www.perplexity.ai/pricing)
   - Free/Pro/Max/Enterpriseの価格帯を確認（確認日: 2026-02-20）。
6. [Perplexity Help: What does Perplexity Pro offer?](https://www.perplexity.ai/help-center/en/articles/10354919-what-does-perplexity-pro-offer)
   - Proの上限（Pro Searches/Research Queries）と主機能を確認。
7. [Perplexity Changelog: Research in Tasks and Search Results](https://www.perplexity.ai/changelog/2026-02-13-research-in-tasks-and-search-results)
   - 2026-02-13時点の最新機能（Tasksと検索結果への統合）を確認。
8. [Perplexity Changelog: Deep Research with Opus 4.6](https://www.perplexity.ai/changelog/2026-02-06-deep-research-with-opus-4-6)
   - 2026-02-06のDeep Researchモデル更新を確認。
9. [Genspark Team Pricing](https://www.genspark.ai/team_pricing)
   - Team/Enterprise向け価格（$30/user monthly, $24/user annual）を確認。
10. [Genspark Terms](https://www.genspark.ai/terms)
   - 無料利用と有料サービス（機能制限・日次制限・追加機能）に関する公式規約を確認。
11. [Genspark Help Center: Paid Membership, Subscription and Refund Policy](https://www.genspark.ai/helpcenter/terms-and-policies/paid-subscription)
   - 有料会員機能（追加月次クレジット、無制限チャット、機能アクセス）を確認。
12. [MainFunc Blog: Introducing Genspark](https://mainfunc.ai/blog/introducing-genspark)
   - Gensparkの提供開始時期（2024-06-17）と「Sparkpages」概念を確認。
13. [MainFunc Blog: Genspark's New AI Workspace 2.0](https://mainfunc.ai/blog/gensparks-new-ai-workspace-2-0)
   - Sparkpages拡張、Mixture-of-Agents、Call For Me等の機能更新を確認。

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit r/perplexity_ai: Is Pro worth it?](https://www.reddit.com/r/perplexity_ai/comments/1jh8kt8/is_pro_worth_it/)
   - Pro継続可否の論点（Research用途では価値、軽用途では過剰）が分かれる。
2. [Reddit r/perplexity_ai: Pro search limit lower?](https://www.reddit.com/r/perplexity_ai/comments/1hf95t8/pro_search_limit_lower/)
   - 上限変更の認識差があり、公式ヘルプ確認が必要という文脈。
3. [Reddit r/perplexity_ai: New user asking about free tier](https://www.reddit.com/r/perplexity_ai/comments/1ik1vne/new_user_asking_about_free_tier/)
   - 無料枠の実用性は用途依存との声（速報用途は足りるが、深掘りは不足）。
4. [Reddit r/OpenAI: ChatGPT Deep Research is a game changer for LLM competition](https://www.reddit.com/r/OpenAI/comments/1j7i6md/chatgpt_deep_research_is_a_game_changer_for/)
   - 調査品質に肯定的な評価。
5. [Reddit r/ChatGPT: The new Deep Research update is pretty underwhelming](https://www.reddit.com/r/ChatGPT/comments/1j7h2qa/the_new_deep_research_update_is_pretty/)
   - 速度や品質ムラへの懸念。
6. [Reddit r/perplexity_ai: Thoughts on using Genspark?](https://www.reddit.com/r/perplexity_ai/comments/1ikyz81/thoughts_on_using_genspark/)
   - Gensparkの初動速度評価と、根拠確認の必要性に関する議論。

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| ChatGPT Deep Researchは有料プランで利用でき、MCP連携の案内がある | OpenAI Help: ChatGPT plans | OpenAI Help: Connectors in ChatGPT | 採用 |
| 2026-02-10にDeep ResearchでMCP/連携アプリ/対象サイト指定の更新があった | OpenAI Help: usage limits release notes | OpenAI pricing（Deep research access記載） | 採用 |
| PerplexityはFree/Pro/Max/Enterpriseの複数プランを提供している | Perplexity Pricing | Perplexity Pro Help | 採用 |
| Perplexity Proの2026年2月最新機能としてResearchの統合とOpus 4.6対応がある | Perplexity Changelog 2026-02-13 | Perplexity Changelog 2026-02-06 | 採用 |
| Gensparkは正式に提供中で、Sparkpagesを中心とする情報統合体験を拡張している | MainFunc: Introducing Genspark | MainFunc: Workspace 2.0 | 採用 |
| Gensparkの個人向け価格は公開ページで機械取得が不安定で、Team価格は公式で確認できる | Genspark Team Pricing | Genspark Terms / Paid Subscription | 採用（個人価格は要確認） |

## 4. 2026年2月時点の料金・プラン整理（記事反映用）
- 確認日: `2026-02-20`

### ChatGPT（OpenAI）
- Free: 無料
- Plus: `$20/month`
- Pro: `$200/month`
- Business: `$25/ユーザー/月（年契約）` または `$30/ユーザー/月（月契約）`
- Enterprise: 営業問い合わせ
- Deep Research: 有料系プランで提供（詳細上限はusage側で要確認）

### Perplexity
- Free: 無料
- Pro: `$20/month`（年契約で `$16.67/month`）
- Max: `$40/month`（年契約で `$33.33/month`）
- Enterprise Pro: `$40/seat/month`（年契約）または `$400/seat/year`（月契約で `$50`）
- Enterprise（カスタム）: `$40〜325/seat/month`（機能構成依存）

### Genspark
- Team: `$30/user/month`（月契約）
- Team（年契約）: `$24/user/month`
- Enterprise: 営業問い合わせ
- 個人向け無料/有料:
  - 規約・ヘルプでは無料利用と有料会員を確認
  - ただし個人向け価格テーブルの機械取得は不安定
  - `[要確認: 個人向け Plus/Pro の月額価格と最新クレジット上限（公式UIログイン状態で再確認）]`

## 5. Genspark正式提供状況と機能（記事反映用）
- 正式提供: 2024-06-17に紹介記事公開（MainFunc公式）
- 主機能（確認可能範囲）
  - Sparkpages（情報統合ページの自動生成）
  - Super Agent / Mixture-of-Agents（複数モデルの分担推論）
  - Call For Me（電話代行系ユースケース）
  - 旅行計画文脈の支援（公式紹介例）
- 注記:
  - プロダクト更新が速いため、機能名の変更可能性あり（確認日付を本文明記）

## 6. Perplexity Pro最新機能（2026年2月）
- 2026-02-06: Deep Researchで`Opus 4.6`対応
- 2026-02-13: Research in Tasks and Search Results（Researchの埋め込み運用）
- Pro向け利用上限（公式ヘルプ記載）
  - Pro Searches: 1日300回超
  - Research Queries: 1日500回超
  - Threads with file upload: 1日50件まで

## 7. 本文反映方針
- 全体像は「リアルタイム検索型 / 深掘り型 / 専門特化型（旅行・領域特化）」の3類型で提示
- 主要3ツール比較は、速度だけでなく「根拠表示・接続性・レポート再利用性」を軸に記述
- 用途別チャートは以下5用途を必須:
  - 速報
  - 深掘り
  - 競合調査
  - 学術
  - 旅行計画
- 料金比較は確認日つきで提示し、Genspark個人価格の不確実性を `[要確認]` で残す
- 注意点は「ハルシネーション / 情報鮮度 / 引用精度」の3カテゴリで手順化

## 8. 変動情報・不確実情報
- プラン上限、連携対象、モデル提供は頻繁に更新される
- Perplexityの上限・機能追加はChangelogで都度変化
- Gensparkの個人向けプラン価格は公開取得性に課題あり
- 記事本文には必ず `確認日: 2026-02-20` を明記する
