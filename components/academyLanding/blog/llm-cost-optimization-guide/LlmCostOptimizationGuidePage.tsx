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

type LlmCostOptimizationGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["LLM API コスト最適化", "ChatGPT API 費用削減", "トークン節約", "キャッシュ設計"] as const;

const tocItems = [
  { id: "answer-box", label: "結論（Answer Box）" },
  { id: "scope", label: "この記事の対象範囲" },
  { id: "cost-structure", label: "費用構造を分解する" },
  { id: "token-optimization", label: "トークン節約の実装" },
  { id: "routing-cache", label: "モデル選定とキャッシュ" },
  { id: "operations", label: "運用監視と改善サイクル" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "学習を継続する次の一歩" },
] as const;

const answerPoints = [
  "コスト最適化は「導入費用の一般論」ではなく、API呼び出し単位での運用設計が中心です。",
  "最初にやるべき施策は、トークン削減・モデルルーティング・キャッシュの3点です。",
  "費用だけ追うと品質が落ちるため、正答率や再編集率を同時に監視する必要があります。",
  "ROI試算シートを活用して、削減効果を稟議に載せられる形式へ変換できます。",
] as const;

const costBreakdownRows = [
  {
    item: "入力トークン",
    description: "プロンプト、履歴、添付テキスト",
    risk: "履歴肥大で単価が上昇",
    action: "履歴圧縮と不要文削除を先に実装",
  },
  {
    item: "出力トークン",
    description: "生成テキスト全体",
    risk: "長文化で費用と後編集工数が増加",
    action: "出力形式を固定し、上限を設定",
  },
  {
    item: "再試行コスト",
    description: "タイムアウトや失敗時の再実行",
    risk: "同じ処理が重複課金される",
    action: "再試行回数上限と失敗通知を設定",
  },
  {
    item: "上位モデル依存",
    description: "全処理で高性能モデルを使用",
    risk: "不要に高い単価を払い続ける",
    action: "タスク難易度でモデルを分岐",
  },
] as const;

const tokenSteps = [
  {
    title: "Step 1. プロンプトを役割別に分解する",
    body: "指示文、制約、出力形式を分けると重複文を削減しやすくなります。",
  },
  {
    title: "Step 2. 履歴をそのまま渡さない",
    body: "会話履歴は要約して渡し、必要な文脈だけ残す運用に切り替えます。",
  },
  {
    title: "Step 3. 出力形式を短く固定する",
    body: "長文を許容せず、箇条書き行数や文字数を指定して過剰生成を抑えます。",
  },
  {
    title: "Step 4. 失敗時の自動再実行を制御する",
    body: "再試行条件を限定し、無限リトライで費用が膨らむ状態を防ぎます。",
  },
] as const;

const routingRows = [
  {
    level: "低難易度",
    task: "分類、要約、整形",
    model: "軽量モデル",
    rule: "初回は軽量モデル固定",
  },
  {
    level: "中難易度",
    task: "比較、論点整理",
    model: "中位モデル",
    rule: "品質閾値未達時のみ再実行",
  },
  {
    level: "高難易度",
    task: "複雑推論、重要判断補助",
    model: "上位モデル",
    rule: "対象タスクを明示して限定投入",
  },
] as const;

const operationRows = [
  {
    metric: "1リクエストあたり費用",
    purpose: "単価の変動を早期検知",
    frequency: "日次",
  },
  {
    metric: "タスク別成功率",
    purpose: "安いが使えない状態を防ぐ",
    frequency: "日次",
  },
  {
    metric: "再編集率",
    purpose: "品質低下の兆候を捉える",
    frequency: "週次",
  },
  {
    metric: "キャッシュヒット率",
    purpose: "重複呼び出し削減の効果確認",
    frequency: "週次",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "コストと品質を両立する運用設計を学び、現場で継続可能なAI活用へつなげます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "自分の業務でどこに価値を出せるかを見極め、AI時代の専門性を再定義します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "改善ログを共有し、チームで再現できる運用フレームを育てます。",
  },
] as const;

function MidArticleCtaBox() {
  return (
    <motion.section
      className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-emerald-900">費用削減を稟議に載せるなら、数値化テンプレを先に持つ</p>
      <p className="mt-2 text-sm leading-7 text-emerald-900/90">
        LINEで「AIリブートアカデミー」に無料相談できます。API運用改善や補助金活用について、気軽にお声がけください。
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
      viewport={{ once: true, amount: 0.2 }}
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

export default function LlmCostOptimizationGuidePage({ faqItems }: LlmCostOptimizationGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "LLM APIコスト最適化ガイド" },
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
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="LLM APIコスト最適化ガイド｜トークン節約・モデル選定・キャッシュ設計【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            LLM APIコスト最適化ガイド｜トークン節約・モデル選定・キャッシュ設計【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            LLM APIのコストは、導入時より運用フェーズで差がつきます。重要なのは単価の暗記ではなく、
            どの処理で費用が増えているかを分解し、再現可能な削減手順を持つことです。確認日: 2026-02-20。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          id="scope"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">この記事の対象範囲。導入ROI全般ではなくAPI運用に絞って最適化する</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            生成AI導入全体の費用対効果は
            <Link href="/academy/blog/ai-adoption-cost-roi" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              導入費用・ROI記事
            </Link>
            で扱っています。本記事はその内側、API呼び出しの削減設計に特化します。
          </p>
        </motion.section>

        <motion.section
          id="cost-structure"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">費用構造を分解する。まずは4つの増加要因を把握する</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">要因</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">内容</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">起きやすい問題</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">初手の対策</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdownRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="px-4 py-3">{row.description}</td>
                    <td className="px-4 py-3">{row.risk}</td>
                    <td className="py-3 pl-4">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="token-optimization"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">トークン節約の実装。最初に着手すべき4ステップ</h2>
          <div className="mt-6 space-y-4">
            {tokenSteps.map((step) => (
              <section key={step.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="routing-cache"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">モデル選定とキャッシュ。難易度に応じて課金を分離する</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">タスク難易度</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">代表タスク</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">推奨モデル層</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">運用ルール</th>
                </tr>
              </thead>
              <tbody>
                {routingRows.map((row) => (
                  <tr key={row.level} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.level}</th>
                    <td className="px-4 py-3">{row.task}</td>
                    <td className="px-4 py-3">{row.model}</td>
                    <td className="py-3 pl-4">{row.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <MidArticleCtaBox />

        <motion.section
          id="operations"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">運用監視と改善サイクル。費用削減は週次で回す</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">監視指標</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">目的</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">確認頻度</th>
                </tr>
              </thead>
              <tbody>
                {operationRows.map((row) => (
                  <tr key={row.metric} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.metric}</th>
                    <td className="px-4 py-3">{row.purpose}</td>
                    <td className="py-3 pl-4">{row.frequency}</td>
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
          viewport={{ once: true, amount: 0.2 }}
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

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/rag-vs-finetuning-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                RAGとファインチューニング、どちらを選ぶ？社内データ活用の判断フレーム | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/vector-db-intro"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ベクターデータベース入門｜Pinecone・Weaviate・ChromaDBの比較と選び方 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/llm-evaluation-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIの評価（LLM評価）入門｜&ldquo;任せていい品質&rdquo;を測る指標と運用【2026年版】 | AIリブート
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
          id="academy-cta"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-orange-900">コスト最適化は、技術と意思決定の両方を鍛えるテーマ</h2>
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
