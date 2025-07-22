"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const StoryChapter2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-depth-100 to-white">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
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
                className="h-1 bg-harmony-gradient mx-auto mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-depth-800">
                第二章：私たちの哲学
              </h2>
            </div>
            
            {/* 本文 */}
            <div className="prose prose-lg max-w-none">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-depth-700 leading-relaxed mb-8 text-lg"
              >
                ウィルフォワードはAIを単なるツールとして教えるのではありません。
                AIが当たり前になった社会で、私たちは問いかけます。
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="my-16 text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-depth-800 mb-8">
                  三つの問い
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-2xl shadow-soft">
                    <div className="flex justify-center mb-4">
                      <svg className="w-10 h-10 text-harmony" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="font-bold text-depth-800">
                      企業として<br />どうあるべきか
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-soft">
                    <div className="flex justify-center mb-4">
                      <svg className="w-10 h-10 text-will-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="font-bold text-depth-800">
                      どのように<br />働くべきか
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-soft">
                    <div className="flex justify-center mb-4">
                      <svg className="w-10 h-10 text-wisdom" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-bold text-depth-800">
                      どんな価値を<br />社会に生み出すか
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-depth-700 leading-relaxed mb-8 text-lg"
              >
                創業以来、私たちは
                <span className="font-bold text-harmony">「個人や企業の意思（ウィル）を尊重し、未来を創る」</span>
                という信念を持ち続けています。
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-harmony-lighter to-will-lighter p-10 rounded-3xl text-center"
              >
                <p className="text-3xl font-bold bg-will-gradient bg-clip-text text-transparent">
                  AIと人類が共存する未来
                </p>
                <p className="text-depth-700 mt-4">
                  それが、私たちが目指す世界です。
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};