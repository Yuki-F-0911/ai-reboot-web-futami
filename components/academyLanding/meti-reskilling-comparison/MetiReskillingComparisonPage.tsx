"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

type MetiReskillingComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

type ComparisonPoint = {
  id: number;
  title: string;
  summary: string;
  checks: readonly string[];
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

const sectionLabelClass = "text-xs font-bold tracking-[0.14em] text-slate-500";
const sectionHeadingClass = "mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl";

const definitionParagraphs = [
  "経産省認定という言葉は、講座の信頼性を見極める入口として有効です。特に補助制度を活用する場合は、制度の対象要件や講座の位置づけを事前に確認することが重要です。",
  "ただし、認定はあくまで制度上の要件を満たしていることを示す情報であり、学習成果や転職成果そのものを自動的に保証するものではありません。講座内容と自分の目的の一致度を別軸で見極める必要があります。",
  "制度の一次情報は、公式サイト `careerup.reskilling.go.jp` で確認できます。比較時は、公式情報と講座提供元の最新案内を必ず突き合わせてください。",
] as const;

const comparisonPoints: readonly ComparisonPoint[] = [
  {
    id: 1,
    title: "認定の種類と範囲を分けて確認する",
    summary:
      "リスキリング補助金と教育訓練給付金は同一制度ではありません。対象者、申請手順、講座側の要件が異なるため、どの制度を前提に比較しているかを先に揃えることが大切です。",
    checks: [
      "どの制度の対象講座として案内されているか",
      "自分の雇用形態や目的で適用条件を満たすか",
      "申請フローと必要書類を事前に把握できるか",
    ],
  },
  {
    id: 2,
    title: "講座の実績は数値と事例の両方で見る",
    summary:
      "受講者数や修了率などの指標が公開されているか、活用事例が示されているかで、講座の透明性は大きく変わります。公開項目が少ない場合は、説明会で確認する前提で比較しましょう。",
    checks: [
      "受講実績や修了実績の開示があるか",
      "受講後の活用事例が具体的に説明されているか",
      "実績情報の更新時期が明記されているか",
    ],
  },
  {
    id: 3,
    title: "サポート体制は形式ではなく運用で比較する",
    summary:
      "メンターやキャリア相談、転職支援の有無だけでは不十分です。頻度、対応範囲、相談手段まで確認すると、受講中のミスマッチを減らしやすくなります。",
    checks: [
      "質問対応の窓口と返信目安が明確か",
      "キャリア相談の実施回数や担当範囲が明示されているか",
      "転職支援が求人紹介だけでなく選考準備まで含むか",
    ],
  },
  {
    id: 4,
    title: "カリキュラムの実践性を確認する",
    summary:
      "座学中心の構成か、実務課題型の構成かで習得の深さは変わります。知識理解だけでなく、実際に手を動かして成果物を作る設計になっているかを見ましょう。",
    checks: [
      "実務に近い課題や演習が含まれているか",
      "提出物へのフィードバック機会があるか",
      "受講後に再現できる学習手順まで整理されているか",
    ],
  },
  {
    id: 5,
    title: "補助金活用後の実質負担額で判断する",
    summary:
      "比較時は受講料の定価だけでなく、制度適用後の自己負担額、追加費用、サポート範囲を同じ条件で並べることが必要です。金額と中身をセットで評価しましょう。",
    checks: [
      "制度適用後の自己負担額を確認したか",
      "教材費や追加費用を含めて総額比較しているか",
      "支払額に対して受けられるサポート内容を説明できるか",
    ],
  },
] as const;

const cautionItems = [
  "認定は重要な判断材料ですが、認定だけで講座品質を断定しない。",
  "講座の良し悪しは、受講目的との一致度で最終判断する。",
  "制度情報は更新されるため、必ず公式サイトと提供元の最新情報を確認する。",
] as const;

const MetiReskillingComparisonPage = ({ faqItems }: MetiReskillingComparisonPageProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(130deg,#ffffff_0%,#f4f7fb_48%,#edf3fb_100%)] pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(15,23,42,0.08),transparent_44%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(56,189,248,0.16),transparent_36%)]" />

        <motion.div
          className="relative container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>METI CERTIFIED RESKILLING GUIDE</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            経産省認定リスキリング講座を比較する視点
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            経産省認定というラベルだけで判断せず、制度の種類、実績、支援体制、実践性、実質負担額の5軸で比較すると、
            講座選びの判断精度を上げられます。
          </p>
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
          <p className={sectionLabelClass}>BASICS</p>
          <h2 className={sectionHeadingClass}>経産省認定とは何か</h2>

          <motion.div
            className="mt-8 space-y-4"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {definitionParagraphs.map((paragraph) => (
              <motion.p key={paragraph} variants={itemReveal} className="max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            className="mt-6 text-sm leading-relaxed text-slate-700 sm:text-base"
            variants={itemReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            公式参照先:
            <a
              href="https://careerup.reskilling.go.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 font-bold text-slate-900 underline underline-offset-4"
            >
              careerup.reskilling.go.jp
            </a>
          </motion.p>
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
          <p className={sectionLabelClass}>COMPARISON</p>
          <h2 className={sectionHeadingClass}>比較の5つの視点</h2>

          <motion.ol
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {comparisonPoints.map((point) => (
              <motion.li key={point.id} variants={itemReveal} className="border-b border-slate-200 py-7 sm:py-8">
                <p className="text-xs font-bold tracking-[0.14em] text-slate-500">POINT {point.id}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{point.summary}</p>

                <dl className="mt-4 grid gap-2 sm:grid-cols-[120px_1fr] sm:gap-5">
                  <dt className="text-sm font-bold text-slate-900">確認項目</dt>
                  <dd>
                    <ul className="border-t border-slate-200 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {point.checks.map((check) => (
                        <li key={check} className="border-b border-slate-200 py-2">
                          {check}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
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
          <p className={sectionLabelClass}>CAUTION</p>
          <h2 className={sectionHeadingClass}>比較時の注意点</h2>

          <motion.ul
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cautionItems.map((item, index) => (
              <motion.li key={item} variants={itemReveal} className="border-b border-slate-200 py-5">
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">注意点 {index + 1}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{item}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 pt-12 pb-4">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連コンテンツ</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/subsidy-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                リスキリング補助金ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/academy/subsidy-eligible-courses"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                補助金対象講座の見分け方
              </Link>
            </li>
            <li>
              <Link
                href="/academy/reskilling-course-recommendation"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                リスキリング講座おすすめガイド
              </Link>
            </li>
          </ul>
        </div>
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
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">制度と講座の相性を相談してから決める</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            情報を見比べても迷う場合は、制度適用条件と学習目的を先に整理するのが近道です。相談ベースで判断したい方向けに窓口を用意しています。
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
            <Link
              href="/academy/ai-course-comparison"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-bold text-slate-800 transition-colors duration-200 hover:bg-slate-100"
            >
              AI講座比較ページへ
            </Link>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            比較ページを併読する場合は、価格・期間・サポートの観点を横並びで確認すると判断しやすくなります。
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default MetiReskillingComparisonPage;
