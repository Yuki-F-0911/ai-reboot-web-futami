import { NextResponse } from 'next/server'
import { getNewsList } from '@/lib/microcms'

export async function GET() {
  const { contents: articles } = await getNewsList(50, 0)
  
  const baseUrl = 'https://ai-reboot.com'
  const feedUrl = `${baseUrl}/blog/feed.xml`
  
  // RSS 2.0 フィードの生成
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AIリブートジャーナル</title>
    <description>AI活用の実践的なノウハウ、成功事例、最新トレンドをお届けする、AIリブートのオウンドメディア</description>
    <link>${baseUrl}/blog</link>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <generator>AI REBOOT</generator>
    <copyright>© 2025 WILL FORWARD Inc. All rights reserved.</copyright>
    <webMaster>contact@ai-reboot.com (AI REBOOT編集部)</webMaster>
    <managingEditor>contact@ai-reboot.com (AI REBOOT編集部)</managingEditor>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>AIリブートジャーナル</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${articles.map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description || article.title}]]></description>
      <link>${baseUrl}/blog/${article.id}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.id}</guid>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <author>contact@ai-reboot.com (AI REBOOT編集部)</author>
      ${article.category ? `<category>${getCategoryLabel(article.category)}</category>` : ''}
      ${article.thumbnail ? `<enclosure url="${article.thumbnail.url}" type="image/jpeg" length="0"/>` : ''}
      ${article.tags ? article.tags.map(tag => `<category>${tag}</category>`).join('') : ''}
      <content:encoded><![CDATA[
        ${article.thumbnail ? `<img src="${article.thumbnail.url}" alt="${article.title}" /><br/>` : ''}
        ${article.description ? `<p>${article.description}</p>` : ''}
        <p><a href="${baseUrl}/blog/${article.id}">続きを読む →</a></p>
      ]]></content:encoded>
    </item>`).join('')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'ai-trends': 'AIトレンド',
    'case-study': '活用事例',
    'tutorial': 'チュートリアル',
    'prompts': 'プロンプト',
    'tools': 'ツール',
    'featured': '注目',
    'news': 'ニュース',
    'event': 'イベント',
  }
  return labels[category] || category
}