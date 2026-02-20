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

type Gemini3PracticalGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";

const keywordTags = ["Gemini 3.1 使い方", "Gemini 3.0 違い", "Gemini 実務活用", "Gemini GPT-5.2 比較"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-changed", label: "Gemini 3.1 Proは何が変わったか" },
  { id: "pricing", label: "料金比較とコスト設計" },
  { id: "workspace", label: "Workspace連携の現在地" },
  { id: "multimodal", label: "マルチモーダル対応範囲" },
  { id: "comparison", label: "GPT-5.2との使い分け" },
  { id: "rollout", label: "90日導入プラン" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩" },
] as const;

const summaryPoints = [
  "Gemini 3.1 Proは2026年2月19日に一般提供が案内され、3.0 Proとの差分を「品質」と「運用」で確認する段階に入りました。",
  "3.1 Proと3.0 ProのAPI単価は、2026年2月20日時点の公式価格表で同額です。移行判断は単価よりレビュー工数差で行うのが実務的です。",
  "Workspace連携は有効ですが、管理者設定・契約エディション・地域条件で利用範囲が変わるため、導入前の管理者確認が必須です。",
  "音声・動画は入力理解の活用余地がある一方、出力はテキスト中心です。音声生成や動画生成は別系統モデルを前提に使い分けます。",
] as const;

const changeRows = [
  {
    axis: "提供時期",
    gemini31: "2026-02-19に一般提供案内",
    gemini30: "継続提供中",
    point: "古い比較記事の前提をそのまま使わない",
  },
  {
    axis: "主な評価軸",
    gemini31: "推論品質と効率改善を重視",
    gemini30: "既存運用との互換性が高い",
    point: "既存プロンプトでA/B評価してから移行",
  },
  {
    axis: "導入判断",
    gemini31: "新規案件や改善余地の大きい案件向き",
    gemini30: "安定運用中案件で有効",
    point: "案件単位で段階移行する",
  },
] as const;

const pricingRows = [
  {
    axis: "Input",
    gemini31: "3.0 Proと同額（公式価格表基準）",
    gemini30: "3.1 Proと同額",
  },
  {
    axis: "Output",
    gemini31: "3.0 Proと同額（公式価格表基準）",
    gemini30: "3.1 Proと同額",
  },
  {
    axis: "Cached Input",
    gemini31: "3.0 Proと同額（公式価格表基準）",
    gemini30: "3.1 Proと同額",
  },
] as const;

const workspaceRows = [
  {
    app: "Gmail",
    value: "下書き支援や要約支援を活用しやすい",
    caution: "管理者設定とポリシー制御を先に確認する",
  },
  {
    app: "Docs",
    value: "ドラフト作成、リライト、要点整理を効率化",
    caution: "対外公開文は人の最終レビューを必須化する",
  },
  {
    app: "Drive",
    value: "ファイル横断の要点抽出に有効",
    caution: "権限範囲と共有設定を事前に棚卸しする",
  },
] as const;

const multimodalRows = [
  {
    area: "画像入力",
    status: "対応（解析・説明・要点抽出）",
    note: "社内画像は機密区分に応じて利用可否を分ける",
  },
  {
    area: "音声入力",
    status: "対応（理解・要約）",
    note: "音声生成は別モデルでの検討が必要",
  },
  {
    area: "動画入力",
    status: "対応（理解・要約）",
    note: "動画生成はVeo系モデルを使い分ける",
  },
  {
    area: "音声出力 / Live API",
    status: "3.1 Pro単体では未サポート領域あり",
    note: "要件がある場合は別モデル併用を前提に設計する",
  },
] as const;

const comparisonRows = [
  {
    axis: "業務基盤",
    gemini: "Google Workspace中心の業務環境に馴染みやすい",
    gpt: "OpenAI基盤や既存GPT運用との連続性が高い",
    recommendation: "既存基盤との整合を優先して選定する",
  },
  {
    axis: "比較検証",
    gemini: "Gemini APIでの高速検証がしやすい",
    gpt: "GPT系テンプレ資産を再利用しやすい",
    recommendation: "同一タスクで修正回数を比較して決める",
  },
  {
    axis: "導入負荷",
    gemini: "Workspace連携前提なら導入導線が短い",
    gpt: "API・UI双方で分業しやすい",
    recommendation: "部門ごとにPoCを分けて評価する",
  },
] as const;

const rolloutSteps = [
  {
    phase: "0-30日",
    focus: "利用目的を3つに限定し、評価指標を固定する",
    output: "用途別プロンプトテンプレとレビュー表を作成",
  },
  {
    phase: "31-60日",
    focus: "3.1 Proと3.0 Proを同タスクで比較する",
    output: "修正回数・所要時間・レビュー工数の比較データ",
  },
  {
    phase: "61-90日",
    focus: "有効だった運用を標準フローへ統合する",
    output: "部門別ガイドラインと承認フローを文書化",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "最新モデルの名称ではなく、業務課題に対して適切なAIを選び、成果に接続する判断力を体系化します。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AI活用を通じて自分の強みや価値提供領域を明確化し、次のキャリアの軸を言語化します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間との対話と実践レビューで、継続的に成果を積み上げる学習環境を作ります。",
  },
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";
  const titleClass = tone === "green" ? "text-base font-semibold text-green-800" : "text-base font-semibold text-orange-800";

  return (
    <motion.section
      className={boxClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className={titleClass}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで週1AI通信を受け取る（無料）
      </a>
    </motion.section>
  );
}

export default function Gemini3PracticalGuidePage({ faqItems }: Gemini3PracticalGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Gemini 3.1 Pro実務ガイド" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            Gemini 3.1 Proの使い方実務ガイド｜3.0との違い・料金・Workspace連携・GPT-5.2比較
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-20">2026年2月20日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="Gemini 3.1 Proの使い方実務ガイド｜3.0との違い・料金・Workspace連携・GPT-5.2比較"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Gemini 3.1 Proは、単純な新旧比較ではなく、運用コストと導入効果で評価する段階に入っています。この記事では、3.0 Proとの差分、価格の見方、Workspace連携の現在地、GPT-5.2との使い分けを実務目線で整理します。
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
          <p className="mt-4 text-xs text-blue-800">※確認日: 2026-02-20。料金・仕様は最新公式情報を確認してください。</p>
        </motion.section>

        <motion.section
          id="what-changed"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Gemini 3.1 Proは何が変わったか</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            モデル更新を成功させる鍵は、性能印象ではなく検証フローの設計です。まず3.1 Proと3.0 Proを同じ業務タスクで比較し、差分が出る領域を特定します。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">比較軸</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Gemini 3.1 Pro</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Gemini 3.0 Pro</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">実務ポイント</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {changeRows.map((row) => (
                  <tr key={row.axis}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.axis}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.gemini31}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.gemini30}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="pricing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">料金比較とコスト設計</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            2026年2月20日時点の公式価格表では、3.1 Proと3.0 Proの主要単価は同額です。したがって移行判断は「単価差」より「修正工数差」で見るほうが妥当です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">項目</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Gemini 3.1 Pro</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Gemini 3.0 Pro</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {pricingRows.map((row) => (
                  <tr key={row.axis}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.axis}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.gemini31}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.gemini30}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            詳しい検証手順は、
            <Link href="/academy/blog/google-ai-studio-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Google AI Studioガイド
            </Link>
            を参照すると進めやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="workspace"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Workspace連携の現在地</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            実務導入時は、機能の有無よりも「誰がどのデータへアクセスできるか」を先に定義します。連携可能でも、管理者設定次第で挙動が変わるためです。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">アプリ</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">活用価値</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {workspaceRows.map((row) => (
                  <tr key={row.app}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.app}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.value}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            基礎から整理したい場合は、
            <Link href="/academy/blog/gemini-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Gemini入門ガイド
            </Link>
            の順で読むと全体像を把握しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="multimodal"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">マルチモーダル対応範囲</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            実務で誤解が多いのは「入力対応」と「出力対応」の混同です。3.1 Proは入力理解で有効な場面が多い一方、出力要件は別モデルを併用する設計が必要です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">領域</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">状態</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">運用メモ</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {multimodalRows.map((row) => (
                  <tr key={row.area}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.area}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.status}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">GPT-5.2との使い分け</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            モデル比較で重要なのは、優劣ではなく既存業務との接続コストです。社内基盤とレビュー体制に合わせて、運用しやすい選択を行います。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">比較軸</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Gemini 3.1 Pro</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">GPT-5.2</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">判断基準</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {comparisonRows.map((row) => (
                  <tr key={row.axis}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.axis}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.gemini}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.gpt}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            GPT側の運用方針は、
            <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT実践テクニック
            </Link>
            を併読すると比較しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="rollout"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">個人/法人が90日で定着させる導入手順</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            導入を失敗させないためには、モデル検証と運用設計を同時に進める必要があります。次の3フェーズで進めると、評価と定着を両立しやすくなります。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {rolloutSteps.map((step) => (
              <section key={step.phase} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">{step.phase}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.focus}</p>
                <p className="mt-2 text-xs leading-6 text-gray-500">成果物: {step.output}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            業務テンプレートの整備には、
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事向けプロンプトテンプレート集
            </Link>
            が有効です。
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
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">次の一歩</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            モデル比較だけでは、実務成果は安定しません。AI活用を継続可能な形にするには、判断軸と学習設計を同時に整えることが必要です。AIリブートアカデミーでは、次の3本柱で実務定着を支援しています。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-white/80 bg-white p-4">
                <h3 className="text-sm font-semibold text-will-primary">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-growth"
            >
              アカデミーの詳細を見る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-will-primary/30 px-6 py-3 text-sm font-semibold text-will-primary transition-colors hover:border-will-primary hover:bg-white"
            >
              無料相談を予約する
            </Link>
          </div>
        </motion.section>

        <LineCtaBox tone="green" />
      </article>
    </main>
  );
}
