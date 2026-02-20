---
title: "記事調査ログ｜microsoft-copilot-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-microsoft-copilot-guide.md"
  - "app/academy/blog/microsoft-copilot-guide/page.tsx"
  - "components/academyLanding/blog/microsoft-copilot-guide/MicrosoftCopilotGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/microsoft-copilot-guide/page.tsx"
    - "components/academyLanding/blog/microsoft-copilot-guide/MicrosoftCopilotGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ要約

- 対象記事: `microsoft-copilot-guide`
- 主KW: Microsoft Copilot 使い方 2026
- サブKW: Windows Copilot / Microsoft 365 Copilot / Copilot 無料版 有料版
- ターゲット: 個人・法人（Windows/Officeユーザー）
- 調査日: 2026-02-20

## 一次情報（公式）一覧

| 種別 | URL | 採用理由 | 確認日 |
|---|---|---|---|
| Microsoftサポート（Copilot Pro） | https://support.microsoft.com/ja-jp/topic/copilot-pro-%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B-cd2b953f-d955-4e40-bf8f-08744353c891 | Copilot Proの価格（`月額¥3,200`）と主要機能を確認 | 2026-02-20 |
| Microsoftサポート（AIクレジット） | https://support.microsoft.com/ja-jp/topic/copilot-%E3%81%A7-ai-%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B-36c605b8-75da-42ad-8f32-48fbced2f7ce | 無料版の利用上限（AIクレジット制）と有料版の差分を確認 | 2026-02-20 |
| Microsoftサポート（Windows向けCopilot） | https://support.microsoft.com/ja-jp/windows/windows-%E7%94%A8-copilot-%E3%81%B8%E3%82%88%E3%81%86%E3%81%93%E3%81%9D-473708c7-e92b-4a0d-94af-d9f1edc5c364 | Windows 11上でのCopilot無料利用導線を確認 | 2026-02-20 |
| Microsoftサポート（EdgeのCopilot） | https://support.microsoft.com/ja-jp/microsoft-edge/microsoft-edge-%E3%81%AE-copilot-b93046f4-78a9-4f2c-ac9c-7c49e42db33c | Edge統合Copilotの使い方と対応範囲を確認 | 2026-02-20 |
| Microsoft 365 Copilot for Business（日本） | https://www.microsoft.com/ja-jp/microsoft-365/copilot/business | 法人向け価格（`¥4,497/ユーザー/月`）・対象条件・最大ユーザー数（300）を確認 | 2026-02-20 |
| Microsoft Learn（Copilot Chat） | https://learn.microsoft.com/ja-jp/copilot/microsoft-365/microsoft-365-copilot-chat | 無償のCopilot Chat（Webグラウンディング）と有償版差分を確認 | 2026-02-20 |
| Microsoft Learn（サポート言語） | https://learn.microsoft.com/ja-jp/copilot/microsoft-365/microsoft-365-copilot-architecture#supported-languages-for-microsoft-365-copilot | 日本語を含む対応言語とアプリ別制約（Excel英語優先）を確認 | 2026-02-20 |
| Microsoft 365 個人向けプラン（日本） | https://www.microsoft.com/ja-jp/microsoft-365/p/microsoft-365-premium/cfq7ttc0k85r | 個人向け上位プランの価格（`月額¥3,200` / 年額¥32,000）を確認 | 2026-02-20 |
| Microsoft 365 Blog（SMB向け一般提供） | https://www.microsoft.com/en-us/microsoft-365/blog/2024/01/15/copilot-for-microsoft-365-now-generally-available-for-small-and-mid-sized-businesses/ | SMB向け展開時の契約条件変更（旧300席下限撤廃）を確認 | 2026-02-20 |
| Microsoft Copilot Blog（GPT-5） | https://blogs.microsoft.com/blog/2025/09/10/copilot-and-ai-updates-september-2025/ | Copilot無料ユーザー向けGPT-5展開方針を確認 | 2026-02-20 |

## コミュニティ実声（SNS/フォーラム）

| ソース | URL | 要点（要約） | バランス |
|---|---|---|---|
| Reddit（r/microsoft） | https://www.reddit.com/r/microsoft/comments/1li4npt/copilot_pro_monthly_fee_not_worth/ | 月額課金に対して効果実感が薄いという声。個人用途は費用対効果の事前検証が必要。 | 懸念 |
| Reddit（r/CopilotPro） | https://www.reddit.com/r/CopilotPro/comments/1ie67w8/is_copilot_pro_worth_it/ | Word/PowerPoint中心ユーザーでは時短価値を感じるという意見。用途の一致が鍵。 | 肯定 |
| Reddit（r/microsoft365） | https://www.reddit.com/r/microsoft365/comments/1f6dksp/how_do_you_all_find_the_copilot_for_m365_license/ | M365 Copilotのライセンス単価に対する評価が割れる。導入前KPI設定の重要性が高い。 | 肯定/懸念 |
| Reddit（r/microsoft365） | https://www.reddit.com/r/microsoft365/comments/1hqryoo/m365_copilot_chat_is_available_to_use_with_no/ | 無償Copilot Chat解放を評価する声。まず無償検証で適用業務を絞る動きが多い。 | 肯定 |
| Reddit（r/sysadmin） | https://www.reddit.com/r/sysadmin/comments/1f5ms5e/is_microsoft_copilot_worth_it_for_my_organization/ | 管理者視点で「権限・監査・入力ガイドライン」が未整備だと定着しにくいという報告。 | つまずき |

