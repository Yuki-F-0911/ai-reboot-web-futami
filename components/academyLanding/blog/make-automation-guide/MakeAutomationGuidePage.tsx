"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type MakeAutomationGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["Make.com 使い方", "Make.com 生成AI 自動化", "ノーコード実装", "AIワークフロー"] as const;

const tocItems = [
  { id: "answer-box", label: "結論（Answer Box）" },
  { id: "positioning", label: "比較記事との違い" },
  { id: "use-case", label: "最初の1本：自動化シナリオ設計" },
  { id: "implementation", label: "実装手順（Step 1-6）" },
  { id: "operations", label: "運用設計と失敗対策" },
  { id: "kpi", label: "導入効果の測定指標" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "学習を継続する次の一歩" },
] as const;

const answerPoints = [
  "Make.comは比較で終わらせず、1本のシナリオを完成させると導入判断が速くなります。",
  "初回は「入力→生成AI処理→通知」の3段構成に限定し、分岐は後から追加するのが安全です。",
  "運用では、失敗通知・再実行ルール・入力データ制限を先に決めると止まりにくくなります。",
  "AI活用の効果測定を週次で行い、継続改善サイクルを作ってください。",
] as const;

const implementationSteps = [
  {
    title: "Step 1. シナリオ目的を1文で固定する",
    body: "例: フォーム回答を受け取り、要約してSlackへ通知する。目的を1文で固定すると不要な機能追加を防げます。",
  },
  {
    title: "Step 2. Triggerモジュールを設定する",
    body: "Webhookまたはフォーム連携を使い、入力データの必須項目を最小化します。欠損データ時の扱いもここで決めます。",
  },
  {
    title: "Step 3. 生成AIモジュールで出力形式を固定する",
    body: "「要点3行＋次アクション1行」など出力形式を明示し、毎回同じ粒度で通知できるようにします。",
  },
  {
    title: "Step 4. 通知モジュールを追加する",
    body: "Slackやメールへ送る前に、タイトルへ案件IDを付けて検索性を確保します。運用開始後の追跡が楽になります。",
  },
  {
    title: "Step 5. エラー処理を設定する",
    body: "再試行回数、失敗時通知先、手動再実行手順を先に定義します。エラー対応を後回しにすると運用停止リスクが上がります。",
  },
  {
    title: "Step 6. テストデータで本番前検証する",
    body: "最低3パターン（正常/欠損/長文）で検証し、出力品質とコストを確認してから有効化します。",
  },
] as const;

const riskRows = [
  {
    risk: "入力データが長すぎる",
    symptom: "AI処理が遅く、費用が増える",
    fix: "入力前に要約・不要項目削除を入れる",
  },
  {
    risk: "出力形式が毎回ぶれる",
    symptom: "通知を読んでも次アクションが曖昧",
    fix: "出力テンプレを固定し、項目を必須化する",
  },
  {
    risk: "API障害で停止する",
    symptom: "シナリオが止まり、処理漏れが発生",
    fix: "再試行と失敗通知、手動復旧手順を明記する",
  },
  {
    risk: "機密情報をそのまま送る",
    symptom: "情報管理リスクが上がる",
    fix: "マスキング処理を追加し、入力範囲を制限する",
  },
] as const;

const kpiRows = [
  {
    metric: "処理時間（Before/After）",
    target: "週次で短縮傾向を確認",
    note: "1件あたりの時間差で測定",
  },
  {
    metric: "再実行率",
    target: "運用初期は高くても改善傾向を作る",
    note: "失敗原因の可視化に使う",
  },
  {
    metric: "通知の活用率",
    target: "通知後に次アクションへつながる比率を確認",
    note: "読むだけ通知を減らす",
  },
  {
    metric: "週次削減工数",
    target: "削減時間を週次で記録",
    note: "LINEで相談しながら進める",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "業務の中でAIを使い切る実装力を身につけ、ツール比較ではなく成果ベースで判断できる状態を作ります。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "どの業務で価値を出せるかを可視化し、AI時代の役割を言語化します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "実装例と失敗例を共有し、現場で再現可能な運用パターンを増やします。",
  },
] as const;

function MidArticleCtaBox() {
  return (
    <motion.section
      className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-emerald-900">ここで一度、導入効果を見える化する</p>
      <p className="mt-2 text-sm leading-7 text-emerald-900/90">
        Makeの1本目は「動いた」で終わらせず、効果計測まで設計すると定着率が上がります。AIリブートアカデミーについてLINEで無料相談できます。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで無料相談する（登録無料）
      </a>
    </motion.section>
  );
}

function LineCtaBox() {
  return (
    <motion.section
      className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-green-800">AIで仕事を変えたい方へ｜LINEで無料相談する</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        経産省リスキリング補助金対象の100日間プログラム「AIリブートアカデミー」について、LINEで気軽に相談できます。補助金の使い方・カリキュラム・学習イメージを無料でお伝えします。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで無料相談する（登録無料）
      </a>
    </motion.section>
  );
}

export default function MakeAutomationGuidePage({ faqItems }: MakeAutomationGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Make.com×生成AI自動化ガイド" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
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
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="Make.com×生成AI自動化ガイド｜最初の1本を実装する手順【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Make.com×生成AI自動化ガイド｜最初の1本を実装する手順【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Make.comは比較表で終わらせると定着しません。最初の1本を実際に動かし、運用ルールまで決めると、
            自動化の効果と改善余地が明確になります。確認日: 2026-02-20。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">結論（Answer Box）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {answerPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="positioning"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">比較記事との違い。ここでは「実装して動かす」ことに集中する</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Make・Zapier・n8nの違いを知る段階は、
            <Link href="/academy/blog/workflow-automation-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              比較記事
            </Link>
            で十分です。本記事は次の段階として、Make.comで1本を作るための実装順を具体化します。
          </p>
        </motion.section>

        <motion.section
          id="use-case"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">最初の1本は「フォーム回答を要約して通知する」構成が最も再現しやすい</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            1本目で重要なのは複雑さではなく再現性です。入力元を1つに固定し、AI処理後の通知先も1つに絞ると、改善点を把握しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="implementation"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">実装手順（Step 1-6）</h2>
          <div className="mt-6 space-y-4">
            {implementationSteps.map((step) => (
              <section key={step.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <MidArticleCtaBox />

        <motion.section
          id="operations"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">運用設計と失敗対策。止まらないシナリオにする最低限のルール</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">失敗パターン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">起きる症状</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">対策</th>
                </tr>
              </thead>
              <tbody>
                {riskRows.map((row) => (
                  <tr key={row.risk} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.risk}</th>
                    <td className="px-4 py-3">{row.symptom}</td>
                    <td className="py-3 pl-4">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="kpi"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">導入効果の測定指標。運用継続の判断は数値で行う</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">指標</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">見たい状態</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">計測メモ</th>
                </tr>
              </thead>
              <tbody>
                {kpiRows.map((row) => (
                  <tr key={row.metric} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.metric}</th>
                    <td className="px-4 py-3">{row.target}</td>
                    <td className="py-3 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-orange-900">自動化を成果に変えるには、実装力だけでなく運用習慣まで設計する</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-orange-200 bg-white p-4">
                <h3 className="text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              アカデミーの学習設計を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
