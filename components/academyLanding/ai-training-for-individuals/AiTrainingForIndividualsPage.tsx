"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

type AiTrainingForIndividualsPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
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
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const sectionLabelClass = "text-xs font-bold tracking-[0.16em] text-slate-500";
const sectionHeadingClass = "mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl";

const learningSplitItems = [
  {
    title: "独学を軸に進めやすいケース",
    points: [
      "学習テーマが明確で、調べながら継続できる",
      "試行錯誤に時間をかけても問題ない",
      "質問先がなくても自力で解決しやすい",
    ],
  },
  {
    title: "研修を活用しやすいケース",
    points: [
      "仕事や副業で早く実務活用したい",
      "学習計画とフィードバックが必要",
      "学んだ内容を定着させる伴走がほしい",
    ],
  },
] as const;

const reasonItems = [
  {
    title: "学習の優先順位が整理しやすい",
    description:
      "独学では情報が広く、何から始めるべきか迷いがちです。研修では目的に沿った順序で進めやすく、学習の迷走を減らせます。",
  },
  {
    title: "つまずきの解消が早い",
    description:
      "実装や業務適用で詰まったとき、質問の場があると停滞期間を短縮しやすくなります。独学よりも学習リズムを保ちやすい点がメリットです。",
  },
  {
    title: "実務に接続しやすい",
    description:
      "知識の理解だけでなく、業務にどう適用するかまで扱う研修は、アウトプット設計の支援を受けやすく、実務転用までの距離を縮められます。",
  },
  {
    title: "継続の仕組みを作りやすい",
    description:
      "期限・面談・提出などの節目があると、学習の中断を防ぎやすくなります。独学で継続が難しい人にとっては大きな差になります。",
  },
] as const;

const checklistItems = [
  {
    title: "目的が言語化できているか",
    body: "業務効率化、キャリアチェンジ、基礎習得など、受講の目的を先に明確化します。",
    checkpoint: "受講後にできるようになりたい行動を1つ以上書けるか",
  },
  {
    title: "費用を総額で比較できているか",
    body: "受講料だけでなく、期間中の学習時間や追加教材、相談回数を含めて比較します。",
    checkpoint: "金額とサポート内容を同じ表に並べて比較したか",
  },
  {
    title: "学習期間が現実的か",
    body: "仕事や生活に合わせて、週あたりに確保できる学習時間と期間が噛み合うかを確認します。",
    checkpoint: "開始日から逆算した週次計画を作成したか",
  },
  {
    title: "サポートの中身が明確か",
    body: "質問対応の方法、返信目安、面談頻度など、伴走の具体度を確認します。",
    checkpoint: "困ったときの連絡手段と対応範囲を把握しているか",
  },
  {
    title: "補助制度の確認が済んでいるか",
    body: "補助金や給付制度は条件が異なるため、公式情報と講座側の案内を両方確認します。",
    checkpoint: "自分の条件で利用可否を確認できたか",
  },
  {
    title: "実践課題が含まれているか",
    body: "視聴中心の学習だけでなく、実際に手を動かす課題があるかを確認します。",
    checkpoint: "成果物を作る機会がカリキュラム内にあるか",
  },
  {
    title: "修了後の支援があるか",
    body: "学習後の活用相談やコミュニティの有無は、スキル定着と継続に影響します。",
    checkpoint: "修了後の相談窓口やフォロー体制を確認したか",
  },
] as const;

const recommendedForItems = [
  "学習の優先順位を短時間で整理したい人",
  "質問やレビューを受けながら進めたい人",
  "実務で使える形まで落とし込みたい人",
  "期限を決めて学習を完走したい人",
] as const;

const notRecommendedForItems = [
  "時間をかけて自由に探索したい人",
  "他者サポートなしでも継続できる人",
  "短期成果より趣味として学びたい人",
  "学習目的がまだ固まっていない人",
] as const;

