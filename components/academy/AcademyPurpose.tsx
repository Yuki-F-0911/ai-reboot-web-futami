"use client";

import { motion } from "framer-motion";

export const AcademyPurpose = () => {
  const purposes = [
    {
      number: "1",
      title: '"生成AIの時代"を生き抜く思考OSをインストールする',
      description: "変化し続ける時代に適応できる思考の基盤を構築"
    },
    {
      number: "2",
      title: "最先端の生成AI活用スキルと今後進化しつづける生成AI活用をしつづけられるマインドとスキルを身につける",
      description: "今だけでなく、未来も見据えた持続的な成長"
    },
    {
      number: "3",
      title: "単なるAIスキル習得にとどまらず、「Will（自分の意志）」を軸に、自ら課題を設定・解決できる人材になるための実践型リスキリングプログラム",
      description: "技術だけでなく、自己実現の力を獲得"
    }
  ];

  return (
    <section className="section-spacing bg-depth-50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-will-gradient bg-clip-text text-transparent">
              プログラムの目的
            </span>
          </h2>
          
          <div className="space-y-6">
            {purposes.map((purpose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-will-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {purpose.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-depth-900 mb-2">
                      {purpose.title}
                    </h3>
                    <p className="text-depth-700">
                      {purpose.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};