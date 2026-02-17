import type { Metadata } from "next";
import GeminiBeginnersguidePage from "@/components/academyLanding/blog/gemini-beginners-guide/GeminiBeginnersguidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Google Gemini完全入門ガイド｜使い方・ChatGPTとの違い・無料で始める方法【2026年版】 | AIリブート";
const pageDescription =
  "Google Gemini初心者向けに、概要・無料で始める手順・ChatGPT/Claudeとの違い・業務での使い分けを整理。最初に試すプロンプト例と注意点もまとめました。";
const pageUrl = "https://ai-reboot.io/academy/blog/gemini-beginners-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";

const faqItems = [
  {
    question: "Geminiは無料で使えますか？",
    answer:
      "無料で試せるプランや状態が提供されることがあります。ただし、利用回数や機能に制限がある場合が多く、提供条件は変更される可能性があるため、最新の条件は公式案内で確認してください。",
  },
  {
    question: "GeminiとChatGPTの違いは何ですか？",
    answer:
      "どちらも文章生成や要約などを行えるAIチャットですが、GeminiはGoogleアカウント・Googleサービスと組み合わせた運用を前提にしやすい点が特徴です。一方で、最終的には「自分の業務タスクで試して出力品質を比較する」方法が最も確実です。",
  },
  {
    question: "Google AI Pro（旧: Gemini Advanced）とは何ですか？",
    answer:
      "Geminiには有料の上位プランが提供される場合があります（例: Google AI Pro）。名称や提供形態は更新されることがあるため、利用できる地域・契約・機能は公式のプラン情報で確認してください。",
  },
  {
    question: "Google Workspaceの仕事で使えますか？",
    answer:
      "Workspace連携機能が提供される場合がありますが、組織の設定や契約プラン、管理者ポリシーで使える範囲が変わります。導入前に、管理者設定と社内ルール（機密情報の扱い、ログの扱い）を確認してください。",
  },
  {
    question: "業務で使うときの注意点はありますか？",
    answer:
      "機密情報を入力しない、出力は事実確認する、最終判断は人が行う、の3点を先にルール化すると運用しやすくなります。社内ガイドラインや契約条件に沿った使い方を徹底してください。",
  },
  {
    question: "初心者はどんなプロンプトから始めればいいですか？",
    answer:
      "最初は「目的・前提・制約・出力形式」を分けて書くのが失敗しにくい方法です。短いタスク（メール返信の下書き、議事録要約など）で1日1回試し、追質問で改善する流れが定着しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Gemini 使い方 初心者",
    "Gemini ChatGPT 違い",
    "Google Gemini 使い方",
    "Gemini 無料",
    "Google AI Pro",
    "AIチャット 比較",
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

export default function GeminiBeginnersGuideRoute() {
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
          { name: "Gemini完全入門ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GeminiBeginnersguidePage faqItems={[...faqItems]} />
    </>
  );
}
