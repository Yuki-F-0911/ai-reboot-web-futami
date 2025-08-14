"use client";

import { motion } from "framer-motion";

export const AcademyPurpose = () => {
  const purposes = [
    {
      number: "01",
      title: "生成AI時代の思考OSをインストール",
      description: "変化し続ける時代に適応できる思考の基盤を構築します"
    },
    {
      number: "02",
      title: "持続的な成長マインドセット",
      description: "今だけでなく、未来も見据えた継続的な学習能力を身につけます"
    },
    {
      number: "03",
      title: "Will（意志）を軸にした自己実現",
      description: "技術習得を超えて、自ら課題を設定・解決できる人材へ"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-depth-50/50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-20%" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-depth-900 mb-16">
            プログラムの目的
          </h2>
          
          <div className="space-y-10 max-w-3xl mx-auto">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-20%" }}
                className="flex gap-6 items-start bg-white/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-depth-100/50 hover:shadow-soft transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-will-primary/20 to-wisdom/20 rounded-xl flex items-center justify-center text-will-primary font-mono text-sm font-bold border border-will-primary/30">
                  {purpose.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-depth-900 mb-3">
                    {purpose.title}
                  </h3>
                  <p className="text-depth-600 leading-relaxed text-base md:text-lg">
                    {purpose.description}
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