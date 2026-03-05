import { NextRequest, NextResponse } from 'next/server'
import Redis from 'ioredis'
import { getAllAiTopics } from '@/lib/ai-topics'
import { getBlogArticles, getNewsArticles } from '@/lib/microcms-helper'
import { sendPushNotificationToAll } from '@/lib/push/sender'

export const runtime = 'nodejs'

const HOURS_8_DAYS = 8 * 24
const SENT_ARTICLES_SET_KEY = 'push:sent-articles'
const SENT_ARTICLES_TTL_SECONDS = 30 * 24 * 60 * 60

type PushCandidate = {
  source: 'ai-topics' | 'academy-blog' | 'event'
  slug: string
  title: string
  body: string
  url: string
  publishedAt: string
}

let redisClient: Redis | null = null

function getRedisClient(): Redis {
  if (redisClient) return redisClient
  const url = process.env.REDIS_URL
  if (!url) throw new Error('Missing REDIS_URL env var.')
  redisClient = new Redis(url)
  return redisClient
}

function authorizeCronRequest(request: NextRequest): NextResponse | null {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 500 })
  }

  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return null
}

function isRecentlyPublished(publishedAt: string): boolean {
  const publishedTime = new Date(publishedAt).getTime()
  if (Number.isNaN(publishedTime)) {
    return false
  }

  const elapsedMs = Date.now() - publishedTime
  const elapsedHours = elapsedMs / (1000 * 60 * 60)
  return elapsedHours <= HOURS_8_DAYS
}

function hasEventCategory(category: string[] | string): boolean {
  if (Array.isArray(category)) {
    return category.includes('event') || category.includes('イベント')
  }

  return category === 'event' || category === 'イベント'
}

function sortByPublishedAtDesc<T extends { publishedAt?: string; createdAt?: string }>(
  items: T[]
): T[] {
  return [...items].sort((a, b) => {
    const aTime = new Date(a.publishedAt || a.createdAt || 0).getTime()
    const bTime = new Date(b.publishedAt || b.createdAt || 0).getTime()
    return bTime - aTime
  })
}

export async function GET(request: NextRequest) {
  const authErrorResponse = authorizeCronRequest(request)
  if (authErrorResponse) {
    return authErrorResponse
  }

  try {
    const [blogResult, newsResult] = await Promise.all([getBlogArticles(5, 0), getNewsArticles(5, 0)])
    const redis = getRedisClient()
    const candidates: PushCandidate[] = []

    const aiTopics = sortByPublishedAtDesc(getAllAiTopics())
    for (const article of aiTopics) {
      if (!isRecentlyPublished(article.publishedAt)) {
        continue
      }

      candidates.push({
        source: 'ai-topics',
        slug: article.id,
        title: 'AIトピックス更新',
        body: article.title,
        url: `/ai-topics/${article.id}`,
        publishedAt: article.publishedAt,
      })
    }

    const blogArticles = sortByPublishedAtDesc(blogResult.contents)
    for (const article of blogArticles) {
      const publishedAt = article.publishedAt || article.createdAt
      if (!publishedAt || !isRecentlyPublished(publishedAt)) {
        continue
      }

      candidates.push({
        source: 'academy-blog',
        slug: article.id,
        title: '新着記事を公開しました',
        body: article.title,
        url: `/academy/blog/${article.id}`,
        publishedAt,
      })
    }

    const eventArticles = sortByPublishedAtDesc(newsResult.contents).filter((article) =>
      hasEventCategory(article.category)
    )
    for (const article of eventArticles) {
      const publishedAt = article.publishedAt || article.createdAt
      if (!publishedAt || !isRecentlyPublished(publishedAt)) {
        continue
      }

      candidates.push({
        source: 'event',
        slug: article.id,
        title: 'セミナー・イベント情報',
        body: article.title,
        url: `/news/${article.id}`,
        publishedAt,
      })
    }

    if (candidates.length === 0) {
      return NextResponse.json({ ok: true, sent: 0, reason: 'no_recent_articles' })
    }

    for (const candidate of candidates) {
      const alreadySent = await redis.sismember(SENT_ARTICLES_SET_KEY, candidate.slug)
      if (alreadySent === 1) {
        continue
      }

      const result = await sendPushNotificationToAll({
        title: candidate.title,
        body: candidate.body,
        url: candidate.url,
      })

      await redis.sadd(SENT_ARTICLES_SET_KEY, candidate.slug)
      await redis.expire(SENT_ARTICLES_SET_KEY, SENT_ARTICLES_TTL_SECONDS)

      return NextResponse.json({
        ok: true,
        source: candidate.source,
        articleId: candidate.slug,
        publishedAt: candidate.publishedAt,
        ...result,
      })
    }

    return NextResponse.json({ ok: true, sent: 0, reason: 'already_sent' })
  } catch (error) {
    console.error('Failed to run new article push cron:', error)
    return NextResponse.json({ error: 'Failed to run cron job' }, { status: 500 })
  }
}
