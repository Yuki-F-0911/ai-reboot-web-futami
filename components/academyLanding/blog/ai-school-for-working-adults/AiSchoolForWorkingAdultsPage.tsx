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

type AiSchoolForWorkingAdultsPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const selectionCriteria = [
  {
    title: "1. 受講形式（オンライン / 通学）",
    body: "平日夜や早朝に学びたい場合はオンライン、学習習慣を作るために環境を変えたい場合は通学型が選ばれやすい傾向です。時間制約と通学負担の両方で判断しましょう。",
  },
  {
    title: "2. カリキュラム内容",
    body: "基礎知識だけで終わらず、実務で使う課題演習やケーススタディまで含まれるかが重要です。業務効率化、転職、副業など目的に合う内容かを確認します。",
  },
  {
    title: "3. サポート体制",
    body: "質問対応の速度、課題添削、面談頻度、コミュニティの有無で学習継続率は変わります。忙しい社会人ほど、迷ったときの支援導線が重要です。",
  },
  {
    title: "4. 費用と支払い条件",
    body: "受講料だけでなく、教材費、追加オプション、分割払いの条件も確認します。費用は安さよりも、達成したい目的に対する投資対効果で判断するのが一般的です。",
  },
  {
    title: "5. 修了後の活用支援",
    body: "修了後に業務へ接続できる設計があるかを確認しましょう。転職支援、副業案件への接続、業務改善テーマの伴走など、卒業後の導線が差になります。",
  },
] as const;

const formatComparison = [
  {
    axis: "学習時間の柔軟性",
    online: "高い。出勤前後や隙間時間に進めやすい。",
    onsite: "時間固定になりやすい。予定調整が必要。",
  },
  {
    axis: "学習習慣の作りやすさ",
    online: "自走力が必要。進捗管理を自分で行う。",
    onsite: "通学リズムで学習習慣を作りやすい。",
  },
  {
    axis: "質問・相談のしやすさ",
    online: "チャットや面談枠で対応。即時性は運営次第。",
    onsite: "対面で相談しやすく、温度感を共有しやすい。",
  },
  {
    axis: "移動コスト",
    online: "不要。地方在住でも参加しやすい。",
    onsite: "発生する。移動時間と交通費を考慮する必要あり。",
  },
] as const;

const goalBasedChoices = [
  {
    goal: "業務効率化",
    focus: "日常業務に近い課題演習、テンプレート化、社内展開の実践支援",
    note: "業務時間の短縮や品質均一化を狙う場合に有効です。",
  },
  {
    goal: "転職",
    focus: "ポートフォリオ制作、キャリア相談、面接対策、求人要件に沿った学習設計",
    note: "学習内容と応募職種の接続が明確な講座を選びます。",
  },
  {
    goal: "副業",
    focus: "納品物ベースの演習、提案文作成、案件対応フローの理解",
    note: "実務を想定したアウトプット形式で練習することが重要です。",
  },
  {
    goal: "資格取得",
    focus: "試験範囲の体系化、過去問演習、学習計画の管理",
    note: "資格学習を実務にどう活かすかまで設計されていると定着しやすくなります。",
  },
] as const;

const subsidyCheckpoints = [
  "講座ページに制度名（補助金・給付金）が明記されているか確認する",
  "対象者条件（雇用形態、受講期間、申請タイミング）が説明されているか確認する",
  "申請フローと必要書類を事前に案内しているか確認する",
  "還元方式（後日還付か、受講時減額か）を確認する",
  "最終条件は運営窓口または公式窓口で最新情報を確認する",
] as const;

