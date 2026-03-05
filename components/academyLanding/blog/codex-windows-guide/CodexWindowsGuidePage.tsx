"use client";

import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type CodexWindowsGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "OpenAI Codex Windows版",
  "AIコーディング デスクトップ",
  "Codex 実践",
] as const;

const tocItems = [
  { id: "answer-box", label: "要点まとめ（Answer Box）" },
  { id: "background", label: "Windows版リリースの背景" },
  { id: "features", label: "主な機能・特徴" },
  { id: "install", label: "インストール方法" },
  { id: "voices", label: "実践者の声（Xより）" },
  { id: "use-cases", label: "実務での活用パターン" },
  { id: "comparison", label: "Cursor・Copilotとの使い分け" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answerPoints = [
  "Codex Windows版は2026年3月4〜5日にMicrosoft Storeで公開。WSL不要でPowerShellサンドボックス上でネイティブ動作する。",
  "複数AIエージェントの並列管理・長時間タスク継続・skills.mdカスタマイズが主な強み。",
  "macOS版との機能差はほぼなし。Windows固有のハマりポイントはWSL起動時の権限エラー（exit code=126）。",
] as const;

const featureCards = [
  {
    title: "PowerShellサンドボックスでネイティブ実行",
    body: "WSL不要でWindows環境に直接対応。PowerShellサンドボックス内でコード変更を安全に実行・検証できます。",
  },
  {
    title: "複数AIエージェントの並列管理",
    body: "複数タスクを同時に走らせ、並列でコード変更を進められます（@BitBoxNews）。長時間の実装作業を非同期で継続できる点が特徴です。",
  },
  {
    title: "skills.mdによるカスタマイズ",
    body: "プロジェクトルートに skills.md を置くことで、技術スタック・コーディング規約・よく使うコマンドをCodexに覚えさせられます（@AtharvaXDevs）。",
  },
  {
    title: "長時間タスクの継続実行",
    body: "複雑なリファクタリングやテスト追加など、時間のかかる作業をバックグラウンドで継続。完了後に結果を確認するワークフローが可能です。",
  },
] as const;

const installSteps = [
  {
    step: "Step 1. Microsoft Storeからインストール",
    body: 'Microsoft Storeで「OpenAI.Codex」を検索してインストールします。Windows 10/11に対応しています。',
  },
  {
    step: "Step 2. OpenAIアカウントでサインイン",
    body: "ChatGPT Plus または Pro プランのアカウントでサインインします。無料プランでは利用できません。",
  },
  {
    step: "Step 3. プロジェクトフォルダを開く",
    body: "作業したいプロジェクトのフォルダを選択します。Codexがコードを読み取り、タスク実行の準備が整います。",
  },
  {
    step: "Step 4. skills.mdを作成（任意・推奨）",
    body: "プロジェクトルートに skills.md を作成し、技術スタックやルールを記述します。精度と一貫性が大きく向上します。",
  },
] as const;

const voiceItems = [
  {
    handle: "@fanofaliens",
    quote: "1日かかったバグをCodexが数分で解決してくれた。デスクトップで動くのが思ったより快適。",
    context: "Windows版リリース直後のX投稿より",
  },
  {
    handle: "@WesRoth",
    quote:
      "macOS版に続いてWindows版もWSL不要でネイティブ動作。環境構築の手間がゼロになった。",
    context: "Xの実践者レポートより",
  },
  {
    handle: "@benahm0",
    quote:
      "WSL経由で起動しようとしたら exit code=126 の権限エラーが出た。Windows版はPowerShell直接で使うのが正解。",
    context: "ハマりポイントの共有（Xより）",
  },
] as const;

const useCaseItems = [
  {
    title: "バグの原因調査",
    body: "エラーログやスタックトレースを渡して原因を特定。修正案の提示から差分適用まで一貫して任せられます。複雑な依存関係のあるバグにも有効です。",
  },
  {
    title: "複数機能の並行開発",
    body: "複数のエージェントを並列で走らせ、異なる機能ブランチを同時に進めるワークフローが可能。レビュー待ちの間に別タスクを進めるといった使い方が実践されています。",
  },
] as const;

const comparisonRows = [
  {
    tool: "Codex（Windows/macOS）",
    bestFor: "タスク単位の実装・バグ修正・並列エージェント運用",
    strength: "デスクトップネイティブ・長時間継続実行・skills.mdカスタマイズ",
  },
  {
    tool: "Cursor",
    bestFor: "IDE内での補完・編集・リアルタイムレビュー",
    strength: "視覚的にコードを追いながら高速改善できる",
  },
  {
    tool: "GitHub Copilot",
    bestFor: "エディタ内の補完・コメントからのコード生成",
    strength: "既存開発フローへの統合が容易",
  },
] as const;

export default function CodexWindowsGuidePage({ faqItems }: CodexWindowsGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Codex Windows版実践ガイド" },
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
                title="Codex Windows版リリース実践ガイド｜Xの声から学ぶ導入・活用術【2026年3月】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Codex Windows版リリース実践ガイド｜Xの声から学ぶ導入・活用術【2026年3月】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年3月6日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAI Codexのデスクトップアプリが2026年3月4〜5日にWindows版としてMicrosoft Storeでリリースされました。
            macOS版に続くネイティブ対応により、WSL不要でPowerShell上で動作します。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、Xに投稿された実践者の声をもとに、インストール手順・主な機能・実務ワークフロー・他ツールとの使い分けを整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ（Answer Box）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            {answerPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-600">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="background"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Windows版リリースの背景</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIコーディングツールの競争は、クラウド上のエディタ拡張からデスクトップネイティブへシフトしています。
            @PaulVuAI が「AI coding race is moving from cloud to desktop」と指摘したように、
            ローカルで長時間タスクを継続実行できる環境の需要が急速に高まっています。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            macOS版の好評を受け、OpenAIはWindowsユーザーへの対応を加速。Microsoft Storeを通じた配布により、
            企業ユーザーも組織のデバイス管理ポリシーに沿って展開しやすくなりました。
          </p>
        </motion.section>

        <motion.section
          id="features"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">主な機能・特徴</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-gray-200 bg-gray-50 p-5"
              >
                <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{card.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="install"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">インストール方法</h2>
          <div className="mt-6 space-y-4">
            {installSteps.map((item) => (
              <div key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="voices"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">実践者の声（Xより）</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            リリース直後にXに投稿された実際の声をもとに整理しています。
          </p>
          <div className="mt-6 space-y-4">
            {voiceItems.map((item) => (
              <div
                key={item.handle}
                className="rounded-lg border border-gray-200 bg-white p-5"
              >
                <p className="text-sm font-semibold text-gray-500">{item.handle}</p>
                <p className="mt-2 text-base leading-7 text-gray-800">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-2 text-xs text-gray-400">{item.context}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">実務での活用パターン</h2>
          <div className="mt-6 space-y-4">
            {useCaseItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Cursor・Copilotとの使い分け
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている作業</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">強み</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.bestFor}</td>
                    <td className="py-4 pl-4">{row.strength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-gray-500">
            ※各ツールの機能・価格は随時変更されます。最新情報は公式サイトをご確認ください（確認日: 2026-03-06）。
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
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
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

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>
      </article>
    </main>
  );
}
