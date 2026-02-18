import type { Metadata } from "next";
import WhatIsMcpPage from "@/components/academyLanding/blog/what-is-mcp/WhatIsMcpPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "MCP（Model Context Protocol）とは？できることと危険な落とし穴【2026年版】";
const pageDescription =
  "MCP（Model Context Protocol）の仕組み、できること、セキュリティリスクをわかりやすく解説。AIエージェントと外部ツールの安全な連携方法、導入時のチェックポイント付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/what-is-mcp";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-18";
const modifiedTime = "2026-02-18";

const faqItems = [
  {
    question: "MCPとは何ですか？",
    answer:
      "Model Context Protocol（MCP）は、AIモデルと外部ツール・データソースを標準的に接続するためのオープンプロトコルです。Anthropicが提唱し、2024年末から急速に普及しています。",
  },
  {
    question: "MCPで何ができますか？",
    answer:
      "AIエージェントがファイル操作、データベースクエリ、API呼び出し、ブラウザ操作など外部ツールを統一的なインターフェースで利用できるようになります。",
  },
  {
    question: "MCPのセキュリティリスクは？",
    answer:
      "主なリスクは①権限の過剰付与②プロンプトインジェクション経由のツール悪用③サーバー側の脆弱性④認証情報の漏洩の4つです。",
  },
  {
    question: "MCPサーバーは自社で構築すべきですか？",
    answer:
      "まずは公式・コミュニティ提供のサーバーを利用し、自社固有の要件がある場合のみカスタム構築するのが効率的です。",
  },
  {
    question: "MCPとAPIの違いは？",
    answer:
      "APIは特定のサービスとの1対1接続ですが、MCPはAIモデルと任意のツール群をN対Nで標準的に接続する統一プロトコルです。",
  },
  {
    question: "非エンジニアでもMCPは使えますか？",
    answer:
      "MCPサーバーの構築にはエンジニアが必要ですが、構築済みのMCP環境を利用する側（クライアント側）は非エンジニアでも操作できます。",
  },
  {
    question: "MCPの導入にどれくらいコストがかかりますか？",
    answer:
      "OSS基盤を使えば開発コストは低く、既存のMCPサーバーを利用するだけなら追加コストはほぼゼロです。カスタムサーバー構築の場合は規模に応じて数十万〜です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["MCP とは", "Model Context Protocol", "MCP セキュリティ", "MCP AIエージェント"],
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

export default function WhatIsMcpRoute() {
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
          { name: "MCP（Model Context Protocol）とは？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <WhatIsMcpPage faqItems={[...faqItems]} />
    </>
  );
}

