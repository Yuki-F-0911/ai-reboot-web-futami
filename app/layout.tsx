import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  OrganizationStructuredData,
} from "@/components/seo/StructuredData";
import BreadcrumbAutoStructuredData from "@/components/seo/BreadcrumbAutoStructuredData";

const baseUrl = "https://ai-reboot.io";
const defaultOgImagePath = "/opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || baseUrl),
  title: "AI REBOOT - AIリブート | ウィルフォワード",
  description:
    "AIリブートは、企業向けAI研修と個人向けAI講座を通じて、生成AI活用・リスキリング・DX人材育成を支援します。",
  keywords: "AI, リスキリング, 生成AI, ChatGPT, AI教育, AIコンサルティング, ウィルフォワード",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AI REBOOT - AIリブート",
    description:
      "企業向けAI研修・個人向けAI講座で、AI活用とリスキリングを実践レベルまで伴走支援。",
    url: baseUrl,
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: defaultOgImagePath,
        width: 1200,
        height: 630,
        alt: "AI REBOOT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI REBOOT - AIリブート",
    description:
      "企業向けAI研修・個人向けAI講座で、AI活用とリスキリングを実践レベルまで伴走支援。",
    images: [defaultOgImagePath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <GoogleAnalytics />
        <OrganizationStructuredData
          name="株式会社ウィルフォワード"
          url={baseUrl}
          logo={`${baseUrl}/icon.png`}
          description="AIリブートを運営し、企業向けAI研修と個人向けAI講座を提供する教育・研修事業者。"
        />
        <BreadcrumbAutoStructuredData />
        {children}
      </body>
    </html>
  );
}
