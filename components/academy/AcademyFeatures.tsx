"use client";

import { motion } from "framer-motion";

export const AcademyFeatures = () => {
  const features = [
    {
      title: "マルチ生成AI活用",
      description: "ChatGPT、Claude、Geminiなど、最新のAIツールを実践的に習得。特定のツールに依存しない、本質的な活用力を身につけます。"
    },
    {
      title: "伴走型支援",
      description: "専門メンターが一人ひとりの成長に寄り添い、個別最適化された学習をサポート。挫折させない仕組みがあります。"
    },
    {
      title: "思考のアップデート",
      description: "技術習得だけでなく、AI時代に必要な思考法を体得。変化し続ける時代に適応する力を養います。"
    },
    {
      title: "問いを中心とした学び",
      description: "答えを教えるのではなく、本質的な問いを共に探究。自ら考え、創造する力を育みます。"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-depth-50/30 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-depth-900 mb-16">
            プログラムの特徴
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-20%" }}
              >
                <h3 className="text-xl font-semibold text-depth-900 mb-3 relative inline-block">
                  {feature.title}
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "3rem" }}
                    transition={{ duration: 0.5, delay: index * 0.05 + 0.15 }}
                    viewport={{ once: true, margin: "-20%" }}
                    className="absolute -bottom-1 left-0 h-0.5 bg-will-primary" 
                  />
                </h3>
                <p className="text-depth-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};