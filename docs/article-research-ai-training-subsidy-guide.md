---
title: "記事リサーチ｜ai-training-subsidy-guide"
version: "1.0"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-ai-training-subsidy-guide.md"
  - "app/academy/blog/ai-training-subsidy-guide/page.tsx"
  - "components/academyLanding/blog/ai-training-subsidy-guide/AiTrainingSubsidyGuidePage.tsx"
status: "draft"
dependencies:
  upstream: ["../project-config.yaml"]
  downstream:
    - "app/academy/blog/ai-training-subsidy-guide/page.tsx"
    - "components/academyLanding/blog/ai-training-subsidy-guide/AiTrainingSubsidyGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: ai-training-subsidy-guide

## 0. 調査条件
- 対象テーマ: `AI研修 助成金 申請 / リスキリング 補助金 法人`
- 確認日: `2026-02-19`
- 目的: 法人の人事・総務・経営者が、生成AI研修に使える助成金の全体像と申請フローを誤りなく判断できる記事を作る
- 方針: 制度要件は厚生労働省・公的機関の一次情報を優先し、民間実務記事は補助根拠として扱う

## 1. 一次情報（公式）ソース
1. [人材開発支援助成金｜厚生労働省](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html)  
   - 制度全体、6コース、令和7年4月1日見直し告知、各コースの詳細版パンフレット導線
2. [令和7年度版 事業展開等リスキリング支援コースのご案内（詳細版）](https://www.mhlw.go.jp/content/11800000/001514283.pdf)  
   - 助成率（中小75%/大企業60%）、賃金助成（1,000円/500円）、計画届〜支給申請の期限、申請簡素化の改正内容
3. [人材開発支援助成金 令和7年4月1日見直しリーフレット](https://www.mhlw.go.jp/content/11800000/001469655.pdf)  
   - 申請手続き見直し（計画届の提出期間を「訓練開始日6か月前〜1か月前」に明確化）
4. [令和7年度版 人への投資促進コースのご案内（詳細版）](https://www.mhlw.go.jp/content/11800000/001514282.pdf)  
   - 定額制訓練（サブスク型）やeラーニング要件、計画届提出期限、受講回数要件
5. [令和7年度事業外スキルアップ助成金｜東京しごと財団](https://www.koyokankyo.shigotozaidan.or.jp/jigyo/skillup/skill-R7jigyogai.html)  
   - 自治体系（東京都）での研修助成の代表例として、助成率・上限・受講要件を確認

## 2. 実務現場の補助根拠（民間情報）
1. [人材開発支援助成金について（社労士事務所ブログ）](https://ishiyama-sr.com/blog/20250313-1433/)  
   - 生成AI研修での活用相談が増えている実務感
2. [人材開発助成金のご案内（ネットラーニング）](https://www.netlearning.co.jp/about/subsidy.html)  
   - eラーニング申請時に要件理解が分かれやすい実務ポイント
3. [令和7年度/2025年度最新版…リスキリング支援コース（Qualif）](https://qualif.jp/lab/utilizingsubsidies/)  
   - 「古い記事を鵜呑みにしない」注意喚起、記録設計の重要性
4. [人材開発支援助成金の概要・要件解説（トライズ）](https://trise-c.jp/blog/reskilling-support-course/)  
   - 申請時の経費区分・証憑管理で詰まるパターン

## 3. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| 生成AI研修は人材開発支援助成金の対象になり得る | 厚労省 d01-1（事業展開等リスキリング支援コースの定義） | 事業展開等リスキリング支援コース詳細版（DX/GXに伴う訓練を明示） | 採用 |
| 申請は「事前計画→訓練→支給申請」の順で、開始後の計画届は原則不可 | 事業展開等リスキリング詳細版（手続きの流れ） | 見直しリーフレット（計画届6か月前〜1か月前） | 採用 |
| 助成率は企業規模・コースで変わる（例: 75%/60%） | 事業展開等リスキリング詳細版の助成額表 | 見直しリーフレットの助成率・賃金助成表 | 採用 |
| eラーニングは対象でも、進捗管理・提供要件を満たさないと不支給リスクがある | 人への投資促進コース詳細版（LMS等要件） | 事業展開等リスキリング詳細版（eラーニング要件明確化） | 採用 |
| 国の助成金に加えて自治体助成を併用検討できる（同一経費の重複は要注意） | 東京しごと財団 事業外スキルアップ助成金 | 厚労省 d01-1（コース別要件・申請区分の厳格性） | 採用（個別確認前提） |

## 4. 記事反映方針
- 情報ギャップ起点: 「AI研修に助成金が使えることを知らない」担当者向けに結論先出し
- 中核制度: 人材開発支援助成金（特に事業展開等リスキリング支援コース）を主軸に解説
- 5ステップ: `制度選定 → 事前申請 → 研修実施 → 支給申請 → 審査・着金` を図解風に構成
- 落とし穴: 事前申請漏れ、対象外経費、訓練区分誤認、eラーニング進捗証憑不足、同一経費の二重申請
- 内部リンク: `dx-reskilling-subsidy-guide` / `education-training-benefit-ai` / `corporate-ai-training` / `ai-adoption-proposal-template`
- LINE CTA: 指定文言で3箇所配置。申請フローチェックリストをLINE特典として誘導

## 5. 不確実情報・注意点
- 令和8年度以降の制度継続・予算枠は変更可能性があるため、固定断定しない
- 助成率や対象経費はコース・企業規模・訓練形式で変わるため、「必ず最新要領確認」を明記
- 本記事は一般的な制度案内であり、個別案件は社労士等の専門家と管轄労働局への確認を推奨する
