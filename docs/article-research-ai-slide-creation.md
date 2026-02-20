---
title: "記事調査ログ｜ai-slide-creation"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-slide-creation.md"
  - "app/academy/blog/ai-slide-creation/page.tsx"
  - "components/academyLanding/blog/ai-slide-creation/AiSlideCreationPage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/ai-slide-creation/page.tsx"
    - "components/academyLanding/blog/ai-slide-creation/AiSlideCreationPage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# 記事調査ログ: ai-slide-creation

- 対象記事: `ai-slide-creation`
- 主KW: `AI プレゼン スライド 自動生成`
- サブKW: `Gamma AI 使い方` / `Beautiful.ai` / `PowerPoint AI` / `プレゼン 時短 AI`
- ターゲット層: 個人・法人（プレゼン資料作成の頻度が高い人）
- 調査日: 2026-02-20

## 一次情報（公式）一覧

| 種別 | URL | 確認ポイント | 確認日 |
|---|---|---|---|
| Gamma公式ヘルプ（Free） | https://help.gamma.app/en/articles/7983027-what-s-included-in-the-free-plan | Freeで月400 AI credits付与、1回の生成で最大10 cardsを確認 | 2026-02-20 |
| Gamma公式ヘルプ（Credits） | https://help.gamma.app/en/articles/7980867-how-do-i-get-more-ai-credits | Plus/Pro/Ultraの月次クレジットとロールオーバー仕様を確認 | 2026-02-20 |
| Gamma公式ヘルプ（Billing） | https://help.gamma.app/en/articles/10128597-how-does-gamma-s-billing-work | 年払いは月払い比で約28%割引の案内を確認 | 2026-02-20 |
| Gamma価格ページ | https://gamma.app/pricing | プラン構成（Free/Plus/Pro/Ultra/Teams）を確認 | 2026-02-20 |
| Beautiful.ai価格ページ | https://www.beautiful.ai/pricing | Pro `$12/mo`（年払い）・Team `$40/member/mo`（年払い）を確認 | 2026-02-20 |
| Beautiful.ai翻訳機能ページ | https://www.beautiful.ai/features/translate | 100以上の言語で翻訳対応を確認 | 2026-02-20 |
| Beautiful.aiヘルプ（CJK） | https://help.beautiful.ai/hc/en-us/articles/25771708854797-How-do-I-import-CJK-fonts-Chinese-Japanese-Korean- | 日本語を含むCJKフォント運用手順を確認 | 2026-02-20 |
| Microsoft Copilot価格 | https://www.microsoft.com/en-us/microsoft-365/copilot/pricing | Copilot for Microsoft 365が`$18 user/month`（年契約）を確認 | 2026-02-20 |
| Microsoft Learn（ライセンス） | https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-licensing | Copilot利用に必要な対象M365ライセンス条件を確認 | 2026-02-20 |
| Microsoftサポート（PowerPoint） | https://support.microsoft.com/en-us/office/create-a-new-presentation-with-copilot-in-powerpoint-3222fd7f-873e-4e7c-85f2-3d80c76c644b | ファイルやプロンプトからスライド生成、Designer要件を確認 | 2026-02-20 |
| Googleサポート（Gemini in Slides） | https://support.google.com/docs/answer/13555662 | Slidesでの生成機能、対象エディション条件を確認 | 2026-02-20 |

## SNS/コミュニティ実声（補助根拠）

> 個人情報・アカウントIDは記載せず、実務論点のみ要約。

1. Reddit（r/powerpoint）  
   URL: https://old.reddit.com/r/powerpoint/comments/1cyuk3w/what_is_a_good_alternative_to_beautifulai/  
   要旨: Beautiful.aiは「まず出す」用途では速いが、最終品質は手動微調整が必要という意見が多い。

2. Reddit（r/powerpoint）  
   URL: https://old.reddit.com/r/powerpoint/comments/17b7jsk/ai_for_powerpoint/  
   要旨: Gamma利用で作業時間が短縮できたという肯定意見がある一方、デザイン改善は人の調整が必要という補足あり。

3. Reddit（r/GammaApp）  
   URL: https://old.reddit.com/r/GammaApp/comments/1jcexng/need_a_template_for_a_10slide_presentation_i/  
   要旨: Gamma Free利用時の「1回最大10 cards」制限により、長尺資料は分割生成が必要というつまずきが確認できる。

4. Reddit（r/powerpoint）  
   URL: https://old.reddit.com/r/powerpoint/comments/194de5z/paid_for_a_beautifulai_pro_account_not_worth_it/  
   要旨: Beautiful.ai有料利用の費用対効果に関して評価が分かれる。用途が合わないと割高感が出る。

