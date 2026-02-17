"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiCourseRankingPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const rankingCriteria = [
  {
    axis: "カリキュラム充実度",
    detail: "基礎から実践までの一貫性、課題設計、復習導線の明確さを評価。",
  },
  {
    axis: "実務接続性",
    detail: "受講後に現場で再現できるか、業務適用までを想定した設計かを評価。",
  },
  {
    axis: "サポート体制",
    detail: "質問対応スピード、メンタリング、学習継続支援の仕組みを評価。",
  },
  {
    axis: "コスパ",
    detail: "価格だけでなく、学習時間・成果物・支援内容とのバランスで評価。",
  },
  {
    axis: "受講者評価",
    detail: "満足度の傾向だけでなく、改善要望への対応姿勢も含めて評価。",
  },
] as const;

const rankingRows = [
  {
    rank: "1位",
    courseType: "実務直結型（プロジェクト伴走）",
    bestFor: "業務効率化・社内導入を最短で進めたい人",
    reason: "学習内容をそのまま業務課題に適用しやすく、受講中に成果物を残しやすい",
  },
  {
    rank: "2位",
    courseType: "転職成果物特化型",
    bestFor: "キャリアチェンジでポートフォリオを整えたい人",
    reason: "成果物設計とキャリア支援の組み合わせで、転職用途と相性が良い",
  },
  {
    rank: "3位",
    courseType: "短期集中ブートキャンプ型",
    bestFor: "短期間で知識を圧縮して学びたい人",
    reason: "短い期間で集中しやすい一方、復習計画を持たないと定着しにくい",
  },
  {
    rank: "4位",
    courseType: "コミュニティ学習型",
    bestFor: "継続のために仲間や情報交換を重視する人",
    reason: "学習継続には強いが、個別課題の深掘りは別途設計が必要",
  },
  {
    rank: "5位",
    courseType: "動画自走型",
    bestFor: "低コストでマイペースに学びたい人",
    reason: "費用を抑えられる反面、質問導線や進捗管理を自分で補う必要がある",
  },
] as const;

const purposeRecommendations = [
  {
    title: "転職目的",
    body: "成果物レビュー、面接対策、職務経歴書への反映支援がある講座を優先します。学習範囲の広さより、アウトプット品質の改善サイクルを重視します。",
  },
  {
    title: "副業目的",
    body: "実案件に近い演習と納品フローの学習がある講座が有効です。単価感だけでなく、継続案件を獲得するための実務習慣まで確認します。",
  },
  {
    title: "業務効率化目的",
    body: "現職の業務に直接使える課題設計と、導入時の社内調整ノウハウを学べる講座が向いています。受講中に社内PoCを回せるかが分岐点です。",
  },
] as const;

const selectionPoints = [
  {
    title: "補助金対応",
    body: "補助金対象かどうかだけでなく、申請手順と期限を受講前に確認します。要件未確認のまま申込むと、活用できないケースがあります。",
  },
  {
    title: "受講形式",
    body: "オンライン・通学・ハイブリッドのうち、継続可能な形式を選びます。通勤時間、業務時間、家庭都合を含めた現実的な設計が必要です。",
  },
  {
    title: "受講期間",
    body: "短期で終えることより、受講後1〜2か月の実践期間まで見据えて選びます。学習フェーズと適用フェーズを分けると定着しやすくなります。",
  },
] as const;

const failurePatterns = [
  {
    pattern: "目的を決めずに知名度だけで選ぶ",
    avoid: "受講目的を1つに固定し、成果条件を先に言語化してから比較する。",
  },
  {
    pattern: "価格だけで判断して支援範囲を見ない",
    avoid: "質問対応、レビュー回数、実務課題の有無まで含めて比較する。",
  },
  {
    pattern: "受講後の運用計画を作らない",
    avoid: "受講中から業務適用テーマを決め、学んだ内容を週次で実務に接続する。",
  },
] as const;

