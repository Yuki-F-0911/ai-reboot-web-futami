# 記事リサーチ: rag-vs-finetuning-guide

- 作成日: 2026-02-19
- 対象記事: `RAGとファインチューニング、どちらを選ぶ？社内データ活用の判断フレーム`
- 主KW: `RAG ファインチューニング 違い` / `社内データ 生成AI`
- サブKW: `LLM カスタマイズ 方法` / `ファインチューニング 費用` / `RAG 実装 コスト`

## 1. 一次情報（公式資料・論文）

### Source A: RAG原典（論文）
- タイトル: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks
- URL: https://arxiv.org/abs/2005.11401
- 確認日: 2026-02-19
- 要点:
  - LLMのパラメトリック知識だけでは更新・根拠提示に限界がある課題設定。
  - 外部の非パラメトリックメモリ（検索）を組み合わせる設計を提示。
  - 知識集約タスクで有効性を報告。

### Source B: OpenAI API Docs（Model optimization / Fine-tuning）
- タイトル: Model optimization
- URL: https://platform.openai.com/docs/guides/fine-tuning
- 実URL: https://developers.openai.com/api/docs/guides/model-optimization
- 確認日: 2026-02-19
- 要点:
  - Evals→Prompt→Fine-tuningの運用ループが明示されている。
  - Fine-tuningは「特定タスクで一貫した出力形式」「短いプロンプト」「レイテンシ削減」に寄与しうる。
  - ただしデータ収集・評価を含む継続的運用が前提。

### Source C: OpenAI API Docs（Retrieval）
- タイトル: Retrieval
- URL: https://platform.openai.com/docs/guides/retrieval
- 実URL: https://developers.openai.com/api/docs/guides/retrieval
- 確認日: 2026-02-19
- 要点:
  - Retrieval APIはセマンティック検索を提供。
  - ベクトルストアに追加したファイルは自動でchunking/embedding/indexing。
  - ランキング設定（ranker, score_threshold, hybrid weight）で検索品質を調整可能。
  - ベクトルストア課金（ストレージ）に関する記述あり。

### Source D: OpenAI API Pricing（費用）
- タイトル: API Pricing
- URL: https://openai.com/api/pricing/
- 確認日: 2026-02-19
- 要点:
  - Fine-tuningは「学習コスト」と「推論コスト」を分けて管理する必要がある。
  - モデルごとに学習単価が異なるため、実装時は都度確認が必要。
  - 料金は更新されるため、記事内では絶対値ではなくコスト構造で説明する方針。

### Source E: Microsoft Learn（RAG vs Fine-tuning）
- タイトル: Augment large language models with retrieval-augmented generation or fine-tuning
- URL: https://learn.microsoft.com/en-us/azure/developer/ai/augment-llm-rag-fine-tuning
- 確認日: 2026-02-19
- 要点:
  - Fine-tuning適用条件: task-specific performance / stable content / 十分なデータ。
  - RAG適用条件: dynamic content / wide topic coverage / limited resources。
  - Fine-tuningの課題: データ要件、過学習、コスト、更新保守、モデルドリフト。

### Source F: AWS Prescriptive Guidance（RAG比較）
- タイトル: Comparing Retrieval Augmented Generation and fine-tuning
- URL: https://docs.aws.amazon.com/prescriptive-guidance/latest/retrieval-augmented-generation-options/rag-vs-fine-tuning.html
- 確認日: 2026-02-19
- 要点:
  - RAGは最新文書を短時間で反映しやすく、参照元提示が可能。
  - Fine-tuningは更新頻度が高い文書には不向きになりやすい。
  - ハイブリッド（RAG + Fine-tuning）併用の選択肢を公式に言及。

## 2. SNS・コミュニティ実声（補助根拠）

> 個人情報・IDは出さず、論点のみ要約。

1. Reddit（r/Rag）  
   URL: https://www.reddit.com/r/Rag/comments/1juimqk  
   要旨: 実運用では「1秒未満の体感速度」が重視され、RAGの遅延は取得量・履歴・リランキング設計で大きく変動する。

2. Reddit（r/Rag）  
   URL: https://www.reddit.com/r/Rag/comments/1ok0s3w/rag_and_its_latency/  
   要旨: クエリ書き換え→検索→再ランキング→生成が直列化されるため、RAGの高速化はアーキテクチャ設計が要点。

3. Reddit（r/LangChain）  
   URL: https://www.reddit.com/r/LangChain/comments/1benf40  
   要旨: 大規模文書群では検索設計が不十分だと精度・速度が崩れる。階層検索やハイブリッド検索への言及が多い。

4. Reddit（r/LLMDevs）  
   URL: https://www.reddit.com/r/LLMDevs/comments/1j5fzjn/rag_vs_finetuning_what_would_you_pick_and_why/  
   要旨: 「まずRAG、必要条件がそろったらFine-tuning」の実務感覚が共有されている。

5. Reddit（r/Rag）  
   URL: https://www.reddit.com/r/Rag/comments/1lsxrfh  
   要旨: Fine-tuningは知識追加より振る舞い調整に効く、という認識が現場で共有されつつある。

## 3. Claim照合メモ（2ソース以上）

### Claim 1
- 主張: 「頻繁に更新される社内文書はRAGが向く」
- 根拠:
  - Microsoft Learn: RAGはdynamic content向け
  - AWS Prescriptive Guidance: 最新文書反映が早い
- 判定: Supported

### Claim 2
- 主張: 「出力形式やトーンの固定はFine-tuningが向く」
- 根拠:
  - OpenAI Model optimization: 一貫フォーマットや短縮プロンプトの利点
  - Microsoft Learn: task-specific performance, specialization
- 判定: Supported

### Claim 3
- 主張: 「RAGは検索品質が低いと精度が落ちる」
- 根拠:
  - OpenAI Retrieval docs: ranker / score_threshold / hybrid weights調整が必要
  - Microsoft Learn: RAGはaccuracy/relevance設計課題を明示
- 判定: Supported

### Claim 4
- 主張: 「Fine-tuningは初期学習・再学習の運用コストがかかる」
- 根拠:
  - OpenAI Pricing: 学習課金構造が存在
  - Microsoft Learn: メンテナンス更新・コスト課題
- 判定: Supported

### Claim 5
- 主張: 「最終的に併用が最適なケースがある」
- 根拠:
  - AWS Prescriptive Guidance: 併用明記
  - OpenAI docs: Prompt/Evals/Fine-tuningの組み合わせ運用を前提化
- 判定: Supported

## 4. 変動情報の扱い

- 料金情報は更新頻度が高いため、記事では「構造（初期費/運用費/再学習費）」中心で記述。
- 必要に応じて「2026-02-19時点」の注記を入れる。

## 5. 未確定事項

- [要確認: 日本語企業事例での公開ベースの導入コスト中央値]
- [要確認: 国内でのRAG運用体制（専任人数）の公開統計]
