import type { Metadata } from "next";
import CanvaAiGuidePage from "@/components/academyLanding/blog/canva-ai-guide/CanvaAiGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Canva AIの使い方ガイド2026｜Magic Studio・無料/有料比較・商用利用 | AIリブート";
const pageDescription =
  "Canva AI（Magic Studio）の使い方を2026年版で解説。Magic Write・Magic Design・Text to Imageの実践手順、無料版とProの違い、商用利用の注意点、Adobe Express・Microsoft Designer比較まで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/canva-ai-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "Canva AI（Magic Studio）は無料でも使えますか？",
    answer:
      "無料プランでも一部機能を試せますが、利用回数や速度に制限があります。Magic Writeの回数や画像生成の上限は機能ごとに単位が異なるため、利用前にアカウント画面の最新表示を確認してください。",
  },
  {
    question: "Magic WriteとMagic Designはどう使い分ければいいですか？",
    answer:
      "Magic Writeは文章の下書き、Magic Designはレイアウトの初稿作成に向いています。実務では「文章の骨子→デザイン初稿→手修正」の順に使うと制作時間を短縮しやすくなります。",
  },
  {
    question: "Canva AI画像生成は商用利用できますか？",
    answer:
      "商用利用できるケースはありますが、第三者の著作権・商標・肖像権に配慮し、最終確認は利用者側で行う必要があります。クライアントワークでは特に規約と権利確認をセットで運用してください。",
  },
  {
    question: "Canva Proは月額1,500円で固定ですか？",
    answer:
      "表示価格は地域・通貨・税制・キャンペーンで変動する場合があります。記事内の金額は目安として扱い、最終的には契約画面の最新表示を優先してください。",
  },
  {
    question: "Adobe ExpressやMicrosoft Designerとの違いは何ですか？",
    answer:
      "Canvaはテンプレ資産と編集一体感が強みです。Adobe ExpressはAdobe連携と生成クレジット設計、Microsoft DesignerはMicrosoftアカウント連携と日次クレジット運用が特徴です。",
  },
  {
    question: "日本語テキスト生成の精度を上げるコツはありますか？",
    answer:
      "1回で完成させようとせず、用途・読者・文体・文字数を明記して段階的に修正する運用が有効です。公開前は固有名詞、数字、助詞の自然さを必ず人が確認してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Canva AI 使い方 2026",
    "Canva Magic Studio",
    "Canva AI 画像生成",
    "Canva 無料 有料 違い",
    "Magic Write 使い方",
    "Magic Design 使い方",
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

export default function CanvaAiGuideRoute() {
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
          { name: "Canva AI使い方ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <CanvaAiGuidePage faqItems={[...faqItems]} />
    </>
  );
}
