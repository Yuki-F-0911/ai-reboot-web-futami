"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

type ReviewsPageProps = {
  faqItems: readonly FAQItem[];
};

type VoiceItem = {
  profile: string;
  heading: string;
  body: string;
};

type ChangeItem = {
  before: string;
  after: string;
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

const overviewItems = [
  { label: "受講期間", value: "100日間" },
  { label: "受講料", value: "330,000円（税込）" },
  { label: "補助金対応", value: "リスキリング補助金対象（条件あり）" },
  { label: "サポート", value: "メンター伴走 + キャリアコンサルティング3回" },
] as const;

const voiceItems: readonly VoiceItem[] = [
  {
    profile: "参加者",
    heading: "AIが「便利ツール」から探求パートナーへ",
    body: "参加前は「ChatGPTにコードを書いてもらう延長でしょ」と思っていました。ですが、答えのない問いをAIと仲間と探る中で思考が深まり、その場でMDMやWebサイトまで形にできました。",
  },
  {
    profile: "参加者",
    heading: "今やらないと置いていかれる危機感が原動力になった",
    body: "圧倒的な進化を前に、思考OSを今入れ替える必要があると実感しました。迷いが確信に変わり、「見送らなくてよかった」と心から感じています。",
  },
  {
    profile: "参加者",
    heading: "一人なら止まっていた。仲間がいたから走り切れた",
    body: "独学なら途中で行き詰まっていたと思います。励まし合い、知恵を出し合える環境があったからこそ、密度の濃い2日間を走り切れました。",
  },
  {
    profile: "参加者",
    heading: "自腹参加でも、それ以上の未来への投資になった",
    body: "決して安くはない自己投資でしたが、チャレンジ精神を持つ仲間との出会いは何にも代えがたい資産でした。AIという武器で自分の経験を活かせる未来を、具体的に描けるようになりました。",
  },
] as const;

const changeItems: readonly ChangeItem[] = [
  {
    before: "AIはChatGPTに聞くだけの便利ツールだと思っていた",
    after: "答えのない問いを深掘りする、思考のパートナーとして活用できるようになった",
  },
  {
    before: "AIは「向こう側」にあるものだと感じ、手応えを持てなかった",
    after: "AIを「ここにある、触れられるもの」として捉え、学んだ直後に成果物まで形にできた",
  },
  {
    before: "このタイミングで挑戦すべきか迷い、決断しきれなかった",
    after: "「今やるべきだ」という確信を持ち、危機感を前に進む原動力へ変えられた",
  },
  {
    before: "一人で学び始めても続けられるか不安だった",
    after: "仲間と励まし合える環境で、密度の濃い2日間を走り切り、100日間への手応えを持てた",
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
            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              AIリブートアカデミーの評判と受講後の変化
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              AIリブートアカデミーの評判・口コミを、受講後の変化とあわせてまとめました。受講を検討している方が、判断材料を整理できるように構成しています。
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50">
            <Image
              src="/images/online-learning-illustration.png"
              alt="AI学習を進める受講イメージ"
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">講座概要</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            受講検討時にまず確認される基本情報を、短く整理しています。
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
                className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[160px_1fr] sm:gap-6"
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">受講生の声</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            2日間のスタートアップ合宿を終えた時点での、参加者の声を紹介します。
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
            ※ 受講生の声は一部編集・要約しています。
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
            ※ 2日間のスタートアップ合宿終了時点での感想です。
          </p>

          <motion.div
            className="mt-8 border-t border-slate-100"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {voiceItems.map((item) => (
              <motion.blockquote
                key={item.heading}
                variants={itemReveal}
                className="border-b border-slate-100 py-6"
              >
                <p className="text-xs font-semibold tracking-wide text-slate-500 sm:text-sm">{item.profile}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">{item.heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">「{item.body}」</p>
              </motion.blockquote>
            ))}
          </motion.div>
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">受講で得られる変化</h2>

          <motion.ol
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {changeItems.map((item) => (
              <motion.li
                key={item.before}
                variants={itemReveal}
                className="border-b border-slate-200 py-5"
              >
                <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-5">
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    <span className="font-bold text-slate-900">Before:</span> {item.before}
                  </p>
                  <p className="text-sm font-bold text-orange-500 md:pt-0.5">→</p>
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                    <span className="font-bold text-slate-900">After:</span> {item.after}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">よくある質問</h2>

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
                    <span className="text-xl font-medium text-orange-500">{openFaqIndex === index ? "−" : "+"}</span>
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
            評判や口コミを確認したうえで、まずは無料で相談したい方へ
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            受講目的に合うかどうかを、無料相談と説明会で具体的にご案内します。
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#06C755] px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05b54d]"
            >
              LINE で無料相談する
            </a>
            <Link
              href="/briefing"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              無料説明会に申し込む
            </Link>
          </div>

          <div className="mt-5">
            <Link href="/academy" className="text-sm font-bold text-slate-700 underline underline-offset-4 hover:text-slate-900">
              アカデミーTOPに戻る
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ReviewsPage;
