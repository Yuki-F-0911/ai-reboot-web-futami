'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlitchText from '@/components/effects/GlitchText'
import PersonGlitch from '@/components/effects/PersonGlitch'
import StoryGlitch from '@/components/effects/StoryGlitch'

export default function MainVisual() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  // マウス追従エフェクト
  useEffect(() => {
    if (!mounted) return
    
    const handleMouseMove = (e: MouseEvent) => {
      // より大きな値で効果を強調
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      requestAnimationFrame(() => {
        setMousePosition({ x, y })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mounted])

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* メインテキスト */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className="space-y-6 mb-12" style={{ perspective: '1000px' }}>
            <motion.div 
              className="text-depth-800 font-bold leading-none whitespace-nowrap tracking-tight text-ja-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: mounted ? 1 : 0, 
                y: mounted ? 0 : 20,
                rotateX: mousePosition.y * 0.1,
                rotateY: mousePosition.x * 0.1
              }}
              transition={{ 
                opacity: { duration: 1, delay: 0.5 },
                y: { duration: 1, delay: 0.5 },
                rotateX: { duration: 0.1 },
                rotateY: { duration: 0.1 }
              }}
              style={{ 
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                transformStyle: 'preserve-3d'
              }}
            >
              {mounted && (
                <>
                  <span style={{ 
                    fontSize: '1.2em',
                    display: 'inline-block',
                    textShadow: `${mousePosition.x * 1}px ${mousePosition.y * 1}px 30px rgba(151, 71, 255, 0.5)`,
                    transform: `translateX(${mousePosition.x * 0.05}px)`,
                    transition: 'all 0.1s ease-out'
                  }}>
                    <PersonGlitch delay={0} />
                  </span>
                  <span style={{ fontSize: '0.8em', opacity: 0.8 }}>の</span>
                  <span style={{ 
                    fontSize: '1.15em', 
                    fontWeight: 700,
                    display: 'inline-block',
                    textShadow: `${mousePosition.x * 0.8}px ${mousePosition.y * 0.8}px 25px rgba(255, 75, 139, 0.5)`,
                    transform: `translateX(${mousePosition.x * -0.05}px)`,
                    transition: 'all 0.1s ease-out'
                  }}>
                    <StoryGlitch delay={200} />
                  </span>
                  <span>を</span>
                </>
              )}
            </motion.div>
            <motion.div 
              className="text-depth-800 font-bold leading-none whitespace-nowrap tracking-tight text-ja-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: mounted ? 1 : 0, 
                y: mounted ? 0 : 20,
                rotateX: mousePosition.y * -0.1,
                rotateY: mousePosition.x * -0.1
              }}
              transition={{ 
                opacity: { duration: 1, delay: 0.8 },
                y: { duration: 1, delay: 0.8 },
                rotateX: { duration: 0.1 },
                rotateY: { duration: 0.1 }
              }}
              style={{ 
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                transformStyle: 'preserve-3d'
              }}
            >
              {mounted && (
                <>
                  <span style={{ 
                    fontSize: '1.3em', 
                    fontWeight: 900, 
                    letterSpacing: '-0.05em', 
                    position: 'relative',
                    display: 'inline-block',
                    textShadow: `${mousePosition.x * 1.5}px ${mousePosition.y * 1.5}px 40px rgba(255, 75, 139, 0.6), ${mousePosition.x * -1}px ${mousePosition.y * -1}px 30px rgba(0, 255, 204, 0.4)`,
                    transform: `scale(${1 + Math.abs(mousePosition.x) * 0.002})`,
                    transition: 'all 0.1s ease-out'
                  }}>
                    {/* エコーレイヤー */}
                    <motion.span
                      style={{ 
                        position: 'absolute',
                        left: `${-2 + mousePosition.x * 0.1}px`,
                        top: `${-2 + mousePosition.y * 0.1}px`,
                        opacity: 0.2,
                        filter: 'blur(1px)',
                        color: '#ff4b8b'
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 0.2, x: -2 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      AI
                    </motion.span>
                    <motion.span
                      style={{ 
                        position: 'absolute',
                        left: `${2 + mousePosition.x * -0.1}px`,
                        top: `${2 + mousePosition.y * -0.1}px`,
                        opacity: 0.15,
                        filter: 'blur(2px)',
                        color: '#00ffcc'
                      }}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 0.15, x: 2 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      AI
                    </motion.span>
                    <GlitchText text="AI" delay={0.3} intensity={0.7} />
                  </span>
                  <span style={{ fontSize: '0.7em', opacity: 0.8, marginLeft: '0.2em' }}>は</span>
                  <motion.span 
                    style={{ fontSize: '0.85em', letterSpacing: '-0.03em', marginLeft: '0.3em' }}
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <GlitchText text="待っている" delay={0.6} intensity={0.7} />
                  </motion.span>
                </>
              )}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: mousePosition.y * 0.5,
              x: mousePosition.x * 0.5
            }}
            transition={{ 
              opacity: { duration: 1, delay: 1.5 },
              x: { duration: 0.2, ease: "easeOut" },
              y: { duration: 0.2, ease: "easeOut" }
            }}
            className="mt-12"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-depth-700 whitespace-nowrap tracking-wide">
              さあ、人生を<ruby className="text-will-primary font-bold" style={{
                textShadow: `${mousePosition.x * 1}px ${mousePosition.y * 1}px 25px rgba(151, 71, 255, 0.7)`
              }}>再起動<rt className="text-sm font-normal">リブート</rt></ruby>しよう
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-depth-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-4 bg-depth-400 rounded-full mt-2"
          />
        </motion.div>
        <p className="text-depth-400 text-sm mt-3 text-center tracking-wider uppercase">scroll</p>
      </motion.div>
    </section>
  )
}