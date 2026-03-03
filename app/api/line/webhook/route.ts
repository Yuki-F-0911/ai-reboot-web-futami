import { createHmac, timingSafeEqual } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

import { sendLineFriendAddCompleteEvent } from '@/lib/ga4MeasurementProtocol'

export const runtime = 'nodejs'

interface LineWebhookPayload {
  destination?: string
  events?: LineWebhookEvent[]
}

interface LineWebhookEvent {
  type: string
  timestamp?: number
  webhookEventId?: string
  deliveryContext?: {
    isRedelivery?: boolean
  }
  follow?: {
    isUnblocked?: boolean
  }
}

function verifyLineSignature(rawBody: string, signature: string, channelSecret: string): boolean {
  const expectedSignature = createHmac('sha256', channelSecret)
    .update(rawBody, 'utf8')
    .digest('base64')

  const expectedBuffer = Buffer.from(expectedSignature)
  const signatureBuffer = Buffer.from(signature)

  if (expectedBuffer.length !== signatureBuffer.length) {
    return false
  }

  return timingSafeEqual(expectedBuffer, signatureBuffer)
}

function unauthorizedResponse() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}

function normalizeUrlForComparison(url: string): string | null {
  try {
    const parsed = new URL(url)
    parsed.hash = ''
    parsed.search = ''
    parsed.pathname = parsed.pathname.replace(/\/+$/, '') || '/'
    return `${parsed.origin}${parsed.pathname}`
  } catch {
    return null
  }
}

/** ループ防止: 転送先がこのWebhook URLと同一なら転送しない */
function isSameWebhookUrl(webhookUrl: string, forwardUrl: string): boolean {
  const normalizedWebhookUrl = normalizeUrlForComparison(webhookUrl)
  const normalizedForwardUrl = normalizeUrlForComparison(forwardUrl)

  if (!normalizedWebhookUrl || !normalizedForwardUrl) {
    return false
  }

  return normalizedWebhookUrl === normalizedForwardUrl
}

/**
 * autosns 等の既存 Webhook エンドポイントへ同一 payload を転送する。
 * 転送失敗時はエラーログを残すが例外を投げず、LINE への 200 応答を妨げない。
 */
async function forwardPayload(
  rawBody: string,
  forwardUrl: string,
  webhookUrl: string
): Promise<void> {
  if (isSameWebhookUrl(webhookUrl, forwardUrl)) {
    console.error('[LINE webhook] Forward URL is same as this endpoint, skipping', {
      webhookUrl,
      forwardUrl,
    })
    return
  }

  try {
    const response = await fetch(forwardUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: rawBody,
    })
    if (!response.ok) {
      const body = await response.text()
      console.error('[LINE webhook] Forward failed', {
        status: response.status,
        body,
        forwardUrl,
      })
    } else {
      console.info('[LINE webhook] Forwarded payload', { status: response.status, forwardUrl })
    }
  } catch (err) {
    console.error('[LINE webhook] Forward threw error', { err, forwardUrl })
  }
}

export async function POST(request: NextRequest) {
  try {
    const channelSecret = process.env.LINE_CHANNEL_SECRET
    if (!channelSecret) {
      console.error('[LINE webhook] LINE_CHANNEL_SECRET is not configured')
      return NextResponse.json(
        { error: 'LINE webhook is not configured' },
        { status: 500 }
      )
    }

    const signature = request.headers.get('x-line-signature')
    if (!signature) {
      console.warn('[LINE webhook] Missing x-line-signature header')
      return unauthorizedResponse()
    }

    const rawBody = await request.text()
    if (!verifyLineSignature(rawBody, signature, channelSecret)) {
      console.warn('[LINE webhook] Signature verification failed')
      return unauthorizedResponse()
    }

    let payload: LineWebhookPayload
    try {
      payload = JSON.parse(rawBody) as LineWebhookPayload
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    if (!Array.isArray(payload.events)) {
      return NextResponse.json({ error: 'Invalid webhook payload' }, { status: 400 })
    }

    // イベント処理
    for (const event of payload.events) {
      if (event.type === 'follow') {
        const isUnblocked = Boolean(event.follow?.isUnblocked)
        await sendLineFriendAddCompleteEvent({
          isUnblocked,
          eventTimestamp: event.timestamp,
          webhookEventId: event.webhookEventId,
        })
        console.info('[LINE webhook] Follow event processed', {
          webhookEventId: event.webhookEventId,
          is_unblocked: isUnblocked,
          isRedelivery: Boolean(event.deliveryContext?.isRedelivery),
        })
        continue
      }

      if (event.type === 'unfollow') {
        console.info('[LINE webhook] Unfollow event received', {
          webhookEventId: event.webhookEventId,
          isRedelivery: Boolean(event.deliveryContext?.isRedelivery),
        })
        continue
      }

      console.info('[LINE webhook] Ignored event type', {
        type: event.type,
        webhookEventId: event.webhookEventId,
      })
    }

    // autosns 等への転送（LINE_WEBHOOK_FORWARD_URL が設定されている場合のみ）
    // 転送完了を待ってから 200 を返す（サーバーレス環境での早期終了を防ぐ）
    // forwardPayload 内部で全エラーをキャッチするため、ここでは例外が伝播しない
    const forwardUrl = process.env.LINE_WEBHOOK_FORWARD_URL?.trim()
    if (forwardUrl) {
      await forwardPayload(rawBody, forwardUrl, request.url)
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error('[LINE webhook] Unexpected error', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
