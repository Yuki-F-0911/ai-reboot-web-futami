"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

type SkillsForAiEraCareerPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const roleSkillSections = [
  {
    role: "営業・マーケティング",
    summary:
      "顧客理解と提案速度が求められる領域では、AIを使って情報収集と仮説整理の初速を上げるスキルが重要です。",
    skills: [
      "AI活用リサーチ: 市場動向や顧客課題の仮説を短時間で整理する",
      "データ読解: 数字や反応データを解釈し、施策の優先順位を判断する",
      "プロンプト設計: 目的に沿う出力形式を指定し、再利用可能な指示を作る",
    ],
  },
  {
    role: "管理部門・バックオフィス",
    summary:
      "定型業務と判断業務が混在する部門では、AIに任せる範囲と人が担う範囲を設計する視点が成果を左右します。",
    skills: [
      "業務自動化設計: 手順を分解して、AIと他ツールを組み合わせた流れを作る",
      "AI活用の判断力: 品質やリスクを見ながら、活用可否を業務単位で決める",
    ],
  },
  {
    role: "企画・事業開発",
    summary:
      "不確実性の高い領域では、AIを思考の補助線として使い、仮説検証の回転数を上げる力が求められます。",
    skills: [
      "AI活用による仮説構築: 課題定義から打ち手候補までを複数案で比較する",
      "プロトタイピング: 企画段階の文書や画面案を素早く作り、検証に進む",
    ],
  },
  {
    role: "エンジニア",
    summary:
      "実装だけでなく設計判断にもAIを取り込むことで、開発速度と品質改善の両立がしやすくなります。",
    skills: [
      "AI連携開発: 要件整理、実装補助、テスト観点整理までを一連で扱う",
      "プロンプトエンジニアリング: コンテキスト設計と制約指定で出力品質を安定化させる",
    ],
  },
  {
    role: "マネジメント",
    summary:
      "個人の活用を組織成果につなげるには、方向性の言語化と導入支援の設計が不可欠です。",
    skills: [
      "AI活用方針の策定: 目的、優先業務、評価観点をチームの共通言語にする",
      "チームへの導入支援: 実践機会と振り返りの場を作り、学習を業務に定着させる",
    ],
  },
] as const;

const commonCoreSkills = [
  {
    title: "問いを立てる力",
    description:
      "AIの出力品質は、最初に設定する問いで大きく変わります。目的、前提、制約を整理して問いを作る力は、どの職種でも土台になります。",
  },
  {
    title: "AIに渡す前の構造化力",
    description:
      "情報が曖昧なままでは、出力も曖昧になります。論点、優先順位、欲しい出力形式を先に整理することで、やり直しを減らせます。",
  },
  {
    title: "結果を判断する力",
    description:
      "AIの回答はそのまま採用するものではなく、意思決定の材料です。妥当性や実行可能性を確認し、最終判断を人が担う姿勢が重要です。",
  },
] as const;

export default function SkillsForAiEraCareerPage({ faqItems }: SkillsForAiEraCareerPageProps) {
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
          <p className="text-sm font-semibold tracking-wide text-gray-500">AI時代 必要なスキル</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI時代に求められるスキルとは？職種別に整理する
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI活用が広がる中で、求められる能力は「ツールを触れること」だけではなくなっています。本記事では、職種ごとに必要なスキルの違いを整理しながら、
            どの仕事にも共通する土台の力まで解説します。
          </p>
        </motion.header>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">なぜ今スキルの見直しが必要か</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              AIの普及によって、多くの業務で「情報を集める」「整理する」「たたき台を作る」といった初動の工程が短縮しやすくなりました。その結果、単純な作業量よりも、
              何を判断し、どう使うかという設計力が重要になっています。
            </p>
            <p>
              これまで経験で行っていた仕事も、AIを前提に進め方を再設計することで、同じ時間で扱える論点や選択肢を増やせるようになっています。反対に、従来の進め方のままでは、
              速度と質の両面で差が開きやすくなります。
            </p>
            <p>
              だからこそ、職種ごとに必要なスキルを整理し、共通基盤を押さえた上で学び直すことが重要です。特別な肩書きよりも、実務で再現できる使い方を持てるかが分岐点になります。
            </p>
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
          <h2 className="text-2xl font-bold text-gray-900">職種別に求められるスキル</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            同じAIツールを使っていても、成果につながる使い方は職種によって異なります。以下では代表的な5職種の観点で整理します。
          </p>

          <div className="mt-8 space-y-10">
            {roleSkillSections.map((section, index) => (
              <motion.section
                key={section.role}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="border-t border-gray-200 pt-8"
              >
                <h3 className="text-xl font-semibold text-gray-900">{section.role}</h3>
                <p className="mt-4 text-base leading-8 text-gray-700">{section.summary}</p>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
                  {section.skills.map((skill) => (
                    <li key={skill} className="pl-1 marker:text-gray-500">
                      {skill}
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
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">共通して重要な3つの力</h2>
          <div className="mt-7 space-y-7">
            {commonCoreSkills.map((skill, index) => (
              <motion.section
                key={skill.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {index + 1}. {skill.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{skill.description}</p>
              </motion.section>
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

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">スキルを体系的に身につけたい方へ</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            独学だけでは設計しづらい場合は、学習順序と実務接続を意識した環境を使う方法もあります。現在地と目標に合う進め方を比較しながら検討してください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              アカデミーを見る
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
