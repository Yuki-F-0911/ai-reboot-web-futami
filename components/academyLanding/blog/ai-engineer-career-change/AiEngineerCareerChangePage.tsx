"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiEngineerCareerChangePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skillSetRows = [
  {
    category: "プログラミング基礎",
    mustHave: "Pythonの文法、関数、データ構造、例外処理を理解する",
    practicalUse: "前処理スクリプトの作成、データ整形の自動化",
  },
  {
    category: "データ処理",
    mustHave: "CSV/JSONの取り扱い、欠損値処理、基本統計の理解",
    practicalUse: "分析用データの整備、レポート作成の土台づくり",
  },
  {
    category: "AI活用実装",
    mustHave: "機械学習の基本概念、生成AI APIの利用、評価観点の理解",
    practicalUse: "分類・要約・検索拡張など小規模機能の実装",
  },
  {
    category: "開発運用",
    mustHave: "Git、README整備、ログ設計、簡易テストの習慣",
    practicalUse: "ポートフォリオ品質の向上、チーム開発への適応",
  },
] as const;

const roadmapPhases = [
  {
    phase: "基礎フェーズ",
    goal: "AI開発の前提となる技術基盤を揃える",
    action: "Python基礎、データ処理、SQL、Gitの基本操作を学ぶ",
    output: "前処理スクリプトと簡易分析ノートを作成する",
  },
  {
    phase: "実践フェーズ",
    goal: "AI機能を組み込んだ成果物を作る",
    action: "業務課題を題材に、要件定義から実装、評価まで一連で取り組む",
    output: "再現手順付きのポートフォリオを1〜2本作成する",
  },
  {
    phase: "転職準備フェーズ",
    goal: "選考で伝わる形に整える",
    action: "職務経歴書と成果物説明を一貫させ、想定質問への回答を準備する",
    output: "応募書類、面接想定問答、ポートフォリオ説明資料を整備する",
  },
] as const;

const learningMethodRows = [
  {
    method: "独学",
    strength: "費用を抑えやすく、学習ペースを自由に調整できる",
    caution: "迷ったときの軌道修正が難しく、継続管理が必要",
    fit: "自己管理が得意で、学習計画を自分で設計できる人",
  },
  {
    method: "スクール",
    strength: "カリキュラムとレビューがあり、学習順序が明確になりやすい",
    caution: "受け身になると成果物の独自性が弱くなる",
    fit: "短期間で体系的に学び、転職支援を活用したい人",
  },
  {
    method: "OJT・社内PJ参画",
    strength: "実務課題に直結し、成果の説得力が高い",
    caution: "配属や業務都合に左右され、計画通りに進まないことがある",
    fit: "現職でDX案件に関われる環境がある人",
  },
] as const;

const portfolioSteps = [
  {
    title: "1. 課題設定を明確にする",
    body: "誰のどの業務課題を解決するかを先に定義します。課題が曖昧だと、実装の意図が伝わりません。",
  },
  {
    title: "2. データと前提を整理する",
    body: "利用データ、制約、評価指標を明記します。再現性のある前提設定が信頼性につながります。",
  },
  {
    title: "3. 実装と評価をセットで示す",
    body: "モデルやAPIの選定理由、結果、改善余地までを一連で記述し、検証姿勢を示します。",
  },
  {
    title: "4. READMEで運用視点を補足する",
    body: "セットアップ手順、利用時の注意点、拡張案を記載して、実務運用を想定できる状態にします。",
  },
] as const;

const careerPathByAge = [
  {
    ageBand: "20代",
    direction: "ジュニアAIエンジニア、データアナリスト補助、AI実装担当",
    keyPoint: "学習吸収力を活かし、実装量と改善履歴を積み上げることが重要です。",
  },
  {
    ageBand: "30代",
    direction: "業務知識を持つAI活用推進、プロダクト開発寄りの役割",
    keyPoint: "これまでの業界経験を強みに、AI導入の課題設定力を示すと評価されやすくなります。",
  },
  {
    ageBand: "40代",
    direction: "DX推進、業務設計とAI導入の橋渡し、実装マネジメント",
    keyPoint: "技術単体より、現場導入と運用定着までを設計できる視点が差別化要素になります。",
  },
] as const;

