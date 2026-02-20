---
title: "記事リサーチ｜vibe-coding-beginner-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-vibe-coding-beginner-guide.md"
  - "app/academy/blog/vibe-coding-beginner-guide/page.tsx"
  - "components/academyLanding/blog/vibe-coding-beginner-guide/VibeCodingBeginnerGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "docs/article-draft-vibe-coding-beginner-guide.md"
    - "app/academy/blog/vibe-coding-beginner-guide/page.tsx"
    - "components/academyLanding/blog/vibe-coding-beginner-guide/VibeCodingBeginnerGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: vibe-coding-beginner-guide

## 0. 調査条件
- 対象テーマ: `Vibe Coding 入門`
- 主KW: `Vibe Coding 入門`
- サブKW:
  - `バイブコーディング 使い方`
  - `AIコーディング 非エンジニア`
  - `Cursor Claude Code 初心者`
- ターゲット: 非エンジニア・AI初心者（コードを書かずにアプリを作りたい人）
- 確認日: `2026-02-20`
- 記事目的:
  - Vibe Codingの定義・語源・従来開発/ノーコードとの違いを誤解なく整理する
  - 主要ツール5種（Cursor / Claude Code / v0 / Replit / Bolt.new）の価格と使い分けを、確認日付きで提示する
  - 非エンジニアがWebアプリを作る現実的な手順と、限界・セキュリティ注意点を示す

