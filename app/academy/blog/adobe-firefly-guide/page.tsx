import type { Metadata } from "next";
import AdobeFireflyGuidePage from "@/components/academyLanding/blog/adobe-firefly-guide/AdobeFireflyGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Adobe Firefly使い方ガイド2026｜商用利用・料金・連携機能を解説 | AIリブート";
const pageDescription =
  "Adobe Fireflyの使い方を2026年基準で解説。Photoshop・Illustrator・Adobe ExpressでのAI機能、商用利用ライセンス、無料版と有料Creative Cloudの違い、Midjourney・DALL·Eとの比較まで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/adobe-firefly-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T10:00:00+09:00";
const modifiedTime = "2026-02-20T10:00:00+09:00";

const faqItems = [
  {
    question: "Adobe Fireflyの生成画像は商用利用できますか？",
    answer:
      "Adobe公式ガイドラインでは原則商用利用が認められています。ただし、機能ごとに表示される利用条件で禁止指定がある場合は従う必要があります。公開前の権利確認と最終審査は必須です。",
  },
  {
    question: "Firefly無料版の月間生成クレジットは2026年時点で何回ですか？",
    answer:
      "Adobe公式FAQでは無料ユーザー向けクレジットを固定値で公開せず、Limitedおよびsubject to changeと案内しています。実際の残高はアカウント画面で確認する運用が安全です。",
  },
  {
    question: "Firefly Videoは正式版ですか、それともベータですか？",
    answer:
      "Firefly Video Model本体はAdobe Newsroomでgenerally availableと案内されています。一方で、Firefly video editorなど周辺の一部機能にはbeta表記が残っています。",
  },
  {
    question: "Photoshop・Illustrator・Adobe Expressでは何が違いますか？",
    answer:
      "Photoshopは画像編集ワークフロー統合、Illustratorはベクター生成、Adobe ExpressはSNS/動画向けの配布素材作成に強みがあります。同じFireflyでもアプリごとに得意領域とpremium消費箇所が異なります。",
  },
  {
    question: "MidjourneyやDALL·Eと比べたときの違いは何ですか？",
    answer:
      "比較軸は画風だけではなく、商用利用時の契約条件、組織導入時のガバナンス、既存制作フローとの接続です。AdobeはCreative Cloud連携と企業運用前提の設計が強みです。",
  },
  {
    question: "法人で導入する前に決めるべき運用ルールはありますか？",
    answer:
      "最低限、使用可能機能の範囲、権利確認フロー、公開前レビュー責任者、生成ログの保管方針を決めると導入後のリスクが下がります。特にbeta機能は都度の条件確認を固定ルールにしてください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Adobe Firefly 使い方 2026",
    "Adobe AI 画像生成",
    "Firefly 商用利用",
    "Adobe Express AI",
    "Photoshop 生成AI",
    "Firefly Video",
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

export default function AdobeFireflyGuideRoute() {
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
          { name: "Adobe Firefly使い方ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AdobeFireflyGuidePage faqItems={[...faqItems]} />
    </>
  );
}
