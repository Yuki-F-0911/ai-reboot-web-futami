import type { AiTopicArticle } from '@/types/ai-topic'

export const weeklyAiNews20260324: AiTopicArticle = {
  id: '2026-03-24-weekly-ai-news',
  title: 'Claude Dispatch・GPT-5.4 miniなど — 生成AI週報（2026年3月24日）',
  summary:
    'AnthropicがClaude DispatchとComputer Useを前面化し、OpenAIはGPT-5.4 miniとFile Libraryを展開。GoogleとMetaも既存サービスへのAI埋め込みを進め、EUではAI Act簡素化議論が前進しました。',
  content: `## 今週の要点

X上の反応をGrokで整理すると、今週は「AIが賢くなる」よりも「AIがPC、ファイル、予定、ニュースに直接触る」更新に注目が集まりました。AnthropicのClaude Dispatch、OpenAIのFile Library、Google WorkspaceのGemini強化、Meta AIのリアルタイム情報拡充が並び、生成AIは会話ツールから業務の実行レイヤーへ近づいています。

---

### 1. Anthropic、Claude DispatchとComputer Useを前面化

Anthropicの公式Coworkページでは、2026年3月23日付で「Dispatch update and computer use」が前面に出されました。スマホから始めた会話をデスクトップへ引き継ぎ、Claudeがコンピュータを操作し、文脈をまたいで記憶し、定期タスクまで実行する構成です。利用可能範囲は研究プレビュー段階で、Computer UseはmacOS中心ですが、[AIエージェント](/glossary/agent)が「指示に答える」だけでなく「PC上の仕事を受け持つ」方向へ進んだことが今週の大きな変化です。

- スマホとデスクトップで同じ会話を継続
- computer use、memory、scheduled tasks を一体で提供
- 研究プレビューで段階的に展開
- **ビジネスへの示唆**: 週報作成やファイル整理のような定型業務は、プロンプト設計より「どこまで自動実行を任せるか」の設計が重要になってきます。承認ポイントと操作ログの考え方を先に決めておくと導入しやすくなります。

> 出典: [Cowork: Claude Code power for knowledge work | Claude by Anthropic](https://claude.com/product/cowork)（確認日: 2026-03-24）

---

### 2. OpenAI、GPT-5.4 miniとFile Libraryで「作業資産」管理を強化

OpenAIは3月18日にChatGPTへGPT-5.4 miniを展開し、3月23日にはFile Libraryを追加しました。あわせて3月5日のOpenAI Academy記事では、GPT-5.4 Thinkingがcomputer useとtool searchを改善したと説明されています。つまりOpenAIは、モデル性能の更新だけでなく、「ファイルを蓄積し、再利用し、ツールをまたいで仕事を進める」体験を強めています。[LLM（大規模言語モデル）](/glossary/llm)の選定だけでなく、どの資料をAIに渡し続けるかが実務の差になりやすくなっています。

- GPT-5.4 mini をChatGPTに展開
- File Libraryでアップロード済みファイルを再利用しやすく
- GPT-5.4 Thinkingはcomputer useとtool searchを改善
- **ビジネスへの示唆**: 今後は「良いプロンプト集」だけでなく、「再利用しやすい社内ファイルとテンプレートの整備」がAI活用の成果を左右します。部署ごとに共有してよい文書の棚卸しを進める価値があります。

> 出典: [ChatGPT — Release Notes | OpenAI Help Center](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)（確認日: 2026-03-24）
> [Introducing GPT-5.3 Instant, GPT-5.4 Thinking, and GPT-5.4 Pro | OpenAI Academy](https://academy.openai.com/public/resources/latest-model)（確認日: 2026-03-24）

---

### 3. GoogleとMeta、既存サービスへのAI埋め込みを加速

Googleは3月10日、Docs・Sheets・Slides・Drive向けのGemini強化を発表し、ファイル、メール、ウェブをまたいだ下書きや表計算の自動化を進めました。Metaも3月13日、Meta AIに国際ニュースやライフスタイル情報などのリアルタイムコンテンツを拡充すると発表しています。今週のXでも、Google Workspaceの予定調整支援やMetaのサポート機能強化が反応を集めました。独立したAIアプリを増やすより、既存の業務ソフトへAIを埋め込む競争が強まっています。

- GoogleはWorkspace内でGeminiの文書生成と情報統合を強化
- MetaはMeta AIのリアルタイム情報ソースを拡大
- 両社とも既存サービスの利用導線の中でAI価値を高める流れ
- **ビジネスへの示唆**: すでにGoogle WorkspaceやMeta系サービスを使っている組織では、新しい単体AIを増やす前に、既存契約のAI機能をどこまで使えるか確認した方が投資効率は高くなりやすいです。

> 出典: [New ways to create faster with Gemini in Docs, Sheets, Slides and Drive | Google](https://blog.google/products-and-platforms/products/workspace/gemini-workspace-updates-march-2026/)（確認日: 2026-03-24）
> [Bringing More International News and Content to Meta AI | Meta](https://about.fb.com/news/2026/03/bringing-more-international-news-and-content-to-meta-ai/)（確認日: 2026-03-24）

---

### 4. EUでAI規制の「簡素化」と実装前倒し準備が進む

AI規制では、EU理事会が3月13日にAIルール簡素化案で理事会の立場を採択し、欧州議会のIMCO・LIBE委員会も3月18日に関連報告書を採択しました。欧州委員会のAI Actページでは、高リスクAIの適用時期を最大16か月調整する案や、義務の明確化が示されています。これは規制が後退するというより、企業が実装しやすい形へ調整しながら適用を進める動きです。採用、従業員管理、審査業務などでAIを使う企業は、制度対応を「まだ先」と見ない方が安全です。

- EU理事会が3月13日にAIルール簡素化案の立場を採択
- 欧州議会委員会は3月18日に関連報告書を採択
- 高リスクAIの適用時期や義務の明確化が論点
- **ビジネスへの示唆**: 採用や評価、監視、信用判断に関わるAIを使う企業は、ベンダー任せにせず、用途一覧・データ源・人間の最終判断者を整理しておく必要があります。

> 出典: [Council agrees position to streamline rules on Artificial Intelligence | Consilium](https://www.consilium.europa.eu/en/press/press-releases/2026/03/13/council-agrees-position-to-streamline-rules-on-artificial-intelligence/)（確認日: 2026-03-24）
> [Vote on Simplifying EU AI Rules | European Parliament IMCO](https://www.europarl.europa.eu/committees/en/imco/home/highlights)（確認日: 2026-03-24）
> [AI Act | Shaping Europe’s digital future](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)（確認日: 2026-03-24）

---

## 今週の実践アクション（3つ）

1. 毎週発生する定型業務を1つ選び、Claude・ChatGPT・Geminiのどれが「回答」ではなく「実行」まで担えるか比較する
2. AIに渡してよい文書、テンプレート、スプレッドシートを整理し、再利用しやすい共有フォルダ構成に直す
3. 採用、評価、監視、審査にAIを使っている部署は、用途と判断フローを棚卸しして規制対象になりうる箇所を洗い出す

## 次に読む

- 関連記事: [Claude の使い方](/academy/blog/claude-how-to-use)
- 関連記事: [AI業務導入ガイド](/academy/blog/ai-workplace-introduction-guide)
- 基礎用語: [AIエージェントとは](/glossary/agent)
- 基礎用語: [LLM（大規模言語モデル）とは](/glossary/llm)
`,
  contentFormat: 'markdown',
  thumbnail: {
    url: '/images/ogp-default.webp',
    width: 1200,
    height: 630,
  },
  publishedAt: '2026-03-24T09:00:00+09:00',
  updatedAt: '2026-03-24T09:00:00+09:00',
  tags: ['週次まとめ', 'Claude', 'ChatGPT', 'Gemini', 'AI規制'],
  classification: {
    period: '2026-W13',
    topics: ['claude', 'agent', 'workflow', 'policy'],
  },
  relatedLinks: {
    blogSlugs: ['claude-how-to-use', 'ai-workplace-introduction-guide'],
    glossarySlugs: ['agent', 'llm'],
  },
  seo: {
    ogTitle: 'Claude Dispatch・GPT-5.4など：生成AI週報 2026/3/24',
    ogDescription:
      'Claude Dispatch、GPT-5.4 mini、Google WorkspaceのGemini強化、Meta AIのリアルタイム情報拡充、EUのAI規制簡素化まで、2026年3月第4週の主要AIニュースを整理しました。',
  },
  meta: {
    sourceNote: '情報確認日: 2026-03-24',
  },
}
