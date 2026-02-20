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

type AiSideBusiness2026PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";
const infoCheckedDate = "2026-02-20";

const keywordTags = ["AI副業 2026 稼ぎ方", "AI副業 おすすめ 月5万", "AIエージェント 副業", "在宅副業 AI 初心者"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "market-shift", label: "2026年の市場変化" },
  { id: "fields", label: "初心者向け3分野" },
  { id: "roadmap", label: "6か月ロードマップ" },
  { id: "pricing", label: "単価と収益の作り方" },
  { id: "tools", label: "ツール使い分け" },
  { id: "tax", label: "税務と申告の注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩" },
] as const;

const summaryPoints = [
  "2026年のAI副業は、生成スピードだけでなく要件定義と検収設計の質で受注率が変わります。",
  "初心者は「記事生成代行」「SNS運用代行」「データ分析レポート代行」の3分野に絞ると再現性を作りやすくなります。",
  "最初の目標は高単価ではなく、納品フローを固定して月1〜3万円を安定化させることです。",
  "税務は「所得税の確定申告」と「住民税申告」を分けて確認し、契約前に就業規則も確認します。",
] as const;

const marketRows = [
  {
    axis: "案件評価",
    oldStyle: "AIを使うかどうか",
    current: "目的達成できる成果物か",
    action: "要件定義テンプレを先に提示する",
  },
  {
    axis: "差別化",
    oldStyle: "ツール知識の多さ",
    current: "検収しやすい納品形式",
    action: "チェック項目を提案書に含める",
  },
  {
    axis: "継続契約",
    oldStyle: "単発依頼中心",
    current: "改善提案込みの月次運用",
    action: "毎月の改善レポートを標準化する",
  },
] as const;

const fieldRows = [
  {
    field: "記事生成代行",
    task: "構成案、下書き、リライト、入稿補助",
    startingPrice: "1本 5,000〜15,000円",
    firstStep: "1ジャンルに絞って3本のサンプルを作る",
  },
  {
    field: "SNS運用代行",
    task: "投稿企画、原稿作成、週次分析",
    startingPrice: "月 20,000〜60,000円",
    firstStep: "投稿フォーマットを固定し、KPIを3指標に絞る",
  },
  {
    field: "データ分析レポート代行",
    task: "データ整理、要約、示唆抽出",
    startingPrice: "1案件 30,000〜80,000円",
    firstStep: "分析テンプレと説明資料をセットで準備する",
  },
] as const;

const roadmapSteps = [
  {
    phase: "0〜1か月",
    focus: "1分野を決め、サンプル納品物を3件作る",
    output: "ポートフォリオ、提案テンプレ、検収チェック表",
  },
  {
    phase: "2〜3か月",
    focus: "単発案件を2〜4件こなし、作業手順を固定化する",
    output: "見積テンプレ、工数ログ、再利用プロンプト",
  },
  {
    phase: "4〜6か月",
    focus: "継続案件を1〜2件獲得し、改善提案を月次化する",
    output: "月次レポート、改善提案フォーマット、契約更新率",
  },
] as const;

const monthlyPatternRows = [
  {
    pattern: "パターンA（文章中心）",
    combo: "記事代行 2本 + SNS原稿 8本",
    monthly: "約50,000〜70,000円",
    note: "作業テンプレ化が進むと工数が安定しやすい",
  },
  {
    pattern: "パターンB（運用中心）",
    combo: "SNS運用1社 + 分析レポート1件",
    monthly: "約60,000〜120,000円",
    note: "継続契約を取りやすい構成",
  },
  {
    pattern: "パターンC（分析中心）",
    combo: "分析レポート2件 + 文章校正1件",
    monthly: "約70,000〜140,000円",
    note: "分析力が必要だが単価は上げやすい",
  },
] as const;

const toolRows = [
  {
    tool: "ChatGPT",
    strength: "構造化出力、反復修正、下書き速度",
    caution: "事実確認と一次情報の照合を必須化する",
  },
  {
    tool: "Claude",
    strength: "長文推敲、トーン統一、要点整理",
    caution: "専門用語と数値は再検証前提で運用する",
  },
  {
    tool: "Dify",
    strength: "定型フローの自動化、社内利用向け整備",
    caution: "例外処理と責任範囲を契約前に明確化する",
  },
  {
    tool: "n8n",
    strength: "複数サービス連携の自動化",
    caution: "認証情報管理と障害時復旧手順を先に作る",
  },
] as const;

