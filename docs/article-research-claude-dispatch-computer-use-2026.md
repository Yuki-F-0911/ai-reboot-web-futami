---
title: "記事リサーチ｜claude-dispatch-computer-use-2026"
version: "1.0"
last_updated: "2026-03-24"
author: "Codex"
reviewers: []
related_docs:
  - "docs/article-draft-claude-dispatch-computer-use-2026.md"
  - "app/(site)/academy/blog/claude-dispatch-computer-use-2026/page.tsx"
  - "components/academyLanding/blog/claude-dispatch-computer-use-2026/ClaudeDispatchComputerUse2026Page.tsx"
status: "draft"
dependencies:
  upstream: []
  downstream:
    - "docs/article-draft-claude-dispatch-computer-use-2026.md"
    - "app/(site)/academy/blog/claude-dispatch-computer-use-2026/page.tsx"
    - "components/academyLanding/blog/claude-dispatch-computer-use-2026/ClaudeDispatchComputerUse2026Page.tsx"
impact_level: "low"
---

# リサーチ記録: claude-dispatch-computer-use-2026

## 0. 調査条件
- 対象テーマ: `Claudeのここ最近の大きな発表まとめ（2026年3月時点）`
- 主KW: `Claude Computer Use Dispatch 2026`
- サブKW:
  - `Claude Dispatch`
  - `Claude Computer Use`
  - `Anthropic 最新発表 2026年3月`
  - `Claude Code Code Review`
- ターゲット: AI初心者 / 実務でAI活用を始めたい社会人 / Claudeの最新動向を追いたい読者
- 確認日: `2026-03-24`
- 記事目的:
  - 2026年2月〜3月のAnthropic主要発表を時系列で整理する
  - Computer UseとDispatchが何を変えるのかを初心者にもわかる言葉で説明する
  - Pro / Max / Team / Enterpriseで何が使えるのかを誤解なく整理する

## 0-A: SEOキーワード調査

### 検索意図
- 主軸は `情報収集（Know）`
- 一部 `操作方法（Do）` が混ざる
- 読者が知りたいことは以下に集約される
  - DispatchとComputer Useは何ができるか
  - いつ始まって、2026年3月に何が変わったか
  - 自分のプランで使えるか
  - 仕事でどの業務に向くか

