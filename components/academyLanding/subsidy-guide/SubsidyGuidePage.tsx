"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

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
  { label: "補助上限額", value: "56万円" },
  { label: "受講料（税込）", value: "¥330,000" },
  { label: "実質負担目安", value: "¥120,000〜¥180,000" },
] as const;

const supportCards = [
  {
    title: "キャリア相談",
    description: "キャリアの棚卸しと方向性整理を行い、対象可否の前提を確認します。",
  },
  {
    title: "リスキリング講座",
    description: "AIリブートアカデミーで、実務で使うAIスキルを体系的に習得します。",
  },
  {
    title: "転職支援",
    description: "転職活動の設計と伴走支援を受けながら、追加補助の条件達成を目指します。",
  },
] as const;

const eligibleItems = [
  "会社員（正社員）として在職中",
  "契約社員・派遣社員として在職中",
  "パート・アルバイトとして在職中",
  "転職意向があり、キャリア相談に参加できる",
  "受講開始前に必要書類を期限内にそろえられる",
  "AI研修 補助金 申し込みの手順に沿って進められる",
] as const;

const ineligibleItems = [
  "登録時点で離職中",
  "フリーランス・個人事業主のみで就業",
  "転職意思がなく、学習のみを目的にしている",
  "必要書類を期限までに提出できない",
] as const;

const simulationRows = [
  {
    caseLabel: "受講修了まで完了",
    subsidyRate: "1/2",
    subsidyAmount: "¥150,000",
    outOfPocket: "¥180,000",
    condition: "講座修了",
  },
  {
    caseLabel: "追加補助まで達成",
    subsidyRate: "最大70%相当",
    subsidyAmount: "¥210,000",
    outOfPocket: "¥120,000",
    condition: "転職後1年継続就業",
  },
] as const;

const flowSteps = [
  {
    title: "無料説明会で制度確認",
    description: "まずは制度概要、対象条件、必要書類、締切を確認します。",
  },
  {
    title: "個別相談で対象判定",
    description: "在職状況や転職意向を確認し、申し込み可否を明確にします。",
  },
  {
    title: "対象講座へ正式申し込み",
    description: "リスキリング補助金 対象講座として手続きを進め、受講準備を行います。",
  },
  {
    title: "受講修了で一次補助",
    description: "受講修了要件を満たすと、受講費用の1/2（上限40万円）が補助対象になります。",
  },
  {
    title: "転職後1年継続で追加補助",
    description: "転職先で1年継続就業などの要件を満たすと、追加1/5（上限16万円）が補助対象になります。",
  },
] as const;

