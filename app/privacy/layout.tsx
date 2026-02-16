import type { Metadata } from "next";
import type { ReactNode } from "react";

const privacyTitle = "プライバシーポリシー | AIリブート";
const privacyDescription =
  "AIリブート（株式会社ウィルフォワード）のプライバシーポリシーです。個人情報の収集・利用目的、第三者提供、安全管理、Cookie利用について定めています。";
const privacyUrl = "https://ai-reboot.io/privacy";

export const metadata: Metadata = {
  title: privacyTitle,
  description: privacyDescription,
  alternates: {
    canonical: privacyUrl,
  },
  openGraph: {
    title: privacyTitle,
    description: privacyDescription,
    url: privacyUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "プライバシーポリシー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: privacyTitle,
    description: privacyDescription,
    images: ["/opengraph-image"],
  },
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
