'use client'

import { useState, useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] bg-white border-t border-gray-100 shadow-lg md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="/contact"
        className="block w-full bg-will-primary text-white text-center py-4 rounded-xl font-bold text-lg"
        onClick={() => trackEvent.briefingApplyClick()}
      >
        無料相談を申し込む
      </a>
    </div>
  )
}
