---
title: "/academy LP 全体リデザイン設計書"
version: "1.1"
last_updated: "2026-02-19"
author: "さかもと"
reviewers: []
related_docs:
  - "AGENTS.md"
  - "docs/02-design/brand-guidelines.md"
  - "docs/04-development/ai-reboot-academy-implementation-plan.md"
status: "draft"
dependencies:
  upstream:
    - "app/academy/page.tsx"
    - "components/academyLanding/sections/*"
  downstream:
    - "[TODO] docs/02-design/academy-lp-redesign.md"
impact_level: "high"
---

# /academy LP 全体リデザイン設計書

## 0. 要約
- 目的は `/academy` LP を「知的文系×やさしいテクノロジー」に再定義し、AIスロップ由来の記号的UIを排除すること。
- 訴求は必ず次の3本柱で統一する。
  - 生成AI活用力
  - 自己理解・キャリアデザイン
  - 仲間と共に学ぶ環境
- 本設計書は、現行セクション構成を維持したまま、見た目と情報体験を再設計する実装仕様である。

## 1. クリエイティブ方向性

### 1-1. Direction A: Editorial Ledger（編集台帳）
- Metaphor: 取材ノートと編集誌の紙面。
- Tone Axes: human 80 / machine 20, static 65 / dynamic 35, flat 55 / rich 45, lo-fi 45 / hi-tech 55
- Signature Move: 余白と細線で情報を読む順番を作る。
- Rules:
  - 装飾は「線・罫・文字組」のみで成立させる。
  - 円形バッジを使わない。
  - 濃色面を連続させない。
  - Exception: 最終CTAのみ短時間で目を止める強コントラストを許可。

### 1-2. Direction B: Quiet Workshop（静かな共創アトリエ）
- Metaphor: 仲間と書き込むワークショップボード。
- Tone Axes: human 85 / machine 15, static 55 / dynamic 45, flat 50 / rich 50, lo-fi 60 / hi-tech 40
- Signature Move: セクションごとに「見出し帯 + 本文面 + 余白面」の3層を固定。
- Rules:
  - カードの角丸は最大 `12px` まで。
  - 背景は `slate` と `warm neutral` を基本に運用。
  - オレンジは行動喚起・進行・強調語のみで使用。
  - Exception: 補助金セクションの価格数値のみ高彩度を許可。

### 1-3. Direction C: Human Signal Grid（対話の信号面）
- Metaphor: データグリッドに手書きの意図が重なる紙面。
- Tone Axes: human 70 / machine 30, static 60 / dynamic 40, flat 40 / rich 60, lo-fi 35 / hi-tech 65
- Signature Move: グリッドとノイズテクスチャを薄く重ねる。
- Rules:
  - ぼかし球・有機ブロブ禁止。
  - ホバー演出は移動ではなく情報強調。
  - 画像は意味ある証拠としてのみ使用。
  - Exception: Heroの背景画像切替は維持。

## 2. 採用方向
- 採用: **Direction B（Quiet Workshop）**
- 理由:
  - 「先生と生徒」ではなく「同じ方向を向く仲間」という関係性を、対話的で静かな紙面構成で表現しやすい。
  - 現行の構成を壊さずに、AIスロップ記号（丸バッジ、グラデ全面、ぼかし球）を体系的に除去できる。
  - Noto Serif JP を要所で効かせる余地があり、知的文系トーンを担保しやすい。

## 3. デザインシステム

### 3-1. カラーパレット
```css
:root {
  --bg-canvas: #f8f8f7;        /* 全体の地色 */
  --bg-section: #f1f5f9;       /* セクション切替 */
  --bg-panel: #ffffff;         /* コンテンツ面 */

  --text-strong: #0f172a;      /* slate-900 相当 */
  --text-body: #334155;        /* slate-700 相当 */
  --text-muted: #64748b;       /* slate-500 相当 */

  --line-soft: #cbd5e1;        /* 罫線 */
  --line-strong: #94a3b8;      /* 強調罫線 */

  --accent-main: #d46a1f;      /* オレンジ主色 */
  --accent-soft: #f7e7d8;      /* オレンジ薄色 */
  --accent-deep: #9a4c16;      /* 見出し補助 */
  --cta-line: #06c755;         /* LINE CTA固定 */
}
```

#### オレンジ運用ルール
- 使用先:
  - CTAボタンのキー状態
  - セクションの小見出しラベル（ENラベル）
  - 強調すべき数値・短語
- 禁止:
  - セクション全面グラデーション
  - 情報カード全面塗り
  - 装飾専用のオレンジ発光
- 面積目安:
  - ビューポート内の高彩度オレンジは 8〜12% 以内。

