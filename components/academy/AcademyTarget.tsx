"use client";

import { motion } from "framer-motion";

export const AcademyTarget = () => {
  const targets = [
    "生成AI活用スキルを活かして、キャリアアップをしたい人",
    "生成AIによる社会の変化の中で、自分も何かをしなくてはいけないと感じている人",
    "今の自分の現状に不満やモヤモヤを感じている人",
    "これからの働き方・キャリアを\"AI時代の前提\"で考えたい人",
    "AIスキルを身に付けたいし、それ以上に自分の価値を高めたい人"
  ];

  return (
    <section className="section-spacing">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-will-gradient bg-clip-text text-transparent">
              特にオススメしている対象者
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-will-lighter via-white to-wisdom-lighter rounded-3xl p-8 md:p-12 shadow-elevated">
            <div className="space-y-4">
              {targets.map((target, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-will-gradient rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-depth-800 leading-relaxed">
                    {target}
                    {index === targets.length - 1 && (
                      <span className="font-bold text-will-primary">（特に重要）</span>
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};