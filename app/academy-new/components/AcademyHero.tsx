"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easings, transitions } from "../lib/animations";
import { GlitchEffect } from "./effects/GlitchEffect";
import NoiseGlitch from "./effects/NoiseGlitch";
import QuietParticles from "./effects/QuietParticles";

export function AcademyHero() {
  const [showText, setShowText] = useState(false);
  const [textPhase, setTextPhase] = useState(0);
  const [showGlitch, setShowGlitch] = useState(false);
  const [noiseIntensity, setNoiseIntensity] = useState(0.8);

  useEffect(() => {
    // 初期の間を作る
    const timer1 = setTimeout(() => setShowText(true), 800);
    const timer2 = setTimeout(() => setTextPhase(1), 2800);
    const timer3 = setTimeout(() => setTextPhase(2), 4800);
    const timer4 = setTimeout(() => setShowGlitch(true), 5600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // テキストが完全に表示されたらノイズを徐々に減らす
  useEffect(() => {
    if (textPhase === 2) {
      const timer = setTimeout(() => {
        setNoiseIntensity(0.3);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [textPhase]);

  const scrollToContent = () => {
    const prologueSection = document.getElementById("prologue");
    prologueSection?.scrollIntoView({ behavior: "smooth" });
  };

  // 文字を分割してアニメーション
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10, rotateX: -45 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.03,
          ease: easings.smoothOut,
        }}
        style={{ display: "inline-block", transformStyle: "preserve-3d" }}
      >
        {char}
      </motion.span>
    ));
  };

  // サブコピーのアニメーション
  const fadeInUp = {
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { 
      delay: 0.8, 
      duration: 1.2,
      ease: easings.smoothOut
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* パーティクルエフェクト */}
      <QuietParticles />
      
      {/* ノイズグリッチエフェクト */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <NoiseGlitch intensity={noiseIntensity} />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {showText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: easings.smoothOut }}
            >
              <GlitchEffect isActive={showGlitch && textPhase === 2}>
                <motion.h1 
                  className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mix-blend-difference"
                  style={{ 
                    perspective: "1000px",
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {textPhase === 0 && (
                      <motion.span
                        key="phase0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: easings.smoothOut }}
                      >
                        {splitText("明日も、")}
                      </motion.span>
                    )}
                    {textPhase === 1 && (
                      <motion.span
                        key="phase1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: easings.smoothOut }}
                      >
                        {splitText("明日も、今日と同じで")}
                      </motion.span>
                    )}
                    {textPhase === 2 && (
                      <motion.span
                        key="phase2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: easings.smoothOut }}
                      >
                        {splitText("明日も、今日と同じでいいですか？")}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.h1>
              </GlitchEffect>
              
              {textPhase === 2 && (
                <motion.div
                  className="mt-12 space-y-2"
                  {...fadeInUp}
                >
                  <motion.p
                    className="text-xl md:text-2xl text-white font-medium mix-blend-difference"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    style={{
                      textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    AIと出会い、あなたの
                    <motion.span 
                      className="text-amber-300 mx-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5, duration: 0.6 }}
                      style={{
                        textShadow: "0 0 20px rgba(251, 191, 36, 0.8)",
                      }}
                    >
                      「Will」
                    </motion.span>
                    が動き出す。
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* スクロールインジケーター */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: textPhase === 2 ? 1 : 0,
          y: textPhase === 2 ? 0 : 20,
        }}
        transition={{ 
          delay: 2, 
          duration: 0.8,
          ease: easings.smoothOut
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: easings.smoothOut
          }}
          className="flex flex-col items-center text-gray-400 group-hover:text-white transition-colors duration-300"
        >
          <span className="text-sm mb-2 tracking-wider">scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <motion.path 
              d="M12 5v14M19 12l-7 7-7-7" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 2.5, ease: easings.smoothOut }}
            />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}