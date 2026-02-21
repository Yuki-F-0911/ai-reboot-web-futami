"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, RichTable, Callout } from "@/components/blog/ArticleBody";
import { Check } from "lucide-react";

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
  { id: "faq", label: "よくある質問（FAQ）" },
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
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
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
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton title="文系・非エンジニアのAI活用ガイド" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            文系・非エンジニアのAI活用ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIは怖い」という感覚は、未知・役割変化・誤情報への懸念が重なって生まれます。
            AIに不安を感じるのは自然です。
            大事なのは、曖昧な不安を「何が怖いのか」に分解し、無理のない順序で小さく始めることです。
          </p>
        </motion.header>

        <figure className="my-8">
          <Image
            src="/images/blog/ai-for-non-engineers/slide-01.png"
            alt="文系・非エンジニアのためのAI活用ガイド - タイトル"
            width={800}
            height={450}
            className="rounded-lg"
          />
        </figure>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIとは？
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI最初の30日ガイド
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ"
            items={[
              "「AIは怖い」という感覚は、未知・役割変化・誤情報への懸念が重なって生まれます。構造を分けて考えると対処しやすくなります。",
              "文系・非エンジニアは、文章作成、情報整理、企画補助など日常業務に近い領域から始めるのが一般的です。",
              "プログラミング不要でも学習は始められます。目的を1つに絞り、テンプレート化と検証を繰り返すことが継続の鍵です。",
            ]}
          />
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="fear-structure"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="fear-structure">
            なぜ「AIは怖い」と感じるのか
          </ArticleH2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            不安を減らすには、原因を分解して「事実で確認できるもの」と「運用で対処できるもの」に分けるのが有効です。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/ai-for-non-engineers/slide-02.png"
              alt="なぜAIが怖いと感じるのか？"
              width={800}
              height={450}
              className="rounded-xl shadow-soft border border-gray-100"
            />
          </figure>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {fearStructureItems.map((item) => (
              <section key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <ArticleH3>{item.title}</ArticleH3>
                <p className="blog-p mt-3 text-sm leading-relaxed text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="fit-areas"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="fit-areas">
            文系・非エンジニアに向いているAI活用領域
          </ArticleH2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            最初は「文章」「情報整理」など、入出力が見えやすい業務から始めるのが安全です。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/ai-for-non-engineers/slide-04.png"
              alt="プログラミングではなく文脈を操る"
              width={800}
              height={450}
              className="rounded-xl shadow-soft border border-gray-100"
            />
          </figure>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {fitAreas.map((item) => (
              <section key={item.area} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.area}</ArticleH3>
                <p className="blog-p mt-3 text-sm font-medium text-orange-600 mb-2 flex items-center gap-1">
                  <Check size={14} /> 具体例: {item.examples}
                </p>
                <p className="blog-p text-sm leading-relaxed text-gray-600">{item.reason}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="learning-start"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="learning-start">
            学習の始め方（プログラミング不要）
          </ArticleH2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            「目的を1つに絞る → テンプレ化 → 検証」の順で進めると挫折しにくくなります。
          </p>
          <div className="mt-8 space-y-4">
            {learningSteps.map((step) => (
              <section key={step.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <ArticleH3>{step.title}</ArticleH3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700 sm:text-base">{step.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="misconceptions"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="misconceptions">
            よくある誤解と事実
          </ArticleH2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            不安は「誤解」が混ざると増幅します。誤解を事実に戻し、運用でコントロールできる形に整理しましょう。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">巷の誤解</th>
                <th className="py-4 px-6 font-bold text-gray-900">AI活用の事実</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {misconceptionRows.map((item) => (
                <tr key={item.misconception} className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap align-top">{item.misconception}</th>
                  <td className="py-4 px-6 text-gray-700">{item.fact}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <Callout type="warning" title="最後は人の判断">
            AI導入ですぐに全業務が変わるわけではありません。小さく始めて、事実確認と人の判断を組み合わせる運用を整えるのが現実的です。
          </Callout>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        <section className="mt-20 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-6 text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            関連リンク
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                生成AIとは？初心者向け解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                社会人のための学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                仕事で使えるテンプレート集
              </Link>
            </li>
            <li>
              <Link href="/academy" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-floating"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="text-2xl font-bold">
            まずは1つの業務から始めましょう
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            AI活用を最短で前に進めたい方へ。無料セミナーやアカデミーの全体像から、次の一歩を選べます。
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-xl bg-will-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-will-primary/90 active:scale-[0.98]"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              アカデミーTOPへ
            </Link>
          </div>
        </motion.section>
</article>
    </main>
  );
}
