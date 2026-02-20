import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/test/"],
      },
    ],
    sitemap: "https://ai-reboot.io/sitemap.xml",
  };
}
