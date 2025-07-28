"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const AcademyCurriculum = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const phases = [
    {
      day: "Day 1-14",
      title: "Phase 1: Foundation",
      subtitle: "自己理解とAI基礎",
      items: [
        "キックオフ集合研修",
        "Will探索ワークショップ", 
        "AIリテラシー基礎講座",
        "プロンプトエンジニアリング基礎"
      ],
      color: "from-will-primary to-will-secondary",
      description: "自分を知り、AIの基礎を身につける"
    },
    {
      day: "Day 15-60",
      title: "Phase 2: Practice",
      subtitle: "実践スキルの習得",
      items: [
        "ChatGPT/Claude活用術",
        "画像生成AIマスター",
        "動画・音声生成AI",
        "業務効率化の実践"
      ],
      color: "from-will-secondary to-wisdom",
      description: "各種AIツールを実践的に習得"
    },
    {
      day: "Day 61-90",
      title: "Phase 3: Project",
      subtitle: "個人プロジェクト実践",
      items: [
        "テーマ設定とプランニング",
        "プロトタイプ開発",
        "メンターとの集中セッション",
        "中間発表とフィードバック"
      ],
      color: "from-wisdom to-growth",
      description: "学んだスキルを統合して成果物を作成"
    },
    {
      day: "Day 91-100",
      title: "Phase 4: Presentation",
      subtitle: "成果発表と未来設計",
      items: [
        "最終成果物の仕上げ",
        "プレゼンテーション準備",
        "デモデー（成果発表会）",
        "キャリアプランニング"
      ],
      color: "from-growth to-harmony",
      description: "成果を発表し、新しいキャリアを設計"
    }
  ]

  const environment = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "少人数制クラス",
      description: "最大30名の少人数制で、一人ひとりに寄り添った指導。"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "柔軟な学習スタイル",
      description: "録画視聴・週末学習など、仕事と両立できる設計。"
    }
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 mb-6">
            100日間の学習ロードマップ
          </h2>
          <p className="text-xl text-depth-700">
            4つのPhaseで構成された体系的なカリキュラムで、確実にAIスキルを習得します。
          </p>
        </motion.div>

        {/* 学習の全体像 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-depth-800 mb-12">学習の全体像</h3>
          
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-will-primary via-wisdom to-harmony transform -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  {/* Circle indicator */}
                  <div className={`hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-8 w-6 h-6 bg-gradient-to-r ${phase.color} rounded-full shadow-elevated`} />
                  
                  <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-depth-100">
                    <div className={`text-sm font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent mb-2`}>
                      {phase.day}
                    </div>
                    <h4 className="text-lg font-bold text-depth-800 mb-2">
                      {phase.title}
                      {phase.subtitle && (
                        <span className="block text-sm font-normal text-depth-600 mt-1">
                          {phase.subtitle}
                        </span>
                      )}
                    </h4>
                    {phase.items && (
                      <ul className="text-sm text-depth-600 space-y-1">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-will-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {phase.description && (
                      <p className="text-sm text-depth-500 mt-3 italic">
                        {phase.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 学習環境 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-depth-50 rounded-3xl p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold text-center text-depth-800 mb-10">学習環境</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {environment.map((env, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="text-will-primary flex-shrink-0">{env.icon}</div>
                <div>
                  <h4 className="font-bold text-depth-800 mb-2">{env.title}</h4>
                  <p className="text-depth-600">{env.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-10"
          >
            <p className="text-lg font-medium text-depth-700">
              経済産業省認定の安心プログラム
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export { AcademyCurriculum }