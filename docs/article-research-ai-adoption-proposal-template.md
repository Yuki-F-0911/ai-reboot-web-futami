---
title: "記事リサーチ｜ai-adoption-proposal-template"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-adoption-proposal-template.md"
  - "app/academy/blog/ai-adoption-proposal-template/page.tsx"
  - "components/academyLanding/blog/ai-adoption-proposal-template/AiAdoptionProposalTemplatePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/ai-adoption-proposal-template/page.tsx"
    - "components/academyLanding/blog/ai-adoption-proposal-template/AiAdoptionProposalTemplatePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-adoption-proposal-template

## 0. 調査条件
- 対象テーマ: `生成AI 稟議 書き方 / 生成AI 導入 計画書`
- 確認日: `2026-02-19`
- 目的: 生成AI導入稟議を通すために、承認者が判断できる「1枚計画書」の要件を明確化する
- 方針: 法規・ガバナンス・リスクは一次情報を優先し、SNS/コミュニティ実声は補助根拠として扱う

## 1. 一次情報（公式）ソース
1. [経済産業省: AI事業者ガイドライン（第1.1版）公開](https://www.meti.go.jp/press/2025/03/20260304003/20260304003.html)  
   - ガバナンス、透明性、説明責任、人間による監督など、導入時に必須となる論点
2. [個人情報保護委員会: 生成AIサービスの利用に関する注意喚起等](https://www.ppc.go.jp/news/careful_information/240212_AI_utilization/)  
   - 個人情報保護法との関係、業務利用時に確認すべき注意点
3. [個人情報保護委員会: 注意喚起資料（PDF）](https://www.ppc.go.jp/files/pdf/240212_AI_utilization.pdf)  
   - 利用目的の特定、入力データ管理、委託・第三者提供等の実務上の確認ポイント
4. [デジタル庁: 行政での生成AI利用環境の構築（2025年5月）](https://www.digital.go.jp/resources/open_data/publication/68f711de-b388-4845-8d10-fc2796f66b95/)  
   - 実証導入、利用実態、運用改善を段階的に進める実装知見
5. [NIST: AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)  
   - `Govern / Map / Measure / Manage` の継続的リスク管理フレーム

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit r/sysadmin: Is AI an IT Problem?](https://www.reddit.com/r/sysadmin/comments/1mphgb2/is_ai_an_it_problem/)  
   - 懸念: 現場先行で導入が進み、IT・セキュリティが後追いで統制負担を抱える
2. [Reddit r/sysadmin: AI Notetakers - do you install these?](https://www.reddit.com/r/sysadmin/comments/1lvy6gh/ai_notetakers_do_you_install_these_for_users/)  
   - 懸念: 無断導入、会議データ取り扱い、承認されていない外部サービス利用
3. [Reddit r/LocalLLaMA: Trouble getting buy-in for LLMs at work](https://www.reddit.com/r/LocalLLaMA/comments/1dp5xwc/trouble_getting_buyin_for_llms_at_work/)  
   - つまずき: 技術デモだけでは承認されず、業務効果とリスク説明が必要という実感
4. [Reddit r/Entrepreneur: How are small businesses using AI, and what concerns do you have?](https://www.reddit.com/r/Entrepreneur/comments/1ky0ye7/how_are_small_businesses_using_ai_and_what/)  
   - 肯定/懸念混在: 効率化期待は高い一方、誤情報・機密情報入力・費用対効果が不安
5. [Reddit r/artificial: How do you handle employees using AI tools in companies?](https://www.reddit.com/r/artificial/comments/1lryj9o/how_do_you_handle_employees_using_ai_tools_in/)  
   - 実務観点: 「禁止」より、ガイドライン・承認フロー・教育の三点セットが定着しやすい

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 稟議が止まる主因は「目的不明」「リスク不安」「費用見通し不足」の3点に集約される | r/LocalLLaMA（buy-in課題） | r/Entrepreneur（懸念の集中） | 採用 |
| 生成AI導入計画は、ガバナンス・責任分界・監督体制まで含めて提示すべき | AI事業者ガイドライン1.1 | NIST AI RMF | 採用 |
| 個人情報・機微情報の取り扱いは、稟議本文で対策と運用条件を明記すべき | 個人情報保護委員会（注意喚起ページ） | 個人情報保護委員会（PDF） | 採用 |
| 小さく始めるPoCは、承認障壁を下げつつ実測値を作る手段として有効 | デジタル庁（段階的利用・実証） | r/Entrepreneur（小規模活用の実感） | 採用 |
| 全社展開提案は、段階導入・責任者・ロードマップを明文化すると通りやすい | AI事業者ガイドライン1.1 | NIST AI RMF | 採用 |

## 4. 記事反映方針
- 冒頭で「通らない理由」を承認者視点で可視化し、意思決定項目を先に提示
- 1枚計画書の必須5項目（目的/期待効果/リスク対策/費用/ロードマップ）をテンプレ化
- 各項目に「そのまま使える記載例（コピペ可）」を付ける
- PoC提案と全社展開提案を並列で示し、組織成熟度に応じて選べる構成にする
- 内部リンクは指定4本（`ai-guideline-template` / `shadow-ai-countermeasures` / `corporate-ai-adoption-guide` / `ai-training-subsidy-guide`）を文脈に合わせて配置
- LINE CTAは指定文言・指定ボタンで3箇所に統一

## 5. 不確実情報・注意点
- 費用相場は会社規模・対象業務・契約条件で変動するため、断定的な固定金額は出さない
- 法令適合性は業界・契約・データ種別で異なるため、「最終判断は法務・情シスを含む社内決裁」で記載
- コミュニティ実声は意思決定の補助材料に限定し、断定根拠は一次情報中心で記述
