'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Variant = 'aurora' | 'burst' | 'grid' | 'manga'

export default function OGPPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [variant, setVariant] = useState<Variant>('aurora')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 1200
    canvas.height = 630

    let raf = 0
    let t = 0

    const loop = () => {
      t += 0.008
      // 背景の微ノイズ（フィルム粒子）
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const id = ctx.createImageData(canvas.width, canvas.height)
      const data = id.data
      for (let i = 0; i < data.length; i += 4) {
        const n = Math.random() * 35
        data[i] = n
        data[i + 1] = n
        data[i + 2] = n
        data[i + 3] = 255
      }
      ctx.putImageData(id, 0, 0)
      // 走査線
      ctx.strokeStyle = 'rgba(255,255,255,0.03)'
      for (let y = 0; y < canvas.height; y += 2) {
        ctx.beginPath()
        ctx.moveTo(0, y + (Math.sin(t + y * 0.004) * 0.2))
        ctx.lineTo(canvas.width, y + (Math.sin(t + y * 0.004) * 0.2))
        ctx.stroke()
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  const bgByVariant = useMemo(() => {
    switch (variant) {
      case 'aurora':
        return (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_40%,rgba(151,71,255,0.35),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_30%_60%,rgba(255,75,139,0.28),transparent_60%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b13] via-[#131327] to-[#1a1124]" />
            <motion.div
              className="absolute -inset-32"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 6, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              style={{ mixBlendMode: 'screen' }}
            >
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.06),rgba(151,71,255,0.12),rgba(255,75,139,0.12),rgba(255,255,255,0.06))] opacity-60" />
            </motion.div>
          </>
        )
      case 'burst':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b13] via-[#0e0a1a] to-[#1a1124]" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 630" aria-hidden>
              <g transform="translate(600 315) scale(1.35 1.15)">
                {Array.from({ length: 260 }, (_, i) => {
                  const ang = (i / 260) * Math.PI * 2
                  const r = 210
                  const len = 22
                  const tx = -Math.sin(ang)
                  const ty = Math.cos(ang)
                  const px = Math.cos(ang) * r
                  const py = Math.sin(ang) * r
                  return (
                    <line
                      key={i}
                      x1={px - tx * len}
                      y1={py - ty * len}
                      x2={px + tx * len}
                      y2={py + ty * len}
                      stroke="#ffffff"
                      strokeOpacity={0.16}
                      strokeWidth={3}
                      strokeLinecap="butt"
                    />
                  )
                })}
              </g>
            </svg>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0,transparent_60%,rgba(0,0,0,0.5)_100%)]" />
          </>
        )
      case 'grid':
      default:
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f1123] via-[#0a0d19] to-[#1a1124]" />
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 630">
              {Array.from({ length: 40 }, (_, i) => (
                <line key={`v-${i}`} x1={(i + 1) * 30} y1={0} x2={(i + 1) * 30} y2={630} stroke="#8b5cf6" strokeOpacity={0.12} />
              ))}
              {Array.from({ length: 20 }, (_, i) => (
                <line key={`h-${i}`} x1={0} y1={(i + 1) * 30} x2={1200} y2={(i + 1) * 30} stroke="#ec4899" strokeOpacity={0.12} />
              ))}
            </svg>
            <div className="absolute inset-0 bg-[radial-gradient(500px_300px_at_50%_10%,rgba(255,255,255,0.08),transparent_60%)]" />
          </>
        )
      case 'manga':
        return (
          <>
            {/* 用紙の白 + わずかな紙質 */}
            <div className="absolute inset-0 bg-[#f9fafb]" />
            <div className="absolute inset-0 opacity-[0.07]" style={{
              backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
              backgroundSize: '6px 6px',
              color: '#111827'
            }} />
            {/* 実画像のコマ配置（座標は1200x630基準） */}
            {/* 左上コマ */}
            <div className="absolute overflow-hidden rounded-lg ring-1 ring-black/5" style={{ left: 60, top: 40, width: 500, height: 280 }}>
              <Image src="/fv-manga/manga_1.webp" alt="panel-1" fill className="object-cover" priority />
            </div>
            {/* 右上コマ（わずかに回転） */}
            <div className="absolute overflow-hidden rounded-lg ring-1 ring-black/5" style={{ left: 640, top: 40, width: 500, height: 200, transform: 'rotate(2deg)', transformOrigin: 'center' }}>
              <Image src="/fv-manga/manga_10.webp" alt="panel-2" fill className="object-cover" />
            </div>
            {/* 左下コマ（小） */}
            <div className="absolute overflow-hidden rounded-lg ring-1 ring-black/5" style={{ left: 80, top: 340, width: 430, height: 240, transform: 'rotate(-2deg)', transformOrigin: 'center' }}>
              <Image src="/fv-manga/manga_3.webp" alt="panel-3" fill className="object-cover" />
            </div>
            {/* 右下コマ（大） */}
            <div className="absolute overflow-hidden rounded-lg ring-1 ring-black/5" style={{ left: 540, top: 290, width: 600, height: 300 }}>
              <Image src="/fv-manga/manga_4.webp" alt="panel-4" fill className="object-cover" />
            </div>
            {/* コマ枠線（上に被せる） */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 630" aria-hidden>
              <g stroke="#0b0b0b" strokeWidth="6" fill="none">
                <rect x="60" y="40" width="500" height="280" rx="8" ry="8" />
                <rect x="640" y="40" width="500" height="200" rx="8" ry="8" transform="rotate(2 890 140)" />
                <rect x="80" y="340" width="430" height="240" rx="8" ry="8" transform="rotate(-2 295 460)" />
                <rect x="540" y="290" width="600" height="300" rx="10" ry="10" />
              </g>
            </svg>
            {/* 軽いビネットで締める */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_55%,rgba(0,0,0,0.15)_100%)] pointer-events-none" />
          </>
        )
    }
  }, [variant])

  return (
    <div className="min-h-screen bg-depth-100 flex items-center justify-center p-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-center">OGP画像プレビュー（Rebooters LP）</h1>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-gray-500">Variant:</span>
          {(['aurora','burst','grid','manga'] as Variant[]).map(v => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-3 py-1 rounded-md text-sm border ${variant===v ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
            >{v}</button>
          ))}
        </div>

        {/* OGP画像コンテナ */}
        <div 
          className="relative overflow-hidden shadow-2xl ring-1 ring-white/10"
          style={{ width: '1200px', height: '630px' }}
        >
          {/* クラフト感のあるタイポ用フィルタ定義（インクにじみ/わずかなゆらぎ） */}
          <svg className="absolute w-0 h-0" aria-hidden>
            <defs>
              <filter id="ink-bleed" x="-5%" y="-5%" width="110%" height="110%">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="1" seed="7" result="noise" />
                <feColorMatrix type="saturate" values="0" in="noise" result="mono" />
                <feComponentTransfer in="mono" result="soft-noise">
                  <feFuncA type="table" tableValues="0 0.06 0.12 0.18 0.22" />
                </feComponentTransfer>
                <feDisplacementMap in="SourceGraphic" in2="soft-noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <filter id="letterpress" x="-10%" y="-10%" width="120%" height="120%">
                <feOffset dx="0" dy="1" in="SourceAlpha" result="off" />
                <feGaussianBlur in="off" stdDeviation="0.6" result="blur" />
                <feComposite in="blur" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="innerShadow" />
                <feMerge>
                  <feMergeNode in="innerShadow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
          {/* 背景レイヤー（バリアント） */}
          {bgByVariant}

          {/* ノイズキャンバス */}
          <canvas 
            ref={canvasRef}
            className="absolute inset-0 opacity-30 mix-blend-screen"
          />

          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_60%,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

          {/* テキスト用スクラム（埋もれ防止の中心グラデ） */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div
              style={{
                width: '78%',
                height: '60%',
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.36) 0%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0) 70%)',
                filter: 'blur(0.45px)'
              }}
            />
          </div>

          {/* 中央コンテンツ */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 text-center" style={{ filter: 'url(#ink-bleed) url(#letterpress)' }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                <h1
                  className="text-[88px] md:text-[96px] leading-tight tracking-[0.06em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: '"Noto Serif JP", serif', textRendering: 'optimizeLegibility' }}
                >
                  あなたの物語を
                </h1>
                <h1
                  className="text-[118px] md:text-[126px] font-black leading-none tracking-[-0.01em] bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, var(--color-will-secondary), var(--color-will-primary))',
                    WebkitTextStroke: '0.5px rgba(0,0,0,0.25)',
                    fontFamily: '"Zen Kaku Gothic New", "Noto Sans JP", system-ui, -apple-system, sans-serif'
                  }}
                >
                  <span style={{ fontSize: '1.28em', letterSpacing: '-0.04em' }}>AI</span>
                  <span style={{ fontSize: '0.86em', marginLeft: '0.08em', letterSpacing: '0.02em' }}>は待っている</span>
                </h1>
                <div className="mt-6 flex justify-center">
                  <span
                    className="inline-block px-6 py-3 rounded-md text-white/95 text-[26px] tracking-[0.08em] ring-1 ring-white/15 shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.42), rgba(0,0,0,0.32))',
                      backdropFilter: 'blur(2px)',
                      WebkitBackdropFilter: 'blur(2px)',
                      mixBlendMode: 'normal'
                    }}
                  >
                    さあ、人生を<ruby className="text-white font-semibold"><span className="px-1">再起動</span><rt className="text-sm font-normal opacity-85">リブート</rt></ruby>しよう
                  </span>
                </div>
                {/* 細い装飾ラインでクラフト感を補強 */}
                <div className="mx-auto mt-5 w-[56%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </motion.div>
            </div>
          </div>

          {/* 角の装飾 */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/25" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/25" />
          </div>

          {/* ロゴ（ヘッダーと同じスタイル） */}
          <div className="absolute bottom-8 right-8 text-right flex items-center gap-3">
            {/* シンボルマーク */}
            <div className="relative w-10 h-10">
              {/* 画像はヘッダーと同じパスを利用 */}
              <img src="/images/logo.png" alt="AI REBOOT" className="object-contain w-10 h-10" />
            </div>
            {/* テキスト */}
            <span className="text-2xl font-light tracking-wider text-white">
              AI
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 ml-2">
                REBOOT
              </span>
            </span>
          </div>
        </div>

        {/* 使用方法 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold mb-2">スクリーンショットの撮り方：</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Command + Shift + 4 + Space でウィンドウ選択</li>
            <li>上のプレビュー枠をクリック</li>
            <li>保存した画像をOGPに設定</li>
          </ol>
        </div>
      </div>
    </div>
  )
}