import Redis from 'ioredis'
import { createHash } from 'crypto'

const SUBSCRIPTION_KEY_PREFIX = 'push:sub:'
const SUBSCRIPTION_TTL_SECONDS = 60 * 24 * 60 * 60

export interface WebPushSubscription {
  endpoint: string
  expirationTime: number | null
  keys: {
    p256dh: string
    auth: string
  }
}

interface StoredSubscription {
  subscription: WebPushSubscription
  createdAt: string
  userAgent: string
}

let redisClient: Redis | null = null

function getRedisClient(): Redis {
  if (redisClient) return redisClient
  const url = process.env.REDIS_URL
  if (!url) throw new Error('Missing REDIS_URL env var.')
  redisClient = new Redis(url)
  return redisClient
}

export function hashEndpoint(endpoint: string): string {
  return createHash('sha256').update(endpoint).digest('hex')
}

export function isWebPushSubscription(value: unknown): value is WebPushSubscription {
  if (!value || typeof value !== 'object') {
    return false
  }

  const candidate = value as Partial<WebPushSubscription>

  if (typeof candidate.endpoint !== 'string' || candidate.endpoint.length === 0) {
    return false
  }

  if (!candidate.keys || typeof candidate.keys !== 'object') {
    return false
  }

  const keys = candidate.keys as Partial<WebPushSubscription['keys']>
  if (typeof keys.p256dh !== 'string' || typeof keys.auth !== 'string') {
    return false
  }

  return keys.p256dh.length > 0 && keys.auth.length > 0
}

function keyFromEndpoint(endpoint: string): string {
  return `${SUBSCRIPTION_KEY_PREFIX}${hashEndpoint(endpoint)}`
}

export async function saveSubscription(subscription: WebPushSubscription, userAgent = ''): Promise<void> {
  const redis = getRedisClient()
  const normalizedSubscription: WebPushSubscription = {
    ...subscription,
    expirationTime: subscription.expirationTime ?? null,
  }
  const key = keyFromEndpoint(normalizedSubscription.endpoint)
  const value: StoredSubscription = {
    subscription: normalizedSubscription,
    createdAt: new Date().toISOString(),
    userAgent,
  }

  await redis.set(key, JSON.stringify(value), 'EX', SUBSCRIPTION_TTL_SECONDS)
}

export async function removeSubscription(endpoint: string): Promise<void> {
  const redis = getRedisClient()
  await redis.del(keyFromEndpoint(endpoint))
}

export async function getAllSubscriptions(): Promise<WebPushSubscription[]> {
  const redis = getRedisClient()
  const keys = await redis.keys(`${SUBSCRIPTION_KEY_PREFIX}*`)

  if (keys.length === 0) {
    return []
  }

  const storedValues = await Promise.all(
    keys.map(async (key) => {
      const raw = await redis.get(key)
      if (!raw) {
        return null
      }

      try {
        return JSON.parse(raw) as StoredSubscription
      } catch {
        return null
      }
    })
  )

  return storedValues.flatMap((stored) => {
    if (stored?.subscription && isWebPushSubscription(stored.subscription)) {
      return [stored.subscription]
    }
    return []
  })
}
