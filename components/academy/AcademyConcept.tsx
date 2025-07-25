"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AcademyConcept = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const points = [
    {
      title: "産業革命級の変化",
      description: "農業革命、産業革命に匹敵するAI革命が今、起きています。",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "ホワイトカラーの危機",
      description: "高給取りから順番にAIに置き換わる現実があります。",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-depth-50 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-depth-800">
            なぜ、今変わる必要があるのか
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-depth-700 font-medium italic">
              「大切な変わらないもののために、変わらなきゃいけない。」
            </p>
            <p className="text-lg md:text-xl text-depth-600 mt-4">
              私たちはAIを学び、生き方を変えます。
            </p>
          </div>
          
          {/* ポイントカード */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-soft border border-depth-100"
              >
                <div className="flex items-start gap-4">
                  <div className="text-will-primary">{point.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-depth-800">{point.title}</h3>
                    <p className="text-depth-600">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* 人間の価値についての説明 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-will-primary/5 to-will-secondary/5 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-depth-800">
              人間にやってほしい仕事の価値
            </h3>
            <p className="text-lg text-depth-700 leading-relaxed">
              AIができても、人間にやってほしい。そこに「意味」がある仕事が残ります。
              例えば、銀座の寿司職人が握る寿司。AIが物理的に全く同じ寿司を握れたとしても、
              僕らにとっては同じじゃない。そこに「意味」が生まれるのです。
              人が人のためにする仕事の価値。これからの時代、その違いがもっと大切になっていくでしょう。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};