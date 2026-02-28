import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";

const contactTitle = "お問い合わせ | AIリブート";
const contactDescription =
  "AI研修・AI講座・助成金活用についてのご相談はAIリブートへ。企業向けAI研修、個人向けリスキリング講座、導入の進め方までお気軽にお問い合わせください。";
const contactUrl = "https://ai-reboot.io/contact";
const contactOgImagePath = "/opengraph-image";

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  keywords: [
    "AIリブート お問い合わせ",
    "企業向けAI研修 相談",
    "AI講座 相談",
    "リスキリング 問い合わせ",
  ],
  alternates: {
    canonical: contactUrl,
  },
  openGraph: {
    title: contactTitle,
    description: contactDescription,
    url: contactUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: contactOgImagePath,
        width: 1200,
        height: 630,
        alt: "AIリブート お問い合わせ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
    images: [contactOgImagePath],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
