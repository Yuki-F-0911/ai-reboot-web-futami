import { Metadata } from "next";
import AX10604Page from "@/components/corporate/ax1-0604/AX10604Page";

export const metadata: Metadata = {
    title: "AX-1 | 2026年6月4日（木）開催 | AI REBOOT",
    description:
        "2026年6月4日、社長自らがAI駆動型へ変わるための1DAY集中研修。AI前提の経営戦略と組織変革の進め方を少人数で学びます。",
    openGraph: {
        title: "AX-1 | 2026年6月4日（木）開催 | AI REBOOT",
        description:
            "2026年6月4日、社長自らがAI駆動型へ変わるための1DAY集中研修。AI前提の経営戦略と組織変革の進め方を少人数で学びます。",
        images: ["/images/corporate/ax1-special/ogp-v2.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AX-1 | 2026年6月4日（木）開催 | AI REBOOT",
        description:
            "2026年6月4日、社長自らがAI駆動型へ変わるための1DAY集中研修。AI前提の経営戦略と組織変革の進め方を少人数で学びます。",
        images: ["/images/corporate/ax1-special/ogp-v2.webp"],
    },
};

export default function Page() {
    return <AX10604Page />;
}
