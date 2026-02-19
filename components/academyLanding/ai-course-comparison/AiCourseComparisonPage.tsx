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
    title: "目的の一致度",
    description: "最初に「何をできるようになりたいか」を揃えると、比較軸がぶれません。",
    checkpoints: ["到達ゴールが明文化されている", "対象者と前提スキルが明確", "卒業後の活用シーンが想定できる"],
  },
  {
    title: "生成AIの実践性",
    description: "知識だけで終わらず、実務に近いアウトプットを積み上げられるかが重要です。",
    checkpoints: ["提出物（成果物）が明確", "フィードバックと改善サイクルがある", "実務に近い題材・テンプレが用意されている"],
  },
  {
    title: "伴走と学習環境",
    description: "挫折しやすいポイントを超えられる運用（質問・面談・コミュニティ）を確認します。",
    checkpoints: ["質問手段と回答スピード", "面談/コーチングの頻度", "学習コミュニティの有無"],
  },
  {
    title: "自己理解・キャリア設計",
    description: "学びを「次の仕事」に繋げるために、自己理解と意思決定の支援があるかを見ます。",
    checkpoints: ["強み・価値観を言語化できる設計", "キャリアの棚卸し/目標設定の支援", "学びの選択理由を説明できる状態になる"],
  },
  {
    title: "費用・制度・条件",
    description: "総額・追加費用・制度適用の条件を揃えると、後からの手戻りを減らせます。",
    checkpoints: ["税込総額と追加費用の明記", "制度対象/条件の確認導線", "返金・解約条件が明確"],
  },
] as const;

const differentiationPoints = [
  {
    title: "生成AI活用力（実務で即使える体系）",
    body: "学んで終わりではなく、業務で再現できる形に落とし込めるように、実践と振り返りを中心に設計しています。",
  },
  {
    title: "自己理解・キャリアデザイン（AIを鏡に再設計）",
    body: "AIを活用しながら強み・価値観を言語化し、次のキャリアを“選べる状態”に整える支援を重視しています。",
  },
  {
    title: "仲間と共に学ぶ環境（対話と協働）",
    body: "一人で抱え込まずに進められるように、対話・フィードバック・協働が生まれる学習環境づくりを大切にしています。",
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
            AIスクールは情報が多く、価格だけで選ぶと後悔しがちです。
            価格だけでなく「伴走の深さ」と「実践課題の質」を同時に比較すると、受講後のミスマッチを減らせます。
            比較では「週の面談頻度」と「課題レビューの有無」を優先して確認すると、判断がブレにくくなります。
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
          <p className={sectionLabelClass}>CHECKPOINTS</p>
          <h2 className={sectionHeadingClass}>講座選びの5つのチェックポイント</h2>
          <p className="mt-4 max-w-4xl text-sm sm:text-base font-semibold text-slate-900">
            5つのチェックポイントを同じ粒度で揃えると、比較の抜け漏れを防げます。
          </p>

          <motion.ol
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {comparisonAxes.map((axis, index) => (
              <motion.li key={axis.title} variants={itemReveal} className="border-b border-slate-200 py-6">
                <p className="text-xs font-bold tracking-[0.14em] text-slate-500">CHECKPOINT {index + 1}</p>
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
          <p className={sectionLabelClass}>DIFFERENTIATION</p>
          <h2 className={sectionHeadingClass}>AIリブートアカデミーの差別化ポイント</h2>
          <p className="mt-4 max-w-4xl text-sm sm:text-base font-semibold text-slate-900">
            継続できる伴走と、実務に直結するアウトプット設計がある講座ほど、受講後に使える形で残りやすいです。
          </p>

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
          <p className="mt-3 max-w-4xl text-sm sm:text-base text-slate-700">
            補助金や評判も含めて判断したい場合は、関連ページも合わせて確認してください。
          </p>
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
          <p className="mt-4 max-w-4xl text-sm sm:text-base font-semibold text-slate-900">
            迷ったら「目的の一致度」「伴走」「実践課題」の3点から先に絞ると、比較が早くなります。
          </p>

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
