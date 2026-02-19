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

type AiAccountingGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const useCases = [
  {
    title: "仕訳確認・経費精算",
    risk: "低〜中",
    description:
      "勘定科目の振り分け確認、経費申請への回答文生成、領収書コメントの下書きなどに活用できます。金額や取引先名を入力する際はマスキングが基本です。",
    example: "「〇〇費として申請された支出のうち、交際費と会議費の振り分け基準を確認したい」などの相談ベースの利用が取り組みやすいです。",
  },
  {
    title: "月次レポートのコメント文作成",
    risk: "低",
    description:
      "差異分析のコメントたたき台、部門向け説明文の初稿生成に活用できます。数値はマスキングし、増減の傾向と主因をテキストで渡すと品質が安定します。",
    example: "「前月比X%増の主因は〇〇費の増加。以下の3点でコメントを作って」という形式が実務で使いやすいです。",
  },
  {
    title: "予算差異分析の補助",
    risk: "中",
    description:
      "勘定科目別の予実差異一覧を渡して、差異の大きい項目のコメントたたき台を生成させる用途です。必ず担当者がレビューし、数値の正確性を確認してから使用します。",
    example: "CSV形式の差異表をテキストに変換して貼り付け、「差異が大きい順に説明コメントを3項目生成して」と指示する方法が再現性が高いです。",
  },
  {
    title: "ExcelマクロのAI生成",
    risk: "低",
    description:
      "業務に必要なVBAマクロをAIに生成させて、ExcelのVBAエディタに貼り付ける方法です。コード生成にデータそのものを入力する必要がないため、情報漏えいリスクが低い活用方法です。",
    example: "「A列の金額をB列の部門コード別に集計してC列に出力するマクロを書いて」という仕様説明だけで実用的なコードが生成できます。",
  },
] as const;

const riskPoints = [
  {
    title: "入力前にプランとデータポリシーを確認する",
    detail:
      "無料プランでは入力内容がモデルの学習に使用される場合があります。財務数値・取引先名・未公開情報を入力する場合は、エンタープライズプランを利用するか、情報をマスキングしてから入力します。",
  },
  {
    title: "数値・社名はマスキングする",
    detail:
      "具体的な金額は「X百万円」「〇〇費」、取引先名は「A社」「B社」、部門名は「第1部門」「営業部門」などに置き換えてから入力します。AIへの指示は構造と関係性の説明が中心で、実データは最後のレビュー工程で人が照合します。",
  },
  {
    title: "出力は必ず人がレビューしてから使用する",
    detail:
      "AIが生成した仕訳コメントや差異分析文は、数値・勘定科目・期間の正確性を担当者が確認してから利用します。AIの出力は「たたき台」として扱い、最終判断は人が行う運用を徹底します。",
  },
] as const;

const adoptionSteps = [
  {
    step: "Phase 1（1〜2週）",
    title: "リスクが低い業務で試す",
    detail:
      "月次コメントの下書き、経費申請への回答文など、数値を入力しない業務から始めます。プロンプトのひな形を1つ作成し、出力品質を確認します。",
  },
  {
    step: "Phase 2（2〜4週）",
    title: "運用ルールを整備する",
    detail:
      "入力可能な情報の範囲（禁止事項）、使用するAIサービスとプラン、出力物のレビュー手順の3点を文書化します。既存の情報セキュリティポリシーと整合させます。",
  },
  {
    step: "Phase 3（1〜3ヶ月）",
    title: "対象業務を段階的に拡張する",
    detail:
      "差異分析補助やExcelマクロ生成など、効果が出やすい業務に展開します。各業務に専用のプロンプトテンプレートを整備し、チームで共有できる形にします。",
  },
] as const;

const keywordTags = ["経理 AI 活用", "財務 生成AI 業務効率化", "仕訳 AI 自動化"] as const;

