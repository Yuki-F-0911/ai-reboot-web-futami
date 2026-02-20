---
title: "記事リサーチ｜chatgpt-gpt5-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-chatgpt-gpt5-guide.md"
  - "app/academy/blog/chatgpt-gpt5-guide/page.tsx"
  - "components/academyLanding/blog/chatgpt-gpt5-guide/ChatgptGpt5GuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/chatgpt-gpt5-guide/page.tsx"
    - "components/academyLanding/blog/chatgpt-gpt5-guide/ChatgptGpt5GuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: chatgpt-gpt5-guide

## 0. 調査条件
- 対象テーマ: `ChatGPT GPT-5 違い / GPT-5 使い方 / ChatGPT モデル 選び方`
- 確認日: `2026-02-20`
- 目的: ChatGPT利用者が「GPT-5」と「GPT-5.2」の現状、Auto/Thinkingの使い分け、APIとの違いを誤解なく判断できるようにする
- 方針: モデル提供状況・制限・課金は一次情報（OpenAI Help / OpenAI Docs）を優先。SNS実声は補助根拠として扱う

## 1. 一次情報（公式）ソース
1. [OpenAI Help: GPT-5.2 in ChatGPT](https://help.openai.com/en/articles/11909943-gpt-52-in-chatgpt)  
   - 2026-02-13時点のChatGPTモデル整理、Auto/Instant/Thinkingの仕様、利用上限、コンテキスト長を確認
2. [OpenAI Help: Retiring GPT-4o and other ChatGPT models](https://help.openai.com/en/articles/20001051)  
   - GPT-5（Instant/Thinking）を含む旧モデルがChatGPTから退役した日付と対象範囲を確認
3. [OpenAI Help: What is the ChatGPT model selector?](https://help.openai.com/en/articles/7864572-what-is-the-chatgpt-plus-model-selector)  
   - 有料プランでのモデル選択前提と運用上の注意を確認
4. [OpenAI Help: How can I move my ChatGPT subscription to the API?](https://help.openai.com/en/articles/8156019)  
   - ChatGPT契約とAPI課金が別管理である点を確認
5. [OpenAI API Docs: GPT-5.2 model](https://developers.openai.com/api/docs/models/gpt-5.2)  
   - API側のGPT-5.2能力（コンテキスト、reasoning.effort、価格）を確認
6. [OpenAI API Docs: Models](https://developers.openai.com/api/docs/models)  
   - APIでのGPT-5/GPT-5.1/GPT-5.2系の並存状況を確認
7. [OpenAI API Docs: Migrate to the Responses API](https://platform.openai.com/docs/guides/responses-vs-chat-completions)  
   - 新規実装でResponses API推奨という実装方針を確認

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit r/ChatGPT: Which GPT 5.2 model is actually used on chatgpt.com?](https://www.reddit.com/r/ChatGPT/comments/1pkfnmk/which_gpt_52_model_is_actually_used_on_chatgptcom/)  
   - ChatGPT UIのモデル表示とAPIモデル名の対応が分かりにくいという混乱
2. [Reddit r/ChatGPT: ChatGPT 5.2 Thinking Mode Shows as GPT-4 Model...](https://www.reddit.com/r/ChatGPT/comments/1r3iddk/chatgpt_52_thinking_mode_shows_as_gpt4_model/)  
   - Thinking利用時の表示・挙動への不一致報告（アカウント差分体験）
3. [Reddit r/codex: Cursor has found out that GPT-5.2 is best for autonomous coding](https://www.reddit.com/r/codex/comments/1qqx2rf/cursor_has_found_out_that_gpt52_is_best_for/)  
   - 長時間タスクでの安定性を評価する実務側の声
4. [Reddit r/OpenAI: GPT‑5.2 has turned ChatGPT into...](https://www.reddit.com/r/OpenAI/comments/1pptr3f/gpt52_has_turned_chatgpt_into_an_overregulated/)  
   - 応答トーン・安全挙動に対する不満の声

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 2026-02-13以降、ChatGPTの既定モデル運用はGPT-5.2世代が中心で、GPT-5 Instant/Thinkingは退役済み | GPT-5.2 in ChatGPT | Retiring GPT-4o and other ChatGPT models | 採用（本文で日付明記） |
| ChatGPTプラン課金とAPI課金は別で、移行しても自動統合されない | Move ChatGPT subscription to API | GPT-5.2 model/API pricing系 | 採用 |
| API実装はChat CompletionsよりResponses API推奨 | Responses vs Chat Completions | Text generation guide（同趣旨） | 採用 |
| UI上のモデル選択は、利用者にとって挙動が分かりにくいケースがある | ChatGPT model selector | Reddit実声（選択/表示の混乱） | 採用（補助根拠） |
| GPT-5.2の評価は用途依存で、肯定・否定の両方の実声が存在する | Reddit r/codex（肯定） | Reddit r/OpenAI / r/ChatGPT（懸念） | 採用（断定回避） |

## 4. 記事反映方針
- 冒頭で「2026-02-13にChatGPT側の旧モデルが退役済み」であることを明記し、`GPT-5`と`GPT-5.2`の混同を防ぐ
- H2を自己完結にし、読者が次の判断を取りやすい構成にする
  - 何が変わったか（事実）
  - どのモードを選ぶか（運用）
  - ChatGPTとAPIをどう使い分けるか（設計）
- 利用上限や仕様は変動しやすいため、本文に確認日 `2026-02-20` を明示
- 内部リンクは「入門→実務→比較」の導線で3本以上配置する

## 5. 変動情報・不確実情報
- モデル提供状況、利用上限、退役スケジュールは変動可能性が高い（記事内で確認日を固定表示）
- APIのモデル推奨順位や価格は更新されるため、固定値の断定は避ける
- コミュニティ実声は偏りが出やすく、一次情報の補助としてのみ使用する
