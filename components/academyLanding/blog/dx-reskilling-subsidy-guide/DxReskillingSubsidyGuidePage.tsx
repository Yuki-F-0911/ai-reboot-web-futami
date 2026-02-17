"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type DxReskillingSubsidyGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const subsidyDefinitionPoints = [
  {
    title: "対象者",
    body: "一般的には、企業が従業員向けに実施するDX関連研修が中心です。制度により、対象企業規模や雇用形態の条件が設定されます。",
  },
  {
    title: "対象経費",
    body: "講座受講料、研修実施費、外部講師費などが対象となる場合があります。対象外経費の扱いは制度ごとに異なります。",
  },
  {
    title: "支援額の考え方",
    body: "制度ごとに「経費の一定割合」や「上限額（最大◯◯万円の形式）」で定義されます。実際の上限額は必ず公募要領で確認してください。",
  },
] as const;

const differenceRows = [
  {
    axis: "主な申請主体",
    enterprise: "企業・事業者",
    individual: "個人（在職者・離職者など制度要件による）",
  },
  {
    axis: "目的",
    enterprise: "組織のDX推進、人材育成、業務生産性向上",
    individual: "個人の学び直し、キャリア形成、転職準備",
  },
  {
    axis: "手続きの特徴",
    enterprise: "研修計画、受講管理、実績報告など運用設計が必要",
    individual: "受講要件、申請期限、本人確認など個別手続きが中心",
  },
] as const;

const eligibleConditions = [
  {
    title: "1. 研修目的がDX人材育成に接続している",
    body: "業務改善やデジタル活用など、研修の目的と期待成果を明示できることが重要です。",
  },
  {
    title: "2. 講座内容と実施体制が確認できる",
    body: "講座シラバス、実施期間、受講対象者、運営方法を説明できる状態が求められます。",
  },
  {
    title: "3. 実施記録と証憑を残せる",
    body: "出欠、進捗、請求書、領収書など、実績報告に必要な記録を運用で確保する必要があります。",
  },
  {
    title: "4. 申請タイミングを守れる",
    body: "事前申請が必須の制度もあるため、受講開始前に申請スケジュールを確定しておくことが重要です。",
  },
] as const;

const applicationFlow = [
  {
    step: "Step 1. 候補制度を選定する",
    detail:
      "国・自治体・業界団体の制度から、自社の規模、対象者、研修目的に合うものを絞り込みます。全体像は補助金ガイドで確認できます。",
    document: "制度要件一覧、対象講座候補、社内実施計画の草案",
  },
  {
    step: "Step 2. 事前準備と申請書作成",
    detail: "研修計画、対象者、費用見積を整理し、申請フォームと添付資料を作成します。",
    document: "申請書、研修計画書、見積書、会社情報書類",
  },
  {
    step: "Step 3. 研修実施と記録管理",
    detail: "受講実施後に実績報告が必要になるため、進捗と証憑を継続的に管理します。",
    document: "出欠記録、受講報告、請求書・領収書、支払い証明",
  },
  {
    step: "Step 4. 実績報告と精算",
    detail: "制度要件に沿って実績を提出し、審査後に助成が確定します。",
    document: "実績報告書、成果報告、精算関連書類",
  },
] as const;

const combinationRules = [
  {
    title: "同一経費の二重計上は避ける",
    body: "併用可能な場合でも、同じ受講費を複数制度へ重複申請することは認められないケースが一般的です。",
  },
  {
    title: "対象範囲を分けて設計する",
    body: "受講者、講座、期間、経費区分を分けることで、併用可否の判断と実績報告がしやすくなります。",
  },
  {
    title: "申請窓口ごとに確認を取る",
    body: "併用可否の解釈が異なる場合があるため、申請前に各制度の窓口へ確認し、記録を残しておくことが重要です。",
  },
] as const;

