---
title: "記事リサーチ｜claude-beginner-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-claude-beginner-guide.md"
  - "app/academy/blog/claude-beginner-guide/page.tsx"
  - "components/academyLanding/blog/claude-beginner-guide/ClaudeBeginnerGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "docs/article-draft-claude-beginner-guide.md"
    - "app/academy/blog/claude-beginner-guide/page.tsx"
    - "components/academyLanding/blog/claude-beginner-guide/ClaudeBeginnerGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: claude-beginner-guide

## 0. 調査条件
- 対象テーマ: `Claude 使い方 入門`
- 主KW: `Claude 使い方 入門`
- サブKW:
  - `Claude 3.7 使い方`
  - `Anthropic Claude 2026`
  - `Claude 登録方法`
  - `Claude 日本語`
- ターゲット: 個人（AI初心者・非エンジニア）
- 確認日: `2026-02-20`
- 記事目的:
  - Claudeの基本像とChatGPTとの違いを、初心者が判断できる粒度で整理する
  - 登録から初回チャットまでを迷わず進められる手順にする
  - 無料/有料の違い、利用制限、日本語利用時の注意点を確認日付きで示す

## 1. 一次情報（公式）ソース
1. [What is Claude?](https://support.anthropic.com/en/articles/7989434-what-is-claude)  
   - Claudeの定義（Anthropic製LLM、helpful/honest/harmless）
2. [Getting started with Claude](https://support.anthropic.com/en/articles/8114491-how-do-i-get-started-with-claude-ai)  
   - 利用プラットフォーム（Web/Desktop/Mobile）、年齢要件、無料プランの制限の基本説明
3. [Where can I access Claude?](https://support.anthropic.com/en/articles/8461763-where-can-i-access-claude)  
   - 利用可能地域（日本を含む）
4. [Using Claude in Your Preferred Language](https://support.anthropic.com/en/articles/10769299-using-claude-in-your-preferred-language)  
   - Claude UIの多言語対応（日本語を含む、beta表記）
5. [How do I increase my usage limits?](https://support.anthropic.com/en/articles/8241175-how-do-i-increase-my-usage-limits)  
   - 無料プランの利用上限は需要に応じて変動、5時間ごとリセット
6. [About Free Claude Usage](https://support.anthropic.com/en/articles/8602283-about-free-claude-usage)  
   - 無料利用の制限はセッションベースで変動、固定回数の明示なし
7. [What is the Pro plan?](https://support.anthropic.com/en/articles/8325606-what-is-claude-pro)  
   - Pro特典（5x利用、優先アクセス、新機能先行、モデルセレクター、Projects/Knowledge bases）
8. [Does Claude Pro have any usage limits?](https://support.anthropic.com/en/articles/8325612-does-the-pro-plan-have-any-usage-limits)  
   - Proは「少なくとも45メッセージ/5時間（短い会話の場合）」目安
9. [Introducing Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)  
   - 2026-02-17公開、Free/ProでSonnet 4.6がデフォルト化
10. [Introducing Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)  
    - 2026-02-05公開、Opus 4.6提供開始（claude.ai / API）
11. [Models overview](https://docs.anthropic.com/en/docs/about-claude/models/all-models)  
    - 3.7/4系のモデル系譜確認（3.7は現行ラインの一部だが最新世代ではない）

## 2. SNS・コミュニティ実声（補助根拠）
1. [r/ClaudeAI: Impressed with Claude Research!](https://www.reddit.com/r/ClaudeAI/comments/1l3luxj)  
   - 肯定: 深い調査・引用付き出力の満足度が高いという実声
2. [r/ClaudeAI: Is Claude actually better than ChatGPT for just talking?](https://www.reddit.com/r/ClaudeAI/comments/1r5a44s/is_claude_actually_better_than_chatgpt_for_just/)  
   - 肯定+懸念: 会話品質は高評価、同時に利用上限への不満が混在
3. [r/ClaudeAI: Pro plan is basically unusable](https://www.reddit.com/r/ClaudeAI/comments/1q9va21/pro_plan_is_basically_unusable/)  
   - 懸念: Pro利用制限の体感が厳しいという不満（文脈サイズ依存）
4. [r/ClaudeAI: Phone Verification Issues - Anyone Else?](https://www.reddit.com/r/ClaudeAI/comments/1bq06yz)  
   - つまずき: 登録時の電話認証で詰まる報告（ブラウザ切替で解消例あり）

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 2026年時点の最新ラインとして、Sonnet 4.6とOpus 4.6が提供されている | Sonnet 4.6発表（2026-02-17） | Opus 4.6発表（2026-02-05） | 採用 |
| Free/Proユーザーの既定モデルはSonnet 4.6 | Sonnet 4.6発表記事（「Free/Proのデフォルト」） | Getting started（無料はモデル選択不可、有料は選択可） | 採用 |
| Claude 3.7 Sonnetは現行運用で参照されるが、2026年の最新モデルそのものではない | Models overview（3.7と4系の並列記載） | Sonnet 4.6発表（最新Sonnet明記） | 採用 |
| 無料プランのメッセージ制限は固定「○件/日」ではなく、需要や会話条件で変動し、5時間ごとのセッション制限が基準 | How do I increase usage limits | About Free Claude Usage | 採用 |
| Proは月額20ドルで、無料比5x以上利用・モデルセレクター等を利用可能 | What is the Pro plan | Does Pro have usage limits（45/5h目安） | 採用 |
| 日本語UIは対応済み（beta表記）で、会話自体は任意言語で可能 | Using Claude in Your Preferred Language | Getting started（言語運用の説明） | 採用 |
| Claude利用には対応地域・年齢要件がある | Where can I access Claude | Getting started（18歳以上） | 採用 |

## 4. 記事への反映方針
- 冒頭で「確認日: 2026-02-20」を固定表示し、変動情報の鮮度を明示
- `Claude 3.7` は検索流入を意識して触れるが、本文では `Sonnet 4.6/Opus 4.6` が最新である点を先に記載
- 無料プラン制限は「固定件数ではなく変動」で説明し、誤解しやすい「1日○件」を断定しない
- 登録手順はスクリーンショット代替として「画面で何を押すか」を番号手順で記述
- ChatGPT比較は機能断定を避け、初心者が判断しやすい観点（用途・制限・操作性）で整理
- `claude-code-intro` 記事との差分を明示し、今回は一般ユーザー向け入門に限定

## 5. 変動情報・注意点
- モデル提供状況（デフォルトモデル含む）は変更されうるため、確認日を必ず表示
- 使用制限（無料/Pro）は会話長・添付ファイル・需要で変動し、体感差が大きい
- 各言語対応はbetaであり、UI翻訳や固有表現の精度差が残る可能性がある
- 地域制限・電話認証の挙動はアカウント条件や時期で差が出ることがある

## 6. 未確定・要確認メモ
- `[要確認: 無料プランの「daily」表現]`  
  ヘルプセンターの言語版/記事版によって「daily limit」表記が残るページがある一方、英語記事は「session-based (5 hours reset)」表現。本文では英語最新版に寄せつつ、固定日次件数は断定しない。

