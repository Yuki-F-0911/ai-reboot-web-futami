import type { NextRequest } from 'next/server'
import { createOgImage } from '@/lib/og-image'
import { getAiTopicById } from '@/lib/ai-topics'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = getAiTopicById(id)

  // 画像タイトルは seo.ogTitle（60字以内の短縮版）を優先。ない場合は article.title
  const imageTitle = article?.seo?.ogTitle ?? article?.title ?? 'AI トピックス'

  // subtitle は発行日（例: 2026年3月4日号）
  const dateLabel = article?.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) + '号'
    : '生成AIニュースまとめ'

  return createOgImage({
    title: imageTitle,
    subtitle: dateLabel,
    eyebrow: 'AI TOPICS',
    accentColor: '#0EA5E9',
  })
}
