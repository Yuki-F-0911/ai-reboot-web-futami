"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type CorporateAiAdoptionGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const roadmapSteps = [
  {
    step: "Step 1",
    title: "目的を1つに絞る（2週間）",
    summary: "最初から全社展開を狙わず、削減したい工数や改善したい業務を1つに限定します。",
    actions: [
      "対象業務を1つ選ぶ（例: 提案書下書き、採用候補者の要約）",
      "現状の工数と品質を記録する",
      "担当者と責任者を明確にする",
    ],
  },
  {
    step: "Step 2",
    title: "小規模PoCを実施する（3〜4週間）",
    summary: "10〜20件程度の実データで試し、使えるパターンと使えないパターンを切り分けます。",
    actions: [
      "入力ルールと出力フォーマットを固定する",
      "人のレビュー手順を明文化する",
      "時間短縮率と品質差分を測る",
    ],
  },
  {
    step: "Step 3",
    title: "運用ルールを作る（2週間）",
    summary: "情報漏えいと誤回答のリスクを抑えるため、利用範囲とNG入力を先に決めます。",
    actions: [
      "社外秘情報の取り扱いルールを決める",
      "プロンプトテンプレートを共通化する",
      "最終判断者を業務ごとに設定する",
    ],
  },
  {
    step: "Step 4",
    title: "部門展開と研修を行う（4〜8週間）",
    summary: "現場定着には、操作説明よりも業務別のハンズオンとフォロー体制が重要です。",
    actions: [
      "営業・人事・経理など部門別にユースケースを設計する",
      "管理職向けに評価指標を共有する",
      "質問窓口と定例レビューを運用する",
    ],
  },
  {
    step: "Step 5",
    title: "KPIで効果検証し改善する（継続）",
    summary: "導入完了で終わらせず、月次で成果を確認して使い方を更新します。",
    actions: [
      "工数削減率、再作業率、提案速度をKPI化する",
      "使われないテンプレートを更新・整理する",
      "新規業務への展開可否を四半期ごとに判断する",
    ],
  },
] as const;

const costRows = [
  {
    category: "無料ツールで試す",
    scope: "1〜3名でPoC",
    estimate: "0円〜1万円 / 月",
    point: "まずは検証。正式導入前に効果を測る段階。",
  },
  {
    category: "有料SaaSを導入",
    scope: "10〜30名で実運用",
    estimate: "5万円〜30万円 / 月",
    point: "管理機能・セキュリティ・監査ログが必要な段階。",
  },
  {
    category: "法人研修を併用",
    scope: "全社または部門展開",
    estimate: "30万円〜200万円（研修設計により変動）",
    point: "定着率を上げたい、稟議材料を整えたい段階。",
  },
] as const;

const useCaseRows = [
  {
    department: "営業",
    useCase: "提案書の初稿作成、商談準備、メール文面作成",
    impact: "提案準備時間を短縮し、提案回数を増やしやすい",
  },
  {
    department: "人事",
    useCase: "求人票改善、候補者サマリー、面接評価の整理",
    impact: "採用業務の標準化と選考スピード改善につながる",
  },
  {
    department: "経理",
    useCase: "経費規程Q&A、請求書確認ポイントの整理、月次コメント下書き",
    impact: "確認漏れを減らし、月次締めの負荷を下げやすい",
  },
  {
    department: "マーケ",
    useCase: "広告文案、記事構成、レポート要約、施策案の発散",
    impact: "実行速度を上げながら、検証サイクルを短縮できる",
  },
] as const;

const failurePatterns = [
  {
    title: "ツール導入だけ先行して、現場業務に接続されない",
    solution:
      "最初に対象業務を1つ決め、導入前後の工数と品質を比較できる状態で始めると失敗しにくくなります。",
  },
  {
    title: "部門ごとに使い方がバラバラで再現性がない",
    solution:
      "部門共通テンプレートを先に作り、毎週の運用レビューで改善する仕組みを作ることが有効です。",
  },
  {
    title: "セキュリティとガバナンス設計が後回しになる",
    solution:
      "入力禁止情報、レビュー責任、ログ管理の3点を最低限の運用ルールとして明文化してください。",
  },
] as const;

