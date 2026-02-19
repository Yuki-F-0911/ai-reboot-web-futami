---
title: "記事調査ログ｜google-ai-studio-app-build-guide"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-google-ai-studio-app-build-guide.md"
  - "app/academy/blog/google-ai-studio-app-build-guide/page.tsx"
  - "components/academyLanding/blog/google-ai-studio-app-build-guide/GoogleAiStudioAppBuildGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["[TODO] project-config.yaml（user.name確認済み）"]
  downstream:
    - "app/academy/blog/google-ai-studio-app-build-guide/page.tsx"
    - "components/academyLanding/blog/google-ai-studio-app-build-guide/GoogleAiStudioAppBuildGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ要約

- 対象記事: `google-ai-studio-app-build-guide`
- 主KW: Google AI Studio App Build 使い方 / Google AI Studio アプリ作成
- サブKW: AI アプリ 作成 ノーコード / Gemini アプリ 開発 / Google AI Studio 機能
- 調査日: 2026-02-19

## 一次情報（公式）一覧

| 種別 | URL | 採用理由 | 確認日 |
|---|---|---|---|
| Google公式ドキュメント | https://ai.google.dev/gemini-api/docs/ai-studio-build-mode | Build mode（App Build）の目的、操作の流れ、Deployment導線の根拠 | 2026-02-19 |
| Google公式ドキュメント | https://ai.google.dev/gemini-api/docs/ai-studio-quickstart | AI Studioの基本操作、Prompt/Run settings、Get codeの位置づけの根拠 | 2026-02-19 |
| Google公式ドキュメント | https://ai.google.dev/gemini-api/docs/billing | AI Studio自体は無料で利用可能、APIキー利用時の課金条件の根拠 | 2026-02-19 |
| Google公式ドキュメント | https://ai.google.dev/gemini-api/docs/pricing | Free tier / Paid tierの区分、料金情報の変動性の根拠 | 2026-02-19 |
| Google公式ドキュメント | https://ai.google.dev/gemini-api/docs/api-key | APIキー発行と管理、運用時のセキュリティ注意点の根拠 | 2026-02-19 |
| Google公式ブログ | https://developers.googleblog.com/en/introducing-gemini-2-5-flash-image/ | Build modeの位置づけ（AI Studio上での構築/改良）に関する補助根拠 | 2026-02-19 |

## コミュニティ実声（SNS/フォーラム）

| ソース | URL | 要点（要約） | バランス |
|---|---|---|---|
| Google AI Developers Forum | https://discuss.ai.google.dev/t/app-build-preview-broken/72114 | Previewが壊れて使えない報告があり、運営側で修正ロールアウトが案内された | つまずき |
| Reddit | https://www.reddit.com/r/ChatGPTCoding/comments/1m1lxm9/struggling_to_launch_ai_studio_app_any_tips/ | 2日でAppを構築できた一方、Google Cloud Runでデプロイにつまずいた声がある | 肯定/懸念 |
| Reddit | https://www.reddit.com/r/Bard/comments/1lybajx/google_ai_studio_app_i_created_has_gone/ | 公開済みAppが後で見えなくなる体験談があり、公開設定確認の重要性が示唆される | 懸念 |
| Reddit | https://www.reddit.com/r/Bard/comments/1ms2fhn/google_ai_studio_app_build_feature_is_unusable/ | 連続編集で品質低下・戻し操作の難しさを指摘する投稿があり、小刻み改善運用が必要 | つまずき |

## Claim検証（2ソース照合）

| Claim | 照合ソースA | 照合ソースB | 判定 |
|---|---|---|---|
| Build modeは自然言語でReactベースのWebアプリを生成し、編集・テスト・公開までAI Studio内で進められる | ai-studio-build-mode | Google公式ブログ（Build mode紹介） | 確認済み |
| App Buildの推奨フローは「要件入力→エラー確認→反復改善→公開」の順で進めると安定する | ai-studio-build-mode（ベストプラクティス） | Reddit実声（連続編集での不安定化） | 確認済み |
| ノーコードで試作は可能だが、本番運用ではAPIキー管理・課金確認・公開設定確認が必要 | ai-studio-build-mode（deploy前提） | billing / api-key / community投稿 | 確認済み |
| 無料で始められるが、API利用条件や料金は更新されうるため都度確認が必要 | billing | pricing | 確認済み |

## 変動情報メモ（本文反映必須）

- Build modeの機能名称、公開導線、利用可能リージョンは変更される可能性がある
- 料金、無料枠、レート制限、API利用条件は変動する
- 推奨表記:
  - 「※2026年2月19日時点。最新の仕様・料金は公式情報を確認」

## 不確実項目

- [要確認: Build modeで生成される全テンプレートの網羅リスト]
  - 公式ページには機能説明はあるが、固定テンプレート一覧の完全網羅は確認困難
- [要確認: Cloud Runデプロイ時の無料枠条件の地域差]
  - Google Cloud側の条件に依存するため、記事では固定値を断定しない
