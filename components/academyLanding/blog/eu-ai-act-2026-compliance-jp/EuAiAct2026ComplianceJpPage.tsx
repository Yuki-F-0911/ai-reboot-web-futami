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

const keywordTags = ["EU AI Act 2026", "EU AI法 日本", "EU AI規制 対応", "AI規制 日本企業", "EU AI Act コンプライアンス"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-eu-ai-act", label: "EU AI法とは何か" },
  { id: "japan-companies", label: "日本企業に関係するケース" },
  { id: "risk-levels", label: "リスクレベル別の分類" },
  { id: "timeline", label: "2026年のタイムライン" },
  { id: "seven-points", label: "今すぐ確認すべき7つのポイント" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const riskLevels = [
  {
    level: "非許容リスク（禁止）",
    color: "border-red-300 bg-red-50",
    labelColor: "text-red-700",
    description: "使用が全面禁止されるAIシステム。",
    examples: [
      "サブリミナル技術・欺瞞的手法による行動操作",
      "社会的スコアリングシステム（政府・民間問わず）",
      "公共空間でのリアルタイム生体認証（限定的例外あり）",
      "職場・教育現場での感情認識AI",
      "人種・宗教・性的指向等のバイオメトリクス推測",
    ],
    applicable: "2025年2月2日より適用済み",
  },
  {
    level: "高リスク",
    color: "border-orange-300 bg-orange-50",
    labelColor: "text-orange-700",
    description: "義務が最も多い分類。適合性評価・ドキュメント・透明性確保が必要。",
    examples: [
      "採用・昇進・解雇に使うAIシステム",
      "信用スコアリング・保険料算定AI",
      "医療診断補助・手術ロボット",
      "重要インフラ（電力・水道・交通）管理",
      "法執行・司法・亡命申請の判定補助",
      "教育における成績評価・カンニング検出",
    ],
    applicable: "2026〜2027年段階的適用",
  },
  {
    level: "限定リスク（透明性義務）",
    color: "border-yellow-300 bg-yellow-50",
    labelColor: "text-yellow-700",
    description: "主にAIであることの開示義務。",
    examples: [
      "チャットボット（AIと明示する義務）",
      "ディープフェイク生成コンテンツ（AI生成と明示）",
      "感情認識システム（用途によって変わる）",
    ],
    applicable: "2025年8月2日より適用済み",
  },
  {
    level: "最小リスク",
    color: "border-green-300 bg-green-50",
    labelColor: "text-green-700",
    description: "義務なし。任意の行動規範（Code of Practice）への参加を推奨。",
    examples: [
      "AIを使ったスパムフィルター",
      "在庫管理・物流最適化AI",
      "一般的な文章生成・要約・翻訳（業務用途）",
    ],
    applicable: "特別な対応不要",
  },
] as const;

const timeline = [
  {
    date: "2024年8月1日",
    event: "EU AI法 発効（Official Journal掲載）",
    note: "施行の起点。各条項の適用は段階的。",
  },
  {
    date: "2025年2月2日",
    event: "第5条（禁止AIシステム）適用開始",
    note: "社会的スコアリング・サブリミナル操作等の使用禁止が発効済み。",
  },
  {
    date: "2025年8月2日",
    event: "GPAI（汎用AI）規制・透明性義務 適用開始",
    note: "ChatGPT・Claude等の汎用AIモデル提供者への規制と、チャットボット等の開示義務が開始。",
  },
  {
    date: "2026年8月2日",
    event: "高リスクAI（一部）の義務 適用開始",
    note: "高リスクAIに分類される一部のシステムへの義務が本格スタート。",
  },
  {
    date: "2027年8月2日",
    event: "全面適用",
    note: "高リスクAIの全義務が適用。EU AI法が完全に施行される。",
  },
] as const;

const sevenPoints = [
  {
    number: "01",
    point: "EU域内への商品・サービス展開の有無を確認する",
    detail: "EU加盟国のユーザー・取引先にAI出力を届けている場合は対象になり得ます。国内のみで完結している業務なら現時点では直接適用外です。",
  },
  {
    number: "02",
    point: "社内で使用しているAIシステムを棚卸しする",
    detail: "ChatGPT・Claude・Copilotなどの汎用AIと、採用・与信・医療など特定業務向けシステムを別リストで管理します。",
  },
  {
    number: "03",
    point: "各AIシステムのリスク分類を確認する",
    detail: "採用・信用・医療・インフラ関連AIは「高リスク」に該当する可能性があります。高リスクでないことが確認できれば、追加対応の優先度は大幅に下がります。",
  },
  {
    number: "04",
    point: "チャットボットはAIであることを明示する設計にする",
    detail: "「限定リスク」に該当するチャットボット・AIエージェントは、ユーザーにAIと対話していることを明示する義務が2025年8月以降適用されています。",
  },
  {
    number: "05",
    point: "GPAI（汎用AI）利用者としての透明性義務を確認する",
    detail: "ChatGPT・ClaudeなどのGPAIを使ってEU向けサービスを構築している場合、AI生成コンテンツの表示義務が発生する可能性があります。",
  },
  {
    number: "06",
    point: "社内AI利用ガイドラインにEU対応条項を追加する",
    detail: "禁止システムの使用禁止、開示義務の徹底、高リスクAI利用時の確認手順を社内規定に明文化します。EU AI法対応に限らず、AI利用のガバナンス強化に直結します。",
  },
  {
    number: "07",
    point: "対応状況を記録・更新できる体制を整える",
    detail: "EU AI法は段階的施行のため、2027年の完全適用に向けて定期的な見直しが必要です。担当部門（法務・情シス）と四半期レビューのタイミングを決めておきます。",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line?src=blog&slug=eu-ai-act-2026-compliance-jp&bonus=bonus01";

export default function EuAiAct2026ComplianceJpPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "EU AI法2026年対応ガイド" },
          ]}
        />

        {/* ヘッダー */}
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
                title="EU AI法（EU AI Act）2026年対応ガイド｜日本企業が今すぐ確認すべき7つのポイント"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            EU AI法（EU AI Act）2026年対応ガイド｜日本企業が今すぐ確認すべき7つのポイント
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>

          {/* 冒頭即答ブロック */}
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-base font-semibold text-blue-900">Q. EU AI法は日本企業にも関係しますか？</p>
            <p className="mt-3 text-sm leading-7 text-blue-900">
              <strong>A. EU向けにサービスや商品を提供している場合は関係します。国内取引のみなら現時点では直接の義務は生じません。</strong>
              ただし、採用AIや信用スコアリング等の「高リスクAI」を使う場合は規模や所在地を問わず義務が発生する可能性があります。
              2026年8月から段階的に適用が進むため、今から確認・準備を始める企業が増えています。
            </p>
          </div>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AI規制の背景を知りたい方は
          <Link href="/academy/blog/ai-privacy-safety-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI利用のプライバシー・安全ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            社内AIガイドライン雛形
          </Link>
          ・
          <Link href="/academy/blog/what-is-mcp" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            MCP（Model Context Protocol）とは？
          </Link>
          もあわせて参照してください。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">EU AI法はEU向けにAIを使った商品・サービスを提供する全事業者が対象（所在地不問）</li>
            <li className="pl-1 marker:text-gray-500">禁止AIシステムは2025年2月、GPAIと透明性義務は2025年8月に先行発効済み</li>
            <li className="pl-1 marker:text-gray-500">リスクは4段階（非許容・高リスク・限定リスク・最小リスク）で分類される</li>
            <li className="pl-1 marker:text-gray-500">採用・与信・医療等のAIは「高リスク」に該当し、義務が最も多い</li>
            <li className="pl-1 marker:text-gray-500">汎用AI（ChatGPT等）の業務利用は「最小リスク」が多いが、EU向けサービス構築時は要確認</li>
            <li className="pl-1 marker:text-gray-500">まず①EU展開の有無②社内AIの棚卸し③リスク分類確認の3ステップで始める</li>
          </ul>
        </motion.section>

        {/* EU AI法とは何か */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-eu-ai-act" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            EU AI法とは何か？（背景と目的）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            EU AI法（EU Artificial Intelligence Act、規則番号：EU 2024/1689）は、2024年8月1日に発効したAIシステムを規制する世界初の包括的なAI規制法です。EUのGDPR（一般データ保護規則）と同様に、EU域内でのみ適用されるのではなく、<strong>EU市場に向けてAIシステムを提供・使用するすべての事業者に適用される域外適用</strong>が特徴です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            制定の背景には、AI技術の急速な普及に伴う3つの懸念があります。①差別や人権侵害につながるAIの使用、②透明性のないAI意思決定、③重要インフラへのリスク。これらを「リスクに応じた規制」で対応するのがEU AI法の設計思想です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            日本企業にとって重要なのは、「EUに会社がないから関係ない」ではなく、<strong>EU在住のユーザー・取引先にAI関連サービスを届けている時点で適用範囲に入る可能性がある</strong>点です。
          </p>
          <p className="mt-3 text-xs text-gray-500">
            出典：
            <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              EUR-Lex: Regulation (EU) 2024/1689 (EU AI Act)
            </a>
          </p>
        </motion.section>

        {/* 日本企業に関係するケース */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="japan-companies" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            日本企業はどんなケースで対応が必要か
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            以下のケースに1つでも当てはまる場合、EU AI法への対応を検討する必要があります。
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">対応が必要になる可能性が高いケース</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-red-900">
                <li className="pl-1">EUのエンドユーザー向けにWebサービス・アプリを提供している</li>
                <li className="pl-1">EU拠点の子会社・グループ会社がAIシステムを使用している</li>
                <li className="pl-1">EU域内の企業に採用・与信・医療関連のAIシステムを販売している</li>
                <li className="pl-1">EU向けECサイトでレコメンデーションAIを使っている</li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-800">現時点では直接対応が不要なケース</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-green-900">
                <li className="pl-1">日本国内の顧客・取引先のみを対象とした業務</li>
                <li className="pl-1">社内業務効率化のみにChatGPT・Claude等を利用（議事録・メール・文書作成）</li>
                <li className="pl-1">EUとの取引がまったくない中小企業</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            ※ 上記は一般的な判断基準であり、個別の法的判断は法務専門家への相談を推奨します（確認日：2026-02-22）。
          </p>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="eu-ai-act-2026-compliance-jp" />
        </motion.section>

        {/* リスクレベル別の分類 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="risk-levels" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            リスクレベル別の分類（4段階）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            EU AI法はAIシステムを4つのリスクレベルに分類し、それぞれに異なる義務を課します。自社のAIがどこに分類されるかを確認することが、対応の出発点です。
          </p>
          <div className="mt-8 space-y-5">
            {riskLevels.map((item) => (
              <section key={item.level} className={`rounded-xl border p-5 ${item.color}`}>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className={`text-base font-bold ${item.labelColor}`}>{item.level}</h3>
                  <span className="text-xs text-gray-600">{item.applicable}</span>
                </div>
                <p className="mt-2 text-sm text-gray-700">{item.description}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  {item.examples.map((ex) => (
                    <li key={ex} className="pl-1 marker:text-gray-400">{ex}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 2026年タイムライン */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="timeline" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年のタイムライン（段階的施行スケジュール）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            EU AI法は一度に全面施行されるのではなく、条項ごとに適用時期が異なります。2026年現在の状況と今後の予定を整理しました。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">時期</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">内容</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">補足</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((item, idx) => (
                  <tr key={item.date} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{item.date}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.event}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">確認日：2026-02-22。出典：EU AI Act（EU 2024/1689）官報</p>
        </motion.section>

        {/* 7つのポイント */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="seven-points" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            日本企業が今すぐ確認すべき7つのポイント
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「どこから手をつければいいかわからない」という担当者のために、優先順に整理しました。法務・情シス・経営層で共有できる確認項目です。
          </p>
          <div className="mt-8 space-y-4">
            {sevenPoints.map((item) => (
              <section key={item.number} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-4">
                  <span className="min-w-[2rem] text-xl font-bold text-will-primary/40">{item.number}</span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{item.point}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{item.detail}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：怖がる必要はないが、知らないと損
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            EU AI法は確かに複雑ですが、日本企業のすべてに即座に高い義務が課されるわけではありません。まず「自社はEUと関係があるか」「使っているAIはどのリスク分類か」の2点を確認するだけで、必要な対応の範囲が大幅に絞れます。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">禁止AIと透明性義務は既に発効——チャットボットの「AIと明示する」義務はすぐ確認を</li>
            <li className="pl-1 marker:text-gray-500">高リスクAIに該当しないことを確認できれば、追加義務は大幅に減る</li>
            <li className="pl-1 marker:text-gray-500">社内AI利用ガイドラインの整備は、EU AI法対応を超えてガバナンス強化に直結する</li>
            <li className="pl-1 marker:text-gray-500">完全施行は2027年8月——今から段階的に準備を進めることが現実的</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            個別の法的判断は必ず法務専門家に確認してください。この記事は情報提供を目的としており、法的助言ではありません。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="AIリブートのLINEを追加して、社内AI利用ガイドライン雛形を受け取る"
            description="EU AI法対応の第一歩として、社内のAI利用ルール整備が有効です。AIリブートでは、LINEご登録者に社内AI利用ガイドライン雛形を無料配布しています。週1本のAI学習コンテンツ＋ニュース解説もあわせてお届けします。"
            buttonLabel="LINEでガイドライン雛形を受け取る（無料）"
            href={lineUrl}
          />
        </motion.section>

        {/* アカデミーCTA */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI活用の判断軸とキャリアを同時に設計する
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            EU AI法のような規制を理解したうえで、AIを組織や自分のキャリアにどう活かすかを考えたい方には、AIリブートアカデミーが参考になるかもしれません。
            生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            「法律や規制もわかったうえでAIを使いこなしたい」という方は、一度のぞいてみてください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/ai-guideline-template"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              社内AIガイドライン雛形を見る
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-privacy-safety-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI利用のプライバシー・安全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/shadow-ai-countermeasures" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                シャドーAI対策の進め方｜「禁止」せず安全に使わせる統制設計
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-data-leak-patterns" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIで情報漏えいが起きるパターン10選｜現場のNG例とルール
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                中小企業の生成AI導入ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-mcp" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                MCP（Model Context Protocol）とは？できることと危険な落とし穴
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-legal-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                法務の生成AI活用ガイド｜契約レビューを「任せない」運用設計と実践的な使い方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-copyright-commercial-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの著作権・商用利用ガイド（画像/動画/文章）｜現場で迷う論点を整理
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