const taxPoints = [
  "給与所得者の副業では、所得税の確定申告が不要でも住民税申告が必要な場合があります。",
  "副業収入の記録は「売上」「経費」「契約書」「納品証跡」を月次で保管します。",
  "会社員は副業可否、競業避止、情報持ち出し制限を受注前に確認します。",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "業務課題に対して適切なAIを選び、成果へ接続する判断力を整理します。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "副業経験を通じて自分の強みを言語化し、中長期のキャリア設計へつなげます。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "実践レビューと対話を通じて改善を継続し、再現性のある成長を作ります。",
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
      <p className={titleClass}>AIリブート通信</p>
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

export default function AiSideBusiness2026Page({ faqItems }: AiSideBusiness2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI副業の稼ぎ方2026" },
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
            AI副業の稼ぎ方2026｜初心者が月5万円を目指す3分野と6か月ロードマップ
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-20">2026年2月20日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="AI副業の稼ぎ方2026｜初心者が月5万円を目指す3分野と6か月ロードマップ"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI副業は、生成速度だけで成果が決まる段階を過ぎています。2026年時点で重視されるのは、目的に合わせた要件定義、納品品質の再現性、改善提案の継続性です。本記事では、初心者が月5万円を目指すために必要な分野選定、収益化ロードマップ、ツール使い分け、税務の最低限ルールを整理します。
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
          <p className="mt-4 text-xs text-blue-800">確認日: {infoCheckedDate}</p>
        </motion.section>

        <motion.section
          id="market-shift"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">2026年のAI副業は「要件定義と検収設計」で差が出る</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            発注者の評価軸は「AIを使っているか」ではなく「目的に合う成果物を安定して出せるか」に移っています。提案時に検収条件まで示せるかどうかで、受注率と継続率に差が出ます。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">比較軸</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">2025年まで</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">2026年の傾向</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">実務アクション</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {marketRows.map((row) => (
                  <tr key={row.axis}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.axis}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.oldStyle}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.current}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="fields"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">初心者が最初に取り組むべき3分野</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            最初から分野を広げると学習コストが増えます。1分野に絞って納品フローを作り、同じ型で受注できる状態を先に作ると収益化しやすくなります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">分野</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">主な業務</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">初期単価の目安</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">最初の一手</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {fieldRows.map((row) => (
                  <tr key={row.field}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.field}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.task}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.startingPrice}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.firstStep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="roadmap"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">0〜6か月の収益化ロードマップ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {roadmapSteps.map((step) => (
              <section key={step.phase} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">{step.phase}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.focus}</p>
                <p className="mt-2 text-xs leading-6 text-gray-500">成果物: {step.output}</p>
              </section>
            ))}
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">月5万円を作る案件組み合わせ例</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">パターン</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">案件構成</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">月収目安</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">補足</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {monthlyPatternRows.map((row) => (
                  <tr key={row.pattern}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.pattern}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.combo}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.monthly}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="tools"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ツール選定の実務基準（ChatGPT・Claude・Dify・n8n）</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">ツール</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">向く用途</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">運用上の注意</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {toolRows.map((row) => (
                  <tr key={row.tool}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.tool}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.strength}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            関連記事:
            <Link href="/academy/blog/ai-freelance-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIフリーランス仕事ガイド
            </Link>
            ・
            <Link href="/academy/blog/freelancer-ai-checklist" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              フリーランス向けAIチェックリスト
            </Link>
            ・
            <Link href="/academy/blog/ai-content-sns-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIコンテンツ/SNS運用ガイド
            </Link>
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="tax"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">税務と確定申告で最初に押さえるポイント</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {taxPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            税務ルールは個別条件で変わるため、最終判断は税理士または自治体窓口で確認してください。
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

        <LineCtaBox tone="green" />

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
            副業で成果を継続させるには、ツールの操作知識だけでなく、課題設定と改善の仕組みを持つことが重要です。AIリブートアカデミーでは、次の3本柱を軸に、実務アウトプットとキャリア設計を一体で支援しています。
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
      </article>
    </main>
  );
}