const keywordTags = ["DXリスキリング 助成金", "DX研修 助成金", "リスキリング補助金 違い"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-dx-reskilling-subsidy", label: "DXリスキリング助成金とは" },
  { id: "difference-from-individual-subsidy", label: "個人向け補助金との違い" },
  { id: "eligible-training-conditions", label: "対象となる研修・講座の条件" },
  { id: "application-flow-and-documents", label: "申請の流れと必要書類" },
  { id: "combination-with-other-subsidies", label: "他制度との併用可否" },
  { id: "faq", label: "FAQ" },
] as const;

export default function DxReskillingSubsidyGuidePage({ faqItems }: DxReskillingSubsidyGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "DXリスキリング助成金ガイド" },
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            DXリスキリング助成金ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月17日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            DX人材育成を進めるうえで、助成金の活用は有効な選択肢です。ただし制度ごとに対象要件や申請タイミングが異なるため、要点を整理してから申請準備に入る必要があります。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              DXリスキリング助成金は、企業がDX研修を実施する際の費用負担を軽減する制度群であり、要件確認が最重要です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              個人向け補助金とは申請主体と手続きが異なるため、混同せずに制度を切り分けて確認する必要があります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              申請では、事前準備、講座要件、証憑管理、併用ルールの4点を先に設計すると実務で詰まりにくくなります。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-dx-reskilling-subsidy" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            DXリスキリング助成金とは（制度の概要）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            DXリスキリング助成金は、企業のデジタル人材育成を後押しするために、研修費や関連費用の一部を支援する制度の総称として使われることが多い言葉です。制度全体の整理は
            <Link href="/academy/subsidy-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              補助金ガイド
            </Link>
            もあわせて確認してください。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {subsidyDefinitionPoints.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="difference-from-individual-subsidy" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            リスキリング補助金（個人向け）との違い
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 企業向けと個人向けは、申請主体と運用責任が異なります。まずはどちらの制度を使うべきかを明確にしてください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">DXリスキリング助成金（企業向け）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">リスキリング補助金（個人向け）</th>
                </tr>
              </thead>
              <tbody>
                {differenceRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.enterprise}</td>
                    <td className="py-4 pl-4">{row.individual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="eligible-training-conditions" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            対象となる研修・講座の条件
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 「講座の内容」だけでなく「実施体制」と「記録・証憑の残し方」まで含めて要件になることがあります。申込み前に制度ごとの公募要領を確認してください。
          </p>
          <div className="mt-6 space-y-4">
            {eligibleConditions.map((condition) => (
              <section key={condition.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{condition.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{condition.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="application-flow-and-documents" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            申請の流れと必要書類
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 申請は「事前準備→実施→実績報告」の順で詰まりやすいポイントが変わります。最初に書類の全体像を把握し、証憑管理の運用を決めておくと安全です。
          </p>
          <div className="mt-6 space-y-4">
            {applicationFlow.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">主な書類: {item.document}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="combination-with-other-subsidies" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            他の補助金制度との併用可否
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            併用可否は制度ごとに異なるため、実務では「何をどの制度で申請するか」を先に仕分けることが重要です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {combinationRules.map((rule) => (
              <section key={rule.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{rule.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{rule.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            よくある疑問をQ&Aで整理します。制度は年度や自治体で条件が変わる可能性があるため、最終判断は必ず最新の公募要領で確認してください。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/education-training-benefit-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                教育訓練給付金でAI講座を受講するガイド｜制度比較と費用の考え方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-course-ranking" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI講座ランキング2026｜選び方の基準と目的別おすすめを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-school-for-working-adults"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人向けAIスクールの選び方ガイド｜失敗しない比較ポイントを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド｜経験を強みに学び直す方法 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/corporate-ai-training"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                法人向けAI研修サービス｜社内定着・研修設計・導入相談 | AIリブート
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
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="free-seminar-consultation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料セミナー / 個別相談
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            助成金の要件整理と研修設計を同時に進める必要がある場合は、無料セミナーで全体像を確認し、個別相談で申請準備の優先順位を明確にする進め方が実務的です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーに参加する
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              個別相談を申し込む
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
