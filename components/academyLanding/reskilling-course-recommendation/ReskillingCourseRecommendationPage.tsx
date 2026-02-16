"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

type ReskillingCourseRecommendationPageProps = {
  faqItems: readonly FAQItem[];
};

type SelectionCriterion = {
  title: string;
  purpose: string;
  points: readonly string[];
  referenceLink?: {
    href: string;
    label: string;
  };
};

const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
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
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const sectionLabelClass = "text-xs font-bold tracking-[0.16em] text-slate-500";
const sectionHeadingClass = "mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl";

const backgroundPatternClass =
  "bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_56%),radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.16),transparent_52%)]";

const aboutReskillingParagraphs = [
  "リスキリング講座は、仕事で求められる変化に対応するために新しい知識やスキルを学ぶ学習機会です。現在の職種での実務改善を目指す場合にも、次の職種への移行を目指す場合にも活用されます。",
  "背景には、業務のデジタル化やDX推進の加速があります。業務フローの見直し、データ活用、生成AIの実装など、従来とは異なる実務スキルが求められる場面が増えています。",
  "あわせて、学び直しを後押しする公的支援の流れも広がっています。講座選びでは、制度の対象可否だけでなく、制度を使わない場合でも納得できる学習設計かを確認することが重要です。",
] as const;

const selectionCriteria: readonly SelectionCriterion[] = [
  {
    title: "学習目的との一致（キャリアチェンジ / スキルアップ / 教養）",
    purpose:
      "受講前に「何を変えたいのか」を言語化すると、講座の比較軸が明確になります。目的が曖昧なまま選ぶと、修了後にミスマッチが起きやすくなります。",
    points: [
      "キャリアチェンジなら職種転換に必要な成果物や支援があるか",
      "スキルアップなら現在業務への転用手順まで扱っているか",
      "教養目的なら負荷が過度でないか",
    ],
  },
  {
    title: "補助金の対応状況（リスキリング補助金 / 教育訓練給付金）",
    purpose:
      "受講費用だけで判断せず、制度適用時と非適用時の両方で比較するのが基本です。制度は要件が変わる可能性があるため、最新条件の確認が欠かせません。",
    points: [
      "自分の雇用形態や目的が制度条件に合うか",
      "申請タイミングと必要書類が明確か",
      "補助金の前提を除いても継続できる費用設計か",
    ],
    referenceLink: {
      href: "/academy/subsidy-guide",
      label: "補助金の確認ポイントを見る",
    },
  },
  {
    title: "学習形式（オンライン / 対面 / ハイブリッド）",
    purpose:
      "成果は形式そのものより、生活リズムと学習設計の相性で決まります。通学時間、業務時間、家庭都合を含めて継続性を確認してください。",
    points: [
      "オンラインは時間調整しやすいか",
      "対面は集中しやすい環境を作れるか",
      "ハイブリッドは移動負担と学習効果のバランスが取れるか",
    ],
  },
  {
    title: "サポート体制（メンター / キャリア相談 / コミュニティ）",
    purpose:
      "サポートは「あるかどうか」より「どこまで対応するか」が重要です。質問方法、返信目安、相談範囲の具体性を確認すると比較しやすくなります。",
    points: [
      "メンター面談の頻度と担当範囲",
      "キャリア相談の実施条件と回数",
      "コミュニティ参加後の継続支援の有無",
    ],
  },
  {
    title: "カリキュラムの実践度（課題型 / 座学型）",
    purpose:
      "理解だけで終わらせないためには、課題型の比率が重要です。学習した内容を使って成果物を作る機会があるかを確認しましょう。",
    points: [
      "課題提出やレビューの機会があるか",
      "座学内容を実務課題に接続できるか",
      "学習ログや振り返り設計があるか",
    ],
  },
  {
    title: "受講後のキャリア支援（転職支援 / ポートフォリオ支援）",
    purpose:
      "受講後に行動へ移せる導線がある講座は、学習効果を実務成果に変換しやすくなります。終了時点ではなく、その後の支援まで見て選ぶのが実践的です。",
    points: [
      "転職活動の相談や応募支援があるか",
      "ポートフォリオ設計や添削支援があるか",
      "修了後も相談できる窓口があるか",
    ],
  },
] as const;

