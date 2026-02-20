import type { Metadata } from "next";
import type { ReactNode } from "react";
import { EducationalOrganizationStructuredData } from "@/components/seo/StructuredData";
import FloatingLineCta from "@/components/academyLanding/common/FloatingLineCta";
import ArticleReadLineModal from "@/components/academyLanding/common/ArticleReadLineModal";

const academyBaseUrl = "https://ai-reboot.io";
const academyTopUrl = `${academyBaseUrl}/academy`;
const academyDefaultTitle = "AIリブートアカデミー";
const academyDefaultDescription =
  "AI時代のリスキリング・生成AIスキルを習得するオンライン講座";
const academyOgImagePath = "/academy/opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL(academyBaseUrl),
  title: {
    default: academyDefaultTitle,
    template: "%s | AIリブートアカデミー",
  },
  description: academyDefaultDescription,
  alternates: {
    canonical: academyTopUrl,
  },
  openGraph: {
    title: academyDefaultTitle,
    description: academyDefaultDescription,
    url: academyTopUrl,
    siteName: "AIリブートアカデミー",
    images: [
      {
        url: academyOgImagePath,
        width: 1200,
        height: 630,
        alt: "AIリブートアカデミー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: academyDefaultTitle,
    description: academyDefaultDescription,
    images: [academyOgImagePath],
  },
};

export default function AcademyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <EducationalOrganizationStructuredData
        name="AIリブートアカデミー"
        url={academyTopUrl}
        parentOrganizationName="株式会社ウィルフォワード"
      />
      {children}
      <FloatingLineCta />
      <ArticleReadLineModal />
    </>
  );
}
