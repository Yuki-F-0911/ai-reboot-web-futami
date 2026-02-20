---
title: "記事調査ログ｜ai-english-learning-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-english-learning-guide.md"
  - "app/academy/blog/ai-english-learning-guide/page.tsx"
  - "components/academyLanding/blog/ai-english-learning-guide/AiEnglishLearningGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["[TODO] project-config.yaml（user.name確認済み）"]
  downstream:
    - "app/academy/blog/ai-english-learning-guide/page.tsx"
    - "components/academyLanding/blog/ai-english-learning-guide/AiEnglishLearningGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ要約

- 対象記事: `ai-english-learning-guide`
- 主KW: AI 英語学習 2026
- サブKW: ChatGPT 英会話 / Duolingo AI / 英語 AI アプリ 比較
- 調査日: 2026-02-20
- ターゲット: 個人（社会人・ビジネスパーソン）

## 一次情報（公式/学術）一覧

| 種別 | URL | 採用理由 | 確認日 |
|---|---|---|---|
| Duolingo公式ブログ | https://blog.duolingo.com/duolingo-max-jp/ | Duolingo Maxの機能（Video Call with Lily / Explain My Answer）と、188か国提供の記載根拠 | 2026-02-20 |
| Duolingo公式ヘルプ | https://support.duolingo.com/hc/en-us/articles/13326738333069-How-much-does-Super-Duolingo-and-Duolingo-Max-cost | Duolingo Maxの公式価格（年額/個人・家族）と提供国（6か国）の記載根拠 | 2026-02-20 |
| Duolingo公式ヘルプ | https://support.duolingo.com/hc/en-us/articles/13221542695181-What-is-Duolingo-Max | Max機能の定義（Roleplay / Explain My Answer）と対応コース条件の根拠 | 2026-02-20 |
| ELSA公式Pricing | https://elsaspeak.com/en/pricing?isView=true | ELSA Proの価格表示（年額換算）とAI機能（AI Speech Analyzer等）の根拠 | 2026-02-20 |
| Apple App Store（Speak, US） | https://apps.apple.com/us/app/speak-language-learning/id1286609883 | Speakアプリの米国IAP価格帯（1か月/年額）と機能説明の根拠 | 2026-02-20 |
| OpenAI公式（Voice） | https://openai.com/index/chatgpt-can-now-see-hear-and-speak/ | ChatGPT Voice会話機能の公式発表・提供対象更新（all logged-in users）の根拠 | 2026-02-20 |
| Google Gemini Help | https://support.google.com/gemini/answer/15274899?hl=en | Gemini Liveの会話モードと運用条件確認の根拠 | 2026-02-20 |
| Frontiers（査読） | https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1510968/full | MALL（モバイル語学学習）の効果量（語彙・総合）のメタ分析根拠 | 2026-02-20 |
| Education and Information Technologies（査読） | https://link.springer.com/article/10.1007/s10639-024-13083-z | ChatGPTを活用したEFLスピーキング改善研究の根拠（準実験） | 2026-02-20 |
| Duolingo Research | https://research.duolingo.com/papers/santos.saltzman.aera2017.pdf | アプリ学習効果（読解・リスニング改善）の歴史的研究根拠 | 2026-02-20 |

## コミュニティ実声（SNS/フォーラム）

| ソース | URL | 要点（要約） | バランス |
|---|---|---|---|
| Reddit r/duolingo | https://www.reddit.com/r/duolingo/comments/1hfkcal/duolingo_max_pricing/ | 「Maxが月額約30ドルで高い」「地域差が大きい」という価格不満が目立つ | 懸念 |
| Reddit r/languagelearning | https://www.reddit.com/r/languagelearning/comments/17qy7ks/i_used_chatgpt_for_language_learning_for_a_month/ | ChatGPTは会話量確保に有効だが、誤り検出の精度は使い方次第という報告 | 肯定/懸念 |
| Reddit r/EnglishLearning | https://www.reddit.com/r/EnglishLearning/comments/19eh8cb/improving_my_english_with_chatgpt/ | 24時間ロールプレイ相手として有用という肯定意見 | 肯定 |
| Reddit r/EnglishLearning | https://www.reddit.com/r/EnglishLearning/comments/13z9c7u/can_i_rely_on_chatgpt_for_learning_english/ | 「添削内容をそのまま信頼しすぎない方がよい」という注意喚起 | つまずき |
| Apple App Store（Speakレビュー） | https://apps.apple.com/us/app/speak-language-learning/id1286609883 | 会話練習のしやすさは評価される一方、継続課金の体感コストに言及あり | 肯定/懸念 |

## Claim検証（2ソース照合）

| Claim | 照合ソースA | 照合ソースB | 判定 |
|---|---|---|---|
| Duolingo Maxの主要機能はRoleplayとExplain My Answer | Duolingo Help「What is Duolingo Max?」 | Duolingo Blog（Max紹介記事） | 確認済み |
| Duolingo Maxの提供国情報は公式情報に差分がある | Duolingo Blog（188か国） | Duolingo Help（US/UK/IE/CA/AU/NZ） | 差分あり |
| Duolingo Maxの公式価格は年額プランが中心 | Duolingo Help（年額個人・家族） | Reddit/コミュニティ実声（月額換算言及） | 公式価格は確認済み、月額は要確認 |
| ELSA SpeakはAI発音分析機能を中核訴求している | ELSA公式Pricing | ELSA App Store説明（機能説明） | 確認済み |
| SpeakはAI会話練習を中心に設計された英語学習アプリ | Speak App Store説明 | コミュニティ実声（会話練習への評価） | 確認済み |
| AI/モバイル語学学習は統計的に改善効果を示す研究がある | Frontiersメタ分析（2024） | Education and Information Technologies（2024） | 確認済み |

## 変動情報メモ（本文反映必須）

- Duolingo Maxは公式内でも提供国記載が一致しないため、本文で「確認日」と「ソース差分」を明記する
- 価格はストア・キャンペーン・地域で変動するため、固定断定は避ける
- ELSA/Speakの価格も国・通貨・時期で差が出るため、比較表に「参考価格」「確認日」を記載する
- 研究データはサンプルや対象言語で効果差があるため、一般化しすぎない

## 不確実項目

- [要確認: Duolingo Maxの2026年2月時点の提供国最終確定]
  - 公式ブログは188か国、公式ヘルプは6か国記載で差分あり
  - 記事本文では「公式情報に差分あり、最新はアプリ内表示で確認」と明記する
- [要確認: Duolingo Maxの月額公式提示]
  - 公式ヘルプは年額・家族プラン中心で、月額明示が限定的
  - コミュニティ価格情報は補助根拠として扱う
- [要確認: ELSA/Speakの日本向け実売価格]
  - 公式/ストア表示は地域で変動するため、読者向けには「最新はアプリ内で確認」を併記する
