import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/debug", "/blog/debug", "/blog/temp", "/news/temp", "/auth/"],
      },
    ],
    host: "https://ai-reboot.io",
    sitemap: "https://ai-reboot.io/sitemap.xml",
  };
}
