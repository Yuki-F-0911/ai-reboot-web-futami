import { OG_IMAGE_SIZE, createOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const contentType = "image/png";
export const size = OG_IMAGE_SIZE;

export default async function Image() {
  return createOgImage({
    title: "AI REBOOT",
    subtitle: "あなたの物語を、AIは待っている",
    eyebrow: "TOP",
    accentColor: "#FF4B8B",
  });
}
