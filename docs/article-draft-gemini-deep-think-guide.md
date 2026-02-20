---
title: "記事構成案｜Gemini Deep Think使い方ガイド"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-research-gemini-deep-think-guide.md"
  - "app/academy/blog/gemini-deep-think-guide/page.tsx"
status: "draft"
dependencies:
  upstream: ["docs/article-research-gemini-deep-think-guide.md"]
  downstream:
    - "app/academy/blog/gemini-deep-think-guide/page.tsx"
    - "components/academyLanding/blog/gemini-deep-think-guide/GeminiDeepThinkGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# Gemini Deep Think使い方ガイド｜ARC-AGI-2・Codeforces・Google AI Ultra料金・推論AI比較

## 1. 記事メタ情報
- slug: `gemini-deep-think-guide`
- 主KW:
  - Gemini Deep Think 使い方
- サブKW:
  - Gemini 3 Deep Think
  - Google AI Ultra
  - 推論AI 2026
  - ARC-AGI
- カテゴリ: 最新AIツール
- 想定読者:
  - 高度推論（数学・科学・コーディング）を扱う中級者
  - モデル比較を実務導入判断まで落とし込みたい個人/法人
- 想定文字数: 5,500〜7,500字

## 2. 検索意図と回答方針
- 検索意図:
  - Deep Thinkが何者かを公開日/利用条件込みで正確に把握したい
  - ARC-AGI-2/Codeforcesの数値が実務で何を意味するか知りたい
  - Gemini 1.5/2.0/3系の使い分けを現行提供状況込みで理解したい
  - AI Ultraの料金と入手手順を確認したい
  - Claude Opus 4.6/GPT-5.2との推論比較を見たい
- 回答方針:
  - 冒頭で結論を先出し（利用条件、スコア解釈、運用ポイント）
  - ベンチマークは「数値 + 条件 + 実務上の意味」で説明
  - 価格/提供形態など変動情報は確認日（2026-02-20）を明記
  - 比較は同一テーブルで示し、公平性の限界を明示

## 3. 見出し構成（H2）
1. 要点まとめ
2. Gemini 3 Deep Thinkとは何か（2026-02-12公開、AI Ultra限定）
3. ARC-AGI-2・Codeforcesなど主要ベンチマーク結果と読み方
4. Gemini 1.5/2.0との使い分け（提供終了・移行情報込み）
5. Google AI Ultraの料金と入手手順（2026-02時点）
6. 数学・科学・コード問題での実践手順（プロンプト例付き）
7. Claude Opus 4.6・GPT-5.2との推論比較
8. よくある質問（FAQ）
9. 次の一歩（アカデミーCTA）

## 4. 内部リンク設計
- `/academy/blog/gemini-beginners-guide`
  - 挿入意図: Gemini全体像の補完
- `/academy/blog/google-ai-studio-guide`
  - 挿入意図: API検証導線の補完
- `/academy/blog/llm-evaluation-guide`
  - 挿入意図: ベンチマークの読み方・評価設計を補完
- `/academy/blog/gpt-vs-claude-2026`
  - 挿入意図: 汎用比較の補完

## 5. LINE CTA 設計（統一文言）
- CTA文言:
  - AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）
- ボタン:
  - LINEで週1AI通信を受け取る（無料）
- 配置:
  - CTA #1: ベンチマーク解説直後
  - CTA #2: AI Ultra料金セクション直後
  - CTA #3: FAQ末尾

## 6. FAQ案（6問）
1. Gemini Deep Thinkは誰でも使えますか？
2. ARC-AGI-2の84.6は何を意味しますか？
3. Codeforcesのスコアが高いと業務コード品質も高いですか？
4. Gemini 1.5/2.0をまだ使っている場合、何から移行すべきですか？
5. Google AI Ultraの価格は固定ですか？
6. Claude Opus 4.6・GPT-5.2と比べると、どのタスクで差が出ますか？

## 7. アカデミーCTA方針（CRITICAL）
- 3本柱で記述:
  - 生成AI活用力
  - 自己理解・キャリアデザイン
  - 仲間と共に学ぶ環境
- NG回避:
  - 「Gemini Deep Thinkの使い方を体系的に学べる」など、特定ツール習得訴求は使わない
  - 「実装できる力を身につける」など、技術実装習得を直接示す表現は使わない

## 8. 実装メモ
- `Metadata`:
  - title: 60字目安、`| AIリブート`付き
  - description: 120〜160字
  - keywords: 4〜6語
- 構造化データ:
  - `ArticleStructuredData` / `BreadcrumbStructuredData` / `FAQStructuredData`
- 比較表:
  - ARC-AGI-2は `Deep Think 84.6` と `3.1 Pro Thinking 77.1` の評価条件差を注記
- 注意書き:
  - 「確認日: 2026-02-20。料金・仕様は最新公式で確認」

