import { OG_IMAGE_SIZE, createOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const contentType = "image/png";
export const size = OG_IMAGE_SIZE;

export default async function Image() {
  return createOgImage({
    title: "AI講座の選び方ガイド",
    subtitle: "7つの比較ポイント",
    eyebrow: "COURSE GUIDE",
    accentColor: "#EA580C",
  });
}
