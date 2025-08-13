'use client'

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PersonalizedCTA, PersonalizedMessage } from '@/components/home/PersonalizedContent'
import { usePersonalization } from '@/contexts/PersonalizationContext'
import Image from 'next/image'

// 吹き出し輪郭を「接線方向の短い矩形（均一）」で構成（中心方向に見えにくい）
function BurstOutline({ count = 120, dash = 6, thickness = 2, offset = 1 }: { count?: number; dash?: number; thickness?: number; offset?: number }) {
  const cx = 50
  const cy = 50
  // 楕円は使わず、歪みを避けるため円で生成
  const rx = 40
  const ry = 40
  const indices = Array.from({ length: count }, (_, i) => i)
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      {indices.map((i) => {
        const t = (i / count) * Math.PI * 2
        const px = cx + rx * Math.cos(t)
        const py = cy + ry * Math.sin(t)
        // 外向き法線（位置のわずかな外側オフセットに使用）
        let nx = (px - cx) / (rx * rx)
        let ny = (py - cy) / (ry * ry)
        const nLen = Math.hypot(nx, ny) || 1
        nx /= nLen
        ny /= nLen
        // 接線ベクトル（矩形の長辺方向）
        const tx = -rx * Math.sin(t)
        const ty =  ry * Math.cos(t)
        const tLen = Math.hypot(tx, ty) || 1
        const ux = tx / tLen
        const uy = ty / tLen
        // 矩形中心を輪郭のわずか外側へ
        const cxr = px + nx * offset
        const cyr = py + ny * offset
        const w = dash
        const h = thickness
        const x = cxr - w / 2
        const y = cyr - h / 2
        const rotate = (Math.atan2(uy, ux) * 180) / Math.PI
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx={h / 2}
            ry={h / 2}
            fill="currentColor"
            className="text-black/90"
            transform={`rotate(${rotate} ${cxr} ${cyr})`}
          />
        )
      })}
    </svg>
  )
}

