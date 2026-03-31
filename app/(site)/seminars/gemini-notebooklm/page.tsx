import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeminarBySlug } from "@/data/seminars";
import HeroSection from "@/components/seminar/gemini-notebooklm/HeroSection";
import FeatureSection from "@/components/seminar/gemini-notebooklm/FeatureSection";
import InstructorSection from "@/components/seminar/gemini-notebooklm/InstructorSection";
import { VoicesSection } from "@/components/seminar/template";
import RegisterSection from "@/components/seminar/gemini-notebooklm/RegisterSection";

const baseUrl = "https://ai-reboot.io";
const SLUG = "gemini-notebooklm";

export async function generateMetadata(): Promise<Metadata> {
    const seminar = getSeminarBySlug(SLUG);
    if (!seminar) return {};

    const url = `${baseUrl}/seminars/${SLUG}`;

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
                    url: `/seminars/${SLUG}/opengraph-image`,
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

export default function GeminiNotebookLMSeminarPage() {
    const seminar = getSeminarBySlug(SLUG);
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
            <FeatureSection />
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
