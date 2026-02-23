"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI 最新 2026", "AI トレンド 2026年", "ChatGPT 最新情報", "Claude 最新", "AI ニュース まとめ"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-now", label: "なぜ今、AIトレンドを押さえるべきか" },
  { id: "trends", label: "2026年2月の生成AIトレンド5選" },
  { id: "action-items", label: "初心者が「今日から」できる3つのこと" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ：変化の時代に必要なのは「基礎力」" },
  { id: "related-links", label: "関連リンク" },
] as const;

const trends = [
  {
    id: "trend-claude",
    number: 1,
    title: "Claude 4.6ファミリー — AIの「相棒」がさらに賢く",
    body: `2026年2月、Anthropic（アンソロピック）はClaude 4.6ファミリーを発表しました。2月5日に最上位モデルのOpus 4.6、2月17日にコスパ重視のSonnet 4.6がリリースされています。

今回の注目ポイントは、Sonnet 4.6の「価格と性能のバランス」です。最上位モデルOpus 4.6の約5分の1の利用料金でありながら、PC操作の自動化テスト（OSWorld）では72.5%とOpusの72.7%にほぼ並ぶスコアを記録。ユーザーの70%が「前世代のSonnet 4.5より回答品質が向上した」と評価しています。

プログラミング支援の性能も大きく伸び、SWE-benchというソフトウェア開発のテストで79.6%を達成。「AIにコードを書いてもらう」ことが、エンジニアだけでなく非エンジニアにとっても現実的な選択肢になりつつあります。`,
    forBeginners: `claude.aiで無料アカウントを作れば、最新のSonnet 4.6がすぐに使えます。Claudeは日本語の文章作成（メール下書き、レポート要約、文書校正）が特に得意です。ChatGPTしか使ったことがない方は、同じ質問をClaudeにもしてみると違いが実感できます。`,
    actionItem: "claude.ai にアクセスして無料アカウントを作成し、「来週の会議で使う挨拶文を考えて」と頼んでみましょう。",
    sources: [
      { label: "Anthropic公式: Claude Sonnet 4.6", url: "https://www.anthropic.com/news/claude-sonnet-4-6" },
    ],
  },
  {
    id: "trend-gpt5",
    number: 2,
    title: "GPT-5 / GPT-5.2の進化 — ChatGPTが大幅アップグレード",
    body: `2025年8月にGPT-5、12月にGPT-5.2がリリースされ、ChatGPTは大きく進化しました。2026年1月にはコーディング特化のGPT-5.2-Codexも登場しています。

GPT-5の最大の特徴は「ハイブリッドアーキテクチャ」です。内部に複数の専門モデルを持ち、質問の難易度に応じて最適なモデルが自動で対応します。簡単な質問には軽いモデルが素早く、難しい質問には高性能モデルがじっくり回答する仕組みです。

具体的な改善点として、AIの嘘（ハルシネーション）が旧世代モデル（GPT-4o）比で約45%減少。さらに400,000トークン（日本語で約20万文字分）の長い文脈に対応し、長い資料の要約や分析がより正確になりました。`,
    forBeginners: `ChatGPTの無料プランでもGPT-5が限定的に使えます。以前のバージョンで「回答がいまいちだった」という経験がある方は、改めて試す価値があります。有料のPlusプラン（月額$20、約3,000円）にすると、GPT-5の全機能が制限なく使えます。`,
    actionItem: "chatgpt.com にアクセスして、以前試して微妙だったタスク（長文の要約や複雑な質問）をもう一度試してみましょう。精度の向上を実感できるはずです。",
    sources: [
      { label: "OpenAI公式: Introducing GPT-5", url: "https://openai.com/index/introducing-gpt-5/" },
      { label: "OpenAI公式: Introducing GPT-5.2", url: "https://openai.com/index/introducing-gpt-5-2/" },
    ],
  },
  {
    id: "trend-gemini",
    number: 3,
    title: "Gemini 3の実力 — Googleの無料AIが本気を出した",
    body: `2025年11月にGemini 3 Pro、12月にGemini 3 Flashがリリースされました。2026年2月にはGemini 3.1 Proも登場し、アップデートが続いています。

Gemini 3の強みは2つあります。1つ目は100万トークンという圧倒的に長いコンテキストウインドウ。これは本1冊分以上の文章を一度に処理できる量です。2つ目はGoogleサービスとの連携で、Gmail・Googleドキュメント・Google検索とシームレスにつながります。

性能面では、博士号レベルの推論テスト（GPQA Diamond）で91.9%を記録。前世代のGemini 2.5 Proと比べて50%以上の性能向上を達成しています。`,
    forBeginners: `Googleアカウントがあれば、追加登録なしですぐに無料で使えるのが最大の魅力です。普段Gmailを使っている方は、Geminiに「未読メールの要点を3行でまとめて」と頼むだけで、メール処理が格段に楽になります。Google AI Studioでは無料のAPI（1日1,000リクエストまで）も提供されています。`,
    actionItem: "gemini.google.com にGoogleアカウントでログインし、「今週の予定を整理して優先度を付けて」と相談してみましょう。",
    sources: [
      { label: "Google公式ブログ: Introducing Gemini 3", url: "https://blog.google/products/gemini/gemini-3/" },
    ],
  },
  {
    id: "trend-agents",
    number: 4,
    title: "AIエージェントの台頭 — 「質問に答えるAI」から「自分で動くAI」へ",
    body: `2026年は「AIエージェント元年」と呼ばれています。従来のAIは人間の質問に答えるだけでしたが、AIエージェントは自分で考え、複数のステップを実行できます。

代表的なサービスを紹介します：

OpenAI Operator（2025年1月公開）：Webブラウザを自動操作し、航空券の予約や買い物の注文を代行します。ただし現時点の成功率は38.1%（OSWorld）で、まだ発展途上です。

Claude Cowork（2026年1月公開）：パソコン上のファイルを読み書きし、文書作成やデータ整理を自動化します。たとえば「このフォルダ内のCSVファイルをすべて集計してレポートにまとめて」と頼むと、ファイルを読み込み→処理→結果を保存までを一連の流れで実行します。

AIエージェント市場は2025年に約75.5億ドル（約1.1兆円）規模に成長し、2034年には約1,990億ドル（約30兆円）に達すると予測されています。`,
    forBeginners: `AIエージェントが本格的に普及するのはこれからですが、「AIは質問に答えるだけのもの」という認識はすでに古くなっています。今のうちにChatGPTやClaudeの基本的な使い方を身につけておけば、エージェント機能が成熟したときにスムーズに活用できます。`,
    actionItem: "ChatGPTやClaudeで「連続した指示」を出す練習をしましょう。「この文章を要約して → 箇条書きにして → メール形式に整えて」と段階的に指示する習慣が、エージェント時代の予行練習になります。",
    sources: [
      { label: "OpenAI公式: Introducing Operator", url: "https://openai.com/index/introducing-operator/" },
      { label: "Anthropic公式: Cowork Research Preview", url: "https://claude.com/blog/cowork-research-preview" },
    ],
  },
  {
    id: "trend-japan-reskilling",
    number: 5,
    title: "日本のAIリスキリング政策 — 学ぶなら「今」がチャンス",
    body: `2025年12月23日、日本政府は初の「国家AI計画」を閣議決定しました。

背景には、衝撃的なデータがあります。日本のAI利用率はわずか26.7%。米国の68.8%、中国の81.2%と比べて大きく後れを取っています。政府はこれを危機と捉え、「国民のAI活用率を80%に引き上げる」という目標を掲げました。

具体的な支援策として注目すべきは2つあります：

1つ目は「人材開発支援助成金（事業展開等リスキリング支援コース）」。企業がAI研修を実施する場合、研修費の最大75%（中小企業の場合。大企業は55%）が国から補助されます。研修中の社員の賃金も1時間あたり960円が支給されます。この制度は2027年3月末まで利用可能です。

2つ目は、5年間で約1兆円規模の公的AI支援パッケージ。国内のAI人材育成とインフラ整備に充てられます。2025年5月には「AI推進法」も施行され、法整備も進んでいます。`,
    forBeginners: `政府がこれだけの予算を投じてAI人材育成を支援しているということは、「AIスキルはこれからの必須スキル」と国が認識している証拠です。特にリスキリング補助金は、研修費用のハードルを大きく下げてくれます。「AIを学びたいけどお金がかかる」と感じている方には朗報です。`,
    actionItem: "お勤めの会社の人事部に「AI研修で使える補助金制度はありますか？」と聞いてみましょう。多くの企業が、国の助成金を活用した研修プログラムを準備し始めています。",
    sources: [
      { label: "Japan Times: Japan aims to raise public AI use to 80%", url: "https://www.japantimes.co.jp/news/2025/12/07/japan/politics/japan-public-ai-use-strategy/" },
      { label: "Japan Today: 1兆円規模のAI支援", url: "https://japantoday.com/category/tech/japan-to-support-domestic-ai-development-with-1-tril.-yen-funding-source" },
    ],
  },
] as const;

