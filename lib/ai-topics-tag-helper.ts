import type { AiTopicArticle } from '@/types/ai-topic'

export function hasAnyTag(article: AiTopicArticle, tags: string[]): boolean {
  if (tags.length === 0) return true

  const normalizedTags = new Set(tags.map((tag) => tag.trim().toLowerCase()))
  return article.tags.some((tag) => normalizedTags.has(tag.toLowerCase()))
}

export function hasTopic(article: AiTopicArticle, topic: string): boolean {
  const normalizedTopic = topic.trim().toLowerCase()
  if (!normalizedTopic) return true

  return article.classification.topics.some((item) => item.toLowerCase() === normalizedTopic)
}
