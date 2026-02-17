import type { Metadata } from "next";
import HowToLearnGenerativeAiPage from "@/components/academyLanding/blog/how-to-learn-generative-ai/HowToLearnGenerativeAiPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "社会人のための生成AI学習ロードマップ｜0→100日で実務活用レベルへ | AIリブート";
const pageDescription =
  "「生成AI 学び方」「生成AI 勉強」をテーマに、社会人向けの100日ロードマップを解説。基礎理解→実践応用→業務統合の順で、実務活用レベルを目指します。";
const pageUrl = "https://ai-reboot.io/academy/blog/how-to-learn-generative-ai";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2025-09-12T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";
const faqItems = [
  {
    question: "プログラミング経験がなくても生成AIは学べますか？",
    answer:
      "はい。最初に必要なのはプログラミングよりも、業務課題を言語化し、AIの出力を評価する力です。まずはChatGPTやClaudeの基本操作から始めれば十分です。",
  },
  {
    question: "1日何時間くらい勉強すれば実務活用まで到達できますか？",
    answer:
      "目安は平日30〜60分です。週末に90分程度の復習を加えると定着しやすく、100日で実務レベルの活用まで進めやすくなります。",
  },
  {
    question: "ChatGPTとClaudeはどちらから始めるべきですか？",
    answer:
      "最初はどちらか1つを軸にして問題ありません。基本操作とプロンプト設計が固まってから、比較目的で2つ目を導入するのがおすすめです。",
  },
  {
    question: "独学と講座受講はどちらが向いていますか？",
    answer:
      "自分で計画を立てて検証できる人は独学でも進めやすいです。一方で、短期間で実務適用まで進めたい場合や、伴走サポートが必要な場合は講座受講が有効です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 学び方",
    "生成AI 勉強",
    "生成AI 学習ロードマップ",
    "社会人 AI学習",
    "生成AI 実務活用",
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

export default function HowToLearnGenerativeAiRoute() {
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
          { name: "生成AI学習法", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <HowToLearnGenerativeAiPage faqItems={[...faqItems]} />
    </>
  );
}
