"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  Users,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Calendar,
  Clock,
  BookOpen,
  Quote,
  Sparkles,
  ChevronRight,
  XCircle,
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

const keywordTags = ["職場 AI 導入", "社内 AI 普及", "上司 AI 説得", "AI 社内ルール"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-difficult", label: "なぜ職場でのAI普及は難しいのか" },
  { id: "boss-proposal", label: "上司への提案の仕方" },
  { id: "colleague-approach", label: "抵抗感のある同僚への伝え方" },
  { id: "internal-rules", label: "社内ルール整備の始め方" },
  { id: "small-wins", label: "小さな成功事例を作って広める戦略" },
  { id: "failure-patterns", label: "やってはいけない失敗パターン" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const threeWalls = [
  {
    id: "wall-fear",
    icon: <AlertCircle className="h-6 w-6 text-amber-500" />,
    title: "壁1：変化への恐怖（人間の本能）",
    body: `人間の脳は「変化」を潜在的な脅威として認識します。これは生存本能として進化した反応であり、新しい技術が職場に入ってくるときに必ずと言っていいほど現れます。

「今のやり方で十分」「慣れたツールの方が早い」「何かトラブルが起きたら誰が責任を取るのか」——こうした言葉の裏には、変化そのものへの不安が潜んでいます。

この壁を壊そうとしてはいけません。まず「変化が怖いのは自然なことだ」と受け入れ、そこから話を始めることが大切です。`,
  },
  {
    id: "wall-job",
    icon: <Users className="h-6 w-6 text-rose-500" />,
    title: "壁2：「AIに仕事を奪われる」という誤解",
    body: `「AIを入れたら自分の仕事がなくなる」——この誤解は、多くの職場で導入の最大の障壁になっています。

しかし現実はそうではありません。AIは業務の「一部」を自動化・効率化するツールです。完全な代替ではなく、補助です。

上司や同僚がこの誤解を持っている場合、「AIを入れてコストを削減する」という言い方は厳禁です。「AIを使って、今以上に大事な仕事に集中できるようにする」というフレームで伝えましょう。`,
  },
  {
    id: "wall-envy",
    icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
    title: "壁3：「自分だけ得をしている」という嫌悪感",
    body: `「あの人だけAIを使って仕事が楽になっている」「不公平だ」——このような感情は、組織の中でAI利用者が少数派のときに起きやすいものです。

これを防ぐには、AIで得た時間や成果を「自分だけのもの」にせず、チームに還元する姿勢を見せることが重要です。

「AIを使って効率化できた分、みんなのために使いたい」というスタンスで動くことで、嫌悪感ではなく好奇心を引き出すことができます。`,
  },
] as const;

const bossProposalExamples = [
  {
    label: "❌ やってはいけない言い方",
    bg: "#fff5f5",
    border: "#fecaca",
    textColor: "#991b1b",
    examples: [
      "「AIを使いましょう！すごく便利ですよ！」→ 抽象的すぎて伝わらない",
      "「ChatGPTって知ってますか？無料で使えて何でもできます」→ 期待値が高すぎる",
      "「他社はもうAI使ってますよ。うちも乗り遅れますよ」→ 焦らせる言い方は反発を招く",
    ],
  },
  {
    label: "✅ 正しい提案の仕方（業務課題→ソリューション）",
    bg: "#f0fdf4",
    border: "#86efac",
    textColor: "#14532d",
    examples: [
      "「○○の業務で毎週3時間かかっているのですが、AIを使えば30分に短縮できるかもしれません。試してみていいですか？」",
      "「議事録の作成が毎回1時間かかっています。AIを使ったら10分になりました。チームに展開してもいいですか？」",
      "「来月の提案書、AIで骨子を作ってみましたが確認していただけますか？どこまで使えそうか判断していただければと思います」",
    ],
  },
] as const;

const colleagueTips = [
  {
    id: "tip-no-force",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />,
    title: "鉄則：強制しない・勧誘しない",
    body: `「AIを使わないと時代に乗り遅れる」「一緒に使おうよ」という言い方は、相手を追い詰めます。

人は「やらされる」のが嫌いです。自分で「やってみようかな」と思わせることが成功の鍵です。

まず自分が成果を出して見せる。それだけで十分です。`,
  },
  {
    id: "tip-natural",
    icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
    title: "自然な成功体験の共有",
    body: `会議や雑談の中で、さりげなく話す機会を作りましょう。

例えば：
・「昨日の報告書、AIで下書きしたら30分で書けたんですよね」
・「このデータ整理、AIに頼んだら10分でできました」
・「プレゼン資料の構成、ChatGPTに相談したら面白いアイデアが出てきました」

押しつけがましくなく、ただ「自分の体験」として話すだけで、相手の好奇心を刺激できます。`,
  },
  {
    id: "tip-demo",
    icon: <Lightbulb className="h-6 w-6 text-amber-500" />,
    title: "「試してみる？」のその場デモが最強",
    body: `同僚が「ちょっと気になる」という雰囲気を見せたら、すぐにその場でデモをしましょう。

「ちょっと見て。この作業、AIに頼んだらこうなるんですよ」と実際に見せる体験は、どんな説明よりも効果的です。

百聞は一見にしかず。30秒のデモが、相手の「壁」を崩すことがあります。`,
  },
  {
    id: "tip-timing",
    icon: <Clock className="h-6 w-6 text-rose-500" />,
    title: "相手が困っているタイミングを待つ",
    body: `同僚が作業で詰まっているとき、残業で疲れているとき——そのタイミングで「その作業、AIに聞いてみたら早いかも」と声をかけましょう。

人は問題を抱えているとき、解決策に耳を傾けやすくなります。

「困っていないときに勧める」のではなく、「困っているときに手を差し伸べる」姿勢が信頼につながります。`,
  },
] as const;

const ruleItems = [
  {
    category: "入力してはいけない情報",
    items: [
      "個人情報（氏名・住所・電話番号・マイナンバー）",
      "取引先の機密情報・未公開財務情報",
      "社外秘と指定された社内資料",
      "パスワード・アクセスキーなどの認証情報",
    ],
  },
  {
    category: "使用可能なツールの決め方",
    items: [
      "無料プラン利用時は学習オプトアウト設定を確認",
      "企業向けプラン（ChatGPT Enterprise等）は学習に使われない",
      "社外サービスの利用には上長承認を必要とする",
      "新しいAIツール導入時は情報システム部門に確認",
    ],
  },
  {
    category: "出力結果の確認ルール",
    items: [
      "数字・固有名詞は必ず公式ソースで裏取りする",
      "AI出力をそのまま提出・公開しない（必ず人が確認）",
      "重要書類はAI下書き→担当者レビュー→承認のフロー",
      "AI生成物を使った場合は社内共有時にその旨を明記",
    ],
  },
] as const;

const failurePatterns = [
  {
    pattern: "全社一斉導入を最初から目指す",
    reason: "上層部の承認取得、全部門の合意形成、教育コストで疲弊して頓挫します。まず1チーム、1プロジェクトから。",
  },
  {
    pattern: "「AIって何でもできる」という期待値を高めすぎる",
    reason: "「AIに聞けば全部解決」という期待で始めると、最初の失敗で心が折れます。「補助ツール」として正直に伝えましょう。",
  },
  {
    pattern: "禁止されていないからといって勝手に使い続ける",
    reason: "社内ルールが未整備でも、情報漏洩リスクは存在します。ガイドライン整備の提案と並行して進めましょう。",
  },
  {
    pattern: "成功体験を独り占めして共有しない",
    reason: "自分だけ効率化して「ラッキー」で止まると、組織全体の利益を取り逃します。成果はチームに還元してこそ。",
  },
] as const;

const stories = [
  {
    role: "30代・マーケティング担当",
    quote: "「月に10時間かかってたレポート作成、AIで2時間になりました」と上司に報告したら、「え、本当に？もっと詳しく教えて」って。数字で見せると全然違いますね。",
  },
  {
    role: "40代・プロジェクトマネージャー",
    quote: "最初は同僚に冷たくされた。「AIって怪しくない？」って。でも会議の議事録をその場でAIに要約させて見せたら、「これ便利じゃん」って翌日から使い始めてましたよ。",
  },
] as const;

export default function AiWorkplaceIntroductionGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-x-clip">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "職場でAIを広めたい：上司・同僚を説得する方法" },
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
            職場でAIを広めたい：<br className="hidden sm:block" />
            上司・同僚を説得する実践的な方法と、<br className="hidden sm:block" />
            社内導入でつまずかないための準備【2026年版】
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
              title="職場でAIを広めたい：上司・同僚を説得する実践的な方法と、社内導入でつまずかないための準備【2026年版】"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          {/* リード文 */}
          <div
            className="mt-10 p-6 sm:p-10 rounded-xl border relative"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <Quote className="absolute top-6 right-8 h-12 w-12 opacity-5" style={{ color: ACADEMY_COLORS.accentMain }} />
            <p className="text-lg sm:text-xl leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              「自分はAIを使っているのに、職場では一人だけで肩身が狭い...」「上司に相談したいけど、否定されたらどうしよう」
            </p>
            <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              そんな悩みを持つあなたへ。職場でのAI普及は確かに難しい——でも、<strong>正しい進め方があります</strong>。
              この記事では、上司への具体的な提案の言い方、抵抗感のある同僚へのアプローチ、社内ルール整備の始め方まで、
              実践的なステップで解説します。
            </p>
          </div>
        </motion.header>

        {/* 関連リンク */}
        <div
          className="mt-12 p-6 rounded-xl border flex flex-wrap items-center gap-y-3 gap-x-1"
          style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
        >
          <BookOpen className="h-4 w-4 mr-2" style={{ color: ACADEMY_COLORS.accentMain }} />
          <span className="text-xs font-bold mr-2 uppercase tracking-wider" style={{ color: ACADEMY_COLORS.textMuted }}>
            Related topics:
          </span>
          <Link
            href="/academy/blog/ai-guideline-template"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            社内AIガイドラインテンプレート
          </Link>
          <span className="mx-1" style={{ color: ACADEMY_COLORS.lineStrong }}>
            /
          </span>
          <Link
            href="/academy/blog/corporate-ai-adoption-guide"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            法人向けAI導入ガイド
          </Link>
          <span className="mx-1" style={{ color: ACADEMY_COLORS.lineStrong }}>
            /
          </span>
          <Link
            href="/academy/blog/ai-adoption-proposal-template"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            AI導入提案テンプレート
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
              上司への提案は「便利さ」ではなく<strong>「業務課題＋数字」</strong>で伝える
            </li>
            <li>
              同僚には強制せず、<strong>自分の成功体験を自然に共有</strong>する
            </li>
            <li>
              社内ルールは最低限3つ（入力禁止情報・使用ツール・確認ルール）から整備する
            </li>
            <li>
              まず<strong>1チーム・1業務での小さな成功</strong>を作ってから広げる
            </li>
          </ul>
        </motion.section>

        {/* なぜ職場でのAI普及は難しいのか */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="why-difficult" className="scroll-mt-28">
            なぜ職場でのAI普及は難しいのか：3つの壁
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            「こんなに便利なのに、なぜみんな使わないのだろう」——そう感じているなら、まずこの3つの壁を理解してください。
            この壁を知っているかどうかで、アプローチの成否が大きく変わります。
          </p>
          <div className="mt-12 space-y-10">
            {threeWalls.map((wall) => (
              <section key={wall.id} className="point-box scroll-mt-28 group transition-colors hover:border-orange-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone-50 border border-stone-100">
                    {wall.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 border-none m-0">{wall.title}</h4>
                </div>
                <div className="mt-4 whitespace-pre-line text-base leading-[1.8] text-stone-700">{wall.body}</div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 上司への提案の仕方 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="boss-proposal" className="scroll-mt-28">
            上司への提案の仕方：具体的な言い方例
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            上司への提案で最も大切なのは、<strong>「AIが便利である」という主語をやめること</strong>です。
            上司が聞きたいのは「業務にどう影響するか」「リスクはないか」「コストはかかるか」——それだけです。
          </p>

          {/* 3つのポイント */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: "1", label: "数字を使う", desc: "「3時間→30分」など具体的な効果を提示する" },
              { icon: "2", label: "小さく始める", desc: "「まず1つの業務で試させてください」と提案する" },
              { icon: "3", label: "成功を見せる", desc: "試した結果を報告し、次のステップを提案する" },
            ].map((item) => (
              <div
                key={item.icon}
                className="rounded-xl border p-6 text-center"
                style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white"
                  style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                >
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 m-0 border-none">{item.label}</h4>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textMuted }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 言い方例 */}
          <div className="mt-12 space-y-8">
            {bossProposalExamples.map((section) => (
              <div
                key={section.label}
                className="rounded-xl border p-8"
                style={{ backgroundColor: section.bg, borderColor: section.border }}
              >
                <p className="text-sm font-bold mb-4" style={{ color: section.textColor }}>
                  {section.label}
                </p>
                <ul className="space-y-3">
                  {section.examples.map((ex, i) => (
                    <li key={i} className="text-sm leading-[1.8]" style={{ color: ACADEMY_COLORS.textBody }}>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-6 rounded-xl border"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.accentMain }}
          >
            <p className="text-base font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              💡 提案のゴールは「承認」ではなく「小さな試験導入の許可」です。
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              「AIを全面導入しましょう」ではなく、「まずこの1つの業務で1週間試させてください」という提案が最も通りやすいです。
              小さな成功を作ってから、次のステップへ進みましょう。
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
          <MidArticleCtaBox slug="ai-workplace-introduction-guide" />
        </motion.section>

        {/* 抵抗感のある同僚への伝え方 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="colleague-approach" className="scroll-mt-28">
            抵抗感のある同僚への伝え方
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            上司を説得するより難しいのが、実は隣の席の同僚への伝え方です。
            立場が近いぶん、「得意なことを自慢している」と受け取られるリスクがあります。
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {colleagueTips.map((tip) => (
              <section
                key={tip.id}
                className="rounded-xl border bg-white p-8 group hover:border-orange-200 transition-colors"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-50 border border-stone-100">
                    {tip.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 m-0 border-none">{tip.title}</h4>
                </div>
                <div className="whitespace-pre-line text-sm leading-[1.8]" style={{ color: ACADEMY_COLORS.textBody }}>
                  {tip.body}
                </div>
              </section>
            ))}
          </div>

          {/* 体験談 */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                <p className="text-sm leading-[1.8] font-bold relative" style={{ color: ACADEMY_COLORS.textStrong }}>
                  {story.quote}
                </p>
              </blockquote>
            ))}
          </div>
        </motion.section>

        {/* 社内ルール整備の始め方 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="internal-rules" className="scroll-mt-28">
            社内ルール整備の始め方
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            「社内ガイドラインを整備したい」と思っても、どこから手をつけていいか分からない方が多いです。
            まずはシンプルに、<strong>最低限の3項目</strong>だけ決めることから始めましょう。
          </p>

          <div className="mt-12 space-y-8">
            {ruleItems.map((section, idx) => (
              <div
                key={section.category}
                className="rounded-xl border p-8"
                style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                  >
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 m-0 border-none pb-0">{section.category}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-[1.8]" style={{ color: ACADEMY_COLORS.textBody }}>
                      <CheckCircle2 className="h-4 w-4 mt-1 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-6 rounded-xl border"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.accentMain }}
          >
            <p className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              📋 既存のガイドラインテンプレートを参考にする
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              経済産業省の「AI事業者ガイドライン（2024年版）」や、業界団体が公開しているテンプレートを参考にすると、
              ゼロから作る必要がなくなります。詳しくは{" "}
              <Link
                href="/academy/blog/ai-guideline-template"
                className="font-bold border-b transition-opacity hover:opacity-70"
                style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
              >
                社内AIガイドラインの作り方・テンプレート
              </Link>{" "}
              の記事もご覧ください。
            </p>
          </div>
        </motion.section>

        {/* 小さな成功事例を作って広める戦略 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="small-wins" className="scroll-mt-28">
            小さな成功事例を作って広める戦略
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            職場でのAI普及において、最も効果的な「説得ツール」は論理でも資料でもありません。
            <strong>実際の成功事例</strong>です。
          </p>

          <div className="mt-10 space-y-6">
            {[
              {
                step: "STEP 1",
                title: "「AI実験プロジェクト」として小さく始める",
                body: "「AIを使ってみる実験」として、自分の担当業務1つにAIを導入します。チームや上司に「試しにやってみます」と宣言することで、後の報告がしやすくなります。",
              },
              {
                step: "STEP 2",
                title: "成功したら数字で示す",
                body: "「月10時間削減」「作業精度が向上した」など、定量的に示せるものを準備します。肌感覚での「便利だった」より、数字の方が周囲を動かす力があります。",
              },
              {
                step: "STEP 3",
                title: "成功事例を部内で共有する",
                body: "チームミーティングや社内チャットで、さりげなく成果を共有します。「先月試したAI活用の結果を共有してもいいですか？」という一言から始めましょう。",
              },
              {
                step: "STEP 4",
                title: "「失敗談」も共有することで信頼性が上がる",
                body: "「AIに頼んだら的外れな回答が来た」「こんな業務には向かなかった」という失敗談も積極的に共有しましょう。「良いことしか言わない人」より「リアルな体験を話してくれる人」の方が信頼されます。",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 p-8 rounded-xl border bg-white hover:border-orange-200 transition-colors"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <div className="shrink-0">
                  <div
                    className="flex h-12 w-20 items-center justify-center rounded-xl text-xs font-bold text-white"
                    style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                  >
                    {item.step}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 m-0 border-none">{item.title}</h4>
                  <p className="mt-3 text-sm leading-[1.8]" style={{ color: ACADEMY_COLORS.textBody }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* やってはいけない失敗パターン */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="failure-patterns" className="scroll-mt-28">
            やってはいけない失敗パターン4選
          </h2>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            善意でやった行動が逆効果になることがあります。よくある失敗パターンを把握しておきましょう。
          </p>
          <div className="mt-10 space-y-6">
            {failurePatterns.map((item) => (
              <div
                key={item.pattern}
                className="flex gap-5 p-6 rounded-xl border"
                style={{ backgroundColor: "#fff8f5", borderColor: "#fed7aa" }}
              >
                <XCircle className="h-6 w-6 shrink-0 mt-0.5 text-red-400" />
                <div>
                  <p className="text-base font-bold text-slate-900">{item.pattern}</p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                    {item.reason}
                  </p>
                </div>
              </div>
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
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-stone-100 text-[12px] font-bold text-stone-400 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                    Q
                  </span>
                  {item.question}
                </dt>
                <dd className="mt-4 pl-11 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
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

          <h2
            id="summary"
            className="scroll-mt-28 text-2xl font-bold m-0 border-none pb-0"
            style={{ color: ACADEMY_COLORS.textStrong }}
          >
            まとめ：職場のAI普及は、一人の行動から始まる
          </h2>
          <p className="mt-8 text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
            職場でAIを広めようとするとき、最大の敵は「人の抵抗」ではなく、「焦り」と「押しつけ」です。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "上司への提案は「業務課題＋数字」で伝える",
              "同僚には強制せず、自分の成功体験を自然に共有する",
              "社内ルールは最低限3項目から始める",
              "まず1業務で小さな成功を作り、それを見せる",
              "失敗談も共有することで信頼性が上がる",
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
              あなたが職場でAIを使い始めたその瞬間から、あなたはすでに「変化を起こす人」です。
              その変化を、焦らず、着実に、周りに広げていってください。
            </p>
            <p
              className="text-2xl font-bold leading-tight tracking-tight"
              style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}
            >
              職場でのAI普及も、AIの学び方も——<br />
              同じコミュニティで一緒に学べます。
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
            title="職場でのAI普及、一人で悩まないでください"
            description="「上司に提案したいけど不安」「同僚への伝え方が分からない」——そんな悩みをLINEで無料相談できます。AIリブートアカデミーのスタッフが一緒に考えます。"
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
            次のステップ：職場でのAI普及スキルを磨くなら
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/blog/ai-guideline-template"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-5 text-lg font-bold text-white transition-all hover:opacity-90 active:scale-95 sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                社内ガイドラインの作り方を見る
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
            <h2 className="scroll-mt-28 m-0 border-none pb-0 text-2xl font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              関連リンク
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/academy/blog/ai-guideline-template", label: "社内AIガイドラインの作り方・テンプレート" },
              { href: "/academy/blog/corporate-ai-adoption-guide", label: "法人向けAI導入完全ガイド" },
              { href: "/academy/blog/ai-adoption-proposal-template", label: "AI導入提案テンプレート集" },
              { href: "/academy/blog/ai-adoption-cost-roi", label: "AI導入コスト・ROIの考え方" },
              { href: "/academy/blog/ai-business-efficiency-cases", label: "AI業務効率化の実例集" },
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
