"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type CorporateAiTrainingPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const trainingTypes = [
  {
    type: "オンライン研修",
    summary: "拠点が分かれている企業でも導入しやすく、短時間の反復学習に向いています。",
    features: [
      "移動コストを抑えながら全社展開しやすい",
      "録画や教材共有で復習しやすい",
      "業務時間内に60〜90分単位で組み込みやすい",
    ],
  },
  {
    type: "対面研修",
    summary: "実際の業務データを使ったハンズオンを行いやすく、部門横断の合意形成に強みがあります。",
    features: [
      "演習時のつまずきをその場で解消しやすい",
      "管理職を含めた意思統一を作りやすい",
      "導入初期の温度差を短期間で縮めやすい",
    ],
  },
  {
    type: "ハイブリッド研修",
    summary: "基礎はオンライン、実務演習は対面に分けることで、コストと定着率のバランスを取りやすい方式です。",
    features: [
      "基礎理解と実践演習を分離して設計できる",
      "対象者レベルごとのカリキュラムを組みやすい",
      "中長期の定着施策と相性が良い",
    ],
  },
] as const;

const designPoints = [
  {
    title: "受講者レベル分け",
    summary: "同じ研修でも、管理職・現場担当・推進担当で必要な学習内容は異なります。",
    details: "職種と役割でクラスを分け、共通講義と部門別演習を組み合わせると定着率が上がります。",
  },
  {
    title: "KPI設定",
    summary: "受講満足度だけでは成果を判断できません。業務指標に接続したKPI設計が必要です。",
    details: "工数削減率、提案速度、ナレッジ再利用率など、研修前後で比較できる指標を先に定義します。",
  },
  {
    title: "フォロー体制",
    summary: "研修後1〜2か月の伴走が、社内定着率を左右します。",
    details: "質問窓口、定例レビュー、テンプレート更新会をセットで運用すると、現場の運用停止を防げます。",
  },
] as const;

const academyPlanPoints = [
  {
    title: "100日伴走プログラム",
    body: "導入初期のPoC設計から部門展開まで、100日単位で進捗を可視化しながら伴走します。",
  },
  {
    title: "経産省認定講座に準拠した設計",
    body: "制度要件を意識した研修設計で、社内説明時の信頼性を高めやすい構成です。",
  },
  {
    title: "補助金対応サポート",
    body: "対象可否の確認から申請準備まで、制度活用を見据えた計画づくりを支援します。",
  },
] as const;

const comparisonRows = [
  {
    axis: "研修設計",
    general: "汎用カリキュラム中心",
    academy: "業務課題別に設計し、部門ごとに最適化",
  },
  {
    axis: "定着支援",
    general: "受講後フォローは限定的",
    academy: "100日伴走で運用レビューと改善を実施",
  },
  {
    axis: "成果測定",
    general: "受講満足度の確認が中心",
    academy: "業務KPIまで落とし込み、効果検証を支援",
  },
  {
    axis: "制度活用",
    general: "補助制度対応は個別確認が必要",
    academy: "補助金活用を前提にした導入計画を設計",
  },
] as const;

const caseStudies = [
  {
    title: "ケース1: 営業部門（30名）",
    challenge: "提案書準備に時間がかかり、提案件数が伸びない。",
    approach: "提案書テンプレートと商談準備プロンプトを標準化し、週次レビューを実施。",
    result: "3か月で提案準備時間を短縮し、提案数の増加につなげた。",
  },
  {
    title: "ケース2: 人事部門（12名）",
    challenge: "採用文面と候補者評価の品質にばらつきがある。",
    approach: "採用業務向けテンプレートを整備し、面接評価の観点を共通化。",
    result: "採用オペレーションの標準化が進み、選考の再現性が向上。",
  },
  {
    title: "ケース3: 管理部門（15名）",
    challenge: "社内問い合わせ対応に属人化があり、回答品質が安定しない。",
    approach: "経理・総務向けFAQ整備と、問い合わせ一次回答の運用ルールを設計。",
    result: "問い合わせ対応の一次処理時間を短縮し、繁忙期の負荷を軽減。",
  },
] as const;

