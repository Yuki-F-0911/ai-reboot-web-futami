"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  MessageSquare,
  RefreshCw,
  Users,
  Layers,
  Smile,
  Calendar,
  BookOpen,
  Quote,
  Sparkles,
  ChevronRight,
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

const keywordTags = ["ChatGPT 使い方 間違い", "AI 初心者 失敗", "生成AI うまくいかない", "ChatGPT 使いこなせない"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "intro", label: "「思ったより普通だった」の正体" },
  { id: "mistakes", label: "5つのミスと正しい使い方" },
  { id: "mentality", label: "ミスしながら上達するメンタリティ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const mistakes = [
  {
    id: "mistake-1",
    number: 1,
    icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
    title: "「一言しか入力しない」問題",
    badExample: "旅行先を教えて / メール書いて",
    badReason:
      "AIは聞いたことにしか答えられません。情報が少なければ、出力も当然粗くなります。「旅行先を教えて」では、あなたの予算も目的地も家族構成も好みもわからないため、当たり障りのない一般的な答えしか返せません。",
    goodTitle: "詳しく聞けば、詳しく答えてくれる",
    goodExample:
      "5月に東京から福岡に3泊4日の家族旅行。予算10万円。子供は7歳と10歳。海より山が好き。おすすめの観光地を5つ教えて",
    goodExplanation:
      "これだけ情報を与えると、AIは状況に合わせた具体的な提案を返してくれます。最初から完璧な指示を書く必要はありません。まず書いてみて、「もっと具体的に」と追加情報を加えていくだけでも十分です。",
  },
  {
    id: "mistake-2",
    number: 2,
    icon: <RefreshCw className="h-6 w-6 text-amber-500" />,
    title: "「一度で完璧な答えを期待する」問題",
    badExample: "最初の回答が微妙だった → 「やっぱりAIって使えない」",
    badReason:
      "AIとの会話は「往復」が基本です。最初の回答はあくまでもスタートライン。1回のやりとりで完成を期待するのは、初対面の人に「私が欲しいものを全部察してください」と言うようなものです。",
    goodTitle: "10回のやりとりで完成させる、という心構えで",
    goodExample:
      "「もっと具体的にして」「〇〇の部分は別のアプローチで」「もう少し丁寧な言い方に変えて」「全体を短くして」",
    goodExplanation:
      "こうした追加指示を重ねるたびに、アウトプットは確実によくなっていきます。10回のやりとりで完成したものは、1回で作ったものより格段に質が高い。「往復を楽しむ」くらいの感覚で使ってみてください。",
  },
  {
    id: "mistake-3",
    number: 3,
    icon: <Layers className="h-6 w-6 text-rose-500" />,
    title: "「AIに全部お任せしようとする」問題",
    badExample: "長い資料作成を一発で依頼する / ビジネスメールを完全に任せる",
    badReason:
      "AIが生成したものをチェックなしで使うと、事実誤認・ニュアンスの違い・あなたらしさの欠如が起きます。特にビジネス文書は、あなたの会社・相手・関係性の文脈をAIは知らないため、そのまま使うのは危険です。",
    goodTitle: "「素材を作ってもらって、自分で仕上げる」役割分担",
    goodExample: "AIに骨子・下書き・アイデアを出してもらい、最後の10%は自分で手を入れる",
    goodExplanation:
      "AIは「考えることを助けるツール」であり「考えを代替するもの」ではありません。AIが作った80〜90%の土台に自分の視点・判断・温度感を加える。この分業を意識するだけで、アウトプットの質と安全性が大きく変わります。",
  },
  {
    id: "mistake-4",
    number: 4,
    icon: <Users className="h-6 w-6 text-emerald-500" />,
    title: "「同じAIしか使わない（または使い分けない）」問題",
    badExample: "ChatGPTだけ使って「AIの実力はこんなもの」と思い込む",
    badReason:
      "ChatGPT、Claude、Geminiはそれぞれ得意不得意が異なります。1つのツールの使い心地だけで「AIってこんなもの」と判断するのは、1つのレストランで外食を諦めるようなものです。",
    goodTitle: "慣れてきたら、他のAIも試してみる",
    goodExample: "ChatGPT：汎用で使いやすく、最初の1本に最適 / Claude：長文・思慮深い回答が得意 / Gemini：Googleの最新情報と統合",
    goodExplanation:
      "最初の1〜2週間はChatGPTに集中するのがベストです。1つのツールで「AIとの会話の感覚」を掴んでから他を試す方が、比較もしやすい。「ChatGPTでなんかしっくりこない」と感じたら、Claudeを試すタイミングです。",
  },
  {
    id: "mistake-5",
    number: 5,
    icon: <Smile className="h-6 w-6 text-purple-500" />,
    title: "「難しいことを頼もうとする」問題",
    badExample: "いきなり「私の人生相談に乗ってください」「複雑な法律問題を解決して」",
    badReason:
      "AI初心者がまず掴むべきは「小さな成功体験」です。最初から難しいことを頼むと失敗体験になりやすく、「やっぱりAIは使えない」という間違った結論につながります。",
    goodTitle: "最初の1週間は「小さなタスク」から始める",
    goodExample:
      "「今日の夕食のレシピを3つ提案して」「このメールの件名を3パターン考えて」「この文章の誤字を直して」「この会議の議題を箇条書きにして」",
    goodExplanation:
      "小さなタスクで成功体験を積み重ねると、AIの使い方が自然と身についていきます。「使えた！」という実感が増えれば、より複雑なタスクへの挑戦も怖くなくなります。",
  },
] as const;

export default function AiFirstWeekMistakesGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-x-clip">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "最初の1週間でやりがちな5つのミス" },
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
            AIを使い始めた最初の1週間で<br className="hidden sm:block" />やりがちな5つのミス【2026年版】
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
                  2026年2月23日
                </time>
              </div>
            </div>

            <CopyAsMarkdownButton
              title="AIを使い始めた最初の1週間でやりがちな5つのミス【2026年版】"
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
              「ChatGPTを試してみたけど、なんか思ったより普通だったな...」
            </p>
            <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              そう感じたことはありませんか？実は、多くの人が最初の1週間で同じパターンのミスをしています。これはあなたの能力の問題ではなく、「使い方」の問題です。今日はその5つのミスを正直に話します。<strong>あなたも必ずどれかに当てはまるはずです。</strong>
            </p>
          </div>
        </motion.header>

        <div
          className="mt-12 p-6 rounded-xl border flex flex-wrap items-center gap-y-3 gap-x-1"
          style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
        >
          <BookOpen className="h-4 w-4 mr-2" style={{ color: ACADEMY_COLORS.accentMain }} />
          <span
            className="text-xs font-bold mr-2 uppercase tracking-wider"
            style={{ color: ACADEMY_COLORS.textMuted }}
          >
            Related topics:
          </span>
          <Link
            href="/academy/blog/chatgpt-prompt-beginner"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            プロンプトの書き方入門
          </Link>
          <span className="mx-1" style={{ color: ACADEMY_COLORS.lineStrong }}>
            /
          </span>
          <Link
            href="/academy/blog/ai-anxiety-overcome-guide"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            AIが怖い・難しいを乗り越えるガイド
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
              AIが「使えない」と感じるのは能力の問題ではなく、<strong>「使い方のパターン」</strong>の問題がほとんどです
            </li>
            <li>
              最初の1週間でやりがちな5つのミス（一言入力・一発期待・丸投げ・1ツール固定・難問から始める）を意識するだけで、体験が変わります
            </li>
            <li>
              ミスをしたということは、使い始めた証拠。<strong>使わない人より断然前進しています</strong>
            </li>
          </ul>
        </motion.section>

        {/* 「思ったより普通だった」の正体 */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="intro" className="scroll-mt-28">
            「思ったより普通だった」の正体
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              ChatGPTを初めて使った人の多くが「意外と普通だな」と感じます。これは、AIが普通だからではありません。
            </p>
            <p style={{ color: ACADEMY_COLORS.textBody }}>
              原因はシンプルです。「初めてのレストランで、メニューを見ずに『なんか美味しいもの出して』と頼む」ようなことをしているのです。AIは確かに優れていますが、適切な使い方を知っていないと、その実力の10分の1も引き出せません。
            </p>
            <div
              className="p-6 rounded-xl border-l-2"
              style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.accentMain }}
            >
              <p className="italic" style={{ color: ACADEMY_COLORS.textBody }}>
                「使えない」と感じた人の9割は、使い方に少しだけ問題があっただけです。今日その5つのパターンを整理しましょう。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 5つのミスと正しい使い方 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="mistakes" className="scroll-mt-28">
            5つのミスと正しい使い方
          </h2>
          <div className="mt-12 space-y-12">
            {mistakes.map((mistake) => (
              <section
                key={mistake.id}
                id={mistake.id}
                className="point-box scroll-mt-28 group transition-colors hover:border-orange-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-stone-50 border border-stone-100">
                    {mistake.icon}
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest block"
                      style={{ color: ACADEMY_COLORS.accentMain }}
                    >
                      MISTAKE {mistake.number}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 border-none m-0 mt-0.5">{mistake.title}</h4>
                  </div>
                </div>

                {/* 悪い例 */}
                <div
                  className="mb-6 rounded-lg border p-4"
                  style={{ backgroundColor: "#fff5f5", borderColor: "#fecaca" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-rose-500 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600">よくある例</span>
                  </div>
                  <p className="text-sm font-bold text-rose-800">{mistake.badExample}</p>
                </div>

                {/* 問題の説明 */}
                <p className="text-base leading-[1.8] mb-6" style={{ color: ACADEMY_COLORS.textBody }}>
                  {mistake.badReason}
                </p>

                {/* 正しい使い方 */}
                <div
                  className="rounded-lg border p-5"
                  style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      {mistake.goodTitle}
                    </span>
                  </div>
                  <p
                    className="text-sm font-bold mb-3 p-3 rounded border-l-2"
                    style={{
                      color: ACADEMY_COLORS.textStrong,
                      backgroundColor: "white",
                      borderColor: ACADEMY_COLORS.accentMain,
                    }}
                  >
                    {mistake.goodExample}
                  </p>
                  <p className="text-sm leading-[1.8]" style={{ color: ACADEMY_COLORS.textBody }}>
                    {mistake.goodExplanation}
                  </p>
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
          <MidArticleCtaBox slug="ai-first-week-mistakes-guide" />
        </motion.section>

        {/* ミスしながら上達するメンタリティ */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="mentality" className="scroll-mt-28">
            「ミスしながら上達する」というメンタリティ
          </h2>
          <div className="mt-10 space-y-6" style={{ color: ACADEMY_COLORS.textBody }}>
            <p className="text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              ミスをしたということは、使い始めた証拠です。使わない人より断然前進しています。
            </p>
            <p>
              AIは練習すれば必ず上達します。コツは「今日試すこと」です。「うまく使えないAIユーザー」より「たくさん試すAIユーザー」の方が、確実に早く伸びます。
            </p>
            <div className="grid gap-4 sm:grid-cols-3 mt-8">
              {[
                {
                  title: "今日試す",
                  body: "完璧な準備を待たず、まず1つタスクをAIに頼んでみる",
                },
                {
                  title: "失敗を記録する",
                  body: "「なんかうまくいかなかったな」と感じたら、どう指示を変えたか試してみる",
                },
                {
                  title: "成功を繰り返す",
                  body: "うまくいった指示は保存しておいて、次回も使い回す",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border p-6 bg-white"
                  style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <h4 className="text-base font-bold mb-3 m-0 border-none" style={{ color: ACADEMY_COLORS.textStrong }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-[1.8]" style={{ color: ACADEMY_COLORS.textBody }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="mt-8 p-6 rounded-xl border"
              style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
            >
              <p className="text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                一人で悩まず、同じ立場の仲間と一緒に上達できる環境があります。
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                AIリブートアカデミーでは、初めてAIを使う方が「失敗しても大丈夫」な環境で、実践的な使い方を学べます。同じ悩みを持つ仲間たちと一緒に、最初の壁を乗り越えましょう。
              </p>
            </div>
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
                  className="mt-4 pl-11 text-base leading-relaxed"
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
            まとめ：今からでも、全然遅くない
          </h2>
          <p className="mt-8 text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
            AIを使い始めた最初の1週間でつまずくのは、ごくふつうのことです。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "詳しく聞けば、詳しく答えてくれる",
              "最初の回答はスタートライン。往復を重ねて完成させる",
              "AIに全部任せず、最後の10%は自分で手を入れる",
              "1ツールで「AIの限界」を決めつけない",
              "最初は小さなタスクから成功体験を積む",
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
              この5つを意識するだけで、AIとの付き合い方はがらりと変わります。今日、もう一度ChatGPTを開いてみてください。
            </p>
            <p
              className="text-2xl font-bold leading-tight tracking-tight"
              style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}
            >
              ミスしながら上達する——<br />それが、AIを使いこなす一番の近道です。
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
            title="一人で悩まず、仲間と一緒に上達しませんか"
            description="「この記事を読んで、もっとちゃんと学びたい」という方に、LINEで無料相談を受け付けています。AIの使い方から学び方まで、専門スタッフが一緒に整理します。"
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
              style={{
                backgroundColor: ACADEMY_COLORS.bgPanel,
                borderColor: ACADEMY_COLORS.lineSoft,
                color: ACADEMY_COLORS.textBody,
              }}
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
              { href: "/academy/blog/chatgpt-prompt-beginner", label: "ChatGPTプロンプトの書き方入門" },
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "「AIが怖い・難しい」を乗り越えるガイド" },
              { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTをスマホで始める方法" },
              { href: "/academy/blog/ai-for-non-engineers", label: "文系・非エンジニアのAI活用ガイド" },
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
