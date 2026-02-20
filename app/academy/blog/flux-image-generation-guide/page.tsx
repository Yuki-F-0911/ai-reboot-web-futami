import type { Metadata } from "next";
import FluxImageGenerationGuidePage from "@/components/academyLanding/blog/flux-image-generation-guide/FluxImageGenerationGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Flux画像生成の使い方ガイド｜Dev/Schnell/Pro/Ultra比較とローカル運用【2026年版】 | AIリブート";
const pageDescription =
  "Flux.1 Dev/Schnell/Pro/Ultraの違いを、ライセンス・商用可否・速度・品質で比較。ComfyUI/Forgeのローカル運用、Replicate/fal.ai/Hugging Faceのクラウド活用、日本語プロンプト実践まで2026年2月時点で解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/flux-image-generation-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "Flux.1 Schnellは無料で商用利用できますか？",
    answer:
      "FLUX.1 [schnell] はApache-2.0で公開されており、モデルライセンス上は商用利用しやすい構成です。ただし配信先サービス（クラウドAPI等）の利用規約は別途確認してください。",
  },
  {
    question: "Flux.1 Devを仕事で使う場合の注意点は？",
    answer:
      "FLUX.1 [dev] は非商用ライセンスが基本です。商用利用にはBlack Forest Labsの商用ライセンス導線（Self-Serve Dev License等）を確認し、契約条件を満たす必要があります。",
  },
  {
    question: "ローカル運用の最低VRAMはどれくらい必要ですか？",
    answer:
      "公式の単一最小要件は明確化されておらず、モデル・量子化・解像度で変動します。実務ではSchnellを軽量設定で試し、必要に応じて段階的に拡張する進め方が安全です。",
  },
  {
    question: "ComfyUIとForgeはどちらから始めるべきですか？",
    answer:
      "ワークフロー可視化を重視するならComfyUI、既存のStable Diffusion運用を引き継ぎたいならForgeが始めやすいです。まずは同じプロンプトで比較し、運用しやすい方を主軸にすると定着しやすくなります。",
  },
  {
    question: "MidjourneyやDALL·Eと比べたFluxの強みは何ですか？",
    answer:
      "Fluxはローカル運用とクラウド運用の選択肢を取りやすく、プロンプト追従性を調整しやすい点が強みです。一方で、文字レンダリングや厳密なレイアウトはモデルを問わず追加調整が必要な場面があります。",
  },
  {
    question: "日本語プロンプトだけで安定した画像生成は可能ですか？",
    answer:
      "日本語のみでも生成は可能ですが、再現性を上げるには短い文への分解、英語キーワード併用、ネガティブ制約の明示が有効です。特に文字入り画像は複数試行を前提に設計してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Flux 画像生成 使い方",
    "Flux.1 Dev Schnell Pro 比較",
    "Stable Diffusion 後継",
    "ローカル AI画像生成",
    "ComfyUI Flux",
    "Forge Flux",
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

export default function FluxImageGenerationGuideRoute() {
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
          { name: "Flux画像生成ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <FluxImageGenerationGuidePage faqItems={[...faqItems]} />
    </>
  );
}
