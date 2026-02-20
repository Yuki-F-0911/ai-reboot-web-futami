---
title: "リサーチメモ｜ai-agent-landscape-2026"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-agent-landscape-2026.md"
  - "app/academy/blog/ai-agent-landscape-2026/page.tsx"
  - "components/academyLanding/blog/ai-agent-landscape-2026/AiAgentLandscape2026Page.tsx"
status: "draft"
dependencies:
  upstream: []
  downstream:
    - "app/academy/blog/ai-agent-landscape-2026/page.tsx"
    - "components/academyLanding/blog/ai-agent-landscape-2026/AiAgentLandscape2026Page.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチメモ: ai-agent-landscape-2026

## 1. 一次情報（公式）まとめ

確認日: **2026-02-20**

### 1-1. Big Tech系（OpenAI / Google / Anthropic）

1. OpenAI: ChatGPT agent
- URL: `https://help.openai.com/en/articles/11752874-chatgpt-agent`
- 確認点:
  - ChatGPT内の「agent」機能として提供。
  - 利用可能地域は「supported countries and territories」準拠。

2. OpenAI: Atlas announcement
- URL: `https://openai.com/index/introducing-chatgpt-atlas/`
- 確認点:
  - AtlasをAIブラウザとして紹介。
  - プラン別の提供範囲と段階拡大方針。

3. OpenAI: Atlas Release Notes
- URL: `https://help.openai.com/en/articles/11954849-atlas-release-notes`
- 確認点:
  - Atlasの継続アップデート履歴。
  - IMEや利用体験改善の更新ログ。

4. OpenAI: Operator Release Notes
- URL: `https://help.openai.com/en/articles/10421017-operator-release-notes`
- 確認点:
  - Operatorの提供経緯。
  - 後続機能（agent系）への統合進行。

5. Google DeepMind: Project Mariner
- URL: `https://deepmind.google/models/project-mariner/`
- 確認点:
  - Marinerがブラウザ操作型エージェントとして説明される。
  - 研究・段階展開の位置づけ。

6. Google: Gemini Deep Research update
- URL: `https://blog.google/products/gemini/google-gemini-deep-research-updates/`
- 確認点:
  - Deep Researchの多言語展開（45+ languages）と高速化。
  - Gemini製品群での実務向けリサーチ用途。

7. Google One: AI Pro / AI Ultra plans
- URL: `https://one.google.com/about/ai-premium/`
- URL: `https://one.google.com/about/google-ai-plans/`
- 確認点:
  - Deep Research / Mariner / Gemini in Chrome の上位プラン整理。
  - Project Marinerの提供条件（AI Ultra、米国先行記載）。

8. Google Support: Gemini Apps availability
- URL: `https://support.google.com/gemini/answer/14517446`
- 確認点:
  - Geminiアプリの提供国・言語展開。
  - 日本語を含む提供地域の確認。

9. Anthropic: Models and Product Availability
- URL: `https://docs.anthropic.com/en/docs/about-claude/models/all-models`
- 確認点:
  - Claude提供国リスト（Japanを含む）。
  - モデル提供とAPI提供範囲。

10. Anthropic: Computer Use (beta)
- URL: `https://docs.anthropic.com/en/docs/build-with-claude/computer-use`
- 確認点:
  - Computer Useの機能範囲（画面操作の自動化）。
  - 安全対策・評価前提。

### 1-2. 独立系（Manus AI / Genspark）

1. Manus docs: plans
- URL: `https://manus.im/docs/introduction/plans`
- 確認点:
  - Free/有料のプラン体系。
  - クレジット運用モデル。

2. Manus help: pricing
- URL: `https://manus.im/help-center/en/articles/11086234-current-membership-pricing`
- 確認点:
  - 公式料金の公開と更新注意。

3. Manus help: language
- URL: `https://manus.im/help-center/en/articles/11477784-how-do-i-change-manus-language`
- 確認点:
  - 日本語UI切替の公式記載。

4. Manus help: availability
- URL: `https://manus.im/help-center/en/articles/11478381-where-is-manus-available-currently`
- 確認点:
  - 利用可能地域の公開有無。

5. Genspark pricing
- URL: `https://www.genspark.ai/pricing`
- URL: `https://www.genspark.ai/team_pricing`
- 確認点:
  - Free/有料プランとクレジット表記。
  - Teamプランの席単価と上位機能。

6. Genspark Browser
- URL: `https://www.genspark.ai/browser`
- 確認点:
  - ブラウザ型エージェント機能（サイドパネル、スーパーエージェント導線）。

### 1-3. 開発者向け（Claude Code / Copilot Agent / Cursor Agent）

1. Claude Code overview
- URL: `https://docs.anthropic.com/en/docs/claude-code/overview`
- 確認点:
  - CLIエージェントとしての実装支援範囲。

2. Claude pricing
- URL: `https://claude.ai/pricing`
- 確認点:
  - Pro / Max / Team / Enterpriseの料金構成。
  - Claude Code利用との関係。

3. GitHub Copilot coding agent
- URL: `https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-copilot-to-work-on-a-task`
- 確認点:
  - issue起点でのagent作業依頼フロー。
  - PR生成とレビュー連携。

