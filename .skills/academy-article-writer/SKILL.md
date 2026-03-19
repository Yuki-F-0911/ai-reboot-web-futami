---
name: academy-article-writer
description: |
  AIリブートアカデミーブログ（/academy/blog）に新記事を追加するスキル。slug と主KWを受け取り、SEOキーワード調査→Grok API x_search + ウェブ検索によるリサーチ→ソース検証→構成案→本文執筆→コード実装（3ファイル）まで完走する。
  Use when: 「記事を書いて」「ブログ記事を追加」「academy/blogにslugを実装」と言われたとき。
metadata:
  version: "1.2"
  project: "ai-reboot-web"
  language: "ja"
---

# Academy Article Writer

AIリブートアカデミーブログの新記事を、slug と主KW から SEO調査・リサーチ・構成案・本文・コード実装まで一貫して生成するスキル。

## Reference Files

詳細仕様は `references/` を **必要に応じて** 読み込む。

- [research-protocol.md](references/research-protocol.md) — Grok API x_search・ウェブ検索・ソース検証の詳細手順 **(Phase 0 で必読)**
- [project-structure.md](references/project-structure.md) — ファイル構成・コードテンプレート
- [writing-rules.md](references/writing-rules.md) — 文体ルール・AIスロップ禁止表現・E-E-A-T
- [quality-checklist.md](references/quality-checklist.md) — 公開前チェックリスト（SEO/AIO/LINE CTA/根拠確認）

## 入力（必須）

- **slug**: 例 `dify-beginner-guide`
- **主KW**: 例 `Dify 使い方`
- **サブKW**（任意）: 2〜4個
- **ターゲット層**: 法人 / 個人 / 学習者

## Workflow

```
Phase 0: SEOキーワード調査 + リサーチ・ファクトチェック
  詳細手順: references/research-protocol.md を必ず読むこと

  [0-A] SEOキーワード調査（WebSearch）
    → 主KWの検索意図分類（情報収集/比較/操作方法/トラブル）
    → 競合上位5記事のH2構成・差別化ポイントを記録
    → サジェストKW・関連KW（People Also Ask）を収集
    → 「AIリブートが勝てる切り口」を特定

  [0-B] 一次情報収集（WebSearch）
    → 公式ドキュメント/公的資料/一次統計を最低3件収集・URL記録
    → 変動しやすい情報（料金/仕様/数値）は確認日（YYYY-MM-DD）を明記
    → 不確実情報は [要確認: ...] としてフラグ立て

  [0-C] Xトレンド・空気感の把握（Grok API x_search）
    → 目的: トレンド把握・手触り感・切り口の発見（引用目的ではない）
    → references/research-protocol.md の「Grok API x_search 実装」セクションを参照
    → 検索クエリを3〜5パターン設計し実行
    → 取得結果は「記事の構成・語り口・差別化ポイント」のインプットとして使用
    → 特定の投稿・アカウント名は記事に引用・転載しない
    → APIキーなし/エラーの場合は「X調査: スキップ」として記録しWebSearchで代替

  [0-D] 主要主張のファクトチェック
    → 主要 Claim を列挙し、2ソース以上で照合
    → すべての数値・仕様に出典を紐付け
    → docs/article-research-{slug}.md に [0-A〜D] の結果を出力

Phase 1: 構成案生成
  → [0-A] の検索意図・競合分析をもとにペルソナを確定
  → H2×5〜6（AIO対応：各H2が自己完結）・H3×2〜3
  → 内部リンク3本・LINE CTA 配置計画
  → FAQSchema Q&A 5〜7問（検索クエリ形式）
  → docs/article-draft-{slug}.md に出力

Phase 2: 本文執筆
  → 5,000〜8,000字、専門家視点で記述
  → Phase 0 の一次情報と実利用者の声を反映
  → X調査（0-C）で掴んだ「言葉・視点・温度感」を語り口に活かす
    （X調査は内部インプット。特定の投稿・アカウントの引用・転載は不要）
  → references/writing-rules.md を参照して文体チェック

Phase 3: コード実装（3ファイル同時生成）
  → app/(site)/academy/blog/{slug}/page.tsx
  → components/academyLanding/blog/{slug}/{PascalCase}Page.tsx
  → app/(site)/academy/blog/page.tsx の blogPosts 配列に追記
  → references/project-structure.md のテンプレを使用
  → 実装後に ls コマンドで3ファイルの存在を必ず確認すること
```

## 成果物

- `docs/article-research-{slug}.md`（SEO調査・一次情報・X声収集・ファクトチェック記録）
- `docs/article-draft-{slug}.md`（構成案）
- 上記 3 コードファイル（実装）

## 必須制約：アカデミーCTA ポジショニング

記事末尾のアカデミー誘導CTAは **references/writing-rules.md の「アカデミーCTA ポジショニング（CRITICAL）」を必ず参照**すること。

要点:
- アカデミーは「3本柱（生成AI活用力 / 自己理解・キャリアデザイン / 仲間と学ぶ環境）」を提供する場
- 記事テーマのツール（Dify・RAG・Python・Power Automate等）の操作/実装を教える場所**ではない**
- CTAタイトル・本文から「〜の活用方法を体系的に学べる」「ツール操作を習得」「実装できる力」等の表現を**排除する**