## Claim検証（2ソース照合）

| Claim | 照合ソースA | 照合ソースB | 判定 |
|---|---|---|---|
| Copilotには「Windows/Edgeなどの無料導線」「Copilot Pro」「Microsoft 365 Copilot」の3系統がある | Windows向けCopilotサポート | Copilot Proサポート / Copilot for Business | 確認済み |
| 無料版はAIクレジットの月次上限があり、有料版はクレジット拡張と優先アクセスがある | AIクレジットFAQ | Copilot Proサポート | 確認済み |
| Copilot Pro（個人向け）は月額3,200円表記が公式サポートに存在する | Copilot Proサポート | Microsoft 365 Premium個人向け価格（同額帯） | 確認済み（商品表示差は注記） |
| M365 Copilot（法人向け）は追加課金で、対象となるMicrosoft 365契約が前提 | Copilot for Business | Copilot Chat（ライセンス有無差分） | 確認済み |
| Copilot Chatは対象テナントで無償利用可能だが、Microsoft 365アプリ内の高度機能は有償ライセンスが必要 | Copilot Chat（Learn） | Copilot for Business | 確認済み |
| 日本語は対応言語に含まれるが、アプリによって制約がありExcelは英語優先の機能が残る | Supported languages（Learn） | Copilot Chat（Learn） | 確認済み |
| 2025年時点でCopilot無料ユーザーにもGPT-5展開方針が示された | Copilot Blog（2025-09） | AIクレジットFAQ（有料優先アクセス） | 条件付き確認 |

## 価格整理（2026-02-20時点）

### 個人向け（日本）

| 項目 | 価格 | 補足 |
|---|---:|---|
| Copilot Pro | 月額 ¥3,200 | サポートページで案内される個人向け上位利用枠 |
| Microsoft 365 Premium（個人向け） | 月額 ¥3,200 / 年額 ¥32,000 | 日本公式ストア表記。Copilot価値を含む上位個人プラン |

### 法人向け（日本）

| 項目 | 価格 | 補足 |
|---|---:|---|
| Microsoft 365 Copilot（Business） | ¥4,497 / ユーザー / 月（年契約） | 追加ライセンス。対象Microsoft 365契約が前提 |
| 契約ユーザー条件 | 1〜300ユーザー（Business表記） | SMB向けの運用範囲。Enterprise条件は別途確認 |

## ファクトチェック観点への回答メモ

1. Copilot Pro・M365 Copilotの2026年料金（円換算）
   - Copilot Pro: `月額¥3,200`（Microsoftサポート）
   - M365 Copilot（Business）: `¥4,497/ユーザー/月`（日本公式）
2. 無料版の利用制限（GPT-5.2アクセス可否）
   - 無料版はAIクレジット制で上限あり
   - Copilot Blogで「GPT-5無料展開」は確認できるが、`GPT-5.2` の無料版明記は一次情報で未確認
   - 記事本文では `[要確認: 無料版GPT-5.2明示提供]` を残す
3. 日本語での応答品質と制限
   - 日本語はサポート言語に含まれる
   - Excelは機能によって英語優先制約が残るため、部門テストで確認が必要
4. 企業向けM365 Copilotの最低契約数・条件
   - 2024年の公式発表で旧300席下限は撤廃済み
   - 2026年時点Businessページは「1〜300ユーザー」運用・対象M365契約必須
   - Enterpriseの最小契約数は公開ページだけでは断定困難

## 変動情報メモ（本文反映必須）

- 料金・契約条件・モデルアクセスは変更されるため、記事本文に確認日 `2026-02-20` を明記する
- 「Copilot Pro」と「Microsoft 365 Premium（個人向け）」の表示差があるため、同額帯である点を補足して誤解を避ける
- 企業導入判断はライセンス単価だけでなく、セキュリティ/監査/教育コストを含めて比較する

## 不確実項目

- [要確認: Copilot無料版でのGPT-5.2明示提供]
  - 公開一次情報では「GPT-5展開」は確認できるが、`GPT-5.2` の版指定は確認できない
- [要確認: Enterprise契約での最小席数・契約下限]
  - SMB向け（1〜300ユーザー）は明示されるが、Enterprise条件は営業見積依存
