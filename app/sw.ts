/// <reference lib="webworker" />

import { defaultCache } from '@serwist/next/worker'
import type { PrecacheEntry } from 'serwist'
import { Serwist } from 'serwist'

export {}

interface PushPayload {
  title?: string
  body?: string
  url?: string
}

declare const self: ServiceWorkerGlobalScope & {
  __SW_MANIFEST: (PrecacheEntry | string)[] | undefined
}

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: defaultCache,
})

serwist.addEventListeners()

self.addEventListener('push', (event: PushEvent) => {
  const data = event.data
  let payload: PushPayload = {}

  if (data) {
    try {
      payload = data.json() as PushPayload
    } catch {
      payload = { body: data.text() }
    }
  }

  const title = payload.title ?? 'AI Reboot'
  const body = payload.body ?? '新着情報をお届けします。'
  const url = typeof payload.url === 'string' ? payload.url : '/'

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      data: { url },
    })
  )
})

self.addEventListener('notificationclick', (event: NotificationEvent) => {
  event.notification.close()
  const targetUrl =
    typeof event.notification.data?.url === 'string' ? event.notification.data.url : '/'

  event.waitUntil(self.clients.openWindow(targetUrl))
})
