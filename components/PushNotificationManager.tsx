'use client'

import { useEffect, useState } from 'react'

const PAGE_COUNT_KEY = 'push:pageCount'
const PROMPT_SUPPRESS_UNTIL_KEY = 'push:promptSuppressUntil'
const RETRY_PANEL_SUPPRESS_UNTIL_KEY = 'push:retryPanelSuppressUntil'
const RETRY_PENDING_KEY = 'push:retryPending'
const DENIED_KEY = 'push:denied'
const REJECT_SUPPRESS_DAYS = 30
const RETRY_PANEL_SUPPRESS_DAYS = 1
const STATUS_MESSAGE_DURATION_MS = 4000
const RETRY_PANEL_AUTO_HIDE_MS = 10000

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let index = 0; index < rawData.length; index += 1) {
    outputArray[index] = rawData.charCodeAt(index)
  }

  return outputArray
}

function isIosDevice(): boolean {
  return /iPhone|iPad|iPod/i.test(window.navigator.userAgent)
}

function isStandaloneMode(): boolean {
  const navigatorWithStandalone = window.navigator as Navigator & { standalone?: boolean }
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    navigatorWithStandalone.standalone === true
  )
}

function getSuppressUntil(storageKey: string): number {
  const stored = window.localStorage.getItem(storageKey)
  if (!stored) {
    return 0
  }

  const timestamp = Number(stored)
  return Number.isFinite(timestamp) ? timestamp : 0
}

function suppressPrompt(storageKey: string, days: number): void {
  const now = Date.now()
  const suppressedUntil = now + days * 24 * 60 * 60 * 1000
  window.localStorage.setItem(storageKey, String(suppressedUntil))
}

async function hasCurrentSubscription(): Promise<boolean> {
  const registration = await navigator.serviceWorker.ready
  const subscription = await registration.pushManager.getSubscription()
  return Boolean(subscription)
}

