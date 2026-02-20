import type { Metadata } from "next";
import OpenaiCodexAppGuidePage from "@/components/academyLanding/blog/openai-codex-app-guide/OpenaiCodexAppGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Codex App使い方ガイド｜macOS版の始め方とSpark/Classic比較【2026年版】 | AIリブート";
const pageDescription =
  "OpenAI Codex Appの使い方を2026年2月時点で解説。2026年2月2日リリースのmacOS版概要、Codex SparkとCodex Classicの違い、ローカルコード読み取りの仕組みとセキュリティ、初回セットアップ、Cursor/Claude Codeとの使い分けを整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/openai-codex-app-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T12:30:00+09:00";
const modifiedTime = "2026-02-20T19:00:00+09:00";

const faqItems = [
  {
    question: "Codex Appはどんなユーザーに向いていますか？",
    answer:
      "ローカルコードを読みながら、要件整理から修正までをmacOS上で一貫して進めたいユーザーに向いています。エディタ補完より、タスク単位で進めたい人に合います。",
  },
  {
    question: "Codex SparkとCodex Classicの違いは何ですか？",
    answer:
      "Sparkは探索と提案の初速、Classicは安定した編集と反復作業に向く運用が一般的です。チームではSparkで設計案を出し、Classicで仕上げる分担が使いやすくなります。",
  },
  {
    question: "ローカルコードは外部に送信されますか？",
    answer:
      "送信範囲は設定と利用モードに依存します。実運用では、読み取り対象ディレクトリの限定、機密ファイル除外、監査ログ確認を最初に実施してください。",
  },
  {
    question: "初回セットアップで失敗しやすい点は？",
    answer:
      "プロジェクトルート指定を曖昧にすると、意図しないファイルを参照する場合があります。最初に対象フォルダを固定し、読み取り権限を最小化してください。",
  },
  {
    question: "CursorやClaude Codeと何が違いますか？",
    answer:
      "CursorはIDE体験、Claude CodeはCLI体験、Codex AppはmacOSネイティブのタスク実行体験に強みがあります。用途と作業スタイルで併用すると効率が上がります。",
  },
  {
    question: "非エンジニアでも使えますか？",
    answer:
      "使えますが、成果を安定させるには要件を短文で分解して指示する運用が必要です。まずは読み取り専用で始め、編集範囲を段階的に広げると安全です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Codex App 使い方",
    "OpenAI Codex",
    "macOS AIコーディング",
    "Codex Spark",
    "Codex Classic",
    "Claude Code Cursor 比較",
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

export default function OpenaiCodexAppGuideRoute() {
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
          { name: "Codex App使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <OpenaiCodexAppGuidePage faqItems={[...faqItems]} />
    </>
  );
}
