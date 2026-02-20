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

type AirebootAcademyReviewsPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "毎週1本、実務で使える生成AI活用のヒントとAIニュースをLINEで配信しています（無料）。読むだけで、AI活用の「知っておくべきこと」が自然と身につきます。受講前の不安や、自分に合うか確認したい方は、個別LINE相談もできます。";

const sourceRows = [
  {
    source: "公式評判ページ",
    detail: "第一期参加者コメント（Before/After）と講座概要を確認",
    note: "公開情報のため再確認可能",
  },
  {
    source: "アカデミー公式ページ",
    detail: "100日間プログラムと提供方針を確認",
    note: "最新情報は公式更新に依存",
  },
  {
    source: "公開FAQ・関連記事",
    detail: "受講判断で迷いやすい論点（時間・費用・継続条件）を照合",
    note: "複数ページで整合性を確認",
  },
] as const;

const goodReputationPoints = [
  {
    title: "実務に繋がる感覚を持ちやすい",
    body: "第一期コメントでは、学んだ内容をその場でアウトプットに変えられたという趣旨の声が複数確認できます。知識の暗記より、実務で使う前提の学習設計を評価する声が目立ちます。",
  },
  {
    title: "仲間との学習環境が継続を支える",
    body: "「一人では挫折していた可能性がある」「仲間がいたから走り切れた」という内容が繰り返し見られます。独学で継続が難しい人には、環境価値が大きい可能性があります。",
  },
  {
    title: "思考の変化が起きたという声がある",
    body: "AIを遠い存在と捉えていた状態から、実務で触れる対象に認識が変わったというコメントがあります。短期での意識変化を重視する人にとっては判断材料になります。",
  },
] as const;

const concernPoints = [
  {
    point: "受講料は安い部類ではない",
    action:
      "価格だけで決めず、受講目的と回収計画を先に言語化してから判断するのが現実的です。補助金の適用可否は必ず最新条件を確認してください。",
  },
  {
    point: "100日間の継続には時間確保が必要",
    action:
      "仕事が忙しい時期に学習枠を確保できないと、受講価値を活かし切れません。申込前に、週単位の学習時間を固定できるか確認してください。",
  },
  {
    point: "特定ツール操作だけを学ぶ講座ではない",
    action:
      "短期間で特定ツールの操作だけを習得したい場合は、目的とのズレが出る可能性があります。判断軸づくりやキャリア再設計まで求めるかを確認しましょう。",
  },
] as const;

const fitRows = [
  {
    type: "向いている人",
    items: [
      "AI活用スキルだけでなく、キャリアの方向性まで整理したい人",
      "独学で止まりやすく、仲間との対話や伴走環境を必要としている人",
      "受講後に業務で使うテーマがある程度明確な人",
    ],
  },
  {
    type: "向いていない人",
    items: [
      "単発でツールの操作方法だけを短時間で学びたい人",
      "受講期間中の学習時間をほぼ確保できない人",
      "対話や協働よりも、完全自己完結の学習スタイルを最優先する人",
    ],
  },
] as const;

const skillChangeRows = [
  {
    axis: "生成AI活用力",
    after: "業務課題に対して、どのAI活用が適切かを判断しやすくなる",
    example: "試すツールを増やす前に、目的と評価基準を先に定義できる",
  },
  {
    axis: "自己理解・キャリアデザイン",
    after: "強みや価値観をもとに、次の選択肢を言語化しやすくなる",
    example: "転職・社内異動・副業などの優先順位を整理しやすくなる",
  },
  {
    axis: "仲間と共に学ぶ環境",
    after: "一人で抱え込みにくくなり、改善の速度を維持しやすくなる",
    example: "実践報告と相互フィードバックで継続率を上げやすい",
  },
] as const;

