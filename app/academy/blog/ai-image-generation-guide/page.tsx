import type { Metadata } from "next";
import AiImageGenerationGuidePage from "@/components/academyLanding/blog/ai-image-generation-guide/AiImageGenerationGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AI画像生成おすすめツール比較｜Gemini Nano Banana・Midjourney・DALL-Eの使い方と選び方【2026年版】 | AIリブート";
const pageDescription =
  "Nano Banana（Gemini）・Midjourney・DALL-E・Stable Diffusionを比較し、AI画像生成の使い方を初心者向けに整理。仕事での活用パターン、注意点（著作権・商用利用）までまとめました。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-image-generation-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-17T09:00:00+09:00";

const faqItems = [
  {
    question: "Nano Banana（Gemini）の画像生成は無料で使えますか？",
    answer:
      "無料プランでも試せる場合がありますが、利用回数や機能に制限があることが一般的です。仕様は更新されるため、最新の利用条件は公式情報で確認してください。",
  },
  {
    question: "Midjourneyはどこから使えばよいですか？",
    answer:
      "基本はDiscord経由で利用します。提供UIや導線は変更される可能性があるため、開始手順は公式の案内に沿って設定してください。",
  },
  {
    question: "DALL-EはChatGPTで使えますか？",
    answer:
      "ChatGPT上で画像生成機能が提供される場合があり、会話の流れで指示しやすいのが特徴です。利用可否や回数は契約プランや提供状況で異なるため、公式情報で確認してください。",
  },
  {
    question: "Stable Diffusionは初心者でも扱えますか？",
    answer:
      "クラウドサービスやGUIツールを使えば始めやすい一方、ローカル実行は環境構築や設定が必要です。目的（品質・自由度・コスト）に合わせて選ぶのが安全です。",
  },
  {
    question: "商用利用で気をつけるべきポイントは？",
    answer:
      "各ツールの利用規約（商用可否・禁止事項）、第三者の著作権・商標・肖像権、学習データやスタイル模倣に関するリスクを確認してください。クライアントワークでは特にルールを明文化して運用するのが重要です。",
  },
  {
    question: "仕事で使うなら最初に何を整えるべきですか？",
    answer:
      "目的（何の素材を作るか）と品質基準（使える/使えないの判断）を先に決め、プロンプトの型と素材管理（版・権利情報）をセットで整えると再現性が上がります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Nano Banana 使い方",
    "Midjourney 使い方",
    "AI画像生成 おすすめ",
    "AI画像生成 使い方",
    "Gemini 画像生成",
    "DALL-E 使い方",
    "Stable Diffusion 使い方",
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

export default function AiImageGenerationGuideRoute() {
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
          { name: "AI画像生成ツール比較", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiImageGenerationGuidePage faqItems={[...faqItems]} />
    </>
  );
}

