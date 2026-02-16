import type { Metadata } from "next";
import type { ReactNode } from "react";

const programTitle = "プログラム詳細 | AIリブートアカデミー";
const programDescription =
  "AIリブートアカデミーの100日間プログラムを紹介。生成AI活用を実践で学ぶカリキュラム、伴走サポート、無料説明会への参加方法を確認できます。";
const programUrl = "https://ai-reboot.io/program";
const programOgImagePath = "/academy/opengraph-image";

export const metadata: Metadata = {
  title: programTitle,
  description: programDescription,
  alternates: {
    canonical: programUrl,
  },
  openGraph: {
    title: programTitle,
    description: programDescription,
    url: programUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: programOgImagePath,
        width: 1200,
        height: 630,
        alt: "AIリブートアカデミーのプログラム詳細",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: programTitle,
    description: programDescription,
    images: [programOgImagePath],
  },
};

export default function ProgramLayout({ children }: { children: ReactNode }) {
  return children;
}
