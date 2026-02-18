"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type GECertificationComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["G検定 E検定 違い", "AI資格 比較", "JDLA 検定"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "definition", label: "G検定/E検定とは？" },
  { id: "comparison", label: "違いの比較表" },
  { id: "difficulty", label: "難易度と学習の考え方" },
  { id: "cost", label: "費用と受験条件の注意点" },
  { id: "recommendations", label: "向いている人（結論）" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "cta", label: "AIリブートで学ぶ" },
] as const;

const comparisonRows = [
  {
    axis: "狙い",
    g: "AIの全体像・活用・倫理などを広く学ぶ（ビジネス寄り）",
    e: "深層学習の理論・設計理解を体系化する（エンジニア寄り）",
  },
  {
    axis: "対象者（目安）",
    g: "非エンジニア〜エンジニアまで幅広い",
    e: "AIエンジニア志向、理論を深めたい人",
  },
  {
    axis: "学習の中心",
    g: "用語整理・概念理解・ケース理解",
    e: "数学/機械学習の前提 + 深層学習の理解",
  },
  {
    axis: "おすすめの順番",
    g: "迷う場合はG検定から（全体像→専門）",
    e: "目的が明確ならE検定からでも可（前提がある場合）",
  },
] as const;

const recommendationCards = [
  {
    title: "G検定が向いている人",
    items: ["AIの基礎リテラシーを体系化したい", "部署横断でAI活用を推進したい", "まず全体像から学びたい"],
  },
  {
    title: "E検定が向いている人",
    items: ["AIエンジニアとして理論を固めたい", "深層学習の設計や改善を説明できるようにしたい", "認定プログラム修了などの前提を満たしている"],
  },
] as const;

export default function GECertificationComparisonPage({ faqItems }: GECertificationComparisonPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "G検定とE検定の違い" },
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
              <CopyAsMarkdownButton
                title="G検定とE検定の違いを徹底比較｜難易度・費用・向いている人を解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            G検定とE検定の違いを徹底比較｜難易度・費用・向いている人を解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            G検定は「AIの全体像を広く」、E検定は「深層学習を深く」学ぶ位置づけです。
            この記事では、対象者・範囲・難易度・費用・形式を比較し、どちらを先に取るべきかまで整理します。
            G検定とは、「ビジネス活用の共通知識」を広く固めたい人向け、E検定は「深層学習の理解」を証明したいエンジニア志向の人向けです。
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
            <li className="pl-1 marker:text-gray-500">G検定は「AIの全体像を広く」、E検定は「深層学習を深く」学ぶ位置づけです。</li>
            <li className="pl-1 marker:text-gray-500">
              受験条件・費用・試験形式は更新されるため、最終確認は必ず公式情報で行いましょう。
            </li>
            <li className="pl-1 marker:text-gray-500">迷う場合はG検定→E検定の順が、理解の積み上げとして自然です。</li>
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
          <h2 id="definition" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            G検定/E検定とは？（ざっくり復習）
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            G検定はAIの定義、活用、倫理などを含む「横断的な基礎」を整理するのに向きます。E検定は深層学習の理論・設計に踏み込むため、前提知識の有無で難易度が変わります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            目的別のAI資格全体を俯瞰したい場合は{" "}
            <Link
              href="/academy/blog/ai-certification-guide"
              className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI資格おすすめ一覧
            </Link>{" "}
            も参考になります。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            違いの比較表（対象者・学習範囲・おすすめ順）
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">G検定</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">E検定</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.g}</td>
                    <td className="py-4 pl-4">{row.e}</td>
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="difficulty" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            難易度と学習の考え方（先に決めるべき3点）
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            学習を始める前に「目的（転職/昇進/業務活用）」「学習時間（週あたり）」「前提知識（数学/機械学習）」を整理すると、教材選びと計画がブレません。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 p-5">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">
                G検定: 用語と概念の整理が中心になりやすく、アウトプット（説明/要約）で定着しやすいです。
              </li>
              <li className="pl-1 marker:text-gray-500">
                E検定: 前提知識があるほど学習が加速します。前提が薄い場合は、基礎→深層学習の順で段階化すると挫折しにくいです。
              </li>
            </ul>
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
          <h2 id="cost" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            費用と受験条件の注意点（最新は公式確認）
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            受験料や実施形式、E検定の受験資格（認定プログラム修了など）は更新される可能性があります。申込前に必ず公式情報を確認し、学習計画は試験日から逆算して立てましょう。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="recommendations" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            向いている人（結論：どちらを先に取るべき？）
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {recommendationCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {card.items.map((item) => (
                    <li key={item} className="pl-1 marker:text-gray-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
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
            よくある質問（FAQ）
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
              <Link
                href="/academy/blog/ai-certification-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI資格おすすめ一覧｜難易度・費用・活かせる仕事を徹底比較【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/skills-for-ai-era-career"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI時代に必要なスキルを職種別に解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-engineer-career-change"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                未経験からAIエンジニアへの転職ロードマップ｜学習手順と準備を解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-course-ranking"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI講座ランキング2026｜選び方の基準と目的別おすすめを解説 | AIリブート
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
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">G検定は「AIの全体像を広く」、E検定は「深層学習を深く」学ぶ位置づけです。</li>
            <li className="pl-1 marker:text-gray-500">受験条件・費用・試験形式は更新されるため、最終確認は必ず公式情報で行いましょう。</li>
            <li className="pl-1 marker:text-gray-500">迷う場合はG検定→E検定の順が、理解の積み上げとして自然です。</li>
          </ul>
        </motion.section>
<motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIリブートアカデミーで、資格学習を「キャリアの武器」へつなげる
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            資格はゴールではなく、「生成AI活用力」を実務で再現できる形に落とし込み、AIを鏡に自己理解を深めながらキャリアを再設計するための手段です。
            AIリブートアカデミーでは、学習ロードマップを実務アウトプットとキャリアデザインにつなぎ、仲間との対話・協働で変化を加速させます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              アカデミーを見る
            </Link>
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              学習ロードマップを見る
            </Link>
          </div>
        </motion.section>

        
      </article>
    </main>
  );
}