5. Reddit（r/microsoft）  
   URL: https://old.reddit.com/r/microsoft/comments/1li4npt/copilot_pro_monthly_fee_not_worth/  
   要旨: Copilot Proは個人用途では価値を感じにくいケースがあり、導入前の対象業務の絞り込みが重要という声がある。

## Claim照合（2ソース以上）

### Claim 1
- 主張: AIスライド生成は「テキスト指示→構成案→初稿生成」までを短時間化できる。
- 根拠:
  - Microsoft PowerPointサポート（ファイル/プロンプトから新規プレゼン作成）
  - Googleサポート（SlidesでGeminiを使った新規スライド・画像生成）
- 判定: Supported

### Claim 2
- 主張: Gamma Freeは無料で試せるが、生成時に枚数制約がある。
- 根拠:
  - Gamma Freeプラン説明（1回最大10 cards）
  - Gamma credits説明（Freeは月400 AI credits）
- 判定: Supported

### Claim 3
- 主張: Gamma有料プランはクレジット管理が重要で、年払い割引がある。
- 根拠:
  - Gamma credits説明（Plus/Pro/Ultraで月次クレジットと繰越）
  - Gamma billing説明（年払いは月払い比約28%割引）
- 判定: Supported

### Claim 4
- 主張: Beautiful.aiは日本語コンテンツ作成を支える機能があるが、運用時の確認点がある。
- 根拠:
  - Beautiful.ai Translate（100+言語）
  - Beautiful.ai CJKフォントヘルプ（日本語フォント運用）
  - Beautiful.ai Pricing（“Create in 100+ languages”表記）
- 判定: Partially supported（UI日本語化範囲・DesignerBotの日本語生成品質は実運用で要確認）

### Claim 5
- 主張: PowerPoint CopilotはM365ライセンス要件を満たした環境で利用する前提。
- 根拠:
  - Microsoft Copilot pricing（$18 user/month、別途対象ライセンス必要）
  - Microsoft Learn licensing（Business Standard/Premium/E3/E5等の対象条件）
  - Microsoftサポート（個人向けM365はCopilot for Microsoft 365対象外）
- 判定: Supported

### Claim 6
- 主張: Google Slides AI（Gemini）は利用できるエディションが限定される。
- 根拠:
  - Googleサポート（Gemini in Slidesの対象エディション明示）
  - Googleサポート（機能例: 新規プレゼン生成/画像生成/要約）
- 判定: Supported

## ファクトチェック観点への回答メモ

### 1) Gamma の2026年料金・無料プランの枚数制限
- 確認できた事実:
  - Free: 月400 AI credits
  - Freeの生成制約: 1回の生成で最大10 cards
  - 有料体系: Plus / Pro / Ultra（クレジットは月次付与、未使用分ロールオーバーあり）
  - 年払い割引: 月払い比約28%割引
- [要確認: Plus/Pro/Ultraの最新USD単価]  
  - 公式価格ページは動的表示で、取得環境上は単価テキストの安定抽出ができなかった。公開前に価格ページ目視確認を推奨。

### 2) Beautiful.ai の日本語対応状況
- 確認できた事実:
  - 100+言語の翻訳対応が公式機能として案内される
  - 日本語を含むCJKフォントの運用手順が公式ヘルプで提供される
  - 価格ページで多言語作成に言及あり
- 実運用上の注意:
  - [要確認: UIの日本語化範囲]
  - [要確認: DesignerBot日本語プロンプト時の安定品質]

### 3) PowerPoint Copilot の機能とM365ライセンス要件
- 確認できた事実:
  - PowerPointでCopilotを使い、新規プレゼンを「ファイルから」「プロンプトから」生成可能
  - デザイン提案機能はDesigner利用条件（ネット接続・ライセンス等）に依存
  - Copilot for Microsoft 365は対象となるM365商用ライセンスが必須
  - Microsoft 365 Personal/FamilyはCopilot for Microsoft 365の対象外

## 記事反映の方針

1. 比較表は「生成起点」「無料枠」「有料要件」「日本語運用」「向いている用途」で統一する。  
2. 変動情報（価格・ライセンス・無料枠）には確認日 `2026-02-20` を明記する。  
3. 断定しきれない項目は `[要確認: ...]` を本文にも残す。  
4. 記事末尾のアカデミーCTAは3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と学ぶ環境）のみで表現し、特定ツール習得を連想させる文言を避ける。  

