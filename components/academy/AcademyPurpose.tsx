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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-depth-900 mb-16">
            プログラムの目的
          </h2>
          
          <div className="space-y-8">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-will-primary/10 to-wisdom/10 rounded-lg flex items-center justify-center text-will-primary font-mono text-sm font-semibold border border-will-primary/20">
                  {purpose.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-depth-900 mb-2">
                    {purpose.title}
                  </h3>
                  <p className="text-depth-600 leading-relaxed">
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