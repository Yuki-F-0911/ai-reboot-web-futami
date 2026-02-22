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

type AiPmToolsGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI プロジェクト管理 ツール", "Asana AI 2026", "Linear AI", "Jira AI 活用", "PM ツール 比較"] as const;

const tocItems = [
  { id: "conclusion", label: "結論: まず何で選ぶか" },
  { id: "trends", label: "2026年トレンド" },
  { id: "comparison", label: "4ツール比較表" },
  { id: "automation", label: "PM業務の自動化領域" },
  { id: "selection", label: "スタートアップ vs 大企業" },
  { id: "adoption", label: "導入定着の進め方" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
  { id: "academy-cta", label: "アカデミーの学び方" },
  { id: "cta", label: "LINEで継続学習する" },
] as const;

const comparisonRows = [
  {
    tool: "Asana AI",
    plan: "Starter/Advanced/Enterprise+（AI Studioは階層別）",
    price: "Starter $10.99〜、Advanced $24.99〜、AI Studio Plus $135/アカウント/月",
    strengths: "スマートステータス、要約、リスクレポートなど部門横断PMに強い",
    caution: "AI利用量が増えるとクレジット設計が必要。運用ルール未整備だと定着しにくい",
    fit: "複数部門の案件を一元管理したい法人",
  },
  {
    tool: "Linear",
    plan: "Basic/Business/Enterprise（Triage IntelligenceはBusiness以上）",
    price: "Basic $8〜、Business $16〜（ユーザー/月・年払い）",
    strengths: "課題の振り分け自動化、開発チーム向けの高速運用、UIの操作負荷が低い",
    caution: "非開発部門の運用には情報設計の調整が必要",
    fit: "スタートアップやプロダクト開発チーム中心の組織",
  },
  {
    tool: "Notion Projects + Notion AI",
    plan: "Business/Enterpriseで本格AI活用（Free/Plusは試用中心）",
    price: "Plus $10〜、Business $15〜（ユーザー/月・年払い）",
    strengths: "ドキュメントとタスクの一体管理、要約・タグ付け・DB自動入力で運用を標準化しやすい",
    caution: "高度なワークフロー制御は専用PMツール併用が必要な場合がある",
    fit: "仕様書・議事録・プロジェクト管理を一元化したい組織",
  },
  {
    tool: "Jira AI（Atlassian Intelligence / Rovo）",
    plan: "Standard/Premium/Enterprise（クレジット上限管理あり）",
    price: "Standard $7.91〜、Premium $14.54〜（ユーザー/月・年払い）",
    strengths: "課題要約、関連課題探索、依存関係把握で開発PMの判断速度を上げやすい",
    caution: "クレジット管理と権限設計を先に決めないと運用が不安定になる",
    fit: "開発案件が多く、監査・権限管理を重視する法人",
  },
] as const;

const automationRows = [
  {
    domain: "優先順位付け",
    asana: "スマートチャットと要約を使い、案件の重要度整理を短時間化",
    linear: "Triage Intelligenceで担当・ラベル・プロジェクト候補を推奨",
    notion: "AI Keywords/Autofillで案件分類を自動化",
    jira: "関連課題・依存関係探索で優先順位判断を補助",
  },
  {
    domain: "進捗予測・可視化",
    asana: "スマートステータスで進捗要約、共有負荷を削減",
    linear: "Insightsで遅延傾向や処理速度を確認",
    notion: "AI Summaryで週次進捗を要約し、更新漏れを減らす",
    jira: "コメント要約・課題要約で状況把握を高速化",
  },
  {
    domain: "リスク検出",
    asana: "AIリスクレポートで遅延・ブロッカー候補を早期把握",
    linear: "振り分け漏れや担当偏在をtriage設計で検知しやすい",
    notion: "依存情報をDBで構造化し、AIで未整理項目を抽出",
    jira: "依存関係の探索・類似課題参照で障害パターンを先読み",
  },
] as const;

const startupVsEnterpriseRows = [
  {
    condition: "スタートアップ（5〜50名）",
    key: "初期設定を軽く、週次運用を高速に回せるか",
    recommended: "Linear中心、またはAsana Starterで最小運用",
    antiPattern: "いきなり全社統一ルールを作って運用が止まる",
  },
  {
    condition: "成長企業（50〜300名）",
    key: "開発部門と非開発部門で運用モデルを分けられるか",
    recommended: "開発はLinear/Jira、全社可視化はAsana/Notionを役割分担",
    antiPattern: "1ツールで全部門を同じ運用に寄せて離脱が増える",
  },
  {
    condition: "大企業（300名以上）",
    key: "監査・権限・セキュリティとAIクレジット管理を両立できるか",
    recommended: "Jira Premium/Enterprise または Asana Enterprise を中心に設計",
    antiPattern: "PoC成功だけで全社展開し、管理者運用が追いつかない",
  },
] as const;

const adoptionSteps = [
  {
    phase: "Day 1-7",
    title: "対象業務を2つに限定してPoCを始める",
    actions: [
      "優先順位会議の準備（案件分類・担当アサイン）",
      "週次進捗レポート作成（要約作成・差分検知）",
      "AI利用ログの管理者確認フローを作る",
    ],
  },
  {
    phase: "Day 8-14",
    title: "AI出力の品質基準をチームで定義する",
    actions: [
      "「そのまま採用」「修正して採用」「不採用」の3分類で記録",
      "部署ごとの禁止入力（機密情報など）を明文化",
      "週1回のレビュー会で誤判定パターンを共有",
    ],
  },
  {
    phase: "Day 15-21",
    title: "会議体に組み込んで運用負荷を下げる",
    actions: [
      "デイリー/週次会議でAI要約を標準資料にする",
      "担当者変更・優先度変更の履歴を自動で残す",
      "遅延案件はAI検知を起点に人が再評価する",
    ],
  },
  {
    phase: "Day 22-30",
    title: "継続判断KPIを見て全社展開の可否を決める",
    actions: [
      "KPI: 利用率、AI提案採用率、進捗報告作成時間、遅延検知率",
      "部署別の定着差を可視化し、運用ルールを微修正",
      "次の30日で拡張する対象業務を1つだけ決める",
    ],
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "📩 LINEで毎週AI知識を配信中";
const lineCtaBody = "毎週1本、実務で使える生成AI活用のヒントとAIニュースをLINEで配信しています（無料）。読むだけで、AI活用の「知っておくべきこと」が自然と身につきます。受講前の不安や、自分に合うか確認したい方は、個別LINE相談もできます。";
const lineCtaButtonLabel = "今すぐ無料で登録する（30秒）";

function LineCtaBox({ className = "blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" }: { className?: string }) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-green-900">{lineCtaTitle}</p>
      <p className="mt-3 text-sm leading-7 text-green-900">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          {lineCtaButtonLabel}
        </a>
      </div>
    </section>
  );
}

export default function AiPmToolsGuidePage({ faqItems }: AiPmToolsGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIプロジェクト管理ツール比較2026" },
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
                title="AIプロジェクト管理ツール比較2026｜Asana AI・Linear・Notion・Jiraの選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIプロジェクト管理ツール比較2026｜Asana AI・Linear・Notion・Jiraの選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            PMツールの比較で失敗しやすいのは、機能一覧だけを見て導入を決めることです。2026年のAI搭載PMツールは、要約機能の有無よりも「どの業務を自動化し、誰が最終判断するか」を設計できるかが成果を左右します。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事では、Asana AI・Linear・Notion Projects・Jira AIを、対応プランと価格、優先順位付け・進捗予測・リスク検出の実務観点で比較します。スタートアップと大企業で判断軸がどう変わるか、導入後30日で定着率を上げる方法まで整理します。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-600">料金・機能の確認日: 2026-02-20</p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">結論: AI搭載PMツールは「自動化対象」と「運用体制」で選ぶ</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            最初に決めるべきは、どの業務をAIに任せるかです。優先順位会議の準備、進捗報告の下書き、リスク兆候の抽出など、業務単位で選定すると失敗しにくくなります。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              開発チーム中心なら、振り分け自動化が強い Linear または Jira AI が優位。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              部門横断の案件管理なら、Asana AI のステータス要約とリスクレポートが運用に組み込みやすい。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              ドキュメント起点の運用なら、Notion Projects + Notion AI が情報の一元管理に向く。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              どのツールでも、AIクレジット管理とレビュー責任者の設定を先に決めることが定着条件になる。
            </li>
          </ul>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox />
        </section>

        <motion.section
          id="trends"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">2026年トレンド: PMツールのAIは「補助機能」から「運用エンジン」へ</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            2024年までのAI機能は要約や文章生成が中心でした。2026年は、課題の振り分け、依存関係の把握、リスク兆候の抽出まで、運用フローを動かす役割に広がっています。
          </p>
          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">1. AIエージェント化が進み、担当者の事前作業を削減</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            LinearのTriage IntelligenceやAsana AI Studioのワークフロー設計機能は、課題の分類やルーティングを自動化し、PMが手作業で行っていた前処理時間を圧縮します。
          </p>
          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">2. 料金体系は「席課金 + AI利用量管理」の二層化</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            AI機能は上位プラン内包またはクレジット上限で提供されるケースが増えています。導入時はライセンス単価だけでなく、AI利用量の想定を含めた予算管理が必要です。
          </p>
          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">3. 成果差は「機能差」より「運用ルール差」で生まれる</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            同じツールでも、AI出力の確認責任者を置く組織と置かない組織で成果が分かれます。特に優先順位変更や外部共有を伴う案件は、AI提案の採否を人が決める会議体を先に定義してください。
          </p>
        </motion.section>

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Asana AI・Linear・Notion Projects・Jira AI 比較表</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            下表は公式価格ページと公式ドキュメントを基に、法人導入で差が出やすい項目を揃えて比較したものです。価格・条件は変更されるため、導入前に必ず各公式ページを再確認してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">AI対応プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">価格目安（年払い基準）</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注意点</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている組織</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.plan}</td>
                    <td className="px-4 py-4">{row.price}</td>
                    <td className="px-4 py-4">{row.strengths}</td>
                    <td className="px-4 py-4">{row.caution}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-4 text-xs leading-6 text-gray-500">
            注記: Asana Intelligence（Asana AI）の日本語対応は、Asana本体の日本語UI対応と日本語ヘルプ導線の改善報告を確認できる一方、AI生成品質の公開ベンチマークは限定的です。[要確認]
          </p>
          <p className="blog-p mt-2 text-xs leading-6 text-gray-500">
            注記: Linearの日本での普及は公式の国内社数公開がなく、国内コミュニティの導入事例観測が中心です。[要確認]
          </p>
        </motion.section>

        <motion.section
          id="automation"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AIがPM業務のどこを自動化するか: 優先順位・進捗予測・リスク検出</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            PM業務におけるAI活用の本質は、意思決定を置き換えることではなく、意思決定に必要な情報を短時間で揃えることです。以下の3領域を分けて設計すると導入効果が測定しやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">自動化領域</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Asana AI</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Linear</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Notion</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Jira AI</th>
                </tr>
              </thead>
              <tbody>
                {automationRows.map((row) => (
                  <tr key={row.domain} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.domain}</th>
                    <td className="px-4 py-4">{row.asana}</td>
                    <td className="px-4 py-4">{row.linear}</td>
                    <td className="px-4 py-4">{row.notion}</td>
                    <td className="px-4 py-4">{row.jira}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">実装時のポイント</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              優先順位付けは「AIの提案採用率」をKPIにし、無条件採用を避ける。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              進捗予測は「要約作成時間の短縮」と「報告粒度の統一」で評価する。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              リスク検出は「検知件数」より「検知後の再計画実行率」で成果を見る。
            </li>
          </ul>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </section>

        <motion.section
          id="selection"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">スタートアップ vs 大企業でのツール選び方</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            企業規模で最適解は変わります。スタートアップは設定コストと意思決定速度、大企業は権限・監査・部門横断運用が優先されます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">組織タイプ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">最初に見る軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">推奨構成</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">失敗パターン</th>
                </tr>
              </thead>
              <tbody>
                {startupVsEnterpriseRows.map((row) => (
                  <tr key={row.condition} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.condition}</th>
                    <td className="px-4 py-4">{row.key}</td>
                    <td className="px-4 py-4">{row.recommended}</td>
                    <td className="px-4 py-4">{row.antiPattern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">選定時に共通で確認する3項目</h3>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">AI提案の採否を誰が決めるか（責任分界）</li>
            <li className="pl-1 marker:text-gray-500">プラン単価に加え、AI利用量の上限管理方法を決める</li>
            <li className="pl-1 marker:text-gray-500">30日後に見るKPIを事前に定義してPoCの成否を判定する</li>
          </ol>
        </motion.section>

        <motion.section
          id="adoption"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">導入時のチーム定着率を上げる30日運用プラン</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            「機能を説明したのに使われない」という失敗は、教育不足ではなく運用設計不足で起きます。定着率を上げるには、会議・報告・優先順位会の流れにAIを組み込むことが重要です。
          </p>
          <div className="mt-6 grid gap-4">
            {adoptionSteps.map((step) => (
              <section key={step.phase} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <p className="text-xs font-semibold tracking-wide text-gray-500">{step.phase}</p>
                <h3 className="blog-h3 mt-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                <ul className="blog-ul mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                  {step.actions.map((action) => (
                    <li key={action} className="blog-li pl-1 marker:text-gray-500">
                      {action}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            PM業務の自動化設計をより広く見たい場合は
            <Link href="/academy/blog/ai-agent-operations-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI業務自動化の始め方
            </Link>
            もあわせて確認してください。
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">関連記事</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-meeting-tools-comparison" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI議事録ツール比較2026｜Fireflies・Otter・Notion AIの選び方と会議効率化
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                企業のAI導入ガイド｜現場定着までの進め方
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-adoption-cost-roi" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI導入の費用対効果をどう測るか｜ROI設計の実務
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-agent-operations-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI業務自動化の始め方｜運用設計ガイド
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 text-xl font-bold text-will-primary">AI活用の判断軸とキャリア設計を同時に整える</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、特定ツールの操作習得だけを目的にせず、3本柱で学習を設計しています。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">生成AI活用力: 実務で再現できるAI活用の型を持つ</li>
            <li className="blog-li pl-1 marker:text-gray-500">自己理解・キャリアデザイン: 自分の強みと価値観を言語化し、次の役割を設計する</li>
            <li className="blog-li pl-1 marker:text-gray-500">仲間と共に学ぶ環境: 対話と協働で実践を継続し、変化を定着させる</li>
          </ul>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            どのPMツールを選ぶかだけでなく、「どの業務課題にどうAIを組み込むか」を判断できる状態を目指す方に、学習全体の見直しは有効です。
          </p>
        </motion.section>

        <section id="cta" className="mt-14">
          <LineCtaBox />
        </section>
      </article>
    </main>
  );
}
