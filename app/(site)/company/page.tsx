import type { Metadata } from "next";
import CompanyPageContent from "@/components/company/CompanyPageContent";

const companyTitle = "運営会社 | AIリブート（株式会社ウィルフォワード）";
const companyDescription =
  "AIリブートを運営する株式会社ウィルフォワードの会社情報。企業向けAI研修、個人向けAI講座、DX人材育成・リスキリング支援の提供体制をご紹介します。";
const companyUrl = "https://ai-reboot.io/company";
const companyOgImagePath = "/opengraph-image";

export const metadata: Metadata = {
  title: companyTitle,
  description: companyDescription,
  keywords: [
    "AIリブート 運営会社",
    "株式会社ウィルフォワード",
    "企業向けAI研修",
    "リスキリング 支援会社",
  ],
  alternates: {
    canonical: companyUrl,
  },
  openGraph: {
    title: companyTitle,
    description: companyDescription,
    url: companyUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: companyOgImagePath,
        width: 1200,
        height: 630,
        alt: "AIリブート 運営会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyTitle,
    description: companyDescription,
    images: [companyOgImagePath],
  },
};

export default function CompanyPage() {
  return <CompanyPageContent />;
}
