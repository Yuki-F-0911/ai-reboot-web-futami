"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  Zap,
  Calendar,
  BookOpen,
  Quote,
  MessageSquare,
  Sparkles,
  ChevronRight,
  RefreshCw,
  Target,
  TrendingUp,
  XCircle,
} from "lucide-react";
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const keywordTags = ["ChatGPT 使い方 わからない", "AI 価値 感じない", "AI 初心者", "AI 使いこなし方"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "empathy", label: "「ChatGPTを試してがっかりした」あなたへ" },
  { id: "three-reasons", label: "AIが「よくわからない」と感じる3つの理由" },
  { id: "turning-points", label: "AIが突然役立つ！3つの転換点" },
  { id: "prompt-difference", label: "「問いかけ方」の違いで変わること" },
  { id: "three-prompts", label: "今日から使える3つのプロンプト例" },
  { id: "timeline", label: "AIに慣れるまでの正直なタイムライン" },
  { id: "community", label: "独学の限界とコミュニティで学ぶ価値" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const threeReasons = [
  {
    id: "reason-expectation",
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    number: "01",
    title: "理由1：期待値が映画レベルすぎた",
    body: `「AIってすごい」というニュースを見るたびに、なんとなくSF映画のような万能ロボットをイメージしていませんか？

実際に使ってみると「ただのチャットじゃん」と感じてしまう——これは多くの人が経験することです。

ChatGPTはロボットでも魔法でもありません。優秀な人に「ちょっと手伝って」とお願いできるツールです。日本語で頼めば日本語で答えてくれる、賢い文章アシスタント、と思うと適切な期待値になります。

期待値を下げることで、逆に「これ、すごく便利じゃないか」と気づける瞬間が生まれます。`,
  },
  {
    id: "reason-usage",
    icon: <Target className="h-6 w-6 text-blue-500" />,
    number: "02",
    title: "理由2：使い方が「検索と同じ」だった",
    body: `ChatGPTに「旅行 おすすめ」「副業 稼ぎ方」のように短く検索ワードを入れると、返ってくる答えも表面的なものになります。

Googleで「カレー レシピ」と打つのと同じ感覚で使っていたら、もったいない使い方です。

AIの本当の力は「会話のキャッチボール」にあります。背景・状況・目的を伝えるほど、精度が上がります。「転職を考えている35歳の営業職で、IT業界に興味がある。まず何を調べればいいか相談したい」——こう伝えると、全く違う深さの答えが返ってきます。`,
  },
  {
    id: "reason-purpose",
    icon: <RefreshCw className="h-6 w-6 text-emerald-500" />,
    number: "03",
    title: "理由3：使う目的がなかった",
    body: `「なんとなく触ってみた」だと、何が便利なのか気づきにくいです。目的がないまま試すのは、ハンマーを持って「これ何に使うんだろう」と眺めているのと同じ状態です。

AIは「困っているときに使う道具」です。

「このメールの文章が思いつかない」「この資料の要点を抽出したい」「この単語の意味がわからない」——具体的な悩みや困りごとがあるとき、初めてAIの力を実感できます。

試す前に「今日、面倒だと思ったことは何か」を1つ思い浮かべるだけで、使い方が変わります。`,
  },
] as const;

const turningPoints = [
  {
    id: "turning-1",
    number: "転換点1",
    icon: <MessageSquare className="h-6 w-6 text-will-primary" />,
    title: "具体的な悩みをそのまま打ち込んだとき",
    story: `ある30代の会社員の方は、最初に「AIって何ができるの？」と打ち込んで「やっぱり普通だな」と思っていました。

ある日、上司への報告メールの書き方に詰まって、そのままChatGPTに「来週の月曜に上司に先週のトラブルを報告するメールを書きたい。内容は…」と愚痴混じりに打ち込んでみたら、完璧な文章が返ってきたのです。

「あ、これはすごい」と思ったのはその瞬間でした。AIは「使い方を教えて」より「今すぐ困っていること」を聞いたほうが輝きます。`,
  },
  {
    id: "turning-2",
    number: "転換点2",
    icon: <BookOpen className="h-6 w-6 text-will-primary" />,
    title: "長い文章の要約に使ったとき",
    story: `40代の管理職の方が最初に「AIって役に立つ」と実感したのは、長い会議の議事録をまとめるよう頼んだときでした。

「この議事録を5つの箇条書きにまとめて、次回のアクションアイテムも抽出して」と頼んだら、30分かかっていた作業が1分で終わったのです。

長い文章の要約・整理は、AIが最も得意とすること。ここから「毎朝のメールチェックの要点まとめ」「会議準備の資料整理」と、活用範囲がどんどん広がっていきました。`,
  },
  {
    id: "turning-3",
    number: "転換点3",
    icon: <TrendingUp className="h-6 w-6 text-will-primary" />,
    title: "仕事の下書きを作ってもらったとき",
    story: `50代のフリーランスの方は「自分で書くほうが早い」と思っていました。でも試しに企画書の下書きをAIに作ってもらったとき、考えが変わりました。

「完璧ではないけど、ゼロから書くより100倍速い。ここから自分で修正すればいい」

下書きを「叩き台」として使う発想に切り替えたとき、AIが「賢い相棒」になりました。完璧な答えを出してもらうのではなく、思考のスターターとして使う——これが仕事でAIを活かすコツです。`,
  },
] as const;

const promptExamples = [
  {
    label: "例1：メール作成",
    bad: {
      prefix: "❌ 弱い質問",
      text: "お断りメールを書いて",
    },
    good: {
      prefix: "✅ 価値が出る質問",
      text: "取引先への断りメールを書いてほしい。相手は3年付き合いのある会社で、今回は予算の都合でお断りします。関係を壊さず、次回も声をかけてもらえるような柔らかい表現で、200字程度でお願いします。",
    },
  },
  {
    label: "例2：情報整理",
    bad: {
      prefix: "❌ 弱い質問",
      text: "AI活用事例を教えて",
    },
    good: {
      prefix: "✅ 価値が出る質問",
      text: "私は小売業の店長で、在庫管理と接客に毎日時間をとられています。同じような立場の人がAIをどう活用しているか、具体的な事例を3つ教えてください。すぐに実践できる内容でお願いします。",
    },
  },
  {
    label: "例3：学習サポート",
    bad: {
      prefix: "❌ 弱い質問",
      text: "AIについて教えて",
    },
    good: {
      prefix: "✅ 価値が出る質問",
      text: "ITが苦手な50代の事務職です。まずChatGPTを仕事で使えるようになりたいのですが、最初の1週間で何をすれば良いですか？難しい言葉は使わずに、ステップごとに教えてください。",
    },
  },
] as const;

const timeline = [
  {
    period: "1日目〜3日目",
    title: "好奇心フェーズ",
    description: "「なんとなく試してみる」期間。最初は答えが微妙でも当然。この期間は慣れることが目的なので、結果は気にしなくてOK。",
    feeling: "「まあこんなもんか」",
    color: "bg-slate-100 text-slate-600",
  },
  {
    period: "4日目〜1週間",
    title: "気づきフェーズ",
    description: "具体的な悩みを持ち込み始めると、「あ、これは使える」という瞬間が生まれる。この「初ヒット体験」が習慣化の鍵。",
    feeling: "「あ、これいいかも」",
    color: "bg-blue-50 text-blue-700",
  },
  {
    period: "2週間〜3週間",
    title: "活用フェーズ",
    description: "使える場面が自分でわかってくる。「このときはAIに頼もう」という判断ができるようになる。時短効果を実感し始める。",
    feeling: "「毎日使ってる」",
    color: "bg-will-lighter text-will-primary",
  },
  {
    period: "1ヶ月〜",
    title: "習慣フェーズ",
    description: "AIなしの仕事に戻れなくなる感覚。プロンプトの工夫や新しい使い方への探求心が生まれ、もっと深く学びたくなる。",
    feeling: "「なんで今まで使わなかったんだろう」",
    color: "bg-emerald-50 text-emerald-700",
  },
] as const;

const stories = [
  {
    role: "30代・営業職",
    quote: "最初に試したとき「ふーん」と思って閉じました。でも上司への報告メールで詰まったとき、ダメ元で相談したら完璧な文章が返ってきて。それからは毎日使ってます。",
  },
  {
    role: "40代・事務職・女性",
    quote: "正直「AIって私には関係ない」と思ってました。でも長い文章の要点をまとめるのを試したら、30分の作業が2分で終わって。それ以来やめられません。",
  },
  {
    role: "50代・自営業",
    quote: "最初は「自分で書いたほうが早い」と思ってた。でも下書きとして使うようにしたら、作業速度が3倍になった。完璧じゃなくていいんだって気づいたのが大事でした。",
  },
  {
    role: "60代・定年後パート",
    quote: "孫に勧められて渋々試したんです。最初は意味がわからなかったけど、旅行の計画相談に使ったらすごく的確で。今は毎週使ってますよ。",
  },
] as const;

export default function AiValueNotFeltHonestGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-hidden">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIを試したけど価値がわからなかった人へ" },
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
            AIを試したけど、<br className="hidden sm:block" />正直よくわからなかった人へ：<br className="hidden sm:block" />本当の価値に気づく3つの転換点
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
              title="AIを試したけど、正直よくわからなかった人へ：本当の価値に気づく3つの転換点"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50/50 border border-slate-100 relative">
            <Quote className="absolute top-6 right-8 h-12 w-12 text-slate-200 -z-10 opacity-50" />
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-medium">
              ChatGPTを触ってみたけど「だからなに？」と感じた。AIってすごいと言われるけど、自分には使い道がない気がする——そう感じているのは、あなただけではありません。
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              この記事では、AIが「よくわからない」と感じる3つの理由と、AIが急に「これは役立つ！」と感じる転換点をリアルに解説します。「また試してみようかな」と思えるヒントをお届けします。
            </p>
          </div>
        </motion.header>

        <div data-seo-internal-links="true" className="mt-12 p-6 rounded-2xl border border-will-lighter bg-will-lighter/20 flex flex-wrap items-center gap-y-3 gap-x-1">
          <BookOpen className="h-4 w-4 text-will-primary mr-2" />
          <span className="text-sm font-bold text-slate-500 mr-2">関連テーマ：</span>
          <Link href="/academy/blog/how-to-ask-ai-beginners" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AIへの聞き方</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">ChatGPTプロンプト入門</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">最初の30日ガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AIへの不安を乗り越える</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-for-non-engineers" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">非エンジニア向けAI活用</Link>
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
            要点まとめ（なぜ価値を感じなかったのか）
          </h4>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>AIが「使えない」と感じた場合、多くはツールの問題でなく<strong>「期待値」か「使い方」のミスマッチ</strong></span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>短い一言で試すと答えも浅い。<strong>背景・状況・目的を含めた質問</strong>で価値が変わる</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>AIが急に役立つ転換点は「具体的な悩み」「要約」「下書き」の3場面に集中している</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>1〜2週間、毎日1回使い続けると<strong>「これがないと困る」</strong>という実感が生まれる</span>
            </li>
          </ul>
        </motion.section>

        {/* 共感導入 */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="empathy" className="scroll-mt-28">
            「ChatGPTを試してがっかりした」——あなたへ
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              正直に言います。ChatGPTを最初に試したとき、「なんだこれ」と思う人はかなり多いです。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              「こんにちは」と打ったら「こんにちは！何かお手伝いできますか？」と返ってきた。「旅行おすすめ」と打ったら当たり障りのない観光地リストが返ってきた。「これがAIの革命？」と拍子抜けした経験は、多くの人が持っています。
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-slate-300">
              <p className="text-base leading-relaxed text-slate-700 italic">
                あなたの感覚は間違っていません。<strong>ただ、まだ本当の使い方を知らないだけです。</strong>
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              マニュアルなしでドリルを渡された大工見習いが「これって何に使うんですか？」と思うのと同じです。道具は正しい使い方を知ると初めて輝く。AIも同じです。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              この記事を読み終えたとき、「もう一度ちゃんと試してみよう」と思えるはずです。
            </p>
          </div>
        </motion.section>

        {/* AIが「よくわからない」と感じる3つの理由 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="three-reasons" className="scroll-mt-28">
            AIが「よくわからない」と感じる3つの理由
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            価値を感じられなかった理由は、AIがダメなのではなく「ミスマッチ」の問題です。3つの典型パターンを見ていきましょう。
          </p>
          <div className="mt-12 space-y-10">
            {threeReasons.map((reason) => (
              <section key={reason.id} id={reason.id} className="point-box scroll-mt-28 group hover:shadow-elevated transition-shadow duration-300">
                <div className="flex items-start gap-5 mb-6">
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                    <span className="text-[10px] font-black text-slate-300 tracking-widest">{reason.number}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 border-none m-0 pt-2">{reason.title}</h4>
                </div>
                <div className="mt-4 whitespace-pre-line text-[15px] leading-8 text-slate-700">{reason.body}</div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 転換点 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="turning-points" className="scroll-mt-28">
            「AIが突然役立つ！」と感じた転換点3つ
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            最初はピンとこなかった人が、「あ、これはすごい」と感じる瞬間がある。実際の体験談をもとに、3つの転換点をご紹介します。
          </p>
          <div className="mt-12 space-y-10">
            {turningPoints.map((point, idx) => (
              <section key={point.id} className="relative rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-soft overflow-hidden group hover:shadow-elevated transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-will-primary/3 rounded-full blur-2xl group-hover:bg-will-primary/6 transition-all" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-will-primary text-white font-black text-lg shadow-floating shadow-will-primary/20">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-will-primary tracking-widest uppercase">{point.number}</span>
                    <h3 className="text-xl font-bold text-slate-900 m-0 border-none pb-0">{point.title}</h3>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-will-lighter">
                    {point.icon}
                  </div>
                  <p className="text-[15px] leading-8 text-slate-700 whitespace-pre-line">{point.story}</p>
                </div>
              </section>
            ))}
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
          <MidArticleCtaBox slug="ai-value-not-felt-honest-guide" />
        </motion.section>

        {/* 問いかけ方の違い */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="prompt-difference" className="scroll-mt-28">
            価値を感じない人が見落としている「問いかけ方」の違い
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            同じAIでも、聞き方一つで返ってくる答えの質が大きく変わります。具体的に比べてみましょう。
          </p>
          <div className="mt-12 space-y-10">
            {promptExamples.map((example) => (
              <section key={example.label} className="rounded-2xl border border-slate-100 bg-slate-50/30 p-8 overflow-hidden">
                <h4 className="text-base font-bold text-slate-500 tracking-widest uppercase border-none m-0 mb-6">{example.label}</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="h-4 w-4 text-rose-400" />
                      <span className="text-[11px] font-black text-rose-500 tracking-widest uppercase">{example.bad.prefix}</span>
                    </div>
                    <p className="text-base font-semibold text-slate-700 leading-relaxed bg-white rounded-lg p-4 border border-rose-100">
                      「{example.bad.text}」
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-[11px] font-black text-emerald-600 tracking-widest uppercase">{example.good.prefix}</span>
                    </div>
                    <p className="text-base font-semibold text-slate-700 leading-relaxed bg-white rounded-lg p-4 border border-emerald-100">
                      「{example.good.text}」
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-2xl bg-will-lighter/30 border border-will-primary/10">
            <p className="text-base leading-relaxed text-slate-700 font-medium">
              ポイントは3つ：<strong>①誰が（自分の状況）、②何のために（目的）、③どんな形で（アウトプット形式）</strong>を伝えること。これだけでAIの答えは劇的に変わります。
            </p>
          </div>
        </motion.section>

        {/* 今日から使える3つのプロンプト */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="three-prompts" className="scroll-mt-28">
            「もう一度試すなら」：今日から使える3つのプロンプト例
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            コピーしてそのまま使えるプロンプトを用意しました。自分の状況に合わせて〔〕内を書き換えて使ってください。
          </p>
          <div className="mt-10 space-y-6">
            {[
              {
                title: "プロンプト1：困りごと相談",
                prompt: "私は〔職業・役職〕です。今〔具体的な悩みや困りごと〕で困っています。初心者でもわかるように、具体的なアドバイスを3つ教えてください。",
                use: "何から始めたらよいかわからないときの「相談」用",
              },
              {
                title: "プロンプト2：文章の下書き",
                prompt: "〔誰に（例：上司、取引先）〕向けに〔目的（例：お礼、お断り、報告）〕のメール文を書いてください。背景は〔状況の説明〕です。〔文字数や雰囲気の要望〕でお願いします。",
                use: "メール・文章作成で時間がかかるときの「下書き」用",
              },
              {
                title: "プロンプト3：長い文章の要約",
                prompt: "以下の文章を〔3つ・5つ〕の箇条書きで要約してください。重要なポイントと、次に取るべきアクションがあれば合わせて教えてください。\n\n〔ここに要約したい文章をペースト〕",
                use: "議事録・メール・資料の整理に最適な「要約」用",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-subtle hover:shadow-soft transition-all">
                <h4 className="text-base font-bold text-will-primary border-none m-0 mb-2">{item.title}</h4>
                <p className="text-[12px] font-semibold text-slate-400 mb-4">{item.use}</p>
                <pre className="whitespace-pre-wrap rounded-xl bg-slate-50 border border-slate-100 p-5 text-sm leading-relaxed text-slate-700 font-mono">
                  {item.prompt}
                </pre>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-amber-50/50 border border-amber-100">
            <p className="text-sm leading-relaxed text-amber-800 font-medium flex items-start gap-2">
              <Lightbulb className="h-4 w-4 mt-0.5 shrink-0 text-amber-500" />
              最初から完璧なプロンプトを書こうとしなくて大丈夫です。「もう少し短く」「もっとカジュアルに」「箇条書きにして」と追加指示を重ねながら、一緒に答えを作っていく感覚で使いましょう。
            </p>
          </div>
        </motion.section>

        {/* タイムライン */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="timeline" className="scroll-mt-28">
            AIに慣れるまでの正直なタイムライン（1週間〜1ヶ月）
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            「すぐに使いこなせなくて当然」です。実際どのくらいで慣れるのか、リアルなタイムラインをお伝えします。
          </p>
          <div className="mt-10 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-will-primary/30 to-emerald-300 hidden sm:block" />
            <div className="space-y-6">
              {timeline.map((phase, idx) => (
                <div key={phase.period} className="flex gap-6 sm:pl-4">
                  <div className="relative shrink-0 flex items-start">
                    <div className="sm:absolute sm:-left-2 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-slate-200 z-10 mt-1.5">
                      <span className="text-[10px] font-black text-slate-400">{idx + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-subtle hover:shadow-soft transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold ${phase.color}`}>{phase.period}</span>
                      <h4 className="text-lg font-bold text-slate-900 border-none m-0">{phase.title}</h4>
                    </div>
                    <p className="text-[14px] leading-relaxed text-slate-600">{phase.description}</p>
                    <p className="mt-4 text-sm font-bold text-slate-400 italic">{phase.feeling}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-will-primary/5 to-will-secondary/5 border border-will-primary/10">
            <p className="text-base leading-relaxed text-slate-700 font-medium">
              大切なのは、1日目に「すごい！」と感動しなくても続けること。多くの人が「気づいたら習慣になっていた」と言います。最初の1週間だけ、毎日1回だけ試してみてください。
            </p>
          </div>
        </motion.section>

        {/* コミュニティの価値 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="community" className="scroll-mt-28">
            独学の限界とコミュニティで学ぶことの価値
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              AIを独学で学ぼうとすると、よく「情報が多すぎてどれから始めればいいかわからない」問題にぶつかります。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              YouTubeを見てみるけど、次々と新しいツールが出てきて追いきれない。本を買っても、読み終わるころには情報が古くなっている。これが2026年のAI学習の現実です。
            </p>

            <div className="grid gap-6 sm:grid-cols-3 mt-8">
              {[
                {
                  icon: <AlertCircle className="h-5 w-5 text-rose-400" />,
                  title: "独学の落とし穴",
                  points: ["情報が多すぎて迷子になる", "正しい使い方を試せない", "続けるモチベーションが持ちにくい"],
                  bg: "bg-rose-50/50 border-rose-100",
                },
                {
                  icon: <MessageSquare className="h-5 w-5 text-blue-400" />,
                  title: "仲間がいると変わること",
                  points: ["「こんな使い方があった」を共有できる", "詰まったときにすぐ聞ける", "お互いの進歩が刺激になる"],
                  bg: "bg-blue-50/50 border-blue-100",
                },
                {
                  icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
                  title: "体系的な学習の効果",
                  points: ["順番通りに学べるから迷わない", "実務直結の内容に絞れる", "継続率が大幅に上がる"],
                  bg: "bg-emerald-50/50 border-emerald-100",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-2xl border p-6 ${item.bg}`}>
                  <div className="flex items-center gap-2 mb-4">
                    {item.icon}
                    <h4 className="text-sm font-bold text-slate-800 border-none m-0">{item.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="text-sm leading-relaxed text-slate-600 flex items-start gap-2">
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-base leading-relaxed text-slate-600 mt-6">
              AIリブートアカデミーは、初心者が100日間で実務活用できるよう設計された体系的なプログラムです。経産省リスキリング補助金の対象なので、費用面でも安心してスタートできます。
            </p>
          </div>

          {/* 体験談 */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {stories.map((story) => (
              <blockquote key={story.role} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-soft relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 group-hover:bg-will-primary transition-colors duration-300" />
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-will-lighter flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-will-primary" />
                  </div>
                  <span className="text-xs font-bold text-will-primary tracking-widest uppercase">{story.role}</span>
                </div>
                <p className="text-base leading-relaxed text-slate-700 font-medium relative">
                  <Quote className="absolute -left-2 -top-2 h-8 w-8 text-slate-100 -z-10" />
                  {story.quote}
                </p>
              </blockquote>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-slate-400 font-medium italic">
            <Sparkles className="h-3 w-3" />
            AIリブートが収集した利用者の声をもとに再構成したエピソードです。
          </p>
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
          className="mt-24 rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-10 sm:p-14 shadow-soft relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <Sparkles className="absolute -right-4 -top-4 h-32 w-32 text-will-primary/5" />

          <h2 id="summary" className="scroll-mt-28 text-2xl font-black text-slate-900 m-0 border-none pb-0">
            まとめ：あなたの感覚は正しかった、ただもう一度だけ試してほしい
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-700 font-medium">
            AIを試してピンとこなかった経験は、あなたが鈍感だったからでも、AIが使えないツールだからでもありません。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "期待値が高すぎた——AIはロボットではなく「賢い文章アシスタント」",
              "使い方が検索と同じだった——背景・目的・状況を加えると価値が変わる",
              "具体的な困りごとがなかった——「今日、面倒だと感じたこと」から始めるのが最速",
              "転換点は「具体的な悩み」「要約」「下書き」の3場面に集中している",
              "1〜2週間、毎日1回続けると「これがないと困る」という実感が生まれる",
            ].map((text) => (
              <div key={text} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-subtle">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base font-semibold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              今日、この記事にあるプロンプトを1つだけコピーして試してみてください。「あ、これは使えるかも」と感じる瞬間が、きっとあるはずです。
            </p>
            <p className="text-2xl font-black leading-tight text-slate-900 tracking-tight">
              AIで仕事をラクにする——<br />その体験は、もう目の前にあります。
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
            title="もう一度、正しい使い方でAIを試してみませんか"
            description="「また試してみようかな」と思ったら、まずはLINEで相談してください。AIリブートアカデミーは初心者でも100日間で実務活用できる設計になっています。経産省リスキリング補助金対象。まずはお気軽にご相談ください。"
            buttonLabel="LINEで無料相談する（登録無料）"
          />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-24 pt-16 border-t border-slate-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="academy-cta" className="scroll-mt-28 flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-will-primary" />
            次のステップ：もっとAIを活用したくなったら
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            「もう少し深く学びたい」と感じたら、次の記事に進んでみましょう。プロンプトの書き方をマスターすると、AIの回答の精度が格段に上がります。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-8 py-5 text-lg font-bold text-white shadow-elevated transition-all hover:scale-[1.02] hover:bg-slate-800 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                プロンプトの書き方を学ぶ
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-200 px-8 py-5 text-lg font-bold text-slate-700 transition-all hover:border-slate-900 hover:text-slate-900 active:scale-95"
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-24 border-t border-slate-100 pt-16 pb-12">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-slate-500" />
            </div>
            <h2 className="scroll-mt-28 m-0 border-none pb-0 text-2xl font-bold text-slate-900">関連リンク</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/academy/blog/how-to-ask-ai-beginners", label: "AIへの聞き方・プロンプト入門" },
              { href: "/academy/blog/chatgpt-prompt-beginner", label: "ChatGPTプロンプトの書き方入門" },
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "「AIが怖い・難しい」を乗り越えるガイド" },
              { href: "/academy/blog/ai-for-non-engineers", label: "文系・非エンジニアのAI活用ガイド" },
              { href: "/academy/blog/ai-first-30-days-work-guide", label: "AIを仕事で使う最初の30日ガイド" },
              { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTをスマホで始める方法" },
              { href: "/academy/blog/ai-beginners-guide-over-50", label: "50代からのAI初心者ガイド" },
              { href: "/academy/blog/what-is-generative-ai", label: "生成AIとは？初心者向け解説" },
              { href: "/academy/blog/how-to-learn-generative-ai", label: "生成AIの学び方【2026年版】" },
              { href: "/academy", label: "AIリブートアカデミー TOP" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 bg-white hover:border-will-primary/30 hover:shadow-soft transition-all group"
                >
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-will-primary transition-colors">{link.label}</span>
                  <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-will-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
