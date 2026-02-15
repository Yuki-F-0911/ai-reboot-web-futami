import { OG_IMAGE_SIZE, createOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const contentType = "image/png";
export const size = OG_IMAGE_SIZE;

export default async function Image() {
  return createOgImage({
    title: "無料セミナー",
    subtitle: "AIリブートアカデミー",
    eyebrow: "SEMINARS",
    accentColor: "#D97706",
  });
}
