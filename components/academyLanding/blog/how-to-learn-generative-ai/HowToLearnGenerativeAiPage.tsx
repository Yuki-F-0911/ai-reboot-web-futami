"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    heading: "Phase1（1〜30日）: AI基礎理解 + ChatGPT/Claude の基本操作",
    summary:
      "最初の30日は、生成AIの特性を理解しながら、実際に毎日使って操作に慣れる期間です。",
    points: [
      "生成AIの得意・不得意を把握する（要約、発想支援、文章作成、推論の限界）",
      "ChatGPT または Claude を軸に、質問の仕方と出力の修正方法を練習する",
      "Gemini も含めて同じ問いを比較し、回答傾向の違いを体験する",
      "日報やメモの下書きなど、短い実務タスクで毎日1回は使う",
    ],
  },
  {
    heading: "Phase2（31〜60日）: 業務活用（プロンプト設計、資料作成、リサーチ）",
    summary:
      "次の30日は、業務で成果に直結する使い方に寄せます。プロンプトを設計し、再現性を高める段階です。",
    points: [
      "目的・前提・出力形式を分けて書くプロンプト設計を習慣化する",
      "会議メモ、提案資料の構成案、比較リサーチなど定型業務に適用する",
      "使える指示文をテンプレート化し、繰り返し利用できる形に整理する",
      "回答の検証手順を決めて、誤情報や過剰な一般化を防ぐ",
    ],
  },
  {
    heading: "Phase3（61〜100日）: 応用・実践（ワークフロー自動化、成果物作成）",
    summary:
      "最後の40日は、複数の作業をつなげて成果物まで仕上げる実践フェーズです。",
    points: [
      "調査から要点整理、ドラフト作成までを一連のワークフローとして設計する",
      "目的別にツールを使い分け、出力品質と作業時間のバランスを取る",
      "社内向け手順書、提案書、ナレッジ記事など公開可能な成果物を作る",
      "学習ログを見直し、次の100日に向けた改善テーマを明確化する",
    ],
  },
] as const;

const pitfallItems = [
  {
    title: "ツールを渡り歩いて学習が分散する",
    solution:
      "まずは1つの主要ツールに集中し、基礎が固まってから比較を始めると習得速度が上がります。",
  },
  {
    title: "プロンプトを毎回ゼロから書いてしまう",
    solution:
      "用途ごとにテンプレートを保存し、都度調整する運用に切り替えると再現性が高まります。",
  },
  {
    title: "便利さに頼りすぎて検証が甘くなる",
    solution:
      "出典確認、事実確認、最終判断は自分が行うというルールを最初に決めておくことが重要です。",
  },
  {
    title: "学んだ内容が業務に接続されない",
    solution:
      "毎週1つは実務課題に適用し、時間短縮や品質改善を振り返ることで定着します。",
  },
] as const;

const comparisonRows = [
  {
    style: "独学",
    merits: "コストを抑えやすく、自分のペースで進めやすい。",
    demerits: "学習順序や品質評価を自力で設計する必要がある。",
  },
  {
    style: "講座受講",
    merits: "学習順序が整理されており、質問や添削を受けながら進められる。",
    demerits: "費用が発生し、日程やカリキュラムに合わせる必要がある。",
  },
] as const;

export default function HowToLearnGenerativeAiPage({ faqItems }: HowToLearnGenerativeAiPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold tracking-wide text-gray-500">生成AI 学び方</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            社会人のための生成AI学習ロードマップ
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-700">
            仕事を続けながら生成AIを学ぶなら、最初に必要なのは「何から始めるか」の順序です。本記事では、0日目から100日目までを3フェーズに分け、
            基礎理解から実務適用、応用実践まで段階的に進める学習ロードマップを紹介します。
          </p>
        </motion.header>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">なぜ今、生成AIを学ぶのか</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              生成AIは一部の専門職だけの道具ではなく、企画、営業、マーケティング、管理部門まで広く活用が進んでいます。文章作成、情報整理、要約、比較検討など、
              多くの業務で「下書きの速度」を高められる点が実務上の大きな価値です。
            </p>
            <p>
              社会人にとって重要なのは、ツールの名称を知ることではなく、日々の仕事で再現可能な使い方を持つことです。生成AIを使って成果物の初稿を早く作り、
              人が判断や調整に集中できる状態を作ると、生産性と意思決定の質を同時に改善しやすくなります。
            </p>
            <p>
              ただし、短期間で成果を出すには学習順序が不可欠です。基礎を飛ばして応用に入ると、出力の評価や改善ができず遠回りになります。だからこそ、段階を分けた学習設計が必要です。
            </p>
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
          <h2 className="text-2xl font-bold text-gray-900">学習ロードマップ（100日間の3フェーズ）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            100日を「理解」「活用」「実践」に分けると、途中で迷いにくくなります。各フェーズでの重点と到達目標を明確にしましょう。
          </p>

          <div className="mt-8 space-y-10">
            {phaseItems.map((phase, index) => (
              <motion.section
                key={phase.heading}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold leading-8 text-gray-900">{phase.heading}</h3>
                <p className="mt-4 text-base leading-8 text-gray-700">{phase.summary}</p>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
                  {phase.points.map((point) => (
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
          <h2 className="text-2xl font-bold text-gray-900">よくあるつまずきと対策</h2>
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
          <h2 className="text-2xl font-bold text-gray-900">独学 vs 講座受講</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            どちらにも利点があります。重要なのは、自分の時間制約と目標に対して現実的な手段を選ぶことです。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">学習スタイル</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">メリット</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">デメリット</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.style} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.style}</th>
                    <td className="py-4 px-4">{row.merits}</td>
                    <td className="py-4 pl-4">{row.demerits}</td>
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
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連コンテンツ</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/ai-training-for-individuals"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                個人向けAI研修の選び方
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
            <li>
              <Link href="/academy/subsidy-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                リスキリング補助金ガイド
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
          <h2 className="text-2xl font-bold text-gray-900">体系的に学びたい方へ</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            独学での学習設計に不安がある場合は、学習順序と実務適用を整理した環境を使う選択肢もあります。自分に合う進め方を比較しながら検討してみてください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              アカデミーLPを見る
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              LINEで相談する
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