export default function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [permission, setPermission] = useState<NotificationPermission>('default')
  const [pageCount, setPageCount] = useState(0)
  const [scrolledEnough, setScrolledEnough] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [isSubscriptionChecked, setIsSubscriptionChecked] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [canShowRetryPanel, setCanShowRetryPanel] = useState(false)
  const [retryDismissed, setRetryDismissed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const supported =
      'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window
    setIsSupported(supported)

    if (!supported) {
      return
    }

    setPermission(Notification.permission)

    const currentPageCount = Number(window.sessionStorage.getItem(PAGE_COUNT_KEY) || '0')
    const nextPageCount = (Number.isFinite(currentPageCount) ? currentPageCount : 0) + 1
    window.sessionStorage.setItem(PAGE_COUNT_KEY, String(nextPageCount))
    setPageCount(nextPageCount)

    hasCurrentSubscription()
      .then((result) => {
        setSubscribed(result)

        if (result) {
          window.localStorage.removeItem(RETRY_PENDING_KEY)
          window.localStorage.removeItem(RETRY_PANEL_SUPPRESS_UNTIL_KEY)
          setCanShowRetryPanel(false)
          return
        }

        const shouldShowRetryPanel =
          Notification.permission === 'granted' &&
          window.localStorage.getItem(RETRY_PENDING_KEY) === '1' &&
          Date.now() >= getSuppressUntil(RETRY_PANEL_SUPPRESS_UNTIL_KEY)

        setCanShowRetryPanel(shouldShowRetryPanel)
      })
      .catch((error) => {
        console.error('Failed to check current push subscription:', error)
      })
      .finally(() => {
        setIsSubscriptionChecked(true)
      })

    const onScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      if (ratio >= 0.75) {
        setScrolledEnough(true)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!isSupported || subscribed) {
      setIsVisible(false)
      return
    }

    if (permission !== 'default') {
      setIsVisible(false)
      return
    }

    if (!scrolledEnough || pageCount < 2) {
      setIsVisible(false)
      return
    }

    if (window.localStorage.getItem(DENIED_KEY) === '1') {
      setIsVisible(false)
      return
    }

    if (Date.now() < getSuppressUntil(PROMPT_SUPPRESS_UNTIL_KEY)) {
      setIsVisible(false)
      return
    }

    if (isIosDevice() && !isStandaloneMode()) {
      setIsVisible(false)
      return
    }

    setIsVisible(true)
  }, [isSupported, permission, scrolledEnough, subscribed, pageCount])

  useEffect(() => {
    if (!statusMessage) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setStatusMessage(null)
    }, STATUS_MESSAGE_DURATION_MS)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [statusMessage])

  const showRetryPanel =
    canShowRetryPanel &&
    isSubscriptionChecked &&
    permission === 'granted' &&
    !subscribed &&
    !retryDismissed

  useEffect(() => {
    if (!showRetryPanel) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      suppressPrompt(RETRY_PANEL_SUPPRESS_UNTIL_KEY, RETRY_PANEL_SUPPRESS_DAYS)
      setRetryDismissed(true)
      setCanShowRetryPanel(false)
    }, RETRY_PANEL_AUTO_HIDE_MS)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [showRetryPanel])

  const clearRetryPanel = (options?: { preserveSuppression?: boolean }) => {
    window.localStorage.removeItem(RETRY_PENDING_KEY)
    if (!options?.preserveSuppression) {
      window.localStorage.removeItem(RETRY_PANEL_SUPPRESS_UNTIL_KEY)
    }
    setCanShowRetryPanel(false)
    setRetryDismissed(false)
  }

  const revealRetryPanel = () => {
    window.localStorage.setItem(RETRY_PENDING_KEY, '1')
    window.localStorage.removeItem(RETRY_PANEL_SUPPRESS_UNTIL_KEY)
    setRetryDismissed(false)
    setCanShowRetryPanel(true)
  }

  const handleEnableNotifications = async () => {
    setIsLoading(true)
    setStatusMessage(null)

    try {
      const requestedPermission = await Notification.requestPermission()
      setPermission(requestedPermission)

      if (requestedPermission !== 'granted') {
        clearRetryPanel()
        if (requestedPermission === 'denied') {
          window.localStorage.setItem(DENIED_KEY, '1')
        }
        suppressPrompt(PROMPT_SUPPRESS_UNTIL_KEY, REJECT_SUPPRESS_DAYS)
        setIsVisible(false)
        setStatusMessage('通知が拒否されました。ブラウザ設定から再度有効化できます。')
        return
      }

      const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      if (!vapidPublicKey) {
        revealRetryPanel()
        setStatusMessage('NEXT_PUBLIC_VAPID_PUBLIC_KEY が未設定です。')
        return
      }

      const registration = await navigator.serviceWorker.ready
      let subscription = await registration.pushManager.getSubscription()

      if (!subscription) {
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
        })
      }

      const response = await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscription: subscription.toJSON() }),
      })

      if (!response.ok) {
        throw new Error(`Failed to save subscription: ${response.status}`)
      }

      suppressPrompt(PROMPT_SUPPRESS_UNTIL_KEY, 3650)
      clearRetryPanel()
      setSubscribed(true)
      setIsVisible(false)
      setStatusMessage('プッシュ通知を有効化しました。')
    } catch (error) {
      console.error('Failed to enable push notifications:', error)
      revealRetryPanel()
      setStatusMessage('通知設定に失敗しました。時間をおいて再度お試しください。')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDisableNotifications = async () => {
    setIsLoading(true)
    setStatusMessage(null)

    try {
      const registration = await navigator.serviceWorker.ready
      const subscription = await registration.pushManager.getSubscription()

      if (subscription) {
        await fetch('/api/push/subscribe', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ endpoint: subscription.endpoint }),
        })
        await subscription.unsubscribe()
      }

      setSubscribed(false)
      clearRetryPanel()
      setStatusMessage('プッシュ通知を停止しました。')
    } catch (error) {
      console.error('Failed to disable push notifications:', error)
      setStatusMessage('通知停止に失敗しました。')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDismiss = () => {
    suppressPrompt(PROMPT_SUPPRESS_UNTIL_KEY, REJECT_SUPPRESS_DAYS)
    setIsVisible(false)
  }

  const handleRetryDismiss = () => {
    suppressPrompt(RETRY_PANEL_SUPPRESS_UNTIL_KEY, RETRY_PANEL_SUPPRESS_DAYS)
    clearRetryPanel({ preserveSuppression: true })
  }

  if (!isSupported) {
    return null
  }

  return (
    <>
      {isVisible && (
        <aside className="fixed bottom-28 right-4 z-50 w-[min(92vw,24rem)] rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
          <p className="text-sm font-semibold text-gray-900">新着記事の通知を受け取りますか？</p>
          <p className="mt-2 text-xs leading-5 text-gray-600">
            生成AI活用の最新記事や学習イベント情報を、見逃さずに受け取れます。
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={handleEnableNotifications}
              disabled={isLoading}
              className="rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-500"
            >
              {isLoading ? '設定中...' : '通知を受け取る'}
            </button>
            <button
              type="button"
              onClick={handleDismiss}
              disabled={isLoading}
              className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed"
            >
              今はしない
            </button>
          </div>
        </aside>
      )}

      {showRetryPanel && (
        <aside className="fixed bottom-28 right-4 z-40 w-[min(92vw,24rem)] rounded-2xl border border-blue-200 bg-blue-50 p-4 shadow-xl">
          <button
            type="button"
            onClick={handleRetryDismiss}
            className="absolute right-3 top-3 text-blue-400 transition hover:text-blue-700"
            aria-label="閉じる"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
          <p className="text-sm font-semibold text-blue-900">通知設定を完了できませんでした。</p>
          <p className="mt-2 text-xs leading-5 text-blue-800">
            ブラウザ権限は許可済みです。再試行して購読を完了してください。
          </p>
          <button
            type="button"
            onClick={handleEnableNotifications}
            disabled={isLoading}
            className="mt-3 rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {isLoading ? '再試行中...' : '再試行'}
          </button>
        </aside>
      )}


      {statusMessage && (
        <p className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gray-900 px-4 py-2 text-xs text-white shadow-lg">
          {statusMessage}
        </p>
      )}
    </>
  )
}
