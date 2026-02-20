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

type McpToolIntegrationGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["MCP 使い方 実践", "Claude MCP サーバー", "Model Context Protocol 設定", "AIツール連携 実践"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ（確認日: 2026-02-20）" },
  { id: "advanced-overview", label: "MCPとは何か（応用編）" },
  { id: "claude-setup", label: "Claude Desktop・Claude Code接続手順" },
  { id: "official-servers", label: "公式MCPサーバー一覧と使い道" },
  { id: "notion-github-slack", label: "Notion/GitHub/Slack設定手順" },
  { id: "build-own-server", label: "自作MCPサーバー（Node.js/Python）" },
  { id: "troubleshooting", label: "よくあるエラーと対処" },
  { id: "faq", label: "FAQ" },
] as const;

const summaryPoints = [
  "MCPは概念理解より、接続先ごとの権限と運用設計を先に決める方が失敗が少ない。",
  "Claude Desktopは設定ファイル中心、Claude Codeは`claude mcp add`中心で管理する。",
  "Notion/GitHub/SlackはリモートMCP（OAuth）を使えるが、初期は読み取り中心の権限で開始する。",
  "MCP仕様は日付バージョンで更新される。2026-02-20時点の現行は2025-11-25。",
  "自作サーバーは最小1ツールから始め、監査ログ・タイムアウト・入力検証を段階的に足す。",
] as const;

const architectureRows = [
  {
    layer: "Host",
    role: "Claude Desktop / Claude Code / IDE",
    focus: "ユーザー操作、認証状態、実行範囲の管理",
  },
  {
    layer: "Client",
    role: "MCP接続を持つクライアント機能",
    focus: "Tool呼び出し・結果の受け取り・再試行",
  },
  {
    layer: "Server",
    role: "外部システムへの入口",
    focus: "権限境界、入力検証、ログ、エラー制御",
  },
  {
    layer: "Tool / Resource",
    role: "実行機能 / 参照データ",
    focus: "副作用の有無を分けて公開する",
  },
] as const;

const desktopConfigExample = `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/you/workspace"
      ]
    }
  }
}`;

const codeSetupCommands = `# 1) ローカルstdioサーバーを追加
claude mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem /Users/you/workspace

# 2) JSON形式で追加
claude mcp add-json memory '{"type":"stdio","command":"npx","args":["-y","@modelcontextprotocol/server-memory"]}'

# 3) Claude Desktop設定を取り込む
claude mcp add-from-claude-desktop`;

const officialServerRows = [
  {
    type: "公式参照実装（MCP Steering Group）",
    server: "filesystem",
    usage: "ローカルファイルの読み書き・探索",
    when: "プロジェクト分析、ドキュメント抽出、差分確認",
  },
  {
    type: "公式参照実装（MCP Steering Group）",
    server: "fetch",
    usage: "Web取得・HTTPアクセス",
    when: "一次情報の取得、外部APIレスポンスの確認",
  },
  {
    type: "公式参照実装（MCP Steering Group）",
    server: "memory",
    usage: "セッション間のメモリ保存",
    when: "長期タスクの状態管理、再開時の文脈維持",
  },
  {
    type: "公式参照実装（MCP Steering Group）",
    server: "github / gitlab / google-drive",
    usage: "主要SaaS連携の参照実装",
    when: "自社用途へ拡張する前のたたき台",
  },
  {
    type: "ベンダー公式リモートMCP",
    server: "Notion MCP",
    usage: "ワークスペース検索・ページ参照",
    when: "議事録整理、要約作成、ナレッジ照会",
  },
  {
    type: "ベンダー公式リモートMCP",
    server: "GitHub MCP",
    usage: "Issue/PR/Code検索、開発ワークフロー連携",
    when: "レビュー支援、進捗把握、修正案生成",
  },
  {
    type: "ベンダー公式リモートMCP",
    server: "Slack MCP",
    usage: "会話検索、投稿取得、チャンネル文脈参照",
    when: "問い合わせ履歴確認、決定事項の要約",
  },
] as const;

