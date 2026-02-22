"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  BookOpen,
  Quote,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Heart,
  Timer,
  Smile,
  Frown,
  BarChart2,
  Star,
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

const keywordTags = ["AI 仕事 体験談", "生成AI 半年", "ChatGPT 仕事 変化", "AI 習慣化"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "before-180", label: "180日前の私：AI未経験のリアルな状態" },
  { id: "first-30days", label: "最初の30日：試行錯誤と失望" },
  { id: "31-90days", label: "31〜90日：少しずつ習慣になってきた" },
  { id: "91-180days", label: "91〜180日：本当の変化が見えてきた" },
  { id: "numbers", label: "数字で見る変化" },
  { id: "lost", label: "失ったもの・後悔していること" },
  { id: "gained", label: "得たもの・本当に良かったこと" },
  { id: "message", label: "180日後の私から後輩へ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const statsData = [
  {
    icon: <Timer className="h-6 w-6 text-will-primary" />,
    label: "週の作業時間削減",
    before: "週35時間",
    after: "週31時間",
    change: "−4時間/週",
    note: "メール・資料作成・調査の合計",
    positive: true,
  },
  {
    icon: <Star className="h-6 w-6 text-amber-500" />,
    label: "文章の出戻り回数",
    before: "月平均8回",
    after: "月平均3回",
    change: "−62%",
    note: "上司・取引先からの修正依頼",
    positive: true,
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-emerald-500" />,
    label: "企画・アイデア出し時間",
    before: "週2時間",
    after: "週5時間",
    change: "+3時間/週",
    note: "節約した時間を投資した領域",
    positive: true,
  },
  {
    icon: <Frown className="h-6 w-6 text-rose-500" />,
    label: "AIによる失敗・トラブル",
    before: "—",
    after: "6回",
    change: "正直に報告",
    note: "ハルシネーション混入3回、社内ルール確認漏れ2回、依存しすぎ1回",
    positive: false,
  },
] as const;

const lostThings = [
  {
    title: "「自分で考える」最初の衝動",
    body: "正直に言うと、AIを使い始めてから「まず自分で考える」という習慣が薄れた時期がありました。何かあればすぐChatGPTに聞く。悪い習慣ではないかもしれないけれど、自分の頭の筋力が落ちているような感覚があって、それは少し怖かった。今は「まず3分自分で考え、そのあとAIに確認する」というルールを作って対応しています。",
  },
  {
    title: "完璧な文章を書く達成感",
    body: "AIが下書きを作るようになってから、文章を一から自分で書いて「うまく書けた」という達成感を感じる機会が減りました。AIの助けを借りた文章は確かにクオリティが高い。でも、それは本当に「私が書いた」と言えるのか、という自問が今でもあります。",
  },
  {
    title: "「わからないこと」と向き合う時間",
    body: "調べればすぐにわかるようになったぶん、「わからないまま考え続ける」という経験が減りました。もやもやを抱えて眠って、翌朝ふとひらめく——そういう体験が明らかに少なくなっています。これが長期的に思考力にどう影響するか、まだわかりません。",
  },
] as const;

const gainedThings = [
  {
    icon: <TrendingUp className="h-5 w-5 text-emerald-500" />,
    title: "「考える時間」が増えた",
    body: "メール・資料・調査にかかっていた時間が週に4時間近く浮いた。その時間を、人と話すこと・企画を練ること・勉強することに使えるようになりました。「作業」から「思考」へ——この変化が、仕事への姿勢を変えた最大の要因です。",
  },
  {
    icon: <Star className="h-5 w-5 text-amber-500" />,
    title: "「完璧じゃなくていい」という感覚",
    body: "AIを使うと、まず「80点の下書き」が秒速で出てきます。そこから手直しするスタイルに慣れたことで、「最初から完璧を目指さなくていい」という感覚が身についた。これはAIとは関係ない場面でも生きていて、行動のスピードが上がりました。",
  },
  {
    icon: <Heart className="h-5 w-5 text-rose-500" />,
    title: "「道具を使いこなす」自信",
    body: "半年前の私は、AIはエンジニアや若い人のためのものだと思っていました。でも実際に使い続けて「私でもできた」という実績が積み重なって、新しいツールへの抵抗感が減った。「とりあえず触ってみればわかる」という姿勢が、仕事以外でも変わりました。",
  },
  {
    icon: <Lightbulb className="h-5 w-5 text-will-primary" />,
    title: "「AIが得意なこと・苦手なこと」を肌で知っている",
    body: "180日使って、AIが圧倒的に得意なこと（構造化、下書き、比較、要約）と、人間がやるべきこと（最終判断、感情の機微、オリジナルの視点）が体感でわかってきました。この「肌感覚」は、本を読んでも身につかない。使い続けた人だけが持てる財産です。",
  },
] as const;

