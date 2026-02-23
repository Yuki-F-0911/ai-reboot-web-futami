"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiRealEstateGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 不動産 活用", "不動産 AI 査定 2026", "物件探し AI", "不動産 業務効率化 AI"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "three-domains", label: "不動産AI活用の3領域" },
  { id: "consumer-use", label: "消費者向けAI査定サービス活用法" },
  { id: "agent-operations", label: "不動産会社の業務効率化AI" },
  { id: "investment-research", label: "不動産投資リサーチでのAI活用" },
  { id: "limitations", label: "精度限界と補正が必要なケース" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "学習を次のキャリアにつなげる" },
] as const;

const quickSummaryPoints = [
  "AI不動産活用は、査定・物件マッチング・書類作成の3領域で効果が出やすく、特に定型業務の時間短縮に向いています。",
  "消費者はAI査定を「価格の確定」ではなく「相場感を掴む入口」として使い、訪問査定で個別補正する流れが現実的です。",
  "不動産会社は査定書作成、物件説明文、一次問い合わせ対応から着手すると、短期間で改善指標を計測しやすくなります。",
  "投資判断では、価格予測だけでなく賃料・人口・災害・再開発データを重ねる設計が必須です。",
] as const;

const aiUsageRows = [
  {
    area: "査定",
    what: "周辺成約データと物件属性から参考価格を算出",
    output: "価格帯の初期仮説、訪問査定前の整理",
    caution: "特殊物件・データ不足エリアで誤差が広がりやすい",
  },
  {
    area: "物件マッチング",
    what: "希望条件と行動履歴をもとに候補物件を抽出",
    output: "提案候補の優先順位、内見提案の効率化",
    caution: "入力条件が曖昧だと提案精度が低下する",
  },
  {
    area: "書類作成",
    what: "査定書、説明文、提案資料の下書きを自動生成",
    output: "初稿作成時間の短縮、説明品質の平準化",
    caution: "法令・重要事項は必ず人が最終確認する",
  },
] as const;

const consumerServiceRows = [
  {
    service: "SUUMO売却査定",
    pricing: "無料",
    strength: "複数社の査定結果を比較しやすい",
    precision: "精度率の公式公開は要確認",
    fit: "売却初期の価格帯把握と会社比較",
  },
  {
    service: "LIFULL HOME'S プライスマップ",
    pricing: "無料・登録不要",
    strength: "地図ベースで参考価格を即時確認しやすい",
    precision: "算出ロジック公開、誤差率の定量公開は要確認",
    fit: "周辺相場の初期確認",
  },
  {
    service: "IESHIL",
    pricing: "[要確認: 最新料金体系]",
    strength: "精度指標（Median APE）を公開",
    precision: "23区: 11.71%（2026-02-16公表値）",
    fit: "精度情報を見ながら価格感を掴みたい人",
  },
  {
    service: "スタイルアクト系（住まいサーフィン/沖式）",
    pricing: "[要確認: 2026年時点の現行料金]",
    strength: "市況分析系データとの併用がしやすい",
    precision: "[要確認: 現行精度指標の公開有無]",
    fit: "新築/中古の市況比較を重視する人",
  },
] as const;

const consumerWorkflow = [
  "Step 1: AI査定で価格帯を把握する（1サービスだけで確定しない）",
  "Step 2: 2〜3サービスで比較し、価格レンジのズレを確認する",
  "Step 3: 価格差が大きい理由を、築年・管理状態・駅距離・方位で分解する",
  "Step 4: 訪問査定で個別事情（室内状態、修繕履歴、法規制）を補正する",
  "Step 5: 売出価格はAI値ではなく、販売戦略と成約スピードで最終決定する",
] as const;

const agentUseCaseRows = [
  {
    task: "査定書作成",
    before: "成約事例収集と資料作成で1件1〜2時間かかる",
    after: "下書きをAIで自動化し、担当者は根拠の確認に集中できる",
    metric: "作成時間、媒介獲得率、価格説明の納得度",
  },
  {
    task: "物件説明文作成",
    before: "担当者ごとに文章品質がばらつく",
    after: "訴求軸をテンプレ化し、説明文の品質を標準化できる",
    metric: "掲載準備時間、問い合わせ率、内見予約率",
  },
  {
    task: "顧客対応の一次自動化",
    before: "営業時間外の問い合わせ対応が遅れる",
    after: "一次回答を自動化し、担当者は高難度相談に集中できる",
    metric: "初回応答時間、来店化率、対応漏れ件数",
  },
] as const;

