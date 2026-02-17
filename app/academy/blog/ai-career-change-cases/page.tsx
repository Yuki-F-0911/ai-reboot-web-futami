import type { Metadata } from "next";
import AiCareerChangeCasesPage from "@/components/academyLanding/blog/ai-career-change-cases/AiCareerChangeCasesPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI時代のキャリアチェンジ事例（構成例）｜転換と成長のパターンを解説 | AIリブート";
const pageDescription =
  "AI時代のキャリアチェンジを具体化するための構成例を4つ紹介。Before/Afterの変化、学習とアウトプットの積み上げ方、成功要因を整理します。未経験でも現職の強みを活かした移行ルートを描けます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-career-change-cases";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2025-11-01T09:00:00+09:00";
const modifiedTime = "2026-02-18T18:00:00+09:00";

const faqItems = [
  {
    question: "AIキャリアチェンジは未経験でも可能ですか？",
    answer:
      "可能です。職種を完全に変えるだけでなく、現職でAI活用を強化して役割を拡張する方法もあります。自分の強みを活かせる移行ルートを選ぶことが重要です。",
  },
  {
    question: "AI転職の事例では、どの程度の学習期間が必要でしたか？",
    answer:
      "学習期間は職種や目標によって大きく異なります。重要なのは期間の長さより、実務課題に直結したアウトプットを継続できる設計にすることです。",
  },
  {
    question: "30代・40代・50代でもキャリア転換は現実的ですか？",
    answer:
      "はい。年代よりも、現在の経験をどのようにAI活用と結びつけて価値化できるかが鍵です。本記事の構成例でも、年代ごとに異なる強みを活かす前提で整理しています。",
  },
  {
    question: "事例から学べる共通ポイントは何ですか？",
    answer:
      "構成例として共通しているのは、目的を明確にした学習計画、成果物の可視化、第三者からのフィードバックです。独学でも伴走型でも、この3点を意識すると実務に接続しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI キャリアチェンジ",
    "AI転職 事例",
    "AI キャリアパス",
    "AI時代 転職",
    "生成AI キャリア",
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

export default function AiCareerChangeCasesRoute() {
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
          { name: "キャリアチェンジ事例（構成例）", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiCareerChangeCasesPage faqItems={[...faqItems]} />
    </>
  );
}