const keywordTags = ["AIエンジニア 転職 未経験", "AI転職ロードマップ", "AIポートフォリオ"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "required-skill-sets", label: "必要なスキルセット" },
  { id: "learning-roadmap", label: "学習ロードマップ（基礎→実践→転職準備）" },
  { id: "learning-method-comparison", label: "学習手段の比較（独学/スクール/OJT）" },
  { id: "portfolio-building", label: "評価されるポートフォリオの作り方" },
  { id: "career-path-by-age", label: "年代別の現実的なキャリアパス" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function AiEngineerCareerChangePage({ faqItems }: AiEngineerCareerChangePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "未経験からAIエンジニアへの転職ロードマップ" },
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
            未経験からAIエンジニアへの転職ロードマップ
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            未経験転職は、基礎→実践→転職準備を切り分け、成果物を軸に応募へ接続すると成功確率が上がります。
            本記事では、必要スキル、学習ロードマップ、学習手段の比較、評価されるポートフォリオの作り方までを結論先出しで整理します。
            未経験からAIエンジニアを目指す場合とは、学習範囲を広げすぎず、基礎→実践→転職準備を段階的に進めることが重要です。
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
          <p className="mt-5 text-base font-medium text-gray-900">
            未経験転職は、基礎→実践→転職準備を切り分け、成果物を軸に応募へ接続すると成功確率が上がります。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              未経験転職では、Python基礎、データ処理、AI活用実装、開発運用の4領域をバランスよく押さえることが重要です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              学習は「基礎→実践→転職準備」の順で進め、成果物を軸に応募準備へ接続すると、選考で説明しやすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              年代を問わず、前職の業務経験とAIスキルを掛け合わせたポジション設計が現実的なキャリア戦略になります。
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
          <h2 id="required-skill-sets" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            未経験からAIエンジニアになるために必要なスキルセット
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            「高度な理論を網羅する」より「実務で再現できる基礎を固める」ほうが、転職成功につながりやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">領域</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">最低限押さえる内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務での使いどころ</th>
                </tr>
              </thead>
              <tbody>
                {skillSetRows.map((row) => (
                  <tr key={row.category} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.category}</th>
                    <td className="py-4 px-4">{row.mustHave}</td>
                    <td className="py-4 pl-4">{row.practicalUse}</td>
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
          <h2 id="learning-roadmap" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            学習ロードマップ（基礎→実践→転職準備）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            学習はフェーズを区切り、各フェーズで成果物を1つ作ると、転職準備（職務経歴書/面接での説明）に接続しやすくなります。
          </p>
          <div className="mt-6 space-y-4">
            {roadmapPhases.map((phase) => (
              <section key={phase.phase} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">目標: {phase.goal}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">取り組み: {phase.action}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">成果物: {phase.output}</p>
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
          <h2 id="learning-method-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            未経験者が選ぶべき学習手段の比較（独学/スクール/OJT）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            独学/スクール/OJTは「学習時間」「フィードバック速度」「強制力」のどれを優先するかで選ぶと迷いにくいです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            使える時間、予算、現在の職場環境によって、最適な学習手段は変わります。自分の状況でボトルネックになっている要素を1つだけ決めて選ぶと、途中で迷いにくくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">学習手段</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {learningMethodRows.map((row) => (
                  <tr key={row.method} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.method}</th>
                    <td className="py-4 px-4">{row.strength}</td>
                    <td className="py-4 px-4">{row.caution}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
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
          <h2 id="portfolio-building" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            転職活動で評価されるポートフォリオの作り方
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            モデル精度の高さだけでなく、課題設定と改善プロセスを説明できる構成が評価につながります。
          </p>
          <div className="mt-6 space-y-4">
            {portfolioSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
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
          <h2 id="career-path-by-age" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            年代別の現実的なキャリアパス（20代/30代/40代）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            年代によって戦い方は変わりますが、重要なのは「前職経験×AIスキル」で勝てるポジションを定義することです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {careerPathByAge.map((path) => (
              <section key={path.ageBand} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{path.ageBand}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">主な方向性: {path.direction}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">ポイント: {path.keyPoint}</p>
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
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            よくある疑問をQ&Aで整理します。学習環境（独学/スクール/OJT）や希望職種によって最適な進め方は変わるため、前提条件に合わせて調整してください。
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
              <Link href="/academy/blog/ai-career-change-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代のキャリアチェンジ事例集｜受講生が語る転換と成長のリアル | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/skills-for-ai-era-career" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代に必要なスキルを職種別に解説｜2026年版キャリア戦略 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド｜経験を強みに学び直す方法 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-course-ranking" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI講座ランキング2026｜選び方の基準と目的別おすすめを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-side-business-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                副業でAIを活用する始め方ガイド｜学習から案件獲得までの現実的な進め方 | AIリブート
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
          <p className="mt-5 text-base font-medium text-gray-900">
            迷ったら「現状の経験をどうAI文脈に翻訳するか」を先に決めると、学習と応募の両方が前に進みます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            転職戦略を一人で組み立てるのが難しい場合は、無料セミナーで全体像を整理し、個別相談で現職経験を活かしたキャリア設計を確認する進め方が有効です。
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