#### slate系運用ルール
- `slate-900` 相当: H1/H2、主要数値、CTA前の結論文。
- `slate-700` 相当: 本文主文。
- `slate-500` 相当: 注釈、補足、キャプション。
- `slate-100/200` 相当: セクション区切り、罫線背景。

### 3-2. タイポグラフィ

#### フォント役割
- Display/Quote: `Noto Serif JP`
- Heading/Body/UI: `Noto Sans JP`
- 数値・英字ラベル: `Inter`

#### タイプスケール（PC基準）
- Hero H1: `clamp(2rem, 5vw, 3.8rem)` / `line-height: 1.18` / Serif
- Section H2: `clamp(1.75rem, 3vw, 2.8rem)` / `line-height: 1.28`
- Body L: `1.125rem` / `line-height: 1.7`
- Body M: `1rem` / `line-height: 1.75`
- Caption: `0.8125rem` / `line-height: 1.7` / `letter-spacing: 0.02em`

#### 運用指針
- 本文は左揃えを原則。中央揃えは一文キャッチのみ。
- Noto Serif JP は「章タイトル・締めコピー・引用」限定で全テキストの15%以下。
- 日本語本文に過度な `letter-spacing` を入れない。

### 3-3. 余白システム
- ベース単位: `8px`
- セクション縦余白:
  - mobile: `py-16`
  - tablet/desktop: `py-24`〜`py-32`
- 見出しブロック下余白: `mb-10`（mobile）/ `mb-16`（desktop）
- 情報カード内余白: `p-5`（mobile）/ `p-8`（desktop）
- 「間」のルール:
  - 重要メッセージ前後に最低 `32px` の無装飾余白を置く。
  - 罫線の上下に `16px` 以上の呼吸を確保する。

### 3-4. 禁止パターンと代替

| 禁止パターン | 代替案（具体） |
|---|---|
| `rounded-full` の番号バッジ | `STEP 01` のテキストラベル + 上部1pxルール |
| カード右上ブロブ | 右上余白に小さな注記テキストを置く |
| `blur-[120px]` ガウス球 | 微細ノイズ + 直線グリッド背景（低コントラスト） |
| 角丸カード+左ボーダー | 2カラム構造（左: ラベル、右: 本文）で階層表現 |
| 全面グラデカード | 単色面 + 境界線 + 文字階層で情報密度を作る |
| pulsing dots | 罫線のフェードイン（1回のみ） |
| `hover:scale-105` | `border-color`/`text-color`/`shadow` の微変化 |
| `rounded-bl-full` コーナー装飾 | セクション見出し直下の細い水平線 |

## 4. セクション別リデザイン仕様

### 4-1. HeroSection
- 現状の問題:
  - コピーとビジュアルは成立しているが、CTA周辺が既存LP文法に寄り、固有性が弱い。
- リデザイン方針:
  - Hero本文の冒頭2行を `Noto Serif JP` で組み、本文は `Noto Sans JP` に切替。
  - CTA直前に「3本柱」を1行ラベル化し、学習価値の骨格を先出し。
  - 右上画像面のオーバーレイを単純グラデから、薄い縦線入りに変更。
- 参考方向性:
  - 編集誌の扉ページ、特集タイトルの見出し組み。

### 4-2. YouTubeEmbed
- 現状の問題:
  - 単体ブロックとして浮いており、文脈が弱い。
- リデザイン方針:
  - セクション前に `VIDEO BRIEF` ラベルと1文導入を追加。
  - ラッパーの角丸を `rounded-2xl` から `rounded-lg` に抑え、紙面感へ寄せる。
- 参考方向性:
  - 雑誌の「編集部注記 + 映像QR」的レイアウト。

### 4-3. ConceptSection
- 現状の問題:
  - 丸バッジ、装飾グラデ、カードホバーがAIスロップ文法。
  - 4要素と3本柱の対応関係が読み手に伝わりにくい。
- リデザイン方針:
  - 3本柱を主軸に整理しつつ、4要素（生成AI活用 / マーケ / コミュ / キャリアデザイン）を本文・サブテキストで展開。
  - `<ol>` で「01 / 02 / 03」を文字で扱い、各項目は罫線区切り。
  - アイコン絵文字を廃止し、キーワード小見出しのみで読ませる。
- 参考方向性:
  - 書籍の目次ページ、研究レポートの章立て。

### 4-4. Program Flow（最注力）
- 現状の問題:
  - `rounded-3xl` カード、円形番号バッジ、コーナーグラデ装飾、`hover:scale` が典型AIスロップ。
  - ステップ導線が装飾依存で、情報構造として弱い。
