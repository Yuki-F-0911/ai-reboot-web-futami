'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Prologue() {
  return (
    <section className="relative section-padding px-6 md:px-8 overflow-hidden bg-black">
      {/* 序章: 完全な闇からマゼンタ寄りの深い藍色へ */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#2A1A3A] to-[#6B3A5C]" />
      </div>
      
      {/* シンプルな星の演出 */}
      <div className="absolute inset-0 z-14 pointer-events-none">
        {/* 小さな星 - 僅かなblur */}
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white/50 rounded-full animate-pulse blur-[0.5px]" />
        <div className="absolute top-[20%] left-[35%] w-1 h-1 bg-white/40 rounded-full animate-pulse blur-[0.5px]" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[15%] left-[55%] w-1 h-1 bg-white/60 rounded-full animate-pulse blur-[0.5px]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[25%] left-[75%] w-1 h-1 bg-white/50 rounded-full animate-pulse blur-[0.5px]" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[30%] left-[85%] w-1 h-1 bg-white/40 rounded-full animate-pulse blur-[0.5px]" style={{ animationDelay: '1.5s' }} />
        
        <div className="absolute top-[35%] left-[25%] w-1 h-1 bg-white/30 rounded-full animate-pulse blur-[0.5px]" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[40%] left-[45%] w-1 h-1 bg-white/50 rounded-full animate-pulse blur-[0.5px]" />
        <div className="absolute top-[45%] left-[65%] w-1 h-1 bg-white/40 rounded-full animate-pulse blur-[0.5px]" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[38%] left-[10%] w-1 h-1 bg-white/30 rounded-full animate-pulse blur-[0.5px]" style={{ animationDelay: '3s' }} />
        
        {/* 少し大きめの星 - 少し強めのblur */}
        <div className="absolute top-[12%] left-[70%] w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse blur-[1px]" />
        <div className="absolute top-[28%] left-[40%] w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse blur-[1px]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[50%] left-[80%] w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse blur-[1px]" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-30 max-w-xl mx-auto">
        {/* 横書きタイトル - 控えめに左寄せ */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-base md:text-lg text-white/40 mb-2"
            style={{ 
              fontFamily: '"Noto Serif JP", serif',
              fontWeight: '300',
              letterSpacing: '0.3em'
            }}
          >
            序章
          </h2>
          <p 
            className="text-xl md:text-2xl text-white/60"
            style={{ 
              fontFamily: '"Noto Serif JP", serif',
              fontWeight: '300',
              letterSpacing: '0.15em',
              lineHeight: '1.8'
            }}
          >
            その違和感が、はじまりのサイン
          </p>
        </motion.div>
        
        {/* 本文 - 読書的なレイアウト */}
        <div>
            <div className="space-y-14">
              <motion.p
                className="text-lg md:text-xl text-white/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ 
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '300',
                  letterSpacing: '0.12em',
                  lineHeight: '2.2'
                }}
              >
                世界の変化とか、未来の不安とか、<br />
                そういう大きな話は、もう聞き飽きた。
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p 
                  className="text-lg md:text-xl text-white/85 mb-3"
                  style={{ 
                    fontFamily: '"Noto Sans JP", sans-serif',
                    fontWeight: '400',
                    letterSpacing: '0.12em',
                    lineHeight: '2.2'
                  }}
                >
                  問題は、いつだって、私自身に、あなた自身の中にある。
                </p>
                <p 
                  className="text-lg md:text-xl text-white/75"
                  style={{ 
                    fontFamily: '"Noto Sans JP", sans-serif',
                    fontWeight: '300',
                    letterSpacing: '0.12em',
                    lineHeight: '2.2'
                  }}
                >
                  それは、一人ひとりの小さな叫びだ。
                </p>
              </motion.div>

              <motion.div 
                className="pl-6 border-l-2 border-white/10 space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <p className="text-base md:text-lg text-white/60" style={{ 
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '300',
                  letterSpacing: '0.1em',
                  lineHeight: '2'
                }}>
                  仕事の合間にふと感じる「もっと違う方法があるはず」
                </p>
                <p className="text-base md:text-lg text-white/60" style={{ 
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '300',
                  letterSpacing: '0.1em',
                  lineHeight: '2'
                }}>
                  会議中に浮かぶ「本当はこうしたい」
                </p>
                <p className="text-base md:text-lg text-white/60" style={{ 
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '300',
                  letterSpacing: '0.1em',
                  lineHeight: '2'
                }}>
                  帰り道の「明日も同じなのか」という、ため息。
                </p>
              </motion.div>

              <motion.div
                className="py-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <p 
                  className="text-lg md:text-xl text-white/85"
                  style={{ 
                    fontFamily: '"Noto Serif JP", serif',
                    fontWeight: '300',
                    letterSpacing: '0.15em',
                    lineHeight: '2.4'
                  }}
                >
                  その小さな違和感の中にこそ、<br />
                  あなたの「<span className="text-white/95" style={{ fontWeight: '400' }}>Will</span>」−本当の意志−が眠っている。
                </p>
              </motion.div>
              
              <motion.p
                className="text-lg md:text-xl text-white/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                viewport={{ once: true }}
                style={{ 
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: '300',
                  letterSpacing: '0.12em',
                  lineHeight: '2.2'
                }}
              >
                AIという時代の大きな変化が、<br />
                それを浮き彫りにし始めている。
              </motion.p>

              {/* 夜明けの演出 - 詩的な締めくくり */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.3 }}
                viewport={{ once: true }}
                className="relative mt-24 pt-24 border-t border-white/5"
              >
                <div className="space-y-12">
                  <p 
                    className="text-white/80 text-xl md:text-2xl"
                    style={{ 
                      fontFamily: '"Noto Serif JP", serif',
                      fontWeight: '300',
                      letterSpacing: '0.18em',
                      lineHeight: '2.8'
                    }}
                  >
                    静かな革命は<br />
                    何時も夜明け前に始まる
                  </p>
                  <p 
                    className="text-white/70 text-xl md:text-2xl"
                    style={{ 
                      fontFamily: '"Noto Serif JP", serif',
                      fontWeight: '300',
                      letterSpacing: '0.18em',
                      lineHeight: '2.8'
                    }}
                  >
                    暗いうちに動き出すものが、<br />
                    朝日を味方にする。
                  </p>
                </div>
              </motion.div>
            </div>
        </div>
      </div>
    </section>
  )
}