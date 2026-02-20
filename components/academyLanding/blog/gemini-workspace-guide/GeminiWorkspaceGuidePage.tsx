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

type GeminiWorkspaceGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "毎週1本、実務で使える生成AI活用のヒントとAIニュースをLINEで配信しています（無料）。読むだけで、AI活用の「知っておくべきこと」が自然と身につきます。受講前の不安や、自分に合うか確認したい方は、個別LINE相談もできます。";

const keywordTags = ["Gemini for Google Workspace 使い方", "Google Workspace AI 2026", "Gemini Gmail 活用", "Google Docs AI"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "plan-diff", label: "Q1. Standard/Plus/Enterpriseの違い" },
  { id: "workspace-use-cases", label: "Q2. Gmail・Docs・Sheets・Meet活用" },
  { id: "cost-roi", label: "Q3. 導入コストと費用対効果" },
  { id: "copilot-compare", label: "Q4. Copilotとの比較" },
  { id: "japanese-performance", label: "Q5. 日本語環境での実務パフォーマンス" },
  { id: "rollout", label: "Q6. 30日導入ステップ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩" },
] as const;

const summaryPoints = [
  "Gemini for Google Workspaceは、Google Workspace運用を前提にした法人向けAI導入の実行速度を上げやすい構成です。",
  "料金判断はプラン単価だけでは不十分です。管理設定、評価工数、運用ルール整備まで含めた総コストで比較します。",
  "日本語品質はタスク差が大きいため、メール・文書・表計算の3タスクでA/B評価してから本格展開する方が失敗しにくくなります。",
] as const;

const planRows = [
  {
    plan: "Business Standard",
    pricing: "$14/ユーザー/月（年契約）",
    fit: "まず全社の共通業務でAI活用を始めたい企業",
    caution: "高度な統制要件がある場合は追加確認が必要",
  },
  {
    plan: "Business Plus",
    pricing: "$22/ユーザー/月（年契約）",
    fit: "運用管理とセキュリティ要件を強めたい企業",
    caution: "Standardとの差分は運用要件に合わせて評価する",
  },
  {
    plan: "Enterprise Standard / Plus",
    pricing: "要問い合わせ",
    fit: "大規模導入、厳格な管理要件、統制設計を重視する企業",
    caution: "見積時にデータ管理要件を明文化する",
  },
] as const;

const workspaceRows = [
  {
    app: "Gmail",
    useCase: "返信下書き、長文スレッド要約、トーン調整",
    kpi: "返信作成時間、修正回数、誤送信防止率",
    firstStep: "定型返信が多いチームで1週間試験運用",
  },
  {
    app: "Docs",
    useCase: "議事録要約、企画書ドラフト、文章リライト",
    kpi: "文書作成時間、レビュー往復回数",
    firstStep: "週次会議議事録で要約テンプレを固定",
  },
  {
    app: "Sheets",
    useCase: "データ要約、関数提案、分析観点の下書き",
    kpi: "分析開始までの時間、手戻り件数",
    firstStep: "月次レポート作成業務で限定導入",
  },
  {
    app: "Meet",
    useCase: "会議メモ整理、アクション抽出、共有文作成",
    kpi: "会議後の共有速度、タスク抜け漏れ率",
    firstStep: "定例会議で議事メモ形式を統一",
  },
] as const;

const costRows = [
  {
    item: "Business Standard",
    usd: "$14",
    jpy: "約2,094円",
    note: "年契約ベース",
  },
  {
    item: "Business Plus",
    usd: "$22",
    jpy: "約3,290円",
    note: "年契約ベース",
  },
  {
    item: "差額（Plus-Standard）",
    usd: "$8",
    jpy: "約1,196円",
    note: "1ユーザー/月",
  },
] as const;

const copilotRows = [
  {
    axis: "主な前提環境",
    gemini: "Google Workspace中心の業務基盤",
    copilot: "Microsoft 365中心の業務基盤",
    decision: "既存基盤への定着コストが低い方を選ぶ",
  },
  {
    axis: "料金の見方",
    gemini: "Workspaceプラン内のGemini込み価格で評価",
    copilot: "Copilot追加費用 + ベースM365契約で評価",
    decision: "1ユーザー総額で比較する",
  },
  {
    axis: "導入初期のつまずき",
    gemini: "管理者設定と利用対象の整理不足",
    copilot: "ライセンス条件と運用ポリシーの解釈差",
    decision: "対象部署・対象業務を先に固定する",
  },
] as const;

const japaneseQualityChecks = [
  {
    task: "メール下書き",
    criteria: "敬語の自然さ、意図の正確さ、最終修正文字数",
    passLine: "修正回数が現行比20%以上削減",
  },
  {
    task: "議事録要約",
    criteria: "決定事項/未決事項/次アクションの分離精度",
    passLine: "抜け漏れ率5%未満",
  },
  {
    task: "表計算支援",
    criteria: "関数提案の正確性、説明の分かりやすさ",
    passLine: "再計算ミス0件を2週継続",
  },
] as const;

