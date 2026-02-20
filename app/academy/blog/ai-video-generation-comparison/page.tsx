import type { Metadata } from "next";
import AiVideoGenerationComparisonPage from "@/components/academyLanding/blog/ai-video-generation-comparison/AiVideoGenerationComparisonPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "動画生成AI比較2026｜Kling AI・Midjourney V1 Video・Runway Gen-3と主要モデルの選び方 | AIリブート";
const pageDescription =
  "動画生成AIを選ぶ人向けに、Kling AI・Midjourney V1 Video・Runway Gen-3 Alpha・Seedance・Soraを品質・速度・価格・日本語対応・商用条件で比較。用途別の選び方、無料検証手順、課金判断のチェックポイント、導入時の確認順まで2026年2月時点で整理した比較ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-video-generation-comparison";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "動画生成AIは無料でどこまで使えますか？",
    answer:
      "無料枠はありますが、解像度・尺・回数に制限があります。無料期間は相性確認に使い、本番運用は有料前提で設計してください。",
  },
  {
    question: "Kling AIは無料で使えますか？",
    answer:
      "無料枠はありますが、1日あたりの利用上限があります。Kling AIは最大1080p・30fps・最大3分まで対応する一方、商用利用は有料プランが前提です（確認日: 2026-02-20）。",
  },
  {
    question: "Midjourney V1 Videoはどう使いますか？",
    answer:
      "Midjourney V1 Videoは静止画から動画に変換する機能で、Animateボタンから実行します。生成尺は4〜8秒程度の短尺で、利用はPro / Megaプラン限定です（確認日: 2026-02-20）。",
  },
  {
    question: "Runway Gen-3 Alphaの商用利用は可能ですか？",
    answer:
      "Runway Gen-3 Alphaはテキスト/画像から最大10秒動画を生成でき、Advancedプランで利用できます。商用利用は有料プラン前提で、Freeプランは不可です（確認日: 2026-02-20）。",
  },
  {
    question: "Soraはどのプランで使えますか？",
    answer:
      "OpenAI公式ヘルプでは、SoraはChatGPT Plus / Pro / Teamで利用できます。生成上限や同時実行数はプランで変わるため、契約前に最新条件を確認してください（確認日: 2026-02-20）。",
  },
  {
    question: "Seedanceとは何ですか？",
    answer:
      "SeedanceはByteDance Seed Teamの動画生成モデルです。利用はDreaminaやDoubao経由で、料金と商用条件は利用先規約で確認してください。",
  },
  {
    question: "日本語で使いやすい動画生成AIはどれですか？",
    answer:
      "UI言語だけでなく、日本語プロンプトの再現性と実運用での確認しやすさで判断してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "動画生成AI 比較",
    "Kling AI",
    "Midjourney V1 Video",
    "Runway Gen-3 Alpha",
    "Sora 使い方",
    "Seedance とは",
    "動画生成 無料",
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

export default function AiVideoGenerationComparisonRoute() {
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
          { name: "動画生成AI比較2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiVideoGenerationComparisonPage faqItems={[...faqItems]} />
    </>
  );
}