- リデザイン方針:
  - 構造を `<ol>` + `<li>` の時系列タイムラインへ変更。
  - Desktop:
    - `lg:grid lg:grid-cols-12`
    - 各ステップを `lg:col-span-4` とし、カード化せず「罫線 + 見出し + 説明 + イラスト小窓」で構成。
    - ステップ接続は装飾矢印でなく、上段共通ルールと `→` のテキスト記号。
  - Mobile:
    - 左側に1px縦線、各ステップ見出しを行頭揃え。
    - 矢印アイコン廃止、余白で進行を表現。
  - Step番号表現:
    - `Inter` で `STEP 01`、背景塗りなし、文字色 `slate-500`。
- 参考方向性:
  - 年表、編集会議アジェンダ、プロジェクトロードマップ紙面。

### 4-5. SkillLevelSection（最注力）
- 現状の問題:
  - 左ボーダー依存のカードUIで凡庸。
  - 背景巨大数字と矢印アイコンが装飾先行。
- リデザイン方針:
  - 3段レベルを「能力定義シート」として再編。
  - 各段を2カラム:
    - 左: レベル名・到達定義
    - 右: プログラム内容・具体行動
  - カードを分離し、`border-top` で段階感を出す。
  - ピラミッド画像は装飾扱いにせず、最下段に小さく補助配置。
- 参考方向性:
  - 学習指標ルーブリック、職能グレード表。

### 4-6. TargetAudienceSection
- 現状の問題:
  - 背景ぼかし球、チェック丸アイコン、重要ラベルバッジが冗長。
- リデザイン方針:
  - 「共感リスト」形式に変更し、各行を罫線区切り。
  - 行頭は丸アイコンではなく `・` ではなく `—` でもなく `01` 等の小ラベル。
  - 「特に重要」はバッジ化せず、該当行の見出し太字 + 右端注記に置換。
- 参考方向性:
  - インタビューノート、読者投稿欄。

### 4-7. Mid CTA Section（最注力）
- 現状の問題:
  - オレンジ全面グラデーションで視覚的に重く、文脈より強制感が出る。
- リデザイン方針:
  - 全面グラデを廃止し、`bg-[#faf8f5]` の温かみオフホワイト + 上下 `border-slate-200` でセクション感を作る。
  - 文字は `text-slate-900` 基調で強いコントラストを確保する。
  - 構成は「白地 × 大きな見出し × シンプルなCTAボタン2つ」を基本とする。
  - ボタンは2層:
    - Primary: LINE（現行緑を維持）
    - Secondary: テキストリンク + 下線
  - CTA前に「なぜ今相談するか」の短文を1行追加。
- 参考方向性:
  - 雑誌広告の短冊コピー、白地に短文訴求。

### 4-8. InstructorsSection
- 現状の問題:
  - 角丸大型カード + 影ホバーで量産型カード体験。
- リデザイン方針:
  - 講師カードを「肖像 + 経歴テキスト」の紙面レイアウトへ。
  - 角丸は `rounded-md` 程度、影は常時最小。
  - 会社名チップの丸ピルを廃止し、肩書き行の先頭ラベル化。
- 参考方向性:
  - 書籍の著者紹介欄、インタビュー記事の見開き。

### 4-9. VoicesSection
- 現状の問題:
  - 引用符装飾と丸イニシャルが汎用テンプレート感を増幅。
- リデザイン方針:
  - `article` を維持しつつ、引用の冒頭行を `Noto Serif JP` で組版。
  - イニシャル丸アイコンを廃止し、属性を横罫の下に小さく記載。
  - 3列時もカード高さ揃えを強制せず、可読優先で可変高へ。
- 参考方向性:
  - 雑誌の読者投稿、巻末インタビュー抜粋。

### 4-10. SubsidyBanner
- 現状の問題:
  - 全面グラデと円形アイコン・円形数字が多く、情報の信頼感より販促感が強い。
- リデザイン方針:
  - 上段を「制度要約」、下段開閉部を「詳細表」として分離。
  - 3サポートの丸数字をやめ、表組み（`dl` または `table`）化。
  - 価格強調は数字だけに限定し、背景は白地で統一。
- 参考方向性:
  - 公的制度パンフレット、申請ガイドの比較表。

### 4-11. PricingSection
- 現状の問題:
  - 「おすすめ」バッジと強い枠線で販促テンプレート色が強い。
- リデザイン方針:
  - 2カラム比較を維持しつつ、見出し・価格・内訳を同一グリッドで整列。
  - おすすめバッジは廃止し、「補助金適用ケース」をテキスト見出し化。
  - 箇条書きアイコンはチェック円でなく行頭ルールに置換。
- 参考方向性:
  - 料金早見表、新聞の比較欄。

