"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  Heart,
  RefreshCw,
  Users,
  Target,
  Calendar,
  Clock,
  BookOpen,
  Quote,
  Sparkles,
  ChevronRight,
  TrendingUp,
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

const keywordTags = ["AI学習 挫折 再挑戦", "ChatGPT やめた またやる", "AI 諦めた もう一度", "生成AI 続かない 解決"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "opening", label: "AIをやめたあなたへ" },
  { id: "why-quit", label: "なぜ最初に挫折するのか" },
  { id: "fear", label: "「また同じことになる」という恐怖に向き合う" },
  { id: "comeback-patterns", label: "再挑戦できた人の5つの共通点" },
  { id: "restart-guide", label: "ゆっくりでいい再スタートガイド" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ：前と違う再スタートへ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const failurePatterns = [
  {
    id: "pattern-expectation",
    icon: <TrendingUp className="h-6 w-6 text-amber-500" />,
    title: "挫折パターン1：「期待が高すぎた」",
    body: `「AIを使えば人生が変わる」「毎日の仕事が半分になる」——そんな期待を持って始めた人が、「思ったほどじゃなかった」と感じてやめるケースは多いです。

AIは魔法ではありません。最初の1週間でできることは、メールの下書きを作ってもらったり、情報を整理してもらったりする程度です。それでも、積み重ねれば大きな変化になります。でも「1週間で仕事を自動化する」は無理です。

期待と現実のギャップが大きいほど、早くやめてしまいます。`,
  },
  {
    id: "pattern-lonely",
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: "挫折パターン2：「孤独だった」",
    body: `一人でAIを学ぼうとすると、詰まったときに助けてくれる人がいません。「これで合ってるのかな」「もっと上手い使い方があるんじゃないか」という不安が積み重なり、やがてフェードアウトしてしまいます。

新しいことは、一人でやるより誰かと一緒にやる方が続きます。勉強でも、ジムでも、ダイエットでも——AIも例外ではありません。`,
  },
  {
    id: "pattern-no-goal",
    icon: <Target className="h-6 w-6 text-rose-500" />,
    title: "挫折パターン3：「何を目標にすればいいかわからなかった」",
    body: `「ChatGPTを使いこなしたい」という目標は、実は曖昧です。「使いこなす」とはどういう状態なのか、具体的にわかりません。

ゴールが不明確だと、「今日も少し触った」という積み重ねが手ごたえにつながらず、何をやっても「まだ足りない気がする」という感覚が続きます。やがて「これって意味あるの？」と疑問を持ち、やめてしまいます。`,
  },
  {
    id: "pattern-pace",
    icon: <Clock className="h-6 w-6 text-emerald-500" />,
    title: "挫折パターン4：「忙しくてペースを保てなかった」",
    body: `「毎日30分は学習しよう」と決めたものの、仕事が忙しくなると3日空き、1週間空き、気がついたら「もういいか」になってしまった——こうしたパターンは非常によくあります。

ペースを保てなかったのは、あなたの意志が弱いからではありません。設定したペースが高すぎただけです。`,
  },
] as const;

const comebackPatterns = [
  {
    number: "01",
    title: "目標を下げた",
    detail: "「使いこなす」ではなく「1週間に1つ使う」に目標を変えた人が続きました。小さな目標は達成しやすく、達成感が次の一歩を生みます。",
  },
  {
    number: "02",
    title: "仲間を作った",
    detail: "一人でやめた経験を持つ人が、コミュニティに入ることで続けられました。「自分だけじゃない」という安心感は、思った以上に大きな力になります。",
  },
  {
    number: "03",
    title: "最初から結果を求めなかった",
    detail: "「使いこなす」ではなく「試す楽しさ」に軸を置いた人が長続きしました。「AIに変なことを頼んでみる」くらいの遊び心が、意外と重要です。",
  },
  {
    number: "04",
    title: "今の仕事に直結した使い方から始めた",
    detail: "抽象的な学習より「今日の仕事でAIを使う」という方が効果を実感しやすいです。メール返信の下書き、会議メモの要約——小さな「役に立った」が積み重なります。",
  },
  {
    number: "05",
    title: "完璧にできなくてもいいという許可を自分に出した",
    detail: "「うまく使えていない」という罪悪感をなくした人が長続きしました。AIはプロンプトが下手でも答えを返してくれます。「下手でいい」という許可が、続けることを楽にします。",
  },
] as const;

const restartSteps = [
  {
    timeframe: "今日できること",
    icon: <Heart className="h-5 w-5 text-rose-500" />,
    action: "AIに「今日あった出来事を3行にまとめて」と頼んでみる",
    note: "それだけでいいです。結果が完璧じゃなくても大丈夫。「触った」という事実が大切です。",
  },
  {
    timeframe: "今週できること",
    icon: <RefreshCw className="h-5 w-5 text-blue-500" />,
    action: "一つの困りごとをAIに相談してみる",
    note: "「メールの返信に困っている」「この資料を要約したい」など、今週の実際の仕事から一つ選んで相談してみましょう。",
  },
  {
    timeframe: "今月できること",
    icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
    action: "一つの小さな成功体験を作る",
    note: "「AIのおかげで10分早く終わった」「AIが考えてくれた文章が採用された」——どんな小さなことでもOKです。その成功体験が、次の月のモチベーションになります。",
  },
] as const;

const stories = [
  {
    role: "30代・会社員（1年ぶりに再挑戦）",
    quote:
      "最初にやめたのは、毎日触らないといけないと思っていたから。再挑戦では「週に1回だけ使う」にしたら、気づいたら毎日使っていました。ハードルを下げることがこんなに大事だとは思わなかったです。",
  },
  {
    role: "40代・フリーランス（半年のブランク後）",
    quote:
      "前回は一人でやっていて、うまくいかなかったときに聞ける人がいなかった。アカデミーのコミュニティに入ってから、同じような挫折経験を持つ人が多くて安心しました。「自分だけじゃない」ってわかるだけで続けられる。",
  },
] as const;

export default function AiComebackGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-x-clip">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIを一度諦めた人が再挑戦できた理由" },
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
                className="rounded px-2 py-0.5 text-[10px] font-bold border"
                style={{
                  backgroundColor: ACADEMY_COLORS.bgSection,
                  color: ACADEMY_COLORS.textMuted,
                  borderColor: ACADEMY_COLORS.lineSoft,
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
            AIを一度諦めた人が<br className="hidden sm:block" />再挑戦できた理由
            <span className="block text-2xl sm:text-3xl mt-4 font-bold" style={{ color: ACADEMY_COLORS.textMuted }}>
              挫折と再スタートの分岐点【2026年版】
            </span>
          </h1>

          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-8"
            style={{ borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <div className="flex items-center gap-4">
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
              >
                <Calendar className="h-5 w-5" style={{ color: ACADEMY_COLORS.textMuted }} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ACADEMY_COLORS.textMuted }}>
                  Published on
                </p>
                <time className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                  2026年2月24日
                </time>
              </div>
            </div>

            <CopyAsMarkdownButton
              title="AIを一度諦めた人が再挑戦できた理由：挫折と再スタートの分岐点【2026年版】"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          <div
            className="mt-10 p-6 sm:p-10 rounded-xl border relative"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <Quote
              className="absolute top-6 right-8 h-12 w-12 opacity-5"
              style={{ color: ACADEMY_COLORS.accentMain }}
            />
            <p className="text-lg sm:text-xl leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              「一度やめてしまったAI学習、もう一度始められますか？」
            </p>
            <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              この記事では、AIを諦めた人が再挑戦できた理由と、できなかった人との違いを正直に分析します。「また始めてもどうせ同じ」と思っているあなたに、読んでほしい内容です。
            </p>
          </div>
        </motion.header>

        <div
          className="mt-12 p-6 rounded-xl border flex flex-wrap items-center gap-y-3 gap-x-1"
          style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
        >
          <BookOpen className="h-4 w-4 mr-2" style={{ color: ACADEMY_COLORS.accentMain }} />
          <span className="text-xs font-bold mr-2 uppercase tracking-wider" style={{ color: ACADEMY_COLORS.textMuted }}>
            Related topics:
          </span>
          <Link
            href="/academy/blog/ai-learning-dropout-prevention-guide"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            AI学習が続かない理由と対策
          </Link>
          <span className="mx-1" style={{ color: ACADEMY_COLORS.lineStrong }}>
            /
          </span>
          <Link
            href="/academy/blog/ai-anxiety-overcome-guide"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            AIへの不安を乗り越えるガイド
          </Link>
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
            <li>
              挫折は失敗ではなく、<strong>「タイミングと方法が合わなかった」</strong>だけです
            </li>
            <li>
              一度やめた人は<strong>「失敗の地図」を持っている</strong>——それが再挑戦の武器になります
            </li>
            <li>
              再挑戦に必要なのは「目標を下げること」「仲間を作ること」「完璧を求めないこと」の3つです
            </li>
            <li>
              2026年のAIは2023年より<strong>格段に使いやすくなっています</strong>——あのときより確実に簡単です
            </li>
          </ul>
        </motion.section>

        {/* AIをやめたあなたへ */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="opening" className="scroll-mt-28">
            AIをやめたあなたへ
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              AIを始めて、やめた。あなたはダメじゃない。
            </p>
            <p>
              AIに挑戦してやめた人の多くは、実はとても真剣に取り組んでいます。「毎日触ろう」「使いこなせるようになろう」と本気で考えていたからこそ、うまくいかないときに傷つき、やめてしまうのです。
            </p>
            <p>
              逆に、一度やめた経験を持つ人には、大きな強みがあります。それは<strong>「失敗の地図」を持っていること</strong>です。「あそこで詰まった」「あのやり方は続かなかった」という経験は、ゼロからの人には絶対にわかりません。
            </p>
            <div
              className="p-6 rounded-xl border-l-2"
              style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.accentMain }}
            >
              <p className="italic" style={{ color: ACADEMY_COLORS.textBody }}>
                実は、一度諦めた人が再挑戦して成功するケースは珍しくありません。なぜなら、失敗経験があるからこそ、次はうまくいくからです。
              </p>
            </div>
            <p>
              この記事では、「前と同じことを繰り返してしまうのではないか」という恐怖に正直に向き合い、再挑戦できた人とできなかった人の違いを具体的に見ていきます。
            </p>
          </div>
        </motion.section>

        {/* なぜ最初に挫折するのか */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="why-quit" className="scroll-mt-28">
            なぜ最初に挫折するのか——正直な分析
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            まずは、なぜ多くの人が最初のAI学習を途中でやめてしまうのかを整理します。以下の4つのパターンに当てはまるものはありますか？
          </p>
          <div className="mt-12 space-y-8">
            {failurePatterns.map((pattern) => (
              <section
                key={pattern.id}
                id={pattern.id}
                className="point-box scroll-mt-28 group transition-colors hover:border-orange-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone-50 border border-stone-100">
                    {pattern.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 border-none m-0">{pattern.title}</h4>
                </div>
                <div className="mt-4 whitespace-pre-line text-base leading-[1.8] text-stone-700">{pattern.body}</div>
              </section>
            ))}
          </div>
          <div
            className="mt-10 p-8 rounded-xl border"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <p className="text-base leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              これらのどれかに当てはまりましたか？
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              もし当てはまったなら、それは<strong>普通のことです</strong>。4つのパターンはすべて、あなたの性格や能力とは関係ありません。「環境」と「設計」の問題です。環境と設計を変えれば、結果は変わります。
            </p>
          </div>
        </motion.section>

        {/* 「また同じことになる」という恐怖に向き合う */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="fear" className="scroll-mt-28">
            「また同じことになる」という恐怖に向き合う
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              再挑戦を阻む最大の壁は、「また失敗したら傷つく」という恐怖です。
            </p>
            <p>
              この恐怖はとても自然なものです。一度傷ついた経験があるからこそ、身を守ろうとする。それは人間として当然の反応です。
            </p>
            <p>
              でも、少し視点を変えてみてください。今の状況は前と同じではありません。
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div
                className="p-6 rounded-xl border"
                style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-stone-400" />
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ color: ACADEMY_COLORS.textMuted }}>
                    前回の状況
                  </span>
                </div>
                <ul className="space-y-2 text-sm" style={{ color: ACADEMY_COLORS.textBody }}>
                  <li>• AIツールが今より扱いにくかった</li>
                  <li>• 日本語の情報が少なかった</li>
                  <li>• 学習リソースが整っていなかった</li>
                  <li>• 一人でやっていた</li>
                  <li>• 「使いこなす」という曖昧な目標</li>
                </ul>
              </div>
              <div
                className="p-6 rounded-xl border"
                style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.accentMain }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ color: ACADEMY_COLORS.accentMain }}>
                    今の状況
                  </span>
                </div>
                <ul className="space-y-2 text-sm font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                  <li>• ChatGPT・Claude等がさらに使いやすくなった</li>
                  <li>• 日本語コンテンツが大幅に増えた</li>
                  <li>• 体験してみた経験値がある</li>
                  <li>• 一人ではない選択肢がある</li>
                  <li>• 「何で詰まるか」を知っている</li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              2026年のAIは、2023年・2024年のAIより格段に使いやすくなっています。あのとき難しかったことが、今は簡単になっているケースも多い。
            </p>
            <p className="text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              そして何より、あなた自身も変わっています。一度経験した人は、「ゼロからのスタート」ではありません。前回の失敗から何かを学んでいる。その学びが、今回の糧になります。
            </p>
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
          <MidArticleCtaBox slug="ai-comeback-guide" />
        </motion.section>

        {/* 再挑戦できた人の5つの共通点 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="comeback-patterns" className="scroll-mt-28">
            再挑戦できた人の5つの共通点
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            一度やめた後に再挑戦し、今もAIを活用し続けている人たちには、いくつかの共通点があります。
          </p>
          <div className="mt-12 space-y-6">
            {comebackPatterns.map((pattern) => (
              <div
                key={pattern.number}
                className="flex flex-col sm:flex-row gap-6 p-8 rounded-xl border transition-all duration-300 hover:border-orange-200"
                style={{ borderColor: ACADEMY_COLORS.lineSoft, backgroundColor: ACADEMY_COLORS.bgPanel }}
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-bold text-2xl text-white"
                  style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                >
                  {pattern.number}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold m-0 border-none pb-0"
                    style={{ color: ACADEMY_COLORS.textStrong }}
                  >
                    {pattern.title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.8]" style={{ color: ACADEMY_COLORS.textBody }}>
                    {pattern.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 体験談 */}
          <div className="mt-16">
            <h3
              className="text-xl font-bold mb-8 border-none pb-0"
              style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}
            >
              実際に再挑戦した人の声
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {stories.map((story) => (
                <blockquote
                  key={story.role}
                  className="rounded-xl border bg-white p-8 relative overflow-hidden group hover:border-orange-200 transition-colors"
                  style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-stone-100 group-hover:bg-orange-400 transition-colors duration-300" />
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-stone-100"
                      style={{ color: ACADEMY_COLORS.textMuted }}
                    >
                      {story.role}
                    </span>
                  </div>
                  <p
                    className="text-base leading-[1.8] font-bold relative"
                    style={{ color: ACADEMY_COLORS.textStrong }}
                  >
                    {story.quote}
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ゆっくりでいい再スタートガイド */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="restart-guide" className="scroll-mt-28">
            ゆっくりでいい再スタートガイド
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            前と違うのは、今回は急がないことです。焦る必要はありません。
          </p>
          <div className="mt-12 space-y-8">
            {restartSteps.map((step, idx) => (
              <section key={step.timeframe} className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-bold text-xl text-white"
                    style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {step.icon}
                      <h3
                        className="text-xl font-bold m-0 border-none pb-0"
                        style={{ color: ACADEMY_COLORS.textStrong }}
                      >
                        {step.timeframe}
                      </h3>
                    </div>
                    <div
                      className="p-6 rounded-xl border"
                      style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
                    >
                      <p className="text-lg font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                        {step.action}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                        {step.note}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div
            className="mt-12 p-8 rounded-xl border"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <p className="text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              3ヶ月後には、「あのとき再挑戦してよかった」と思える自分がいるはずです。
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              前回との唯一の違いは「急がないこと」。今回はゆっくり、でも確実に進んでいきましょう。
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
          <div className="mt-10 divide-y border-t" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
            {faqItems.map((item) => (
              <div key={item.question} className="py-8 group">
                <dt className="text-lg font-bold leading-relaxed text-slate-900 flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-stone-100 text-[12px] font-bold text-stone-400 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                    Q
                  </span>
                  {item.question}
                </dt>
                <dd
                  className="mt-4 pl-11 text-base leading-relaxed flex items-start gap-4"
                  style={{ color: ACADEMY_COLORS.textBody }}
                >
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
          <Sparkles
            className="absolute -right-4 -top-4 h-32 w-32 opacity-5"
            style={{ color: ACADEMY_COLORS.accentMain }}
          />

          <h2
            id="summary"
            className="scroll-mt-28 text-2xl font-bold m-0 border-none pb-0"
            style={{ color: ACADEMY_COLORS.textStrong }}
          >
            まとめ：前と違う再スタートへ
          </h2>
          <p className="mt-8 text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
            諦めたことは、終わりではありません。「今はそのタイミングじゃなかっただけ」です。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "挫折は失敗ではなく「タイミングと方法が合わなかっただけ」",
              "一度経験した人は「失敗の地図」を持つ強さがある",
              "2026年のAIはあのときより使いやすくなっている",
              "目標を下げ、仲間を作り、完璧を求めないことが鍵",
              "今日できることは「今日あった出来事を3行にまとめて」と頼むだけでいい",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-4 p-4 rounded-lg border bg-white"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base font-bold" style={{ color: ACADEMY_COLORS.textBody }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              再挑戦を考えているなら、それはもうすでに動き出している証拠です。この記事を最後まで読んだあなたは、前回より確実に違う場所にいます。
            </p>
            <p
              className="text-2xl font-bold leading-tight tracking-tight"
              style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}
            >
              AIで人生をリブートする——<br />その再スタートを、今日踏み出してみませんか。
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
            title="再挑戦する人に寄り添う場所があります"
            description="「また始めたいけど、また同じことになりそうで怖い」——そんな気持ちを抱えているなら、LINEで無料相談を受け付けています。挫折経験のある方の相談も大歓迎です。一人で悩まないでください。"
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
          <h2
            id="academy-cta"
            className="scroll-mt-28 flex items-center gap-3 text-2xl font-bold"
            style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}
          >
            <Lightbulb className="h-8 w-8" style={{ color: ACADEMY_COLORS.accentMain }} />
            次のステップ：再挑戦を続けるために
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/ai-learning-dropout-prevention-guide"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-5 text-lg font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                AI学習が続く習慣を作る
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
        <section
          id="related-links"
          className={ACADEMY_SPACING.sectionPy + " border-t mt-24"}
          style={{ borderColor: ACADEMY_COLORS.lineSoft }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
            >
              <BookOpen className="h-5 w-5" style={{ color: ACADEMY_COLORS.textMuted }} />
            </div>
            <h2
              className="scroll-mt-28 m-0 border-none pb-0 text-2xl font-bold"
              style={{ color: ACADEMY_COLORS.textStrong }}
            >
              関連リンク
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/academy/blog/ai-learning-dropout-prevention-guide", label: "AI学習が続かない理由と対策" },
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "「AIが怖い・難しい」を乗り越えるガイド" },
              { href: "/academy/blog/chatgpt-claude-beginners-guide", label: "ChatGPT・Claude初心者ガイド" },
              { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTをスマホで始める方法" },
              { href: "/academy", label: "AIリブートアカデミー TOP" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between p-5 rounded-xl border transition-all group"
                  style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <span
                    className="text-sm font-bold transition-colors group-hover:text-[#d46a1f]"
                    style={{ color: ACADEMY_COLORS.textBody }}
                  >
                    {link.label}
                  </span>
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
