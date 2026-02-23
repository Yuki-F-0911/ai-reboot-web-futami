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

type AiTeacherEducationGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI講師 とは", "教育現場 生成AI", "AI家庭教師 活用", "教師 AI 活用"] as const;

const tocItems = [
  { id: "conclusion", label: "結論: AI講師は補助者として設計する" },
  { id: "definition", label: "AI講師の定義と誤解" },
  { id: "outcomes", label: "成果が出る導入条件" },
  { id: "failure-patterns", label: "失敗パターンと対策" },
  { id: "implementation", label: "30日導入チェックリスト" },
  { id: "learner-mode", label: "学習者向けの使い方" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
] as const;

const roleComparisonRows = [
  {
    axis: "主な役割",
    aiTeacher: "復習問題生成、説明の言い換え、進捗可視化の補助",
    humanTeacher: "目標設定、理解確認、動機づけ、評価判断",
  },
  {
    axis: "強み",
    aiTeacher: "反復対応の速さ、個別最適化しやすい",
    humanTeacher: "文脈理解、感情把握、学習意欲の支援",
  },
  {
    axis: "弱み",
    aiTeacher: "誤情報・幻覚、出力根拠の不透明さ",
    humanTeacher: "準備時間と対応時間が逼迫しやすい",
  },
  {
    axis: "設計の要点",
    aiTeacher: "利用範囲と禁止範囲を明示して運用する",
    humanTeacher: "最終判断と評価責任を持つ",
  },
] as const;

const outcomePoints = [
  {
    title: "準備時間の削減は狙える",
    body: "Gallupの2024-25調査では、AIを週次で使う教員は平均5.9時間/週の削減を報告しています。時短自体は起こり得ますが、授業品質を維持する設計が前提です（確認日: 2026-02-20）。",
  },
  {
    title: "人間中心設計を外すと品質が崩れる",
    body: "文部科学省の学校向けガイドライン（Ver.2.0）とUNESCOのガイダンスは、どちらも教師の関与を中心に据えています。AI講師を代替役として置く運用は推奨されていません。",
  },
  {
    title: "教員側のAIコンピテンシーが成果を左右する",
    body: "UNESCOのAI competency framework for teachersは、教員向けに5領域15コンピテンシーを整理しています。導入成果はツール選定より運用スキルの設計に依存します。",
  },
] as const;

const failurePatterns = [
  {
    name: "失敗1: 授業案を丸ごとAI生成してそのまま使う",
    detail:
      "教材は整って見えても、学習者の前提知識や授業目標とずれるケースが増えます。最低限、到達目標・評価基準・課題文は教員が最終調整する運用に固定します。",
  },
  {
    name: "失敗2: 宿題・レポートをAI任せにする",
    detail:
      "コミュニティでも不正利用の報告が多く、評価妥当性が下がります。口頭確認、途中草稿、手書き要素、根拠説明を組み合わせた評価へ変更します。",
  },
  {
    name: "失敗3: 生成結果の根拠確認フローがない",
    detail:
      "誤情報が混ざったまま配布資料へ反映されると、修正コストが増えます。一次情報参照と更新日の明記を授業運用ルールに組み込みます。",
  },
  {
    name: "失敗4: 利用ルールを学習者へ事前共有していない",
    detail:
      "利用可否の境界が曖昧だと、学習者は短期最適で使いがちです。許可範囲・禁止範囲・提出時の申告ルールを明文化して配布します。",
  },
] as const;

const implementationSteps = [
  {
    title: "Day 1-3: 目的を1つに絞る",
    body: "例として「小テスト作成時間を30%削減」「授業後の復習質問対応を標準化」など、成果指標を1つに固定します。",
  },
  {
    title: "Day 4-7: 利用範囲を定義する",
    body: "AI講師に任せる業務（問題生成、例文作成など）と任せない業務（成績判断、最終評価）を明確に切り分けます。",
  },
  {
    title: "Day 8-14: プロンプトと確認手順を標準化する",
    body: "授業目的別にテンプレを作り、出力確認項目（正確性・難易度・偏り）をチェックリスト化します。",
  },
  {
    title: "Day 15-21: 評価設計を更新する",
    body: "最終回答だけでなく、思考過程・根拠説明・修正履歴を評価対象へ加えます。AI利用の有無を申告欄で把握します。",
  },
  {
    title: "Day 22-30: 週次レビューを回す",
    body: "時短効果、誤情報発生率、学習者満足、提出物の質を確認し、運用ルールを毎週更新します。",
  },
] as const;

const learnerChecklist = [
  "AIに質問する前に、授業目標と提出条件を1行で書く",
  "回答をそのまま使わず、根拠を2件以上で確認する",
  "自分の言葉で要約し直し、説明できる状態で提出する",
  "誤りが出た箇所を記録し、次回プロンプトを改善する",
] as const;

export default function AiTeacherEducationGuidePage({ faqItems }: AiTeacherEducationGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI講師活用ガイド" },
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
                title="AI講師とは？教育現場での活用・失敗パターン・導入手順を解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI講師とは？教育現場での活用・失敗パターン・導入手順を解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            AI講師の導入は、ツールを増やすことが目的ではありません。授業準備、復習支援、フィードバックの質を上げながら、教員と学習者の時間配分を再設計することが目的です。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            この記事では、一次情報をもとに「AI講師に任せる業務」「任せない業務」を明確化し、30日で運用を安定させる実行手順をまとめます。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            結論: AI講師は「教師を代替する存在」ではなく、授業品質を支える補助者として設計する
          </h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">AI講師の価値は、反復業務の効率化と個別最適化にあります。</li>
            <li className="blog-li pl-1 marker:text-gray-500">最終評価と学習動機づけは、教員が担う前提を崩さないことが重要です。</li>
            <li className="blog-li pl-1 marker:text-gray-500">導入初期は、対象業務を1つに絞ると失敗率を下げられます。</li>
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            学習全体の設計から見直したい場合は
            <Link href="/academy/blog/ai-study-learning-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI×勉強・資格・語学学習完全ガイド
            </Link>
            もあわせて確認してください。
          </p>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox />
        </div>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="definition" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            AI講師の定義と誤解: 「自動化」より「学習設計の補助」で捉える
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            AI講師は、質問応答・反復演習・理解度確認を補助する役割です。文部科学省の学校向けガイドライン（Ver.2.0）とUNESCOガイダンスでも、人間中心の運用が前提とされています。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">AI講師</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">人間講師</th>
                </tr>
              </thead>
              <tbody>
                {roleComparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.aiTeacher}</td>
                    <td className="py-4 pl-4">{row.humanTeacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            つまり、AI講師は「授業を置き換える存在」ではなく「教員の判断を強化する補助装置」です。導入時は、責任範囲と確認工程を先に決めることが不可欠です。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="outcomes" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            成果が出る導入条件: 時短と品質を同時に満たす設計が必要
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {outcomePoints.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            調査値や制度情報は更新されるため、運用開始前に必ず一次情報の更新日を確認してください（確認日: 2026-02-20）。
          </p>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-rose-200 bg-rose-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="failure-patterns" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            失敗パターンと対策: 「便利だから使う」だけでは定着しない
          </h2>
          <div className="mt-6 space-y-4">
            {failurePatterns.map((pattern) => (
              <section key={pattern.name} className="rounded-lg border border-rose-200 bg-white p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{pattern.name}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{pattern.detail}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            社内研修のルール整備まで含めて見直す場合は
            <Link href="/academy/blog/ai-guideline-template" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの社内ガイドライン雛形
            </Link>
            を併読すると設計しやすくなります。
          </p>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox />
        </div>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="implementation" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            30日導入チェックリスト: 小さく始めて、週次で精度を上げる
          </h2>
          <div className="mt-7 space-y-4">
            {implementationSteps.map((step, index) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-will-primary px-2 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="blog-h3 text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            法人研修として組み込む場合は
            <Link href="/academy/blog/ai-training-curriculum" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI研修カリキュラム例（職種別）
            </Link>
            で、評価指標と業務タスクへの接続方法を具体化できます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="learner-mode" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            学習者向けの使い方: 回答生成より「理解の可視化」を優先する
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            学習者がAI講師を使うときは、正解を早く得るより「どこで理解が止まったか」を可視化する使い方が有効です。提出物の品質は、回答の長さではなく、根拠説明の質で決まります。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {learnerChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            補助金を使って学習投資を設計したい方は
            <Link
              href="/academy/blog/education-training-benefit-ai"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              教育訓練給付金でAI講座を受講するガイド
            </Link>
            も参考になります。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
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

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="related-links" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            関連記事
          </h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-study-learning-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI×勉強・資格・語学学習完全ガイド｜ChatGPTで最短合格する方法
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-training-curriculum" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI研修カリキュラム例（職種別）｜社内定着まで見据えた設計
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-guideline-template" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/education-training-benefit-ai"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                教育訓練給付金でAI講座を受講するガイド｜制度比較と費用の考え方
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            教育現場や研修現場でのAI活用を、単発の時短で終わらせず、長期的な実務成果とキャリアの選択肢につなげたい方に適した学習設計を提供しています。
          </p>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              アカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox />
        </section>
      </article>
    </main>
  );
}