const seniorMessages = [
  {
    title: "最初の1週間は「使えない」が正解",
    body: "最初から「すごく便利」とはならないと思います。私も最初の2週間は「これ本当に役立つの？」という疑念がありました。でも、使い方に慣れてくると変わります。最初の1週間は「練習期間」と割り切って、失敗を恐れずどんどん話しかけてみてください。",
  },
  {
    title: "「完璧な指示」より「対話」を大事にする",
    body: "「プロンプトが難しそう」という壁を感じている人へ。完璧な指示を考えるより、まず普通の言葉で話しかけて、AIの返答に「もっと○○して」と追加するほうが早く良い結果になります。AIとの会話は、試行錯誤のプロセスです。",
  },
  {
    title: "数字と固有名詞は必ず自分で確認する",
    body: "これは180日で得た最も大切なルールです。AIが出した数字・日付・人名・組織名は、必ず元ソースで確認してください。「それっぽい嘘」をAIは自信満々に言います。この習慣だけで、私が経験した6回の失敗のうち4回は防げました。",
  },
  {
    title: "「節約した時間」の使い道を決めておく",
    body: "AIで時間が浮いても、それをSNSや惰性に使ってしまうと意味がありません。私は「AIで浮いた時間は、人と話すことと勉強に使う」と決めていました。節約した時間の行き先を先に決めておくと、AI活用の効果が何倍にも膨らみます。",
  },
] as const;

