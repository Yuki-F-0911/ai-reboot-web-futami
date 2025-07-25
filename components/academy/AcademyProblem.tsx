"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AcademyProblem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const problems = [
    "AIの進化についていけるか不安",
    "今の仕事がAIに奪われるのではないか",
    "何から学べばいいのか分からない",
    "独学では限界を感じている",
    "自分の強みや方向性が見えない",
    "キャリアチェンジを考えているが踏み出せない"
  ];
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-depth-50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-depth-800">
            AI時代に感じる不安と焦り
          </h2>
          
          <p className="text-lg md:text-xl text-depth-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            AIの進化は想像を超え、たった半年でエンジニアが「安定職」から「リスク職」へ変わる時代です。<br />
            あなたもこんな悩みはありませんか？
          </p>
          
          {/* 悩みリスト */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 text-left">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-elevated hover:border-will-primary/20 border border-depth-100 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-will-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-depth-700">
                    {problem}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* メッセージ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-will-primary/10 to-will-secondary/10 rounded-3xl p-10 shadow-soft max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-3xl font-bold text-depth-800">
              その不安、AIリブートアカデミーが
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-will-primary to-will-secondary"> 希望 </span>
              に変えます。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};