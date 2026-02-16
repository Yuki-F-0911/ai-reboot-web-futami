"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

type AiCourseComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

type PointItem = {
  id: number;
  headline: string;
  title: string;
  description: string;
  check: string;
  icon: ReactNode;
  extraLink?: {
    href: string;
    label: string;
  };
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
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
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const sectionLabelClass = "text-orange-500 font-bold text-sm tracking-wider mb-2";
const sectionHeadingClass = "text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900";

const problemItems = [
  {
    title: "たくさんあって違いがわからない",
    description: "生成AIスクールは急増中。価格も期間もバラバラで比較が難しい",
  },
  {
    title: "高額な費用を払って失敗したくない",
    description: "10万〜60万円の受講料は気軽に払える額ではない",
  },
  {
    title: "動画を見るだけで身につくのか不安",
    description: "独学やeラーニングだけでは実務に活かせるか心配",
  },
  {
    title: "補助金が使えるのか、どう使えばいいかわからない",
    description: "複数の制度があり条件も複雑",
  },
] as const;

const comparisonPoints: readonly PointItem[] = [
  {
    id: 1,
    headline: "ポイント1",
    title: "まず目的を明確にする",
    description:
      "ビジネス活用（業務効率化）、エンジニア転向（開発力）、教養・リテラシーの3タイプがある。目的によって最適な講座は異なる。",
    check: "自分の目的に合ったカリキュラムが用意されているか",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
      </svg>
    ),
  },
  {
    id: 2,
    headline: "ポイント2",
    title: "料金だけでなく実質負担額で比較する",
    description:
      "市場の相場は10万〜60万円程度。ただし補助金制度を活用すると実質負担が大幅に下がるケースがある。「受講料÷学習時間」や「受講料÷サポート回数」で費用対効果を考えるのも一つの方法。",
    check: "補助金適用後の実質負担額を確認しているか",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-10v12m9-6a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    headline: "ポイント3",
    title: "無理なく続けられる期間か",
    description:
      "4週間の短期集中型から6ヶ月のじっくり型まで様々。社会人は仕事との両立が重要。週あたりの学習時間の目安も確認すべき。",
    check: "自分の生活リズムに無理なく組み込めるか",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    headline: "ポイント4",
    title: "一人で学ぶか伴走してもらうか",
    description:
      "動画教材のみ/チャット質問対応/メンター定期面談/マンツーマン指導 の4段階がある。学習の挫折率はサポート体制で大きく変わる。",
    check: "質問できる環境があるか、メンターがつくか",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v8l-4-4H7a2 2 0 01-2-2v-2m12-6V4a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h2" />
      </svg>
    ),
  },
  {
    id: 5,
    headline: "ポイント5",
    title: "わかるとできるは違う",
    description:
      "知識のインプットだけでなく、実際のプロジェクトや業務課題に取り組む演習があるかが重要。実務で使えるスキルは実践の中でしか身につかない。",
    check: "実際に手を動かす演習やプロジェクトがカリキュラムに含まれているか",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L6 21m0 0l-3-3m3 3V10a8 8 0 018-8h4" />
      </svg>
    ),
  },
  {
    id: 6,
    headline: "ポイント6",
    title: "使える制度を最大限活用する",
    description:
      "主な制度は「リスキリングを通じたキャリアアップ支援事業」（最大70%/上限56万円）と「教育訓練給付金」（最大80%）。すべての講座が対象ではないので事前確認が必須。",
    check: "受講したい講座が補助金の対象になっているか",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l2 2 4-4m5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    extraLink: {
      href: "/academy/subsidy-guide",
      label: "補助金の詳細はこちら",
    },
  },
  {
    id: 7,
    headline: "ポイント7",
    title: "学んだ後のサポートがあるか",
    description:
      "キャリアコンサルティング、転職支援、卒業生コミュニティなど。学んだスキルをキャリアに活かすためのサポートがあるかどうか。",
    check: "卒業後のキャリア支援や相談窓口があるか",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A6.969 6.969 0 0112 15c2.042 0 3.88.867 5.162 2.252M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
] as const;

const checklistRows = [
  { point: "受講目的", check: "自分の目的に合ったカリキュラムか" },
  { point: "価格", check: "補助金適用後の実質負担額" },
  { point: "期間", check: "仕事との両立が可能な学習ペースか" },
  { point: "サポート", check: "メンターや質問環境の有無" },
  { point: "実践性", check: "手を動かす演習があるか" },
  { point: "補助金", check: "対象講座として認定されているか" },
  { point: "キャリア", check: "卒業後のキャリアサポートがあるか" },
] as const;