const investmentChecklist = [
  "取引価格: 成約時点の価格分布を時系列で確認する",
  "賃料相場: 想定賃料の中央値と空室期間の変化を見る",
  "人口動態: 年齢構成と転入超過の推移を確認する",
  "都市計画: 再開発・用途地域変更・交通計画を確認する",
  "災害リスク: 洪水・土砂・地震リスクを重ねて判断する",
  "出口戦略: 売却想定価格と保有コストを同時に検証する",
] as const;

const riskRows = [
  {
    caseName: "特殊性の高い物件",
    risk: "比較可能な類似事例が少なく、推定誤差が広がる",
    action: "周辺相場だけでなく現地状況を踏まえた個別補正を行う",
  },
  {
    caseName: "急変相場・金利変動局面",
    risk: "学習データが過去相場に偏り、直近変化を反映しづらい",
    action: "直近成約データの更新頻度を上げ、手動レビューを増やす",
  },
  {
    caseName: "データ欠損・入力ミス",
    risk: "専有面積、築年、管理費などの誤入力で結果が歪む",
    action: "入力チェックルールを実装し、最低2名で確認する",
  },
  {
    caseName: "法的・契約上の制約",
    risk: "再建築不可、借地権、管理規約制約をAIが過小評価する可能性",
    action: "重要事項説明と法務確認を必須プロセスとして分離する",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "不動産業務でAIを使うときに、どの業務に適用し、どの判断は人が担うかを整理できる力を磨きます。ツール依存ではなく、業務成果に直結する活用設計を重視します。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AI導入が進む現場で、自分の強みをどう再定義し、どの役割へ伸ばすかを具体化します。業務改善だけで終わらず、次のキャリア判断につなげる設計です。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "実務で起きる迷いを、同じ志の仲間との対話で解像度高く整理します。独学で止まりやすい改善サイクルを継続し、行動に落とし込みます。",
  },
] as const;