const keywordTags = [
  "AIリブートアカデミー 評判",
  "AIリブートアカデミー 口コミ",
  "AIリブートアカデミー 受講 感想",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "how-to-read-reviews", label: "評判・口コミをどう読むか" },
  { id: "good-points", label: "口コミから見えた評価ポイント" },
  { id: "concerns", label: "受講前に知っておくべき懸念点" },
  { id: "fit-or-not", label: "向いている人 / 向いていない人" },
  { id: "changes-after-course", label: "受講後に身につくスキルと変化" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

function LineCtaBox({
  title = "LINEで毎週AI知識を配信中",
  body = lineCtaBody,
  buttonLabel = "今すぐ無料で登録する（30秒）",
  className = "blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6",
}: {
  title?: string;
  body?: string;
  buttonLabel?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-green-900">{title}</p>
      <p className="mt-3 text-sm leading-7 text-green-900">{body}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}

export default function AirebootAcademyReviewsPage({ faqItems }: AirebootAcademyReviewsPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIリブートアカデミーの評判・口コミ" },
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
                title="AIリブートアカデミーの評判・口コミは実際どう？受講前に確認すべきポイントを正直解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIリブートアカデミーの評判・口コミは実際どう？
            <br className="hidden sm:block" />
            受講前に確認すべきポイントを正直解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            このページは、AIリブートアカデミーの受講を検討している方向けに、公開情報ベースで評判と口コミを整理した最終確認ガイドです。
            良い点だけでなく、受講前に確認しておきたい懸念点も明記します。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            記事内の口コミは、`/academy/reviews` に掲載されている第一期参加者コメントと公開FAQを根拠にしています。
            架空の体験談や未確認の実績数値は掲載しません。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-600">
            情報確認日: 2026-02-20（受講料・補助金条件などの変動情報は公式ページで再確認してください）
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              公開されている評判は、実務接続・仲間との学習・認知変化の3点を評価する内容が中心です。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              一方で、費用と100日間の継続負荷は事前確認が必要です。ここを曖昧にしたまま申込むと後悔しやすくなります。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              向いているのは、AIスキルだけでなく自己理解・キャリア設計・仲間との学習環境まで求める人です。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              最終判断前に、目的と時間確保の現実性を確認し、迷う場合はLINE相談で個別にすり合わせるのが安全です。
            </li>
          </ul>
          <div className="mt-6">
            <LineCtaBox />
          </div>
        </motion.section>

        <motion.section
          id="how-to-read-reviews"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            AIリブートアカデミーの評判・口コミをどう読むか
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            評判記事で最も重要なのは、コメントの量ではなく、どの情報源を使って判断したかです。
            本記事では、本人が確認できる公開一次情報だけを使い、受講判断に必要な論点へ絞って整理します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">情報源</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">確認した内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">読み方の注意点</th>
                </tr>
              </thead>
              <tbody>
                {sourceRows.map((row) => (
                  <tr key={row.source} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.source}</th>
                    <td className="py-4 px-4">{row.detail}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            先に公式の評判ページを確認したい方は
            <Link href="/academy/reviews" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIリブートアカデミー評判・口コミページ
            </Link>
            も合わせてご覧ください。
          </p>
        </motion.section>

        <motion.section
          id="good-points"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">口コミから見えた評価ポイント</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            第一回（第一期）参加者コメントを確認すると、単なる「満足した」という抽象表現より、受講前後の変化を説明する内容が多い点が特徴です。
            特に、次の3つは複数コメントで共通していました。
          </p>
          <div className="mt-6 space-y-4">
            {goodReputationPoints.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="concerns"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">受講前に知っておくべき懸念点</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            評判が良くても、全員に合う講座ではありません。申込前のミスマッチを減らすために、次の3点は正直に確認しておくべきです。
          </p>
          <dl className="mt-6 space-y-4">
            {concernPoints.map((item) => (
              <div key={item.point} className="rounded-lg border border-gray-200 p-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">{item.point}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">{item.action}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-7">
            <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
          </div>
        </motion.section>

        <motion.section
          id="fit-or-not"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">向いている人 / 向いていない人</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            最終判断では「受講するか」だけでなく、「自分の現状と合うか」を見ます。以下に当てはまる項目が多いほど、判断しやすくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {fitRows.map((row) => (
              <section key={row.type} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{row.type}</h3>
                <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {row.items.map((item) => (
                    <li key={item} className="blog-li pl-1 marker:text-gray-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            他講座との比較軸を整理したい場合は
            <Link
              href="/academy/blog/ai-course-ranking"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI講座ランキング記事
            </Link>
            も確認しておくと、判断の抜け漏れを減らせます。
          </p>
        </motion.section>

        <motion.section
          id="changes-after-course"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">受講後に身につくスキルと変化</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            AIリブートアカデミーは、特定ツールの操作だけを教える講座ではなく、3本柱で実務とキャリアをつなぐ設計です。
            受講後の変化は、次の観点で整理すると把握しやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">観点</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">期待できる変化</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務での例</th>
                </tr>
              </thead>
              <tbody>
                {skillChangeRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.after}</td>
                    <td className="py-4 pl-4">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            学習計画の立て方を先に確認したい方は
            <Link
              href="/academy/blog/ai-study-learning-guide"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI学習ガイド
            </Link>
            も併読すると、受講後の行動計画を具体化しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section
          id="related-links"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">関連記事</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/reviews" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー 評判・口コミページ
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/ai-course-ranking"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI講座ランキング2026｜選び方の基準と目的別おすすめを解説
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/subsidy-guide"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                リスキリング補助金ガイド｜対象条件・受講手順を確認
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 text-xl font-bold text-will-primary">
            AI活用の判断軸とキャリアを同時に設計したい方へ
          </h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、自己理解・キャリアデザイン、仲間と共に学ぶ環境までを一体で設計しています。
            特定ツールの操作だけに閉じず、実務と次のキャリア判断をつなげたい方に向いた学習構造です。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-will-primary">
              生成AI活用力: 業務課題に対してAIをどう使うかの判断軸を体系化する
            </li>
            <li className="blog-li pl-1 marker:text-will-primary">
              自己理解・キャリアデザイン: 強みと価値観を言語化し、次の選択を具体化する
            </li>
            <li className="blog-li pl-1 marker:text-will-primary">
              仲間と共に学ぶ環境: 対話と協働で継続率と改善速度を高める
            </li>
          </ul>
        </motion.section>

        <section id="line-cta-final" className="mt-14">
          <LineCtaBox
            title="まずはLINEで無料相談"
            body="AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）。受講前の不安や向き不向きの確認は、LINEで個別相談できます。"
            buttonLabel="まずはLINEで無料相談する"
          />
        </section>
      </article>
    </main>
  );
}
