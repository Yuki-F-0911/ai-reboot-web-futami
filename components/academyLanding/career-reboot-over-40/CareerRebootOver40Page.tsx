"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

type FAQItem = {
  question: string;
  answer: string;
};

type CareerRebootOver40PageProps = {
  faqItems: readonly FAQItem[];
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
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
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const sectionLabelClass = "text-xs font-bold tracking-[0.14em] text-slate-500";
const sectionHeadingClass = "mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl";

const empathyPoints = [
  "部下がAIを使い始めて、正直ちょっと焦る",
  "ニュースやSNSを見るたびに、不安が増えるのに手は動かない",
  "仕事も家庭もある。勉強時間を増やす余裕がない",
  "この先、今の経験はどう評価されるのかが見えない",
  "本当は変わりたい。でも、何から触ればいいか分からない",
] as const;

const reframingSteps = [
  {
    title: "「奪われる」より先に「任せられる」を増やす",
    body: "AIに任せられる作業が増えるほど、人にしかできない判断や対話に時間を戻せます。最初に狙うのは、仕事の全部ではなく、よくある負担の軽量化です。",
  },
  {
    title: "技術の暗記ではなく、現場の文脈で使う",
    body: "40代の強みは、現場の事情や顧客の温度感を知っていること。AIの出力を「そのまま使う」より、「使える形に整える」力が価値になります。",
  },
  {
    title: "一人で抱え込まず、キャリアを言語化する",
    body: "学び直しはスキルだけで完結しません。自分の強み・価値観・優先順位を言葉にして、次の選択肢を増やすことが、遠回りに見えて最短になります。",
  },
] as const;

const pillarCards = [
  {
    title: "生成AI活用力",
    lead: "毎日の業務で「今日から使える」形に落とし込む。",
    body: "提案書のたたき台、会議メモの要点整理、顧客理解の補助など、身近な仕事から使い方を身につけます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    lead: "いまの経験を棚卸しし、次の役割へつなげる。",
    body: "強み・価値観・働き方の条件を整理し、「現職で伸ばす / 役割を広げる / 次へ動く」を現実的に選べる状態にします。",
  },
  {
    title: "仲間と共に学ぶ環境",
    lead: "迷ったときに立ち止まらない仕組みをつくる。",
    body: "一人だと止まりやすい学びを、対話とフィードバックで前に進めます。「同じ立場の人がいる」こと自体が、継続の支えになります。",
  },
] as const;

const strengths = [
  {
    title: "営業経験は、AIの出力を「使える提案」に変える力になる",
    points: ["顧客課題の整理と仮説立て", "反論対応・落としどころの設計", "社内調整を前提にした言葉選び"],
  },
  {
    title: "管理職経験は、チームの「型」に落とし込む力になる",
    points: ["属人化している仕事の分解", "判断基準の言語化", "再現できるテンプレ・チェックの整備"],
  },
  {
    title: "子育て世代の時間感覚は、学びの設計力になる",
    points: ["短い時間で試す習慣", "完璧を狙わず前に進める判断", "続けられるペースに調整する力"],
  },
] as const;

const busyFriendlyDesign = [
  {
    title: "100日伴走で、途中で止まりにくい",
    body: "「最初だけ頑張る」ではなく、仕事と家庭の波がある前提で、続ける設計を重視します。",
  },
  {
    title: "業務の中で試す前提で学ぶ",
    body: "学んだ内容をその日の仕事に戻して試し、改善していく。机の上で終わらせない進め方です。",
  },
  {
    title: "迷いが出たら、言語化から整える",
    body: "何を目指すのかが曖昧なままだと、学びは散ります。強みと優先順位の整理から、やることを絞ります。",
  },
] as const;

const internalLinks = [
  { href: "/academy", label: "AIリブートアカデミーTOP" },
  { href: "/academy/subsidy-guide", label: "補助金ガイド（制度概要と確認手順）" },
  { href: "/academy/reviews", label: "受講生の評判・口コミ" },
  { href: "/academy/seminars", label: "セミナー一覧" },
] as const;

export default function CareerRebootOver40Page({ faqItems }: CareerRebootOver40PageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(130deg,#ffffff_0%,#fff6f1_56%,#ffe7dd_100%)] pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_8%,rgba(249,115,22,0.14),transparent_40%)]" />
        <motion.div
          className="relative container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <AcademyBreadcrumb
            className="mb-6"
            items={[
              { label: "ホーム", href: "/" },
              { label: "アカデミー", href: "/academy" },
              { label: "40代からのAIキャリアリブート" },
            ]}
          />
          <p className={sectionLabelClass}>CAREER REBOOT OVER 40</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            40代からのAIキャリアリブート
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            「このままでいいのかな」と思いながら、仕事と家庭に追われる毎日。
            AIの話題は増えるのに、何から手をつければいいか分からない。
            そんな状態からでも、現場で使える一歩を積み上げて、次の選択肢を増やせます。
          </p>

          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#06C755] px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05b54d]"
            >
              LINE登録して相談する
            </a>
            <Link
              href="/academy/seminars"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              セミナー一覧を見る
            </Link>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-600">
            ※ 不安が大きいときほど、最初に必要なのは情報の詰め込みではなく「何を変えるか」の整理です。
          </p>
        </motion.div>
      </section>

      <motion.section
        className="border-t border-slate-200 py-14 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        transition={{ duration: 0.52, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <p className={sectionLabelClass}>EMPATHY</p>
          <h2 className={sectionHeadingClass}>「私のことだ」と思う瞬間、ありませんか</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            不安は、気合いで消えるものではありません。まずは状況を言語化して、前に進むための整理から始めます。
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {empathyPoints.map((point) => (
              <li key={point} className="rounded-lg border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-700">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="border-t border-slate-200 py-14 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        transition={{ duration: 0.52, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <p className={sectionLabelClass}>REFRAME</p>
          <h2 className={sectionHeadingClass}>視点を少し変えると、動きやすくなる</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            「AIに仕事を奪われる」かどうかを議論するより先に、あなたの仕事をどうアップデートするか。守りではなく、次の一歩を作る視点です。
          </p>

          <motion.ol
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {reframingSteps.map((step, index) => (
              <motion.li key={step.title} variants={itemReveal} className="border-b border-slate-200 py-6">
                <p className="text-xs font-bold tracking-[0.14em] text-slate-500">STEP {index + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{step.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </motion.section>

      <motion.section
        className="border-t border-slate-200 py-14 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        transition={{ duration: 0.52, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <p className={sectionLabelClass}>3 PILLARS</p>
          <h2 className={sectionHeadingClass}>AIスキルだけでは終わらせない、3本柱</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            AIリブートアカデミーは、「生成AI活用」だけの学びではありません。自分の軸を整え、仲間と走れる環境まで含めて、キャリアの再設計を支えます。
          </p>

          <motion.div
            className="mt-8 grid gap-6 lg:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {pillarCards.map((card) => (
              <motion.article key={card.title} variants={itemReveal} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{card.title}</h3>
                <p className="mt-2 text-sm font-bold text-slate-700">{card.lead}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{card.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="border-t border-slate-200 py-14 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        transition={{ duration: 0.52, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <p className={sectionLabelClass}>YOUR ADVANTAGE</p>
          <h2 className={sectionHeadingClass}>40代の経験は、AIで「価値」に変えやすい</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            いま必要なのは、最先端の専門用語を追いかけることより、あなたの経験とAIをつなげることです。
            経験がある人ほど、AIを現場に適用するスピードが上がります。
          </p>

          <motion.div
            className="mt-8 grid gap-6 lg:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {strengths.map((card) => (
              <motion.article key={card.title} variants={itemReveal} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-base font-bold leading-relaxed text-slate-900 sm:text-lg">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {card.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
            <p className="text-sm font-bold text-slate-900 sm:text-base">まずは「一つだけ」選ぶなら</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
              いま一番重い仕事を、丸ごと変えなくていいです。
              まずは、毎週の中で繰り返している作業を一つ選び、AIで軽くするところから始めましょう。
              そこから「時間が戻る」感覚が出ると、次の一歩が踏み出しやすくなります。
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="border-t border-slate-200 py-14 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        transition={{ duration: 0.52, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <p className={sectionLabelClass}>HOW TO LEARN</p>
          <h2 className={sectionHeadingClass}>忙しい40代でも学べる「続ける設計」</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            学び直しの一番の敵は、能力ではなく継続です。忙しい前提で、途中で止まりにくい進め方を組み立てます。
          </p>

          <motion.div
            className="mt-8 grid gap-6 lg:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {busyFriendlyDesign.map((card) => (
              <motion.article key={card.title} variants={itemReveal} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{card.body}</p>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-slate-900 sm:text-base">迷ったら、先に全体像から</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                受講前に「自分はどの方向で価値を出したいか」を確認すると、学びが散りません。無料セミナーで、進め方と選択肢を整理できます。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/academy/seminars"
                className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-700"
              >
                セミナー一覧へ
              </Link>
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-[#06C755] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05b54d]"
              >
                LINEで相談する
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="border-t border-slate-200 py-14 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        transition={{ duration: 0.52, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <p className={sectionLabelClass}>SUBSIDY</p>
          <h2 className={sectionHeadingClass}>補助金で、学び直しのハードルを下げられる可能性</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            受講の条件やタイミングによって、費用負担を軽くできる制度があります。制度は募集回ごとに条件が変わるため、まずは公式情報と確認手順を押さえるのが安全です。
          </p>
          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href="/academy/subsidy-guide"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600"
            >
              補助金ガイドを見る
            </Link>
            <p className="text-sm text-slate-600">
              詳細は{" "}
              <Link href="/academy/subsidy-guide" className="font-bold text-slate-700 underline underline-offset-4 hover:text-slate-900">
                /academy/subsidy-guide
              </Link>{" "}
              で確認できます。
            </p>
          </div>
        </div>
      </motion.section>

      <section className="border-t border-slate-200 py-12">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900">関連ページ</h2>
          <p className="mt-3 max-w-4xl text-sm sm:text-base text-slate-700">
            学び方や評判、補助金の確認は、関連ページも合わせてどうぞ。
          </p>
          <ul className="mt-4 space-y-2 text-sm sm:text-base">
            {internalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <motion.section
        className="border-t border-slate-200 py-14 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        transition={{ duration: 0.52, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
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
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-bold text-slate-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                    <span>
                      Q{index + 1}. {item.question}
                    </span>
                    <span className="text-xl text-slate-500">{openFaqIndex === index ? "-" : "+"}</span>
                  </summary>
                  <p className="mt-3 pr-6 text-sm leading-relaxed text-slate-700 sm:text-base">A{index + 1}. {item.answer}</p>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="border-y border-slate-100 bg-white py-12 md:py-16">
        <motion.div
          className="container mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">一人で抱え込まず、まずは一度整理しませんか</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            いまの不安を否定せずに、できることから積み上げる。
            セミナーで全体像を掴むか、LINEで気軽に相談できます。
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              セミナーに参加する
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#06C755] px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05b54d]"
            >
              LINE登録して相談する
            </a>
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
}

