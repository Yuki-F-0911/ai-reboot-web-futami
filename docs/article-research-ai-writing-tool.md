---
title: "記事リサーチ｜ai-writing-tool"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-writing-tool.md"
  - "app/academy/blog/ai-writing-tool/page.tsx"
  - "components/academyLanding/blog/ai-writing-tool/AiWritingToolPage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/ai-writing-tool/page.tsx"
    - "components/academyLanding/blog/ai-writing-tool/AiWritingToolPage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-writing-tool

## 0. 調査条件
- 対象テーマ: `AI 文章作成 ツール 比較 / AI ライティング 2026 / ChatGPT 文章 / Claude 文章生成 / コピーライティング AI`
- 確認日: `2026-02-20`
- 目的: 個人・法人（ライター/マーケター/ブロガー/中小企業広報）が、用途別にAI文章作成ツールを選定し、運用時のリスク（AIっぽさ・日本語品質・検出誤判定）まで判断できる状態を作る
- 方針: 料金・仕様・言語対応は公式一次情報を優先。SNS実声は補助根拠として扱う

## 1. 一次情報（公式・論文）ソース
1. [OpenAI Help: What is ChatGPT Plus?](https://help.openai.com/en/articles/6950777)
   - Plus料金 `$20/month` を確認
2. [OpenAI Help: What is ChatGPT Pro?](https://help.openai.com/en/articles/9793128-what-is-chatgpt-pro)
   - Pro料金 `$200/month` を確認
3. [OpenAI Help: How can I change my language setting in ChatGPT?](https://help.openai.com/en/articles/8357869-how-can-i-change-my-language-setting-in-chatgpt)
   - ChatGPTで利用可能な言語一覧（日本語含む）を確認
4. [Anthropic Help: Choosing your plan](https://support.claude.com/en/articles/11983908-choosing-your-plan)
   - Claude Pro/Max/Teamの料金を確認
5. [Anthropic Docs: Translation](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/multilingual-prompting)
   - Claudeの多言語対応（日本語を含む）を確認
6. [Jasper Pricing](https://www.jasper.ai/pricing)
   - Jasper Creator/Pro/Businessの価格帯と主要機能を確認
7. [Jasper Help: What languages does Jasper support?](https://help.jasper.ai/hc/en-us/articles/19479720278299-What-languages-does-Jasper-support)
   - Jasperの30+言語対応（日本語含む）を確認
8. [Copy.ai Pricing](https://www.copy.ai/prices)
   - Copy.aiのChat/Growth/Expansion/Scaleの価格・席数条件を確認
9. [Copy.ai Help: How to change language in chat and workflows](https://support.copy.ai/reference/how-to-change-language-in-chat-and-workflows)
   - Copy.aiで多言語出力する運用（プロンプト指定）を確認
10. [Notion Pricing](https://www.notion.com/pricing)
   - NotionのFree/Plus/Business/Enterprise価格帯を確認
11. [Notion Help: Change your language and region settings](https://www.notion.com/help/language-and-region-settings)
   - NotionのUI言語に日本語が含まれることを確認
12. [GPTZero: How does it work?](https://gptzero.me/news/how-ai-detectors-work/)
   - AI文章検出の主要指標（perplexity/burstiness）と限界を確認
13. [GPTZero Help: Why is the result inaccurate?](https://help.gptzero.me/hc/en-us/articles/15117657037197-Why-is-the-result-inaccurate)
   - 検出精度の限界、必要文字数、100%精度ではない旨を確認
14. [ACL Anthology: Can AI-Generated Text be Reliably Detected?](https://aclanthology.org/2023.acl-long.754/)
   - 研究ベースでの検出器性能限界（回避可能性・頑健性課題）を確認
15. [OpenAI: AI classifier for indicating AI-written text](https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text/)
   - OpenAI自社分類器を低精度で公開停止した背景を確認

## 2. SNS・コミュニティ実声（補助根拠）
1. [r/ClaudeAI: Claude suddenly writing in a weird style（2025-03-19）](https://www.reddit.com/r/ClaudeAI/comments/1jes92v)
   - モデル更新タイミングで文体が急に不安定になったという実声
2. [r/GrowthHacking: Using AI for Content Growth（2025-02-06〜）](https://www.reddit.com/r/GrowthHacking/comments/1ij1tab)
   - 「Copy.aiは以前より汎用化して質が下がった」という声と、「Claude+自作プロンプトで成果」という対照的意見
3. [r/aiwars: AI writing is phenomenally mediocre（2025-03-25）](https://www.reddit.com/r/aiwars/comments/1jjbsuy/ai_writing_is_phenomenally_mediocre)
   - 長文では単調・反復しやすい指摘と、制約設計次第で改善できる反論
4. [r/selfpublish: “I think AI wrote this…”（2025-12-17）](https://www.reddit.com/r/selfpublish/comments/1pp9ncy/i_think_ai_wrote_this/)
   - 人間執筆文でも検出器が高AI判定を返すケース報告（誤判定リスク）
5. [r/KeepWriting: AI Detectors（2025-10-24）](https://www.reddit.com/r/KeepWriting/comments/1odwc4j/ai_detectors/)
   - 検出器間で判定差が大きいという実利用者報告

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| ChatGPTの個人課金は Plus `$20/月`、Pro `$200/月` | OpenAI Plus Help | OpenAI Pro Help | 採用 |
| Claudeの個人課金は Pro `$20/月`（年払いは実質 `$17/月`）、Maxは `$100`/`$200` の2階層 | Anthropic Choosing your plan | 公式案内ページ内の料金表記 | 採用 |
| Jasperは Creator/Pro/Business構成で、Proは月払いと年払いで単価が異なる | Jasper Pricing | Jasper Pricing FAQ（料金表示） | 採用 |
| Copy.aiは最低5席のGrowth/Expansionなどチーム向け価格設計が中心 | Copy.ai Pricing | Copy.ai Pricing（各プランの seat 表記） | 採用 |
| ChatGPT/Claude/Jasper/Copy.ai/Notionはいずれも日本語出力自体は可能 | OpenAI language settings | Anthropic multilingual docs / Jasper language help / Copy.ai language help / Notion language settings | 採用（品質差あり） |
| AI検出器は補助判定であり、単独での断定運用は危険 | GPTZero help（100%精度でない） | ACL 2023 論文（検出限界） | 採用 |
| 検出回避を主目的にした文章改変は本質解ではなく、読者価値の低下を招く | GPTZero explanation（統計指標ベース） | SNS実声（質より回避に寄ると不自然化） | 採用（運用上の示唆） |

## 4. 2026年料金・日本語対応サマリー（記事反映用）

### 4.1 料金（確認日: 2026-02-20）
- ChatGPT: Plus `$20/月`、Pro `$200/月`
- Claude: Pro `$20/月`（年払い時は `$17/月` 相当）、Max `$100/月`・`$200/月`、Team `$30/seat/月`（年払い時 `$25/seat/月`、最小5席）
- Jasper: Creator `月払い$49/seat` / `年払い$39/seat`、Pro `月払い$69/seat` / `年払い$59/seat`、Businessは要問い合わせ
- Copy.ai: Chat `無料`、Growth `月払い$49/seat` / `年払い$36/seat`（最小5席）、Expansion `月払い$333/seat` / `年払い$249/seat`（最小5席）、Scale `月払い$6000` / `年払い$4000`（20席）
- Notion: Free/Plus/Business/Enterpriseの階層制（表示通貨は地域設定依存）

### 4.2 日本語対応（確認日: 2026-02-20）
- ChatGPT: 日本語を含む多数言語に対応（UI言語設定と入出力言語の指定が可能）
- Claude: 日本語を含む多言語プロンプト・翻訳に対応
- Jasper: 30+言語対応に日本語を明記
- Copy.ai: Chat/Workflowで言語を指定して出力可能（プロンプト運用）
- Notion: UIで日本語設定が可能。Notion AIの出力も日本語運用が可能

### 4.3 Jasper・Copy.aiの「日本向けプラン」
- Jasper: 公式FAQで主要通貨カード決済への対応を明記。日本専用プラン名は確認できず
- Copy.ai: 公式価格はUSD表記・席数基準で、日本専用プラン表記は確認できず
- 記事反映方針: 「日本語対応あり」 と 「日本専用料金プランの明示は未確認」を分けて記載する
  - `[要確認: 日本市場専用の請求通貨・サポート窓口・契約条項の有無]`

## 5. AI文章検出（GPTZero等）の仕組みと現状
- GPTZero公表ロジック: perplexity（予測しやすさ）とburstiness（文の揺らぎ）を主要指標として判定
- 公式注意: 100%の正確性は保証されず、短文や編集後テキストで誤判定が増える
- 学術的補強: ACL 2023論文で、検出器は攻撃的改変・言い換え・言語条件で性能低下
- 運用示唆:
  - 検出器スコアを合否基準にしない
  - 根拠開示・一次情報確認・著者責任（レビュー履歴）を重視
  - 「検出回避テクニック」より、読者価値と事実整合性を優先

## 6. 記事反映方針
- 記事冒頭で「2026-02-20時点確認」と明記
- ツール分類を「汎用チャット型 vs 専門ライティング型」で先に整理
- 用途別（ブログ/SNS/メール/プレスリリース）の選定表を配置
- 比較表は `料金 / 日本語対応 / 向く用途 / 注意点` を同時表示
- 「AIが書いた文章らしさ」を減らす実践手順（固有情報・視点・リズム設計）を具体化
- 日本語運用注意として、敬語の粒度・主語省略・カタカナ語過多・事実確認フローを明記
- 記事末アカデミーCTAは3本柱のみで接続し、特定ツール習得の表現を避ける

## 7. 変動情報・不確実情報
- 価格・プラン条件・制限（席数/クレジット）は短期で改定されるため、本文で確認日を固定表示
- Copy.ai/Jasperの日本市場専用契約条件は一次情報で明示不足のため `[要確認]` で扱う
- AI検出器の精度は入力条件に強く依存するため、記事では「傾向」表現に留める
