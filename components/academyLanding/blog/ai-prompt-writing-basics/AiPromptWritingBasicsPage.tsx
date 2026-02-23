"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ } from "@/components/blog/ArticleBody";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiPromptWritingBasicsPageProps = {
  faqItems: readonly FAQItem[];
};

type TipItem = {
  number: number;
  title: string;
  description: string;
  ng: string;
  ok: string;
  point: string;
};

type TemplateItem = {
  title: string;
  prompt: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["プロンプト 書き方 初心者", "ChatGPT プロンプト コツ", "AI 聞き方 上手", "プロンプトエンジニアリング 基本"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-prompts-matter", label: "AIの答えが変わる理由" },
  { id: "basics-tips", label: "基本5原則：入力の精度を上げる" },
  { id: "advanced-tips", label: "応用5テクニック：対話の質を高める" },
  { id: "templates", label: "今日から使えるテンプレート集" },
  { id: "faq", label: "よくある質問" },
] as const;

const basicsTips: readonly TipItem[] = [
  {
    number: 1,
    title: "具体的に書く（あいまいを排除する）",
    description:
      "「何のために」「誰に向けて」「どのくらいの量で」が揃うと、AIの答えが一発で使えるレベルに変わります。曖昧な指示はAIに解釈の余地を与えすぎて、的外れな回答の原因になります。",
    ng: "文章を書いて",
    ok: "30代の女性向けに、スキンケアの基本を紹介するブログ記事の導入文（200字）を書いて",
    point: "誰に／何字／何のために、の3点を入れるだけで精度が大きく変わります",
  },
  {
    number: 2,
    title: "役割を与える",
    description:
      "「あなたは〇〇です」という設定を最初に入れると、AIがその専門家として答えてくれます。同じ質問でも、役割の有無で回答の深さと実用性が変わります。",
    ng: "英語を直して",
    ok: "あなたは英語のネイティブスピーカーです。以下の英文を自然なビジネス英語に直してください",
    point: "「あなたは〇〇の専門家です」という一言で専門性が大きく変わります",
  },
  {
    number: 3,
    title: "出力形式を指定する",
    description:
      "AIはデフォルトで長い文章を返しがちです。「箇条書き」「表形式」「3段落以内」など、使いたい形式を先に指定すると、もらった答えをそのまま使える確率が上がります。",
    ng: "整理して",
    ok: "箇条書き5項目でまとめてください（各項目は50字以内）",
    point: "リスト・表・段落・文字数など出力形式を明示すると、コピペして使える答えが返ってきます",
  },
  {
    number: 4,
    title: "背景・文脈を伝える",
    description:
      "AIは「なぜ」「誰が」「どんな状況か」を知らないと、汎用的な回答しか返せません。状況を5行で伝えるだけで、答えが格段に実務に近くなります。",
    ng: "メールを書いて",
    ok: "上司に締め切り延長をお願いするメールを書いて。私は営業部員で、取引先の事情で2週間の延長が必要な状況です",
    point: "「なぜ」「誰が」「どんな状況か」を添えると、そのまま使える答えが返ってきます",
  },
  {
    number: 5,
    title: "例を与える（Few-shot）",
    description:
      "「このような文体で書いてほしい」と例文を添えると、AIがそのスタイルを学んで似た文章を生成してくれます。文体・トーン・表現の好みを伝える最も確実な方法です。",
    ng: "私の文体に合わせて書いて",
    ok: "次の例文のような文体で書いてください：[例文を貼り付け]。その後、〇〇について同じトーンで書いてください",
    point: "例を1〜3個見せるだけでAIがその文体を真似してくれます",
  },
] as const;

const advancedTips: readonly TipItem[] = [
  {
    number: 6,
    title: "ステップに分けて頼む",
    description:
      "複雑なタスクを一度に頼むと、AIが質を下げて答えることがあります。「まず構成だけ考えて」→確認→「では本文を書いて」という段階的なアプローチが効果的です。",
    ng: "ブログ記事を構成から本文まで全部作って",
    ok: "まずこのテーマでブログ記事の見出し構成だけ提案してください。内容を確認したら本文をお願いします",
    point: "複雑なタスクほど「まず構成→確認→本文」の順に進めると完成度が上がります",
  },
  {
    number: 7,
    title: "「〜してはいけない」より「〜してください」",
    description:
      "否定形の指示よりも肯定形の指示の方がAIに伝わりやすいです。「難しい言葉を使わないで」より「やさしい言葉で書いて」のほうが意図通りの答えが返ってきます。",
    ng: "難しい言葉を使わないで、専門用語は使わないで",
    ok: "小学生でも理解できるやさしい言葉で書いてください",
    point: "禁止事項を羅列するより「どうあってほしいか」を正面から伝える方が伝わります",
  },
  {
    number: 8,
    title: "期待する答えの長さを伝える",
    description:
      "AIはデフォルトで詳細な回答を返す傾向があります。使う場面（SNS投稿・メール・報告書など）に合わせて長さを指定することで、後の編集作業が減ります。",
    ng: "要約して",
    ok: "3行で要約してください／500字程度でまとめてください",
    point: "「3行」「200字」「ツイート1本分」のように具体的な量を伝えると使いやすい答えが返ってきます",
  },
  {
    number: 9,
    title: "「なぜ」を聞く",
    description:
      "答えだけでなく「なぜそうなのか」を聞く習慣をつけると、理解が深まり次の質問の精度も上がります。AIを検索ツールとしてではなく、考える相手として使う意識が重要です。",
    ng: "この文法を教えて",
    ok: "この文法を教えて。なぜそのルールになっているのかも説明してください",
    point: "「なぜ？」を一言添えるだけで、次に活かせる知識が増えます",
  },
  {
    number: 10,
    title: "不満足な答えには「もっと〇〇して」",
    description:
      "最初の回答が期待外れでも、一発で完璧を求める必要はありません。「もっと具体的に」「もう少し短く」「もっとカジュアルに」と続けるだけで改善されます。AIは対話で育てるものです。",
    ng: "（違うな…と思いつつ次の話題へ）",
    ok: "もっと具体的な例を入れてください／もう少し短くしてください／もっとカジュアルなトーンで書き直してください",
    point: "最初の答えで諦めず「もっと〇〇して」と続けると、理想の答えに近づきます",
  },
] as const;

const templates: readonly TemplateItem[] = [
  {
    title: "報告書・まとめ作成用",
    prompt:
      "あなたは〇〇の専門家です。以下の内容を[対象読者]向けに報告書形式でまとめてください。\n形式：要点3つ→詳細→次のアクション\n文字数：500字以内\n[内容をここに貼り付け]",
  },
  {
    title: "文章添削用",
    prompt:
      "以下の文章を添削してください。\n目的：[ビジネスメール・ブログ記事・SNS投稿など]\n読者：[どんな人が読む？]\n修正点：文法・表現・読みやすさの3点を指摘し、改善案を示してください",
  },
  {
    title: "アイデア出し用",
    prompt:
      "あなたはマーケティングの専門家です。[テーマ]について、すぐに実践できるアイデアを10個出してください。\n条件：費用がかからないもの優先、初心者でも実行可能なもの",
  },
  {
    title: "要約用",
    prompt:
      "以下の文章を3行で要約してください。\n・最初の行：一番重要な結論\n・2行目：その根拠\n・3行目：読んだ人が次にすべきこと\n[文章をここに貼り付け]",
  },
  {
    title: "翻訳用",
    prompt:
      "以下の日本語を英語に翻訳してください。\n用途：[ビジネスメール・SNS投稿・プレゼン資料]\nトーン：[フォーマル・カジュアル]\n※直訳ではなく、英語として自然な表現を優先してください",
  },
];

function NgOkCard({ ng, ok, point }: { ng: string; ok: string; point: string }) {
  return (
    <div className="mt-5 space-y-3">
      <div className="rounded-lg bg-red-50 p-4 border border-red-100">
        <p className="text-xs font-bold text-red-600 mb-2">❌ NG例</p>
        <p className="text-sm leading-7 text-gray-800">{ng}</p>
      </div>
      <div className="rounded-lg bg-green-50 p-4 border border-green-100">
        <p className="text-xs font-bold text-green-600 mb-2">✅ OK例</p>
        <p className="text-sm leading-7 text-gray-800">{ok}</p>
      </div>
      <div className="rounded-lg bg-orange-50 p-4 border border-orange-100">
        <p className="text-xs font-bold text-orange-600 mb-2">💡 ポイント</p>
        <p className="text-sm leading-7 text-gray-800">{point}</p>
      </div>
    </div>
  );
}

export default function AiPromptWritingBasicsPage({ faqItems }: AiPromptWritingBasicsPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIプロンプトの書き方入門" },
          ]}
        />

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
                title="AIプロンプトの書き方入門：初心者が知っておくべき10のコツ【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIプロンプトの書き方入門：初心者が知っておくべき10のコツ【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月24日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ChatGPTに聞いたら、なんか違う答えが返ってきた――そんな経験はありませんか。AIは「聞き方」で答えが大きく変わります。プロンプト（AIへの指示文）の書き方を少し工夫するだけで、びっくりするくらい使いやすくなります。プロンプトエンジニアリングと聞くと難しそうですが、そんな大げさなことじゃありません。この記事では、
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT・Claude初心者ガイド
            </Link>
            の次のステップとして、今日からすぐ使える10のコツをNG例・OK例の比較で解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ入門
          </Link>
          ・
          <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            仕事で使えるプロンプトテンプレート集
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT実践テクニック集（50Tips）
          </Link>
          ・
          <Link href="/academy/blog/ai-study-learning-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI勉強法ガイド
          </Link>
          もあわせて読むと、実践への近道になります。
        </p>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="scroll-mt-28 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ"
            items={[
              "プロンプトは「具体的に・役割・形式・文脈」の4点を意識するだけで答えの質が大幅に変わります。",
              "最初の回答が期待外れでも、「もっと〇〇して」と続けるだけで改善できます。一発で完璧を求めなくてOKです。",
              "コツ10個をすべて覚える必要はありません。まずコツ1（具体的に書く）とコツ10（もっと〇〇して）の2つを今日から試してください。",
            ]}
          />
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="why-prompts-matter"
          className="scroll-mt-28 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="why-prompts-matter">なぜ「聞き方」でAIの答えはここまで変わるのか</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIは与えられた情報をもとに回答を生成します。情報が少なければ、AIは「一般的な答え」を返すしかありません。逆に、「誰に」「何のために」「どんな形式で」という情報を与えると、AIはその条件に合わせた最適な回答を作れるようになります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            人間に仕事を頼む場面を想像してください。「資料を作って」と言うより、「明日の会議で使う、部長向けの3枚スライドを作って。テーマは新製品の価格設定で、結論から始めてほしい」と言った方が、期待通りのものができますよね。AIへの指示も同じです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
              <ArticleH3>AIが得意なこと</ArticleH3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                条件を明確に指定すれば、文章作成・要約・翻訳・アイデア出しを素早くこなします。
              </p>
            </section>
            <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
              <ArticleH3>AIが苦手なこと</ArticleH3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                「なんとなく良い感じに」という曖昧な指示。意図を読み取ることには限界があります。
              </p>
            </section>
            <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
              <ArticleH3>プロンプトの役割</ArticleH3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                AIの「得意」を最大限引き出す設計が、プロンプトの本来の役割です。
              </p>
            </section>
          </div>
        </motion.section>

        <motion.section
          id="basics-tips"
          className="scroll-mt-28 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="basics-tips">基本5原則：入力の精度を上げる</ArticleH2>
          <p className="mt-5 text-base font-medium text-gray-900">
            最初の5つは「何をどう伝えるか」に関する基本原則です。この5つを意識するだけで、AIの回答の質が大幅に変わります。
          </p>
          <div className="mt-6 space-y-8">
            {basicsTips.map((tip) => (
              <section key={tip.number} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>
                  コツ{tip.number}：{tip.title}
                </ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{tip.description}</p>
                <NgOkCard ng={tip.ng} ok={tip.ok} point={tip.point} />
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="advanced-tips"
          className="scroll-mt-28 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="advanced-tips">応用5テクニック：対話の質を高める</ArticleH2>
          <p className="mt-5 text-base font-medium text-gray-900">
            後半の5つは「AIとの対話の進め方」に関するテクニックです。最初の回答をどう活かすか、どう改善するかを学びます。
          </p>
          <div className="mt-6 space-y-8">
            {advancedTips.map((tip) => (
              <section key={tip.number} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>
                  コツ{tip.number}：{tip.title}
                </ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{tip.description}</p>
                <NgOkCard ng={tip.ng} ok={tip.ok} point={tip.point} />
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="templates"
          className="scroll-mt-28 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="templates">実践：今日から使えるプロンプトテンプレート集</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            10のコツを組み込んだ、すぐ使えるテンプレートを5種類まとめました。{"{ }"}の中を自分の状況に合わせて書き換えるだけで使えます。より多くのテンプレートは
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            もあわせて参照してください。
          </p>
          <div className="mt-6 space-y-4">
            {templates.map((template) => (
              <section key={template.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{template.title}</ArticleH3>
                <pre className="mt-4 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                  <code>{template.prompt}</code>
                </pre>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            さらに実践的な使い方を学びたい場合は、
            <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT実践テクニック集（50Tips）
            </Link>
            で業務別のプロンプトをまとめています。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            プロンプトの書き方を学ぶ際に、よく寄せられる質問をまとめました。
          </p>
          <RichFAQ items={faqItems} />
        </motion.section>

        <LineCtaBox />

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <p className="mb-4 text-sm leading-7 text-gray-700">AIの使い方をさらに深めるために、次の記事もあわせてご覧ください。</p>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-study-learning-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI勉強法ガイド｜独学で学ぶ最短ルートと継続のコツ
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="next-step">次のステップ</ArticleH2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            プロンプトの書き方は、練習すれば誰でも上達します。ただ、「聞き方を磨く」だけでは、AIを使って何を実現するかという方向性が定まりません。AIリブートアカデミーでは、
            <span className="font-semibold text-gray-900">生成AI活用力</span>
            の習得にとどまらず、
            <span className="font-semibold text-gray-900">自己理解・キャリアデザイン</span>
            と
            <span className="font-semibold text-gray-900">仲間と共に学ぶ環境</span>
            を一体で設計しています。AIを何のために使うか、自分にとっての活用の軸を見つけたい方は、学習プロセス全体を見直すことが有効です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/blog"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              他の記事も読む
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