4. GitHub Copilot billing
- URL: `https://docs.github.com/en/copilot/about-github-copilot/plans-for-github-copilot`
- 確認点:
  - Free / Pro / Pro+ / Business / Enterprise の料金。
  - premium request制御。

5. Cursor pricing
- URL: `https://www.cursor.com/pricing`
- 確認点:
  - Pro / Businessの価格レンジ。
  - usageベース課金の説明。

6. Cursor docs: Agent mode / Background Agent
- URL: `https://docs.cursor.com/en/agent/agent-modes`
- URL: `https://docs.cursor.com/en/agent/background-agent`
- 確認点:
  - Agent modeの操作範囲。
  - Background Agentの並列実行前提。

## 2. コミュニティ実声（SNS/コミュニティ）

確認日: **2026-02-20**

1. Reddit（Manus公式コミュニティ）
- URL: `https://www.reddit.com/r/ManusOfficial/comments/1j4gkdz/i_need_your_honest_reviews/`
- 要点:
  - 肯定: タスク完了まで任せられる用途で時間短縮。
  - 懸念: クレジット消費の読みづらさ。

2. Reddit（Manusコスト懸念）
- URL: `https://www.reddit.com/r/ManusOfficial/comments/1kkw65e/the_most_expensive_ai_utility_bill_ive_ever_seen/`
- 要点:
  - 懸念: 想定より費用が上振れしやすいという体験談。
  - 実務示唆: 上限設定と対象業務の限定が必要。

3. Reddit（GitHub Copilot coding agent）
- URL: `https://www.reddit.com/r/githubcopilot/comments/1lexjcv/chat_is_now_copilot_coding_agent_is_available_to/`
- 要点:
  - 肯定: issue/PR連動の開発体験を評価。
  - 懸念: premium request消費とレビュー工数の最適化が課題。

4. Hacker News（Cursor Background Agent）
- URL: `https://news.ycombinator.com/item?id=44975324`
- 要点:
  - 肯定: 並列タスク処理の速度向上。
  - 懸念: 変更差分の精査とガードレールが不可欠。

## 3. Claim別ファクトチェック

| Claim | 検証結果 | 根拠（2ソース以上） |
|---|---|---|
| 2026年は「会話AI」から「実行AI」への移行が進んでいる | Confirmed | OpenAI ChatGPT agent / Anthropic Computer Use / Cursor Agent docs |
| OperatorとAtlasは別物だが、実務では「自律度」と「ブラウザ統合度」で使い分ける | Confirmed | OpenAI Operator release notes / OpenAI Atlas announcement |
| Google Deep Researchはグローバル拡大が進み、日本語運用が現実的 | Confirmed | Google blog（45+ languages） / Google Support（Gemini availability） |
| Project Marinerは一般提供より限定提供の性格が強い | Confirmed | DeepMind Mariner page / Google AI plans（AI Ultra, US記載） |
| Anthropic Computer Useは開発者向けの実行自動化機能として利用可能 | Confirmed | Anthropic Computer Use docs / Anthropic model availability |
| Manus AIはクレジット課金で、料金運用設計が導入成否を左右する | Confirmed | Manus plans / Manus pricing / Reddit実声 |
| Gensparkは検索/ブラウザ/エージェントを一体化した設計で提供される | Confirmed | Genspark browser / pricing pages |
| Claude Code・Copilot Agent・Cursor Agentは「実装補助」から「タスク実行」へ共通進化している | Confirmed | Claude Code overview / GitHub Copilot agent docs / Cursor agent docs |

## 4. 日本提供状況（2026-02時点）メモ

- OpenAI系:
  - ChatGPT agent: supported countries枠での提供（日本はChatGPT提供国に含まれる運用）。
  - Atlas: グローバル提供案内あり。プラン別で機能差・段階展開。
- Google系:
  - Deep Research: 多言語展開済み。
  - Project Mariner: 米国先行記載が強く、日本での全面展開は要継続確認。
- Anthropic系:
  - Claude提供国にJapan記載。
  - Computer Useはbeta機能で、本番導入は安全設計前提。
- Manus / Genspark:
  - 日本語運用の導線は確認できる。
  - 「日本市場での法人向け正式販売条件」はページにより粒度差があるため、契約前に個別確認が必要。

## 5. 変動情報と未確定事項

- 価格（特にクレジット課金系）: 変動が速いため、本文比較表は必ず確認日を添える。
- OpenAI Atlasの提供条件: プラン・地域・機能差が継続更新される。
- Project Marinerの日本提供範囲:
  - `[要確認: 2026年2月時点で日本向け正式一般提供の明示アナウンス有無]`
- Gensparkの日本法人契約要件:
  - `[要確認: 日本法人向けSLA/請求通貨/契約条項の公開有無]`

## 6. 執筆時の実装方針メモ

- 比較表は「対応タスク / 料金 / 日本語対応 / 自律度」の4軸で統一。
- 用途別おすすめは「ブラウザ自動化 / リサーチ / コーディング / 業務フロー」4用途。
- セキュリティ節では、権限分離・承認フロー・監査ログ・コスト上限を必須項目にする。
- 記事末尾CTAは、アカデミーの3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間学習）のみで構成し、特定ツール習得訴求は避ける。
