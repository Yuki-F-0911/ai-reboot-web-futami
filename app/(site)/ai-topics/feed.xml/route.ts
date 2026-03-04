import { NextResponse } from 'next/server'
import { getAiTopicsFeedItems } from '@/lib/ai-topics'

const baseUrl = 'https://ai-reboot.io'

export const revalidate = 3600

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const items = getAiTopicsFeedItems(50)
  const feedUrl = `${baseUrl}/ai-topics/feed.xml`

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Topics | AI REBOOT</title>
    <description>生成AIトピックの週次・月次まとめ</description>
    <link>${baseUrl}/ai-topics</link>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <generator>AI REBOOT</generator>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.summary)}</description>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <pubDate>${new Date(item.publishedAt).toUTCString()}</pubDate>
      ${item.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('')}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
