"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
  "Codex 使い方 2026",
] as const;

const tocItems = [
  { id: "answer-box", label: "要点まとめ（Answer Box）" },
  { id: "overview", label: "Windows版リリースの概要と背景" },
  { id: "install", label: "インストール手順（4ステップ）" },
  { id: "features", label: "主な機能：Automations・Skills・Worktrees" },
  { id: "agents-md", label: "AGENTS.mdの書き方" },
  { id: "comparison", label: "Cursor・Copilotとの使い分け" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answerPoints = [
  "Codex Windows版は2026年3月4日にMicrosoft Storeで公開。ChatGPT無料プランを含む全プランで利用可能（確認日: 2026-03-16）。",
  "PowerShellとWindowsネイティブサンドボックスで動作するためWSL不要。インストール後すぐに作業フォルダを指定して使い始められる。",
  "Automations（自動実行）・Skills（エージェント拡張）・Worktrees（並列タスク）の3機能が主軸。AGENTS.mdでプロジェクト指示を設定すると精度が向上する。",
] as const;

const overviewCards = [
  {
    label: "リリース日",
    value: "2026年3月4日",
    note: "macOS版の約1ヶ月後",
  },
  {
    label: "配布方法",
    value: "Microsoft Store",
    note: "検索ワード: OpenAI Codex",
  },
  {
    label: "事前ウェイトリスト",
    value: "50万人超",
    note: "Windows版への需要の高さを示す",
  },
  {
    label: "対応プラン",
    value: "全プラン（Free含む）",
    note: "有料プランで利用枠が拡大",
  },
] as const;

const installSteps = [
  {
    step: "Step 1. Microsoft Storeからインストール",
    body: 'Microsoft Storeで「OpenAI Codex」を検索してインストールします。Windows 10/11に対応しています。',
  },
  {
    step: "Step 2. OpenAIアカウントでサインイン",
    body: "ChatGPTアカウント（Free・Plus・Pro等の全プラン）でサインインします。OpenAI APIキーでのサインインも可能です。",
  },
  {
    step: "Step 3. プロジェクトフォルダを開く",
    body: "作業したいプロジェクトのフォルダを選択します。Codexがコードを読み取り、タスク実行の準備が整います。",
  },
  {
    step: "Step 4. AGENTS.mdを作成する（推奨）",
    body: "プロジェクトのGitルートにAGENTS.mdを作成し、技術スタックやコーディング規約を記述します。Codexは作業前にこのファイルを自動で読み込み、プロジェクト固有の指示に従って動きます。",
  },
] as const;

const featureItems = [
  {
    title: "Automations（自動実行）",
    body: "スケジュール実行や条件トリガーで繰り返し作業をCodexに委任する機能です。「毎朝テストを実行してinboxに結果を届ける」「特定のファイルが変更されたら影響範囲を確認する」といった定型業務を自動化できます。Skillsと組み合わせて使うとより強力になります。",
  },
  {
    title: "Skills（エージェント拡張）",
    body: "Codexのエージェント能力を特定のワークフローやツールに接続するための拡張機能です。プロジェクトの.agents/skillsディレクトリにSKILL.mdファイルを置いて定義します。App・CLI・IDE拡張機能で共通して使えます。",
  },
  {
    title: "Worktrees（並列タスク管理）",
    body: "同じプロジェクト内で独立したタスクを並列に進める機能です。バグ修正を走らせながら、別のWorktreeで新機能の追加を進めるといった運用が可能です。複数のエージェントを非同期で管理できるため、待ち時間を最小化できます。",
  },
  {
    title: "PowerShellネイティブサンドボックス",
    body: "Codexのエージェントが実行するコマンドは、OS レベルのサンドボックス（制限付きトークン・ファイルシステムACL・専用サンドボックスユーザー）で隔離されます。ネットワークアクセスは承認が必要。サンドボックスのコードはGitHubでオープンソース公開されています。",
  },
] as const;

const agentsMdExamples = [
  {
    label: "技術スタック",
    example: "このプロジェクトはNext.js 14 + TypeScript + Tailwind CSSで構築されています。",
  },
  {
    label: "コーディング規約",
    example: "コンポーネントは関数コンポーネントで書き、Propsには型定義を必ずつけてください。",
  },
  {
    label: "テスト要件",
    example: "コードを変更したらvitest でテストを実行し、全テストが通ることを確認してください。",
  },
  {
    label: "PR作成ルール",
    example: "PR説明には「変更内容」「テスト方法」「スクリーンショット（UIの場合）」を含めてください。",
  },
] as const;

const comparisonRows = [
  {
    tool: "Codex（Windows/macOS）",
    bestFor: "長時間タスク・繰り返し作業の自動化・並列エージェント運用",
    strength: "Automations・Worktrees・デスクトップネイティブ実行",
  },
  {
    tool: "Cursor",
    bestFor: "IDE内でのリアルタイム補完・対話しながらのコード編集",
    strength: "AI統合IDEとして視覚的にコードを追いながら高速改善",
  },
  {
    tool: "GitHub Copilot",
    bestFor: "既存エディタ（VS Code等）内でのコード補完・レビュー",
    strength: "既存開発フローへの統合が容易。GitHub連携が強力",
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
            { label: "Codex Windows版の使い方完全ガイド" },
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
                title="Codex Windows版の使い方完全ガイド【2026年3月】インストール・機能・実務活用まで"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Codex Windows版の使い方完全ガイド【2026年3月】インストール・機能・実務活用まで
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">
            公開日: 2026年3月6日 ／ 最終更新日: 2026年3月16日
          </p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAIが2026年3月4日にWindows向けのCodexデスクトップアプリをMicrosoft Storeで公開しました。
            macOS版の約1ヶ月後にリリースされたこのアプリには、50万人超が事前ウェイトリスト登録しており、
            Windowsユーザーの需要の高さを示しています。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、インストール手順・主要機能の概要・AGENTS.mdの書き方・他ツールとの使い分けまで、
            実務で使い始めるために必要な情報を整理します。対応プランはChatGPT無料版を含む全プランです。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* Answer Box */}
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

        {/* LINE CTA ① — Answer Box直後 */}
        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        {/* Overview */}
        <motion.section
          id="overview"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Windows版リリースの概要と背景</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Codexデスクトップアプリは2026年2月にmacOS版として登場し、初週で100万ダウンロードを記録しました。
            これを受けてWindowsユーザーからの需要が急増し、リリース前のウェイトリストには50万人超が登録。
            2026年3月4日にMicrosoft Storeで公開されたWindows版は、単なる移植ではなく「Windows開発者環境向けに設計」された専用ビルドです。
            （出典:{" "}
            <a
              href="https://the-decoder.com/openais-codex-app-lands-on-windows-after-topping-a-million-mac-downloads-in-its-first-week/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              The Decoder（2026-03-04確認）
            </a>
            ）
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            AIコーディングツールは2026年現在、クラウド補完からデスクトップネイティブへのシフトが加速しています。
            Codexのデスクトップ版は、長時間タスクの継続実行・複数エージェントの並列管理・繰り返し作業の自動化を
            ローカル環境で完結できる点で、クラウド型やエディタ拡張型とは使い勝手が異なります。
            2026年時点でのCodexの週間アクティブユーザーは160万人を超えています。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {overviewCards.map((card) => (
              <div
                key={card.label}
                className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{card.label}</p>
                <p className="mt-2 text-lg font-bold text-gray-900">{card.value}</p>
                <p className="mt-1 text-xs text-gray-500">{card.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-6 text-gray-500">
            ※ 数値・プラン情報は変更される場合があります。最新情報は
            <a
              href="https://openai.com/codex/get-started/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              OpenAI公式サイト
            </a>
            をご確認ください（確認日: 2026-03-16）。
          </p>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2026年の生成AIツールの全体的な動向については、{" "}
            <Link href="/academy/blog/ai-spring-2026-whats-new" className="blog-link">
              2026年春の生成AI最新5つの進化
            </Link>{" "}
            もあわせて参照ください。
          </p>
        </motion.section>

        {/* Install */}
        <motion.section
          id="install"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">インストール手順（4ステップ）</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Windows版CodxはMicrosoft Storeから入手できます。WSLや仮想マシンは不要で、
            インストール後すぐに使い始められます。
          </p>
          <div className="mt-6 space-y-4">
            {installSteps.map((item) => (
              <div key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">WSLについて</p>
            <p className="mt-2 text-sm leading-7 text-amber-800">
              Codex Windows版はWSL（Windows Subsystem for Linux）なしで動作します。
              必要であれば設定でWSL連携を有効化できますが、標準的な用途では不要です。
              WSL経由で起動しようとして権限エラーが出る場合は、
              PowerShellネイティブ環境（WSL不使用）に切り替えると解消します。
            </p>
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            サインインに必要なChatGPTアカウントのプラン比較は{" "}
            <Link href="/academy/blog/chatgpt-free-vs-paid-2026" className="blog-link">
              ChatGPT無料と有料の違いを解説した記事
            </Link>{" "}
            で詳しく説明しています。Codexはすべてのプランで使用可能ですが、
            有料プランでは利用枠（並列エージェント数・月間タスク数）が拡大します。
          </p>
        </motion.section>

        {/* Features */}
        <motion.section
          id="features"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            主な機能：Automations・Skills・Worktrees
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Codexには単なるコード補完ではなく、「エージェントを管理する司令塔」としての機能が備わっています。
            特にWindows版では、以下の3機能を中心に業務効率化の可能性が広がります。
          </p>
          <div className="mt-6 space-y-4">
            {featureItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            これらの機能を最大限に活かすには、次のセクションで解説するAGENTS.mdの設定が重要です。
            AIへの指示の書き方全般については{" "}
            <Link href="/academy/blog/ai-prompt-writing-basics" className="blog-link">
              AIプロンプトの書き方入門
            </Link>{" "}
            も参考になります。
          </p>
        </motion.section>

        {/* AGENTS.md */}
        <motion.section
          id="agents-md"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AGENTS.mdの書き方</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AGENTS.mdはCodexにプロジェクト固有の指示を渡すためのマークダウンファイルです。
            プロジェクトのGitルートに置くと、Codexが作業を始める前に自動で読み込みます。
            これにより「毎回同じ指示を与える」手間がなくなり、
            プロジェクト独自の規約やスタックをCodexに一貫して守らせることができます。
          </p>
          <h3 className="mt-8 scroll-mt-28 text-lg font-semibold text-gray-900">配置場所</h3>
          <div className="mt-3 rounded-lg bg-gray-900 px-5 py-4">
            <pre className="overflow-x-auto text-sm leading-6 text-gray-200">
              {`# グローバル設定（全プロジェクト共通）
~/.codex/AGENTS.md

# プロジェクト固有設定（推奨）
{プロジェクトのGitルート}/AGENTS.md

# ディレクトリ別の追加設定
{サブディレクトリ}/AGENTS.md`}
            </pre>
          </div>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            複数のAGENTS.mdが存在する場合、上位ディレクトリから順に読み込まれ、
            より近いファイルの指示が優先されます（
            <a
              href="https://developers.openai.com/codex/guides/agents-md/"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              公式ドキュメント
            </a>
            、確認日: 2026-03-16）。
          </p>
          <h3 className="mt-8 scroll-mt-28 text-lg font-semibold text-gray-900">書き方の例</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            自然言語で記述するだけで有効です。以下のような項目を含めると実用的です。
          </p>
          <div className="mt-4 space-y-3">
            {agentsMdExamples.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-lg border border-gray-200 p-4"
              >
                <span className="mt-0.5 shrink-0 rounded bg-will-primary px-2 py-0.5 text-xs font-bold text-white">
                  {item.label}
                </span>
                <p className="text-sm leading-7 text-gray-700">{item.example}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">AGENTS.md ≠ skills.md</p>
            <p className="mt-2 text-sm leading-7 text-blue-800">
              ネット上には「Codexはskills.mdで設定できる」という誤った情報が広まっています。
              プロジェクト指示を設定するファイルは <strong>AGENTS.md</strong> です。
              「Skills」はCodexの機能拡張の仕組み（.agents/skills/内のSKILL.mdファイル）を指す別の概念です。
            </p>
          </div>
        </motion.section>

        {/* Comparison */}
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
          <p className="mt-4 text-base leading-8 text-gray-700">
            2026年時点でのAIコーディングツールは「何でもこれ1本」より
            「用途別に使い分ける」が現実的です。3ツールの特性を整理します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[680px] border-collapse text-left text-sm leading-7 text-gray-700">
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
            ※各ツールの機能・価格は随時変更されます。最新情報は各公式サイトをご確認ください（確認日: 2026-03-16）。
          </p>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実務での一般的なパターンは「Cursorで能動的にコードを書く作業を進めながら、
            Codexで並列・長時間タスクや繰り返し作業をバックグラウンドで委任する」組み合わせです。
            GitHub CopilotはVS Code等の既存エディタから移行したくないチームに向いています。
          </p>
        </motion.section>

        {/* LINE CTA ② — 比較セクション後 */}
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

        {/* FAQ */}
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

        {/* LINE CTA ③ — FAQ後 */}
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

        {/* Academy CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="blog-cta-box rounded-xl border border-will-primary/20 bg-will-lighter p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-will-primary">
              AI活用力とキャリアを同時に設計する
            </p>
            <h2 className="mt-3 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
              「何のために使うか」が、AIツールの効果を決める
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-700">
              Codexのようなツールをどう使うかより、「どの業務課題に当てるか」「自分のキャリアにどう活かすか」の判断軸が成果を分けます。
              AIリブートアカデミーでは、生成AI活用力の習得だけでなく、
              AIを鏡にした自己理解・キャリアデザイン、仲間と共に考える環境まで一体で設計しています。
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              ツールの使い方ではなく、「AIを実務で活かす判断軸」と「キャリアの次の一歩」を一緒に考えたい方は、
              まずLINEでご相談ください。
            </p>
            <div className="mt-6">
              <a
                href="https://bexn9pao.autosns.app/line"
                target="_blank"
                rel="noopener noreferrer"
                className="line-cta-button inline-flex items-center gap-2 rounded-lg bg-[#06C755] px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                LINEで無料相談する
              </a>
            </div>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
