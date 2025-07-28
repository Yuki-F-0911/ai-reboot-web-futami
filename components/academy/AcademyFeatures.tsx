"use client";

import { motion } from "framer-motion";

export const AcademyFeatures = () => {
  const features = [
    {
      title: "マルチ生成AI活用",
      description: "生成AIは常にものすごいスピードで進化するため特定のツールに限定せずに、ChatGPT、gemini、NotebookLM、Whisk、Canva、Claude、Claude Code、dify、n8n、notion、Obsidian、GitHub、Sunoなどをはじめ、その時点で最先端で最も活用するのに実用的なツールの選択をします。",
      icon: "🤖",
      gradient: "from-will-primary to-will-secondary"
    },
    {
      title: "伴走型支援",
      description: "受講生一人ひとりにメンターが伴走し、自分に必要なスキルやテーマを選びながら実践を積む。",
      icon: "🤝",
      gradient: "from-wisdom to-harmony"
    },
    {
      title: "生成AIスキルの体得と思考のアップデートの両立",
      description: "技術だけでなく、その学び方を学ぶ。",
      icon: "🧠",
      gradient: "from-harmony to-will-secondary"
    },
    {
      title: "「問い」を中心とした教育",
      description: "答えを教えるのではなく、本質的な問いを共に探究する。",
      icon: "❓",
      gradient: "from-will-secondary to-wisdom"
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
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-will-gradient bg-clip-text text-transparent">
              特徴
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-depth-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-depth-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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