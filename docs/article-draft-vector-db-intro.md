# 記事ドラフト: vector-db-intro

- 作成日: 2026-02-19
- slug: `vector-db-intro`
- タイトル: `ベクターデータベース入門｜Pinecone・Weaviate・ChromaDBの比較と選び方`
- 想定文字数: 5,000〜7,000字

## ペルソナ

- RAGシステムを構築・検討しているエンジニア/AI実装担当者
- 技術用語は理解できるが、プロダクト選定基準を共通言語化したい
- 非エンジニアの決裁者にも説明できる判断軸が必要

## 検索意図

- 「ベクターデータベースとは何か」を仕組みから理解したい
- Pinecone / Weaviate / ChromaDBの違いを一画面で比較したい
- 個人実装から企業導入まで、RAGでどれを選べばよいか判断したい

## H2構成（AIO対応）

1. 結論: RAG向けベクターDBは「用途×コスト×スケール」で選ぶ  
   - 3行要約
   - 先に選定軸を固定

2. ベクターデータベースとは何か: 類似度検索の仕組みを最短で理解する  
   - embedding / 距離計算 / ANN（HNSW）
   - RAGでの検索→生成フロー

3. Pinecone・Weaviate・ChromaDBの比較表: 運用形態・費用構造・拡張性を同じ軸で見る  
   - 比較テーブル必須
   - 公式仕様の確認日を明記

4. RAG向けの選定フロー: 用途×コスト×スケールの3ステップ判断  
   - Step1 用途（PoC / 内製 / 本番）
   - Step2 コスト（初期費・運用費）
   - Step3 スケール（件数 / 同時実行 / SLO）

5. 個人実装〜企業導入のケース別に見る選び方  
   - 個人検証、チームPoC、企業本番
   - 移行時の落とし穴

6. FAQ（5〜7問）

7. 関連記事と次アクション

8. CTA（LINE）

## 内部リンク方針（最低3本）

- `/academy/blog/what-is-rag`
- `/academy/blog/rag-use-cases`
- `/academy/blog/rag-vs-finetuning-guide`
- `/academy/blog/ai-agent-deployment-checklist`

## CTA配置

- CTA1: H2-1直後
- CTA2: H2-4終わり
- CTA3: 記事末尾

### CTA固定文言（全CTA共通）
- タイトル: `📩 LINEで毎週AI知識を配信中`
- 本文: `AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。`
- ボタン: `LINEで週1AI通信を受け取る（無料）`
- lineUrl: `https://bexn9pao.autosns.app/line`

## FAQ案（6問）

1. ベクターデータベースとは何ですか？
2. RAG実装でベクターDBが必要になるのはどの部分ですか？
3. Pinecone・Weaviate・ChromaDBは最初に何で選べばよいですか？
4. ChromaDBを本番運用に使うときの注意点は何ですか？
5. Weaviateを選ぶべきチームの特徴はありますか？
6. 選定後にやるべき評価項目は何ですか？

## 品質チェック（実装前）

- H2自己完結: OK
- FAQ 5〜7問: OK（6問）
- 比較表あり: OK
- 内部リンク3本以上: OK（4本）
- CTA統一文言: OK
