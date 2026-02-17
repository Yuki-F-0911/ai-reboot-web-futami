import { NextResponse } from 'next/server'
import { News } from '@/lib/microcms'
import { getBlogArticles } from '@/lib/microcms-helper'

export async function GET() {
  const { contents: articles } = await getBlogArticles(50, 0)
  
  const baseUrl = 'https://ai-reboot.io'
  const feedUrl = `${baseUrl}/blog/feed.xml`
  const editorialName = 'AIリブート編集部'
  
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
    <webMaster>contact@ai-reboot.io (${editorialName})</webMaster>
    <managingEditor>contact@ai-reboot.io (${editorialName})</managingEditor>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/images/logo.png</url>
      <title>AIリブートジャーナル</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${articles.map((article: News) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description || article.title}]]></description>
      <link>${baseUrl}/blog/${article.id}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.id}</guid>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <author>contact@ai-reboot.io (${editorialName})</author>
      ${article.category ? `<category>${getCategoryLabel(typeof article.category === 'string' ? article.category : article.category[0])}</category>` : ''}
      ${article.thumbnail ? `<enclosure url="${article.thumbnail.url}" type="${getImageMimeType(article.thumbnail.url)}" length="0"/>` : ''}
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

function getImageMimeType(url: string): string {
  const normalized = url.toLowerCase()
  if (normalized.endsWith('.png')) return 'image/png'
  if (normalized.endsWith('.webp')) return 'image/webp'
  if (normalized.endsWith('.gif')) return 'image/gif'
  if (normalized.endsWith('.svg')) return 'image/svg+xml'
  if (normalized.endsWith('.jpg') || normalized.endsWith('.jpeg')) return 'image/jpeg'
  return 'image/*'
}
