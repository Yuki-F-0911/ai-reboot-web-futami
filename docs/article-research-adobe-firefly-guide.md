---
title: "記事リサーチ｜adobe-firefly-guide"
version: "1.0"
last_updated: "2026-02-20"
author: "さかもと"
reviewers: []
related_docs:
  - "docs/article-draft-adobe-firefly-guide.md"
  - "app/academy/blog/adobe-firefly-guide/page.tsx"
  - "components/academyLanding/blog/adobe-firefly-guide/AdobeFireflyGuidePage.tsx"
status: "draft"
dependencies:
  upstream:
    - "../project-config.yaml"
  downstream:
    - "app/academy/blog/adobe-firefly-guide/page.tsx"
    - "components/academyLanding/blog/adobe-firefly-guide/AdobeFireflyGuidePage.tsx"
impact_level: "low"
---

<!-- ============Rulesを確認============ -->

# リサーチ記録: adobe-firefly-guide

## 0. 調査条件
- 対象テーマ: `Adobe Firefly 使い方 2026`
- 主KW: `Adobe Firefly 使い方 2026`
- サブKW:
  - `Adobe AI 画像生成`
  - `Firefly 商用利用`
  - `Adobe Express AI`
- ターゲット: 個人・法人（デザイナー・クリエイター・Adobe利用者）
- 確認日: `2026-02-20`
- 方針:
  - 商用利用・ライセンスは Adobe 公式規約と公式FAQを優先
  - 無料/有料差分は Adobe の Generative credits FAQ と Firefly Plans を優先
  - Firefly Video の正式提供状況は日付付き一次情報（Adobe Newsroom / HelpX）で確認
  - SNS実声は補助根拠として扱い、個人IDは出さず要点のみ記録