const notionSetup = {
  prerequisites: [
    "NotionでInternal Integrationを作成し、参照対象ページ/DBを接続する",
    "IntegrationのCapabilitiesを最小権限で設定する（初期はRead中心）",
    "Notion APIトークン（`secret_...`）を安全に保持する",
  ],
  command: `NOTION_TOKEN="secret_xxx" \\
claude mcp add --transport http notion https://mcp.notion.com/mcp`,
  verify: [
    "Claude Codeで`claude mcp list`を実行して`notion`が有効か確認する",
    "「Notionで最新の議事録ページを3件取得して」と依頼し、参照結果を検証する",
  ],
} as const;

const githubSetup = {
  prerequisites: [
    "GitHub Personal Access Tokenを作成（最小権限: `read:org`, `repo`）",
    "組織利用時は許可ポリシーを先に確認する",
    "社外リポジトリを扱う場合はアクセス境界を明示する",
  ],
  command: `GITHUB_PERSONAL_ACCESS_TOKEN="ghp_xxx" \\
claude mcp add --transport http github https://api.githubcopilot.com/mcp/`,
  verify: [
    "対象リポジトリで「未対応Issueの優先度を整理して」と依頼し、参照可能範囲を確認する",
    "書き込み系アクションは承認ステップを入れてから有効化する",
  ],
} as const;

const slackSetup = {
  prerequisites: [
    "Slack管理者側でMCP接続ポリシーと利用可能ワークスペースを確認する",
    "OAuth連携時に公開範囲（DM/チャンネル）を事前に定義する",
    "個人情報が含まれるチャンネルは対象外にする",
  ],
  command: `claude mcp add --transport http slack https://mcp.slack.com`,
  verify: [
    "接続後に「昨日の#project-alphaの意思決定を要約して」と依頼し、取得範囲を確認する",
    "不要なチャンネル参照が起きる場合は権限設定を見直す",
  ],
} as const;

const nodeServerExample = `import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "demo-mcp-server", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "echo_text",
      description: "受け取った文字列を返す",
      inputSchema: {
        type: "object",
        properties: { text: { type: "string" } },
        required: ["text"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== "echo_text") {
    throw new Error("Unknown tool");
  }
  const text = String(request.params.arguments?.text ?? "");
  return { content: [{ type: "text", text: \`echo: \${text}\` }] };
});

const transport = new StdioServerTransport();
await server.connect(transport);`;

const pythonServerExample = `from mcp.server.fastmcp import FastMCP

mcp = FastMCP("demo-python-server")

@mcp.tool()
def summarize_title(text: str) -> str:
    cleaned = " ".join(text.split())
    return f"[summary] {cleaned[:80]}"

if __name__ == "__main__":
    mcp.run(transport="stdio")`;

const troubleshootingRows = [
  {
    error: "JSON parse error / Invalid config",
    cause: "末尾カンマ、二重引用符不足、`mcpServers` 階層ミス",
    action: "JSONバリデーション後にClaude Desktopを再起動する",
  },
  {
    error: "spawn ENOENT",
    cause: "commandパスが見つからない、`npx`未導入",
    action: "CLI単体で起動確認してから設定へ戻す",
  },
  {
    error: "401 / 403",
    cause: "OAuth未完了、PAT権限不足、ワークスペース許可不足",
    action: "トークン再発行ではなく、まずスコープと管理者ポリシーを確認する",
  },
  {
    error: "Tool timeout",
    cause: "外部API遅延、過大入力、サーバー側リトライ未実装",
    action: "入力サイズ制限、タイムアウト値調整、再試行戦略を追加する",
  },
  {
    error: "Unexpected tool execution",
    cause: "書き込み権限の過剰付与、承認フロー不足",
    action: "読み取り専用から開始し、書き込みは明示承認付きで段階解放する",
  },
] as const;

type LineCtaBoxProps = {
  className: string;
};

function LineCtaBox({ className }: LineCtaBoxProps) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-gray-900">AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        MCP、Claude、主要AIツールの更新を、実務で使う判断に必要な粒度で整理して配信しています。仕様変更が早い領域のキャッチアップ効率を上げたい方向けです。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで週1AI通信を受け取る（無料）
      </a>
    </section>
  );
}

