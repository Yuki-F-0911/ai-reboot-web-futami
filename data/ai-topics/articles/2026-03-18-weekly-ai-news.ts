import type { AiTopicArticle } from '@/types/ai-topic'

export const weeklyAiNews20260318: AiTopicArticle = {
  id: '2026-03-18-weekly-ai-news',
  title: 'Rakuten AI 3.0公開・NVIDIA GTC 2026など — 生成AI週報（2026年3月18日）',
  summary:
    '楽天グループが日本最大規模の国産LLM「Rakuten AI 3.0」（約7,000億パラメータ）を無償公開。NVIDIAはGTC 2026でAIエージェント向け新チップ「Blackwell Ultra」を発表。GitHubはCopilot学生プランの高性能モデルを有料プラン限定に変更しました。',
  content: `## 今週の要点

X（旧Twitter）の生成AIトレンドを分析すると、今週は「日本語AI」「半導体インフラ」「AI開発ツールの有料化」の3つが話題の中心でした。なかでも楽天の国産LLM公開は2,900超のいいねを集め、国内のAI関係者の間で大きな反響を呼んでいます。

---

### 1. 楽天、日本最大規模の国産LLM「Rakuten AI 3.0」を無償公開

楽天グループは2026年3月17日、国内最大規模の[LLM（大規模言語モデル）](/glossary/llm)「Rakuten AI 3.0」の提供を開始しました。経済産業省が推進する生成AI人材育成プロジェクト「GENIAC」の一環として開発されたモデルです。

モデルの規模は約7,000億パラメータのMoE（Mixture of Experts）構造で、処理1回あたりの実際の計算には約400億パラメータのみを使用するため、コストを抑えながら高い精度を実現しています。日本語会話ベンチマーク「Japanese MT-Bench」ではスコア8.88を記録し、GPT-4oを上回る性能です。

Apache 2.0ライセンスで無償公開されており、商用利用も可能。従来の同等規模モデルと比べて運用コストが最大90%低いとされており、企業が独自の日本語AIを構築する際の選択肢が広がってきました。

- モデル規模: 約7,000億パラメータ（MoE、実計算は約400億）
- 日本語 MT-Bench スコア 8.88（GPT-4o 超え）
- Apache 2.0 で無償提供、商用利用可
- **ビジネスへの示唆**: 自社データで日本語AIをファインチューニングしたい企業にとって、国産の高性能ベースモデルが手の届く選択肢に入ってきました。自社ドキュメントや業界専門知識の学習用途を検討する価値があります。

> 出典: [Rakuten AI 3.0 Now Available — Rakuten Group, Inc.](https://global.rakuten.com/corp/news/press/2026/0317_01.html)（確認日: 2026-03-18）
> [楽天グループが国内最大規模のAIモデル「Rakuten AI 3.0」提供開始 — CommercePickl](https://www.commercepick.com/archives/88408)（確認日: 2026-03-18）

---

### 2. NVIDIA GTC 2026：AIエージェント向け「Blackwell Ultra」を発表

NVIDIAは3月16〜21日に年次開発者会議「GTC 2026」を開催し、[AIエージェント](/glossary/agent)向けの新型半導体「Blackwell Ultra」を2026年後半に投入すると発表しました。

前世代の「Hopper」と比較して、AIエージェント処理で最大50倍の性能向上・最大35倍のコスト削減を実現するとしています。また、受注残高が約159兆円（1兆ドル超）に達していることも公表され、データセンター向けAI半導体への需要が持続していることが改めて示されました。

AIエージェントとは、人間が指示を出さなくても自律的に複数のタスクをこなすAIの仕組みです。今後のAgenticなシステムを支えるインフラが着実に整備されつつあります。

- Blackwell Ultra: Hopper比で性能50倍・コスト35倍改善（AIエージェント処理）
- 投入時期: 2026年後半
- 受注残高: 約1兆ドル（約159兆円）
- **ビジネスへの示唆**: 使うAI（モデル）の性能向上だけでなく、動かすインフラ（半導体）のコスト低下も進んでいます。AI活用のコスト試算は半年ごとに見直す必要が出てきています。

> 出典: [NVIDIAがAIエージェント必須半導体、性能35倍 — 日本経済新聞](https://www.nikkei.com/article/DGXZQOGN150C80V10C26A3000000/)（確認日: 2026-03-18）

---

### 3. Claude、App Storeダウンロード1位に — 障害後にユーザー急増

AnthropicのClaude（クロード）は3月2日に大規模な障害が発生し、多くのソフトウェア開発者が業務停止を余儀なくされました。この出来事は「AIへの依存度」を改めて意識させる機会になり、皮肉にもClaude自体への注目が高まるきっかけにもなりました。

障害後の同週、AnthropicのClaude公式アプリがApple App Storeの仕事効率化カテゴリでダウンロード数1位を記録。OpenAIが国防総省と協業合意したことへの反発から、ChatGPTユーザーの一部がClaudeに乗り換える動きも起きており、この時期の急伸と重なっています。

Anthropicは現在、Accenture・Deloitte等の大手コンサル経由でClaudeを導入できる「Claude Partner Network」も発足させており、企業導入の加速に向けた体制整備が続いています。

- 3月2〜3日: Claude大規模障害（開発者依存度の高さが露呈）
- 3月第2週: App Storeダウンロード1位（仕事効率化カテゴリ）
- Claude Partner Network発足（Accenture・Deloitte・Cognizantなど参加）
- **ビジネスへの示唆**: 特定AIツールへの依存が高まると、障害時の業務停止リスクも高まります。主要ツールのバックアップ手段を整備しておくことが、安定した業務運用につながります。

> 出典: [「原始人のように自分で書くしかない」…Claudeの障害でソフトウェア開発者はAIへの依存を痛感 — Business Insider Japan](https://www.businessinsider.jp/article/2603-claude-outages-anthropic-ai-software-engineers-developers-coding-dependance/)（確認日: 2026-03-18）
> [「ChatGPT解約運動」拡大で、Claudeがダウンロード数1位に — Business Insider Japan](https://www.businessinsider.jp/article/2603-anthropic-claude-hits-number-one-app-store-openai-chatgpt/)（確認日: 2026-03-18）

---

### 4. GitHub Copilot、学生向け無料プランから高性能モデルを削除

GitHubは3月12〜13日、学生向け無料プラン「GitHub Copilot Student」から、Claude Opus・Claude Sonnet・GPT-5.4などの高性能モデルを手動選択できないよう変更しました。これらのモデルは自動モード（Auto）では引き続き使用できますが、ユーザーが指定して呼び出すことはできなくなっています。

X上では「Copilot Proプランもゴミになった」という投稿が300超のいいねを集め、課金サービスの変更に対するユーザーの不満が集まりました。GitHubは「学生ユーザー増加に対応しながら無料サービスを継続するための措置」と説明しています。

引き続き無料で使えるモデルはClaude 4.5 Haiku・Gemini 3.1 Pro・GPT-5.3 Codexの3つです。高性能モデルを手動選択したい場合は有料の「Copilot Pro+」プランへの移行が必要です。

- 対象プラン: GitHub Copilot Student（学生向け無料プラン）
- 削除されたモデル: Claude Opus・Sonnet、GPT-5.4（手動選択不可）
- 引き続き無料: Claude 4.5 Haiku・Gemini 3.1 Pro・GPT-5.3 Codex
- **ビジネスへの示唆**: 開発チームがAIコーディングツールに無料プランを前提とした運用をしている場合、今後も同様の変更が起きる可能性があります。AI開発ツールの利用計画をコスト込みで見直す機会としてください。

> 出典: [GitHub removes some models from free Copilot student plan — The Register](https://www.theregister.com/2026/03/13/microsoft_github_removes_models_student_plan/)（確認日: 2026-03-18）
> [GitHub Copilot student plan has removed flagship Claude models — Piunika Web](https://piunikaweb.com/2026/03/14/github-copilot-student-plan-removes-premium-models-like-claude-opus-and-sonnet/)（確認日: 2026-03-18）

---

## 今週の実践アクション（3つ）

1. **Rakuten AI 3.0を試す**: Hugging Faceに無償公開されているため、自社の日本語ドキュメントで簡単な要約・Q&Aを試してみる（Apache 2.0で商用利用可）
2. **AIツールの障害対策を確認する**: メインで使っているAIツールが止まったとき、業務をどう継続するか代替手段を1つ決めておく
3. **GitHub Copilotのプラン確認**: チームが使っているプランと利用可能なモデルを確認し、業務に必要なモデルが引き続き使えるか見直す

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
  publishedAt: '2026-03-18T09:00:00+09:00',
  updatedAt: '2026-03-18T09:00:00+09:00',
  tags: ['週次まとめ', 'Rakuten AI', 'NVIDIA', 'Claude', 'GitHub Copilot'],
  classification: {
    period: '2026-W12',
    topics: ['llm', 'agent', 'claude', 'workflow'],
  },
  relatedLinks: {
    blogSlugs: ['ai-workplace-introduction-guide', 'claude-how-to-use'],
    glossarySlugs: ['llm', 'agent'],
  },
  seo: {
    ogTitle: 'Rakuten AI 3.0・NVIDIA GTCなど：生成AI週報 2026/3/18',
    ogDescription:
      '楽天が日本最大規模の国産LLM「Rakuten AI 3.0」を無償公開、NVIDIAがGTC 2026でAIエージェント向け新チップ発表。Claude App Store 1位、GitHub Copilotプラン変更も。',
  },
  meta: {
    sourceNote: '情報確認日: 2026-03-18',
  },
}
