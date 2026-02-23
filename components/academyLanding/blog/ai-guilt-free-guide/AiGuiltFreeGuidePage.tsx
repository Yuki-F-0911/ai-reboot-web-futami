"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  Heart,
  Scale,
  Brain,
  Calendar,
  BookOpen,
  Quote,
  Sparkles,
  ChevronRight,
  Feather,
  Eye,
  Shield,
} from "lucide-react";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "../../sections/academyDesignTokens";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const keywordTags = ["AI 罪悪感", "ChatGPT ズルい", "AI 思考力 低下", "生成AI 向き合い方"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "guilt-is-normal", label: "その罪悪感は、正常です" },
  { id: "three-sources", label: "罪悪感の3つの正体" },
  { id: "reframe-cheat", label: "「ズルい」の比較軸を変えてみる" },
  { id: "thinking-deterioration", label: "「思考力が落ちる」は本当か？" },
  { id: "healthy-usage", label: "健全なAIとの向き合い方" },
  { id: "guilt-as-conscience", label: "罪悪感は「良心の証」という視点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const guiltSources = [
  {
    id: "guilt-effort",
    icon: <Scale className="h-6 w-6 text-amber-500" />,
    title: "「自分でやるべき」という倫理観",
    body: `多くの人がAIへの罪悪感の根っこに持っているのが、「努力することに価値がある」という感覚です。

学校教育で長年かけて植え付けられたこの価値観は、決して悪いものではありません。むしろ、物事を深く考え、能力を育てるための大切な哲学です。

でも、考えてみてください。「努力に価値がある」のは、努力の「結果」ではなく「プロセス」に意味があるからです。

AIを使うことで「結果を出す手間」を省略しても、「何をどう伝えるか考える努力」「AIの回答を批判的に見る努力」「目的を明確にする努力」は残ります。むしろ、AIを道具として使いこなすには、思考の質を上げる努力が必要になります。

「手を動かさないことへの罪悪感」と「考えることへのサボり」は、別の話です。`,
  },
  {
    id: "guilt-value",
    icon: <Heart className="h-6 w-6 text-rose-500" />,
    title: "「楽して得るもの = 価値が低い」という思い込み",
    body: `「苦労した分だけ価値がある」という感覚は、農耕社会・工業社会では概ね正しかったかもしれません。汗をかいた量が、成果に比例していた時代の話です。

でも、知識・情報・アイデアが主な価値になった現代では、「難しい作業」と「価値の高い仕事」は必ずしも一致しません。

高品質なプレゼンを作るのに、デザインソフトを一から手動で操作することに価値があるでしょうか？それとも、伝えたいメッセージを明確にし、適切な構成を考え、聴衆の心を動かすことに価値があるでしょうか？

AIを使って「手間のかかる作業」を省いても、「本質的な思考」を放棄していなければ、価値は失われていません。むしろ、余った時間と認知資源をより重要な思考に使えます。

「楽をすることへの罪悪感」を持つより、「楽になった分で何をするか」を問うほうが、ずっと生産的です。`,
  },
  {
    id: "guilt-fear",
    icon: <Brain className="h-6 w-6 text-violet-500" />,
    title: "「自分の力が落ちる」という恐怖",
    body: `この不安は、3つの中で最も正当な懸念です。具体的に「何が落ちると思っているか」を分解してみましょう。

文章力・表現力については：AIに丸投げして一切考えなければ、確かに衰えます。でも、AIのドラフトを読んで「自分ならこう書く」と批評し、書き直す作業は、語彙感覚を鍛えます。

調べる力については：「AIに聞けば全部わかる」になると、情報の信憑性を判断する力や、複数の情報を結びつける力は鍛えられません。AIは調べる作業を補助するものであり、判断する力はあなた自身が使い続けないと磨かれません。

本当に問われるべきは「AIを使う/使わない」ではなく「AIを使って、何をどう考えているか」です。`,
  },
] as const;