const ourApproachItems = [
  {
    point: "目的",
    title: "生成AI活用を軸に、100日間で実践力を育てる",
    description: "生成AIツールを使いこなすためのマインドセットとスキルを習得する実践プログラム",
  },
  {
    point: "価格",
    title: "一般受講料330,000円（税込）",
    description: "補助金活用で180,000円〜、転職後1年継続就業で実質120,000円〜",
  },
  {
    point: "期間",
    title: "2日間の宿泊型集合研修 + 100日間プログラム",
    description: "短期集中のスタートと、継続的な実践で学びを定着",
  },
  {
    point: "サポート",
    title: "メンター伴走サポート",
    description: "継続支援に加えてキャリアコンサルティングを3回実施",
  },
  {
    point: "実践性",
    title: "実践的なワークショップ中心",
    description: "100日間の実践プログラムで、実務に活かすアウトプットを重視",
  },
  {
    point: "補助金",
    title: "経済産業省リスキリング補助金対象講座",
    description: "「リスキリングを通じたキャリアアップ支援事業」の対象として受講可能",
  },
  {
    point: "キャリア",
    title: "受講後のキャリア支援まで一体でサポート",
    description: "キャリア相談・転職支援を通じて学びの先まで伴走",
  },
] as const;

const lineIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

const checkIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const AiCourseComparisonPage = ({ faqItems }: AiCourseComparisonPageProps) => {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute -top-28 -left-16 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />

        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>COURSE GUIDE</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            失敗しないAI講座の選び方 — 7つの比較ポイント
          </h1>
          <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-700">
            生成AI講座・リスキリング講座を選ぶ際に確認すべき7つの視点を解説します。あなたに合った講座を見つけるためのガイドです。
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>PROBLEM</p>
          <h2 className={sectionHeadingClass}>AI講座選びでよくある悩み</h2>
          <p className="mt-4 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-600">
            以下は市場一般の傾向としてよく挙がる悩みです。特定の講座やサービスを批判する意図はありません。
          </p>

          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {problemItems.map((item, index) => (
              <motion.article
                key={item.title}
                variants={itemReveal}
                className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-5"
              >
                <p className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 px-2 text-sm font-bold text-white">
                  {index + 1}
                </p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>COMPARISON</p>
          <h2 className={sectionHeadingClass}>AI講座を選ぶ7つの比較ポイント</h2>

          <motion.div
            className="mt-8 grid gap-5 lg:grid-cols-2"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {comparisonPoints.map((point) => (
              <motion.article
                key={point.id}
                variants={itemReveal}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    {point.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-wide text-orange-500">{point.headline}</p>
                    <h3 className="text-xl font-bold text-slate-900">{point.title}</h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-700">{point.description}</p>

                {point.extraLink && (
                  <div className="mt-4">
                    <Link
                      href={point.extraLink.href}
                      className="text-sm font-bold text-orange-600 underline underline-offset-4 hover:text-orange-700"
                    >
                      {point.extraLink.label}
                    </Link>
                  </div>
                )}

                <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-slate-700">
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex text-orange-600">{checkIcon}</span>
                    <span>
                      <strong className="font-bold text-slate-900">チェック:</strong> {point.check}
                    </span>
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>CHECKLIST</p>
          <h2 className={sectionHeadingClass}>講座選びチェックリスト</h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="w-40 border-b border-slate-200 px-4 py-3 text-sm font-bold text-slate-900 sm:px-6">
                    比較ポイント
                  </th>
                  <th className="border-b border-slate-200 px-4 py-3 text-sm font-bold text-slate-900 sm:px-6">
                    確認すること
                  </th>
                </tr>
              </thead>
              <tbody>
                {checklistRows.map((row) => (
                  <tr key={row.point} className="odd:bg-white even:bg-slate-50/70">
                    <td className="border-b border-slate-100 px-4 py-3 text-sm font-bold text-slate-900 sm:px-6">
                      {row.point}
                    </td>
                    <td className="border-b border-slate-100 px-4 py-3 text-sm text-slate-700 sm:px-6">{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>OUR APPROACH</p>
          <h2 className={sectionHeadingClass}>AIリブートアカデミーの特徴</h2>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
            上記の7つのポイントに沿って、AIリブートアカデミーの特徴をご紹介します。
          </p>

          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {ourApproachItems.map((item) => (
              <motion.article
                key={item.point}
                variants={itemReveal}
                className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-5"
              >
                <p className="text-xs font-bold tracking-wide text-orange-500">{item.point}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>FAQ</p>
          <h2 className={sectionHeadingClass}>AI講座選びに関するよくある質問</h2>

          <motion.div
            className="mt-8 space-y-4"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqItems.map((item, index) => (
              <motion.article
                key={item.question}
                variants={itemReveal}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Q{index + 1}: {item.question}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">A{index + 1}: {item.answer}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-amber-500 py-14 md:py-20 text-white">
        <motion.div
          className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-sm font-bold tracking-wider text-orange-100">NEXT STEP</p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
            まずは無料説明会であなたに合った学び方をご相談ください
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-orange-50">
            AIリブートアカデミーが気になった方は、まず無料説明会で詳しくお話しします。補助金の対象かどうかもその場で確認できます。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05b54d]"
            >
              {lineIcon}
              LINE で無料相談する
            </a>
            <Link
              href="/briefing"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-orange-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-50"
            >
              無料説明会に申し込む
            </Link>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <Link href="/academy/subsidy-guide" className="text-sm font-bold underline underline-offset-4 hover:opacity-90">
              補助金ガイドを見る
            </Link>
            <Link href="/academy" className="text-sm font-bold underline underline-offset-4 hover:opacity-90">
              アカデミーTOPに戻る
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AiCourseComparisonPage;
