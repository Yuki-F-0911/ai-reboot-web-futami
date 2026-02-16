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
  "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36";

const pickSupportedFontUrl = (css: string): string | null => {
  const matches = Array.from(
    css.matchAll(/url\(([^)]+)\)\s+format\('([^']+)'\)/g)
  );

  if (matches.length === 0) {
    return null;
  }

  const priority = ["woff", "opentype", "truetype"];

  for (const format of priority) {
    const candidate = matches.find(
      (match) => match[2]?.toLowerCase() === format
    );

    if (candidate?.[1]) {
      return candidate[1].replace(/["']/g, "");
    }
  }

  return null;
};

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
    const fontUrl = pickSupportedFontUrl(css);

    if (!fontUrl) {
      return null;
    }

    const fontResponse = await fetch(fontUrl, { cache: "force-cache" });

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
  const logoUrl = new URL(
    "/lp/seminar0828/logo_horizon_lightbg.png",
    resolveSiteOrigin()
  ).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(180deg, #fffdf8 0%, #f7f7fa 100%)",
          color: "#1A1A23",
          fontFamily: "Noto Sans JP, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 18,
            height: "100%",
            background: `linear-gradient(180deg, ${accentColor}2B 0%, ${accentColor}14 100%)`,
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
              width={280}
              height={93}
              style={{ objectFit: "contain" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 14px",
                borderRadius: "9999px",
                border: `1px solid ${accentColor}55`,
                background: `${accentColor}0F`,
                color: accentColor,
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.09em",
              }}
            >
              {eyebrow}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              marginTop: 24,
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 82,
                lineHeight: 1.16,
                letterSpacing: "-0.03em",
                fontWeight: 700,
                color: "#1A1A23",
                maxWidth: "95%",
              }}
            >
              {title}
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 4,
                  borderRadius: "9999px",
                  background: accentColor,
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontSize: 32,
                  lineHeight: 1.32,
                  fontWeight: 700,
                  color: "#42425A",
                }}
              >
                {subtitle}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(26, 26, 35, 0.12)",
              paddingTop: 24,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 22,
                color: "#6B6B85",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              AI REBOOT
            </p>
            <div
              style={{
                width: 168,
                height: 4,
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
