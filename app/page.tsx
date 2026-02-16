import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

const homeTitle = "AIリブート | AI研修・AI講座で個人と企業のリスキリングを支援";
const homeDescription =
  "AIリブートは、企業向けAI研修と個人向けAI講座でリスキリングを支援。生成AI活用・DX人材育成・助成金活用まで、実践に直結する学習と伴走サポートを提供します。";
const homeUrl = "https://ai-reboot.io";
const homeOgImagePath = "/opengraph-image";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "AI研修",
    "AI講座",
    "企業向けAI研修",
    "リスキリング",
    "DX人材育成",
    "生成AI研修",
    "AIリブート",
  ],
  alternates: {
    canonical: homeUrl,
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: homeUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: homeOgImagePath,
        width: 1200,
        height: 630,
        alt: "AIリブート",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [homeOgImagePath],
  },
};

export default function Home() {
  return <HomePage />;
}
