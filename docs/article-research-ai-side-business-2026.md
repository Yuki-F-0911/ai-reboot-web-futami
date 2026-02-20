---
title: "記事リサーチ｜ai-side-business-2026"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-side-business-2026.md"
  - "app/academy/blog/ai-side-business-2026/page.tsx"
  - "components/academyLanding/blog/ai-side-business-2026/AiSideBusiness2026Page.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/ai-side-business-2026/page.tsx"
    - "components/academyLanding/blog/ai-side-business-2026/AiSideBusiness2026Page.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-side-business-2026

## 0. 調査条件
- 対象テーマ: `AI副業 2026 稼ぎ方`
- 確認日: `2026-02-20`
- 目的: 初心者が「月5万円」を現実的に目指すための分野選定・案件相場・税務リスクを整理する
- 方針: 制度は公的情報を優先、案件単価は実募集ページを確認、コミュニティ意見は補助根拠として扱う

## 1. 一次情報（公式・一次統計・実募集）ソース
1. [ランサーズ: 新・フリーランス実態調査 2024-2025年版](https://www.lancers.co.jp/news/pr/24684/)  
   - `フリーランス人口 1,303万人`、`経済規模 20.32兆円` の推計を公表
2. [財務省 広報誌「ファイナンス」2025年10月号（副業の実態把握）](https://www.mof.go.jp/public_relations/finance/202510/202510e.html)  
   - 就業構造基本調査ベースで「10年前比で副業者数は4割強増加」と整理
3. [Job総研: 2026年 副業・兼業の実態調査](https://jobsoken.jp/info/20260217/)  
   - 副業経験率、平均副業収入（`月5.4万円`）を調査結果として公開
4. [国税庁 タックスアンサー No.1900（給与所得者で確定申告が必要な人）](https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm)  
   - 給与所得者の副業所得が年20万円を超える場合の申告要件を明示
5. [目黒区: 個人住民税に関するFAQ](https://www.city.meguro.tokyo.jp/kurashi/zei/kojinjuuminzei/faq_juuminzei.html)  
   - 所得税の確定申告不要でも住民税申告が必要なケースがある点を案内
6. [厚生労働省: 副業・兼業](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000122184.html)  
   - ガイドラインと副業運用時の確認事項（就業規則、労務管理）を提示
7. [公正取引委員会: フリーランス法特設サイト](https://www.jftc.go.jp/freelancelaw_2024/index.html)  
   - 受発注時の取引条件明示や報酬支払期日等の法的論点を整理
8. [クラウドワークス案件 ID:12888785（SNS投稿運用）](https://crowdworks.jp/public/jobs/12888785)  
   - `固定報酬 55,000円`（掲載日: 2026-02-04）
9. [クラウドワークス案件 ID:12676884（n8n×Dify自動化）](https://crowdworks.jp/public/jobs/12676884)  
   - `固定報酬 30,000〜50,000円`（掲載日: 2025-12-13）
10. [クラウドワークス案件 ID:12906732（Looker Studioダッシュボード）](https://crowdworks.jp/public/jobs/12906732)  
    - `固定報酬 50,000〜100,000円`（掲載日: 2026-02-06）
11. [クラウドワークス案件 ID:12869160（AI動画プロンプト作成）](https://crowdworks.jp/public/jobs/12869160)  
    - `固定報酬 10,000〜30,000円`（掲載日: 2026-01-30）
12. [クラウドワークス案件 ID:12784291（広告レポートダッシュボード）](https://crowdworks.jp/public/jobs/12784291)  
    - `固定報酬 50,000〜100,000円`（掲載日: 2025-12-23）

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit r/sidehustle: successful side hustles with AI?](https://www.reddit.com/r/sidehustle/comments/1m9l6c7/those_of_you_having_successful_side_hustles_with/)  
   - 肯定: 小規模案件の反復で月次収益を積み上げる声
2. [Reddit r/Entrepreneur: making money with AI agency?](https://www.reddit.com/r/Entrepreneur/comments/1iv6377/anyone_making_a_lot_of_money_with_an_ai_agency/)  
   - 懸念: 「丸投げ提案」では継続率が低く、要件定義が収益を分けるとの声
3. [Reddit r/n8n: business with n8n](https://www.reddit.com/r/n8n/comments/1jv4zji/business_with_n8n/)  
   - つまずき: 自動化設計より運用保守・例外処理の工数が重いとの声
4. [Reddit r/Entrepreneur: actually making money with AI agencies?](https://www.reddit.com/r/Entrepreneur/comments/1f1g8i0/is_anyone_actually_making_money_with_ai_agencies/)  
   - 懸念: 参入増で差別化が難化し、ドメイン知識不足で失注するという声

※コミュニティ投稿は体験談であり、断定根拠ではなく「現場感の補助情報」として扱う。

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 2026年時点でも副業・フリーランス母数は増加基調 | 財務省（副業者数4割強増） | ランサーズ（1,303万人・20.32兆円） | 採用 |
| 「月5万円」は初心者が設定しやすい初期目標 | Job総研（平均副業収入5.4万円） | クラウドワークス実案件（3〜10万円帯の募集が存在） | 採用 |
| AI副業の初期分野は、文章・SNS・レポート/可視化が着手しやすい | クラウドワークス（AIプロンプト作成、SNS投稿運用） | クラウドワークス（Looker Studioレポート構築） | 採用 |
| 2026年の差分は「AIに丸投げ」より「要件定義と検収設計」が重視される点 | n8n/Dify案件（要件伴走系の募集） | Reddit実声（運用保守・要件定義不足の失敗談） | 採用（補助根拠を含む） |
| 給与所得者は副業所得20万円超で確定申告が必要 | 国税庁 No.1900 | 目黒区FAQ（住民税申告の注意） | 採用 |

## 4. 2026年2月時点の案件相場（観測ベース）
- 文章生成・プロンプト作成: `10,000〜30,000円/案件` 観測（CrowdWorks ID:12869160）
- SNS運用代行（AI活用含む）: `約55,000円/月次案件` 観測（CrowdWorks ID:12888785）
- データ分析・レポート可視化: `50,000〜100,000円/案件` 観測（CrowdWorks ID:12906732, 12784291）
- AIエージェント/自動化（n8n・Dify）: `30,000〜50,000円/案件` 観測（CrowdWorks ID:12676884）

注記:
- 上記は公開募集の一部サンプルであり、全市場平均ではない  
  `[要確認: プラットフォーム横断での統計的サンプル拡張]`
- 案件難易度・納期・保守範囲で単価分散が大きい

## 5. 記事反映方針
- 冒頭で「2025年→2026年の差分（丸投げ幻想の終わり）」を明示
- 初心者向け3分野（記事生成代行 / SNS運用代行 / データ分析・レポート代行）を、業務範囲・必要スキル・単価目安で比較
- 0〜6か月ロードマップを月次で提示し、学習→実績→受注→継続化を接続
- 月5万円の匿名事例は「案件構成パターン」として提示し、個人情報を出さない
- ツール紹介（ChatGPT・Claude・Dify・n8n）は「役割分担」で示し、ツール依存の断定を避ける
- 税務パートは「20万円基準」と「住民税申告」を分けて明示

## 6. 変動情報・未確定情報
- 副業市場規模の最新公的統計は公開タイミングに遅延があるため、2026年2月時点では2024〜2025公開データを基準化
- クラウドソーシング単価は日々変動するため、本文に確認日 `2026-02-20` を明記
- 住民税の申告要件は自治体差があるため、最終確認は居住地自治体へ  
  `[要確認: 居住地自治体の最新要件]`
