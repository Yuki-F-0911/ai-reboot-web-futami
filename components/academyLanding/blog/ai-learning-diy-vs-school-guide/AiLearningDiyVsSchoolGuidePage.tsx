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

const keywordTags = ["AI 独学 スクール 比較", "AI学習 どちらが良い", "生成AI 独学 挫折", "AI スクール 費用対効果"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "intro", label: "「独学でいける？」迷っている人へ" },
  { id: "diy-pros-cons", label: "独学の正直なメリット・デメリット" },
  { id: "school-pros-cons", label: "スクール学習の正直なメリット・デメリット" },
  { id: "comparison-table", label: "独学 vs スクール 比較表" },
  { id: "decision-framework", label: "3つの質問で選ぶ判断フレームワーク" },
  { id: "school-recommendation", label: "スクールが向いている人へ：選び方のポイント" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const diyPros = [
  {
    title: "費用がほぼかからない",
    body: "ChatGPT・Claude・Geminiの無料プランで学習を始められます。YouTube、ブログ、公式ドキュメントなど質の高い学習リソースが無料で揃っており、最低限の費用（ツールの有料プランで月数千円程度）で学ぶことが可能です。",
  },
  {
    title: "自分のペースで進められる",
    body: "スケジュールに縛られず、仕事の合間や早朝・深夜など好きな時間に学べます。理解できるまで同じところを繰り返したり、得意な部分を飛ばしたりと、学習スピードを自分で調整できます。",
  },
  {
    title: "試行錯誤がそのまま学びになる",
    body: "実際にAIツールを触りながら「これはどう動く？」と試すことが、最も効果的なAI学習の方法です。独学は実験・失敗・改善のサイクルを自由に回せるため、実践的なスキルが身につきやすい面があります。",
  },
  {
    title: "最新情報にすぐ対応できる",
    body: "AIの世界は変化が速く、スクールのカリキュラムより自分で情報収集した方が最新情報を早く得られることもあります。好奇心が強い人にとって、独学は常にフロンティアにいられる学習スタイルです。",
  },
] as const;

const diycons = [
  {
    title: "挫折率が高い",
    body: "「何を学べばいいかわからない」「続けられない」——独学の最大の壁です。体系的なカリキュラムがないため、学習の優先順位がわからず、結果的に何ヶ月も同じところをぐるぐるするケースが多いです。",
  },
  {
    title: "情報が多すぎて混乱する",
    body: "AIツールは毎週のように新しいものが登場します。「これを使えばいい」という答えがないため、情報収集に時間を取られすぎて、実際に手を動かす時間が取れない「情報収集沼」に陥りがちです。",
  },
  {
    title: "フィードバックが得られない",
    body: "「自分の使い方はこれで合っているの？」「もっと良い方法はない？」という疑問を解消する場がありません。間違ったやり方を続けても気づかないまま、非効率な使い方が固定されてしまうリスクがあります。",
  },
  {
    title: "目標が曖昧なまま学び続けてしまう",
    body: "「なんとなくAIを学んでいる」状態では、ゴールが見えません。仕事でどう使えるようになりたいのか、何ができたら「使いこなした」と言えるのかが不明確なまま、漠然と時間だけが過ぎることがあります。",
  },
] as const;

const schoolPros = [
  {
    title: "体系的なカリキュラムで迷わない",
    body: "「何から学ぶか」を考える必要がありません。専門家が設計したカリキュラムに沿って進めるため、学習の抜け漏れがなく、最短距離でスキルを身につけられます。何を学ぶべきか迷う時間が大幅に減ります。",
  },
  {
    title: "仲間・コミュニティがある",
    body: "同じ目標を持つ仲間と学ぶことで、モチベーションが維持しやすくなります。「あの人も頑張っているから自分も」という自然な刺激が生まれ、一人で続けるより長く続けられる人が多いです。",
  },
  {
    title: "わからないことをすぐ相談できる",
    body: "つまずいたときに質問できる環境があります。メンターや講師からのフィードバックにより、間違った方向に進む前に軌道修正ができます。「これで合っているか不安」という悩みがなくなります。",
  },
  {
    title: "モチベーション維持のしくみがある",
    body: "期限・課題・仲間との共有など、学習を続けるための仕組みが設計されています。「やる気」に頼らず、仕組みとして継続できる環境が整っています。",
  },
] as const;

const schoolCons = [
  {
    title: "費用がかかる",
    body: "月数万円〜10万円以上のコストがかかります。ただし、経産省のリスキリング補助金（最大70%補助）を活用すれば、実質負担を大幅に抑えられる場合があります。費用だけで判断せず、費用対効果で考えることが重要です。",
  },
  {
    title: "スクールによって品質にばらつきがある",
    body: "AIスクールは近年急増しており、カリキュラムの質・サポート体制・コミュニティの充実度はスクールごとに大きく異なります。選ぶ際は「実績」「カリキュラムの具体性」「サポートの内容」を必ず確認しましょう。",
  },
] as const;

const comparisonItems = [
  { item: "費用", diy: "無料〜月数千円", school: "月数万円〜（補助金活用で軽減可能）" },
  { item: "継続率", diy: "低め（挫折しやすい）", school: "高め（仕組みがある）" },
  { item: "学習スピード", diy: "自分のペース", school: "カリキュラムに沿う" },
  { item: "カリキュラム", diy: "自分で設計が必要", school: "体系的・専門家設計" },
  { item: "フィードバック", diy: "なし", school: "あり（講師・メンター）" },
  { item: "コミュニティ", diy: "なし（自分で探す必要あり）", school: "あり（仲間と学べる）" },
  { item: "最新情報", diy: "自分次第で素早く対応可能", school: "カリキュラム更新に依存" },
  { item: "向いている人", diy: "自律的・目的明確・継続自信あり", school: "挫折経験あり・目的曖昧・一人は不安" },
] as const;

const decisionQuestions = [
  {
    number: "Q1",
    question: "1人でも3ヶ月、AIを使い続ける自信がある？",
    yesPath: "独学でも続けられる可能性が高いです。「面倒なことをAIに任せる」習慣だけ意識して始めてみましょう。",
    noPath: "スクールのコミュニティとカリキュラムが効果を発揮します。一人で挫折した経験がある方はスクールの方が向いています。",
  },
  {
    number: "Q2",
    question: "AIで達成したいゴールが具体的にある？",
    yesPath: "目的が明確なら独学でも効率的に学べます。ゴールに必要なスキルから逆算して学習計画を立てましょう。",
    noPath: "ゴールが曖昧だと独学では迷走しがちです。スクールのカリキュラムに乗ることで、自然と「何ができると使いこなせるか」が明確になります。",
  },
  {
    number: "Q3",
    question: "つまずいたとき相談できる環境がある？",
    yesPath: "質問できる仲間や勉強会コミュニティがあれば、独学でも乗り越えられる壁が多くなります。",
    noPath: "相談できる環境がない独学は、つまずきが挫折に直結しやすいです。スクールのサポート体制を活用することで、壁を越えやすくなります。",
  },
] as const;

export default function AiLearningDiyVsSchoolGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIを独学で学ぶ vs スクールで学ぶ" },
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
                title="AIを独学で学ぶ vs スクールで学ぶ：後悔しない選び方の完全ガイド【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIを独学で学ぶ vs スクールで学ぶ：後悔しない選び方の完全ガイド【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月23日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIを学びたいけど、独学でいけるのかな？」「スクールに入るほど本格的に学ぶ必要があるの？」——この記事は、そう迷っているあなたのために書きました。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            先に正直にお伝えすると、<strong>独学がベストな人もいれば、スクールの方が圧倒的に向いている人もいます</strong>。「どちらが正解」ではなく「自分に合う方法はどちらか」——この視点で、両者を公正に比較していきます。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          あわせて読みたい：
          <Link href="/academy/blog/ai-learning-dropout-prevention-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI学習が続かない人の7つの理由
          </Link>
          ・
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIが怖い・難しいを乗り越えるガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-learning-roadmap-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI学習ロードマップ2026
          </Link>
          ・
          <Link href="/academy/blog/ai-course-ranking" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIスクール・講座ランキング
          </Link>
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
            <li className="pl-1 marker:text-gray-500">
              独学は「費用が安い・自分のペース」が強み、挫折率の高さ・フィードバック不足が弱み
            </li>
            <li className="pl-1 marker:text-gray-500">
              スクールは「体系的・仲間・サポート」が強み、費用とスクール選びの見極めが課題
            </li>
            <li className="pl-1 marker:text-gray-500">
              3つの質問（継続自信・目的明確・相談環境）すべてYesなら独学OK、1つでもNoならスクールが効果的
            </li>
            <li className="pl-1 marker:text-gray-500">
              どちらを選んでも「実際に使い続けること」がスキル習得の本質
            </li>
            <li className="pl-1 marker:text-gray-500">
              スクール選びでは、カリキュラムの具体性・コミュニティ・サポート体制を必ず確認する
            </li>
          </ul>
        </motion.section>

        {/* 導入 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="intro" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「独学でいける？」迷っている人へ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「ChatGPTを少し触ったことはあるけど、ちゃんと学べていない」「スクールに入るほどのことなのか、独学で十分なのかがわからない」——こうした悩みは、AI学習を始めようとしている人の多くが直面するものです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            2026年現在、AIスキルの重要性は急速に高まっています。BCG「AI at Work 2025」調査では、AIを業務で活用している人のパフォーマンスはそうでない人より平均28%高いと報告されています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ただ、「AIを学ぶ」の方法は人によって最適解が違います。独学でどんどん習得できる人もいれば、一人では続かず何度も挫折を繰り返している人もいます。<strong>この違いは才能や頭の良さではなく、「自分の学習スタイルに合った方法を選べているかどうか」</strong>にあります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、独学とスクール学習のそれぞれについて、良い面も悪い面も正直にお伝えし、最終的に「自分はどちらが向いているか」を判断できるフレームワークをご提供します。
          </p>
        </motion.section>

        {/* 独学のメリット・デメリット */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="diy-pros-cons" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            独学の正直なメリット・デメリット
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            独学には確かな強みがあります。ただし、多くの人が見落としがちなリスクもあります。
          </p>

          {/* 独学メリット */}
          <div className="mt-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-700 text-sm font-bold">✓</span>
              独学のメリット
            </h3>
            <div className="mt-4 space-y-4">
              {diyPros.map((item, index) => (
                <div key={item.title} className="rounded-xl border border-green-100 bg-green-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 独学デメリット */}
          <div className="mt-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold">✗</span>
              独学のデメリット（見落とされがちなリスク）
            </h3>
            <div className="mt-4 space-y-4">
              {diycons.map((item, index) => (
                <div key={item.title} className="rounded-xl border border-red-100 bg-red-50/50 p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 独学に向いている人 */}
          <div className="mt-8 rounded-xl border border-will-primary/20 bg-will-lighter/40 p-6">
            <h3 className="text-base font-bold text-gray-900">独学に向いている人の特徴</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-will-primary">▸</span>
                <span>AIを使いたい明確な目的・ゴールがある（例：メール作成を効率化したい、議事録を自動化したい）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-will-primary">▸</span>
                <span>自分でペースを管理して物事を継続できる実績がある</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-will-primary">▸</span>
                <span>試行錯誤を楽しめる性格で、失敗を学びに変えられる</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-will-primary">▸</span>
                <span>IT系の職種や技術学習に慣れていて、情報収集に苦労しない</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-will-primary">▸</span>
                <span>コストを最小限に抑えたく、まず試してみたい段階にある</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* スクール学習のメリット・デメリット */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="school-pros-cons" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            スクール学習の正直なメリット・デメリット
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            スクール学習には「お金がかかる」以上の価値があります。同時に、すべての人に合うわけでもありません。
          </p>

          {/* スクールメリット */}
          <div className="mt-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-700 text-sm font-bold">✓</span>
              スクール学習のメリット
            </h3>
            <div className="mt-4 space-y-4">
              {schoolPros.map((item, index) => (
                <div key={item.title} className="rounded-xl border border-green-100 bg-green-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* スクールデメリット */}
          <div className="mt-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold">✗</span>
              スクール学習のデメリット
            </h3>
            <div className="mt-4 space-y-4">
              {schoolCons.map((item, index) => (
                <div key={item.title} className="rounded-xl border border-red-100 bg-red-50/50 p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* スクールに向いている人 */}
          <div className="mt-8 rounded-xl border border-orange-200 bg-orange-50/50 p-6">
            <h3 className="text-base font-bold text-gray-900">スクール学習に向いている人の特徴</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-orange-500">▸</span>
                <span>過去にAIを試したが続かなかった・挫折した経験がある</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-orange-500">▸</span>
                <span>「何を学べばいいかわからない」「情報が多すぎて混乱している」</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-orange-500">▸</span>
                <span>一人でやるより、仲間と一緒の方がモチベーションが上がりやすい</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-orange-500">▸</span>
                <span>仕事でAIを使いこなすという明確な目標はあるが、方法がわからない</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-orange-500">▸</span>
                <span>体系的に学んで、短期間で確実なスキルを身につけたい</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* 比較表 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="comparison-table" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            独学 vs スクール：一目でわかる比較表
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            主要な比較ポイントをまとめました。スクロールして全体を確認できます。
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[540px] border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-bold text-gray-700 w-1/4">比較項目</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-bold text-green-700 w-3/8">
                    <span className="flex items-center gap-1">
                      <span>独学</span>
                    </span>
                  </th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-bold text-orange-600 w-3/8">
                    <span className="flex items-center gap-1">
                      <span>スクール</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row, index) => (
                  <tr key={row.item} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="border-b border-gray-100 px-4 py-3 font-semibold text-gray-700">{row.item}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.diy}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.school}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
          <MidArticleCtaBox slug="ai-learning-diy-vs-school-guide" />
        </motion.section>

        {/* 判断フレームワーク */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="decision-framework" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            3つの質問で決める：自分に合う方法を診断する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            以下の3つの質問に正直に答えてください。<strong>全部Yesなら独学でもOK。1つでもNoがあるなら、スクールの方が効果的</strong>です。
          </p>
          <div className="mt-8 space-y-6">
            {decisionQuestions.map((q) => (
              <div key={q.number} className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-will-primary/10 px-3 py-1 text-sm font-bold text-will-primary">{q.number}</span>
                  <h3 className="text-base font-bold leading-snug text-gray-900">{q.question}</h3>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-2">Yesなら</p>
                    <p className="text-sm leading-6 text-gray-700">{q.yesPath}</p>
                  </div>
                  <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Noなら</p>
                    <p className="text-sm leading-6 text-gray-700">{q.noPath}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-bold text-gray-900">判断のまとめ</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 font-bold text-green-600">●</span>
                <span><strong>3つすべてYes</strong>：独学でも続けられる環境が整っています。まずは無料ツールで試してみましょう。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 font-bold text-orange-500">●</span>
                <span><strong>1つでもNo</strong>：スクールの体系・コミュニティ・サポートが効果を発揮します。特に「挫折経験あり」「一人は不安」「目的が曖昧」のいずれかに当てはまる方はスクールの方が向いています。</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* スクール向けの人へ */}
        <motion.section
          className="mt-14 rounded-xl border border-will-primary/20 bg-will-lighter/40 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="school-recommendation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            スクールが向いている人へ：後悔しない選び方の3つのポイント
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「スクールに入ろう」と決めた方に、選ぶときに必ず確認してほしい3つのポイントをお伝えします。
          </p>
          <div className="mt-6 space-y-5">
            <div className="rounded-lg bg-white p-5 shadow-subtle">
              <h3 className="text-base font-bold text-gray-900">1. カリキュラムが「仕事で使えるスキル」に直結しているか</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                「ChatGPTの使い方」を教えるだけのスクールと、「業務自動化・プロンプト設計・AIワークフロー構築」まで教えるスクールでは、身につくスキルの深さが全く違います。カリキュラムに具体的な業務活用の内容が含まれているか確認しましょう。
              </p>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-subtle">
              <h3 className="text-base font-bold text-gray-900">2. コミュニティ・仲間の存在があるか</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                スクールの最大の価値の1つは「同じ目標を持つ仲間と学べること」です。受講生同士の交流の場・事例共有の機会があるかどうかは、継続率と学習の深さに大きく影響します。
              </p>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-subtle">
              <h3 className="text-base font-bold text-gray-900">3. 気軽に始められる入口があるか</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                いきなり高額なコースに申し込む前に、無料相談・体験セッションなどで雰囲気を確認できるスクールを選びましょう。「自分に合うか」を確認してから投資できる仕組みがあると安心です。
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-will-primary/20 bg-white p-5">
            <p className="text-sm font-bold text-gray-900">AIリブートアカデミーについて</p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              AIリブートアカデミーは、<strong>働く人が仕事でAIを使いこなすことを目的</strong>に設計されたAI学習コミュニティです。体系的なカリキュラムで「何を学ぶか迷わない」設計になっており、仲間と一緒に100日間学び続けられる環境があります。LINEから気軽に相談・登録できます。
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-will-primary">✓</span>
                <span>仕事で使えるAI活用スキルを体系的に学べるカリキュラム</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-will-primary">✓</span>
                <span>同じ目標を持つ仲間と一緒に続けられるコミュニティ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-will-primary">✓</span>
                <span>経産省リスキリング補助金対応（最大70%補助の可能性あり）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-will-primary">✓</span>
                <span>LINEで気軽に始められる（まず無料登録して相談できる）</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/academy"
                className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
              >
                AIリブートアカデミーを詳しく見る
              </Link>
            </div>
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
            まとめ：「正解」より「自分に合う方法」を選ぼう
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            独学とスクール、どちらが「正解」かは人によって違います。大切なのは、自分の学習スタイル・目的・環境を正直に見つめて、「自分に合う方法」を選ぶことです。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              独学の強みは「費用・ペース・自由度」。弱みは「挫折率・フィードバック不足・迷走リスク」
            </li>
            <li className="pl-1 marker:text-gray-500">
              スクールの強みは「体系性・コミュニティ・サポート」。弱みは「費用・スクール選びの見極め」
            </li>
            <li className="pl-1 marker:text-gray-500">
              3つの質問（継続自信・目的明確・相談環境）ですべてYesなら独学OK、1つでもNoならスクールが効果的
            </li>
            <li className="pl-1 marker:text-gray-500">
              挫折経験がある方・目的が曖昧な方・一人は続かない方は、スクールの仕組みを使う方が賢い選択
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            どちらを選んでも、最終的には「実際に使い続けること」がAIスキル習得の本質です。完璧な準備より、今日1つだけ試してみることの方が、何倍も価値があります。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            後悔しない選択をして、AIと共に働く未来を手に入れましょう。
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
            title="スクールが向いているかも、と思ったら"
            description="「独学で何度も挫折した」「何を学べばいいかわからない」——そう感じている方は、まずLINEで気軽に相談してみてください。AIリブートアカデミーは体系的なカリキュラムと仲間と学べるコミュニティで、AI活用スキルを確実に身につけられる環境を提供しています。経産省リスキリング補助金対象。"
            buttonLabel="LINEで無料相談してみる"
          />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-learning-dropout-prevention-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI学習が続かない…を卒業する：挫折する人と続く人の決定的な7つの違い
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-learning-roadmap-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI学習ロードマップ2026：ゼロから100日間で仕事に使えるようになるまでの完全地図
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-course-ranking" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIスクール・講座ランキング2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-school-for-working-adults" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                社会人向けAIスクール完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-try-fail-breakthrough-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを何度試しても続かなかった私が、やっと使いこなせた理由
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/dx-reskilling-subsidy-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                経産省リスキリング補助金完全ガイド
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
