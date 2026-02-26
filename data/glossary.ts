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
  {
    slug: "long-context",
    term: "ロングコンテキスト",
    reading: "ロングコンテキスト",
    category: "基礎概念",
    summary:
      "ロングコンテキストとは、数十万〜数百万トークンを一度に処理できるLLMの能力です。Gemini 1.5（100万トークン）やClaude（20万トークン）が先行しており、長文書・コードベース全体・動画の一括処理が可能になります。",
    description: `ロングコンテキスト（Long Context）とは、LLMがシングルプロンプトで処理できるトークン数（context-window）を大幅に拡張した能力です。従来のGPT-3の4,096トークン（約3,000単語）から、現在は数十万〜数百万トークン（書籍数冊分）を一度に処理できるモデルが登場しています。

ロングコンテキストが重要な理由は、「分割して処理する」という従来の制約が撤廃され、大規模な文書・コード・データを一度に参照した上でのより正確な分析・生成が可能になるためです。法律文書全体の分析、大規模コードベースの理解、長時間動画のトランスクリプト処理、数百ページの研究論文の精読など、新しいユースケースが開拓されています。

主要モデルのコンテキスト長として、Gemini 1.5 Pro（100万トークン、約75万語）、Gemini 1.5 Flash（100万トークン）、Claude 3シリーズ（20万トークン）、GPT-4o（128,000トークン）などがあります。ただし長大なコンテキストに対して「Lost in the Middle」問題（文書の中間部分の情報を見落とす傾向）が報告されており、prompt-cachingとの組み合わせでコスト最適化することも重要な実装上の考慮事項です。RAGと長コンテキストは競合より補完の関係にあり、用途に応じて使い分けられています。`,
    relatedSlugs: ["context-window", "llm", "retrieval", "rag", "prompt-caching"],
    sources: [
      {
        title: "Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context",
        url: "https://arxiv.org/abs/2403.05530",
        publisher: "arXiv / Google DeepMind (2024)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Claude's long context window - Anthropic",
        url: "https://www.anthropic.com/news/claude-3-family",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "multimodal-generation",
    term: "マルチモーダル生成",
    reading: "マルチモーダルせいせい",
    category: "実装",
    summary:
      "マルチモーダル生成とは、テキスト・画像・音声・動画など複数のモダリティを同時に入出力するAIシステムの生成能力です。GPT-4oやGeminiが対応しており、単一モデルで複合的なコンテンツを生成できます。",
    description: `マルチモーダル生成（Multimodal Generation）とは、AIシステムがテキスト・画像・音声・動画・コードなど複数の情報形式（モダリティ）を組み合わせて処理・生成する能力です。「マルチモーダル入力（複数形式の情報を受け取る）」と「マルチモーダル出力（複数形式の情報を生成する）」の両方を包含する概念です。

マルチモーダル生成が重要な理由は、現実世界の情報処理は常にマルチモーダルであり（音声+画像+テキストを同時に扱う）、単一モダリティに限定されたAIでは本質的な限界があるためです。GPT-4oは音声入出力・画像入力をネイティブに処理し、Gemini 1.5は動画・音声・画像・テキスト・コードを統合的に扱います。

具体的なユースケースとして、「画像を見て日本語で質問に答える（VQA）」「音声で会話しながらスクリーンを共有して説明を受ける」「テキスト指示から画像・音声・動画を生成する」などがあります。技術的には、各モダリティのエンコーダー（画像はVision Transformer、音声はWhisper相当）をLLMのデコーダーと統合したアーキテクチャが主流です。vision-language-modelはマルチモーダル生成の代表的な実装形態の一つです。今後は脳波・センサーデータなどのさらに多様なモダリティへの拡張が研究されています。`,
    relatedSlugs: ["multimodal", "vision-language-model", "text-to-image", "sora", "gpt-4o"],
    sources: [
      {
        title: "Hello GPT-4o - OpenAI",
        url: "https://openai.com/index/hello-gpt-4o/",
        publisher: "OpenAI (2024)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Gemini 1.5 Pro - Google DeepMind",
        url: "https://deepmind.google/technologies/gemini/pro/",
        publisher: "Google DeepMind",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "reward-model",
    term: "報酬モデル",
    reading: "ほうしゅうモデル",
    category: "基礎概念",
    summary:
      "報酬モデルとは、人間の好みや評価基準を学習してLLMの出力にスコア（報酬）を付けるモデルです。RLHFの中核コンポーネントで、ChatGPTやClaudeなどの高品質な対話AIの訓練に不可欠です。",
    description: `報酬モデル（Reward Model、RM）とは、人間の評価者が「どちらの回答が良いか」を比較・評価したデータを使って訓練された、LLMの出力品質を数値スコアで評価するモデルです。RLHFパイプラインにおいて、強化学習エージェント（LLM）が最大化すべき報酬関数の役割を果たします。

報酬モデルが重要な理由は、LLMが生成する何百万もの出力すべてに人間がリアルタイムでフィードバックを与えることは不可能であり、人間の好みを模倣した報酬モデルがその代替として機能するためです。比較的少量の人間による比較データ（A vs Bどちらが良いか）から訓練された報酬モデルが、以後のRLHFループで大量の出力を自動評価します。

報酬モデルの訓練では、同じプロンプトへの複数の応答を人間が順位付けし（相対評価）、ブラッドリー・テリーモデル等でスコア化した比較データが使われます。課題として「報酬ハッキング（Reward Hacking）」があります—LLMが人間の意図ではなく報酬モデルの欠陥を悪用した高スコア出力を生成する現象です。これへの対策としてconstitutional-aiではAIが自己批判・修正する手法が採用されています。また報酬モデルを使わないDPO（Direct Preference Optimization）も普及しています。`,
    relatedSlugs: ["rlhf", "alignment", "reinforcement-learning", "sft", "constitutional-ai"],
    sources: [
      {
        title: "Deep Reinforcement Learning from Human Preferences",
        url: "https://arxiv.org/abs/1706.03741",
        publisher: "arXiv / Christiano et al. (2017)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Training language models to follow instructions with human feedback (InstructGPT)",
        url: "https://arxiv.org/abs/2203.02155",
        publisher: "arXiv / Ouyang et al. / OpenAI (2022)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "speculative-decoding",
    term: "投機的デコーディング",
    reading: "とうきてきデコーディング",
    category: "基礎概念",
    summary:
      "投機的デコーディングとは、小型モデルで候補トークンを先読みし、大型モデルで検証することで推論速度を大幅に向上させる技術です。出力品質を保ちながらレイテンシを削減できます。",
    description: `投機的デコーディング（Speculative Decoding）とは、大型のターゲットモデル（例：70B LLM）のみで逐次的にトークンを生成する代わりに、小型の「ドラフトモデル」（例：7B LLM）が複数の候補トークンを一括生成し、それをターゲットモデルが並列に検証・採択または棄却することで、出力の品質を維持しながら推論速度を大幅に向上させる技術です。

投機的デコーディングが重要な理由は、LLMの推論（inference）はトークンを1つずつ逐次生成するという性質上、モデルを大型化するほど速度低下が避けられないためです。ドラフトモデルの先読みが正解率の高い提案を生成できれば、ターゲットモデルは多数のトークンを一度のフォワードパスで採択でき、実効的なスループットが2〜3倍以上向上します。

Google・DeepMindが2022〜2023年に論文発表し、AnthropicのClaude・Google GeminiなどでAPI応答の高速化に活用されています。self-speculative decoding（同一モデルの早期層をドラフターとして使う手法）や、量子化モデルをドラフターとして使う手法も研究されています。streamingとの組み合わせでユーザーへの最初のトークン表示（TTFT）も改善されます。quantizationと並ぶLLM推論最適化の主要アプローチです。`,
    relatedSlugs: ["inference", "llm", "quantization", "gpu", "vram"],
    sources: [
      {
        title: "Fast Inference from Transformers via Speculative Decoding",
        url: "https://arxiv.org/abs/2211.17192",
        publisher: "arXiv / Leviathan et al. / Google (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Accelerating Large Language Model Decoding with Speculative Sampling",
        url: "https://arxiv.org/abs/2302.01318",
        publisher: "arXiv / Chen et al. / DeepMind (2023)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "rlaif",
    term: "RLAIF（AIフィードバックからの強化学習）",
    reading: "アールエルエーアイエフ",
    category: "法務・倫理",
    summary:
      "RLAIFとは、人間の代わりにAIが別のAIモデルの出力を評価・改善するフィードバック手法（Reinforcement Learning from AI Feedback）です。Constitutional AIの核心技術で、スケーラブルなアライメント手法として注目されています。",
    description: `RLAIF（Reinforcement Learning from AI Feedback）とは、RLHFの「人間フィードバック」の部分をAI（LLM）によるフィードバックに置き換えた手法です。AIが別のAIの出力を評価することで、人間のアノテーターを大規模に必要とせず、スケーラブルにLLMのアライメントを改善できます。

RLAIFが重要な理由は、RLHFで必要な人間による比較評価（人手アノテーション）がコスト・時間・スケールの面で大きなボトルネックとなっているためです。強力なLLM（教師AI）が評価者・改善提案者となることで、同品質または高品質なフィードバックを低コストで大量に生成できます。Googleが2023年に発表した研究では、RLAIFがRLHFと同等の性能を達成したことが示されました。

Anthropicのconstitutional-aiはRLAIFの代表的な実装で、あらかじめ設定した原則リスト（憲法）に基づいてAI自身が自分の出力を批判・改善するサイクルを回します。この手法ではモデルが「有害な回答を拒否しながら有用であり続ける」というバランスを自律的に学習します。reward-modelの訓練にもAI生成フィードバックが活用でき、現在のClaude・Gemini等の主要モデルはRLAIFを組み合わせた訓練を採用しています。`,
    relatedSlugs: ["rlhf", "constitutional-ai", "alignment", "sft", "reward-model"],
    sources: [
      {
        title: "Constitutional AI: Harmlessness from AI Feedback",
        url: "https://arxiv.org/abs/2212.08073",
        publisher: "arXiv / Bai et al. / Anthropic (2022)",
        accessedAt: "2026-02-26",
      },
      {
        title: "RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
        url: "https://arxiv.org/abs/2309.00267",
        publisher: "arXiv / Lee et al. / Google (2023)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "agent-memory",
    term: "エージェントメモリ",
    reading: "エージェントメモリ",
    category: "実装",
    summary:
      "エージェントメモリとは、AIエージェントが過去の行動・会話・知識を保持し長期的に一貫した動作をするための記憶機構です。短期・長期・エピソード記憶に分類され、自律型エージェントの中核コンポーネントです。",
    description: `エージェントメモリ（Agent Memory）とは、AIエージェントが単一の会話セッションを超えて情報・経験・知識を保持し、長期的に一貫性のある行動や学習を実現するための記憶機構です。人間の記憶システムを参考に設計されており、エージェントが「覚えている」ことで初めて実用的な自律エージェントが実現します。

エージェントメモリが重要な理由は、LLMは本来状態を持たない（ステートレス）モデルであり、context-windowを超えた情報は失われてしまうためです。長期プロジェクトの継続、ユーザーの好みの記憶、過去の失敗からの学習などを実現するには、明示的なメモリ機構が不可欠です。

主なメモリ種別として、①短期メモリ（コンテキストウィンドウ内の会話履歴）、②エピソードメモリ（過去の具体的な出来事の記憶、vector-dbに保存）、③セマンティックメモリ（一般知識・ファクトの記憶）、④手続き記憶（タスク遂行の手順・スキル）があります。実装では、重要な情報をvector-dbに保存してRAGで検索・参照するパターン、会話要約を定期的に保存するパターンが一般的です。Park et al. (2023)の「Generative Agents」論文ではシミュレーション環境でエージェントが記憶・反省・計画を組み合わせて社会的行動を実現しました。`,
    relatedSlugs: ["agent", "autonomous-agent", "rag", "vector-db", "agentic-workflow"],
    sources: [
      {
        title: "Generative Agents: Interactive Simulacra of Human Behavior",
        url: "https://arxiv.org/abs/2304.03442",
        publisher: "arXiv / Park et al. (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "LangChain Memory Documentation",
        url: "https://python.langchain.com/docs/concepts/memory/",
        publisher: "LangChain",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "instruction-following",
    term: "インストラクションフォロウィング",
    reading: "インストラクションフォロウィング",
    category: "基礎概念",
    summary:
      "インストラクションフォロウィングとは、ユーザーの指示を正確に理解・実行するLLMの能力です。SFTとRLHFによる訓練で向上し、ChatGPTの成功の鍵となった現代LLMの基本能力です。",
    description: `インストラクションフォロウィング（Instruction Following）とは、LLMがユーザーや開発者の指示（インストラクション）を正確に理解し、その意図に沿った適切な出力を生成する能力です。「〇〇について200字で要約して」「敬語で書き直して」「コードのバグを直して」といった具体的な指示に、期待通りに応答できる能力を指します。

インストラクションフォロウィングが重要な理由は、事前学習だけのLLMは「次のトークンを予測する」能力には優れますが、人間の意図した指示に従うことは苦手であるためです。GPT-3はインストラクションフォロウィングが弱く、プロンプトエンジニアリングで補う必要がありました。InstructGPT（2022年）でSFT+RLHFによるfine-tuningが導入されてから、LLMが直感的な指示に従えるようになり、ChatGPTの爆発的普及につながりました。

評価指標として、IFEval（Instruction Following Evaluation）というベンチマークがあり、具体的な制約（「必ず英語で」「箇条書き5点で」等）に対する従守率を測定します。instruction-tuningはこの能力を高めるためのfine-tuning手法全般を指します。日本語での指示理解・実行は英語より難しく、日本語instruction-followingの向上が国内AI活用の重要課題です。`,
    relatedSlugs: ["sft", "rlhf", "instruction-tuning", "alignment", "benchmark"],
    sources: [
      {
        title: "Training language models to follow instructions with human feedback (InstructGPT)",
        url: "https://arxiv.org/abs/2203.02155",
        publisher: "arXiv / Ouyang et al. / OpenAI (2022)",
        accessedAt: "2026-02-26",
      },
      {
        title: "IFEval: Instruction-Following Evaluation for Large Language Models",
        url: "https://arxiv.org/abs/2311.07911",
        publisher: "arXiv / Zhou et al. / Google (2023)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "negative-prompting",
    term: "ネガティブプロンプティング",
    reading: "ネガティブプロンプティング",
    category: "実装",
    summary:
      "ネガティブプロンプティングとは、生成したくない要素を明示的に指定することでAI出力の品質・方向性を制御するプロンプト技法です。画像生成AI（Stable DiffusionやDALL-E）で特に多用され、不要な要素を除外できます。",
    description: `ネガティブプロンプティング（Negative Prompting）とは、AIに「何を生成したいか」を指定するポジティブプロンプトに加え、「何を生成したくないか」を明示的に指定することで出力の品質・方向性をより精密に制御するプロンプト技法です。特に画像生成AI分野で一般化した手法です。

ネガティブプロンプティングが重要な理由は、ポジティブプロンプトだけでは避けたい要素（低品質なレンダリング・望まない構図・特定のスタイル等）を排除しきれない場合があり、ネガティブ指定を加えることで意図した出力により近づけられるためです。Stable DiffusionやDALL-Eなどの画像生成では「blurry, low quality, text, watermark」などをネガティブプロンプトに含めることが標準的な使い方となっています。

テキスト生成LLMにおけるネガティブプロンプティングの例として、「〇〇については触れないで」「〇〇という表現は使わないで」「箇条書きにしないで」などの制約指定があります。system-promptでの制約設定と組み合わせることで、出力のトーン・フォーマット・コンテンツを細かくコントロールできます。Classifier Free Guidance（CFG）スケールは、画像生成においてポジティブ・ネガティブプロンプトの影響度を調整するパラメータです。`,
    relatedSlugs: ["prompt-engineering", "text-to-image", "stable-diffusion", "dall-e", "system-prompt"],
    sources: [
      {
        title: "Stable Diffusion Negative Prompts Guide - AUTOMATIC1111",
        url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Negative-prompt",
        publisher: "AUTOMATIC1111",
        accessedAt: "2026-02-26",
      },
      {
        title: "Classifier-Free Diffusion Guidance",
        url: "https://arxiv.org/abs/2207.12598",
        publisher: "arXiv / Ho & Salimans (2022)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-copyright",
    term: "AI著作権",
    reading: "エーアイちょさくけん",
    category: "法務・倫理",
    summary:
      "AI著作権とは、AIが生成したコンテンツの著作権帰属、および学習データとして使用された著作物の権利処理に関する法的問題です。世界各国で議論・立法化が進んでいる生成AI時代の重要な法的課題です。",
    description: `AI著作権（AI Copyright）とは、主に2つの法的問題を指します。①AI生成コンテンツの著作権：AIが生成した文章・画像・音楽等の著作権は誰に帰属するか（AI自身か、開発者か、ユーザーか、誰にも帰属しないか）、②学習データの著作権：AIの学習に使用された著作権保護されたデータ（書籍・記事・画像等）の権利処理は適法かという問題です。

AI著作権が重要な理由は、生成AIの爆発的普及により「AIが著名作家の文体で小説を書く」「アーティストの画風を再現した画像を生成する」などが日常的に行われるようになり、既存の著作権法が想定していない事態が生じているためです。世界中で訴訟が相次いでいます（The New York Times vs OpenAI・Getty Images vs Stability AI等）。

各国の対応として、日本では「AIの開発・学習目的の著作物利用は著作権者の許諾不要」（著作権法30条の4）という世界でも先進的な規定がある一方、生成AIの出力が既存著作物と類似する場合の著作権侵害には慎重な解釈が求められます。米国著作権局は「AIが主体的に創作した作品には著作権は認められない」との立場を示しています。EU AI Actでも学習データの透明性開示が義務化されています。`,
    relatedSlugs: ["ai-regulation", "ai-governance", "privacy", "responsible-ai", "generative-ai"],
    sources: [
      {
        title: "AIと著作権に関する考え方について",
        url: "https://www.bunka.go.jp/seisaku/chosakuken/pdf/93903601_01.pdf",
        publisher: "文化庁（2024）",
        accessedAt: "2026-02-26",
      },
      {
        title: "Copyright and Artificial Intelligence - US Copyright Office",
        url: "https://www.copyright.gov/ai/",
        publisher: "US Copyright Office",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "latency",
    term: "レイテンシ（応答遅延）",
    reading: "レイテンシ",
    category: "実装",
    summary:
      "レイテンシとは、LLMが入力を受け取ってから最初のトークンを返すまでの時間（TTFT: Time to First Token）です。ユーザー体験に直結する重要な性能指標で、streamingやprompt-cachingで改善できます。",
    description: `レイテンシ（Latency）とは、リクエストを送信してからレスポンスを受け取るまでの遅延時間のことです。LLMのAPI文脈では特に「TTFT（Time to First Token：最初のトークンが返るまでの時間）」と「スループット（1秒あたりのトークン生成数）」が重要な指標です。

レイテンシが重要な理由は、ユーザー体験（UX）に直結するためです。TTFT が1秒以上かかると、ユーザーは「遅い」と感じ離脱率が上がります。特にリアルタイム音声会話やオートコンプリートなど低遅延が必須のアプリケーションでは、レイテンシの最適化が機能要件となります。一方、バッチ処理や非同期タスクではスループット（コストあたりの処理量）の方が重要です。

レイテンシ改善の主な手法として、①streamingによる最初のトークンから順次表示（体感速度の改善）、②prompt-cachingによるプレフィックス再利用（TTFT削減）、③speculative-decodingによる生成速度向上、④quantizationとモデル軽量化、⑤リージョン最適化（サーバーとクライアントの地理的距離短縮）などがあります。OpenAIやAnthropicのAPIダッシュボードではTTFT・スループットの統計が確認でき、llmopsの監視指標の中心です。`,
    relatedSlugs: ["inference", "streaming", "prompt-caching", "speculative-decoding", "gpu"],
    sources: [
      {
        title: "OpenAI API Rate Limits and Performance",
        url: "https://platform.openai.com/docs/guides/rate-limits",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Anthropic API Performance Documentation",
        url: "https://docs.anthropic.com/en/api/getting-started",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "knowledge-graph",
    term: "ナレッジグラフ",
    reading: "ナレッジグラフ",
    category: "基礎概念",
    summary:
      "ナレッジグラフとは、エンティティ（人・場所・概念）とその関係性をグラフ構造で表現した知識ベースです。Google Knowledge GraphやWikidataが代表例で、GraphRAGの基盤技術として生成AIとの連携が進んでいます。",
    description: `ナレッジグラフ（Knowledge Graph）とは、現実世界の「エンティティ（実体）」とエンティティ間の「関係（リレーション）」を有向グラフ形式で表現した構造化された知識ベースです。「東京（エンティティ）」→「首都である（関係）」→「日本（エンティティ）」のように、三つ組（トリプル）の形で知識を表現します。

ナレッジグラフが重要な理由は、テキストのような非構造化データと比較して、関係性・文脈・推論が機械処理に適した形式で表現されているためです。Googleは2012年に「Google Knowledge Graph」を導入し、検索結果の右側に表示される情報ボックス（ナレッジパネル）に活用しています。これにより検索クエリに対してより直接的な答えを提供できるようになりました。

RAGシステムへの応用として、graph-ragでは文書からエンティティと関係を自動抽出してナレッジグラフを構築し、複数の文書にまたがる「誰が誰とどのような関係にあるか」という複合的な質問に対応できます。通常のRAGではベクトル検索で関連文書を取得しますが、ナレッジグラフを組み合わせることで関係性に基づいた推論が可能になります。オープンデータとしてWikidata・DBpedia・FreeBaseなどが公開されており、SPARQL等のクエリ言語で検索できます。`,
    relatedSlugs: ["graph-rag", "rag", "semantic-search", "grounding", "retrieval"],
    sources: [
      {
        title: "Introducing the Knowledge Graph: things, not strings - Google",
        url: "https://blog.google/products/search/introducing-knowledge-graph-things-not/",
        publisher: "Google (2012)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Knowledge graph - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Knowledge_graph",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "graph-rag",
    term: "GraphRAG",
    reading: "グラフラグ",
    category: "実装",
    summary:
      "GraphRAGとは、文書からナレッジグラフを構築しグラフ構造を活用して複数文書にまたがる複合質問に対応するRAG拡張手法です。Microsoftが2024年に発表し、従来のベクトル検索RAGを超える複雑なクエリ処理を実現します。",
    description: `GraphRAG（Graph Retrieval-Augmented Generation）とは、従来のRAGが文書のベクトル類似度検索に頼るのに対し、文書コーパス全体からエンティティ・関係・コミュニティをナレッジグラフとして抽出し、このグラフ構造を活用した検索・集約を行うRAGの拡張手法です。Microsoftが2024年4月に論文・OSSとして発表しました。

GraphRAGが重要な理由は、通常のベクトル検索RAGが苦手とする「文書全体を横断した俯瞰的な質問」や「複数エンティティ間の関係を問う質問」に対応できるためです。例えば「この研究分野で最も引用されているテーマは何か」「A社とB社の共通の競合はどこか」といったグローバルな質問は、局所的な類似文書を取得するだけでは答えられませんが、GraphRAGはコミュニティ要約を活用して対応します。

Microsoftが公開したGraphRAGは「Local Search（特定エンティティについての質問）」と「Global Search（文書全体を俯瞰する質問）」の2モードを持ちます。ローカル検索ではエンティティのコミュニティレポートとテキストチャンクを組み合わせ、グローバル検索ではコミュニティ要約をマップリデュース型で集約します。knowledge-graphとLLMの組み合わせによる新しいRAGパターンとして注目度が高まっています。`,
    relatedSlugs: ["rag", "knowledge-graph", "retrieval", "llm", "embedding"],
    sources: [
      {
        title: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization",
        url: "https://arxiv.org/abs/2404.16130",
        publisher: "arXiv / Edge et al. / Microsoft (2024)",
        accessedAt: "2026-02-26",
      },
      {
        title: "GraphRAG - Microsoft Research",
        url: "https://microsoft.github.io/graphrag/",
        publisher: "Microsoft",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "prompt-compression",
    term: "プロンプト圧縮",
    reading: "プロンプトあっしゅく",
    category: "実装",
    summary:
      "プロンプト圧縮とは、長いプロンプトから重要な情報を保ちつつトークン数を削減してAPIコストと遅延を改善する技術です。LLMLinguaが代表的なツールで、RAGの検索結果などの冗長なテキストを圧縮します。",
    description: `プロンプト圧縮（Prompt Compression）とは、LLMに送信するプロンプトの品質を保ちながらトークン数を削減する技術です。RAGで取得した大量のコンテキスト・長い会話履歴・冗長な文書を圧縮することで、APIコストの削減・処理速度の向上・context-windowの有効活用を実現します。

プロンプト圧縮が重要な理由は、RAGシステムでは検索結果として大量のテキストをLLMに渡すことが多く、これがAPIコスト増大とレイテンシ上昇の主要因となるためです。特に長コンテキストモデルでも、無駄なトークンはコストに直結します。Microsoft Researchが2023年に発表したLLMLinguaは、小型LLMを使ってプロンプト内のトークン重要度を評価し、重要度の低いトークンを選択的に除去することで最大20倍の圧縮を実現しました。

主な手法として、LLMLingua（重要度ベースのトークン削除）、LLMLingua-2（タスク非依存の高速圧縮）、Selective Context（文のperplexityを使った重要文選択）、Gist Tokens（圧縮表現を学習するfine-tuning手法）などがあります。圧縮率と情報損失のトレードオフが課題であり、タスクや文書の種類によって最適な手法が異なります。prompt-cachingと組み合わせることでさらなるコスト最適化が可能です。`,
    relatedSlugs: ["prompt-engineering", "context-window", "prompt-caching", "latency", "llmops"],
    sources: [
      {
        title: "LLMLingua: Compressing Prompts for Accelerated Inference of Large Language Models",
        url: "https://arxiv.org/abs/2310.05736",
        publisher: "arXiv / Jiang et al. / Microsoft (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "LLMLingua - GitHub",
        url: "https://github.com/microsoft/LLMLingua",
        publisher: "Microsoft",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "active-learning",
    term: "能動学習",
    reading: "のうどうがくしゅう",
    category: "基礎概念",
    summary:
      "能動学習とは、モデルが最も学習効果の高いサンプルを自ら選択してラベル付けを依頼する、効率的なデータ収集・学習手法です。アノテーションコストを最小化しながら性能を最大化します。",
    description: `能動学習（Active Learning）とは、機械学習モデルが大量のラベルなしデータの中から「ラベル付けされれば最も学習効果が高い」サンプルを自律的に選び出し、人間のアノテーターに優先的にラベル付けを依頼するデータ効率化手法です。受動的に与えられたデータで学習する通常の教師あり学習と対比されます。

能動学習が重要な理由は、実世界の機械学習プロジェクトでデータのラベル付けコスト（人件費・時間）が大きなボトルネックとなっているためです。医療画像の診断ラベル・法律文書の分類・専門的な翻訳評価など、専門家による高コストなアノテーションが必要な場合、能動学習によってラベル付けすべきサンプル数を大幅に削減できます。

主なサンプル選択戦略として、不確実性サンプリング（モデルが最も不確かなサンプルを選択）、多様性サンプリング（既存の学習データと最も異なるサンプルを選択）、コアセット選択（代表的なサンプル群を選択）などがあります。LLMの文脈では、fine-tuning用のデモンストレーションデータ選定やRLHF用の比較データ収集の効率化に能動学習的な考え方が応用されています。synthetic-dataと組み合わせて少量の高品質人間ラベルと大量の合成データを組み合わせるアプローチも研究されています。`,
    relatedSlugs: ["supervised-learning", "fine-tuning", "synthetic-data", "evaluation-metrics", "benchmark"],
    sources: [
      {
        title: "Active Learning Literature Survey",
        url: "https://minds.wisconsin.edu/handle/1793/60660",
        publisher: "Settles (2009) / University of Wisconsin",
        accessedAt: "2026-02-26",
      },
      {
        title: "Active learning - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Active_learning_(machine_learning)",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "machine-translation",
    term: "機械翻訳",
    reading: "きかいほんやく",
    category: "実装",
    summary:
      "機械翻訳とは、テキストを自動的に別の言語に翻訳するAI技術です。DeepL・Google翻訳が代表例で、Transformerの登場以降に飛躍的に精度が向上し、今やLLMが多言語翻訳を包括的にこなせるようになっています。",
    description: `機械翻訳（Machine Translation、MT）とは、コンピュータがある言語のテキストを別の言語のテキストに自動変換するNLP技術です。1950年代のルールベース翻訳から、統計的機械翻訳（SMT）を経て、現在はニューラル機械翻訳（NMT）が主流です。

機械翻訳が進化してきた理由は、グローバルなコミュニケーション需要と技術の飛躍的な進歩が同時に起きているためです。Transformerアーキテクチャ（2017年）の登場によりNMTの精度が大幅に向上し、DeepLは2017年に特定言語ペアでプロ翻訳者に匹敵する品質を達成したと主張しました。さらにGPT-4などのLLMは追加の翻訳特化学習なしにも高品質な翻訳が可能になっています。

NMTの標準アーキテクチャはencoder-decoderで、原文をエンコードして潜在表現を生成し、そこから目的言語テキストをデコードします。評価指標にはBLEUスコア（翻訳文と参照訳の一致度を測るn-gram精度）が長く使われてきましたが、LLMによる評価（COMET等）も普及しています。日本語←→英語・中国語の翻訳は特に難しく、DeepL・Google翻訳・Microsoft TranslatorなどのAPIが広く使われています。ビジネス文書の翻訳自動化・多言語カスタマーサポートなど実務活用が急速に進んでいます。`,
    relatedSlugs: ["natural-language-processing", "transformer", "llm", "bert", "encoder-decoder"],
    sources: [
      {
        title: "Attention Is All You Need (Transformer論文)",
        url: "https://arxiv.org/abs/1706.03762",
        publisher: "arXiv / Vaswani et al. (2017)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Machine translation - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Machine_translation",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "sentiment-analysis",
    term: "感情分析",
    reading: "かんじょうぶんせき",
    category: "実装",
    summary:
      "感情分析とは、テキストからポジティブ・ネガティブ・中立などの感情や意見を自動判定するNLPタスクです。SNS監視・カスタマーレビュー分析・ブランドモニタリングに広く活用されています。",
    description: `感情分析（Sentiment Analysis）とは、テキストに含まれる書き手の感情・意見・態度を自動的に識別・分類するNLPタスクです。オピニオンマイニングとも呼ばれます。最も基本的な形式は「ポジティブ/ネガティブ/中立」の3クラス分類ですが、より細粒度な「喜び・悲しみ・怒り・恐れ・驚き・嫌悪」などの感情分類や、5段階評価の予測なども行われます。

感情分析が重要な理由は、ビジネス上のテキストデータ（カスタマーレビュー・SNS投稿・問い合わせメール等）が膨大にあり、人手で分析することが現実的でないためです。ECサイトの商品レビュー分析（ポジネガ比率の把握）、SNS上のブランドモニタリング（炎上検知）、カスタマーサポートの緊急度判定、株価予測への応用（金融ニュースの感情分析）など、幅広い実務で活用されています。

技術的には、従来はBERTなどのEncoder型モデルのfine-tuningが主流でしたが、GPT系LLMのfew-shot-learningでも高精度な感情分析が可能になっています。日本語の感情分析は、否定表現（「おいしくない」）・皮肉（「さすがですね」）・文化的文脈の理解が課題です。評価指標にはF1スコア・精度（Accuracy）が使われます。AspectベースSentiment Analysis（ABSA）では「バッテリーは良いが画面が暗い」のように属性ごとの感情を分離して分析します。`,
    relatedSlugs: ["natural-language-processing", "llm", "bert", "fine-tuning", "evaluation-metrics"],
    sources: [
      {
        title: "Sentiment Analysis and Opinion Mining",
        url: "https://www.morganclaypool.com/doi/abs/10.2200/S00416ED1V01Y201204HLT016",
        publisher: "Liu (2012) / Morgan & Claypool",
        accessedAt: "2026-02-26",
      },
      {
        title: "Sentiment analysis - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Sentiment_analysis",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "question-answering",
    term: "質問応答（QA）",
    reading: "しつもんおうとう",
    category: "実装",
    summary:
      "質問応答（QA）とは、自然言語の質問に対してテキストから正確な答えを抽出・生成するNLPタスクです。RAGの主要ユースケースであり、ChatGPTのような対話AIの基盤能力でもあります。",
    description: `質問応答（Question Answering、QA）とは、ユーザーが自然言語で問いかけた質問に対して、システムが参照文書や学習知識から正確な回答を提供するNLPタスクです。情報検索・読解・知識推論を組み合わせた複合的なタスクです。

QAが重要な理由は、「検索してからページを読む」という従来の情報取得プロセスを「直接答えを得る」に変革するためです。企業のFAQボット・社内ナレッジベース検索・医療情報提供など、多様なビジネスユースケースの基盤となっています。ChatGPTをはじめとするLLMベースの対話AIが大衆化した背景にも、QA能力の飛躍的向上があります。

主な種類として、抽出型QA（文書から回答を含むスパンを抽出、SQuADが代表的ベンチマーク）、生成型QA（LLMが回答を生成）、知識ベースQA（ナレッジグラフに対するクエリ）、マルチホップQA（複数文書・複数推論ステップが必要な質問）があります。ragと組み合わせた「Open-Domain QA」では、大規模文書集合からまず関連文書を検索し、LLMが回答を生成します。groundingが弱いとhallucination（誤った回答の生成）のリスクがあり、rerankingやソース引用が重要な品質保証手段です。`,
    relatedSlugs: ["rag", "retrieval", "llm", "grounding", "benchmark"],
    sources: [
      {
        title: "SQuAD: 100,000+ Questions for Machine Comprehension of Text",
        url: "https://arxiv.org/abs/1606.05250",
        publisher: "arXiv / Rajpurkar et al. (2016)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Question answering - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Question_answering",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "information-retrieval",
    term: "情報検索",
    reading: "じょうほうけんさく",
    category: "基礎概念",
    summary:
      "情報検索とは、ユーザーのクエリに対して大規模文書集合から関連情報を効率的に検索・取得する技術体系です。RAGの基盤技術であり、BM25・ベクトル検索・ハイブリッド検索などの手法で実装されます。",
    description: `情報検索（Information Retrieval、IR）とは、大規模なテキスト文書集合の中から、ユーザーの情報ニーズ（クエリ）に適合する文書や情報を効率的に見つけ出して提供するための理論・技術体系です。Webサーチエンジン（Google等）から社内文書検索まで幅広いシステムの基盤となっています。

情報検索が重要な理由は、人間が必要な情報を適切なタイミングで入手できるかどうかがあらゆる知的活動の効率を決定するためです。LLMの普及以降、情報検索はRAGの「R（Retrieval）」として生成AIシステムの中核コンポーネントとなっており、情報検索の品質がRAGシステム全体の回答品質を左右します。

主な技術として、語彙ベース検索（BM25・TF-IDF：キーワードの一致度でスコアリング）、密ベクトル検索（Dense Retrieval：embeddingによるsemantic-search）、sparse+denseを組み合わせたhybrid-search、検索結果を精緻化するrerankingがあります。評価指標にはPrecision@K・Recall@K・MRR（Mean Reciprocal Rank）・NDCG（Normalized Discounted Cumulative Gain）が使われます。BEIRベンチマークがゼロショット検索能力の標準評価として広く参照されています。`,
    relatedSlugs: ["retrieval", "semantic-search", "hybrid-search", "vector-db", "rag"],
    sources: [
      {
        title: "Introduction to Information Retrieval",
        url: "https://nlp.stanford.edu/IR-book/",
        publisher: "Manning, Raghavan & Schütze (2008) / Cambridge University Press",
        accessedAt: "2026-02-26",
      },
      {
        title: "Information retrieval - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Information_retrieval",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "multimodal-rag",
    term: "マルチモーダルRAG",
    reading: "マルチモーダルラグ",
    category: "実装",
    summary:
      "マルチモーダルRAGとは、テキストに加えて画像・表・図・音声などの複数モダリティを含む文書を検索・活用するRAG拡張手法です。PDF・プレゼンテーション・製品カタログなどの複合文書処理に有効です。",
    description: `マルチモーダルRAG（Multimodal RAG）とは、テキストのみを扱う従来のRAGを拡張し、画像・表・グラフ・図・音声・動画など複数の情報形式（モダリティ）を含む文書を処理・検索・回答生成に活用するシステムです。現実のビジネス文書はほぼすべてテキスト以外の要素を含むため、マルチモーダルRAGは実用的なRAGシステムに不可欠な技術となっています。

マルチモーダルRAGが重要な理由は、PDFの製品マニュアル・決算資料・研究論文・プレゼンテーションなどにはテキストと画像・図・表が混在しており、テキストのみを抽出したRAGでは重要な情報（グラフのデータ・フローチャートの手順・製品写真等）を失うためです。

主な実装アプローチとして、①マルチベクトル検索（テキストと画像をそれぞれembeddingして統合検索）、②画像のキャプション化（vision-language-modelで画像を説明テキストに変換してからRAG）、③Col-PaliやColFlor（ページ画像を直接embeddingするDocument Retrieval）などがあります。LlamaIndex・LangChainなどのRAGフレームワークがマルチモーダル対応を強化しています。医療（レントゲン+所見・病理画像+診断）・製造（製品仕様書+図面）・金融（有価証券報告書+グラフ）などで実用化が進んでいます。`,
    relatedSlugs: ["rag", "multimodal", "vision-language-model", "retrieval", "embedding"],
    sources: [
      {
        title: "Multi-modal RAG - LlamaIndex Documentation",
        url: "https://docs.llamaindex.ai/en/stable/use_cases/multimodal/",
        publisher: "LlamaIndex",
        accessedAt: "2026-02-26",
      },
      {
        title: "ColPali: Efficient Document Retrieval with Vision Language Models",
        url: "https://arxiv.org/abs/2407.01449",
        publisher: "arXiv / Faysse et al. (2024)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "bias-mitigation",
    term: "バイアス軽減",
    reading: "バイアスけいげん",
    category: "法務・倫理",
    summary:
      "バイアス軽減とは、AIモデルの性別・人種・文化的バイアスを検出・低減するための技術的・手続き的アプローチです。公平なAIの実現に向け、データ収集から評価・デプロイまで各フェーズでの対策が必要です。",
    description: `バイアス軽減（Bias Mitigation）とは、機械学習モデルやLLMに存在する不公平な偏り（バイアス）を検出し、その影響を削減するための技術的・プロセス的アプローチの総称です。学習データに含まれる社会的偏見や統計的偏りが、モデルの予測・生成に不公平な形で反映されることを防ぎます。

バイアス軽減が重要な理由は、AIシステムが採用選考・融資審査・医療診断支援・刑事司法など人の権利に影響する領域で広く使われるようになり、バイアスによる差別的な影響が現実問題として顕在化しているためです。例えば採用AIが特定の性別・人種を不当に低く評価したり、顔認証システムが有色人種に対して精度が低かったりする問題が報告されています。

バイアス軽減のアプローチは3段階に分類されます。①前処理（学習データの偏り修正・再サンプリング）、②学習中（公平性制約を損失関数に組み込む・Adversarial Debiasing）、③後処理（出力の閾値調整・後段フィルタリング）。評価にはDemographic Parity・Equal Opportunity・Calibrationなどの公平性指標が使われます。Google PAIR Guidebook・IBM AI Fairness 360・Microsoft Fairlearn等のツールが実装を支援しています。responsible-aiやmodel-cardとの連携で透明性ある公平性評価が推奨されます。`,
    relatedSlugs: ["bias", "responsible-ai", "ai-governance", "alignment", "evaluation-metrics"],
    sources: [
      {
        title: "Language (Technology) is Power: A Critical Survey of \"Bias\" in NLP",
        url: "https://arxiv.org/abs/2005.14050",
        publisher: "arXiv / Blodgett et al. (2020)",
        accessedAt: "2026-02-26",
      },
      {
        title: "People + AI Guidebook - Google PAIR",
        url: "https://pair.withgoogle.com/guidebook/",
        publisher: "Google PAIR",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "llm-as-judge",
    term: "LLM-as-a-Judge",
    reading: "エルエルエムアズジャッジ",
    category: "評価",
    summary:
      "LLM-as-a-Judgeとは、LLM自身を評価者として使い、他のLLMの出力品質を自動採点する評価手法です。人間評価のスケールアップを実現し、RAGシステムやチャットボットの品質監視に広く活用されています。",
    description: `LLM-as-a-Judge（LLMを審判として使う）とは、人間の評価者の代わりに強力なLLM（主にGPT-4・Claude等）を使って、別のLLMやAIシステムの出力を自動評価する手法です。Zhengらが2023年に「MT-BenchとChatbot Arenaを使ったLLMの評価」論文で体系化し、LLMの評価フレームワークとして急速に普及しました。

LLM-as-a-Judgeが重要な理由は、LLMの出力評価の難しさにあります。翻訳のBLEUスコアや分類のAccuracyと違い、「この回答は役に立つか」「この要約は正確か」という品質は自動計算が難しく、従来は人間評価が必要でした。LLMを審判として使うことで、人間と高い相関を持つ品質評価を大規模・低コストで自動化できます。

評価方式として、単一回答スコアリング（1〜10点スケール）、ペアワイズ比較（A vs Bどちらが良いか）、参照ベース評価（正解と比較）の3種類があります。課題として、評価LLM自身のバイアス（長い回答や自社モデルを好む傾向）・ポジションバイアス（最初の回答を好む傾向）があり、複数の評価LLMを使ったり順序をランダム化したりすることで対策します。RAGEvalsやRagas等のフレームワークがLLM-as-a-Judgeを組み込んだRAG評価を自動化しています。`,
    relatedSlugs: ["evaluation-metrics", "benchmark", "llm", "rag", "llmops"],
    sources: [
      {
        title: "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena",
        url: "https://arxiv.org/abs/2306.05685",
        publisher: "arXiv / Zheng et al. (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "LLM-as-a-judge - Wikipedia",
        url: "https://en.wikipedia.org/wiki/LLM-as-a-judge",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "data-annotation",
    term: "データアノテーション",
    reading: "データアノテーション",
    category: "基礎概念",
    summary:
      "データアノテーションとは、機械学習の学習データに対して人間がラベル・タグ・説明などの正解情報を付与する作業です。AIモデルの品質に直結する重要なプロセスで、RLHFでは人間の好みを学習させるための比較評価が中心です。",
    description: `データアノテーション（Data Annotation）とは、機械学習・深層学習モデルを訓練するために必要な「正解ラベル（教師信号）」を人間が生データに付与する作業の総称です。ラベリング・タギングとも呼ばれます。教師あり学習においてモデルの性能はアノテーションの品質・量・多様性に大きく依存します。

データアノテーションが重要な理由は、「AIの品質はデータの品質で決まる」という原則があるためです。ChatGPTの成功を支えたRLHFでは、数千〜数万件の人間による「どちらの回答が良いか」という比較評価（プリファレンスデータ）が学習の核心です。また画像認識では物体の境界線を正確に描くセマンティックセグメンテーション、音声認識では音声と文字起こしのアライメントなど、タスクによって様々な形式のアノテーションが必要です。

アノテーションのコスト・速度・品質のバランスが実務上の大きな課題です。Scale AI・Appen・Labelboxなどの専業プラットフォームや、クラウドソーシング（Amazon Mechanical Turk等）が活用されます。品質管理のためにアノテーター間一致率（Inter-Annotator Agreement、IAA）の測定が重要です。active-learningを使ったアノテーション効率化や、synthetic-dataによるアノテーション削減も研究されています。`,
    relatedSlugs: ["supervised-learning", "rlhf", "sft", "active-learning", "benchmark"],
    sources: [
      {
        title: "Data annotation - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Data_annotation",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Scale AI - Data Annotation Platform",
        url: "https://scale.com/",
        publisher: "Scale AI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "overfitting",
    term: "過学習（オーバーフィッティング）",
    reading: "かがくしゅう",
    category: "基礎概念",
    summary:
      "過学習とは、モデルが学習データに適合しすぎて未見データへの汎化性能が低下する現象です。正則化・ドロップアウト・データ拡張・早期終了などが対策として使われます。LLMのfine-tuningでも起きやすい問題です。",
    description: `過学習（Overfitting）とは、機械学習モデルが訓練データのパターンを「覚えすぎて」しまい、訓練データに対する性能は高いのに未見のテストデータに対しては精度が低下する現象です。モデルが訓練データのノイズや特殊事例まで記憶してしまい、本質的なパターンの汎化に失敗した状態です。

過学習が重要な問題として認識されている理由は、実際の機械学習アプリケーションでは訓練データではなく「新しいデータに対する性能」が重要だからです。訓練データで99%の精度を達成しても、実運用で70%しか出なければ意味がありません。特にモデルサイズに比べて訓練データが少ない場合、深層モデルは過学習しやすい傾向があります。

対策として、正則化（L1/L2正則化でパラメータの過剰な増大を抑制）、ドロップアウト（学習中にランダムにニューロンを無効化）、データ拡張（既存データを変換して多様性を増やす）、早期終了（検証データの性能が悪化し始めたら学習を止める）、バッチ正規化などがあります。LLMのfine-tuning文脈では、少量のドメイン固有データで大きなモデルをfine-tuningすると過学習が起きやすく、LoRAなどのPEFT手法が過学習を抑えながら効率的な適応を実現します。`,
    relatedSlugs: ["machine-learning", "deep-learning", "fine-tuning", "benchmark", "evaluation-metrics"],
    sources: [
      {
        title: "Overfitting - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Overfitting",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Deep Learning - Goodfellow, Bengio & Courville (2016)",
        url: "https://www.deeplearningbook.org/",
        publisher: "MIT Press",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "gradient-descent",
    term: "勾配降下法",
    reading: "こうばいこうかほう",
    category: "基礎概念",
    summary:
      "勾配降下法とは、損失関数の勾配（微分）を計算してパラメータを更新するニューラルネットワーク学習の基本アルゴリズムです。SGD・Adam・AdamWなどが派生形で、LLMのfine-tuningでも中心的な最適化手法です。",
    description: `勾配降下法（Gradient Descent）とは、最小化したい目的関数（損失関数）の各パラメータに対する偏微分（勾配）を計算し、損失が小さくなる方向（勾配の逆方向）にパラメータを少しずつ更新することでモデルを学習させるアルゴリズムです。ニューラルネットワーク学習の中心的な手法です。

勾配降下法が重要な理由は、数十億のパラメータを持つニューラルネットワークに対して「損失を最小化するパラメータ」を効率的に探索する方法として、理論的に有効であり実装も可能な唯一のスケーラブルな手法だからです。バックプロパゲーションと組み合わせることで、出力の誤差を逆方向に伝播させながら各パラメータの勾配を計算できます。

主な変種として、確率的勾配降下法（SGD：全データの代わりに1サンプルの勾配を使う）、ミニバッチ勾配降下法（少数のサンプルの平均勾配を使う）、Momentum（過去の勾配の方向を考慮）、Adam（適応的学習率、現在最も広く使われる）、AdamW（Adamに重み減衰を追加、LLM fine-tuningの標準）などがあります。learning-rateの設定が収束速度と最終性能に大きく影響し、warm-up・コサインアニーリングなどのスケジューリングが実務で多用されます。`,
    relatedSlugs: ["deep-learning", "neural-network", "parameter", "learning-rate", "fine-tuning"],
    sources: [
      {
        title: "Gradient descent - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Gradient_descent",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "An overview of gradient descent optimization algorithms",
        url: "https://arxiv.org/abs/1609.04747",
        publisher: "arXiv / Ruder (2016)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "learning-rate",
    term: "学習率",
    reading: "がくしゅうりつ",
    category: "基礎概念",
    summary:
      "学習率とは、勾配降下法で各ステップにパラメータを更新する大きさを制御するハイパーパラメータです。LLMのfine-tuningでも最重要のチューニングパラメータで、高すぎると発散、低すぎると収束が遅くなります。",
    description: `学習率（Learning Rate）とは、勾配降下法においてパラメータをどの程度の大きさで更新するかを制御するハイパーパラメータです。数式では「新しいパラメータ = 古いパラメータ − 学習率 × 勾配」と表されます。学習率αが大きいと1ステップの更新量が大きく、小さいと小さくなります。

学習率が重要な理由は、ニューラルネットワークの学習において最も影響力の高いハイパーパラメータの一つだからです。学習率が高すぎると、損失関数の最小値を飛び越えて発散してしまいます。低すぎると収束が非常に遅く、局所最小値に陥りやすくなります。「ちょうど良い学習率」を見つけることが学習成功の鍵であり、これがhyperparameterチューニングの最重要タスクです。

実務的な手法として、learning rate warmup（最初は小さい学習率から始めて徐々に増やす）、cosine annealing（コサイン関数に従って学習率を減衰させる）、learning rate finder（最適な学習率を自動探索する）、cyclical learning rate（周期的に学習率を変動させる）などのスケジューリング手法が普及しています。LLMのfine-tuningでは、ベースモデルを壊さないよう通常1e-5〜1e-4程度の低い学習率が使われます。AdamWオプティマイザと組み合わせるのが現在の標準的な実践です。`,
    relatedSlugs: ["gradient-descent", "fine-tuning", "hyperparameter", "deep-learning", "sft"],
    sources: [
      {
        title: "Learning rate - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Learning_rate",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Practical Deep Learning for Coders - fast.ai",
        url: "https://course.fast.ai/",
        publisher: "fast.ai",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "hyperparameter",
    term: "ハイパーパラメータ",
    reading: "ハイパーパラメータ",
    category: "基礎概念",
    summary:
      "ハイパーパラメータとは、学習前に人間が設定するモデル外部のパラメータです（学習率・バッチサイズ・エポック数・レイヤー数等）。モデルの性能に大きく影響し、AutoMLや手動チューニングで最適値を探索します。",
    description: `ハイパーパラメータ（Hyperparameter）とは、機械学習モデルの訓練プロセス自体を制御するパラメータであり、データから自動的に学習されるモデルパラメータ（重み）とは異なり、学習開始前に人間（または自動化ツール）が設定する外部パラメータです。

ハイパーパラメータが重要な理由は、同じモデルアーキテクチャとデータを使っても、ハイパーパラメータの設定によって性能が大きく変わるためです。最適なハイパーパラメータを見つけることは「ハイパーパラメータ最適化（HPO）」と呼ばれる独立した研究・実践領域です。

主なハイパーパラメータとして、learning-rate（更新量の大きさ）、バッチサイズ（一度に処理するサンプル数）、エポック数（訓練データを何周するか）、モデルの層数・幅（アーキテクチャパラメータ）、正則化係数、ドロップアウト率、temperature（LLMの出力多様性）などがあります。LLMのfine-tuning文脈では、learning-rate・warm-upステップ数・LoRAのrank値などが重要なハイパーパラメータです。探索手法としてグリッドサーチ・ランダムサーチ・ベイズ最適化があり、automlがこれを自動化します。Weights & Biases（W&B）Sweepなどのツールが体系的な探索を支援します。`,
    relatedSlugs: ["learning-rate", "fine-tuning", "automl", "deep-learning", "benchmark"],
    sources: [
      {
        title: "Hyperparameter optimization - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Hyperparameter_optimization",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Random Search for Hyper-Parameter Optimization",
        url: "https://jmlr.org/papers/v13/bergstra12a.html",
        publisher: "JMLR / Bergstra & Bengio (2012)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "recurrent-neural-network",
    term: "RNN（リカレントニューラルネットワーク）",
    reading: "リカレントニューラルネットワーク",
    category: "モデル",
    summary:
      "RNNとは、前の出力を次の入力に使う再帰的な構造で時系列・系列データを処理するニューラルネットワークです。LSTMやGRUが発展形で、Transformerの登場前はNLPの主力アーキテクチャでした。",
    description: `RNN（Recurrent Neural Network：リカレントニューラルネットワーク）とは、前の時刻の隠れ状態（hidden state）を次の時刻の入力に持ち込む「フィードバック接続」を持つニューラルネットワークです。時系列データ・テキスト・音声など「順序が意味を持つ系列データ」の処理に設計されています。

RNNが重要だった理由は、固定長の入力しか受け取れないFNNとは異なり、可変長の系列データを扱える点です。2010年代のNLP・音声認識の主要アーキテクチャとして、機械翻訳・言語モデル・音声認識システムに広く使われました。

しかしRNNは「勾配消失問題（長い系列で古い情報の勾配が消えてしまう）」という本質的な課題を抱えます。LSTM（Long Short-Term Memory）とGRU（Gated Recurrent Unit）はゲーティング機構でこの問題を緩和した発展形です。2017年のTransformerの登場により、RNN・LSTMはNLPの主役の座をAttentionメカニズムベースのモデルに譲りました。現在も軽量なオンデバイス推論や時系列予測の一部での活用が続いていますが、LLMはほぼすべてtransformerアーキテクチャを採用しています。encoder-decoderアーキテクチャも元々はRNNで実装されていました。`,
    relatedSlugs: ["neural-network", "deep-learning", "transformer", "natural-language-processing", "encoder-decoder"],
    sources: [
      {
        title: "Finding Structure in Time",
        url: "https://onlinelibrary.wiley.com/doi/abs/10.1207/s15516709cog1402_1",
        publisher: "Cognitive Science / Elman (1990)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Recurrent neural network - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Recurrent_neural_network",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "convolutional-neural-network",
    term: "CNN（畳み込みニューラルネットワーク）",
    reading: "たたみこみニューラルネットワーク",
    category: "モデル",
    summary:
      "CNNとは、局所フィルタ（畳み込み層）を使って画像の特徴を階層的に抽出するニューラルネットワークです。画像分類・物体検出の主要アーキテクチャで、VisionTransformerへの移行後も医療・製造分野で広く使われています。",
    description: `CNN（Convolutional Neural Network：畳み込みニューラルネットワーク）とは、画像処理に特化した「畳み込み層（Convolutional Layer）」を持つニューラルネットワークです。小さなフィルタ（カーネル）を画像全体にスライドさせながら適用することで、エッジ・テクスチャ・形状などの局所的特徴を階層的に抽出します。

CNNが重要な理由は、2012年のAlexNet（ImageNetでのエラー率を劇的に改善）がCNNの有効性を証明して以来、画像認識AIの中核技術となってきたためです。LeNet・AlexNet・VGG・ResNet・EfficientNetと進化し、医療画像診断・顔認識・自動運転・製造業の外観検査など多様な産業用途に採用されました。

技術的な特徴として、重み共有（同じフィルタを画像全体に適用することでパラメータを大幅削減）、局所受容野（近傍ピクセルのみを考慮）、プーリング層（次元削減・空間不変性の獲得）があります。2020年代にはTransformerベースのVision Transformer（ViT）が画像認識でも高性能を示しており、大規模モデルではViTがCNNに取って代わりつつあります。ただしCNNは計算効率・解釈可能性の面でまだ優位性を持つ分野があり、vision-language-modelのビジュアルエンコーダーとしても使われています。`,
    relatedSlugs: ["neural-network", "deep-learning", "text-to-image", "vision-language-model", "transfer-learning"],
    sources: [
      {
        title: "ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)",
        url: "https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
        publisher: "NeurIPS / Krizhevsky et al. (2012)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Convolutional neural network - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Convolutional_neural_network",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "semantic-chunking",
    term: "セマンティックチャンキング",
    reading: "セマンティックチャンキング",
    category: "実装",
    summary:
      "セマンティックチャンキングとは、RAGにおいてドキュメントを意味的な塊（チャンク）に分割する手法です。固定文字数分割と異なり意味的な境界で分割するため、検索精度と回答品質が向上します。",
    description: `セマンティックチャンキング（Semantic Chunking）とは、RAGシステムにおいて長文ドキュメントをベクトル化・検索可能な単位（チャンク）に分割する際、文字数や段落番号などの表面的な基準ではなく、「意味的なまとまり」を基準に分割する手法です。テキストの内容的なまとまりを保ちながら分割することで、検索時のコンテキスト整合性が向上します。

セマンティックチャンキングが重要な理由は、固定文字数（例：512トークン）での機械的な分割では文章の途中で切れてしまい、意味的な文脈が失われた不完全なチャンクが生成されるためです。「質問：○○とは何か」→検索されたチャンクが文の途中で切れていて答えが含まれない、というケースが頻発します。セマンティックチャンキングによって各チャンクが意味的に完結した情報単位になり、検索と回答生成の品質が改善します。

主な実装アプローチとして、文埋め込みの類似度を使って近い意味の文を同じチャンクにまとめる手法（LangChain SemanticChunker）、LLMを使って意味的な段落境界を検出する手法、文書の構造（見出し・リスト・表）を活用する構造ベース分割があります。チャンクサイズのオーバーラップ（連続するチャンクが一部のテキストを共有）と組み合わせることでコンテキストの切断を防ぐことも一般的です。information-retrievalの精度向上に直結する重要な前処理ステップです。`,
    relatedSlugs: ["rag", "retrieval", "embedding", "vector-db", "information-retrieval"],
    sources: [
      {
        title: "Semantic Chunker - LangChain Documentation",
        url: "https://python.langchain.com/docs/how_to/semantic-chunker/",
        publisher: "LangChain",
        accessedAt: "2026-02-26",
      },
      {
        title: "Chunking Strategies for LLM Applications - Pinecone",
        url: "https://www.pinecone.io/learn/chunking-strategies/",
        publisher: "Pinecone",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "tpu",
    term: "TPU（テンソル処理ユニット）",
    reading: "ティーピーユー",
    category: "基礎概念",
    summary:
      "TPUとは、Googleが開発したAI推論・学習専用のカスタムASIC（Tensor Processing Unit）です。行列演算を特化設計で高効率に処理し、GPUと比較してGoogle規模のLLM学習に大きなコスト・速度優位があります。",
    description: `TPU（Tensor Processing Unit：テンソル処理ユニット）とは、Googleが機械学習・深層学習のワークロード、特にニューラルネットワークで大量に行われる行列演算（テンソル演算）を高効率に処理するために設計・開発したカスタムASIC（Application-Specific Integrated Circuit）です。Googleが2016年に内部利用を開始し、2017年に論文で公開しました。

TPUが重要な理由は、汎用GPU（グラフィクス処理も考慮した設計）と比べて、AI推論・学習に特化した設計により特定のワークロードで高いコスト効率・電力効率を実現するためです。GoogleのGemini・PaLMなどの大規模モデルはTPU Podsで学習されており、研究規模での性能実績があります。

Google Cloud上でCloud TPUとして外部提供されており、Google Colabでも一部利用可能です。TPU v4・v5シリーズでは積層型メモリとHBM（High Bandwidth Memory）を採用し、大規模LLMの学習効率を高めています。NVIDIAのGPU（H100・A100）が業界標準としてデファクトになっている一方、TPUはGoogle製品・研究での主力ハードウェアです。量子化や混合精度（bfloat16）との組み合わせでTPUの効率をさらに引き出すことができます。vramの概念はGPUに特有ですが、TPUではHBM帯域幅が対応するボトルネックとなります。`,
    relatedSlugs: ["gpu", "inference", "deep-learning", "vram", "quantization"],
    sources: [
      {
        title: "In-Datacenter Performance Analysis of a Tensor Processing Unit",
        url: "https://arxiv.org/abs/1704.04760",
        publisher: "arXiv / Jouppi et al. / Google (2017)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Tensor Processing Unit - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Tensor_Processing_Unit",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "mistral",
    term: "Mistral",
    reading: "ミストラル",
    category: "モデル",
    summary:
      "Mistralとは、フランスのMistral AIが開発するオープンソースLLMシリーズです。Mistral 7BとMixtral 8x7Bが高い性能効率比で注目を集め、MoEアーキテクチャを採用した欧州発の主要オープンソースモデルです。",
    description: `Mistral（ミストラル）とは、2023年にフランスで設立されたMistral AIが開発・公開するLLMシリーズです。設立わずか数ヶ月で7Bパラメータのモデルをリリースし、Llama 2-13Bを超える性能を示したことで急速に注目を集めました。欧州発のAI企業として欧州のAI主権（AI Sovereignty）の象徴的存在でもあります。

Mistralが重要な理由は、クローズドモデル（GPT-4等）に近い性能をオープンウェイトで提供し、商用利用可能なライセンスで公開したことで、企業が自社サーバーでLLMを運用するユースケースを大きく後押ししたためです。

主なモデルラインアップとして、Mistral 7B（Apache 2.0、グループクエリアテンションとスライディングウィンドウアテンションで高効率化）、Mixtral 8x7B（mixture-of-expertsアーキテクチャ採用、8専門家のうち2つを動的選択）、Mistral Large（GPT-4クラスのフラッグシップ）があります。Hugging Faceで広くダウンロードされており、LoRAによるfine-tuningが活発に行われています。EU AI Actへの対応とヨーロッパのデータ規制に配慮した設計も特徴です。`,
    relatedSlugs: ["llm", "open-source-llm", "mixture-of-experts", "fine-tuning", "hugging-face"],
    sources: [
      {
        title: "Mistral 7B",
        url: "https://arxiv.org/abs/2310.06825",
        publisher: "arXiv / Jiang et al. / Mistral AI (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Mistral AI",
        url: "https://mistral.ai/",
        publisher: "Mistral AI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "phi",
    term: "Phi（ファイ）",
    reading: "ファイ",
    category: "モデル",
    summary:
      "Phiとは、Microsoftが開発する小型高性能LLMシリーズです。高品質な合成データで訓練することでGPT-3.5相当の性能を大幅に小さいパラメータ数で実現し、「小さなモデルでも良いデータがあれば賢くなれる」を証明しました。",
    description: `Phi（ファイ）とは、Microsoft Researchが開発する小型言語モデルシリーズです。Phi-1（1.3B、2023年）から始まり、Phi-2（2.7B）、Phi-3（3.8B〜14B）、Phi-4（2024年）と進化しています。「Textbooks Are All You Need」という研究コンセプトのもと、高品質な合成データと厳選されたウェブデータで訓練することで、モデルサイズを超えた性能を実現しています。

Phiが重要な理由は、scaling-lawの「大きなモデルが強い」という通念を「データの質が量を上回る」という新しい視点で挑戦し、エッジデバイスやオンプレミス環境でも高性能なLLMが使えることを示したためです。

技術的な特徴として、Phi-3 miniは3.8BパラメータながらMistral 7BやGemma 7Bと競合する性能を示しました。スマートフォンでのオンデバイス実行も可能で、iPhone上でのPhi-3のデモが公開されています。synthetic-dataの大規模活用における先駆的な事例であり、「教科書品質」の学習データが少ないパラメータを補えることを実証しました。knowledge-distillation的なアプローチ（大型モデルの知識を小型モデルに移す）との組み合わせも研究されています。`,
    relatedSlugs: ["llm", "open-source-llm", "synthetic-data", "knowledge-distillation", "scaling-law"],
    sources: [
      {
        title: "Textbooks Are All You Need (Phi-1)",
        url: "https://arxiv.org/abs/2306.11644",
        publisher: "arXiv / Gunasekar et al. / Microsoft (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Phi-3 Technical Report",
        url: "https://arxiv.org/abs/2404.14219",
        publisher: "arXiv / Abdin et al. / Microsoft (2024)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "image-recognition",
    term: "画像認識",
    reading: "がぞうにんしき",
    category: "実装",
    summary:
      "画像認識とは、画像に写っている物体・シーン・文字を自動的に識別するAI技術です。CNNやVision Transformerによる深層学習で急速に精度が向上し、医療診断・製造検査・自動運転など幅広い産業に応用されています。",
    description: `画像認識（Image Recognition）とは、デジタル画像の内容（物体・人物・シーン・テキスト等）をコンピュータが自動的に識別・分類するAI技術です。コンピュータビジョン（CV）の中心的タスクであり、「この画像には猫が写っている」「この胸部X線は異常なし」のような判断を行います。

画像認識が重要な理由は、視覚情報を自動処理できることで、製造業の外観検査（目視検査の自動化）・医療画像診断支援（放射線画像・病理画像）・小売業（棚卸し・レジなし決済）・農業（作物の病気検出）など、人間の目が必要だった多くの作業を自動化できるためです。

技術的な変遷として、ルールベース→統計モデル→CNNによる深層学習（2012年AlexNetで革命）→Vision Transformer（ViT、2020年）という進化があります。転移学習（transfer-learning）の普及により、ImageNetで事前学習したモデルを少量のドメイン固有データでfine-tuningするアプローチが定着しています。現在はvision-language-modelによって「この画像を説明して」「この写真で何が問題か教えて」という自然言語インターフェースでの画像認識も一般化しています。評価benchmarkとしてはImageNet、CIFAR-10/100が代表的です。`,
    relatedSlugs: ["convolutional-neural-network", "deep-learning", "vision-language-model", "transfer-learning", "benchmark"],
    sources: [
      {
        title: "ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)",
        url: "https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
        publisher: "NeurIPS / Krizhevsky et al. (2012)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Image recognition - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Computer_vision#Recognition",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "object-detection",
    term: "物体検出",
    reading: "ぶったいけんしゅつ",
    category: "実装",
    summary:
      "物体検出とは、画像内の複数の物体を矩形（バウンディングボックス）で位置検出しながら同時にクラス分類するコンピュータビジョンタスクです。YOLOシリーズが代表的で、自動運転・監視カメラ・小売業で広く活用されています。",
    description: `物体検出（Object Detection）とは、画像または動画フレームの中に存在する複数の物体を「どこに（位置：バウンディングボックス）」「何が（クラス：犬・車・人等）」という2つの情報とともに同時に出力するコンピュータビジョンタスクです。単純に「何が写っているか」を分類するimage-recognitionよりも高度なタスクです。

物体検出が重要な理由は、現実の多くのシーンには複数の物体が存在しており、その「位置と種類」を同時に把握することで自動運転（障害物検知）・セキュリティカメラ（不審者追跡）・工場自動化（製品・部品の把持）・小売（棚の在庫管理）など高度な自動化が可能になるためです。

代表的なモデルとして、YOLO（You Only Look Once）シリーズ（v1〜v11）がリアルタイム推論の標準的な選択肢となっています。2段階検出器（Faster R-CNN等、精度重視）と1段階検出器（YOLO等、速度重視）のトレードオフが設計上の重要な選択です。近年はDETR（Detection Transformer）などTransformerベースの手法も台頭し、vision-language-modelを使ったオープン語彙物体検出（GroundingDINO等）では事前定義していないクラスも検出できるようになっています。`,
    relatedSlugs: ["image-recognition", "convolutional-neural-network", "deep-learning", "vision-language-model", "multimodal"],
    sources: [
      {
        title: "You Only Look Once: Unified, Real-Time Object Detection (YOLO)",
        url: "https://arxiv.org/abs/1506.02640",
        publisher: "arXiv / Redmon et al. (2016)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Object detection - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Object_detection",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "named-entity-recognition",
    term: "固有表現認識（NER）",
    reading: "こゆうひょうげんにんしき",
    category: "実装",
    summary:
      "固有表現認識（NER）とは、テキスト中の人名・地名・組織名・日付などの固有表現を自動識別・分類するNLPタスクです。情報抽出・知識グラフ構築・検索精度向上の基盤技術として広く使われています。",
    description: `固有表現認識（Named Entity Recognition、NER）とは、テキスト中に含まれる固有名詞や特定の意味を持つ表現（エンティティ）を自動的に識別し、そのカテゴリ（人名・地名・組織名・日付・金額・製品名等）に分類するNLPタスクです。「山田太郎（人名）が東京（地名）のABC株式会社（組織名）に入社した」のような解析を行います。

NERが重要な理由は、テキストから構造化された情報を抽出するパイプラインの基礎であるためです。ニュース記事・法律文書・医療記録・特許文書などの大量テキストから、誰・どこ・いつ・いくらといった情報を自動抽出することで、knowledge-graphの構築、information-retrievalの精度向上、ビジネスインテリジェンスなどが実現します。

技術的には、BERTなどのEncoder型モデルをNERタスクでfine-tuningする手法が精度面で優れています。また現在のLLMはプロンプトを工夫することで高精度なNERが可能で、専用のfine-tuningなしにzero-shot・few-shotでも機能します。日本語のNERは分かち書き（単語分割）が不要な形態でも処理できますが、敬称の扱いや文脈依存の曖昧性が課題です。CoNLL-2003（英語）・KWDLC（日本語）などがベンチマークデータセットとして使われます。`,
    relatedSlugs: ["natural-language-processing", "bert", "llm", "fine-tuning", "information-retrieval"],
    sources: [
      {
        title: "Introduction to the CoNLL-2003 Shared Task: Language-Independent Named Entity Recognition",
        url: "https://aclanthology.org/W03-0419/",
        publisher: "ACL / Sang & De Meulder (2003)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Named-entity recognition - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Named-entity_recognition",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "document-ai",
    term: "ドキュメントAI",
    reading: "ドキュメントエーアイ",
    category: "実装",
    summary:
      "ドキュメントAIとは、PDF・画像・スキャン文書のOCR・レイアウト解析・情報抽出・分類を自動化するAI技術です。Google Document AIやAzure Form Recognizerが代表例で、請求書・契約書・申請書処理の自動化に活用されます。",
    description: `ドキュメントAI（Document AI）とは、紙の書類・PDF・スキャン画像・フォームなどの半構造化・非構造化文書を自動的に処理し、テキスト抽出（OCR）・レイアウト理解・情報抽出・文書分類などを行うAI技術・プラットフォームの総称です。インテリジェント文書処理（Intelligent Document Processing、IDP）とも呼ばれます。

ドキュメントAIが重要な理由は、企業の業務プロセスの多くがPDFや紙の書類に依存しており、これらの処理が従来は人手に頼っていたためです。請求書の金額・支払先・日付の自動抽出（AP自動化）、保険申請書の自動分類、医療記録からの情報抽出、契約書のリスク条項の自動検出など、大量の文書処理業務を自動化できます。

技術的には、OCR（Optical Character Recognition）で文字を認識した上で、レイアウト解析モデル（LayoutLM・DocFormerなど）が表・フォーム・見出しなどの構造を理解し、named-entity-recognitionで重要情報を抽出します。vision-language-modelを使ったマルチモーダルアプローチが進化しており、図表や画像を含む複合文書も処理できます。RAGとの組み合わせで「大量のPDF文書に自然言語で質問する」システムも広く導入されています。`,
    relatedSlugs: ["natural-language-processing", "vision-language-model", "multimodal", "named-entity-recognition", "rag"],
    sources: [
      {
        title: "Google Document AI",
        url: "https://cloud.google.com/document-ai",
        publisher: "Google Cloud",
        accessedAt: "2026-02-26",
      },
      {
        title: "Azure AI Document Intelligence",
        url: "https://azure.microsoft.com/en-us/products/ai-services/ai-document-intelligence",
        publisher: "Microsoft Azure",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "flash-attention",
    term: "FlashAttention",
    reading: "フラッシュアテンション",
    category: "基礎概念",
    summary:
      "FlashAttentionとは、TransformerのAttention計算をGPUメモリ階層を考慮して最適化し、速度向上とメモリ削減を実現するアルゴリズムです。ほぼすべての現代LLMの学習・推論に採用されている重要な基盤技術です。",
    description: `FlashAttention（フラッシュアテンション）とは、Tri Daoらが2022年に発表した、Transformerのself-attention計算を大幅に高速化・省メモリ化するアルゴリズムです。数学的な計算結果は標準的なAttentionと完全に同一ですが、GPUのメモリ階層（高速なSRAM：共有メモリ vs 低速なHBM：VRAMの主記憶）を最大限に活用することで、速度2〜4倍・メモリ使用量5〜20倍削減を実現しました。

FlashAttentionが重要な理由は、標準的なAttentionはシーケンス長の2乗に比例するメモリ・計算量が必要であり、長いコンテキスト（long-context）の処理がvramの壁で実質的に不可能でした。FlashAttentionによってこの制約が大幅に緩和され、長コンテキストLLMの実現・より大きなバッチサイズでの学習効率化が可能になりました。

2023年のFlashAttention-2ではさらにGPU並列化効率が改善されました。GPT-4・Llama 2以降のほぼすべての主要LLMがFlashAttentionを標準採用しており、現代のLLM学習・推論インフラの基盤となっています。PyTorch 2.0以降では「torch.nn.functional.scaled_dot_product_attention」としてFlashAttentionが標準統合されています。attention-mechanismの計算効率化という観点でTransformerの発展に大きく貢献しました。`,
    relatedSlugs: ["attention-mechanism", "transformer", "gpu", "vram", "inference"],
    sources: [
      {
        title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
        url: "https://arxiv.org/abs/2205.14135",
        publisher: "arXiv / Dao et al. (2022)",
        accessedAt: "2026-02-26",
      },
      {
        title: "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning",
        url: "https://arxiv.org/abs/2307.08691",
        publisher: "arXiv / Dao (2023)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "human-in-the-loop",
    term: "ヒューマンインザループ",
    reading: "ヒューマンインザループ",
    category: "実装",
    summary:
      "ヒューマンインザループとは、AIの判断プロセスに人間が介在して確認・修正・承認を行う設計パターンです。高リスクな判断・低信頼度ケースで品質と安全性を担保するAI運用の重要な原則です。",
    description: `ヒューマンインザループ（Human-in-the-Loop、HITL）とは、機械学習システムの予測・判断・実行のサイクルに人間が積極的に介在し、確認・修正・承認・フィードバックを提供することで、AIと人間が協調してタスクをこなす設計パターンです。「AIが自動判断→人間が監視」の人間アウトオブザループとは対照的です。

ヒューマンインザループが重要な理由は、AIモデルは完璧ではなく、特に低信頼度ケース・エッジケース・高リスクな判断では人間の判断が不可欠なためです。医療診断AIでは「AIが疑わしいと判断した→医師が確認する」、採用AIでは「AIが絞り込んだ候補→人事担当者が最終選考する」のように、AIは効率化ツールとして使いつつ重要な判断は人間が担うアーキテクチャです。

具体的な実装パターンとして、①Active Learning（モデルが不確かなサンプルを選んで人間にラベル付けを依頼）、②RLHFでの人間フィードバック収集、③エージェントワークフローでの承認ゲート（重要なアクション前に人間の確認を求める）、④例外処理（AIの信頼度が閾値以下の場合に人間にエスカレーション）があります。ai-governanceとresponsible-aiの文脈で、特に高リスクAIシステムでのHITLは規制上も推奨・義務化される方向にあります。`,
    relatedSlugs: ["ai-governance", "responsible-ai", "alignment", "data-annotation", "rlhf"],
    sources: [
      {
        title: "Human-in-the-Loop Machine Learning",
        url: "https://www.manning.com/books/human-in-the-loop-machine-learning",
        publisher: "Manning / Monarch (2021)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Human-in-the-loop - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Human-in-the-loop",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "prompt-chaining",
    term: "プロンプトチェーニング",
    reading: "プロンプトチェーニング",
    category: "実装",
    summary:
      "プロンプトチェーニングとは、複数のプロンプトを連鎖させ前のLLM出力を次のプロンプトの入力として活用することで複雑なタスクを段階的に処理する手法です。エージェントワークフローの基本パターンの一つです。",
    description: `プロンプトチェーニング（Prompt Chaining）とは、単一の大きなタスクを複数の小さなサブタスクに分解し、各ステップのLLMの出力を次のステップのプロンプトへの入力として順次渡していく手法です。パイプライン処理とも呼ばれ、各ステップで特化したプロンプトを使うことで全体の品質が向上します。

プロンプトチェーニングが重要な理由は、単一のプロンプトで複雑なタスクを解決しようとすると、LLMが「一度に多くのことをやろうとして」品質が低下する傾向があるためです。「調査→構成→執筆→校正」のように段階を分けることで、各ステップに集中させて全体の品質を高めます。また各ステップで中間出力を確認・修正することも容易になります。

具体的なユースケースとして、「ユーザーの要求を分析→検索クエリを生成→RAGで情報収集→回答を生成→フォーマットを整える」という複合パイプラインが代表例です。条件分岐（if/else）・ループ・並列実行を組み合わせた複雑なワークフローはagentic-workflowへと発展します。LangChain・LlamaIndex等のフレームワークがプロンプトチェーニングの実装を簡略化しており、cotで表現される思考ステップをシステムレベルで実現する外部版ともいえます。`,
    relatedSlugs: ["prompt-engineering", "cot", "agentic-workflow", "llm", "context-window"],
    sources: [
      {
        title: "Prompt Chaining - Anthropic Documentation",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-prompts",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
      {
        title: "Prompt Chaining - OpenAI Cookbook",
        url: "https://cookbook.openai.com/",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-observability",
    term: "AIオブザーバビリティ",
    reading: "エーアイオブザーバビリティ",
    category: "実装",
    summary:
      "AIオブザーバビリティとは、本番LLMアプリケーションのトレース・ログ・メトリクスを収集・可視化してデバッグと改善を支援する監視実践です。LangSmith・Langfuse・Phoenix（Arize）が代表ツールです。",
    description: `AIオブザーバビリティ（AI Observability）とは、本番環境で稼働するLLMベースのアプリケーション（チャットボット・RAGシステム・エージェント等）の動作を可視化し、品質問題の検出・根本原因分析・継続的改善を支援する実践・ツール群です。ソフトウェアエンジニアリングの「オブザーバビリティ（可観測性）」の概念をLLMシステムに特化させたものです。

AIオブザーバビリティが重要な理由は、LLMシステムはブラックボックス的な挙動をするため、「なぜこの回答が悪かったのか」「どのプロンプトが問題か」「どのユーザーで失敗しているか」を把握するには専用の可視化が必要だからです。retrieval精度の低下・hallucination率の増加・レイテンシの劣化などを早期に検知することが運用品質の維持に不可欠です。

主な観測対象として、LLMへの入出力トレース（プロンプト・レスポンス・使用トークン数）、RAGの検索精度（取得文書の関連度）、エージェントの実行ステップとツール使用、エラー率・遅延・コスト（llmops指標）などがあります。LangSmith（LangChain公式）、Langfuse（オープンソース）、Phoenix（Arize AI、オープンソース）、Weights & Biases Tracesが主要ツールです。evaluation-metricsとの統合で自動品質評価パイプラインも構築できます。`,
    relatedSlugs: ["llmops", "evaluation-metrics", "latency", "rag", "agent"],
    sources: [
      {
        title: "LangSmith Documentation",
        url: "https://docs.smith.langchain.com/",
        publisher: "LangChain",
        accessedAt: "2026-02-26",
      },
      {
        title: "Langfuse - Open Source LLM Observability",
        url: "https://langfuse.com/",
        publisher: "Langfuse",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "vision-transformer",
    term: "ViT（ビジョントランスフォーマー）",
    reading: "ビジョントランスフォーマー",
    category: "モデル",
    summary:
      "ViT（Vision Transformer）とは、画像をパッチに分割してTransformerで処理する画像認識アーキテクチャです。CNNを超える性能を示し、GPT-4VやGeminiなどマルチモーダルモデルのビジュアルエンコーダーの基盤技術となっています。",
    description: `ViT（Vision Transformer）とは、Dosovitskiyらが2020年に発表した、画像をCNNではなくTransformerで処理する画像認識アーキテクチャです。画像を16×16ピクセルのパッチに分割してフラット化し、BERTのように各パッチを「トークン」として扱いTransformerのself-attentionで処理します。

ViTが重要な理由は、それまで画像認識の主流だったCNNを超える性能を示し、「Transformerは言語だけでなくあらゆるデータに応用できる」という新しいパラダイムを確立したためです。特に大規模データセットと大型モデルのスケール時にCNNより優れた性能を示しました。

ViTの発展として、Swin Transformer（階層的な局所アテンションでCNNの強みを取り込む）、DeiT（データ効率化）、MAE（Masked Autoencoders、マスクパッチ予測での自己教師あり学習）などが登場しています。現在のvision-language-model（GPT-4V・Gemini・Claude 3等）はほぼすべてViT系のアーキテクチャをビジュアルエンコーダーとして採用しており、テキストと画像をCLIPやcontrastive-learningで対照学習してからLLMに接続するという設計が一般的です。`,
    relatedSlugs: ["transformer", "image-recognition", "attention-mechanism", "convolutional-neural-network", "vision-language-model"],
    sources: [
      {
        title: "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
        url: "https://arxiv.org/abs/2010.11929",
        publisher: "arXiv / Dosovitskiy et al. / Google Brain (2020)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Vision transformer - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Vision_transformer",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "dpo",
    term: "DPO（直接選好最適化）",
    reading: "ディーピーオー",
    category: "基礎概念",
    summary:
      "DPO（Direct Preference Optimization）とは、人間の好みデータから直接ポリシーを最適化するアライメント手法です。強化学習不要でRLHFより安定した学習が可能で、LLMのfine-tuningで広く採用されています。",
    description: `DPO（Direct Preference Optimization：直接選好最適化）とは、Rafailovらが2023年に提案した、人間の好みデータ（どちらの回答が良いかの比較）から直接言語モデルのポリシーを最適化するアライメント手法です。RLHFで必要だった「報酬モデルの訓練」と「強化学習（PPO）」という複雑な2段階プロセスを、単一の分類タスクとして単純化しました。

DPOが重要な理由は、RLHFの複雑さと不安定さという実装上の課題を解消し、より少ないコンピューティングで高品質なアライメントを実現できるためです。reward-modelを明示的に学習する必要がなく、好まれる回答と好まれない回答のペアから直接モデルを最適化します。これにより、個人・中小企業でもアライメントの実施が容易になりました。

数学的には、RLHFの最適解が閉形式で書けることを利用して、強化学習を分類損失（Binary Cross-Entropy）に書き換えています。オープンソースコミュニティでの普及度が高く、Llama・Mistral・Phiなどのモデルのアライメントにも採用されています。DPOの変種として、SimPO・IPO・KTO・ORPOなどが提案されており、より安定した学習・少ないデータでの性能向上を目指しています。sftによる教師あり学習の後にDPOを適用する「SFT + DPO」パターンが現在の標準的なfine-tuningパイプラインです。`,
    relatedSlugs: ["rlhf", "alignment", "sft", "reward-model", "fine-tuning"],
    sources: [
      {
        title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
        url: "https://arxiv.org/abs/2305.18290",
        publisher: "arXiv / Rafailov et al. (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "DPO - Hugging Face TRL Documentation",
        url: "https://huggingface.co/docs/trl/dpo_trainer",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "text-to-sql",
    term: "Text-to-SQL",
    reading: "テキストトゥーエスキューエル",
    category: "実装",
    summary:
      "Text-to-SQLとは、自然言語の質問をSQLクエリに自動変換するNLPタスクです。データベースへの自然言語インターフェースを実現し、非エンジニアがデータを直接質問できる「データ民主化」ツールとして注目されています。",
    description: `Text-to-SQL（テキストからSQLへの変換）とは、「2024年の売上上位10製品を教えて」のような自然言語の質問を、「SELECT product_name, SUM(revenue) FROM sales WHERE year=2024 GROUP BY product_name ORDER BY SUM(revenue) DESC LIMIT 10;」のようなSQLクエリに自動変換するNLPタスクです。NL2SQLとも呼ばれます。

Text-to-SQLが重要な理由は、企業のデータ活用において「データはあるが、SQLが書けないビジネスユーザーが活用できない」というボトルネックを解消できるためです。BI（ビジネスインテリジェンス）ツールへの組み込みや、チャットで社内データベースに質問できる「データチャット」製品に応用されています。

LLMの登場によりText-to-SQLの精度が大幅に向上しました。GPT-4はSpiderベンチマーク（複雑なSQL変換の評価データセット）で高精度を達成しています。実装上の課題として、テーブルスキーマをどのようにコンテキストに含めるか（スキーマリンキング）、複数テーブルをまたがる複雑なJOINクエリの生成、SQL実行エラーの自動修正（セルフデバッグ）などがあります。code-generationの特殊形態であり、structured-outputと組み合わせることで検証可能なSQLを生成できます。`,
    relatedSlugs: ["natural-language-processing", "llm", "code-generation", "structured-output", "fine-tuning"],
    sources: [
      {
        title: "Spider: A Large-Scale Human-Labeled Dataset for Complex and Cross-Domain Semantic Parsing and Text-to-SQL Task",
        url: "https://arxiv.org/abs/1809.08887",
        publisher: "arXiv / Yu et al. (2018)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Text-to-SQL - Papers With Code",
        url: "https://paperswithcode.com/task/text-to-sql",
        publisher: "Papers With Code",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "semantic-segmentation",
    term: "セマンティックセグメンテーション",
    reading: "セマンティックセグメンテーション",
    category: "実装",
    summary:
      "セマンティックセグメンテーションとは、画像の各ピクセルをクラスに分類するコンピュータビジョンタスクです。自動運転・医療画像解析で必須の技術で、Segment Anything Model（SAM）の登場で汎用化が加速しました。",
    description: `セマンティックセグメンテーション（Semantic Segmentation）とは、入力画像の各ピクセル（画素）に対してクラスラベル（道路・車・人・空等）を割り当てる、ピクセルレベルの画像分類タスクです。object-detectionが矩形ボックスで物体の位置を示すのに対し、セグメンテーションは物体の正確な輪郭・形状をピクセル精度で識別します。

セマンティックセグメンテーションが重要な理由は、物体の「どこにあるか」ではなく「どこまでが何か」を正確に把握する必要がある用途に不可欠なためです。自動運転では「この領域は走行可能な道路か歩道か」、医療では「この領域が腫瘍か正常組織か」という判断がピクセル精度で必要です。

2023年にMeta AIが発表した「Segment Anything Model（SAM）」は、あらゆる画像の任意の物体を指示に従って高精度にセグメントできる汎用モデルで、セマンティックセグメンテーションの可能性を大きく広げました。SAM 2（2024年）は動画への対応も実現しました。vision-language-modelとの統合により、「この画像の犬だけをセグメントして」という自然言語指示での精密なセグメンテーションも可能になっています。`,
    relatedSlugs: ["image-recognition", "object-detection", "convolutional-neural-network", "deep-learning", "vision-language-model"],
    sources: [
      {
        title: "Segment Anything",
        url: "https://arxiv.org/abs/2304.02643",
        publisher: "arXiv / Kirillov et al. / Meta AI (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Semantic segmentation - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Image_segmentation",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "model-serving",
    term: "モデルサービング",
    reading: "モデルサービング",
    category: "実装",
    summary:
      "モデルサービングとは、学習済みモデルをAPI経由で提供するインフラ・システムです。vLLM・TGI（Text Generation Inference）・Tritonなどがバッチ処理・メモリ管理・スケーリングを最適化したLLM向けフレームワークとして普及しています。",
    description: `モデルサービング（Model Serving）とは、学習・評価済みの機械学習モデルをHTTP/gRPC等のAPIとして外部アプリケーションから利用可能にするシステム・インフラの構築・運用実践です。MLOps・llmopsの中心的な工程であり、推論リクエストを受け取り、モデルで処理し、結果を返す一連のパイプラインを担います。

モデルサービングが重要な理由は、どれほど優れたモデルを作っても、実際にAPIとして使えなければビジネス価値を生まないためです。特にLLMはモデルサイズが大きく、メモリ管理・バッチ処理・並列推論などの最適化が性能に直結します。

LLM特化のサービングフレームワークとして、vLLM（PagedAttentionによる効率的なKVキャッシュ管理、最大スループット重視）、TGI・Text Generation Inference（Hugging Face製、ストリーミング・量子化対応）、Triton Inference Server（NVIDIA製、汎用的な本番向け）などがあります。推論の最適化として、バッチ処理（Continuous Batching）、テンソル並列化（複数GPUへの分散）、speculative-decodingの統合、量子化（quantization）適用などが重要です。クラウドでのオートスケーリングやlatency SLAの管理もモデルサービングの重要な課題です。`,
    relatedSlugs: ["inference", "llmops", "latency", "gpu", "streaming"],
    sources: [
      {
        title: "Efficient Memory Management for Large Language Model Serving with PagedAttention (vLLM)",
        url: "https://arxiv.org/abs/2309.06180",
        publisher: "arXiv / Kwon et al. (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Text Generation Inference - Hugging Face",
        url: "https://huggingface.co/docs/text-generation-inference/",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "positional-encoding",
    term: "位置エンコーディング",
    reading: "いちエンコーディング",
    category: "基礎概念",
    summary:
      "位置エンコーディングとは、Transformerがシーケンスのトークンごとにどこにあるかという位置情報を取り込むための表現手法です。正弦波・RoPE・ALiBiなどの方式があり、長文（ロングコンテキスト）対応能力に直接影響します。",
    description: `位置エンコーディング（Positional Encoding）とは、TransformerモデルがAttentionを計算する際に「このトークンはシーケンスの何番目にあるか」という位置情報を認識できるようにするための表現手法です。CNNやRNNと異なり、Transformerは全トークンを並列処理するため、位置情報を別途明示的に与える必要があります。

位置エンコーディングが重要な理由は、テキストにおいて語順は意味を決定する重要な要素（「猫が犬を追う」と「犬が猫を追う」では意味が逆）であり、位置情報なしではTransformerが語順を無視した処理になるためです。また位置エンコーディングの設計が、モデルがどこまで長いコンテキストを扱えるかに直結します。

主な方式として、元のTransformer論文の正弦波位置エンコーディング（絶対位置、事前定義）、学習可能な絶対位置埋め込み（BERTで採用）、RoPE（Rotary Position Embedding、回転行列で相対位置を表現、GPT-NeoX・LLaMAで採用）、ALiBi（Attention with Linear Biases、外挿性能が高い）などがあります。現代のLLMではRoPEが主流であり、RoPEのスケーリング手法によって訓練時より長いコンテキストへの対応（long-context拡張）が研究されています。`,
    relatedSlugs: ["transformer", "attention-mechanism", "token", "context-window", "embedding"],
    sources: [
      {
        title: "Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
        publisher: "arXiv / Vaswani et al. (2017)",
        accessedAt: "2026-02-26",
      },
      {
        title: "RoFormer: Enhanced Transformer with Rotary Position Embedding",
        url: "https://arxiv.org/abs/2104.09864",
        publisher: "arXiv / Su et al. (2021)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ppo",
    term: "PPO（近接方策最適化）",
    reading: "ピーピーオー",
    category: "基礎概念",
    summary:
      "PPO（Proximal Policy Optimization）とは、方策の更新幅をクリッピングで制限して安定した学習を実現する強化学習アルゴリズムです。ChatGPTやClaudeのRLHF訓練に広く採用されてきましたが、近年はDPOへの移行も進んでいます。",
    description: `PPO（Proximal Policy Optimization：近接方策最適化）とは、OpenAIのSchulmanらが2017年に発表した強化学習アルゴリズムです。方策勾配法（Policy Gradient）の問題点（学習が不安定、更新幅が大きすぎると崩壊）を、クリッピングと呼ばれるシンプルな制約で解決しました。現在の方策と前の方策の比率を一定範囲にクリップすることで、1回の更新で方策が大きく変わりすぎることを防ぎます。

PPOが重要な理由は、ロボティクス・ゲーム・LLMアライメントなど幅広い強化学習タスクで安定した性能を示す汎用アルゴリズムとして確立されており、特にRLHFによるLLMのアライメント訓練の標準アルゴリズムとして採用されてきたためです。ChatGPT・InstructGPT・Claude初期版はPPOベースのRLHFで訓練されました。

実装上の課題として、PPOはreward-modelの訓練・参照モデルの維持・複数モデルの同時実行など複雑なインフラが必要で、ハイパーパラメータ調整も難しい点があります。この複雑さを解消するために開発されたdpoは、PPOなしで人間の好みデータから直接最適化するアプローチとして2023年以降急速に普及しています。PPOは報酬モデルを持つフルRLHFパイプラインでは現在も使われています。`,
    relatedSlugs: ["reinforcement-learning", "rlhf", "reward-model", "alignment", "dpo"],
    sources: [
      {
        title: "Proximal Policy Optimization Algorithms",
        url: "https://arxiv.org/abs/1707.06347",
        publisher: "arXiv / Schulman et al. / OpenAI (2017)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Proximal policy optimization - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Proximal_Policy_Optimization",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "state-space-model",
    term: "状態空間モデル（SSM）",
    reading: "じょうたいくうかんモデル",
    category: "基礎概念",
    summary:
      "状態空間モデル（SSM）とは、系列データを状態変数で効率的に処理するアーキテクチャです。MambaがTransformerの代替として注目され、シーケンス長に対して線形の計算量でlong-contextを効率的に処理できます。",
    description: `状態空間モデル（State Space Model、SSM）とは、信号処理・制御理論に起源を持つ数学的フレームワークで、入力系列から状態変数を介して出力系列を生成するモデルです。深層学習文脈では、Transformerの2乗計算量問題を解決する代替アーキテクチャとして2020年代に再注目されました。

SSMが重要な理由は、Transformerのself-attentionはシーケンス長の2乗に比例する計算量が必要であるのに対し、SSMは線形の計算量で系列を処理できるためです。これにより非常に長い系列（数万〜数十万トークン）の処理でTransformerより効率的になる可能性があります。

代表的なSSMアーキテクチャとして、S4（Structured State Spaces for Sequences）・Mamba（2023年、Gu & Dao、入力依存の選択的ゲーティングで精度を向上）があります。特にMambaは言語モデリングでTransformerに匹敵する性能を示し、「Mamba-2」やTransformerとの組み合わせ（Jamba：Mamba+Transformer）など様々な発展型が登場しています。現時点ではLLMの主流はTransformerですが、long-context処理・音声・生物配列など特定ドメインでSSMが活用されており、Transformer代替としての研究が続いています。`,
    relatedSlugs: ["transformer", "attention-mechanism", "recurrent-neural-network", "long-context", "inference"],
    sources: [
      {
        title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
        url: "https://arxiv.org/abs/2312.00752",
        publisher: "arXiv / Gu & Dao (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "State-space model - Wikipedia",
        url: "https://en.wikipedia.org/wiki/State-space_representation",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-watermarking",
    term: "AIウォーターマーキング",
    reading: "エーアイウォーターマーキング",
    category: "法務・倫理",
    summary:
      "AIウォーターマーキングとは、AI生成コンテンツに統計的・不可視のマーカーを埋め込んでAI生成物を識別可能にする技術です。偽情報対策・著作権保護の手段としてEU AI Actでも義務化が検討されています。",
    description: `AIウォーターマーキング（AI Watermarking）とは、LLMや画像生成AIが出力したコンテンツに、人間の目には見えない（または知覚されにくい）デジタルマーカーを埋め込み、そのコンテンツがAIによって生成されたことを事後的に検証可能にする技術です。テキスト・画像・音声・動画の各モダリティ向けの手法があります。

AIウォーターマーキングが重要な理由は、生成AIによるdeepfakeや偽情報の拡散が社会問題となっており、AI生成コンテンツを識別する技術的手段が求められているためです。EU AI Actでは高リスクAIおよび一般目的AI（GPAI）のコンテンツへのウォーターマーク付与が要件として議論されています。米国でも大統領令（Executive Order on AI）でAI生成コンテンツのウォーターマーキングが推奨されています。

技術的なアプローチとして、テキスト用ウォーターマーク（Kirchenbauer et al. 2023：LLMのトークン選択を統計的にバイアスし検出可能なパターンを埋め込む）、画像用ウォーターマーク（StegaStamp・Tree-Ring等）、メタデータによるコンテンツ来歴証明（C2PA：Content Credentials、Adobe・Microsoft・Google・Adobeが推進）があります。OpenAIはDALL-E・SoraにC2PAメタデータを付与しています。ウォーターマークの除去（攻撃）への耐性が課題です。`,
    relatedSlugs: ["ai-regulation", "ai-governance", "deepfake", "ai-copyright", "responsible-ai"],
    sources: [
      {
        title: "A Watermark for Large Language Models",
        url: "https://arxiv.org/abs/2301.10226",
        publisher: "arXiv / Kirchenbauer et al. (2023)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Content Credentials (C2PA) - Adobe",
        url: "https://contentauthenticity.org/",
        publisher: "Content Authenticity Initiative / Adobe",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "self-consistency",
    term: "自己一貫性（Self-Consistency）",
    reading: "セルフコンシステンシー",
    category: "実装",
    summary:
      "自己一貫性（Self-Consistency）とは、同一プロンプトから複数の異なる推論パスを生成し、多数決で最終回答を決定するCoT精度向上手法です。単一パスのCoTより大幅に精度が向上し、数学・論理問題で特に効果的です。",
    description: `自己一貫性（Self-Consistency）とは、Wangらが2022年に提案した、Chain-of-Thought（CoT）プロンプティングの精度を向上させるデコーディング戦略です。同じプロンプトに対して、temperatureをやや高めに設定してLLMを複数回実行し、多様な推論パスを生成します。その後、各推論パスの最終回答を集計し、最も多く選ばれた回答（多数決）を最終回答として採用します。

自己一貫性が重要な理由は、LLMの推論はサンプリングの確率的性質から1回の実行では最適解に到達しないことがあるためです。複数の「独立した思考プロセス」から多数決を取ることで、単一のCoT実行より大幅に精度が向上します。算術推論・常識推論・象徴的推論タスクで10〜20%程度の精度向上が報告されています。

実装は比較的シンプルで、temperatureを0より高く設定して同じプロンプトを3〜10回実行し、最終回答（数字・選択肢等）の多数決を取るだけです。計算コストが回数倍になるトレードオフがあります。tree-of-thoughtはself-consistencyをさらに発展させ、推論プロセスそのものを探索・評価する手法です。reasoning-modelの台頭により、モデル内部での思考探索が自動化されるようになり、外部からのself-consistency適用の必要性は変化しています。`,
    relatedSlugs: ["cot", "prompt-engineering", "reasoning-model", "llm", "tree-of-thought"],
    sources: [
      {
        title: "Self-Consistency Improves Chain of Thought Reasoning in Language Models",
        url: "https://arxiv.org/abs/2203.11171",
        publisher: "arXiv / Wang et al. (2022)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Self-consistency - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Prompt_engineering#Self-consistency",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "chatbot",
    term: "チャットボット",
    reading: "チャットボット",
    category: "実装",
    summary:
      "チャットボットとは、テキストや音声で人間と自動的に会話するソフトウェアです。ChatGPTの登場でLLMベースの高精度チャットボットが急速に普及し、カスタマーサポート・社内ヘルプデスク・教育など幅広い場面で活用されています。",
    description: `チャットボット（Chatbot）とは、テキストまたは音声インターフェースを通じて人間との会話をシミュレートするコンピュータプログラムです。1966年にJoseph Weizenbaumが開発した「ELIZA」が最初期の例として知られています。ルールベース（if-then型）から統計モデル、そして現在のLLMベースへと進化してきました。

チャットボットが重要な理由は、24時間365日対応・同時多数の問い合わせ処理・人的コスト削減という実務上の価値に加え、2022年末のChatGPTの登場でLLMベースチャットボットの品質が劇的に向上し、複雑な質問への対応・文脈理解・多言語対応が実現されたためです。

活用分野として、カスタマーサポート自動化（FAQ対応・問い合わせ振り分け）、社内ヘルプデスク（IT・HR問い合わせ）、Eコマース（商品案内・購買支援）、医療（初期症状確認）、教育（個別指導・Q&A）などがあります。RAGと組み合わせることで社内文書・製品マニュアルなどのドメイン固有知識に基づいた回答が可能になります。チャットボット評価の指標として、理解率・解決率・エスカレーション率などが使われます。`,
    relatedSlugs: ["llm", "natural-language-processing", "chatgpt", "agent", "prompt"],
    sources: [
      {
        title: "Chatbot - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Chatbot",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "ChatGPT - OpenAI",
        url: "https://openai.com/chatgpt",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "computer-vision",
    term: "コンピュータビジョン",
    reading: "コンピュータビジョン",
    category: "基礎概念",
    summary:
      "コンピュータビジョンとは、画像・動画から情報を抽出・理解するAI技術の総称です。画像認識・物体検出・セグメンテーション・OCRを包含し、自動運転・医療・製造・小売など幅広い産業に応用されています。",
    description: `コンピュータビジョン（Computer Vision、CV）とは、デジタル画像・動画・映像からコンピュータが視覚情報を自動的に取得・解析・理解するAI技術の総称です。人間の視覚システムをコンピュータで再現・超越することを目指した研究分野であり、深層学習の発展により急速に実用化が進みました。

コンピュータビジョンが重要な理由は、現実世界の情報の多くが視覚情報として存在しており、それを自動処理できることで多様な産業の自動化が可能になるためです。工場の外観検査（製造）・手術支援（医療）・レジなし決済（小売）・信号無視検知（公共安全）・顔認証（セキュリティ）など、従来は人間の目が不可欠だったタスクをAIが代替しています。

主要タスクとして、image-recognition（画像分類）、object-detection（物体検出・位置推定）、semantic-segmentation（ピクセルレベルの分類）、顔認識、ポーズ推定、光学文字認識（ocr）、深度推定などがあります。技術的な基盤はconvolutional-neural-networkからvision-transformerへと進化し、現在ではvision-language-modelによって「画像に関する自然言語での質問・指示」も処理できるようになっています。`,
    relatedSlugs: ["image-recognition", "object-detection", "semantic-segmentation", "convolutional-neural-network", "vision-language-model"],
    sources: [
      {
        title: "Computer vision - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Computer_vision",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Computer Vision: Algorithms and Applications (2nd ed.)",
        url: "https://szeliski.org/Book/",
        publisher: "Szeliski (2022) / Springer",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "recommendation-system",
    term: "レコメンデーションシステム",
    reading: "レコメンデーションシステム",
    category: "実装",
    summary:
      "レコメンデーションシステムとは、ユーザーの行動・嗜好を分析して最適なコンテンツや商品を推薦するAIシステムです。Netflix・Amazon・Spotify・YouTubeで活用され、現代のWebサービスの中心的なAI応用です。",
    description: `レコメンデーションシステム（Recommendation System）とは、ユーザーの過去の行動履歴・評価・属性などのデータを分析し、そのユーザーが興味を持つであろうアイテム（商品・コンテンツ・情報）を自動的に推薦するAIシステムです。情報過多の現代において、ユーザーが求めるものを効率的に発見できるようにする重要な技術です。

レコメンデーションシステムが重要な理由は、NetflixのコンテンツのうちTV視聴の80%以上がレコメンドから始まるとされるなど、ユーザーエンゲージメントと収益に直結するためです。AmazonはEコマースの売上の35%程度がレコメンドによるものと推定されています。SpotifyのDiscover Weeklyは毎週3,000万人以上に使われています。

主なアルゴリズムとして、協調フィルタリング（類似したユーザーや類似したアイテムをベースに推薦）、コンテンツベースフィルタリング（アイテムの特徴に基づく）、Matrix Factorization（Netflixコンペで有名なSVD系手法）、深層学習ベース（embeddingを活用したニューラルネットワーク）があります。近年はLLMを活用した「会話型レコメンド」も登場しており、「最近見た映画に似た作品を教えて」という自然言語での推薦が可能になっています。`,
    relatedSlugs: ["machine-learning", "embedding", "deep-learning", "supervised-learning", "natural-language-processing"],
    sources: [
      {
        title: "Matrix Factorization Techniques for Recommender Systems",
        url: "https://ieeexplore.ieee.org/document/5197422",
        publisher: "IEEE Computer / Koren et al. (2009)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Recommender system - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Recommender_system",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ocr",
    term: "OCR（光学文字認識）",
    reading: "オーシーアール",
    category: "実装",
    summary:
      "OCR（Optical Character Recognition）とは、画像やスキャン文書に含まれる文字を認識してデジタルテキストに変換する技術です。Document AIの基盤技術で、請求書・契約書・名刺などの自動デジタル化に不可欠です。",
    description: `OCR（Optical Character Recognition：光学文字認識）とは、印刷物・手書き文字・画像内の文字をコンピュータが認識してデジタルのテキストデータに変換する技術です。スキャナで取り込んだPDF・スマートフォンで撮影した書類・看板の文字など、様々なシーンで文字のデジタル化を自動化します。

OCRが重要な理由は、世界中には膨大な量の紙の書類・印刷物が存在しており、これらをデジタル化することがビジネスのデジタルトランスフォーメーション（DX）の基礎となるためです。請求書の自動処理・契約書のデジタルアーカイブ・名刺管理・レシート管理・古文書のデジタル保存など、幅広い用途があります。

技術的には、従来のルールベースOCRから深層学習ベースのOCRへと進化し、精度が大幅に向上しました。Google Cloud Vision API・Amazon Textract・Microsoft Azure Form Recognizerなどのクラウドサービスや、オープンソースのTesseract OCRが広く使われています。近年はvision-language-modelを使ったマルチモーダルアプローチにより、文字認識だけでなく文書の構造（表・フォーム・見出し）も理解できる高精度なdocument-aiが実現しています。日本語OCRは縦書き・変体仮名・旧字体など独自の課題があります。`,
    relatedSlugs: ["document-ai", "computer-vision", "image-recognition", "natural-language-processing", "vision-language-model"],
    sources: [
      {
        title: "Optical character recognition - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Optical_character_recognition",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Google Cloud Vision API",
        url: "https://cloud.google.com/vision",
        publisher: "Google Cloud",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "dataset",
    term: "データセット",
    reading: "データセット",
    category: "基礎概念",
    summary:
      "データセットとは、AI・機械学習モデルの学習・評価に使う構造化されたデータの集合です。品質・量・多様性がモデル性能に直結し、ImageNet・Wikipedia・Common Crawlなどが代表的なデータセットです。",
    description: `データセット（Dataset）とは、機械学習・深層学習モデルの訓練・検証・評価に使用するために収集・整理されたデータの集合体です。ラベル付きデータ（教師あり学習用）・ラベルなしデータ（事前学習用）・人間の好みペアデータ（RLHF用）など、用途に応じて様々な形式があります。

データセットが重要な理由は、「AIの品質はデータの品質で決まる」という機械学習の根本原則があるためです。いくら優れたモデルアーキテクチャやアルゴリズムを使っても、学習データが少ない・偏っている・品質が低いと高性能なモデルは作れません。逆に、適切なデータセットがあれば比較的シンプルなモデルでも高性能を達成できます。

代表的なデータセットとして、ImageNet（1,400万枚の画像・1,000クラス分類、深層学習革命の礎）、Wikipedia・Common Crawl（LLM事前学習の主要テキストデータ）、SQuAD（質問応答）、MS COCO（物体検出・キャプション）、GLUE/SuperGLUE（NLU評価）などがあります。Hugging Face Datasetsプラットフォームに数万のデータセットが公開されており、Kaggleはデータサイエンスコンペとデータセット共有のコミュニティとして機能しています。synthetic-dataはデータ不足を補う合成データセット生成の手法です。`,
    relatedSlugs: ["machine-learning", "supervised-learning", "data-annotation", "benchmark", "synthetic-data"],
    sources: [
      {
        title: "Dataset - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Hugging Face Datasets",
        url: "https://huggingface.co/datasets",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "classification",
    term: "分類（クラシフィケーション）",
    reading: "ぶんるい",
    category: "基礎概念",
    summary:
      "分類とは、入力データを事前定義されたカテゴリに振り分ける機械学習の基本タスクです。スパムフィルタ・感情分析・画像認識・医療診断など最も広く使われるAI応用の基盤であり、2値分類と多クラス分類があります。",
    description: `分類（Classification）とは、入力データ（テキスト・画像・数値等）を事前定義された離散的なカテゴリ（クラス）のいずれかに割り当てる機械学習タスクです。「このメールはスパムか否か（2値分類）」「この画像は猫・犬・鳥・魚のどれか（多クラス分類）」のように、明確なラベル付きデータで訓練するsupervised-learningの代表的なタスクです。

分類が重要な理由は、ビジネス上の意思決定の多くが「Aか、Bか、Cか」という選択の形式をとるためです。与信審査（承認・否決）、医療診断（良性・悪性）、コンテンツモデレーション（適切・不適切）、顧客セグメンテーション（優良・一般・離脱リスク）など、分類モデルが実務に直結しています。

代表的なアルゴリズムとして、ロジスティック回帰・サポートベクターマシン（SVM）・決定木・ランダムフォレスト・勾配ブースティング（XGBoost・LightGBM）・ニューラルネットワークがあります。LLMは分類タスクを自然言語の指示で処理でき、「このレビューのセンチメントを判定して」というプロンプトでsentiment-analysisが実現します。評価指標として精度（Accuracy）・適合率（Precision）・再現率（Recall）・F1スコアが使われ、不均衡データではF1やROC-AUCが重視されます。`,
    relatedSlugs: ["supervised-learning", "machine-learning", "deep-learning", "sentiment-analysis", "image-recognition"],
    sources: [
      {
        title: "Statistical classification - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Statistical_classification",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Deep Learning - Goodfellow, Bengio & Courville (2016)",
        url: "https://www.deeplearningbook.org/",
        publisher: "MIT Press",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "regression",
    term: "回帰（リグレッション）",
    reading: "かいき",
    category: "基礎概念",
    summary:
      "回帰とは、入力から連続値（数値）を予測する機械学習タスクです。株価予測・需要予測・不動産評価・気温予測など、「いくら？いくつ？どのくらい？」という量的な予測に使われる教師あり学習の基本形です。",
    description: `回帰（Regression）とは、入力変数（特徴量）と出力変数（ターゲット）の間の数値的な関係を学習し、新しい入力に対して連続した数値を予測する機械学習タスクです。「明日の気温は何℃か」「この物件の売却価格はいくらか」「来月の需要は何個か」のように、離散的なカテゴリではなく連続値を予測します。

回帰が重要な理由は、ビジネスにおける量的な予測・推定の需要が非常に高いためです。製品の需要予測（在庫管理）・広告クリック率の予測（CPA最適化）・顧客の生涯価値（LTV）推定・エネルギー消費量の予測・金融リスクのスコアリングなど、数値を予測することで合理的な意思決定ができます。

代表的なアルゴリズムとして、線形回帰（最もシンプル）・多項式回帰・Ridge/Lasso回帰（正則化あり）・サポートベクター回帰（SVR）・決定木回帰・ランダムフォレスト回帰・勾配ブースティング回帰・ニューラルネットワーク回帰があります。評価指標として、MAE（Mean Absolute Error）・RMSE（Root Mean Squared Error）・R²（決定係数）が使われます。overfitting対策として正則化とクロスバリデーションが重要です。gradient-descentを使ったパラメータ最適化が学習の中心です。`,
    relatedSlugs: ["supervised-learning", "machine-learning", "deep-learning", "gradient-descent", "overfitting"],
    sources: [
      {
        title: "Regression analysis - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Regression_analysis",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "The Elements of Statistical Learning",
        url: "https://hastie.su.domains/ElemStatLearn/",
        publisher: "Hastie, Tibshirani & Friedman / Springer",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "natural-language-understanding",
    term: "自然言語理解（NLU）",
    reading: "しぜんげんごりかい",
    category: "基礎概念",
    summary:
      "自然言語理解（NLU）とは、テキストの意味・意図・感情・文脈を機械が理解するNLPの下位分野です。質問応答・感情分析・意図分類の基盤で、BERTの登場により精度が飛躍的に向上しました。",
    description: `自然言語理解（Natural Language Understanding、NLU）とは、人間が書いたり話したりするテキストの「意味・意図・感情・論理関係」をコンピュータが理解する技術・研究分野です。NLP（自然言語処理）の下位分野であり、文字を認識するだけでなく「この文章は何を言いたいのか」を機械が把握することを目指します。

NLUが重要な理由は、人間のコミュニケーションの豊かさ（曖昧性・比喩・皮肉・省略・文脈依存）を機械が正確に処理できるかどうかが、AIの実用性の根幹を決定するためです。チャットボットが「キャンセルしたい」という発言を「注文のキャンセルか、予約のキャンセルか」と適切に意図分類できなければ役に立ちません。

主なNLUタスクとして、意図分類（Intent Classification）・固有表現認識（NER）・感情分析（Sentiment Analysis）・関係抽出・含意認識（NLI：自然言語推論）・意味的類似度推定などがあります。BERTの登場（2018年）でGLUE・SuperGLUEベンチマークのスコアが人間レベルに到達し、現在のLLMはさらに高度なNLUを実現しています。NLUと対になる概念として「自然言語生成（NLG）」があり、両者を合わせた広い概念がNLPです。`,
    relatedSlugs: ["natural-language-processing", "bert", "llm", "sentiment-analysis", "question-answering"],
    sources: [
      {
        title: "Natural-language understanding - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Natural-language_understanding",
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
    slug: "ai-assistant",
    term: "AIアシスタント",
    reading: "エーアイアシスタント",
    category: "実装",
    summary:
      "AIアシスタントとは、自然言語で指示を受けてタスクを実行するAIシステムの総称です。ChatGPT・Claude・Copilot・Geminiが代表例で、文章作成・情報検索・コーディング支援・スケジュール管理など幅広いタスクに対応します。",
    description: `AIアシスタント（AI Assistant）とは、自然言語（テキストまたは音声）でユーザーから指示を受け取り、情報提供・タスク実行・コンテンツ生成・問題解決支援などを行うAIシステムの総称です。LLMの発展により、従来のルールベースのバーチャルアシスタント（Siri・Alexa初期版等）から、複雑な指示を理解して柔軟に対応する高度なAIアシスタントへと進化しました。

AIアシスタントが重要な理由は、プログラミングや専門的なAI知識がなくても、自然言語で指示するだけでAIの恩恵を受けられるためです。文章作成・翻訳・要約・コード生成・データ分析・画像生成など、多様なタスクをテキストで依頼できる「万能ツール」として、ビジネスパーソン・クリエイター・学生など幅広い層に普及しています。

代表的なAIアシスタントとして、OpenAI ChatGPT（GPT-4oベース）・Anthropic Claude・Google Gemini・Microsoft Copilot（Bing Chat）・Apple Intelligence（Siri再設計）があります。スマートフォン・PCに統合されたデバイスオンボードのAIアシスタントも急増しており、「AIネイティブ」なデジタル体験が標準になりつつあります。agentとの境界は曖昧になってきており、タスクを自律的に遂行するAIアシスタントはエージェントと呼ばれる場合も多いです。`,
    relatedSlugs: ["llm", "chatgpt", "copilot", "agent", "tool-use"],
    sources: [
      {
        title: "Intelligent personal assistant - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Intelligent_personal_assistant",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Claude - Anthropic",
        url: "https://www.anthropic.com/claude",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "anomaly-detection",
    term: "異常検知",
    reading: "いじょうけんち",
    category: "実装",
    summary:
      "異常検知とは、正常なパターンから逸脱したデータを自動的に検出するAI技術です。不正検出・製造品質管理・サイバーセキュリティ・予知保全など、異常や問題を早期に発見する幅広い産業用途で活用されています。",
    description: `異常検知（Anomaly Detection）とは、データセット内で「正常なパターン」から大きく逸脱したデータポイント（外れ値・異常値）を自動的に識別する機械学習タスクです。外れ値検知（Outlier Detection）とも呼ばれます。異常なサンプルは正常なサンプルに比べて極端に少ないため、ラベルなしデータからの学習（教師なし学習）や、少量の異常サンプルを使った半教師あり学習が多く使われます。

異常検知が重要な理由は、様々な産業で「問題を早期発見する」ことが大きな経済的価値を持つためです。クレジットカード不正検知（損失防止）・製造ラインの品質検査（不良品検出）・ネットワーク侵入検知（サイバーセキュリティ）・機械の予知保全（故障前メンテナンス）・医療での希少疾患検出など、「正常でないもの」を見つけることが求められます。

代表的な手法として、統計的手法（z-スコア・IQR）、機械学習ベース（Isolation Forest・One-Class SVM・LOF：Local Outlier Factor）、深層学習ベース（Autoencoder、Variational Autoencoder：正常データを再構成し誤差が大きいものを異常とする、LSTM Autoencoderによる時系列異常検知）があります。LLMを活用した「ログ異常検知」（大量のシステムログから異常なパターンを検出）も実用化されています。`,
    relatedSlugs: ["machine-learning", "unsupervised-learning", "deep-learning", "supervised-learning", "evaluation-metrics"],
    sources: [
      {
        title: "Anomaly Detection: A Survey",
        url: "https://dl.acm.org/doi/10.1145/1541880.1541882",
        publisher: "ACM Computing Surveys / Chandola et al. (2009)",
        accessedAt: "2026-02-26",
      },
      {
        title: "Anomaly detection - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Anomaly_detection",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "data-science",
    term: "データサイエンス",
    reading: "データサイエンス",
    category: "基礎概念",
    summary:
      "統計・機械学習・データエンジニアリングを組み合わせてデータから価値を引き出す学際的な分野。AI・ML開発の基盤となるスキルセット。",
    description: `データサイエンスは、統計学・機械学習・データエンジニアリング・ビジネス知識を統合し、大量のデータから意味のある洞察や予測を引き出す学際的な分野です。データの収集・クリーニング・探索的分析・モデル構築・可視化・結果の伝達までを一貫して担います。

AIや機械学習の実用化には、データサイエンスの基盤スキルが不可欠です。Pythonや統計の基礎から始まり、業務課題を数理モデルに落とし込む能力まで、幅広いスキルセットが求められます。

近年はGenerative AI・LLMの登場により、コード生成や分析レポート自動化など、データサイエンスの作業効率が大幅に向上しています。一方で、データの品質管理・倫理的な利用判断など人間のリテラシーが依然として重要です。

代表的なタスクには、回帰・分類・クラスタリング・異常検知・推薦・時系列予測などがあり、これらはそれぞれ教師あり学習・教師なし学習・強化学習の各パラダイムと対応しています。`,
    relatedSlugs: [
      "machine-learning",
      "deep-learning",
      "supervised-learning",
      "dataset",
      "natural-language-processing",
    ],
    sources: [
      {
        title: "Data Science – Wikipedia",
        url: "https://en.wikipedia.org/wiki/Data_science",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Data Science for Business",
        url: "https://www.oreilly.com/library/view/data-science-for/9781449374273/",
        publisher: "O'Reilly Media (Provost & Fawcett, 2013)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "text-generation",
    term: "テキスト生成",
    reading: "テキストせいせい",
    category: "実装",
    summary:
      "LLMがプロンプトに基づいて文章・記事・コード・詩等を自動生成する機能。生成AIの最も基本的なアウトプット形式。",
    description: `テキスト生成（Text Generation）とは、大規模言語モデル（LLM）がユーザーのプロンプトを受け取り、次のトークンを逐次予測することで文章・コード・詩・要約などを自動生成する機能です。Transformerアーキテクチャの自己回帰的な推論プロセスが基盤となっています。

生成の制御には、温度（Temperature）やTop-pサンプリングといったハイパーパラメータが使われます。Temperatureを低くすると決定論的・正確な出力に、高くすると多様で創造的な出力になります。

応用範囲は非常に広く、マーケティングコピーの自動生成・カスタマーサポートの返答・プログラムコードの補完・レポートの下書きなど、あらゆるテキスト作成業務に活用されています。

最新のLLMでは、単なるテキスト生成にとどまらず、構造化出力（JSON）・ツール呼び出し・マルチモーダルな生成（画像+テキスト）など高度な機能と組み合わせることで、複雑な業務タスクをこなすエージェントが実現しています。`,
    relatedSlugs: [
      "llm",
      "generative-ai",
      "natural-language-generation",
      "transformer",
      "token",
    ],
    sources: [
      {
        title: "Text generation – OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/text-generation",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Text Generation – Hugging Face Docs",
        url: "https://huggingface.co/docs/transformers/main/en/task_summary#text-generation",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "image-generation",
    term: "画像生成",
    reading: "がぞうせいせい",
    category: "実装",
    summary:
      "テキストや画像を入力としてAIが新たな画像を生成する技術の総称。Stable Diffusion・DALL-E・Midjourneyが代表例。",
    description: `画像生成（Image Generation）は、テキストプロンプト・参照画像・スケッチなどを入力として、AIが新たな画像を合成する技術の総称です。拡散モデル（Diffusion Model）・GAN・VAEなど複数のアーキテクチャが存在し、現在は拡散モデルが主流となっています。

代表的なモデルには、Stability AIのStable Diffusion（オープンソース）、OpenAIのDALL-E 3、Midjourneyなどがあります。いずれもテキストから高品質な画像を生成できるため、広告・イラスト・プロダクトデザイン・映像制作など多くのクリエイティブ分野に普及しています。

技術的には、テキストエンコーダー（CLIPなど）で入力プロンプトをベクトル表現に変換し、デノイジングプロセスで徐々にノイズ画像をクリーンな画像へと変換します。LoRAなどの軽量ファインチューニング手法により、特定のスタイルやキャラクターを学習させることも容易になっています。

著作権・肖像権・フェイク画像生成などの倫理・法的問題も浮上しており、AI生成コンテンツの透かし（Watermark）技術や開示規制が議論されています。`,
    relatedSlugs: [
      "text-to-image",
      "diffusion-model",
      "stable-diffusion",
      "dall-e",
      "generative-ai",
    ],
    sources: [
      {
        title: "DALL-E 3 – OpenAI",
        url: "https://openai.com/dall-e-3",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Stable Diffusion – Stability AI",
        url: "https://stability.ai/stable-image",
        publisher: "Stability AI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-automation",
    term: "AI自動化",
    reading: "エーアイじどうか",
    category: "実装",
    summary:
      "AIを活用して繰り返し業務・データ処理・意思決定を自動化する実践。LLMエージェントによるワークフロー自動化が急速に普及。",
    description: `AI自動化（AI Automation）とは、機械学習・LLM・コンピュータービジョンなどのAI技術を使って、従来は人間が手動で行っていた業務プロセスを自動化することです。単純なルールベース自動化（RPA）を超え、文脈判断・自然言語理解・画像認識を伴う複雑なタスクにも対応できる点が特徴です。

LLMエージェントを活用したワークフロー自動化が急速に普及しており、メール要約・データ抽出・レポート生成・コードレビューなどが代表的なユースケースです。n8n・Zapier・Make（旧Integromat）などのノーコードツールとLLM APIを組み合わせた実装も一般化しています。

自動化の効果測定には、処理時間の削減率・エラー率・コスト削減額などのKPIが用いられます。一方で、自動化が適さないケース（高度な倫理判断・クリエイティブな意思決定・対人関係）の見極めも重要です。

McKinseyの調査では、現在の業務の約70%が部分的にAI自動化可能とされており、特に反復的なデータ処理・文書作成・情報検索タスクで大きな効率化が期待されています。`,
    relatedSlugs: [
      "agent",
      "agentic-workflow",
      "tool-use",
      "langchain",
      "orchestration",
    ],
    sources: [
      {
        title: "The State of AI – McKinsey",
        url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
        publisher: "McKinsey & Company",
        accessedAt: "2026-02-26",
      },
      {
        title: "OpenAI Agents SDK",
        url: "https://platform.openai.com/docs/guides/agents",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "api-key",
    term: "APIキー",
    reading: "エーピーアイキー",
    category: "実装",
    summary:
      "AI APIサービスへのアクセスを認証するためのシークレットキー文字列。OpenAI・Anthropic・Google等のAI APIを利用する際に必須。",
    description: `APIキー（API Key）とは、外部サービスのAPI（Application Programming Interface）にアクセスする際に使用する認証用の文字列です。生成AIの文脈では、OpenAI・Anthropic・Google・Cohereなどが提供するLLM APIを呼び出す際に必須となります。

APIキーは通常「sk-XXXX...」のような英数字の文字列で、サービスのダッシュボードから発行・管理できます。リクエストのHTTPヘッダーに含めることでサービス側がユーザーを識別し、使用量や課金を管理します。

セキュリティ上の注意点として、APIキーはパスワードと同様に機密情報です。GitHubなどの公開リポジトリにAPIキーをコミットすると漏洩リスクがあり、第三者に悪用される危険があります。環境変数（.envファイル）に格納し、.gitignoreで除外するのがベストプラクティスです。

APIキーには使用量制限（レートリミット）が設けられており、1分あたりのリクエスト数・トークン数が上限を超えるとエラーが返ります。本番環境では適切なエラーハンドリングとリトライロジックの実装が推奨されます。`,
    relatedSlugs: [
      "openai-api",
      "llm",
      "hugging-face",
      "inference",
      "streaming",
    ],
    sources: [
      {
        title: "API keys – OpenAI Documentation",
        url: "https://platform.openai.com/docs/api-reference/authentication",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "API Keys – Anthropic Documentation",
        url: "https://docs.anthropic.com/en/api/getting-started",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "content-moderation",
    term: "コンテンツモデレーション",
    reading: "コンテンツモデレーション",
    category: "実装",
    summary:
      "AIを用いてプラットフォーム上の有害・違法・ポリシー違反コンテンツを自動検出・フィルタリングする技術。",
    description: `コンテンツモデレーション（Content Moderation）とは、ユーザー生成コンテンツ（UGC）の中から、ヘイトスピーチ・暴力的表現・違法コンテンツ・スパムなどポリシー違反の内容を検出・除去・制限する仕組みです。AIを活用した自動モデレーションが、人海戦術によるレビューの限界を補う形で急速に普及しています。

技術的には、テキスト分類モデル・画像認識モデル・マルチモーダルモデルが組み合わせて用いられます。OpenAI Moderation API・Google Perspective API・Meta AIなどが代表的なサービスです。

課題として、文化的・言語的コンテキストの違いによる誤検知・過剰規制の問題があります。また、AI自体がバイアスを持つ場合、特定のコミュニティの発言が不当に制限されるリスクもあります。そのためヒューマンインザループによる人間のレビューとの組み合わせが推奨されます。

生成AIの普及に伴い、AIが生成したディープフェイク・合成音声・自動スパムの検出も新たな課題として浮上しており、AI生成コンテンツの識別技術（AIウォーターマーキング）との連携が重要になっています。`,
    relatedSlugs: [
      "ai-governance",
      "responsible-ai",
      "bias",
      "red-teaming",
      "classification",
    ],
    sources: [
      {
        title: "OpenAI Moderation API",
        url: "https://platform.openai.com/docs/guides/moderation",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Perspective API – Jigsaw (Google)",
        url: "https://www.perspectiveapi.com/",
        publisher: "Google / Jigsaw",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "claude",
    term: "Claude",
    reading: "クロード",
    category: "モデル",
    summary:
      "Anthropicが開発する会話・分析・コーディングに優れたLLMシリーズ（Claude 3/3.5/4系）。Constitutional AIで安全性を重視した設計。",
    description: `Claude（クロード）は、AI安全研究企業のAnthropicが開発・提供する大規模言語モデル（LLM）シリーズです。Claude 3（Haiku・Sonnet・Opus）→Claude 3.5→Claude 4系と世代を重ね、長文理解・コーディング・論理推論・日本語対応で高い評価を得ています。

最大の特徴は、Constitutional AI（CAI）と呼ばれる安全性重視のトレーニング手法です。有害な出力を減らしつつ、透明性・誠実さ・有益性を高めるよう設計されています。また、100Kトークン以上の長いコンテキストウィンドウを早期から実現し、長文ドキュメントの分析や大規模コードベースの理解に強みを持ちます。

APIはAnthropic APIとして提供されており、AWS Bedrockや Google Cloud Vertex AIからも利用可能です。claude.aiというWebインターフェースも提供されています。

GeminiやGPT-4oとともに、現在のLLM市場を構成する主要モデルの一つとして位置づけられており、特に長文・企業向けユースケースでの採用が増えています。`,
    relatedSlugs: [
      "llm",
      "generative-ai",
      "alignment",
      "constitutional-ai",
      "rlhf",
    ],
    sources: [
      {
        title: "Claude – Anthropic",
        url: "https://www.anthropic.com/claude",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
      {
        title: "Constitutional AI: Harmlessness from AI Feedback",
        url: "https://arxiv.org/abs/2212.08073",
        publisher: "Anthropic (Bai et al., 2022)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "predictive-analytics",
    term: "予測分析",
    reading: "よそくぶんせき",
    category: "実装",
    summary:
      "統計・機械学習を使って過去データから将来の事象を予測するビジネス分析手法。需要予測・リスク管理・顧客離脱予測に活用。",
    description: `予測分析（Predictive Analytics）とは、統計モデルや機械学習アルゴリズムを使って、過去・現在のデータから将来の事象・トレンド・行動を予測するデータ分析手法です。回帰分析・決定木・ランダムフォレスト・勾配ブースティング（XGBoost等）・ニューラルネットワークなどが主要な手法として使われます。

ビジネスでの活用例は多岐にわたります。ECサイトでの購買予測・金融機関での信用スコアリング・製造業での設備故障予測（予知保全）・小売業の需要予測・通信会社の顧客離脱予測（チャーン予測）などが代表的です。

予測モデルの精度評価には、MAE（平均絶対誤差）・RMSE（二乗平均平方根誤差）・AUC-ROCなど目的に応じた指標が用いられます。また、過学習を防ぐための交差検証や正則化も重要です。

近年はAutoML（自動機械学習）ツールの普及により、データエンジニアリングの専門知識がなくても予測モデルを構築できる環境が整いつつあります。一方でモデルの解釈可能性（XAI）の重要性も高まっており、なぜその予測をしたのかを説明できることが求められます。`,
    relatedSlugs: [
      "machine-learning",
      "supervised-learning",
      "regression",
      "recommendation-system",
      "dataset",
    ],
    sources: [
      {
        title: "Predictive Analytics – Wikipedia",
        url: "https://en.wikipedia.org/wiki/Predictive_analytics",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Predictive Analytics: The Power to Predict",
        url: "https://www.wiley.com/en-us/Predictive+Analytics%3A+The+Power+to+Predict+Who+Will+Click%2C+Buy%2C+Lie%2C+or+Die-p-9781119145677",
        publisher: "Wiley (Eric Siegel, 2016)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "natural-language-generation",
    term: "自然言語生成",
    reading: "しぜんげんごせいせい",
    category: "基礎概念",
    summary:
      "構造化データや内部表現から自然な文章を生成するNLPの下位分野（NLG）。LLMの文章生成・要約・翻訳の基盤技術。",
    description: `自然言語生成（Natural Language Generation / NLG）とは、コンピューターが構造化データ・知識ベース・内部表現から、人間が読める自然な文章を生成するNLP（自然言語処理）の下位分野です。NLP全体はNLU（自然言語理解）とNLGの二つの側面から構成されます。

古典的なNLGシステムはルールベースで、データベースの数値から定型文を生成するものでした（天気予報・財務レポートの自動生成など）。現代のLLMはTransformerベースの大規模モデルにより、はるかに流暢で文脈に合った文章を生成できるようになっています。

NLGの主要タスクには、テキスト要約・機械翻訳・質問応答・対話生成・データ-to-テキスト変換などが含まれます。評価指標にはBLEU・ROUGE・BERTScoreなどが使われます。

LLMの登場によりNLGの能力は飛躍的に向上し、従来は人間しかできなかった創造的な文章生成・論述・コーディングなどが実用的な品質で自動化できるようになりました。一方でハルシネーション（事実誤認）の問題は依然として課題であり、RAGや出典付き生成などの対策技術が発展しています。`,
    relatedSlugs: [
      "natural-language-processing",
      "llm",
      "transformer",
      "text-generation",
      "summarization",
    ],
    sources: [
      {
        title: "Natural Language Generation – Wikipedia",
        url: "https://en.wikipedia.org/wiki/Natural_language_generation",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Speech and Language Processing (3rd ed.)",
        url: "https://web.stanford.edu/~jurafsky/slp3/",
        publisher: "Stanford University (Jurafsky & Martin)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "personalization",
    term: "パーソナライゼーション",
    reading: "パーソナライゼーション",
    category: "実装",
    summary:
      "ユーザー個々の好み・行動・属性に合わせてAIがコンテンツ・UI・提案を最適化する技術。ECサイト・メディア・教育で広く活用。",
    description: `パーソナライゼーション（Personalization）とは、ユーザーの過去行動・嗜好・属性・コンテキストを機械学習で分析し、そのユーザーに最適なコンテンツ・製品・UI・メッセージをリアルタイムで提供する技術です。「関係ないものを見せない」ことで離脱を防ぎ、エンゲージメントとコンバージョンを高めます。

代表的な活用事例として、Netflix・YouTubeのコンテンツ推薦・Amazonの商品推薦・Spotifyのプレイリスト生成・ニュースアプリの記事フィードカスタマイズがあります。協調フィルタリング・コンテンツベースフィルタリング・ハイブリッドモデルなどの推薦アルゴリズムが基盤となります。

LLMの普及により、パーソナライゼーションはさらに高度化しています。ユーザーの自然言語での問い合わせに基づいてリアルタイムにコンテンツをカスタマイズしたり、会話履歴から長期的な嗜好を学習したりすることが可能になりました。

プライバシーの観点から、GDPRなどの規制に準拠したデータ収集・利用の透明性確保も重要な課題です。ユーザーが自分のデータ利用をコントロールできるオプトイン・オプトアウトの仕組みが求められます。`,
    relatedSlugs: [
      "recommendation-system",
      "machine-learning",
      "embedding",
      "deep-learning",
      "dataset",
    ],
    sources: [
      {
        title: "Netflix Research: Recommendations",
        url: "https://research.netflix.com/research-area/recommendations",
        publisher: "Netflix Research",
        accessedAt: "2026-02-26",
      },
      {
        title: "Amazon Personalize – AWS",
        url: "https://aws.amazon.com/personalize/",
        publisher: "Amazon Web Services",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "video-generation",
    term: "動画生成",
    reading: "どうがせいせい",
    category: "実装",
    summary:
      "テキストや画像を入力としてAIが動画を自動生成する技術。Sora・Runway・Pika等が代表例。エンタメ・広告制作を変えつつある。",
    description: `動画生成（Video Generation）とは、テキストプロンプトや参照画像・動画を入力として、AIが数秒〜数十秒の動画クリップを自動生成する技術です。拡散モデルをベースとした時系列モデルが主流となっており、2024年以降に急速に品質が向上しました。

代表的なモデルとして、OpenAIのSora（最大1分の高品質動画）、Runway Gen-3・Pika・Kling・GoogleのLumiere・Veo、Stability AIのStable Video Diffusionなどがあります。テキストから動画（Text-to-Video）のほか、画像から動画（Image-to-Video）・動画スタイル変換・動画補間なども可能です。

広告・マーケティング・映像制作・ゲーム・教育コンテンツなど幅広い分野での活用が期待されています。従来は専門的なCGソフトや撮影機材が必要だった動画制作が、テキストプロンプトで実現できるようになりつつあります。

一方で、ディープフェイク動画の生成・政治的フェイク映像・著作権問題など倫理的課題も大きく、AIウォーターマーキングによる生成コンテンツの識別技術の整備が急務となっています。`,
    relatedSlugs: [
      "text-to-image",
      "sora",
      "diffusion-model",
      "generative-ai",
      "multimodal-generation",
    ],
    sources: [
      {
        title: "Sora – OpenAI",
        url: "https://openai.com/sora",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Runway Gen-3 Alpha",
        url: "https://runwayml.com/research/gen-3-alpha",
        publisher: "Runway",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-music",
    term: "AI音楽生成",
    reading: "エーアイおんがくせいせい",
    category: "実装",
    summary:
      "テキストプロンプトや鼻歌からAIが楽曲・BGM・効果音を自動生成する技術。Suno・Udio・MusicLMが代表例。",
    description: `AI音楽生成とは、テキストプロンプト・ハミング・鼻歌・楽器音などを入力として、AIが楽曲・BGM・ジングル・効果音を自動生成する技術です。拡散モデル・Transformer・GAN等の生成AIアーキテクチャをオーディオ領域に適用したものです。

代表的なサービスとして、SunoとUdioが「ボーカル付き楽曲」の生成で注目を集めています。「アップテンポなポップソング、桜の散る春の情景」のようなテキストから数十秒の完成度の高い楽曲を数秒で生成できます。GoogleのMusicLM・MusicFX・Meta's MusicGen・Stability AIのStable Audioも代表的なモデルです。

ゲームBGM・広告音楽・ポッドキャストのオープニング・映像BGMなど、著作権フリーの音楽素材を必要とする用途での活用が進んでいます。

課題として、学習データへの著作権問題が深刻で、Suno・UdioはRIAAから訴訟を受けています。また生成された楽曲の著作権帰属も未整備の部分が多く、商用利用時は各サービスの利用規約の確認が必要です。`,
    relatedSlugs: [
      "generative-ai",
      "text-to-speech",
      "diffusion-model",
      "multimodal",
      "multimodal-generation",
    ],
    sources: [
      {
        title: "MusicLM: Generating Music From Text – Google Research",
        url: "https://google-research.github.io/seanet/musiclm/examples/",
        publisher: "Google Research",
        accessedAt: "2026-02-26",
      },
      {
        title: "Suno AI",
        url: "https://suno.com/",
        publisher: "Suno",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "knowledge-base",
    term: "ナレッジベース",
    reading: "ナレッジベース",
    category: "実装",
    summary:
      "組織や製品の情報を構造化して蓄積・検索可能にしたデータベース。RAGシステムの情報源として活用。",
    description: `ナレッジベース（Knowledge Base）とは、ドキュメント・FAQ・マニュアル・社内規定・議事録など、組織が保有する知識・情報を構造化して蓄積・検索可能にしたデータリポジトリです。顧客サポート・社内ナレッジ共有・製品ドキュメントなど幅広い用途で使われます。

RAG（Retrieval-Augmented Generation）の普及により、ナレッジベースはLLMと組み合わせた「社内版AI」の中心的なコンポーネントとなっています。ベクトルデータベースに文書を埋め込み（Embedding）として格納し、ユーザーの質問に関連するチャンクを検索してLLMの文脈として提供することで、企業固有の知識に基づいた回答が可能になります。

ナレッジベース構築の主なステップは、データ収集→クレンジング→チャンク分割→Embedding化→ベクトルDB格納→検索インデックス構築です。Notion・Confluence・SharePointなどの既存ドキュメント管理ツールがナレッジベースとして機能することも多く、APIで連携してRAGパイプラインに取り込む構成が一般的です。

ナレッジベースの品質（情報の鮮度・網羅性・正確性）は、RAGシステム全体の回答精度に直結します。定期的な更新・廃棄・品質チェックの体制が重要です。`,
    relatedSlugs: [
      "rag",
      "retrieval",
      "vector-db",
      "knowledge-graph",
      "information-retrieval",
    ],
    sources: [
      {
        title: "Knowledge Base – Wikipedia",
        url: "https://en.wikipedia.org/wiki/Knowledge_base",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Retrieval Augmented Generation – AWS",
        url: "https://aws.amazon.com/what-is/retrieval-augmented-generation/",
        publisher: "Amazon Web Services",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "conversational-ai",
    term: "会話型AI",
    reading: "かいわがたエーアイ",
    category: "実装",
    summary:
      "人間と自然な対話を行うAIシステムの総称。チャットボット・バーチャルアシスタント・LLMベースの対話システムを包含。",
    description: `会話型AI（Conversational AI）とは、テキストや音声を通じて人間と自然な対話を行うAIシステムの総称です。ルールベースのチャットボットから、LLMを活用した高度な対話システムまで幅広い技術を包含します。

技術的な構成要素として、NLU（自然言語理解）・対話管理・NLG（自然言語生成）の3層構造が基本です。従来のルールベース・意図分類（Intent Classification）ベースのシステムから、現在はLLMが直接対話を処理するエンドツーエンドの設計が主流になっています。

代表的なシステムとして、ChatGPT・Claude・Gemini・Copilotなどの汎用LLMチャット、Alexa・Siri・Google Assistantなどの音声アシスタント、カスタマーサポート向けチャットボット、社内ヘルプデスクAIなどがあります。

LLMの登場により、会話型AIは「質問に答える」だけでなく、ツール呼び出し・ファイル生成・コード実行・ブラウジングなど複雑なタスクを自律的にこなすエージェントへと進化しています。マルチターン対話でのコンテキスト保持・ユーザー意図の正確な理解が品質の鍵となります。`,
    relatedSlugs: [
      "chatbot",
      "llm",
      "natural-language-understanding",
      "natural-language-generation",
      "ai-assistant",
    ],
    sources: [
      {
        title: "Conversational AI – Wikipedia",
        url: "https://en.wikipedia.org/wiki/Conversational_AI",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
      {
        title: "Speech and Language Processing (3rd ed.)",
        url: "https://web.stanford.edu/~jurafsky/slp3/",
        publisher: "Stanford University (Jurafsky & Martin)",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-literacy",
    term: "AIリテラシー",
    reading: "エーアイリテラシー",
    category: "基礎概念",
    summary:
      "AIの仕組み・能力・限界・リスクを理解して適切に活用・判断できる知識とスキル。EU AI ActでもAIリテラシー教育が義務化。",
    description: `AIリテラシー（AI Literacy）とは、AIの基本的な仕組み・できること・できないこと・潜在的なリスクを理解し、日常業務や生活の中でAIを適切に活用・評価・批判できる知識とスキルの総体です。デジタルリテラシーの現代的拡張として位置づけられます。

EU AI Act（欧州AI規制）の第4条では、AIシステムを業務で使用する従業員に対して適切なAIリテラシー教育の提供が義務付けられており、2025年以降グローバルに注目が高まっています。UNESCOもAIコンピテンシーフレームワークを発表し、教育現場でのAIリテラシー育成を推進しています。

AIリテラシーの主要な要素として、(1)AIの基本概念の理解（機械学習・LLM・生成AIの仕組み）、(2)AIツールの実践的活用能力（プロンプト設計・出力評価）、(3)AIの限界・バイアス・ハルシネーションへの批判的思考、(4)AIの倫理・法的リスクの理解、(5)AIを活用したキャリア・業務設計能力、が挙げられます。

日本でも経済産業省・文部科学省がAIリテラシー教育の推進方針を示しており、ビジネスパーソン・学生・行政官員すべてにAIリテラシーが求められる時代に入っています。`,
    relatedSlugs: [
      "ai-governance",
      "responsible-ai",
      "ai-safety",
      "prompt-engineering",
      "machine-learning",
    ],
    sources: [
      {
        title: "EU AI Act – Article 4: AI Literacy",
        url: "https://www.europarl.europa.eu/doceo/document/TA-9-2024-0138_EN.html",
        publisher: "European Parliament",
        accessedAt: "2026-02-26",
      },
      {
        title: "UNESCO AI Competency Framework",
        url: "https://www.unesco.org/en/digital-education/ai-future-learning",
        publisher: "UNESCO",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "generative-model",
    term: "生成モデル",
    reading: "せいせいモデル",
    category: "基礎概念",
    summary:
      "学習データの分布を学習して新しいデータサンプルを生成できる機械学習モデルの総称。LLM・拡散モデル・GANが代表例。",
    description: `生成モデル（Generative Model）とは、学習データの確率分布を学習し、その分布に従った新しいデータサンプルを生成できる機械学習モデルの総称です。識別モデル（クラス分類など）と対比される概念で、「データを理解して新たに作り出す」能力を持ちます。

主要な生成モデルのアーキテクチャとして、GAN（敵対的生成ネットワーク）・VAE（変分オートエンコーダ）・フローモデル・拡散モデル（Diffusion Model）・自己回帰モデル（LLMはこれに該当）があります。現在は拡散モデル（画像・動画）と自己回帰型Transformer（テキスト）が最も高品質な生成を実現しています。

生成できるモダリティはテキスト・画像・音声・動画・3Dオブジェクト・コード・分子構造など多岐にわたり、それぞれに特化したモデルが存在します。GPT・DALL-E・Stable Diffusion・Sora・MusicLMはすべて生成モデルの具体例です。

条件付き生成（Conditional Generation）では、クラスラベル・テキストプロンプト・参照画像などの条件を与えることで、目的に合ったデータを生成できます。プロンプトエンジニアリングはこの条件設計の技術と言えます。`,
    relatedSlugs: [
      "generative-ai",
      "llm",
      "diffusion-model",
      "gan",
      "image-generation",
    ],
    sources: [
      {
        title: "Generative Adversarial Networks – Goodfellow et al. (2014)",
        url: "https://arxiv.org/abs/1406.2661",
        publisher: "arXiv",
        accessedAt: "2026-02-26",
      },
      {
        title: "Generative model – Wikipedia",
        url: "https://en.wikipedia.org/wiki/Generative_model",
        publisher: "Wikipedia",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "model-selection",
    term: "モデル選定",
    reading: "モデルせんてい",
    category: "実装",
    summary:
      "タスク・コスト・精度・レイテンシ等の要件に基づいて最適なAIモデルを選択するプロセス。LLMリーダーボードやベンチマークを参照。",
    description: `モデル選定（Model Selection）とは、特定のユースケースに対して最適なAIモデルを選択する意思決定プロセスです。LLMの場合、GPT-4o・Claude・Gemini・Llama・Mistralなど多数の選択肢があり、タスクの特性に応じた適切な選定が重要です。

モデル選定の主要な評価軸として、(1)精度・品質（ベンチマークスコア・タスク固有のテスト）、(2)コスト（1Kトークンあたりの料金）、(3)レイテンシ（応答速度）、(4)コンテキストウィンドウサイズ、(5)マルチモーダル対応、(6)ファインチューニング可否、(7)プライバシー・セキュリティ（クラウドvs.オンプレミス）があります。

参考情報として、LMSYS Chatbot Arena（人間によるブラインド評価ランキング）・Hugging Face Open LLM Leaderboard（オープンソースモデルの標準ベンチマーク）・ARC・MMLU・HumanEval等のベンチマークが広く参照されています。

実務では、まず小さく安価なモデルで試作し、品質が不足する場合に上位モデルへ移行する段階的アプローチが効率的です。また、RAGやファインチューニングを活用することで小型モデルでも高精度を実現できる場合があります。`,
    relatedSlugs: [
      "llm",
      "benchmark",
      "evaluation-metrics",
      "fine-tuning",
      "open-source-llm",
    ],
    sources: [
      {
        title: "LMSYS Chatbot Arena Leaderboard",
        url: "https://chat.lmsys.org/?leaderboard",
        publisher: "LMSYS Org",
        accessedAt: "2026-02-26",
      },
      {
        title: "Open LLM Leaderboard – Hugging Face",
        url: "https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "no-code-ai",
    term: "ノーコードAI",
    reading: "ノーコードエーアイ",
    category: "実装",
    summary:
      "プログラミング不要でAI機能を構築・活用できるツール・プラットフォーム。Make・Zapier・Difyが代表例。非エンジニアのAI活用を加速。",
    description: `ノーコードAI（No-Code AI）とは、プログラミングの知識がなくてもAI機能を組み込んだアプリケーション・ワークフロー・チャットボットを構築できるツール・プラットフォームの総称です。視覚的なインターフェースでモデルを選択・設定し、条件分岐やデータ連携を行えます。

代表的なノーコードAIツールとして、Make（旧Integromat）・Zapier・n8nなどのワークフロー自動化ツール、DifyやFlowiseなどのLLMアプリ構築プラットフォーム、Bubble・Glideなどのノーコードアプリ開発環境にAI機能を統合したものがあります。

ノーコードAIの利点は、非エンジニアのビジネスユーザーが自分の業務にAIを素早く適用できる点です。マーケティング担当者がリードナーチャリングメールをAI生成するワークフローを作成したり、営業担当者が商談メモをSlackに自動要約するボットを構築したりといった事例が増えています。

一方で、複雑なロジック・セキュリティ要件・大規模処理への対応には限界があります。最初はノーコードで始めて、要件が高度化したらコード実装に移行する段階的アプローチが現実的です。`,
    relatedSlugs: [
      "ai-automation",
      "llm",
      "agent",
      "prompt-engineering",
      "ai-assistant",
    ],
    sources: [
      {
        title: "Make (formerly Integromat)",
        url: "https://www.make.com/",
        publisher: "Make",
        accessedAt: "2026-02-26",
      },
      {
        title: "Dify – Open-source LLM app development platform",
        url: "https://dify.ai/",
        publisher: "Dify",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-strategy",
    term: "AI戦略",
    reading: "エーアイせんりゃく",
    category: "実装",
    summary:
      "組織がAIを活用して競争優位を築くための中長期的な計画・方針・ガバナンス体制の設計。",
    description: `AI戦略（AI Strategy）とは、組織がAI技術を活用して事業価値を創出・競争優位を確立するための中長期的な計画・方針・投資判断・ガバナンス体制の設計全体を指します。単なるツール導入計画ではなく、組織変革・人材育成・データ基盤整備を含む包括的な取り組みです。

AI戦略の主要な構成要素として、(1)ビジネス目標とAIのユースケースの特定・優先順位付け、(2)データ戦略（収集・管理・品質保証）、(3)技術選定（クラウド・オンプレミス・マルチベンダー）、(4)AIガバナンス・リスク管理体制、(5)人材・スキル育成計画、(6)ROI測定フレームワークが挙げられます。

McKinseyの調査では、AI投資のROIを最大化している企業は、技術導入と同時に組織・プロセス変革を行っている点が共通しています。「PoC貧乏」と呼ばれる実証実験止まりのパターンを避けるには、スケールアップを見据えたMLOps・LLMOps基盤の早期整備が重要です。

日本では2022年に閣議決定された「AI戦略2022」に続き、2024年以降は生成AI活用を中心とした政策が展開されています。企業レベルでは、経営層のコミットメントとAI推進専任チームの設置が成功の鍵とされています。`,
    relatedSlugs: [
      "ai-governance",
      "responsible-ai",
      "llmops",
      "ai-regulation",
      "machine-learning",
    ],
    sources: [
      {
        title: "The State of AI in 2024 – McKinsey",
        url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
        publisher: "McKinsey & Company",
        accessedAt: "2026-02-26",
      },
      {
        title: "AI戦略2022 – 内閣府",
        url: "https://www8.cao.go.jp/cstp/ai/aistrategy2022_honbun.pdf",
        publisher: "内閣府",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "prompt-template",
    term: "プロンプトテンプレート",
    reading: "プロンプトテンプレート",
    category: "実装",
    summary:
      "変数プレースホルダーを含む再利用可能なプロンプトの雛形。LangChainやSDKで管理・バージョン管理して品質を標準化。",
    description: `プロンプトテンプレート（Prompt Template）とは、変数のプレースホルダー（{customer_name}・{product}・{context}など）を含む再利用可能なプロンプトの雛形です。アプリケーション内でテンプレートに変数を埋め込んでLLMに送信することで、一貫した品質のプロンプトを効率よく生成できます。

LangChainのPromptTemplateクラスや、OpenAI・Anthropicの公式SDKがテンプレート機能をサポートしており、チェーン・パイプラインの構成部品として活用されます。テンプレートにはシステムプロンプト・Few-shotの例示・ユーザー入力の挿入位置などを含めることができます。

プロンプトテンプレートをバージョン管理することで、改善の追跡・A/Bテスト・チーム間での共有が容易になります。LangSmith・PromptLayer・Weights & Biasesなどのツールがプロンプト管理・評価基盤を提供しています。

チャットアプリケーションでは、会話履歴をテンプレートに動的に挿入するマルチターンテンプレートが用いられます。また、Few-shotテンプレートでは例示ペアをリストとして管理し、タスクに応じて動的に選択・挿入するExampleSelectorとの組み合わせが効果的です。`,
    relatedSlugs: [
      "prompt-engineering",
      "system-prompt",
      "few-shot-learning",
      "in-context-learning",
      "llm",
    ],
    sources: [
      {
        title: "PromptTemplate – LangChain Documentation",
        url: "https://python.langchain.com/docs/concepts/prompt_templates/",
        publisher: "LangChain",
        accessedAt: "2026-02-26",
      },
      {
        title: "Prompt engineering – OpenAI Cookbook",
        url: "https://cookbook.openai.com/articles/related_resources",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-agent-sdk",
    term: "AIエージェントSDK",
    reading: "エーアイエージェントエスディーケー",
    category: "実装",
    summary:
      "LLMエージェントの構築・デプロイを支援する開発キット。OpenAI Agents SDK・Anthropic Agent SDK・Google ADKが代表例。",
    description: `AIエージェントSDK（AI Agent SDK）とは、LLMを核としたエージェントシステムの構築・実行・デプロイを簡素化するソフトウェア開発キットです。ツール呼び出し・メモリ管理・マルチエージェントの協調・実行トレーシングなど、エージェント開発に必要な共通機能をライブラリとして提供します。

代表的なSDKとして、OpenAI Agents SDK（Python）はHandoff・Guardrails・トレーシングをビルトイン提供し、Anthropic Agent SDKはClaudeのツール使用と長文コンテキスト処理を最適化、Google Agent Development Kit（ADK）はVertex AIとのネイティブ統合を特徴としています。LangChainやLlamaIndexも広義のエージェントSDKとして利用されています。

SDKを使うメリットは、エージェントループ（思考→ツール選択→実行→観察→再思考）の実装をゼロから書く必要がなくなる点です。再利用可能なエージェント定義・ワークフロー管理・エラー処理・監視ダッシュボードが標準提供されるため、開発速度が大幅に向上します。

選定ポイントは、使用するLLMプロバイダー・デプロイ先クラウド・モニタリング要件・チームのPython/TypeScript習熟度です。ロックインを避けたい場合はLangChain・CrewAIなどプロバイダー非依存のフレームワークを検討します。`,
    relatedSlugs: [
      "agent",
      "agentic-workflow",
      "tool-use",
      "llm",
      "multi-agent",
    ],
    sources: [
      {
        title: "OpenAI Agents SDK Documentation",
        url: "https://openai.github.io/openai-agents-python/",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Google Agent Development Kit (ADK)",
        url: "https://google.github.io/adk-docs/",
        publisher: "Google",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-hallucination-detection",
    term: "ハルシネーション検出",
    reading: "ハルシネーションけんしゅつ",
    category: "実装",
    summary:
      "LLMが生成した回答の事実確認・信頼度評価を自動で行いハルシネーションを検出する技術・手法。",
    description: `ハルシネーション検出（AI Hallucination Detection）とは、LLMが生成したテキストに含まれる事実誤認・根拠のない主張・矛盾を自動的に識別・スコアリングする技術と手法の総称です。RAGシステムや高精度が求められるビジネス用途において、品質保証の要として重要性が増しています。

主なアプローチとして、(1)グラウンディング検証（生成文を出典文書と照合し根拠のない記述を検出）、(2)LLM-as-Judge（別のLLMが事実性・一貫性・忠実性を採点）、(3)確信度スコアリング（モデルのログ確率やトークン確率を用いた不確実性推定）、(4)外部知識ベース照合（WikidataなどのKGと突き合わせ検証）があります。

ツールとしてはTruLens（RAGas評価ライブラリ）、Galileo（本番モニタリング）、Ragas（RAG評価フレームワーク）、FACTSCORE（Wikipedia事実性評価）などが利用されています。評価指標には忠実性（Faithfulness）・回答関連性（Answer Relevancy）・コンテキスト精度（Context Precision）が広く使われています。

検出後の対策として、不確実な回答には「確認が取れていません」などの免責表示を付加するConfidence Calibration、または再検索・再生成をトリガーするフォールバック設計が有効です。`,
    relatedSlugs: [
      "hallucination",
      "grounding",
      "rag",
      "llm-as-judge",
      "evaluation-metrics",
    ],
    sources: [
      {
        title: "Ragas – Evaluation framework for RAG pipelines",
        url: "https://docs.ragas.io/",
        publisher: "Ragas",
        accessedAt: "2026-02-26",
      },
      {
        title: "TruLens Documentation",
        url: "https://www.trulens.org/",
        publisher: "TruEra",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "embedding-model",
    term: "埋め込みモデル",
    reading: "うめこみモデル",
    category: "モデル",
    summary:
      "テキスト・画像等をベクトル表現に変換する専用モデル。RAGやセマンティック検索の基盤として広く使われる。",
    description: `埋め込みモデル（Embedding Model）とは、テキスト・画像・音声などの入力データを固定長の実数ベクトル（埋め込みベクトル）に変換する専用の機械学習モデルです。意味的に近いコンテンツは距離が近いベクトルに、意味的に遠いコンテンツは距離が遠いベクトルにマッピングされることで、類似検索・分類・クラスタリングを実現します。

代表的なテキスト埋め込みモデルとして、OpenAIのtext-embedding-3-small/large（APIで利用可能）、MicrosoftのE5シリーズ、BAAIのBGE（BAAI General Embedding）、CohereのEmbed v3があります。多言語対応モデルではmultilingual-e5-large-instructが日本語を含む100言語以上で高性能を発揮します。

埋め込みモデルの選定基準は、(1)ベクトル次元数（小さいほどストレージ・計算コスト削減）、(2)最大トークン長（長文書への対応度）、(3)言語対応（日本語精度）、(4)ドメイン適合性（法律・医療等の専門分野）です。RAGシステムでは埋め込みモデルの品質がそのまま検索精度に直結するため、ユースケースに合ったモデル評価が不可欠です。

ファインチューニングによって特定ドメインの埋め込み精度を向上させることも可能で、対照学習（Contrastive Learning）ベースの手法が主流です。`,
    relatedSlugs: [
      "embedding",
      "vector-db",
      "semantic-search",
      "rag",
      "cosine-similarity",
    ],
    sources: [
      {
        title: "Text embeddings – OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/embeddings",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "MTEB: Massive Text Embedding Benchmark",
        url: "https://huggingface.co/spaces/mteb/leaderboard",
        publisher: "Hugging Face",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "context-length",
    term: "コンテキスト長",
    reading: "コンテキストちょう",
    category: "基礎概念",
    summary:
      "LLMが一度に処理できるトークン数の最大値。入力＋出力の合計上限を指し、長いほど長文書・会話履歴の処理が可能になる。",
    description: `コンテキスト長（Context Length）とは、LLMが1回のリクエストで処理できるトークン数の上限値です。入力プロンプト（指示・会話履歴・参照文書）と出力テキストの合計トークン数がこの上限以内に収まる必要があります。一般に「コンテキストウィンドウ」と同義で使われることが多く、厳密にはモデルが一度に「参照できる」範囲を指します。

モデルごとのコンテキスト長の目安（2025年時点）：GPT-4oは128Kトークン（約9万語相当）、Claude 3.5は200Kトークン（約14万語相当）、Gemini 1.5 Proは最大1Mトークン（長大なドキュメント処理向け）。100Kトークンで書籍1冊程度が収まる計算です。

コンテキスト長が重要なビジネスシーンとして、(1)長文契約書・法律文書の一括分析、(2)長い会話履歴の保持（カスタマーサポートBot）、(3)大規模コードベースの解析・リファクタリング支援、(4)複数文書をまとめた比較レポート生成が挙げられます。

ただし長いコンテキストを使うほどAPIコストと推論レイテンシが増加します。「Lost-in-the-Middle」問題（コンテキスト中央付近の情報を参照しにくくなる現象）も報告されており、重要情報は先頭・末尾に配置する工夫や、プロンプトキャッシュの活用で効率化が図れます。`,
    relatedSlugs: [
      "context-window",
      "token",
      "long-context",
      "prompt-caching",
      "llm",
    ],
    sources: [
      {
        title: "Context windows – Anthropic Documentation",
        url: "https://docs.anthropic.com/en/docs/about-claude/models/overview",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
      {
        title: "OpenAI API Models",
        url: "https://platform.openai.com/docs/models",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-coding-assistant",
    term: "AIコーディングアシスタント",
    reading: "エーアイコーディングアシスタント",
    category: "実装",
    summary:
      "コード補完・生成・レビュー・デバッグを支援するAIツール。GitHub Copilot・Cursor・Windsurf・Clineが代表例。",
    description: `AIコーディングアシスタント（AI Coding Assistant）とは、LLMを活用してコード補完・コード生成・バグ修正・リファクタリング・テスト生成・ドキュメント作成を支援するソフトウェアツールの総称です。IDE（統合開発環境）やエディタと連携し、開発者の作業フローに直接組み込まれます。

代表的なツールとして、GitHub Copilot（VS Code・JetBrains連携、Microsoftが提供）、Cursor（AIネイティブなエディタ、コードベース全体をコンテキストに保持）、Windsurf（Codeiumが提供するAIファーストIDE）、Cline（Claude/GPTをオーケストレーション可能なVS Code拡張）、そしてAnthropicが提供するClaude Code（ターミナルベースの開発エージェント）があります。

開発者の生産性への影響として、GitHubの調査では開発者の88%がコーディングアシスタントを使うことで「より多くの時間をやりがいある仕事に充てられる」と回答しており、反復的なボイラープレート記述・テスト作成・ドキュメント化の工数を大幅に削減できます。

活用時の注意点として、生成コードにはセキュリティ脆弱性・ライセンス問題が含まれる可能性があるため、コードレビューは必須です。また「コンテキストウィンドウに何を与えるか」がアウトプット品質に直結するため、プロンプトエンジニアリングの知識が重要になります。`,
    relatedSlugs: [
      "code-generation",
      "copilot",
      "llm",
      "ai-assistant",
      "prompt-engineering",
    ],
    sources: [
      {
        title: "GitHub Copilot Documentation",
        url: "https://docs.github.com/en/copilot",
        publisher: "GitHub",
        accessedAt: "2026-02-26",
      },
      {
        title: "Cursor – The AI Code Editor",
        url: "https://www.cursor.com/",
        publisher: "Cursor",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-safety-evaluation",
    term: "AI安全性評価",
    reading: "エーアイあんぜんせいひょうか",
    category: "法務・倫理",
    summary:
      "LLMの有害出力・誤用・セキュリティリスクを系統的に評価するプロセス。レッドチーミング・ベンチマーク・自動評価を組み合わせる。",
    description: `AI安全性評価（AI Safety Evaluation）とは、LLMおよびAIシステムが有害なコンテンツを生成する、悪用される、意図しない動作をするといったリスクを系統的に特定・定量化・緩和するための評価プロセスです。モデルのリリース前・デプロイ後の継続的な監視の両フェーズで実施されます。

評価の主要カテゴリとして、(1)有害コンテンツ生成（ヘイトスピーチ・暴力・違法情報の出力傾向）、(2)脱獄耐性（Jailbreakプロンプトへの対抗能力）、(3)プロンプトインジェクション耐性（外部入力による指示乗っ取り）、(4)幻覚・誤情報率、(5)プライバシー侵害リスク（学習データのメモリ化）があります。

手法面では、人手によるレッドチーミング（セキュリティ専門家が攻撃シナリオを試行）と、自動レッドチーミング（LLMが攻撃プロンプトを大量生成）を組み合わせることが標準的になっています。ベンチマークとして、MT-Bench・HarmBench・AIR-Bench・HELM-Safetyなどが広く使われています。

規制動向として、EU AI ActやNIST AI Risk Management Framework（AI RMF）は高リスクAIシステムに対して安全性評価の実施を義務付けており、エンタープライズ導入時には内部・第三者評価の証跡を求められる場面が増えています。`,
    relatedSlugs: [
      "ai-safety",
      "red-teaming",
      "alignment",
      "benchmark",
      "llm-as-judge",
    ],
    sources: [
      {
        title: "NIST AI Risk Management Framework (AI RMF)",
        url: "https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf",
        publisher: "NIST",
        accessedAt: "2026-02-26",
      },
      {
        title: "Responsible Scaling Policy – Anthropic",
        url: "https://www.anthropic.com/news/anthropics-responsible-scaling-policy",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "chain-of-thought-prompting",
    term: "チェーン・オブ・ソート・プロンプティング",
    reading: "チェーンオブソートプロンプティング",
    category: "実装",
    summary:
      "「ステップバイステップで考えてください」等の指示でLLMの推論過程を引き出すプロンプト手法。CoTの実践的応用。",
    description: `チェーン・オブ・ソート・プロンプティング（Chain-of-Thought Prompting、CoTプロンプティング）とは、LLMに「ステップバイステップで考えてください（Let's think step by step）」のような指示を与え、最終回答に至る推論過程を段階的に出力させるプロンプト技法です。2022年にGoogleのWeiらが発表した論文で、数学・論理・常識推論タスクでの精度が大幅に向上することが示されました。

CoTプロンプティングの主なバリエーションとして、(1)Zero-shot CoT（「ステップバイステップで」と指示するだけ）、(2)Few-shot CoT（推論ステップを含む例示を数件提示する）、(3)Auto-CoT（例示を自動生成してからCoTを実行）、(4)Tree of Thought（複数の推論経路を並列探索）があります。

実際のビジネス活用例として、複雑な条件分岐を伴う稟議判断・財務計算の検証・多段階の文書レビュー・コードデバッグなど、単純なQ&Aでは正確な回答が得にくいタスクに有効です。「理由を説明しながら答えてください」という日本語表現でも同等の効果が得られます。

注意点として、CoTは推論ステップが長くなるためトークン消費・レイテンシが増加します。GPT-4oやClaude 3.5 Sonnetなど高性能モデルで特に効果が顕著で、小型モデルでは効果が限定的な場合があります。o1・o3などの推論特化モデルはCoTをモデル内部で自動実行するため、明示的な指示が不要です。`,
    relatedSlugs: [
      "cot",
      "prompt-engineering",
      "reasoning-model",
      "few-shot-learning",
      "self-consistency",
    ],
    sources: [
      {
        title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
        url: "https://arxiv.org/abs/2201.11903",
        publisher: "arXiv / Google",
        accessedAt: "2026-02-26",
      },
      {
        title: "Large Language Models are Zero-Shot Reasoners",
        url: "https://arxiv.org/abs/2205.11916",
        publisher: "arXiv / Google",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "vector-search",
    term: "ベクトル検索",
    reading: "ベクトルけんさく",
    category: "実装",
    summary:
      "テキスト・画像をベクトル化してコサイン類似度等で意味的に近いデータを高速検索する技術。RAGの中核コンポーネント。",
    description: `ベクトル検索（Vector Search）とは、テキスト・画像・音声などのデータを埋め込みモデルで高次元ベクトルに変換し、クエリベクトルとの類似度（コサイン類似度・内積・ユークリッド距離など）によって意味的に近いデータを高速に検索する技術です。キーワードの完全一致ではなく「意味的な近さ」で検索できる点が特徴です。

内部アルゴリズムとして、全件比較（Exact Nearest Neighbor）では精度は完璧ですが大規模データでは遅すぎるため、実用上はHNSW（Hierarchical Navigable Small World）やIVF（Inverted File Index）などの近似最近傍探索（ANN）アルゴリズムが使われます。PineconeやWeaviate・Qdrant・pgvector（PostgreSQL拡張）などのベクトルデータベースがこれらを実装済みで提供しています。

RAGシステムでのベクトル検索の流れは、(1)文書をチャンクに分割し埋め込みモデルでベクトル化してベクトルDBに保存、(2)ユーザーの質問をベクトル化、(3)質問ベクトルに近い上位K件の文書チャンクを取得、(4)取得チャンクをLLMのコンテキストに入れて回答生成、というパイプラインです。

ハイブリッド検索（キーワード検索＋ベクトル検索の組み合わせ）を用いることで、固有名詞・コード・数字など意味ベクトルが弱い要素も拾える補完的な設計が推奨されています。`,
    relatedSlugs: [
      "vector-db",
      "embedding",
      "semantic-search",
      "cosine-similarity",
      "rag",
    ],
    sources: [
      {
        title: "Vector search overview – Pinecone Documentation",
        url: "https://docs.pinecone.io/guides/get-started/overview",
        publisher: "Pinecone",
        accessedAt: "2026-02-26",
      },
      {
        title: "Qdrant – Vector Database Documentation",
        url: "https://qdrant.tech/documentation/",
        publisher: "Qdrant",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "ai-product-development",
    term: "AIプロダクト開発",
    reading: "エーアイプロダクトかいはつ",
    category: "実装",
    summary:
      "LLMを組み込んだプロダクト・サービスの企画から設計・実装・評価・改善までのライフサイクル管理。",
    description: `AIプロダクト開発（AI Product Development）とは、LLMやその他のAIモデルを核とした製品・サービスを企画・設計・実装・評価・改善するライフサイクル全体を指します。従来のソフトウェア開発と異なり、モデルの確率的な振る舞い・ハルシネーション・コスト最適化・プロンプト管理など、AI固有の課題への対処が求められます。

Chip Huyen（「AI Engineering」著者）が提唱するAIプロダクト開発の主要フェーズとして、(1)ユースケース特定と実現可能性検証（PoC）、(2)モデル選定とベースラインの確立、(3)評価基盤の構築（評価データセット・メトリクス設計）、(4)プロンプトエンジニアリングとRAG設計、(5)ファインチューニングの要否判断、(6)本番デプロイとモニタリング、(7)フィードバックループによる継続改善があります。

「評価なきAI開発は存在しない」と言われるほど評価（Evaluation）が重要で、LLM-as-Judge・人手評価・自動テストを組み合わせた評価パイプラインの早期整備が成功の鍵です。LLMOpsツール（LangSmith・Langfuse・Weights & Biases）による実験管理・トレーシング・コスト分析も不可欠です。

日本市場では規制対応（個人情報保護法・AI利活用ガイドライン）とマルチベンダー戦略（特定クラウドへの依存リスク分散）も考慮すべき要素です。`,
    relatedSlugs: [
      "llmops",
      "prompt-engineering",
      "evaluation-metrics",
      "ai-observability",
      "rag",
    ],
    sources: [
      {
        title: "AI Engineering – Chip Huyen (2024)",
        url: "https://www.oreilly.com/library/view/ai-engineering/9781098166298/",
        publisher: "O'Reilly Media",
        accessedAt: "2026-02-26",
      },
      {
        title: "Building LLM applications – Anthropic Documentation",
        url: "https://docs.anthropic.com/en/docs/build-with-claude/overview",
        publisher: "Anthropic",
        accessedAt: "2026-02-26",
      },
    ],
    updatedAt: "2026-02-26",
  },
  {
    slug: "token-limit",
    term: "トークン制限",
    reading: "トークンせいげん",
    category: "基礎概念",
    summary:
      "APIリクエストごとの最大トークン数（入力＋出力）の上限値。コスト管理と長文処理の設計に直結する制約。",
    description: `トークン制限（Token Limit）とは、LLMのAPIリクエスト1回あたりに処理できるトークン数の上限値です。入力トークン（プロンプト・会話履歴・文書）と出力トークン（生成テキスト）の合計がこの制限以内に収まる必要があります。上限を超えるとエラーが返されるか、テキストが途中で切り捨てられます。

コンテキスト長（モデルが参照できる最大トークン数）とは密接に関連しますが、APIによっては入力上限・出力上限を別々に設定できる場合があります。例えば「max_tokens」パラメータで生成する最大出力トークン数を制限することで、コスト管理と応答時間の制御が可能です。

トークン制限の実務上の影響として、(1)長い会話履歴の管理（古いメッセージをサマリー化して圧縮する）、(2)長文ドキュメントの分割処理（チャンキング戦略）、(3)バッチ処理時のコスト試算、(4)ストリーミング応答の設計（ユーザー体験向上のため出力をリアルタイム表示）が挙げられます。

コスト計算の基本として、多くのAPIは「入力1Kトークンあたり$X、出力1Kトークンあたり$Y」という課金体系を採用しており、出力トークンの単価が入力より高い傾向があります。プロンプトキャッシュ機能（Anthropic・OpenAIが提供）を活用すると、繰り返し利用するシステムプロンプトのトークンコストを最大90%削減できます。`,
    relatedSlugs: [
      "token",
      "context-window",
      "context-length",
      "prompt-caching",
      "llm",
    ],
    sources: [
      {
        title: "Token usage and pricing – OpenAI Documentation",
        url: "https://platform.openai.com/docs/guides/production-best-practices",
        publisher: "OpenAI",
        accessedAt: "2026-02-26",
      },
      {
        title: "Pricing – Anthropic Documentation",
        url: "https://www.anthropic.com/pricing",
        publisher: "Anthropic",
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
