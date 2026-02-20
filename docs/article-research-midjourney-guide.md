# 記事リサーチ: midjourney-guide

- 作成日: 2026-02-20
- 対象記事: `/academy/blog/midjourney-guide`
- 主KW: `Midjourney v7 使い方`
- サブKW: `Midjourney 日本語`, `AI 画像生成 比較 2026`, `Midjourney 始め方`
- ターゲット: 個人（クリエイター・デザイン初心者・副業希望者）

## 0. 結論（執筆方針）

- Midjourney v7は**2025-04-03にAlpha公開、2025-06-17にデフォルト化**（確認日: 2026-02-20）。
- 初心者の導入は「Webで生成と修正を覚える -> Discordでコマンド運用へ拡張」が失敗しにくい。
- 日本語入力は可能だが、再現性重視では英語キーワード併用が実務上有利という実声が多い。
- 料金はBasic/Standard/Pro/Megaの4階層。商用利用は可能だが、**年商100万USD超の企業利用はPro/Megaが必要**。
- 比較対象はDALL·E 3（移行期）、Stable Diffusion（自由度高）、Canva AI（制作フロー統合）で整理する。

## 1. 一次情報（公式）ソース

### Midjourney公式

1. Version（v7の公開日とデフォルト移行）  
   `https://docs.midjourney.com/hc/en-us/articles/32859204029709-Version`
2. V7 Alpha告知（新機能: personalization既定ON / Draft Mode / Turbo/Relax）  
   `https://updates.midjourney.com/v7-is-here/`
3. V7 default model告知（デフォルト化時期）  
   `https://updates.midjourney.com/v7-default-model/`
4. Comparing Midjourney Plans（Basic/Standard/Pro/Mega料金・機能）  
   `https://docs.midjourney.com/docs/plans`
5. Using Images & Videos Commercially（商用利用条件）  
   `https://docs.midjourney.com/hc/en-us/articles/27870375276557-Using-Images-Videos-Commercially`
6. Terms of Service（著作権・商標・会社規模条件）  
   `https://docs.midjourney.com/docs/terms-of-service`
7. Web vs Discord（機能差と使い分け）  
   `https://docs.midjourney.com/hc/en-us/articles/33329300781837-Web-vs-Discord`
8. Using Midjourney in Discord（接続条件）  
   `https://docs.midjourney.com/hc/en-us/articles/31541509949069-Using-Midjourney-in-Discord`
9. Discord Command List（/imagine, /settings等）  
   `https://docs.midjourney.com/docs/command-list`
10. Prompt Basics（短く具体的な指示が有効）  
    `https://docs.midjourney.com/docs/prompts`

### 比較対象の一次情報

11. OpenAI Image generation docs（GPT Image + DALL·E 2/3の位置づけ）  
    `https://platform.openai.com/docs/guides/images/image-generation`
12. OpenAI DALL·E 3 model page（Previous generation / 価格）  
    `https://platform.openai.com/docs/models/dall-e-3`
13. OpenAI Deprecations（dall-e-3は2026-05-12削除予定）  
    `https://platform.openai.com/docs/deprecations`
14. Stability AI license（Community Licenseと年商条件）  
    `https://stability.ai/license`
15. Stability AI Core Models（SD3.5系の商用利用枠組み）  
    `https://stability.ai/core-models`
16. Canva AI Product Terms（AI生成物の責任・制限）  
    `https://www.canva.com/policies/ai-product-terms-2023-10-04/`
17. Canva customer policies（AI Product Terms有効日 2025-11-28）  
    `https://www.canva.com/policies/for-customers-and-users/`

## 2. SNS・コミュニティ実声（要約）

> 個人情報・固有IDは記載せず論点のみ要約。肯定/懸念/つまずきが偏らないよう選定。

1. Reddit `r/midjourney` 「Midjourney's V7 Model is Here!」（2025-04-04）  
   `https://www.reddit.com/r/midjourney/comments/1jrk3sh`  
   - 肯定: プロンプト理解・質感・手/物体整合性が改善、Draft Modeの高速試行が便利
2. Reddit `r/midjourney` 「I’ve changed my mind about V.7! I love it.」（2025-04-08）  
   `https://www.reddit.com/r/midjourney/comments/1ju4zo4`  
   - 肯定: 旧プロンプト再実行で品質向上を体感
3. Reddit `r/midjourney` 「Personalizations for v7 not working?」（2025-04-10）  
   `https://www.reddit.com/r/midjourney/comments/1jvm9f0`  
   - つまずき: personalization解放周りのエラー・導線不明
4. Reddit `r/midjourney` 「V7 is a bit…. Underwhelming」（2025-04-04）  
   `https://www.reddit.com/r/midjourney/comments/1jrkp9u`  
   - 懸念: prompt adherenceが想定より弱いという声
