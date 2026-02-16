import type { Metadata } from "next";
import type { ReactNode } from "react";

const legalTitle = "特定商取引法に基づく表記 | AIリブート";
const legalDescription =
  "AIリブート（株式会社ウィルフォワード）の特定商取引法に基づく表記です。販売業者情報、支払い方法、提供時期、キャンセル・返金ポリシーをご確認いただけます。";
const legalUrl = "https://ai-reboot.io/legal";

export const metadata: Metadata = {
  title: legalTitle,
  description: legalDescription,
  alternates: {
    canonical: legalUrl,
  },
  openGraph: {
    title: legalTitle,
    description: legalDescription,
    url: legalUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "特定商取引法に基づく表記",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: legalTitle,
    description: legalDescription,
    images: ["/opengraph-image"],
  },
};

export default function LegalLayout({ children }: { children: ReactNode }) {
  return children;
}