const healthyPractices = [
  {
    icon: <Eye className="h-5 w-5 text-will-primary" />,
    title: "「AIを使って何をしたいか」を自分で決める",
    body: "AIに丸投げする前に、まず自分の目的・方向性・核心にしたいメッセージを決めます。AIはその実現を助ける道具。目的を自分で持つことが、思考の主導権を保つ第一歩です。",
  },
  {
    icon: <Scale className="h-5 w-5 text-will-primary" />,
    title: "AIが出した答えを一度、自分の判断に通す",
    body: "AIの出力を読んで「これは本当にそうか？」「自分ならこう言う」と考える習慣をつけます。鵜呑みにせず、批評する目を持つことで、情報リテラシーと思考力が同時に鍛えられます。",
  },
  {
    icon: <Shield className="h-5 w-5 text-will-primary" />,
    title: "「AIなしでも考えられる土台」を崩さない",
    body: "自分の専門分野・得意領域では、AIなしで考え、書き、判断できる力を維持します。AIはあくまで加速装置。エンジンなしでも走れる基礎体力が、AIを正しく使う前提になります。",
  },
  {
    icon: <Feather className="h-5 w-5 text-will-primary" />,
    title: "週に一度は「AIを使わず考える時間」を作る",
    body: "意図的にAIを使わない時間を設けます。紙にメモする、散歩しながら考える、誰かと話す——アナログな思考の時間が、AIとの対話をより深いものにします。",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-will-primary" />,
    title: "自分の仕事・表現にAIを使うとき、「自分の意図」が入っているか確認する",
    body: "最終的なアウトプットに、あなたの視点・判断・感性が入っているかどうかを確認します。「AIが書いた」ではなく「AIと一緒に作った」と言える状態が、健全な使い方の目安です。",
  },
] as const;

