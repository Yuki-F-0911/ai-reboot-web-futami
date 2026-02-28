import type { Metadata } from "next";
import type { ReactNode } from "react";

const termsTitle = "利用規約 | AIリブート";
const termsDescription =
  "AIリブート事業の利用規約です。サービス利用条件、禁止事項、著作権、免責事項、準拠法・裁判管轄などをご確認いただけます。";
const termsUrl = "https://ai-reboot.io/terms";

export const metadata: Metadata = {
  title: termsTitle,
  description: termsDescription,
  alternates: {
    canonical: termsUrl,
  },
  openGraph: {
    title: termsTitle,
    description: termsDescription,
    url: termsUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "利用規約",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: termsTitle,
    description: termsDescription,
    images: ["/opengraph-image"],
  },
};

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children;
}
