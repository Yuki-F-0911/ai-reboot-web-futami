import { MetadataRoute } from "next";
import { News } from "@/lib/microcms";
import { getAllBlogArticles, getAllNewsArticles } from "@/lib/microcms-helper";
import { glossaryTerms } from "@/data/glossary";
import { getAllAiTopics } from "@/lib/ai-topics";
import type { Dirent } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const baseUrl = "https://ai-reboot.io";

export const runtime = "nodejs";

async function getRouteLastModifiedFromPageConst(pagePath: string, constName: string): Promise<Date | null> {
  let source: string;
  try {
    source = await readFile(pagePath, "utf8");
  } catch {
    return null;
  }

  const match = source.match(new RegExp(`const\\s+${constName}\\s*=\\s*["']([^"']+)["']`));
  if (!match?.[1]) return null;

  const parsed = new Date(match[1]);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed;
}

async function getAppRouteSlugs(routeDirFromAppRoot: string): Promise<string[]> {
  const absoluteRouteDir = path.join(process.cwd(), "app", routeDirFromAppRoot);

  let dirents: Dirent[];
  try {
    dirents = await readdir(absoluteRouteDir, { withFileTypes: true });
  } catch {
    return [];
  }

  const candidates = dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => !/^\\[.*\\]$/.test(name))
    .filter((name) => !/^\\(.*\\)$/.test(name))
    .filter((name) => !name.startsWith("_"))
    .filter((name) => !["temp", "debug"].includes(name))
    .sort((a, b) => a.localeCompare(b));

  const slugs: string[] = [];
  for (const slug of candidates) {
    try {
      const pagePath = path.join(absoluteRouteDir, slug, "page.tsx");
      const s = await stat(pagePath);
      if (s.isFile()) slugs.push(slug);
    } catch {
      // ignore
    }
  }

  return slugs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/academy`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${baseUrl}/academy/subsidy-guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/academy/ai-course-comparison`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/academy/reviews`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/academy/subsidy-eligible-courses`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academy/ai-training-for-individuals`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academy/reskilling-course-recommendation`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academy/meti-reskilling-comparison`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academy/message`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/academy/seminars`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    { url: `${baseUrl}/academy/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/corporate`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/company`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/program`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/voices`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/briefing`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/news`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/rebooters`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/webtoon`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${baseUrl}/seminars/career-design`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seminars/career-design-ad`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const academyBlogSlugs = await getAppRouteSlugs("(site)/academy/blog");
  const academyBlogPages: MetadataRoute.Sitemap = await Promise.all(
    academyBlogSlugs.map(async (slug) => {
      const pagePath = path.join(process.cwd(), "app", "(site)", "academy", "blog", slug, "page.tsx");
      const [modifiedTime, fileStats] = await Promise.all([
        getRouteLastModifiedFromPageConst(pagePath, "modifiedTime"),
        stat(pagePath).catch(() => null),
      ]);

      return {
        url: `${baseUrl}/academy/blog/${slug}`,
        lastModified: modifiedTime ?? fileStats?.mtime ?? now,
        changeFrequency: "monthly",
        priority: 0.7,
      };
    })
  );

  const [newsArticles, blogArticles] = await Promise.all([getAllNewsArticles(), getAllBlogArticles()]);

  const newsPages = newsArticles.map((article: News) => ({
    url: `${baseUrl}/news/${article.id}`,
    lastModified: new Date(article.revisedAt || article.updatedAt || article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = blogArticles.map((article: News) => ({
    url: `${baseUrl}/blog/${article.id}`,
    lastModified: new Date(article.revisedAt || article.updatedAt || article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const glossaryIndexPage: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/glossary`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const glossaryDetailPages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
    url: `${baseUrl}/glossary/${term.slug}`,
    lastModified: new Date(term.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const aiTopics = getAllAiTopics();
  const aiTopicsIndexPage: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/ai-topics`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
  ];
  const aiTopicsDetailPages: MetadataRoute.Sitemap = aiTopics.map((article) => ({
    url: `${baseUrl}/ai-topics/${article.id}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...aiTopicsIndexPage,
    ...aiTopicsDetailPages,
    ...glossaryIndexPage,
    ...glossaryDetailPages,
    ...academyBlogPages,
    ...newsPages,
    ...blogPages,
  ];
}