const tocItems = [
  { id: "accounting-ai-overview", label: "経理・財務でAIが使える業務と使えない業務" },
  { id: "use-cases", label: "4業務別の活用方法と注意点" },
  { id: "risk-management", label: "機密データを扱う際のリスク管理3原則" },
  { id: "excel-macro", label: "ExcelマクロのAI生成と自然言語でのデータ集計" },
  { id: "adoption-steps", label: "経理部門への3段階導入ステップ" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function AiAccountingGuidePage({ faqItems }: AiAccountingGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "経理・財務部門のAI活用ガイド" },
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
                title="経理・財務部門のAI活用ガイド2026｜仕訳・レポート・予算管理の自動化事例"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            経理・財務部門のAI活用ガイド2026｜仕訳・レポート・予算管理の自動化事例
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月19日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            経理・財務部門でAIを活用する際、最初の壁は「どの業務に使えるか」と「財務データを外部AIに入れてよいのか」です。
            この記事では、リスクが低い業務から段階的に導入するための4業務別の活用法、機密情報管理の3原則、3段階の導入ステップを整理します。
            まず「数値そのものを入力しない業務」から始め、運用ルールを整備してから対象を広げるのが現実的な進め方です。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* H2-1: 使える業務・使えない業務 */}
        <motion.section
          id="accounting-ai-overview"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            経理・財務でAIが使える業務と使えない業務
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            「全部AIに任せる」ではなく「人の判断を補助する」範囲を明確にすることが、経理部門でのAI活用の起点です。
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              経理・財務でAIが活用しやすい業務は、繰り返し発生する文章作成・構造化・説明補助です。
              月次コメントのたたき台、経費申請への回答文、勘定科目の振り分け相談、Excelマクロの生成などが代表例です。
            </p>
            <p>
              一方、最終的な数値確定、税務判断、監査対応など<strong>確認責任が発生する業務</strong>はAIの出力を起点にしつつも、
              担当者による確認と承認が必須です。AIは補助であり、最終判断は常に人が行います。
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">業務</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">AIの活用方法</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">人の確認</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4">月次コメント作成</td>
                  <td className="py-4 px-4">差異傾向からたたき台を生成</td>
                  <td className="py-4 pl-4">数値の正確性・表現の確認</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4">経費申請への回答</td>
                  <td className="py-4 px-4">規程に沿った回答文の初稿作成</td>
                  <td className="py-4 pl-4">規程との整合・承認</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4">Excelマクロ生成</td>
                  <td className="py-4 px-4">仕様説明からVBAコードを生成</td>
                  <td className="py-4 pl-4">テスト環境での動作確認</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="py-4 pr-4">税務申告・監査対応</td>
                  <td className="py-4 px-4">参考情報の整理のみ</td>
                  <td className="py-4 pl-4">専門家による最終判断が必須</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* LINE CTA #1 */}
        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-green-800">
            📩 LINEで毎週AI知識を配信中
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            LINEで週1AI通信を受け取る（無料）
          </a>
        </motion.section>

        {/* H2-2: 4業務別の活用方法 */}
        <motion.section
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            4業務別の活用方法と注意点
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            リスクが低い業務から始め、ルールを整備しながら対象を広げるのが現実的な進め方です。
          </p>
          <div className="mt-8 space-y-6">
            {useCases.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <span className="shrink-0 rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-600">
                    リスク: {item.risk}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
                <p className="mt-3 rounded-md bg-blue-50 px-4 py-2 text-xs leading-6 text-blue-800">
                  <span className="font-semibold">活用例: </span>{item.example}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* H2-3: リスク管理 */}
        <motion.section
          id="risk-management"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            機密データを扱う際のリスク管理3原則
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            財務情報・取引先情報をAIに入力する前に、この3点を確認します。これが経理部門でのAI活用ルールの骨格になります。
          </p>
          <ol className="mt-8 space-y-6">
            {riskPoints.map((item, index) => (
              <li key={item.title} className="border-t border-gray-200 pt-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  原則{index + 1}. {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            社内でのAIガイドライン整備については
            <Link
              href="/academy/blog/ai-guideline-template"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              生成AIの社内ガイドライン雛形
            </Link>
            で、禁止事項・権限・ログの設計例とともに整理しています。
          </p>
        </motion.section>

        {/* LINE CTA #2 */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-orange-800">
            📩 LINEで毎週AI知識を配信中
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            LINEで週1AI通信を受け取る（無料）
          </a>
        </motion.section>

        {/* H2-4: ExcelマクロとAI */}
        <motion.section
          id="excel-macro"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ExcelマクロのAI生成と自然言語でのデータ集計
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            ExcelマクロのAI生成は、情報漏えいリスクが低く、プログラミング未経験でも始められる経理向けのAI活用です。
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              AIにVBAマクロを書いてもらう場合、入力するのは「やりたい処理の仕様説明」だけです。実際のデータを貼り付ける必要がないため、
              財務情報を外部サービスに渡すリスクを最小化できます。
            </p>
            <p>
              仕様説明の書き方は「対象セル・処理内容・出力先」の3点を日本語で書くだけです。
              例：「A2からA100の金額を、B列の部門コード別に合計してD2以降に出力するマクロを書いてください」という形式で動作するコードが生成できます。
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">ChatGPTやClaudeでExcelデータを集計する方法</p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              ChatGPT有料プランでは「データ分析」機能でCSV/Excelを添付し、「部門別の合計を表にして」と自然言語で指示できます。
              ClaudeはデータをCSVテキストで貼り付けると集計・分析が可能です。
              機密情報を含む場合は会社名・個人名・具体的な金額をマスキングしてから使用します。
            </p>
          </div>
        </motion.section>

        {/* H2-5: 導入ステップ */}
        <motion.section
          id="adoption-steps"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            経理部門への3段階導入ステップ
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            一度に全業務を変えようとせず、段階的に運用実績を積み上げていく方法が定着しやすいです。
          </p>
          <ol className="mt-8 space-y-7">
            {adoptionSteps.map((item) => (
              <li key={item.step} className="border-t border-gray-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-will-primary">{item.step}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            部門横断でのAI活用推進については
            <Link
              href="/academy/blog/ai-business-efficiency-cases"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI業務効率化事例集
            </Link>
            で、営業・マーケ・管理部門の活用傾向と導入ポイントを整理しています。
          </p>
        </motion.section>

        {/* H2-6: FAQ */}
        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            「財務データを入力していいか」「会計ソフトは変える必要があるか」など、経理部門でAI活用を始める前の疑問をQ&Aで整理します。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>

          {/* LINE CTA #3（FAQ末尾） */}
          <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6">
            <p className="text-base font-semibold text-green-800">
              📩 LINEで毎週AI知識を配信中
            </p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
            </p>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              LINEで週1AI通信を受け取る（無料）
            </a>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/ai-guideline-template"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集｜営業・マーケ・管理部門の活用ポイントを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-data-analysis-excel"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIでExcelデータ分析を効率化する方法 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">経理・財務でのAI活用は「数値入力が不要な文章生成業務」から始めるとリスクが低く進めやすいです。</li>
            <li className="pl-1 marker:text-gray-500">機密情報は入力前にマスキング。プランとデータポリシーの確認が運用ルールの基本です。</li>
            <li className="pl-1 marker:text-gray-500">ExcelマクロのAI生成は、データを渡さずに仕様だけ説明するため情報漏えいリスクが低い活用です。</li>
            <li className="pl-1 marker:text-gray-500">Phase 1（低リスク業務）→ Phase 2（ルール整備）→ Phase 3（対象拡大）の3段階で進めると定着しやすいです。</li>
          </ul>
        </motion.section>

        {/* 次のアクション */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            経理・財務部門のAI活用を体系的に学びたい方へ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            業務別の活用設計から社内ルール整備まで、実務に直結した内容を無料セミナーで確認できます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーに参加する
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              アカデミーTOPへ
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
