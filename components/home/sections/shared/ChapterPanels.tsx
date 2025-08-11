'use client'

import React from 'react'
import { MangaPanel } from '@/components/effects/MangaPanel'
import { chapterPanels } from '@/data/panels'

export default function ChapterPanels({ chapter }: { chapter: 'ch1'|'ch2'|'ch3'|'ch4' }) {
  const panels = chapterPanels[chapter]
  if (!panels?.length) return null
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
      {panels.map((p, idx) => (
        <MangaPanel key={`${chapter}-d-${idx}`} {...p} />
      ))}
    </div>
  )
}
