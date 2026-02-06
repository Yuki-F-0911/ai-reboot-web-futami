import { Metadata } from "next";
import AX1SpecialPage from "@/components/corporate/ax1-special/AX1SpecialPage";

export const metadata: Metadata = {
    title: "AX-1 Special | 紹介者限定 特別プレビュー回 | AI REBOOT",
    description:
        "紹介者限定で開催するAX-1 Special。2026年2月25日、社長自らがAI駆動型へ変わるための1DAY集中研修。AI前提の経営戦略と組織変革の進め方を少人数で学びます。",
    openGraph: {
        title: "AX-1 Special | 紹介者限定 特別プレビュー回 | AI REBOOT",
        description:
            "紹介者限定で開催するAX-1 Special。2026年2月25日、社長自らがAI駆動型へ変わるための1DAY集中研修。AI前提の経営戦略と組織変革の進め方を少人数で学びます。",
        images: ["/images/corporate/ax1-special/ogp.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AX-1 Special | 紹介者限定 特別プレビュー回 | AI REBOOT",
        description:
            "紹介者限定で開催するAX-1 Special。2026年2月25日、社長自らがAI駆動型へ変わるための1DAY集中研修。AI前提の経営戦略と組織変革の進め方を少人数で学びます。",
        images: ["/images/corporate/ax1-special/ogp.webp"],
    },
};

export default function Page() {
    return <AX1SpecialPage />;
}
