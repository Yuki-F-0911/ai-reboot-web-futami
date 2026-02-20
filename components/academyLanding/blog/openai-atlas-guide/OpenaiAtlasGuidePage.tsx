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

type OpenaiAtlasGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "OpenAI Atlas とは",
  "AI ブラウザ 使い方",
  "OpenAI Atlas 日本語",
  "Atlas vs Operator",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-atlas", label: "OpenAI Atlasとは？公式情報で整理" },
  { id: "difference-from-browser", label: "通常ブラウザとの違い" },
  { id: "how-to-use", label: "OpenAI Atlasの使い方" },
  { id: "business-use-cases", label: "ビジネス活用シーン" },
  { id: "atlas-vs-operator", label: "Atlas vs Operator" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";

const summaryPoints = [
  "OpenAI Atlasは、Web閲覧の画面上でAIに要約・質問・フォーム操作補助を任せられるAIブラウザです。",
  "通常ブラウザとの実務差は、操作の前後にある「調べる→整える→入力する」を連続処理しやすい点です。",
  "OpenAI公式ページとHelp Centerの案内ベースで、Atlasの提供範囲は段階的に更新されています（確認日: 2026年2月20日）。",
  "Operatorは自律操作エージェントとして始まり、ChatGPT agent機能へ統合が進行中です。Atlasはブラウザ体験を強化する役割で捉えると整理しやすくなります。",
  "導入時は、承認が必要な操作とログ保存を先に設計し、最終判断を人が担う運用にすることが前提です。",
] as const;

const browserDiffRows = [
  {
    axis: "情報収集",
    normalBrowser: "検索結果と複数タブを人が読み比べる",
    atlas: "閲覧ページを起点に要点抽出や追加質問を同画面で進められる",
    practicalPoint: "調査初稿の作成速度を上げやすい",
  },
  {
    axis: "フォーム入力",
    normalBrowser: "コピペや再入力を手作業で行う",
    atlas: "入力候補の提案や補助で反復作業を減らせる",
    practicalPoint: "定型入力の時間短縮に向く",
  },
  {
    axis: "Web操作の連続性",
    normalBrowser: "閲覧と作業メモが分離しやすい",
    atlas: "閲覧内容を参照しながら次の操作指示へつなげやすい",
    practicalPoint: "調査から実務処理までの往復を減らせる",
  },
  {
    axis: "運用管理",
    normalBrowser: "個人スキルに依存しやすい",
    atlas: "使い方の型を決めるとチーム再現性を作りやすい",
    practicalPoint: "業務標準化の土台にしやすい",
  },
] as const;

const gettingStartedSteps = [
  {
    title: "Step 1. まず対象業務を1つに絞る",
    body: "最初は市場調査、競合価格チェック、定型フォーム入力など、結果を評価しやすい業務に限定します。対象を広げすぎると効果測定ができません。",
  },
  {
    title: "Step 2. Atlasで情報収集の型を作る",
    body: "閲覧中ページに対して「要点3つ」「比較観点」「次に確認すべき論点」を固定フォーマットで出力し、毎回同じ順序で整理します。",
  },
  {
    title: "Step 3. フォーム入力補助は低リスクから始める",
    body: "問い合わせフォームや社内申請など、誤入力の影響が限定的な作業で検証します。契約・請求・公開送信は最初から自動化対象にしない方が安全です。",
  },
  {
    title: "Step 4. 週次で品質と工数を確認する",
    body: "短縮時間だけでなく、修正回数、再入力率、確認工数を記録します。効果が出る条件を定量化できると、運用を拡大しやすくなります。",
  },
  {
    title: "Step 5. 最終承認ポイントを固定する",
    body: "社外送信、意思決定、顧客提出の前には人が確認するルールを明文化します。AIブラウザは補助として使い、責任境界を曖昧にしないことが重要です。",
  },
] as const;

const businessUseCases = [
  {
    title: "情報収集: 週次リサーチの初稿作成",
    body: "ニュースや公式発表を読みながら要点を同フォーマットで集約し、会議前の共有メモを短時間で準備する運用です。収集後に原典確認を入れると品質が安定します。",
    output: "成果物例: 週次トレンドメモ、競合比較表、会議用サマリー",
  },
  {
    title: "フォーム入力: 反復業務の処理時間短縮",
    body: "同種の入力項目が続く業務では、入力候補の提案と確認を組み合わせることで作業密度を上げやすくなります。人の確認を前提にすれば、入力ミスの早期発見もしやすくなります。",
    output: "成果物例: 問い合わせ一次対応、社内申請下書き、CRM登録の補助",
  },
  {
    title: "Web操作自動化: 調査から実行までの接続",
    body: "閲覧、整理、次の操作指示を連続化することで、手戻りの多い作業を圧縮できます。特に「確認観点が決まっているタスク」と相性が良く、担当者の判断負荷を下げやすいです。",
    output: "成果物例: 調査ログ、比較レポート、実行手順メモ",
  },
] as const;

const safeOperationChecklist = [
  "入力禁止データ（個人情報・機密情報）の範囲を先に決める。",
  "承認必須の操作を明文化し、送信系は人が最終確認する。",
  "履歴・ログの保存方法と保管期間を定義する。",
  "権限は最小化し、共有アカウント運用を避ける。",
  "月次で利用状況を見直し、費用と効果を同時に評価する。",
] as const;

const atlasVsOperatorRows = [
  {
    axis: "設計思想",
    atlas: "Web閲覧と実務操作を同じブラウザ体験で補助する",
    operator: "目標達成のためにタスクを自律実行するエージェント系機能",
  },
  {
    axis: "主な利用シーン",
    atlas: "情報収集、要約、フォーム入力補助、日常Web業務",
    operator: "複数ステップの代理実行やワークフロー処理",
  },
  {
    axis: "現在の位置づけ",
    atlas: "OpenAIのAIブラウザとして継続的に機能更新",
    operator: "研究プレビュー公開後、ChatGPTのagent機能へ統合が進行",
  },
  {
    axis: "実務での使い分け",
    atlas: "人が画面を見ながら進める半自動運用に向く",
    operator: "完了条件を指定して委譲する自動化に向く",
  },
] as const;

function LineCtaBox({ tone }: { tone: "gray" | "green" | "orange" }) {
  const className =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : tone === "orange"
        ? "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
        : "mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6";

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-sm font-semibold text-gray-900">📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-3 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          LINEで週1AI通信を受け取る（無料）
        </a>
      </div>
    </motion.section>
  );
}

