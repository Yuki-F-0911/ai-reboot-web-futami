"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type CorporateAiTrainingPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const trainingTypes = [
  {
    type: "オンライン研修",
    summary: "拠点が分かれている企業でも導入しやすく、短時間の反復学習に向いています。",
    features: [
      "移動コストを抑えながら全社展開しやすい",
      "録画や教材共有で復習しやすい",
      "業務時間内に60〜90分単位で組み込みやすい",
    ],
  },
  {
    type: "対面研修",
    summary: "実際の業務データを使ったハンズオンを行いやすく、部門横断の合意形成に強みがあります。",
    features: [
      "演習時のつまずきをその場で解消しやすい",
      "管理職を含めた意思統一を作りやすい",
      "導入初期の温度差を短期間で縮めやすい",
    ],
  },
  {
    type: "ハイブリッド研修",
    summary: "基礎はオンライン、実務演習は対面に分けることで、コストと定着率のバランスを取りやすい方式です。",
    features: [
      "基礎理解と実践演習を分離して設計できる",
      "対象者レベルごとのカリキュラムを組みやすい",
      "中長期の定着施策と相性が良い",
    ],
  },
] as const;

const designPoints = [
  {
    title: "受講者レベル分け",
    summary: "同じ研修でも、管理職・現場担当・推進担当で必要な学習内容は異なります。",
    details: "職種と役割でクラスを分け、共通講義と部門別演習を組み合わせると定着率が上がります。",
  },
  {
    title: "KPI設定",
    summary: "受講満足度だけでは成果を判断できません。業務指標に接続したKPI設計が必要です。",
    details: "工数削減率、提案速度、ナレッジ再利用率など、研修前後で比較できる指標を先に定義します。",
  },
  {
    title: "フォロー体制",
    summary: "研修後1〜2か月の伴走が、社内定着率を左右します。",
    details: "質問窓口、定例レビュー、テンプレート更新会をセットで運用すると、現場の運用停止を防げます。",
  },
] as const;

const academyPlanPoints = [
  {
    title: "研修概要（法人向け）",
    body: "対象人数は10〜30名程度、研修時間は10時間以上、形式は集合研修です。",
  },
  {
    title: "3日間集中研修の3プラン",
    body: "Plan A（スタンダード・集中研修プラン）210万円、Plan B（動画アーカイブ付き・定着強化プラン）252万円、Plan C（複数講師・徹底サポートプラン）300万円。※価格・提供範囲は変更される可能性があるため、最新情報は資料請求でご確認ください。",
  },
  {
    title: "研修で得られる3つの力",
    body: "思考のOS書き換え（マインドセット変革）、実務への即時適用（スキル習得 × 業務変革）、組織全体の自走化（チーム構築 × 内製化）。",
  },
  {
    title: "助成金活用で実質負担を軽減",
    body: "人材開発支援助成金（事業展開等リスキリング支援コース等）など、条件により研修費用の一部が助成対象になる可能性があります。助成率・助成額・対象経費は企業規模や訓練内容、年度の制度改定で変わるため、必ず最新の公的資料で確認してください。",
  },
  {
    title: "その他のプログラム（カスタム対応）",
    body: "AI活用力強化研修、組織変革DX研修、AI活用型新規事業開発研修、採用DX研修、営業DX研修にも対応しています。",
  },
] as const;

const comparisonRows = [
  {
    axis: "研修概要",
    general: "対象人数・研修時間・形式の公開内容はサービスごとに要確認",
    academy: "対象人数10〜30名程度 / 研修時間10時間以上 / 集合研修",
  },
  {
    axis: "プラン構成",
    general: "料金体系と支援範囲はサービスごとに要確認",
    academy: "Plan A: 210万円 / Plan B: 252万円 / Plan C: 300万円（※最新は要確認）",
  },
  {
    axis: "研修成果の設計",
    general: "学習到達点や組織定着までの設計範囲は要確認",
    academy: "思考のOS書き換え / 実務への即時適用 / 組織全体の自走化の3つの力を重視",
  },
  {
    axis: "助成金活用",
    general: "制度適用可否と申請支援範囲は要確認",
    academy: "人材開発支援助成金（事業展開等リスキリング支援コース等）などの活用を前提に要件整理を支援（助成率・対象経費は要確認）",
  },
  {
    axis: "カスタム対応",
    general: "業務別の特化プログラム有無は要確認",
    academy: "AI活用力強化 / 組織変革DX / AI活用型新規事業開発 / 採用DX / 営業DX研修を提供",
  },
] as const;

