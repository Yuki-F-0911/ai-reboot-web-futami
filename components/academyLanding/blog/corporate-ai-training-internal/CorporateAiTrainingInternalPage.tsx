"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type CorporateAiTrainingInternalPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const backgroundPoints = [
  {
    title: "DX推進はツール導入だけでは進まない",
    description:
      "AIツールを導入しても、現場での使い方が統一されないと業務改善は進みにくくなります。研修は運用ルールをそろえるための土台になります。",
  },
  {
    title: "人材育成と業務設計を同時に進める必要がある",
    description:
      "DX人材育成では、知識学習だけでなく実務で使うシーン設計が重要です。業務課題にひもづく研修設計が定着の前提になります。",
  },
  {
    title: "継続学習の仕組みが成果差を生みやすい",
    description:
      "一般的に、単発研修よりも現場レビューを継続できる組織のほうが活用が進みやすい傾向があります。研修後の運用設計が不可欠です。",
  },
] as const;

const designSteps = [
  {
    step: "Step 1",
    title: "目的設定",
    detail:
      "まずは「何を改善したいか」を業務単位で定義します。作業時間短縮、品質の安定化、提案速度向上など、評価できる目的を明確にします。",
    points: [
      "対象業務を1つに絞る",
      "研修前後で比較する指標を決める",
      "責任者と推進担当を明確にする",
    ],
  },
  {
    step: "Step 2",
    title: "対象者選定",
    detail:
      "管理職・現場担当・推進担当では必要な内容が異なります。役割ごとのゴールを分けると、学習効率と現場適用率が上がりやすくなります。",
    points: [
      "役割別の到達目標を設定する",
      "初期対象者を小規模に設定する",
      "部署ごとの活用シーンを定義する",
    ],
  },
  {
    step: "Step 3",
    title: "プログラム構築",
    detail:
      "座学だけで終わらせず、実務演習と運用ルール作成まで含めて設計します。研修後に使えるテンプレートを残すと定着しやすくなります。",
    points: [
      "基礎理解と業務演習を分ける",
      "テンプレートとレビュー手順を整備する",
      "研修後フォローの日程を先に決める",
    ],
  },
] as const;

const comparisonRows = [
  {
    axis: "主な目的",
    external: "短期間で基礎知識を学ぶ",
    internal: "自社業務への適用と運用定着を進める",
  },
  {
    axis: "設計の柔軟性",
    external: "共通カリキュラム中心になりやすい",
    internal: "部門別課題に合わせて設計しやすい",
  },
  {
    axis: "立ち上げ負荷",
    external: "比較的低いが、社内運用設計は別途必要",
    internal: "初期設計の負荷はあるが、運用と連動しやすい",
  },
  {
    axis: "定着への接続",
    external: "社内でフォロー体制を別途作る必要がある",
    internal: "OJTや勉強会と連携しやすい",
  },
  {
    axis: "向いている場面",
    external: "全社の基礎リテラシー底上げ",
    internal: "業務改善を継続運用したい段階",
  },
] as const;

const retentionMeasures = [
  {
    title: "OJT連携",
    description:
      "研修内容をそのまま現場業務へ落とし込めるよう、上長レビューと実務課題を連動させます。学習と実行の分断を防ぐことがポイントです。",
  },
  {
    title: "社内勉強会",
    description:
      "月次や隔週で活用事例を共有し、部署間のナレッジ差を縮めます。小さな成功例を横展開する運用が定着につながります。",
  },
  {
    title: "効果測定",
    description:
      "作業時間、再作業率、レビュー回数などの業務指標で定点観測します。一般的には、同じ指標を継続計測するほど改善判断がしやすくなります。",
  },
] as const;

const keywordTags = ["AI 研修 社内", "DX人材 リスキリング", "法人向け"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "background", label: "社内AI研修が必要な背景（DX推進と人材育成の関係）" },
  { id: "design-steps", label: "研修設計の3ステップ（目的設定、対象者選定、プログラム構築）" },
  { id: "external-vs-internal", label: "外部研修 vs 社内研修の比較" },
  { id: "retention", label: "研修後の定着施策（OJT連携、社内勉強会、効果測定）" },
  { id: "faq", label: "FAQ" },
] as const;

export default function CorporateAiTrainingInternalPage({ faqItems }: CorporateAiTrainingInternalPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "社内AI研修の始め方" },
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
            社内AI研修の始め方と定着の進め方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">この記事は2026年2月17日に更新されました</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            本記事は、外部研修サービスの比較ではなく、社内でAI研修を立ち上げて運用定着させる方法に絞って整理した実務ガイドです。
            DX推進と人材育成を同時に進めたい法人担当者向けに、設計から実装までの流れを解説します。
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
            要点まとめ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            社内AI研修で成果を出すには、研修そのものより「目的設定」「対象者設計」「研修後運用」の3点を一体で設計することが重要です。
            一般的には、段階導入と継続フォローを組み合わせるほど定着しやすい傾向があります。
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
          <h2 id="background" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            社内AI研修が必要な背景（DX推進と人材育成の関係）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            DX推進では、ツール導入と同じくらい「現場で使える人材育成」が重要です。社内AI研修は、業務で再現できる使い方を組織内で標準化する役割を担います。
          </p>
          <div className="mt-7 space-y-4">
            {backgroundPoints.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
              </section>
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
          <h2 id="design-steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            研修設計の3ステップ（目的設定、対象者選定、プログラム構築）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            社内研修は、設計の順番で成果が変わります。次の3ステップで設計すると、実務との接続を保ちながら進めやすくなります。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {designSteps.map((item, index) => (
              <motion.section
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-5"
              >
                <p className="text-sm font-semibold tracking-wide text-orange-600">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {item.points.map((point) => (
                    <li key={point} className="pl-1 marker:text-gray-500">
                      {point}
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
          <h2 id="external-vs-internal" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            外部研修 vs 社内研修の比較
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            どちらが優れているかではなく、目的に合わせて使い分けることが重要です。基礎習得と業務定着で役割が異なります。
          </p>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">観点</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">外部研修</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">社内研修</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.external}</td>
                    <td className="py-4 pl-4">{row.internal}</td>
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
          <h2 id="retention" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            研修後の定着施策（OJT連携、社内勉強会、効果測定）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            研修後の運用で活用率は大きく変わります。現場運用へ接続する3つの施策を、研修計画時点で組み込むことが重要です。
          </p>
          <div className="mt-6 space-y-4">
            {retentionMeasures.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            社内立ち上げを具体化する場合は、
            <Link href="/corporate" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              法人向けページ
            </Link>
            で研修設計の相談先を確認できます。
          </p>
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
              <Link href="/academy/blog/corporate-ai-training" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                法人向けAI研修サービス｜社内定着・研修設計・導入相談 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                中小企業の生成AI導入ガイド｜失敗しない進め方と費用感 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集｜営業・マーケ・管理部門の活用ポイントを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
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
          <h2 id="corporate-next-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            社内AI研修の立ち上げを具体化したい方へ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            法人での導入検討は、まず
            <Link href="/corporate" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              法人向けページ
            </Link>
            で支援内容を確認し、必要に応じてセミナーや個別相談で要件を整理する進め方が現実的です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              法人向け無料セミナーに参加する
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              個別相談を申し込む
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
