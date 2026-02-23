"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Calendar,
  Clock,
  BookOpen,
  Quote,
  Lock,
  Sparkles,
  ChevronRight
} from "lucide-react";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY, ACADEMY_SPACING } from "../../sections/academyDesignTokens";

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

const keywordTags = ["AI 怖い", "生成AI 不安", "AI 難しい", "AI 始め方 不安", "AI 初心者 怖い"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-anxious", label: "AIが怖いと感じるのは自然なこと" },
  { id: "five-anxieties", label: "5つの不安と正直な答え" },
  { id: "first-3-days", label: "最初の3日間でやること" },
  { id: "stories", label: "先輩たちの「最初は怖かった」エピソード" },
  { id: "privacy-settings", label: "安心して使うためのプライバシー設定" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ：一歩踏み出した人だけが見える景色" },
  { id: "related-links", label: "関連リンク" },
] as const;

const fiveAnxieties = [
  {
    id: "anxiety-job",
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    question: "不安1：AIに仕事を奪われる？",
    answer: `世界経済フォーラム（WEF）の「Future of Jobs Report 2025」によると、2030年までにAI関連で1億7,000万の新しい仕事が生まれ、9,200万の仕事が置き換わると予測されています。差し引き＋7,800万の純増です。

国際労働機関（ILO）の2025年5月の報告書はさらに踏み込んで、「AIによって最もリスクが高い仕事は全体のわずか3.3%」「大半の仕事はなくなるのではなく、変わる」と結論づけています。

つまり、AIは「仕事を奪う」のではなく「仕事の中身を変える」存在です。AIを使える人は仕事が楽になり、使えない人との差が開く——これが2026年の実態です。`,
    sources: [
      { label: "WEF Future of Jobs Report 2025", url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/" },
      { label: "ILO: Generative AI and Jobs 2025", url: "https://www.ilo.org/publications/generative-ai-and-jobs-2025-update" },
    ],
  },
  {
    id: "anxiety-privacy",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
    question: "不安2：個人情報が漏れない？",
    answer: `ChatGPT・Claude・Geminiの3大ツールはいずれもプライバシー設定を用意しています。

具体的には：
・ChatGPT → 設定 ＞ Data Controls ＞「Improve the model for everyone」をオフ
・Claude → 設定 ＞ Privacy ＞ 学習利用をオフ
・Gemini → Googleアカウント ＞ Geminiアプリのアクティビティ ＞ オフ

基本ルールはシンプルです：「名前・住所・電話番号・クレジットカード番号など、個人を特定する情報は入力しない」。これだけ守れば安全に使えます。`,
    sources: [
      { label: "OpenAI: Data Controls FAQ", url: "https://help.openai.com/en/articles/7730893-data-controls-faq" },
      { label: "Anthropic: Consumer Terms更新", url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" },
      { label: "Gemini: プライバシーハブ", url: "https://support.google.com/gemini/answer/13594961" },
    ],
  },
  {
    id: "anxiety-difficult",
    icon: <Smartphone className="h-6 w-6 text-blue-500" />,
    question: "不安3：使いこなせない？難しくない？",
    answer: `AIを使うのに専門知識は不要です。ChatGPTもClaudeもGeminiも、LINEやメッセンジャーと同じ感覚で「文字を打って送るだけ」で動きます。

たとえば、ChatGPTを開いて「明日の会議で使う挨拶文を考えて」と打てば、それだけで回答が返ってきます。プログラミングも英語も必要ありません。

「プロンプト（指示文）が難しそう」と感じるかもしれませんが、最初はふつうの日本語で大丈夫です。「もっと短くして」「もう少しカジュアルに」と伝えれば、AIが調整してくれます。

使いこなすコツは、最初から完璧な指示を出そうとしないこと。会話を重ねて、一緒に答えを作っていく感覚です。`,
    sources: [],
  },
  {
    id: "anxiety-hallucination",
    icon: <AlertCircle className="h-6 w-6 text-rose-500" />,
    question: "不安4：間違った情報を信じてしまう？",
    answer: `AIが事実と異なる情報を生成する現象は「ハルシネーション（幻覚）」と呼ばれます。これは確かに起こります。ただし、最新モデルでは大幅に改善されています。

Vectaraのハルシネーション評価（2025年12月更新）によると、要約タスクでの誤り率はトップモデルで0.7〜1.5%まで下がっています。

対策はシンプルです：
1. 重要な数字・日付・固有名詞は必ず公式サイトで確認する
2. 「この情報の出典を教えて」とAIに聞く
3. 最初は「要約して」「整理して」のような失敗しにくいタスクから始める`,
    sources: [
      { label: "Vectara Hallucination Leaderboard", url: "https://github.com/vectara/hallucination-leaderboard" },
    ],
  },
] as const;

const daySteps = [
  {
    day: "Day 1：ChatGPTに挨拶してみる",
    time: "所要時間：10分",
    steps: [
      {
        title: "ステップ1：ChatGPTを開く",
        body: "ブラウザで chatgpt.com にアクセスし、無料登録します。",
      },
      {
        title: "ステップ2：最初のメッセージを送る",
        body: "入力欄に「こんにちは。AIを使うのは初めてです」と打って送信してみましょう。",
      },
    ],
  },
  {
    day: "Day 2：仕事の悩みを1つ相談してみる",
    time: "所要時間：15分",
    steps: [
      {
        title: "ステップ1：仕事で困っていることを相談する",
        body: "「メールの返信案を作って」など、具体的に相談してみます。",
      },
    ],
  },
  {
    day: "Day 3：結果を誰かに見せてみる",
    time: "所要時間：5分",
    steps: [
      {
        title: "ステップ1：実力を体感する",
        body: "AIが作ったものを見直し、修正してみることで実力がわかります。",
      },
    ],
  },
] as const;

const stories = [
  {
    role: "40代・事務職",
    quote: "Excelも苦手な私にAIなんて無理だと思ってました。でもChatGPTに「この表を要約して」と頼んだら、5秒で完了。今は毎朝のメールチェックに使ってます。",
  },
  {
    role: "50代・営業マネージャー",
    quote: "部下を信頼するのと同じで、AIにも具体的な仕事を振ってみたら、提案書の骨子を作るのが劇的に速くなって。今は強力な参謀がいる感覚です。",
  },
] as const;

const privacySettings = [
  {
    tool: "ChatGPT（OpenAI）",
    steps: "Settings → Data Controls → 「Improve the model for everyone」をオフにする",
    note: "この設定をオフにすると、あなたの会話はAIの学習には使われません。",
    url: "https://help.openai.com/en/articles/7730893-data-controls-faq",
  },
] as const;

export default function AiAnxietyOvercomeGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-x-clip">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIが怖い・難しいを乗り越えるガイド" },
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
          <div className="flex flex-wrap gap-2 mb-8">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
                style={{ 
                  backgroundColor: ACADEMY_COLORS.bgSection, 
                  color: ACADEMY_COLORS.textMuted,
                  borderColor: ACADEMY_COLORS.lineSoft
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl tracking-tight mb-8"
            style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
          >
            「AIが怖い・難しい」を<br className="hidden sm:block" />乗り越える安心スタートガイド2026
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-8" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
                <Calendar className="h-5 w-5" style={{ color: ACADEMY_COLORS.textMuted }} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ACADEMY_COLORS.textMuted }}>Published on</p>
                <time className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>2026年2月21日</time>
              </div>
            </div>
            
            <CopyAsMarkdownButton
              title="「AIが怖い・難しい」を乗り越える安心スタートガイド2026"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          
          <div 
            className="mt-10 p-6 sm:p-10 rounded-xl border relative"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <Quote className="absolute top-6 right-8 h-12 w-12 opacity-5" style={{ color: ACADEMY_COLORS.accentMain }} />
            <p className="text-lg sm:text-xl leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              「AIって難しそう」「情報が漏れたら怖い」——こうした不安を感じるのは、あなただけではありません。
            </p>
            <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              この記事では、5つの代表的な不安にデータと公式情報で正直にお答えし、「最初の3日間」で何をすればいいかを具体的にご案内します。
            </p>
          </div>
        </motion.header>

        <div className="mt-12 p-6 rounded-xl border flex flex-wrap items-center gap-y-3 gap-x-1" style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}>
          <BookOpen className="h-4 w-4 mr-2" style={{ color: ACADEMY_COLORS.accentMain }} />
          <span className="text-xs font-bold mr-2 uppercase tracking-wider" style={{ color: ACADEMY_COLORS.textMuted }}>Related topics:</span>
          <Link href="/academy/blog/ai-for-non-engineers" className="text-sm font-bold border-b transition-opacity hover:opacity-70" style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}>非エンジニア向けAI活用</Link>
          <span className="mx-1" style={{ color: ACADEMY_COLORS.lineStrong }}>/</span>
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-sm font-bold border-b transition-opacity hover:opacity-70" style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}>スマホ開始ガイド</Link>
        </div>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="check-box mt-20"
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
            <li>AIは仕事を「奪う」のではなく<strong>「変える」</strong>存在です</li>
            <li>ChatGPTなどは無料で始められ、設定で<strong>学習利用をオフ</strong>にできます</li>
            <li>使い方は日本語で話しかけるだけ。最初の3日間ステップで始められます</li>
          </ul>
        </motion.section>

        {/* AIが怖いと感じるのは自然なこと */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="why-anxious" className="scroll-mt-28">
            AIが怖いと感じるのは自然なこと
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              まず伝えたいのは、AIに不安を感じること自体はまったく普通の反応だということです。
            </p>
            <p>
              2025年の調査では、72.6%が「AIの進化に不安を感じる」と回答しました。しかしその多くは実体験ではなく、ニュースやSNSで見聞きした情報から生まれています。
            </p>
            <div 
              className="p-6 rounded-xl border-l-2" 
              style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.accentMain }}
            >
              <p className="italic" style={{ color: ACADEMY_COLORS.textBody }}>
                「使ったことがないから怖い」→「怖いから使わない」という循環を一緒に抜け出していきましょう。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 5つの不安と正直な答え */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="five-anxieties" className="scroll-mt-28">
            AIへの5つの不安と、正直な答え
          </h2>
          <div className="mt-12 space-y-12">
            {fiveAnxieties.map((item) => (
              <section key={item.id} id={item.id} className="point-box scroll-mt-28 group transition-colors hover:border-orange-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone-50 border border-stone-100">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 border-none m-0">{item.question}</h4>
                </div>
                <div className="mt-4 whitespace-pre-line text-base leading-[1.8] text-stone-700">{item.answer}</div>
                {item.sources.length > 0 && (
                  <div className="mt-8 pt-4 border-t flex flex-wrap gap-4" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: ACADEMY_COLORS.textMuted }}>Sources:</span>
                    {item.sources.map((src) => (
                      <a key={src.url} href={src.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold border-b transition-opacity hover:opacity-70" style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}>
                        {src.label}
                      </a>
                    ))}
                  </div>
                )}
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
          <MidArticleCtaBox slug="ai-anxiety-overcome-guide" />
        </motion.section>

        {/* 最初の3日間 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="first-3-days" className="scroll-mt-28">
            最初の3日間でやること
          </h2>
          <div className="mt-12 space-y-12 relative">
            {daySteps.map((day, idx) => (
              <section key={day.day} className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                  <div 
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-bold text-xl text-white"
                    style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 m-0 border-none pb-0">{day.day}</h3>
                    <div className="mt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: ACADEMY_COLORS.accentDeep }}>
                      <Clock className="h-3.5 w-3.5" />
                      <span>{day.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-6 sm:ml-12">
                  {day.steps.map((step) => (
                    <div key={step.title} className="rounded-xl bg-white p-6 border transition-all duration-300 hover:border-orange-200" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                      <h4 className="text-base font-bold text-slate-900 m-0 border-none flex items-center gap-2">
                        {step.title}
                      </h4>
                      <p className="mt-3 text-base leading-[1.8]" style={{ color: ACADEMY_COLORS.textBody }}>{step.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div 
            className="mt-12 p-8 rounded-xl border"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <p className="text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              3日間が終わるころには、「AIって意外とふつう」に変わっているはずです。
            </p>
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="mt-6 inline-flex items-center gap-2 font-bold border-b transition-opacity hover:opacity-70" style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}>
              <span>次は「ChatGPTプロンプトの書き方」へ進む</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>

        {/* 先輩たちのエピソード */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="stories" className="scroll-mt-28">
            先輩たちの「最初は怖かった」エピソード
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {stories.map((story) => (
              <blockquote key={story.role} className="rounded-xl border bg-white p-8 relative overflow-hidden group hover:border-orange-200 transition-colors" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                <div className="absolute top-0 left-0 w-1 h-full bg-stone-100 group-hover:bg-orange-400 transition-colors duration-300" />
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-stone-100" style={{ color: ACADEMY_COLORS.textMuted }}>{story.role}</span>
                </div>
                <p className="text-base leading-[1.8] font-bold relative" style={{ color: ACADEMY_COLORS.textStrong }}>
                  {story.quote}
                </p>
              </blockquote>
            ))}
          </div>
        </motion.section>

        {/* プライバシー設定 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="privacy-settings" className="scroll-mt-28">
            安心して使うためのプライバシー設定
          </h2>
          <div className="mt-10 grid gap-6">
            {privacySettings.map((item) => (
              <section key={item.tool} className="rounded-xl border p-8 bg-white transition-all duration-300 hover:border-orange-200" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900 m-0 border-none pb-0">{item.tool}</h3>
                  <Lock className="h-5 w-5 text-stone-300" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="shrink-0 flex h-6 w-16 items-center justify-center rounded bg-stone-100 text-[10px] font-bold text-stone-500 uppercase tracking-tighter">Setting</span>
                    <p className="text-base font-bold text-slate-800 leading-relaxed">{item.steps}</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="shrink-0 flex h-6 w-16 items-center justify-center rounded text-[10px] font-bold text-emerald-700 uppercase tracking-tighter" style={{ backgroundColor: '#ecfdf5' }}>Benefit</span>
                    <p className="text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>{item.note}</p>
                  </div>
                </div>
              </section>
            ))}
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
          <div className="mt-10 divide-y border-t" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
            {faqItems.map((item) => (
              <div key={item.question} className="py-8 group">
                <dt className="text-lg font-bold leading-relaxed text-slate-900 flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-stone-100 text-[12px] font-bold text-stone-400 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">Q</span>
                  {item.question}
                </dt>
                <dd className="mt-4 pl-11 text-base leading-relaxed flex items-start gap-4" style={{ color: ACADEMY_COLORS.textBody }}>
                  {item.answer}
                </dd>
              </div>
            ))}
          </div>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-24 rounded-xl border p-10 sm:p-14 relative overflow-hidden"
          style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <Sparkles className="absolute -right-4 -top-4 h-32 w-32 opacity-5" style={{ color: ACADEMY_COLORS.accentMain }} />
          
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold m-0 border-none pb-0" style={{ color: ACADEMY_COLORS.textStrong }}>
            まとめ：一歩踏み出した人だけが見える景色
          </h2>
          <p className="mt-8 text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
            不安は、知ることで小さくなります。そして、触れることで消えていきます。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "仕事は「奪われる」のではなく「変える」存在です",
              "プライバシーは設定1つで守れます",
              "使い方は日本語で話しかけるだけ。専門知識は不要です",
              "無料プランだけで十分に試せます"
            ].map((text) => (
              <div 
                key={text} 
                className="flex items-center gap-4 p-4 rounded-lg border bg-white"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base font-bold" style={{ color: ACADEMY_COLORS.textBody }}>{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              あなたが「Day 1」を始めるのに、特別な準備は必要ありません。その小さな一歩が、半年後の働き方を変えるかもしれません。
            </p>
            <p className="text-2xl font-bold leading-tight tracking-tight" style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}>
              AIで人生をリブートする——<br />その最初の一歩を、今日踏み出してみませんか。
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
            title="AIの第一歩を、一人で悩まないでください"
            description="「この記事を読んだけど、まだ不安がある」という方のために、LINEで無料相談を受け付けています。アカデミー受講前の不安を、専門スタッフが一緒に整理します。"
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
            次のステップ：もっとAIを活用したくなったら
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-5 text-lg font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                プロンプトの書き方を学ぶ
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
        <section id="related-links" className={ACADEMY_SPACING.sectionPy + " border-t mt-24"} style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
              <BookOpen className="h-5 w-5" style={{ color: ACADEMY_COLORS.textMuted }} />
            </div>
            <h2 className="scroll-mt-28 m-0 border-none pb-0 text-2xl font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>関連リンク</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTをスマホで始める方法" },
              { href: "/academy/blog/chatgpt-claude-beginners-guide", label: "ChatGPT・Claude初心者ガイド" },
              { href: "/academy/blog/chatgpt-prompt-beginner", label: "ChatGPTプロンプトの書き方入門" },
              { href: "/academy/blog/ai-for-non-engineers", label: "文系・非エンジニアのAI活用ガイド" },
              { href: "/academy", label: "AIリブートアカデミー TOP" }
            ].map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="flex items-center justify-between p-5 rounded-xl border transition-all group"
                  style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <span className="text-sm font-bold transition-colors group-hover:text-[#d46a1f]" style={{ color: ACADEMY_COLORS.textBody }}>{link.label}</span>
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
