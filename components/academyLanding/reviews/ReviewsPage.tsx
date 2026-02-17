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

type VoiceItem = {
  attribute: string;
  heading: string;
  before: string;
  after: string;
  comment: string;
};

type VoiceSection = {
  title: string;
  items: readonly VoiceItem[];
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

const conclusionReasons = [
  "実務での活用・アウトプットのイメージが具体化しやすい",
  "仲間と学べる環境があり、挫折しにくい",
  "2日間で具体的な成果物まで形にできる",
] as const;

const overviewItems = [
  { label: "受講期間", value: "2日間の集中研修 + 100日間の伴走プログラム" },
  { label: "受講料", value: "330,000円（税込）" },
  { label: "補助金対応", value: "リスキリング補助金対象（条件あり）" },
  { label: "サポート", value: "メンター伴走 + キャリアコンサルティング3回" },
] as const;

const voiceSections: readonly VoiceSection[] = [
  {
    title: "迷い・懐疑の払拭",
    items: [
      {
        attribute: "第一期受講生",
        heading:
          "「単なる便利ツールだと思っていたAIが、自分の深層を掘り下げるパートナーに変わりました」",
        before:
          "正直、参加する前は「ChatGPTにコードを書いてもらうことの延長線上でしょ？」と思っていました。",
        after:
          "答えのない問いをAIと、そして仲間と共に探求していく過程で、「ここまで深められるのか」という衝撃を受けました。",
        comment:
          "正直、参加する前は「ChatGPTにコードを書いてもらうことの延長線上でしょ？」と思っていました。でも、全く違いました。\n答えのない問いをAIと、そして仲間と共に探求していく過程で、「ここまで深められるのか」という衝撃を受けました。単に学ぶだけでなく、その場でWebサイトなどの具体的な「成果物」まで形にできたのが大きな収穫です。",
      },
      {
        attribute: "第一期受講生",
        heading: "「AIを『使う』側から『共に創る』側へ。スイッチが入りました」",
        before: "これまではAIを「向こう側にあるもの」として見ていました",
        after:
          "この2日間で「ここにある、触れられるもの」という感覚に変わりました。完全にスイッチが入りました。",
        comment:
          "これまではAIを「向こう側にあるもの」として見ていましたが、この2日間で「ここにある、触れられるもの」という感覚に変わりました。完全にスイッチが入りました。\n学んで終わりではなく、すぐにアウトプットしたくなる。この100日間、走り抜ける準備が整いました。",
      },
    ],
  },
  {
    title: "緊急性・行動喚起",
    items: [
      {
        attribute: "第一期受講生",
        heading:
          "「今やらなければ、確実に置いていかれる。その健全な危機感が確信に変わりました」",
        before: "参加するまでは迷いもありました",
        after:
          "圧倒的なスピードで進化するAIを前に、今ここで「思考OS」を入れ替えないと未来はないという危機感。",
        comment:
          "参加するまでは迷いもありましたが、本当に来てよかった。「もし今回見送っていたら」と思うとゾッとします。\n圧倒的なスピードで進化するAIを前に、今ここで「思考OS」を入れ替えないと未来はないという危機感。それは焦りではなく、前へ進むための良い原動力になりました。次は私たちがAIを活かしていく番です。",
      },
      {
        attribute: "個人参加・第一期受講生",
        heading: "「自腹での参加。でも、それ以上の未来への投資になりました」",
        before: "決して安い金額ではありませんでした",
        after:
          "自分のキャリアや過去の経験が、AIという武器を得てどう花開くのか。自分にとって良い未来にしかならないという確信があります。",
        comment:
          "決して安い金額ではありませんでしたが、直感を信じて飛び込んで正解でした。「やっちゃうか！」というチャレンジ精神で集まったメンバーとの出会いは、何にも代えがたい資産です。\n自分のキャリアや過去の経験が、AIという武器を得てどう花開くのか。自分にとって良い未来にしかならないという確信があります。",
      },
    ],
  },
  {
    title: "コミュニティ・環境の価値",
    items: [
      {
        attribute: "第一期受講生",
        heading:
          "「一人なら動画を1本見て終わっていた。仲間がいるから、限界を超えられる」",
        before: "最初は「本当に自分にできるのか」と不安でした。",
        after: "でも、ここに来て一番良かったのは「仲間」ができたことです。",
        comment:
          "最初は「本当に自分にできるのか」と不安でした。でも、ここに来て一番良かったのは「仲間」ができたことです。\nおそらく一人で独学していたら、途中で行き詰まって挫折していたと思います。励まし合い、知恵を出し合える環境があるからこそ、密度の濃い2日間を走り切れました。この後の100日間も、この仲間となら頑張れます。",
      },
      {
        attribute: "会社員・第一期受講生",
        heading:
          "「できることが爆発的に増えた2日間。社畜の私でも、可能性が広がりました」",
        before: "「AIを使えるようになったら何ができるか」と考えていた",
        after: "今では「やりたいことが多すぎて選べない」状態です。",
        comment:
          "会社員として働きながらの参加ですが、「勉強させられている」感覚は皆無でした。できることがどんどん増えていくのが純粋に楽しい。\n「AIを使えるようになったら何ができるか」と考えていたのが、今では「やりたいことが多すぎて選べない」状態です。発想の枠が外れ、使える場面が一気に広がりました。",
      },
    ],
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
              第一回（第一期）2日間集中研修の参加者コメントをもとに、受講前の迷いと受講後の変化（Before/After）をまとめています。
              受講して終わりではなく、100日の伴走のスタートとして何が起きるかを確認できます。
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
            第一期参加者の声を整理すると、「行動に移すための環境が整っていること」が繰り返し語られています。具体的には、実務に近いアウトプット、仲間との学び、2日間での変化がポイントです。
          </p>

          <h3 className="mt-10 text-lg font-bold text-slate-900 sm:text-xl">
            第一期参加者の声から見えた評価ポイント
          </h3>
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
            第一期参加者の声（カテゴリ別）
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            参加者コメントを、3つの切り口（カテゴリ）に整理し、受講前後の変化（Before/After）をまとめました。
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
            ※ コメントは個人が特定されない形で掲載しています。
          </p>

          <div className="mt-8 space-y-10">
            {voiceSections.map((section) => (
              <motion.section
                key={section.title}
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  {section.title}
                </h3>
                <motion.div
                  className="mt-4 grid gap-5 md:grid-cols-2"
                  variants={listReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {section.items.map((item) => (
                    <motion.article
                      key={item.heading}
                      variants={itemReveal}
                      className="border border-slate-200 bg-slate-50 p-5"
                    >
                      <p className="text-xs font-semibold tracking-wide text-slate-500">
                        {item.attribute}
                      </p>
                      <h4 className="mt-2 text-lg font-bold leading-snug text-slate-900">
                        {item.heading}
                      </h4>

                      <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                        <p>
                          <span className="font-bold text-slate-900">Before:</span>{" "}
                          {item.before}
                        </p>
                        <p>
                          <span className="font-bold text-slate-900">After:</span>{" "}
                          {item.after}
                        </p>
                      </div>
                      <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                        {item.comment}
                      </p>
                    </motion.article>
                  ))}
                </motion.div>
              </motion.section>
            ))}
          </div>
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
