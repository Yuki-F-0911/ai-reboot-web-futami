import type { Metadata } from "next";
import ContextEngineeringGuidePage from "@/components/academyLanding/blog/context-engineering-guide/ContextEngineeringGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "コンテキストエンジニアリングとは？AIの出力品質を上げる設計思想を非エンジニアが解説 | AIリブート";
const pageDescription =
  "プロンプト改善だけで精度が安定しない原因を、役割・背景・制約・出力形式の4要素で解決する実践ガイド。非エンジニアでも再現しやすい設計手順、運用チェック項目、チーム導入時のつまずき回避策、評価指標の作り方まで整理し、実務導入判断に使える内容です。";
const pageUrl = "https://ai-reboot.io/academy/blog/context-engineering-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T20:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "コンテキストエンジニアリングとは何ですか？",
    answer:
      "AIに渡す情報を設計し、回答品質を安定させる実務手法です。単一の指示文だけでなく、役割、背景、制約、出力形式まで設計対象に含めます。",
  },
  {
    question: "プロンプトエンジニアリングとの違いは何ですか？",
    answer:
      "プロンプトエンジニアリングは主に指示文の書き方を最適化する考え方です。コンテキストエンジニアリングは、指示文を含む周辺情報全体を設計して再現性を高めます。",
  },
  {
    question: "非エンジニアでも取り組めますか？",
    answer:
      "可能です。業務の目的、対象読者、守るべき条件、出力形式を文章で整理できれば始められます。最初は1業務に限定してテンプレート化すると定着しやすくなります。",
  },
  {
    question: "まずどの業務で試すと効果が出やすいですか？",
    answer:
      "会議要約、メール下書き、提案資料の構成作成の3つが効果を体感しやすいです。出力の良し悪しを判断しやすく、改善サイクルを短く回せます。",
  },
  {
    question: "コンテキスト設計でよくある失敗は何ですか？",
    answer:
      "背景情報を省略する、制約を後出しする、出力形式を指定しない、の3点が典型です。回答が広がりすぎ、レビュー工数が増える原因になります。",
  },
  {
    question: "チェックシートはどのように使うとよいですか？",
    answer:
      "AIに指示を出す前に10項目を確認し、欠けている要素を埋めてから実行します。チーム運用では同じシートを使うことで、出力品質のばらつきを抑えられます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "コンテキストエンジニアリング とは",
    "AI プロンプト 設計",
    "Context Engineering 意味",
    "AI 指示 精度 上げる",
    "プロンプト設計 基礎",
    "ChatGPT 出力品質 改善",
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

export default function ContextEngineeringGuideRoute() {
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
          { name: "コンテキストエンジニアリングとは？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ContextEngineeringGuidePage faqItems={[...faqItems]} />
    </>
  );
}
