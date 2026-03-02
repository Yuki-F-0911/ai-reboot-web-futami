'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'

const MOBILE_STICKY_BAR_HIDDEN_PATH_PATTERNS = [
  /^\/academy(\/|$)/,
  /^\/contact(\/|$)/,
  /^\/webtoon(\/|$)/,
  /^\/rebooters(\/|$)/,
]

const shouldHideMobileStickyBar = (pathname: string) =>
  MOBILE_STICKY_BAR_HIDDEN_PATH_PATTERNS.some((pattern) => pattern.test(pathname))
const MOBILE_STICKY_BAR_DISMISS_KEY = 'mobile-sticky-bar-dismissed'

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const pathname = usePathname() ?? ''
  const isHiddenPath = shouldHideMobileStickyBar(pathname)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const saved = window.sessionStorage.getItem(MOBILE_STICKY_BAR_DISMISS_KEY)
    if (saved === '1') {
      setDismissed(true)
    }
  }, [])

  useEffect(() => {
    if (isHiddenPath || dismissed) {
      setVisible(false)
      return
    }

    const threshold = 300
    const handleScroll = () => setVisible(window.scrollY > threshold)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed, isHiddenPath])

  const handleDismiss = () => {
    setDismissed(true)
    setVisible(false)

    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(MOBILE_STICKY_BAR_DISMISS_KEY, '1')
    }
  }

  if (isHiddenPath || dismissed) {
    return null
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 px-3 pt-2 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] md:hidden transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_-10px_24px_rgba(15,23,42,0.14)] backdrop-blur">
        <div className="flex items-center gap-2">
          <a
            href="/contact"
            className="flex min-h-[52px] flex-1 items-center justify-center rounded-xl bg-will-primary px-4 py-3 text-center text-base font-bold text-white shadow-sm transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 focus-visible:ring-offset-2"
            onClick={() => trackEvent.briefingApplyClick()}
          >
            無料相談を申し込む
          </a>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="閉じる"
            className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl leading-none text-slate-500 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 focus-visible:ring-offset-2"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
