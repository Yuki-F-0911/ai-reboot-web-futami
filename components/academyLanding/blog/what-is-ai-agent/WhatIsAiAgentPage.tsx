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

type WhatIsAiAgentPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AIエージェントとは", "2026年3月版", "勢力図", "ReAct", "Tool use", "Memory"] as const;

const tocItems = [
  { id: "answer-30sec", label: "AIエージェントとは？（30秒要約）" },
  { id: "concept-answer-box", label: "ReAct・Tool use・Memoryの要点" },
  { id: "landscape-2026", label: "2026年3月のAIエージェント勢力図" },
  { id: "selection-guide", label: "用途別の使い分けガイド" },
  { id: "adoption-steps", label: "導入を失敗しない5ステップ" },
  { id: "realistic-limits", label: "現実的な制限と対策" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answer30secPoints = [
  "AIエージェントは、目標を受け取った後に「計画→実行→観測→修正」を繰り返して完了へ進む実行主体です。",
  "チャットAIとの違いは、単発回答ではなく外部ツール操作や複数工程の継続実行まで含む点にあります。",
  "2026年3月時点では、汎用1強ではなく「ブラウザ操作・PC操作・開発自動化」で得意領域が分かれています。",
  "成果を出す鍵は、モデル選定より「どの業務をどこまで任せるか」を先に設計することです。",
] as const;

const conceptCards = [
  {
    title: "ReActループ",
    body: "Reasoning（考える）とActing（行動）を往復し、途中結果を見て次アクションを更新する制御ループです。長いタスクほど、この反復品質が成果を左右します。",
    practical: "例: 問い合わせ分析→追加データ取得→分類ルール修正→再実行",
  },
  {
    title: "Tool use",
    body: "エージェントが外部API、ブラウザ、ファイル操作、社内DBなどを呼び出す実行能力です。回答品質より、操作権限と失敗時挙動の設計が重要になります。",
    practical: "例: CRM更新、チケット起票、会議メモ保存、コード修正",
  },
  {
    title: "Memory",
    body: "会話履歴だけでなく、タスク履歴・ユーザー設定・過去の判断結果を保持し、次回の意思決定に再利用する仕組みです。保持範囲の設計が安全性に直結します。",
    practical: "例: 顧客対応履歴を参照し、返答トーンや優先度を自動調整",
  },
] as const;

const landscapeRows = [
  {
    service: "OpenAI Operator",
    category: "ブラウザ実行",
    strength: "Web操作の再現性が高く、予約・フォーム業務で使いやすい",
    caution: "認証・2FA・例外画面で停止しやすいため手動介入点を設計する",
  },
  {
    service: "OpenAI Atlas",
    category: "PC操作支援",
    strength: "デスクトップ文脈での操作補助とタスク連続実行を狙いやすい",
    caution: "操作対象範囲とログ管理を明示しないと運用責任が曖昧になる",
  },
  {
    service: "Manus",
    category: "マルチエージェント",
    strength: "複数タスク分担の同時進行に強みを出しやすい",
    caution: "成果物統合時の品質基準を決めないとばらつきが増える",
  },
  {
    service: "Genspark",
    category: "調査・生成統合",
    strength: "調査から出力生成までを短時間でつなげやすい",
    caution: "一次情報確認を省くと誤情報をそのまま採用しやすい",
  },
  {
    service: "Claude Computer Use",
    category: "画面認識＋操作",
    strength: "GUIをまたぐ手順の自動化に向く",
    caution: "長時間連続実行では途中確認と復旧ルールが必要",
  },
  {
    service: "Claude Code",
    category: "開発自動化",
    strength: "コードベース理解、修正、テスト反復の実務運用に強い",
    caution: "ローカル権限とレビュー責任を定義しないとリスクが増える",
  },
] as const;

const routingRows = [
  {
    task: "予約・定型フォーム入力を自動化したい",
    recommendation: "Operator",
    reason: "ブラウザ操作の再現性を活かしやすい",
  },
  {
    task: "PC画面をまたぐ定型作業を減らしたい",
    recommendation: "Atlas / Computer Use系",
    reason: "画面認識と操作の組み合わせで手順化しやすい",
  },
  {
    task: "開発タスクの実装と検証を高速化したい",
    recommendation: "Claude Code / Copilot Agent",
    reason: "コード修正とテスト反復に適した実行能力を持つ",
  },
  {
    task: "調査から下書き生成まで一気通貫で進めたい",
    recommendation: "Genspark系エージェント",
    reason: "情報収集と生成を一連で扱いやすい",
  },
] as const;

const adoptionSteps = [
  {
    title: "Step 1. 対象業務を1つに固定する",
    body: "最初は1業務1指標で始めます。例: 問い合わせ一次仕分けを30%削減。",
  },
  {
    title: "Step 2. 成功条件と停止条件を同時に決める",
    body: "成功率だけでなく、どの状態になったら人が介入するかを明文化します。",
  },
  {
    title: "Step 3. ツール権限とデータ境界を設定する",
    body: "実行可能な操作範囲、機密データの扱い、ログ保存先を先に固定します。",
  },
  {
    title: "Step 4. 2〜4週間のPoCで失敗ログを集める",
    body: "成功例より失敗ログのほうが改善価値が高いため、原因分類を必ず行います。",
  },
  {
    title: "Step 5. 承認フローを付けて本番展開する",
    body: "レビュー責任者、例外対応、ロールバックを運用手順として定着させます。",
  },
] as const;

const limitCards = [
  {
    title: "認証フローで停止しやすい",
    body: "2FA、CAPTCHA、セッション期限切れは自動化の中断要因です。再認証手順を事前に定義してください。",
  },
  {
    title: "長時間タスクは品質が揺れやすい",
    body: "処理が長いほど途中逸脱が起きやすくなります。チェックポイントを分割して設計します。",
  },
  {
    title: "高リスク業務の完全無人化は早い",
    body: "法務・決済・人事評価は承認者を必ず挟み、最終判断を人に残すのが現実的です。",
  },
] as const;

export default function WhatIsAiAgentPage({ faqItems }: WhatIsAiAgentPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIエージェントとは？" },
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
              <CopyAsMarkdownButton
                title="AIエージェントとは？2026年3月版の勢力図と実務活用ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIエージェントとは？2026年3月版の勢力図と実務活用ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年3月5日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIエージェントは、2026年に入り「何でも自動化する概念」から「業務ごとに使い分ける実行基盤」へ実務上の扱いが変わりました。本記事は、30秒要約、最新勢力図、導入手順、失敗しやすい制限まで
            一貫して整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-30sec"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AIエージェントとは？（30秒でわかる要約）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {answer30secPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="concept-answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">ReActループ・Tool use・メモリの概念（Answer Box）</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {conceptCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-blue-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-blue-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
                <p className="mt-3 text-xs leading-6 text-blue-800">{card.practical}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="landscape-2026"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AIエージェント勢力図（2026年3月版）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            以下は、実務で参照される主要プレイヤーを「得意領域」と「運用上の注意」で整理した勢力図です。Operator、Atlas、Manus、Genspark、Claude Computer Use、Claude Codeを同一基準で比較しています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">サービス</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">カテゴリ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な強み</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {landscapeRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="px-4 py-4">{row.category}</td>
                    <td className="px-4 py-4">{row.strength}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="selection-guide"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">用途別の使い分けガイド</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">やりたいこと</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">推奨候補</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">理由</th>
                </tr>
              </thead>
              <tbody>
                {routingRows.map((row) => (
                  <tr key={row.task} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.task}</th>
                    <td className="px-4 py-4">{row.recommendation}</td>
                    <td className="py-4 pl-4">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="adoption-steps"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">導入を失敗しない5ステップ</h2>
          <div className="mt-6 space-y-4">
            {adoptionSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="realistic-limits"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">現実的な制限と対策</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {limitCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
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
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-landscape-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェント最新勢力図 2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-code-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Codeとは？使い方・料金・始め方を完全解説
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
