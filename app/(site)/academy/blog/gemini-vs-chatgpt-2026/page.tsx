import type { Metadata } from "next";
import GeminiVsChatgpt2026Page from "@/components/academyLanding/blog/gemini-vs-chatgpt-2026/GeminiVsChatgpt2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Gemini 3.1 vs ChatGPT 2026｜どちらを選ぶべきか完全比較 | AIリブート";
const pageDescription =
  "Gemini 3.1 ProとChatGPT（GPT-5.2）を料金・性能・用途別に徹底比較。Google AI ProとChatGPT Plusどちらが得か、2026年3月最新情報で解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/gemini-vs-chatgpt-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-03-04T09:00:00+09:00";
const modifiedTime = "2026-03-04";

const faqItems = [
  {
    question: "Gemini AdvancedとGoogle AI Proは同じですか？",
    answer:
      "はい。2025年5月にGemini AdvancedからGoogle AI Proへ名称変更されました。機能・料金（¥2,900/月）は変わらず、Gemini 3.1 Proへのフルアクセスが含まれます。",
  },
  {
    question: "無料でどこまで使えますか？",
    answer:
      "両者とも無料プランがあります。Gemini無料版はGemini 2.0 Flash、ChatGPT無料版はGPT-4o miniが基本モデルです。文章作成・要約・翻訳など日常的な用途には無料プランで十分対応できますが、最上位モデルや高度な機能は有料プランが必要です。",
  },
  {
    question: "日本語の精度はどちらが高いですか？",
    answer:
      "2026年3月時点では甲乙つけがたい水準です。Google翻訳との統合により、Geminiが特定の翻訳・多言語処理タスクで有利な場面もあります。ビジネス文書作成や長文要約ではどちらも実用水準に達しており、用途ごとに試してから判断するのが最善です。",
  },
  {
    question: "GeminiとChatGPTを両方使うことはできますか？",
    answer:
      "もちろんです。無料プランを両方同時に使うことも、有料プランを1つに絞ることも可能です。用途別に使い分けるユーザーも増えています。まず両方の無料版を2〜3週間試してから、有料化するかどうかを判断するのが最も失敗しにくい方法です。",
  },
  {
    question: "Gemini 3.1 Proのベンチマークは信頼できますか？",
    answer:
      "ARC-AGI-2（77.1%）やGPQA Diamond（94.3%）は公式発表値です。ただしベンチマーク結果が高いモデルが、あなたの業務で最もよい結果を出すとは限りません。特定の業務タスクで実際に試すのが、選定の最も確実な方法です。",
  },
  {
    question: "ChatGPT PlusとGPTs（カスタムGPT）は何が違いますか？",
    answer:
      "ChatGPT PlusはOpenAIの有料プランです。GPTsはChatGPT Plus加入者が作成・利用できるカスタマイズAIツールです。特定の業務や用途に特化したGPTsを利用・作成できる点が、ChatGPT Plusの大きな付加価値の一つです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["Gemini", "ChatGPT", "比較", "Google AI Pro", "ChatGPT Plus", "2026", "どちらがいい", "料金"],
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

export default function GeminiVsChatgpt2026Route() {
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
          { name: "Gemini 3.1 vs ChatGPT 2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GeminiVsChatgpt2026Page faqItems={[...faqItems]} />
    </>
  );
}
