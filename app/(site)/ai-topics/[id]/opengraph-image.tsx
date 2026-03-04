import { OG_IMAGE_SIZE, createOgImage } from '@/lib/og-image'
import { getAiTopicById } from '@/lib/ai-topics'

export const contentType = 'image/png'
export const size = OG_IMAGE_SIZE

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = getAiTopicById(id)

  return createOgImage({
    title: article?.title ?? 'AI トピックス',
    subtitle: article?.tags.slice(0, 2).join(' · ') ?? '生成AIニュースまとめ',
    eyebrow: 'AI TOPICS',
    accentColor: '#0EA5E9',
  })
}
