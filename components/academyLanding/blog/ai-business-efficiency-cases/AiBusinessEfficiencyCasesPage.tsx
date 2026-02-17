"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiBusinessEfficiencyCasesPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "AI 業務効率化 事例",
  "生成AI ビジネス 活用",
  "AI マーケティング 活用",
  "AI 営業 活用",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "cases-by-department", label: "業務別AI活用事例" },
  { id: "preparation-points", label: "導入前に整理すべきポイント" },
  { id: "failure-patterns", label: "よくある失敗パターンと対策" },
  { id: "faq", label: "FAQ" },
] as const;

const useCases = [
  {
    department: "営業",
    tasks: "商談準備、提案骨子作成、議事録整理、フォロー文面の下書き",
    trend:
      "一般的には、営業活動そのものを置き換えるより、提案準備と記録整理の時間短縮で活用されるケースが多く見られます。",
    caution: "顧客固有情報の扱いルールを先に明確化し、最終確認は人が行う運用が必要です。",
  },
  {
    department: "マーケティング",
    tasks: "記事構成案、広告文案、SNS投稿案、レポート要約",
    trend:
      "一般的には、企画の初稿作成や選択肢を増やす工程で活用され、担当者は編集と評価に集中する形が定着しやすい傾向があります。",
    caution: "ブランドトーンの統一ルールと、ファクト確認のチェック工程を必ず設けることが重要です。",
  },
  {
    department: "経理・総務",
    tasks: "社内問い合わせの一次回答、規程文書の要約、手順書の更新",
    trend:
      "一般的には、社内向け文書の検索・要約・案内業務で活用され、担当者の確認負荷を下げる目的で導入されるケースがあります。",
    caution:
      "規程改定時の更新漏れが起こりやすいため、参照元ドキュメントの更新責任者を明確にする必要があります。",
  },
  {
    department: "カスタマーサポート",
    tasks: "問い合わせ分類、返信案作成、FAQ案の更新",
    trend:
      "一般的には、一次対応のスピードと回答のばらつき是正を目的に活用されます。担当者は難易度の高い対応に集中しやすくなります。",
    caution: "自動応答の範囲を決め、クレームや契約関連は人へエスカレーションする基準を先に決めることが重要です。",
  },
] as const;

const preparationPoints = [
  {
    title: "目的設定",
    body: "「何を良くしたいか」を業務単位で明確にします。時間削減、品質安定、対応速度のどれを優先するかを先に決めると、判断がぶれにくくなります。",
  },
  {
    title: "対象業務の選定",
    body: "入力と出力の型がある業務から始めると検証しやすくなります。例外処理が多い業務は後段に回す方が現場定着しやすい傾向があります。",
  },
  {
    title: "効果測定",
    body: "作業時間、手戻り回数、レビュー工数など比較しやすい指標を決め、導入前後で同条件の比較を行います。指標は少数に絞るのが実務的です。",
  },
] as const;

const failurePatterns = [
  {
    pattern: "ツール導入が目的化する",
    measure: "業務課題から逆算し、利用対象を限定して検証する。導入判断は結果指標で行う。",
  },
  {
    pattern: "全社一斉展開で現場が混乱する",
    measure: "小さな部門で運用ルールを整えてから段階的に展開する。担当者教育とFAQ更新を同時に進める。",
  },
  {
    pattern: "出力をそのまま利用して品質事故が起こる",
    measure: "レビュー責任者と承認基準を明確化し、重要業務は必ず人が最終確認する。",
  },
  {
    pattern: "セキュリティ・情報管理が後回しになる",
    measure: "入力可能な情報範囲、ログ管理、外部共有可否を先に定義し、運用ルールとして周知する。",
  },
] as const;

export default function AiBusinessEfficiencyCasesPage({ faqItems }: AiBusinessEfficiencyCasesPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI業務効率化事例集" },
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
            AI業務効率化事例集｜営業・マーケ・管理部門の活用ポイント
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月17日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI活用は、派手な技術導入よりも日々の業務改善で成果が見えやすい傾向があります。本記事では、部門別の一般的な活用パターンを整理し、導入前に押さえるべき設計と失敗回避策をまとめます。
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
              一般的には、営業・マーケティング・管理部門の定型業務でAI活用を始めると、改善前後を比較しやすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              導入前に「目的設定」「対象業務の選定」「効果測定」を決めると、ツール導入が目的化する失敗を防ぎやすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              定着の鍵は、利用ルールとレビュー手順の明文化です。自動化範囲と人の最終判断範囲を分けることが重要です。
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
          <h2 id="cases-by-department" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            業務別AI活用事例
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここでは、実在企業の固有事例ではなく、現場でよく見られる一般的な活用傾向を部門別に整理します。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <section key={item.department} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.department}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">主な対象業務: {item.tasks}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">一般的な傾向: {item.trend}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">運用上の注意: {item.caution}</p>
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
          <h2 id="preparation-points" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入前に整理すべきポイント
          </h2>
          <div className="mt-6 space-y-4">
            {preparationPoints.map((point) => (
              <section key={point.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{point.body}</p>
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
          <h2 id="failure-patterns" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある失敗パターンと対策
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">失敗パターン</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">対策</th>
                </tr>
              </thead>
              <tbody>
                {failurePatterns.map((item) => (
                  <tr key={item.pattern} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{item.pattern}</th>
                    <td className="py-4 pl-4">{item.measure}</td>
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
              <Link
                href="/academy/blog/corporate-ai-adoption-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                中小企業の生成AI導入ガイド｜失敗しない進め方と費用感 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-training" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                法人向けAI研修サービス｜社内定着・研修設計・導入相談 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/corporate-ai-training-internal"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社内AI研修の始め方と定着の進め方｜DX人材を育てる実務ガイド | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化 | AIリブート
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
                href="/academy/blog/github-copilot-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                GitHub Copilotの使い方｜導入・設定・効率化のコツを初心者向けに解説 | AIリブート
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
            業務改善の進め方を具体化したい方は、無料セミナーで全体像を確認し、個別相談で自社業務に合わせた導入順序を整理できます。
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
