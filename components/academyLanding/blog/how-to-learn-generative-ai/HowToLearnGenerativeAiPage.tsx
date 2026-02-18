"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type HowToLearnGenerativeAiPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const phaseItems = [
  {
    phase: "基礎理解（1-30日）",
    week: "Week 1-4",
    heading: "ChatGPT/Claude基本操作とプロンプトエンジニアリング入門",
    summary:
      "最初の1か月は、ツールを正しく扱うための土台づくりです。まず1つのツールを軸に、目的と出力形式を指定する基本を固めます。",
    tasks: [
      "ChatGPTまたはClaudeで毎日1つ業務タスクを試す",
      "目的・前提・制約・出力形式を分けるプロンプトの型を身につける",
      "要約、メール下書き、議事録整理など短い業務で反復する",
    ],
  },
  {
    phase: "実践応用（31-70日）",
    week: "Week 5-10",
    heading: "画像生成AI・AIコーディング（Cursor等）・ドキュメント自動化に拡張する",
    summary:
      "次の40日は、複数用途に広げる実践期間です。単発利用から、業務で再現できる活用パターンを作る段階に入ります。",
    tasks: [
      "画像生成AIで提案資料やSNS素材の初稿を作る",
      "コード生成（Cursorなど）で小さな自動化スクリプトや関数を試作する",
      "議事録、報告書、FAQ作成などの文書業務をテンプレート化する",
    ],
  },
  {
    phase: "業務統合（71-100日）",
    week: "Week 11-14",
    heading: "自社業務への適用、ワークフロー構築、チーム展開",
    summary:
      "最後の30日は、個人スキルを業務成果へ統合します。成果物と運用ルールを整え、チームで継続できる状態を作ります。",
    tasks: [
      "自社業務の1プロセスを選び、AI活用フローを設計する",
      "品質チェック項目と最終判断者を明確化する",
      "Claude Projectsなどのプロジェクト機能で、よく使う指示・資料・改善ログを整理する",
      "手順書を共有し、チームで再現できる運用を構築する",
    ],
  },
] as const;

const pitfallItems = [
  {
    title: "学ぶ順番が曖昧で、毎週テーマが変わってしまう",
    solution:
      "100日を3フェーズに固定し、週ごとに1テーマだけ進めると継続しやすくなります。",
  },
  {
    title: "出力をそのまま使い、品質確認が抜ける",
    solution:
      "事実確認、根拠確認、最終判断は人が行うルールを最初に決めることが重要です。",
  },
  {
    title: "学習した内容が実務に接続されない",
    solution:
      "毎週1つ、現場タスクに適用して改善時間を記録すると実務での定着が早まります。",
  },
] as const;

const comparisonRows = [
  {
    type: "独学",
    strengths: "費用を抑えやすく、自分のペースで進められる。",
    risks: "正しい順序設計とフィードバックを自力で行う必要がある。",
    fit: "自走力が高く、検証習慣を持てる人。",
  },
  {
    type: "スクール",
    strengths: "学習順序が整理され、質問や添削で迷いを減らせる。",
    risks: "受講費用が発生し、カリキュラムに合わせる必要がある。",
    fit: "短期間で実務適用まで到達したい人。",
  },
] as const;

const keywordTags = ["生成AI 学び方", "100日ロードマップ", "独学とスクール比較"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "learning-phases", label: "学習の3フェーズ（0→100日）" },
  { id: "pitfalls", label: "よくあるつまずきポイントと対策" },
  { id: "self-study-vs-school", label: "独学 vs スクールの比較" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function HowToLearnGenerativeAiPage({ faqItems }: HowToLearnGenerativeAiPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AI学習法" },
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
            社会人のための生成AI学習ロードマップ｜0→100日で実務活用レベルへ
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AIは、正しい順序で学べば100日で実務レベルに到達可能です。
            この記事では、基礎理解→実践→業務統合の3フェーズを100日で回すロードマップと、つまずきやすいポイントを結論先出しで整理します。
            生成AIとは、「何から手を付ければいいか」が曖昧だと、触って終わりになりやすい分野です。
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
            生成AIは、正しい順序で学べば100日で実務レベルに到達可能です。ツールを増やすより、1つの業務を確実に改善できる使い方を段階的に増やすのが近道です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「学習→試す→振り返る」を短いサイクルで回し、成果物（議事録テンプレ、営業メール、分析メモなど）を残すと、継続しやすくなります。
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
          <h2 id="learning-phases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            学習の3フェーズ（0→100日）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            100日を「基礎理解 → 実践応用 → 業務統合」に分けると、学習が点ではなく線になります。各フェーズのゴールを先に固定しましょう。
          </p>
          <div className="mt-8 space-y-8">
            {phaseItems.map((phase, index) => (
              <motion.section
                key={phase.phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionReveal}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold leading-8 text-gray-900">{phase.phase}</h3>
                <p className="mt-1 text-sm font-medium text-gray-500">{phase.week}</p>
                <p className="mt-4 text-base font-medium leading-8 text-gray-900">{phase.heading}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{phase.summary}</p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {phase.tasks.map((task) => (
                    <li key={task} className="pl-1 marker:text-gray-500">
                      {task}
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
          <h2 id="pitfalls" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくあるつまずきポイントと対策
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            つまずきの原因は「順序がない」「検証がない」「実務とつながらない」の3つに集約されます。先に落とし穴を知っておくと、学習が安定します。
          </p>
          <div className="mt-6 space-y-4">
            {pitfallItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.solution}</p>
              </div>
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
          <h2 id="self-study-vs-school" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            独学 vs スクールの比較
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            どちらが正解かではなく、現在の制約に合う方法を選ぶことが重要です。講座選びを具体化したい方は
            <Link
              href="/academy/ai-training-for-individuals"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              個人向けAI研修の比較ページ
            </Link>
            も確認してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">学習方法</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.type} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.type}</th>
                    <td className="py-4 px-4">{row.strengths}</td>
                    <td className="py-4 px-4">{row.risks}</td>
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 大事なのは「ツール」より「順序」と「検証」です。よくある疑問をQ&Aで整理します。
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

        <section className="mt-14 border-t border-slate-200 pt-12 pb-4">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けにわかりやすく解説｜ChatGPT・Claude・Geminiの違いと始め方【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること | AIリブート
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
                href="/academy/blog/python-ai-intro"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Python × AI入門｜環境構築からはじめての機械学習までの学習ロードマップ | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド｜不安を解消して学び始める方法 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-course-ranking" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI講座ランキング2026｜選び方の基準と目的別おすすめを解説 | AIリブート
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
            <li className="pl-1 marker:text-gray-500">生成AIは、正しい順序で学べば100日で実務レベルに到達可能です。</li>
            <li className="pl-1 marker:text-gray-500">ツールを増やすより、1つの業務を確実に改善できる使い方を段階的に増やすのが近道です。</li>
            <li className="pl-1 marker:text-gray-500">「学習→試す→振り返る」を短いサイクルで回し、成果物（議事録テンプレ、営業メール、分析メモなど）を残すと、継続しやすくなります。</li>
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
            次の一歩を決めたい方へ
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            迷ったら「どの業務を改善するか」を1つだけ決めて、学習計画をそこに合わせるのが一番早いです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ひとりで学習計画を作るのが難しい場合は、無料セミナーと個別相談を使って現在地を確認するのが近道です。無理なく続く学習ルートを一緒に設計できます。
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
