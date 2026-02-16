# Academy LP SEO/AIO戦略 コンテンツ計画（仮説版）

最終更新: 2026-02-15  
対象: AIリブートアカデミー（個人向け）  
前提: 本計画のキーワード・優先度は実データ未取得のため**論理推定**です。公開後に Search Console / GA4 / ヒートマップで検証し、四半期ごとに更新してください。

## 1. 現状SEOの問題点と改善ポイント

### 1-1. metadata（title / description / OGP）
- `app/academy/page.tsx` は `title` と `description` のみ定義。`openGraph` / `twitter` / `alternates.canonical` が未設定。
- `app/academy/layout.tsx` は存在しないため、`/academy/*` 配下の共通SEO制御ができていない。
- `app/academy/seminars/page.tsx` と `app/academy/message/page.tsx` に個別 metadata がなく、グローバル設定依存。
- `app/layout.tsx` はグローバル metadata を持つが、アカデミー意図（個人向けリスキリング・補助金・受講判断）に対して汎用的。
- ドメイン定義が不統一:
  - `app/layout.tsx` の `metadataBase` 既定値: `https://ai-reboot.io`
  - `app/sitemap.ts` の `baseUrl`: `https://ai-reboot.io`
  - 構造化データ内URLにも `.com` が含まれる  
  同一サイト内で canonical 候補が分裂するリスクあり。

### 1-2. sitemap / robots
- `public/sitemap.xml` は未配置。
- ただし `app/sitemap.ts` は存在し、動的 sitemap 生成は実装済み。
- `public/robots.txt` は未配置、`app/robots.ts` も未実装。クロール方針の明示がない。

### 1-3. 構造化データ（JSON-LD）
- `components/seo/StructuredData.tsx` に `Course` / `FAQPage` / `Organization` 等の実装は存在。
- ただし利用箇所は主にブログ系で、`/academy` 主要ページでは未適用。
- AIO観点では、講座情報・FAQ・運営情報の machine-readable 化が不足。

### 1-4. 見出し構造（h1/h2/h3）
- `app/academy/page.tsx` は `h2/h3` はあるが `h1` が存在しない（`HeroSection` も `h1` なし）。
- `app/academy/seminars/page.tsx` は `h1` の下がカード見出し `h3` で、`h2` レイヤーが抜けている。
- `app/academy/message/page.tsx` は `h1 > h2` 構造で比較的良好。

### 1-5. 競合の一般的パターン（推定）
- 「補助金解説ページ（対象条件・金額・申請手順・FAQ）」を独立URLで保持。
- 「比較記事（おすすめ/選び方）」で情報収集流入を獲得し、講座LPへ内部リンク。
- FAQ を `FAQPage` で明示し、AIO/音声検索での直接回答を狙う。

## 2. ターゲットキーワードマトリクス

| キーワード | 検索意図 | コンテンツ形式 | 対応ページ | 優先度 |
|---|---|---|---|---|
| リスキリング補助金 個人 | 補助金の対象条件・受給可否を知りたい | 解説記事 + FAQ | 新規 `/academy/subsidy-guide` | 高 |
| リスキリング補助金 対象講座 | 対象講座の一覧/判断基準を知りたい | 解説記事 | 新規 `/academy/subsidy-eligible-courses` | 高 |
| 経産省認定 リスキリング講座 | 信頼性の高い講座を探したい | 比較コラム | 新規 `/academy/meti-reskilling-comparison` | 高 |
| 社会人 学び直し AI | 社会人向けの学習ステップを知りたい | ハウツー記事 | 新規 `/blog/ai-reskilling-roadmap-for-workers` | 中 |
| 生成AI 学び方 | 学習順序・教材・期間を知りたい | ハウツー記事 | 新規 `/blog/how-to-learn-generative-ai` | 高 |
| 生成AI スキル 身につける | 実務で使えるスキルを知りたい | 実践コラム | 新規 `/blog/generative-ai-skills-checklist` | 中 |
| AI時代 必要なスキル | キャリア観点で必要スキルを把握したい | コラム | 新規 `/blog/skills-for-ai-era-career` | 中 |
| AI時代 キャリアチェンジ | 転職/複業の現実的ルートを知りたい | 事例記事 | 新規 `/blog/ai-career-change-cases` | 中 |
| AI研修 個人向け おすすめ | 個人向け講座を比較検討したい | 比較記事 | 新規 `/academy/ai-training-for-individuals` | 高 |
| AI講座 比較 | 価格・期間・成果を比較したい | 比較記事 + 表 | 新規 `/academy/ai-course-comparison` | 高 |
| リスキリング講座 おすすめ | おすすめ講座を知りたい | 比較記事 | 新規 `/academy/reskilling-course-recommendation` | 高 |
| AIリブートアカデミー 評判 | 指名検索で評判を確認したい | 評判/実績ページ | 新規 `/academy/reviews` | 高 |
| AIリブートアカデミー 口コミ | 実体験・レビューを確認したい | 口コミページ + FAQ | 新規 `/academy/testimonials` | 高 |
| AI研修 補助金 申し込み | 申込手順をすぐ知りたい | CV寄りLP/FAQ | 既存強化 `/academy` + `/briefing` | 高 |
| 生成AI セミナー 無料 | 無料で試せる機会を探したい | セミナーLP | 既存強化 `/academy/seminars` | 高 |

補足:
- すべて推定。公開後は「表示回数 > CTR > CVR」で採用キーワードを絞り込み。
- 指名検索（評判/口コミ）は CV 直前のため、初期段階から優先的に着手。

## 3. 新規コンテンツ一覧（タイトル案・URL案・対象KW・概要）

