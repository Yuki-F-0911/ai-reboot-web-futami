"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

type FAQItem = {
  question: string;
  answer: string;
};

type AiForLiberalArtsPageProps = {
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
  "AIは理系の人のもの、という気がして一歩が出ない",
  "採用や研修の効率化を求められているけれど、やり方が分からない",
  "プロンプト（指示文）と言われると、急に難しく感じる",
  "便利そうなのは分かる。でも、何から触ればいいかが曖昧",
  "キャリアの方向性が見えないまま、30歳が近づいてくる",
] as const;

const misconceptionCards = [
  {
    title: "AI = プログラミング、ではありません",
    body: "生成AIは「言葉で指示する」道具です。コードを書く人だけのものではなく、文章・企画・調整の仕事こそ相性があります。",
  },
  {
    title: "まずは“全部を変える”必要はありません",
    body: "最初に狙うのは、業務の一部（たとえば文章のたたき台や整理）です。小さく試して、使える形に整えるところから始めます。",
  },
  {
    title: "大事なのは、出力より“判断”と“意図”です",
    body: "AIの回答をそのまま採用するのではなく、目的や相手に合わせて整える。ここに、非エンジニアの強みが出ます。",
  },
] as const;

const liberalArtsStrengths = [
  {
    title: "要約力",
    lead: "情報が多いほど、「何が大事か」を短く言える人が強い。",
    points: ["会議メモ・議事録の要点整理", "候補者情報の比較ポイント抽出", "研修資料のTL;DR作り"],
  },
  {
    title: "質問力",
    lead: "いい質問は、いい出力を引き出します。プロンプトは“質問設計”です。",
    points: ["前提条件をそろえる", "目的と制約を明確にする", "追加で確認すべき観点を引き出す"],
  },
  {
    title: "構成力",
    lead: "伝わる順番を作れる人は、AIの出力を“使える文章”に変えられる。",
    points: ["採用文面・社内告知の構成", "研修プログラムの骨子設計", "評価基準の言語化"],
  },
] as const;

const pillarCards = [
  {
    title: "生成AI活用力",
    lead: "業務で使える形に落とし込む。",
    body: "採用文面のたたき台、社内向け文章の整形、情報整理など、非エンジニアの仕事に直結する使い方から身につけます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    lead: "強みを言語化し、次の選択肢を増やす。",
    body: "「人事としてどう価値を出したいか」を整理し、現職で伸ばす/役割を広げる/次へ動くを現実的に選べる状態にします。",
  },
  {
    title: "仲間と共に学ぶ環境",
    lead: "一人で止まらない仕組みをつくる。",
    body: "同じ立場の人と対話しながら進めることで、迷いが出ても立ち止まりにくくなります。学びを習慣に変えます。",
  },
] as const;

const hrUseCases = [
  {
    title: "採用",
    points: ["募集要項の叩き台作成", "候補者向けの案内文・返信文の下書き", "面接質問の観点出し（職種・要件に合わせて）"],
  },
  {
    title: "研修・育成",
    points: ["研修の目的・ゴールの整理", "教材の構成案づくり", "アンケートの自由記述をテーマ別に整理"],
  },
  {
    title: "制度・運用",
    points: ["評価コメントの言語化の補助", "社内向け説明資料の下書き", "規程文の読みやすさチェック（意味を変えない範囲で）"],
  },
] as const;

const learningDesign = [
  {
    title: "100日伴走で、途中で止まりにくい",
    body: "最初だけ頑張って終わるのではなく、仕事の波がある前提で続ける設計を重視します。",
  },
  {
    title: "“その日の仕事”で試す前提",
    body: "学んだことを業務に戻して試し、振り返って改善する。机の上で終わらせない進め方です。",
  },
  {
    title: "キャリアの迷いは、先に言語化する",
    body: "何を大事にしたいかが曖昧なままだと学びは散ります。強み・価値観・優先順位を整理し、やることを絞ります。",
  },
] as const;

const internalLinks = [
  { href: "/academy", label: "AIリブートアカデミーTOP" },
  { href: "/academy/subsidy-guide", label: "補助金ガイド（制度概要と確認手順）" },
  { href: "/academy/reviews", label: "受講生の評判・口コミ" },
  { href: "/academy/seminars", label: "セミナー一覧" },
] as const;

