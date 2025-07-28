"use client";

import { motion } from "framer-motion";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export const AcademyProgram = () => {
  const phases = [
    {
      title: "AIリブートキャンプ",
      duration: "2日間の集合研修",
      date: "2025年8月16日(土)13:00〜17日(日)17:00",
      location: "1泊2日（神奈川県川崎市にて開催予定）",
      description: "集合研修形式。生成AIを活用するための実践技術だけでなく、進化し続けるAIに対して\"学び続ける姿勢\"と\"考え方\"を獲得する。共に学ぶメンターや仲間との絆をつくる。",
      contents: [
        "オープンニングとチームビルディング",
        "AIがもたらす社会変革と未来",
        "生成AI活用で実現できること",
        "生成AI時代のキャリア論とキャリア下剋上",
        "生成AI活用事例",
        "個人作業環境（AI搭載IDEおよびLLMチャットツール等）の構築",
        "AI時代のビジネスマインド",
        "マーケティングAI演習",
        "生成AIリポジトリの構築",
        "AIプロトタイピング",
        "コミュニケーション",
        "100日プランニング"
      ],
      color: "from-will-primary to-will-secondary"
    },
    {
      title: "AIリブート100",
      duration: "実践100日間",
      description: "キャリアコンサルタントやメンターとの対話を重ねながら、自分の課題を設定し、生成AIを活用して実際に解決に挑む。常に「Will（やりたいこと）」を探求し、伴走支援を受けながら取り組む。",
      contents: [
        "オンラインコミュニティ",
        "オンラインライブイベント",
        "動画学習コンテンツ",
        "メンターへの相談とフィードバック",
        "キャリアコンサルタントによるキャリアコンサルティング（月に1度：合計3回）"
      ],
      color: "from-wisdom to-will-secondary"
    },
    {
      title: "AIリブートDEMO DAY",
      duration: "成果発表",
      date: "2025年11月24日(月祝)13:00〜17:00",
      location: "オンライン開催予定",
      description: "生成AIを活用してできるようになったことや、作った成果物の発表する場。それだけではなく、自分自身の「Will」に基づき、何を考え、どう行動し、何に挑戦したのか。そして、それを通じて自分自身がどのように成長したかを語る場でもある。",
      color: "from-will-secondary to-harmony"
    }
  ];

  return (
    <section id="program" className="section-spacing">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-will-gradient bg-clip-text text-transparent">
              プログラムの流れ（約100日）
            </span>
          </h2>
          
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <ScrollAnimationWrapper
                key={index}
                animation="fadeUp"
                delay={index * 0.2}
                className="relative"
              >
                {/* フェーズカード */}
                <div className="bg-white rounded-3xl shadow-elevated overflow-hidden">
                  {/* ヘッダー */}
                  <div className={`bg-gradient-to-r ${phase.color} p-6 md:p-8`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {phase.duration}
                    </p>
                    {phase.date && (
                      <p className="text-white/80 mt-2">
                        {phase.date}
                      </p>
                    )}
                    {phase.location && (
                      <p className="text-white/80">
                        {phase.location}
                      </p>
                    )}
                  </div>
                  
                  {/* コンテンツ */}
                  <div className="p-6 md:p-8">
                    <p className="text-depth-800 mb-6 leading-relaxed">
                      {phase.description}
                    </p>
                    
                    {phase.contents && (
                      <div>
                        <h4 className="font-bold text-depth-900 mb-4">
                          講義内容案（変更の可能性があります）
                        </h4>
                        <ul className="space-y-2">
                          {phase.contents.map((content, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-will-primary mt-1">•</span>
                              <span className="text-depth-700">{content}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* 接続線 */}
                {index < phases.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: 32 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="w-1 bg-gradient-to-b from-will-primary to-transparent"
                    />
                  </div>
                )}
              </ScrollAnimationWrapper>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};