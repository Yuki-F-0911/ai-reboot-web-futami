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
  const [afterGlitch, setAfterGlitch] = useState(false) // 余韻グリッチ用
  const [afterGlitchType, setAfterGlitchType] = useState<'noise' | 'rgb' | 'distort' | 'flicker'>('noise')
  
  // シード値から疑似乱数を生成
  const seededRandom = useCallback((seed: number) => {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }, [])
  
  // getFontByPhase関数を削除（useEffect内でインライン化したため）
  
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
  
  // クライアントサイドの初期化
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // フェーズが変わるたびにフォントを更新
  useEffect(() => {
    if (!isClient) return
    
    // getFontByPhaseのロジックを直接インラインで実装
    let newFontClass = 'font-mono'
    if (phase === 'noise') {
      newFontClass = 'font-mono'
    } else if (phase === 'glitch') {
      const fonts = ['font-mono', 'font-sans', 'font-serif']
      newFontClass = fonts[Math.floor(seededRandom(seed + index) * fonts.length)]
    } else if (phase === 'forming') {
      if (fontMix === 'tech') newFontClass = 'font-mono'
      else if (fontMix === 'serif') newFontClass = 'font-serif'
      else if (fontMix === 'impact') newFontClass = 'font-black'
      else newFontClass = isImportant ? 'font-bold' : 'font-medium'
    } else if (phase === 'formed') {
      if (fontMix === 'tech') newFontClass = 'font-mono tracking-wider'
      else if (fontMix === 'serif') newFontClass = 'font-serif'
      else if (fontMix === 'impact') newFontClass = 'font-black tracking-tight'
      else newFontClass = 'font-bold'
    }
    
    setFontClass(newFontClass)
  }, [phase, isClient, fontMix, isImportant, seed, index, seededRandom])
  
  // アニメーション制御
  useEffect(() => {
    if (!isClient) return
    const baseDelay = delay + (index * (isImportant ? 120 : 40))
    
    // サブリミナル単語を関数内で定義
    const subliminalWords = ['覚醒', '意志', '創造', '変革', '可能性', '未来', '自由', '成長', '挑戦', '革新']
    
    let noiseInterval: NodeJS.Timeout | null = null
    let glitchInterval: NodeJS.Timeout | null = null
    
    // Phase 1: ノイズ (0-800ms)
    const noiseTimer = setTimeout(() => {
      setPhase('noise')
      let noiseCount = 0
      noiseInterval = setInterval(() => {
        // より頻繁にサブリミナル単語を表示（30%の確率）
        if (Math.random() > 0.7 && noiseCount > 2) {
          const word = subliminalWords[Math.floor(Math.random() * subliminalWords.length)]
          // 単語全体または一部を表示
          if (Math.random() > 0.5) {
            setDisplayChar(word) // 単語全体を一瞬表示
          } else {
            setDisplayChar(word[Math.floor(Math.random() * word.length)])
          }
        } else {
          setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)])
        }
        noiseCount++
        
        if (noiseCount > 15) { // 安全のため上限を設定
          if (noiseInterval) clearInterval(noiseInterval)
        }
      }, 60)
      
      setTimeout(() => {
        if (noiseInterval) clearInterval(noiseInterval)
        setPhase('glitch')
      }, 800)
    }, baseDelay)
    
    // Phase 2: グリッチ (800-1400ms)
    const glitchTimer = setTimeout(() => {
      setPhase('glitch')
      let glitchCount = 0
      glitchInterval = setInterval(() => {
        // グリッチ中も時々サブリミナル単語や正しい文字を混ぜる
        const rand = Math.random()
        if (rand > 0.7) {
          setDisplayChar(char) // 30%の確率で正しい文字
        } else if (rand > 0.4) {
          // 30%の確率でサブリミナル単語
          const word = subliminalWords[Math.floor(Math.random() * subliminalWords.length)]
          if (Math.random() > 0.3) {
            setDisplayChar(word) // 単語全体を表示
          } else {
            setDisplayChar(word.substring(0, 2)) // 単語の一部を表示
          }
        } else {
          setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)])
        }
        glitchCount++
        
        if (glitchCount > 10) { // 安全のため上限を設定
          if (glitchInterval) clearInterval(glitchInterval)
        }
      }, 80)
      
      setTimeout(() => {
        if (glitchInterval) clearInterval(glitchInterval)
        setDisplayChar(char) // グリッチ終了時に正しい文字を表示
        setPhase('forming')
      }, 600)
    }, baseDelay + 800)
    
    // Phase 3: 形成 (1400-2000ms)
    const formingTimer = setTimeout(() => {
      setPhase('forming')
      setDisplayChar(char)
      
      setTimeout(() => {
        setPhase('formed')
        setDisplayChar(char) // 最終的に正しい文字を表示
      }, 600)
    }, baseDelay + 1400)
    
    // 最終確認タイマー（フェイルセーフ）
    const finalTimer = setTimeout(() => {
      setPhase('formed')
      setDisplayChar(char)
    }, baseDelay + 2200)
    
    return () => {
      if (noiseInterval) clearInterval(noiseInterval)
      if (glitchInterval) clearInterval(glitchInterval)
      clearTimeout(noiseTimer)
      clearTimeout(glitchTimer)
      clearTimeout(formingTimer)
      clearTimeout(finalTimer)
    }
  }, [char, index, delay, isImportant, isClient])
  
  // 余韻グリッチエフェクト（収束後）
  useEffect(() => {
    if (!isClient || phase !== 'formed') return
    
    let afterGlitchTimeout: NodeJS.Timeout | null = null
    let restoreTimeout: NodeJS.Timeout | null = null
    
    // ランダムなタイミングでグリッチを発生させる
    const scheduleAfterGlitch = () => {
      // 3〜8秒後にランダムでグリッチ
      const nextGlitchTime = 3000 + Math.random() * 5000
      
      afterGlitchTimeout = setTimeout(() => {
        setAfterGlitch(true)
        
        // グリッチの種類をランダムに選択
        const glitchType = Math.random()
        
        if (glitchType < 0.2) {
          // ジジ... 軽いノイズ
          setAfterGlitchType('noise')
          setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)])
          restoreTimeout = setTimeout(() => {
            setDisplayChar(char)
            setAfterGlitch(false)
            scheduleAfterGlitch() // 次のグリッチをスケジュール
          }, 50)
        } else if (glitchType < 0.4) {
          // RGB色収差効果
          setAfterGlitchType('rgb')
          restoreTimeout = setTimeout(() => {
            setAfterGlitch(false)
            scheduleAfterGlitch()
          }, 150)
        } else if (glitchType < 0.6) {
          // 歪み効果
          setAfterGlitchType('distort')
          restoreTimeout = setTimeout(() => {
            setAfterGlitch(false)
            scheduleAfterGlitch()
          }, 200)
        } else if (glitchType < 0.8) {
          // 明滅効果
          setAfterGlitchType('flicker')
          let flickerCount = 0
          const flickerInterval = setInterval(() => {
            setAfterGlitch(flickerCount % 2 === 0)
            flickerCount++
            
            if (flickerCount > 4) {
              clearInterval(flickerInterval)
              setAfterGlitch(false)
              scheduleAfterGlitch()
            }
          }, 50)
        } else {
          // ガガガ... 連続グリッチ
          setAfterGlitchType('noise')
          let glitchCount = 0
          const rapidGlitch = setInterval(() => {
            if (glitchCount % 2 === 0) {
              setDisplayChar(randomChars[Math.floor(Math.random() * randomChars.length)])
            } else {
              setDisplayChar(char)
            }
            glitchCount++
            
            if (glitchCount > 6) {
              clearInterval(rapidGlitch)
              setDisplayChar(char)
              setAfterGlitch(false)
              scheduleAfterGlitch()
            }
          }, 40)
        }
      }, nextGlitchTime)
    }
    
    // 最初のグリッチをスケジュール
    scheduleAfterGlitch()
    
    return () => {
      if (afterGlitchTimeout) clearTimeout(afterGlitchTimeout)
      if (restoreTimeout) clearTimeout(restoreTimeout)
    }
  }, [phase, isClient, char])
  
  if (!isClient) {
    return <span style={{ opacity: 0 }}>{char}</span>
  }
  
  return (
    <motion.span
      className={`inline-block relative ${fontClass}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: afterGlitch && afterGlitchType === 'flicker' ? [1, 0.2, 1, 0.1, 1] :
                afterGlitch ? [1, 0.8, 1] :
                phase === 'formed' ? 1 : 
                phase === 'forming' ? 0.95 :
                phase === 'glitch' ? [0.3, 0.8, 0.5, 0.9] :
                phase === 'noise' ? [0, 0.3, 0.1, 0.5, 0.2] : 0.5,
        scale: afterGlitch && afterGlitchType === 'distort' ? [1, 1.3, 0.7, 1.1, 1] :
              afterGlitch ? [1, 1.05, 1] :
              phase === 'formed' ? 1 :
              phase === 'forming' ? (isImportant ? [2, 0.5, 3, 0.8, 1.5, 1] : [1.5, 0.8, 1.2, 1]) :
              phase === 'glitch' ? [1, 1.1, 0.95, 1.05, 1] :
              1,
        rotateZ: afterGlitch && afterGlitchType === 'distort' ? [0, -5, 8, -3, 0] :
                afterGlitch ? [0, -1, 1, 0] :
                phase === 'formed' ? 0 :
                phase === 'glitch' ? [0, -5, 5, -3, 0] : 0,
        x: afterGlitch && afterGlitchType === 'rgb' ? [0, -2, 1, 0] :
          afterGlitch ? [0, -0.5, 0.5, 0] :
          phase === 'formed' ? 0 :
          phase === 'glitch' ? [0, -2, 3, -1, 0] : 0,
        y: afterGlitch && afterGlitchType === 'rgb' ? [0, 1, -1, 0] :
          afterGlitch ? [0, 0.5, -0.5, 0] :
          phase === 'formed' ? 0 :
          phase === 'glitch' ? [0, 3, -2, 1, 0] : 0,
        skewX: afterGlitch && afterGlitchType === 'distort' ? [0, -10, 15, -5, 0] :
              afterGlitch ? [0, -2, 2, 0] :
              phase === 'formed' ? 0 :
              phase === 'glitch' ? [0, 10, -10, 5, 0] : 0,
        skewY: afterGlitch && afterGlitchType === 'distort' ? [0, 5, -8, 3, 0] : 0,
      }}
      transition={{
        duration: afterGlitch ? 0.05 :
                 phase === 'formed' ? 0.5 :
                 phase === 'forming' ? (isImportant ? 1.2 : 0.8) :
                 phase === 'glitch' ? 0.15 :
                 phase === 'noise' ? 0.12 : 0.3,
        repeat: afterGlitch ? 0 :
               phase === 'noise' || phase === 'glitch' ? 4 : 0,
        ease: afterGlitch ? 'linear' :
              phase === 'formed' ? 'easeOut' : 
              phase === 'forming' ? 'easeInOut' : 'linear',
      }}
      style={{
        fontSize: afterGlitch && afterGlitchType === 'flicker' ? 
          `calc(${fontSize} * ${0.9 + Math.random() * 0.3})` :
          phase === 'forming' && isImportant ? 
          `calc(${fontSize} * ${randomValues.scale})` : 
          // サブリミナル単語が表示されている時は少し大きく
          (displayChar.length > 1 && phase !== 'formed' ? `calc(${fontSize} * 1.2)` : fontSize),
        fontWeight: fontMix === 'impact' && phase === 'formed' ? 900 : 
                   phase === 'formed' ? (isImportant ? 700 : 500) : 
                   // サブリミナル単語は太字で表示
                   (displayChar.length > 1 && phase !== 'formed' ? 700 : 300),
        letterSpacing: fontMix === 'tech' ? '0.1em' : 
                      fontMix === 'impact' ? '-0.02em' :
                      phase === 'formed' ? '0.05em' : '0.02em',
        textTransform: fontMix === 'tech' && phase === 'formed' ? 'uppercase' : 'none',
        textShadow: afterGlitch && afterGlitchType === 'rgb' ? `
          -2px 0 0 rgba(255, 0, 0, 0.8),
          2px 0 0 rgba(0, 255, 255, 0.8),
          0 0 4px rgba(255, 0, 255, 0.6)
        ` : afterGlitch && afterGlitchType === 'distort' ? `
          ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 rgba(255, 0, 100, 0.7),
          ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 rgba(0, 255, 200, 0.7),
          0 0 8px rgba(255, 255, 255, 0.5)
        ` : phase === 'glitch' ? `
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
               // サブリミナル単語は目立つ色で表示
               (displayChar.length > 1 && phase !== 'formed' ? 
                 `rgba(255, ${100 + randomValues.colorG % 155}, ${randomValues.colorB}, 1)` :
                 phase === 'noise' ? `rgba(${randomValues.colorR}, ${randomValues.colorG}, ${randomValues.colorB}, 0.9)` : 
                 '#333'),
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