const failurePatterns = [
  {
    title: "申請期限を過ぎてしまう",
    detail: "説明会参加後に書類準備を後回しにすると、受付期限を超えるケースがあります。",
    avoid: "初回相談で締切日を確認し、提出書類の準備日を先に決めておきましょう。",
  },
  {
    title: "必要書類の不備",
    detail: "記入漏れや添付不足で差し戻しになり、結果的に受講開始が遅れることがあります。",
    avoid: "提出前にチェックリストで照合し、不安な項目は事前に相談するのが安全です。",
  },
  {
    title: "対象外講座を選ぶ",
    detail: "制度対象でない講座を申し込むと、補助金が適用されません。",
    avoid: "申込前に対象講座かどうかを事業者案内と公式情報の両方で確認してください。",
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
          <AcademyBreadcrumb
            className="mb-6"
            items={[
              { label: "ホーム", href: "/" },
              { label: "アカデミー", href: "/academy" },
              { label: "補助金ガイド" },
            ]}
          />
          <p className={sectionLabelClass}>SUBSIDY GUIDE 2026</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            2026年版 リスキリング補助金を個人で活用する完全ガイド
          </h1>
          <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-700">
            リスキリング補助金は、対象条件と締切（書類）さえ先に押さえれば、流れ自体はシンプルです。
            この記事では、対象者チェック、補助額の計算例、AI研修 補助金 申し込みの手順を“迷わない順番”で整理しました。
            「書類準備の逆算」でつまずくケースが多いため、最初に全体像を掴める構成にしています。
          </p>
          <p className="mt-3 inline-flex rounded-full border border-orange-300 bg-white/80 px-4 py-1.5 text-xs font-semibold text-slate-700">
            2026年2月時点の情報です
          </p>

          <div className="mt-6 rounded-2xl border border-orange-300 bg-white p-5 shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">まず押さえるポイント</h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
              経済産業省公式情報では、受講修了で受講費用の1/2（上限40万円）、転職先で1年継続就業で追加1/5（上限16万円）など段階要件があり、合計で最大70%相当（上限56万円）となります。
              AIリブートアカデミー受講料¥330,000（税込、税抜¥300,000）の計算例では、実質負担は¥120,000〜¥180,000が目安です。
            </p>
          </div>

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

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-700 sm:text-base">まずは39秒で概要を確認</p>
          <div className="mt-4">
            <YouTubeEmbed videoId="DN7omsP8C_0" title="リスキリング補助金ガイド概要動画" />
          </div>
        </div>
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
          <h2 className={sectionHeadingClass}>制度の概要</h2>
          <p className="mt-5 max-w-4xl text-base sm:text-lg font-semibold leading-relaxed text-slate-900">
            本制度は「在職者が転職（転職先での就業）を目指して学ぶ」ことを支援する枠組みで、キャリア相談・学習・転職支援が一体で設計されています。
          </p>
          <p className="mt-4 max-w-4xl text-base sm:text-lg leading-relaxed text-slate-700">
            本制度の正式名称は、経済産業省「リスキリングを通じたキャリアアップ支援事業」です。キャリア相談、
            リスキリング、転職支援を一体で提供する講座を通じて、在職者のキャリアアップを支援する枠組みです。
          </p>
          <p className="mt-4 max-w-4xl text-base sm:text-lg leading-relaxed text-slate-700">
            補助は段階要件で、受講修了で受講費用の1/2（上限40万円）、転職先で1年間の継続就業で追加1/5（上限16万円）などが適用されます。リスキリング補助金
            対象講座を選ぶ際は、制度対象であることに加え、申請サポート体制の有無も重要です。
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
          <p className={sectionLabelClass}>ELIGIBILITY CHECK</p>
          <h2 className={sectionHeadingClass}>対象者チェックリスト</h2>
          <p className="mt-4 max-w-4xl text-sm sm:text-base font-semibold text-slate-900">
            「在職中」「転職意向あり」「期限内に書類を揃えられる」が満たせるほど、申請を進めやすくなります。
          </p>
          <p className="mt-3 max-w-4xl text-sm sm:text-base text-slate-700">
            「自分は対象か分からない」という方は、下のチェックで判断できます。該当が多いほど、手続きの見通しが立てやすくなります。
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <motion.div
              className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h3 className="text-xl font-bold text-slate-900">対象になりやすい方</h3>
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
              <h3 className="text-xl font-bold text-slate-900">対象外になりやすい方</h3>
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
          <p className={sectionLabelClass}>SIMULATION</p>
          <h2 className={sectionHeadingClass}>補助金額のシミュレーション</h2>
          <p className="mt-5 max-w-4xl text-base sm:text-lg font-semibold leading-relaxed text-slate-900">
            受講修了までで「実質負担¥180,000目安」、追加補助まで達成すると「¥120,000目安」のケースがあります（条件で変動）。
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-orange-200">
            <table className="w-full border-collapse bg-white text-left text-sm sm:text-base">
              <thead className="bg-orange-50">
                <tr>
                  <th className="px-4 py-3 font-bold text-slate-900">ケース</th>
                  <th className="px-4 py-3 font-bold text-slate-900">補助率</th>
                  <th className="px-4 py-3 font-bold text-slate-900">補助額（目安）</th>
                  <th className="px-4 py-3 font-bold text-slate-900">実質負担（目安）</th>
                  <th className="px-4 py-3 font-bold text-slate-900">条件</th>
                </tr>
              </thead>
              <tbody>
                {simulationRows.map((row) => (
                  <tr key={row.caseLabel} className="border-t border-orange-100">
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.caseLabel}</td>
                    <td className="px-4 py-3 text-slate-700">{row.subsidyRate}</td>
                    <td className="px-4 py-3 text-slate-700">{row.subsidyAmount}</td>
                    <td className="px-4 py-3 font-bold text-orange-600">{row.outOfPocket}</td>
                    <td className="px-4 py-3 text-slate-700">{row.condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 space-y-2 text-sm text-slate-600">
            <p>※ AIリブートアカデミー受講料¥330,000（税込、税抜¥300,000）を基準にした計算例です。</p>
            <p>※ 補助の上限は受講修了で受講費用の1/2（上限40万円）、条件達成で追加1/5（上限16万円）など、合計最大70%相当（上限56万円）です。</p>
            <p>
              ※ 補助は補助事業者へ交付され、受講者は受講費用の軽減として受ける形が一般的です。適用タイミングや手続きは募集回・事業者により異なる場合があります。
            </p>
            <p>※ 制度は年度ごとに変更される可能性があります。最新条件は説明会で確認してください。</p>
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
          <p className={sectionLabelClass}>HOW TO APPLY</p>
          <h2 className={sectionHeadingClass}>AI研修 補助金 申し込みの流れ</h2>
          <p className="mt-5 max-w-4xl text-base sm:text-lg font-semibold leading-relaxed text-slate-900">
            「説明会で条件確認→個別相談で対象判定→申し込み→受講→転職支援」の順で進めると、手戻りが減ります。
          </p>

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
          <p className={sectionLabelClass}>COMMON MISTAKES</p>
          <h2 className={sectionHeadingClass}>よくある失敗パターン</h2>
          <p className="mt-5 max-w-4xl text-base sm:text-lg font-semibold leading-relaxed text-slate-900">
            失敗の多くは「締切」「書類不備」「対象講座の取り違え」です。最初に締切の逆算とチェックリストを作ると防げます。
          </p>
          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {failurePatterns.map((pattern) => (
              <motion.article
                key={pattern.title}
                variants={itemReveal}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-lg font-bold text-slate-900">{pattern.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{pattern.detail}</p>
                <p className="mt-3 rounded-lg bg-white p-3 text-sm leading-relaxed text-slate-700">
                  <span className="font-semibold text-slate-900">回避策:</span> {pattern.avoid}
                </p>
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
          <h2 className={sectionHeadingClass}>補助金に関するよくある質問</h2>
          <p className="mt-5 max-w-4xl text-base sm:text-lg font-semibold leading-relaxed text-slate-900">
            最終判定は募集回の要項・事務局審査になります。迷う項目は「説明会→個別相談」で早めに確認するのが安全です。
          </p>

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
          <p className="mb-4 max-w-4xl text-sm sm:text-base text-slate-700">
            補助金と講座選びはセットで考えると失敗しにくいです。必要な順に関連ページも確認してください。
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミーTOP
              </Link>
            </li>
            <li>
              <Link
                href="/academy/reviews"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIリブートアカデミーの評判・口コミ
              </Link>
            </li>
            <li>
              <Link
                href="/academy/seminars"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                無料オンライン説明会・セミナー
              </Link>
            </li>
            <li>
              <Link
                href="/academy/subsidy-eligible-courses"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                リスキリング補助金 対象講座の見分け方
              </Link>
            </li>
            <li>
              <Link href="/academy/meti-reskilling-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                経産省制度対象講座の比較ポイント
              </Link>
            </li>
            <li>
              <Link href="/academy/ai-course-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI講座比較｜失敗しない選び方
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/education-training-benefit-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                教育訓練給付金でAI講座を受講するガイド
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
          <p className="text-sm font-bold tracking-wider text-orange-100">CTA</p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
            補助金活用の個別相談と無料セミナーはこちら
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-orange-50">
            「難しそう」を「自分にもできそう」に変えるために、対象可否と申し込み手順を一緒に整理します。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05b54d]"
            >
              {lineIcon}
              LINEで個別相談する
            </a>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-orange-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-50"
            >
              無料セミナーに申し込む
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
              careerup.reskilling.go.jp
            </a>
            {" / "}2026年2月時点で確認
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default SubsidyGuidePage;
