"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI コスト", "企業AI 予算", "AI ROI", "コストガバナンス 生成AI", "Azure OpenAI コスト"] as const;

const tocItems = [
  { id: "answer-box", label: "アンサーボックス" },
  { id: "market-reality", label: "企業の生成AI投資の実態" },
  { id: "cost-structure", label: "コスト構造の内訳" },
  { id: "optimization-actions", label: "コスト最適化の5施策" },
  { id: "roi-framework", label: "ROI計測フレームワーク" },
  { id: "approval-points", label: "稟議書のキーポイント" },
  { id: "vendor-comparison", label: "ベンダー比較表" },
  { id: "faq", label: "FAQ" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const marketRealityRows = [
  {
    period: "2025年上期",
    trend: "部門単位のPoCが急増し、個別最適のツール導入が拡大",
    impact: "費用が分散し、全社で合計コストを把握しにくい状態が発生",
  },
  {
    period: "2025年下期",
    trend: "PoCから本番運用へ移行する企業が増加",
    impact: "API費用に加えて運用保守・教育コストが顕在化",
  },
  {
    period: "2026年初",
    trend: "CFO・情シス主導で「投資対効果を前提にした運用」が標準化",
    impact: "予算設計は「固定費+変動費+人件費」で設計する流れが強まる",
  },
] as const;

const costStructureRows = [
  {
    category: "API費用",
    ratio: "25〜45%",
    details: "推論呼び出し、埋め込み、再試行、ログ分析コスト",
    risk: "利用上限未設定だと部署横断で急増",
  },
  {
    category: "ライセンス費用",
    ratio: "15〜30%",
    details: "ChatGPT Enterprise/Team、Copilot、周辺SaaS",
    risk: "未活用アカウントの放置で固定費化",
  },
  {
    category: "運用・統制費用",
    ratio: "10〜20%",
    details: "ガイドライン、監査ログ、権限管理、セキュリティ対応",
    risk: "後付けで設計すると改修コストが膨張",
  },
  {
    category: "人件費（業務設計/教育）",
    ratio: "20〜35%",
    details: "業務再設計、プロンプト整備、現場教育、定着支援",
    risk: "教育不足だと利用率が伸びずROIが悪化",
  },
] as const;

const optimizationActions = [
  {
    title: "1. 予算を「共通基盤費」と「ユースケース費」に分離する",
    body: "全社共通で必要な基盤費（監査・統制・共通ライセンス）と、部門ごとのユースケース費を分けることで、止めるべき費用と伸ばすべき投資を切り分けられます。",
    metric: "KPI: 基盤費率、ユースケース別ROI",
  },
  {
    title: "2. API利用に段階的な上限と承認フローを入れる",
    body: "月次クォータ、利用単価上限、異常増加アラートを先に設定します。一定閾値を超える利用だけ承認制にすると、開発速度を落とさずコスト急騰を防げます。",
    metric: "KPI: 予算超過件数、アラート対応時間",
  },
  {
    title: "3. モデルルーティングで高単価モデルの利用を限定する",
    body: "定型タスクは軽量モデル、高難度タスクだけ上位モデルへ振り分けます。全件を高性能モデルで回す運用をやめるだけで、費用効率が改善します。",
    metric: "KPI: 1リクエスト単価、品質閾値達成率",
  },
  {
    title: "4. 未使用ライセンスと重複ツールを月次で整理する",
    body: "アクティブ率が低いライセンスの停止と、重複する生成AIツールの統合を実施します。固定費は削減効果が見えやすく、四半期単位で大きな改善につながります。",
    metric: "KPI: ライセンス稼働率、固定費削減額",
  },
  {
    title: "5. 現場の工数削減を金額換算し、翌月予算へ再配分する",
    body: "削減時間を人件費換算し、効果が高いユースケースへ再投資します。コスト削減を目的化せず、費用対効果を高める運用に切り替えることが重要です。",
    metric: "KPI: 削減工数、再投資額、回収期間",
  },
] as const;

const roiFrameworkRows = [
  {
    step: "Step 1",
    title: "対象業務を限定する",
    detail: "営業資料作成、議事録要約、問い合わせ一次回答など、成果が測定しやすい業務から開始",
  },
  {
    step: "Step 2",
    title: "Before/Afterを定量化する",
    detail: "作業時間、処理件数、差し戻し率、再編集率を導入前後で計測",
  },
  {
    step: "Step 3",
    title: "費用を固定費/変動費/人件費で分解する",
    detail: "ライセンス・API・運用工数を同じ期間軸で比較可能にする",
  },
  {
    step: "Step 4",
    title: "月次で投資継続判断する",
    detail: "ROIと品質KPIをセットで確認し、継続・縮小・再設計を判断する",
  },
] as const;

const approvalPointRows = [
  "現状の業務課題と、生成AI導入で解消する対象を1ページで明示する",
  "導入前コストと導入後コスト（固定費/変動費/人件費）を同じフォーマットで比較する",
  "ROIの計算式と前提条件（処理件数、時給、利用単価、回収期間）を明記する",
  "セキュリティ・法務・監査の責任分界点を定義し、運用責任者を明確にする",
  "スモールスタートの範囲（対象部門、期間、停止条件）を決めてリスクを抑える",
  "投資しない場合の機会損失（対応遅延、採用競争力、業務効率）を併記する",
] as const;

const vendorRows = [
  {
    vendor: "Azure OpenAI",
    strengths: "Microsoft環境との統合、Entra ID連携、企業向けガバナンス整備がしやすい",
    caution: "モデル選択とリージョン設計で運用コストに差が出る",
    bestFor: "M365やAzure基盤を既に利用している企業",
  },
  {
    vendor: "AWS Bedrock",
    strengths: "複数モデルの選択肢、IAM/CloudWatch連携、既存AWS運用への組み込みが容易",
    caution: "ユースケースごとにモデル評価をしないと過剰コスト化しやすい",
    bestFor: "AWS中心で基幹系やデータ基盤を運用している企業",
  },
  {
    vendor: "Google Vertex AI",
    strengths: "Gemini活用、データ分析基盤との接続、MLOps機能との連携",
    caution: "データ所在・運用体制を先に決めないとPoC止まりになりやすい",
    bestFor: "BigQuery/Google Workspaceと一体で運用したい企業",
  },
] as const;

const summaryPoints = [
  "生成AIコスト管理の出発点は、API・ライセンス・人件費を同じ台帳で可視化すること",
  "最適化は「削る」ではなく「効果の高いユースケースへ再配分する」発想で進めること",
  "ROIは業務単位で測り、品質KPIとセットで月次レビューすること",
  "稟議では回収期間、責任分界点、停止条件まで明示すると意思決定が早くなること",
] as const;

export default function EnterpriseAiCostGovernance2026Page({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIコストガバナンス完全ガイド2026" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="生成AIのコストガバナンス完全ガイド2026：CFO・情シスが押さえるべきコスト最適化と予算設計"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIのコストガバナンス完全ガイド2026：CFO・情シスが押さえるべきコスト最適化と予算設計
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AIは「試す段階」から「継続投資で成果を出す段階」に入りました。現場の活用が進むほど、API費用・ライセンス・運用人件費は複雑化し、
            コストの全体像が見えにくくなります。CFOと情シスが共同でルールを設計しないと、費用だけ増えてROIが見えない状態に陥ります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、2025-2026年の企業動向を踏まえて、コスト構造の分解、最適化施策、ROI計測、稟議書の要点を実務向けに整理します。
            確認日: 2026-02-22。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          あわせて読むなら
          <Link href="/academy/blog/ai-adoption-cost-roi" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI導入の費用相場とROI
          </Link>
          ・
          <Link href="/academy/blog/llm-cost-optimization-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            LLM APIコスト最適化ガイド
          </Link>
          ・
          <Link href="/academy/blog/corporate-ai-adoption-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            法人向け生成AI導入ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-training-kpi" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI研修のKPI設計
          </Link>
          も参考になります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-xl border border-amber-200 bg-amber-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">アンサーボックス：生成AIコスト管理の要点を即答</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <section className="rounded-lg border border-amber-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-amber-700">この記事で分かること</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">2025-2026年に企業の生成AI投資がどこで膨らんでいるか</li>
                <li className="pl-1 marker:text-gray-500">API・ライセンス・運用・人件費を分解する実務的な方法</li>
                <li className="pl-1 marker:text-gray-500">ROI計測と稟議書で使える判断軸と記載ポイント</li>
              </ul>
            </section>
            <section className="rounded-lg border border-amber-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-amber-700">この記事の結論</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">コスト最適化の起点は、費用可視化と利用ルール設計の同時実行</li>
                <li className="pl-1 marker:text-gray-500">削減だけでなく、効果が高い業務への再投資まで設計することが重要</li>
                <li className="pl-1 marker:text-gray-500">CFO・情シス・現場の三者で月次レビューを回すと予算の精度が上がる</li>
              </ul>
            </section>
          </div>
        </motion.section>

        <motion.section
          id="market-reality"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">企業の生成AI投資の実態（2025-2026年）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2025年は部門ごとのPoCが急増し、2026年は全社運用に向けた予算統制が進むフェーズに入っています。投資の主語が現場から経営へ移ることで、
            「使うかどうか」から「どの配分で使うか」へ論点が変化しています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">期間</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">投資トレンド</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">コスト管理への影響</th>
                </tr>
              </thead>
              <tbody>
                {marketRealityRows.map((row) => (
                  <tr key={row.period} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900 whitespace-nowrap">{row.period}</th>
                    <td className="py-4 px-4">{row.trend}</td>
                    <td className="py-4 pl-4">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="cost-structure"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">コスト構造の内訳（API/ライセンス/運用/人件費）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            コストガバナンスで最も重要なのは、費用を1つの総額で見るのではなく、性質ごとに分解して管理することです。特にAPI費用と人件費は連動して動くため、
            どちらか片方だけを削ると成果が落ちやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">区分</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">目安構成比</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">管理上のリスク</th>
                </tr>
              </thead>
              <tbody>
                {costStructureRows.map((row) => (
                  <tr key={row.category} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.category}</th>
                    <td className="px-4 py-4">{row.ratio}</td>
                    <td className="px-4 py-4">{row.details}</td>
                    <td className="py-4 pl-4">{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            注記: 構成比は業種・活用範囲・利用人数で変動します。自社の実績値で月次更新する前提で運用してください。
          </p>
        </motion.section>

        <motion.section
          id="optimization-actions"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">コスト最適化の5つの施策</h2>
          <div className="mt-6 space-y-4">
            {optimizationActions.map((action) => (
              <section key={action.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">{action.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{action.body}</p>
                <p className="mt-3 text-xs font-semibold tracking-wide text-will-primary">{action.metric}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="roi-framework"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ROI計測フレームワーク</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ROIは次の式を起点に、ユースケース単位で運用します。全社平均だけで見ると、成果の高い業務と低い業務が混ざり、意思決定が遅くなります。
          </p>
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-semibold tracking-wide text-gray-900">基本式</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              ROI（%） = (削減コスト + 追加売上 - 導入総コスト) ÷ 導入総コスト × 100
            </p>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ステップ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">実施内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">運用ポイント</th>
                </tr>
              </thead>
              <tbody>
                {roiFrameworkRows.map((row) => (
                  <tr key={row.step} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900 whitespace-nowrap">
                      {row.step}
                      <span className="ml-2 text-gray-700">{row.title}</span>
                    </th>
                    <td className="py-4 px-4">{row.detail}</td>
                    <td className="py-4 pl-4">月次レビューで「継続・停止・再設計」を判断</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="approval-points"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">稟議書で押さえるべきポイント</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            稟議では「導入したい理由」だけでは不十分です。費用対効果、統制、責任範囲、停止条件まで先に設計することで、意思決定の精度が上がります。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {approvalPointRows.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="vendor-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ベンダー比較表（Azure OpenAI / AWS Bedrock / Google Vertex AI）</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[960px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ベンダー</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている企業</th>
                </tr>
              </thead>
              <tbody>
                {vendorRows.map((row) => (
                  <tr key={row.vendor} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900 whitespace-nowrap">{row.vendor}</th>
                    <td className="px-4 py-4">{row.strengths}</td>
                    <td className="px-4 py-4">{row.caution}</td>
                    <td className="py-4 pl-4">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            選定時は単価比較だけでなく、既存クラウド基盤・監査要件・運用体制との適合性まで評価してください。
          </p>
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">FAQ（よくある質問）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item, index) => (
              <details key={item.question} className="group rounded-xl border border-gray-200 bg-white p-5" open={index === 0}>
                <summary className="cursor-pointer list-none text-base font-semibold text-gray-900">
                  <span>{item.question}</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="summary"
          className="mt-14 rounded-xl border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力を実務で使える形に落とし込みながら、自己理解・キャリアデザインを深め、
            仲間と共に継続学習できる環境を提供しています。コスト削減だけで終わらず、組織成果につながる運用づくりを支援します。
          </p>

          <div className="mt-8">
            <MidArticleCtaBox slug="enterprise-ai-cost-governance-2026" />
          </div>

          <LineCtaBox
            className="mt-6 rounded-lg border border-green-200 bg-green-50 p-6"
            title="生成AIの導入コスト・補助金について相談する"
            description="生成AI投資のROI試算や経産省リスキリング補助金の活用方法について、LINEで無料相談を承っています。AIリブートアカデミーでは法人・個人の研修プログラムも提供しています。"
            buttonLabel="LINEで無料相談する（登録無料）"
          />
        </motion.section>

        <motion.section
          id="related-links"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">関連リンク</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-adoption-cost-roi" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AI導入の費用相場とROIの考え方
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/llm-cost-optimization-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                LLM APIコスト最適化ガイド
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/corporate-ai-training-internal" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                社内向け生成AI研修の設計ガイド
              </Link>
            </li>
          </ul>
        </motion.section>
      </article>
    </main>
  );
}