const keywordTags = ["AIスクール 社会人 おすすめ", "オンライン AI講座", "資格・スキル"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "selection-criteria", label: "社会人がAIスクールを選ぶ5つの基準" },
  { id: "online-vs-onsite", label: "オンライン vs 通学の比較" },
  { id: "goal-based-selection", label: "目的別の選び方" },
  { id: "subsidy-benefit-check", label: "補助金・給付金を使える講座の見分け方" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function AiSchoolForWorkingAdultsPage({ faqItems }: AiSchoolForWorkingAdultsPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "社会人向けAIスクールの選び方" },
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
              <CopyAsMarkdownButton title="社会人向けAIスクールの選び方ガイド" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            社会人向けAIスクールの選び方ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            社会人の講座選びは、受講形式・カリキュラム・サポート・費用・修了後活用の5基準で比較するのが基本です。
            この記事では、社会人が失敗しないための5基準・オンライン/通学の選び分け・目的別のチェック順を結論先出しで整理します。
            講座は増え続けていますが、比較の順番を間違えると「受けたのに使えない」状態になりがちです。
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
              社会人の講座選びは、受講形式・カリキュラム・サポート・費用・修了後活用の5基準で比較するのが基本です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              オンラインは柔軟性、通学は習慣化に強みがあるため、勤務形態と学習スタイルの相性で選ぶのが現実的です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              補助金・給付金対象かどうかは、制度名、対象条件、申請フローの明示を確認し、最終的に窓口で最新条件を確認しましょう。
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
          <h2 id="selection-criteria" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            社会人がAIスクールを選ぶ際の5つの基準
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 料金の比較より先に「学習の継続性」と「修了後に実務へつなげられるか」を確認するのが安全です。2026年はAIエージェントやマルチモーダル前提の実務が増える傾向があるため、
            ツール操作だけで終わらない演習設計になっているかを見ておきましょう。
          </p>
          <div className="mt-6 space-y-4">
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="online-vs-onsite" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            オンライン vs 通学の比較
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: どちらが優れているかではなく、生活リズムとの一致が継続性を左右します。自分の制約（時間・場所・フィードバック頻度）に合う形式を選びましょう。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">オンライン</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">通学</th>
                </tr>
              </thead>
              <tbody>
                {formatComparison.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.online}</td>
                    <td className="py-4 pl-4">{row.onsite}</td>
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
          <h2 id="goal-based-selection" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            目的別の選び方（業務効率化 / 転職 / 副業 / 資格取得）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            同じAIスクールでも、目的が違うと重視すべき要素は変わります。最初に目的を固定してから比較することで、選定の迷いを減らせます。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {goalBasedChoices.map((item) => (
              <section key={item.goal} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.goal}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">重視ポイント:</span> {item.focus}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.note}</p>
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
          <h2 id="subsidy-benefit-check" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            補助金・給付金を使える講座の見分け方
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            制度適用の可否は講座ごとに異なります。比較時は「対象になるか」だけでなく、「どの条件で適用されるか」まで確認することが重要です。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {subsidyCheckpoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            補助金制度の全体像を先に確認したい場合は
            <Link
              href="/academy/subsidy-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              補助金ガイド
            </Link>
            も参考になります。
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
              <Link href="/academy/blog/ai-course-ranking" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI講座ランキング2026｜選び方の基準と目的別おすすめを解説 | AIリブート
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
                href="/academy/blog/ai-coding-for-beginners"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方 | AIリブート
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
              <Link
                href="/academy/blog/education-training-benefit-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                教育訓練給付金でAI講座を受講するガイド｜制度比較と費用の考え方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド｜経験を強みに学び直す方法 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-career-change-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代のキャリアチェンジ事例（構成例）｜転換と成長のパターンを解説 | AIリブート
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
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 比較で止まらず、目的に合う学習ルートまで落とし込むのが最短です。無料セミナー/個別相談で短時間で整理できます。
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
            <li className="pl-1 marker:text-gray-500">社会人の講座選びは、受講形式・カリキュラム・サポート・費用・修了後活用の5基準で比較するのが基本です。</li>
            <li className="pl-1 marker:text-gray-500">オンラインは柔軟性、通学は習慣化に強みがあるため、勤務形態と学習スタイルの相性で選ぶのが現実的です。</li>
            <li className="pl-1 marker:text-gray-500">補助金・給付金対象かどうかは、制度名、対象条件、申請フローの明示を確認し、最終的に窓口で最新条件を確認しましょう。</li>
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
