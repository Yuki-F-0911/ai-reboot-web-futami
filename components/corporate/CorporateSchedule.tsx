"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateSchedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            実施期間とスケジュール
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-depth-100 to-white rounded-3xl p-10 shadow-elevated">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <h3 className="text-xl font-bold text-harmony mb-3">プログラム全体期間</h3>
                <p className="text-2xl font-bold text-depth-800">6ヶ月間</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <h4 className="font-bold text-will-primary mb-2">初回研修</h4>
                  <p className="text-depth-700">
                    プログラム1〜2日目の2日間で開催
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <h4 className="font-bold text-wisdom mb-2">実践期間</h4>
                  <p className="text-depth-700">
                    初回研修後から6ヶ月間<br />
                    （オンライン講座学習の開催および伴走型開発支援を実施）
                  </p>
                </div>
              </div>
              
              <div className="bg-harmony-lighter rounded-2xl p-8">
                <h4 className="font-bold text-depth-800 mb-2">最終成果発表会（3時間）</h4>
                <p className="text-depth-700">
                  プログラム開始6ヶ月後を目処に開催
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};