export default function AiRealEstateGuidePage({ faqItems }: AiRealEstateGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI不動産活用ガイド2026" },
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
              <CopyAsMarkdownButton title="AI不動産活用ガイド2026" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI不動産活用ガイド2026｜査定・物件探し・業務効率化・投資分析の実践ポイント
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日（確認日: 2026-02-20）</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            AI不動産活用は、価格を自動で決める技術ではなく、意思決定の前工程を速くする手段です。査定、物件マッチング、書類作成の3領域で使い分けると、個人も不動産会社も判断の質と速度を両立しやすくなります。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事では、消費者向けのAI査定サービス活用法、エージェント向け業務効率化、投資リサーチへの応用、精度限界と補正ルールまでを、2026年時点の公開情報をもとに整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {quickSummaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="three-domains"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">不動産業界でAIが使われる3領域は、査定・物件マッチング・書類作成</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            不動産AI活用の本質は、担当者の判断を置き換えることではなく、判断前の情報整理を高速化することです。価格の初期仮説、顧客条件に合う候補抽出、資料の初稿作成をAIで回すと、面談品質と提案速度の両立がしやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[720px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">領域</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">AIで行う処理</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">得られる成果</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {aiUsageRows.map((row) => (
                  <tr key={row.area} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.area}</th>
                    <td className="py-4 px-4">{row.what}</td>
                    <td className="py-4 px-4">{row.output}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            実務全体の進め方は
            <Link href="/academy/blog/ai-business-efficiency-cases" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI業務効率化事例集
            </Link>
            と
            <Link href="/academy/blog/workflow-automation-comparison" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ワークフロー自動化ツール比較
            </Link>
            を合わせると設計しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="consumer-use"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            消費者向け: AI査定サービスは「確定価格」ではなく「価格レンジ」を見る
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            SUUMOやHOME&apos;SなどのAI査定系サービスは、売却や購入検討の初期判断を速めるのに有効です。ただし、AI査定の数値は個別事情を反映しきれないため、最終判断前に訪問査定や担当者ヒアリングで補正することが必要です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">サービス</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">利用料</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">精度公開</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている用途</th>
                </tr>
              </thead>
              <tbody>
                {consumerServiceRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="py-4 px-4">{row.pricing}</td>
                    <td className="py-4 px-4">{row.strength}</td>
                    <td className="py-4 px-4">{row.precision}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="blog-h3 mt-8 text-xl font-semibold text-gray-900">失敗しにくい使い方（個人向け）</h3>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {consumerWorkflow.map((step) => (
              <li key={step} className="blog-li pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            料金・仕様・精度の確認日は 2026-02-20。サービス仕様は変更されるため、契約前に公式ページで最新情報を再確認してください。
          </p>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="agent-operations"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            不動産エージェント向け: 業務効率化AIは「定型の自動化」から始める
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            不動産会社でAI導入を進める場合、最初に効果が出やすいのは査定書、物件説明文、一次問い合わせ対応です。定型部分をAIで標準化し、担当者は顧客ヒアリングや提案設計に時間を使うと、成果指標が安定しやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">業務</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">導入前の課題</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">導入後の変化</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">計測指標</th>
                </tr>
              </thead>
              <tbody>
                {agentUseCaseRows.map((row) => (
                  <tr key={row.task} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.task}</th>
                    <td className="py-4 px-4">{row.before}</td>
                    <td className="py-4 px-4">{row.after}</td>
                    <td className="py-4 pl-4">{row.metric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            不動産営業の顧客対応設計は
            <Link href="/academy/blog/ai-customer-support-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              カスタマーサポートのAI活用
            </Link>
            も合わせて読むと、一次対応と有人対応の分界点を作りやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="investment-research"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            不動産投資リサーチでは、価格予測だけでなく「複数データの重ね合わせ」が必須
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            AIの価格予測モデルは有効ですが、単体指標で投資判断を完結させるとリスクが高まります。取引価格、賃料、人口動態、都市計画、災害リスクを重ねて、将来キャッシュフローの変動幅を前提に判断する運用が重要です。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {investmentChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            公的データの確認には、国土交通省の不動産情報ライブラリを起点にし、必要に応じて自治体公開データを追加すると、エリア分析の再現性が上がります。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            収益性評価の全体設計は
            <Link href="/academy/blog/ai-adoption-cost-roi" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI導入コストとROI
            </Link>
            の整理方法が参考になります。
          </p>
        </motion.section>

        <motion.section
          id="limitations"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            注意点: AI査定の精度限界は「物件の個別性」と「データ更新頻度」で決まる
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            AI査定の精度はモデルだけでなく、入力データの鮮度と網羅性に依存します。特に個別事情の影響が大きい不動産では、査定値を唯一の根拠にせず、補正ルールを事前に決める運用が不可欠です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">誤差が出やすいケース</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">主なリスク</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務での補正策</th>
                </tr>
              </thead>
              <tbody>
                {riskRows.map((row) => (
                  <tr key={row.caseName} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.caseName}</th>
                    <td className="py-4 px-4">{row.risk}</td>
                    <td className="py-4 pl-4">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            研究例では機械学習モデルの高精度化が進む一方、実サービスごとの精度開示は統一されていません。未開示項目は `[要確認]` として扱い、過信を避ける前提で運用してください。
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-2xl border border-will-primary/20 bg-gradient-to-br from-white via-will-lighter/30 to-will-lighter p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-will-primary">AI REBOOT ACADEMY</p>
          <h2 className="blog-h2 mt-3 scroll-mt-28 text-2xl font-bold text-gray-900">不動産AI活用の判断軸と、次のキャリア設計を同時に進める</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIを導入しても成果が安定しない場合、多くは「どこに適用し、どこを人が担うか」の判断軸が曖昧です。AIリブートアカデミーでは、生成AI活用力だけでなく、自己理解・キャリアデザイン、仲間と共に学ぶ環境を一体で設計します。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-xl border border-white/70 bg-white/80 p-4">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-growth"
            >
              アカデミー詳細を見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              無料セミナーを確認する
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}