5. Reddit `r/midjourney` 「David ... unsatisfied with V7」（2025-07-09）  
   `https://www.reddit.com/r/midjourney/comments/1lvt3p7`  
   - 懸念: personalization依存時の出力安定性への不満

## 3. 主要Claimと照合ログ

| Claim ID | 主張 | Source A | Source B | 判定 |
|---|---|---|---|---|
| C1 | Midjourney v7は2025-04-03公開（Alpha） | Version | V7 is here | ✅ |
| C2 | v7は2025-06-17にデフォルト化 | Version | V7 default model | ✅ |
| C3 | v7ではPersonalizationが既定ON、事前解放が必要 | V7 is here | Reddit実声（導入つまずき） | ✅ |
| C4 | Draft Modeは反復向き（低コスト・高速） | V7 is here | Web docs（Draft & Conversational） | ✅ |
| C5 | 全プランでWebとDiscord両方利用可能 | Using Midjourney in Discord | Web vs Discord | ✅ |
| C6 | Discord運用はコマンド起点（/imagine等） | Discord Command List | Using Midjourney in Discord | ✅ |
| C7 | 料金はBasic/Standard/Pro/Mega（$10/$30/$60/$120） | Comparing Plans | Plan Information | ✅ |
| C8 | Pro/MegaのみStealth Mode利用可 | Comparing Plans | Keeping Your Creations Private | ✅ |
| C9 | 商用利用は可能だが年商100万USD超の企業はPro/Megaが必要 | Using Images & Videos Commercially | Terms of Service | ✅ |
| C10 | DALL·E 3はOpenAI上で「previous generation」扱い | DALL·E 3 model page | Deprecations | ✅ |
| C11 | Stable Diffusion系は年商条件つきライセンス運用 | Stability license | Core Models | ✅ |
| C12 | Canva AI出力は商用利用時の最終責任が利用者側 | Canva AI Product Terms | Canva policies index | ✅ |
| C13 | 日本語入力は可能だが英語優位の公式定量比較は不足 | Prompt Basics | コミュニティ実声 | ⚠️ [要確認: 公式の言語別ベンチ公開] |

## 4. Midjourney v7新機能（記事反映用）

- v7 Alpha公開: 2025-04-03
- v7 default化: 2025-06-17
- 主な変更:
  - Personalizationの既定ON
  - Draft Mode（高速反復）
  - Turbo / Relax運用
  - 旧機能の一部は段階移行
- 確認日: 2026-02-20

## 5. 料金プラン（2026年版・記事反映用）

| プラン | 月額 | 年額（実質月額） | Fast GPU | Relax | Stealth |
|---|---:|---:|---|---|---|
| Basic | $10 | $96（$8） | 3.3h/月 | なし | なし |
| Standard | $30 | $288（$24） | 15h/月 | あり | なし |
| Pro | $60 | $576（$48） | 30h/月 | あり | あり |
| Mega | $120 | $1,152（$96） | 60h/月 | あり | あり |

- 確認日: 2026-02-20
- 備考: 価格・時間枠は更新されるため契約時再確認。

## 6. 商用利用・著作権の注意点（記事反映用）

1. Midjourney生成物の利用は原則可能だが、規約の条件順守が前提。  
2. 年商100万USD超の企業利用はProまたはMegaが必要。  
3. 他ユーザー生成物のアップスケールは元作者権利に注意。  
4. 著作権法の最終解釈は国ごとの差があるため、案件実務では法務確認が必要。

## 7. 比較記事で使う整理軸（Midjourney / DALL·E 3 / Stable Diffusion / Canva AI）

1. 立ち上がり速度（開始難易度）
2. 反復効率（下書き -> 修正 -> 量産）
3. 表現の自由度（スタイル/拡張性）
4. 商用利用時の規約確認コスト
5. 制作フロー統合（単体利用か、既存ツール統合か）

## 8. リスクと回避策

- リスク: Midjourneyの機能と価格は更新頻度が高い。  
  - 回避: 記事内に確認日を明記し、更新前提で運用。
- リスク: DALL·E 3の将来提供形態変更。  
  - 回避: 「移行期モデル」として表記し、OpenAI deprecation情報を注記。
- リスク: 日本語/英語の優劣を断定しすぎる。  
  - 回避: 公式未公表部分は実務上の判断基準として提示し、断定回避。

## 9. 記事本文に入れる注記（ドラフト反映）

- 本記事の価格・仕様・規約情報は **2026-02-20** 時点で確認。
- 商用利用は規約だけでなく、著作権・商標・肖像権の個別確認が必要。
- [要確認: Midjourney公式の言語別品質比較が公開されたら更新]
