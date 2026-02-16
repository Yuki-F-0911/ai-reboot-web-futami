"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

type SubsidyGuidePageProps = {
  faqItems: readonly FAQItem[];
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

const factItems = [
  { label: "最大補助率", value: "70%" },
  { label: "上限額", value: "56万円" },
  { label: "自己負担", value: "実質120,000円〜" },
  { label: "期限", value: "2027年3月31日まで（受講開始）" },
] as const;

const supportCards = [
  {
    title: "キャリア相談（無料）",
    description: "専門家とキャリアの棚卸し・ゴール設定",
  },
  {
    title: "リスキリング（補助対象）",
    description: "AI活用スキルなど新しいスキルを習得",
  },
  {
    title: "転職支援（無料）",
    description: "転職に向けた伴走支援・転職先紹介",
  },
] as const;

const eligibleItems = [
  "企業等と雇用契約を締結している在職者",
  "雇用形態は問わない（正社員・契約社員・パート・アルバイト・派遣）",
  "転職を目指している方",
  "副業・兼業をしていても利用可能",
  "同業他社への転職でも対象",
] as const;

const ineligibleItems = [
  "フリーランス・個人事業主",
  "経営者",
  "失業中の方（登録時点で在職が必要）",
  "スキルアップのみが目的の方（転職意思が必要）",
] as const;

const flowSteps = [
  {
    title: "無料説明会に参加",
    description: "補助金の対象条件や申請方法を詳しくご案内",
  },
  {
    title: "キャリア相談（無料）",
    description: "専門のキャリアコンサルタントと目標設定",
  },
  {
    title: "リスキリング講座を受講",
    description: "100日間の実践プログラムでAIスキルを習得",
  },
  {
    title: "受講修了・一次補助",
    description: "受講費用の50%が補助される",
  },
  {
    title: "転職成功・追加補助",
    description: "転職後1年継続就業で追加20%が補助される",
  },
] as const;

const sectionLabelClass = "text-orange-500 font-bold text-sm tracking-wider mb-2";
const sectionHeadingClass = "text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900";

const lineIcon = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

const SubsidyGuidePage = ({ faqItems }: SubsidyGuidePageProps) => {
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
          <p className={sectionLabelClass}>SUBSIDY GUIDE</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            リスキリング補助金で受講費用の最大70%をカバー
          </h1>
          <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-700">
            経済産業省「リスキリングを通じたキャリアアップ支援事業」を活用して、AIスキルを身につけませんか？
          </p>

          <motion.div
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {factItems.map((item) => (
              <motion.div
                key={item.label}
                variants={itemReveal}
                className="rounded-2xl border border-orange-200 bg-white/90 p-4 shadow-sm"
              >
                <p className="text-xs font-bold tracking-wide text-orange-500">{item.label}</p>
                <p className="mt-2 text-lg font-bold text-slate-900">{item.value}</p>
              </motion.div>
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
          <p className={sectionLabelClass}>ABOUT</p>
          <h2 className={sectionHeadingClass}>リスキリングを通じたキャリアアップ支援事業とは</h2>
          <p className="mt-5 max-w-4xl text-base sm:text-lg leading-relaxed text-slate-700">
            経済産業省が実施する在職者向けのキャリアアップ支援制度。「キャリア相談」「リスキリング講座」「転職支援」の3つのサポートを一体的に受けられます。
          </p>

          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {supportCards.map((card, index) => (
              <motion.article
                key={card.title}
                variants={itemReveal}
                className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-5"
              >
                <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-sm font-bold text-white">
                  {index + 1}
                </p>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{card.description}</p>
              </motion.article>
            ))}
          </motion.div>

          <p className="mt-6 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
            所管は経済産業省。事業期間は延長されている（2023年12月発表）。
          </p>
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
          <p className={sectionLabelClass}>ELIGIBILITY</p>
          <h2 className={sectionHeadingClass}>補助金の対象になる方</h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <motion.div
              className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h3 className="text-xl font-bold text-slate-900">対象者</h3>
              <ul className="mt-4 space-y-3">
                {eligibleItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-rose-200 bg-white p-6 shadow-sm"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-slate-900">対象外</h3>
              <ul className="mt-4 space-y-3">
                {ineligibleItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                      ×
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-6 space-y-3 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm leading-relaxed text-slate-700">
            <p>
              「公務員の方は原則対象外ですが、雇用保険加入等の条件により対象となる場合があります。詳しくは無料説明会でご確認ください。」
            </p>
            <p>
              「年齢制限や役員の対象可否については、個別の状況により異なります。お気軽にお問い合わせください。」
            </p>
          </div>
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
          <p className={sectionLabelClass}>PRICING</p>
          <h2 className={sectionHeadingClass}>補助金額の計算例</h2>

          <div className="mt-8 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-6">
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="inline-flex h-8 items-center rounded-full bg-orange-500 px-3 text-sm font-bold text-white">
                  Step1
                </div>
                <p className="text-slate-700">
                  <span className="font-bold text-slate-900">受講修了時</span> → 受講費用（税抜）の1/2（上限40万円）
                </p>
              </div>
              <div className="flex gap-4">
                <div className="inline-flex h-8 items-center rounded-full bg-amber-500 px-3 text-sm font-bold text-white">
                  Step2
                </div>
                <p className="text-slate-700">
                  <span className="font-bold text-slate-900">転職後1年継続就業</span> → 追加で受講費用（税抜）の1/5（上限16万円）
                </p>
              </div>
              <p className="rounded-xl border border-orange-300 bg-white px-4 py-3 text-center text-lg font-bold text-orange-600">
                合計: 最大70%（上限56万円）
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">AIリブートアカデミーの場合（計算例）</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>通常価格: 330,000円（税込）/ 税抜300,000円</li>
              <li>Step1補助: 300,000 × 50% = 150,000円</li>
              <li>受講修了後の自己負担: 180,000円</li>
              <li>Step2補助: 300,000 × 20% = 60,000円</li>
              <li className="font-bold text-slate-900">転職成功後の実質負担: 120,000円</li>
            </ul>
          </div>

          <div className="mt-5 space-y-2 text-sm text-slate-600">
            <p>※補助金は税抜価格を基準に計算されます</p>
            <p>
              ※補助金は受講者への直接給付ではなく、補助事業者（AIリブートアカデミー）を通じて処理されます
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>FLOW</p>
          <h2 className={sectionHeadingClass}>ご利用の流れ</h2>

          <motion.ol
            className="mt-8 space-y-5"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {flowSteps.map((step, index) => (
              <motion.li key={step.title} variants={itemReveal} className="relative pl-12">
                {index < flowSteps.length - 1 && (
                  <span className="absolute left-[15px] top-8 h-[calc(100%+24px)] w-px bg-orange-200" aria-hidden="true" />
                )}
                <span className="absolute left-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <p className="mt-6 rounded-xl border border-orange-200 bg-white p-4 text-sm text-slate-600">
            受講開始は2027年3月31日以前、転職は2028年3月31日以前が条件です
          </p>
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
          <h2 className={sectionHeadingClass}>補助金に関するよくある質問</h2>

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

      <section className="border-t border-slate-200 pt-12 pb-4">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連コンテンツ</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/subsidy-eligible-courses"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                補助金対象講座の見分け方
              </Link>
            </li>
            <li>
              <Link
                href="/academy/ai-course-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI講座の選び方 7つの比較ポイント
              </Link>
            </li>
          </ul>
        </div>
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
          <p className="text-sm font-bold tracking-wider text-orange-100">APPLY</p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
            まずは無料説明会で補助金の詳細をご確認ください
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-orange-50">
            あなたが補助金の対象かどうか、個別にご案内いたします
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

          <div className="mt-5">
            <Link href="/academy" className="text-sm font-bold underline underline-offset-4 hover:opacity-90">
              AIリブートアカデミーTOPへ戻る
            </Link>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-orange-100">
            出典: 経済産業省「リスキリングを通じたキャリアアップ支援事業」公式サイト{" "}
            <a
              href="https://careerup.reskilling.go.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              https://careerup.reskilling.go.jp/
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default SubsidyGuidePage;
