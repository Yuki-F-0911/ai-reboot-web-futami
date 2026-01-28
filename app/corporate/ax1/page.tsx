import { Metadata } from "next";
import AX1Page from "@/components/corporate/ax1/AX1Page";

export const metadata: Metadata = {
    title: "AX-1 | 経営者限定 AI戦略ブリーフィング | AI REBOOT",
    description:
        "中小・ベンチャー企業の経営者・幹部限定。1日で、御社のビジネスモデルを「AI前提」に書き換える戦略ブリーフィング「AX-1」。",
    openGraph: {
        title: "AX-1 | 経営者限定 AI戦略ブリーフィング | AI REBOOT",
        description: "中小・ベンチャー企業の経営者・幹部限定。1日で、御社のビジネスモデルを「AI前提」に書き換える戦略ブリーフィング「AX-1」。",
        images: ["/images/ax1/ogp.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AX-1 | 経営者限定 AI戦略ブリーフィング | AI REBOOT",
        description: "中小・ベンチャー企業の経営者・幹部限定。1日で、御社のビジネスモデルを「AI前提」に書き換える戦略ブリーフィング「AX-1」。",
        images: ["/images/ax1/ogp.jpg"],
    },
};

export default function Page() {
    return <AX1Page />;
}
