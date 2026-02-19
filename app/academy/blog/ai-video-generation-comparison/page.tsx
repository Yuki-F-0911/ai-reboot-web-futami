import type { Metadata } from "next";
import AiVideoGenerationComparisonPage from "@/components/academyLanding/blog/ai-video-generation-comparison/AiVideoGenerationComparisonPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方 | AIリブート";
const pageDescription =
  "動画生成AI比較2026年版。Kling・Runway・Seedance・Soraを品質・速度・価格・日本語対応・商用利用の5軸で整理し、SNS動画・プレゼン・副業・個人制作での選び方、無料で始める手順を解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-video-generation-comparison";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T21:00:00+09:00";

const faqItems = [
  {
    question: "動画生成AIは無料でどこまで使えますか？",
    answer:
      "多くのサービスは無料枠または無料トライアルがありますが、解像度・尺・生成回数・透かし・同時生成数に制限がかかります。無料枠は「画作りの当たりパターン確認」までに使い、本番用途で継続するなら有料プラン移行を前提に計画するのが安全です。",
  },
  {
    question: "Klingは無料で使えますか？",
    answer:
      "無料で試せる導線が提供される場合がありますが、地域や時期で条件が変わります。Klingはクレジット消費モデルで運用されるため、長尺化や高解像度化の前に消費ペースを確認してください（確認日: 2026-02-19）。",
  },
  {
    question: "Runwayの商用利用は可能ですか？",
    answer:
      "Runway公式ヘルプでは、有料プランで生成物の商用利用が可能と案内されています。一方でFreeプランは商用利用不可です。案件利用時は契約プラン、利用規約、第三者権利（著作権・商標・肖像権）をセットで確認してください。",
  },
  {
    question: "Soraはどのプランで使えますか？",
    answer:
      "OpenAI公式ヘルプでは、SoraはChatGPT Plus / Pro / Teamで利用可能と案内されています。利用上限や同時生成数はプラン差があるため、契約前に最新の公式情報を確認してください（確認日: 2026-02-19）。",
  },
  {
    question: "Seedanceとは何ですか？",
    answer:
      "SeedanceはByteDance Seed Teamが公開している動画生成モデルです。公式記事ではDreaminaやDoubao経由で利用できる旨が示されています。提供地域・料金・商用条件は利用プラットフォーム側の規約に依存するため、実運用前に確認が必要です。",
  },
  {
    question: "日本語で使いやすい動画生成AIはどれですか？",
    answer:
      "日本語対応はツールごとに公開情報の粒度が異なります。実務では、UI言語よりも「日本語プロンプトで再現できるか」「日本語字幕やナレーション工程まで含めて運用できるか」で判断すると失敗しにくくなります。"
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
