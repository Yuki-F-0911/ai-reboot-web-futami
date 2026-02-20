---
title: "記事リサーチ｜openai-operator-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-openai-operator-guide.md"
  - "app/academy/blog/openai-operator-guide/page.tsx"
  - "components/academyLanding/blog/openai-operator-guide/OpenaiOperatorGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/openai-operator-guide/page.tsx"
    - "components/academyLanding/blog/openai-operator-guide/OpenaiOperatorGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: openai-operator-guide

## 0. 調査条件
- 対象テーマ: `OpenAI Operator 使い方 / ChatGPT Operator ブラウザ自動化 / OpenAI エージェント / ChatGPT Pro 自動操作`
- 確認日: `2026-02-20`
- 目的: 中級者・ビジネスパーソンが、反復業務を「どこまで任せるか」を判断できる実務ガイドにする
- 方針: 仕様・提供範囲・料金はOpenAI/Anthropic/Googleの一次情報を優先し、コミュニティ情報は補助根拠として扱う

## 1. 一次情報（公式）ソース
1. [OpenAI: Introducing Operator](https://openai.com/index/introducing-operator/)  
   - 2025-01-23公開。Operatorの基本機能、協業サイト、2025-02-21の提供地域拡大（日本を含む）を確認
2. [OpenAI Help: ChatGPT agent FAQ](https://help.openai.com/en/articles/11752874-chatgpt-agent-faq)  
   - `agent mode` の現在仕様、監視モード、Take over mode、サイト制限、Operator統合状況を確認
3. [OpenAI: Introducing Atlas](https://openai.com/index/introducing-atlas/)  
   - Atlasの製品定義、ブラウザ統合UX、Atlas内agent modeの位置づけを確認
4. [OpenAI: Introducing ChatGPT Pro](https://openai.com/index/introducing-chatgpt-pro/)  
   - ChatGPT Proが月額200ドルであることを確認
5. [OpenAI Help: ChatGPT Release Notes（2025-07-17/08-08 agent rollout）](https://help.openai.com/pt-pt/articles/6825453-chatgpt-release-notes)  
   - Operator研究プレビューのagent mode統合、Plus/Business/Edu等への拡大タイミングを確認
6. [Anthropic Docs: Computer use (beta)](https://docs.anthropic.com/en/docs/build-with-claude/computer-use)  
   - Computer Useがベータ機能であること、APIおよび主要クラウド経由の提供を確認
7. [Google DeepMind: Project Mariner for developers](https://deepmind.google/models/project-mariner/)  
   - Marinerの提供状況（米国AI Ultra向け）、今後の拡張方針を確認
8. [Google: Introducing Project Mariner](https://blog.google/technology/google-deepmind/google-project-mariner/)  
   - Marinerの基本思想（ブラウザ操作を自律実行）、人間による最終確認前提を確認

## 2. SNS・コミュニティ実声（補助根拠）
1. [OpenAI Community: Agent mode has replaced Operator](https://community.openai.com/t/agent-mode-has-replaced-operator/1309018)  
   - 実利用者が「Operator専用UIからagent modeへ移行した」ことを体験ベースで共有
2. [Hacker News: Introducing Operator](https://news.ycombinator.com/item?id=42827187)  
   - 早期利用者の評価として「有効な業務」と「失敗しやすい業務」が分かれる点を確認
3. [Reddit r/OpenAI: Operator is available in my region now](https://www.reddit.com/r/OpenAI/comments/1iy0f6n/operator_is_available_in_my_region_now/)  
   - 地域展開後の導入体験（期待値と実運用のギャップ）を確認
4. [Reddit r/OpenAI: ChatGPT Agent the Good and Bad](https://www.reddit.com/r/OpenAI/comments/1m95jv2/chatgpt_agent_the_good_and_bad/)  
   - 統合後のagent modeで、良い用途と監視必須用途の差が大きいという声を確認

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| Operatorは2025-01-23に研究プレビューとして公開された | Introducing Operator | ChatGPT Release Notes（agent統合前提記述） | 採用 |
| 日本を含む提供拡大は2025-02-21時点でProユーザー向けに実施された | Introducing Operatorの2025-02-21更新 | Reddit地域展開報告（補助） | 採用 |
| 当初はChatGPT Pro前提だったが、2025-07-17以降はagent mode統合でPlus等へ拡大した | Introducing Operator（Pro前提） | ChatGPT Release Notes（2025-07-17/08-08） | 採用 |
| ChatGPT Proの料金は月額200ドル | Introducing ChatGPT Pro | 各種プラン比較記事（社内既存） | 採用 |
| 2026-02時点の実運用は「agent mode」中心で、operator.chatgpt.com は利用不可 | ChatGPT agent FAQ | OpenAI Community移行報告（補助） | 採用 |
| 対応サイトは広いが、一部サイトはブロックされ、メール/金融系などは監視モード対象になる | ChatGPT agent FAQ（Website access restrictions / Watch mode） | Introducing Operator（高リスク行動の制御方針） | 採用 |
| AtlasはAIブラウザ製品であり、Operator/agentは自律実行機能で役割が異なる | Introducing Atlas | ChatGPT agent FAQ / Introducing Operator | 採用 |
| Anthropic Computer Useはベータ、Google Marinerは米国中心提供で、人間確認を残す設計が共通する | Anthropic Docs | Google Mariner公式情報 | 採用 |

## 4. 記事反映方針
- 冒頭で `openai-atlas-guide` への内部リンクを置き、「Atlas=ブラウザ体験」「Operator/agent=タスク実行」の違いを先に定義する
- 「日本での利用開始方法」は時系列で整理する
  - 2025-01-23: Operator開始（米国Pro）
  - 2025-02-21: 日本含む地域へ拡大（Pro）
  - 2025-07-17以降: ChatGPT `agent mode` へ統合
- できることは「フォーム入力・予約・EC操作・データ収集」を業務タスクに翻訳して提示する
- できないこと/注意点は「サイト制限」「監視モード」「Take over mode」「パスワード保護」に分離して明文化する
- 比較セクションは下記3軸で統一する
  - 実行方式（ブラウザ操作の主体）
  - 安全設計（人間の確認ポイント）
  - 提供チャネル（一般提供か、API/限定提供か）
- 内部リンク導線（3本以上）
  - `/academy/blog/openai-atlas-guide`
  - `/academy/blog/what-is-ai-agent`
  - `/academy/blog/ai-agent-operations-guide`
  - `/academy/blog/chatgpt-plan-comparison`

## 5. 変動情報・不確実情報
- 提供プラン、対象地域、利用上限は更新頻度が高いため、本文に確認日 `2026-02-20` を明記
- 対応/非対応サイトの完全リストは公開されていないため、「公開されている制約カテゴリ」を中心に記述
- Atlasのagent mode展開状況はベータ更新で変わるため、断定ではなく日付付きで記述
