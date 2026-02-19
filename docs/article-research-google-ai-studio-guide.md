---
title: "記事調査ログ｜google-ai-studio-guide"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-google-ai-studio-guide.md"
  - "app/academy/blog/google-ai-studio-guide/page.tsx"
  - "components/academyLanding/blog/google-ai-studio-guide/GoogleAiStudioGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["[TODO] project-config.yaml（user.name確認済み）"]
  downstream:
    - "app/academy/blog/google-ai-studio-guide/page.tsx"
    - "components/academyLanding/blog/google-ai-studio-guide/GoogleAiStudioGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ要約

- 対象記事: `google-ai-studio-guide`
- 主KW: Google AI Studio 使い方 / Google AI Studio とは
- サブKW: Gemini API 始め方 / Google AI Studio 無料 / Google AI Studio 日本語
- 調査日: 2026-02-19

## 一次情報（公式）一覧

| 種別 | URL | 採用理由 | 確認日 |
|---|---|---|---|
| Google公式ドキュメント | https://ai.google.dev/gemini-api/docs/ai-studio-quickstart | AI Studioの定義、Get code、Run settings、チャット検証手順の根拠 | 2026-02-19 |
| Google公式ドキュメント | https://ai.google.dev/gemini-api/docs/pricing | Free tier / Paid tierの存在、およびモデルごとの料金体系の変動性の根拠 | 2026-02-19 |
| Google公式ドキュメント | https://ai.google.dev/gemini-api/docs/billing | AI Studio無料利用と有料APIキー連携時の課金条件の根拠 | 2026-02-19 |
| Google公式プロンプト集 | https://ai.google.dev/gemini-api/prompts | 音声・動画Q&A・画像→JSONなどマルチモーダル例の根拠 | 2026-02-19 |
| OpenAI公式ヘルプ | https://help.openai.com/en/articles/6783457-chatgpt-general-faq | ChatGPTの位置づけ（汎用対話サービス）比較の根拠 | 2026-02-19 |
| Google公式アプリ情報 | https://apps.apple.com/us/app/google-gemini/id6477489729 | Geminiアプリの位置づけ（個人向けAIアシスタント）比較の補助根拠 | 2026-02-19 |

## コミュニティ実声（SNS/フォーラム）

| ソース | URL | 要点（要約） | バランス |
|---|---|---|---|
| Google AI Developers Forum | https://discuss.ai.google.dev/t/google-ai-studio-api-cant-generate-api-key/96396 | iOS環境でAPIキー作成が進まず、PCブラウザ利用で解消した報告がある | つまずき |
| Google AI Developers Forum | https://discuss.ai.google.dev/t/free-google-ai-studio-has-been-reset-to-paid-tier-and-billing-information-needs-to-be-set-up/103803 | 無料/有料の表示変化に戸惑う投稿。「AI Studio自体は無料」という運営側案内への言及あり | 懸念 |
| Google AI Developers Forum | https://discuss.ai.google.dev/t/this-feature-is-not-available-in-your-country-yet/126066 | 国・地域条件や回線環境で機能表示が変わるという相談 | つまずき |
| App Storeレビュー群（Gemini app） | https://apps.apple.com/us/app/google-gemini/id6477489729 | 使いやすさ評価と機能制限への不満が併存し、期待と制約のギャップが見える | 肯定/懸念 |

## Claim検証（2ソース照合）

| Claim | 照合ソースA | 照合ソースB | 判定 |
|---|---|---|---|
| Google AI StudioはGeminiモデルを素早く試し、Get codeで実装へ進める | ai-studio-quickstart | Gemini API docsトップ導線（Get API key / docs構成） | 確認済み |
| Google AI Studioはチャット検証向けUIとRun settingsを持つ | ai-studio-quickstart（Prompts and settings節） | Prompt Gallery（具体例: Video Q&A, Recipe to JSON） | 確認済み |
| Gemini APIにはFree tierとPaid tierがある | pricing | billing（Paid Tier説明） | 確認済み |
| AI Studioは無料で使えるが、有料APIキー連携時は課金対象になりうる | billing FAQ | pricing（無料/有料のモデル別区分） | 確認済み |
| ChatGPTとGoogle AI Studioは用途が違う（汎用対話 vs 開発検証） | OpenAI ChatGPT FAQ | Google AI Studio quickstart | 確認済み |

## 変動情報メモ（本文反映必須）

- 料金、無料枠、レート制限、モデル提供可否は変動するため本文に確認日を明記する
- 推奨表記:
  - 「※2026年2月19日時点。最新の料金・仕様は公式ページを確認」
- 断定回避:
  - モデル別の数値は将来変更されるため、固定価格を本文で断定しない

## 不確実項目

- [要確認: Gemini Apps Privacy Hubの特定ヘルプURLの取得性]
  - 検索断片では確認できるが、取得不可のケースがあるため、記事では「Geminiアプリ公式情報」として補助利用に留める
