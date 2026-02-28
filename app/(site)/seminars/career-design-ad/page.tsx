import type { Metadata } from "next";
import {
    HeroSection,
    ProblemSection,
    SolutionSection,
    TargetSection,
    InstructorSection,
    RegisterSection,
} from "@/components/seminar/career-design-ad";

export const metadata: Metadata = {
    title: "スキル依存からの脱却 - AI時代のキャリア設計セミナー | AI REBOOT",
    description:
        "AIツールの操作を覚えるな、己の思考を更新せよ。便利なツールに自分の価値を明け渡すな。技術の波に呑まれる前に、キャリアの土台を築く無料オンラインセミナー。1月18日(日) 20:00〜21:00開催。",
    openGraph: {
        title: "スキル依存からの脱却 - AI時代のキャリア設計セミナー",
        description:
            "AIツールの操作を覚えるな、己の思考を更新せよ。1月18日(日) 20:00〜21:00開催。",
        type: "website",
        images: [
            {
                url: "/images/seminar/ogp-career-design.png",
                width: 1200,
                height: 630,
                alt: "スキル依存からの脱却 - AI時代のキャリア設計セミナー",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "スキル依存からの脱却 - AI時代のキャリア設計セミナー",
        description:
            "AIツールの操作を覚えるな、己の思考を更新せよ。1月18日(日) 20:00〜21:00開催。",
    },
};

export default function CareerDesignAdPage() {
    return (
        <>
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <TargetSection />
            <InstructorSection />
            <RegisterSection />
        </>
    );
}
