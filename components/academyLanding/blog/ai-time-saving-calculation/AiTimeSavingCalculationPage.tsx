"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  Clock,
  TrendingUp,
  Briefcase,
  Home,
  Laptop,
  Sparkles,
  ChevronRight,
  Calendar,
  BookOpen,
  Quote,
  Calculator,
  Info,
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

const keywordTags = ["AI 時間節約 効果", "ChatGPT 時短 どのくらい", "AI 仕事 効率化", "生成AI コスパ"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "how-to-measure", label: "AI時間節約の測り方" },
  { id: "scenario-worker", label: "シナリオ1：会社員（営業職・40代）" },
  { id: "scenario-parent", label: "シナリオ2：主婦・子育て中" },
  { id: "scenario-freelancer", label: "シナリオ3：フリーランス（ライター・デザイナー）" },
  { id: "cost-benefit", label: "費用対効果の正直な評価" },
  { id: "hidden-value", label: "AI投資の「隠れた価値」" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const scenario1Tasks = [
  { task: "メール返信", before: "2時間", after: "45分", saved: "1時間15分" },
  { task: "資料作成", before: "3時間", after: "1時間", saved: "2時間" },
  { task: "会議準備", before: "1時間", after: "30分", saved: "30分" },
  { task: "報告書作成", before: "1時間", after: "20分", saved: "40分" },
] as const;

const scenario2Tasks = [
  { task: "献立考え・買い物リスト", before: "1時間", after: "15分", saved: "45分" },
  { task: "子どもの作文サポート", before: "30分", after: "10分", saved: "20分" },
  { task: "お便り・スケジュール整理", before: "30分", after: "15分", saved: "15分" },
] as const;

const scenario3Tasks = [
  { task: "記事のアウトライン作成", before: "2時間", after: "30分", saved: "1時間30分" },
  { task: "クライアント提案文", before: "30分", after: "10分", saved: "20分" },
  { task: "誤字脱字チェック・校正", before: "40分", after: "15分", saved: "25分" },
  { task: "請求書・連絡文面", before: "20分", after: "5分", saved: "15分" },
] as const;

export default function AiTimeSavingCalculationPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-x-clip">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIは本当に時間を節約してくれるのか：具体的な数字で試算" },
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
            AIは本当に時間を節約してくれるのか：<br className="hidden sm:block" />
            会社員・主婦・フリーランス別に<br className="hidden sm:block" />
            具体的な数字で試算してみた【2026年版】
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
              title="AIは本当に時間を節約してくれるのか：具体的な数字で試算してみた"
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
              「AIで仕事が速くなる」は聞くけど、実際どのくらい速くなるの？月3,000円の有料プランを払う価値はあるの？
            </p>
            <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              正直に言います。AIの時間節約効果は「使い方次第」で大きく変わります。でも「なんとなく便利な気がする」で終わらせず、<strong>会社員・主婦・フリーランスそれぞれのシナリオで具体的な数字を出して試算してみました</strong>。「私の場合はどのくらい？」の参考にしてください。
            </p>
          </div>
        </motion.header>

        {/* 関連トピック */}
        <div
          className="mt-12 p-6 rounded-xl border flex flex-wrap items-center gap-y-3 gap-x-1"
          style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
        >
          <BookOpen className="h-4 w-4 mr-2" style={{ color: ACADEMY_COLORS.accentMain }} />
          <span className="text-xs font-bold mr-2 uppercase tracking-wider" style={{ color: ACADEMY_COLORS.textMuted }}>
            Related topics:
          </span>
          <Link
            href="/academy/blog/ai-business-efficiency-cases"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            AI業務効率化の事例集
          </Link>
          <span className="mx-1" style={{ color: ACADEMY_COLORS.lineStrong }}>
            /
          </span>
          <Link
            href="/academy/blog/chatgpt-prompt-beginner"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            ChatGPTプロンプト入門
          </Link>
          <span className="mx-1" style={{ color: ACADEMY_COLORS.lineStrong }}>
            /
          </span>
          <Link
            href="/academy/blog/ai-adoption-cost-roi"
            className="text-sm font-bold border-b transition-opacity hover:opacity-70"
            style={{ color: ACADEMY_COLORS.accentMain, borderColor: ACADEMY_COLORS.accentMain }}
          >
            AI導入コスト・ROIの考え方
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
            <li>会社員（営業・40代）シナリオでは<strong>週約4時間25分・月換算で約18時間</strong>の節約が見込まれます（試算値）</li>
            <li>主婦・子育て中シナリオでは<strong>週約1時間20分</strong>の節約。「時短」以上に<strong>「考える疲労の削減」</strong>が大きな価値です</li>
            <li>フリーランス（ライター・デザイナー）では<strong>週約2時間30分</strong>の節約。節約した時間を新しい仕事に使えば収益増も可能です</li>
            <li><strong>月3,000円の有料プランは「週1時間以上の節約」で元が取れます</strong>（時給換算で¥1,000以上の場合）</li>
            <li>ただし節約量は<strong>「最初の1ヶ月は少なく、2〜3ヶ月後から本格化する」</strong>のが現実です</li>
          </ul>
        </motion.section>

        {/* AI時間節約の測り方 */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="how-to-measure" className="scroll-mt-28">
            AI時間節約の測り方
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            「どのくらい節約できた？」を正確に測るには、まず<strong>「AI前」の作業時間を記録すること</strong>が大切です。
            といっても難しいことはありません。1週間だけ、仕事でよくやる作業の時間をメモしてみましょう。
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <Clock className="h-5 w-5" style={{ color: ACADEMY_COLORS.accentMain }} />,
                title: "AIが得意な作業（時間節約しやすい）",
                color: "emerald",
                items: [
                  "メール・文章の下書き・返信",
                  "資料・スライドのアウトライン作成",
                  "議事録・報告書の初稿作成",
                  "情報収集・要約・翻訳",
                  "アイデア出し・ブレインストーミング",
                ],
              },
              {
                icon: <AlertCircle className="h-5 w-5 text-rose-500" />,
                title: "AIが苦手な作業（節約効果が低い）",
                color: "rose",
                items: [
                  "感情や信頼関係が重要な対人業務",
                  "最新情報を要する判断・意思決定",
                  "細かい数値の確認・計算（要チェック）",
                  "独自の企業情報・社内規定の把握",
                  "クリエイティブの最終仕上げ・磨き込み",
                ],
              },
            ].map((section) => (
              <div
                key={section.title}
                className={`rounded-xl border p-6 ${section.color === "emerald" ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h3 className={`text-base font-bold m-0 border-none pb-0 ${section.color === "emerald" ? "text-emerald-800" : "text-rose-800"}`}>
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                      <span
                        className={`mt-1 shrink-0 h-3 w-3 rounded-full ${section.color === "emerald" ? "bg-emerald-400" : "bg-rose-300"}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="mt-8 p-6 rounded-xl border"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.accentMain }}
          >
            <p className="text-base leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              💡 「AI前の時間」を記録してから使い始めると、節約効果がリアルに実感できます。
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              次のセクションでは、3つの職種・ライフスタイル別に具体的な試算を見ていきましょう。
              あなたの状況に近いシナリオを参考にしてください。
            </p>
          </div>
        </motion.section>

        {/* シナリオ1：会社員 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <div className="flex items-center gap-4 mb-8">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
            >
              <Briefcase className="h-7 w-7" />
            </div>
            <h2 id="scenario-worker" className="scroll-mt-28 text-2xl font-bold text-slate-900 m-0 border-none pb-0">
              シナリオ1：会社員（営業職・40代）の場合
            </h2>
          </div>

          <div
            className="p-5 rounded-xl border mb-8"
            style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <p className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textMuted }}>
              📋 前提：週5日勤務。メール・資料作成・会議準備・報告書が主な文書作業
            </p>
          </div>

          {/* 試算テーブル */}
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
                  <th className="px-4 py-3 text-left font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>仕事内容</th>
                  <th className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>AI前（週）</th>
                  <th className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>AI後（週）</th>
                  <th className="px-4 py-3 text-center font-bold text-emerald-700">節約時間</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                {scenario1Tasks.map((row) => (
                  <tr key={row.task} className="bg-white">
                    <td className="px-4 py-3 font-medium" style={{ color: ACADEMY_COLORS.textBody }}>{row.task}</td>
                    <td className="px-4 py-3 text-center" style={{ color: ACADEMY_COLORS.textBody }}>{row.before}</td>
                    <td className="px-4 py-3 text-center" style={{ color: ACADEMY_COLORS.textBody }}>{row.after}</td>
                    <td className="px-4 py-3 text-center font-bold text-emerald-600">{row.saved}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
                  <td className="px-4 py-3 font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>合計</td>
                  <td className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>7時間</td>
                  <td className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>2時間35分</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-700 text-base">約4時間25分</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "週の節約時間", value: "約4時間25分", sub: "試算値" },
              { label: "月換算（4週）", value: "約18時間", sub: "試算値" },
              { label: "月3,000円プランのROI", value: "約6倍", sub: "時給¥1,000換算" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border p-6 text-center"
                style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ACADEMY_COLORS.textMuted }}>{stat.label}</p>
                <p className="mt-2 text-2xl font-bold" style={{ color: ACADEMY_COLORS.accentMain }}>{stat.value}</p>
                <p className="mt-1 text-xs" style={{ color: ACADEMY_COLORS.textMuted }}>{stat.sub}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-8 flex gap-4 p-5 rounded-xl border"
            style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <TrendingUp className="h-5 w-5 shrink-0 mt-0.5" style={{ color: ACADEMY_COLORS.accentMain }} />
            <div>
              <p className="text-sm leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
                特に効果が大きいのは「資料作成」と「メール返信」
              </p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                AIに「○○の提案資料のアウトラインを作って」と頼めば、1時間かけていた骨格作りが10〜15分で完成します。
                メールも「丁寧に断る文面を書いて」と伝えるだけで、ゼロから書く手間が大幅に削減されます。
                ただし最終的な内容確認・修正は必ず自分で行うこと。AIは「ドラフト作成マシン」として使うのが最善です。
              </p>
            </div>
          </div>
        </motion.section>

        {/* シナリオ2：主婦 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <div className="flex items-center gap-4 mb-8">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: "#4f7942" }}
            >
              <Home className="h-7 w-7" />
            </div>
            <h2 id="scenario-parent" className="scroll-mt-28 text-2xl font-bold text-slate-900 m-0 border-none pb-0">
              シナリオ2：主婦・子育て中の場合
            </h2>
          </div>

          <div
            className="p-5 rounded-xl border mb-8"
            style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <p className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textMuted }}>
              📋 前提：小学生の子ども2人。毎日の献立・子どもの宿題サポート・学校行事の管理が日常業務
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
                  <th className="px-4 py-3 text-left font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>AI活用場面</th>
                  <th className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>AI前（週）</th>
                  <th className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>AI後（週）</th>
                  <th className="px-4 py-3 text-center font-bold text-emerald-700">節約時間</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                {scenario2Tasks.map((row) => (
                  <tr key={row.task} className="bg-white">
                    <td className="px-4 py-3 font-medium" style={{ color: ACADEMY_COLORS.textBody }}>{row.task}</td>
                    <td className="px-4 py-3 text-center" style={{ color: ACADEMY_COLORS.textBody }}>{row.before}</td>
                    <td className="px-4 py-3 text-center" style={{ color: ACADEMY_COLORS.textBody }}>{row.after}</td>
                    <td className="px-4 py-3 text-center font-bold text-emerald-600">{row.saved}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
                  <td className="px-4 py-3 font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>合計</td>
                  <td className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>2時間</td>
                  <td className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>40分</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-700 text-base">約1時間20分</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="mt-8 p-6 rounded-xl border bg-emerald-50 border-emerald-200"
          >
            <h3 className="text-base font-bold text-emerald-800 m-0 border-none pb-0 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-emerald-600" />
              「時間節約」以外の価値：「考える疲労」の削減
            </h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              主婦・子育て中の場合、数字に出る「時間の節約」より大きな価値があります。それは<strong>「考える労力の削減」</strong>です。
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              「今日の夕飯、何にしよう...」と毎日考えることは、それほど時間がかかるわけではありませんが、毎日積み重なると<strong>決断疲れ（デシジョン・ファティーグ）</strong>の原因になります。
              AIに「冷蔵庫に鶏肉・キャベツ・卵があります。子どもが好きで30分以内で作れる夕食を3つ提案して」と聞くだけで、この悩みがすっと解決します。
            </p>
            <p className="mt-3 text-sm leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textBody }}>
              時間の節約量は少なくても、「考えるストレスが減った」という実感は大きな価値です。
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
          <MidArticleCtaBox slug="ai-time-saving-calculation" />
        </motion.section>

        {/* シナリオ3：フリーランス */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <div className="flex items-center gap-4 mb-8">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: "#3b5bdb" }}
            >
              <Laptop className="h-7 w-7" />
            </div>
            <h2 id="scenario-freelancer" className="scroll-mt-28 text-2xl font-bold text-slate-900 m-0 border-none pb-0">
              シナリオ3：フリーランス（ライター・デザイナー）の場合
            </h2>
          </div>

          <div
            className="p-5 rounded-xl border mb-8"
            style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <p className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textMuted }}>
              📋 前提：週3〜4案件。記事執筆・デザイン提案・クライアント対応・請求処理が主な業務
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
                  <th className="px-4 py-3 text-left font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>AI活用場面</th>
                  <th className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>AI前（週）</th>
                  <th className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>AI後（週）</th>
                  <th className="px-4 py-3 text-center font-bold text-emerald-700">節約時間</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                {scenario3Tasks.map((row) => (
                  <tr key={row.task} className="bg-white">
                    <td className="px-4 py-3 font-medium" style={{ color: ACADEMY_COLORS.textBody }}>{row.task}</td>
                    <td className="px-4 py-3 text-center" style={{ color: ACADEMY_COLORS.textBody }}>{row.before}</td>
                    <td className="px-4 py-3 text-center" style={{ color: ACADEMY_COLORS.textBody }}>{row.after}</td>
                    <td className="px-4 py-3 text-center font-bold text-emerald-600">{row.saved}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
                  <td className="px-4 py-3 font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>合計</td>
                  <td className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>3時間30分</td>
                  <td className="px-4 py-3 text-center font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>1時間</td>
                  <td className="px-4 py-3 text-center font-bold text-emerald-700 text-base">約2時間30分</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="mt-8 p-6 rounded-xl border bg-blue-50 border-blue-200"
          >
            <h3 className="text-base font-bold text-blue-800 m-0 border-none pb-0 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              フリーランスならではの視点：節約時間を「収益増」に変える
            </h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              フリーランスにとって「時間節約」は<strong>そのまま収益増の可能性</strong>になります。
              週2時間30分の余裕が生まれれば、新しい案件を1件追加で受注できるかもしれません。
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              例えば、記事1本の単価が¥20,000のライターなら：週2.5時間の余裕 × 月4週 = 10時間。
              この時間で記事をさらに1〜2本追加執筆できれば、<strong>月に¥20,000〜¥40,000の増収</strong>になります。
              月3,000円のプランへの投資回収は、たったの1案件分の一部に過ぎません。
            </p>
          </div>
        </motion.section>

        {/* 費用対効果の正直な評価 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="cost-benefit" className="scroll-mt-28 flex items-center gap-3">
            <Calculator className="h-7 w-7" style={{ color: ACADEMY_COLORS.accentMain }} />
            費用対効果の正直な評価
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            よくある質問「月3,000円の有料プランは元が取れますか？」に、正直に答えます。
          </p>

          <div className="mt-10 rounded-xl border overflow-hidden" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
            <div
              className="px-6 py-4 text-sm font-bold"
              style={{ backgroundColor: ACADEMY_COLORS.bgSection, color: ACADEMY_COLORS.textStrong }}
            >
              💡 「月3,000円プランの損益分岐点」試算
            </div>
            <div className="p-6 bg-white">
              <p className="text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                月3,000円 ÷ 4週 = <strong>週750円のコスト</strong>。
                あなたの時間価値（時給）が¥1,000なら、<strong>週45分以上節約できれば元が取れます</strong>。
                時給¥2,000（会社員の平均的な時給換算）なら、週22分以上の節約で黒字です。
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { hourly: "¥1,000/時", breakeven: "週45分以上", eval: "会社員・シナリオ1は◎" },
                  { hourly: "¥1,500/時", breakeven: "週30分以上", eval: "ほぼ全シナリオで◎" },
                  { hourly: "¥2,000/時", breakeven: "週22分以上", eval: "即黒字" },
                ].map((row) => (
                  <div
                    key={row.hourly}
                    className="rounded-lg border p-4 text-center"
                    style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
                  >
                    <p className="text-xs font-bold" style={{ color: ACADEMY_COLORS.textMuted }}>時間価値</p>
                    <p className="mt-1 text-lg font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>{row.hourly}</p>
                    <p className="mt-2 text-xs font-bold text-emerald-700">{row.breakeven}</p>
                    <p className="mt-1 text-xs" style={{ color: ACADEMY_COLORS.textMuted }}>{row.eval}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border p-6 bg-amber-50 border-amber-200">
              <h3 className="text-base font-bold text-amber-800 m-0 border-none pb-0">無料プランで十分な人</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "週1〜2回しかAIを使わない",
                  "試しに使ってみている段階",
                  "テキストの用途がほぼ1種類",
                  "月の利用が10回未満",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: ACADEMY_COLORS.textBody }}>
                    <span className="mt-1 shrink-0 h-3 w-3 rounded-full bg-amber-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border p-6 bg-emerald-50 border-emerald-200">
              <h3 className="text-base font-bold text-emerald-800 m-0 border-none pb-0">有料プランが元が取れる人</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "週10回以上AIを仕事で使っている",
                  "長文・複雑なタスクに頻繁に使う",
                  "画像生成や高度な分析機能も必要",
                  "複数のAIツールを使い分けたい",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: ACADEMY_COLORS.textBody }}>
                    <CheckCircle2 className="mt-0.5 shrink-0 h-4 w-4 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="mt-8 flex gap-4 p-5 rounded-xl border"
            style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <Info className="h-5 w-5 shrink-0 mt-0.5" style={{ color: ACADEMY_COLORS.accentMain }} />
            <p className="text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              <strong style={{ color: ACADEMY_COLORS.textStrong }}>正直な注意：</strong>
              節約できる時間は「使い方次第」です。AIを使い始めて最初の1ヶ月は、プロンプトの書き方を覚える投資期間。
              「あまり変わらない...」と感じても2〜3ヶ月続けると、コツがつかめて効果が加速します。
            </p>
          </div>
        </motion.section>

        {/* AI投資の「隠れた価値」 */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="hidden-value" className="scroll-mt-28">
            AI投資の「隠れた価値」：時間節約だけじゃない
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            数字に出る時間節約以外に、AIを使い続けることで得られる価値があります。
            これらは試算が難しいですが、実際に使っている人の声から見えてきたものです。
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Lightbulb className="h-6 w-6" style={{ color: "#f59e0b" }} />,
                title: "疲れにくくなる",
                body: "「次に何を書こう」と悩む時間が減り、メンタルの消耗が少なくなります。これは特に文章を多く書く仕事で実感しやすい効果です。",
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-emerald-500" />,
                title: "アイデアが出やすくなる",
                body: "AIとの対話で思考が整理され、自分では思いつかなかった視点に気づくことがあります。「ブレスト相手」としての価値は計り知れません。",
              },
              {
                icon: <CheckCircle2 className="h-6 w-6 text-blue-500" />,
                title: "自信がつく",
                body: "「このメール、変じゃないか」という不安が減ります。AIに確認してもらうことで、アウトプットの品質への自信が生まれます。",
              },
              {
                icon: <Clock className="h-6 w-6" style={{ color: ACADEMY_COLORS.accentMain }} />,
                title: "学習曲線の先に加速がある",
                body: "最初の1ヶ月は「慣れる期間」。2〜3ヶ月後からは作業スピードが加速します。続けるほど節約時間が増えていく構造です。",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-purple-500" />,
                title: "スキルとして残る",
                body: "AIを使いこなせること自体が、2026年の職場で価値あるスキルです。履歴書や自己PRにも書ける実践的な能力になります。",
              },
              {
                icon: <Sparkles className="h-6 w-6 text-rose-500" />,
                title: "「やってみようか」が増える",
                body: "「AI頼めばいい」という安心感から、今まで後回しにしていた仕事に手をつけやすくなります。行動量が増える副次効果があります。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-6"
                style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-base font-bold m-0 border-none pb-0" style={{ color: ACADEMY_COLORS.textStrong }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
                  {item.body}
                </p>
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

          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold m-0 border-none pb-0" style={{ color: ACADEMY_COLORS.textStrong }}>
            まとめ：AIは「時間の貯金箱」になれる
          </h2>
          <p className="mt-8 text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
            今日の試算をまとめると、こうなります。
          </p>
          <div className="mt-10 grid gap-4">
            {[
              "会社員（営業・40代）：週約4時間25分・月約18時間の節約（試算値）",
              "主婦・子育て中：週約1時間20分の節約＋「考える疲労」の大幅削減",
              "フリーランス：週約2時間30分の節約＋節約時間を収益増に転換できる",
              "月3,000円プランは「週45分以上の節約」で元が取れる（時給¥1,000の場合）",
              "最初の1ヶ月は投資期間。2〜3ヶ月で本格的な効果が出始める",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center gap-4 p-4 rounded-lg border bg-white"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-base" style={{ color: ACADEMY_COLORS.textBody }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-6">
            <p className="text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
              AIを「なんとなく便利なもの」で終わらせず、<strong>自分の仕事・生活に当てはめて試算してみること</strong>。
              それだけで「使い続ける理由」が明確になり、効果も出やすくなります。
            </p>
            <p className="text-2xl font-bold leading-tight tracking-tight" style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}>
              AI活用スキルが上がるほど、<br />
              節約できる時間はさらに増えていきます。
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
            title="「もっとAIを使いこなして時間を節約したい」"
            description="試算の数字を現実にするために、AI活用スキルを体系的に学びませんか。LINEで無料相談受け付けています。あなたの仕事・状況に合ったAI活用法を一緒に考えます。"
            buttonLabel="LINEで気軽に相談する（登録無料）"
          />
        </motion.section>

        {/* CTA：次のステップ */}
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
            次のステップ：AI活用スキルをもっと高めたい方へ
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
            今回の試算はあくまで「平均的な使い方」の想定です。
            プロンプトの書き方を磨き、AIの使い方を体系的に学ぶことで、節約できる時間はさらに増えます。
            AIリブートアカデミーでは、AI初心者から実践レベルまで学べるカリキュラムを提供しています。
          </p>
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
            <h2 className="scroll-mt-28 m-0 border-none pb-0 text-2xl font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              関連リンク
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/academy/blog/ai-business-efficiency-cases", label: "AI業務効率化の実例と活用法" },
              { href: "/academy/blog/chatgpt-prompt-beginner", label: "ChatGPTプロンプトの書き方入門" },
              { href: "/academy/blog/ai-adoption-cost-roi", label: "AI導入コスト・ROIの考え方" },
              { href: "/academy/blog/ai-freelance-work-guide", label: "フリーランスのためのAI活用ガイド" },
              { href: "/academy", label: "AIリブートアカデミー TOP" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between p-5 rounded-xl border transition-all group"
                  style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <span className="text-sm font-bold transition-colors group-hover:text-[#d46a1f]" style={{ color: ACADEMY_COLORS.textBody }}>
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
