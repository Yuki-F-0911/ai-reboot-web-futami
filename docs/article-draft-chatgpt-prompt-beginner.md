---
title: "記事構成案｜chatgpt-prompt-beginner"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-research-chatgpt-prompt-beginner.md"
  - "app/academy/blog/chatgpt-prompt-beginner/page.tsx"
  - "components/academyLanding/blog/chatgpt-prompt-beginner/ChatgptPromptBeginnerPage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/chatgpt-prompt-beginner/page.tsx"
    - "components/academyLanding/blog/chatgpt-prompt-beginner/ChatgptPromptBeginnerPage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# 記事構成案: chatgpt-prompt-beginner

## 1. 記事メタ情報
- slug: `chatgpt-prompt-beginner`
- タイトル案: `ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例`
- 主KW:
  - `ChatGPT プロンプト 書き方 入門`
- サブKW:
  - `ChatGPT 使いこなし方 初心者`
  - `プロンプト 例文`
  - `ChatGPT 指示 コツ`
- カテゴリ: `AI基礎知識`
- ターゲット: 個人（ChatGPT初心者・使い始めて間もない人）
- 想定文字数: 5,500〜7,500字

## 2. 検索意図
- 思い通りに回答が返ってこない理由を短時間で理解したい
- すぐ使えるプロンプト例文をまとめて手元に置きたい
- NGとOKの違いを見ながら、自分の質問文を改善したい
- APIでも使える「固定指示」と「都度指示」の分け方を知りたい

## 3. 見出し構成（H2自己完結）
1. 要点まとめ
2. なぜ思い通りの答えが返ってこないのか（失敗パターン）
   - H3: 聞き方が曖昧
   - H3: 一度に詰め込みすぎ
   - H3: 出力形式を指定していない
3. 初心者がすぐ使える15のプロンプト型（例文付き）
4. NG例 vs OK例を対比で理解する（実務系・学習系・副業系）
5. 「続けて質問する」会話設計のコツ
6. 2026年版GPT-5.2を踏まえた設計とAPI補足（system/developer vs user）
7. よくある質問（FAQ）

## 4. 必須反映事項
- 15の型は「役割指定・ステップ分解・出力形式指定」を含める
- NG/OK対比は3カテゴリ（実務/学習/副業）を同一フォーマットで提示
- LINE CTAは3箇所（前半・中盤・FAQ末尾）
- 末尾アカデミーCTAは3本柱ベースで記述（ツール操作習得訴求は禁止）
- 情報確認日を明記（2026-02-20）

## 5. 内部リンク配置
- `/academy/blog/chatgpt-start-guide-smartphone`
- `/academy/blog/prompt-template-for-work`
- `/academy/blog/chatgpt-advanced-tips`
- `/academy/blog/chatgpt-plan-comparison`

## 6. FAQ案（6問）
1. ChatGPTのプロンプトは長く書いた方がいいですか？
2. 初心者はまずどの型から使うべきですか？
3. 回答がズレたとき、最初に直すべき項目は何ですか？
4. 追質問をさせる設計と、させない設計はどう使い分けますか？
5. APIではsystem/developer promptとuser promptをどう分けますか？
6. 毎日使うために、どこまでテンプレ化すると効果がありますか？
