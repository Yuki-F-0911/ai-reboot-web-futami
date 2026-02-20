---
title: "記事調査ログ｜gemini-3-practical-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-gemini-3-practical-guide.md"
  - "app/academy/blog/gemini-3-practical-guide/page.tsx"
  - "components/academyLanding/blog/gemini-3-practical-guide/Gemini3PracticalGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["[TODO] project-config.yaml（user.name確認済み）"]
  downstream:
    - "app/academy/blog/gemini-3-practical-guide/page.tsx"
    - "components/academyLanding/blog/gemini-3-practical-guide/Gemini3PracticalGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ要約

- 対象記事: `gemini-3-practical-guide`
- 主KW: Gemini 3.1 使い方
- サブKW: Gemini 3.0 違い / Google Gemini Pro 2026 / Gemini 実務活用
- 調査日: 2026-02-20

## 一次情報（公式）一覧

| 種別 | URL | 採用理由 | 確認日 |
|---|---|---|---|
| Google公式リリースノート | https://ai.google.dev/gemini-api/docs/changelog | 2026-02-19にGemini 3.1 Pro一般提供開始、3.1の新エンドポイント情報の根拠 | 2026-02-20 |
| Google公式モデルカード | https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro | Gemini 3.1 Proの入力形式、出力形式、Thinking、File search対応状況の根拠 | 2026-02-20 |
| Google公式モデルカード | https://ai.google.dev/gemini-api/docs/models/gemini-3-pro | Gemini 3.0 Proの更新日、能力差分比較の根拠 | 2026-02-20 |
| Google公式料金ページ | https://ai.google.dev/gemini-api/docs/pricing | Gemini 3.1 Proと3.0 Proの従量料金比較、Veo/Imagen等の現行マルチモーダル供給状況の根拠 | 2026-02-20 |
| Google公式開発ガイド | https://ai.google.dev/gemini-api/docs/gemini-3 | 3.1/3.0料金表と導入ガイドライン（推奨モデル、低遅延用途など）の根拠 | 2026-02-20 |
| Google Workspace管理者ヘルプ | https://support.google.com/a/answer/15853029 | Gmail / Docs / Drive等のWorkspace連携機能の提供状況根拠 | 2026-02-20 |
| Geminiアプリ連携ヘルプ | https://support.google.com/gemini/answer/13695044 | Gemini Appsの接続先（Google Workspace, Maps, YouTubeなど）と制限事項の根拠 | 2026-02-20 |
| OpenAI公式発表 | https://openai.com/index/introducing-gpt-5-2 | GPT-5.2公開日、主要改善点、提供チャネル（ChatGPT/API）の根拠 | 2026-02-20 |
| OpenAI公式料金ページ | https://openai.com/api/pricing/ | GPT-5.2のAPI価格レンジ（Input/Output/Cached）の根拠 | 2026-02-20 |

## コミュニティ実声（SNS/フォーラム）

| ソース | URL | 要点（要約） | バランス |
|---|---|---|---|
| Google AI Developers Forum | https://discuss.ai.google.dev/t/why-is-gemini-3-0-pro-so-major-downgrade/107899 | 3.0 Proの品質低下を指摘する投稿。実運用でモデル更新時の品質変動が起きうる点を示す | 懸念 |
| Reddit（r/Bard） | https://www.reddit.com/r/Bard/comments/1kwlvr3/im_blown_away_by_gemini_3pro_it_is_very_good_and/ | 3.0 Proの改善を高評価する投稿。用途によっては体感品質が高いという肯定意見 | 肯定 |
| Reddit（r/Bard） | https://www.reddit.com/r/Bard/comments/1lc4j7s/gemini_3_pro_is_not_good_enough/ | 3.0 Proへの不満と、3.1への期待を示す声。高難度タスクでの品質課題を示唆 | 懸念 |
| Reddit（r/singularity） | https://www.reddit.com/r/singularity/comments/1lqdk5r/google_releases_gemini_31_pro_with_better/ | 3.1 Pro公開後、推論品質と高速性の改善報告がある一方、用途差による評価分散も見られる | 肯定/懸念 |
| Google AI Developers Forum | https://discuss.ai.google.dev/t/google-ai-studio-api-cant-generate-api-key/96396 | APIキー発行導線でのつまずき報告。UI更新時の導線変化が初期導入障壁になりやすい | つまずき |

## Claim検証（2ソース照合）

| Claim | 照合ソースA | 照合ソースB | 判定 |
|---|---|---|---|
| Gemini 3.1 Proは2026-02-19に一般提供開始 | Gemini API Changelog（2026-02-19項目） | Google Developers Blog「Gemini 3.1 Pro」公開日 | 確認済み |
| 3.1 Proは3.0 Proより推論品質・トークン効率・根拠提示を改善した旨が公式記載されている | Gemini 3.1 Pro model card（overview） | Google Developers Blog（性能訴求） | 確認済み |
| APIの従量単価は3.1 Proと3.0 Proで同額（Input/Output/Cached） | Gemini API Pricing（3.1 Pro, 3.0 Pro） | Gemini 3 Developer Guide（価格表） | 確認済み |
| Workspace連携（Gmail/Docs/Drive）は提供されるが、利用可否は管理設定・地域・機能制約に依存する | Workspace管理者ヘルプ（アプリ別機能） | Gemini connected apps ヘルプ（接続条件と制約） | 確認済み |
| Gemini 3.1 Proは画像/音声/動画を入力できる一方、出力はテキスト中心（音声生成やLive APIは未サポート） | Gemini 3.1 Pro model card（Data types, Capabilities） | Gemini API audio/video understanding docs（入力理解系の公式導線） | 確認済み |
| GPT-5.2は2026年2月公開で、ChatGPTとAPI双方で提供される | OpenAI公式発表（introducing GPT-5.2） | OpenAI API Pricing（GPT-5.2価格行） | 確認済み |

## 変動情報メモ（本文反映必須）

- 価格・上限・提供地域・Workspace連携可否は変動しやすいため、本文内に確認日（2026-02-20）を明記する
- 旧世代（1.5/2.0/2.5）情報と混同しないため、本文中で「3.0/3.1に限定した比較」であることを明示する
- 推奨表記:
  - 「※2026年2月20日時点。最新仕様は公式ドキュメントで確認」

## 不確実項目

- [要確認: Computer use機能の3.1 Pro適用範囲]
  - Changelogには3.x系のComputer use関連更新がある一方、3.1 Pro model cardでは `Not supported` 記載がある
  - APIエンドポイント（generateContent / Interactions API）差分の可能性があるため、記事本文では断定を避ける
