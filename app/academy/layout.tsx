import type { Metadata } from "next";
import type { ReactNode } from "react";
import { EducationalOrganizationStructuredData } from "@/components/seo/StructuredData";

const academyBaseUrl = "https://ai-reboot.io";
const academyTopUrl = `${academyBaseUrl}/academy`;
const academyDefaultTitle = "AIリブートアカデミー | AI REBOOT - ウィルフォワード";
const academyDefaultDescription =
  "経済産業省認定リスキリング講座で、生成AI活用・キャリア設計・実践力を100日間で身につけるAIリブートアカデミー。";

export const metadata: Metadata = {
  metadataBase: new URL(academyBaseUrl),
  title: academyDefaultTitle,
  description: academyDefaultDescription,
  openGraph: {
    title: academyDefaultTitle,
    description: academyDefaultDescription,
    siteName: "AIリブートアカデミー",
    locale: "ja_JP",
    type: "website",
    url: academyTopUrl,
    images: [
      {
        url: "/academy/opengraph-image",
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
    images: ["/academy/opengraph-image"],
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
    </>
  );
}
