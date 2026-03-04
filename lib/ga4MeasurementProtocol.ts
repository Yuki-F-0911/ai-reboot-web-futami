const GA4_MEASUREMENT_PROTOCOL_ENDPOINT =
  'https://www.google-analytics.com/mp/collect'

interface LineFriendAddCompleteEventInput {
  isUnblocked: boolean
  eventTimestamp?: number
  webhookEventId?: string
}

type GA4EventParams = Record<string, string | number>

function resolveMeasurementId(): string {
  return process.env.GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
}

function buildClientId(eventTimestamp?: number): string {
  const timestamp = Number.isFinite(eventTimestamp) ? Number(eventTimestamp) : Date.now()
  const randomSuffix = Math.floor(Math.random() * 1_000_000_000)
  return `${timestamp}.${randomSuffix}`
}

function buildTimestampMicros(eventTimestamp?: number): number {
  const timestamp = Number.isFinite(eventTimestamp) ? Number(eventTimestamp) : Date.now()
  return Math.floor(timestamp * 1000)
}

export async function sendGA4Event(
  eventName: string,
  clientId: string,
  params: Record<string, string | number>
): Promise<void> {
  const measurementId = resolveMeasurementId()
  const apiSecret = process.env.GA_API_SECRET || ''

  if (!measurementId || !apiSecret) {
    throw new Error(
      'GA4 Measurement Protocol env is missing: GA_MEASUREMENT_ID (or NEXT_PUBLIC_GA_MEASUREMENT_ID) and GA_API_SECRET are required.'
    )
  }

  const payload = {
    client_id: clientId,
    events: [
      {
        name: eventName,
        params: { engagement_time_msec: 1, ...params },
      },
    ],
  }

  const endpoint = `${GA4_MEASUREMENT_PROTOCOL_ENDPOINT}?measurement_id=${encodeURIComponent(
    measurementId
  )}&api_secret=${encodeURIComponent(apiSecret)}`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(
      `Failed to send GA4 Measurement Protocol event: ${response.status} ${response.statusText} ${errorText}`
    )
  }
}

export async function sendLineFriendAddCompleteEvent(
  input: LineFriendAddCompleteEventInput
): Promise<void> {
  const measurementId = resolveMeasurementId()
  const apiSecret = process.env.GA_API_SECRET || ''

  if (!measurementId || !apiSecret) {
    throw new Error(
      'GA4 Measurement Protocol env is missing: GA_MEASUREMENT_ID (or NEXT_PUBLIC_GA_MEASUREMENT_ID) and GA_API_SECRET are required.'
    )
  }

  const eventParams: GA4EventParams = {
    completion_method: 'webhook_follow',
    is_unblocked: input.isUnblocked ? 1 : 0,
    oa_channel: process.env.LINE_OA_CHANNEL || 'main',
    engagement_time_msec: 1,
  }

  if (input.webhookEventId) {
    eventParams.event_id = input.webhookEventId
  }

  const payload = {
    client_id: buildClientId(input.eventTimestamp),
    timestamp_micros: buildTimestampMicros(input.eventTimestamp),
    events: [
      {
        name: 'line_friend_add_complete',
        params: eventParams,
      },
    ],
  }

  const endpoint = `${GA4_MEASUREMENT_PROTOCOL_ENDPOINT}?measurement_id=${encodeURIComponent(
    measurementId
  )}&api_secret=${encodeURIComponent(apiSecret)}`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(
      `Failed to send GA4 Measurement Protocol event: ${response.status} ${response.statusText} ${errorText}`
    )
  }
}
