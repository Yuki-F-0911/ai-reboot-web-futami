"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateProblem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 leading-[1.3] tracking-tight">
            なぜ、多くの企業の
            <br className="md:hidden" />
            AI導入は失敗するのか？
          </h2>
        </motion.div>
        
        {/* コンパクトに1つにまとめる */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-elevated border border-depth-100">
            <p className="text-base md:text-lg text-depth-700 leading-[1.8] mb-6">
              多くの企業がAI導入で直面する課題は、単なる知識不足やツールの未経験だけではありません。
              <span className="text-harmony font-bold">根本的なマインドセットの転換</span>と、<span className="text-will-primary font-bold">組織全体への浸透</span>が伴わなければ、
              AI導入は一時的な取り組みで終わってしまいます。
            </p>
            <div className="pt-6 border-t border-depth-200">
              <p className="text-lg md:text-xl text-depth-800 leading-[1.7] font-semibold">
                AIリブート研修は、表面的なツールの使い方ではなく、
                <span className="text-harmony font-bold">思考のOSを書き換え、組織全体がAI時代に適応する力</span>を養成する実践プログラムです。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};