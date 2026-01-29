import { Metadata } from "next";
import AX1SpecialPage from "@/components/corporate/ax1-special/AX1SpecialPage";

export const metadata: Metadata = {
    title: "AX-1 Special | 紹介者限定 特別プレビュー回 | AI REBOOT",
    description:
        "4月の本格始動に先駆け、10名限定の特別セッションを開催。経営者が自らAI戦略を描くための1日集中研修。このご案内をお送りした方、またはそのご紹介者様のみのクローズドな回です。",
    openGraph: {
        title: "AX-1 Special | 紹介者限定 特別プレビュー回 | AI REBOOT",
        description: "4月の本格始動に先駆け、10名限定の特別セッションを開催。経営者が自らAI戦略を描くための1日集中研修。",
        images: ["/images/corporate/ax1-special/ogp.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AX-1 Special | 紹介者限定 特別プレビュー回 | AI REBOOT",
        description: "4月の本格始動に先駆け、10名限定の特別セッションを開催。経営者が自らAI戦略を描くための1日集中研修。",
        images: ["/images/corporate/ax1-special/ogp.webp"],
    },
};

export default function Page() {
    return <AX1SpecialPage />;
}