export default function AiForLiberalArtsPage({ faqItems }: AiForLiberalArtsPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(130deg,#ffffff_0%,#f3f7ff_56%,#e8efff_100%)] pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(59,130,246,0.12),transparent_45%)]" />
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
              { label: "文系・非エンジニアのためのAI活用入門" },
            ]}
          />

          <p className={sectionLabelClass}>AI FOR LIBERAL ARTS</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            プログラミング未経験でも、
            <br className="hidden sm:block" />
            AIを「仕事で使える」ようになりたい
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            「AIは理系の人のもの」という思い込みがある状態からでも大丈夫です。
            生成AIは、言葉で指示して、整理・下書き・観点出しを助けるツール。
            文系の強みを武器にして、現場で使える一歩を積み上げていきます。
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
              セミナーを見てみる
            </Link>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-600">
            ※ できないことを責めるページではありません。「できる形」に整えるための入口です。
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
          <h2 className={sectionHeadingClass}>「私のことかも」と思ったら</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            不安や苦手意識があるのは自然です。まずは状況を言語化して、最初の一歩を小さくします。
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
          <p className={sectionLabelClass}>MISCONCEPTION</p>
          <h2 className={sectionHeadingClass}>「AI = プログラミング」ではない</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            生成AIは、専門用語の暗記を競う道具ではありません。言葉で意図を伝え、作業の“下準備”を早くするための相棒です。
          </p>

          <motion.div
            className="mt-8 grid gap-6 lg:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {misconceptionCards.map((card) => (
              <motion.article key={card.title} variants={itemReveal} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{card.body}</p>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-bold text-slate-900 sm:text-base">最初のコツは「目的 + 背景 + 条件」</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
              プロンプトは、魔法の言い回しではなく、仕事の整理です。目的と背景、守る条件（トーン、文字数、対象読者）を言葉にすると出力が安定します。
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold tracking-[0.14em] text-slate-500">EXAMPLE</p>
              <pre className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
{`採用向けに、募集要項のたたき台を作ってください。
職種：人事（採用担当）
対象：第二新卒
条件：堅すぎない、誇張しない、800〜1000文字
入れてほしい要素：仕事内容 / 期待する人物像 / 選考フロー`}
              </pre>
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
          <p className={sectionLabelClass}>WHY YOU</p>
          <h2 className={sectionHeadingClass}>文系だからこそ、AIが活きる</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            AIに必要なのは「何を、誰に、どんな順番で伝えるか」を決める力です。
            要約・質問・構成は、プロンプト設計に直結します。
          </p>

          <motion.div
            className="mt-8 grid gap-6 lg:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {liberalArtsStrengths.map((card) => (
              <motion.article key={card.title} variants={itemReveal} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{card.title}</h3>
                <p className="mt-2 text-sm font-bold text-slate-700">{card.lead}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {card.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
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
          <p className={sectionLabelClass}>3 PILLARS</p>
          <h2 className={sectionHeadingClass}>AIスキルだけで終わらせない、3本柱</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            AIリブートアカデミーは、「生成AI活用」だけの学びではありません。
            自分の軸を整え、仲間と走れる環境まで含めて、実務とキャリアの両方を支えます。
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
          <p className={sectionLabelClass}>USE CASES</p>
          <h2 className={sectionHeadingClass}>人事の現場なら、こう使える</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            生成AIは、文章作成や情報整理、観点出しが得意です。まずは「叩き台」と「整理」を任せ、あなたが判断と最終調整を担います。
          </p>

          <motion.div
            className="mt-8 grid gap-6 lg:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {hrUseCases.map((card) => (
              <motion.article key={card.title} variants={itemReveal} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{card.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {card.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 rounded-lg border border-orange-200 bg-orange-50 p-6">
            <p className="text-sm font-bold text-slate-900 sm:text-base">大事な注意点</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
              候補者の個人情報や社内の機密情報は、そのまま入力しないのが基本です。まずは匿名化・抽象化し、社内ルールに沿って安全に使う前提で進めます。
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
          <h2 className={sectionHeadingClass}>100日伴走 + 仲間で、続けやすくする</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            学び直しの一番の敵は、能力ではなく継続です。忙しい前提で、止まりにくい進め方を組み立てます。
          </p>

          <motion.div
            className="mt-8 grid gap-6 lg:grid-cols-3"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {learningDesign.map((card) => (
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
                無料セミナーで全体像を掴むか、LINEで気軽に相談できます。状況を整理して、「何から始めるか」を一緒に決めましょう。
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
          <p className="mt-3 max-w-4xl text-sm sm:text-base text-slate-700">学び方や評判、補助金の確認は、関連ページも合わせてどうぞ。</p>
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">文系だからこそ、まずは一度整理しませんか</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            できることから積み上げる。そのために必要なのは、気合いより「順番」です。
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