export default function AiWorkWith180DaysDiaryPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-hidden">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIと仕事して180日" },
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
            AIと仕事して180日：<br className="hidden sm:block" />失ったもの・得たもの・<br className="hidden sm:block" />気づいたことをすべて話します
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
              title="AIと仕事して180日：失ったもの・得たもの・気づいたことをすべて話します"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          {/* アンサーボックス */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-slate-50/50 border border-slate-100 relative">
            <Quote className="absolute top-6 right-8 h-12 w-12 text-slate-200 -z-10 opacity-50" />
            <p className="text-xs font-bold text-will-primary uppercase tracking-widest mb-4">結論：この記事の即答</p>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-800 font-bold">
              「AIで仕事は変わったか？」——変わった。でも、想像とは違う形で。
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 font-medium">
              劇的な「時間ゼロ」にはならなかった。でも、仕事の質と、仕事への向き合い方は、確実に変わった。
              成功だけじゃない。失敗も、後悔も、正直に話します。
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              これは、普通の会社員が生成AIを使い始めて180日間、リアルに体験したことの記録です。
              「AIを使っている人の本音が聞きたい」——そう思っている方に届けたくて書きました。
            </p>
          </div>
        </motion.header>

        {/* 内部リンク */}
        <div data-seo-internal-links="true" className="mt-12 p-6 rounded-2xl border border-will-lighter bg-will-lighter/20 flex flex-wrap items-center gap-y-3 gap-x-1">
          <BookOpen className="h-4 w-4 text-will-primary mr-2" />
          <span className="text-sm font-bold text-slate-500 mr-2">関連テーマ：</span>
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">最初の30日ガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/chatgpt-advanced-tips" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">ChatGPT活用上級テクニック</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AIへの不安を乗り越えるガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-study-learning-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AI学習ガイド</Link>
          <span className="text-slate-300 mx-1">/</span>
          <Link href="/academy/blog/ai-side-business-guide" className="text-sm font-semibold text-will-primary hover:underline underline-offset-4">AIで副業をはじめる</Link>
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
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>週に<strong>4時間近くの作業時間</strong>が削減。その分を「考える仕事」に投資できるようになった</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>AIによる失敗は<strong>6回</strong>。最大の教訓は「数字・固有名詞は必ず自分で確認する」</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>「自分で考える習慣の低下」という<strong>負の側面も正直に</strong>体験した</span>
            </li>
            <li className="flex items-start gap-3 text-base leading-relaxed text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span>180日後の結論：<strong>AIは魔法ではないが、使い続けた人だけが得られる「肌感覚」がある</strong></span>
            </li>
          </ul>
        </motion.section>

        {/* 180日前の自分 */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="before-180" className="scroll-mt-28">
            180日前の私：AI未経験のリアルな状態
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              正直に言うと、半年前の私はAIに対して<strong className="text-will-primary">「自分には関係ない」</strong>と思っていました。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              仕事は営業事務。毎日やることは決まっていて、忙しいけど特別スキルが必要な仕事でもない。
              ChatGPTの名前は知っていたし、話題になっているのもわかっていたけれど、
              「エンジニアとかクリエイターが使うもの」と漠然と思っていた。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              転機は、同じチームの後輩が「ChatGPTで議事録作ったらめちゃ早かったです」と言い出したことです。
              え、議事録？それって私が毎回1時間かけてやっているやつ？
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-slate-300">
              <p className="text-base leading-relaxed text-slate-700 italic">
                その日の帰り道、スマホでChatGPTのアプリをダウンロードしました。
                使ったこともないのに、なんか取り残される気がして。
                これが、180日間の始まりです。
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              当時の私のスペック：AIツールの使用歴ゼロ、プログラミング知識なし、英語も普通程度。
              「普通の会社員」そのものでした。そんな私が180日間、AIと一緒に仕事してみた——
              その記録が、この記事です。
            </p>
          </div>
        </motion.section>

        {/* 最初の30日 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="first-30days" className="scroll-mt-28">
            最初の30日：試行錯誤と「これは使えない」という失望
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              本音を言えば、最初の2週間は<strong>「やっぱり私には無理だ」</strong>と思っていました。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              最初に試したのは議事録の要約。録音データをテキスト化したものをChatGPTに貼り付けて
              「議事録を作って」と送った。返ってきたのは……確かに整理されているけど、
              なんか違う。ニュアンスが抜けている。重要な決定事項が薄い。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              「やっぱりAIは万能じゃない」と、ちょっと安心した気持ちになったのを覚えています。
              正直、「使えない」と思うことで、自分がいなくなるかもしれないという不安から逃げていたのかもしれません。
            </p>
            <div className="grid gap-6 md:grid-cols-2 mt-10">
              <div className="rounded-2xl border border-rose-100 bg-rose-50/30 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Frown className="h-5 w-5 text-rose-500" />
                  <span className="text-sm font-bold text-rose-700">最初の1ヶ月でうまくいかなかったこと</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "「完璧な指示を出さないといけない」という思い込みで疲れた",
                    "AIが自信満々に答えた数字が間違っていた（最初の大きな失敗）",
                    "長い文章をそのままコピペして「何かいいこと言って」とざっくり聞いた",
                    "プロンプト集を読んで勉強しようとしたが続かなかった",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-2 text-sm text-slate-600">
                      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0 text-rose-400" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Smile className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-bold text-emerald-700">最初の1ヶ月でうまくいったこと</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "取引先へのお断りメールの下書きが10分で完成した",
                    "「もっと柔らかい表現にして」という追加指示が効くとわかった",
                    "週1回だけ、仕事の相談相手として使う習慣ができてきた",
                    "「AIに聞いてみよう」というファーストアクションが少し早くなった",
                  ].map((text) => (
                    <li key={text} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-400" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-base leading-relaxed text-slate-600 mt-6">
              最初の30日で気づいたのは、<strong>「使い方を覚えないといけない」のではなく、
              「対話の仕方を覚えればいい」</strong>ということ。
              AIは試験じゃない。うまい答えを一発で出す必要はなかった。
            </p>
          </div>
        </motion.section>

        {/* 31〜90日 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="31-90days" className="scroll-mt-28">
            31〜90日：少しずつ習慣になってきた頃
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              2ヶ月目に入ると、意識しなくてもAIを使っている自分に気づきました。
              「あ、<strong>これAIに聞けばいいか</strong>」という感覚。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              この頃から使い方が変わってきました。最初は「便利ツール」として使っていたのが、
              だんだん「壁打ち相手」として使うようになったんです。
            </p>
            <div className="p-6 sm:p-8 rounded-3xl border border-will-primary/10 bg-will-lighter/10 mt-8">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-none pb-0">この頃の使い方の変化</h3>
              <div className="space-y-6">
                {[
                  {
                    before: "「○○を作って」という依頼型",
                    after: "「○○について、私はこう考えているんですが、どう思いますか？」という対話型",
                  },
                  {
                    before: "一回で完成品を求めていた",
                    after: "まず粗い下書きを出してもらい、3〜4回のやり取りで仕上げる",
                  },
                  {
                    before: "AIが出した答えをそのまま使っていた",
                    after: "AIの答えを「たたき台」として、必ず自分の言葉で手直しする",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 p-4 rounded-xl bg-rose-50/50 border border-rose-100">
                      <p className="text-[11px] font-bold text-rose-600 uppercase tracking-widest mb-2">Before（最初の1ヶ月）</p>
                      <p className="text-sm text-slate-600">{item.before}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-300 self-center shrink-0 rotate-0 sm:rotate-0 hidden sm:block" />
                    <div className="flex-1 p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                      <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-2">After（2〜3ヶ月目）</p>
                      <p className="text-sm text-slate-600">{item.after}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-base leading-relaxed text-slate-600 mt-6">
              60日目頃には、毎週金曜日に「今週の仕事を振り返る」という使い方が定着していました。
              「今週うまくいったこと・いかなかったことを整理して、来週の優先事項を3つあげて」。
              これが今でも週イチの習慣として続いています。
            </p>
          </div>
        </motion.section>

        {/* 91〜180日 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="91-180days" className="scroll-mt-28">
            91〜180日：本当の変化が見えてきた
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              3ヶ月を超えたあたりで、初めて<strong>「仕事のやり方が変わった」</strong>と実感しました。
              変わったのは仕事の量や速さだけじゃなかった。仕事への関わり方が変わった。
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              以前は、毎日の業務の8割が「決まった作業をこなすこと」でした。
              AIを使い始めてから、その割合が7割くらいになった感覚があります。
              たった1割の差かもしれないけれど、その1割で「考える時間」が生まれた。
            </p>

            <div className="mt-10 space-y-8">
              {[
                {
                  phase: "100日目：初めて後輩に「これAIで作ったんだよ」と言えた",
                  body: "それまでは「AIを使っている」と言うのが少し恥ずかしかった。でも、100日目に後輩から「この企画書、すごく構成がわかりやすいですね」と言われて、「実はAIと一緒に作ったんだよね」と自然に言えた。それが妙に嬉しかった。",
                },
                {
                  phase: "130日目：AIなしで仕事したら、逆に気づいた",
                  body: "出張で数日間、スマホのAIアプリが使えない状況になりました。久々にAIなしで資料を作ってみて気づいたのは、「私は確かに変わっている」ということ。以前より構成を考えるスピードが上がっていた。AIとの対話を重ねた経験が、自分の思考パターンに影響していたんだと思います。",
                },
                {
                  phase: "160日目：上司に「何か変わった？」と聞かれた",
                  body: "会議の準備資料が以前より質が上がっていることに、上司が気づいたようでした。「最近、どうやって仕事してるの？」と聞かれて、正直にAIを使っていると話したら、「それ、チームに共有してほしい」という流れになった。個人の習慣が、チームの話題になった瞬間でした。",
                },
              ].map((item) => (
                <div key={item.phase} className="point-box group hover:shadow-elevated transition-shadow duration-300">
                  <h4 className="text-base font-bold text-will-primary border-none m-0 mb-3">{item.phase}</h4>
                  <p className="text-[15px] leading-8 text-slate-700">{item.body}</p>
                </div>
              ))}
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
          <MidArticleCtaBox slug="ai-work-with-ai-180days-diary" />
        </motion.section>

        {/* 数字で見る変化 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="numbers" className="scroll-mt-28">
            数字で見る変化：週の作業時間、品質、ストレス
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            できるだけ正直に数字で整理してみました。感覚的な話だけでは信頼できないと思うので。
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {statsData.map((stat) => (
              <div key={stat.label} className={`rounded-2xl border p-6 ${stat.positive ? "border-emerald-100 bg-emerald-50/30" : "border-rose-100 bg-rose-50/30"}`}>
                <div className="flex items-center gap-3 mb-4">
                  {stat.icon}
                  <span className="text-sm font-bold text-slate-700">{stat.label}</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Before</p>
                    <p className="text-lg font-bold text-slate-600">{stat.before}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-300" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">After</p>
                    <p className="text-lg font-bold text-slate-800">{stat.after}</p>
                  </div>
                </div>
                <div className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold ${stat.positive ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>
                  {stat.positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stat.change}
                </div>
                <p className="mt-3 text-xs text-slate-400">{stat.note}</p>
              </div>
            ))}
          </div>
          <div className="caution-box mt-10 bg-amber-50/30 border-amber-100">
            <h4 className="flex items-center gap-2 text-amber-900 border-none">
              <AlertCircle className="h-5 w-5" />
              この数字について一言
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-amber-800/80">
              これはあくまで私個人の体験数値です。仕事の種類や環境によって大きく異なります。
              「週4時間削減できる」と保証するものではありません。ただ、私は確かにこれだけ変わった。
              それが誰かの参考になれば。
            </p>
          </div>
        </motion.section>

        {/* 失ったもの */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="lost" className="scroll-mt-28">
            失ったもの・後悔していること（正直に）
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            良いことだけ書くのは嘘になります。180日間で感じた「負の側面」も正直に記録しておきます。
          </p>
          <div className="mt-10 space-y-8">
            {lostThings.map((item) => (
              <div key={item.title} className="rounded-2xl border border-rose-100 bg-white p-8 relative overflow-hidden group hover:shadow-soft transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-200 group-hover:bg-rose-400 transition-colors duration-300" />
                <div className="pl-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Frown className="h-5 w-5 text-rose-400" />
                    <h3 className="text-lg font-bold text-slate-900 m-0 border-none pb-0">{item.title}</h3>
                  </div>
                  <p className="text-[15px] leading-8 text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-base leading-relaxed text-slate-700 font-medium">
              あの頃の自分に伝えるなら：「失うものがあっても、それを知った上で使い続けることが大切」。
              AIは万能じゃない。でも、問題を知っているなら対策できる。
              知らないまま使い続けるより、正直に向き合った方が長続きします。
            </p>
          </div>
        </motion.section>

        {/* 得たもの */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="gained" className="scroll-mt-28">
            得たもの・本当に良かったと思うこと
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            失ったものを正直に書いたので、得たものも正直に書きます。これが180日間続けた理由です。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {gainedThings.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-soft relative overflow-hidden group hover:shadow-elevated transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 m-0 border-none pb-0">{item.title}</h3>
                </div>
                <p className="text-[14px] leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 後輩へのメッセージ */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="message" className="scroll-mt-28">
            180日経った今、後輩に伝えるとしたら
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            私がAIを使い始めたとき、正直な先輩の声が聞きたかった。
            だから、これから始める人へ、ありのままを伝えます。
          </p>
          <div className="mt-10 space-y-8">
            {seniorMessages.map((item, idx) => (
              <div key={item.title} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-will-primary text-white font-black text-xl shadow-floating shadow-will-primary/20">
                  {idx + 1}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-8 text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 体験談 */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-slate-900 mb-8">同じように始めた人たちの声</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  role: "30代・営業事務",
                  quote: "最初の3週間は「これ本当に使えるのかな」と半信半疑でした。でも2ヶ月目から、メールの返信が明らかに速くなって、上司に「最近仕事のテンポが上がったね」と言われた。続けてよかった。",
                },
                {
                  role: "40代・中小企業の管理職",
                  quote: "「若い人のツール」と思っていたのに、実際使ってみたら会議の事前準備が変わった。論点整理をAIに手伝ってもらうようになって、会議が短くなった。部下にも勧めています。",
                },
                {
                  role: "50代・フリーランスのライター",
                  quote: "書くことを仕事にしているのにAIに頼っていいのか悩みました。でも、調査や構成の整理はAIに任せて、文章の中身は自分が作る、という分担ができてから、むしろ質が上がりました。",
                },
                {
                  role: "20代・新卒2年目の社会人",
                  quote: "先輩より早くAI使い始めたことで、逆に「教えてほしい」と言われるようになった。最初から上手に使えなくてもいい。続けることで見えてくるものがある、と実感しています。",
                },
              ].map((story) => (
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
          className="mt-24 rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-10 sm:p-14 shadow-soft relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <Sparkles className="absolute -right-4 -top-4 h-32 w-32 text-will-primary/5" />

          <h2 id="summary" className="scroll-mt-28 text-2xl font-black text-slate-900 m-0 border-none pb-0">
            まとめ：180日間の正直な結論
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-700 font-medium">
            AIと仕事して180日。一言で言うなら——<strong>「思っていたより地味で、思っていたより深かった」</strong>。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "AIは魔法じゃない。でも、使い続けた人だけが得られる「肌感覚」は本物",
              "週4時間の削減は小さいようで、半年で100時間以上。その時間で仕事が変わった",
              "失ったものもある。「自分で考える最初の衝動」は意識的に守る必要がある",
              "AIが得意なことと人間がやるべきことは、使い続けることでしかわからない",
              "始めるのに遅すぎることはない。でも、明日より今日始めた人が半年後に差をつける",
            ].map((text) => (
              <div key={text} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-subtle">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base font-semibold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              あの日、後輩の一言がなければ、私は今でもAIを「自分には関係ない」と思っていたかもしれません。
              この記事を読んでいるあなたが、今それと同じ場所に立っているなら——
            </p>
            <p className="text-2xl font-black leading-tight text-slate-900 tracking-tight">
              まず1ヶ月だけ試してみてください。<br />
              180日後、「あのとき始めてよかった」と思えると、私は信じています。
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
            title="あなたの180日を、一緒に始めませんか"
            description="「まず1ヶ月だけ試してみよう」から始まったAI活用が、半年後に仕事を変えました。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラム。LINEで無料相談を受け付けています。"
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
            「自分もこのくらい変わってみたい」と感じたなら、次のステップに進んでみましょう。
            まず30日間の習慣化から始めると、仕事への変化が実感しやすくなります。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/ai-first-30-days-work-guide"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900 px-8 py-5 text-lg font-bold text-white shadow-elevated transition-all hover:scale-[1.02] hover:bg-slate-800 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                最初の30日ガイドを読む
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
              { href: "/academy/blog/ai-first-30-days-work-guide", label: "仕事でAIを使う最初の30日ガイド" },
              { href: "/academy/blog/chatgpt-advanced-tips", label: "ChatGPT上級活用テクニック" },
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "「AIが怖い・難しい」を乗り越えるガイド" },
              { href: "/academy/blog/ai-study-learning-guide", label: "AIで学習効率を上げる方法" },
              { href: "/academy/blog/chatgpt-custom-instructions-guide", label: "ChatGPTカスタム指示の使い方" },
              { href: "/academy/blog/ai-side-business-guide", label: "AIで副業をはじめるガイド" },
              { href: "/academy/blog/reskilling-over-40", label: "40代・50代からのAIリスキリング" },
              { href: "/academy/blog/ai-free-plan-comparison-2026", label: "AIツール無料プラン比較2026" },
              { href: "/academy/blog/chatgpt-claude-beginners-guide", label: "ChatGPT・Claude初心者ガイド" },
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
