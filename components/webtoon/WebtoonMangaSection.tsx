'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface WebtoonImage {
  src: string
  alt: string
  order: number
}

interface WebtoonMangaSectionProps {
  images: WebtoonImage[]
}

export function WebtoonMangaSection({ images }: WebtoonMangaSectionProps) {
  const [visiblePanels, setVisiblePanels] = useState<Set<number>>(new Set())
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // スクロール位置をリセット
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    // Intersection Observer でパネルの表示を検知
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = panelRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisiblePanels((prev) => new Set([...prev, index]))
          }
        }
      })
    }, observerOptions)

    // 各パネルを監視
    panelRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    // 最初のパネルを即座に表示
    setTimeout(() => {
      setVisiblePanels(new Set([0]))
    }, 300)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="manga" className="relative pt-20 pb-16">
      <div className="max-w-[480px] mx-auto px-4">
        {/* 表紙（最初の画像） */}
        {images[0] && (
          <motion.div
            ref={(el) => {
              panelRefs.current[0] = el
            }}
            className="mb-8"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{
              opacity: visiblePanels.has(0) ? 1 : 0,
              y: visiblePanels.has(0) ? 0 : 20,
              scale: visiblePanels.has(0) ? 1 : 0.96,
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 480px) 100vw, 480px"
              />
            </div>
          </motion.div>
        )}

        <div className="my-12" />

        {/* あらすじ */}
        <motion.div
          className="mb-12 text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">あらすじ</h2>
          <p className="text-base leading-relaxed text-gray-700">
            学生時代は陸上選手として輝いていた今治彰（32）は、いまやAIニュースに怯え、航空会社のカウンターで「代わりのきく毎日」を送っていた。
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            「このままでいいのか？」と焦る彼が出会ったのは、AIを使いこなすかつての先輩で起業家の池上。
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            「AIに怯える人生」から、「AIと共に走り出す人生」へ。<br />
            止まっていた時間が、再び動き出す——！
          </p>
        </motion.div>

        <div className="my-12" />

        {/* 残りの画像パネル */}
        {images.slice(1).map((image, index) => {
          const actualIndex = index + 1
          const isVisible = visiblePanels.has(actualIndex)

          return (
            <div key={image.order} className="mb-12">
              <motion.div
                ref={(el) => {
                  panelRefs.current[actualIndex] = el
                }}
                className="relative w-full"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 30,
                  scale: isVisible ? 1 : 0.95,
                }}
                transition={{
                  duration: 0.7,
                  ease: 'easeOut',
                  delay: Math.min(index * 0.05, 0.3),
                }}
              >
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    className="object-contain"
                    sizes="(max-width: 480px) 100vw, 480px"
                  />
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
