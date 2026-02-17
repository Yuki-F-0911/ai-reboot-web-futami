import type { Metadata } from "next";
import DxReskillingSubsidyGuidePage from "@/components/academyLanding/blog/dx-reskilling-subsidy-guide/DxReskillingSubsidyGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "DXリスキリング助成金ガイド｜対象条件・申請手順・併用可否を解説 | AIリブート";
const pageDescription =
  "「DXリスキリング 助成金」を調べている方向けに、制度の概要、個人向け補助金との違い、対象講座の条件、申請フロー、併用可否を整理したガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/dx-reskilling-subsidy-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-17T12:00:00+09:00";

const faqItems = [
  {
    question: "DXリスキリング助成金は企業向けの制度ですか？",
    answer:
      "一般的には企業が従業員向け研修を実施する際に活用する制度が中心です。個人で学習する場合は、個人向けの補助金制度を確認する必要があります。",
  },
  {
    question: "受講後にまとめて申請できますか？",
    answer:
      "制度によっては事前申請が必須です。受講開始後は対象外になる場合があるため、申込み前に公募要領と申請期限を確認してください。",
  },
  {
    question: "オンライン講座やeラーニングも対象になりますか？",
    answer:
      "対象になる制度はありますが、講座認定要件や実施記録の要件が設定されることがあります。受講形式だけで判断せず、制度ごとの条件を確認してください。",
  },
  {
    question: "申請時に特に見られるポイントは何ですか？",
    answer:
      "研修目的の妥当性、対象者、実施計画、費用の証憑、受講実績の記録が重視されます。計画と実績の整合性を保つことが重要です。",
  },
  {
    question: "他の補助金制度と併用できますか？",
    answer:
      "併用可否は制度ごとに異なります。同一経費への二重計上が不可となるケースが多いため、対象経費の切り分けを事前に設計してください。",
  },
  {
    question: "まず何から確認すればよいですか？",
    answer:
      "自社が使える候補制度を洗い出し、申請タイミング、対象講座、必要書類を一覧化することから始めると判断が早くなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "DXリスキリング 助成金",
    "DX研修 助成金",
    "リスキリング補助金 違い",
    "DX人材育成 助成金",
    "DX講座 補助金",
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

export default function DxReskillingSubsidyGuideRoute() {
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
          { name: "DXリスキリング助成金ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <DxReskillingSubsidyGuidePage faqItems={[...faqItems]} />
    </>
  );
}
