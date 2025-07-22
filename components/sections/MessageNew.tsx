"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const MessageNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const reasons = [
    {
      number: "1",
      title: "AIスキルが「特別」から「必須」へ",
      description: "2025年までに、ビジネスパーソンの70%以上がAIツールを日常的に使用すると予測されています。もはやAIは特別なスキルではなく、ExcelやEmailと同じ基本スキルになりつつあります。",
      icon: "📊"
    },
    {
      number: "2", 
      title: "仕事の本質が変わる",
      description: "定型的な作業はAIが担当し、人間にはより創造的で戦略的な仕事が求められます。今こそ、自分の強みとWillを明確にし、AIと協働する新しい働き方を身につける時です。",
      icon: "🚀"
    },
    {
      number: "3",
      title: "先行者利益の獲得",
      description: "AIを早期に活用し始めた個人・企業は、圧倒的な生産性向上と新たな価値創造を実現しています。今始めることで、あなたも先行者利益を獲得できます。",
      icon: "💡"
    }
  ];
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container-section">
        {/* イントロダクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            AI時代、あなたはどう生きますか？
          </h2>
          <p className="text-lg md:text-xl text-depth-700 leading-relaxed mb-4">
            ChatGPTの登場により、世界は大きく変わりました。<br />
            AIが当たり前になる社会で、私たちに問われているのは<br />
            「どうAIを使うか」ではなく「なぜ使うのか」「何を実現したいのか」。
          </p>
          <p className="text-lg md:text-xl text-depth-700 leading-relaxed mb-4">
            AIリブートは、あなたの内なるWill（意思）を明確にし、<br />
            AIを最大限に活用して、ウェルビーイングな未来を実現するプログラムです。
          </p>
          <p className="text-lg md:text-xl text-depth-700 font-semibold">
            単なるツールの使い方を学ぶのではありません。<br />
            あなたが本当に実現したい未来に向かって、<br />
            AIと共に新しい一歩を踏み出すための、実践的な学びの場です。
          </p>
        </motion.div>
        
        {/* 3つの理由 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-h2 md:text-4xl font-bold text-center mb-16 text-depth-800">
            今、行動しなければ取り残される3つの理由
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-will-lighter to-white p-8 rounded-3xl shadow-soft hover:shadow-elevated transition-all duration-300 h-full">
                  {/* 番号とアイコン */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-will-gradient rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-glow">
                      {reason.number}
                    </div>
                    <span className="text-4xl">{reason.icon}</span>
                  </div>
                  
                  {/* タイトル */}
                  <h4 className="text-xl font-bold mb-4 text-depth-800">
                    {reason.title}
                  </h4>
                  
                  {/* 説明 */}
                  <p className="text-depth-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};