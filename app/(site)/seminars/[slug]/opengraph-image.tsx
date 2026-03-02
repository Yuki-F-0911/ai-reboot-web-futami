import { OG_IMAGE_SIZE, createOgImage } from "@/lib/og-image";
import { getSeminarBySlug, getSeminarsWithLandingPage } from "@/data/seminars";

export const contentType = "image/png";
export const size = OG_IMAGE_SIZE;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const seminar = getSeminarBySlug(slug);

    return createOgImage({
        title: seminar?.title ?? "無料セミナー",
        subtitle: seminar?.subtitle ?? "AIリブートアカデミー",
        eyebrow: "SEMINAR",
        accentColor: "#F97316",
    });
}