const actionSteps = [
  {
    number: 1,
    title: "3大AIを「同じ質問」で比べてみる",
    body: "ChatGPT・Claude・Geminiに同じ質問（例：「自己紹介メールの下書きを作って」）を投げて、回答の違いを比べてみましょう。3つとも無料で使えます。それぞれの得意分野が体感でき、自分に合うツールが見つかります。",
  },
  {
    number: 2,
    title: "AIニュースの「翻訳者」をAIに頼む",
    body: "気になるAIニュースの記事URLやタイトルをChatGPTに貼り付けて、「この記事の内容を初心者にもわかるように3行で説明して」と頼んでみましょう。専門用語だらけの記事もかんたんな日本語に翻訳してくれます。",
  },
  {
    number: 3,
    title: "トレンドより「基礎」を優先する",
    body: "最新情報を追いかけることより大切なのは、1つのAIツールを毎日の仕事で使う習慣をつけることです。まずは毎日10分、ChatGPTかClaudeに仕事の相談をしてみてください。1ヶ月後には「AIがある日常」が当たり前になっています。",
  },
] as const;

export default function AiTrendsFebruary2026Page({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AI最新トレンド5選（2026年2月）" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title={"【2026年2月】生成AIの最新トレンド5選｜初心者が\u201C今\u201D知っておくべきこと"}
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            【2026年2月】生成AIの最新トレンド5選｜初心者が&ldquo;今&rdquo;知っておくべきこと
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTが話題になったと思ったら、もうGPT-5？　Claudeって何？」——生成AIの世界は変化がとても速く、ついていけないと感じるのは自然なことです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、2026年2月時点で初心者が知っておくべき最新トレンドを5つに絞って解説します。技術の細かいスペックではなく、<strong>「あなたの生活や仕事にどう関係するか」</strong>を中心にお伝えします。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            変化が速い時代だからこそ、大切なのは「すべてを追いかける」ことではなく、「大きな流れを押さえる」こと。この記事を読めば、今のAI業界の全体像がつかめます。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 font-serif text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              2026年2月、Claude・ChatGPT・Geminiの3大AIがすべて大幅アップデート。<strong>無料プランでも最新モデルが使える</strong>
            </li>
            <li className="pl-1 marker:text-gray-500">
              AIエージェント（自分で考えて動くAI）が登場し始め、「質問に答えるAI」から「仕事を代行するAI」へ進化中
            </li>
            <li className="pl-1 marker:text-gray-500">
              日本政府は5年間で約1兆円規模のAI支援を計画。リスキリング補助金（研修費の最大75%補助）も活用可能
            </li>
            <li className="pl-1 marker:text-gray-500">
              変化が速いからこそ、まずは基礎を固めることが重要。1つのツールを使いこなすことが最優先
            </li>
          </ul>
        </motion.section>

        {/* なぜ今、AIトレンドを押さえるべきか */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-now" className="scroll-mt-28 font-serif text-2xl font-bold text-gray-900">
            なぜ今、AIトレンドを押さえるべきか
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2025年後半から2026年にかけて、生成AIの世界では大きな変化が立て続けに起きています。ChatGPT・Claude・Geminiの3大サービスがほぼ同時期に大型アップデートを行い、AIエージェントという新しいカテゴリが生まれ、日本政府もAI人材育成に本腰を入れ始めました。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「変化が速すぎてついていけない」と感じる方もいるかもしれません。でも、すべてを知る必要はありません。この記事でお伝えする5つのトレンドを押さえておけば、<strong>「AIの世界で今何が起きているか」の全体像がつかめます。</strong>
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            大切なのは、「最新情報を追いかけ続ける」ことではなく、「大きな流れを理解して、自分の行動につなげる」ことです。それぞれのトレンドを「初心者のあなたにとって何が変わるのか」の視点で解説していきます。
          </p>
        </motion.section>

        {/* 5つのトレンド */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="trends" className="scroll-mt-28 font-serif text-2xl font-bold text-gray-900">
            2026年2月の生成AIトレンド5選
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここからは、2026年2月時点で初心者が押さえておくべきトレンドを5つご紹介します。それぞれ「何が起きたか」「初心者にとっての意味」「今日からできること」の3つの視点で解説します。
          </p>
          <div className="mt-8 space-y-8">
            {trends.map((item) => (
              <section key={item.id} id={item.id} className="scroll-mt-28 rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-3">
                  <h3 className="font-serif text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <div className="mt-4 whitespace-pre-line text-sm leading-8 text-gray-700">{item.body}</div>

                <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50/60 p-4">
                  <p className="text-sm font-semibold text-gray-900">初心者にとっての意味</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.forBeginners}</p>
                </div>

                <div className="mt-3 rounded-lg border border-green-100 bg-green-50/60 p-4">
                  <p className="text-sm font-semibold text-gray-900">今日からできること</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.actionItem}</p>
                </div>

                {item.sources.length > 0 && (
                  <p className="mt-4 text-xs text-gray-500">
                    出典：
                    {item.sources.map((src, i) => (
                      <span key={src.url}>
                        {i > 0 && "｜"}
                        <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
                          {src.label}
                        </a>
                      </span>
                    ))}
                  </p>
                )}
              </section>
            ))}
          </div>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-trends-february-2026" />
        </motion.section>

        {/* 初心者が今日からできる3つのこと */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="action-items" className="scroll-mt-28 font-serif text-2xl font-bold text-gray-900">
            初心者が「今日から」できる3つのこと
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            トレンドを知ったら、次は行動です。ここでは、今日すぐにできることを3つご紹介します。
          </p>
          <div className="mt-8 space-y-6">
            {actionSteps.map((step) => (
              <section key={step.number} className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6">
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            もっと具体的な使い方を知りたくなったら、
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTプロンプトの書き方入門
            </Link>
            へ進んでみてください。基本的な指示の出し方を学ぶだけで、AIの回答品質が格段に上がります。
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 font-serif text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 font-serif text-2xl font-bold text-gray-900">
            まとめ：変化の時代に必要なのは「基礎力」
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事では、2026年2月時点の生成AI最新トレンドを5つに絞ってご紹介しました。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Claude 4.6・GPT-5.2・Gemini 3——3大AIがすべて大幅進化し、無料でも使える</li>
            <li className="pl-1 marker:text-gray-500">AIエージェントが登場し、「自分で動くAI」の時代が始まりつつある</li>
            <li className="pl-1 marker:text-gray-500">日本政府は1兆円規模でAI人材育成を支援。補助金も充実している</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            変化が速い時代だからこそ、<strong>流行に振り回されるのではなく、基礎を固めることが最も確実な戦略</strong>です。最新モデルがいくら進化しても、「わかりやすく質問する力」「AIの回答を検証する力」「自分の仕事に応用する力」という基礎は変わりません。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            まずは今日、ChatGPT・Claude・Geminiのどれか1つを開いて、仕事の悩みを1つ相談してみてください。その小さな一歩が、AIを味方につけた働き方の始まりになります。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            変化の時代を、一緒に乗りこなしていきましょう。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 font-serif text-2xl font-bold text-gray-900">
            次のステップ：体系的にAIを学ぶ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            トレンドを押さえたら、次は基礎力を高める番です。プロンプトの書き方を学ぶと、AIの回答品質が格段に上がります。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 font-serif text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-sonnet-4-6-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Sonnet 4.6使い方ガイド｜料金・Opus 4.6比較・API実装【2026年2月】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを仕事で使い始めた人の「最初の30日」完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
