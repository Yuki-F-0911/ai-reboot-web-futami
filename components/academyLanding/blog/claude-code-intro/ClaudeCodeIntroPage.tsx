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

type ClaudeCodeIntroPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Claude Code",
  "AIコーディング",
  "Anthropic",
  "AIエージェント",
  "CLI自動化",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-claude-code", label: "Claude Codeとは？" },
  { id: "pricing-and-setup", label: "料金とセットアップ" },
  { id: "features", label: "主な機能と使い方" },
  { id: "tool-comparison", label: "ツール比較（Copilot・Cursor・Cline）" },
  { id: "first-tasks", label: "最初の5タスク" },
  { id: "pitfalls", label: "よくある失敗3パターン" },
  { id: "faq", label: "よくある質問" },
  { id: "related-links", label: "関連リンク" },
  { id: "article-summary", label: "まとめ" },
  { id: "cta", label: "次のアクション" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const comparisonRows = [
  {
    tool: "Claude Code",
    price: "API課金 or Claude Pro",
    operationStyle: "CLI / ターミナル",
    autonomous: "◯（高）",
    editorIntegration: "VSCode統合あり",
    bestFor: "複数ファイル跨ぎのタスク自律実行・git操作込み",
  },
  {
    tool: "GitHub Copilot",
    price: "$10〜/月",
    operationStyle: "エディタ内補完",
    autonomous: "△（補完のみ）",
    editorIntegration: "VS Code / JetBrains等",
    bestFor: "コード補完・インラインChat。既存エディタそのまま使いたい",
  },
  {
    tool: "Cursor",
    price: "$20〜/月",
    operationStyle: "AI統合エディタ",
    autonomous: "△（提案・適用）",
    editorIntegration: "Cursor専用エディタ",
    bestFor: "エディタごと切り替えて最高のAI補完体験を得たい",
  },
  {
    tool: "Cline（VSCode拡張）",
    price: "OSS無料＋API課金",
    operationStyle: "VSCode拡張",
    autonomous: "◯（中）",
    editorIntegration: "VS Code",
    bestFor: "VSCodeを離れずClaude Code相当の自律実行をしたい",
  },
] as const;

const firstTasks = [
  {
    number: "01",
    title: "バグを日本語で説明してClaude Codeに修正させる",
    prompt: "このコードを実行するとTypeErrorが出ます。原因を特定して修正してください。",
    point:
      "エラーメッセージごとそのまま貼り付けるのが最短。Claude Codeがファイルを読んで原因箇所を特定し、修正候補を提示してくれます。",
  },
  {
    number: "02",
    title: "新機能の実装をタスクとして依頼する",
    prompt:
      "ユーザーがCSVをアップロードしたら内容をパースして一覧表示するページを追加してください。既存のRouterとスタイルに合わせてください。",
    point:
      "既存コードの文脈（フレームワーク・スタイル）を参照させると一貫性のある実装になる。CLAUDE.mdにプロジェクト概要を書いておくとさらに精度が上がります。",
  },
  {
    number: "03",
    title: "テストコードを自動生成する",
    prompt:
      "src/utils/formatDate.ts のすべての関数に対して、Vitestのユニットテストを作成してください。エッジケース（null・空文字・不正な日付）も含めてください。",
    point:
      "テスト対象ファイルを明示し、使用するテストフレームワークを指定すると精度が高まります。生成後は必ずテストを実行して通過を確認してください。",
  },
  {
    number: "04",
    title: "コードをリファクタリングして可読性を上げる",
    prompt:
      "components/Dashboard.tsx は200行を超えています。責務ごとに小さなコンポーネントに分割し、propsの型定義も整理してください。",
    point:
      "リファクタリングは既存動作を変えないことが前提。依頼時に「外部インターフェース（props・APIの戻り値）は変えないこと」と明示すると安全です。",
  },
  {
    number: "05",
    title: "READMEとコメントを自動生成する",
    prompt:
      "このプロジェクトのREADMEを生成してください。セットアップ手順・主要コマンド・ディレクトリ構成・環境変数一覧を含めてください。",
    point:
      "ドキュメント生成は人の手間が大きく、Claude Codeが最も得意とする反復タスクの一つです。生成後に事実確認（バージョン・URL等）を必ず行ってください。",
  },
] as const;

const pitfalls = [
  {
    pattern: "失敗1",
    title: "大きすぎるタスクを1回の指示で渡す",
    situation:
      "「このWebアプリ全体をリファクタリングして、テストも書いて、ドキュメントも更新して」と一度に依頼した結果、Claude Codeが途中で迷子になり、意図と異なる変更が大量に生まれたケース。",
    solution:
      "タスクは「1指示1責務」で分解する。まず「ファイル構造を確認して問題を列挙して」→「最優先3件を修正して」→「テストを生成して実行して」と段階的に依頼します。各ステップで出力を確認してから次に進むことが品質の鍵です。",
  },
  {
    pattern: "失敗2",
    title: "生成コードをレビューなしでそのままコミットする",
    situation:
      "Claude Codeが生成したコードが一見正しく見えたためレビューせずにmainにマージ。後日、エッジケースでクラッシュするバグや、セキュリティ上問題のある入力検証の抜けが発覚したケース。",
    solution:
      "Claude Codeの出力は「優秀なジュニアエンジニアのコード」として扱い、必ずレビューする。特に認証・入力検証・データベース操作・外部API呼び出しを含む変更は注意深く確認してください。git diffで変更差分を確認する習慣をつけましょう。",
  },
  {
    pattern: "失敗3",
    title: "APIコストを管理せず予想外の請求が発生する",
    situation:
      "大規模なコードベースに対して複数の長いタスクを繰り返し依頼し続けた結果、月末に予想の数倍のAPI使用料が発生したケース。特にコンテキストの長いファイルを何度も読み込ませると費用が膨らみます。",
    solution:
      "AnthropicコンソールでUsage Limitを設定し、月次の上限額を決めておく。コストが気になる場合は、Claude HaikuなどトークンコストがSonnetより低いモデルを軽いタスクに使い分けることも検討してください。",
  },
] as const;

export default function ClaudeCodeIntroPage({ faqItems }: ClaudeCodeIntroPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Claude Codeとは？" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            Claude Codeとは？使い方・料金・始め方を完全解説【2026年版】
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-03-05">2026年3月5日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="Claude Codeとは？使い方・料金・始め方を完全解説【2026年版】"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「コードを書いてもらう」時代から「コードを実行させる」時代へ——Claude Codeは、Anthropicが提供するCLI型のAIコーディングアシスタントです。ファイルの読み書きからgit操作まで、開発タスクを自律的にこなします。GitHub CopilotやCursorとの違い、実際の使い方、コスト管理まで、この1記事で全部わかります。
          </p>
        </motion.header>

        {/* 要点まとめ */}
        <motion.section
          id="summary"
          className="scroll-mt-28 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">この記事の要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            <li className="pl-1 marker:text-blue-500">
              Claude CodeはターミナルからAIに開発タスクを自律実行させるCLIツール。補完ではなく「タスク完結」が強み。
            </li>
            <li className="pl-1 marker:text-blue-500">
              GitHub Copilotは「補完」、Cursorは「AI統合エディタ」、Claude Codeは「複数ファイルを跨ぐ自律実行エージェント」。
            </li>
            <li className="pl-1 marker:text-blue-500">
              料金はAnthropicのAPI従量課金またはClaude Pro経由。月数ドル〜で始められる。
            </li>
            <li className="pl-1 marker:text-blue-500">
              最初のタスクはバグ修正かテスト生成が成功率が高い。大きすぎるタスクは分解して依頼する。
            </li>
            <li className="pl-1 marker:text-blue-500">
              CLAUDE.mdにプロジェクト情報を書くとチーム全体での一貫した活用が可能になる。
            </li>
          </ul>
        </motion.section>

        <ArticleTOC items={tocItems} />

        {/* H2-1: Claude Codeとは？ */}
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
            Claude Codeとは？「補完」ではなく「自律実行」するAIコーディングアシスタント
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Claude Codeは、AnthropicのAI「Claude」をコーディング作業に特化させたCLI（コマンドラインインターフェース）ツールです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            GitHub Copilotのように「次の行を予測補完する」のではなく、「このバグを直して」「このAPIとの連携機能を実装して」といった自然言語のタスクを受け取り、複数ファイルの読み書き・コマンドの実行・gitの操作まで含めて自律的に完結させます。開発者は指示を出し、出力を確認・承認するという役割分担が生まれます。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            何ができるのか：Claude Codeの主要な能力
          </h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <strong>ファイルの読み書き</strong>：プロジェクト内の複数ファイルを参照し、コードを書き換える
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>コード生成・デバッグ</strong>：新機能の実装、バグ修正、リファクタリングを自律実行
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>テスト作成・実行</strong>：ユニットテスト・結合テストの生成とターミナルでの実行確認
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>git操作</strong>：変更のステージング・コミット・ブランチ操作まで指示できる
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>ドキュメント生成</strong>：READMEの作成、関数コメントの一括追加、API仕様書の生成
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>MCP連携</strong>：外部ツール（ブラウザ・DBなど）をMCPサーバー経由で操作できる
            </li>
          </ul>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            どんな開発者に向いているか
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Claude Codeが特に力を発揮するのは、「複数ファイルを跨ぐ実装」「既存コードの文脈を理解した上での修正」「繰り返し発生するボイラープレート的な作業（テスト・ドキュメント）」です。既存のエディタ環境を変えたくないが、AIに作業を丸ごと委ねたい開発者に向いています。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            一方、コードを書きながらリアルタイムで補完候補を見たい、エディタのGUI上で差分を確認しながら作業したい、という用途はGitHub CopilotやCursorが得意です。Claude Codeとこれらを目的別に使い分けることも実務では有効です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIエージェントの基本概念については
            <Link
              href="/academy/blog/what-is-ai-agent"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIエージェントとは？定義・種類・作り方を解説
            </Link>
            も参照してください。
          </p>
        </motion.section>

        {/* LINE CTA #1 */}
        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-green-800">
            📩 LINEで毎週AI知識を配信中
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            今すぐ無料で登録する（30秒）
          </a>
        </motion.section>

        {/* H2-2: 料金とセットアップ */}
        <motion.section
          id="pricing-and-setup"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Claude Codeの料金とセットアップ手順
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ツール自体は無料。APIキーを用意すれば5分で使い始められます。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">料金の仕組み</h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Claude CodeはAnthropicのAPIを使うため、送受信するトークン数に応じた従量課金が発生します。利用するモデル（claude-sonnet・claude-opus・claude-haikuなど）によって料金が異なります。Claude Proサブスクリプション（月$20）経由でも利用できますが、月次の利用量に応じた上限があります。個人の学習・小規模開発であれば月数ドル程度が目安ですが、大規模コードベースへの反復的な利用はコストが増加します。最新の料金はAnthropicの公式料金ページをご確認ください。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">セットアップ手順（5分で完了）</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-900">Step 1 — Node.jsのインストール確認</p>
              <pre className="mt-2 overflow-x-auto rounded border border-gray-200 bg-white p-3 text-xs leading-6 text-gray-700">
{`node -v  # v18以上が必要`}
              </pre>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-900">Step 2 — Claude Codeのインストール</p>
              <pre className="mt-2 overflow-x-auto rounded border border-gray-200 bg-white p-3 text-xs leading-6 text-gray-700">
{`npm install -g @anthropic-ai/claude-code`}
              </pre>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-900">Step 3 — APIキーの設定</p>
              <pre className="mt-2 overflow-x-auto rounded border border-gray-200 bg-white p-3 text-xs leading-6 text-gray-700">
{`export ANTHROPIC_API_KEY="sk-ant-..."
# .bashrc / .zshrc に追記して永続化`}
              </pre>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-900">Step 4 — 起動して最初の指示を出す</p>
              <pre className="mt-2 overflow-x-auto rounded border border-gray-200 bg-white p-3 text-xs leading-6 text-gray-700">
{`cd your-project
claude
# > このプロジェクトの構成を説明してください`}
              </pre>
            </div>
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            CLAUDE.mdでプロジェクト文脈を共有する
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            プロジェクトルートに <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">CLAUDE.md</code> ファイルを置くと、Claude Codeは毎回その内容を参照して作業します。「このプロジェクトはNext.js 15 + TypeScript + Tailwind CSSを使用」「コーディング規約：関数名はcamelCase」「テストフレームワーク：Vitest」などを記述しておくことで、毎回説明する手間が省け、チーム全員が一貫した文脈でAIを活用できます。
          </p>
        </motion.section>

        {/* H2-3: 主な機能と使い方 */}
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
            Claude Codeの主な機能と使い方
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Claude Codeの操作はシンプルです。ターミナルで <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">claude</code> を起動し、日本語で指示を出すだけです。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">インタラクティブモードとワンショットモード</h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">claude</code> で起動する「インタラクティブモード」は会話形式でタスクを進めます。一方、<code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">claude -p &quot;指示文&quot;</code> のようにコマンド引数で指示を渡す「ワンショットモード」はスクリプトやCI/CDパイプラインへの組み込みに使えます。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            権限モード：安全に自律実行させるための設定
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Claude Codeはデフォルトで「ファイル操作・コマンド実行の前に確認を求める」設定になっています。確認プロンプトを頻繁に承認したくない場合は <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">--dangerously-skip-permissions</code> オプションで省略できますが、本番環境や重要なコードベースでは使わないことを強く推奨します。信頼できる操作のみを <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">.claude/settings.json</code> で事前に許可リストに登録する方法がより安全です。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            MCPとの連携で外部ツールを操作する
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Claude CodeはMCP（Model Context Protocol）をサポートしており、MCPサーバーを設定することでブラウザ操作・データベース参照・Slack通知・GitHub操作などを指示の中に組み込めます。たとえば「GitHubのIssue一覧を取得してバグ修正の優先順位を整理して」という指示が実行可能になります。MCPの基本については
            <Link
              href="/academy/blog/what-is-mcp"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              MCPとは？AIエージェントの外部接続を可能にするプロトコルを解説
            </Link>
            も参照してください。
          </p>
        </motion.section>

        {/* H2-4: ツール比較 */}
        <motion.section
          id="tool-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Claude Code vs GitHub Copilot vs Cursor vs Cline｜AIコーディングツール比較
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            4つのツールは「役割」が違います。競合ではなく、目的別に使い分けるものと理解するのが正確です。
          </p>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">価格</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">操作方式</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">自律実行</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">エディタ統合</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">最適な用途</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.tool}</td>
                    <td className="py-4 px-4">{row.price}</td>
                    <td className="py-4 px-4">{row.operationStyle}</td>
                    <td className="py-4 px-4">{row.autonomous}</td>
                    <td className="py-4 px-4">{row.editorIntegration}</td>
                    <td className="py-4 px-4">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            現場ではどう組み合わせるか
          </h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            実務では「コードを書きながらの補完はGitHub Copilot、複雑な機能実装やリファクタリングはClaude Code」という使い分けが効率的です。Cursorを使っている場合は、エディタ内のComposer機能で対応できないタスク（大規模なコードベース横断作業・CI/CD連携）をClaude Codeに任せる構成が自然です。
          </p>
        </motion.section>

        {/* H2-5: 最初の5タスク */}
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
            Claude Codeで最初に試すべき5タスク｜すぐ使えるプロンプト付き
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「何を依頼すればいいか」が最初の壁です。成功率が高い5つのタスクと、そのまま使えるプロンプト例を示します。
          </p>

          <div className="mt-6 space-y-6">
            {firstTasks.map((task) => (
              <div key={task.number} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                    {task.number}
                  </span>
                  <h3 className="text-base font-bold text-gray-900">{task.title}</h3>
                </div>
                <div className="mt-3 overflow-x-auto rounded border border-gray-200 bg-white p-3">
                  <p className="text-xs leading-6 text-gray-500">プロンプト例：</p>
                  <p className="mt-1 text-sm leading-6 text-gray-800">「{task.prompt}」</p>
                </div>
                <div className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-2">
                  <p className="text-xs leading-6 text-amber-800">
                    <strong>ポイント：</strong>
                    {task.point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* LINE CTA #2 */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-orange-800">
            📩 LINEで毎週AI知識を配信中
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            今すぐ無料で登録する（30秒）
          </a>
        </motion.section>

        {/* H2-6: よくある失敗 */}
        <motion.section
          id="pitfalls"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある失敗3パターンと対処法
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Claude Codeを使い始めた現場でよく起きる3つの失敗を、原因と対処法とともに整理します。
          </p>

          <div className="mt-6 space-y-8">
            {pitfalls.map((p) => (
              <div key={p.pattern} className="rounded-lg border border-red-100 bg-red-50 p-5">
                <h3 className="text-base font-bold text-red-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <strong className="text-gray-900">よくある状況：</strong>
                  {p.situation}
                </p>
                <div className="mt-3 rounded-md border border-green-200 bg-white px-4 py-3">
                  <p className="text-sm leading-7 text-gray-700">
                    <strong className="text-green-700">対処法：</strong>
                    {p.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            AIエージェントを本番環境に導入する際のセキュリティ・権限設計については
            <Link
              href="/academy/blog/ai-agent-deployment-checklist"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIエージェント導入チェックリスト
            </Link>
            も参照してください。
          </p>
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
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Q. {item.question}
                </dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/what-is-ai-agent"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェントとは？定義・種類・作り方を解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-agent-build-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/what-is-mcp"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                MCPとは？AIエージェントの外部接続を可能にするプロトコルを解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/dify-beginner-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Difyの使い方完全ガイド｜ノーコードでAI業務ボットを最短で作る方法
              </Link>
            </li>
          </ul>
        </section>

        {/* まとめ */}
        <motion.section
          id="article-summary"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Claude CodeはCLIから動くAnthropicの自律型AIコーディングアシスタント。「補完」ではなく「タスク完結」が特徴。
            </li>
            <li className="pl-1 marker:text-gray-500">
              GitHub Copilotはリアルタイム補完、Cursorはエディタ統合、Claude Codeは複数ファイル跨ぎの自律実行。役割が違うため用途別に使い分けるのが現実的。
            </li>
            <li className="pl-1 marker:text-gray-500">
              npm install → APIキー設定 → claude起動の3ステップで5分以内に使い始められる。
            </li>
            <li className="pl-1 marker:text-gray-500">
              CLAUDE.mdにプロジェクト情報を記述するとチームで一貫した文脈でAIを活用できる。
            </li>
            <li className="pl-1 marker:text-gray-500">
              最初のタスクはバグ修正・テスト生成など小さく具体的なものから始め、1指示1責務で分解して依頼する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              APIコストはAnthropicコンソールで上限設定。生成コードは必ずレビューしてからコミットする。
            </li>
          </ul>
        </motion.section>

        {/* 次のアクション */}
        <motion.section
          id="cta"
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">次のアクション</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Claude Codeの基礎が理解できたら、次のステップに進みましょう。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              今すぐ無料で登録する（30秒）
            </a>
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
