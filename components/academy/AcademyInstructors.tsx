"use client";

import { motion } from "framer-motion";

export const AcademyInstructors = () => {
  const instructors = [
    {
      name: "成瀬 拓也",
      title: "ビジネスプロデューサー",
      subtitle: "株式会社ウィルフォワード代表",
      description: "経営・マーケティングの専門家としてこれまで多くの事業を生み出し、同時にコンサルタントとして、様々な企業の支援実績を持つ。AI活用のサービス開発や戦略設計に精通している。",
      gradient: "from-will-primary to-will-secondary"
    },
    {
      name: "坂本 拓磨",
      title: "生成AI活用マルチクリエイター",
      qualification: "一般社団法人生成AI活用普及協会「生成AIパスポート」保有",
      description: "AIと人間の創造性を融合させ、アート・デザイン・音楽・映像など多彩な表現領域で革新的な作品を生み出すクリエイター。生成AIを「創造の相棒」として使いこなす実践者。",
      gradient: "from-wisdom to-harmony"
    },
    {
      name: "青木 玲仁",
      title: "生成AI活用コンサルタント",
      qualification: "一般社団法人生成AI活用普及協会「生成AIパスポート」保有",
      description: "複数の生成AIツールを使いこなし、生成AIを活用した業務効率化のスペシャリスト。",
      gradient: "from-harmony to-will-secondary"
    },
    {
      name: "久米田 克",
      title: "キャリアコンサルタント",
      qualification: "一般社団法人生成AI活用普及協会「生成AIパスポート」保有",
      description: "キャリア支援の専門家として、受講生の自己理解と成長をサポート。",
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-will-gradient bg-clip-text text-transparent">
              講師・メンター
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-12">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${instructor.gradient}`} />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-depth-900 mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-lg font-semibold text-will-primary mb-1">
                    {instructor.title}
                  </p>
                  {instructor.subtitle && (
                    <p className="text-depth-700 mb-2">
                      {instructor.subtitle}
                    </p>
                  )}
                  {instructor.qualification && (
                    <p className="text-sm text-wisdom font-medium mb-3">
                      {instructor.qualification}
                    </p>
                  )}
                  <p className="text-depth-700 leading-relaxed">
                    {instructor.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-lg text-depth-700"
          >
            他、生成AI活用に関して専門性をもった講師・メンターがサポートします
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};