### 4-12. Footer CTA #1（Pricing直後）
- 現状の問題:
  - 丸角ピルボタン2つで、他CTAと同質化している。
- リデザイン方針:
  - 1次CTA（LINE）を左、2次CTA（説明会）を右の非対称配置に変更。
  - 補助金文脈の補足を見出し化し、CTAと意味的に接続。
- 参考方向性:
  - 記事末の編集後記 + 誘導リンク。

### 4-13. Final CTA（最注力）
- 現状の問題:
  - 大型ぼかし球背景がAIスロップ。
  - 文言は強いが視覚文法が既視感。
- リデザイン方針:
  - 背景装飾を廃止し、`before` の細線と余白だけで終章感を作る。
  - 見出し「人生を、リブートする。」を `Noto Serif JP` で強調。
  - CTA群は中央寄せではなく、本文下で左揃え配置（mobileは縦積み）。
  - 注釈は見出し直下でなくCTA下部に置き、圧迫感を下げる。
- 参考方向性:
  - 書籍の最終ページ、宣言文レイアウト。

## 5. モーション指針
- 基本:
  - 入場は `opacity + translateY(12px)` を 1回のみ。
  - hover は `transform` 拡大禁止。色と罫線変化のみ。
- セクション遷移:
  - 背景演出を跨がせず、各セクション内で完結。
- アクセシビリティ:
  - `prefers-reduced-motion` で全アニメーションを即時表示へフォールバック。

## 6. 実装方針

### 6-1. コンポーネント変更範囲
- 既存更新:
  - `components/academyLanding/sections/HeroSection.tsx`
  - `components/ui/YouTubeEmbed.tsx`
  - `components/academyLanding/sections/ConceptSection.tsx`
  - `components/academyLanding/sections/SkillLevelSection.tsx`
  - `components/academyLanding/sections/TargetAudienceSection.tsx`
  - `components/academyLanding/sections/InstructorsSection.tsx`
  - `components/academyLanding/sections/VoicesSection.tsx`
  - `components/academyLanding/sections/SubsidyBanner.tsx`
  - `components/academyLanding/sections/PricingSection.tsx`
- `app/academy/page.tsx` のインライン領域を分離対象:
  - Program Flow
  - Mid CTA
  - Footer CTA #1
  - Final CTA

### 6-2. 新規ファイル作成方針
- 新規作成を推奨:
  - `components/academyLanding/sections/ProgramFlowSection.tsx`
  - `components/academyLanding/sections/MidCtaSection.tsx`
  - `components/academyLanding/sections/PreFooterCtaSection.tsx`
  - `components/academyLanding/sections/FinalCtaSection.tsx`
  - `components/academyLanding/sections/academyDesignTokens.ts`（色/余白定数）
- 理由:
  - `app/academy/page.tsx` の責務を構成管理のみに戻し、再利用とA/B差し替えを容易にする。

### 6-3. 既存ファイル変更 vs 新規作成の判断基準
- 既存変更:
  - ロジックが単純で、セクション固有責務が明確な場合。
- 新規作成:
  - 現在インラインで100行超のUIを持つ場合。
  - 今後のコピー差し替えや比較実験が想定されるCTA群。

### 6-4. 変更しないもの（明示）
- `metadata`（title/description/OG/Twitter/canonical）
- `CourseStructuredData` と `FAQStructuredData`
- CTAリンク先URL
- URL構造、ルーティング、計測導線
- 補助金制度に関するファクト文言の意味内容

## 7. 実装順序（推奨）
1. Program Flow / SkillLevel / Mid CTA / Final CTA を先行改修。
2. Concept / Target / Voices / Instructors を新トーンへ揃える。
3. Subsidy / Pricing を「制度情報として読みやすい紙面」に統一。
4. Hero と YouTube 周辺のタイポ・導入文を最終調整。

## 8. 受け入れ基準
- AIスロップ禁止項目が0件であること。
- 3本柱が Hero・Concept・CTA で明示されていること。
- mobile/desktop で見出しとCTAの読了導線が崩れないこと。
- Lighthouseで重大なアクセシビリティ低下がないこと（既存比）。

## 更新履歴

| バージョン | 更新日 | 更新者 | 更新内容 | 影響ドキュメント |
|---|---|---|---|---|
| 1.1 | 2026-02-19 | さかもと | Mid CTA背景トーンをオフホワイト基調へ修正、ConceptSectionの4要素表現を維持方針へ修正 | `REDESIGN_SPEC.md` |
| 1.0 | 2026-02-19 | さかもと | `/academy` LP 全体リデザイン設計書を新規作成 | `app/academy/page.tsx`, `components/academyLanding/sections/*` |
