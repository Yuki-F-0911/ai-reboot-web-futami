import type { Metadata } from "next";
import {
    HeroSection,
    ProblemSection,
    SolutionSection,
    TargetSection,
    InstructorSection,
    RegisterSection,
} from "@/components/seminar/career-design";

export const metadata: Metadata = {
    title: "生成AI時代のキャリア設計論 | AI REBOOT - ウィルフォワード",
    description:
        "人事・採用のプロ×AI実践者が教える「キャリア下剋上」のロードマップ。ツールに依存しない「本質的な強み」の作り方を学ぶ無料オンラインセミナー。1月18日(日) 20:00〜21:00開催。",
    openGraph: {
        title: "生成AI時代のキャリア設計論 | 無料オンラインセミナー",
        description:
            "人事・採用のプロ×AI実践者が教える「キャリア下剋上」のロードマップ。1月18日(日) 20:00〜21:00開催。",
        type: "website",
        images: [
            {
                url: "/images/seminar/career-hero-bg.png",
                width: 1200,
                height: 630,
                alt: "生成AI時代のキャリア設計論",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "生成AI時代のキャリア設計論 | 無料オンラインセミナー",
        description:
            "人事・採用のプロ×AI実践者が教える「キャリア下剋上」のロードマップ。1月18日(日) 20:00〜21:00開催。",
    },
};

export default function CareerDesignSeminarPage() {
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
