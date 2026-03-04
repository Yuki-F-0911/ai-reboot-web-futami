import type { AiTopicArticle } from '@/types/ai-topic'

export const monthlyAiNews202602: AiTopicArticle = {
  id: '2026-02-26-monthly-ai-news',
  title: 'Gemini 3.1・Claude Sonnet 4.6など — 生成AI月報（2026年2月）',
  summary:
    '2026年2月は、Google・Anthropic・OpenAI・GitHubが相次いで生成AIの実運用アップデートを公開。モデル性能の進化だけでなく、業務組み込みとモデル移行管理の重要度が一段上がった1か月でした。',
  content: `## 2026年2月の要点

2026年2月は、モデルの高性能化だけでなく「業務にどう埋め込むか」が進んだ月でした。GoogleはGeminiアプリを機能拡張し、AnthropicはClaude 4.6系を本格展開。OpenAIとGitHubは、公共領域や開発現場での実装・運用ルールを具体化しました。3月以降は、単発検証よりも運用設計の精度が成果を分ける局面に入っています。

---

### 1. Google、2月版Gemini Dropを公開

Googleは「Gemini Drop（2026年2月版）」を公開し、Geminiアプリの機能をまとめて更新しました。主な変更は、音楽生成モデルLyria 3（30秒トラック生成）、Gemini 3.1（3.1 ProとDeep Think）、画像生成Nano Banana 2、Veo Templates、そして論文への直接リンク付きの科学引用機能です。

これまで分散していた「調べる・作る・整える」作業が、1つのUIで完結しやすくなっています。特に、情報検索からクリエイティブ生成までを同一フローで回せる点は、社内の試作スピードに直結します。

- Gemini 3.1で推論・問題解決系の性能を強化
- Lyria 3やNano Banana 2でマルチモーダル制作を拡張
- **ビジネスへの示唆**: 企画職やマーケ職の下書き作業は、検索と生成を分けずに一連で設計したほうが効果が出やすくなっています。

> 出典: [Gemini Drops: New updates to the Gemini app, February 2026](https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-february-2026/)（確認日: 2026-03-04）

---

### 2. Anthropic、Claude Sonnet 4.6を発表（2/17）

Anthropicは2月17日、Claude Sonnet 4.6を公開しました。コーディング、コンピュータ操作、長文推論、エージェント計画などを改善し、1Mトークンのコンテキストウィンドウ（ベータ）を搭載。無料/Proの既定モデルとして展開され、価格はSonnet 4.5と同水準です。

軽量寄りモデルでOpus級のタスクを一部代替できるため、コストと品質のバランスを取りやすくなりました。とくに[LLM（大規模言語モデル）](/glossary/llm)を業務運用する企業では、推論品質と単価の再評価がしやすい更新です。

- Sonnet系で1Mトークン文脈をベータ提供
- コーディング/長文処理/指示追従を強化
- **ビジネスへの示唆**: まずSonnet 4.6を標準にし、難タスクのみ上位モデルへ切り替える運用が現実的です。

> 出典: [Introducing Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)（確認日: 2026-03-04）

---

### 3. Anthropic API、2月にモデル移行と運用機能を強化

Anthropicの開発者向けリリースノートでは、2月5日にClaude Opus 4.6、2月17日にSonnet 4.6と検索/ツール系の一般提供、2月19日に自動キャッシュと旧モデル退役が公表されました。具体的には、Sonnet 3.7・Haiku 3.5の退役、Haiku 3の退役予定通知、そして新モデルへの移行ガイダンスが同時に示されています。

これは「新モデル登場」だけでなく、モデル寿命の短期化を前提に運用する時代に入ったことを示します。バージョン固定、検証環境、ロールバック手順を持たないチームほど、更新のたびに負債が増えやすくなります。

- Opus/Sonnet 4.6系への移行が本格化
- 自動キャッシュや動的フィルタリングで運用効率を改善
- **ビジネスへの示唆**: [AIエージェント](/glossary/agent)運用では、モデル更新を月次の定例業務に組み込む必要があります。

> 出典: [Claude Developer Platform Release Notes](https://docs.anthropic.com/en/release-notes/api)（確認日: 2026-03-04）

---

### 4. OpenAIとPNNL、連邦許認可業務のAIベンチマークを公表（2/26）

OpenAIは米国エネルギー省系研究機関PNNLと連携し、連邦許認可文書作成を対象にしたベンチマーク（DraftNEPABench）を公開しました。19人の専門家評価では、NEPA文書作成タスクで「小節あたり1〜5時間、全体で最大約15%の作業短縮可能性」が報告されています。

生成AIの議論がチャット体験に偏りがちな中で、行政・インフラ文書のような高負荷業務に適用範囲が広がっている点が重要です。日本企業でも、規制対応ドキュメントや入札資料の下書き工程に応用しやすい示唆があります。

- 公共セクター向けに評価指標付きで効果を開示
- 文書作成の時間短縮を定量で提示
- **ビジネスへの示唆**: 効果検証は「回答品質」だけでなく、削減工数を業務単位で測る設計が必要です。

> 出典: [Pacific Northwest National Laboratory and OpenAI partner to accelerate federal permitting](https://openai.com/index/pacific-northwest-national-laboratory/)（確認日: 2026-03-04）

---

### 5. GitHub Copilot、主要モデルを2/17付で非推奨化（2/19公表）

GitHubは2月19日、Copilot全体で一部Anthropic/OpenAIモデルを2月17日付で非推奨化したと発表しました。対象はClaude Opus 4.1、GPT-5、GPT-5-Codexで、推奨代替はそれぞれClaude Opus 4.6、GPT-5.2、GPT-5.2-Codexです。管理者にはモデルポリシー設定の見直しも求められています。

これは開発現場で「使えるモデルが固定ではない」ことを明確に示す動きです。プロンプト資産だけでなく、モデル指定・評価基準・社内ガイドをセットで更新できる体制が必要になります。

- Copilot体験全体で旧モデルを整理
- 代替モデルと管理者向け設定要件を提示
- **ビジネスへの示唆**: [プロンプト](/glossary/prompt)資産はモデル別の互換テストと一緒に管理すると、切替時の混乱を抑えられます。

> 出典: [Selected Anthropic and OpenAI models are now deprecated](https://github.blog/changelog/2026-02-19-selected-anthropic-and-openai-models-are-now-deprecated/)（確認日: 2026-03-04）

---

## 来月に向けた実践アクション（3つ）

1. 利用中のAI機能を「モデル名・バージョン・代替候補」付きで棚卸しし、移行表を作る
2. 主要ユースケースを3本選び、2月公開モデル（Gemini 3.1/Sonnet 4.6など）で比較検証する
3. AI活用の月次レビュー会を設定し、精度より先に削減工数と再現性をKPI化する

## 次に読む

- 関連記事: [AI業務導入ガイド](/academy/blog/ai-workplace-introduction-guide)
- 関連記事: [Claude の使い方](/academy/blog/claude-how-to-use)
- 基礎用語: [LLM（大規模言語モデル）とは](/glossary/llm)
- 基礎用語: [AIエージェントとは](/glossary/agent)
`,
  contentFormat: 'markdown',
  thumbnail: {
    url: '/images/ogp-default.webp',
    width: 1200,
    height: 630,
  },
  publishedAt: '2026-02-26T09:00:00+09:00',
  updatedAt: '2026-02-26T09:00:00+09:00',
  tags: ['月次まとめ', 'Gemini', 'Claude', 'OpenAI', 'GitHub Copilot'],
  classification: {
    period: '2026-02',
    topics: ['gemini', 'claude', 'agent', 'workflow', 'policy'],
  },
  relatedLinks: {
    blogSlugs: ['ai-workplace-introduction-guide', 'claude-how-to-use'],
    glossarySlugs: ['llm', 'agent', 'prompt'],
  },
  seo: {
    ogTitle: 'Gemini 3.1・Claude 4.6など：生成AI月報 2026/2',
    ogDescription:
      'Google・Anthropic・OpenAI・GitHubの2026年2月主要ニュースを月次整理。モデル進化、公共領域実装、モデル移行管理の要点を初学者向けに解説します。',
  },
  meta: {
    sourceNote: '情報確認日: 2026-03-04',
  },
}