const keywordTags = ["生成AI導入 企業", "中小企業 生成AI活用", "法人AI導入ロードマップ"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "adoption-roadmap", label: "導入ステップ（5段階ロードマップ）" },
  { id: "cost-estimate", label: "費用感の目安（無料ツール〜有料SaaS〜研修）" },
  { id: "department-use-cases", label: "業種別活用事例（営業 / 人事 / 経理 / マーケ）" },
  { id: "failure-patterns", label: "失敗パターンと回避策" },
  { id: "subsidy", label: "補助金・助成金を活用して導入負担を下げる" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function CorporateAiAdoptionGuidePage({ faqItems }: CorporateAiAdoptionGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "企業AI導入ガイド" },
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">中小企業の生成AI導入ガイド</h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            成果が出る企業は「業務を1つに絞る小規模PoC」から始めています。
            この記事では、導入の順番（5段階ロードマップ）と、費用感・部門別活用・失敗回避の要点を結論先出しで整理します。
            生成AIとは、「ツールを入れたのに使われない」「セキュリティが怖くて止まる」といった壁に当たりやすい分野です。
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
            成果が出る企業は「業務を1つに絞る小規模PoC」から始めています。最初の2〜3か月で効果測定まで回し、成功パターンを部門展開する進め方が安全です。
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
          <h2 id="adoption-roadmap" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入ステップ（5段階ロードマップ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 成功の鍵は、全社一斉ではなく段階導入です。5ステップで「ルール→PoC→展開→運用」までつなげると失敗しにくくなります。
          </p>
          <div className="mt-8 space-y-6">
            {roadmapSteps.map((item, index) => (
              <motion.section
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-6"
              >
                <p className="text-sm font-semibold tracking-wide text-orange-600">{item.step}</p>
                <h3 className="mt-2 text-xl font-semibold leading-8 text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {item.actions.map((action) => (
                    <li key={action} className="pl-1 marker:text-gray-500">
                      {action}
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
          <h2 id="cost-estimate" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            費用感の目安（無料ツール〜有料SaaS〜研修）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 最初は無料ツールで「効果検証」、次に有料SaaSで「管理・監査」を整える流れが現実的です。研修は定着率を上げたい段階で効きます。
          </p>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">フェーズ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">対象規模</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">費用目安</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">判断ポイント</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row) => (
                  <tr key={row.category} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.category}</th>
                    <td className="py-4 px-4">{row.scope}</td>
                    <td className="py-4 px-4">{row.estimate}</td>
                    <td className="py-4 pl-4">{row.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            費用は契約条件・受講人数・研修期間で変動します。正式見積の前に、対象業務とKPIを固定しておくと見積比較がしやすくなります。
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
          <h2 id="department-use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            業種別活用事例（営業 / 人事 / 経理 / マーケ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 部門ごとに期待効果が違うため、同じ使い方を横展開すると失敗しがちです。まずは部門別に「対象業務」と「成果指標」を決めましょう。
          </p>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">部門</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">主な活用内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">期待効果</th>
                </tr>
              </thead>
              <tbody>
                {useCaseRows.map((row) => (
                  <tr key={row.department} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.department}</th>
                    <td className="py-4 px-4">{row.useCase}</td>
                    <td className="py-4 pl-4">{row.impact}</td>
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
          <h2 id="failure-patterns" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            失敗パターンと回避策
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 失敗の多くは「対象業務が未固定」「運用ルールが後回し」「部門ごとにバラバラ」の3つです。回避策を先に押さえます。
          </p>
          <div className="mt-6 space-y-4">
            {failurePatterns.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.solution}</p>
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
          <h2 id="subsidy" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            補助金・助成金を活用して導入負担を下げる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 制度活用は「対象条件」と「申請時期」を間違えると適用できないことがあります。導入スケジュールとセットで先に確認しましょう。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            個人向けのリスキリング補助金と法人向けの助成金は制度が異なります。法人向けの研修プランと助成金の詳細は
            <Link href="/corporate" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              法人研修ページ
            </Link>
            で確認できます。
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            個人でリスキリングを検討する方は
            <Link href="/academy/subsidy-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              補助金ガイド
            </Link>
            で、申請フローと注意点を確認できます。
          </p>
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
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 導入の最適解は企業規模・業種・ガバナンス要件で変わります。よくある疑問をQ&Aで整理します。
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
              <Link href="/academy/blog/corporate-ai-training" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                法人向けAI研修サービス｜社内定着・研修設計・導入相談 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/corporate-ai-training-internal"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社内AI研修の始め方と定着の進め方｜DX人材を育てる実務ガイド | AIリブート
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
          <h2 id="free-seminar" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            法人向け研修を検討する方へ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 全社導入は「研修設計＋実行支援＋運用ルール」をセットで考えると失敗しにくくなります。法人向けページでプランを確認し、必要に応じて導入相談をご予約ください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/corporate"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              法人研修の詳細を見る
            </Link>
            <Link
              href="/briefing"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              導入相談を予約する
            </Link>
          </div>
        </motion.section>
      
        
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
            <li className="pl-1 marker:text-gray-500">成果が出る企業は「業務を1つに絞る小規模PoC」から始めています。</li>
            <li className="pl-1 marker:text-gray-500">最初の2〜3か月で効果測定まで回し、成功パターンを部門展開する進め方が安全です。</li>
            <li className="pl-1 marker:text-gray-500">成功の鍵は、全社一斉ではなく段階導入です。</li>
            <li className="pl-1 marker:text-gray-500">最初は無料ツールで「効果検証」、次に有料SaaSで「管理・監査」を整える流れが現実的です。</li>
            <li className="pl-1 marker:text-gray-500">部門ごとに期待効果が違うため、同じ使い方を横展開すると失敗しがちです。</li>
          </ul>
        </motion.section>
<motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のアクション
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI活用を最短で前に進めたい方へ。無料セミナーやアカデミーの全体像から、次の一歩を選べます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
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
