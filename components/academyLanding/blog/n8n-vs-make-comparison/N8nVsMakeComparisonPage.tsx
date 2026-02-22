"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type N8nVsMakeComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line?src=blog&slug=n8n-vs-make-comparison";

const keywordTags = ["n8n Make 比較", "n8n vs Make", "ワークフロー自動化 選び方", "セルフホスト"] as const;

const tocItems = [
  { id: "answer-box", label: "要点まとめ（Answer Box）" },
  { id: "overview", label: "n8nとMake.comの基本概要" },
  { id: "five-axis", label: "5軸比較" },
  { id: "flowchart", label: "用途別おすすめフローチャート" },
  { id: "adoption-patterns", label: "導入パターン別の実務判断" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answerPoints = [
  "本記事は既存の総合比較記事と異なり、n8nとMake.comの2ツールだけを深掘りして判断軸を整理します。",
  "短期導入と学習速度を重視するならMake、閉域運用と長期コスト最適化まで見るならn8nが有力です。",
  "生成AI連携はどちらも可能ですが、カスタム制御とセルフホスト要件で選定が分かれます。",
  "中小企業・個人・エンタープライズで最適解は異なるため、組織条件ごとのフローチャートで決めるのが安全です。",
] as const;

const fiveAxisRows = [
  {
    axis: "費用",
    n8n: "セルフホスト時はインフラ費中心。高トラフィックで優位が出やすい",
    make: "操作量課金で初期導入がしやすい。処理増でコスト増に注意",
  },
  {
    axis: "セルフホスト可否",
    n8n: "可能（OSS）。閉域ネットワーク運用に対応しやすい",
    make: "不可。マネージド運用前提",
  },
  {
    axis: "生成AI連携",
    n8n: "HTTPノードやカスタムノードで柔軟に連携",
    make: "テンプレート連携が豊富で初速を作りやすい",
  },
  {
    axis: "学習コスト",
    n8n: "中〜高。設計自由度が高く運用知識が必要",
    make: "低〜中。UI導線がわかりやすく初学者向き",
  },
  {
    axis: "サポート",
    n8n: "コミュニティ情報が豊富。体制は自社設計が前提",
    make: "公式サポートを活用しやすい。運用委譲しやすい",
  },
] as const;

const flowchartCards = [
  {
    segment: "中小企業",
    recommendation: "最初の3か月はMake、統制要件が出たらn8n移行を検討",
    reason: "スピード重視で成果を作りつつ、将来の管理要件に備えられるため",
  },
  {
    segment: "個人・フリーランス",
    recommendation: "短期案件中心ならMake、固定業務が多いならn8n",
    reason: "案件単位の試作はMake、継続運用の利益率はn8nが高くなりやすい",
  },
  {
    segment: "エンタープライズ",
    recommendation: "セキュリティと監査要件が強い場合はn8nを第一候補",
    reason: "データ管理境界と承認フローを自社で制御しやすいため",
  },
] as const;

const adoptionPatterns = [
  {
    title: "パターン1: 部門単位で素早く自動化したい",
    detail: "Makeで営業・採用・バックオフィスの反復業務を短期間で展開し、効果測定後に対象を拡大する。",
  },
  {
    title: "パターン2: 機密データを含む業務を自動化したい",
    detail: "n8nを閉域環境で運用し、権限・監査・復旧手順を含むガバナンスを同時実装する。",
  },
  {
    title: "パターン3: 生成AIワークフローを横展開したい",
    detail: "初期はMakeでテンプレ検証し、カスタム要件が増えた段階でn8nに寄せる二段構えが有効。",
  },
] as const;

export default function N8nVsMakeComparisonPage({ faqItems }: N8nVsMakeComparisonPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "n8nとMake比較ガイド" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="n8nとMake比較ガイド｜2ツール深掘りで選ぶワークフロー自動化【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            n8nとMake比較ガイド｜2ツール深掘りで選ぶワークフロー自動化【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「n8nとMake、結局どちらが良いか」という問いに対して、総合比較だけでは判断しづらい場面が増えています。特に中小企業では、初速と運用統制を同時に満たす必要があります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事は2ツール限定で、費用・セルフホスト・生成AI連携・学習コスト・サポートの5軸から実務判断を整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ（Answer Box）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            {answerPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-600">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="overview"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">n8nとMake.comの基本概要</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            n8nは拡張性とセルフホストを重視する設計、Make.comは視覚的な操作性と導入初速を重視する設計です。どちらが優れているかではなく、運用条件に合うかで選ぶのが実務的です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            Zapierを含む全体比較は
            <Link href="/academy/blog/workflow-automation-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              workflow-automation-comparison
            </Link>
            を参照し、本記事は2ツール選定の最終判断に使ってください。
          </p>
        </motion.section>

        <motion.section
          id="five-axis"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">5軸比較：費用・セルフホスト可否・生成AI連携・学習コスト・サポート</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">n8n</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Make.com</th>
                </tr>
              </thead>
              <tbody>
                {fiveAxisRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.n8n}</td>
                    <td className="py-4 pl-4">{row.make}</td>
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6"
            href={lineUrl}
          />
        </motion.section>

        <motion.section
          id="flowchart"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">用途別おすすめフローチャート（中小企業 / 個人 / エンタープライズ）</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {flowchartCards.map((card) => (
              <section key={card.segment} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.segment}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-will-primary">{card.recommendation}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.reason}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="adoption-patterns"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">導入パターン別の実務判断</h2>
          <div className="mt-6 space-y-4">
            {adoptionPatterns.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">n8nとMakeは優劣ではなく、運用制約と成長フェーズで選ぶべきツールです。</li>
            <li className="pl-1 marker:text-gray-500">中小企業では「Makeで初速→n8nで統制強化」の段階設計が現実的です。</li>
            <li className="pl-1 marker:text-gray-500">導入失敗を防ぐには、機能比較より業務プロセスと責任境界の先行設計が重要です。</li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-emerald-200 bg-emerald-50 p-6"
            href={lineUrl}
          />
        </motion.section>
      </article>
    </main>
  );
}