const keywordTags = ["AI講座ランキング", "AI講座の選び方", "AI講座比較基準"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "ranking-criteria", label: "ランキングの評価基準" },
  { id: "recommended-by-purpose", label: "目的別おすすめ" },
  { id: "selection-points", label: "選び方のポイント" },
  { id: "failure-patterns", label: "よくある失敗パターンと回避法" },
  { id: "faq", label: "FAQ" },
] as const;

export default function AiCourseRankingPage({ faqItems }: AiCourseRankingPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI講座ランキング2026" },
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
            AI講座ランキング2026｜選び方の基準と目的別おすすめ
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI講座を比較するときは、知名度ではなく「目的適合」で選ぶことが重要です。本記事では、他社名を挙げずに評価基準と選び方を整理し、
            失敗しやすいポイントまで解説します。
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
              AI講座ランキングは、カリキュラム・実務接続・サポート・コスパ・受講者評価の5軸で比較するのが実践的です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              転職、副業、業務効率化では最適な講座タイプが異なるため、目的を先に固定してから選ぶ必要があります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              失敗を防ぐ鍵は、受講前に補助金条件・受講形式・受講後の実務適用計画を確認することです。
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
          <h2 id="ranking-criteria" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ランキングの評価基準
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            本ランキングは、講座タイプを比較するための編集部基準です。特定サービス名ではなく、受講成果につながりやすい評価観点で整理しています。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {rankingCriteria.map((item) => (
              <section key={item.axis} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.axis}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">順位</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">講座タイプ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">向いている目的</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">評価理由</th>
                </tr>
              </thead>
              <tbody>
                {rankingRows.map((row) => (
                  <tr key={row.rank} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.rank}</th>
                    <td className="py-4 px-4">{row.courseType}</td>
                    <td className="py-4 px-4">{row.bestFor}</td>
                    <td className="py-4 pl-4">{row.reason}</td>
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
          <h2 id="recommended-by-purpose" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            目的別おすすめ（転職・副業・業務効率化）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 目的が違えば「必要な講座タイプ」も変わります。まずは転職/副業/業務効率化のどれを優先するかを1つに固定してください。
          </p>
          <div className="mt-6 space-y-4">
            {purposeRecommendations.map((item) => (
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
          <h2 id="selection-points" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            選び方のポイント（補助金対応・受講形式・期間）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 比較で迷ったら「補助金/給付金の要件」「学習継続しやすい形式」「実務適用に必要な期間」の3点を先に確認すると判断が早くなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {selectionPoints.map((point) => (
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
            よくある失敗パターンと回避法
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 失敗の多くは「目的が曖昧なまま申込む」「受講後の実務適用計画がない」ことから起きます。回避の視点を先に押さえましょう。
          </p>
          <dl className="mt-6 space-y-4">
            {failurePatterns.map((item) => (
              <div key={item.pattern} className="rounded-lg border border-gray-200 p-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">失敗: {item.pattern}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">回避法: {item.avoid}</dd>
              </div>
            ))}
          </dl>
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
          <p className="mt-5 text-base leading-8 text-gray-700">
            よくある疑問をQ&Aで整理します。講座の内容や価格は変動するため、最終判断は公式情報での確認を前提にしてください。
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

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/ai-school-for-working-adults"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人向けAIスクールの選び方ガイド｜失敗しない比較ポイントを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/dx-reskilling-subsidy-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                DXリスキリング助成金ガイド｜対象条件・申請手順・併用可否を解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/education-training-benefit-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                教育訓練給付金でAI講座を受講するガイド｜制度比較と費用の考え方 | AIリブート
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
              <Link
                href="/academy/blog/ai-engineer-career-change"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                未経験からAIエンジニアへの転職ロードマップ｜学習手順と準備を解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-side-business-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                副業でAIを活用する始め方ガイド｜学習から案件獲得までの現実的な進め方 | AIリブート
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
            AI講座選びで迷う場合は、無料セミナーで学習計画を整理し、個別相談であなたの目的に合う受講戦略を確認できます。比較で止まらず、実行できる計画まで落とし込むことが重要です。
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
