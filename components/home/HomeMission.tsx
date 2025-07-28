"use client";

import { motion } from "framer-motion";

export const HomeMission = () => {
  const missionPoints = [
    {
      title: "静観は退化",
      subtitle: "変化の中で動き続ける",
      content: "生成AIの登場により、世界のルールが根底から塗り替えられています。この変化の早さに不安を感じるのは正常です。しかし「静観していることは既に退化をしている」と私たちは確信しています。",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "思考OSの更新",
      subtitle: "スキルを超えた本質",
      content: "明日には陳腐化するかもしれない小手先の「スキル」ではなく、どんな環境の変化にも適応できる思考のOS（オペレーションシステム）を身につけることが重要です。",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "共創する未来",
      subtitle: "AIはパートナー",
      content: "生成AIを単なる便利ツールとしてではなく、人類の未来を左右する転換点として捉えています。AIと共に、幸福で持続可能な未来を創造していきます。",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="mission" className="section-spacing bg-gradient-to-b from-white via-depth-50/30 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-depth-900">なぜ私たちが</span>
            <span className="bg-will-gradient bg-clip-text text-transparent">AIリブート</span>
            <span className="text-depth-900">をやるのか</span>
          </h2>
          <p className="text-lg md:text-xl text-depth-700 max-w-3xl mx-auto">
            2011年の創業以来「世界を一つの家族にする」というビジョンを掲げ、
            働き方・生き方のあり方を問い続けてきた私たちの新たな挑戦
          </p>
        </motion.div>

        {/* Mission points - displayed as cards in sequence */}
        <div className="max-w-5xl mx-auto space-y-12">
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-elevated overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Icon section */}
                <div className={`md:w-1/3 p-8 md:p-12 flex items-center justify-center ${
                  index === 0 ? 'bg-gradient-to-br from-will-lighter to-will-primary/10' :
                  index === 1 ? 'bg-gradient-to-br from-harmony-lighter to-harmony/10' :
                  'bg-gradient-to-br from-wisdom-lighter to-wisdom/10'
                }`}>
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                    index === 0 ? 'bg-will-primary text-white' :
                    index === 1 ? 'bg-harmony text-white' :
                    'bg-wisdom text-white'
                  }`}>
                    {point.icon}
                  </div>
                </div>
                
                {/* Content section */}
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-depth-900 mb-2">
                    {point.title}
                  </h3>
                  <p className={`text-lg font-medium mb-6 ${
                    index === 0 ? 'text-will-primary' :
                    index === 1 ? 'text-harmony' :
                    'text-wisdom'
                  }`}>
                    {point.subtitle}
                  </p>
                  <p className="text-lg text-depth-700 leading-relaxed">
                    {point.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-will-lighter to-harmony-lighter rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-depth-900 mb-6 text-center">
              私たちが大切にしていること
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <span className="text-2xl font-bold text-will-primary">1</span>
                </div>
                <h4 className="font-semibold text-depth-900 mb-2">実践者として</h4>
                <p className="text-sm text-depth-700">
                  教壇に立つ「先生」ではなく、今この瞬間も挑戦を続ける現役の実践者集団として
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <span className="text-2xl font-bold text-harmony">2</span>
                </div>
                <h4 className="font-semibold text-depth-900 mb-2">問いを中心に</h4>
                <p className="text-sm text-depth-700">
                  答えを与えるのではなく、本質的な問いを投げ続ける伴走者として
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <span className="text-2xl font-bold text-wisdom">3</span>
                </div>
                <h4 className="font-semibold text-depth-900 mb-2">共に創る</h4>
                <p className="text-sm text-depth-700">
                  この時代を一緒に創っていく同志として、共に成長し続ける
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};