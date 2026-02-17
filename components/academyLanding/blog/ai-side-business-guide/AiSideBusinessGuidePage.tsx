"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiSideBusinessGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sideBusinessTypes = [
  {
    title: "ライティング支援",
    description:
      "記事構成、要約、下書き作成などを支援する業務です。AIの出力をそのまま納品せず、編集品質を担保する力が重要になります。",
    fit: "既存の文章業務経験がある人と相性がよい傾向があります。",
  },
  {
    title: "データ分析支援",
    description:
      "集計、可視化、分析コメント整理などを行う業務です。AIは仮説出しの補助に使い、最終判断は人が行う運用が一般的です。",
    fit: "表計算やBIツールに慣れている人が始めやすい領域です。",
  },
  {
    title: "業務自動化の構築支援",
    description:
      "ノーコードやスクリプトを使って定型作業を自動化する業務です。業務要件のヒアリングと例外処理の設計が成果を左右します。",
    fit: "業務改善経験や基本的なITリテラシーがある人に向いています。",
  },
  {
    title: "AI活用コンサル支援",
    description:
      "課題整理、導入方針の策定、運用ルール設計を支援する業務です。提案力と実行支援のバランスが求められます。",
    fit: "現職での業務知識を活かしやすい領域です。",
  },
] as const;

const learningSteps = [
  {
    step: "Step 1",
    title: "領域を絞る",
    detail:
      "副業テーマを広げすぎると学習が分散します。まずは1職種に絞り、必要スキルを明確化することが重要です。",
  },
  {
    step: "Step 2",
    title: "基礎スキルを固める",
    detail:
      "AIツールの操作だけでなく、成果物の品質基準、著作権・機密情報の扱い、レビュー手順まで学ぶ必要があります。",
  },
  {
    step: "Step 3",
    title: "小さな成果物を作る",
    detail:
      "架空案件よりも、実務に近い成果物を継続的に作るほうが評価されやすくなります。実績の再現性を示すことが大切です。",
  },
  {
    step: "Step 4",
    title: "案件獲得と改善を繰り返す",
    detail:
      "受注初期は期待値調整を丁寧に行い、納品後レビューを次案件へ反映します。継続案件を増やすには改善運用が不可欠です。",
  },
] as const;

const skillLevelRows = [
  {
    role: "ライティング支援",
    baseline: "文章構成・校正の基本を理解している",
    aiSkill: "プロンプト改善と編集ルール設計ができる",
  },
  {
    role: "データ分析支援",
    baseline: "集計・可視化の基本操作ができる",
    aiSkill: "分析観点の整理と解釈の検証ができる",
  },
  {
    role: "業務自動化支援",
    baseline: "業務フローを分解して説明できる",
    aiSkill: "自動化範囲と例外処理を設計できる",
  },
  {
    role: "AI活用コンサル支援",
    baseline: "業務課題を構造化して整理できる",
    aiSkill: "導入方針と運用ルールを提案できる",
  },
] as const;

const cautions = [
  {
    title: "就業規則の確認",
    body: "副業可否、競業避止、情報持ち出し制限を事前に確認してください。会社ごとのルール差が大きいため、必ず明文化された規定を確認します。",
  },
  {
    title: "確定申告の準備",
    body: "収入と経費の記録を早い段階で始めることで、年度末の負担を抑えやすくなります。税務の詳細は専門家への相談も検討してください。",
  },
  {
    title: "クライアントとの期待値調整",
    body: "AI活用の範囲、納品品質、修正回数のルールを最初に合意することが重要です。認識差を残したまま進めるとトラブルの原因になります。",
  },
] as const;

const keywordTags = ["副業 AI 始め方", "フリーランス AI 仕事", "キャリア・転職"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "side-business-types", label: "AIスキルで始められる副業の種類" },
  { id: "learning-steps", label: "副業を始めるまでの学習ステップ" },
  { id: "skill-level", label: "必要なスキルレベルの目安（職種別）" },
  { id: "cautions", label: "注意点（就業規則、確定申告、期待値調整）" },
  { id: "faq", label: "FAQ" },
] as const;

export default function AiSideBusinessGuidePage({ faqItems }: AiSideBusinessGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "副業でAIを活用する始め方" },
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
            副業でAIを活用する始め方ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">この記事は2026年2月17日に更新されました</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI活用の副業は、短期的な収益化だけを狙うより、既存スキルとの組み合わせで継続案件を作る視点が重要です。本記事では、
            現実的な学習と実務準備の進め方を整理します。
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
            副業でAIを活用する際は、まず対象領域を絞り、成果物の品質を担保できる運用を作ることが重要です。一般的には、学習と小規模実績の蓄積を並行するほど、
            継続案件へつながりやすい傾向があります。
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
          <h2 id="side-business-types" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIスキルで始められる副業の種類（ライティング支援、データ分析、自動化構築、コンサル等）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI活用の副業は職種によって必要スキルが異なります。自分の経験に近い領域から始めると、提案と納品の精度を上げやすくなります。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {sideBusinessTypes.map((item, index) => (
              <motion.section
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-5"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
                <p className="mt-3 text-sm font-medium leading-7 text-gray-900">{item.fit}</p>
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
          <h2 id="learning-steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            副業を始めるまでの学習ステップ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            学習を長期化させないためには、実務化を前提に段階を区切ることが有効です。次の流れで進めると、準備と実践を両立しやすくなります。
          </p>
          <div className="mt-7 space-y-4">
            {learningSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <p className="text-sm font-semibold tracking-wide text-orange-600">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
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
          <h2 id="skill-level" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            必要なスキルレベルの目安（職種別）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここでの目安は一般的な傾向です。実際の案件要件はクライアントごとに異なるため、募集内容を確認しながら調整してください。
          </p>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">職種</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">ベーススキル</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">AI活用で求められやすい力</th>
                </tr>
              </thead>
              <tbody>
                {skillLevelRows.map((row) => (
                  <tr key={row.role} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.role}</th>
                    <td className="py-4 px-4">{row.baseline}</td>
                    <td className="py-4 pl-4">{row.aiSkill}</td>
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
          <h2 id="cautions" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            注意点（就業規則、確定申告、クライアントとの期待値調整）
          </h2>
          <div className="mt-6 space-y-4">
            {cautions.map((item) => (
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
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-certification-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI資格おすすめ一覧｜難易度・費用・活かせる仕事を徹底比較【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/g-e-certification-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                G検定とE検定の違いを徹底比較｜難易度・費用・向いている人を解説 | AIリブート
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
          <h2 id="next-career-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            副業の第一歩を具体化したい方へ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            まずは無料セミナーで全体像を整理し、必要に応じて個別相談であなたの経験に合う進め方を確認できます。無理のない範囲で継続できる計画を作ることが重要です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
