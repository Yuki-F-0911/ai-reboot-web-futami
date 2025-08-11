'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export type PanelAspect = 'landscape' | 'portrait' | 'square'
export type PanelSide = 'left' | 'right' | 'center'

export interface PanelSpec {
  src?: string
  alt: string
  aspect: PanelAspect
  side: PanelSide
  yOffset: number // px
  delayMs?: number
  tone?: 'light' | 'medium' | 'heavy'
  rotateDeg?: number // -3 ~ 3
}

function aspectClasses(aspect: PanelAspect) {
  if (aspect === 'landscape') return 'aspect-[3/2]'
  if (aspect === 'portrait') return 'aspect-[2/3]'
  return 'aspect-square'
}

function toneOpacity(tone: PanelSpec['tone']) {
  switch (tone) {
    case 'light':
      return 0.08
    case 'heavy':
      return 0.18
    default:
      return 0.12
  }
}

export function MangaPanel({ src, alt, aspect, side, yOffset, delayMs = 0, tone = 'medium', rotateDeg = 0 }: PanelSpec) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  const sideClass = side === 'left' ? 'left-4 md:left-10' : side === 'right' ? 'right-4 md:right-10' : 'left-1/2 -translate-x-1/2'

  return (
    <motion.div
      ref={ref}
      className={`absolute ${sideClass} ${aspectClasses(aspect)} w-[44%] sm:w-[40%] md:w-[36%] lg:w-[32%]`}
      style={{ top: yOffset }}
      initial={{ opacity: 0, y: 16, scale: 0.96, rotate: rotateDeg * 1.2, filter: 'grayscale(100%) blur(2px)' }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: rotateDeg, filter: 'grayscale(100%) blur(0px)' } : undefined}
      transition={{ duration: 0.7, ease: 'easeOut', delay: (delayMs || 0) / 1000 }}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden border border-gray-300/40 bg-white shadow-md">
        {/* image / fallback */}
        {src ? (
          <Image src={src} alt={alt} fill priority={false} sizes="(max-width:768px) 50vw, 30vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" aria-label={alt} />
        )}

        {/* halftone overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: toneOpacity(tone),
            backgroundImage:
              'radial-gradient(currentColor 0.8px, transparent 0.8px), radial-gradient(currentColor 0.8px, transparent 0.8px)',
            backgroundPosition: '0 0, 3px 3px',
            backgroundSize: '6px 6px',
            color: 'rgb(17 24 39 / 0.9)'
          }}
        />

        {/* paper vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5 mix-blend-multiply" />

        {/* inner frame line */}
        <div className="pointer-events-none absolute inset-1 border border-black/10 rounded-md" />
      </div>
    </motion.div>
  )
}