| タイトル案 | URL案 | ターゲットKW | 概要 |
|---|---|---|---|
| 2026年版 リスキリング補助金を個人で活用する完全ガイド | `/academy/subsidy-guide` | リスキリング補助金 個人 | 対象者、支給上限、申請フロー、よくある失敗をQ&Aで網羅。 |
| リスキリング補助金の対象講座とは？見分け方チェックリスト | `/academy/subsidy-eligible-courses` | リスキリング補助金 対象講座 | 対象要件を判定フロー化。講座選定時の確認項目を提示。 |
| AI講座比較 失敗しない選び方（価格・期間・伴走・実践性） | `/academy/ai-course-comparison` | AI講座 比較 | 比較軸を明確化し、選定基準を表形式で提示。 |
| 個人向けAI研修おすすめの選び方 | `/academy/ai-training-for-individuals` | AI研修 個人向け おすすめ | 個人学習とスクール活用の使い分けを整理。 |
| AIリブートアカデミーの評判・口コミ・受講後の変化 | `/academy/reviews` | AIリブートアカデミー 評判 | 受講生の定量/定性データ、属性別の成果、注意点を公開。 |
| 社会人のための生成AI学習ロードマップ（0→100日） | `/blog/how-to-learn-generative-ai` | 生成AI 学び方 | 学習ステップ、週次学習計画、学習のつまずき対策。 |
| AI時代に必要なスキルを職種別に解説 | `/blog/skills-for-ai-era-career` | AI時代 必要なスキル | 職種別に必須スキルと学習順序を提示。 |
| AI時代のキャリアチェンジ事例集 | `/blog/ai-career-change-cases` | AI時代 キャリアチェンジ | 実践者の転換プロセスと再現可能な行動を提示。 |
| 経産省認定リスキリング講座を比較する視点 | `/academy/meti-reskilling-comparison` | 経産省認定 リスキリング講座 | 信頼性確認の観点（認定・実績・サポート）を解説。 |

## 4. 既存ページのSEO改善点

### 4-1. `app/academy/page.tsx`（最優先）
- `h1` をHero内に1つ追加（ページ主題を明示）。
- metadata に `openGraph` / `twitter` / `canonical` を追加。
- `Course` + `FAQPage` + `EducationalOrganization`（または `Organization`）JSON-LD を実装。
- 「価格・期間・補助金・申込方法」をファクトボックス化し、AIOに抽出される短文回答を配置。

### 4-2. `app/academy/seminars/page.tsx`
- ページ固有 metadata を追加（無料セミナー・対象者・開催形式を含む）。
- `h2`（例: 開催予定/過去開催/申込方法）を追加し、`h1 > h2 > h3` を整える。
- `Event` schema を追加（開催日、場所、申込URL）。

### 4-3. `app/academy/message/page.tsx`
- ページ固有 metadata 追加（「なぜこの講座を運営するか」の意図を明確化）。
- E-E-A-T補強として運営者プロフィール、実務実績、更新日を追記。

### 4-4. 共通基盤
- `app/academy/layout.tsx` を新設し、配下共通 metadata・構造化データ注入の基盤化。
- ドメイン統一（`.com` / `.io` の一本化）。
- `app/robots.ts` を追加し、`Sitemap` URL とクロール方針を明示。

## 5. AIO最適化チェックリスト

- [ ] 各ページに「質問→結論先出し（1-2文）→根拠」のブロックを置く  
- [ ] FAQ をページ末尾に集約し、`FAQPage` JSON-LD と本文を一致させる  
- [ ] 講座ページに `Course` / `CourseInstance` を実装（期間・受講形式・料金）  
- [ ] 運営情報に `EducationalOrganization`（または `Organization`）を実装  
- [ ] 事実情報（価格、期間、補助金上限、対象条件、更新日）を定型表示  
- [ ] 受講対象/非対象を明示し、誤解を防ぐ  
- [ ] 実績値（受講者数、満足度、継続率など）を出典付きで提示  
- [ ] 監修者/講師の実務経験とプロフィールを明示（E-E-A-T）  
- [ ] ページごとに主質問を1つに絞り、タイトル・`h1`・冒頭回答を一致  
- [ ] 比較記事からLPへ、LPからFAQ/比較記事へ双方向内部リンク  

## 6. 実装優先順位（効果 × 工数）

### フェーズ1（高効果・低〜中工数 / 1-2週間）
1. `academy` の `h1` 追加、metadata拡張（OGP/canonical）、`Course+FAQ` JSON-LD 実装  
2. `academy/seminars` と `academy/message` の個別 metadata 追加  
3. `app/robots.ts` 実装、ドメイン統一方針の確定と反映  
4. 新規1本目: `/academy/subsidy-guide` 公開（高需要×高CV接続）

### フェーズ2（高効果・中工数 / 3-5週間）
1. 比較系ページ公開（`/academy/ai-course-comparison`、`/academy/ai-training-for-individuals`）  
2. 指名検索受け皿公開（`/academy/reviews`）  
3. 学習系記事公開（`/blog/how-to-learn-generative-ai` など2-3本）

### フェーズ3（検証・最適化 / 継続）
1. Search Console でクエリ別 CTR/掲載順位を確認し、タイトルと冒頭回答をAB改善  
2. CV寄与が高い記事に FAQ 追加、低い記事は検索意図ズレを修正  
3. AIO引用有無（Google AI Overview / ChatGPT検索 / Perplexity）を月次で定点確認

---

## 検証メモ（実装前提）
- 本書は実検索データなしの推定計画です。  
- 公開後は最低4〜8週間の実測データで、優先KWとページ構成を再評価してください。  
