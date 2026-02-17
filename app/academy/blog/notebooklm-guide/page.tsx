import type { Metadata } from "next";
import NotebookLmGuidePage from "@/components/academyLanding/blog/notebooklm-guide/NotebookLmGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "NotebookLMの使い方完全ガイド｜AIで情報整理・学習を効率化する方法 | AIリブート";
const pageDescription =
  "NotebookLMの始め方と使い方を、ソース取り込み→要約→質問→アウトプットまで手順で解説。リサーチ/学習ノート整理に効く使い分け、Audio Overview活用のコツも掲載します。";
const pageUrl = "https://ai-reboot.io/academy/blog/notebooklm-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";

const faqItems = [
  {
    question: "NotebookLMとは何ですか？",
    answer:
      "NotebookLMは、あなたが追加した資料（ソース）を根拠にして要約やQ&Aを行う、GoogleのAIノート型ツールです。一般的なチャットAIよりも「手元の資料に基づく整理・学習」に向いています。",
  },
  {
    question: "NotebookLMは何ができるのですか？",
    answer:
      "ソースの要約、重要ポイント抽出、質問への回答、論点整理、学習用ノート作成などができます。回答はソースに基づく形で提示されるため、情報整理の作業を効率化しやすいのが特徴です。",
  },
  {
    question: "どんな資料をソースとして追加できますか？",
    answer:
      "テキストやドキュメントなど、画面で選べる範囲のソースを追加できます。対応形式や上限は更新される可能性があるため、実際の画面の案内に従ってください。",
  },
  {
    question: "回答の信頼性はどう担保すればよいですか？",
    answer:
      "NotebookLMはソースに基づく出力が前提ですが、重要な意思決定や対外資料では、元資料の該当箇所を必ず確認し、必要に応じて一次情報に当たる運用が安全です。",
  },
  {
    question: "Audio Overview（音声概要）は何に使えますか？",
    answer:
      "資料の要点を音声で把握したいときに有効です。通勤中のインプットや復習に向いていますが、最終的な理解・引用は元資料を確認するのが基本です。",
  },
  {
    question: "NotebookLMとChatGPT/Claude/Geminiはどう使い分けますか？",
    answer:
      "NotebookLMは「自分の資料に基づく整理・学習」が得意です。一方、ChatGPT/Claude/Geminiは汎用的な文章作成や発想、対話に強みがあるため、目的に応じて併用するのが実務的です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["NotebookLM 使い方", "NotebookLM ガイド", "Google AI 学習ツール", "AI 情報整理", "AI 学習ノート"],
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

export default function NotebookLmGuideRoute() {
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
          { name: "NotebookLMの使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <NotebookLmGuidePage faqItems={[...faqItems]} />
    </>
  );
}
