import { NextRequest, NextResponse } from 'next/server'

import { sendGA4Event } from '@/lib/ga4MeasurementProtocol'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  // トークン検証（PROLINE_SIGNAL_SECRET が設定されている場合のみ）
  const expectedSecret = process.env.PROLINE_SIGNAL_SECRET
  if (expectedSecret) {
    const secret = searchParams.get('secret')
    if (secret !== expectedSecret) {
      console.warn('[ProLINE signal] Unauthorized: invalid secret')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const event = searchParams.get('event')
  const uid = searchParams.get('uid')

  if (!event || !uid) {
    return NextResponse.json({ error: 'Missing required params: event, uid' }, { status: 400 })
  }

  try {
    await sendGA4Event(event, uid, { uid, source: 'proline_signal' })
    console.info('[ProLINE signal] GA4 event sent', { event, uid })
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error('[ProLINE signal] Failed to send GA4 event', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
