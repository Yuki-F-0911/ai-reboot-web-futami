"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

type FAQItem = {
  question: string;
  answer: string;
};

type ReskillingCourseRecommendationPageProps = {
  faqItems: readonly FAQItem[];
};

type RecommendationCriterion = {
  title: string;
  description: string;
  checks: readonly string[];
};

type PurposeRecommendation = {
  title: string;
  focus: string;
  points: readonly string[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const sectionLabelClass = "text-xs font-bold tracking-[0.14em] text-slate-500";
const sectionHeadingClass = "mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl";

const recommendationCriteria: readonly RecommendationCriterion[] = [
  {
    title: "目的と講座内容の一致",
    description: "転職、副業、社内活用のどれを優先するかで、必要なカリキュラムは変わります。",
    checks: ["目的を一つに絞る", "目的に対応する課題設計がある", "修了後の行動導線がある"],
  },
  {
    title: "AI活用の実践性",
    description: "基礎知識だけでなく、現場で再現できる演習設計があるかを確認します。",
    checks: ["実践課題の有無", "レビュー機会の有無", "業務転用の手順が示されている"],
  },
  {
    title: "補助金対応の確認しやすさ",
    description: "制度名だけでなく、対象条件と最新情報への導線があるかが重要です。",
    checks: ["制度案内の明確さ", "対象条件の明記", "公式情報へのリンク"],
  },
  {
    title: "伴走と受講後支援",
    description: "受講中の質問対応に加えて、受講後の実務適用支援まで確認すると成果をつなげやすくなります。",
    checks: ["質問対応の仕組み", "面談や相談機会", "受講後フォローの有無"],
  },
] as const;

const purposeRecommendations: readonly PurposeRecommendation[] = [
  {
    title: "転職目的",
    focus: "成果物とキャリア支援の接続を重視",
    points: ["実践課題で成果物を作れる講座", "応募準備や相談導線がある講座", "スキル説明の再現性を作れる講座"],
  },
  {
    title: "副業目的",
    focus: "短いサイクルでアウトプットできる設計を重視",
    points: ["小さな案件想定の演習がある講座", "納品フローを学べる講座", "提案・実装の型が身につく講座"],
  },
  {
    title: "社内スキルアップ目的",
    focus: "現職業務への転用を重視",
    points: ["業務課題に置き換えられる講座", "部門内共有しやすい設計がある講座", "運用ルールまで整理できる講座"],
  },
] as const;

const subsidyCheckItems = [
  "講座ページで対象制度名を確認する",
  "公式サイトで最新条件を確認する",
  "対象可否を講座提供元へ最終確認する",
] as const;

const finalCheckpoints = [
  "価格より先に目的一致を確認する",
  "実践課題と伴走体制を確認する",
  "補助金情報の更新日と適用条件を確認する",
] as const;

const internalLinks = [
  { href: "/academy", label: "AIリブートアカデミーTOP" },
  { href: "/academy/subsidy-guide", label: "補助金ガイド" },
  { href: "/academy/reviews", label: "受講生の評判・口コミ" },
  { href: "/academy/seminars", label: "セミナー一覧" },
] as const;

const ReskillingCourseRecommendationPage = ({ faqItems }: ReskillingCourseRecommendationPageProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(130deg,#ffffff_0%,#fff8ee_56%,#ffefd9_100%)] pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_4%,rgba(245,158,11,0.16),transparent_36%)]" />
        <motion.div
          className="relative container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <AcademyBreadcrumb
            className="mb-6"
            items={[
              { label: "ホーム", href: "/" },
              { label: "アカデミー", href: "/academy" },
              { label: "リスキリング講座おすすめ" },
            ]}
          />
          <p className={sectionLabelClass}>RESKILLING COURSE RECOMMENDATION</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            2026年おすすめリスキリング講座｜補助金対応・AI特化で選ぶ
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            2026年の講座選びでは「目的一致」「AI実践性」「補助金確認導線」の3点を先に揃えると比較がぶれません。
            このページでは、目的別の選び方と失敗を避ける確認手順を整理しています。
          </p>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>CRITERIA</p>
          <h2 className={sectionHeadingClass}>おすすめ講座の選定基準</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            目的一致とAI実践性を先に揃え、最後に補助金対応を確認すると比較の精度が上がります。
          </p>

          <motion.ol
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {recommendationCriteria.map((criterion, index) => (
              <motion.li key={criterion.title} variants={itemReveal} className="border-b border-slate-200 py-6">
                <p className="text-xs font-bold tracking-[0.14em] text-slate-500">CRITERION {index + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">{criterion.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{criterion.description}</p>
                <ul className="mt-4 space-y-1 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {criterion.checks.map((check) => (
                    <li key={check}>- {check}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>BY PURPOSE</p>
          <h2 className={sectionHeadingClass}>目的別おすすめ</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            目的が違うと最適解は変わります。ここでは「優先すべき成果」から逆算して整理します。
          </p>

          <motion.div
            className="mt-8 grid gap-6 lg:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {purposeRecommendations.map((item) => (
              <motion.article key={item.title} variants={itemReveal} className="rounded-lg border border-slate-200 p-5">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm font-bold text-slate-700 sm:text-base">{item.focus}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {item.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>SUBSIDY</p>
          <h2 className={sectionHeadingClass}>補助金が使える講座の見分け方</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            公式情報への導線があるかどうかで、制度適用の誤解を減らせます。
          </p>
          <ul className="mt-8 rounded-lg border border-slate-200">
            {subsidyCheckItems.map((item, index) => (
              <li key={item} className="border-b border-slate-200 px-5 py-4 last:border-b-0">
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">STEP {index + 1}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-700 sm:text-base">{item}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>FINAL CHECK</p>
          <h2 className={sectionHeadingClass}>失敗しないための3つのチェックポイント</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            比較表の前に、最低限この3点だけ確認するとミスマッチを避けやすいです。
          </p>
          <ul className="mt-8 rounded-lg border border-slate-200">
            {finalCheckpoints.map((item, index) => (
              <li key={item} className="border-b border-slate-200 px-5 py-4 last:border-b-0">
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">POINT {index + 1}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-700 sm:text-base">{item}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-12">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900">関連ページ</h2>
          <ul className="mt-4 space-y-2 text-sm sm:text-base">
            {internalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>FAQ</p>
          <h2 className={sectionHeadingClass}>よくある質問</h2>

          <motion.div
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqItems.map((item, index) => (
              <motion.div key={item.question} variants={itemReveal} className="border-b border-slate-200 py-4">
                <details
                  open={openFaqIndex === index}
                  onToggle={(event) => {
                    if (event.currentTarget.open) {
                      setOpenFaqIndex(index);
                      return;
                    }
                    if (openFaqIndex === index) {
                      setOpenFaqIndex(null);
                    }
                  }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-bold text-slate-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                    <span>
                      Q{index + 1}. {item.question}
                    </span>
                    <span className="text-xl text-slate-500">{openFaqIndex === index ? "-" : "+"}</span>
                  </summary>
                  <p className="mt-3 pr-6 text-sm leading-relaxed text-slate-700 sm:text-base">A{index + 1}. {item.answer}</p>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default ReskillingCourseRecommendationPage;