export default function OpenaiAtlasGuidePage({ faqItems }: OpenaiAtlasGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "OpenAI Atlasガイド" },
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
                title="OpenAI Atlasとは？AIブラウザの使い方と活用シーン完全解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            OpenAI Atlasとは？AIブラウザの使い方と活用シーン完全解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAI Atlasは、Webを見ながらAIに質問・要約・入力補助を任せられるAIブラウザです。指名検索で「OpenAI
            Atlasとは？」を調べる人に向けて、まず結論を示すと、Atlasは「通常ブラウザにAIエージェント操作レイヤーを重ねた製品」です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            この記事では、2026年2月20日時点のOpenAI公式公開情報を基準に、通常ブラウザとの違い、使い方、ビジネス活用、Atlas
            vs Operatorの関係まで整理します。機能・提供条件は更新されるため、本文中に確認日を明記します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="scroll-mt-28 mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <LineCtaBox tone="gray" />

        <motion.section
          id="what-is-atlas"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">OpenAI Atlasとは？2026年2月時点の公式情報で整理</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            OpenAI Atlasは、OpenAIが提供するAIブラウザで、閲覧中ページに対してAIの補助操作を直接呼び出せる点が中核です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            公式公開情報では、Atlasページで「Browse any website with AI support」と案内され、リリースノートでも段階的な提供拡大と機能更新が継続しています。価格や提供条件は更新されるため、実務導入では必ず確認日をセットにしてください。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">2025-10-21: OpenAI公式発表でAtlasが公開。</li>
            <li className="pl-1 marker:text-gray-500">Help CenterにGetting startedとEnterprise向け案内が公開され、提供条件が継続更新。</li>
            <li className="pl-1 marker:text-gray-500">Enterprise向け機能は段階展開のため、監査要件や利用可能機能の事前確認が必須。</li>
            <li className="pl-1 marker:text-gray-500">確認日: 2026年2月20日（OpenAI公式ページ/Help Center）。</li>
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            AIエージェントの全体像を先に押さえたい場合は、
            <Link
              href="/academy/blog/what-is-ai-agent"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIエージェントとは？定義・種類・作り方を初心者向けに解説
            </Link>
            を先に読むと、Atlasの立ち位置が理解しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="difference-from-browser"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">通常ブラウザと何が違う？AIエージェント機能の観点で理解する</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Atlasの違いは、「Web閲覧」と「AIによる次アクション提案」を同じ作業面で扱える点です。単なる検索補助ではなく、作業フローの接続が改善されます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">通常ブラウザ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">OpenAI Atlas</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">実務での差分</th>
                </tr>
              </thead>
              <tbody>
                {browserDiffRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.normalBrowser}</td>
                    <td className="px-4 py-4">{row.atlas}</td>
                    <td className="px-4 py-4">{row.practicalPoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            ただし、重要操作を完全委譲する前提で使うとリスクが増えます。業務の成否に直結する送信・承認・意思決定は、人の確認を固定した運用で扱うことが前提です。
          </p>
        </motion.section>

        <motion.section
          id="how-to-use"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">OpenAI Atlasの使い方（初期設定から実務運用まで）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            成果を出す使い方は、機能を全部試すことではなく、1業務に絞って運用ルール込みで設計することです。
          </p>
          <div className="mt-6 space-y-4">
            {gettingStartedSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            ChatGPT側の基本操作やプロンプト設計を先に整理したい場合は、
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT・Claude初心者ガイド
            </Link>
            を併読すると、Atlasで集めた情報を成果物へつなぎやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="business-use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ビジネス活用シーン: 情報収集・フォーム入力・Web操作の自動化</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Atlasは、反復的なWeb業務を「半自動化」する運用で効果を出しやすいツールです。完全自動化より、確認付きの高速化を狙うと失敗が減ります。
          </p>
          <div className="mt-6 space-y-4">
            {businessUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
                <p className="mt-3 text-sm font-medium leading-7 text-gray-900">{item.output}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">導入前に決めるべき安全運用チェック</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {safeOperationChecklist.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            同じAIエージェント系ツールの運用例を比較したい場合は、
            <Link
              href="/academy/blog/manus-ai-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              Manus AIとは？使い方と活用シーン解説
            </Link>
            も参考になります。比較すると、自社業務に合う自動化レベルを選びやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="atlas-vs-operator"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Atlas vs Operator: 2026年2月時点での関係と使い分け</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            OpenAI公式情報を基準にすると、Operatorは自律操作エージェントとして公開後、ChatGPTのagent機能へ統合が進む流れです。AtlasはAIブラウザとして別軸で進化しています。
          </p>
          <p className="mt-2 text-xs text-gray-500">確認日: 2026年2月20日（OpenAI公式ブログ・リリースノート）</p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Atlas</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Operator</th>
                </tr>
              </thead>
              <tbody>
                {atlasVsOperatorRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.atlas}</td>
                    <td className="px-4 py-4">{row.operator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            実務では「日々のWeb作業を速くするAtlas」と「より広いタスク委譲を担うagent機能」を役割分担すると、導入判断が明確になります。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <LineCtaBox tone="green" />

        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/manus-ai-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Manus AIとは？使い方と活用シーン解説｜AIエージェントで仕事を自動化する
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/what-is-ai-agent"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェントとは？定義・種類・作り方を初心者向けに解説
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
          <h2 className="text-2xl font-bold text-gray-900">次のアクション</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、自己理解・キャリアデザインの言語化、仲間と共に学ぶ環境づくりまで含めて学習を設計しています。ツール情報の収集で止まらず、実務成果とキャリア設計まで接続したい方は、運用設計を含めて学ぶことが有効です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              LINEで週1AI通信を受け取る（無料）
            </a>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
