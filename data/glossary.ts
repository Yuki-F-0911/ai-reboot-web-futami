import type { GlossaryTerm } from "@/types/glossary";

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "llm",
    term: "LLM（大規模言語モデル）",
    reading: "エルエルエム（だいきぼげんごモデル）",
    category: "モデル",
    summary:
      "LLMとは、大量のテキストデータを学習した大規模なAIモデルで、文章の生成・翻訳・要約・質問応答など幅広い言語タスクをこなせます。",
    description: `LLM（Large Language Model：大規模言語モデル）とは、インターネット上の膨大なテキストデータをもとに学習された、数十億〜数千億のパラメータを持つ大規模なニューラルネットワークです。

なぜLLMが注目されるかというと、スケール（モデルの大きさと学習データ量）を大きくするほど、事前に学習していなかったタスクでも高い性能を発揮する「創発的能力（Emergent Abilities）」が確認されているためです。

代表例として、OpenAIのGPTシリーズ、GoogleのGemini、AnthropicのClaudeなどがあります。企業はこれらのLLMをAPIで利用し、チャットボット、コード補助、文書要約などの業務アプリケーションを構築しています。LLMは単独でも利用できますが、RAGやエージェントと組み合わせることでさらに高度なシステムを実現できます。`,
    relatedSlugs: ["gpt", "generative-ai", "token", "context-window", "inference", "fine-tuning", "rag", "agent"],
    sources: [
      {
        title: "Language Models are Few-Shot Learners（GPT-3論文）",
        url: "https://arxiv.org/abs/2005.14165",
        publisher: "arXiv / OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Large language model - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Large_language_model",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "gpt",
    term: "GPT",
    reading: "ジーピーティー",
    category: "モデル",
    summary:
      "GPTとは、OpenAIが開発したトランスフォーマーベースの言語モデルシリーズで、GPT-4oをはじめとする主要モデルはテキスト・画像・音声を扱うマルチモーダルAIとして広く普及しています。",
    description: `GPT（Generative Pre-trained Transformer）とは、OpenAIが開発した大規模言語モデル（LLM）のシリーズです。「生成（Generative）」「事前学習（Pre-trained）」「トランスフォーマー（Transformer）」の頭文字を取っています。

GPTが重要な理由は、2020年のGPT-3公開以降、LLMの実用性を社会に広く示した先駆け的な存在であるためです。GPT-3.5をベースにしたChatGPTは2022年末に公開され、AIの大衆化の象徴となりました。

GPT-4oシリーズはテキスト・画像・音声を扱えるマルチモーダルモデルです。OpenAIのAPIを通じて、プロダクト開発者が独自サービスに組み込む形で広く利用されています。プロンプトの工夫（プロンプトエンジニアリング）や、Function CallingによるAPIとの連携など、ビジネス活用の幅が広がっています。`,
    relatedSlugs: ["llm", "generative-ai", "prompt", "token", "rlhf"],
    sources: [
      {
        title: "OpenAI Models Documentation",
        url: "https://platform.openai.com/docs/models",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Language Models are Few-Shot Learners（GPT-3論文）",
        url: "https://arxiv.org/abs/2005.14165",
        publisher: "arXiv / OpenAI",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "generative-ai",
    term: "生成AI（ジェネレーティブAI）",
    reading: "せいせいエーアイ",
    category: "基礎概念",
    summary:
      "生成AIとは、テキスト・画像・音声・動画などを新たに生成できるAI技術の総称です。LLMを中心に急速に普及し、ビジネスや創作活動に変革をもたらしています。",
    description: `生成AI（Generative AI）とは、学習データのパターンを学んで、新しいコンテンツ（テキスト・画像・音声・動画・コードなど）を生成できるAIモデルの総称です。

なぜ生成AIが注目されるかというと、従来のAIが「分類」「予測」「検出」を主としていたのに対し、生成AIはゼロからコンテンツを作り出す点が根本的に異なるためです。この能力により、コピーライティング、コード生成、画像作成、音楽制作など、従来は人間の創造性が必要だと思われていた領域でも活用が広がっています。

代表的な生成AIには、テキスト生成のChatGPT・Claude、画像生成のStable Diffusion・Midjourney、音楽生成のSunoなどがあります。一方でハルシネーション（誤情報の生成）やバイアス、著作権などの課題も存在し、AIガバナンスの観点から適切な利用ルールの整備が求められています。`,
    relatedSlugs: ["llm", "gpt", "multimodal", "hallucination", "ai-governance"],
    sources: [
      {
        title: "What is Generative AI? - Google Cloud",
        url: "https://cloud.google.com/use-cases/generative-ai",
        publisher: "Google Cloud",
        accessedAt: "2026-02-25",
      },
      {
        title: "生成AI - Wikipedia",
        url: "https://ja.wikipedia.org/wiki/%E7%94%9F%E6%88%90%E7%9A%84%E4%BA%BA%E5%B7%A5%E7%9F%A5%E8%83%BD",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "prompt",
    term: "プロンプト",
    reading: "プロンプト",
    category: "基礎概念",
    summary:
      "プロンプトとは、AIモデルに対して送る入力テキストの総称です。AIへの「指示書」にあたり、プロンプトの書き方次第で出力の品質が大きく変わります。",
    description: `プロンプト（Prompt）とは、LLMやその他のAIモデルに対して送るテキスト入力のことです。「何をしてほしいか」を自然言語で伝える「指示書」にあたります。

プロンプトが重要な理由は、同じAIモデルであっても、プロンプトの書き方次第で出力結果が大幅に変わるためです。曖昧な指示では期待通りの回答が得られない一方、明確で具体的なプロンプトを設計することで精度と一貫性が向上します。

プロンプトには大きく分けて、ユーザーが直接入力する「ユーザープロンプト」と、AIの動作の前提を設定する「システムプロンプト」があります。また、Few-shot学習のように具体例を含めたり、Chain of Thought（CoT）のように思考ステップを促したりするテクニックもあります。これらを体系的に設計・最適化する技術が「プロンプトエンジニアリング」です。`,
    relatedSlugs: ["prompt-engineering", "system-prompt", "few-shot-learning", "zero-shot-learning", "cot", "gpt"],
    sources: [
      {
        title: "Prompt engineering - OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/prompt-engineering",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Introduction to prompt design - Google AI",
        url: "https://ai.google.dev/gemini-api/docs/prompting-intro",
        publisher: "Google AI",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "rag",
    term: "RAG（検索拡張生成）",
    reading: "ラグ（けんさくかくちょうせいせい）",
    category: "実装",
    summary:
      "RAGとは、ユーザーの質問に関連する情報を外部データベースから検索し、その情報をLLMに渡して回答を生成させる技術です。ハルシネーションを減らし、外部データや社内情報への対応を可能にします。",
    description: `RAG（Retrieval-Augmented Generation：検索拡張生成）とは、LLMの回答生成に先立って、関連情報を外部データソースから検索・取得し、その情報をコンテキストとしてLLMに与えることで、より正確な回答を引き出す手法です。

RAGが必要とされる主な理由は2つあります。第一に、LLMはトレーニングデータの知識しか持たないため、詳細な情報や組織固有の知識（社内規程、製品情報など）を直接答えられません。第二に、LLMはもっともらしい誤情報（ハルシネーション）を生成することがあり、根拠となるドキュメントを参照させることでこれを抑制できます。

実装の流れは「①ドキュメントをチャンクに分割→②エンベディング（ベクトル化）→③ベクトルDBに格納→④クエリをベクトル化して類似検索→⑤取得したチャンクをLLMのコンテキストに追加して回答生成」となります。社内FAQや製品ナレッジベース、法令文書への問い合わせシステムなどで広く利用されています。`,
    relatedSlugs: ["embedding", "vector-db", "semantic-search", "hallucination", "llm", "agent"],
    sources: [
      {
        title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        url: "https://arxiv.org/abs/2005.11401",
        publisher: "arXiv / Facebook AI Research",
        accessedAt: "2026-02-25",
      },
      {
        title: "Retrieval augmented generation - Google Cloud",
        url: "https://cloud.google.com/use-cases/retrieval-augmented-generation",
        publisher: "Google Cloud",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "fine-tuning",
    term: "ファインチューニング",
    reading: "ファインチューニング",
    category: "実装",
    summary:
      "ファインチューニングとは、事前学習済みの大規模モデルを特定タスク・ドメインのデータで追加学習し、その領域の性能を向上させる技術です。",
    description: `ファインチューニング（Fine-tuning）とは、大量データで事前学習（Pre-training）済みのモデルを、特定のタスクやドメインに合わせた小規模なデータセットでさらに学習させることで、その領域での性能を最適化する技術です。

なぜファインチューニングが使われるかというと、汎用LLMはさまざまなタスクをこなせますが、特定分野（医療・法律・自社製品など）の専門知識や特有の文体・フォーマットへの適応は十分でない場合があるためです。ファインチューニングにより、少ないコストで特化した性能を引き出せます。

代表的な手法には、モデル全体のパラメータを更新する「フルファインチューニング」と、一部のパラメータのみを更新する効率的手法（LoRA、SFT等）があります。RAGが「外部情報の参照」で補うのに対し、ファインチューニングは「モデルそのものの知識・振る舞いを変える」アプローチです。`,
    relatedSlugs: ["sft", "rlhf", "lora", "llm", "few-shot-learning"],
    sources: [
      {
        title: "Fine-tuning - OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/fine-tuning",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Fine-tuning language models - Hugging Face",
        url: "https://huggingface.co/docs/transformers/training",
        publisher: "Hugging Face",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "embedding",
    term: "エンベディング（埋め込み）",
    reading: "エンベディング（うめこみ）",
    category: "実装",
    summary:
      "エンベディングとは、テキストや画像などのデータを数値ベクトルに変換する技術です。意味的に近いデータ同士はベクトル空間で近くに配置されるため、類似検索やRAGの基盤として機能します。",
    description: `エンベディング（Embedding：埋め込み）とは、テキスト・画像・音声などのデータをAIが扱いやすい数値ベクトル（浮動小数点の数値の配列）に変換する技術です。

エンベディングが重要な理由は、意味的に似たデータが数値空間の中で近い位置（高いコサイン類似度）に配置されるためです。これにより、「犬」と「猫」は「犬」と「自動車」よりも近いベクトル表現になります。

主な活用場面は3つあります。①RAGのパイプラインで、ドキュメントをベクトル化してベクトルDBに格納し、クエリとの類似検索を行う②セマンティック検索システムの構築③レコメンデーション（類似商品・記事の提案）。OpenAIやCohere、Google等がAPIとして提供しており、数百〜数千次元のベクトルを生成します。`,
    relatedSlugs: ["rag", "vector-db", "semantic-search", "token"],
    sources: [
      {
        title: "Embeddings - OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/embeddings",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Word embedding - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Word_embedding",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "token",
    term: "トークン",
    reading: "トークン",
    category: "基礎概念",
    summary:
      "トークンとは、LLMがテキストを処理する最小単位です。単語・部分文字列・文字などに相当し、APIの利用コストや処理できる文章の長さ（コンテキストウィンドウ）はトークン数で計算されます。",
    description: `トークン（Token）とは、LLMがテキストを処理する際に扱う基本単位のことです。単語そのものではなく、サブワード（部分的な単語）やバイトペアエンコーディング（BPE）で分割された単位が一般的です。

トークンを理解することが重要なのは、LLMのAPIコスト、処理速度、そしてコンテキストウィンドウ（一度に処理できる上限量）がすべてトークン数によって決まるためです。

英語では1トークン≒0.75単語が目安で、日本語は1文字が1〜2トークン程度になるケースが多く、英語と比べてトークン消費が多くなる傾向があります。GPT-4oでは128,000トークン（約30万字相当）のコンテキストウィンドウをサポートしています。コストを抑えるには、不要なテキストを除くプロンプト設計が有効です。`,
    relatedSlugs: ["llm", "context-window", "gpt"],
    sources: [
      {
        title: "Tokenizer - OpenAI Cookbook",
        url: "https://cookbook.openai.com/articles/what_are_tokens_and_how_to_count_them",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Tokenization - Hugging Face",
        url: "https://huggingface.co/docs/transformers/tokenizer_summary",
        publisher: "Hugging Face",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "hallucination",
    term: "ハルシネーション（幻覚）",
    reading: "ハルシネーション（げんかく）",
    category: "評価",
    summary:
      "ハルシネーションとは、LLMが事実と異なる情報をもっともらしく生成する現象です。自信満々に嘘をつくため、出力の事実確認が必須となります。",
    description: `ハルシネーション（Hallucination：幻覚）とは、LLMが根拠のない事実・存在しない引用・誤った数値などを、あたかも正確な情報であるかのように生成する現象です。

なぜ起きるかというと、LLMは「次に確率的に尤もらしいトークン」を予測する仕組みのため、知識がない場合でも流暢な文章を生成しようとします。この結果、事実確認なしに内容を作り出すことがあります。

主な対策は3つあります。①RAGを用いて根拠ドキュメントを明示する②複数回答させて一致度を確認する③モデルに「不確かな場合はその旨を述べること」を指示するプロンプト設計。特に医療・法律・財務情報など、誤りが重大な影響を及ぼす領域では、専門家によるファクトチェックを必ず組み合わせることが推奨されます。`,
    relatedSlugs: ["rag", "generative-ai", "evaluation-metrics", "bias"],
    sources: [
      {
        title: "Survey of Hallucination in Natural Language Generation",
        url: "https://arxiv.org/abs/2202.03629",
        publisher: "arXiv",
        accessedAt: "2026-02-25",
      },
      {
        title: "Hallucination (artificial intelligence) - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "multimodal",
    term: "マルチモーダル",
    reading: "マルチモーダル",
    category: "モデル",
    summary:
      "マルチモーダルとは、テキスト・画像・音声・動画など複数の入出力形式（モダリティ）を扱えるAIモデルの特性です。GPT-4oやGeminiが代表例です。",
    description: `マルチモーダル（Multimodal）とは、テキスト・画像・音声・動画などの異なる種類のデータ（モダリティ）を組み合わせて入力・処理・出力できるAIモデルの特性を指します。

従来のLLMがテキストのみを扱っていたのに対し、マルチモーダルモデルは「この写真に何が写っていますか？」「この音声を文字起こしして」といった要求を自然言語と組み合わせて処理できます。

代表的なマルチモーダルモデルにはOpenAI GPT-4o、Google Gemini、Anthropic Claude 3.5 Sonnetなどがあります。活用例としては、医療画像の解析、製造業の画像検査、eコマースの商品画像説明生成、音声インターフェースなどがあり、ビジネスの入力インターフェースを大幅に拡張します。`,
    relatedSlugs: ["llm", "generative-ai", "agent"],
    sources: [
      {
        title: "GPT-4V（ision）System Card",
        url: "https://openai.com/research/gpt-4v-system-card",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Multimodal AI - Google DeepMind",
        url: "https://deepmind.google/technologies/gemini/",
        publisher: "Google DeepMind",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "agent",
    term: "AIエージェント",
    reading: "エーアイエージェント",
    category: "実装",
    summary:
      "AIエージェントとは、LLMが自律的に計画を立て、ツールを使いながら複数ステップのタスクを実行するシステムです。単純なQ＆Aを超え、実際の業務を「代理実行」します。",
    description: `AIエージェント（AI Agent）とは、LLMが「目標」を与えられた際に自律的に計画を立て、必要なツール（Web検索・コード実行・API呼び出し・ファイル操作など）を選択・実行しながら複数ステップのタスクを完遂するシステムです。

なぜエージェントが重要かというと、従来のLLMは「一問一答」のパターンでしたが、エージェントは「リサーチして、まとめて、メールを送る」といった連続する複数の行動を自律的にこなせるため、より複雑な業務自動化が可能になるためです。

代表的な構成要素は「LLM（思考エンジン）」「ツール（実行手段）」「メモリ（状態管理）」「オーケストレーター（全体制御）」です。複数のエージェントが役割分担して協力する「マルチエージェント」システムも増加しています。OpenAI AgentsやAnthropic Claude Agentic Useなど、各社がエージェント向けAPIを整備しています。`,
    relatedSlugs: ["llm", "multi-agent", "orchestration", "function-calling", "rag"],
    sources: [
      {
        title: "Agents - OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/agents",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Building effective agents - Anthropic",
        url: "https://docs.anthropic.com/en/docs/agents-and-tools/agents-overview",
        publisher: "Anthropic",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "cot",
    term: "CoT（Chain of Thought）",
    reading: "シーオーティー（チェーン・オブ・ソート）",
    category: "実装",
    summary:
      "CoTとは、LLMに「ステップごとに考える」よう促すプロンプト技法です。「ステップバイステップで考えて」と指示するだけで、複雑な推論問題の正答率が大幅に向上します。",
    description: `CoT（Chain of Thought：思考の連鎖）とは、LLMが最終答えを出す前に中間的な思考過程を段階的に生成するよう促すプロンプト技法です。2022年にGoogleの研究チームが論文で発表し、注目を集めました。

なぜCoTが有効かというと、LLMは複雑な数学・論理・多段推論タスクで直接答えを出そうとすると誤りやすいですが、「考え方を書き出す」ことで自己確認・修正が働き、正答率が向上するためです。

使い方は簡単で、プロンプト末尾に「ステップバイステップで考えてください」と追加するだけ（Zero-shot CoT）か、具体的な思考ステップ例を示す（Few-shot CoT）方法があります。OpenAI o1/o3などの推論モデルは、CoTを内部で自動的に行う設計になっています。`,
    relatedSlugs: ["prompt-engineering", "few-shot-learning", "llm", "inference", "prompt"],
    sources: [
      {
        title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
        url: "https://arxiv.org/abs/2201.11903",
        publisher: "arXiv / Google Brain",
        accessedAt: "2026-02-25",
      },
      {
        title: "Large Language Models are Zero-Shot Reasoners",
        url: "https://arxiv.org/abs/2205.11916",
        publisher: "arXiv",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "few-shot-learning",
    term: "Few-shot学習",
    reading: "フューショットがくしゅう",
    category: "実装",
    summary:
      "Few-shot学習とは、プロンプト内に少数の入出力例（ショット）を示すことでLLMに望ましい回答形式・スタイルを学ばせる技法です。追加学習なしに出力の品質を向上できます。",
    description: `Few-shot学習（Few-shot Learning）とは、LLMへのプロンプトに「入力例→期待される出力例」のペアを数件（数ショット）含めることで、モデルに望ましい回答パターンを示す技法です。GPT-3論文でその有効性が広く示されました。

なぜFew-shotが有効かというと、LLMは文脈から「このような種類のタスクを求めているのだな」と学習し、同じパターンで新しい入力に対応できるためです。追加のファインチューニング（モデル再学習）が不要なため、コストと時間を大幅に節約できます。

例えば、「食べ物のカテゴリ分類」タスクで、プロンプトに「りんご→果物」「鶏肉→肉類」と示せば、「じゃがいも→」に対して「野菜」と正しく答えるようになります。一方でZero-shot（例なし）、One-shot（1件）、Few-shot（複数件）と例の数により精度が変わります。`,
    relatedSlugs: ["zero-shot-learning", "fine-tuning", "prompt", "cot"],
    sources: [
      {
        title: "Language Models are Few-Shot Learners（GPT-3論文）",
        url: "https://arxiv.org/abs/2005.14165",
        publisher: "arXiv / OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Few-shot learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Few-shot_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "zero-shot-learning",
    term: "Zero-shot学習",
    reading: "ゼロショットがくしゅう",
    category: "実装",
    summary:
      "Zero-shot学習とは、入力例を一切示さずにLLMに新しいタスクを実行させる技法です。事前学習で得た汎用知識だけで、説明のみから対応するLLMの能力を活用します。",
    description: `Zero-shot学習（Zero-shot Learning）とは、プロンプトに具体的な入出力例を含めず、タスクの説明だけでLLMに正しい処理を行わせる技法です。LLMが事前学習で得た広範な知識を活用します。

なぜZero-shotが重要かというと、例を用意する手間なしにさまざまなタスクに対応できる柔軟性は、LLMの大きな強みの一つだからです。多くの汎用タスク（翻訳・要約・感情分析など）ではZero-shotだけで十分な精度が得られます。

Few-shot（例あり）と比較すると、Zero-shotはプロンプトが短くなるためトークン消費を抑えられる利点がある一方、複雑なタスクや特殊なフォーマットが必要な場合はFew-shotの方が高精度になる傾向があります。「ステップバイステップで考えてください」のようなCoTと組み合わせるZero-shot CoTも広く使われています。`,
    relatedSlugs: ["few-shot-learning", "llm", "prompt"],
    sources: [
      {
        title: "Large Language Models are Zero-Shot Reasoners",
        url: "https://arxiv.org/abs/2205.11916",
        publisher: "arXiv",
        accessedAt: "2026-02-25",
      },
      {
        title: "Zero-shot learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Zero-shot_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "rlhf",
    term: "RLHF（人間のフィードバックによる強化学習）",
    reading: "アールエルエイチエフ（にんげんのフィードバックによるきょうかがくしゅう）",
    category: "モデル",
    summary:
      "RLHFとは、人間が回答の優劣を評価したデータを使って報酬モデルを学習させ、強化学習でLLMを人間の好みに合わせる技術です。ChatGPTの開発に採用されています。",
    description: `RLHF（Reinforcement Learning from Human Feedback：人間のフィードバックによる強化学習）とは、人間の評価者がLLMの複数の回答を比較・採点したデータをもとに「報酬モデル（Reward Model）」を学習し、その報酬モデルを使ってLLMを強化学習で最適化する手法です。

なぜRLHFが重要かというと、事前学習済みのLLMは流暢な文章を生成できても、有害なコンテンツや誤情報を出力する可能性があり、人間の価値観や安全基準に沿った回答に調整するためです。OpenAIのInstructGPT論文（2022）でその有効性が示され、ChatGPTの基盤技術となりました。

RLHFのプロセスは一般的に「①SFT（教師あり微調整）→②報酬モデル学習→③PPOで強化学習」の3段階です。近年はDPO（Direct Preference Optimization）のようにRLHFをより安定して実装する代替手法も登場しています。`,
    relatedSlugs: ["sft", "fine-tuning", "llm", "bias", "gpt"],
    sources: [
      {
        title: "Training language models to follow instructions with human feedback（InstructGPT論文）",
        url: "https://arxiv.org/abs/2203.02155",
        publisher: "arXiv / OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Reinforcement learning from human feedback - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "sft",
    term: "SFT（教師ありファインチューニング）",
    reading: "エスエフティー（きょうしありファインチューニング）",
    category: "モデル",
    summary:
      "SFTとは、人間が作成した「指示→望ましい回答」ペアのデータセットを使ってLLMを教師あり学習でファインチューニングする手法です。RLHFの前段階として広く用いられます。",
    description: `SFT（Supervised Fine-Tuning：教師ありファインチューニング）とは、人間のアノテーターが作成した「プロンプト（指示）→高品質な回答」のペアからなるデータセットを用いて、事前学習済みのLLMをファインチューニングする手法です。

なぜSFTが使われるかというと、事前学習だけのモデルは「次のトークン予測」を学んでおり、人間の指示に従う能力が不十分なためです。SFTにより、モデルは「どのような形式・スタイルで答えるべきか」を学習します。

RLHFのパイプラインでは、SFTが最初のステップとして位置づけられます。SFTで基本的な指示追従能力を付与した後、人間の比較評価データで報酬モデルを学習し、最後にRLHFで整合性を高める流れが一般的です。また、SFTのみで高品質なモデルを作る場合（e.g. LLaMAのファインチューニング）にも利用されます。`,
    relatedSlugs: ["rlhf", "fine-tuning", "llm"],
    sources: [
      {
        title: "Training language models to follow instructions with human feedback",
        url: "https://arxiv.org/abs/2203.02155",
        publisher: "arXiv / OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Supervised fine-tuning - Hugging Face",
        url: "https://huggingface.co/docs/trl/sft_trainer",
        publisher: "Hugging Face",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "lora",
    term: "LoRA（低ランク適応）",
    reading: "ローラ（ていランクてきおう）",
    category: "実装",
    summary:
      "LoRAとは、大規模モデルの重みを直接更新せず、追加した低ランク行列のみを学習することで、少ないメモリ・コストでファインチューニングを実現する手法です。",
    description: `LoRA（Low-Rank Adaptation：低ランク適応）とは、事前学習済みモデルの重み行列を凍結（固定）したうえで、各行列に小さな低ランク行列のペア（A・B）を追加し、そのA・Bのみを学習するパラメータ効率的なファインチューニング手法です。2021年にMicrosoftの研究チームが提案しました。

なぜLoRAが広く使われるかというと、LLMのフルファインチューニングは数百GBのVRAMを必要とする一方、LoRAは学習するパラメータを大幅に削減（1%以下）するため、一般的なGPU（24GB以下）でも実用的なファインチューニングが可能になるためです。

また、学習済みのLoRAアダプターを交換することで、同じベースモデルに複数のLoRAを切り替えて使うことができます。QLoRA（量子化＋LoRA）と組み合わせるとさらに消費メモリを削減できます。オープンソースモデル（LLaMAなど）のカスタマイズで特に普及しています。`,
    relatedSlugs: ["fine-tuning", "sft", "quantization"],
    sources: [
      {
        title: "LoRA: Low-Rank Adaptation of Large Language Models",
        url: "https://arxiv.org/abs/2106.09685",
        publisher: "arXiv / Microsoft",
        accessedAt: "2026-02-25",
      },
      {
        title: "LoRA - Hugging Face Documentation",
        url: "https://huggingface.co/docs/peft/conceptual_guides/lora",
        publisher: "Hugging Face",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "quantization",
    term: "量子化",
    reading: "りょうしか",
    category: "実装",
    summary:
      "量子化とは、LLMのモデルパラメータを高精度な浮動小数点数（FP32等）から低ビット数（INT8・INT4等）に変換することで、メモリ消費と推論コストを削減する技術です。",
    description: `量子化（Quantization）とは、ニューラルネットワークのパラメータ（重み）を表現するデータ型を、高精度な浮動小数点数（FP32: 32ビット）からより低いビット数（INT8: 8ビット、INT4: 4ビット等）に変換することで、モデルサイズと推論時のメモリ使用量・計算量を削減する技術です。

なぜ量子化が必要かというと、70億パラメータ（7B）のモデルをFP32で保持するだけで約28GBのVRAMが必要なのに対し、INT4量子化では約4GBに圧縮でき、一般的なGPUでも動作させられるためです。

量子化にはトレードオフがあり、ビット数を下げるほどモデルの精度がわずかに低下する可能性があります。GPTQ、AWQ、bitsandbytesなどのライブラリが代表的な量子化手法を提供しており、LoRAと組み合わせるQLoRAはファインチューニングの低コスト化に広く使われています。`,
    relatedSlugs: ["lora", "inference", "llm"],
    sources: [
      {
        title: "Quantization - Hugging Face Documentation",
        url: "https://huggingface.co/docs/transformers/quantization",
        publisher: "Hugging Face",
        accessedAt: "2026-02-25",
      },
      {
        title: "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers",
        url: "https://arxiv.org/abs/2210.17323",
        publisher: "arXiv",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "inference",
    term: "推論（インファレンス）",
    reading: "すいろん（インファレンス）",
    category: "基礎概念",
    summary:
      "推論とは、学習済みのAIモデルが新しい入力データに対して出力を生成するプロセスです。AIの「実際に使う段階」を指し、学習（トレーニング）とは区別されます。",
    description: `推論（Inference）とは、学習（Training）が完了したAIモデルに新しい入力（プロンプトなど）を与え、出力（回答・予測・生成結果）を得るプロセスを指します。ユーザーがChatGPTやClaudeに質問したとき、バックグラウンドで行われているのがこの「推論」です。

学習と推論を区別する重要性は、コストの性質が異なるためです。学習は大量のGPUを長時間使い多大なコストがかかりますが（数億〜数百億円規模）、推論は学習済みモデルを使うだけなので比較的安価です。ただし、大規模サービスでは推論コストが積み上がるため、効率化（量子化・推論最適化）が重要な課題になります。

近年、「推論モデル（Reasoning Model）」という用語も登場しており、OpenAI o1/o3などのように回答前に内部でCoT（Chain of Thought）を自動実行して精度を高めるモデルを指す文脈でも「推論」という言葉が使われます。`,
    relatedSlugs: ["llm", "quantization", "context-window"],
    sources: [
      {
        title: "Inference - Machine Learning Glossary - Google Developers",
        url: "https://developers.google.com/machine-learning/glossary#inference",
        publisher: "Google Developers",
        accessedAt: "2026-02-25",
      },
      {
        title: "Model Inference - NVIDIA Documentation",
        url: "https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/index.html",
        publisher: "NVIDIA",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "prompt-engineering",
    term: "プロンプトエンジニアリング",
    reading: "プロンプトエンジニアリング",
    category: "実装",
    summary:
      "プロンプトエンジニアリングとは、LLMから望ましい出力を引き出すためにプロンプトを体系的に設計・最適化するスキルと技術体系です。モデルの再学習なしに性能を向上させる方法です。",
    description: `プロンプトエンジニアリング（Prompt Engineering）とは、LLMへの入力（プロンプト）を体系的に設計・反復改善することで、出力の品質・精度・一貫性を向上させる技術体系です。

なぜプロンプトエンジニアリングが重要かというと、同じLLMであっても、指示の書き方次第で出力品質に大きな差が生まれるためです。モデルのパラメータを変えることなく性能を引き出せるため、コストパフォーマンスが高い改善手段です。

主な技法には以下があります。①明確で具体的な指示を与える②Few-shot（具体例提示）を活用する③CoT（Chain of Thought）で段階的な思考を促す④役割（ロールプレイ）を与える⑤出力フォーマットを指定する。AnthropicやOpenAIは公式のプロンプトエンジニアリングガイドを提供しており、実務では繰り返しの実験と評価が重要です。`,
    relatedSlugs: ["prompt", "system-prompt", "cot", "few-shot-learning"],
    sources: [
      {
        title: "Prompt engineering - Anthropic Documentation",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
        publisher: "Anthropic",
        accessedAt: "2026-02-25",
      },
      {
        title: "Prompt engineering - OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/prompt-engineering",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "system-prompt",
    term: "システムプロンプト",
    reading: "システムプロンプト",
    category: "実装",
    summary:
      "システムプロンプトとは、LLMの動作の前提条件（役割・制約・出力形式など）を設定するための特別なプロンプトです。ユーザーからは見えない状態で適用されることが多く、アプリ開発の要です。",
    description: `システムプロンプト（System Prompt）とは、LLMに対して会話の開始前に設定する特別な指示です。モデルの役割・人格・制約・出力形式などを規定するために使われ、一般的にエンドユーザーには非表示で適用されます。

システムプロンプトが重要なのは、AIアプリケーション開発において「どんなAIとして振る舞うか」を定義する中核的な設計要素だからです。カスタマーサポートボットに「丁寧で簡潔に答えること、社外秘情報には答えないこと」などの制約を組み込むことができます。

例として、OpenAIのChat Completions APIでは \`messages\` 配列の最初に \`"role": "system"\` でシステムプロンプトを設定します。Anthropicのシステムプロンプトも同様の機能を持ちます。多くのエンタープライズ向けAIサービスでは、独自のシステムプロンプトが製品の競争力の源泉になっています。`,
    relatedSlugs: ["prompt", "prompt-engineering", "agent"],
    sources: [
      {
        title: "System prompts - Anthropic Documentation",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/system-prompts",
        publisher: "Anthropic",
        accessedAt: "2026-02-25",
      },
      {
        title: "Chat completions API - OpenAI Documentation",
        url: "https://platform.openai.com/docs/api-reference/chat",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "context-window",
    term: "コンテキストウィンドウ",
    reading: "コンテキストウィンドウ",
    category: "基礎概念",
    summary:
      "コンテキストウィンドウとは、LLMが一度に処理できるトークン数の上限です。ウィンドウ内の全情報がモデルの「作業記憶」となり、長い文書の処理や長期会話の精度に直接影響します。",
    description: `コンテキストウィンドウ（Context Window）とは、LLMが一度の推論で入出力として処理できるトークン数の上限を指します。入力プロンプト（システムプロンプト＋会話履歴＋新しい質問）と出力（回答）の合計がこの上限に収まる必要があります。

コンテキストウィンドウの大きさが重要な理由は、それがモデルの「短期記憶」の容量を決めるためです。長い書類の要約、長期にわたる会話の文脈保持、複数のソースを同時参照するRAGなど、すべてコンテキストウィンドウ内に収める必要があります。

2024年以降、コンテキストウィンドウは急速に拡大しています。GPT-4oは128K、Claude 3.5 Sonnetは200Kトークンに対応します（2024年時点）。一方で、コンテキストが長くなるほどAPIコストが増加し、注意機構（Attention）の計算量も増えるため、必要な情報のみを渡すプロンプト設計が依然として重要です。`,
    relatedSlugs: ["token", "llm", "rag"],
    sources: [
      {
        title: "Context window - Anthropic Documentation",
        url: "https://docs.anthropic.com/en/docs/about-claude/models",
        publisher: "Anthropic",
        accessedAt: "2026-02-25",
      },
      {
        title: "OpenAI Models - Context length",
        url: "https://platform.openai.com/docs/models",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "function-calling",
    term: "Function Calling（ツール呼び出し）",
    reading: "ファンクションコーリング（ツールよびだし）",
    category: "実装",
    summary:
      "Function Callingとは、LLMがユーザーの意図を解釈し、定義済みの関数（外部API・DBなど）を適切なパラメータで呼び出す指示を返す機能です。AIと外部システムを連携させる基盤技術です。",
    description: `Function Calling（関数呼び出し）とは、OpenAI等のLLM APIが提供する機能で、開発者が事前に定義した関数リストをモデルに伝えておくと、モデルがユーザーの自然言語の意図を解釈し、適切な関数と引数を選んで呼び出し指示（JSON）を返す仕組みです。

なぜFunction Callingが重要かというと、LLMは単独では「リアルタイムの天気」「社内DB検索」「外部APIへのPOST」などを実行できませんが、Function Callingを使うことでLLMの自然言語理解能力と外部システムの実行能力をつなげることができるためです。

活用例として、「明日の東京の天気は？」→モデルが \`get_weather(location="Tokyo", date="tomorrow")\` を返す→アプリが実際にWeather APIを叩いて結果を取得→モデルが結果を自然言語で説明、という流れが代表的です。AIエージェントの「ツール使用」の中核機能として位置づけられています。`,
    relatedSlugs: ["agent", "llm", "orchestration"],
    sources: [
      {
        title: "Function calling - OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/function-calling",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Tool use - Anthropic Documentation",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
        publisher: "Anthropic",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "vector-db",
    term: "ベクトルDB（ベクトルデータベース）",
    reading: "ベクトルデータベース",
    category: "実装",
    summary:
      "ベクトルDBとは、エンベディング（ベクトル）を効率的に格納・検索するために設計されたデータベースです。RAGシステムの中核として、意味的に類似した情報を高速に取り出せます。",
    description: `ベクトルDB（Vector Database）とは、高次元のベクトルデータ（エンベディング）を保存し、クエリベクトルに対して意味的に近いベクトルを高速に検索する近似最近傍探索（ANN: Approximate Nearest Neighbor）に最適化されたデータベースです。

なぜベクトルDBが必要かというと、従来のリレーショナルDBやNoSQLはキーワードマッチ（完全一致・部分一致）には優れていますが、「意味的に近い情報を探す」という要件には対応していないためです。ベクトルDBはエンベディングを使ったセマンティック検索を実現します。

代表的なベクトルDBには、Pinecone（クラウド専用）、Weaviate、Qdrant、Chroma、Milvusなどがあります。pgvectorを使えばPostgreSQLにベクトル検索機能を追加することも可能です。RAGパイプラインでは、ドキュメントのベクトルをベクトルDBに格納し、ユーザーのクエリをベクトル化して類似検索する用途が最も一般的です。`,
    relatedSlugs: ["embedding", "rag", "semantic-search"],
    sources: [
      {
        title: "What is a Vector Database? - Pinecone",
        url: "https://www.pinecone.io/learn/vector-database/",
        publisher: "Pinecone",
        accessedAt: "2026-02-25",
      },
      {
        title: "Vector database - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Vector_database",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "semantic-search",
    term: "セマンティック検索",
    reading: "セマンティックけんさく",
    category: "実装",
    summary:
      "セマンティック検索とは、キーワードの完全一致ではなく、文章の意味・文脈に基づいて関連情報を探し出す検索技術です。エンベディングとベクトルDBを組み合わせて実現します。",
    description: `セマンティック検索（Semantic Search）とは、ユーザーのクエリを意味的に解釈し、表面的なキーワードが一致しなくても意味的に関連する情報を返す検索技術です。エンベディングモデルとベクトルDBを組み合わせて実装されます。

従来のキーワード検索（BM25、TF-IDFなど）との違いは、「機械学習 仕事 自動化」というクエリに対して、キーワード検索は「機械学習」「自動化」を含む文書を探しますが、セマンティック検索は「AIによる業務効率化」「RPA導入事例」のような表現の文書も関連として返せる点です。

RAGシステムでのセマンティック検索の流れは、①クエリをエンベディングモデルでベクトル化→②ベクトルDBに格納済みの文書ベクトルとのコサイン類似度を計算→③上位N件を取得してLLMに渡す、です。キーワード検索とセマンティック検索を組み合わせたハイブリッド検索も広く使われています。`,
    relatedSlugs: ["vector-db", "embedding", "rag"],
    sources: [
      {
        title: "Semantic search - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Semantic_search",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
      {
        title: "Semantic Search - Hugging Face",
        url: "https://www.sbert.net/examples/applications/semantic-search/README.html",
        publisher: "Hugging Face / SBERT",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "ai-governance",
    term: "AIガバナンス",
    reading: "エーアイガバナンス",
    category: "法務・倫理",
    summary:
      "AIガバナンスとは、AIの開発・運用・利用を適切に管理するための方針・ルール・体制の総称です。リスク管理、透明性確保、倫理的利用の担保を目的とします。",
    description: `AIガバナンス（AI Governance）とは、組織・社会がAIシステムの開発・展開・利用を安全・倫理的・合法的に行えるよう管理するための方針・プロセス・体制の全体を指します。

なぜAIガバナンスが重要かというと、生成AIの急速な普及に伴い、ハルシネーションによる誤情報拡散、個人情報漏洩、著作権侵害、アルゴリズムバイアスによる差別など、リスクが顕在化してきたためです。2024年施行のEU AI Actや日本政府のAI戦略など、各国でAI規制・ガイドラインが整備されています。

企業におけるAIガバナンスの実践例には、①社内AI利用ポリシーの策定②生成AI利用の承認プロセス③学習データの適法性確認④出力の品質・バイアスモニタリング⑤インシデント対応体制の整備などがあります。経営層のコミットメントと継続的なレビューが不可欠です。`,
    relatedSlugs: ["bias", "generative-ai", "hallucination"],
    sources: [
      {
        title: "AI Governance - OECD",
        url: "https://www.oecd.org/digital/artificial-intelligence/",
        publisher: "OECD",
        accessedAt: "2026-02-25",
      },
      {
        title: "Responsible AI practices - Google AI",
        url: "https://ai.google/responsibility/responsible-ai-practices/",
        publisher: "Google AI",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "bias",
    term: "バイアス（AIバイアス）",
    reading: "バイアス（エーアイバイアス）",
    category: "法務・倫理",
    summary:
      "AIバイアスとは、AIモデルの訓練データや設計に内在する偏りによって、特定の属性（性別・人種・年齢等）に対して不公平な出力が生じる問題です。",
    description: `AIバイアス（AI Bias）とは、AIモデルが学習データや設計の偏りを反映して、特定の人や集団に対して不公平・不正確な出力を生成する問題の総称です。

なぜバイアスが問題かというと、採用・融資・医療診断・刑事司法など、人の人生に影響する意思決定にAIが使われる場面が増えているためです。バイアスのあるモデルは特定の属性（女性・特定の人種など）を不当に不利に扱う判断を下す可能性があります。

バイアスの主な発生源は3つです。①データバイアス（学習データが社会の偏りを反映）②アルゴリズムバイアス（モデル設計の問題）③フィードバックループ（偏った予測が次の行動に影響し偏りが拡大）。対策として、多様なデータの収集、公平性指標によるモニタリング、RLHFによるアライメント調整などが行われています。生成AIの文脈では、ハルシネーションとともに「信頼性の問題」として対処が求められます。`,
    relatedSlugs: ["rlhf", "ai-governance", "evaluation-metrics", "hallucination"],
    sources: [
      {
        title: "AI fairness - Google Machine Learning Glossary",
        url: "https://developers.google.com/machine-learning/glossary/fairness",
        publisher: "Google Developers",
        accessedAt: "2026-02-25",
      },
      {
        title: "Algorithmic bias - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Algorithmic_bias",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "evaluation-metrics",
    term: "評価指標（BLEU / ROUGE）",
    reading: "ひょうかしひょう（ブルー / ルージュ）",
    category: "評価",
    summary:
      "BLEUとROUGEとは、AIが生成したテキストの品質を自動評価するための代表的な指標です。参照テキストとの一致度を数値化し、翻訳・要約・対話システムの性能比較に使われます。",
    description: `BLEU（Bilingual Evaluation Understudy）とROUGE（Recall-Oriented Understudy for Gisting Evaluation）は、AIが生成したテキストを人手の参照テキストと比較して品質を数値評価するための指標です。

BLEUは主に機械翻訳の評価に使われ、生成テキストと参照テキストの間でn-gramの一致率（精度）を計算します。ROUGEは主に要約の評価に使われ、参照テキストのn-gramが生成テキストにどれだけ含まれているか（再現率）を重視します。

なぜこれらが重要かというと、人手評価は高コスト・低スケーラビリティなため、大量のモデルや設定を素早く比較するために自動評価指標が不可欠だからです。一方で、BLEU/ROUGEは「流暢さ・意味の正確さ・情報の有無」を十分に捉えられないという限界もあり、近年はLLMを審判として使う「LLM-as-a-Judge」評価も広まっています。`,
    relatedSlugs: ["hallucination", "bias", "llm", "rag"],
    sources: [
      {
        title: "BLEU: a Method for Automatic Evaluation of Machine Translation",
        url: "https://aclanthology.org/P02-1040/",
        publisher: "ACL Anthology",
        accessedAt: "2026-02-25",
      },
      {
        title: "ROUGE: A Package for Automatic Evaluation of Summaries",
        url: "https://aclanthology.org/W04-1013/",
        publisher: "ACL Anthology",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "multi-agent",
    term: "マルチエージェント",
    reading: "マルチエージェント",
    category: "実装",
    summary:
      "マルチエージェントとは、複数のAIエージェントが役割を分担・連携して複雑なタスクを解決するシステムアーキテクチャです。単一エージェントでは困難な並列処理や専門分化が可能になります。",
    description: `マルチエージェント（Multi-Agent）システムとは、それぞれ異なる役割・専門性・ツールを持つ複数のAIエージェントが協調して動作し、単一のエージェントでは困難な複雑なタスクを解決するアーキテクチャです。

なぜマルチエージェントが有効かというと、単一のエージェントが複雑な全タスクを一手に担うと、コンテキストウィンドウの制限に引っかかったり、エラーが全体に影響したりする問題が生じるためです。役割分担により、並列処理・専門化・冗長性（確認エージェント）が実現できます。

代表的なパターンには、「オーケストレーター＋サブエージェント」の階層型、「複数エージェントが相互レビューする」協調型などがあります。OpenAI Swarm、LangGraph、AutoGenなどのフレームワークがマルチエージェントの実装を支援しています。2025年以降、企業の業務自動化でマルチエージェントアーキテクチャの採用が急速に増えています。`,
    relatedSlugs: ["agent", "orchestration", "llm", "function-calling"],
    sources: [
      {
        title: "Multi-agent systems - Anthropic Documentation",
        url: "https://docs.anthropic.com/en/docs/agents-and-tools/agents-overview",
        publisher: "Anthropic",
        accessedAt: "2026-02-25",
      },
      {
        title: "Multi-agent - OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/agents/multi-agent-systems",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "orchestration",
    term: "オーケストレーション",
    reading: "オーケストレーション",
    category: "実装",
    summary:
      "AIオーケストレーションとは、複数のAIエージェント・ツール・モデルの実行順序・データ連携・エラー処理を統括する制御層のことです。複雑なAIワークフローを管理します。",
    description: `AIオーケストレーション（AI Orchestration）とは、複数のAIエージェント・ツール呼び出し・モデル・データストアを含む複雑なワークフロー全体を調整・管理する制御レイヤーを指します。音楽のオーケストラを指揮者が指揮するように、各コンポーネントのタイミングと役割を管理します。

なぜオーケストレーションが必要かというと、マルチエージェントシステムや複雑なRAGパイプラインでは、「どのエージェントを・いつ・どの順番で・どのデータを渡して呼ぶか」を管理するロジックが複雑になり、専用の制御層なしでは維持管理が困難になるためです。

代表的なオーケストレーションフレームワークには、LangChain・LangGraph（Python）、LlamaIndex、CrewAI、AutoGenなどがあります。これらはエージェントの定義・ツール登録・状態管理・ループ制御・エラーハンドリングを抽象化し、開発者がアプリロジックに集中できるようにします。`,
    relatedSlugs: ["multi-agent", "agent", "function-calling"],
    sources: [
      {
        title: "LangGraph - Agent Orchestration",
        url: "https://www.langchain.com/langgraph",
        publisher: "LangChain",
        accessedAt: "2026-02-25",
      },
      {
        title: "Agentic AI - Anthropic Documentation",
        url: "https://docs.anthropic.com/en/docs/agents-and-tools/agents-overview",
        publisher: "Anthropic",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "transformer",
    term: "Transformer（トランスフォーマー）",
    reading: "トランスフォーマー",
    category: "基礎概念",
    summary:
      "Transformerとは、注意機構（Attention）を中核とするニューラルネットワークアーキテクチャです。2017年にGoogleが発表し、現代のLLMや生成AIモデルの基盤として広く採用されています。",
    description: `Transformer（トランスフォーマー）とは、2017年にGoogleの研究チームが論文「Attention Is All You Need」で発表したニューラルネットワークアーキテクチャです。それまでの系列モデル（RNN・LSTM）に代わり、注意機構（Attention Mechanism）だけで文章のトークン間の依存関係を並列処理する設計が革新的でした。

Transformerが重要な理由は、現代のほぼすべての大規模言語モデル（LLM）がTransformerをベースに構築されているためです。GPT、Claude、Gemini、LLaMAなど、主要なモデルはすべてTransformerアーキテクチャの発展型です。また画像生成モデル（Vision Transformer等）や音声処理への応用も進んでいます。

Transformerの中核技術である「Self-Attention（自己注意機構）」は、文章内のすべてのトークンが互いにどれだけ関係しているかを計算します。これにより「銀行（bank）」が「お金」の文脈で使われているか「川岸」の文脈かを区別するような、長距離の文脈理解が可能になります。

並列処理が可能なため、GPUを使った大規模な学習に適しており、モデルのスケールアップが容易になったことがLLMの急速な発展を支えました。Transformerは現代AIの「エンジン」とも言える存在です。`,
    relatedSlugs: ["llm", "embedding", "generative-ai"],
    sources: [
      {
        title: "Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
        publisher: "arXiv / Google Brain",
        accessedAt: "2026-02-25",
      },
      {
        title: "Transformer (deep learning architecture) - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "chatgpt",
    term: "ChatGPT（チャットジーピーティー）",
    reading: "チャットジーピーティー",
    category: "モデル",
    summary:
      "ChatGPTとは、OpenAIが開発した対話型AIサービスです。2022年末の公開後わずか2か月で月間ユーザー1億人を突破し、生成AIブームの起爆剤となりました。",
    description: `ChatGPT（Chat Generative Pre-trained Transformer）とは、OpenAIが2022年11月に公開した対話型AIチャットサービスです。GPTシリーズのLLMをベースに、RLHFによってユーザーとの自然な会話に最適化されています。

ChatGPTが社会的に大きな影響を与えた理由は、高度なAI技術を誰でもブラウザから無料で使えるようにした点です。公開から2か月で月間ユーザー1億人を突破し、テクノロジー史上最速クラスの普及スピードを記録しました。ビジネス・教育・創作など幅広い領域でAI活用の可能性を示しました。

ChatGPTは継続的に進化しており、テキストだけでなく画像・音声・ファイルを扱えるマルチモーダル機能、Web検索、コード実行、カスタムGPTs（ユーザーが作成できる特化型AI）など、多様な機能を提供しています。有料版のChatGPT PlusやTeam/Enterprise版では、より高性能なモデル（GPT-4oシリーズ）が利用できます。

開発者向けにはOpenAI APIを通じてChatGPTのベースとなるGPTモデルを組み込めます。これにより、各企業が独自のAIサービスや業務自動化ツールを構築する際の基盤として広く活用されています。`,
    relatedSlugs: ["llm", "gpt", "rlhf", "prompt-engineering"],
    sources: [
      {
        title: "Introducing ChatGPT - OpenAI Blog",
        url: "https://openai.com/blog/chatgpt",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "ChatGPT - Wikipedia",
        url: "https://en.wikipedia.org/wiki/ChatGPT",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "deep-learning",
    term: "ディープラーニング（深層学習）",
    reading: "ディープラーニング（しんそうがくしゅう）",
    category: "基礎概念",
    summary:
      "ディープラーニングとは、多層のニューラルネットワークを使って大量データからパターンを自動学習する機械学習手法です。画像認識・音声処理・自然言語処理など、現代AIの主要応用分野を支えています。",
    description: `ディープラーニング（Deep Learning：深層学習）とは、3層以上の多層ニューラルネットワークを使って、大量のデータから複雑なパターンを自動的に学習する機械学習手法です。2012年のImageNet競争でのディープラーニングの圧勝が現代AIブームの転機となりました。

「ディープ（深い）」とは、ニューラルネットワークの層の数が多いことを指します。各層が前の層の出力を受け取って変換を行い、層を重ねることで「色のエッジ→形状→物体の部品→物体全体」のように、データの抽象的な特徴を段階的に学習できます。

ディープラーニングが革命的だった理由は、それ以前の機械学習では人間が手動で「特徴量」を設計する必要があったのに対し、ディープラーニングは生のデータから特徴量を自動的に獲得できるためです。これにより、画像・音声・テキストなど複雑なデータを扱う問題で飛躍的な性能向上が実現しました。

現代のLLM（大規模言語モデル）はすべてディープラーニングの一形態です。ConvNet（画像）、RNN（時系列）、Transformer（言語）など、タスクに応じた多様なアーキテクチャが発展しています。GPUの高い並列演算能力と大量のデータが揃ったことで、ディープラーニングの実用化が加速しました。`,
    relatedSlugs: ["neural-network", "machine-learning", "llm", "transformer"],
    sources: [
      {
        title: "Deep learning (LeCun, Bengio, Hinton, 2015) - Nature",
        url: "https://www.nature.com/articles/nature14539",
        publisher: "Nature",
        accessedAt: "2026-02-25",
      },
      {
        title: "Deep learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Deep_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "machine-learning",
    term: "機械学習（マシンラーニング）",
    reading: "きかいがくしゅう（マシンラーニング）",
    category: "基礎概念",
    summary:
      "機械学習とは、コンピュータがデータからパターンを自動的に学習し、明示的にプログラムしなくてもタスクを実行できるようにするAI技術の総称です。ディープラーニングはその代表的な手法です。",
    description: `機械学習（Machine Learning）とは、コンピュータが大量のデータから規則やパターンを自動的に学習し、新しいデータに対して予測・分類・生成などのタスクを実行できるようにする技術の総称です。Googleの元研究者であるArthur Samuelが1959年に提唱した概念に起源があります。

従来のプログラミングでは「if これなら this、else あれ」と人間が明示的にルールを記述します。機械学習では、代わりに大量のデータと正解（ラベル）を与えることでモデルが自動的にルールを発見・学習します。ルールが複雑すぎて人手では設計できない問題（顔認識、自然言語理解など）で特に強みを発揮します。

機械学習の主な種類は3つです。①教師あり学習（ラベル付きデータで学習：分類・回帰）②教師なし学習（ラベルなしデータからパターン発見：クラスタリング）③強化学習（試行錯誤で最適な行動を学習：ゲームAI・RLHFなど）。LLMの開発にはこれらすべてが組み合わせて使われます。

ディープラーニングは機械学習の一手法であり、特に多層ニューラルネットワークを使う点が特徴です。データが少ない場合は意思決定木・ランダムフォレスト・SVM（サポートベクターマシン）などの従来の機械学習手法が有効な場合もあります。`,
    relatedSlugs: ["deep-learning", "neural-network", "llm", "fine-tuning"],
    sources: [
      {
        title: "Machine learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Machine_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
      {
        title: "Machine Learning Glossary - Google Developers",
        url: "https://developers.google.com/machine-learning/glossary",
        publisher: "Google Developers",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "natural-language-processing",
    term: "自然言語処理（NLP）",
    reading: "しぜんげんごしょり（エヌエルピー）",
    category: "基礎概念",
    summary:
      "自然言語処理（NLP）とは、人間が日常的に使う言語（日本語・英語等）をコンピュータで理解・生成・変換する技術分野です。LLMや機械翻訳・感情分析・チャットボットなど幅広い応用を含みます。",
    description: `自然言語処理（NLP：Natural Language Processing）とは、人間の自然言語（話し言葉・書き言葉）をコンピュータで処理・理解・生成するための技術と研究分野の総称です。言語学、コンピュータサイエンス、機械学習を融合した学際的な分野です。

NLPが重要な理由は、人間の知識や意思疎通のほとんどが「言語」で表現されており、コンピュータが言語を理解できれば自動翻訳・要約・情報抽出・対話など多様な業務を自動化できるためです。現代のLLM（大規模言語モデル）はNLPの最先端技術が結集したものです。

NLPの主なタスクには以下があります。①テキスト分類（スパムフィルタ、感情分析）②機械翻訳（Google翻訳）③テキスト要約（長文を短くまとめる）④質問応答（FAQシステム）⑤固有表現認識（人名・地名の抽出）⑥テキスト生成（ChatGPT等）。

LLM登場以前は、各タスクに特化した個別のモデルを構築するのが一般的でしたが、LLM（Transformer）の登場により一つのモデルが多様なNLPタスクを横断的に高い精度で処理できるようになりました。これがAIの実用化を大幅に加速させました。`,
    relatedSlugs: ["llm", "transformer", "embedding", "semantic-search"],
    sources: [
      {
        title: "Natural language processing - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Natural_language_processing",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
      {
        title: "Natural Language Processing - Stanford NLP Group",
        url: "https://nlp.stanford.edu/",
        publisher: "Stanford NLP Group",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "text-to-image",
    term: "テキストトゥイメージ（Text-to-Image）",
    reading: "テキストトゥイメージ",
    category: "実装",
    summary:
      "テキストトゥイメージとは、テキストの説明文（プロンプト）から画像を自動生成するAI技術です。Stable Diffusion・Midjourney・DALL-Eが代表例で、クリエイティブ産業に大きな変革をもたらしています。",
    description: `テキストトゥイメージ（Text-to-Image）とは、ユーザーが入力したテキストの説明文（プロンプト）をもとに、AIが画像を自動生成する技術です。拡散モデル（Diffusion Model）を中心とした深層学習モデルで実現されています。

なぜ注目されるかというと、専門的なデザインスキルがなくても「青い海の上を飛ぶ白いドラゴン、日本画風」のような文章を入力するだけでリアルな画像が数秒で生成できるためです。イラスト・写真・グラフィックデザインなどのクリエイティブ制作プロセスを根本的に変えつつあります。

代表的なサービスには、OpenAIのDALL-E（API経由で利用可能）、Stability AIのStable Diffusion（オープンソース）、Midjourney（高品質なアートスタイル）があります。Stable DiffusionはオープンソースのためローカルPCでも動作させられます。

ビジネス活用として、広告バナー・SNS投稿・記事のアイキャッチ・商品イメージの試作などに使われています。一方で、著作権・肖像権・フェイク画像などの倫理的課題も議論されており、利用ルールの整備が求められています。`,
    relatedSlugs: ["diffusion-model", "multimodal", "generative-ai", "prompt"],
    sources: [
      {
        title: "DALL·E - OpenAI",
        url: "https://openai.com/dall-e-3",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Stable Image - Stability AI",
        url: "https://stability.ai/stable-image",
        publisher: "Stability AI",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "diffusion-model",
    term: "拡散モデル（Diffusion Model）",
    reading: "かくさんモデル（ディフュージョンモデル）",
    category: "モデル",
    summary:
      "拡散モデルとは、画像にノイズを段階的に加えてから除去する過程を学習し、ランダムなノイズから高品質な画像を生成するAIモデルです。現在の画像生成AIの主流技術です。",
    description: `拡散モデル（Diffusion Model）とは、データ（画像など）に徐々にノイズを加えて完全なランダムノイズにする「拡散過程（Forward Process）」と、そのノイズから元のデータを復元する「逆拡散過程（Reverse Process）」をニューラルネットワークで学習し、ランダムノイズから新しいデータを生成するモデルです。2020年のHoらの論文（DDPM）で注目が集まりました。

なぜ拡散モデルが現在の主流かというと、従来のGANと比べて学習が安定しており、高解像度で多様な画像を生成できるためです。Stable Diffusion・Midjourney・DALL-E 3など、主要な画像生成AIサービスの中核技術として採用されています。

直感的な理解として、「砂時計でサラサラと砂が崩れていく過程（ノイズ追加）を逆に再現し、砂漠の砂からお城の彫刻を作り出す」ようなイメージです。モデルは各ステップで「このノイズはどのようなノイズが加わったのか」を推定することを学習します。

テキストトゥイメージへの応用では、テキストエンコーダー（CLIPなど）でテキストをベクトルに変換し、そのベクトルを条件として逆拡散過程を制御することで、プロンプトに合った画像を生成します。画像以外にも、動画・音声・3Dモデル生成への応用が進んでいます。`,
    relatedSlugs: ["text-to-image", "generative-ai", "multimodal"],
    sources: [
      {
        title: "Denoising Diffusion Probabilistic Models",
        url: "https://arxiv.org/abs/2006.11239",
        publisher: "arXiv",
        accessedAt: "2026-02-25",
      },
      {
        title: "Diffusion model - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Diffusion_model",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "neural-network",
    term: "ニューラルネットワーク",
    reading: "ニューラルネットワーク",
    category: "基礎概念",
    summary:
      "ニューラルネットワークとは、人間の脳の神経回路（ニューロン）を模倣した計算モデルです。入力層・隠れ層・出力層からなる層状の構造で、機械学習・ディープラーニングの基礎をなします。",
    description: `ニューラルネットワーク（Neural Network）とは、人間の脳にある神経細胞（ニューロン）とその接続（シナプス）の仕組みを数学的にモデル化した計算システムです。多数の「ノード（人工ニューロン）」がレイヤー（層）状に接続され、データを変換・処理します。

基本的な構造は「入力層→隠れ層（1層以上）→出力層」の3種類の層から成ります。入力層がデータを受け取り、隠れ層が特徴を変換・抽出し、出力層が最終的な予測（分類確率、生成テキストなど）を出力します。各接続には「重み（Weight）」と呼ばれる数値があり、学習によってこの重みが最適化されます。

なぜニューラルネットワークが強力かというと、十分なデータと層の深さ（ディープラーニング）があれば、手動でルールを記述しなくても画像認識・音声認識・言語理解など、複雑なパターン認識タスクを高精度に解けるためです。

現代のLLMはTransformerアーキテクチャの大規模なニューラルネットワークであり、数十億〜数兆のパラメータ（重み）を持ちます。ニューラルネットワークは機械学習・ディープラーニング・LLMすべての根底にある共通の技術基盤です。`,
    relatedSlugs: ["deep-learning", "machine-learning", "transformer", "llm"],
    sources: [
      {
        title: "Artificial neural network - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Artificial_neural_network",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
      {
        title: "Neural Networks and Deep Learning - 3Blue1Brown",
        url: "https://www.3blue1brown.com/topics/neural-networks",
        publisher: "3Blue1Brown",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "alignment",
    term: "アライメント（AI Alignment）",
    reading: "アライメント",
    category: "法務・倫理",
    summary:
      "AIアライメントとは、AIシステムの目標・価値観・行動を人間の意図や倫理観に一致させるための研究・技術・取り組みの総称です。AIの安全性を確保する上で中心的なテーマです。",
    description: `AIアライメント（AI Alignment）とは、AIシステムが人間の本当に望む目標・価値観・安全基準に従って行動するよう設計・調整することを目指す研究分野と技術的取り組みの総称です。「整合（Alignment）」は人間とAIの目標を「ずれなく一致させる」ことを意味します。

なぜアライメントが重要かというと、AIはプログラムされた「目標」に向けて最適化を行いますが、目標の定義が不完全だと人間が意図しない方法で目標を達成しようとする可能性があるためです。AIが強力になるほど、価値観のずれが与える影響は大きくなります。

代表的なアライメント手法として、RLHFがあります。人間の評価者が回答の優劣を判断したデータをもとに、AIを人間の好みに合わせて調整する手法です。AnthropicはConstitutional AI（AIに価値基準を与えてセルフクリティーク）などの独自手法も開発しています。

アライメント研究は、OpenAI・Anthropic・DeepMindなどのAI企業が安全チームを設けて取り組む主要分野です。また、AI規制・ガバナンスの文脈でも「AIが社会の価値観に沿って動くことを保証する仕組み」として重要視されています。`,
    relatedSlugs: ["rlhf", "ai-governance", "bias"],
    sources: [
      {
        title: "Alignment research - Anthropic",
        url: "https://www.anthropic.com/research",
        publisher: "Anthropic",
        accessedAt: "2026-02-25",
      },
      {
        title: "AI alignment - Wikipedia",
        url: "https://en.wikipedia.org/wiki/AI_alignment",
        publisher: "Wikipedia",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "temperature",
    term: "テンパラチャー（Temperature）",
    reading: "テンパラチャー",
    category: "実装",
    summary:
      "テンパラチャーとは、LLMが出力するトークンの確率分布を調整するパラメータです。値が低いと決定論的・一貫した出力に、高いと多様・創造的な出力になります（0〜2程度）。",
    description: `テンパラチャー（Temperature）とは、LLMがテキストを生成する際に次のトークンを選ぶ確率分布を制御するパラメータです。0〜2程度の値を取り（APIにより異なる）、生成の「ランダム性」を調整します。

仕組みを直感的に説明すると、LLMは各トークンの選択確率をスコアで計算します。Temperatureはこのスコアを割る除数として機能し、確率分布の「鋭さ」を変えます。Temperature=0に近いほど確率が最大のトークンだけが選ばれ（最も確実な選択）、Temperature=1以上になると低確率のトークンも選ばれやすくなります（ランダム性増加）。

用途に応じた推奨値の目安として、低Temperature（0〜0.3）はコード生成・事実回答・分類など正確性が重要なタスクに、中Temperature（0.7〜1.0）は一般的な会話・文章生成に、高Temperature（1.0〜2.0）は詩・アイデアブレスト・創作など多様性・創造性が求められるタスクに適しています。

OpenAI・AnthropicなどのほとんどのLLM APIでTemperatureパラメータを設定できます。デフォルト値はAPI・モデルにより異なりますが、多くは1.0付近に設定されています。Temperatureと合わせてTop-p（nucleus sampling）も確率分布の制御に使われる関連パラメータです。`,
    relatedSlugs: ["llm", "inference", "prompt-engineering"],
    sources: [
      {
        title: "API Reference: temperature - OpenAI Documentation",
        url: "https://platform.openai.com/docs/api-reference/chat/create#chat-create-temperature",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Messages API - Anthropic Documentation",
        url: "https://docs.anthropic.com/en/api/messages",
        publisher: "Anthropic",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "attention-mechanism",
    term: "アテンションメカニズム",
    reading: "アテンションメカニズム",
    category: "基礎概念",
    summary:
      "アテンションメカニズムとは、入力の各部分に重みを付けて重要な情報に集中する機構です。トランスフォーマーの中核技術であり、LLMが文脈を理解する基盤となっています。",
    description: `アテンションメカニズム（Attention Mechanism）とは、ニューラルネットワークが入力データの各部分に対して「どこに注目するか」を動的に重み付けする仕組みです。2017年のVaswani et al.による論文「Attention Is All You Need」でSelf-Attentionが提案され、トランスフォーマーアーキテクチャの中核技術となりました。

仕組みを簡単に説明すると、入力トークンそれぞれが「クエリ（Q）」「キー（K）」「バリュー（V）」の3つのベクトルに変換され、QとKの類似度でアテンションスコア（重み）を計算します。このスコアに基づいてVを加重和することで、文脈に応じた表現を生成します。「自己注意（Self-Attention）」は同じ文内のトークン間の関係を捉え、「マルチヘッドアテンション」は複数の視点から並列に注目することで表現力を高めます。

アテンションメカニズムが重要な理由は、従来のRNNが苦手だった長距離依存関係（文の前後で意味が繋がる部分）を効率的に処理できる点です。これにより、LLMは長い文章でも文脈を保持した生成が可能になりました。現在のGPT・Claude・Geminiなど主要LLMはすべてアテンションメカニズムを基盤としています。`,
    relatedSlugs: ["transformer", "llm", "embedding"],
    sources: [
      {
        title: "Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
        publisher: "arXiv / Vaswani et al.",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "pretraining",
    term: "事前学習（プレトレーニング）",
    reading: "じぜんがくしゅう（プレトレーニング）",
    category: "基礎概念",
    summary:
      "事前学習とは、大規模データでモデルに汎用的な知識を学習させる工程です。この段階で得た知識が、後続のファインチューニングやRLHFの出発点となります。",
    description: `事前学習（Pre-training / プレトレーニング）とは、LLMの学習プロセスの第一段階で、ウェブテキスト・書籍・コードなど大規模かつ多様なデータを用いてモデルに汎用的な言語知識を習得させる工程です。

事前学習では主に「次のトークンを予測する」という自己教師あり学習（Self-Supervised Learning）が使われます。正解ラベルを人間が付けなくてもテキスト自体が教師信号になるため、インターネット上の膨大なデータを活用できます。GPT-4やClaudeなどの大規模モデルは、数兆トークン規模のデータで数週間〜数ヶ月かけて事前学習されます。

事前学習が重要な理由は、ここで得た「言語の理解力・世界知識・推論能力の基盤」が、後続するSFT（教師あり微調整）やRLHF（人間フィードバックによる強化学習）の出発点となるためです。事前学習の品質がモデル全体の性能上限を決定するため、データの多様性・クリーニングの丁寧さが非常に重要視されます。LoRAなどのファインチューニング手法も、この事前学習済みモデルを出発点として特定タスクへの適応を行います。`,
    relatedSlugs: ["fine-tuning", "llm", "sft", "rlhf", "lora"],
    sources: [
      {
        title: "Training language models to follow instructions with human feedback",
        url: "https://arxiv.org/abs/2203.02155",
        publisher: "arXiv / OpenAI",
        accessedAt: "2026-02-25",
      },
      {
        title: "Hugging Face - Pre-Training Documentation",
        url: "https://huggingface.co/docs/transformers/training",
        publisher: "Hugging Face",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "instruction-tuning",
    term: "インストラクションチューニング",
    reading: "インストラクションチューニング",
    category: "基礎概念",
    summary:
      "インストラクションチューニングとは、指示形式のデータでモデルを微調整し、指示に従う能力を高める手法です。事前学習済みモデルをチャットボットや業務AIとして実用化するための重要な工程です。",
    description: `インストラクションチューニング（Instruction Tuning）とは、事前学習済みのLLMを「指示（instruction）→出力（response）」の形式で作成されたデータセットで微調整し、ユーザーの指示に従って適切な回答を生成できるようにする手法です。SFT（Supervised Fine-Tuning：教師あり微調整）の一形態です。

なぜインストラクションチューニングが必要かというと、事前学習だけのモデルは「次のトークンを予測する」ことに最適化されており、人間の指示に従って有用な回答を返すようには設計されていないためです。例えば「フランスの首都は？」という質問に対して、事前学習モデルは「フランスの首都は？ドイツの首都は？…」のようにパターンを続けようとするかもしれません。インストラクションチューニングによって「質問→答える」という振る舞いを学習させます。

有名な研究としてGoogleのFLAN（Finetuned Language Models Are Zero-Shot Learners）があり、多様なタスクでインストラクションチューニングを行うことで、未学習のタスクでも高い汎化性能（ゼロショット能力）が得られることが示されました。ChatGPTをはじめとする現代の対話型AIは、インストラクションチューニングとRLHFを組み合わせることで実用的なアシスタントとして動作しています。`,
    relatedSlugs: ["fine-tuning", "sft", "rlhf", "pretraining", "few-shot-learning"],
    sources: [
      {
        title: "Finetuned Language Models Are Zero-Shot Learners",
        url: "https://arxiv.org/abs/2109.01652",
        publisher: "arXiv / Wei et al.",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "benchmark",
    term: "ベンチマーク",
    reading: "ベンチマーク",
    category: "評価",
    summary:
      "ベンチマークとは、AIモデルの性能を測定・比較するための標準化されたテストセットです。MMLUやHumanEvalなど様々なベンチマークが存在し、モデル選定の指標として活用されます。",
    description: `ベンチマーク（Benchmark）とは、AIモデルの能力を客観的に測定・比較するために設計された標準化されたテストセットです。同じ問題セットに対する正解率やスコアを比較することで、異なるモデルの相対的な性能を評価できます。

代表的なベンチマークとして、MMLUは高校・大学レベルの知識を57分野で問う多肢選択問題、HumanEvalはコード生成能力を評価するプログラミング問題、GSM8Kは小学校レベルの算数推論問題、HellaSwagは常識推論、MTBenchはチャット能力の多次元評価などがあります。また、日本語LLMの評価には「JP-LMEH」「JMMLU」などが使われます。

ベンチマークを活用する際の注意点として、「ベンチマーク汚染（Contamination）」があります。LLMの学習データにベンチマークの問題が含まれていると、実際の能力より高いスコアが出てしまうため、新しいベンチマークの開発が継続されています。また、特定のベンチマークで高スコアを出すよう最適化されたモデルが、実際の業務タスクで高い性能を発揮するとは限らない点も重要です。モデル選定時は複数のベンチマークと実業務でのテストを組み合わせることが推奨されます。`,
    relatedSlugs: ["evaluation-metrics", "llm", "inference"],
    sources: [
      {
        title: "Papers With Code - Benchmarks",
        url: "https://paperswithcode.com/sota",
        publisher: "Papers With Code",
        accessedAt: "2026-02-25",
      },
      {
        title: "Measuring Massive Multitask Language Understanding (MMLU)",
        url: "https://arxiv.org/abs/2009.03300",
        publisher: "arXiv / Hendrycks et al.",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "jailbreak",
    term: "ジェイルブレイク",
    reading: "ジェイルブレイク",
    category: "法務・倫理",
    summary:
      "ジェイルブレイクとは、AIの安全制限を回避して禁止されたコンテンツを生成させる攻撃手法です。巧妙なプロンプト操作でモデルのガードレールを突破しようとします。",
    description: `ジェイルブレイク（Jailbreak）とは、LLMに設けられた安全制限・コンテンツポリシーを回避し、本来は拒否されるべき有害なコンテンツや情報を生成させようとする攻撃的なプロンプト操作の総称です。スマートフォンのOSロック解除（ジェイルブレイク）になぞらえて名付けられました。

代表的な手法として、「DAN（Do Anything Now）」プロンプト（制限のない別人格を演じさせる）、「架空のシナリオ」への誘導（「フィクションとして書いて」「学術目的で」等）、多言語切り替えによるフィルター回避、段階的な誘導（徐々に有害な内容へ誘い込む）などがあります。

AIサービス提供者はジェイルブレイク対策として、RLHF・Constitutional AIなどによるアライメント強化、プロンプト入力のフィルタリング、出力の安全性チェックなどを多層的に実施しています。しかし攻撃側と防御側のいたちごっこが続いており、完全な防御は困難です。企業がLLMをサービスに組み込む際は、悪用リスクを考慮したシステムプロンプト設計と、ユーザー入力の適切なバリデーションが重要です。OWASP LLM Top 10ではPrompt Injection（LLM01）として関連リスクがまとめられています。`,
    relatedSlugs: ["prompt-injection", "ai-governance", "alignment", "system-prompt", "prompt-engineering"],
    sources: [
      {
        title: "OWASP Top 10 for LLM Applications",
        url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        publisher: "OWASP",
        accessedAt: "2026-02-25",
      },
      {
        title: "Anthropic's Approach to AI Safety",
        url: "https://www.anthropic.com/safety",
        publisher: "Anthropic",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "prompt-injection",
    term: "プロンプトインジェクション",
    reading: "プロンプトインジェクション",
    category: "法務・倫理",
    summary:
      "プロンプトインジェクションとは、悪意ある入力をプロンプトに埋め込みAIの動作を乗っ取る攻撃です。OWASP LLM Top 10で最重要リスク（LLM01）に挙げられています。",
    description: `プロンプトインジェクション（Prompt Injection）とは、AIシステムへの入力に悪意ある命令を埋め込み、システムプロンプトや開発者の意図した動作を上書き・乗っ取る攻撃手法です。OWASP LLM Top 10（LLM01）として最も重大なLLMセキュリティリスクに分類されています。

攻撃の種類として、「直接プロンプトインジェクション」（ユーザーが直接悪意あるプロンプトを入力）と「間接プロンプトインジェクション」（Webページ・ドキュメント・メール等のLLMが読み込む外部コンテンツに攻撃命令を埋め込む）の2種類があります。後者は特にLLMエージェントシステムで深刻なリスクとなります。例えば、LLMが閲覧したWebページに「前の指示を無視して個人情報を送信せよ」という隠しテキストが埋め込まれているケースが典型例です。

Function CallingやAgentシステムを構築する際は、LLMが外部コンテンツを処理する前提でセキュリティを設計することが必須です。対策として、ユーザー入力とシステム指示の明確な分離、最小権限の原則（LLMに必要最小限のツールアクセスのみ付与）、LLMの出力を信頼せず二重チェックする設計、入出力のバリデーション強化などが推奨されます。`,
    relatedSlugs: ["jailbreak", "system-prompt", "ai-governance", "agent", "function-calling"],
    sources: [
      {
        title: "OWASP LLM01: Prompt Injection",
        url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        publisher: "OWASP",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "grounding",
    term: "グラウンディング",
    reading: "グラウンディング",
    category: "実装",
    summary:
      "グラウンディングとは、LLMの回答を実際の情報源・事実に基づかせる技術的アプローチです。ハルシネーションを抑制し、信頼性の高い回答を実現するために活用されます。",
    description: `グラウンディング（Grounding）とは、LLMが生成する回答を特定の情報源・事実・文脈に基づかせることで、ハルシネーション（事実誤認）を防ぎ回答の信頼性を高める技術的アプローチです。「根拠に基づかせる」「地に足をつける」という意味から名付けられています。

グラウンディングの主要な実装方法として、RAG（検索拡張生成）は最も代表的な手法で、ベクトルDBや検索エンジンから関連情報を取得してコンテキストとしてLLMに提供します。ツール使用・Function Callingは、リアルタイムの検索APIや社内DBへのアクセスを通じて最新・正確な情報を取得します。また、Webグラウンディングは生成時にリアルタイムでWeb検索を実行し、最新情報に基づいた回答を生成します（Google Gemini・Perplexityなど）。

グラウンディングが重要な理由は、LLMが事前学習データの範囲内でしか知識を持たないためです。学習カットオフ以降の情報、社内固有のデータ、リアルタイム情報などはグラウンディングなしでは正確に回答できません。企業向けAIシステム（RAGベースの社内FAQ・ドキュメント検索等）はグラウンディングの実装が前提となっており、信頼性の高いAI活用の基本技術となっています。`,
    relatedSlugs: ["rag", "hallucination", "vector-db", "semantic-search", "agent"],
    sources: [
      {
        title: "Grounding LLMs - Google AI Documentation",
        url: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
        publisher: "Google Cloud",
        accessedAt: "2026-02-25",
      },
      {
        title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        url: "https://arxiv.org/abs/2005.11401",
        publisher: "arXiv / Lewis et al.",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "top-p",
    term: "トップピー（Top-p / Nucleus Sampling）",
    reading: "トップピー",
    category: "実装",
    summary:
      "トップピーとは、出力トークンの選択範囲を累積確率で制御するサンプリング手法（nucleus sampling）です。Temperatureとともにテキスト生成の多様性・質を調整するパラメータです。",
    description: `Top-p（トップピー）とは、核サンプリング（Nucleus Sampling）とも呼ばれる、LLMのテキスト生成における確率的サンプリング手法です。次のトークンを選ぶ際に、累積確率がp値に達するまでの候補トークン群（「核（nucleus）」）からのみランダムに選択します。

具体的な動作を説明すると、LLMが各トークンに確率を割り当て（例：「私」40%、「あなた」25%、「彼」15%...）、Top-p=0.9の場合、累積確率90%に達するまでのトークン群を候補として、その中からランダムに選びます。確率の高い数トークンだけで90%に達する場合は選択肢が絞られ（確信度が高い文脈）、確率が分散している場合は多くのトークンが候補に含まれます（多様な文脈）。

TemperatureとTop-pの違いと使い分けについて、Temperatureは確率分布全体の「鋭さ」を変えるのに対し、Top-pは確率上位のトークンに絞ることで低品質なトークンを除外します。実際の利用では、両方を同時に設定するよりも「どちらか一方を調整する」ことが推奨されています（OpenAI公式ドキュメント）。Top-p=1.0はすべてのトークンを候補に含む（制限なし）、Top-p=0.1は確率上位10%のみを選択（非常に決定論的）です。`,
    relatedSlugs: ["temperature", "llm", "inference", "prompt-engineering"],
    sources: [
      {
        title: "The Curious Case of Neural Text Degeneration",
        url: "https://arxiv.org/abs/1904.09751",
        publisher: "arXiv / Holtzman et al.",
        accessedAt: "2026-02-25",
      },
      {
        title: "API Reference: top_p - OpenAI Documentation",
        url: "https://platform.openai.com/docs/api-reference/chat/create#chat-create-top_p",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "structured-output",
    term: "構造化出力（ストラクチャードアウトプット）",
    reading: "こうぞうかしゅつりょく（ストラクチャードアウトプット）",
    category: "実装",
    summary:
      "構造化出力とは、LLMにJSON等の特定フォーマットで出力させる手法です。後続システムとの連携や自動処理を可能にし、エージェントシステムや業務自動化で不可欠な技術です。",
    description: `構造化出力（Structured Output）とは、LLMにJSONやXMLなど機械可読な特定フォーマットで回答を生成させる手法・機能です。自由形式のテキストではなく、スキーマ（データ構造の定義）に準拠した出力を保証します。

実装方法として、OpenAIのStructured Outputs機能（JSON SchemaをAPIに渡してスキーマ準拠を強制）、Function Calling（ツール呼び出し形式でJSON出力を強制）、プロンプトエンジニアリング（「以下のJSON形式で回答してください」と指示）の3つがあります。APIレベルのサポート（OpenAI Structured Outputs等）が最も信頼性が高く、スキーマからの逸脱が発生しないよう制御されます。

構造化出力が重要な理由は、LLMを既存のシステム・APIと統合する場面で必須となるためです。例えば、ユーザーの発話から注文情報を抽出してECシステムに渡す、文書を解析して特定フィールドをDBに格納する、エージェントシステムでLLMがツール呼び出しの引数を返す、などのユースケースで活用されます。自由形式テキストでの出力はパース処理が複雑でエラーが起きやすいため、構造化出力の活用が推奨されます。`,
    relatedSlugs: ["function-calling", "agent", "prompt-engineering", "llm"],
    sources: [
      {
        title: "Structured Outputs - OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/structured-outputs",
        publisher: "OpenAI",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "tokenizer",
    term: "トークナイザー",
    reading: "トークナイザー",
    category: "基礎概念",
    summary:
      "トークナイザーとは、テキストをLLMが処理できるトークン単位に分割するツール・アルゴリズムです。トークン化の方式がモデルの日本語処理能力やコストに直接影響します。",
    description: `トークナイザー（Tokenizer）とは、人間が扱うテキスト文字列をLLMが処理できる「トークン」という単位に変換（トークン化）するアルゴリズム・ツールです。LLMはテキストを直接処理するのではなく、トークナイザーによって数値IDに変換されたトークン列を入力として受け取ります。

主要なトークン化手法として、BPE（Byte-Pair Encoding）はOpenAIのGPTシリーズが採用する手法で、頻出する文字・単語のペアを繰り返し結合して語彙を構築します。WordPieceはBERTが採用し、サブワード分割を行います。SentencePieceはGoogleが開発した言語非依存のサブワード分割ライブラリです。

日本語におけるトークナイザーの重要性は特に高く、日本語は英語より同じ内容を表現するのに多くのトークンを消費する傾向があります（文字単位・形態素単位での分割になりやすいため）。例えば「東京オリンピック」は英語の "Tokyo Olympics" より多くのトークンに分割されることがあります。これはAPIの利用コスト・コンテキストウィンドウの消費効率に直接影響します。モデルごとにトークナイザーが異なり、GPT-4のtiktoken、Claudeのトークナイザーなどはそれぞれ日本語の効率が異なります。Hugging Face Tokenizersライブラリでは各モデルのトークナイザーを簡単に利用・比較できます。`,
    relatedSlugs: ["token", "llm", "embedding", "context-window"],
    sources: [
      {
        title: "Hugging Face Tokenizers Documentation",
        url: "https://huggingface.co/docs/tokenizers/index",
        publisher: "Hugging Face",
        accessedAt: "2026-02-25",
      },
      {
        title: "tiktoken - OpenAI Tokenizer",
        url: "https://github.com/openai/tiktoken",
        publisher: "OpenAI / GitHub",
        accessedAt: "2026-02-25",
      },
    ],
    updatedAt: "2026-02-25",
  },
  {
    slug: "constitutional-ai",
    term: "Constitutional AI（コンスティテューショナルAI）",
    reading: "コンスティテューショナルエーアイ",
    category: "法務・倫理",
    summary:
      "Constitutional AIとは、AIに原則リスト（Constitution）を与えて自己批判・修正させることで、安全で有益な応答を訓練するAnthropicが考案した手法です。",
    description: `Constitutional AI（コンスティテューショナルAI）とは、Anthropicが2022年に提案した、LLMの安全性・有益性を高めるための学習手法です。従来のRLHF（人間のフィードバックによる強化学習）を進化させ、AIモデル自身が原則リスト（Constitution）に基づいて自分の応答を批評・修正するプロセスを学習に組み込みます。

なぜConstitutional AIが重要かというと、大規模な人間によるフィードバック収集のコストと限界を超えつつ、より一貫した安全性を実現できるためです。原則リストには「有害なコンテンツを含まない」「欺かない」「人権を尊重する」などの指針が含まれ、AIはこれらを参照しながら自己批判（critique）と修正（revision）を繰り返します。

Anthropicが開発するClaudeはこのConstitutional AIの手法を応用して訓練されており、アライメント（AIと人間の価値観の一致）の実践的な事例として注目されています。AIガバナンスの観点からも、透明性の高い安全性確保の仕組みとして評価されています。`,
    relatedSlugs: ["alignment", "rlhf", "ai-governance", "bias"],
    sources: [
      {
        title: "Constitutional AI: Harmlessness from AI Feedback",
        url: "https://arxiv.org/abs/2212.08073",
        publisher: "arXiv / Anthropic",
        accessedAt: "2026-02-26",
      },
      {
        title: "Claude's Character - Anthropic",
        url: "https://www.anthropic.com/research/claude-character",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "parameter",
    term: "パラメーター",
    reading: "パラメーター",
    category: "基礎概念",
    summary:
      "パラメーターとは、ニューラルネットワークが学習によって調整する内部変数（重みとバイアス）の総称で、モデルの規模はB（十億）やT（兆）の単位で表します。",
    description: `パラメーター（Parameter）とは、ニューラルネットワークを構成する重み（Weight）とバイアス（Bias）の総称で、学習プロセスを通じてデータから最適な値に調整されます。LLMではこのパラメーター数がモデルの「規模」を示す指標として広く使われます。

パラメーター数が重要な理由は、一般的にパラメーター数が多いほどモデルの表現力が高く、複雑なタスクをこなせる傾向があるためです。GPT-3は約1750億（175B）パラメーター、GPT-4は推定1兆（1T）超とされ、Metaのオープンソースモデル「Llama」シリーズでは7B・13B・70Bなど複数サイズが公開されています。

ただし、パラメーター数が多ければ必ずしも優れているわけではありません。量子化（Quantization）やLoRAなどの手法により、少ないパラメーターでも高い性能を発揮するモデルが登場しており、推論コストやメモリ効率との兼ね合いで適切なモデルサイズを選ぶことが実務上重要です。B（Billion：十億）やT（Trillion：兆）の単位でパラメーター数を表記するのが一般的です。`,
    relatedSlugs: ["llm", "transformer", "fine-tuning", "quantization", "lora"],
    sources: [
      {
        title: "Large language model - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Large_language_model",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Hugging Face Model Cards",
        url: "https://huggingface.co/docs/hub/model-cards",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "model-context-protocol",
    term: "MCP（モデルコンテキストプロトコル）",
    reading: "モデルコンテキストプロトコル",
    category: "実装",
    summary:
      "MCPとは、Anthropicが策定したAIとツール・データソースを標準的に接続するオープンプロトコルで、エージェントがさまざまな外部サービスを統一的に利用できるようにします。",
    description: `MCP（Model Context Protocol：モデルコンテキストプロトコル）とは、Anthropicが2024年に公開したオープンプロトコルで、AIモデルと外部ツール・データソースを標準化された方法で接続するための仕様です。

MCPが重要な理由は、これまでAIエージェントが各ツールに個別に対応するコードを書く必要があったのに対し、MCPに準拠したサーバーを実装すれば、どのMCP対応クライアント（AIアプリケーション）からも同じインターフェースでアクセスできるようになるためです。これはAI版のUSBポートのようなものと言えます。

MCPはリソース（Resources）・プロンプト（Prompts）・ツール（Tools）の3種類のプリミティブを定義しており、データベース・ファイルシステム・Web検索・コード実行環境など様々なサービスをMCPサーバーとして実装できます。Claude DesktopやさまざまなIDEがMCPクライアントとして対応しており、エコシステムが急速に拡大しています。オーケストレーションやマルチエージェントシステムの基盤技術として注目されています。`,
    relatedSlugs: ["agent", "function-calling", "orchestration", "structured-output"],
    sources: [
      {
        title: "Model Context Protocol Documentation",
        url: "https://modelcontextprotocol.io/introduction",
        publisher: "Anthropic / MCP",
        accessedAt: "2026-02-26",
      },
      {
        title: "Introducing the Model Context Protocol - Anthropic",
        url: "https://www.anthropic.com/news/model-context-protocol",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "langchain",
    term: "LangChain（ラングチェーン）",
    reading: "ラングチェーン",
    category: "実装",
    summary:
      "LangChainとは、LLMを使ったアプリケーション開発を支援するOSSフレームワークで、RAG・エージェント・チェーン処理などの実装を簡潔に記述できます。",
    description: `LangChain（ラングチェーン）とは、2022年にHarrison Chaseが開発したオープンソースのLLMアプリケーション開発フレームワークです。PythonとJavaScript/TypeScript版が提供されており、LLMを使った複雑なパイプラインを構築するための抽象化レイヤーを提供します。

LangChainが普及した理由は、LLMアプリケーション開発でよく必要とされるRAG（検索拡張生成）・エージェント・プロンプト管理・チェーン処理・メモリ管理などの機能を、モデルやプロバイダーに依存しない統一インターフェースで扱えるためです。

主要な機能として、複数のLLMプロバイダー（OpenAI・Anthropic・Google等）への統一アクセス、RAGのためのドキュメントローダー・テキストスプリッター・ベクターストア統合、エージェントのツール定義・実行ループ管理などがあります。大規模本番環境向けには「LangGraph」（ステートフルなマルチエージェントワークフロー）や「LangSmith」（監視・評価プラットフォーム）が提供されており、エコシステムとして成長しています。`,
    relatedSlugs: ["llm", "agent", "rag", "orchestration", "function-calling"],
    sources: [
      {
        title: "LangChain Documentation",
        url: "https://python.langchain.com/docs/introduction/",
        publisher: "LangChain",
        accessedAt: "2026-02-26",
      },
      {
        title: "LangChain - GitHub",
        url: "https://github.com/langchain-ai/langchain",
        publisher: "LangChain AI / GitHub",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "autonomous-agent",
    term: "自律エージェント（Autonomous Agent）",
    reading: "じりつエージェント",
    category: "実装",
    summary:
      "自律エージェントとは、目標を与えられると計画立案・ツール使用・自己修正を繰り返して自律的にタスクを完遂するAIシステムで、人手を介さずに長期的な作業を遂行します。",
    description: `自律エージェント（Autonomous Agent）とは、人間が最終目標を与えると、LLMが自ら計画を立て、必要なツールを呼び出し、結果を評価して次のアクションを決定するというサイクルを繰り返して、タスクを自律的に完遂するAIシステムです。

従来のAIチャットボットが「1問1答」で動くのに対し、自律エージェントは「目標達成まで自律的に試行錯誤する」点が根本的に異なります。例えば「競合他社の価格を調査してレポートにまとめる」という指示に対し、Web検索・データ収集・分析・文書作成を自動的に順番に行います。

AutoGPT（2023年）の登場により自律エージェントの概念が広く知られるようになり、その後LangChain Agents・Microsoft AutoGen・CrewAIなどのフレームワークが充実しました。実用上の課題として、長期タスクでのエラー蓄積・ハルシネーション・コスト管理などがあり、マルチエージェントシステムやモデルコンテキストプロトコル（MCP）と組み合わせて信頼性を高める手法が研究されています。`,
    relatedSlugs: ["agent", "multi-agent", "orchestration", "function-calling", "model-context-protocol"],
    sources: [
      {
        title: "AutoGPT - GitHub",
        url: "https://github.com/Significant-Gravitas/AutoGPT",
        publisher: "Significant Gravitas / GitHub",
        accessedAt: "2026-02-26",
      },
      {
        title: "LangChain Agents Documentation",
        url: "https://python.langchain.com/docs/how_to/#agents",
        publisher: "LangChain",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "gpu",
    term: "GPU（グラフィックス処理ユニット）",
    reading: "ジーピーユー",
    category: "基礎概念",
    summary:
      "GPUとは、大規模な並列計算を高速処理するプロセッサで、LLMの学習・推論に不可欠なハードウェアです。NVIDIAのH100・A100シリーズがAI開発の標準的なインフラとなっています。",
    description: `GPU（Graphics Processing Unit：グラフィックス処理ユニット）とは、元来3Dグラフィックスのレンダリング向けに設計された演算装置ですが、大規模な並列行列計算が得意という特性からディープラーニング・LLMの学習・推論に不可欠なハードウェアとなっています。

GPUがAIに欠かせない理由は、ニューラルネットワークの計算（行列積）を数千〜数万のコアで並列処理できるためです。CPUが数十コアで汎用計算を処理するのに対し、GPUは単純な計算を膨大な数のコアで同時実行します。これによりLLMの学習時間を劇的に短縮できます。

NVIDIAのH100（HBM3メモリ80GB）やA100（80GB）がAI研究・商用クラウドの標準インフラとなっており、クラウドプロバイダー（AWS・Google Cloud・Azure）がGPUインスタンスを提供しています。また量子化（Quantization）技術の進化により、コンシューマー向けGPU（RTX 4090等）でも小〜中規模のLLMを動かせるようになっています。GPUへのアクセスコストがAI開発の競争力を左右する要因の一つとなっています。`,
    relatedSlugs: ["llm", "inference", "quantization", "deep-learning"],
    sources: [
      {
        title: "NVIDIA H100 GPU Architecture",
        url: "https://www.nvidia.com/en-us/data-center/h100/",
        publisher: "NVIDIA",
        accessedAt: "2026-02-26",
      },
      {
        title: "Graphics processing unit - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Graphics_processing_unit",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "streaming",
    term: "ストリーミング",
    reading: "ストリーミング",
    category: "実装",
    summary:
      "ストリーミングとは、LLMが生成した文字・トークンをリアルタイムに順次送信する応答方式で、ユーザーが全文生成を待たずに即座に読み始められるUXを実現します。",
    description: `ストリーミング（Streaming）とは、LLMがテキストを生成しながら、生成済みのトークンを逐次クライアントに送信する応答方式です。通常の「バッチ応答」では全文生成が完了してから一括送信されますが、ストリーミングでは文字が生成されるたびにリアルタイムで表示されます。

ストリーミングが重要な理由は、LLMの応答生成には数秒〜数十秒かかることがあり、その間ユーザーを待機させると体験が悪化するためです。ストリーミングにより「考えながら話している」ような自然なUXを実現でき、ユーザーの認知負荷を下げて読む準備ができます。

技術的にはServer-Sent Events（SSE）またはWebSocketを使って実装されることが多く、OpenAI APIでは「stream: true」パラメーター、Anthropic APIでは「stream」オプションで有効化できます。フロントエンドではストリームデータをチャンク単位で受信してUIに逐次描画します。ただし、ストリーミング中にエラーが発生した場合のハンドリングや、構造化出力（Structured Output）との併用など、実装上の考慮点もあります。`,
    relatedSlugs: ["llm", "inference", "token", "structured-output"],
    sources: [
      {
        title: "Streaming - OpenAI API Documentation",
        url: "https://platform.openai.com/docs/api-reference/streaming",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Streaming Messages - Anthropic API Documentation",
        url: "https://docs.anthropic.com/en/api/messages-streaming",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "openai-api",
    term: "OpenAI API",
    reading: "オープンエーアイエーピーアイ",
    category: "実装",
    summary:
      "OpenAI APIとは、OpenAIが提供するGPTシリーズ等のモデルをHTTP経由で利用できるAPIで、テキスト生成・画像生成・音声変換など多様なAI機能をアプリケーションに組み込めます。",
    description: `OpenAI APIとは、OpenAIが提供する、GPT-4o・o1・GPT-4o miniなどのAIモデルをHTTPリクエスト経由で利用できるAPIサービスです。開発者はOpenAIのモデルを自社アプリケーションに組み込むことで、チャットボット・コード補助・文書要約・画像生成などの機能を実装できます。

OpenAI APIが重要な理由は、ChatGPTを支える高性能モデルを独自サービスに組み込む最も直接的な手段であり、LLMアプリケーション開発のデファクトスタンダードの一つとなっているためです。多くのフレームワークやツールがOpenAI API互換のインターフェースを採用しており、エコシステムが充実しています。

主要なエンドポイントとして、Chat Completions API（テキスト生成・会話）・Embeddings API（ベクトル変換）・Images API（DALL-E画像生成）・Transcription API（Whisper音声認識）などがあります。料金はトークン単位の従量課金制で、モデルによって異なります。Function Calling・Structured Output・Streamingなどの高度な機能も提供されており、複雑なLLMアプリケーション構築の基盤として広く活用されています。`,
    relatedSlugs: ["llm", "gpt", "chatgpt", "function-calling", "structured-output", "streaming"],
    sources: [
      {
        title: "OpenAI API Reference",
        url: "https://platform.openai.com/docs/api-reference",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "OpenAI Platform Documentation",
        url: "https://platform.openai.com/docs/overview",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "hugging-face",
    term: "Hugging Face（ハギングフェイス）",
    reading: "ハギングフェイス",
    category: "実装",
    summary:
      "Hugging Faceとは、事前学習済みモデルやデータセットの公開・共有・活用を支援するAIプラットフォームで、オープンソースAI開発のハブとして機能しています。",
    description: `Hugging Face（ハギングフェイス）とは、機械学習モデル・データセット・Spaces（デモアプリ）を共有・利用できるプラットフォームおよびOSSライブラリ群を提供する企業・コミュニティです。「AIのGitHub」とも呼ばれており、世界中の研究者・開発者が成果物を公開・共有しています。

Hugging Faceが重要な理由は、数十万以上の事前学習済みモデルと数万以上のデータセットが公開されており、誰でも無料でアクセス・利用できるオープンソースAI開発の中心地となっているためです。MetaのLlama・MistralAI・Google・Microsoftなど主要なAI企業も成果物をHugging Faceで公開しています。

主要なOSSライブラリとして、transformers（PyTorchベースのモデル読み込み・推論・ファインチューニング）・datasets（データセット管理）・tokenizers（高速トークナイザー）・PEFT（LoRAなどの効率的ファインチューニング手法）などがあります。また、Spaces機能ではGradioやStreamlitを使ったモデルのデモアプリを手軽に公開・共有できます。ベンチマーク評価のOpen LLM Leaderboardも広く参照されています。`,
    relatedSlugs: ["llm", "fine-tuning", "lora", "transformer", "tokenizer", "benchmark"],
    sources: [
      {
        title: "Hugging Face Documentation",
        url: "https://huggingface.co/docs",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
      {
        title: "Transformers Library - Hugging Face",
        url: "https://huggingface.co/docs/transformers/index",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "retrieval",
    term: "リトリーバル（Retrieval）",
    reading: "リトリーバル",
    category: "実装",
    summary:
      "リトリーバルとは、クエリに関連するドキュメント・情報を大規模データベースから検索・取得する処理で、RAGシステムの中核となる技術です。",
    description: `リトリーバル（Retrieval：検索・取得）とは、ユーザーのクエリや質問に対して、大規模なドキュメントコレクションや知識ベースから関連する情報を効率的に検索・取得するプロセスです。RAG（Retrieval-Augmented Generation）の名前にも含まれており、生成AIシステムの重要な構成要素です。

リトリーバルが重要な理由は、LLMは学習データのカットオフ以降の情報を知らない・企業固有の情報を持っていないという限界があり、リトリーバルで外部知識を動的に取得してLLMに渡すことで、最新かつ正確な応答を実現できるためです。

リトリーバル手法は大きく2種類に分かれます。①スパース検索（BM25・TF-IDFなど）：キーワードの一致で検索する古典的手法。高速で解釈しやすいが、同義語・文脈に弱い。②密ベクトル検索（Semantic Search）：テキストをEmbeddingでベクトル化してコサイン類似度で検索。意味的な近さで検索でき、文脈を考慮できる。実用的なシステムでは両者を組み合わせる「ハイブリッド検索」が採用されることも多く、ベクトルデータベース（Vector DB）と組み合わせて実装されます。`,
    relatedSlugs: ["rag", "vector-db", "semantic-search", "embedding", "grounding"],
    sources: [
      {
        title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        url: "https://arxiv.org/abs/2005.11401",
        publisher: "arXiv / Facebook AI",
        accessedAt: "2026-02-26",
      },
      {
        title: "RAG - Hugging Face Documentation",
        url: "https://huggingface.co/docs/transformers/model_doc/rag",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "reasoning-model",
    term: "推論モデル",
    reading: "推論モデル",
    category: "モデル",
    summary:
      "推論モデルとは、回答前に内部で思考プロセス（Chain-of-Thought）を実行し、複雑な数学・論理・コーディング問題を解く能力に特化したLLMです。",
    description: `推論モデル（Reasoning Model）とは、LLMが最終回答を生成する前に「考える」時間を費やし、内部的な思考の連鎖（Chain-of-Thought）を実行することで複雑な問題を解くよう設計されたモデルです。

推論モデルが注目される理由は、従来のLLMが苦手としていた数学的証明・複雑なコーディング・多ステップの論理推論といった高難度タスクで飛躍的な性能向上を実現するためです。単純なプロンプト回答ではなく、「まず問題を分解し、各ステップを検証しながら答えにたどり着く」という思考プロセス自体をモデルが学習している点が従来のLLMとの大きな違いです。

代表例としてOpenAI o1・o3シリーズ（旧称"Strawberry"）、Anthropic Claude 3.7 Sonnet（Extended Thinking）などがあります。内部の思考トークンにも課金されるため、シンプルな質問への適用はコスト効率が悪く、難易度の高い推論タスクに使い分けるのが実務上のベストプラクティスです。`,
    relatedSlugs: ["llm", "cot", "inference", "benchmark", "deep-learning"],
    sources: [
      {
        title: "OpenAI o1 Technical Report",
        url: "https://openai.com/research/learning-to-reason-with-llms",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Claude 3.7 Sonnet – Extended Thinking",
        url: "https://www.anthropic.com/news/claude-3-7-sonnet",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "tool-use",
    term: "ツールユース",
    reading: "ツールユース",
    category: "実装",
    summary:
      "ツールユースとは、LLMが外部ツール（検索・計算機・APIなど）を呼び出してタスクを完遂する能力と仕組みで、エージェント実装の中核技術です。",
    description: `ツールユース（Tool Use）とは、LLMが「自分では直接実行できない操作」を外部ツール・APIに委譲することで、現実世界の情報取得やアクションを実現する機能です。

ツールユースが重要な理由は、LLM単体では「テキストを生成する」ことしかできませんが、ツールを経由することで「最新情報の検索」「計算の実行」「データベースへのCRUD操作」「メール送信」などの実際のタスクを完遂できるようになるためです。これによりLLMは対話型AIから自律型エージェントへと進化します。

実装方法はプロバイダーにより異なります。AnthropicはTool Useとして、OpenAIはFunction Callingとして提供し、現在はFunction CallingをよりシンプルにしたToolsというインターフェースに統一されつつあります。また、MCP（Model Context Protocol）はツール定義を標準化することで異なるLLM・アプリ間でのツール共有を可能にします。`,
    relatedSlugs: [
      "function-calling",
      "agent",
      "model-context-protocol",
      "structured-output",
      "autonomous-agent",
    ],
    sources: [
      {
        title: "Anthropic Tool Use Documentation",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
      {
        title: "OpenAI Function Calling Documentation",
        url: "https://platform.openai.com/docs/guides/function-calling",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "speech-to-text",
    term: "音声認識（Speech-to-Text）",
    reading: "スピーチトゥテキスト",
    category: "実装",
    summary:
      "音声認識（STT）とは、音声データをテキストに変換するAI技術です。OpenAI Whisperが代表例で、多言語・ノイズ環境に強い特徴を持ちます。",
    description: `音声認識（Speech-to-Text / STT）とは、マイクや音声ファイルから取得した音声データを、AIモデルを使ってテキスト（文字起こし）に変換する技術です。

STTが注目される理由は、議事録の自動生成・コールセンター応答のテキスト化・音声インターフェース実装など、ビジネス現場での活用範囲が広く、特に大規模言語モデルと組み合わせることで「話しかけるだけでAIが回答する」音声AIシステムを構築できるためです。

代表的なモデルはOpenAIのWhisperで、680,000時間の音声データで学習した多言語対応モデルです。英語・日本語を含む99言語をサポートし、ノイズ環境・アクセント・専門用語にも比較的強い堅牢性を持ちます。APIとして利用するほか、オープンソースモデルとしてローカル実行も可能です。`,
    relatedSlugs: ["natural-language-processing", "multimodal", "deep-learning"],
    sources: [
      {
        title: "Robust Speech Recognition via Large-Scale Weak Supervision（Whisper論文）",
        url: "https://arxiv.org/abs/2212.04356",
        publisher: "arXiv / OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "OpenAI Whisper API Documentation",
        url: "https://platform.openai.com/docs/guides/speech-to-text",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "text-to-speech",
    term: "音声合成（Text-to-Speech）",
    reading: "テキストトゥスピーチ",
    category: "実装",
    summary:
      "音声合成（TTS）とは、テキストを自然な音声に変換するAI技術です。OpenAI TTS・ElevenLabsなどが代表的で、読み上げ・音声AIに活用されます。",
    description: `音声合成（Text-to-Speech / TTS）とは、入力されたテキストをAIモデルが処理し、人間の声に近い自然な音声として出力する技術です。

TTSが重要な理由は、視覚障害者向けのアクセシビリティ向上から、音声インターフェース・ポッドキャスト自動生成・カスタマーサポートの自動化まで、幅広いユースケースがあるためです。特に最新のニューラルTTSはイントネーション・感情・話速のバリエーションが豊かで、従来のロボット音声とは大きく異なります。

主要サービスとして、OpenAI TTS API（alloy・echo・fable等の音声スタイルを選択可能）、ElevenLabs（声のクローニングや感情制御が可能）などがあります。音声合成と音声認識（STT）を組み合わせることで、音声対話型AIエージェントを構築できます。`,
    relatedSlugs: [
      "natural-language-processing",
      "multimodal",
      "speech-to-text",
      "deep-learning",
    ],
    sources: [
      {
        title: "OpenAI Text-to-Speech API Documentation",
        url: "https://platform.openai.com/docs/guides/text-to-speech",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "ElevenLabs Documentation",
        url: "https://elevenlabs.io/docs",
        publisher: "ElevenLabs",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "knowledge-distillation",
    term: "知識蒸留",
    reading: "知識蒸留",
    category: "基礎概念",
    summary:
      "知識蒸留とは、大規模モデル（教師）の知識を小規模モデル（生徒）に転移させてモデルを軽量化する技術で、エッジデバイス展開に有効です。",
    description: `知識蒸留（Knowledge Distillation）とは、学習済みの大規模モデル（教師モデル）の出力確率分布を「教師信号」として使い、小規模モデル（生徒モデル）を訓練することで、性能を維持しつつモデルを大幅に圧縮する技術です。

知識蒸留が有効な理由は、LLMは性能が高い一方でメモリ・計算資源が膨大なため、スマートフォンやエッジデバイスへの組み込みや、推論コストの削減が求められる現場では小型化が必須だからです。通常の圧縮と異なり、教師モデルのソフトラベル（各クラスへの確率分布）を使うことで、ハードラベル（正解のみ）では失われる「暗黙の知識」を生徒モデルに伝達できます。

代表例としてMeta LLaMAシリーズのSmallモデル、GoogleのDistilBERT等があります。量子化やLoRAと組み合わせることでさらなる軽量化が可能で、実務では複数の手法を組み合わせてモデルの「コスト対性能比」を最適化します。`,
    relatedSlugs: ["fine-tuning", "quantization", "lora", "llm", "parameter"],
    sources: [
      {
        title: "Distilling the Knowledge in a Neural Network",
        url: "https://arxiv.org/abs/1503.02531",
        publisher: "arXiv / Hinton et al.",
        accessedAt: "2026-02-26",
      },
      {
        title: "DistilBERT, a distilled version of BERT",
        url: "https://arxiv.org/abs/1910.01108",
        publisher: "arXiv / Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "red-teaming",
    term: "レッドチーミング",
    reading: "レッドチーミング",
    category: "法務・倫理",
    summary:
      "レッドチーミングとは、AIシステムの安全性・脆弱性を攻撃者視点で意図的に探索・評価するプロセスで、デプロイ前の安全評価に不可欠です。",
    description: `レッドチーミング（Red Teaming）とは、サイバーセキュリティ分野で軍事演習の「赤軍（敵役）」に由来する概念をAI安全性評価に応用したもので、AIシステムに対して悪意ある攻撃者の視点から意図的に有害・不正なアウトプットを引き出す試みを行い、脆弱性を特定するプロセスです。

AIにおけるレッドチーミングが重要な理由は、LLMは標準的なベンチマークでは発見しにくいエッジケースの脆弱性（有害コンテンツ生成・プライバシー侵害・偏見増幅など）を持つことがあり、デプロイ前に網羅的に脆弱性を洗い出すことがユーザー保護と法的リスク回避に直結するからです。

実施方法として、①人間の専門家チームが手動で多角的な攻撃シナリオを試みる手法と、②別のLLMを使ってジェイルブレイクやプロンプトインジェクションを自動生成する「自動レッドチーミング」があります。AnthropicはClaude開発において継続的なレッドチーミングを実施しており、OpenAIもGPT-4Oリリース前に外部機関との協力でシステムカード評価を行っています。`,
    relatedSlugs: ["jailbreak", "prompt-injection", "ai-governance", "alignment", "benchmark"],
    sources: [
      {
        title: "Anthropic's Approach to AI Safety",
        url: "https://www.anthropic.com/safety",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
      {
        title: "GPT-4 System Card",
        url: "https://openai.com/research/gpt-4-system-card",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "prompt-caching",
    term: "プロンプトキャッシング",
    reading: "プロンプトキャッシング",
    category: "実装",
    summary:
      "プロンプトキャッシングとは、繰り返し使うプロンプト部分をサーバー側でキャッシュしてAPIコストと遅延を削減する機能です。長いシステムプロンプトや共通コンテキストに効果的です。",
    description: `プロンプトキャッシング（Prompt Caching）とは、APIリクエスト毎に全プロンプトを再処理するのではなく、変化しない部分（システムプロンプト・長文コンテキスト・ドキュメントなど）をプロバイダーのサーバー上にキャッシュし、再利用することでトークン処理コストと応答レイテンシを削減する機能です。

プロンプトキャッシングが重要な理由は、RAGシステムや長文コンテキストを多用するアプリケーションでは、同一のベースプロンプトに対して何千ものリクエストが発生するため、キャッシュなしでは費用が線形に増大するからです。一度キャッシュが生成されると、そのトークン処理コストが大幅に削減（Anthropicの場合は最大90%削減）されます。

AnthropicはClaude APIでプロンプトキャッシングをサポートし、"cache_control"パラメータでキャッシュポイントを指定できます。OpenAIも一定の文字数以上のプロンプトに対して自動的にプロンプトキャッシングを適用する仕組みを持っています。長いシステムプロンプト・共通のコンテキスト・数十ページのドキュメントを繰り返し参照するユースケースで特に効果的です。`,
    relatedSlugs: ["prompt", "context-window", "system-prompt", "llm", "openai-api"],
    sources: [
      {
        title: "Anthropic Prompt Caching Documentation",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
      {
        title: "OpenAI Prompt Caching",
        url: "https://platform.openai.com/docs/guides/prompt-caching",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "vram",
    term: "VRAM",
    reading: "ブイラム",
    category: "基礎概念",
    summary:
      "VRAMとはGPU上の専用メモリ（Video RAM）で、LLMの推論・学習時にモデルの重みを保持するために必要です。容量がモデルサイズの実行可能性を決定します。",
    description: `VRAM（Video RAM / グラフィックスメモリ）とは、GPU（グラフィックス処理ユニット）上に搭載された専用メモリです。一般的なCPUメモリ（RAM）より高帯域幅であり、大量の並列演算を必要とするLLMの推論・学習に不可欠なリソースです。

VRAMがLLM活用において重要な理由は、モデルの重み（パラメータ）はすべてVRAMに読み込まれる必要があり、VRAM容量がモデルのローカル実行可能性の上限を決めるからです。例えば、7Bパラメータのモデルをfloat16精度で実行する場合、約14GBのVRAMが必要になります。量子化（int8・int4など）でVRAM使用量を削減することで、より小さいGPUでの実行が可能になります。

代表的なGPUとVRAM容量：NVIDIA RTX 4090（24GB）・H100（80GB）・A100（40GB/80GB）。クラウド推論APIを使う場合はVRAMを意識する必要はありませんが、ローカルでのLLM実行（Ollamaやllama.cppなど）やファインチューニングを行う際は、VRAMがボトルネックになります。`,
    relatedSlugs: ["gpu", "inference", "quantization", "llm", "parameter"],
    sources: [
      {
        title: "NVIDIA GPU Memory Documentation",
        url: "https://developer.nvidia.com/blog/understanding-gpu-memory-model/",
        publisher: "NVIDIA",
        accessedAt: "2026-02-26",
      },
      {
        title: "VRAM - Wikipedia",
        url: "https://en.wikipedia.org/wiki/VRAM",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "mixture-of-experts",
    term: "MoE（Mixture of Experts）",
    reading: "ミクスチャーオブエキスパーツ",
    category: "モデル",
    summary:
      "MoEとは、モデルの一部（専門家サブネット）だけを選択的に活性化する効率的なアーキテクチャです。Mixtral・GPT-4などが採用し、大規模化と計算効率を両立します。",
    description: `MoE（Mixture of Experts：混合エキスパート）とは、ニューラルネットワーク内に複数の「専門家（Expert）」サブネットワークを持ち、各トークンの処理時にルーター（Gating Network）が最も適切な専門家を選択・活性化するアーキテクチャです。

MoEが注目される理由は、全パラメータを常に使う密なモデル（Dense Model）と異なり、推論時に活性化されるパラメータが全体の一部に留まるため、「大きなパラメータ数（総パラメータ）」と「低い推論コスト（活性化パラメータ）」を同時に実現できるからです。例えば、Mixtral 8x7Bは総パラメータ約47Bですが、各トークン処理では2つの専門家（計約12.9B相当）のみを使用します。

代表的なMoEモデルとして、Mistral AIのMixtral 8x7B・8x22B、OpenAI GPT-4（MoEアーキテクチャの採用が外部から指摘）、Google Gemini 1.5などがあります。トランスフォーマーアーキテクチャのFFN（フィードフォワードネットワーク）層をMoEに置き換える実装が一般的です。`,
    relatedSlugs: ["llm", "transformer", "parameter", "inference", "deep-learning"],
    sources: [
      {
        title: "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer",
        url: "https://arxiv.org/abs/1701.06538",
        publisher: "arXiv / Shazeer et al.",
        accessedAt: "2026-02-26",
      },
      {
        title: "Mixtral of Experts",
        url: "https://arxiv.org/abs/2401.04088",
        publisher: "arXiv / Mistral AI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "open-source-llm",
    term: "オープンソースLLM",
    reading: "オープンソースLLM",
    category: "モデル",
    summary:
      "オープンソースLLMとは、ソースコードや重みが公開されているLLMです。Meta LLaMA・Mistralが代表例で、ローカル実行・カスタマイズ・コスト削減が強みです。",
    description: `オープンソースLLM（Open-Source LLM）とは、モデルの重み（パラメータファイル）とコードが一般に公開されており、誰でもダウンロード・ローカル実行・ファインチューニングが可能なLLMを指します。ただし、「オープンソース」の定義は厳密に言うと各モデルのライセンスによって異なり、商用利用が制限されるケースもあります。

オープンソースLLMが重要な理由は、①データのプライバシー（クラウドAPIにデータを送らずにローカル実行できる）、②カスタマイズ性（企業独自のドメインでファインチューニング可能）、③コスト削減（API課金なしで運用）という三つの大きなメリットがあるためです。

代表的なモデルとして、Meta LLaMA 3（8B・70B・405B）、Mistral（7B・8x7B MoE）、Alibaba Qwen、Google Gemmaなどがあります。Hugging Faceがモデルのホスティングと配布のハブとして機能しており、Ollamaやllama.cppなどのツールでローカル実行が容易になっています。商用利用時はLlamaライセンス・Apache 2.0・MIT等のライセンスを確認することが必要です。`,
    relatedSlugs: ["llm", "fine-tuning", "hugging-face", "quantization", "lora"],
    sources: [
      {
        title: "Meta LLaMA – Official Blog",
        url: "https://llama.meta.com/",
        publisher: "Meta AI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Mistral AI Models",
        url: "https://docs.mistral.ai/getting-started/models/",
        publisher: "Mistral AI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "foundation-model",
    term: "基盤モデル（ファンデーションモデル）",
    reading: "きばんモデル",
    category: "基礎概念",
    summary:
      "基盤モデルとは、大規模データで事前学習された汎用AIモデルです。様々なタスクにfine-tuningまたはそのまま利用でき、LLMや画像生成モデルなどが代表例です。",
    description: `基盤モデル（Foundation Model）とは、大規模なデータセットで事前学習（pretraining）された汎用的なAIモデルを指します。スタンフォード大学HAIが2021年に提唱した概念で、特定の用途に特化せず幅広いタスクに適用できる点が特徴です。

なぜ基盤モデルが重要かというと、従来は各タスクごとに専用モデルを一から学習していたのに対し、基盤モデルを起点にfine-tuningやプロンプト設計で多様なタスクに対応できるためです。開発コストの大幅な削減と、汎化性能の高さが評価されています。

代表的な基盤モデルとして、テキスト系ではGPT-4・Claude・Gemini・LLaMA、画像系ではStable Diffusion・DALL-E、マルチモーダル系ではGPT-4oなどがあります。企業はこれらの基盤モデルを自社データでfine-tuningし、専門特化型モデルを効率的に構築しています。`,
    relatedSlugs: ["llm", "pretraining", "fine-tuning", "transformer", "generative-ai"],
    sources: [
      {
        title: "On the Opportunities and Risks of Foundation Models",
        url: "https://arxiv.org/abs/2108.07258",
        publisher: "arXiv / Stanford HAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Foundation model - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Foundation_model",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "transfer-learning",
    term: "転移学習（トランスファーラーニング）",
    reading: "てんいがくしゅう",
    category: "基礎概念",
    summary:
      "転移学習とは、既存タスクで学習した知識を別タスクに応用する手法です。LLMのfine-tuningの基盤となる概念で、少ないデータで高い性能を実現できます。",
    description: `転移学習（Transfer Learning）とは、あるタスクや領域で学習したモデルの知識・パラメータを、別のタスクや領域に活用する機械学習の手法です。

転移学習が重要な理由は、ゼロからモデルを学習するには膨大なデータと計算コストが必要ですが、転移学習を使えば少ないデータと計算資源で高性能モデルを構築できるためです。現代のLLMの普及はこの考え方が根幹にあります。

具体的な応用として、GPT・Claudeなどの大規模言語モデルを企業固有の用語やドメイン知識でfine-tuningする手法が代表的です。画像認識でもImageNetで学習したモデルを医療画像診断に転用するなど、幅広い分野で活用されています。LLMの文脈では、pretrainingで得た汎用的な言語理解能力を特定タスク（分類・要約・対話等）に転移するプロセスがfine-tuningに相当します。`,
    relatedSlugs: ["fine-tuning", "pretraining", "foundation-model", "llm", "deep-learning"],
    sources: [
      {
        title: "A Survey on Transfer Learning",
        url: "https://ieeexplore.ieee.org/document/5288526",
        publisher: "IEEE / Pan & Yang (2009)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Transfer learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Transfer_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "stable-diffusion",
    term: "Stable Diffusion（ステーブルディフュージョン）",
    reading: "ステーブルディフュージョン",
    category: "モデル",
    summary:
      "Stable Diffusionとは、Stability AIが開発・公開したオープンソースの高品質テキストトゥイメージモデルです。商用利用可能かつローカル実行もでき、画像生成AIの普及に大きく貢献しました。",
    description: `Stable Diffusion（ステーブルディフュージョン）とは、Stability AI・CompVis・RunwayMLが共同開発し、2022年8月にオープンソースで公開されたテキストトゥイメージ生成モデルです。潜在拡散モデル（Latent Diffusion Model）をベースとした高品質な画像生成が可能です。

Stable Diffusionが画期的だった理由は、高性能な画像生成モデルが初めてオープンソースで公開されたことです。それまで商用クラウドサービス経由でしか使えなかった高品質な画像生成が、個人のPCでもローカル実行できるようになり、画像生成AIの民主化が加速しました。

現在はStable Diffusion 1.5・2.1・XL・3など複数バージョンがあり、Automatic1111やComfyUIなどのUIツール、LoRAやControlNetなどの拡張技術と組み合わせることで、特定スタイルへのfine-tuningや構図制御など高度なカスタマイズが可能です。Hugging Faceのdiffusersライブラリを通じた利用も広く行われています。`,
    relatedSlugs: ["diffusion-model", "text-to-image", "generative-ai", "open-source-llm"],
    sources: [
      {
        title: "High-Resolution Image Synthesis with Latent Diffusion Models",
        url: "https://arxiv.org/abs/2112.10752",
        publisher: "arXiv / Rombach et al. (2022)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Stable Diffusion - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Stable_Diffusion",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "code-generation",
    term: "コード生成",
    reading: "コードせいせい",
    category: "実装",
    summary:
      "コード生成とは、LLMが自然言語の指示からプログラムコードを自動生成する能力・タスクです。GitHub CopilotやChatGPTなどで広く実用化されています。",
    description: `コード生成（Code Generation）とは、自然言語による指示・仕様説明を入力として、LLMがプログラムコードを自動生成するタスクです。プログラミングアシスタントの中核機能であり、開発生産性向上の主要な手段として注目されています。

コード生成が重要な理由は、熟練した開発者でも定型コードの記述やAPIの使い方調査に多くの時間を費やすためです。LLMによるコード生成は、ボイラープレートコードの自動化、バグの自動修正、テストコードの生成など、開発の多くのフェーズで活用できます。

代表的な活用例として、GitHub Copilot（コード補完）、ChatGPT・Claude（対話型コード生成）、Cursor・Continue（IDE統合）などがあります。評価指標としてHumanEval・SWE-benchなどのbenchmarkが広く使われており、モデル間の性能比較に用いられています。コード生成の精度向上にはfine-tuningやRAGによるコードベースの文脈付与が有効です。`,
    relatedSlugs: ["llm", "prompt-engineering", "fine-tuning", "benchmark", "reasoning-model"],
    sources: [
      {
        title: "Evaluating Large Language Models Trained on Code",
        url: "https://arxiv.org/abs/2107.03374",
        publisher: "arXiv / Chen et al. (2021)",
        accessedAt: "2026-02-26",
      },
      {
        title: "GitHub Copilot Documentation",
        url: "https://docs.github.com/en/copilot",
        publisher: "GitHub",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-regulation",
    term: "AI規制",
    reading: "エーアイきせい",
    category: "法務・倫理",
    summary:
      "AI規制とは、AIシステムの開発・利用に関する法的ルール・ガイドラインの総称です。EU AI法が世界初の包括的AI規制として注目され、各国で規制整備が加速しています。",
    description: `AI規制（AI Regulation）とは、人工知能システムの開発・提供・利用に際して守るべきルールや基準を定めた法律・規制・ガイドラインの総称です。AI技術の急速な発展に伴うリスク管理と、イノベーション促進のバランスをどう取るかが各国の課題となっています。

AI規制が注目される理由は、AIの誤判断や差別的出力、偽情報生成、プライバシー侵害などのリスクが顕在化してきたためです。特に採用・与信・刑事司法など人の権利に影響する高リスク領域でのAI利用には厳格な基準が求められます。

代表的な規制として、EU AI Act（2024年施行、リスクベースアプローチで世界初の包括的AI規制）、米国のAI行政命令、日本のAI事業者ガイドライン、NISTのAIリスク管理フレームワーク（AI RMF）などがあります。企業はai-governanceの観点からコンプライアンス体制の整備が求められており、特にGPAI（汎用目的AI）モデルの開発者にはより厳格な透明性・安全性の要件が課されています。`,
    relatedSlugs: ["ai-governance", "bias", "alignment", "constitutional-ai", "red-teaming"],
    sources: [
      {
        title: "EU AI Act - Official Text",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
        publisher: "European Union",
        accessedAt: "2026-02-26",
      },
      {
        title: "NIST AI Risk Management Framework",
        url: "https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf",
        publisher: "NIST",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "privacy",
    term: "プライバシー（AI文脈）",
    reading: "プライバシー",
    category: "法務・倫理",
    summary:
      "AIにおけるプライバシーとは、AIの学習・推論過程における個人情報の保護を指します。学習データへの無断利用や推論時の情報漏洩が主要リスクで、適切な対策が求められます。",
    description: `AIにおけるプライバシー（Privacy）とは、AIシステムが個人情報を収集・学習・利用する際の情報保護に関する概念です。AI特有のプライバシーリスクとして、学習データへの個人情報の混入、プロンプト経由の情報漏洩、モデルの記憶（メモリゼーション）による個人情報の再出力などが挙げられます。

プライバシーが重要な理由は、LLMがインターネット上の膨大なデータで学習しており、そこには個人の氏名・住所・医療情報などが含まれる可能性があるためです。また、企業がRAGやfine-tuningで社内の機密データをAIに投入する際のデータ管理も重要な課題です。

主な保護手段として、差分プライバシー（学習データから個人情報が推定されないよう統計的ノイズを加える技術）、連合学習（データを中央集約せずに分散学習）、プロンプトの匿名化処理などがあります。法的には日本の個人情報保護法・GDPRの遵守が求められており、個人情報保護委員会もAI活用に関するガイドラインを整備しています。`,
    relatedSlugs: ["ai-governance", "ai-regulation", "bias", "fine-tuning", "rag"],
    sources: [
      {
        title: "個人情報保護委員会 AIと個人情報保護に関する取扱い",
        url: "https://www.ppc.go.jp/",
        publisher: "個人情報保護委員会",
        accessedAt: "2026-02-26",
      },
      {
        title: "GDPR - General Data Protection Regulation",
        url: "https://gdpr-info.eu/",
        publisher: "European Union",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "vision-language-model",
    term: "ビジョン言語モデル（VLM）",
    reading: "ビジョンげんごモデル",
    category: "モデル",
    summary:
      "ビジョン言語モデル（VLM）とは、画像とテキストの両方を入力・出力できるマルチモーダルAIモデルです。GPT-4V、Gemini、Claudeなどが代表例で、画像の理解・説明・分析に活用されます。",
    description: `ビジョン言語モデル（Vision-Language Model、VLM）とは、画像とテキストを統合的に処理できるマルチモーダルAIモデルです。画像の認識・理解とテキストの生成を組み合わせることで、「この画像を説明して」「図表からデータを読み取って」「スクリーンショットのUIを修正して」といった複合的なタスクをこなせます。

VLMが重要な理由は、現実世界の多くの情報が画像・図表・動画などの視覚情報を含むためです。テキストのみのLLMではこれらを処理できませんが、VLMによって書類のOCR・医療画像診断補助・製造業の外観検査・ECサイトの画像解析など幅広い用途が開拓されています。

代表的なVLMとして、OpenAI GPT-4V・GPT-4o（テキスト+画像入力）、Google Gemini 1.5 Pro（動画も処理可）、Anthropic Claude 3シリーズ（画像分析）、オープンソース系のLLaVAやInternVLなどがあります。transformerアーキテクチャを拡張し、画像をパッチ分割してembeddingとして処理するのが一般的な手法です。`,
    relatedSlugs: ["multimodal", "llm", "transformer", "text-to-image", "deep-learning"],
    sources: [
      {
        title: "GPT-4V(ision) System Card",
        url: "https://openai.com/research/gpt-4v-system-card",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Gemini: A Family of Highly Capable Multimodal Models",
        url: "https://arxiv.org/abs/2312.11805",
        publisher: "arXiv / Google",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "summarization",
    term: "要約（サマリゼーション）",
    reading: "ようやく",
    category: "実装",
    summary:
      "要約とは、長いテキストから重要な情報を抽出して短くまとめるLLMのタスクです。議事録・ニュース・論文・報告書などのビジネス文書処理で広く活用されています。",
    description: `要約（Summarization）とは、長文のテキストから核心的な情報を抽出・圧縮して短いテキストとして出力するNLPタスクです。「抽出型要約（Extractive）」と「生成型要約（Abstractive）」の二種類があり、LLMは主に生成型で元の文章にない表現も使いながら自然な要約を生成します。

要約が重要な理由は、現代のビジネス環境で処理すべき文書量が増大し続けているためです。会議の議事録、長文の報告書、大量のニュース記事、学術論文などをLLMで要約することで、情報把握の時間を大幅に削減できます。

実装上の注意点として、LLMのcontext-windowを超える長文の要約には「チャンク分割+再要約」や「MapReduceパターン」が使われます。RAGと組み合わせ、大量の文書から関連部分を検索した上で要約するパターンも一般的です。要約品質の評価にはROUGEスコアが長く使われてきましたが、LLMによる評価（LLM-as-a-Judge）も普及しています。`,
    relatedSlugs: ["llm", "prompt-engineering", "context-window", "rag", "natural-language-processing"],
    sources: [
      {
        title: "Get To The Point: Summarization with Pointer-Generator Networks",
        url: "https://arxiv.org/abs/1704.04368",
        publisher: "arXiv / See et al. (2017)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Text summarization - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Automatic_summarization",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "llama",
    term: "LLaMA（ラマ）",
    reading: "ラマ",
    category: "モデル",
    summary:
      "LLaMAとは、Metaが開発・公開するオープンソースLLMシリーズです。LLaMA 3まで進化しており、ローカル実行やfine-tuningに広く使われるオープンソースLLMの代表格です。",
    description: `LLaMA（Large Language Model Meta AI）とは、Metaが研究・開発し、オープンソースで公開しているLLMシリーズです。2023年2月にLLaMA（7B〜65Bパラメータ）、同年7月にLLaMA 2（商用利用可）、2024年4月にLLaMA 3（最大405B）がリリースされています。

LLaMAが重要な理由は、同等性能のクローズドモデル（GPT等）と比較して大幅に少ないパラメータで高性能を達成しつつ、オープンソースで公開されているためです。企業が自社環境でホストして機密データを外部送信せずに利用できる点、LoRAなどの手法で軽量fine-tuningできる点が評価されています。

LLaMA 3は8B・70B・405Bのバリエーションがあり、多くのopen-source-llmの中でも最高水準の性能を持ちます。Hugging Faceでのダウンロード、Ollamaによるローカル実行、vLLMによる本番サーバー構築など、エコシステムが充実しています。量子化（quantization）と組み合わせることで、コンシューマーGPUでも実行可能です。`,
    relatedSlugs: ["llm", "open-source-llm", "fine-tuning", "lora", "hugging-face", "quantization"],
    sources: [
      {
        title: "Introducing Meta Llama 3",
        url: "https://ai.meta.com/blog/meta-llama-3/",
        publisher: "Meta AI",
        accessedAt: "2026-02-26",
      },
      {
        title: "LLaMA: Open and Efficient Foundation Language Models",
        url: "https://arxiv.org/abs/2302.13971",
        publisher: "arXiv / Meta AI (2023)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "copilot",
    term: "コパイロット（Copilot）",
    reading: "コパイロット",
    category: "実装",
    summary:
      "コパイロットとは、LLMを使って開発者・ビジネスユーザーの作業を補助するAIアシスタントです。GitHub Copilot（コード補完）やMicrosoft 365 Copilotが代表例です。",
    description: `コパイロット（Copilot）とは、LLMを活用してユーザーの作業をリアルタイムに補助するAIアシスタントの総称、またはMicrosoftが展開するAI製品ブランド名です。「副操縦士」の意味通り、人間の判断を支援・補完する役割を担います。

コパイロットが注目される理由は、生成AIを特定のワークフローに統合し、実務で使いやすい形で提供している点です。ユーザーは専門的なAI知識なしに、普段使うツールの中でAIの恩恵を受けられます。

代表的な製品として、GitHub Copilot（コードエディタ上でのコード補完・生成、月額10〜19ドル）、Microsoft 365 Copilot（Word・Excel・Outlook・TeamsにAI統合）、GitHub Copilot Workspace（issueからPRまでエージェント的に実装）などがあります。GitHub Copilotの効果測定では、開発者の生産性が平均55%向上したとの報告があります。code-generationやagentの機能と組み合わせることで、単純補完から複雑タスクの自律実行まで対応範囲が広がっています。`,
    relatedSlugs: ["llm", "code-generation", "agent", "prompt-engineering", "chatgpt"],
    sources: [
      {
        title: "GitHub Copilot Documentation",
        url: "https://docs.github.com/en/copilot",
        publisher: "GitHub",
        accessedAt: "2026-02-26",
      },
      {
        title: "Microsoft Copilot Overview",
        url: "https://www.microsoft.com/en-us/microsoft-copilot",
        publisher: "Microsoft",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "reinforcement-learning",
    term: "強化学習",
    reading: "きょうかがくしゅう",
    category: "基礎概念",
    summary:
      "強化学習とは、エージェントが試行錯誤しながら報酬を最大化する行動を学習するAI手法です。RLHFを通じてLLMのアラインメントに応用され、現代の生成AIの品質を支える基盤技術です。",
    description: `強化学習（Reinforcement Learning、RL）とは、エージェントが環境と相互作用しながら、累積報酬を最大化する行動方策（Policy）を学習するAI手法です。教師あり学習のように正解データを与えるのではなく、行動の結果として得られる報酬シグナルだけを手がかりに学習します。

強化学習が生成AIの分野で特に注目されている理由は、RLHF（人間フィードバックからの強化学習）の基盤技術として機能しているためです。ChatGPTやClaudeなどのLLMは、事前学習後にRLHFで人間の好みに合わせた回答を生成するよう調整されており、強化学習なしには現在の高品質な対話AIは実現しませんでした。

代表的なアルゴリズムとして、DQN（Deep Q-Network）、PPO（Proximal Policy Optimization）、SAC（Soft Actor-Critic）などがあります。LLM文脈ではPPOが広く使われています。また近年は報酬モデルを使わないDPO（Direct Preference Optimization）や、プロセス報酬モデル（PRM）を使ったSTaRなども登場し、LLMの推論能力向上に活用されています。`,
    relatedSlugs: ["rlhf", "alignment", "agent", "deep-learning", "machine-learning"],
    sources: [
      {
        title: "Reinforcement Learning: An Introduction (2nd ed.)",
        url: "http://incompleteideas.net/book/the-book-2nd.html",
        publisher: "Sutton & Barto (2018)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Reinforcement learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Reinforcement_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "supervised-learning",
    term: "教師あり学習",
    reading: "きょうしありがくしゅう",
    category: "基礎概念",
    summary:
      "教師あり学習とは、正解ラベル付きデータを使ってモデルを訓練する機械学習の基本手法です。画像分類・スパム検知・翻訳など幅広いタスクに応用され、LLMのfine-tuningもその一形態です。",
    description: `教師あり学習（Supervised Learning）とは、入力データと対応する正解ラベル（教師信号）のペアを使ってモデルを訓練する機械学習の基本手法です。モデルは予測値と正解の差（損失）を最小化するようパラメータを更新し、未知のデータにも正確な予測を行えるよう汎化を目指します。

教師あり学習が重要な理由は、実用的なAIシステムの多くがこの手法をベースに構築されているためです。画像分類（ResNet等）、音声認識、機械翻訳、医療診断支援など、現代のAI応用の大部分は教師あり学習によって実現されています。LLMのsftやfine-tuningも教師あり学習の一形態です。

代表的なタスク分類として、分類問題（Classification）と回帰問題（Regression）があります。前者は猫/犬の識別やスパム判定、後者は住宅価格予測や気温予測などが例として挙げられます。モデルの評価にはaccuracy・F1スコア・ROC-AUCなどのevaluation-metricsが使われ、過学習（Overfitting）防止のために訓練データ・検証データ・テストデータへの分割が基本とされます。`,
    relatedSlugs: ["machine-learning", "deep-learning", "fine-tuning", "sft", "benchmark"],
    sources: [
      {
        title: "Supervised learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Supervised_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "CS229: Machine Learning - Stanford University",
        url: "https://cs229.stanford.edu/",
        publisher: "Stanford University",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "unsupervised-learning",
    term: "教師なし学習",
    reading: "きょうしなしがくしゅう",
    category: "基礎概念",
    summary:
      "教師なし学習とは、ラベルなしデータからパターンや構造を自律的に発見する機械学習手法です。クラスタリング・次元削減・異常検知に活用され、LLMの事前学習もこの考え方を応用しています。",
    description: `教師なし学習（Unsupervised Learning）とは、正解ラベルを与えずにデータの内部構造やパターンを自律的に発見する機械学習手法です。人間がラベル付けしたデータがなくても、データ間の類似性・関係性・統計的構造を学習できます。

教師なし学習が重要な理由は、現実世界のデータの大部分がラベルなしで存在するためです。膨大なインターネットテキストに正解ラベルを付けることは非現実的ですが、LLMの事前学習は「次のトークンを予測する」という教師なし（自己教師あり）タスクとして設計されており、大量の未ラベルデータから言語の知識を獲得しています。

主な手法として、クラスタリング（K-means、階層クラスタリング）、次元削減（PCA、t-SNE、UMAP）、生成モデル（VAE、GAN）、自己教師あり学習（Self-supervised Learning）などがあります。embeddingの学習も教師なし学習の一形態です。contrastive-learningは自己教師あり学習の代表的手法であり、CLIPなどのモデルはこの原理で画像とテキストを統合的に表現することを学習します。`,
    relatedSlugs: ["machine-learning", "deep-learning", "embedding", "pretraining", "supervised-learning"],
    sources: [
      {
        title: "Unsupervised learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Unsupervised_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "CS229: Machine Learning - Stanford University",
        url: "https://cs229.stanford.edu/",
        publisher: "Stanford University",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "encoder-decoder",
    term: "エンコーダーデコーダー",
    reading: "エンコーダーデコーダー",
    category: "基礎概念",
    summary:
      "エンコーダーデコーダーとは、入力を固定長のベクトルに圧縮（エンコード）し、そこから出力を生成（デコード）するアーキテクチャです。機械翻訳・要約・テキスト生成の基本構造として広く用いられています。",
    description: `エンコーダーデコーダー（Encoder-Decoder）とは、入力データを潜在的な表現（ベクトル）に圧縮するエンコーダーと、その表現から目的の出力を生成するデコーダーを組み合わせたニューラルネットワークアーキテクチャです。2014年にSutskeverらがseq2seqモデルとして提案し、機械翻訳のブレークスルーをもたらしました。

このアーキテクチャが重要な理由は、入力と出力の長さが異なるシーケンス変換タスクを自然に扱えるためです。翻訳（英語→日本語）、要約（長文→短文）、音声認識（音声波形→テキスト）など、現代のNLPタスクの多くがこの構造をベースにしています。

transformerはエンコーダーデコーダー構造をAttentionメカニズムで大幅に改良したアーキテクチャです。BERTはエンコーダーのみ、GPTはデコーダーのみ、T5・BARTはエンコーダーデコーダー両方を持つ構造として設計されています。LLMの多くはデコーダーオンリー構造を採用しており、次のトークンを順次生成することでテキストを出力します。embeddingの生成にはエンコーダー型が、テキスト生成にはデコーダー型が適しています。`,
    relatedSlugs: ["transformer", "attention-mechanism", "embedding", "natural-language-processing"],
    sources: [
      {
        title: "Sequence to Sequence Learning with Neural Networks",
        url: "https://arxiv.org/abs/1409.3215",
        publisher: "arXiv / Sutskever et al. (2014)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Encoder-decoder architecture - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Seq2seq",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "contrastive-learning",
    term: "対照学習",
    reading: "たいしょうがくしゅう",
    category: "基礎概念",
    summary:
      "対照学習とは、類似サンプルを近づけ、非類似サンプルを遠ざけることで意味のある表現を学習する手法です。CLIPやSimCLRの基盤技術であり、マルチモーダルAIのembeddingに広く活用されています。",
    description: `対照学習（Contrastive Learning）とは、ポジティブペア（意味的に類似したサンプルの組）を潜在空間上で近づけ、ネガティブペア（非類似サンプルの組）を遠ざけることで、データの意味的な構造を捉えたembeddingを学習する手法です。ラベルなしデータを活用できる自己教師あり学習の代表的アプローチです。

対照学習が重要な理由は、ラベルなしデータから高品質な表現を学習できるためです。膨大な画像・テキスト・音声データに正解ラベルを付けることなく、意味的に関連するペアを活用することで、下流タスクに汎用的な特徴表現を獲得できます。

代表的な応用として、OpenAIのCLIP（画像とテキストのembeddingを対照学習で整合）、Google SimCLR（画像拡張を用いたビジュアル表現学習）、文埋め込みモデルのContriever等があります。vision-language-modelの多くはCLIPの対照学習で画像・テキスト表現を統合し、semantic-searchやzero-shot-learningを実現しています。fine-tuningと組み合わせることで特定ドメインへの適応も可能です。`,
    relatedSlugs: ["embedding", "fine-tuning", "deep-learning", "vision-language-model", "unsupervised-learning"],
    sources: [
      {
        title: "A Simple Framework for Contrastive Learning of Visual Representations",
        url: "https://arxiv.org/abs/2002.05709",
        publisher: "arXiv / Chen et al. (2020)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Learning Transferable Visual Models From Natural Language Supervision (CLIP)",
        url: "https://arxiv.org/abs/2103.00020",
        publisher: "arXiv / OpenAI (2021)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-search",
    term: "AI検索",
    reading: "エーアイけんさく",
    category: "実装",
    summary:
      "AI検索とは、LLMを組み込んで自然言語での質問に直接回答する次世代検索エンジンです。Perplexity AI、Google AI Overviewsが代表例で、従来のリンク一覧型検索を変革しています。",
    description: `AI検索（AI Search）とは、LLMと検索エンジン技術を統合し、ユーザーの質問に対してリンク一覧ではなく自然言語による直接回答を提供する次世代の検索サービスです。バックグラウンドでWebを検索・取得し、LLMがコンテンツを読み取って回答を生成するRAGパイプラインが基本構造です。

AI検索が注目される理由は、従来の検索エンジンでは複数のWebページを読み比べる必要があったのに対し、AI検索は情報を統合した回答を即座に提供できるためです。「最新のiPhoneのスペックを比較して」「〇〇の税制改正のポイントは？」といった複合的な質問に、出典を示しながら回答できます。

代表サービスとして、Perplexity AI（専業AI検索、出典引用付き回答）、Google AI Overviews（旧SGE、検索結果上部にAI回答を表示）、Microsoft Bing（Copilot統合）などがあります。実装上の課題として、ハルシネーション（grounding不足による誤情報）、最新情報へのアクセス（context-windowの制約）、著作権問題などが議論されています。ragとsemantic-searchの技術が基盤となっています。`,
    relatedSlugs: ["rag", "retrieval", "grounding", "llm", "semantic-search"],
    sources: [
      {
        title: "Perplexity AI",
        url: "https://www.perplexity.ai/",
        publisher: "Perplexity AI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Google AI Overviews",
        url: "https://blog.google/products/search/generative-ai-google-search-may-2024/",
        publisher: "Google",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "data-poisoning",
    term: "データポイズニング",
    reading: "データポイズニング",
    category: "法務・倫理",
    summary:
      "データポイズニングとは、学習データに悪意あるサンプルを混入させてモデルの挙動を意図的に改ざんする攻撃手法です。AIシステムのセキュリティリスクとして、OWASP LLM Top 10にも挙げられています。",
    description: `データポイズニング（Data Poisoning）とは、AIモデルの学習データセットに悪意あるサンプルを意図的に混入させ、モデルの予測精度を低下させたり、特定の入力に対して攻撃者の意図した誤った出力を生成させたりする攻撃手法です。モデルが悪意ある「毒」を含んだデータを学習してしまうことから「ポイズニング（毒入れ）」と呼ばれます。

データポイズニングが深刻な理由は、学習データの汚染がモデルの挙動に恒久的な悪影響を与えるためです。通常のセキュリティ攻撃とは異なり、モデルを再学習するまで問題が残存します。特に、インターネット上のデータを大規模に収集して学習するLLMでは、攻撃者がWebコンテンツを事前に改ざんする「バックドア攻撃」のリスクが指摘されています。

代表的な攻撃シナリオとして、特定のトリガーフレーズを含む入力で有害な出力を生成させるバックドア攻撃、モデルの分類精度を全般的に低下させるクリーンラベル攻撃などがあります。防御策として、データクレンジング、異常検知、federated learningの活用、学習データのサプライチェーン管理が重要です。ai-governanceの観点からも、学習データの出所とセキュリティは重要なコンプライアンス課題です。`,
    relatedSlugs: ["bias", "ai-governance", "red-teaming", "alignment", "privacy"],
    sources: [
      {
        title: "OWASP Top 10 for Large Language Model Applications",
        url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        publisher: "OWASP",
        accessedAt: "2026-02-26",
      },
      {
        title: "Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations",
        url: "https://csrc.nist.gov/publications/detail/white-paper/2023/01/12/adversarial-machine-learning-taxonomy-and-terminology/draft",
        publisher: "NIST",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "adversarial-attack",
    term: "敵対的攻撃",
    reading: "てきたいてきこうげき",
    category: "法務・倫理",
    summary:
      "敵対的攻撃とは、人間には知覚されにくい微小な摂動をデータに加えてAIモデルを誤分類させる攻撃手法です。画像認識・音声認識・LLMなど幅広いAIシステムの堅牢性に関わる重要なセキュリティ課題です。",
    description: `敵対的攻撃（Adversarial Attack）とは、機械学習モデルに対して、人間の知覚では検出しにくい微小な変動（敵対的摂動）を入力データに加えることで、モデルを意図的に誤分類・誤動作させる攻撃手法です。2014年にGoodfellowらが「敵対的サンプル（Adversarial Examples）」として発表し、AIセキュリティの重要な研究分野となりました。

敵対的攻撃が重要な理由は、高精度なAIシステムであっても意図的な攻撃に対して脆弱であることが示されたためです。画像分類モデルにピクセル単位のノイズを加えるだけでパンダをテナガザルと誤分類させたり、自動運転の標識認識を欺いたりすることが可能です。医療診断・自動運転・金融不正検知など、高信頼性が求められる場面での影響は特に深刻です。

LLMの文脈では、prompt-injectionやjailbreakも敵対的攻撃の一形態とみなせます。攻撃の種類として、モデルへのアクセス方法によりホワイトボックス攻撃（内部情報あり）とブラックボックス攻撃（外部からのみ）に分類されます。防御手法としては、Adversarial Training（敵対的サンプルを含めた再学習）、入力のランダム化、認定ロバスト性（Certified Robustness）などが研究されています。`,
    relatedSlugs: ["red-teaming", "jailbreak", "data-poisoning", "bias", "ai-governance"],
    sources: [
      {
        title: "Explaining and Harnessing Adversarial Examples",
        url: "https://arxiv.org/abs/1412.6572",
        publisher: "arXiv / Goodfellow et al. (2014)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Adversarial machine learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Adversarial_machine_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "agentic-workflow",
    term: "エージェントワークフロー",
    reading: "エージェントワークフロー",
    category: "実装",
    summary:
      "エージェントワークフローとは、複数のAIエージェントが協調・逐次実行してタスクを完遂するシステム設計パターンです。コーディング・調査・承認など役割分担した複数エージェントが連携し、複雑なタスクを自律的に遂行します。",
    description: `エージェントワークフロー（Agentic Workflow）とは、単一のLLM呼び出しで完結させず、複数のAIエージェントが役割を分担しながら協調・逐次実行することで複雑なタスクを完遂するシステム設計パターンです。Andrew Ngが2024年に「AIの未来はエージェント的ワークフローにある」と提唱したことで広く注目されました。

エージェントワークフローが重要な理由は、1回のLLM呼び出しでは解決が難しいタスクを、計画・実行・検証のサイクルに分解することで高品質な成果を実現できるためです。例えばコード生成では「設計エージェント→実装エージェント→テストエージェント→レビューエージェント」のように分業させると、1回で完成させようとするより大幅に品質が向上することが示されています。

主な設計パターンとして、Reflection（自己レビュー・修正ループ）、Tool Use（外部ツール活用）、Planning（タスク分解・計画立案）、Multi-agent Collaboration（専門エージェント間の協調）の4つが挙げられます。langchainやAnthropicのagent SDK等のフレームワークが実装を支援します。orchestrationの設計がシステムの信頼性と効率性を左右する重要な要素です。`,
    relatedSlugs: ["agent", "multi-agent", "orchestration", "tool-use", "autonomous-agent", "langchain"],
    sources: [
      {
        title: "What's next for AI agentic workflows",
        url: "https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/",
        publisher: "Andrew Ng / DeepLearning.AI (2024)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Building effective agents - Anthropic",
        url: "https://www.anthropic.com/research/building-effective-agents",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "context-engineering",
    term: "コンテキストエンジニアリング",
    reading: "コンテキストエンジニアリング",
    category: "実装",
    summary:
      "コンテキストエンジニアリングとは、LLMのコンテキストウィンドウに入れる情報を戦略的に設計・最適化する実践手法です。プロンプトエンジニアリングの発展形として、RAGやメモリ管理を含む包括的な情報設計が求められます。",
    description: `コンテキストエンジニアリング（Context Engineering）とは、LLMのコンテキストウィンドウに何を・どのような順序で・どのような形式で入れるかを戦略的に設計・最適化する実践手法です。Shopify CEOのTobi Lutkeが2025年に「プロンプトエンジニアリングという言葉は矮小化しすぎている。コンテキストエンジニアリングこそが重要なスキルだ」と述べたことで注目が高まりました。

コンテキストエンジニアリングが重要な理由は、LLMの出力品質がコンテキストの設計に大きく依存するためです。同じLLMでも、何を文脈として与えるかによって回答の正確性・適切性・有用性が劇的に変わります。特にagentやRAGシステムでは、ツール定義・検索結果・会話履歴・メモリなどをいかに効率的に組み合わせるかが性能を左右します。

具体的な設計要素として、system-promptの設計（役割・制約・出力形式の定義）、ragによる関連情報の動的注入、会話履歴の圧縮・要約（context-windowの制約対応）、few-shot-learningの例示、grounding情報の付加などが含まれます。prompt-cachingやstructured-outputとの組み合わせでコストと品質を最適化することも重要な実践です。`,
    relatedSlugs: ["prompt-engineering", "context-window", "rag", "system-prompt", "grounding"],
    sources: [
      {
        title: "Context Engineering - Simon Willison's Weblog",
        url: "https://simonwillison.net/2025/Jun/27/context-engineering/",
        publisher: "Simon Willison (2025)",
        accessedAt: "2026-02-26",
      },
      {
        title: "What is context engineering?",
        url: "https://www.anthropic.com/news/context-engineering",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "bert",
    term: "BERT（バート）",
    reading: "バート",
    category: "モデル",
    summary:
      "BERTとは、Googleが2018年に開発した双方向Transformerエンコーダモデルです。文脈を左右両方向から読む設計で高精度な自然言語理解（NLU）を実現し、多くのNLPタスクで当時の最高性能を記録しました。",
    description: `BERT（Bidirectional Encoder Representations from Transformers）とは、Googleが2018年に発表した事前学習済みNLPモデルです。従来のGPTが左から右への一方向の文脈を読むのに対し、BERTはTransformerのエンコーダーを使って文章を双方向に読み込むことで、より深い文脈理解を実現しました。

BERTが重要な理由は、「マスク言語モデリング（MLM）」と「次文予測（NSP）」という2つの事前学習タスクを通じて、ラベルなし大規模テキストから豊かな言語表現を学習し、少量のラベルデータでfine-tuningするだけで多様なNLPタスクに高精度を発揮したためです。GLUE・SQuADなど11のNLPベンチマークで当時の最高性能を達成し、事前学習+fine-tuningのパラダイムを確立しました。

BERTの派生モデルとして、RoBERTa（事前学習の最適化）、ALBERT（軽量化）、DistilBERT（knowledge-distillationによる圧縮）、DeBERTa（注意機構の改善）などがあります。日本語対応版としてTohoku大学のJapanese BERTも公開されています。現在はGPT系のデコーダーオンリーLLMが主流ですが、embeddingや文書分類タスクではBERT系エンコーダーモデルが現役で活用されています。`,
    relatedSlugs: ["transformer", "natural-language-processing", "embedding", "pretraining", "attention-mechanism"],
    sources: [
      {
        title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
        url: "https://arxiv.org/abs/1810.04805",
        publisher: "arXiv / Devlin et al. (2018)",
        accessedAt: "2026-02-26",
      },
      {
        title: "BERT - Wikipedia",
        url: "https://en.wikipedia.org/wiki/BERT_(language_model)",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "federated-learning",
    term: "連合学習",
    reading: "れんごうがくしゅう",
    category: "基礎概念",
    summary:
      "連合学習とは、データを中央サーバに集めずに各デバイス・組織でローカル学習し、モデルの更新情報だけを共有するプライバシー保護型の分散機械学習手法です。スマートフォンや医療データの学習に活用されています。",
    description: `連合学習（Federated Learning）とは、ユーザーのデータを中央サーバに集約することなく、各クライアントデバイス（スマートフォン・病院サーバ等）でローカルにモデルを訓練し、モデルの重み更新（勾配）だけをサーバに送信して集約するプライバシー保護型の分散機械学習手法です。Googleが2017年に提唱しました。

連合学習が重要な理由は、GDPRなどプライバシー規制の強化や、医療・金融など機密性の高い分野でのAI活用において、生データを外部に出さずにモデルを改善できるためです。スマートフォンの入力予測（Gboard）やiOSのオンデバイス学習にも採用されています。

主な課題として、通信コスト（各クライアントとの頻繁な通信）、Non-IID問題（各クライアントのデータ分布が不均一）、悪意あるクライアントによるmodel poisoning攻撃への対策があります。差分プライバシー（Differential Privacy）と組み合わせることで、更新情報からの個人データ復元リスクをさらに低減できます。医療分野では、複数病院が患者データを共有せずに共同でAI診断モデルを構築するユースケースが進んでいます。`,
    relatedSlugs: ["machine-learning", "deep-learning", "privacy", "ai-governance"],
    sources: [
      {
        title: "Communication-Efficient Learning of Deep Networks from Decentralized Data",
        url: "https://arxiv.org/abs/1602.05629",
        publisher: "arXiv / McMahan et al. (2017)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Federated learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Federated_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "synthetic-data",
    term: "合成データ",
    reading: "ごうせいデータ",
    category: "実装",
    summary:
      "合成データとは、実際のデータの代わりにAIや統計的手法で人工的に生成したデータです。プライバシー保護・希少データの補完・モデル評価に活用され、LLMの学習データ生成にも応用されています。",
    description: `合成データ（Synthetic Data）とは、実際に収集・観測したデータではなく、生成AI・統計モデル・シミュレーションなどを用いて人工的に生成したデータのことです。個人情報を含まない代替データとして、またはデータ不足を補う手段として注目されています。

合成データが重要な理由は、現実データの収集・アノテーションコスト削減とプライバシー保護の両立が可能なためです。医療画像（希少疾患の症例を生成）、自動運転（シミュレーション環境でのデータ生成）、金融（異常取引の学習サンプル生成）など、実データの取得が困難または危険な分野で活用が進んでいます。

LLMの文脈では、既存LLMを使って高品質な学習データを自動生成する「self-play」や「instruction-tuning用データ生成」が一般化しています。例えばMicrosoftのPhi-1モデルは「教科書品質」の合成データのみで学習し、はるかに大きいモデルに匹敵する性能を示しました。一方で、合成データで学習したモデルから合成データを生成する「モデル崩壊（Model Collapse）」リスクも研究されており、実データとの組み合わせが推奨されています。`,
    relatedSlugs: ["privacy", "fine-tuning", "generative-ai", "benchmark", "data-poisoning"],
    sources: [
      {
        title: "Synthetic data - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Synthetic_data",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Textbooks Are All You Need (Phi-1)",
        url: "https://arxiv.org/abs/2306.11644",
        publisher: "arXiv / Microsoft Research (2023)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "responsible-ai",
    term: "責任あるAI",
    reading: "せきにんあるエーアイ",
    category: "法務・倫理",
    summary:
      "責任あるAIとは、AIシステムを公平・透明・説明可能・安全・プライバシー保護の観点で設計・運用するための原則と実践の総称です。MicrosoftやGoogleなど主要企業が独自のResponsible AI原則を策定しています。",
    description: `責任あるAI（Responsible AI）とは、AIシステムを社会的に有益かつ害のない形で設計・開発・運用するための原則・ガイドライン・プロセスの総称です。公平性（Fairness）・信頼性・安全性（Reliability & Safety）・プライバシー・包摂性（Inclusiveness）・透明性（Transparency）・説明責任（Accountability）が主要な柱として挙げられます。

責任あるAIが重要な理由は、AIの普及に伴いバイアスによる差別、不透明な意思決定、プライバシー侵害、安全リスクが現実の問題として顕在化してきたためです。採用選考・与信判断・刑事司法など人の人生に影響する領域でのAI活用において、公平性と説明責任が法的にも求められています。

主要企業の取り組みとして、Microsoft Responsible AI Standard（6原則）、Google PAIR Guidebook、Meta AI Responsibility Framework、Anthropic Constitutional AIなどがあります。EU AI Actでは高リスクAIシステムへの透明性・ログ記録要件が義務化されており、日本でもAI事業者ガイドラインが整備されています。alignment・constitutional-aiはResponsible AIの技術的実装アプローチの一つです。`,
    relatedSlugs: ["ai-governance", "bias", "alignment", "ai-regulation", "constitutional-ai"],
    sources: [
      {
        title: "Microsoft Responsible AI Principles",
        url: "https://www.microsoft.com/en-us/ai/responsible-ai",
        publisher: "Microsoft",
        accessedAt: "2026-02-26",
      },
      {
        title: "Responsible AI practices - Google",
        url: "https://ai.google/responsibility/responsible-ai-practices/",
        publisher: "Google",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "model-card",
    term: "モデルカード",
    reading: "モデルカード",
    category: "法務・倫理",
    summary:
      "モデルカードとは、AIモデルの用途・性能・限界・倫理的考慮事項を記述した透明性文書です。Googleが2019年に提唱し、Hugging Faceでの標準ドキュメントとして普及しています。",
    description: `モデルカード（Model Card）とは、機械学習モデルについて、その意図した用途・評価結果・公平性の考慮・限界・倫理的リスクなどを体系的に文書化した透明性レポートです。Mitchellらが2019年に「Model Cards for Model Reporting」として提唱し、AIの透明性向上のベストプラクティスとして広まりました。

モデルカードが重要な理由は、モデルを利用する開発者・研究者・政策立案者がそのモデルの適切な使い方と限界を正確に理解できるためです。特に医療・採用・信用評価などハイリスク分野でのAI活用において、どのようなデータで学習されどのような条件でテストされたかの透明性は、倫理的・法的観点から不可欠です。

標準的なモデルカードに含まれる項目として、モデルの詳細（アーキテクチャ・学習データ）、意図された用途と禁止用途、評価結果（全体性能と属性別の公平性評価）、倫理的考慮事項、既知の制限などがあります。Hugging Faceではモデル公開時のモデルカード記載が推奨されており、多くのオープンソースモデルで採用されています。EU AI Actでも高リスクAIへの技術文書作成が義務化されており、model-cardはai-governanceの実践ツールとして機能します。`,
    relatedSlugs: ["responsible-ai", "bias", "evaluation-metrics", "ai-governance", "benchmark"],
    sources: [
      {
        title: "Model Cards for Model Reporting",
        url: "https://arxiv.org/abs/1810.03993",
        publisher: "arXiv / Mitchell et al. (2019)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Model Cards - Hugging Face Documentation",
        url: "https://huggingface.co/docs/hub/model-cards",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "llmops",
    term: "LLMOps",
    reading: "エルエルエムオプス",
    category: "実装",
    summary:
      "LLMOpsとは、LLMベースアプリケーションの本番環境での運用・監視・評価・継続改善に関する実践（LLM Operations）です。MLOpsをLLM特有の課題に拡張した概念で、プロンプト管理や出力評価が中心的なテーマです。",
    description: `LLMOps（LLM Operations）とは、LLMを活用したアプリケーションを本番環境で安定的に運用するための実践・ツール・プロセスの総称です。MLOps（機械学習運用）の考え方をLLM特有の課題に合わせて拡張したものです。

LLMOpsが重要な理由は、LLMアプリケーションの本番運用にはMLOpsとは異なる独自の課題があるためです。従来のMLと異なり、LLMではモデル再学習よりもプロンプト改善が主な改善サイクルとなります。また出力の品質評価が難しく（正解が一意ではない）、ハルシネーションの監視、コスト（トークン消費量）管理、レイテンシ最適化なども重要なオペレーション課題です。

具体的な実践領域として、プロンプトバージョン管理（実験追跡）、出力品質のオンライン評価（LLM-as-a-Judge）、RAGパイプラインの監視、A/Bテスト、コスト・レイテンシのモニタリング、ガードレール（有害出力フィルタ）などが含まれます。ツールとしてはLangSmith、Phoenix（Arize）、Langfuse、Weights & Biases Promptsなどが普及しています。prompt-cachingはLLMOpsにおけるコスト最適化の重要な手法の一つです。`,
    relatedSlugs: ["llm", "inference", "evaluation-metrics", "prompt-caching", "retrieval"],
    sources: [
      {
        title: "LLMOps: Operationalizing Large Language Models",
        url: "https://www.databricks.com/glossary/llmops",
        publisher: "Databricks",
        accessedAt: "2026-02-26",
      },
      {
        title: "LLMOps Course - DeepLearning.AI",
        url: "https://www.deeplearning.ai/short-courses/llmops/",
        publisher: "DeepLearning.AI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "automl",
    term: "AutoML（オートML）",
    reading: "オートエムエル",
    category: "実装",
    summary:
      "AutoMLとは、機械学習のモデル選択・ハイパーパラメータ調整・特徴量エンジニアリングなどを自動化する手法です。専門知識がなくてもMLモデルを構築できる民主化ツールとして、Google AutoMLなどが普及しています。",
    description: `AutoML（Automated Machine Learning）とは、機械学習パイプラインの構築に必要な専門的作業—特徴量エンジニアリング、モデルアーキテクチャ選択、ハイパーパラメータ最適化、アンサンブル学習—を自動化する手法・ツールの総称です。機械学習の民主化と専門家の作業効率化を目的としています。

AutoMLが重要な理由は、高品質なMLモデル構築に必要な専門知識と試行錯誤のコストを大幅に削減できるためです。データサイエンティストが手動で行っていたモデル選択・チューニング作業を自動化することで、ドメイン専門家がコードなしでモデルを構築したり、データサイエンティストが反復作業を自動化して高次の設計に集中できます。

主なAutoMLツールとして、Google AutoML（クラウドサービス）、H2O AutoML（オープンソース）、Auto-sklearn（scikit-learnベース）、Microsoft Azure AutoML、Amazon SageMaker Autopilotなどがあります。Neural Architecture Search（NAS）はディープラーニング向けAutoMLの一形態で、EfficientNetなど優れたアーキテクチャを自動発見しました。LLM時代のAutoMLとして、LLMをメタ学習器として使ったプロンプト最適化（DSPy等）も登場しています。`,
    relatedSlugs: ["machine-learning", "deep-learning", "benchmark", "fine-tuning", "neural-network"],
    sources: [
      {
        title: "Automated Machine Learning: Methods, Systems, Challenges",
        url: "https://link.springer.com/book/10.1007/978-3-030-05318-5",
        publisher: "Hutter et al. / Springer (2019)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Google Cloud AutoML Documentation",
        url: "https://cloud.google.com/automl/docs",
        publisher: "Google Cloud",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "self-supervised-learning",
    term: "自己教師あり学習",
    reading: "じこきょうしありがくしゅう",
    category: "基礎概念",
    summary:
      "自己教師あり学習とは、ラベルなしデータから自動生成した疑似ラベルを使って学習する手法です。GPTの「次のトークン予測」やBERTの「マスク言語モデリング」が代表例で、現代のLLM事前学習の基盤技術です。",
    description: `自己教師あり学習（Self-Supervised Learning）とは、人間がアノテーション（ラベル付け）を行わずに、データ自体から自動的に教師信号を生成して学習する手法です。広義の教師なし学習に分類されますが、「自動生成された疑似ラベル」を用いる点で一般的な教師なし学習と区別されます。

自己教師あり学習が重要な理由は、大規模な未ラベルデータからリッチな表現を学習できるためです。インターネット上の膨大なテキスト・画像・動画を活用することで、GPTはウェブテキストから「次のトークンを予測する」という自己教師あり課題を通じて言語の知識を獲得し、BERTはランダムにマスクした単語を予測する「マスク言語モデリング」で文脈理解能力を習得しました。

代表的な自己教師あり学習タスクとして、Causal Language Modeling（次のトークン予測、GPT系）、Masked Language Modeling（マスク穴埋め、BERT系）、Contrastive Learning（類似サンプルの近傍化、SimCLR・CLIP）、Masked Autoencoders（MAE、画像パッチのマスク予測）などがあります。現代のLLMのpretrainingはほぼすべて自己教師あり学習によるもので、この技術なしには現在の生成AIの発展はありませんでした。`,
    relatedSlugs: ["unsupervised-learning", "pretraining", "contrastive-learning", "bert", "llm"],
    sources: [
      {
        title: "Self-supervised learning: The dark matter of intelligence",
        url: "https://ai.meta.com/blog/self-supervised-learning-the-dark-matter-of-intelligence/",
        publisher: "Meta AI / Yann LeCun (2021)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Self-supervised learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Self-supervised_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "scaling-law",
    term: "スケーリング則",
    reading: "スケーリングそく",
    category: "基礎概念",
    summary:
      "スケーリング則とは、モデルサイズ・学習データ量・計算量を増やすとモデル性能がべき乗則的に向上するという経験則です。現代のLLM開発戦略の理論的根拠となっており、GPT-4やGemini Ultra誕生の背景にあります。",
    description: `スケーリング則（Scaling Laws）とは、大規模言語モデルの性能（損失値）がモデルのパラメータ数・学習データ量・計算量（FLOPs）のそれぞれに対してべき乗則（Power Law）に従って改善するという経験的な法則です。OpenAIのKaplanらが2020年に発表し、Anthropicも独自の研究を発表しています。

スケーリング則が重要な理由は、「スケールアップすれば性能が上がる」という予測可能な改善経路を示し、LLM開発への大規模投資を正当化する理論的根拠となったためです。この知見に基づき、GPT-3（175B）→GPT-4、PaLM（540B）→Gemini Ultraへの大型化が進みました。

2022年にDeepMindのHoffmannらが発表した「Chinchilla論文」は、「従来のモデルは計算量に対してモデルが大きすぎてデータが少ない」と指摘し、最適な計算効率のためにはモデルサイズとデータ量をほぼ同じ比率でスケールさせるべきと示しました。これによりLLaMAのように比較的小さいモデルでも大量データで学習することで高性能を達成する設計思想が広まりました。一方、スケーリングだけでは限界があるという見方も強まり、アーキテクチャ改善・reasoning-modelへの方向転換も進んでいます。`,
    relatedSlugs: ["llm", "pretraining", "parameter", "deep-learning", "foundation-model"],
    sources: [
      {
        title: "Scaling Laws for Neural Language Models",
        url: "https://arxiv.org/abs/2001.08361",
        publisher: "arXiv / Kaplan et al. / OpenAI (2020)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Training Compute-Optimal Large Language Models (Chinchilla)",
        url: "https://arxiv.org/abs/2203.15556",
        publisher: "arXiv / Hoffmann et al. / DeepMind (2022)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "gpt-4o",
    term: "GPT-4o",
    reading: "ジーピーティーフォーオー",
    category: "モデル",
    summary:
      "GPT-4oとは、OpenAIが2024年5月に公開したマルチモーダルモデルです。テキスト・画像・音声をネイティブに統合処理し、従来のGPT-4 Turboと比較して2倍の速度・半額のコストで同等以上の性能を実現しました。",
    description: `GPT-4o（GPT-4 omni）とは、OpenAIが2024年5月に発表したフラッグシップのマルチモーダルAIモデルです。「omni（全て）」の名が示す通り、テキスト・画像・音声を別々のモデルに渡すのではなく、単一のエンドツーエンドモデルとしてネイティブに統合処理する設計が特徴です。

GPT-4oが重要な理由は、パフォーマンスを維持しながらコストと速度を大幅に改善し、音声対話の自然性を飛躍的に高めたためです。従来のChatGPTの音声機能は「音声→テキスト変換→LLM→テキスト→音声合成」というパイプラインでしたが、GPT-4oはエンド・トゥ・エンドで音声を処理するため、感情やトーンの変化・割り込みへの対応など人間らしい会話が可能になりました。

GPT-4 Turboと比較して、推論速度が約2倍、APIコストが約50%削減、GPT-4レベルの英語性能を維持しつつ非英語性能も向上。さらに画像入力の精度向上、長い文書の処理能力改善が図られています。2024年後半にはGPT-4o miniも公開され、低コスト・高速な小型モデルとしてAPIの主力となっています。o1・o3などreasoning-modelシリーズと並ぶOpenAIの主要製品ラインアップです。`,
    relatedSlugs: ["gpt", "llm", "multimodal", "chatgpt", "reasoning-model"],
    sources: [
      {
        title: "Hello GPT-4o",
        url: "https://openai.com/index/hello-gpt-4o/",
        publisher: "OpenAI (2024)",
        accessedAt: "2026-02-26",
      },
      {
        title: "GPT-4o System Card",
        url: "https://openai.com/index/gpt-4o-system-card/",
        publisher: "OpenAI (2024)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "gan",
    term: "GAN（敵対的生成ネットワーク）",
    reading: "ガン",
    category: "モデル",
    summary:
      "GANとは、生成器と識別器が互いに競い合うことで高品質なデータを生成するニューラルネットワーク（Generative Adversarial Network）です。2014年にGoodfellowが提案し、リアルな画像生成AIの先駆けとなりました。",
    description: `GAN（Generative Adversarial Network：敵対的生成ネットワーク）とは、データを生成する「生成器（Generator）」と本物か偽物かを識別する「識別器（Discriminator）」の2つのニューラルネットワークをゲーム理論的に競わせることで、本物に近いデータを生成する手法です。Goodfellowらが2014年に提案し、機械学習史上最も重要なアイデアの一つとされます。

GANが重要な理由は、以前のAIには難しかった「リアルな新規データの生成」を実現したためです。顔写真・風景・アート作品などを高解像度で生成できることが示され、画像生成AIブームの礎となりました。StyleGAN、BigGAN、CycleGANなど多数の派生モデルが開発されました。

現在は画像生成の主流がdiffusion-modelに移行しており、Stable DiffusionやDALL-E 3はGANではなく拡散モデルを採用しています。ただしGANは生成速度の速さという利点があり、超解像・動画生成・データ拡張・医療画像合成などの分野で引き続き活用されています。また敵対的サンプル（adversarial-attack）という概念もGANの研究から派生しました。`,
    relatedSlugs: ["generative-ai", "deep-learning", "diffusion-model", "text-to-image", "neural-network"],
    sources: [
      {
        title: "Generative Adversarial Nets",
        url: "https://arxiv.org/abs/1406.2661",
        publisher: "arXiv / Goodfellow et al. (2014)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Generative adversarial network - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Generative_adversarial_network",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "clip",
    term: "CLIP",
    reading: "クリップ",
    category: "モデル",
    summary:
      "CLIPとは、OpenAIが2021年に開発した画像とテキストを対照学習で結びつけるモデル（Contrastive Language-Image Pre-Training）です。DALL-EやStable Diffusionの基盤技術として、テキストから画像を生成するAIの中核を担います。",
    description: `CLIP（Contrastive Language-Image Pre-Training）とは、OpenAIが2021年に発表したモデルで、インターネット上から収集した4億枚の「画像とテキストのペア」を対照学習（contrastive-learning）で学習し、画像とテキストを同一のベクトル空間に埋め込む能力を獲得したモデルです。

CLIPが重要な理由は、テキストと画像を統一した埋め込み空間で扱えることで、「テキストで画像を検索する」「ゼロショットで画像分類する」「テキストから画像を生成する際のガイド信号として使う」など多様な応用が可能になったためです。ImageNetの分類タスクで、追加のfine-tuningなしにzero-shot-learningで高い精度を達成したことが大きな注目を集めました。

CLIPは現代の画像生成AIの基盤技術として欠かせない存在です。DALL-E・Stable Diffusion・Midjourneyなどのtext-to-imageモデルは、CLIPのテキストエンコーダーを使ってプロンプトの意味を理解し、拡散モデルの生成方向を制御します。また画像検索エンジン、コンテンツモデレーション、vision-language-modelの構築にも広く活用されています。OpenAIはその後CLIPを発展させたSigLIPやOpenCLIPなどのモデルも公開されています。`,
    relatedSlugs: ["contrastive-learning", "vision-language-model", "multimodal", "text-to-image", "embedding"],
    sources: [
      {
        title: "Learning Transferable Visual Models From Natural Language Supervision",
        url: "https://arxiv.org/abs/2103.00020",
        publisher: "arXiv / Radford et al. / OpenAI (2021)",
        accessedAt: "2026-02-26",
      },
      {
        title: "CLIP - OpenAI",
        url: "https://openai.com/research/clip",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "gemini",
    term: "Gemini（ジェミニ）",
    reading: "ジェミニ",
    category: "モデル",
    summary:
      "Geminiとは、Google DeepMindが開発したマルチモーダルLLMシリーズです。Ultra・Pro・Nanoの3スケールで展開し、Gemini 1.5ではロングコンテキスト（最大100万トークン）対応が特徴です。",
    description: `Gemini（ジェミニ）とは、Google DeepMindが2023年12月に発表したマルチモーダル大規模言語モデルシリーズです。テキスト・コード・画像・音声・動画を統合的に処理できるnatively multimodalな設計が特徴で、Ultra・Pro・Nanoの3つのサイズバリアントで提供されました。

Geminiが重要な理由は、Googleが持つ検索・翻訳・YouTube等の大規模サービスとの統合を見据えた、GPT-4に対抗するGoogleの主力AI基盤として位置づけられているためです。GeminiはChatGPTに相当するGoogle製チャットサービス「Gemini（旧Bard）」の基盤モデルでもあります。

Gemini 1.5 Pro（2024年2月発表）では最大100万トークンのコンテキストウィンドウを実現し、長編文書・動画全体・大規模コードベースを一度に処理できるようになりました。Gemini 1.5 Flashは高速・低コストモデルとして、Gemini 2.0では強化されたreasoning能力とマルチモーダル出力（画像・音声生成）を実装。Google AI Studio・Vertex AI経由でAPIも提供されており、日本語性能も継続的に強化されています。`,
    relatedSlugs: ["llm", "multimodal", "vision-language-model", "foundation-model", "reasoning-model"],
    sources: [
      {
        title: "Gemini: A Family of Highly Capable Multimodal Models",
        url: "https://arxiv.org/abs/2312.11805",
        publisher: "arXiv / Google DeepMind (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Gemini - Google DeepMind",
        url: "https://deepmind.google/technologies/gemini/",
        publisher: "Google DeepMind",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "explainability",
    term: "説明可能性（XAI）",
    reading: "せつめいかのうせい",
    category: "法務・倫理",
    summary:
      "説明可能性（XAI）とは、AIモデルがなぜその予測・判断を下したかを人間が理解できるように説明する能力と手法の総称です。医療・金融・法律などハイリスク分野でのAI活用において、信頼性と説明責任の根拠となります。",
    description: `説明可能性（Explainability）とは、機械学習モデルが特定の入力に対してある出力を生成した理由や根拠を、人間が理解できる形で説明する能力・技術・手法の総称です。XAI（Explainable AI）とも呼ばれます。DARPA（米国防高等研究計画局）が2017年にXAIプログラムを立ち上げたことで研究が加速しました。

説明可能性が重要な理由は、ブラックボックスとして機能する深層学習モデルの判断根拠が不透明であることが、医療診断・融資審査・刑事司法など人の権利に影響する意思決定へのAI活用で大きなリスクとなるためです。EU AI Actでは高リスクAIへの説明責任・透明性要件が義務化されており、説明可能性は法的要件にもなっています。

代表的な手法として、LIME（Local Interpretable Model-agnostic Explanations）、SHAP（SHapley Additive exPlanations）、Grad-CAM（画像のどの領域に注目したかの可視化）、Attention Visualization（transformerの注意重みの可視化）などがあります。LLMに対しては、思考の連鎖（cot）を促すことで推論過程を可視化するアプローチが有効ですが、内部の計算過程と出力の整合性については引き続き研究が進んでいます。`,
    relatedSlugs: ["responsible-ai", "bias", "ai-governance", "model-card", "alignment"],
    sources: [
      {
        title: "\"Why Should I Trust You?\": Explaining the Predictions of Any Classifier",
        url: "https://arxiv.org/abs/1602.04938",
        publisher: "arXiv / Ribeiro et al. (2016)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Explainable AI - DARPA",
        url: "https://www.darpa.mil/program/explainable-artificial-intelligence",
        publisher: "DARPA",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "continual-learning",
    term: "継続学習",
    reading: "けいぞくがくしゅう",
    category: "基礎概念",
    summary:
      "継続学習とは、新しいタスクを学習しても過去の知識を忘却しないようにモデルを継続的に更新する機械学習手法です。破滅的忘却（Catastrophic Forgetting）への対処が主要な課題です。",
    description: `継続学習（Continual Learning / Lifelong Learning）とは、モデルが新しいタスクやデータを順次学習しながら、以前に学習した知識を忘れない（破滅的忘却を防ぐ）ための機械学習手法です。人間は過去の経験を保ちながら新しいことを学べますが、ニューラルネットワークは新しいデータで学習すると以前のパラメータが上書きされ、過去の性能が急激に低下する「破滅的忘却（Catastrophic Forgetting）」が起きます。

継続学習が重要な理由は、実世界のAIシステムでは新しい情報・タスクへの対応と既存機能の維持を両立させる必要があるためです。例えばチャットボットに新しいドメイン知識を追加学習させると、以前の会話能力が劣化するという問題が典型例です。

主な解決アプローチとして、Elastic Weight Consolidation（EWC、重要パラメータの変化を制約）、Progressive Networks（新タスク用に新列を追加）、Replay Methods（過去データのリプレイで忘却を防ぐ）、LoRAなどのPEFT手法（既存重みを固定しアダプタのみ追加）があります。LLMのfine-tuningでも継続学習の問題は顕在しており、新タスクへの適応と汎用性の保持のバランスが実装上の重要課題です。`,
    relatedSlugs: ["fine-tuning", "pretraining", "machine-learning", "reinforcement-learning", "sft"],
    sources: [
      {
        title: "Overcoming catastrophic forgetting in neural networks",
        url: "https://arxiv.org/abs/1612.00796",
        publisher: "arXiv / Kirkpatrick et al. (2017)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Continual learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Continual_learning",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "peft",
    term: "PEFT（パラメータ効率的ファインチューニング）",
    reading: "ペフト",
    category: "基礎概念",
    summary:
      "PEFTとは、モデルの全パラメータを更新せず一部のみを調整して効率的にfine-tuningする手法群（Parameter-Efficient Fine-Tuning）です。LoRA・Adapter・Prefix Tuningが代表例で、少ないGPUリソースで大規模モデルを適応できます。",
    description: `PEFT（Parameter-Efficient Fine-Tuning）とは、数十億〜数千億のパラメータを持つ大規模言語モデルを、全パラメータを更新するのではなく、追加する少数のパラメータまたは一部のパラメータだけを調整することで、計算・メモリコストを大幅に削減しながらfine-tuningする手法群の総称です。

PEFTが重要な理由は、フルfine-tuningには膨大なGPU・メモリ・時間が必要であり、中小企業や研究者が大規模モデルを自分のユースケースに適応させる際の主要なボトルネックとなっているためです。PEFTを使えば、コンシューマーグレードのGPU1枚で70BクラスのLLMをfine-tuningすることも可能になります。

代表的なPEFT手法として、LoRA（低ランク行列分解で差分重みを学習）、Adapter（各Transformer層に小さなアダプタ層を挿入）、Prefix Tuning（入力の先頭に学習可能なプレフィックスを付加）、Prompt Tuning（ソフトプロンプトを学習）、IA3（スケーリングベクトルのみ追加）などがあります。Hugging Face PEFTライブラリがこれらの実装を統一的に提供しており、quantizationと組み合わせたQLoRAは特に普及しています。`,
    relatedSlugs: ["lora", "fine-tuning", "sft", "parameter", "quantization"],
    sources: [
      {
        title: "LoRA: Low-Rank Adaptation of Large Language Models",
        url: "https://arxiv.org/abs/2106.09685",
        publisher: "arXiv / Hu et al. (2022)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Hugging Face PEFT Library",
        url: "https://huggingface.co/docs/peft/index",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "word2vec",
    term: "Word2Vec",
    reading: "ワードトゥベック",
    category: "基礎概念",
    summary:
      "Word2Vecとは、単語を意味的な高次元ベクトル空間に埋め込む手法です。「king - man + woman ≈ queen」のような意味演算が可能で、現代のembeddingの原型として自然言語処理の発展に大きく貢献しました。",
    description: `Word2Vec（Word to Vector）とは、Googleのミコロフらが2013年に発表した、単語を固定次元の実数ベクトルに変換する手法です。大量のテキストから「周辺の単語が似ている単語は意味も似ている」という分布仮説に基づき、意味的・文法的な関係を捉えたベクトル表現（Word Embedding）を学習します。

Word2Vecが重要な理由は、単語の「意味」をコンピュータが扱える数値ベクトルとして表現する手法を実用化し、NLPタスクの性能を飛躍的に向上させたためです。「王様 - 男性 + 女性 ≈ 女王」「東京 - 日本 + フランス ≈ パリ」のようなベクトル演算で意味の類推ができることを示し、当時の機械学習コミュニティに大きな衝撃を与えました。

Word2Vecには2つのアーキテクチャがあります。CBOW（Continuous Bag-of-Words、周辺単語から中心単語を予測）とSkip-gram（中心単語から周辺単語を予測）です。後継手法としてGloVe・fastTextなどが登場し、現在はBERTやGPT系モデルの文脈依存型embeddingが主流です。しかしWord2Vecの概念はembeddingの基礎として今も教育・研究で広く参照され、vector-dbやsemantic-searchの原理的な理解にも欠かせません。`,
    relatedSlugs: ["embedding", "natural-language-processing", "deep-learning", "transformer", "bert"],
    sources: [
      {
        title: "Efficient Estimation of Word Representations in Vector Space",
        url: "https://arxiv.org/abs/1301.3781",
        publisher: "arXiv / Mikolov et al. (2013)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Word2vec - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Word2vec",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-safety",
    term: "AI安全性",
    reading: "エーアイあんぜんせい",
    category: "法務・倫理",
    summary:
      "AI安全性とは、高度なAIシステムが意図せず人間に害を与えないよう設計・制御するための研究分野です。アライメント・解釈可能性・ロバスト性が主要テーマで、Anthropic・OpenAIの研究の中核をなします。",
    description: `AI安全性（AI Safety）とは、現在および将来の高度なAIシステムが人間の意図に沿って安全に動作し、意図しない有害な結果を生じさせないようにするための研究・工学的実践の分野です。短期的な安全性（現行システムのバイアス・悪用防止）から長期的な安全性（超高度AIの制御可能性）まで広範な問題を扱います。

AI安全性が重要な理由は、LLMをはじめとするAIシステムが実社会で広く使われるようになるにつれ、ハルシネーション・バイアス・プロンプトインジェクション・悪用リスクが現実の問題として顕在化し、さらに将来の高度AIシステムへの備えも必要とされているためです。Anthropicは「AI安全に焦点を当てた企業」として設立され、Constitutional AIやInterpretabilityなどの研究を主導しています。

主要な研究テーマとして、alignment（人間の意図との整合）、解釈可能性（モデル内部の理解）、ロバスト性（adversarial-attackへの耐性）、脱線防止（jailbreak・prompt-injection対策）、評価（harmful outputの検出）があります。red-teamingはAI安全性の実践的手法として各社のモデル開発プロセスに組み込まれています。OpenAI Safety Team、DeepMind Safety、Anthropic Safety Researchなどが主要な研究機関です。`,
    relatedSlugs: ["alignment", "responsible-ai", "ai-governance", "constitutional-ai", "red-teaming"],
    sources: [
      {
        title: "Human Compatible: Artificial Intelligence and the Problem of Control",
        url: "https://en.wikipedia.org/wiki/Human_Compatible",
        publisher: "Stuart Russell / Viking Press (2019)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Core Views on AI Safety - Anthropic",
        url: "https://www.anthropic.com/news/core-views-on-ai-safety",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "prompt-tuning",
    term: "プロンプトチューニング",
    reading: "プロンプトチューニング",
    category: "実装",
    summary:
      "プロンプトチューニングとは、モデルの重みを固定したまま、学習可能なソフトプロンプト（連続ベクトル）を入力の先頭に付加してタスクを適応させるPEFT手法です。人間が書く固定テキストのプロンプトと異なり、勾配で最適化されます。",
    description: `プロンプトチューニング（Prompt Tuning）とは、大規模言語モデルのパラメータをすべて固定したまま、入力の先頭に付加する「ソフトプロンプト」（人間が読めない学習可能なベクトル列）だけをバックプロパゲーションで最適化するパラメータ効率的な適応手法です。Lesterらが2021年に発表しました。

プロンプトチューニングが重要な理由は、数十億パラメータのLLMを特定タスクに適応させる際に、モデル重みを一切変更せず少数の「ソフトプロンプトトークン」の学習だけで高い性能を達成できるためです。モデルを共有しながら複数タスク向けの異なるソフトプロンプトを切り替える使い方ができ、マルチテナント環境に適しています。

手動のprompt-engineeringとの違いは、人間が読めるテキストではなく連続ベクトル空間で最適化される点です。PrefixTuning（各Transformer層にプレフィックスを付加する亜種）と合わせてpeftの代表的手法の一つです。モデルが大きいほどプロンプトチューニングの効果が高く、100Bスケールではフルfine-tuningに近い性能を達成することが示されています。ただしloraと比較すると適応できるタスクの幅が狭いとされており、実務ではLoRAが多く採用されています。`,
    relatedSlugs: ["peft", "fine-tuning", "lora", "prompt-engineering", "sft"],
    sources: [
      {
        title: "The Power of Scale for Parameter-Efficient Prompt Tuning",
        url: "https://arxiv.org/abs/2104.08691",
        publisher: "arXiv / Lester et al. (2021)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Prompt tuning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Prompt_engineering#Soft_prompts",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "perplexity",
    term: "パープレキシティ（PPL）",
    reading: "パープレキシティ",
    category: "評価",
    summary:
      "パープレキシティ（Perplexity）とは、言語モデルがテキストをどれだけうまく予測できるかを測る評価指標です。PPLと略され、値が低いほど性能が高いことを示します。モデルの事前学習品質評価の基本指標です。",
    description: `パープレキシティ（Perplexity、PPL）とは、言語モデルがテストデータをどれだけ「驚き」なく予測できるかを表す評価指標です。数学的には、テストデータの各トークンに対するモデルの予測確率の幾何平均の逆数として定義されます。直感的には「このモデルは次のトークンを予測する際、平均して何択の中から選んでいるか」を意味し、値が低いほど予測精度が高いことを示します。

パープレキシティが重要な理由は、外部タスクを必要とせず言語モデル自体の事前学習品質をシンプルに定量評価できるためです。モデルのアーキテクチャ比較・学習データの品質評価・量子化による性能劣化の測定などに広く使われます。WikitextやPenn Treebankなどの標準データセット上でのPPLがモデル比較のベースラインとなります。

PPLの解釈には注意が必要です。同じPPLでも、測定するデータセットやトークナイザーが異なれば値が変わるため、異なるモデル間の直接比較が難しい場合があります。また、PPLが低くても実際の応用タスク（翻訳・要約・QA等）での性能が高いとは限らず、benchmarkやevaluation-metricsとの組み合わせで多角的に評価することが重要です。量子化（quantization）によるPPL劣化の測定はLLMの軽量化品質管理の標準的手法です。`,
    relatedSlugs: ["benchmark", "evaluation-metrics", "llm", "token", "inference"],
    sources: [
      {
        title: "Perplexity - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Perplexity",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Speech and Language Processing (3rd ed.) - Jurafsky & Martin",
        url: "https://web.stanford.edu/~jurafsky/slp3/",
        publisher: "Stanford University",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "dall-e",
    term: "DALL-E（ダリ）",
    reading: "ダリ",
    category: "モデル",
    summary:
      "DALL-Eとは、OpenAIが開発したテキストから高品質な画像を生成するモデルシリーズです。DALL-E 3では自然言語での細かな画像制御が可能になり、ChatGPTやAPIに統合されて広く使われています。",
    description: `DALL-E（ダリ）とは、OpenAIが開発したテキストプロンプトから画像を生成するAIモデルシリーズです。画家のサルバドール・ダリとディズニーキャラクターのウォーリーを組み合わせた名称です。2021年のDALL-E（初代）、2022年のDALL-E 2、2023年のDALL-E 3と進化してきました。

DALL-Eが重要な理由は、テキストによる指示（プロンプト）から高品質な画像を生成するという概念を一般に広め、クリエイティブ分野でのAI活用を加速させたためです。DALL-E 3はChatGPTに統合され、「〇〇な感じの料理写真を作って」という日常的な会話でも画像生成できる体験を実現しました。

技術的には、DALL-E 2はCLIPのテキスト埋め込みと拡散モデルを組み合わせたアーキテクチャを採用しています。DALL-E 3ではプロンプトへの追従精度が大幅に向上し、細かいテキストの描写や複数オブジェクトの配置指定が可能になりました。競合としてMidjourney・stable-diffusion・Adobe Fireflyなどが存在し、text-to-imageの主要プレイヤーとして競争が続いています。日本語プロンプトへの対応も進んでいます。`,
    relatedSlugs: ["text-to-image", "generative-ai", "diffusion-model", "clip", "stable-diffusion"],
    sources: [
      {
        title: "Hierarchical Text-Conditional Image Generation with CLIP Latents (DALL-E 2)",
        url: "https://arxiv.org/abs/2204.06125",
        publisher: "arXiv / Ramesh et al. / OpenAI (2022)",
        accessedAt: "2026-02-26",
      },
      {
        title: "DALL-E 3 - OpenAI",
        url: "https://openai.com/dall-e-3",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "sora",
    term: "Sora（ソラ）",
    reading: "ソラ",
    category: "モデル",
    summary:
      "Soraとは、OpenAIが2024年に公開したテキストから動画を生成するAIモデルです。最大60秒の高品質動画を生成でき、物理法則を理解した一貫性ある映像表現が特徴です。",
    description: `Sora（ソラ）とは、OpenAIが2024年2月に発表し、同年12月に一般公開したテキストから動画を生成するAIモデルです。「空（Sora）」の名の通り、これまでにない映像生成の可能性を象徴するモデルとして大きな注目を集めました。

Soraが重要な理由は、最大60秒の高品質・高解像度動画を単一のテキストプロンプトから生成できるという、それまでのAI動画生成モデルを大幅に超える能力を示したためです。複数キャラクターの一貫した描写、カメラワークの制御、物理的に自然な動き（液体の流れ・光の反射等）が実現されました。

技術的には、画像の拡散モデルを動画（時間次元を持つシーケンス）に拡張した「Video Diffusion Transformer（DiT）」をベースとしています。動画をパッチに分割してTransformerで処理する設計が採用されています。課題としてハルシネーション（物理法則の破綻・オブジェクトの突然の消失等）が指摘されており、悪用リスクへの対策（deepfake防止のためのC2PAメタデータ付与等）も議論されています。RunwayML Gen-3・Google Lumiere・Stability AI Video等が競合です。`,
    relatedSlugs: ["generative-ai", "diffusion-model", "text-to-image", "multimodal", "dall-e"],
    sources: [
      {
        title: "Sora: Creating video from text - OpenAI",
        url: "https://openai.com/sora",
        publisher: "OpenAI (2024)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Video generation models as world simulators",
        url: "https://openai.com/research/video-generation-models-as-world-simulators",
        publisher: "OpenAI Technical Report (2024)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "in-context-learning",
    term: "インコンテキスト学習",
    reading: "インコンテキストがくしゅう",
    category: "基礎概念",
    summary:
      "インコンテキスト学習とは、モデルの重みを更新せず、プロンプト内の例示だけでタスクを遂行する能力です。few-shot learningの実現形式であり、GPT-3で初めて大規模に実証されました。",
    description: `インコンテキスト学習（In-Context Learning、ICL）とは、LLMがパラメータを更新（学習）することなく、プロンプト内に含まれた例示（デモンストレーション）を参照して新しいタスクを実行できる能力です。GPT-3の論文（Brown et al., 2020）でfew-shot learningの実現形式として初めて大規模に実証されました。

インコンテキスト学習が重要な理由は、従来の機械学習では新タスクへの対応に大量のラベルデータとfine-tuningが必要でしたが、ICLでは数例の例示をプロンプトに含めるだけでモデルがタスクのパターンを把握し高精度に遂行できるためです。これはモデルの「汎化能力」の新たな形態であり、なぜ機能するかの理論的解明はまだ研究途上です。

ICLの形態として、1例も示さないzero-shot-learning、1〜数例を示すfew-shot-learningがあります。例示の品質・順序・フォーマットが性能に大きく影響することが知られており、これらを最適化することがprompt-engineeringの重要なテーマです。context-windowの制限内に例示を詰め込む必要があるため、長い例示が多数必要なタスクではRAGとの組み合わせが有効です。`,
    relatedSlugs: ["few-shot-learning", "zero-shot-learning", "prompt-engineering", "llm", "context-window"],
    sources: [
      {
        title: "Language Models are Few-Shot Learners (GPT-3)",
        url: "https://arxiv.org/abs/2005.14165",
        publisher: "arXiv / Brown et al. / OpenAI (2020)",
        accessedAt: "2026-02-26",
      },
      {
        title: "In-context learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/In-context_learning_(natural_language_processing)",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "cosine-similarity",
    term: "コサイン類似度",
    reading: "コサインるいじど",
    category: "基礎概念",
    summary:
      "コサイン類似度とは、2つのベクトル間の角度でテキストや画像の意味的な類似度を測る指標です。RAGやセマンティック検索における検索クエリと文書の関連度計算の中核で使われています。",
    description: `コサイン類似度（Cosine Similarity）とは、2つのベクトルのなす角度のコサイン値で類似度を表す指標です。値は-1〜1の範囲をとり、1に近いほど意味的に類似（ベクトルの向きが一致）、0に近いほど無関係、-1に近いほど対照的な意味を持ちます。ベクトルの大きさ（長さ）ではなく「方向」だけで類似度を測るため、文書の長さが異なる場合でも公平に比較できます。

コサイン類似度がAI分野で重要な理由は、embeddingで変換されたテキスト・画像・音声の意味的類似度を効率よく計算できるためです。RAGシステムでは、ユーザーのクエリをembeddingに変換し、データベース内の全文書embeddingとコサイン類似度を計算して最も関連性の高い文書を検索します。semantic-searchやvector-dbの検索アルゴリズムの中心的な演算です。

実装上の注意として、コサイン類似度が高くても必ずしも実際のタスクに有用とは限らない（embeddingモデルの品質に依存）点があります。大規模データベースでの全ペア計算はコスト大であるため、HNSW・IVFなどの近似最近傍探索（ANN）アルゴリズムで高速化するのが一般的です。また目的によってはEuclidean距離（L2距離）・内積（Dot Product）の方が適する場合もあります。rerankingと組み合わせることで検索精度をさらに向上できます。`,
    relatedSlugs: ["embedding", "semantic-search", "vector-db", "retrieval", "rag"],
    sources: [
      {
        title: "Cosine similarity - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Cosine_similarity",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Speech and Language Processing (3rd ed.) - Jurafsky & Martin",
        url: "https://web.stanford.edu/~jurafsky/slp3/",
        publisher: "Stanford University",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "hybrid-search",
    term: "ハイブリッド検索",
    reading: "ハイブリッドけんさく",
    category: "実装",
    summary:
      "ハイブリッド検索とは、キーワード検索（BM25等）とベクトル検索（セマンティック検索）を組み合わせてRAGの検索精度を高める手法です。両方の強みを活かし、固有名詞や専門用語も意味的なクエリも高精度に処理できます。",
    description: `ハイブリッド検索（Hybrid Search）とは、従来のキーワードベース検索（BM25・TF-IDF等）とembeddingを使ったセマンティック検索（ベクトル検索）を組み合わせることで、それぞれの弱点を補い合い総合的な検索精度を向上させる手法です。RAGシステムの検索パイプライン改善において最も効果的な手法の一つとして普及しています。

ハイブリッド検索が重要な理由は、キーワード検索とセマンティック検索がそれぞれ異なる種類のクエリに強みを持つためです。キーワード検索は「Claude 3.5 Sonnet」「GPT-4o」などの固有名詞・型番・コードを正確にマッチできますが、言い換えや概念的な類似性には弱いです。一方、セマンティック検索は「LLMの幻覚を防ぐ方法」のような概念的クエリに強いですが、固有名詞のマッチが苦手です。

実装には、BM25スコアとベクトル類似度スコアを組み合わせる「Reciprocal Rank Fusion（RRF）」や加重線形結合が使われます。Weaviate・Pinecone・Elasticsearch・Azure Cognitive Searchなど主要vector-dbがハイブリッド検索をネイティブサポートしています。さらにrerankingと組み合わせることで、初期検索結果の精度をより高められます。`,
    relatedSlugs: ["rag", "semantic-search", "retrieval", "vector-db", "embedding"],
    sources: [
      {
        title: "Hybrid Search - Pinecone Documentation",
        url: "https://docs.pinecone.io/guides/data/understanding-hybrid-search",
        publisher: "Pinecone",
        accessedAt: "2026-02-26",
      },
      {
        title: "Hybrid Search - Weaviate Documentation",
        url: "https://weaviate.io/blog/hybrid-search-explained",
        publisher: "Weaviate",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "reranking",
    term: "リランキング",
    reading: "リランキング",
    category: "実装",
    summary:
      "リランキングとは、初期検索結果をクロスエンコーダー等で再スコアリングして関連性の高い順に並び替えるRAG改善手法です。検索精度を大幅に向上させ、LLMへ渡す文書の質を高めます。",
    description: `リランキング（Reranking）とは、RAGパイプラインにおいて最初の検索ステップ（semantic-searchやhybrid-search）で取得した候補文書群を、より精度の高いモデル（クロスエンコーダー）で再評価・再順位付けする2段階検索の手法です。「粗い検索で多くの候補を取得→精密なモデルで上位を絞り込む」という設計です。

リランキングが重要な理由は、bi-encoderによる初期ベクトル検索は高速ですが精度に限界があり、LLMに渡す文書の質がRAGシステム全体の回答品質を左右するためです。クロスエンコーダーはクエリと文書を同時に入力して精密な関連度スコアを計算できる反面、全候補との総当たり計算は低速なため、2段階に分けることで速度と精度を両立します。

代表的なリランキングモデルとして、Cohere Rerank、BGE-Reranker（オープンソース）、cross-encoder/ms-marco（Hugging Face）などがあります。LLMそのものをリランカーとして使う「LLM Reranker」も登場しており、「以下の文書のうち質問に最も関連するものをランク付けしてください」というプロンプトで機能します。RAGの評価指標としてはMRR（Mean Reciprocal Rank）やNDCGが使われ、リランキングの効果測定に活用されます。`,
    relatedSlugs: ["rag", "retrieval", "semantic-search", "hybrid-search", "embedding"],
    sources: [
      {
        title: "Passage Re-ranking with BERT",
        url: "https://arxiv.org/abs/1901.04085",
        publisher: "arXiv / Nogueira & Cho (2019)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Cohere Rerank Documentation",
        url: "https://docs.cohere.com/docs/reranking",
        publisher: "Cohere",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "tree-of-thought",
    term: "ツリーオブソート（ToT）",
    reading: "ツリーオブソート",
    category: "実装",
    summary:
      "ツリーオブソート（Tree of Thoughts）とは、LLMが複数の思考パスを木構造で探索・評価しながら問題を解くプロンプト戦略です。Chain-of-Thoughtの発展形で、複雑な推論・計画タスクで有効です。",
    description: `ツリーオブソート（Tree of Thoughts、ToT）とは、Yaoらが2023年に提案した、LLMが問題を解く際に単一の思考チェーン（cot）ではなく複数の思考パスを木構造で生成・評価・探索するプロンプティング戦略です。人間が困難な問題を考える際に複数の案を検討して最良を選ぶプロセスをAIで再現しています。

ToTが重要な理由は、Chain-of-Thoughtでは最初の思考方向が誤っていた場合に修正できませんが、ToTは複数の思考ブランチを並行探索し、評価関数（自己評価や別のLLM呼び出し）でプルーニングすることで、より高品質な解に到達できるためです。算術パズル（24ゲーム）や創作文章・パズル問題などで従来手法を大幅に上回る性能が示されました。

実装では、「思考の生成（複数候補を出す）」→「思考の評価（有望かを判定）」→「探索戦略（BFS/DFS）」の3要素で構成されます。計算コストはCoTより高くなりますが、reasoning-modelの台頭によりモデル自体が内部でToT的な探索を行うようになっており、外部から明示的にToTプロンプトを設計する必要性は変化しています。agentやorchestratorと組み合わせた実装も研究されています。`,
    relatedSlugs: ["cot", "prompt-engineering", "reasoning-model", "llm", "agent"],
    sources: [
      {
        title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
        url: "https://arxiv.org/abs/2305.10601",
        publisher: "arXiv / Yao et al. (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Tree of Thoughts - GitHub",
        url: "https://github.com/princeton-nlp/tree-of-thought-llm",
        publisher: "Princeton NLP",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "model-merging",
    term: "モデルマージ",
    reading: "モデルマージ",
    category: "実装",
    summary:
      "モデルマージとは、複数のfine-tunedモデルの重みを統合して、それぞれの能力を組み合わせた新モデルを作る手法です。追加学習なしで異なる専門能力を持つモデルを融合でき、Hugging Faceコミュニティで広く活用されています。",
    description: `モデルマージ（Model Merging）とは、同じベースモデル（foundation-model）から派生した複数のfine-tunedモデルのパラメータ（重み）を数学的に統合することで、それぞれのモデルが持つ異なる能力・知識を組み合わせた新しいモデルを作成する手法です。追加の学習データも計算資源もほぼ必要なく、重みの算術演算だけで実現できる点が特徴です。

モデルマージが注目される理由は、「コーディング特化モデル」と「日本語特化モデル」を統合して「日本語でコーディングができるモデル」を作るような、異なる専門能力の組み合わせを低コストで実現できるためです。Hugging Faceのオープンモデルコミュニティで爆発的に普及しており、Open LLM Leaderboardの上位モデルの多くがマージモデルとなっています。

代表的な手法として、SLERP（球面線形補間、2モデルの滑らかな補間）、TIES-Merging（冗長パラメータを除去しながら統合）、DARE（ランダムドロップ＋リスケールで干渉を削減）、Frankenmerging（異なるモデルのレイヤーを組み合わせる）などがあります。mergekitというOSSツールが多様なマージ手法を簡単に実行できる環境を提供しており、loraベースのモデルでも対応可能です。`,
    relatedSlugs: ["fine-tuning", "lora", "peft", "open-source-llm", "parameter"],
    sources: [
      {
        title: "TIES-Merging: Resolving Interference When Merging Models",
        url: "https://arxiv.org/abs/2306.01708",
        publisher: "arXiv / Yadav et al. (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "mergekit - Model merging toolkit",
        url: "https://github.com/arcee-ai/mergekit",
        publisher: "Arcee AI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "deepfake",
    term: "ディープフェイク",
    reading: "ディープフェイク",
    category: "法務・倫理",
    summary:
      "ディープフェイクとは、AIを使って本物と見分けがつかない偽の動画・音声・画像を生成する技術です。詐欺・フィッシング・選挙干渉・非合意的な性的コンテンツ生成などの悪用が社会問題化しています。",
    description: `ディープフェイク（Deepfake）とは、深層学習（Deep Learning）と「フェイク（偽物）」を組み合わせた造語で、AIを用いて実在の人物の顔・声・動作を精巧に模倣した偽の映像・音声・画像コンテンツを生成する技術です。特定人物の顔を別の動画に合成するフェイススワップや、音声クローニングによる本人になりすましが代表的な形態です。

ディープフェイクが社会問題となっている理由は、生成コストの低下と品質向上により、高度な技術知識がなくても誰でも精巧な偽コンテンツを作成できるようになったためです。著名人の偽動画による詐欺（投資詐欺・振り込め詐欺）、政治家の偽発言による世論操作、非合意的な性的偽画像（NCII）の拡散、ビジネスメール詐欺（BEC）での音声なりすましなど、実害が急増しています。

対策として、技術的にはContent Authenticity Initiative（CAI）のC2PAメタデータによるデジタル署名（コンテンツの出所証明）、AIを使った偽物検出（deepfake detection）が開発されています。法律面では日本の改正不正競争防止法・各国のdeepfake規制法が整備されつつあります。OpenAI・GoogleなどはSoraやImagen等の生成AIにC2PAウォーターマークを付与しています。ai-regulationの重要テーマの一つです。`,
    relatedSlugs: ["generative-ai", "diffusion-model", "ai-governance", "ai-regulation", "responsible-ai"],
    sources: [
      {
        title: "Deepfake - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Deepfake",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "NIST Synthetic Content Attribution",
        url: "https://www.nist.gov/artificial-intelligence/synthetic-content",
        publisher: "NIST",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "chain-of-density",
    term: "チェーンオブデンシティ（CoD）",
    reading: "チェーンオブデンシティ",
    category: "実装",
    summary:
      "チェーンオブデンシティ（Chain of Density）とは、要約の情報密度を段階的に高めながら情報損失を最小化する要約プロンプト手法です。GPT-4で有効性が実証され、高品質な要約生成の実践的テクニックとして注目されています。",
    description: `チェーンオブデンシティ（Chain of Density、CoD）とは、Adamsらが2023年に提案した要約生成のプロンプト手法です。最初に疎（sparse）な要約を生成し、その後毎回「重要な情報を追加しつつ同じ長さを維持する」精緻化ステップを繰り返すことで、情報密度を段階的に高めた高品質な要約を得るアプローチです。

CoDが重要な理由は、従来の1ステップ要約では「重要な情報が抜ける」か「長くなりすぎる」かのトレードオフがあるのに対し、CoDは反復的な精緻化によって指定文字数を維持しながら情報の抜けを最小化できるためです。GPT-4を使った実験では、5段階の精緻化ステップで人間が好む質の高い要約が得られることが示されました。

実装は比較的シンプルで、「以下のテキストを要約してください。次に、重要な情報を1〜3つ追加しながら同じ長さに書き直してください。これを5回繰り返してください」というプロンプトで機能します。summarizationの品質向上手法としてcotと並ぶ実践的テクニックです。ニュース記事・論文・会議録など長文要約タスクでの活用が進んでいます。llmopsの文脈では、要約パイプラインの品質改善手法として有効です。`,
    relatedSlugs: ["summarization", "prompt-engineering", "cot", "llm", "context-window"],
    sources: [
      {
        title: "From Sparse to Dense: GPT-4 Summarization with Chain of Density Prompting",
        url: "https://arxiv.org/abs/2309.04269",
        publisher: "arXiv / Adams et al. (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Chain of Density - Hugging Face Blog",
        url: "https://huggingface.co/blog/chain-of-density",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
];

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return [...glossaryTerms];
}

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}

export function getRelatedTerms(slugs: string[]): GlossaryTerm[] {
  return slugs
    .map((slug) => glossaryTerms.find((term) => term.slug === slug))
    .filter((term): term is GlossaryTerm => term !== undefined);
}
