import { aiTopicsArticles } from '@/data/ai-topics'
import { assertAiTopicMarkdownIsSafe } from '@/lib/ai-topics-markdown'
import { hasAnyTag, hasTopic } from '@/lib/ai-topics-tag-helper'
import type { AiTopicArticle } from '@/types/ai-topic'

const BASE_URL = 'https://ai-reboot.io'

export type GetAiTopicsOptions = {
  limit?: number
  offset?: number
  tags?: string[]
  topic?: string
}

export type AiTopicFeedItem = {
  id: string
  title: string
  summary: string
  link: string
  publishedAt: string
  updatedAt: string
  tags: string[]
}

function getPublishableAiTopics(): AiTopicArticle[] {
  return aiTopicsArticles.filter((article) => !article.meta?.draft)
}

function ensureAiTopicsMarkdownSafety(articles: AiTopicArticle[]): void {
  for (const article of articles) {
    if (article.contentFormat === 'markdown') {
      assertAiTopicMarkdownIsSafe(article.content)
    }
  }
}

export function getAllAiTopics(): AiTopicArticle[] {
  const articles = getPublishableAiTopics()
  ensureAiTopicsMarkdownSafety(articles)
  return articles
}

export function getAiTopics(options: GetAiTopicsOptions = {}): AiTopicArticle[] {
  const { limit = 10, offset = 0, tags = [], topic } = options

  const filtered = getAllAiTopics().filter((article) => {
    if (tags.length > 0 && !hasAnyTag(article, tags)) return false
    if (topic && !hasTopic(article, topic)) return false
    return true
  })

  return filtered.slice(offset, offset + limit)
}

export function getAiTopicById(id: string): AiTopicArticle | undefined {
  return getAllAiTopics().find((article) => article.id === id)
}

export function getRelatedAiTopics(article: AiTopicArticle, limit = 4): AiTopicArticle[] {
  const baseTopics = new Set(article.classification.topics.map((topic) => topic.toLowerCase()))

  return getAllAiTopics()
    .filter((candidate) => candidate.id !== article.id)
    .map((candidate) => {
      const overlapScore = candidate.classification.topics.reduce((score, topic) => {
        return baseTopics.has(topic.toLowerCase()) ? score + 1 : score
      }, 0)

      return {
        candidate,
        overlapScore,
      }
    })
    .sort((a, b) => {
      if (b.overlapScore !== a.overlapScore) return b.overlapScore - a.overlapScore

      return (
        new Date(b.candidate.publishedAt).getTime() - new Date(a.candidate.publishedAt).getTime()
      )
    })
    .slice(0, limit)
    .map((item) => item.candidate)
}

export function getAiTopicsFeedItems(limit = 50): AiTopicFeedItem[] {
  const normalizedLimit = Number.isFinite(limit) ? Math.trunc(limit) : 50
  const safeLimit = Math.min(Math.max(normalizedLimit, 0), 50)

  return [...getAllAiTopics()]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, safeLimit)
    .map((article) => ({
      id: article.id,
      title: article.title,
      summary: article.summary,
      link: `${BASE_URL}/ai-topics/${article.id}`,
      publishedAt: article.publishedAt,
      updatedAt: article.updatedAt,
      tags: article.tags,
    }))
}
