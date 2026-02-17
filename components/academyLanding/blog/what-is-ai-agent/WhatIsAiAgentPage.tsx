"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type WhatIsAiAgentPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const definitionRows = [
  {
    axis: "目的",
    conventionalAi: "分類・予測・検出など、特定タスクの精度向上",
    aiAgent: "目標達成のために、複数タスクを順に実行して完了まで進める",
  },
  {
    axis: "処理の流れ",
    conventionalAi: "入力に対して1回の推論結果を返す",
    aiAgent: "計画 → 実行 → 観測 → 再計画を反復しながら最適化する",
  },
  {
    axis: "人の関与",
    conventionalAi: "都度の指示が必要になりやすい",
    aiAgent: "事前ルールと境界を決めることで、一定範囲を自律実行できる",
  },
] as const;

const agentTypeRows = [
  {
    type: "業務自動化エージェント",
    useCase: "定例レポート作成、データ整形、情報転記",
    smallStart: "1日1回の定型作業を対象に、手順を固定して開始",
  },
  {
    type: "カスタマーサポートエージェント",
    useCase: "問い合わせ一次回答、FAQ案内、担当部署振り分け",
    smallStart: "問い合わせ分類とテンプレ回答だけを自動化して開始",
  },
  {
    type: "開発支援エージェント",
    useCase: "仕様要約、テストケース案作成、レビュー補助",
    smallStart: "PRテンプレート生成やテスト観点整理など限定範囲で開始",
  },
] as const;

const introductionSteps = [
  {
    title: "Step 1. 対象業務を1つに絞る",
    body: "まずは作業時間が読みやすい定型業務を選びます。対象が広すぎると、検証コストだけが先行します。",
  },
  {
    title: "Step 2. 成功条件を数値化する",
    body: "削減時間、一次回答率、レビュー工数削減など、測れる指標を最初に決めます。",
  },
  {
    title: "Step 3. 人の確認ポイントを設計する",
    body: "完全自動化を急がず、承認や差し戻しの判断箇所を明確にして品質を保ちます。",
  },
  {
    title: "Step 4. 小規模PoCで運用する",
    body: "2〜4週間程度の短い検証期間を設定し、ログを見ながら改善サイクルを回します。",
  },
  {
    title: "Step 5. 他部門へ横展開する",
    body: "最初の成功パターンをテンプレート化し、部門ごとに微調整して展開します。",
  },
] as const;

const cautionItems = [
  {
    title: "セキュリティ",
    body: "入力データの機密区分を定義し、送信可否ルールを明文化します。特に個人情報と契約情報は取り扱い境界を固定します。",
  },
  {
    title: "コスト",
    body: "API利用料に加えて、検証・監視・改善の運用工数を見積もります。予算上限を決めた小規模運用から始めるのが安全です。",
  },
  {
    title: "運用体制",
    body: "担当者、承認者、問い合わせ窓口を事前に定義します。責任範囲が曖昧だと、障害時の対応速度が落ちます。",
  },
] as const;

const keywordTags = ["AIエージェントとは", "AIエージェント作り方", "AIエージェント導入"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "definition-and-difference", label: "AIエージェントの定義と従来AIとの違い" },
  { id: "types-and-use-cases", label: "代表的な種類と活用例" },
  { id: "how-to-build-ai-agent", label: "企業での導入ステップ（小規模から始める方法）" },
  { id: "implementation-cautions", label: "導入時の注意点" },
  { id: "faq", label: "FAQ" },
] as const;

export default function WhatIsAiAgentPage({ faqItems }: WhatIsAiAgentPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIエージェントとは？" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIエージェントとは？定義・種類・作り方を初心者向けに解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月17日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIエージェントは、単に回答を返すAIではなく、目標達成までの作業を段階的に進める仕組みです。本記事では「AIエージェント
            とは」の基本から、実務で使える導入ステップまで整理します。
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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              AIエージェントは、目標に対して複数ステップを自律的に進めるAIシステムです。
            </li>
            <li className="pl-1 marker:text-gray-500">
              業務自動化、カスタマーサポート、開発支援など、定型作業が多い領域で効果が出やすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              導入は「1業務から小さく始める」のが基本で、セキュリティと運用体制を先に決めることが重要です。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="definition-and-difference" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIエージェントの定義と従来AIとの違い
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: AIエージェントは、目標達成のために「計画し、実行し、結果を見て修正する」流れを持つAIです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            従来型AIが単発の判定や生成を担当するのに対し、AIエージェントは連続処理のオーケストレーションを担います。ここが運用上の最大の違いです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">従来AI</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">AIエージェント</th>
                </tr>
              </thead>
              <tbody>
                {definitionRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.conventionalAi}</td>
                    <td className="py-4 pl-4">{row.aiAgent}</td>
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
          <h2 id="types-and-use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            代表的なAIエージェントの種類と活用例
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: まずは「役割が明確で、成果が測れる」タイプを選ぶと、導入と改善が回りやすくなります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            業務に合うタイプを選ぶことが導入成功の起点です。最初は役割が明確なユースケースから始めると、効果測定がしやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">種類</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">活用例</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">小規模で始める方法</th>
                </tr>
              </thead>
              <tbody>
                {agentTypeRows.map((row) => (
                  <tr key={row.type} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.type}</th>
                    <td className="py-4 px-4">{row.useCase}</td>
                    <td className="py-4 pl-4">{row.smallStart}</td>
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
          <h2 id="how-to-build-ai-agent" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            企業での導入ステップ（小規模から始める方法）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: AIエージェントの作り方は、最初から大規模化せず、1ユースケースで仮説検証する流れが最も現実的です。
          </p>
          <div className="mt-6 space-y-4">
            {introductionSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
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
          <h2 id="implementation-cautions" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入時の注意点（セキュリティ、コスト、運用体制）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 成否は実装よりも「入力ルール」「権限」「ログ」「人の確認ポイント」を先に決められるかで決まります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {cautionItems.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
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
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）とは？仕組み・メリット・活用事例をわかりやすく解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/rag-use-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）の活用事例8選｜業種・業務別に解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/multimodal-ai-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                マルチモーダルAIとは？テキスト・画像・音声を横断する次世代AIを解説 | AIリブート
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
          <h2 id="free-seminar-consultation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料セミナー / 個別相談
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIエージェントを自社でどう設計すべきか迷う場合は、無料セミナーで全体像を整理し、個別相談で導入優先順位を確認する進め方が実践的です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              アカデミーを見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーに参加する
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
