import { OG_IMAGE_SIZE, createOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const contentType = "image/png";
export const size = OG_IMAGE_SIZE;

export default async function Image() {
  return createOgImage({
    title: "代表メッセージ",
    subtitle: "AIリブートアカデミー",
    eyebrow: "MESSAGE",
    accentColor: "#3B82F6",
  });
}
