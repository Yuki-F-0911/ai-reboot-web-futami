"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

type FAQItem = {
  question: string;
  answer: string;
};

type HowToLearnGenerativeAiPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const phaseItems = [
  {
    phase: "基礎理解（1-30日）",
    week: "Week 1-4",
    heading: "ChatGPT/Claude基本操作とプロンプトエンジニアリング入門",
    summary:
      "最初の1か月は、ツールを正しく扱うための土台づくりです。まず1つのツールを軸に、目的と出力形式を指定する基本を固めます。",
    tasks: [
      "ChatGPTまたはClaudeで毎日1つ業務タスクを試す",
      "目的・前提・制約・出力形式を分けるプロンプトの型を身につける",
      "要約、メール下書き、議事録整理など短い業務で反復する",
    ],
  },
  {
    phase: "実践応用（31-70日）",
    week: "Week 5-10",
    heading: "画像生成AI・コード生成・ドキュメント自動化に拡張する",
    summary:
      "次の40日は、複数用途に広げる実践期間です。単発利用から、業務で再現できる活用パターンを作る段階に入ります。",
    tasks: [
      "画像生成AIで提案資料やSNS素材の初稿を作る",
      "コード生成で小さな自動化スクリプトや関数を試作する",
      "議事録、報告書、FAQ作成などの文書業務をテンプレート化する",
    ],
  },
  {
    phase: "業務統合（71-100日）",
    week: "Week 11-14",
    heading: "自社業務への適用、ワークフロー構築、チーム展開",
    summary:
      "最後の30日は、個人スキルを業務成果へ統合します。成果物と運用ルールを整え、チームで継続できる状態を作ります。",
    tasks: [
      "自社業務の1プロセスを選び、AI活用フローを設計する",
      "品質チェック項目と最終判断者を明確化する",
      "手順書を共有し、チームで再現できる運用を構築する",
    ],
  },
] as const;

const pitfallItems = [
  {
    title: "学ぶ順番が曖昧で、毎週テーマが変わってしまう",
    solution:
      "100日を3フェーズに固定し、週ごとに1テーマだけ進めると継続しやすくなります。",
  },
  {
    title: "出力をそのまま使い、品質確認が抜ける",
    solution:
      "事実確認、根拠確認、最終判断は人が行うルールを最初に決めることが重要です。",
  },
  {
    title: "学習した内容が実務に接続されない",
    solution:
      "毎週1つ、現場タスクに適用して改善時間を記録すると実務での定着が早まります。",
  },
] as const;

const comparisonRows = [
  {
    type: "独学",
    strengths: "費用を抑えやすく、自分のペースで進められる。",
    risks: "正しい順序設計とフィードバックを自力で行う必要がある。",
    fit: "自走力が高く、検証習慣を持てる人。",
  },
  {
    type: "スクール",
    strengths: "学習順序が整理され、質問や添削で迷いを減らせる。",
    risks: "受講費用が発生し、カリキュラムに合わせる必要がある。",
    fit: "短期間で実務適用まで到達したい人。",
  },
] as const;

export default function HowToLearnGenerativeAiPage({ faqItems }: HowToLearnGenerativeAiPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AI学習法" },
          ]}
        />
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold tracking-wide text-gray-500">生成AI 学び方 / 生成AI 勉強</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            社会人のための生成AI学習ロードマップ｜0→100日で実務活用レベルへ
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">この記事は2026年2月に更新されました</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            忙しい社会人でも、生成AIは正しい順序で学べば100日で実務レベルに到達できます。ここでは、基礎理解から業務統合までの具体的な学習手順を、
            週単位で迷わず進められる形に整理しました。
          </p>
        </motion.header>

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">結論先出し</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            生成AIは正しい順序で学べば100日で実務レベルに到達可能です。重要なのは、ツールを増やすことよりも、
            1つの業務を確実に改善できる使い方を段階的に増やすことです。
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
          <h2 className="text-2xl font-bold text-gray-900">学習の3フェーズ（0→100日）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            100日を「基礎理解 → 実践応用 → 業務統合」に分けると、学習が点ではなく線になります。各フェーズで達成すべき目標を明確にしましょう。
          </p>
          <div className="mt-8 space-y-8">
            {phaseItems.map((phase, index) => (
              <motion.section
                key={phase.phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold leading-8 text-gray-900">{phase.phase}</h3>
                <p className="mt-1 text-sm font-medium text-gray-500">{phase.week}</p>
                <p className="mt-4 text-base font-medium leading-8 text-gray-900">{phase.heading}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{phase.summary}</p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {phase.tasks.map((task) => (
                    <li key={task} className="pl-1 marker:text-gray-500">
                      {task}
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
          <h2 className="text-2xl font-bold text-gray-900">よくあるつまずきポイントと対策</h2>
          <div className="mt-6 space-y-4">
            {pitfallItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.solution}</p>
              </div>
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
          <h2 className="text-2xl font-bold text-gray-900">独学 vs スクールの比較</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            どちらが正解かではなく、現在の制約に合う方法を選ぶことが重要です。講座選びを具体化したい方は
            <Link
              href="/academy/ai-training-for-individuals"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              個人向けAI研修の比較ページ
            </Link>
            も確認してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">学習方法</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.type} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.type}</th>
                    <td className="py-4 px-4">{row.strengths}</td>
                    <td className="py-4 px-4">{row.risks}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
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
          <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pt-12 pb-4">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
            <li>
              <Link href="/academy/subsidy-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                補助金ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/reviews" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                受講生の評判・口コミ
              </Link>
            </li>
            <li>
              <Link href="/academy/seminars" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                無料セミナー一覧
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
          <h2 className="text-2xl font-bold text-gray-900">次の一歩を決めたい方へ</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ひとりで学習計画を作るのが難しい場合は、無料セミナーと個別相談を使って現在地を確認するのが近道です。無理なく続く学習ルートを一緒に設計できます。
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
