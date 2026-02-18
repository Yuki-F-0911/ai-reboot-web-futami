"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiCareerChangeCasesPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const caseStudies = [
  {
    title: "事例1: 35歳 営業 → AI活用マーケター",
    attribute: "属性: 35歳、営業職",
    challenge: "課題: 提案活動は得意だが、マーケ施策の設計と改善の進め方に不安があった",
    learning:
      "学習過程: 生成AIで広告文案と記事構成の下書きを反復し、分析コメントのテンプレートを整備。",
    result:
      "成果: 営業視点を活かしながら、マーケ施策の企画と改善を担当できる役割へ移行。",
    beforeRole: "営業担当として受注活動が中心",
    afterRole: "AI活用マーケターとして企画から改善まで担当",
  },
  {
    title: "事例2: 42歳 管理職 → DX推進リーダー",
    attribute: "属性: 42歳、管理職",
    challenge: "課題: 部門ごとに業務改善の進め方が異なり、AI導入を横断で進めにくかった",
    learning:
      "学習過程: 部門横断で業務フローを可視化し、AI活用対象を優先順位化。小規模な検証を継続。",
    result:
      "成果: 現場主導で改善を回せるDX推進体制の構築に着手できた。",
    beforeRole: "部門運営と人員管理が中心",
    afterRole: "DX推進リーダーとして全社施策を主導",
  },
  {
    title: "事例3: 28歳 事務職 → AIツール開発者",
    attribute: "属性: 28歳、事務職",
    challenge: "課題: 定型業務が多く、改善アイデアを実装につなげにくかった",
    learning:
      "学習過程: ノーコード/ローコードとAI支援を組み合わせ、社内利用ツールを段階的に試作。",
    result:
      "成果: 業務改善をツール化する経験を積み、開発寄りの役割へキャリアを拡張。",
    beforeRole: "事務処理と問い合わせ対応が中心",
    afterRole: "AIツール開発と運用改善を担当",
  },
  {
    title: "事例4: 50歳 自営業 → AI活用コンサルタント",
    attribute: "属性: 50歳、自営業",
    challenge: "課題: 提案準備に時間がかかり、サービス提供の再現性が低かった",
    learning:
      "学習過程: ヒアリング項目、提案資料、実行計画をAI活用前提で標準化。",
    result:
      "成果: 専門領域にAI活用を組み合わせた提案ができるようになり、支援の幅を拡大。",
    beforeRole: "単発案件中心の個別対応",
    afterRole: "AI活用コンサルタントとして継続支援を提供",
  },
] as const;

const successFactors = [
  "目的先行で学習テーマを絞り、ツール学習だけで終わらせない",
  "成果物を小さく作って検証し、改善サイクルを回す",
  "現職の経験を捨てず、AI活用で価値を再定義する",
  "第三者のフィードバックを受け、独りよがりな活用を避ける",
] as const;

const keywordTags = ["AIキャリアチェンジ", "AI転職事例", "キャリア転換の進め方"] as const;

const tocItems = [
  { id: "career-change-cases", label: "キャリアチェンジ事例（構成例）" },
  { id: "before-after-table", label: "Before / After 比較表（構成例）" },
  { id: "success-factors", label: "共通する成功要因" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function AiCareerChangeCasesPage({ faqItems }: AiCareerChangeCasesPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI転職事例" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI時代のキャリアチェンジ事例（構成例）｜転換と成長のパターンを解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            キャリア転換とは、「何から始めればいいか」が曖昧だと、学習が空回りしやすくなります。
            本記事では、職種別の構成例4つと、Before/Afterの変化、共通する成功要因がわかります。
            筆者はまず「現職で作れる小さな成果物」を1つ決め、そこから学習テーマを逆算するのをおすすめしています。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm leading-7 text-amber-900">
            注意: ここで紹介する事例は構成例です。実在の受講生データではありません。
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
          <h2 id="career-change-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            キャリアチェンジ事例（構成例）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: キャリア転換は「ツール名」ではなく「目的→試作→検証→運用」の順序が成果を左右します。たとえばChatGPT/Claudeに加え、CursorやClaudeのProjectsなどを使い、
            学習とアウトプットを一体で積み上げるのが現実的です。
          </p>
          <div className="mt-8 space-y-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.section
                key={caseStudy.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold leading-8 text-gray-900">{caseStudy.title}</h3>
                <p className="mt-2 text-xs font-semibold tracking-wide text-gray-500">※この事例は構成例です</p>
                <p className="mt-4 text-sm leading-7 text-gray-700">{caseStudy.attribute}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{caseStudy.challenge}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{caseStudy.learning}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{caseStudy.result}</p>
              </motion.section>
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
          <h2 id="before-after-table" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Before / After 比較表（構成例）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: キャリア転換は「役割（仕事の任され方）」が変わると加速します。Before/Afterを役割の視点で一覧化しました。
          </p>
          <p className="mt-2 text-sm font-semibold text-gray-500">※この事例は構成例です</p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">事例</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Before</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">After</th>
                </tr>
              </thead>
              <tbody>
                {caseStudies.map((caseStudy) => (
                  <tr key={caseStudy.title} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{caseStudy.title}</th>
                    <td className="py-4 px-4">{caseStudy.beforeRole}</td>
                    <td className="py-4 pl-4">{caseStudy.afterRole}</td>
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
          <h2 id="success-factors" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            共通する成功要因
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 学習量より「実務課題に紐づくアウトプット」と「振り返り」が重要です。以下を満たすと、キャリア転換を現実的に進めやすくなります。
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
            {successFactors.map((factor) => (
              <li key={factor} className="pl-1 marker:text-gray-500">
                {factor}
              </li>
            ))}
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 「未経験でもできるか」「学習期間はどれくらいか」で迷いやすいポイントをQ&Aで整理します。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pt-12 pb-4">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/skills-for-ai-era-career" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代に必要なスキルを職種別に解説｜2026年版キャリア戦略 | AIリブート
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
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド｜経験を強みに学び直す方法 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/g-e-certification-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                G検定とE検定の違いを徹底比較｜難易度・費用・向いている人を解説 | AIリブート
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
                href="/academy/blog/ai-school-for-working-adults"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人向けAIスクールの選び方ガイド｜失敗しない比較ポイントを解説 | AIリブート
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
          <h2 id="next-career-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            キャリアチェンジを具体化したい方へ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 焦って学習範囲を広げるより、現実的に実行できる一歩を決めるのが近道です。無料セミナー/個別相談で移行ルートを整理できます。
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
