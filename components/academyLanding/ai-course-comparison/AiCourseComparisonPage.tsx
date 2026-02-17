"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

type FAQItem = {
  question: string;
  answer: string;
};

type AiCourseComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

type ComparisonAxis = {
  title: string;
  description: string;
  checkpoints: readonly string[];
};

type AnonymousComparisonRow = {
  school: string;
  price: string;
  duration: string;
  support: string;
  practical: string;
  subsidy: string;
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

const comparisonAxes: readonly ComparisonAxis[] = [
  {
    title: "価格",
    description: "受講料の総額だけでなく、質問対応や演習レビューが含まれるかを同条件で比較します。",
    checkpoints: ["税込総額の明記", "追加費用の有無", "費用に含まれるサポート範囲"],
  },
  {
    title: "期間",
    description: "仕事や家庭と両立できる学習ペースかどうかを、週単位で確認します。",
    checkpoints: ["受講期間", "週の学習目安", "遅れた場合のフォロー"],
  },
  {
    title: "伴走度",
    description: "質問窓口の有無だけでなく、面談頻度や回答スピードの運用まで確認します。",
    checkpoints: ["質問手段", "面談頻度", "相談できる範囲"],
  },
  {
    title: "実践性",
    description: "知識インプット中心か、業務課題に近いアウトプット中心かで習得の質が変わります。",
    checkpoints: ["課題提出の有無", "レビューの有無", "成果物の作成機会"],
  },
  {
    title: "補助金対応",
    description: "講座情報と制度公式情報を突き合わせ、適用条件と申請フローを事前確認します。",
    checkpoints: ["対象制度の明記", "適用条件の明記", "最新情報の確認導線"],
  },
] as const;

const anonymousComparisonRows: readonly AnonymousComparisonRow[] = [
  {
    school: "A社",
    price: "要確認",
    duration: "要確認",
    support: "要確認",
    practical: "要確認",
    subsidy: "要確認",
  },
  {
    school: "B社",
    price: "要確認",
    duration: "要確認",
    support: "要確認",
    practical: "要確認",
    subsidy: "要確認",
  },
  {
    school: "C社",
    price: "要確認",
    duration: "要確認",
    support: "要確認",
    practical: "要確認",
    subsidy: "要確認",
  },
  {
    school: "AIリブートアカデミー",
    price: "公式案内で確認",
    duration: "100日伴走",
    support: "伴走サポートあり",
    practical: "実務直結の課題設計",
    subsidy: "経産省リスキリング関連制度の対象講座として案内",
  },
] as const;

const differentiationPoints = [
  {
    title: "100日伴走で継続しやすい設計",
    body: "学習の初速だけでなく、途中のつまずきにも対応しやすい伴走体制を重視しています。",
  },
  {
    title: "制度対象に関する情報を明確化",
    body: "制度情報の参照先と確認手順を明示し、受講前に判断できる状態をつくっています。",
  },
  {
    title: "実務直結のアウトプット重視",
    body: "学習内容を業務で再現できるように、実践課題と振り返りを中心に設計しています。",
  },
] as const;

const internalLinks = [
  { href: "/academy", label: "AIリブートアカデミーTOP" },
  { href: "/academy/subsidy-guide", label: "補助金ガイド" },
  { href: "/academy/reviews", label: "受講生の評判・口コミ" },
  { href: "/academy/seminars", label: "セミナー一覧" },
] as const;

const AiCourseComparisonPage = ({ faqItems }: AiCourseComparisonPageProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(130deg,#ffffff_0%,#fff6ed_56%,#ffeeda_100%)] pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_5%,rgba(249,115,22,0.16),transparent_36%)]" />
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
              { label: "AI講座比較" },
            ]}
          />
          <p className={sectionLabelClass}>AI COURSE COMPARISON</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            AI講座比較｜失敗しない選び方（価格・期間・伴走・実践性）
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            結論として、価格だけでなく「伴走の深さ」と「実践課題の質」を同時に比較すると、受講後のミスマッチを減らせます。
            このページでは、事実確認しながら比較するための軸とテンプレートを整理しています。
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
          <p className={sectionLabelClass}>AXES</p>
          <h2 className={sectionHeadingClass}>比較前に揃える5つの比較軸</h2>

          <motion.ol
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {comparisonAxes.map((axis, index) => (
              <motion.li key={axis.title} variants={itemReveal} className="border-b border-slate-200 py-6">
                <p className="text-xs font-bold tracking-[0.14em] text-slate-500">AXIS {index + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">{axis.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{axis.description}</p>
                <ul className="mt-4 space-y-1 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {axis.checkpoints.map((checkpoint) => (
                    <li key={checkpoint}>- {checkpoint}</li>
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
          <p className={sectionLabelClass}>TABLE</p>
          <h2 className={sectionHeadingClass}>匿名比較表（A社〜C社 + 自社）</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            競合名は匿名化し、確認できる事実のみを記載しています。A社〜C社は公開情報の精査前のため、入力欄として利用してください。
          </p>
          {/* TODO: 要ファクト確認 - A社/B社/C社の項目は一次情報確認後に更新 */}

          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-bold text-slate-900">講座</th>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-bold text-slate-900">価格</th>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-bold text-slate-900">期間</th>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-bold text-slate-900">伴走度</th>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-bold text-slate-900">実践性</th>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-bold text-slate-900">補助金対応</th>
                </tr>
              </thead>
              <tbody>
                {anonymousComparisonRows.map((row) => (
                  <tr key={row.school}>
                    <th className="border-b border-slate-200 px-4 py-3 text-left font-bold text-slate-900">{row.school}</th>
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">{row.price}</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">{row.duration}</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">{row.support}</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">{row.practical}</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">{row.subsidy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
          <p className={sectionLabelClass}>DIFFERENTIATION</p>
          <h2 className={sectionHeadingClass}>AIリブートアカデミーの差別化ポイント</h2>

          <motion.ul
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {differentiationPoints.map((point) => (
              <motion.li key={point.title} variants={itemReveal} className="border-b border-slate-200 py-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{point.body}</p>
              </motion.li>
            ))}
          </motion.ul>
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

export default AiCourseComparisonPage;
