"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

type FAQItem = {
  question: string;
  answer: string;
};

type ReviewsPageProps = {
  faqItems: readonly FAQItem[];
};

type EvidenceMetric = {
  label: string;
  value: string;
  note: string;
};

type VoiceItem = {
  attribute: string;
  heading: string;
  before: string;
  after: string;
  comment: string;
  ratingLabel: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
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
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

/* TODO: 実データに置換 - この数値は仮です */
const conclusionMetrics: readonly EvidenceMetric[] = [
  {
    label: "受講満足度",
    value: "実データ確認中",
    note: "※数値は一例です。公開前に実データへ置換します。",
  },
  {
    label: "修了率",
    value: "実データ確認中",
    note: "※数値は一例です。公開前に実データへ置換します。",
  },
  {
    label: "推奨意向",
    value: "実データ確認中",
    note: "※数値は一例です。公開前に実データへ置換します。",
  },
] as const;

const conclusionReasons = [
  "2日間の集中研修で、未経験でも最初の実践ハードルを越えやすい設計。",
  "受講して終わりではなく、100日の伴走で実務適用まで支援。",
  "メンターと受講生コミュニティが、継続と行動変容を後押し。",
] as const;

const overviewItems = [
  { label: "受講期間", value: "2日間の集中研修 + 100日間の伴走プログラム" },
  { label: "受講料", value: "330,000円（税込）" },
  { label: "補助金対応", value: "リスキリング補助金対象（条件あり）" },
  { label: "サポート", value: "メンター伴走 + キャリアコンサルティング3回" },
] as const;

/* TODO: 実データに置換 - この数値は仮です */
const voiceItems: readonly VoiceItem[] = [
  {
    attribute: "30代・転職希望者（仮プロフィール）",
    heading: "未経験から業務活用へ（仮ケース）",
    before: "AI活用の経験がなく、何から始めるべきか分からなかった（仮）。",
    after: "段階的な伴走で実務への適用イメージを持てた（仮）。",
    comment:
      "【仮コメント】一人学習では止まりがちでしたが、伴走があることで継続しやすかったです。",
    ratingLabel: "5段階評価: 実データ確認中（※数値は一例です）",
  },
  {
    attribute: "40代・管理職（仮プロフィール）",
    heading: "現場導入を見据えた学び（仮ケース）",
    before: "AI導入の必要性は感じていたが、進め方が曖昧だった（仮）。",
    after: "チーム運用に向けた活用方針を整理できた（仮）。",
    comment:
      "【仮コメント】概念だけで終わらず、実務に持ち帰る視点が得られました。",
    ratingLabel: "5段階評価: 実データ確認中（※数値は一例です）",
  },
  {
    attribute: "フリーランス（仮プロフィール）",
    heading: "提案改善の手応え（仮ケース）",
    before: "提案が作業ベースに寄りやすく、差別化しづらかった（仮）。",
    after: "伴走で提案プロセスを見直し、改善の方向性が明確になった（仮）。",
    comment:
      "【仮コメント】思考の型を得られ、案件ごとの応用イメージが持てました。",
    ratingLabel: "5段階評価: 実データ確認中（※数値は一例です）",
  },
] as const;

const ReviewsPage = ({ faqItems }: ReviewsPageProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="bg-white">
      <section className="border-b border-slate-100 bg-white pt-24 pb-14 sm:pt-28 sm:pb-16">
        <motion.div
          className="container mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <AcademyBreadcrumb
              className="mb-6"
              items={[
                { label: "ホーム", href: "/" },
                { label: "アカデミー", href: "/academy" },
                { label: "評判・口コミ" },
              ]}
            />
            <p className="text-sm font-semibold tracking-wide text-orange-600 sm:text-base">
              AIリブートアカデミー 評判・口コミ
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              AIリブートアカデミーの評判・口コミ｜受講生の声と受講後の変化
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              「未経験でも本当に変われるのか？」という疑問に向けて、先に結論と数値、その後に受講生の属性別レビューとBefore/Afterをまとめています。
              受講して終わりではなく、100日の伴走でどう変化するかを確認できます。
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="/academy"
                className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                アカデミー概要を見る
              </Link>
              <Link
                href="/academy/seminars"
                className="rounded-full bg-orange-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-orange-600"
              >
                無料セミナーの日程を確認
              </Link>
            </div>
          </div>

          <div className="border border-slate-200 bg-slate-50">
            <Image
              src="/images/online-learning-illustration.png"
              alt="AIリブートアカデミーで学ぶ受講生のイメージ"
              width={720}
              height={540}
              className="h-auto w-full"
              priority
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            AIリブートアカデミーの評判は？結論からお伝えします
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            結論として、「実務に落とし込める伴走支援がある点」が高く評価されています。特に、未経験層が最初の一歩を踏み出しやすいこと、学習後の定着までサポートが続くことが評判につながっています。
          </p>

          <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
            ※数値は一例です。公開前に実データへ置換します。
          </p>

          {/* TODO: 実データに置換 - この数値は仮です */}
          <motion.dl
            className="mt-8 grid gap-4 md:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {conclusionMetrics.map((item) => (
              <motion.div
                key={item.label}
                variants={itemReveal}
                className="border border-slate-200 bg-white p-5"
              >
                <dt className="text-sm font-semibold text-slate-600">{item.label}</dt>
                <dd className="mt-2 text-3xl font-bold text-slate-900">{item.value}</dd>
                <p className="mt-2 text-xs text-slate-500 sm:text-sm">{item.note}</p>
              </motion.div>
            ))}
          </motion.dl>

          <h3 className="mt-10 text-lg font-bold text-slate-900 sm:text-xl">評価の根拠</h3>
          <ul className="mt-4 space-y-3">
            {conclusionReasons.map((reason) => (
              <li key={reason} className="flex gap-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-500" aria-hidden />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            33秒でわかる受講体験の雰囲気
          </h2>
          <div className="mt-4">
            <YouTubeEmbed
              videoId="iBJgynd2q20"
              title="AIリブートアカデミー受講体験動画"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            講座概要とサポート体制
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            受講前に確認したい基本情報を簡潔にまとめています。補助金条件の詳細は
            <Link
              href="/academy/subsidy-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              補助金ガイド
            </Link>
            で確認できます。
          </p>

          <motion.dl
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {overviewItems.map((item) => (
              <motion.div
                key={item.label}
                variants={itemReveal}
                className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[220px_1fr] sm:gap-6"
              >
                <dt className="text-sm font-bold text-slate-900">{item.label}</dt>
                <dd className="text-sm leading-relaxed text-slate-700 sm:text-base">{item.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            受講生の声（属性別）
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            転職希望者、管理職、フリーランスなど立場ごとに、受講前後の変化をまとめました。
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
            ※ コメントは個人が特定されない形に編集・要約しています。
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
            ※ 体験談・評価は掲載フォーマットを示す仮サンプルです。
          </p>

          {/* TODO: 実データに置換 - この数値は仮です */}
          <motion.div
            className="mt-8 grid gap-5 md:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {voiceItems.map((item) => (
              <motion.article
                key={item.heading}
                variants={itemReveal}
                className="border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-xs font-semibold tracking-wide text-slate-500">
                  {item.attribute}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900">
                  {item.heading}
                </h3>
                <p className="mt-3 text-sm font-semibold text-orange-600">
                  {item.ratingLabel}
                </p>

                <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  <p>
                    <span className="font-bold text-slate-900">Before:</span> {item.before}
                  </p>
                  <p>
                    <span className="font-bold text-slate-900">After:</span> {item.after}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">「{item.comment}」</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <motion.div
          className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            よくある質問（FAQ）
          </h2>

          <motion.div
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                variants={itemReveal}
                className="border-b border-slate-200 py-4"
              >
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
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                    <span>
                      Q{index + 1}: {item.question}
                    </span>
                    <span className="text-xl font-medium text-orange-500">
                      {openFaqIndex === index ? "−" : "+"}
                    </span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-relaxed text-slate-700 sm:text-base">
                    A{index + 1}: {item.answer}
                  </p>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 pt-12 pb-8">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連コンテンツ</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIリブートアカデミーTOP
              </Link>
            </li>
            <li>
              <Link
                href="/academy/subsidy-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                リスキリング補助金ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/academy/seminars"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                無料セミナー一覧
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-12 md:py-16">
        <motion.div
          className="container mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            受講して終わりではなく、100日の伴走で変わる一歩を
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            評判や口コミを確認したうえで、次はあなたの目的に合うかを確かめる段階です。
            無料セミナーまたは個別相談で、学習計画と補助金活用まで具体化できます。
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              無料セミナーに参加する
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#06C755] px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05b54d]"
            >
              LINEで個別相談する
            </a>
          </div>

          <div className="mt-5">
            <Link
              href="/academy"
              className="text-sm font-bold text-slate-700 underline underline-offset-4 hover:text-slate-900"
            >
              アカデミーTOPに戻る
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ReviewsPage;
