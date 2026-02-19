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

type ReskillingOver40PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const reasonCards = [
  {
    title: "不安を言語化できると、学習は進みやすくなる",
    body: "40代・50代での学び直しでは「今からでも遅くないか」という不安が先に立ちやすい傾向があります。まずは不安を分解し、何を学べば業務に効くかを明確にすることが出発点です。",
  },
  {
    title: "年代特有の強みは、AI活用で価値化しやすい",
    body: "業務理解、対人調整、意思決定の経験は、AIの出力を実務に落とし込む場面で強みになります。技術の暗記よりも、現場課題への適用力が成果を左右します。",
  },
  {
    title: "キャリアの選択肢を増やしやすい",
    body: "学び直しは転職だけが目的ではありません。現職での役割拡張、社内DX推進、独立後の提案力強化など、経験を活かした複数の選択肢を作れます。",
  },
] as const;

const approachRows = [
  {
    axis: "主な狙い",
    age40: "現職での役割拡張や次のポジションに向けた実装力を強化する",
    age50: "経験知をAI活用で再現可能な形に整理し、組織や顧客への提供価値を高める",
  },
  {
    axis: "学習テーマ",
    age40: "業務改善の自動化、提案資料作成、分析補助など実務直結テーマを優先する",
    age50: "意思決定支援、ナレッジ体系化、部門横断で使える運用ルールづくりを優先する",
  },
  {
    axis: "進め方",
    age40: "短い学習サイクルで試作し、職場で試す回数を増やす",
    age50: "既存業務フローにAIを組み込み、再現性のある手順に落とし込む",
  },
  {
    axis: "成果の見せ方",
    age40: "改善前後の業務プロセスを比較し、実装力を示す",
    age50: "チーム展開可能なテンプレートや意思決定の質向上を示す",
  },
] as const;

const dropoffPatterns = [
  {
    point: "情報収集だけで満足してしまう",
    tip: "学習開始時に「何を改善するか」を一つ決め、毎週アウトプットを残すと前進しやすくなります。",
  },
  {
    point: "完璧に理解してから使おうとして止まる",
    tip: "まず小さく使って結果を見る運用に切り替えると、理解と実践が同時に進みます。",
  },
  {
    point: "相談相手がいないため判断が遅れる",
    tip: "講座のコミュニティやメンターを活用し、定期的に方向修正する仕組みを作るのが有効です。",
  },
  {
    point: "学習時間の確保を大きく見積もりすぎる",
    tip: "長時間確保を前提にせず、短時間でも続けられる単位で設計すると継続しやすくなります。",
  },
] as const;

const learningMethodRows = [
  {
    method: "独学",
    cost: "費用を抑えて始めやすい",
    strength: "自分のペースで進めやすい",
    caution: "学習設計と進捗管理を自分で行う必要があり、挫折対策が必要",
  },
  {
    method: "オンライン講座",
    cost: "内容とサポート範囲により幅がある",
    strength: "体系化されたカリキュラムと質問環境を得やすい",
    caution: "受け身になると成果が薄くなるため、実務課題との接続が重要",
  },
  {
    method: "通学講座",
    cost: "学習支援が厚い分、相対的に費用が高くなりやすい",
    strength: "対面で強制力が働き、フィードバックが得やすい",
    caution: "通学時間や生活リズムとの両立を事前に確認する必要がある",
  },
] as const;

const keywordTags = ["40代 リスキリング", "50代 学び直し", "AI 独学 挫折"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "why-over-40-learn-ai", label: "40代・50代がAIを学ぶべき理由" },
  { id: "approach-by-age", label: "年代別の現実的な学習アプローチ" },
  { id: "dropoff-and-continuation", label: "独学で挫折しやすいポイントと継続のコツ" },
  { id: "method-comparison", label: "学習手段の比較" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function ReskillingOver40Page({ faqItems }: ReskillingOver40PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "40代・50代からのAIリスキリング完全ガイド" },
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
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton title="40代・50代からのAIリスキリング完全ガイド" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            40代・50代からのAIリスキリング完全ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            40代・50代のAI学習とは、年齢を不利と捉えるより、経験を活かした学び方へ設計することが重要です。
            本記事では、年代別の進め方、独学で挫折しやすいポイント、学習手段の選び方を整理します。
            「今の仕事の改善テーマ」を1つ決めてから学ぶと、学習がブレにくくなります。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-over-40-learn-ai" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            40代・50代がAIを学ぶべき理由（不安の整理と年代特有の強み）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            学び直しで最初に必要なのは、不安を否定することではなく「何を解消すれば前進できるか」を見える化することです。業務経験を活かせる領域から始めると、
            AI学習は実務価値に接続しやすくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {reasonCards.map((item) => (
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
          <h2 id="approach-by-age" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            年代別の現実的な学習アプローチ（40代と50代の違い）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            世代で優劣が決まるわけではありませんが、置かれている役割や責任の違いから、学習の優先順位は変わります。以下は一般的な整理です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">40代の学習アプローチ</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">50代の学習アプローチ</th>
                </tr>
              </thead>
              <tbody>
                {approachRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.age40}</td>
                    <td className="py-4 pl-4">{row.age50}</td>
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
          <h2 id="dropoff-and-continuation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            独学で挫折しやすいポイントと継続のコツ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            挫折は「計画の曖昧さ」と「判断の孤独」で起きやすくなります。失敗パターンを先に知り、学習を続けるための仕組みを用意しましょう。
          </p>
          <dl className="mt-6 space-y-4">
            {dropoffPatterns.map((item) => (
              <div key={item.point} className="rounded-lg border border-gray-200 p-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">挫折ポイント: {item.point}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">継続のコツ: {item.tip}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="method-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            学習手段の比較（独学・オンライン講座・通学）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            続けやすさは「自走できるか」より「支援導線があるか」で決まることが多いです。自分のつまずきポイントに合う手段を選びましょう。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">学習手段</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">費用感（一般的傾向）</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {learningMethodRows.map((row) => (
                  <tr key={row.method} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.method}</th>
                    <td className="py-4 px-4">{row.cost}</td>
                    <td className="py-4 px-4">{row.strength}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
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
          viewport={{ once: true, amount: 0.25 }}
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

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/skills-for-ai-era-career" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代に必要なスキルを職種別に解説｜2026年版キャリア戦略 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-career-change-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代のキャリアチェンジ事例（構成例）｜転換と成長のパターンを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-coding-for-beginners"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方 | AIリブート
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
              <Link
                href="/academy/blog/g-e-certification-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                G検定とE検定の違いを徹底比較｜難易度・費用・向いている人を解説 | AIリブート
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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              40代・50代のAIリスキリングは、年齢よりも「既存経験をどうAI活用へ接続するか」で成果が決まります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              40代は役割拡張、50代は経験知の体系化というように、目標に合わせて学習設計を変えると進みやすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              独学で挫折しやすい場面は事前に予防できるため、学習手段ごとの特徴を理解して継続可能な方法を選ぶことが重要です。
            </li>
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
            学び直しを具体化したい方へ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            無料セミナーで全体像を把握し、個別相談であなたの経験に合う学習計画を整理できます。継続しやすい設計を先に作ることが、遠回りを防ぐ近道です。
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
