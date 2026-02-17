"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type EducationTrainingBenefitAiPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const trainingBenefitTypes = [
  {
    title: "一般教育訓練給付",
    body: "比較的広い講座が対象となる区分です。目安として受講費用の20%（上限10万円）が給付されます。AI講座でも指定対象に該当する場合がありますが、講座ごとに条件確認が必要です。",
  },
  {
    title: "特定一般教育訓練給付",
    body: "実務性や職業能力向上に重点を置いた区分です。目安として受講費用の40%（上限20万円）で、条件を満たすと最大50%（上限25万円）となる場合があります（令和6年10月1日以降に受講開始した講座）。対象講座の要件や受給条件を事前に確認することが重要です。",
  },
  {
    title: "専門実践教育訓練給付",
    body: "より専門性の高い学習を想定した区分です。目安として受講費用の50%（年間上限40万円）で、条件を満たすと最大70%（上限56万円）、さらに賃金要件で最大80%（上限64万円）となる場合があります（令和6年10月1日以降に受講開始した講座）。受給要件や手続きが複雑になりやすいため、計画的な準備が必要です。",
  },
] as const;

const systemComparisonRows = [
  {
    axis: "主な制度の位置づけ",
    trainingBenefit: "雇用保険制度にもとづく教育訓練支援として整理されることが多い",
    reskillingSubsidy: "政策目的別に設計された補助制度として運用されるケースがある",
  },
  {
    axis: "申請主体",
    trainingBenefit: "個人",
    reskillingSubsidy: "個人向け・企業向けで分かれる制度がある",
  },
  {
    axis: "確認すべき要件",
    trainingBenefit: "受給要件、対象講座指定、申請期限",
    reskillingSubsidy: "対象者要件、対象経費、公募期間",
  },
  {
    axis: "注意点",
    trainingBenefit: "講座申込前後の手続き順序を誤ると対象外になる場合がある",
    reskillingSubsidy: "制度ごとに対象範囲が異なるため、同名でも要件が一致しない",
  },
] as const;

const costRows = [
  {
    category: "入門〜基礎講座",
    range: "比較的低価格帯から選択肢がある",
    effectiveCost: "給付対象なら自己負担を抑えやすい傾向",
    note: "サポート範囲が限定される講座もあるため、質問環境を確認する",
  },
  {
    category: "実務活用講座",
    range: "中価格帯の講座が多い傾向",
    effectiveCost: "給付活用で負担軽減が見込めるケースがある",
    note: "演習とフィードバックの有無で成果の出やすさが変わる",
  },
  {
    category: "伴走型・転職支援型講座",
    range: "相対的に高価格帯になりやすい",
    effectiveCost: "対象条件を満たすと実質負担差が大きくなる場合がある",
    note: "価格だけでなく支援内容と目的一致を重視する",
  },
] as const;

const selectionCriteria = [
  {
    title: "目的との一致",
    body: "転職、業務改善、副業などの目的に合ったカリキュラムかを最初に確認します。",
  },
  {
    title: "実務接続性",
    body: "学習内容を実務で再現できる演習があるか、アウトプット支援があるかを確認します。",
  },
  {
    title: "サポート体制",
    body: "質問対応、レビュー、学習継続支援の仕組みがあるかで、挫折率は大きく変わります。",
  },
  {
    title: "給付手続きのしやすさ",
    body: "受講前後で必要な手続きや提出物を確認し、制度活用まで見据えて比較します。",
  },
] as const;

const keywordTags = ["教育訓練給付金 AI講座", "AI講座 費用 相場", "AIスクール コスパ"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-training-benefit", label: "教育訓練給付金とは" },
  { id: "difference-from-reskilling-subsidy", label: "リスキリング補助金との違い" },
  { id: "cost-and-effective-burden", label: "費用相場と実質負担の考え方" },
  { id: "cost-performance-criteria", label: "コスパの良い講座を選ぶ基準" },
  { id: "faq", label: "FAQ" },
] as const;

