'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MainVisual from './sections/MainVisual'
import Prologue from './sections/Prologue'
import ChapterOne from './sections/ChapterOne'
import ChapterTwo from './sections/ChapterTwo'
import ChapterThree from './sections/ChapterThree'
import ChapterFour from './sections/ChapterFour'
import FinalChapter from './sections/FinalChapter'

export default function AcademyHomePage() {
  const { scrollYProgress } = useScroll()
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.05])

  return (
    <div className="relative min-h-screen">
      {/* 背景グラデーション */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: backgroundOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-will-primary/5 via-transparent to-will-secondary/5" />
      </motion.div>

      {/* メインコンテンツ */}
      <div className="relative">
        <MainVisual />
        <Prologue />
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
        <ChapterFour />
        <FinalChapter />
      </div>
    </div>
  )
}