import { MetadataRoute } from 'next'
import { getNewsList, News } from '@/lib/microcms'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ai-reboot.com'
  
  // 静的ページ
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/academy`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/corporate`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  // ニュース記事を取得
  const result = await getNewsList(1000, 0)
  
  // リスト形式のレスポンスかチェック
  if (!('contents' in result)) {
    // エラーの場合は静的ページのみ返す
    return staticPages
  }
  
  const { contents: newsArticles } = result
  
  // ニュース記事のURL
  const newsPages = newsArticles.map((article: News) => ({
    url: `${baseUrl}/news/${article.id}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // ブログ記事のURL（ニュースと同じAPIを使用）
  const blogPages = newsArticles.map((article: News) => ({
    url: `${baseUrl}/blog/${article.id}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...newsPages, ...blogPages]
}