const AiTrainingForIndividualsPage = ({ faqItems }: AiTrainingForIndividualsPageProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.08),transparent_60%)]" />
        <motion.div
          className="relative container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>INDIVIDUAL AI TRAINING GUIDE</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            個人向けAI研修の選び方
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            個人学習とスクール活用には、それぞれ向き不向きがあります。目的、時間、サポートの必要度を軸に、
            自分に合う学び方を整理できるようにまとめました。
          </p>

          <motion.dl
            className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr]"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {learningSplitItems.map((item) => (
              <motion.div key={item.title} variants={itemReveal} className="rounded-lg border border-slate-200 bg-white/90 p-5">
                <dt className="text-sm font-bold text-slate-900">{item.title}</dt>
                <dd className="mt-3">
                  <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
                    {item.points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>WHY</p>
          <h2 className={sectionHeadingClass}>なぜ個人でAI研修を受けるのか</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
            結論として、短期間で業務活用まで到達したい場合は、独学より研修活用のほうが進行管理とフィードバック面で有利です。
          </p>

          <motion.dl
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {reasonItems.map((item) => (
              <motion.div key={item.title} variants={itemReveal} className="border-b border-slate-200 py-6">
                <dt>
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{item.title}</h3>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{item.description}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>CHECKLIST</p>
          <h2 className={sectionHeadingClass}>個人向けAI研修の選び方チェックリスト</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
            申し込み前に7項目を確認すると、受講後のミスマッチを減らしやすくなります。
          </p>

          <motion.ol
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {checklistItems.map((item, index) => (
              <motion.li key={item.title} variants={itemReveal} className="border-b border-slate-200 py-6">
                <p className="text-xs font-bold tracking-[0.14em] text-slate-500">CHECK {index + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{item.body}</p>
                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-bold text-slate-800">確認ポイント:</span> {item.checkpoint}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>FIT</p>
          <h2 className={sectionHeadingClass}>こんな人におすすめ / おすすめしない</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
            判断の目安は「短期で成果を出したいか」「伴走支援が必要か」です。両方に当てはまるなら研修活用の優先度が上がります。
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <motion.section
              className="rounded-lg border border-slate-200 p-5"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
            >
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">おすすめの人</h3>
              <ul className="mt-4 border-t border-slate-200 text-sm leading-relaxed text-slate-700 sm:text-base">
                {recommendedForItems.map((item) => (
                  <li key={item} className="border-b border-slate-200 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              className="rounded-lg border border-slate-200 p-5"
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">おすすめしない人</h3>
              <ul className="mt-4 border-t border-slate-200 text-sm leading-relaxed text-slate-700 sm:text-base">
                {notRecommendedForItems.map((item) => (
                  <li key={item} className="border-b border-slate-200 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.52, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>FAQ</p>
          <h2 className={sectionHeadingClass}>よくある質問</h2>

          <motion.div
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqItems.map((item, index) => (
              <motion.div key={item.question} variants={itemReveal} className="border-b border-slate-200 py-4">
                <details
                  open={openFaqIndex === index}
                  onToggle={(event) => {
                    if (event.currentTarget.open) {
                      setOpenFaqIndex(index);
                      return;
                    }
                    if (openFaqIndex === index) {
                      setOpenFaqIndex(null);
                    }
                  }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-bold text-slate-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                    <span>Q{index + 1}. {item.question}</span>
                    <span className="text-xl leading-none text-slate-500">{openFaqIndex === index ? "-" : "+"}</span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-relaxed text-slate-700 sm:text-base">A{index + 1}. {item.answer}</p>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">相談してから決めたい方へ</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            すぐに受講を決める必要はありません。現在の目的や学習状況に合わせて、進め方を相談してから判断できます。
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#05b54d]"
            >
              LINEで相談する
            </a>
            <Link
              href="/briefing"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-bold text-slate-800 transition-colors duration-200 hover:bg-slate-100"
            >
              無料説明会を見る
            </Link>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            どちらの窓口でも、目的整理や学習計画の相談が可能です。無理な申し込み案内は行いません。
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default AiTrainingForIndividualsPage;