export default function FinalChapter() {
  // PersonalizationContextを使用
  const personalizationData = usePersonalization()
  const userName = personalizationData?.data?.userName || 'あなた'
  
  // 長い名前は省略表示（視覚の収まり改善）
  const displayName = useMemo(() => {
    const max = 12
    if (!userName) return 'あなた'
    return userName.length > max ? `${userName.slice(0, max)}…` : userName
  }, [userName])
  
  return (
    <section className="relative min-h-screen px-6 md:px-8 pt-24 md:pt-32 pb-0 overflow-hidden">

      
      {/* 上部コンテンツ用背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-purple-50 to-purple-50/50 -z-10" />
      
      <div className="relative z-30 max-w-xl mx-auto">
        {/* 章番号 - 縦書き風 */}
        <motion.div 
          className="flex items-center gap-8 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-purple-400 tracking-wider" style={{ writingMode: 'vertical-rl' }}>
              FINAL
            </span>
            <span className="text-sm text-purple-400 tracking-wider mt-2">CHAPTER</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.08em',
              lineHeight: '1.6'
            }}>
              選ぶのは、{userName}だ
            </h2>
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* 導入（左アンカー・ネームチップで視線集中） */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mx-auto md:mx-0 md:max-w-[85%]"
          >
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-purple-300 to-indigo-300" />
              <p className="text-left text-xl md:text-2xl text-gray-900 font-medium tracking-wide" style={{
                fontFamily: '"Noto Serif JP", serif',
                lineHeight: '1.8',
                letterSpacing: '0.06em'
              }}>
                ここまで読んでくれた、
                <span className="align-middle inline-flex items-center mx-2 px-3 py-1 rounded-full border border-indigo-100/60 bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-900 shadow-sm">
                  {displayName}
                </span>
                へ。
              </p>
            </div>
          </motion.div>

          {/* パーソナライズされたメッセージ */}
          <PersonalizedMessage>
            {/* 気づき */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
            <p className="text-base md:text-lg text-gray-600" style={{
              fontFamily: '"Noto Sans JP", sans-serif',
              letterSpacing: '0.08em',
              lineHeight: '2'
            }}>
              たぶん、あなたは、もう気づいている。<br />
              AIに仕事を奪われる人間と、<br />
              AIを最高の相棒にする人間の、<br />
              決定的な違いを。
            </p>
            <p className="text-lg md:text-xl text-gray-800 font-medium" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.1em',
              lineHeight: '2'
            }}>
              それは、自分の「なぜ」を知っているかどうか。<br />
              つまり、何のために生きて、何のために働いているのか。<br />
              自分の「Will」に正直かどうか。
            </p>
            </motion.div>
          </PersonalizedMessage>

          {/* 我々について */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-y border-gray-200 py-12 text-center"
          >
            <p className="text-lg md:text-xl text-gray-800 font-medium">
              我々は、その「Will」を一緒に見つける、<br />
              小さな秘密基地です。
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-6">
              経済産業省認定で、最大70%の受講料支援。
            </p>
          </motion.div>

          {/* 投資について（左アンカー） */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative mx-auto md:mx-0 md:max-w-[85%]"
          >
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-indigo-300 to-purple-300" />
              <p className="text-left text-base md:text-lg text-gray-700" style={{
                fontFamily: '"Noto Sans JP", sans-serif',
                letterSpacing: '0.08em',
                lineHeight: '2'
              }}>
                でも、本当の投資は、あなた自身との時間。<br />
                もし、ピンと来たら。<br />
                まずは、あなたの「なぜ」を、聞かせてください。
              </p>
            </div>
          </motion.div>

          {/* リアルな体験（左アンカー） */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative mx-auto md:mx-0 md:max-w-[85%]"
          >
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-indigo-300 to-purple-300" />
              <p className="text-left text-lg md:text-xl text-gray-900 font-medium">
                うまい話も、正解も、ここにはありません。
              </p>
              <div className="space-y-4 mt-4">
                <p className="text-left text-base md:text-lg text-gray-600" style={{
                  fontFamily: '"Noto Sans JP", sans-serif',
                  letterSpacing: '0.08em',
                  lineHeight: '2'
                }}>
                  あるのは、あなたの物語を面白がる、最高の聞き手。<br />
                  そして、毎日AIと新しい可能性を探っている、現役の実践者たち。
                </p>
                <p className="text-left text-base md:text-lg text-gray-600" style={{
                  fontFamily: '"Noto Sans JP", sans-serif',
                  letterSpacing: '0.08em',
                  lineHeight: '2'
                }}>
                  「それ、私も悩んだなぁ」と共感しながら、<br />
                  「こんな使い方もあるよ」と、実例を見せてくれる。
                </p>
                <p className="text-left text-lg md:text-xl text-gray-800 font-medium mt-6">
                  理論じゃない、リアルな体験の共有が、ここにあります。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 上部スペーサー */}
          <div className="h-20 md:h-24" />

          {/* CTAセクション全体のコンテナ */}
          <div className="mt-32 md:mt-40">
            {/* 吹き出し用のスペーサー */}
            <div className="h-20 md:h-24" />
            
            {/* CTA（背景画像 + 吹き出し） */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* フルブリード背景（モバイル2:3、PC4:3アスペクト比） */}
              <div className="relative left-1/2 -translate-x-1/2 w-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-rose-50">
                {/* モバイル用画像（2:3） */}
                <div className="md:hidden relative w-full aspect-[2/3]">
                  <Image
                    src="/images/final-cta-bg-mb.webp"
                    alt="希望へ続く風景の縦長イラスト"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                {/* PC用画像（4:3） */}
                <div className="hidden md:block relative w-full aspect-[4/3] max-w-[1920px] mx-auto">
                  <Image
                    src="/images/final-cta-bg.webp"
                    alt="希望へ続く風景の横長イラスト"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                {/* 暗すぎる/明るすぎる場合の保険的オーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/15" />
                
                {/* 上部境界のグラデーションマスク（セクション背景色から透明へ） */}
                <div className="absolute inset-x-0 top-0 h-[35%] md:h-[40%] bg-gradient-to-b from-purple-50 to-transparent pointer-events-none" />

                {/* 吹き出し */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-32 md:-top-40 z-30">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="relative" style={{ padding: '2px' }}>
                    {/* 吹き出し本体（白地） */}
                    <div
                      className="relative bg-white/50 backdrop-blur-md shadow-xl"
                      style={{ borderRadius: '50% / 50%', padding: '48px 56px' }}
                    >
                      {/* 輪郭ダッシュ（SVG）: 接線方向ダッシュを円で生成→縦のみスケール */}
                      <div className="absolute inset-3 md:inset-4 pointer-events-none z-0">
                        <svg className="w-full h-full" viewBox="0 0 600 600" preserveAspectRatio="none" aria-hidden style={{ overflow: 'visible' }}>
                          <g transform="translate(300 300) scale(1.72 1.56)" shape-rendering="crispEdges">
                            {Array.from({ length: 600 }, (_, i) => {
                              const t = (i / 301) * Math.PI * 2
                              const radius = 194
                              const dashLength = 0.7
                              const baseStrokeWidth = 20
                              const tx = -Math.sin(t)
                              const ty = Math.cos(t)
                              const px = Math.cos(t) * radius
                              const py = Math.sin(t) * radius
                              // 外向きに半分はみ出し＋自然なばらつき（緩やか）
                              const nx = Math.cos(t)
                              const ny = Math.sin(t)
                              const widthMod = 0.8 + 0.6 * (0.5 + 0.5 * Math.sin(i * 1.77))
                              const strokeWidth = baseStrokeWidth * widthMod
                              const radialOffset = strokeWidth * 0.55
                              const cxn = px + nx * radialOffset
                              const cyn = py + ny * radialOffset
                              const halfDash = dashLength / 2
                              const x1 = cxn - tx * halfDash
                              const y1 = cyn - ty * halfDash
                              const x2 = cxn + tx * halfDash
                              const y2 = cyn + ty * halfDash
                              return (
                                <line
                                  key={i}
                                  x1={x1}
                                  y1={y1}
                                  x2={x2}
                                  y2={y2}
                                  stroke="#000"
                                  strokeWidth={strokeWidth}
                                  strokeLinecap="butt"
                                  vectorEffect="non-scaling-stroke"
                                />
                              )
                            })}
                          </g>
                        </svg>
                      </div>
                      <p
                        className="relative z-10 text-gray-800 font-medium"
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'upright',
                          fontFamily: '"Noto Sans JP", sans-serif',
                          letterSpacing: '0.14em',
                          lineHeight: '2.1',
                          whiteSpace: 'nowrap',
                          fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)'
                        }}
                      >
                        今、動き出そう
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>

              {/* ここでの独立CTAブロックは背景内に移動済み */}
            </motion.div>
          </div>

          {/* 締めくくりセクション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-32 md:mt-40 text-center pb-24 md:-mx-24"
          >
            <p className="text-2xl md:text-3xl text-gray-800 font-medium mb-8" style={{
              fontFamily: '"Noto Serif JP", serif',
              letterSpacing: '0.12em',
              lineHeight: '1.8'
            }}>
              あなたの「Will」が、<br className='md:hidden' />静かに待っている。
            </p>
            
            {/* パーソナライズCTA */}
            <div className="mb-8 text-gray-600 text-base md:text-lg">
              <PersonalizedCTA />
            </div>
            
            {/* CTAボタン */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mx-auto">
              {/* 無料説明会申し込みボタン（プライマリ） */}
              <Link
                href={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || '/academy#application'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 text-lg font-medium rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 tracking-wide"
              >
                無料説明会を申し込む
              </Link>
              
              {/* AIリブートアカデミー詳細ボタン（セカンダリ） */}
              <Link
                href="/academy"
                className="w-full md:w-auto inline-block border-2 border-indigo-600 text-indigo-600 px-10 py-5 text-lg font-medium rounded-xl hover:bg-indigo-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 tracking-wide"
              >
                AIリブートアカデミー詳細
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}