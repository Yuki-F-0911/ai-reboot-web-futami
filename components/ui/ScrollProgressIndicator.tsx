'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ScrollProgressIndicatorProps {
  className?: string
  barClassName?: string
  height?: string
  gradient?: string
}

export default function ScrollProgressIndicator({
  className = '',
  barClassName = '',
  height = 'h-1',
  gradient = 'from-indigo-500 via-purple-500 to-pink-500'
}: ScrollProgressIndicatorProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(Math.min(currentProgress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初期値を設定

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 w-full ${height} bg-gray-100 z-50 ${className}`}>
      <motion.div 
        className={`h-full bg-gradient-to-r ${gradient} opacity-80 ${barClassName}`}
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: "easeOut" }}
      />
    </div>
  )
}