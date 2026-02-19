import type { Metadata } from "next";
import AiVideoGenerationComparisonPage from "@/components/academyLanding/blog/ai-video-generation-comparison/AiVideoGenerationComparisonPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方 | AIリブート";
const pageDescription =
  "動画生成AI比較2026年版。Kling・Runway・Seedance・Soraを品質・速度・価格・日本語対応・商用利用の5軸で整理し、用途別の選び方と無料で始める手順を解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-video-generation-comparison";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T21:00:00+09:00";

const faqItems = [
  {
    question: "動画生成AIは無料でどこまで使えますか？",
    answer:
      "無料枠はありますが、解像度・尺・回数に制限があります。無料期間は相性確認に使い、本番運用は有料前提で設計してください。",
  },
  {
    question: "Klingは無料で使えますか？",
    answer:
      "無料で試せる場合がありますが、条件は地域と時期で変動します。クレジット消費型なので、長尺化前に消費ペースを確認してください。",
  },
  {
    question: "Runwayの商用利用は可能ですか？",
    answer:
      "公式ヘルプでは有料プランで商用利用可能、Freeプランは不可です。案件利用時は規約と第三者権利を確認してください。",
  },
  {
    question: "Soraはどのプランで使えますか？",
    answer:
      "OpenAI公式ヘルプでは、SoraはChatGPT Plus / Pro / Teamで利用可能です。上限はプラン差があるため、契約前に確認してください。",
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
    "Kling 使い方",
    "Runway AI 使い方",
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
