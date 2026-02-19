import type { Metadata } from "next";
import GithubCopilotGuidePage from "@/components/academyLanding/blog/github-copilot-guide/GithubCopilotGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "GitHub Copilotの使い方｜導入・設定・効率化のコツを初心者向けに解説 | AIリブート";
const pageDescription =
  "GitHub Copilotの導入（VS Code等）から設定、指示の出し方、レビュー/テストまでの実務フローを初心者向けに解説。チーム導入の情報管理ルールもチェックできます。";
const pageUrl = "https://ai-reboot.io/academy/blog/github-copilot-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T18:00:00+09:00";

const faqItems = [
  {
    question: "GitHub Copilotは何ができる？",
    answer:
      "コード補完・チャットによる相談・リファクタ提案・テスト作成支援など、「書く/読む/直す」の作業を加速できます。まずは小さな関数やテストから使うと品質を落としにくいです。",
  },
  {
    question: "Copilotを使えばエンジニアは不要になりますか？",
    answer:
      "不要にはなりません。設計、要件理解、レビュー、セキュリティ、運用などは引き続き人の判断が重要です。Copilotは「実装の加速」には強い一方、目的や制約を自動で正しく決めるのは苦手です。",
  },
  {
    question: "うまく提案が出ないときのコツは？",
    answer:
      "「前提（制約/入力/出力）」「例」「守るべき方針（型/命名/エラー処理）」を先に書き、短いタスクに分割すると改善しやすいです。特に、既存コードの文脈（似た関数、使用しているライブラリ）を近くに置くと精度が上がります。",
  },
  {
    question: "セキュリティや情報漏洩が心配です。何に注意すべき？",
    answer:
      "APIキーや顧客データなど機密を入力しないのが基本です。チーム導入では、入力/ログ/学習に関する設定やポリシーを確認し、レビューと自動テストを前提に運用するのが安全です。",
  },
  {
    question: "結局、どんな開発フローに組み込むのが良い？",
    answer:
      "おすすめは「小さく生成→自分で理解→テストで固定→レビューで担保」です。Copilotは最初の下書きを速くできますが、品質はテスト/レビューで守る設計にすると事故が減ります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "GitHub Copilot 使い方",
    "Copilot 設定",
    "AI コーディング",
    "VS Code Copilot",
    "Copilot Chat",
    "テスト 自動生成",
    "レビュー 効率化",
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

export default function GithubCopilotGuideRoute() {
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
          { name: "GitHub Copilotの使い方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GithubCopilotGuidePage faqItems={[...faqItems]} />
    </>
  );
}
