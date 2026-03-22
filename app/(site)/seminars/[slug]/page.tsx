import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeminarBySlug, getSeminarsWithLandingPage } from "@/data/seminars";
import {
    HeroSection,
    ProblemSection,
    SolutionSection,
    TargetSection,
    InstructorSection,
    VoicesSection,
    RegisterSection,
} from "@/components/seminar/template";

const baseUrl = "https://ai-reboot.io";

export const dynamicParams = false;

export function generateStaticParams() {
    return getSeminarsWithLandingPage()
        .filter((s) => s.slug !== "career-design")
        .map((s) => ({ slug: s.slug }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const seminar = getSeminarBySlug(slug);
    if (!seminar) return {};

    const url = `${baseUrl}/seminars/${slug}`;

    return {
        title: seminar.metaTitle,
        description: seminar.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: seminar.metaTitle,
            description: seminar.metaDescription,
            type: "website",
            url,
            images: [
                {
                    url: `/seminars/${slug}/opengraph-image`,
                    width: 1200,
                    height: 630,
                    alt: seminar.ogImageAlt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: seminar.metaTitle,
            description: seminar.metaDescription,
        },
    };
}

export default async function SeminarPage({ params }: Props) {
    const { slug } = await params;
    const seminar = getSeminarBySlug(slug);
    if (!seminar) notFound();

    return (
        <>
            <HeroSection
                title={seminar.title}
                subtitle={seminar.subtitle}
                heroCopy={seminar.heroCopy}
                dateShort={seminar.dateShort}
                time={seminar.time}
                place={seminar.place}
                googleFormUrl={seminar.googleFormUrl}
            />
            <ProblemSection
                headline={seminar.problemHeadline}
                items={seminar.problemItems}
                closing={seminar.problemClosing}
            />
            <SolutionSection />
            <TargetSection />
            <InstructorSection />
            <VoicesSection />
            <RegisterSection
                title={seminar.title}
                dateShort={seminar.dateShort}
                time={seminar.time}
                place={seminar.place}
                googleFormUrl={seminar.googleFormUrl}
            />
        </>
    );
}
