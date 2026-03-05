import webpush from 'web-push'
import {
  getAllSubscriptions,
  removeSubscription,
  type WebPushSubscription,
} from '@/lib/push/subscription'

export interface PushSendPayload {
  title: string
  body: string
  url?: string
}

export interface PushSendResult {
  total: number
  sent: number
  failed: number
  removed: number
}

let configured = false

function ensureWebPushConfigured(): void {
  if (configured) {
    return
  }

  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  const privateKey = process.env.VAPID_PRIVATE_KEY
  const subject = process.env.VAPID_SUBJECT

  if (!publicKey || !privateKey || !subject) {
    throw new Error(
      'Missing VAPID env vars. Set NEXT_PUBLIC_VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT.'
    )
  }

  webpush.setVapidDetails(subject, publicKey, privateKey)
  configured = true
}

function isGoneError(error: unknown): boolean {
  if (!error || typeof error !== 'object') {
    return false
  }

  const maybeStatusCode = (error as { statusCode?: unknown }).statusCode
  return maybeStatusCode === 404 || maybeStatusCode === 410
}

export async function sendPushNotificationToAll(payload: PushSendPayload): Promise<PushSendResult> {
  ensureWebPushConfigured()

  const subscriptions = await getAllSubscriptions()

  if (subscriptions.length === 0) {
    return {
      total: 0,
      sent: 0,
      failed: 0,
      removed: 0,
    }
  }

  const message = JSON.stringify({
    title: payload.title,
    body: payload.body,
    url: payload.url ?? '/',
  })

  const results = await Promise.allSettled(
    subscriptions.map((subscription) =>
      webpush.sendNotification(subscription as unknown as webpush.PushSubscription, message)
    )
  )

  let sent = 0
  let failed = 0
  let removed = 0

  for (let index = 0; index < results.length; index += 1) {
    const result = results[index]
    const subscription = subscriptions[index] as WebPushSubscription

    if (result.status === 'fulfilled') {
      sent += 1
      continue
    }

    failed += 1

    if (subscription && isGoneError(result.reason)) {
      await removeSubscription(subscription.endpoint)
      removed += 1
    }
  }

  return {
    total: subscriptions.length,
    sent,
    failed,
    removed,
  }
}
