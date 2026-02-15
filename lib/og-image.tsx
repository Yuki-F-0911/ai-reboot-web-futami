import { ImageResponse } from "next/og";
import { cache } from "react";
/* eslint-disable @next/next/no-img-element */

type OgImageOptions = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  accentColor?: string;
};

export const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
} as const;

const FALLBACK_SITE_ORIGIN = "https://ai-reboot.io";
const GOOGLE_FONT_CSS_URL =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap";
const GOOGLE_FONT_USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

const resolveSiteOrigin = () => {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return FALLBACK_SITE_ORIGIN;
  }

  try {
    return new URL(process.env.NEXT_PUBLIC_BASE_URL).origin;
  } catch {
    return FALLBACK_SITE_ORIGIN;
  }
};

const loadNotoSansJp = cache(async (): Promise<ArrayBuffer | null> => {
  try {
    const cssResponse = await fetch(GOOGLE_FONT_CSS_URL, {
      headers: { "User-Agent": GOOGLE_FONT_USER_AGENT },
      cache: "force-cache",
    });

    if (!cssResponse.ok) {
      return null;
    }

    const css = await cssResponse.text();
    const match = css.match(
      /src: url\(([^)]+)\) format\('(?:woff2|woff|opentype|truetype)'\)/
    );

    if (!match?.[1]) {
      return null;
    }

    const fontResponse = await fetch(match[1], { cache: "force-cache" });

    if (!fontResponse.ok) {
      return null;
    }

    return fontResponse.arrayBuffer();
  } catch {
    return null;
  }
});

export async function createOgImage({
  title,
  subtitle = "AI REBOOT",
  eyebrow = "AI REBOOT",
  accentColor = "#FF4B8B",
}: OgImageOptions) {
  const fontData = await loadNotoSansJp();
  const logoUrl = new URL("/images/logo-katakana.svg", resolveSiteOrigin()).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #0f0f14 0%, #1a1a23 55%, #2d2d3f 100%)",
          color: "#f7f7fa",
          fontFamily: "Noto Sans JP, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 380,
            height: 380,
            borderRadius: "9999px",
            background: `${accentColor}33`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: "9999px",
            background: "rgba(59, 130, 246, 0.18)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px 64px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <img
              src={logoUrl}
              alt="AI REBOOT"
              width={300}
              height={34}
              style={{ objectFit: "contain" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: "9999px",
                border: `1px solid ${accentColor}`,
                background: "rgba(0, 0, 0, 0.22)",
                color: "#f0f4f8",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "0.08em",
              }}
            >
              {eyebrow}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <h1
              style={{
                margin: 0,
                fontSize: 76,
                lineHeight: 1.22,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "#ffffff",
                maxWidth: "94%",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: 33,
                lineHeight: 1.35,
                fontWeight: 700,
                color: accentColor,
              }}
            >
              {subtitle}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 26,
                color: "#dbeafe",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              AI REBOOT
            </p>
            <div
              style={{
                width: 180,
                height: 6,
                borderRadius: "9999px",
                background: accentColor,
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
      fonts: fontData
        ? [
            {
              name: "Noto Sans JP",
              data: fontData,
              weight: 700,
              style: "normal",
            },
          ]
        : [],
    }
  );
}
