# 記事リサーチ: vector-db-intro

- 作成日: 2026-02-19
- 対象記事: `ベクターデータベース入門｜Pinecone・Weaviate・ChromaDBの比較と選び方`
- 主KW: `ベクターデータベース とは` / `ベクトルDB 比較`
- サブKW: `Pinecone 使い方` / `ChromaDB 入門` / `RAG 実装`

## 1. 一次情報（公式資料・論文）

### Source A: Weaviate Documentation（Vector Search / Indexing）
- タイトル: Weaviate Database / Vector Search / Vector Indexing
- URL:
  - https://docs.weaviate.io/weaviate
  - https://docs.weaviate.io/weaviate/concepts/search/vector-search
  - https://docs.weaviate.io/weaviate/concepts/vector-index
- 確認日: 2026-02-19
- 要点:
  - Weaviateは「open-source, AI vector database」と明示。
  - ベクトル検索は類似度ベース検索で、query vectorと保存済みvectorを比較して上位n件を返す。
  - 距離指標（cosine / dot product / Euclidean）と、index種別（HNSW / flat / dynamic）が明示されている。

### Source B: Pinecone Documentation（Overview / Manage cost）
- タイトル: Pinecone documentation / Manage cost
- URL:
  - https://docs.pinecone.io/guides/get-started/overview
  - https://docs.pinecone.io/guides/manage-cost/manage-cost
- 確認日: 2026-02-19
- 要点:
  - Database quickstartで「fully managed vector database」を提供。
  - namesapceによるマルチテナント分離をガイドで推奨。
  - serverless indexesでは、保存量と操作量ベース課金であること、namespace設計がクエリコストに影響することが記載されている。

### Source C: Weaviate Cloud Documentation
- タイトル: Weaviate Cloud
- URL: https://docs.weaviate.io/cloud
- 確認日: 2026-02-19
- 要点:
  - Weaviate Cloudは「fully managed vector database in the cloud」。
  - コアはオープンソースWeaviateで、cloud運用ではインフラ管理を委譲できる。

### Source D: Chroma Documentation（Getting Started / Clients / Migration）
- タイトル: Getting Started / Chroma Clients / Migration
- URL:
  - https://docs.trychroma.com/docs/overview/getting-started
  - https://docs.trychroma.com/docs/run-chroma/clients
  - https://docs.trychroma.com/docs/overview/migration
- 確認日: 2026-02-19
- 要点:
  - Chromaは「open-source search engine for AI」で、ローカル実行前提で始めやすい。
  - in-memory client / persistent client / CloudClient を用途別に使い分け可能。
  - v1.0.0（2025-03-01）でRust実装へ大幅更新し、性能改善を表明。

### Source E: HNSW論文（ANNの基礎）
- タイトル: Efficient and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs
- URL: https://arxiv.org/abs/1603.09320
- 確認日: 2026-02-19
- 要点:
  - HNSWは近似最近傍探索（ANN）において高速性と高再現率のバランスを狙う代表手法。
  - 階層グラフ構造を使い、探索コストを抑えつつ大規模データに対応する。

## 2. SNS・コミュニティ実声（補助根拠）

> 個人情報・固有IDは避け、実務論点のみ要約。

1. Reddit（r/LangChain）  
   URL: https://www.reddit.com/r/LangChain/comments/1j0ey0u/what_vector_stores_do_you_use/  
   要旨: Pineconeはセットアップが簡単という声がある一方、Postgres/pgvectorを含む既存基盤優先の判断も多い。PoCではChromaやFaiss、運用ではマネージドサービスに移る流れが散見。

2. Weaviate Community Forum  
   URL: https://forum.weaviate.io/t/autoscaling-and-rps-issues/2334  
   要旨: RPS増加時の遅延に関する相談があり、レプリケーションや水平スケールなど運用設計が性能に直結することが示唆される。

3. Pinecone Community（Support）  
   URL: https://community.pinecone.io/t/high-query-latency/6134  
   要旨: 大規模ベクトル件数環境で遅延の相談があり、インデックス設計・運用条件・サポート連携が実運用で重要。

4. Chroma GitHub Issue  
   URL: https://github.com/chroma-core/chroma/issues/5843  
   要旨: PersistentClient利用時のメモリ解放挙動に関する報告。ローカル/組み込み運用時はバージョン差分と既知Issue確認が必要。

5. Chroma GitHub Issue（Feature Request）  
   URL: https://github.com/chroma-core/chroma/issues/705  
   要旨: サーバー側埋め込み要求など、クライアント構成と運用要件のギャップが議論されている。

## 3. Claim照合メモ（2ソース以上）

### Claim 1
- 主張: 「ベクターデータベースは埋め込みベクトルを距離計算で検索する基盤」
- 根拠:
  - Weaviate Vector Search docs（query vectorとの比較、距離指標）
  - HNSW論文（ANN探索の設計背景）
- 判定: Supported

### Claim 2
- 主張: 「Pineconeはマネージド運用とマルチテナント設計（namespace）が強み」
- 根拠:
  - Pinecone overview（fully managed vector database）
  - Pinecone manage cost（serverless + namespace設計とコスト関係）
- 判定: Supported

### Claim 3
- 主張: 「Weaviateはオープンソース基盤とクラウドマネージドの両方を選べる」
- 根拠:
  - Weaviate docs（open-source vector database）
  - Weaviate Cloud docs（fully managed vector database in the cloud）
- 判定: Supported

### Claim 4
- 主張: 「Chromaはローカル軽量導入に向くが、運用段階では永続化/サーバー運用を明示的に設計する必要がある」
- 根拠:
  - Chroma Getting Started（in-memoryは終了時にデータ喪失）
  - Chroma Clients（PersistentClient / client-server mode）
  - Chroma issue #5843（実運用での挙動確認ニーズ）
- 判定: Supported（実運用論点はコミュニティ補助根拠）

### Claim 5
- 主張: 「RAG向けの選定は機能比較だけでなく、用途×コスト×スケールで決めるべき」
- 根拠:
  - Pinecone docs（操作量・スキャン件数と費用）
  - Weaviate forum / Pinecone community（RPS・遅延の実運用課題）
  - Reddit実声（PoCと本番で選定基準が変わる）
- 判定: Supported

## 4. 変動情報の扱い

- 価格・課金単価・無料枠・上限は変動しやすいため、記事内は「構造（何に課金されるか）」中心で記述。
- 「確認日: 2026-02-19」を本文に明示。
- ベンチマーク数値は条件依存が強いため、固定ランキングは掲載しない。

## 5. 未確定事項

- [要確認: 2026年時点の日本語公開事例における導入費用中央値]
- [要確認: Pinecone / Weaviate / Chroma Cloudの最新無料枠の比較表（公式価格ページの都度確認が必要）]
