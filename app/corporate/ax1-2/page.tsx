import { Metadata } from "next";
import AX1MessagePage from "@/components/corporate/ax1-2/AX1MessagePage";

export const metadata: Metadata = {
    title: "AX-1 | 経営者限定 AI戦略ブリーフィング | AI REBOOT",
    description:
        "AI時代の経営判断に必要な視座と実践力を1日で。中小・ベンチャー企業の経営者・CxO向け集中セミナー。社員ではなく、あなた自身がAIを理解すべき理由がここにあります。",
    openGraph: {
        title: "AX-1 | 経営者限定 AI戦略ブリーフィング | AI REBOOT",
        description: "AI時代の経営判断に必要な視座と実践力を1日で。中小・ベンチャー企業の経営者・CxO向け集中セミナー。",
        images: ["/images/ax1-2/ogp.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AX-1 | 経営者限定 AI戦略ブリーフィング | AI REBOOT",
        description: "AI時代の経営判断に必要な視座と実践力を1日で。中小・ベンチャー企業の経営者・CxO向け集中セミナー。",
        images: ["/images/ax1-2/ogp.jpg"],
    },
};

export default function Page() {
    return <AX1MessagePage />;
}
