'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MangaPanel } from '@/components/effects/MangaPanel'
import { MangaPanelVideo } from '@/components/effects/MangaPanelVideo'
import { chapterPanels } from '@/data/panels'

export default function ChapterPanels({ chapter }: { chapter: 'ch1'|'ch2'|'ch3'|'ch4' }) {
  const panels = chapterPanels[chapter]
  if (!panels?.length) return null
  
  // 動画マッピング（webpファイル名 -> 動画ファイル名）
  const videoMap: Record<string, string> = {
    '/panels/ch1-01.webp': '/panels/ch1-01.mp4',
    '/panels/ch1-04.webp': '/panels/ch1-04.mp4',
    '/panels/ch2-01.webp': '/panels/ch2-01.mp4',
    '/panels/ch3-01.webp': '/panels/ch3-01.mp4',
    '/panels/ch4-03.webp': '/panels/ch4-03.mp4',
  }
  
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
      {panels.map((p, idx) => {
        // 動画がある場合は動画パネルを表示
        const videoSrc = p.src && videoMap[p.src]
        if (videoSrc) {
          const sideClass = p.side === 'left' ? 'left-4 md:left-10' : p.side === 'right' ? 'right-4 md:right-10' : 'left-1/2 -translate-x-1/2'
          const aspectClass = p.aspect === 'landscape' ? 'aspect-[3/2]' : p.aspect === 'portrait' ? 'aspect-[2/3]' : 'aspect-square'
          
          return (
            <motion.div 
              key={`${chapter}-d-${idx}`}
              className={`absolute ${sideClass} ${aspectClass} w-[26%] sm:w-[22%] md:w-[18%] lg:w-[16%] z-30`}
              style={{
                top: typeof p.yOffset === 'number' ? `${p.yOffset}px` : p.yOffset
              }}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 0.9, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: (p.delayMs || 0) / 1000 }}
            >
              <MangaPanelVideo 
                src={videoSrc}
                poster={p.src}
                className="w-full h-full"
                threshold={0.5}
              />
            </motion.div>
          )
        }
        // その他のパネルは通常表示
        return <MangaPanel key={`${chapter}-d-${idx}`} {...p} />
      })}
    </div>
  )
}