## 1. 一次情報（公式）ソース
1. [Adobe Generative AI User Guidelines（Adobe Legal, Last Updated: April 24, 2025）](https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html)
2. [Generative credits FAQ（Adobe HelpX）](https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html)
3. [Creative Cloud Generative AI features（Adobe HelpX, Last updated: Feb 20, 2026）](https://helpx.adobe.com/creative-cloud/apps/generative-ai/creative-cloud-generative-ai-features.html)
4. [Compare plans that include generative AI（Adobe Firefly Plans）](https://www.adobe.com/products/firefly/plans.html)
5. [Adobe Firefly FAQ（Adobe）](https://www.adobe.com/products/firefly/faq.html)
6. [Adobe Firefly approach for business（Adobe Business）](https://business.adobe.com/uk/products/firefly-business/firefly-ai-approach.html)
7. [Adobe Newsroom（2025-04-24: Firefly Video Model generally available）](https://news.adobe.com/news/2025/04/adobe-revolutionizes-ai-assisted-creativity-firefly)
8. [Midjourney Terms of Service（Effective: February 12, 2026）](https://docs.midjourney.com/docs/terms-of-service)
9. [OpenAI Terms of Use（Published / Effective: January 1, 2026）](https://openai.com/policies/terms-of-use/)

## 2. SNS・コミュニティ実声（補助根拠）
1. [Reddit: Adobe Firefly is a Scam（r/Adobe）](https://www.reddit.com/r/Adobe/comments/1iq7857/adobe_firefly_is_a_scam/)
   - 傾向: 懸念。動画生成のクレジット消費（秒単位消費）と価格説明の分かりづらさへの不満が多い。
2. [Reddit: Adobe Firefly Announcements / Video Model / FAQ（r/Adobe）](https://www.reddit.com/r/Adobe/comments/1io4y1u)
   - 傾向: 懸念。CC契約者でも Video 系の利用条件が理解しづらいという声。
3. [Reddit: Anyone using Adobe Firefly?（r/OpenAI）](https://www.reddit.com/r/OpenAI/comments/1k8fs4t/anyone_using_adobe_firefly/)
   - 傾向: 賛否混在。品質に厳しい声がある一方、Adobe Stock用途で使っているという肯定も確認。
4. [Reddit: Is Firefly Image 3 out of beta?（r/Adobe）](https://www.reddit.com/r/Adobe/comments/1e68lyq)
   - 傾向: つまずき。β表記と商用利用可否の解釈が混乱しやすい。
5. [Reddit: Does new user get unlimited Firefly video generation?（r/Adobe）](https://www.reddit.com/r/Adobe/comments/1omg6g9/does_new_user_subscribed_before_december_1st_get/)
   - 傾向: 懸念。期間限定キャンペーン（無制限）と通常クレジット制の区別が分かりにくい。

## 3. 主要ファクト整理（商用利用ライセンス）

| 論点 | 一次情報 | 要点 |
|---|---|---|
| Firefly出力の商用利用可否 | Adobe Generative AI User Guidelines §8 | 原則として商用利用可。 |
| β機能の商用利用 | Adobe Generative AI User Guidelines §8 / Firefly FAQ / Firefly approach for business FAQ | β機能も「製品内等で別途禁止指定がなければ」商用利用可。 |
| 禁止事項 | Adobe Generative AI User Guidelines §1, §2, §4 | 違法用途、第三者権利侵害、AI学習用途への転用は禁止。 |
| 企業向け補償 | Firefly approach for business FAQ | 一部プラン/契約でIP indemnification対象（条件付き）。 |

補足:
- 「商用利用可」と「著作権侵害リスクがゼロ」は同義ではない。運用上は権利確認・最終審査が必要。

## 4. 主要ファクト整理（無料版と有料版の差）

### 4-1. 無料版（Firefly Free / CC free membership）
- Adobe公式FAQ上の表記:
  - Firefly Free の generative credits は `Limited`
  - Free membership は「無料で一定数のクレジット提供」「数は変更される可能性あり」
- したがって、**2026-02-20時点で公式に固定された「無料版の月間クレジット数」は明記されていない**。
- 公式FAQでは freeユーザー向けに「premium機能の試用世代数（例: 動画2回、翻訳40秒）」の例示あり。

### 4-2. 有料主要プラン（2026-02-20確認）
- Firefly Standard: `2,000`（premium向け）+ standard無制限
- Firefly Pro: `4,000`（premium向け）+ standard無制限
- Firefly Premium: `50,000`（premium向け）+ standard無制限
- Creative Cloud Pro: premium `4,000` + standard無制限
- Firefly mobile and web plan（on/after 2025-06-17契約）: `750`

### 4-3. 単体プランとの差（例）
- Photoshop Single App / Creative Cloud Standard は premium非対応（paywallあり）
- Adobe Express Premium は standard/premium両対応（250）

## 5. 主要ファクト整理（Firefly Videoの正式提供状況）

| 論点 | 一次情報 | 判定 |
|---|---|---|
| Firefly Video Modelの正式提供 | Adobe Newsroom（2025-04-24） | 「generally available」と明記。 |
| 2026時点の機能カテゴリ | HelpX Creative Cloud Generative AI features（2026-02-20更新） | Text to Video / Image to Video は premium機能として掲載。 |
| 依然βの周辺機能 | 同上 | Firefly video editor / Prompt to Edit / Generate Soundtrack 等は beta表記あり。 |
| 教育領域の例外 | Generative credits FAQ | K12 offeringsでは Firefly Video Model 非対応の注記あり。 |

結論:
- **Firefly Video Model本体は正式提供（GA）**
- ただし関連UI/編集機能の一部はβが継続
- プラン・組織種別（例: K12）で利用可否に差がある

## 6. 主要ファクト整理（Photoshop / Illustrator / Express での使い方に必要な事実）

- Photoshop（standard機能）:
  - Generative Fill / Generative Expand / Generate Background / Generate Image など
  - partner model連携機能は premium扱い
- Illustrator（standard機能）:
  - Text to Vector Graphic / Generative Recolor / Generative Expand など
  - Turntable は beta表記
- Adobe Express:
  - Generate Image / Insert Object / Rewrite / Caption Writer など
  - Generate Video は premium機能として記載
  - AI Assistant は beta表記
- Firefly web:
  - Text to Image, Text to Video, Image to Video, Translate Video/Audio, Text to Sound Effects 等を集約

## 7. 比較論点（Midjourney・DALL·E）

### Midjourney（公式TOS）
- 有料会員は「to the fullest extent possible」で生成資産を保有可能
- 年商100万USD超企業は Pro または Mega でないと資産保有条件を満たさない
- デフォルト公開/リミックス文化など運用面の前提がある

### DALL·E（OpenAI Terms of Use）
- OpenAI規約上、適用法の範囲でユーザーがOutputを保有
- 出力の正確性評価責任はユーザー側
- 利用はOpenAIポリシー・法令順守が前提

### 記事での比較方針
- 「どちらが上」ではなく、**商用運用時の契約明確性・制作ワークフロー統合性・クレジット設計**で比較
- Adobeは Creative Cloud統合と商用安全性訴求が強み
- Midjourney/DALL·Eは生成表現力やモデル特性が強みだが、契約・運用条件の確認が必須

## 8. Claim分解と照合（2ソース以上）

| Claim | 根拠A | 根拠B | 判定 |
|---|---|---|---|
| Firefly出力は原則商用利用できる | Adobe Legal Guidelines §8 | Firefly FAQ | 採用 |
| β機能は条件付きで商用利用可（禁止指定時は不可） | Adobe Legal Guidelines §8 | Firefly approach for business FAQ | 採用 |
| 無料版クレジットは固定数でなく「Limited / subject to change」 | Generative credits FAQ（Free users節） | Generative credits FAQ（Firefly Free table） | 採用 |
| Firefly Video Modelは正式提供済み | Adobe Newsroom 2025-04-24 | HelpX features（2026-02-20更新でpremium掲載） | 採用 |
| Firefly Video周辺にはβ機能が残る | HelpX features（betaラベル） | Generative credits FAQ（beta機能の記載） | 採用 |
| Photoshop/Illustrator/Expressで利用可能機能は異なる | HelpX features（アプリ別表） | Generative credits FAQ（premium可否） | 採用 |
| Midjourneyはプラン条件で商用運用前提が変わる | Midjourney TOS | Midjourney Subscription Plans（TOS参照） | 採用 |
| OpenAIはOutput権利をユーザーに割当（適用法の範囲） | OpenAI Terms of Use | OpenAI Business Terms | 採用 |

## 9. 不確実情報・要確認事項
- `[要確認: Firefly Free の厳密な月間クレジット数]`
  - 公式FAQは固定数を出さず `Limited` と明記。画面表示は地域/時期/施策で変動するため、運用時はアカウント画面で再確認が必要。
- `[要確認: 期間限定キャンペーン適用可否]`
  - 例: 2026-01-23〜2026-03-16の一部プラン無制限施策。記事公開タイミングで終了済み/延長の確認が必要。
- `[要確認: partner model利用時の追加制約]`
  - partner modelごとに消費クレジットと利用条件が異なるため、導入前に個別規約の再確認が必要。

## 10. 記事反映方針
- 冒頭で「Fireflyは商用利用前提の設計だが、β注記・規約確認は必須」という結論を明示
- 「無料版の月間クレジット数」は断定せず、公式表記どおり `Limited / subject to change` で記載
- Firefly Videoは「モデル本体はGA、周辺機能にβあり」で整理
- Photoshop・Illustrator・Express の使い方は「何ができるか」「どこからpremiumになるか」の順で説明
- 比較パートは Midjourney・DALL·E の優劣ではなく「商用運用条件の違い」を軸に記述
- CTAは3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と学ぶ環境）で締める
