import type { Metadata } from "next";
import N8nVsMakeComparisonPage from "@/components/academyLanding/blog/n8n-vs-make-comparison/N8nVsMakeComparisonPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "n8nとMake比較ガイド｜2ツール深掘りで選ぶワークフロー自動化【2026年版】 | AIリブート";
const pageDescription =
  "n8nとMake.comを2ツールに絞って比較。費用、セルフホスト可否、生成AI連携、学習コスト、サポートの5軸を2026年2月時点で整理し、中小企業・個人・エンタープライズ別の選び方フローチャートまで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/n8n-vs-make-comparison";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T13:30:00+09:00";
const modifiedTime = "2026-02-20T19:40:00+09:00";

const faqItems = [
  {
    question: "n8nとMakeはどちらが初心者向けですか？",
    answer:
      "最初の学習コストだけを見るとMakeが始めやすい傾向です。ノード自由度やセルフホストまで見据えるならn8nの優位が出ます。",
  },
  {
    question: "中小企業にはどちらが向いていますか？",
    answer:
      "短期で運用開始したい場合はMake、セキュリティ要件や長期コスト管理を重視する場合はn8nが選ばれやすいです。",
  },
  {
    question: "生成AI連携はどちらが強いですか？",
    answer:
      "どちらもHTTP/API連携で対応可能です。既存テンプレート活用ならMake、カスタム制御や社内閉域運用ならn8nが有利になりやすいです。",
  },
  {
    question: "セルフホスト必須の場合の選択肢は？",
    answer:
      "n8nが有力です。Makeはマネージド運用前提のため、閉域要件が厳しい場合はn8nの設計を優先するのが現実的です。",
  },
  {
    question: "workflow-automation-comparison記事との違いは何ですか？",
    answer:
      "本記事はn8nとMakeの2ツール限定で、運用設計と導入判断を深掘りしています。Zapierを含む全体比較は既存記事を参照してください。",
  },
  {
    question: "結局どちらを選べば失敗しにくいですか？",
    answer:
      "3か月以内に成果を出すならMake、1年以上の運用で統制とコスト最適化まで重視するならn8nを第一候補にすると判断しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "n8n Make 比較",
    "n8n vs Make",
    "ワークフロー自動化 選び方",
    "セルフホスト 自動化",
    "Make.com 使い方",
    "中小企業 自動化ツール",
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

export default function N8nVsMakeComparisonRoute() {
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
          { name: "n8nとMake比較ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <N8nVsMakeComparisonPage faqItems={[...faqItems]} />
    </>
  );
}
