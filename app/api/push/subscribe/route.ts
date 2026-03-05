import { NextRequest, NextResponse } from 'next/server'
import {
  isWebPushSubscription,
  removeSubscription,
  saveSubscription,
} from '@/lib/push/subscription'

export const runtime = 'nodejs'

const STATIC_ALLOWED_ORIGINS = ['https://ai-reboot.io', 'http://localhost:3000']

function getAllowedOrigins(): Set<string> {
  const allowedOrigins = new Set(STATIC_ALLOWED_ORIGINS)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  if (baseUrl) {
    try {
      allowedOrigins.add(new URL(baseUrl).origin)
    } catch {
      // Ignore invalid NEXT_PUBLIC_BASE_URL values.
    }
  }

  return allowedOrigins
}

function hasAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin') ?? ''
  return getAllowedOrigins().has(origin)
}

function extractSubscription(payload: unknown): unknown {
  if (!payload || typeof payload !== 'object') {
    return payload
  }

  const candidate = payload as { subscription?: unknown }
  return candidate.subscription ?? payload
}

export async function POST(request: NextRequest) {
  if (!hasAllowedOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const payload = await request.json()
    const subscription = extractSubscription(payload)

    if (!isWebPushSubscription(subscription)) {
      return NextResponse.json({ error: 'Invalid subscription payload' }, { status: 400 })
    }

    await saveSubscription(subscription, request.headers.get('user-agent') ?? '')
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to save push subscription:', error)
    return NextResponse.json({ error: 'Failed to save subscription' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  if (!hasAllowedOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const payload = (await request.json()) as { endpoint?: unknown }
    const endpoint = payload.endpoint

    if (typeof endpoint !== 'string' || endpoint.length === 0) {
      return NextResponse.json({ error: 'Endpoint is required' }, { status: 400 })
    }

    await removeSubscription(endpoint)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to remove push subscription:', error)
    return NextResponse.json({ error: 'Failed to remove subscription' }, { status: 500 })
  }
}