export default function AiGuiltFreeGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-x-clip">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIを使うと「ズルい気がする」あなたへ" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
          className="relative"
        >
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-will-primary/5 rounded-full blur-3xl -z-10" />

          <div className="flex flex-wrap gap-2 mb-8">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/10 bg-will-lighter/50 px-4 py-1.5 text-[11px] font-bold tracking-widest text-will-primary uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl tracking-tight">
            AIを使うと「ズルい気がする」あなたへ：<br className="hidden sm:block" />罪悪感の正体と、AI時代の正しい向き合い方
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-slate-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Published on</p>
                <time className="text-sm font-semibold text-slate-700">2026年2月23日</time>
              </div>
            </div>

            <CopyAsMarkdownButton
              title="AIを使うと「ズルい気がする」あなたへ：罪悪感の正体と、AI時代の正しい向き合い方"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50/50 border border-slate-100 relative">
            <Quote className="absolute top-6 right-8 h-12 w-12 text-slate-200 -z-10 opacity-50" />
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-medium">
              AIに文章を書いてもらって、提出前に少し罪悪感を感じたことはありませんか？
              「これって自分でやるべきじゃないのか」「楽しすぎて怖い」「考える力が落ちそう」——
              そんな感情を抱きながらAIを使っている人は、決して少なくありません。
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              この記事では、その罪悪感がどこから来るのかを丁寧に分解し、電卓やカーナビと同じように道具を使うことと思考を放棄することの違いを整理します。
              読後に「もっと使っていいんだ」ではなく「こう使えばいいんだ」という気づきをお届けできれば幸いです。
            </p>
          </div>
        </motion.header>

        <div data-seo-internal-links="true" className="mt-12 p-6 rounded-2xl border border-will-lighter bg-will-lighter/20 flex flex-wrap items-center gap-y-3 gap-x-1">
          <BookOpen className="h-4 w-4 text-will-primary mr-2" />
          <span className="text-sm font-bold text-slate-500 mr-2">関連テーマ：</span>
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AIが怖い・難しいを乗り越えるガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-healthy-usage-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AI健全活用ガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">ChatGPT・Claude初心者ガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-first-3days-action-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">最初の3日間アクションガイド</Link>
        </div>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="check-box mt-20 group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h4 id="conclusion" className="scroll-mt-28 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-emerald-500" />
            要点まとめ
          </h4>
          <ul className="mt-6 space-y-4">
            {[
              "AIへの罪悪感は「努力=美徳」「楽=悪」「力が落ちる恐怖」の3つから来ている",
              "電卓・カーナビと同じで、道具を使うことと思考を放棄することは別のこと",
              "「思考力が落ちる」かどうかは使い方次第——丸投げではなく対話で使えば力は落ちない",
              "罪悪感を感じているあなたは、AIを適切に恐れている証拠。それは健全な感覚",
              "「AIを使って何をしたいか」を自分で決め、判断に自分を通すことが健全な向き合い方",
            ].map((text) => (
              <li key={text} className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* その罪悪感は正常です */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="guilt-is-normal" className="scroll-mt-28">
            その罪悪感は、正常です
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              まず最初に伝えたいことがあります。
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              <strong className="text-will-primary">AIを使いながら罪悪感を感じているあなたは、何も悪いことをしていません。</strong>
              その感情は、あなたが誠実で、思慮深い人間であることの証しです。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              「AIが書いた文章を自分の成果として出していいのか」「こんなに楽していいのか」「考えることをサボっているんじゃないか」——
              こうした問いを持つこと自体が、道具の正しい使い方を考えているということを意味します。
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-300">
              <p className="text-base leading-relaxed text-slate-700 italic">
                反対に、罪悪感をまったく感じずにAIを使っている人の中には、「自分の判断をAIに委ねている」ことへの自覚がない人もいます。
                倫理的な問いを持てること——それはAI時代に必要な感性の一つです。
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              だから、この記事の目的は「罪悪感を捨ててもっとAIを使おう」ではありません。
              その罪悪感の正体を理解し、「どう使えば自分に誠実でいられるか」を考えるための地図を提供することです。
            </p>
          </div>
        </motion.section>

        {/* 罪悪感の3つの正体 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="three-sources" className="scroll-mt-28">
            罪悪感の3つの正体
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            AIへの罪悪感は、あいまいなままだと漠然と大きく見えます。一つずつ分解してみましょう。
          </p>
          <div className="mt-12 space-y-12">
            {guiltSources.map((item) => (
              <section key={item.id} id={item.id} className="point-box scroll-mt-28 group hover:shadow-elevated transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 border-none m-0">{item.title}</h4>
                </div>
                <div className="mt-4 whitespace-pre-line text-base leading-[1.8] text-slate-700">{item.body}</div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* ズルいの比較軸を変える */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="reframe-cheat" className="scroll-mt-28">
            「ズルい」の比較軸を変えてみる
          </h2>
          <div className="mt-8 space-y-8">
            <p className="text-lg leading-relaxed text-slate-700">
              「AIを使うのはズルい」という感覚は、何と比べてズルいのでしょうか？
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { question: "電卓は「ズルい」か？", answer: "筆算ができなくても、正確な計算結果を出せます。電卓を使う人が数学の理解を放棄したとは言いません。" },
                { question: "カーナビは「ズルい」か？", answer: "地図が読めなくても目的地に着けます。でも、どこに行くかを決めるのは人間です。" },
                { question: "辞書・Google検索は「ズルい」か？", answer: "すべての言葉を記憶しなくても良い文章が書けます。調べる行為は、思考を補助するものです。" },
                { question: "翻訳ツールは「ズルい」か？", answer: "外国語が話せなくても意思疎通できます。伝えたいことを持っていることが前提です。" },
              ].map((item) => (
                <div key={item.question} className="rounded-2xl border border-slate-100 bg-slate-50/30 p-6 hover:bg-white hover:shadow-soft transition-all duration-300">
                  <p className="text-sm font-bold text-will-primary mb-3">{item.question}</p>
                  <p className="text-base leading-relaxed text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>

            <p className="text-lg leading-relaxed text-slate-700 font-medium">
              どの道具も「使うこと自体」は問題ではありません。問題になるのは、道具に依存して思考そのものを手放したときです。
            </p>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-will-primary/5 to-will-secondary/5 border border-will-primary/10">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-none pb-0">
                最も大切な分岐点：「AIを使う」と「AIに考えさせる」の違い
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-rose-50 border border-rose-100 p-6">
                  <p className="text-xs font-bold text-rose-500 tracking-widest uppercase mb-3">AIに考えさせる（問題あり）</p>
                  <ul className="space-y-2">
                    {[
                      "目的も方向性も決めずに「何かいい案を出して」と頼む",
                      "出てきた文章を一切読まずにコピペする",
                      "「AIが言ってたから正しい」と鵜呑みにする",
                      "自分の意見を持たずにAIの結論をそのまま使う",
                    ].map((text) => (
                      <li key={text} className="flex items-start gap-2 text-sm leading-relaxed text-rose-800">
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-6">
                  <p className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-3">AIを使う（道具として）</p>
                  <ul className="space-y-2">
                    {[
                      "伝えたいことを自分で決め、表現をAIに手伝わせる",
                      "AIの出力を読んで批評し、自分の言葉で書き直す",
                      "「この情報は正しいか？」と自分で確認する習慣を持つ",
                      "AIの回答を叩き台にして、自分の思考を深める",
                    ].map((text) => (
                      <li key={text} className="flex items-start gap-2 text-sm leading-relaxed text-emerald-800">
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <MidArticleCtaBox slug="ai-guilt-free-guide" />
        </motion.section>

        {/* 思考力が落ちるは本当か */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="thinking-deterioration" className="scroll-mt-28">
            「思考力が落ちる」は本当か？
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              「AIを使うと考える力が落ちる」という懸念は、最も正当な不安です。
              答えは単純ではありません——<strong>使い方次第で、落ちることも、深まることもあります。</strong>
            </p>

            <div className="grid gap-6 sm:grid-cols-2 mt-8">
              <div className="rounded-2xl border border-rose-100 bg-rose-50/30 p-8">
                <h3 className="text-lg font-bold text-rose-700 mb-4 border-none pb-0">思考力が落ちる使い方</h3>
                <div className="space-y-4">
                  {[
                    { label: "例1", text: "「この文章を書いて」→コピペ→終わり（自分の思考ゼロ）" },
                    { label: "例2", text: "「この問題の答えを教えて」→即採用（検証なし）" },
                    { label: "例3", text: "毎回AIに「どうすべきか」を聞いて、自分では考えない" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <span className="flex h-6 w-10 shrink-0 items-center justify-center rounded bg-rose-200 text-[10px] font-bold text-rose-700">{item.label}</span>
                      <p className="text-sm leading-relaxed text-rose-800">{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-rose-600 font-medium leading-relaxed">
                  共通点：AIが終点になっている。自分の判断・評価・改変が入っていない。
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-8">
                <h3 className="text-lg font-bold text-emerald-700 mb-4 border-none pb-0">思考力が深まる使い方</h3>
                <div className="space-y-4">
                  {[
                    { label: "例1", text: "「この件について論点を5つ出して」→自分で取捨選択→改めて考える" },
                    { label: "例2", text: "AIの回答を読んで「これは違う」「なぜそう言えるのか」と問い返す" },
                    { label: "例3", text: "AIの草案を見ながら「自分だったら」と書き直す（比較思考）" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <span className="flex h-6 w-10 shrink-0 items-center justify-center rounded bg-emerald-200 text-[10px] font-bold text-emerald-700">{item.label}</span>
                      <p className="text-sm leading-relaxed text-emerald-800">{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-emerald-700 font-medium leading-relaxed">
                  共通点：AIが中間地点になっている。自分の思考がその先にある。
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-will-primary/30">
              <p className="text-base leading-relaxed text-slate-700">
                一つの問いを立ててみましょう。<strong>「AIを道具として使う人は、道具を使わない人より考えなくなるか？」</strong>
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                包丁を使う料理人は、素手で調理する人より食材への理解が浅いでしょうか？
                顕微鏡を使う研究者は、肉眼で観察する人より観察力が低いでしょうか？
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 font-medium">
                道具の質は、使い手の思考の質によって決まります。問われているのは「AIを使うか否か」ではなく、「AIとどう対話するか」です。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 健全なAIとの向き合い方 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="healthy-usage" className="scroll-mt-28">
            健全なAIとの向き合い方：5つの実践ガイドライン
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            「こうすべき」の押しつけではなく、「こういう向き合い方もある」という提案として受け取ってください。
          </p>
          <div className="mt-10 space-y-4">
            {healthyPractices.map((practice, idx) => (
              <div
                key={practice.title}
                className="flex gap-6 p-6 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-soft transition-all duration-300 group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-will-lighter text-will-primary font-black text-lg group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {practice.icon}
                    <h4 className="text-base font-bold text-slate-900 m-0 border-none">{practice.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 mt-1">{practice.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 罪悪感は良心の証 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="guilt-as-conscience" className="scroll-mt-28">
            罪悪感は「良心の証」という視点
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              ここまで読んできたあなたに、最後に一つ伝えたいことがあります。
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              <strong className="text-will-primary">AIへの罪悪感を感じている人は、AIを適切に恐れています。</strong>
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              「何も考えずに使いこなしている」人と、「使いながら問いを持ち続けている」人——
              どちらが道具の正しい主人になれるか、おそらく想像がつくはずです。
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-amber-300">
              <p className="text-base leading-relaxed text-slate-700 italic">
                技術の進化の歴史を振り返ると、新しい道具が登場するたびに「それを使うのは楽すぎる」「本来の能力が失われる」という声が上がってきました。
                印刷機、電話、コンピューター、インターネット——それぞれの時代に「怠惰への誘惑」と向き合った人々がいました。
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 italic">
                そして、道具の普及後に残ったのは、道具を使いながらも思考を放棄しなかった人たちの貢献です。
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              AIへの罪悪感は、捨てるべきものでもなく、飼い慣らすべきものでもありません。
              それは「自分の思考の主権を守りたい」という、きわめて人間的な感覚です。
            </p>
            <p className="text-lg leading-relaxed text-slate-700 font-medium">
              その感覚を持ちながらAIと向き合う人が、AI時代の倫理的な使い手になります。
              罪悪感は、あなたがそういう人間であることの証拠かもしれません。
            </p>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="faq" className="scroll-mt-28">
            よくある質問（FAQ）
          </h2>
          <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100">
            {faqItems.map((item) => (
              <div key={item.question} className="py-8 group">
                <dt className="text-lg font-bold leading-relaxed text-slate-900 flex items-start gap-4 transition-colors group-hover:text-will-primary">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[12px] font-black text-slate-400 group-hover:bg-will-primary/10 group-hover:text-will-primary transition-colors">Q</span>
                  {item.question}
                </dt>
                <dd className="mt-4 pl-11 text-base leading-relaxed text-slate-600">
                  {item.answer}
                </dd>
              </div>
            ))}
          </div>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-24 rounded-2xl border p-10 sm:p-14 relative overflow-hidden"
          style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <Sparkles className="absolute -right-4 -top-4 h-32 w-32 opacity-5" style={{ color: ACADEMY_COLORS.accentMain }} />

          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold m-0 border-none pb-0" style={{ color: ACADEMY_COLORS.textStrong }}>
            まとめ：罪悪感のある人ほど、良いAIの使い手になれる
          </h2>
          <p className="mt-8 text-lg leading-relaxed font-medium" style={{ color: ACADEMY_COLORS.textStrong }}>
            この記事では、AIへの罪悪感の3つの正体を整理し、「ズルい」という感覚を別の視点から見直しました。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "罪悪感は「努力=美徳」「楽=悪」「力が落ちる恐怖」の3つから来ている",
              "道具を使うことと思考を放棄することは、まったく別のこと",
              "「思考力が落ちる」かどうかはAIの使い方次第。丸投げではなく対話で使えば深まる",
              "罪悪感を感じているあなたは、AIへの適切な感性を持っている",
              "「自分の意図を通す」ことが、AI時代の誠実な使い手の条件",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base font-semibold" style={{ color: ACADEMY_COLORS.textBody }}>{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              AIを使うことへの問いを持ち続けること。その答えを自分なりに更新し続けること。
              それが、技術の変化に流されず、自分の思考の主権を守る道です。
            </p>
            <p className="text-2xl font-bold leading-tight tracking-tight" style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}>
              AIと正直に向き合い、<br />自分らしく使いこなす——<br />その問いを持つあなたは、すでに一歩先を歩いています。
            </p>
          </div>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <LineCtaBox
            title="AIとの向き合い方を、仲間と一緒に考えませんか"
            description="「こういう問いを持ちながら、AIについて学べる場所を探している」——そんな方のために、AIリブートアカデミーがあります。判断軸を共有しながら学べる環境で、AI時代の思考力を磨きましょう。LINEで気軽にご相談ください。"
            buttonLabel="LINEで気軽に相談する（登録無料）"
          />
        </motion.section>

        {/* CTA：次に学ぶ */}
        <motion.section
          className="mt-24 pt-16 border-t"
          style={{ borderColor: ACADEMY_COLORS.lineSoft }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="academy-cta" className="scroll-mt-28 flex items-center gap-3 text-2xl font-bold" style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}>
            <Lightbulb className="h-8 w-8" style={{ color: ACADEMY_COLORS.accentMain }} />
            次のステップ：AIとの向き合い方をさらに深める
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            罪悪感の正体がわかったら、次は実際の使い方を整えてみましょう。
            健全な向き合い方の具体的な手法は、AIリブートアカデミーで仲間と共に学べます。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/ai-healthy-usage-guide"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-5 text-lg font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                AI健全活用ガイドを読む
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border px-8 py-5 text-lg font-bold transition-all hover:opacity-70 active:scale-95"
              style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft, color: ACADEMY_COLORS.textBody }}
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-24 border-t pt-16 pb-12" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
              <BookOpen className="h-5 w-5" style={{ color: ACADEMY_COLORS.textMuted }} />
            </div>
            <h2 className="scroll-mt-28 m-0 border-none pb-0 text-2xl font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>関連リンク</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "「AIが怖い・難しい」を乗り越えるガイド" },
              { href: "/academy/blog/ai-healthy-usage-guide", label: "AIの健全な活用ガイド" },
              { href: "/academy/blog/chatgpt-claude-beginners-guide", label: "ChatGPT・Claude初心者ガイド" },
              { href: "/academy/blog/ai-first-3days-action-guide", label: "AI入門、最初の3日間アクションガイド" },
              { href: "/academy/blog/how-to-ask-ai-beginners", label: "AIへの聞き方入門" },
              { href: "/academy/blog/ai-learning-diy-vs-school-guide", label: "AI独学 vs スクール：選び方ガイド" },
              { href: "/academy/blog/ai-data-leak-patterns", label: "生成AIで情報漏えいが起きるパターン" },
              { href: "/academy/blog/ai-copyright-commercial-guide", label: "AIと著作権の正しい理解ガイド" },
              { href: "/academy/blog/ai-try-fail-breakthrough-guide", label: "AIを何度試しても続かなかった人へ" },
              { href: "/academy", label: "AIリブートアカデミー TOP" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between p-5 rounded-xl border transition-all group"
                  style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = ACADEMY_COLORS.accentMain;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = ACADEMY_COLORS.lineSoft;
                  }}
                >
                  <span className="text-sm font-semibold transition-colors group-hover:text-[#d46a1f]" style={{ color: ACADEMY_COLORS.textBody }}>{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-stone-300 group-hover:text-[#d46a1f] group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
