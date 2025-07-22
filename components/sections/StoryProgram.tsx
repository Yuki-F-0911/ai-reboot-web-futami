"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const StoryProgram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="container-section">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            {/* 章タイトル */}
            <div className="mb-16 text-center">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "4rem" } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-will-gradient mx-auto mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-depth-800">
                第三章：AIリブートという解決策
              </h2>
            </div>
            
            {/* 導入文 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-center text-depth-700 mb-16 max-w-3xl mx-auto"
            >
              AIリブートは、企業と個人をAIによってアップデートし、
              イノベーションを起こすための実践的プログラムです。
            </motion.p>
            
            {/* 三段構成の説明 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-center mb-12 text-depth-800">
                座学＋実践＋伴走型OJTの三段構成
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-will-gradient rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    1
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-depth-800">座学</h4>
                  <p className="text-depth-600">AIの基礎知識と<br />活用方法を学ぶ</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-will-gradient rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    2
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-depth-800">実践</h4>
                  <p className="text-depth-600">実際の業務で<br />AIを活用する</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-will-gradient rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    3
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-depth-800">伴走</h4>
                  <p className="text-depth-600">メンターが<br />完成まで支援</p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* CTAボタン */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <p className="text-lg text-depth-700 mb-8">
                詳しいプログラム内容は、それぞれの専用ページでご確認ください
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/corporate" className="group">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-will-gradient text-white font-bold rounded-2xl shadow-elevated hover:shadow-floating transition-all duration-300 min-w-[280px]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      法人向けプログラム
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>
                </a>
                
                <a href="/academy" className="group">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-will-primary font-bold rounded-2xl border-2 border-will-primary shadow-soft hover:shadow-elevated transition-all duration-300 min-w-[280px]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      個人向けプログラム
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};