"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const StoryChapter1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  return (
    <section ref={ref} className="py-32 bg-white">
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
                className="h-1 bg-will-gradient mx-auto mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-depth-800">
                第一章：変革の必然性
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
                AIの急速な進化は既存の常識を大きく変え、企業がAIを活用せずに成長を続けることは困難な時代になりました。
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-depth-700 leading-relaxed mb-8 text-lg"
              >
                多くの企業が変革を求められる中で、私たちウィルフォワードは特に
                <span className="font-bold text-will-primary">「成長の可能性が縮小し、変革を必要とする企業」</span>
                を重点的に支援しています。
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gradient-to-r from-will-lighter to-wisdom-lighter p-8 rounded-3xl my-12"
              >
                <h3 className="text-2xl font-bold text-depth-800 mb-4">
                  私たちが解決する課題
                </h3>
                <ul className="space-y-3 text-depth-700">
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span>顧客への価値提供の再定義</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span>AI時代の人材採用と育成</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span>組織文化の根本的な変革</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};