export default function EducationTrainingBenefitAiPage({ faqItems }: EducationTrainingBenefitAiPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "教育訓練給付金でAI講座を受講するガイド" },
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
            教育訓練給付金でAI講座を受講するガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI講座の費用で迷っているなら、価格の安さだけでなく「制度活用後の実質負担」で判断すると後悔しにくくなります。
            この記事では、教育訓練給付金の区分（一般/特定一般/専門実践）の違い、リスキリング補助金との住み分け、実質負担の考え方、講座選びのチェックポイントまでを結論先出しで整理します。
            筆者は申し込み前に「対象講座か」「申請タイミングが間に合うか」の2点を最初に確認するのが最重要だと感じています。
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
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            最初に「講座が指定講座か」「自分が要件を満たすか」を確認し、次に制度の住み分けと実質負担で比較すると迷いが減ります。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              教育訓練給付金には3種類があり、AI講座で活用できるかは講座指定と受給要件の確認が前提です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              リスキリング補助金とは制度設計が異なるため、申請主体と要件を分けて確認する必要があります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              給付率や上限額などの詳細条件は年度や制度改定で変わる可能性があるため、必ず最新の公的情報で確認してください。
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
          <h2 id="what-is-training-benefit" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            教育訓練給付金とは（一般・特定一般・専門実践の概要）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            まずは「どの区分の給付金が対象になりそうか」を当たりをつけると、講座選びの無駄打ちが減ります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            教育訓練給付金は、学び直しを支援する制度として広く利用されています。区分ごとに対象講座や受給条件が異なるため、まず自分がどの区分に該当する可能性があるかを確認しましょう。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {trainingBenefitTypes.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            注記: 給付率や上限額などの詳細は年度更新や制度改定で変更される場合があります。申請前に最新情報を確認してください。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="difference-from-reskilling-subsidy" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            リスキリング補助金との違い（制度比較表）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            両制度は「誰が申請するか」「要件は何か」が違うため、まず申請主体と対象条件を分けて確認するのが安全です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            /academy/subsidy-guide は個人向けリスキリング補助金を中心に整理したページです。教育訓練給付金の観点から制度の住み分けが分かるように比較します。例として、リスキリングを通じたキャリアアップ支援事業（在職者向け）では、受講費用の1/2（上限40万円・税別）に加え、転職後に条件を満たすと追加で1/5（上限16万円・税別）が支援され、最大56万円となる場合があります（時期・要件により変動します）。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">教育訓練給付金</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">リスキリング補助金</th>
                </tr>
              </thead>
              <tbody>
                {systemComparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.trainingBenefit}</td>
                    <td className="py-4 pl-4">{row.reskillingSubsidy}</td>
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
          <h2 id="cost-and-effective-burden" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI講座の費用相場と給付金活用後の実質負担
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            重要なのは、受講料そのものではなく「給付後にいくら残るか」です。実質負担で見れば、印象が逆転するケースもあります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AI講座の費用は講座の深さとサポート範囲で変わります。具体額を断定せず、一般的な価格帯の傾向として整理します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">講座カテゴリ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">費用相場（一般的傾向）</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">給付活用後の見方</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">確認ポイント</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row) => (
                  <tr key={row.category} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.category}</th>
                    <td className="py-4 px-4">{row.range}</td>
                    <td className="py-4 px-4">{row.effectiveCost}</td>
                    <td className="py-4 pl-4">{row.note}</td>
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
          <h2 id="cost-performance-criteria" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            コスパの良い講座を選ぶ基準
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            コスパは「安いか」より「受講後に仕事で再現できるか」で決まります。成果物とフィードバックの有無を最優先で見ましょう。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {selectionCriteria.map((item) => (
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
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
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

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/subsidy-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                リスキリング補助金ガイド（個人向け）
              </Link>
            </li>
            <li>
              <Link
                href="/academy/subsidy-eligible-courses"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                リスキリング補助金の対象講座の見分け方チェックリスト
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/dx-reskilling-subsidy-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                DXリスキリング助成金ガイド｜対象条件・申請手順・併用可否を解説 | AIリブート
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
          <h2 id="next-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            制度活用を含めて講座選定したい方へ
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            制度要件と学習目的を同時に満たすには、先に「目的→講座候補→制度適合」の順で確認するのが手戻りしにくいです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            無料セミナーで学習全体像を整理し、個別相談で制度活用を踏まえた受講計画を確認できます。
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
