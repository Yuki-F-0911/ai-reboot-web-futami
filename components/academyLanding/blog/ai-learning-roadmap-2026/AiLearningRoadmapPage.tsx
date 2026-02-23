"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Map,
  Target,
  Star,
  Calendar,
  BookOpen,
  Quote,
  ChevronRight,
  Award,
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

const keywordTags = ["AI学習 ロードマップ", "AI 初心者 何から始める", "生成AI 学習 計画 2026"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-lost", label: "AI学習で挫折する本当の理由" },
  { id: "overview", label: "AI学習の全体像：4つのフェーズ" },
  { id: "phase1", label: "Phase 1（1〜30日）：触れる習慣づくり編" },
  { id: "phase2", label: "Phase 2（31〜60日）：仕事に使う実務活用編" },
  { id: "phase3", label: "Phase 3（61〜90日）：自分の武器にする独自化編" },
  { id: "phase4", label: "Phase 4（91〜100日）：習慣として定着させる仕上げ編" },
  { id: "weekly-schedule", label: "週次スケジュール例" },
  { id: "solo-vs-supported", label: "一人で進むか、サポートを受けながら進むか" },
  { id: "subsidy", label: "補助金を活用して体系的に学ぶという選択肢" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const phases = [
  {
    id: "phase1",
    number: "01",
    period: "1〜30日",
    label: "触れる習慣づくり編",
    borderColor: "border-sky-200",
    accentColor: "text-sky-600",
    iconBg: "bg-sky-50",
    goal: "毎日AIを触ること、怖くなくなること",
    milestone: "「AIに何でも聞ける」状態になる",
    actions: [
      "ChatGPTの無料アカウントを作成し、毎日1回以上話しかける",
      "日常の疑問（レシピ・天気・言葉の意味）をAIに聞く習慣をつける",
      "プロンプト入門10本：挨拶 → 要約 → 翻訳 → メール下書き → アイデア出し",
    ],
    checkpoints: [
      "ChatGPTに「今日の仕事で困っていること」を毎日1つ相談できている",
      "3つのAIツールの特徴の違いを説明できる",
    ],
    stories: [
      {
        role: "40代・事務職",
        quote: "最初の1週間は「何を聞けばいいかわからない」状態でした。でも「今日の仕事で困ったこと」を毎日1つ相談するだけと決めたら、自然と続けられました。",
      },
    ],
  },
  {
    id: "phase2",
    number: "02",
    period: "31〜60日",
    label: "仕事に使う実務活用編",
    borderColor: "border-emerald-200",
    accentColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    goal: "週 5時間削減できるタスクを1つ見つける",
    milestone: "「AIを使って成果物を出した」経験を持つ",
    actions: [
      "議事録の自動要約：会議メモをAIに渡して要点を整理",
      "ビジネスメールの下書き：状況をAIに伝えて作成→自分で編集",
    ],
    checkpoints: [
      "AIが作成した成果物を実際の仕事に使用した経験がある",
      "週に1つ以上「AIを使って時間が浮いた」体験を記録できている",
    ],
    stories: [
      {
        role: "30代・営業職",
        quote: "議事録の作成に毎回30分かかっていたのが、AIを使い始めたら5分になりました。その時間を提案書のブラッシュアップに使えています。",
      },
    ],
  },
] as const;

const weeklySchedule = [
  {
    phase: "Phase 1",
    week: "第1週（Day 1〜7）",
    color: "bg-sky-50 text-sky-700 border-sky-100",
    daily: "ChatGPTに毎日1つ質問する（15分）",
    weekend: "3つのAIツールを比較体験（60分）",
    deliverable: "「AIツール使い比べメモ」",
  },
  {
    phase: "Phase 2",
    week: "第5〜6週（Day 31〜45）",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    daily: "議事録・メールをAIで作成（30分）",
    weekend: "「AI活用ビフォーアフター」を記録（45分）",
    deliverable: "「AI時短レポート」",
  },
] as const;

export default function AiLearningRoadmapPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-24 pt-28 sm:pt-32 overflow-hidden">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI学習ロードマップ2026" },
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
            AI学習ロードマップ2026：<br className="hidden sm:block" />ゼロから100日間で仕事に使えるようになるまでの完全地図
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-8" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: ACADEMY_COLORS.bgSection }}>
                <Calendar className="h-5 w-5" style={{ color: ACADEMY_COLORS.textMuted }} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ACADEMY_COLORS.textMuted }}>Published on</p>
                <time className="text-sm font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>2026年2月23日</time>
              </div>
            </div>

            <CopyAsMarkdownButton
              title="AI学習ロードマップ2026：ゼロから100日間で仕事に使えるようになるまでの完全地図"
              sourceSelector="[data-blog-article-body]"
            />
          </div>

          <div 
            className="mt-10 p-6 sm:p-10 rounded-xl border relative"
            style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <Quote className="absolute top-6 right-8 h-12 w-12 opacity-5" style={{ color: ACADEMY_COLORS.accentMain }} />
            <p className="text-lg sm:text-xl leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              「AIを学びたいけど、何から始めればいいかわからない」——この記事では、AI学習の4つのフェーズと100日間の具体的なロードマップを公開します。
            </p>
          </div>
        </motion.header>

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
            <li>AI学習には<strong>4つの明確なフェーズ</strong>がある——触れる→使う→武器にする→定着させる</li>
            <li>100日間で目指すのは「AI完全マスター」ではなく<strong>「週5時間削減できる状態」</strong></li>
            <li>挫折の最大原因は「地図がないこと」——ロードマップがあれば<strong>継続率は大幅に改善</strong>する</li>
          </ul>
        </motion.section>

        {/* 挫折する理由 */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 id="why-lost" className="scroll-mt-28">
            AI学習で挫折する本当の理由
          </h2>
          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>
              AI学習で挫折する最大の理由は「地図がないまま走り始める」ことです。
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "何に使えばいいかわからず飽きた",
                "点と点がつながらず全体像がつかめなかった",
                "自己流で進めたが、これで合っているのか不安でやめた",
              ].map((text, i) => (
                <div key={i} className="p-5 rounded-xl border bg-stone-50" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                  <p className="text-sm font-bold text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Phase 1〜4 詳細 */}
        {phases.map((phase, phaseIndex) => (
          <motion.section
            key={phase.id}
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={sectionReveal}
          >
            <div className={`flex items-center gap-4 mb-8 p-6 rounded-xl border`} style={{ backgroundColor: ACADEMY_COLORS.bgWarm, borderColor: ACADEMY_COLORS.lineSoft }}>
              <div 
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg font-bold text-xl text-white`}
                style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
              >
                {phase.number}
              </div>
              <div>
                <p className={`text-[10px] font-bold tracking-widest uppercase`} style={{ color: ACADEMY_COLORS.textMuted }}>Phase {phaseIndex + 1} ／ {phase.period}</p>
                <h2 id={phase.id} className="scroll-mt-28 text-2xl font-bold text-slate-900 m-0 border-none pb-0 mt-1">
                  {phase.label}
                </h2>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 mb-8">
              <div className={`rounded-xl p-6 border`} style={{ backgroundColor: phase.iconBg, borderColor: ACADEMY_COLORS.lineSoft }}>
                <div className="flex items-center gap-2 mb-3">
                  <Target className={`h-5 w-5`} style={{ color: ACADEMY_COLORS.accentMain }} />
                  <span className={`text-[10px] font-bold tracking-widest uppercase`} style={{ color: ACADEMY_COLORS.textMuted }}>Goal</span>
                </div>
                <p className="text-base font-bold text-slate-900">{phase.goal}</p>
              </div>
              <div className="rounded-xl p-6 bg-white border" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-5 w-5 text-amber-400" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-amber-500">Milestone</span>
                </div>
                <p className="text-base font-bold text-slate-900">{phase.milestone}</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-4 mt-10">このフェーズでやること</h3>
            <ul className="space-y-3">
              {phase.actions.map((action, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-white" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                  <span 
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded text-[11px] font-bold text-white"
                    style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[15px] font-bold" style={{ color: ACADEMY_COLORS.textStrong }}>{action}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              {phase.stories.map((story) => (
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

            {phaseIndex === 1 && (
              <motion.div className="mt-16">
                <MidArticleCtaBox slug="ai-learning-roadmap-2026" />
              </motion.div>
            )}
          </motion.section>
        ))}

        {/* 週次スケジュール */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
        >
          <h2 id="weekly-schedule" className="scroll-mt-28">
            週次スケジュール例
          </h2>
          <div className="mt-10 overflow-x-auto rounded-xl border" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-50 border-b" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                  <th className="text-left py-4 px-5 font-bold text-slate-600">期間</th>
                  <th className="text-left py-4 px-5 font-bold text-slate-600">毎日</th>
                  <th className="text-left py-4 px-5 font-bold text-slate-600">成果物</th>
                </tr>
              </thead>
              <tbody>
                {weeklySchedule.map((row, i) => (
                  <tr key={i} className={`border-b hover:bg-stone-50 transition-colors`} style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                    <td className="py-4 px-5 align-top">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${row.color}`}>{row.phase}</span>
                      <p className="text-xs font-bold text-slate-500 mt-1">{row.week}</p>
                    </td>
                    <td className="py-4 px-5 align-top text-slate-700 leading-relaxed">{row.daily}</td>
                    <td className="py-4 px-5 align-top">
                      <div className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                        <span className="text-slate-700 font-bold">{row.deliverable}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <Map className="absolute -right-4 -top-4 h-32 w-32 opacity-5" style={{ color: ACADEMY_COLORS.accentMain }} />

          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold m-0 border-none pb-0" style={{ color: ACADEMY_COLORS.textStrong }}>
            まとめ：地図を持って、100日間を走り切ろう
          </h2>
          <div className="mt-10 grid gap-4">
            {[
              "Phase 1：AIを毎日触れる状態にする。怖さをなくす期間",
              "Phase 2：仕事に1つ適用し、成果を出す経験を積む",
              "Phase 3：自分専用のワークフローを確立する",
              "Phase 4：習慣を定着させ、次の目標へ進む",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg border bg-white" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                <span 
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded font-bold text-white text-sm"
                  style={{ backgroundColor: ACADEMY_COLORS.accentMain }}
                >
                  {i + 1}
                </span>
                <span className="text-base font-bold" style={{ color: ACADEMY_COLORS.textBody }}>{text}</span>
              </div>
            ))}
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
            title="このロードマップを、一緒に走りませんか"
            description="一人で走り切れるか不安な方のために、AIリブートアカデミーは100日間の伴走プログラムを提供しています。LINEで無料相談を受け付けています。"
            buttonLabel="LINEで無料相談する（登録無料）"
          />
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
              { href: "/academy/blog/ai-anxiety-overcome-guide", label: "AI不安を乗り越えるガイド" },
              { href: "/academy/blog/ai-first-30-days-work-guide", label: "AI活用 最初の30日ガイド" },
              { href: "/academy", label: "AIリブートアカデミー TOP" },
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
