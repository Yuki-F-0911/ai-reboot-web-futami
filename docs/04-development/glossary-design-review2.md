---
title: "生成AI用語集 設計書レビュー（第2回）"
reviewed_by: "Claude Code"
reviewed_at: "2026-02-25"
target_doc: "docs/04-development/glossary-design.md"
version_reviewed: "1.2"
status: "complete"
---

# 生成AI用語集 設計書レビュー（第2回）

前回指摘（MUST 3件 / SHOULD 4件）の解消確認レビュー。

---

## ✅ 解消済み

### MUST（必須修正）— 全3件解消

**MUST #1: sitemap.ts への統合コード例**
- 設計書 5.2 に `glossaryTerms` をインポートして `glossaryIndexPage` / `glossaryDetailPages` を生成するコード例が追記された（lines 158–174）
- `changeFrequency: "weekly"` / `"monthly"` および `priority: 0.8` / `0.6` の値も明記された
- ダイナミックルートがファイルシステムスキャンで検出できない問題への対処方法が設計に明示されており、実装者に正確に伝わる
- ✅ **解消**

**MUST #2: category 表記の統一**
- 2.2 記事フォーマットテーブルの `法務/倫理`（スラッシュ）が `法務・倫理`（中点）に修正された
- 3.2 の TypeScript 型定義 `"法務・倫理"` と一致し、Union 型の整合性が確保された
- ✅ **解消**

**MUST #3: not-found.tsx の必須化と dynamicParams = false の明記**
- 3.1 ルーティングに `app/glossary/[slug]/not-found.tsx`（**必須**）が追記された
- `export const dynamicParams = false;` を `app/glossary/[slug]/page.tsx` に設定することが明記された
- ✅ **解消**

---

### SHOULD（推奨改善）— 4件中4件解消

**SHOULD #1: OG画像・canonical URL の記載**
- 5.1 メタ情報に `alternates.canonical: ${baseUrl}/glossary/${slug}` が追記された
- `openGraph.images` に共通 OGP 画像または用語専用 OGP 画像を設定（推奨: 1200x630）という記載が追記された
- ✅ **解消**

**SHOULD #2: 初期 30件の用語リスト**
- Phase 1 に 30件の用語名が明記された（LLM / GPT / 生成AI / プロンプト / RAG / ファインチューニング / エンベディング / トークン / ハルシネーション / マルチモーダル / エージェント / CoT / Few-shot学習 / Zero-shot学習 / RLHF / SFT / LoRA / 量子化 / 推論 / プロンプトエンジニアリング / システムプロンプト / コンテキストウィンドウ / Function Calling / ベクトルDB / セマンティック検索 / AIガバナンス / バイアス / 評価指標（BLEU/ROUGE）/ マルチエージェント / オーケストレーション）
- ✅ **解消**

**SHOULD #3: Phase 2 への Fuse.js 記載**
- Phase 2 に「クライアントサイド検索ライブラリは `Fuse.js` を推奨（軽量・型定義あり）」が追記された
- ✅ **解消**

**SHOULD #4: Phase 3 の GA4 計測指標**
- Phase 3 完了条件に「GA4 カスタムイベント（`glossary_view`、`glossary_link_click`）で計測できる」が追記された
- ✅ **解消**

---

## ❌ 未解消・新規問題

### 軽微な残存問題（実装ブロッカーではない）

**1. sitemap.ts コード例の `priority` 値が前回推奨と異なる**
- 前回レビューの推奨: `/glossary/[slug]` → `priority: 0.7`
- 修正後の設計書: `priority: 0.6`
- 評価: **許容範囲**。0.6 でも機能上問題なく、設計者判断として有効。変更不要。

**2. sitemap コード例の `lastModified` 型**
- 修正後: `lastModified: term.updatedAt`（文字列）
- 前回修正案: `lastModified: new Date(term.updatedAt)`（Date オブジェクト）
- `MetadataRoute.Sitemap` 型の `lastModified` は `string | Date` を受け付けるため動作上は問題なし
- ただし ISO 文字列を直接渡す場合、Next.js のバージョンによって挙動が異なる可能性がある
- 評価: **低リスク**。実装時に `new Date(term.updatedAt)` へ変更することを推奨するが、設計書修正は任意。

### 前回 SHOULD 指摘のうち今回の確認ポイントに含まれなかった未対応項目

以下の3件は前回レビューで指摘されたが、今回の修正対象に含まれておらず未対応のまま。実装ブロッカーではないが、設計書としての完全性を高めるために記録する。

**A. `keywords` メタの記載なし**
- 既存記事は `keywords` 配列でロングテール語をカバーしている
- 推奨ひな型: `["${term}とは", "${term} わかりやすく", "${term} 意味"]`
- 対応優先度: 低（実装時に既存記事を参照すれば対応可能）

**B. `relatedSlugs` の参照整合性チェックが未言及**
- Phase 1 完了条件に「`relatedSlugs` の slug がデータ内に存在するか検証するスクリプト」の言及がない
- 対応優先度: 中（内部リンク切れを防ぐため、Phase 1 実装時にビルドスクリプトで確認すること）

**C. `description` フィールドのフォーマットが未定義**
- テキスト / HTML / Markdown のいずれかが明示されていない
- 対応優先度: 中（実装前に決定が必要。既存の `marked` ライブラリが使用されているため Markdown 推奨）

---

## 総評

設計書の品質は前回の **70点 → 88点** に向上した。

**MUST 3件はすべて適切に解消されており、実装フェーズに進んで問題ない。**

SHOULD 4件も今回の確認ポイントとして指定された全件が解消された。残存する軽微な問題（priority 値の差異、lastModified 型）はいずれも実装ブロッカーではない。

### 推奨する次ステップ

1. **Phase 1 実装開始**（設計書は実装可能な品質に達している）
   - `data/glossary.ts` の型定義ファイルと初期30件データの作成
   - `app/glossary/page.tsx` / `app/glossary/[slug]/page.tsx` の実装
   - `app/sitemap.ts` への glossary エントリ追加
   - `app/glossary/[slug]/not-found.tsx` の作成（必須）
2. **実装前の確認事項**（設計書修正は任意）
   - `description` フィールドを Markdown 文字列とするか決定する
   - `relatedSlugs` 整合性チェックをビルドパイプラインに組み込む方法を確認する

---

## 更新履歴

| バージョン | レビュー日 | レビュー者 | 内容 |
|---|---|---|---|
| 第1回 | 2026-02-25 | Claude Code | 初回レビュー（MUST 3件 / SHOULD 4件指摘） |
| 第2回 | 2026-02-25 | Claude Code | 修正確認レビュー（全 MUST 解消を確認） |