### 競合上位5記事の分析
| # | 記事 | 想定される役割 | H2 / 論点の傾向 | 弱い点 |
|---|---|---|---|---|
| 1 | [Put Claude to work on your computer](https://claude.com/blog/dispatch-and-computer-use) | 公式総合発表 | Computer Use / Dispatch / getting started | 公式なので前提知識が多く、初心者向けの整理は少ない |
| 2 | [Release notes](https://support.claude.com/en/articles/12138966-release-notes) | 日付確認 | 3/17 Dispatch、3/12 visuals、2月のCowork更新 | 機能の意味づけや全体像がない |
| 3 | [Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku](https://www.anthropic.com/news/3-5-models-and-computer-use?lang=us) | 2024年10月の起点 | Computer Useの初回公開、OSWorld初期値 | 2026年の強化内容は入っていない |
| 4 | [Computer use tool - Claude API Docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) | 開発者向け仕様 | 仕組み、agent loop、安全対策、利用条件 | API前提で、Claudeアプリ利用者には難しい |
| 5 | [Bringing Code Review to Claude Code](https://claude.com/blog/code-review) | 周辺アップデート | マルチエージェントPRレビュー | Dispatch / Computer Useとの関係は説明されない |

### AIリブートが勝てる差別化ポイント
- `2024年10月 → 2026年3月` の流れを一本で整理する
- `Chatbot → Tool Use → Computer Use → Dispatch` の進化として理解させる
- `どのプランで何が使えるか` を1表にまとめる
- 技術用語に短い補足をつけ、初心者でも読めるようにする
- 「RPA代替になり得るが、現時点ではまだ遅く不完全」という現実ラインを明示する

### サジェスト・関連KW
- `Claude Dispatch とは`
- `Claude Computer Use 使い方`
- `Claude Cowork とは`
- `Claude Code Code Review`
- `Claude 1M context`
- `Anthropic 2026 発表`
- `Claude Pro Max 違い`
- `Claude Desktop macOS`

## 0-B: 一次情報ソース

| # | 内容要約 | URL | 確認日 |
|---|---|---|---|
| 1 | Computer Use初回公開。2024-10-22にClaude 3.5 Sonnetでpublic beta開始 | https://www.anthropic.com/news/3-5-models-and-computer-use?lang=us | 2026-03-24 |
| 2 | Computer Use研究背景。OSWorld 14.9%、人間は70〜75%目安 | https://www.anthropic.com/research/developing-computer-use | 2026-03-24 |
| 3 | Vercept買収。OSWorldが2024年後半の15%未満から72.5%へ向上 | https://www.anthropic.com/news/acquires-vercept | 2026-03-24 |
| 4 | Dispatch / Computer Use総合発表。2026-03-23 | https://claude.com/blog/dispatch-and-computer-use | 2026-03-24 |
| 5 | Release notes。Dispatch persistent threadは2026-03-17、Max先行でProは2日以内展開 | https://support.claude.com/en/articles/12138966-release-notes | 2026-03-24 |
| 6 | Cowork / Claude CodeでのComputer Use。Pro / Max、macOSのみ、Windows coming soon、明示的許可必須 | https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork | 2026-03-24 |
| 7 | Cowork概要。macOS desktop research previewからの拡張背景 | https://support.claude.com/en/articles/13345190-get-started-with-cowork | 2026-03-24 |
| 8 | Scheduled tasks。Coworkが定期実行でき、Pro / Max / Team / Enterprise対象 | https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork | 2026-03-24 |
| 9 | Interactive Visualizations。2026-03-12、全プラン利用可 | https://claude.com/blog/claude-builds-visuals | 2026-03-24 |
| 10 | Code Review for Claude Code。2026-03-09、Team / Enterprise research preview | https://claude.com/blog/code-review | 2026-03-24 |
| 11 | 1M context一般提供。2026-03-13、長文プレミアム廃止 | https://claude.com/blog/1m-context-ga | 2026-03-24 |
| 12 | Web search dynamic filtering。2026-02-17、精度+11%、入力トークン-24% | https://claude.com/blog/improved-web-search-with-dynamic-filtering | 2026-03-24 |
| 13 | Claude Sonnet 4.6発表。2026-02-17、computer useやagent planning強化、1M context beta | https://www.anthropic.com/news/claude-sonnet-4-6 | 2026-03-24 |
| 14 | Claude Opus 4.6発表。2026-02-05、最上位モデル刷新 | https://www.anthropic.com/news/claude-opus-4-6 | 2026-03-24 |

## 0-C: X調査結果

### 使用クエリ
- `Claude Dispatch in March 2026`
- `Claude computer use in March 2026`
- `Claude recent launches around Sonnet 4.6, 1M context, interactive visuals, and Code Review in March 2026`

### メモ
- XAI API (`grok-4-fast`) を利用して空気感のみ取得
- 特定投稿・アカウント名の引用はなし
- 取得内容は事実根拠としては使わず、構成と語り口の調整にのみ使用

### 盛り上がっているトピック
- Dispatchは「移動中に投げて、帰る頃に終わっている」文脈で語られやすい
- Computer Useは「PCを直接触れるAI」という驚きと、権限・安全性への警戒が同時にある
- 1M contextは「大規模コードベース / 長文資料を丸ごと読む」実務文脈で評価されている
- Code Reviewは「深いレビューだが軽量ではない」という理解が中心

### 利用者の言葉・文脈
- `AIチャット` より `AI同僚` `バックグラウンドで仕事する` に近い受け止め方
- `自動化` 単体ではなく `途中で離席できる` `並行して別作業できる` が価値として語られる
- 一方で `高い権限を渡す怖さ` `動作が遅い` `まだプレビュー` も繰り返し言及される

### 記事への反映
- 導入部は「何が新機能か」ではなく「働き方の変化」で入る
- 期待を煽りすぎず、できることとまだ弱いことをセットで書く
- Dispatchの説明はスマホ送信機能だけで終えず、Computer Useと組み合わせた非同期ワークフローとして整理する

## 0-D: ファクトチェック

| Claim | ソース1 | ソース2 | 判定 |
|---|---|---|---|
| Computer Useは2024-10-22に公開された | 2024-10-22公式発表 | Computer use研究記事 | ✅ |
| Computer Useは画面を見てクリック・入力できる | 2024-10-22公式発表 | Computer use docs | ✅ |
| Vercept買収後、OSWorldは72.5%に向上した | Vercept買収発表 | 2024-10-22初期発表（14.9%） | ✅ |
| Dispatch persistent threadは2026-03-17に出た | Release notes | 2026-03-23 Dispatch / Computer Useブログ | ✅ |
| Dispatchはスマホとデスクトップで同じ会話を継続できる | Release notes | 2026-03-23ブログ | ✅ |
| Computer Useは現在Pro / Max向け、macOSのみ、Windows coming soon | Computer Use help記事 | 2026-03-23ブログ | ✅ |
| Team / Enterpriseは現時点でComputer Use対象外 | Computer Use help記事 | — | ⚠️ 1ソースだがヘルプセンター明記あり |
| Interactive Visualizationsは2026-03-12、全プラン対象 | Visualsブログ | Release notes | ✅ |
| Code Reviewは2026-03-09、Team / Enterprise preview | Code Reviewブログ | — | ⚠️ 1ソースだが公式ブログ明記あり |
| 1M contextは2026-03-13にGA、長文プレミアム廃止 | 1M GAブログ | Release notes（Sonnet 4.6のbeta記載） | ✅ |
| Dynamic filteringで平均11%精度向上、24%入力トークン削減 | Dynamic filteringブログ | — | ⚠️ 1ソースだが公式ブログ明記あり |

## 構成案への反映メモ
- 冒頭で「最大の変化は、AIが答えるだけでなくPCを動かし、しかも外出中に仕事を進められること」と結論を出す
- Dispatchの初出は `2026-03-17`、総合ブログは `2026-03-23` と日付を分けて明記する
- Computer Useは `API版のbeta（2024-10）` と `Claude Desktop / Cowork / Claude Codeでの実利用拡張（2026-03）` を分けて説明する
- 1M contextは「2月のモデル発表」ではなく「3月13日に一般提供」と修正する
- `Windowsはcoming soon` は断定可、`Linux desktop対応` は公式確認できないため記事では期待表現を避ける
- RPA代替は断定せず、「将来的な置換候補となる基盤」と表現する