const rolloutSteps = [
  {
    phase: "Day 1-7",
    focus: "対象業務を3つに限定し、評価指標を固定",
    output: "検証タスク一覧と評価表を作成",
  },
  {
    phase: "Day 8-20",
    focus: "Gmail/Docs/Sheets/Meetで実務A/Bテスト",
    output: "工数削減・品質・修正回数の実測データを取得",
  },
  {
    phase: "Day 21-30",
    focus: "費用対効果と運用ルールを確定し展開判断",
    output: "導入判断メモ（継続/拡張/見送り）を稟議化",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "ツール名に依存せず、業務課題に対して適切なAIを選び成果に接続する判断力を体系化します。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを鏡にして自分の強みや価値観を言語化し、次のキャリアの選択肢を設計します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間と対話しながら、実務への定着を継続できる学習環境を作ります。",
  },
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass = tone === "green" ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6" : "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";

  return (
    <motion.section
      className={boxClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h3 className="text-base font-semibold text-gray-900">AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）</h3>
      <p className="mt-2 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </motion.section>
  );
}

export default function GeminiWorkspaceGuidePage({ faqItems }: GeminiWorkspaceGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Gemini for Google Workspace使い方" },
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
              <span key={tag} className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            Gemini for Google Workspace使い方ガイド｜料金・活用・Copilot比較【2026年版】
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-20">2026年2月20日</time> 更新
            </p>
            <CopyAsMarkdownButton title="Gemini for Google Workspace使い方ガイド｜料金・活用・Copilot比較【2026年版】" sourceSelector="[data-blog-article-body]" />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Gemini for Google Workspaceの導入相談で多いのは、「結局どのプランを選ぶべきか」「現場で本当に時短できるか」「Copilotと比べて何が違うか」の3点です。
            本記事では、<span className="font-semibold text-gray-900">Business Standard/Plus/Enterpriseの違い、Gmail・Docs・Sheets・Meetの活用、費用対効果の判断基準</span>
            を法人向けに整理します。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            ※2026年2月20日時点。料金・仕様・提供地域は更新される可能性があります。
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

        <motion.section
          id="plan-diff"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q1. Gemini for Google Workspaceとは？Business Standard/Plus/Enterpriseの違い</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            結論として、最初の判断軸は「価格差」より「どこまで統制運用を求めるか」です。Business Standardで早期導入し、監査・権限・契約要件が増える段階でPlus/Enterpriseを検討する流れが実務的です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">プラン</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">価格目安（USD）</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">向いている企業</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">導入時の注意</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {planRows.map((row) => (
                  <tr key={row.plan}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.plan}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.pricing}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.fit}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            機能詳細は管理者ヘルプで定期更新されるため、導入前に
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              社内ガイドライン雛形
            </Link>
            と合わせて、対象部署・対象データを先に定義しておくと運用が安定します。
          </p>
        </motion.section>

        <motion.section
          id="workspace-use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q2. Gmail・Docs・Sheets・Meetでの具体的なAI活用</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            使い方のコツは、機能を幅広く触ることではなく、部門ごとに1つの反復業務へ固定することです。Gmailは返信、Docsは要約、Sheetsは分析補助、Meetは会議後処理に絞ると短期間で評価できます。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">アプリ</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">主な活用シーン</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">KPI例</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">最初の実行手順</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {workspaceRows.map((row) => (
                  <tr key={row.app}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.app}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.useCase}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.kpi}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.firstStep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            まずは
            <Link href="/academy/blog/ai-adoption-cost-roi" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AI導入の費用相場とROI
            </Link>
            の考え方に沿って、1業務1KPIで効果を見える化すると、全社展開の判断がしやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="cost-roi"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q3. 導入コストと費用対効果の判断基準（USD・円）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            費用対効果は「1ユーザー単価」ではなく、対象人数、削減時間、レビュー工数を含めた総額で判断します。円換算は比較の目安で、契約判断は請求通貨で確定してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">項目</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">USD</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">円換算目安</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">補足</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {costRows.map((row) => (
                  <tr key={row.item}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.item}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.usd}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.jpy}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">換算前提: 1 USD = 149.57 JPY（2026-02-20）。実請求は契約条件で変動。</p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-semibold text-gray-900">ROIの簡易式（まずこれだけ）</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">ROI（%）=（削減工数の人件費換算 + 売上寄与 - 導入総コスト）÷ 導入総コスト × 100</p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              例: 10名チームで1人あたり月4時間削減、時給3,000円なら削減効果は月120,000円。ここにライセンス費と運用費を引いて判断します。
            </p>
          </div>
        </motion.section>

        <motion.section
          id="copilot-compare"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q4. Microsoft 365 Copilotとの比較</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            比較軸は性能の優劣より、既存業務基盤に対する運用負荷です。Google Workspace中心かMicrosoft 365中心かで、教育コストとポリシー設計工数が大きく変わります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">比較軸</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Gemini for Workspace</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Copilot for Microsoft 365</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">判断ポイント</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {copilotRows.map((row) => (
                  <tr key={row.axis}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.axis}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.gemini}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.copilot}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            他ツール比較を広く確認したい場合は、
            <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT実践テクニック
            </Link>
            や
            <Link href="/academy/blog/gemini-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Gemini入門ガイド
            </Link>
            を併読すると選定軸を揃えやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="japanese-performance"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q5. 日本語環境での実際のパフォーマンス</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            日本語品質は「使える/使えない」の二択ではなく、業務タイプで差が出ます。特に敬語の調整、文脈保持、数値の扱いで差分が出るため、運用前に評価テンプレートを固定してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">評価タスク</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">評価基準</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">合格ライン</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {japaneseQualityChecks.map((row) => (
                  <tr key={row.task}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.task}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.criteria}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.passLine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            データ保存地域は公開情報では米国/欧州選択が中心で、日本固定要件は
            <span className="font-semibold text-gray-900"> [要確認: 個別契約条件]</span>として扱うのが安全です。法務・情報システムと共同で契約前に確認してください。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q6. 中小企業が30日で導入判断する手順</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            導入成否は、評価指標の先出しでほぼ決まります。30日間を3フェーズに分け、現場タスクで比較検証し、最終週に継続判断まで進めます。
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
            ツール選定だけで業務成果は安定しません。AI活用を継続可能にするには、導入判断軸・学習設計・実務レビューの仕組みを同時に整える必要があります。AIリブートアカデミーでは、次の3本柱で実務定着を支援しています。
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
            <Link href="/academy" className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-growth">
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
