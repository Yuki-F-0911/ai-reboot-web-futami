"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

type AiCareerChangeCasesPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const routeItems = [
  {
    title: "現職 × AI活用（同職種で付加価値を高める）",
    suited:
      "今の仕事の専門性は維持したまま、成果スピードや提案の質を上げたい人に向いています。",
    preparation: [
      "日常業務で時間がかかる作業を洗い出し、AIで短縮できる工程を特定する",
      "プロンプトの型を業務別に整理し、再利用できる手順として残す",
      "成果物の検証ルールを決め、誤りを防ぐ運用を先に設計する",
    ],
    caution:
      "ツール導入自体が目的になると効果が薄れます。業務成果の改善指標を先に決めることが重要です。",
  },
  {
    title: "異業種 × 既存スキル（隣接領域への移行）",
    suited:
      "業界を変えたいが、これまでの知識や職務経験を活かして移りたい人に向いています。",
    preparation: [
      "自分の強みを職能ではなく課題解決力として言語化する",
      "移行先業界の業務フローを調べ、AIで貢献できる場面を具体化する",
      "ポートフォリオや職務経歴書で、再現可能な価値提供を示す",
    ],
    caution:
      "AIスキルだけで評価されるケースは限定的です。業界理解と組み合わせて説明できることが必要です。",
  },
  {
    title: "AI活用人材へ（AI推進担当・DX推進ポジション）",
    suited:
      "現場業務と組織課題の両方を理解し、部門横断で改善を進めたい人に向いています。",
    preparation: [
      "業務改善テーマを小さく設定し、導入前後の変化を示せる形で検証する",
      "社内ガイドライン、情報管理、品質担保の観点を整理して提案に含める",
      "現場で使えるテンプレートや運用手順を作り、定着まで支援する",
    ],
    caution:
      "技術理解だけでなく、調整力と合意形成が求められます。実装と運用の橋渡しが評価の中心になります。",
  },
  {
    title: "副業・複業から始める（段階的に移行する）",
    suited:
      "収入リスクを抑えながら、実務経験を積んで方向性を見極めたい人に向いています。",
    preparation: [
      "提供メニューを絞り、短期間で成果を出せる業務に集中する",
      "本業に影響しない稼働時間と納期設計を先に決める",
      "契約条件、守秘義務、納品範囲を明確にしてトラブルを防ぐ",
    ],
    caution:
      "稼働過多で本業と副業の双方が崩れると継続できません。案件数より運用の安定性を優先するべきです。",
  },
  {
    title: "フリーランス・独立（AIを活用した個人事業）",
    suited:
      "働き方の裁量を高め、専門領域で継続的に顧客価値を提供したい人に向いています。",
    preparation: [
      "専門領域を明確化し、誰のどの課題を解決するかを定義する",
      "集客導線と提案資料を整え、案件獲得の仕組みを作る",
      "収支計画、契約実務、税務など事業運営の基盤を先に準備する",
    ],
    caution:
      "単価や案件の波を前提にした資金管理が必要です。スキル習得と営業活動を同時に進める設計が欠かせません。",
  },
] as const;

const preparationSteps = [
  {
    title: "スキルの棚卸し（何が活かせるか）",
    body: "担当業務、実績、得意な進め方を分解し、転用可能なスキルを明確にします。職種名ではなく、課題解決の再現性で整理すると選択肢が広がります。",
  },
  {
    title: "AIスキルの習得（どこまで必要か）",
    body: "まずは実務で使える基本操作と検証習慣を身につけることが優先です。全領域を網羅するより、目指す職務に必要な範囲を先に定義する方が効率的です。",
  },
  {
    title: "情報収集と相談（市場・制度を把握する）",
    body: "求人動向、報酬レンジ、働き方の条件を定期的に確認します。あわせて公的支援制度や学習支援制度を把握し、費用と期間の見通しを持つことが重要です。",
  },
] as const;

export default function AiCareerChangeCasesPage({ faqItems }: AiCareerChangeCasesPageProps) {
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
          <p className="text-sm font-semibold tracking-wide text-gray-500">AI時代 キャリアチェンジ</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI時代のキャリアチェンジ - 5つのルートと準備すべきこと
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI時代のキャリアチェンジは、職種を完全に変える選択だけではありません。現職で価値を高める道、隣接領域へ移る道、
            段階的に独立へ進む道など、複数のルートがあります。本記事では、実名の転職体験談ではなく、判断に使える一般的なパターンガイドとして整理します。
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
          <h2 className="text-2xl font-bold text-gray-900">なぜAI時代にキャリアチェンジが注目されるのか</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              多くの職場でAIツールの導入が進み、同じ業務でも成果を出すまでの速度や進め方に差が出やすくなっています。
              その結果、職務内容そのものよりも、変化に合わせて業務設計を更新できる人材が求められる傾向が強まっています。
            </p>
            <p>
              以前は経験年数だけで評価されていた業務でも、今は「AIを使ってどのように改善したか」を説明できることが価値につながります。
              既存スキルにAI活用を重ねることで、同じ職種でも役割の幅を広げることが可能になります。
            </p>
            <p>
              一方で、闇雲に転職先を探すだけでは判断を誤りやすくなります。まずは自分に合う移行ルートを選び、
              必要な準備を段階的に進めることが、キャリアチェンジの失敗を減らす現実的な進め方です。
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
          <h2 className="text-2xl font-bold text-gray-900">キャリアチェンジの5つのルート</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここでは代表的な5ルートを、向いている人、必要な準備、注意点の3点で比較できる形にまとめます。
          </p>
          <div className="mt-8 space-y-8">
            {routeItems.map((route, index) => (
              <motion.section
                key={route.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold leading-8 text-gray-900">{route.title}</h3>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  <span className="font-semibold text-gray-900">向いている人:</span> {route.suited}
                </p>
                <div className="mt-5">
                  <p className="text-sm font-semibold tracking-wide text-gray-900">必要な準備</p>
                  <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
                    {route.preparation.map((point) => (
                      <li key={point} className="pl-1 marker:text-gray-500">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">注意点:</span> {route.caution}
                </p>
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
          <h2 className="text-2xl font-bold text-gray-900">キャリアチェンジ前にやるべき3つの準備</h2>
          <ol className="mt-7 space-y-8">
            {preparationSteps.map((step, index) => (
              <li key={step.title} className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold leading-8 text-gray-900">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-gray-700">{step.body}</p>
              </li>
            ))}
          </ol>
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

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">AIスキルを身につけてキャリアの選択肢を広げたい方へ</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            独学で方向性に迷う場合は、目的に合う学習順序を先に決めることで判断しやすくなります。キャリアの可能性を広げるための学習導線を確認してみてください。
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
