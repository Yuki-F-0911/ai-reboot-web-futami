import { OG_IMAGE_SIZE, createOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const contentType = "image/png";
export const size = OG_IMAGE_SIZE;

export default async function Image() {
  return createOgImage({
    title: "リスキリング補助金ガイド",
    subtitle: "最大70%OFF / 実質120,000円〜",
    eyebrow: "SUBSIDY GUIDE",
    accentColor: "#EA580C",
  });
}
