import type { Metadata } from "next";
import WhatIsAiAgentPage from "@/components/academyLanding/blog/what-is-ai-agent/WhatIsAiAgentPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIエージェントとは？2026年最新勢力図と使い分け実践ガイド | AIリブート";
const pageDescription =
  "2026年2月時点のAIエージェント最新状況を実践目線で解説。OpenAI Operator/Atlas、Google Mariner、Anthropic Computer Use、Manus AI、Gensparkの勢力図、用途別の使い分け、導入時の現実的な制限を整理。";
const pageUrl = "https://ai-reboot.io/academy/blog/what-is-ai-agent";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-20T12:00:00+09:00";

const faqItems = [
  {
    question: "AIエージェントとチャットボットの違いは何ですか？",
    answer:
      "チャットボットは会話応答が中心ですが、AIエージェントは目標達成のために情報収集、判断、実行までを連続して行える点が違いです。",
  },
  {
    question: "2026年はどのAIエージェントを選べばよいですか？",
    answer:
      "用途で選ぶのが基本です。予約やフォーム入力はOperator、深掘り調査はDeep Research、コーディング自動化はClaude CodeやGitHub Copilot Agentが実務で使い分けしやすいです。",
  },
  {
    question: "OpenAI Operatorはどんな業務に向いていますか？",
    answer:
      "ブラウザ操作の再現が必要な業務に向いています。特に予約処理、フォーム入力、定型的なWeb操作の自動化で効果が出やすいです。",
  },
  {
    question: "AIエージェント導入で最初に決めるべきことは？",
    answer:
      "「対象業務」「成功条件」「人の確認ポイント」の3点です。ここが曖昧だと、途中で品質責任が崩れます。",
  },
  {
    question: "2026年時点での現実的な制限は何ですか？",
    answer:
      "ログイン認証や2FAで止まりやすいこと、長時間実行でミスが増えること、重要業務を単独運用するのはまだリスクが高いことです。",
  },
  {
    question: "中小企業でも導入できますか？",
    answer:
      "可能です。最初は1業務1ユースケースに絞り、2〜4週間の小規模PoCで運用しながら改善するのが安全です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AIエージェント とは",
    "AIエージェント 2026",
    "OpenAI Operator",
    "Deep Research",
    "AIエージェント 使い分け",
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

export default function WhatIsAiAgentRoute() {
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
          { name: "AIエージェントとは？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <WhatIsAiAgentPage faqItems={[...faqItems]} />
    </>
  );
}
