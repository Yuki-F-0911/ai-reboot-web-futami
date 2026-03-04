"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type ClaudeCodeBeginnersGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Claude Code 入門", "Claude Code 使い方", "AIコーディング 初心者", "Vibe Coding"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-claude-code", label: "Claude Codeとは何か" },
  { id: "install", label: "インストール〜初回使用の手順" },
  { id: "commands", label: "基本コマンドとワークフロー" },
  { id: "comparison", label: "GitHub Copilot・Cursorとの比較" },
  { id: "vibe-coding", label: "Vibe Codingとの親和性" },
  { id: "first-tasks", label: "最初にやること5選" },
  { id: "cost-management", label: "APIコストを抑える3つの設定" },
  { id: "claude-md", label: "CLAUDE.mdの基本テンプレート" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const summaryPoints = [
  "Claude CodeはAnthropicが提供するCLIベースのAIコーディングエージェントで、Claude Opus 4.6をベースに動作します。",
  "自然言語の指示でファイル操作・テスト実行・コミットまで一連の作業を自律的に実行する「エージェント型」ツールです。",
  "GitHub Copilotはリアルタイム補完特化、CursorはIDE統合型、Claude Codeはターミナル中心のエージェント実行と役割が異なります。",
  "Vibe Codingとの親和性が高く、「〇〇を実装して」という自然言語指示でコード→テスト→修正のループを回せます。",
] as const;

const installSteps = [
  {
    step: "Step 1. Node.js 18以上をインストールする",
    body: "Claude Codeの実行にはNode.js 18以上が必要です。すでにインストール済みの場合は `node --version` でバージョンを確認してください。",
    code: "node --version\n# v18.0.0 以上であればOK",
  },
  {
    step: "Step 2. npxで起動する（インストール不要）",
    body: "グローバルインストールは不要です。プロジェクトルートで以下を実行するとClaude Codeが起動します。",
    code: "npx @anthropic-ai/claude-code",
  },
  {
    step: "Step 3. Anthropicアカウントで認証する",
    body: "初回起動時にAnthropicアカウントの認証が求められます。ブラウザが自動で開くので、アカウントにログインして認証を完了してください。",
    code: "# ブラウザが自動で開き認証ページへ遷移します",
  },
  {
    step: "Step 4. 作業ディレクトリで起動して指示を入力する",
    body: "認証完了後、対話型のプロンプトが表示されます。自然言語で指示を入力するとClaude Codeが実行を開始します。",
    code: 'npx @anthropic-ai/claude-code\n> 「src/utils/formatDate.tsに日付フォーマット関数を追加してください」',
  },
] as const;

const commandRows = [
  {
    action: "ファイル読み込み・理解",
    example: "「このコードベースの構造を説明してください」",
    result: "ファイルツリー解析→アーキテクチャ説明",
  },
  {
    action: "機能追加",
    example: "「ユーザー認証機能をJWTで実装してください」",
    result: "新規ファイル作成・既存ファイル編集",
  },
  {
    action: "バグ修正",
    example: "「テストが失敗しています。原因を調べて修正してください」",
    result: "テスト実行→エラー解析→修正→再テスト",
  },
  {
    action: "リファクタリング",
    example: "「この関数を責務ごとに分割してください」",
    result: "コード分割・テスト更新",
  },
  {
    action: "コミット作成",
    example: "「変更内容を確認してコミットメッセージを作成してください」",
    result: "git diff解析→コミットメッセージ提案→コミット実行",
  },
  {
    action: "ドキュメント生成",
    example: "「この関数のJSDocコメントを書いてください」",
    result: "コード解析→ドキュメント追記",
  },
] as const;

const comparisonRows = [
  {
    axis: "実行形式",
    copilot: "IDE内リアルタイム補完",
    cursor: "IDE統合型（GUI）",
    claudeCode: "CLIエージェント型",
  },
  {
    axis: "主な強み",
    copilot: "コード入力時の自動提案",
    cursor: "画面を見ながらの対話編集",
    claudeCode: "自然言語指示による自律実行",
  },
  {
    axis: "ファイル操作",
    copilot: "カーソル位置中心",
    cursor: "プロジェクト全体に対応",
    claudeCode: "プロジェクト全体を横断して操作",
  },
  {
    axis: "テスト実行",
    copilot: "手動実行が基本",
    cursor: "ターミナル連携で実行可能",
    claudeCode: "自律的にテスト実行・修正を繰り返す",
  },
  {
    axis: "料金（2026年2月）",
    copilot: "Individual $10/月〜",
    cursor: "Pro $20/月・Business $40/月",
    claudeCode: "Pro $20/月・Max 5x $100/月〜",
  },
  {
    axis: "向いている人",
    copilot: "コードを書きながら補完が欲しい人",
    cursor: "UIで確認しながら進めたい人",
    claudeCode: "CLIで高速に作業を回したい中級者以上",
  },
] as const;

const vibeCodingPoints = [
  {
    title: "自然言語指示でループを回す",
    body: "「この画面にローディングスピナーを追加して」「APIエラー時にトースト通知を出して」など、実装内容を日本語で伝えるだけでClaude Codeがコード→テスト→修正のループを自律的に実行します。",
  },
  {
    title: "git管理で安全にVibe Codingする",
    body: "Claude Codeはファイルを直接変更するため、作業前に `git commit` で現状を保存しておくことが必須です。意図しない変更があっても `git diff` で確認し、`git restore` で戻せる状態を維持してください。",
  },
  {
    title: "タスクを小さく分割して精度を上げる",
    body: "「ユーザー管理機能全体を作って」より「ユーザー登録フォームのバリデーションを追加して」のように、1回の指示を1つのタスクに絞ると、出力の精度と確認コストが大幅に下がります。",
  },
  {
    title: "MCPと組み合わせてコンテキストを拡張する",
    body: "Claude CodeはMCP（Model Context Protocol）に対応しており、NotionやGitHubなどの外部ツールをコンテキストとして組み込めます。設計書やissueを参照しながらの実装が可能になります。",
  },
] as const;

const firstTasks = [
  {
    title: "1. Hello Worldファイルを作ってみる",
    command: 'claude "hello worldを出力するPythonファイルを作って"',
    expected: "hello.py が生成され、python hello.py で「Hello World」が出力される",
    tip: "まず最小タスクで動作確認。Claude Codeがファイルを作成・内容を表示するまでの流れを体感する。",
  },
  {
    title: "2. 既存コードの構成を説明させる",
    command: 'claude "このプロジェクトのディレクトリ構成を日本語で説明して"',
    expected: "ファイルツリー解析→主要ファイルの役割・依存関係を箇条書きで説明",
    tip: "最初に構成理解タスクをこなすと、後続の実装指示の精度が上がる。",
  },
  {
    title: "3. バグのあるコードを修正させる",
    command: 'claude "src/utils.pyのlist_files関数がTypeErrorを出します。修正してください"',
    expected: "エラー原因の特定→修正→テスト実行のサイクルが自動で回る",
    tip: "「エラーメッセージ」と「発生ファイル名」を指示に含めると修正精度が上がる。",
  },
  {
    title: "4. テストファイルを自動生成させる",
    command: 'claude "src/utils.pyの全関数に対してpytestのテストを書いて"',
    expected: "tests/test_utils.py が生成され、pytest実行で全テストがパスする",
    tip: "既存コードへのテスト後付けに特に効果的。手書きの工数を大幅に削減できる。",
  },
  {
    title: "5. コミットメッセージを作成してコミットさせる",
    command: 'claude "今回の変更内容を確認してConventional Commitsスタイルでgit commitして"',
    expected: "git diff解析→コミットメッセージ提案→確認後にコミット実行",
    tip: "コミット前に差分確認の習慣と組み合わせると、意図しない変更の混入を防げる。",
  },
] as const;

const costTips = [
  {
    title: "Usage Limitsで月次コスト上限を設定する",
    body: "Anthropicのダッシュボード（console.anthropic.com）にログインし、「Settings → Usage Limits」からAPI利用上限を設定できます。学習フェーズでは月額上限を$10〜$20に設定しておくと、想定外の課金を防げます。",
    code: "# ブラウザでAnthropicダッシュボードを開く\nhttps://console.anthropic.com/settings/limits",
  },
  {
    title: "--print フラグで非対話モードにしてトークンを節約する",
    body: "スクリプトから呼び出すときや単純な質問には --print フラグを使うと、対話の往復を省略して軽量に実行できます。不要な確認ステップが減り、トークン消費が抑えられます。",
    code: '# 非対話モードで実行（スクリプト・CI向け）\nclaude --print "README.mdの概要セクションを1段落で要約して"',
  },
  {
    title: "プロジェクト別にAPIキーを分離して用途ごとにコストを可視化する",
    body: "個人学習・業務・副業など用途別に別のAnthropicアカウントまたはAPIキーを使い分けると、コストの可視性が上がります。direnvを使ってプロジェクトルートに .envrc を置く方法が管理しやすいです。",
    code: "# .envrc（direnv を使う場合、プロジェクトルートに配置）\nexport ANTHROPIC_API_KEY=sk-ant-api-xxx-your-project-key\n\n# direnv が未導入の場合\n# brew install direnv\n# echo 'eval \"$(direnv hook zsh)\"' >> ~/.zshrc",
  },
] as const;

const warningPoints = [
  "Claude Codeはファイルシステムに直接アクセスするため、実行前にgit stashまたはコミットで現状を保存してください",
  "機密情報（APIキー・個人情報）をプロンプトやコンテキストに含めないよう注意が必要です",
  "生成されたコードは必ず動作確認とコードレビューを実施してから本番環境へ適用してください",
  "Claude Codeの権限設定（ファイル操作範囲）は最小権限の原則に従って設定することを推奨します",
] as const;

export default function ClaudeCodeBeginnersGuidePage({ faqItems }: ClaudeCodeBeginnersGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Claude Code入門" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="Claude Code入門｜インストール・基本コマンド・Vibe Coding活用まで【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Claude Code入門｜インストール・基本コマンド・Vibe Coding活用まで【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月21日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Claude CodeはAnthropicが提供するCLIベースのAIコーディングエージェントです。「〇〇機能を追加して」という自然言語の指示だけで、ファイル操作・テスト実行・コミットまで一連の作業を自律的に実行します。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事は2026年2月時点の情報をもとに、Claude Codeのインストール手順・基本コマンド・GitHub Copilot/Cursorとの比較・Vibe Codingとの活用フローを入門〜中級エンジニア向けに解説します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ（2026-02-21時点）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            料金・仕様の確認日: 2026-02-21（最新情報はAnthropic公式ページを再確認してください）
          </p>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="what-is-claude-code"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Claude Codeとは何か：Anthropicが作ったCLIエージェント型AIコーディングツール
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Claude Codeは、コードを「補完する」ツールではなく、「実装する」エージェントです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AnthropicがリリースしたCLIツールで、Claude Opus 4.6をベースモデルとして動作します。ターミナルから起動し、自然言語で指示を出すと、コードベースを解析した上でファイル作成・編集・テスト実行・コミットまでを自律的に実行します。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-gray-900">GitHub Copilotとの根本的な違い</h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              GitHub CopilotはIDEで「次に書くコード」を予測して補完するツールです。Claude Codeは「この機能を実装して」という指示に対して、プロジェクト全体を把握した上で複数ファイルを変更し、テストを実行して結果を確認するところまで自律的に動作します。
            </p>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Claude Codeの概要をより詳しく知りたい場合は、
            <Link href="/academy/blog/claude-code-intro" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Code入門（概要・料金・始め方の完全解説版）
            </Link>
            もあわせて参照してください。
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
          id="install"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            インストール〜初回使用の手順：4ステップで始められる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Claude Codeはグローバルインストール不要で、npxコマンドで即起動できます。前提条件はNode.js 18以上とAnthropicアカウントのみです。
          </p>
          <div className="mt-6 space-y-4">
            {installSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-900 p-4 text-xs leading-6 text-green-400">
                  {item.code}
                </pre>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">初回起動前の準備</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-amber-800">
              {warningPoints.map((point) => (
                <li key={point} className="pl-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            最新インストール手順はAnthropic公式ドキュメントを確認してください（確認日: 2026-02-21）
          </p>
        </motion.section>

        <motion.section
          id="commands"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            基本コマンドとワークフロー：自然言語指示でできる6つの作業
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Claude Codeの操作はすべて「自然言語での指示」です。コマンド文法を覚える必要はなく、やりたいことを日本語で伝えるだけで実行されます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">作業</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">指示の例</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Claude Codeの動作</th>
                </tr>
              </thead>
              <tbody>
                {commandRows.map((row) => (
                  <tr key={row.action} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.action}</th>
                    <td className="px-4 py-4 text-gray-600 italic">{row.example}</td>
                    <td className="py-4 pl-4">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900">効果的な指示の作り方</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">1回の指示を1タスクに絞る（複数の変更を同時に依頼しない）</li>
              <li className="pl-1 marker:text-gray-500">「何を」「どのように」「どこへ」を明確に伝える</li>
              <li className="pl-1 marker:text-gray-500">エラー時は「症状・再現手順・期待結果」のセットで指示する</li>
              <li className="pl-1 marker:text-gray-500">大きな変更は事前に「方針を確認して」から実装を依頼する</li>
            </ul>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            プロンプトの型を体系化したい場合は、
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            のフォーマットをClaude Codeの指示形式に応用すると属人化を防げます。
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
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GitHub Copilot・Cursorとの比較：補完・IDE統合・CLIエージェントで役割が異なる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            3ツールは競合ではなく役割が異なります。「どれが上か」ではなく「何に当てるか」で選ぶと、開発フロー全体の効率が上がります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">GitHub Copilot</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Cursor</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Claude Code</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.copilot}</td>
                    <td className="px-4 py-4">{row.cursor}</td>
                    <td className="py-4 pl-4">{row.claudeCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900">3ツールの組み合わせ例</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">コーディング中の補完 → GitHub Copilot（IDE内）</li>
              <li className="pl-1 marker:text-gray-500">UI確認しながらの機能追加・修正 → Cursor</li>
              <li className="pl-1 marker:text-gray-500">大規模リファクタリング・テスト生成・自動化 → Claude Code</li>
            </ul>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AIコーディングツール全体の比較は、
            <Link href="/academy/blog/ai-coding-tool-comparison-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIコーディングツール比較 2026年版
            </Link>
            で選定基準を含めて解説しています。
          </p>
        </motion.section>

        <motion.section
          id="vibe-coding"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Vibe Codingとの親和性：自然言語指示で実装ループを高速に回す
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Claude CodeはVibe Coding（自然言語でAIに実装を委任する開発スタイル）との相性が特に高いツールです。ターミナルで指示→実行→確認のループを素早く回せます。
          </p>
          <div className="mt-6 space-y-4">
            {vibeCodingPoints.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">Vibe Coding × Claude Codeの実践フロー</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-blue-800">
              <li className="pl-1">要件を1文で明確化する（例:「問い合わせ管理機能を追加する」）</li>
              <li className="pl-1">git commitで作業前の状態を保存する</li>
              <li className="pl-1">Claude Codeに実装方針を確認させてから実装を依頼する</li>
              <li className="pl-1">git diffで変更内容を確認し、意図しない変更がないことを確認する</li>
              <li className="pl-1">テストが通ったらコミット・次のタスクへ進む</li>
            </ol>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Vibe Codingの全体像や非エンジニア向けの進め方は、
            <Link href="/academy/blog/vibe-coding-beginner-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Vibe Coding入門ガイド
            </Link>
            で詳しく解説しています。
          </p>
        </motion.section>

        <motion.section
          id="first-tasks"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Claude Codeで最初にやること5選
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            インストール直後に戸惑わないよう、「これをやれば動きがわかる」5タスクを実践順に並べました。いずれも5〜10分で完結します。
          </p>
          <div className="mt-6 space-y-4">
            {firstTasks.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-900 p-4 text-xs leading-6 text-green-400">
                  {item.command}
                </pre>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">期待する出力:</span> {item.expected}
                </p>
                <p className="mt-2 rounded bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-800">
                  <span className="font-semibold">Tip:</span> {item.tip}
                </p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            5タスクを一通り試すと「指示の粒度・確認のタイミング・git管理の重要性」が体感できます。この感覚を掴んでから本格的なVibe Codingに移行するのがおすすめです。
          </p>
        </motion.section>

        <motion.section
          id="cost-management"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            APIコストを抑える3つの設定
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Claude Codeはトークン消費量が多いため、初期設定でコスト管理の仕組みを入れておくことが重要です。以下の3つを最初に設定しておくと、学習フェーズでの想定外請求を防げます。
          </p>
          <div className="mt-6 space-y-4">
            {costTips.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-900 p-4 text-xs leading-6 text-green-400">
                  {item.code}
                </pre>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">コスト目安（2026年3月時点）</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-blue-800">
              <li className="pl-1">Pro プラン（$20/月）: 月5時間程度の軽い利用なら収まる目安</li>
              <li className="pl-1">Max 5x プラン（$100/月）: 週5日・1日2時間以上の業務利用向け</li>
              <li className="pl-1">まず Pro で始めて、Usage Limits のアラートを見ながら判断するのが安全</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="claude-md"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            CLAUDE.mdを設定して品質を上げる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            CLAUDE.mdはプロジェクトルートに置く設定ファイルで、Claude Codeがすべてのセッションで参照する「お約束」を記述します。これを設定するだけで、毎回の指示に含めていた制約を省略でき、出力品質が安定します。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            以下はWeb開発プロジェクト向けの基本テンプレートです。プロジェクトの技術スタックに合わせて書き換えて使ってください。
          </p>
          <pre className="mt-6 overflow-x-auto rounded bg-gray-900 p-5 text-xs leading-6 text-green-400">
            {`# CLAUDE.md — プロジェクト共通設定

## 技術スタック
- フレームワーク: Next.js 15 (App Router)
- スタイリング: Tailwind CSS v4
- 言語: TypeScript（strict モード）
- パッケージマネージャー: npm

## 必須チェックコマンド
- Lint: \`npm run lint\`
- 型チェック: \`npx tsc --noEmit\`
- ビルド確認: \`npm run build\`（ルート・config変更時は必須）

## コーディング規約
- コンポーネントは関数コンポーネントのみ（クラスコンポーネント禁止）
- "use client" は必要最小限のファイルだけに付与する
- any 型を使わない。不明な型は unknown + 型ガードで対処する
- console.log をコミットしない

## 変更スコープの制限
- タスクに直接関係しないリファクタリングや型追加は行わない
- ファイルを新規作成する前に既存ファイルへの追記で解決できないか検討する
- シークレット・APIキーをコード内に直書きしない（.env を使う）

## gitルール
- コミット前に \`git diff\` で変更差分を確認すること
- Conventional Commits 形式でコミットメッセージを書く
  例: feat: ログインページにバリデーション追加`}
          </pre>
          <div className="mt-6 rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900">CLAUDE.mdの効果的な書き方のポイント</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">
                <span className="font-semibold">技術スタックを明示する:</span> バージョン・ツール名を具体的に書くことでモデルの判断ブレを防ぐ
              </li>
              <li className="pl-1 marker:text-gray-500">
                <span className="font-semibold">必須コマンドを記載する:</span> Claude Codeが実装後に自動でlint・型チェックを走らせるようになる
              </li>
              <li className="pl-1 marker:text-gray-500">
                <span className="font-semibold">禁止事項を明確にする:</span> 「〜しない」「〜は使わない」の制約を書くと出力品質が安定する
              </li>
              <li className="pl-1 marker:text-gray-500">
                <span className="font-semibold">100行以内に収める:</span> 長すぎると重要な指示が薄まる。コアルールだけを簡潔に書く
              </li>
            </ul>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            CLAUDE.mdはプロジェクトのGitリポジトリにコミットして管理するのがベストプラクティスです。チームで使う場合は、全員が同じ前提でClaude Codeを動かせるようになります。
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
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            料金・仕様は更新されるため、以下も確認日つきで運用する前提で読んでください。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <LineCtaBox />
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h3 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/claude-code-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Codeとは？使い方・料金・始め方を完全解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/vibe-coding-beginner-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Vibe Coding入門｜非エンジニアがAIでWebアプリを作る手順とツール比較【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-tool-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディングツール比較 2026年版｜Cursor・Claude Code・GitHub Copilotの選び方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/cursor-ai-coding-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Cursor × AIコーディング入門｜非エンジニアでも使える実践ガイド
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-8">
          <p className="text-sm font-semibold tracking-[0.08em] text-will-primary">AIリブートアカデミー</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、Claude CodeやVibe Codingの操作習得だけでなく、実務での活用判断力・自己理解・キャリア設計・仲間との学習環境を一体で提供します。ツール名ではなく業務課題への判断軸を育てたい方に向いています。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-will-primary">生成AI活用力: 実務で使える判断軸と活用設計を身につける</li>
            <li className="pl-1 marker:text-will-primary">自己理解・キャリアデザイン: 強みと価値観を言語化し、次の選択を具体化する</li>
            <li className="pl-1 marker:text-will-primary">仲間と共に学ぶ環境: 対話と協働で実践の継続率を高める</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              アカデミーの学習設計を見る
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
