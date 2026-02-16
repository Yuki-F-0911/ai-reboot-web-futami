import { MetadataRoute } from "next";
import { News } from "@/lib/microcms";
import { getBlogArticles, getNewsArticles } from "@/lib/microcms-helper";

const baseUrl = "https://ai-reboot.io";

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
    {
      url: `${baseUrl}/academy/blog/what-is-generative-ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/academy/blog/how-to-learn-generative-ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/academy/blog/corporate-ai-training`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/academy/blog/corporate-ai-adoption-guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/academy/blog/ai-career-change-cases`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/academy/blog/skills-for-ai-era-career`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/academy/blog/ai-certification-guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/academy/blog/prompt-template-for-work`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
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

  const [newsResult, blogResult] = await Promise.all([
    getNewsArticles(1000, 0),
    getBlogArticles(1000, 0),
  ]);

  const newsPages = newsResult.contents.map((article: News) => ({
    url: `${baseUrl}/news/${article.id}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = blogResult.contents.map((article: News) => ({
    url: `${baseUrl}/blog/${article.id}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...newsPages, ...blogPages];
}
