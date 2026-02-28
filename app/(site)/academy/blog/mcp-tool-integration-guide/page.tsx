import type { Metadata } from "next";
import McpToolIntegrationGuidePage from "@/components/academyLanding/blog/mcp-tool-integration-guide/McpToolIntegrationGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "MCP使い方実践ガイド｜Claude Desktop/Code連携手順【2026年2月】 | AIリブート";
const pageDescription =
  "MCPの実践的な使い方を2026年2月20日時点で解説。Claude Desktop・Claude Codeの設定差分、公式MCPサーバーの使い道、Notion/GitHub/Slack連携、自作サーバー最小実装、トラブル対処まで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/mcp-tool-integration-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T21:30:00+09:00";
const modifiedTime = "2026-02-20T21:30:00+09:00";

const faqItems = [
  {
    question: "Claude DesktopのMCP設定ファイルはどこにありますか？",
    answer:
      "2026年2月20日時点で、macOSは~/Library/Application Support/Claude/claude_desktop_config.json、Windowsは%APPDATA%\\\\Claude\\\\claude_desktop_config.jsonです。JSON内のmcpServersにサーバー定義を追加します。",
  },
  {
    question: "Claude CodeとClaude DesktopはどちらでMCPを使うべきですか？",
    answer:
      "コード編集やCLI自動化が中心ならClaude Code、会話中心で軽く試すならClaude Desktopが向いています。多くのチームはDesktopで検証し、運用をCodeへ移す構成で始めます。",
  },
  {
    question: "MCP仕様の2024-11-05版は今も使えますか？",
    answer:
      "参照は可能ですが、2026年2月20日時点のVersioningページでは現行は2025-11-25です。新規実装は最新仕様を基準にし、旧版との差分確認が必要です。",
  },
  {
    question: "Notion/GitHub/Slack連携で最初に確認すべき点は何ですか？",
    answer:
      "OAuthやAPIトークンの権限範囲を最小化し、読み取り中心で開始することです。特に書き込み系は承認フローと監査ログの設定を先に決める必要があります。",
  },
  {
    question: "自作MCPサーバーはNode.jsとPythonのどちらが始めやすいですか？",
    answer:
      "既存チームの実行環境に合わせるのが最適です。JavaScript資産が多いならNode.js、データ処理基盤がPython中心ならPythonが実装と運用の負担を下げられます。",
  },
  {
    question: "MCP接続でspawn ENOENTやserver not foundが出る原因は？",
    answer:
      "実行コマンドのパス違い、依存パッケージ未インストール、設定ファイルのJSON構文不正が主因です。コマンド単体実行で起動確認した後、設定ファイルを再検証してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "MCP 使い方 実践",
    "Model Context Protocol 設定",
    "Claude MCP サーバー",
    "Claude Desktop MCP",
    "Claude Code MCP",
    "AIツール連携 実践",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: pageOgImageUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageOgImageUrl],
  },
};

export default function McpToolIntegrationGuideRoute() {
  return (
    <>
      <ArticleStructuredData
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        imageUrl={pageOgImageUrl}
        articleType="BlogPosting"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://ai-reboot.io" },
          { name: "アカデミー", url: "https://ai-reboot.io/academy" },
          { name: "ブログ", url: "https://ai-reboot.io/academy/blog" },
          { name: "MCP使い方実践ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <McpToolIntegrationGuidePage faqItems={[...faqItems]} />
    </>
  );
}
