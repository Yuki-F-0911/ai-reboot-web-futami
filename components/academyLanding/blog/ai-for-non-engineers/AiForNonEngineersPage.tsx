"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiForNonEngineersPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["文系 AI 学び方", "非エンジニア AI 活用", "AI 怖い", "AI 不安 解消"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "fear-structure", label: "なぜ「AIは怖い」と感じるのか" },
  { id: "fit-areas", label: "文系・非エンジニアに向いている活用領域" },
  { id: "learning-start", label: "学習の始め方（プログラミング不要）" },
  { id: "misconceptions", label: "よくある誤解と事実" },
  { id: "faq", label: "FAQ" },
] as const;

const fearStructureItems = [
  {
    title: "正体が分からない不安",
    body: "専門用語が多く、何ができて何ができないのかを判断しにくい状態は不安を強めます。まずは用途単位で理解することが有効です。",
  },
  {
    title: "仕事が奪われるかもしれない不安",
    body: "一般的には、業務の一部が自動化される一方で、確認・判断・改善の役割は引き続き重要です。役割変化を理解すると過度な不安を抑えやすくなります。",
  },
  {
    title: "間違った情報を使ってしまう不安",
    body: "AI出力には誤りが含まれる可能性があります。出力を下書きとして扱い、根拠確認を前提に運用することでリスクを管理できます。",
  },
] as const;

const fitAreas = [
  {
    area: "文章作成・編集",
    examples: "メール下書き、議事録要約、資料の構成案作成",
    reason: "入出力が明確で、改善サイクルを回しやすい領域です。",
  },
  {
    area: "情報整理・要約",
    examples: "会議メモ整理、調査メモの要点抽出、比較表のたたき台作成",
    reason: "作業時間を短縮しながら、担当者は意思決定に集中しやすくなります。",
  },
  {
    area: "企画・アイデア発想",
    examples: "キャンペーン案、コンテンツ案、顧客向け説明文の複数案作成",
    reason: "初期案を短時間で増やせるため、検討の質を高めやすい傾向があります。",
  },
  {
    area: "社内コミュニケーション支援",
    examples: "FAQ下書き、手順書の言い換え、オンボーディング資料の整理",
    reason: "伝達のばらつきを減らし、業務の再現性を高める用途に向いています。",
  },
] as const;

const learningSteps = [
  {
    title: "1. 目的を1つに絞る",
    body: "最初は「議事録作成を短縮する」など具体的な業務を1つ選びます。目的が明確だと試行錯誤の評価がしやすくなります。",
  },
  {
    title: "2. テンプレートを作る",
    body: "よく使う指示文をテンプレート化し、入力項目を固定します。品質のばらつきを抑え、再現性を上げるために有効です。",
  },
  {
    title: "3. 出力を検証する",
    body: "事実確認、表現チェック、業務ルール適合の観点で見直します。特に社外向け文章は人の最終確認を必須にします。",
  },
  {
    title: "4. 小さく改善を繰り返す",
    body: "毎回の改善点を記録し、テンプレートを更新します。短いサイクルで見直すと、苦手意識を減らしながら習得できます。",
  },
] as const;

const misconceptionRows = [
  {
    misconception: "AIを使うにはプログラミング必須",
    fact: "基礎活用の多くは対話型ツールで始められます。まずは業務適用を経験してから必要に応じて技術領域を広げる進め方が一般的です。",
  },
  {
    misconception: "AIの回答は常に正しい",
    fact: "誤りや文脈ずれが含まれる可能性があります。根拠確認とレビューを組み合わせる運用が前提です。",
  },
  {
    misconception: "AI導入ですぐに全業務が変わる",
    fact: "一般的には段階導入で定着を図ります。小さく始めて運用を整えながら拡張する方が現実的です。",
  },
  {
    misconception: "文系人材はAI時代に不利",
    fact: "課題設定、文脈理解、コミュニケーション設計はAI活用でも重要です。既存の強みを活かせる領域は多くあります。",
  },
] as const;

export default function AiForNonEngineersPage({ faqItems }: AiForNonEngineersPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "文系・非エンジニアのAI活用ガイド" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            文系・非エンジニアのAI活用ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIに不安を感じるのは自然な反応です。重要なのは、曖昧な不安を具体的な課題に分解し、無理のない順序で活用を始めることです。本記事では、非エンジニア向けに事実ベースで整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              「AIは怖い」という感覚は、未知・役割変化・誤情報への懸念が重なって生まれます。構造を分けて考えると対処しやすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              文系・非エンジニアは、文章作成、情報整理、企画補助など日常業務に近い領域から始めるのが一般的です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              プログラミング不要でも学習は始められます。目的を1つに絞り、テンプレート化と検証を繰り返すことが継続の鍵です。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="fear-structure" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            なぜ「AIは怖い」と感じるのか
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            不安をなくすには、原因を分解して順番に対処することが有効です。感情を否定せず、事実と運用で扱える状態にすることが重要です。
          </p>
          <div className="mt-6 space-y-4">
            {fearStructureItems.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
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
          <h2 id="fit-areas" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            文系・非エンジニアに向いているAI活用領域
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 最初は「文章」「情報整理」など、入出力が見えやすい業務から始めるのが安全です。成果が見える領域を選ぶほど、改善サイクルが回りやすくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {fitAreas.map((item) => (
              <section key={item.area} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">具体例: {item.examples}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">向いている理由: {item.reason}</p>
              </section>
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
          <h2 id="learning-start" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            学習の始め方（プログラミング不要のアプローチ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 「目的を1つに絞る → テンプレ化 → 検証」の順で進めると挫折しにくくなります。テンプレや素材はClaude Projectsなどに集約すると、再利用しやすくなります。
          </p>
          <div className="mt-6 space-y-4">
            {learningSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
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
          <h2 id="misconceptions" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある誤解と事実
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            不安の多くは、誤解が混ざることで増幅します。ここでは、よくある誤解を「事実」と「運用の考え方」に分けて整理します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">誤解</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">事実</th>
                </tr>
              </thead>
              <tbody>
                {misconceptionRows.map((item) => (
                  <tr key={item.misconception} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{item.misconception}</th>
                    <td className="py-4 pl-4">{item.fact}</td>
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
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けにわかりやすく解説｜ChatGPT・Claude・Geminiの違いと始め方【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-coding-for-beginners"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/python-ai-intro"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Python × AI入門｜環境構築からはじめての機械学習までの学習ロードマップ | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ｜0→100日で実務活用レベルへ | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
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
          <h2 id="free-seminar-consultation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料セミナー / 個別相談
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AI活用を自分の仕事にどうつなげるか迷う場合は、無料セミナーで全体像をつかみ、個別相談で現在の業務に合う学習順序を整理する方法が有効です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーに参加する
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              個別相談を申し込む
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