const caseStudies = [
  {
    title: "ケース1: 営業部門（30名）",
    challenge: "提案書準備に時間がかかり、提案件数が伸びない。",
    approach: "提案書テンプレートと商談準備プロンプトを標準化し、週次レビューを実施。",
    result: "3か月で提案準備時間を短縮し、提案数の増加につなげた。",
  },
  {
    title: "ケース2: 人事部門（12名）",
    challenge: "採用文面と候補者評価の品質にばらつきがある。",
    approach: "採用業務向けテンプレートを整備し、面接評価の観点を共通化。",
    result: "採用オペレーションの標準化が進み、選考の再現性が向上。",
  },
  {
    title: "ケース3: 管理部門（15名）",
    challenge: "社内問い合わせ対応に属人化があり、回答品質が安定しない。",
    approach: "経理・総務向けFAQ整備と、問い合わせ一次回答の運用ルールを設計。",
    result: "問い合わせ対応の一次処理時間を短縮し、繁忙期の負荷を軽減。",
  },
] as const;

const keywordTags = ["AI研修 法人向け", "企業向け 生成AI研修", "研修KPI設計"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "training-types", label: "法人研修の種類（オンライン / 対面 / ハイブリッド）" },
  { id: "training-design-points", label: "研修設計のポイント（レベル分け / KPI / フォロー）" },
  { id: "academy-plan", label: "AIリブート法人研修プラン（3日間集中）" },
  { id: "comparison-table", label: "比較時の確認項目（一般講座 vs AIリブート法人研修）" },
  { id: "case-studies", label: "導入事例（想定ケーススタディ）" },
  { id: "faq", label: "FAQ" },
] as const;

export default function CorporateAiTrainingPage({ faqItems }: CorporateAiTrainingPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "法人向けAI研修" },
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            法人向けAI研修で成果を出すための完全ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">この記事は2026年2月17日に更新されました</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            法人向けAI研修は、受講人数より「研修設計」と「社内定着設計」で成果が決まります。本記事では、研修形式の選び方、KPI設計、
            フォロー体制、比較検討時の視点を担当者向けに整理しました。
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
          <p className="mt-4 text-base leading-8 text-gray-700">
            成果が出る法人研修は、受講前に「対象者レベル分け」「業務KPI」「研修後フォロー」をセットで設計しています。単発研修より、
            伴走型で運用定着まで見る設計が有効です。
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
          <h2 id="training-types" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            法人研修の種類（オンライン / 対面 / ハイブリッド）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            研修形式は「実施しやすさ」と「定着しやすさ」のバランスで選びます。目的に応じて形式を使い分けるのが現実的です。
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {trainingTypes.map((item, index) => (
              <motion.section
                key={item.type}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-5"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.type}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {item.features.map((feature) => (
                    <li key={feature} className="pl-1 marker:text-gray-500">
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.section>
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
          <h2 id="training-design-points" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            研修設計のポイント（レベル分け / KPI / フォロー）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            研修効果を左右するのは講義内容より設計です。事前設計の3要素を押さえると、研修後の現場活用率が上がります。
          </p>
          <div className="mt-6 space-y-4">
            {designPoints.map((point) => (
              <section key={point.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-gray-900">{point.summary}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{point.details}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-plan" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIリブートアカデミーの法人プラン
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            法人プランは3日間集中研修を軸に、人数・時間・形式を明確化した上で、助成金活用まで含めて導入しやすい設計になっています。
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700">
            {academyPlanPoints.map((item) => (
              <li key={item.title} className="rounded-md border border-blue-200 bg-white p-4">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            詳細な法人プランは
            <Link href="/corporate" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              法人向け研修ページ
            </Link>
            、個別相談は
            <Link href="/briefing" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              資料請求・導入相談
            </Link>
            から確認できます。
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
          <h2 id="comparison-table" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            比較時の確認項目（一般講座 vs AIリブート法人研修）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            法人研修は価格だけでなく、公開されている研修条件・成果設計・助成金対応の具体性まで確認することが重要です。
          </p>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">AI講座一般</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">AIリブート法人研修</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.general}</td>
                    <td className="py-4 pl-4">{row.academy}</td>
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
          <h2 id="case-studies" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入事例（想定ケーススタディ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実際の導入では、部門ごとに課題が異なります。以下のケースをベースに、自社に近い進め方を検討してください。
          </p>
          <div className="mt-6 space-y-4">
            {caseStudies.map((caseItem) => (
              <section key={caseItem.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{caseItem.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">課題:</span> {caseItem.challenge}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">実施内容:</span> {caseItem.approach}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">結果:</span> {caseItem.result}
                </p>
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
            よくある疑問をQ&Aで整理します。研修の最適な形は企業規模・対象者・目的で変わるため、自社の前提条件に合わせて読み替えてください。
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
                href="/academy/blog/corporate-ai-training-internal"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社内AI研修の始め方と定着の進め方｜DX人材を育てる実務ガイド | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                中小企業の生成AI導入ガイド｜失敗しない進め方と費用感 | AIリブート
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
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化 | AIリブート
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
          <h2 id="request-materials" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まず資料請求
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            研修形式や対象人数が未確定でも問題ありません。法人向け研修ページでプランを確認した上で、資料請求時に現状課題をご共有ください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/corporate"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              法人向け研修プランを見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/briefing"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              資料請求・導入相談をする
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
