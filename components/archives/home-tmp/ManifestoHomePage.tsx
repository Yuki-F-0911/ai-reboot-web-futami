'use client'

import React, { useEffect, useState } from 'react'
import TheAwakening from './manifesto/TheAwakening'
import TheEcho from './manifesto/TheEcho'
import TheCompass from './manifesto/TheCompass'
import TheJourneys from './manifesto/TheJourneys'
import TheVanguard from './manifesto/TheVanguard'
import TheInvitation from './manifesto/TheInvitation'

export default function ManifestoHomePage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* スクロールプログレスインジケーター */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%`, opacity: scrollProgress > 0 ? 0.5 : 0 }}
      />
      
      {/* 各幕 */}
      <TheAwakening />
      <TheEcho />
      <TheCompass />
      <TheJourneys />
      <TheVanguard />
      <TheInvitation />
    </div>
  )
}