export default function McpToolIntegrationGuidePage({ faqItems }: McpToolIntegrationGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "MCP使い方実践ガイド" },
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

          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="MCP使い方実践ガイド｜Claude Desktop/Code連携手順【2026年2月】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            MCP使い方実践ガイド｜Claude Desktop/Code連携手順【2026年2月】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            MCP（Model Context Protocol）の基礎を理解したあとに詰まるのは、設定ファイル、OAuth、権限、運用フローです。本記事は概念説明を最小限にし、
            Claude DesktopとClaude Codeで実際に接続して使う手順に絞って整理します。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            先に全体像を確認したい場合は
            <Link href="/academy/blog/what-is-mcp" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              MCPとは何かの解説記事
            </Link>
            を先に読むと、役割分担の理解が速くなります。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ（確認日: 2026-02-20）</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="advanced-overview"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">MCPとは何か（応用編）: 実装責務で分けると迷わない</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            MCPは「AIが外部ツールを使うための共通接続規格」です。運用では、構造理解より先に責務を明確にすると事故が減ります。誰が認証し、どこで権限を制御し、どこに監査ログを残すかを設計段階で固定します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">層</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">役割</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">運用で最初に決めること</th>
                </tr>
              </thead>
              <tbody>
                {architectureRows.map((row) => (
                  <tr key={row.layer} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.layer}</th>
                    <td className="py-4 px-4">{row.role}</td>
                    <td className="py-4 pl-4">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            仕様バージョンも確認が必要です。MCPは日付ベースで更新され、2026年2月20日時点のVersioningページでは現行が
            <span className="font-semibold text-gray-900">2025-11-25</span>です。`2024-11-05`は参照価値はあるものの、現行との差分確認が前提になります。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <motion.section
          id="claude-setup"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Claude Desktop・Claude CodeにMCPサーバーを接続する手順</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            実務で再現しやすい順序は、Desktopで設定形式を把握し、CodeでCLI管理に寄せる流れです。まずはローカルstdioサーバー1本で起動確認を取り、次にリモートMCPへ拡張します。
          </p>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">1. Claude Desktopの設定ファイルを確認する</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            2026年2月20日時点の公式Quickstartでは、macOSは
            <code className="mx-1 rounded bg-gray-100 px-1 py-0.5 text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code>
            、Windowsは
            <code className="mx-1 rounded bg-gray-100 px-1 py-0.5 text-xs">%APPDATA%\\Claude\\claude_desktop_config.json</code>
            を編集します。基本構造は次の `mcpServers` 形式です。
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">{desktopConfigExample}</pre>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">2. Claude CodeでMCPをCLI管理する</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            Anthropic公式ドキュメントでは、`claude mcp add` と `claude mcp add-json` が基本です。スコープは `local` / `project` / `user` で分けられます。
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">{codeSetupCommands}</pre>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            操作体系を先に把握したい場合は
            <Link href="/academy/blog/claude-code-intro" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Code入門記事
            </Link>
            と併読すると、MCP以外の設定と競合しにくくなります。
          </p>
        </motion.section>

        <motion.section
          id="official-servers"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">公式MCPサーバー一覧と使い道: 参照実装とベンダー公式を分けて選ぶ</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            「公式MCPサーバー」は1種類ではありません。MCP Steering Groupが管理する参照実装と、Notion/GitHub/Slackなど各ベンダーが提供する公式リモートMCPを分けて評価するのが現実的です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">分類</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">サーバー</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">主な用途</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている場面</th>
                </tr>
              </thead>
              <tbody>
                {officialServerRows.map((row) => (
                  <tr key={`${row.type}-${row.server}`} className="border-b border-gray-200 align-top">
                    <td className="py-4 pr-4">{row.type}</td>
                    <th className="py-4 px-4 font-semibold text-gray-900">{row.server}</th>
                    <td className="py-4 px-4">{row.usage}</td>
                    <td className="py-4 pl-4">{row.when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            最初は参照実装（filesystem/fetch/memory）で運用設計を固め、その後に業務システム連携（Notion/GitHub/Slack）へ広げると、権限事故を抑えながら拡張できます。
          </p>
        </motion.section>

        <motion.section
          id="notion-github-slack"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Notion・GitHub・Slack連携を設定する（ステップバイステップ）</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            3サービスとも、事前権限の定義と接続後の参照範囲確認が成否を分けます。ここではClaude Codeコマンドで統一し、再現しやすい手順で整理します。
          </p>

          <section className="mt-8 rounded-lg border border-gray-200 p-5">
            <h3 className="blog-h3 text-lg font-semibold text-gray-900">Notion連携</h3>
            <ul className="blog-ul mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {notionSetup.prerequisites.map((item) => (
                <li key={item} className="blog-li pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">{notionSetup.command}</pre>
            <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {notionSetup.verify.map((item) => (
                <li key={item} className="blog-li pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 rounded-lg border border-gray-200 p-5">
            <h3 className="blog-h3 text-lg font-semibold text-gray-900">GitHub連携</h3>
            <ul className="blog-ul mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {githubSetup.prerequisites.map((item) => (
                <li key={item} className="blog-li pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">{githubSetup.command}</pre>
            <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {githubSetup.verify.map((item) => (
                <li key={item} className="blog-li pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 rounded-lg border border-gray-200 p-5">
            <h3 className="blog-h3 text-lg font-semibold text-gray-900">Slack連携</h3>
            <ul className="blog-ul mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {slackSetup.prerequisites.map((item) => (
                <li key={item} className="blog-li pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">{slackSetup.command}</pre>
            <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {slackSetup.verify.map((item) => (
                <li key={item} className="blog-li pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            接続後は「何が取得できるか」だけでなく「何が取得できてはいけないか」を同時に確認してください。評価観点を整理したい場合は
            <Link href="/academy/blog/context-engineering-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              コンテキスト設計の実践記事
            </Link>
            が役立ちます。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <motion.section
          id="build-own-server"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">自作MCPサーバーの作り方（Node.js / Python最小例）</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            既存サーバーで要件が満たせない場合は、自作サーバーを最小構成で作って検証します。最初から複数ツールを詰め込まず、1ツールのみで起動確認する方がトラブル切り分けが速くなります。
          </p>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">Node.js最小例（stdio）</h3>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">{nodeServerExample}</pre>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">Python最小例（stdio）</h3>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">{pythonServerExample}</pre>

          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            拡張順序は「入力バリデーション」「タイムアウト」「監査ログ」「承認フロー」です。AIエージェント全体の設計と合わせて考える場合は
            <Link href="/academy/blog/ai-agent-build-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェント構築ガイド
            </Link>
            を参照してください。
          </p>
        </motion.section>

        <motion.section
          id="troubleshooting"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくあるエラーとトラブルシューティング</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            MCPの障害は「接続」「認証」「権限」「実行時間」の4系統に分かれます。障害対応を早くするには、最初にどの系統かを切り分けることが重要です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">症状</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">主な原因</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">対処手順</th>
                </tr>
              </thead>
              <tbody>
                {troubleshootingRows.map((row) => (
                  <tr key={row.error} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.error}</th>
                    <td className="py-4 px-4">{row.cause}</td>
                    <td className="py-4 pl-4">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            API連携の失敗切り分けをさらに深掘りする場合は
            <Link href="/academy/blog/openai-responses-api-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              API実装ガイド
            </Link>
            の「障害時ログ設計」の章も参考になります。
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">FAQ</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/what-is-mcp" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                MCP（Model Context Protocol）とは？できることと危険な落とし穴【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-code-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Codeとは？使い方・料金・始め方を完全解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/context-engineering-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                コンテキストエンジニアリングとは？
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/openai-responses-api-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                OpenAI Responses API実装ガイド
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-8">
          <p className="text-sm font-semibold tracking-[0.08em] text-will-primary">AIリブートアカデミー</p>
          <h2 className="blog-h2 mt-3 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。特定ツールの操作習得ではなく、
            業務課題に対してどのようにAIを組み込むかを判断し続ける力を育てる学習設計です。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-will-primary">生成AI活用力: 業務課題に対して再現性のある活用設計を作る</li>
            <li className="blog-li pl-1 marker:text-will-primary">自己理解・キャリアデザイン: 強みと価値観を言語化し、次のキャリアを具体化する</li>
            <li className="blog-li pl-1 marker:text-will-primary">仲間と共に学ぶ環境: 対話と協働で継続学習の速度を高める</li>
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
