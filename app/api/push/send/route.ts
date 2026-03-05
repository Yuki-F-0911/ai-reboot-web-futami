import { NextRequest, NextResponse } from 'next/server'
import { sendPushNotificationToAll } from '@/lib/push/sender'

export const runtime = 'nodejs'

interface SendPayload {
  title: unknown
  body: unknown
  url?: unknown
}

export async function POST(request: NextRequest) {
  const adminSecret = process.env.PUSH_ADMIN_SECRET

  if (!adminSecret) {
    return NextResponse.json({ error: 'PUSH_ADMIN_SECRET is not configured' }, { status: 500 })
  }

  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${adminSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = (await request.json()) as SendPayload

    if (typeof payload.title !== 'string' || typeof payload.body !== 'string') {
      return NextResponse.json({ error: 'title and body are required' }, { status: 400 })
    }

    const result = await sendPushNotificationToAll({
      title: payload.title,
      body: payload.body,
      url: typeof payload.url === 'string' ? payload.url : '/',
    })

    return NextResponse.json({
      ok: true,
      ...result,
    })
  } catch (error) {
    console.error('Failed to send push notifications:', error)
    return NextResponse.json({ error: 'Failed to send push notifications' }, { status: 500 })
  }
}
