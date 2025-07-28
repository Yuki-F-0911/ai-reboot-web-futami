"use client";

import { motion } from "framer-motion";

export const AcademyProgram = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "AIリブートキャンプ",
      duration: "2日間",
      date: "2025年8月16日(土)〜17日(日)",
      description: "集合研修で基礎を固め、仲間と出会う",
      details: [
        "生成AI活用の基礎と応用",
        "AI時代のマインドセット",
        "実践演習とプロトタイピング",
        "100日間の目標設定"
      ]
    },
    {
      phase: "Phase 2",
      title: "AIリブート100",
      duration: "100日間",
      description: "実践を通じて着実にスキルを定着",
      details: [
        "毎週のオンラインセッション",
        "メンターによる個別フィードバック",
        "月1回のキャリアコンサルティング",
        "実プロジェクトへの挑戦"
      ]
    },
    {
      phase: "Phase 3",
      title: "DEMO DAY",
      duration: "最終日",
      date: "2025年11月24日(月祝)",
      description: "成果発表と新たな一歩",
      details: [
        "100日間の成果発表",
        "自己成長の振り返り",
        "今後のビジョン共有",
        "修了証授与"
      ]
    }
  ];

  return (
    <section id="program" className="py-24 md:py-32">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-depth-900 mb-16">
            プログラムの流れ
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {/* タイムライン */}
            <div className="relative">
              {/* 縦線 */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-will-primary/20 via-will-primary/40 to-will-primary/20" />
              
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* タイムラインドット */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-will-primary border-4 border-white rounded-full z-10 shadow-lg" />
                  
                  {/* コンテンツ */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className={`inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <p className="text-sm font-medium text-will-primary mb-2">{phase.phase}</p>
                      <h3 className="text-2xl font-bold text-depth-900 mb-2">{phase.title}</h3>
                      <p className="text-depth-700 mb-1">{phase.duration}</p>
                      {phase.date && (
                        <p className="text-sm text-depth-600 mb-4">{phase.date}</p>
                      )}
                      <p className="text-depth-700 font-medium mb-4">{phase.description}</p>
                      
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {phase.details.map((detail, i) => (
                          <li key={i} className={`flex items-center gap-2 text-sm text-depth-600 ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}>
                            <span className="w-1 h-1 bg-depth-400 rounded-full flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* スペーサー */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};