const cautionItems = [
  {
    title: "実績が不透明な講座",
    description:
      "受講前に確認できる情報が抽象的すぎる場合は注意が必要です。学習範囲、サポート範囲、修了後の支援内容が具体的に示されているかを確認してください。",
  },
  {
    title: "サポート内容が曖昧な講座",
    description:
      "「質問し放題」などの表現だけでは判断しづらいため、返信目安、対応時間、対象範囲を事前に確認しましょう。運用ルールが見えない場合は比較から外す判断も有効です。",
  },
  {
    title: "補助金だけを過度に強調する講座",
    description:
      "補助金は有効な支援制度ですが、講座価値そのものの代替にはなりません。制度適用の有無にかかわらず、学習目的に合うかどうかを最優先で判断してください。",
  },
] as const;

const relatedGuideLinks = [
  {
    href: "/academy/ai-course-comparison",
    label: "AI講座比較ガイドへ",
  },
  {
    href: "/academy/subsidy-guide",
    label: "補助金ガイドへ",
  },
] as const;

const ReskillingCourseRecommendationPage = ({ faqItems }: ReskillingCourseRecommendationPageProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className={`absolute inset-0 ${backgroundPatternClass}`} aria-hidden="true" />
        <motion.div
          className="relative container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>RESKILLING COURSE GUIDE</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            リスキリング講座おすすめの選び方
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            「どれが自分に合うのか」を判断しやすくするために、講座比較の基準を6つに整理しました。
            受講前に確認すべき観点と、見落としやすい注意点を客観的にまとめています。
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
          <p className={sectionLabelClass}>BASICS</p>
          <h2 className={sectionHeadingClass}>リスキリング講座とは</h2>

          <motion.div
            className="mt-6 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {aboutReskillingParagraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={itemReveal}
                className="border-b border-slate-200 py-5 text-sm leading-relaxed text-slate-700 sm:text-base"
              >
                {paragraph}
              </motion.p>
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
          <p className={sectionLabelClass}>CHECKPOINTS</p>
          <h2 className={sectionHeadingClass}>おすすめの選び方 6つの基準</h2>

          <motion.dl
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {selectionCriteria.map((criterion, index) => (
              <motion.div key={criterion.title} variants={itemReveal} className="border-b border-slate-200 py-6">
                <dt className="text-slate-900">
                  <p className="text-xs font-bold tracking-[0.14em] text-slate-500">CRITERION {index + 1}</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug sm:text-xl">{criterion.title}</h3>
                </dt>
                <dd className="mt-3">
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{criterion.purpose}</p>
                  <ul className="mt-4 border-t border-slate-200 text-sm leading-relaxed text-slate-700 sm:text-base">
                    {criterion.points.map((point) => (
                      <li key={point} className="border-b border-slate-200 py-3">
                        {point}
                      </li>
                    ))}
                  </ul>
                  {criterion.referenceLink && (
                    <p className="mt-4 text-sm font-bold">
                      <Link href={criterion.referenceLink.href} className="text-amber-700 underline underline-offset-4 hover:text-amber-800">
                        {criterion.referenceLink.label}
                      </Link>
                    </p>
                  )}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
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
          <p className={sectionLabelClass}>CAUTION</p>
          <h2 className={sectionHeadingClass}>こんな講座は要注意</h2>

          <motion.ul
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cautionItems.map((item) => (
              <motion.li key={item.title} variants={itemReveal} className="border-b border-slate-200 py-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{item.description}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
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
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="flex w-full items-center justify-between gap-3 text-left text-base font-bold text-slate-900 sm:text-lg"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span>
                      Q{index + 1}: {item.question}
                    </span>
                    <span className="text-xl text-amber-700">{openFaqIndex === index ? "−" : "+"}</span>
                  </button>
                </h3>
                {openFaqIndex === index && (
                  <p className="mt-3 pr-6 text-sm leading-relaxed text-slate-700 sm:text-base">A{index + 1}: {item.answer}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-16 md:py-20">
        <motion.div
          className="container mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>NEXT ACTION</p>
          <h2 className={sectionHeadingClass}>比較前に迷ったら、まず相談して方針を整理</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            目的に合う講座の条件が曖昧な段階でも、相談しながら比較軸を整理できます。LINE相談と無料説明会を用意しています。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#05b54d]"
            >
              LINEで相談する
            </a>
            <Link
              href="/briefing"
              className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-amber-700"
            >
              無料説明会に申し込む
            </Link>
          </div>

          <ul className="mx-auto mt-8 max-w-2xl border-t border-slate-200 text-sm font-bold text-slate-800">
            {relatedGuideLinks.map((item) => (
              <li key={item.href} className="border-b border-slate-200 py-3">
                <Link href={item.href} className="underline underline-offset-4 hover:text-amber-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </main>
  );
};

export default ReskillingCourseRecommendationPage;
