'use client'

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
  delay?: number
  scrollTrigger?: boolean
  fontMix?: 'tech' | 'serif' | 'mixed' | 'impact'
}

// 個別文字のグリッチコンポーネント
const GlitchChar = ({ 
  char, 
  index, 
  isImportant,
  delay = 0,
  fontSize = 'inherit',
  seed = 0,
  fontMix = 'mixed'
}: { 
  char: string
  index: number
  isImportant: boolean
  delay?: number
  fontSize?: string
  seed?: number
  fontMix?: 'tech' | 'serif' | 'mixed' | 'impact'
}) => {
  const [phase, setPhase] = useState<'noise' | 'glitch' | 'forming' | 'formed'>('noise')
  const [fontClass, setFontClass] = useState('font-mono')
  const [displayChar, setDisplayChar] = useState(char)
  const [isClient, setIsClient] = useState(false)
  
  // シード値から疑似乱数を生成
  const seededRandom = useCallback((seed: number) => {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }, [])
  
  // フォントミックスの設定
  const getFontByPhase = useCallback(() => {
    if (phase === 'noise') return 'font-mono'
    if (phase === 'glitch') {
      const fonts = ['font-mono', 'font-sans', 'font-serif']
      return fonts[Math.floor(seededRandom(seed + index) * fonts.length)]
    }
    if (phase === 'forming') {
      if (fontMix === 'tech') return 'font-mono'
      if (fontMix === 'serif') return 'font-serif'
      if (fontMix === 'impact') return 'font-black'
      return isImportant ? 'font-bold' : 'font-medium'
    }
    // formed
    if (fontMix === 'tech') return 'font-mono tracking-wider'
    if (fontMix === 'serif') return 'font-serif'
    if (fontMix === 'impact') return 'font-black tracking-tight'
    return 'font-bold'
  }, [phase, fontMix, isImportant, seed, index, seededRandom])
  
  const randomValues = useMemo(() => {
    const base = (index + 1) * (seed + 1) * 1000
    return {
      scale: 2 + seededRandom(base),
      colorR: Math.floor(seededRandom(base + 1) * 255),
      colorG: Math.floor(seededRandom(base + 2) * 255),
      colorB: Math.floor(seededRandom(base + 3) * 255),
      glitchX1: seededRandom(base + 4) * 4 - 2,
      glitchY1: seededRandom(base + 5) * 4 - 2,
      glitchX2: seededRandom(base + 6) * 4 - 2,
      glitchY2: seededRandom(base + 7) * 4 - 2,
      glitchX3: seededRandom(base + 8) * 4 - 2,
      glitchY3: seededRandom(base + 9) * 4 - 2
    }
  }, [index, seed, seededRandom])
  
  // ランダムな文字を生成（より多様なグリッチ文字）
  const randomChars = '!<>-_\\/[]{}—=+*^?#________あいうえおかきくけこ漢字零壱弐参肆伍陸漆捌玖◇◆□■△▲▽▼○●'
  
  // サブリミナル的に表示する意味のある単語
  const subliminalWords = ['覚醒', '意志', '創造', '変革', '可能性', '未来', '自由', '成長', '挑戦', '革新']
  
  // クライアントサイドの初期化
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // フェーズが変わるたびにフォントを更新
  useEffect(() => {
    if (isClient) {
      setFontClass(getFontByPhase())
    }
  }, [phase, isClient, getFontByPhase])
  
  // アニメーション制御
  useEffect(() => {
    if (!isClient) return
    const baseDelay = delay + (index * (isImportant ? 100 : 30))
    
    // Phase 1: ノイズ
    const noiseTimer = setTimeout(() => {
      let noiseCount = 0
      const noiseInterval = setInterval(() => {
        // 時々サブリミナル単語を表示
        if (Math.random() > 0.85 && noiseCount > 3) {
          const word = subliminalWords[Math.floor(Math.random() * subliminalWords.length)]
          setDisplayChar(word[Math.floor(Math.random() * word.length)])
        } else {
          setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)])
        }
        noiseCount++
      }, 50)
      
      setTimeout(() => {
        clearInterval(noiseInterval)
        setPhase('glitch')
      }, 600)
    }, baseDelay)
    
    // Phase 2: グリッチ
    const glitchTimer = setTimeout(() => {
      setPhase('glitch')
      let glitchCount = 0
      const glitchInterval = setInterval(() => {
        // グリッチ中も時々サブリミナル単語や正しい文字を混ぜる
        const rand = Math.random()
        if (rand > 0.7) {
          setDisplayChar(char)
        } else if (rand > 0.6 && glitchCount > 2) {
          const word = subliminalWords[Math.floor(Math.random() * subliminalWords.length)]
          setDisplayChar(word[Math.floor(Math.random() * word.length)])
        } else {
          setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)])
        }
        glitchCount++
      }, 80)
      
      setTimeout(() => {
        clearInterval(glitchInterval)
        setDisplayChar(char) // グリッチ終了時に正しい文字を表示
        setPhase('forming')
      }, 400)
    }, baseDelay + 600)
    
    // Phase 3: 形成
    const formingTimer = setTimeout(() => {
      setPhase('forming')
      setDisplayChar(char)
      setFontClass(getFontByPhase())
      
      setTimeout(() => {
        setPhase('formed')
        setDisplayChar(char) // 最終的に正しい文字を表示
        setFontClass(getFontByPhase())
      }, 400)
    }, baseDelay + 1000)
    
    return () => {
      clearTimeout(noiseTimer)
      clearTimeout(glitchTimer)
      clearTimeout(formingTimer)
    }
  }, [char, index, delay, isImportant, isClient, getFontByPhase, subliminalWords])
  
  if (!isClient) {
    return <span style={{ opacity: 0 }}>{char}</span>
  }
  
  return (
    <motion.span
      className={`inline-block relative ${fontClass}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: phase === 'noise' ? [0, 0.3, 0.1, 0.5, 0.2] : phase === 'formed' ? 1 : 0.9,
        scale: phase === 'forming' ? 
          (isImportant ? [2, 0.5, 3, 0.8, 1.5, 1] : [1.5, 0.8, 1.2, 1]) : 
          phase === 'formed' ? 1 : 1,
        rotateZ: phase === 'glitch' ? [0, -5, 5, -3, 0] : phase === 'formed' ? 0 : 0,
        x: phase === 'glitch' ? [0, -2, 3, -1, 0] : phase === 'formed' ? 0 : 0,
        y: phase === 'glitch' ? [0, 3, -2, 1, 0] : phase === 'formed' ? 0 : 0,
        skewX: phase === 'glitch' ? [0, 10, -10, 5, 0] : phase === 'formed' ? 0 : 0,
      }}
      transition={{
        duration: phase === 'noise' ? 0.1 : 
                 phase === 'glitch' ? 0.1 :
                 phase === 'forming' && isImportant ? 1 : 
                 phase === 'formed' ? 0.5 : 0.3,
        repeat: phase === 'noise' || phase === 'glitch' ? Infinity : 0,
      }}
      style={{
        fontSize: phase === 'forming' && isImportant ? 
          `calc(${fontSize} * ${randomValues.scale})` : fontSize,
        fontWeight: fontMix === 'impact' && phase === 'formed' ? 900 : 
                   phase === 'formed' ? (isImportant ? 700 : 500) : 300,
        letterSpacing: fontMix === 'tech' ? '0.1em' : 
                      fontMix === 'impact' ? '-0.02em' :
                      phase === 'formed' ? '0.05em' : '0.02em',
        textTransform: fontMix === 'tech' && phase === 'formed' ? 'uppercase' : 'none',
        textShadow: phase === 'glitch' ? `
          ${randomValues.glitchX1}px ${randomValues.glitchY1}px 0 rgba(255, 0, 0, 0.7),
          ${randomValues.glitchX2}px ${randomValues.glitchY2}px 0 rgba(0, 255, 255, 0.7),
          ${randomValues.glitchX3}px ${randomValues.glitchY3}px 0 rgba(255, 0, 255, 0.5),
          ${randomValues.glitchX1 * 2}px ${randomValues.glitchY1 * 2}px 2px rgba(255, 100, 200, 0.3)
        ` : phase === 'formed' ? `
          0 2px 8px rgba(0, 0, 0, 0.2),
          0 4px 16px rgba(0, 0, 0, 0.1),
          0 0 2px rgba(255, 75, 139, 0.4)
        ` : phase === 'forming' ? `
          0 0 30px rgba(255, 215, 0, 0.6),
          0 0 60px rgba(255, 215, 0, 0.4),
          0 0 90px rgba(255, 75, 139, 0.3)
        ` : phase === 'noise' ? `
          0 0 10px rgba(${randomValues.colorR}, ${randomValues.colorG}, ${randomValues.colorB}, 0.5)
        ` : 'none',
        color: phase === 'formed' ? '#1a1a1a' : 
               phase === 'forming' ? '#2a2a2a' :
               phase === 'noise' ? `rgba(${randomValues.colorR}, ${randomValues.colorG}, ${randomValues.colorB}, 0.9)` : 
               '#333',
        mixBlendMode: phase === 'glitch' ? 'difference' : 'normal',
        filter: phase === 'glitch' ? `
          blur(${Math.random() * 0.8}px) 
          contrast(${1.2 + Math.random() * 0.3})
          saturate(${1.5 + Math.random() * 0.5})
        ` : 
                phase === 'forming' ? 'blur(0.3px) brightness(1.2)' : 
                phase === 'noise' ? `hue-rotate(${randomValues.colorR}deg)` : 'none',
      }}
    >
      {displayChar}
      
      {/* 形成時のハイライトエフェクト */}
      {phase === 'forming' && (
        <motion.span
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.8), transparent)',
            filter: 'blur(4px)',
          }}
        />
      )}
    </motion.span>
  )
}

export default function GlitchText({ 
  text, 
  className = "", 
  delay = 0,
  scrollTrigger = false,
  fontMix = 'mixed'
}: GlitchTextProps) {
  const [isVisible, setIsVisible] = useState(!scrollTrigger)
  const [isClient, setIsClient] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // フォントサイズをクラスから抽出
  const getFontSize = () => {
    if (className.includes('text-9xl')) return '6rem'
    if (className.includes('text-8xl')) return '6rem'
    if (className.includes('text-7xl')) return '4.5rem'
    if (className.includes('text-6xl')) return '3.75rem'
    if (className.includes('text-5xl')) return '3rem'
    if (className.includes('text-4xl')) return '2.25rem'
    return '1rem'
  }
  
  // シード値をテキストから生成
  const textSeed = useMemo(() => {
    let hash = 0
    for (let i = 0; i < text.length; i++) {
      const char = text.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    return Math.abs(hash)
  }, [text])
  
  // 重要な単語を判定
  const importantWords = ['AI', '覚醒', '物語', '支配', '主人公', 'あなた']
  const isImportantChar = (char: string, context: string) => {
    return importantWords.some(word => context.includes(word) && word.includes(char))
  }
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // スクロールによるトリガー (シンプルなIntersection Observerを使用)
  useEffect(() => {
    if (!isClient || !scrollTrigger || !containerRef.current) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-20% 0px'
      }
    )
    
    observer.observe(containerRef.current)
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [isClient, scrollTrigger, isVisible])
  
  if (!isClient) {
    return <div className={className} style={{ opacity: 0 }}>{text}</div>
  }
  
  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* 背景のノイズレイヤー */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? [0, 0.3, 0.1, 0.2, 0] : 0 }}
        transition={{ duration: 2, delay }}
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
          filter: 'blur(0.5px)',
        }}
      />
      
      {/* テキスト本体 */}
      <div className="relative">
        {isVisible && text.split('').map((char, index) => (
          <GlitchChar
            key={index}
            char={char}
            index={index}
            isImportant={isImportantChar(char, text)}
            delay={delay}
            fontSize={getFontSize()}
            seed={textSeed}
            fontMix={fontMix}
          />
        ))}
      </div>
      
      {/* 走査線オーバーレイ */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,255,200,0.03) 4px, rgba(0,255,200,0.03) 8px)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  )
}