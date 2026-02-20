---
title: "記事リサーチ｜aio-seo-strategy-guide"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-aio-seo-strategy-guide.md"
  - "app/academy/blog/aio-seo-strategy-guide/page.tsx"
  - "components/academyLanding/blog/aio-seo-strategy-guide/AioSeoStrategyGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/aio-seo-strategy-guide/page.tsx"
    - "components/academyLanding/blog/aio-seo-strategy-guide/AioSeoStrategyGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: aio-seo-strategy-guide

## 0. 調査条件
- 対象テーマ: `LLMO GEO とは / AI Overviews 対策 / AIO SEO / AI検索 コンテンツ 最適化 / Perplexity SEO 対策`
- 確認日: `2026-02-19`
- 目的: Google AI Overviews・Perplexity・ChatGPT Searchで「引用されやすいコンテンツ設計」を実務手順に落とす
- 方針: 仕様・クロール制御・検索表示の扱いは一次情報（公式ドキュメント）を優先し、コミュニティ実声は補助根拠として扱う

## 1. 一次情報（公式）ソース
1. [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)  
   - AI Overviews / AI Modeに関する公式ガイダンス。追加の技術要件、query fan-out、Search Console計測範囲を確認
2. [Google Search Central: Control your snippets in Search results](https://developers.google.com/search/docs/appearance/snippet)  
   - `nosnippet` / `max-snippet` / `data-nosnippet` が AI Overviews / AI Mode にも影響する点を確認
3. [Google Search Central: FAQ structured data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)  
   - FAQ構造化データの公式仕様と表示制約（現状の掲載対象制限）を確認
4. [OpenAI: Introducing ChatGPT search](https://openai.com/index/introducing-chatgpt-search/)  
   - ChatGPT Searchの基本仕様と「web上の情報源を参照する」設計を確認
5. [OpenAI Platform Docs: OAI-SearchBot](https://platform.openai.com/docs/bots/oai-searchbot)  
   - ChatGPT Search向けクロールボットと許可/拒否制御の実装方法を確認
6. [OpenAI Platform Docs: GPTBot](https://platform.openai.com/docs/bots/gptbot)  
   - 学習向けクロール制御（GPTBot）と Search bot との役割分離を確認
7. [Perplexity Help Center: What is Perplexity and how does it work?](https://www.perplexity.ai/help-center/en/articles/10354919-what-is-perplexity-and-how-does-it-work)  
   - Web検索と引用提示を前提にした回答生成の基本挙動を確認

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit r/SEO: Do clicks and impressions from AI Overviews show up in Google Search Console?](https://www.reddit.com/r/SEO/comments/1l8raq2/)  
   - GSCでAIOを分離しにくいという現場の計測課題
2. [Reddit r/SEO: Anyone getting substantial traffic from AI Engines?](https://www.reddit.com/r/SEO/comments/1l285ey/)  
   - ChatGPT/Perplexity由来流入の観測共有（業種差・割合差が大きい）
3. [Reddit r/perplexity_ai: Incorrect Citations](https://www.reddit.com/r/perplexity_ai/comments/1chmjne/)  
   - 「引用先と本文のズレ」が起きるケース報告
4. [Reddit r/perplexity_ai: Perplexity Gives Wrong Citation/Link Most the Time?](https://www.reddit.com/r/perplexity_ai/comments/1j1gke5/)  
   - モード設定による精度差、再検証前提の運用に関する実務コメント
5. [Reddit r/perplexity_ai: No more citations?!](https://www.reddit.com/r/perplexity_ai/comments/1i2eiog/)  
   - 一時的な引用欠落が発生したケースと復旧報告

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| AI Overviews対策に特別な新SEOが必須というより、検索の技術要件・ポリシー準拠が前提 | Google AI features and your website | Google snippet controls | 採用 |
| AI Overviewsでは query fan-out により、通常検索で拾いにくい補助ページも参照候補になる | Google AI features and your website | Google Searchの一般的な品質要件（Search Central内） | 採用 |
| AIO流入は計測設計を変えないと評価しづらい（AIO単独の見え方が限定的） | Google AI features and your website（総計測方針） | Reddit r/SEO 実務報告 | 採用（運用論） |
| ChatGPT Searchで露出を狙うには、OAI-SearchBot/GPTBotの制御方針を誤らないことが必要 | OpenAI Introducing ChatGPT search | OpenAI OAI-SearchBot / GPTBot docs | 採用 |
| 引用付きAI検索でも、引用の妥当性を人が確認する運用が必要 | Perplexity Help Center | Reddit r/perplexity_ai 実務報告 | 採用（補助根拠含む） |
| FAQSchemaはAIO文脈で有効だが、GoogleのFAQリッチリザルト表示範囲には制約がある | Google FAQ structured data | Google AI features and your website | 採用 |

## 4. 記事反映方針
- 導入直後に「3行要約」を配置し、AI要約に抜かれても要点が残る構造にする
- H2は自己完結（結論先出し）で、AIが抜粋しても意味が崩れない見出しにする
- `従来SEO vs AIO/GEO` の比較表を掲載し、判断軸を明示する
- `引用されやすい構造（3行要約 / 比較表 / FAQSchema）` を実装手順として提示する
- AIO診断チェックリスト15項目を掲載し、読者が自サイト診断できる状態にする
- 指定内部リンク4本を本文に配置する
  - `/academy/blog/what-is-generative-ai`
  - `/academy/blog/chatgpt-claude-beginners-guide`
  - `/academy/blog/perplexity-ai-guide`
  - `/academy/blog/notebooklm-guide`

## 5. 変動情報・不確実情報
- AI Overviews / ChatGPT Search / Perplexity の表示仕様は継続更新されるため、本文で確認日 `2026-02-19` を明記
- AI流入比率やCTR影響は業種差・クエリ差が大きく、一般化した断定値は本文で使わない
- [要確認: 日本語圏での「AIO経由流入比率」の公開一次統計（業種横断で比較可能な最新版）]