## 1. 一次情報（公式・一次統計）ソース
1. [Merriam-Webster: Vibe coding](https://www.merriam-webster.com/wordplay/words-were-watching-vibe-coding)  
   - 「vibe coding」はAndrej Karpathyが2025年2月に使い始めた語という整理
2. [Wikipedia: Vibe coding](https://en.wikipedia.org/wiki/Vibe_coding)  
   - 語源・参照リンク（KarpathyのX投稿URL）確認用
3. [Associated Press: AI-assisted coding explodes in popularity](https://apnews.com/article/coding-jobs-ai-software-developers)  
   - 「Vibe coding」表現がKarpathyのX投稿由来である報道
4. [Cursor Pricing](https://www.cursor.com/pricing)  
   - Pro `$20/month`、Business `$40/user/month`、Ultra `$200/month`（確認日ベース）
5. [Anthropic Docs: Manage costs effectively (Claude Code)](https://docs.anthropic.com/en/docs/claude-code/costs)  
   - Claude Codeのプラン別目安（Pro `$20`、Max 5x `$100`、Max 20x `$200`、Team `$50/user`、Enterprise `$60/user`）
6. [v0 Pricing](https://v0.app/pricing)  
   - Free/ Premium/ Team/ Enterprise、Freeは`5 messages/day`、Premiumは`$20/month`
7. [Replit Pricing](https://replit.com/pricing)  
   - Replit Core `$25/month`、Teams `$40/user/month`、クレジット消費モデル
8. [Bolt.new Pricing](https://bolt.new/pricing)  
   - Free `150k tokens/day`、Pro `$20/month (10M tokens)` ほか上位プラン
9. [AWS: What is no-code?](https://aws.amazon.com/what-is/no-code-ai/)  
   - ノーコードの定義（視覚的インターフェース中心）
10. [Replit Docs: Replit Agent](https://docs.replit.com/replitai/agent)  
    - 自然言語指示でアプリ生成できる領域の一次情報
11. [Bolt Support: What is Bolt?](https://support.bolt.new/en/articles/9671838-what-is-bolt)  
    - ブラウザ完結でフルスタック生成する製品特性
12. [METR Research: Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)  
    - 経験者開発でも実測では時間短縮が自動で成立しない（研究結果）
13. [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/)  
    - Prompt Injection等、生成AIアプリ運用時の主要リスク整理

## 2. SNS・コミュニティ実声（補助根拠）
1. [r/replit: New to coding but replit is awesome](https://www.reddit.com/r/replit/comments/1fytqlk/new_to_coding_but_replit_is_awesome/)  
   - 肯定: 非エンジニアでも「まず作る」体験を得やすいという声
2. [r/replit: I’ve been vibe coding ... nightmare](https://www.reddit.com/r/replit/comments/1my2dvx/ive_been_vibe_coding_a_program_in_replit_for_2/)  
   - 懸念: 長期運用・修正局面で破綻しやすいという声
3. [r/replit: Day three of learning to code with Replit](https://www.reddit.com/r/replit/comments/1fzl83u/day_three_of_learning_to_code_with_replit/)  
   - つまずき: エラー修正の指示粒度で成果が大きく変わる
4. [r/ClaudeAI: Is Claude Code Max really worth it?](https://www.reddit.com/r/ClaudeAI/comments/1mynlyb/is_claude_code_max_really_worth_it/)  
   - 懸念: 料金対効果は利用量とタスク難度で体感差が大きい

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 「Vibe coding」はAndrej Karpathyが2025年2月に使い始め、広まった語 | Merriam-Webster | AP報道（Karpathy投稿由来） | 採用 |
| 2026-02時点でCursor主要有料プランは`$20/$40/$200`帯 | Cursor Pricing | 公式価格ページ内の各プラン説明 | 採用 |
| Claude Codeは「定額枠（Pro/Max等）+ API従量」の両方で運用される | Anthropic Claude Code costs docs | 同ページ内のプラン別金額行 | 採用 |
| v0はFree（5メッセージ/日）から開始し、Premium `$20/month`で拡張可能 | v0 Pricing | 同ページ内のモデル利用クレジット説明 | 採用 |
| Replitは`Core $25`と`Teams $40/user`、かつクレジット消費で実行量が増減する | Replit Pricing | Replit pricing内のcredits/checkpoint記述 | 採用 |
| Bolt.newはトークン上限が明確で、`Free 150k/day` と `Pro 10M/月`など使用量連動型 | Bolt.new Pricing | 同ページ内プラン比較 | 採用 |
| 非エンジニアでも自然言語からアプリ生成を始められるが、複雑化すると運用難度が上がる | Replit Agent docs / Bolt docs | Reddit実声（初学者の肯定と破綻報告） | 採用（実務上の注意付き） |
| AIで作ったコードは安全性レビューなしで本番運用すべきではない | OWASP LLM Top10 | Claude Code docs（コマンド実行・権限運用） | 採用 |
| AI活用で常に生産性が上がるとは限らない | METR研究ブログ | コミュニティでの修正・保守の難しさ報告 | 採用 |

## 4. 記事への反映方針
- 冒頭で「確認日: 2026-02-20」を明記し、料金・仕様の変動前提を示す
- 「Vibe Coding=誰でも即本番アプリ」ではなく、**プロトタイプ向き / 本番は設計・レビュー必須**の線引きを明示
- ツール比較は「どれが最強か」ではなく、非エンジニア向けに以下の軸で整理
  - 入口の簡単さ
  - 画面生成か、コード編集か
  - 料金モデル（固定課金 / 使用量連動）
  - 適したフェーズ（アイデア検証 / MVP / 継続運用）
- チュートリアルは「小さく作る→公開前に守る」を重視し、実務転用時の安全手順まで含める
- 記事末CTAは、ツール学習訴求ではなく3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と共に学ぶ環境）で統一

## 5. 変動情報・注意点（2026-02-20時点）
- 各ツールの価格・クレジット・トークン上限は変更される可能性がある
- Claude Codeは利用形態（Pro/Max/Team/Enterprise、API従量）で体感コストが変わる
- 「Vibe coding」の定義は媒体により揺れがあり、記事では「自然言語主体でAIにコード生成させる開発スタイル」に統一
- SNS実声は個別状況の影響が大きく、一次情報の補助根拠として扱う

## 6. 未確定・要確認メモ
- `[要確認: Cursor Free(Hobby)の月間実行上限の細目]`  
  料金ページで有料プランの価格は明確だが、無料枠の上限定義は時期で変更されやすい
- `[要確認: v0 Premiumの月間付与クレジット総量]`  
  pricingページでプラン料金は明記される一方、クレジット運用の詳細は更新が入りやすい
- `[要確認: Karpathy原投稿の本文確認]`  
  参照URLは取得済み（X投稿）が、閲覧環境によって本文取得できないため、記事本文では二次ソース併記で断定しすぎない