const keywordTags = ["AI研修 法人向け", "企業向け 生成AI研修", "研修KPI設計"] as const;

const tocItems = [
  { id: "conclusion", label: "結論先出し" },
  { id: "training-types", label: "法人研修の種類（オンライン / 対面 / ハイブリッド）" },
  { id: "training-design-points", label: "研修設計のポイント（レベル分け / KPI / フォロー）" },
  { id: "academy-plan", label: "AIリブートアカデミーの法人プラン" },
  { id: "comparison-table", label: "他社比較表（AI講座一般 vs アカデミー）" },
  { id: "case-studies", label: "導入事例（想定ケーススタディ）" },
  { id: "faq", label: "FAQ" },
] as const;

export default function CorporateAiTrainingPage({ faqItems }: CorporateAiTrainingPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "法人向けAI研修" },
          ]}
        />
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            法人向けAI研修で成果を出すための完全ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">この記事は2026年2月16日に更新されました</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            法人向けAI研修は、受講人数より「研修設計」と「社内定着設計」で成果が決まります。本記事では、研修形式の選び方、KPI設計、
            フォロー体制、比較検討時の視点を担当者向けに整理しました。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            結論先出し
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            成果が出る法人研修は、受講前に「対象者レベル分け」「業務KPI」「研修後フォロー」をセットで設計しています。単発研修より、
            伴走型で運用定着まで見る設計が有効です。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="training-types" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            法人研修の種類（オンライン / 対面 / ハイブリッド）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            研修形式は「実施しやすさ」と「定着しやすさ」のバランスで選びます。目的に応じて形式を使い分けるのが現実的です。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {trainingTypes.map((item, index) => (
              <motion.section
                key={item.type}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-5"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {item.features.map((feature) => (
                    <li key={feature} className="pl-1 marker:text-gray-500">
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="training-design-points" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            研修設計のポイント（レベル分け / KPI / フォロー）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            研修効果を左右するのは講義内容より設計です。事前設計の3要素を押さえると、研修後の現場活用率が上がります。
          </p>
          <div className="mt-6 space-y-4">
            {designPoints.map((point) => (
              <section key={point.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-gray-900">{point.summary}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{point.details}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-plan" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIリブートアカデミーの法人プラン
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            法人プランは、単発研修ではなく「設計から定着まで」を一体で支援します。比較検討時は、研修後の運用支援範囲まで確認してください。
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700">
            {academyPlanPoints.map((item) => (
              <li key={item.title} className="rounded-md border border-blue-200 bg-white p-4">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            補助制度の確認は
            <Link href="/academy/subsidy-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              補助金ガイド
            </Link>
            で確認できます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="comparison-table" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            他社比較表（AI講座一般 vs アカデミー）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            価格だけで比較すると、導入後の定着コストが見えにくくなります。比較時は「運用支援」と「成果測定」まで確認することが重要です。
          </p>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">AI講座一般</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">AIリブートアカデミー</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.general}</td>
                    <td className="py-4 pl-4">{row.academy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="case-studies" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入事例（想定ケーススタディ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実際の導入では、部門ごとに課題が異なります。以下のケースをベースに、自社に近い進め方を検討してください。
          </p>
          <div className="mt-6 space-y-4">
            {caseStudies.map((caseItem) => (
              <section key={caseItem.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{caseItem.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">課題:</span> {caseItem.challenge}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">実施内容:</span> {caseItem.approach}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">結果:</span> {caseItem.result}
                </p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/seminars" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                無料セミナー一覧
              </Link>
            </li>
            <li>
              <Link href="/academy/subsidy-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                補助金ガイド
              </Link>
            </li>
            <li>
              <Link href="/briefing" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                法人向け資料請求・相談
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="request-materials" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まず資料請求
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            研修形式や対象人数が未確定でも問題ありません。資料請求時に現状課題を共有いただければ、御社の課題に合った進め方をご提案します。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/briefing"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              資料請求・導入相談をする
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              無料セミナーを見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
