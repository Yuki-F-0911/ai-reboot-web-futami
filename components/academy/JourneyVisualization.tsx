"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const JourneyVisualization = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.5 });

  const milestones = [
    {
      day: 0,
      label: "スタート",
      description: "不安と期待が入り混じる",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      position: 0,
    },
    {
      day: 2,
      label: "AIリブートキャンプ",
      description: "基礎を集中的に習得",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      position: 10,
    },
    {
      day: 30,
      label: "習慣化",
      description: "AI活用が日常に",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      position: 35,
    },
    {
      day: 60,
      label: "実践深化",
      description: "自分のプロジェクト開始",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      position: 65,
    },
    {
      day: 100,
      label: "DEMO DAY",
      description: "新しい自分の誕生",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      position: 100,
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-depth-50 to-white overflow-hidden">
      <div className="container-section">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* タイトル */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-will-gradient bg-clip-text text-transparent">
                100日間の成長ストーリー
              </span>
            </h2>
            <p className="text-lg text-depth-700">
              あなたの変化を可視化する、パーソナライズドジャーニー
            </p>
          </motion.div>

          {/* メトリクス */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
              <div className="text-4xl font-bold text-will-primary mb-2">
                100日間
              </div>
              <p className="text-depth-600">実践的な学習期間</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
              <div className="text-4xl font-bold text-harmony mb-2">
                2日間
              </div>
              <p className="text-depth-600">集合研修でスタートダッシュ</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
              <div className="text-4xl font-bold text-wisdom mb-2">
                3回
              </div>
              <p className="text-depth-600">キャリアコンサルティング</p>
            </div>
          </motion.div>

          {/* ジャーニーマップ */}
          <div className="relative">
            {/* プログレスバー背景 */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-depth-100 rounded-full transform -translate-y-1/2" />
            
            {/* アニメーションプログレスバー */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-will-primary via-harmony to-wisdom rounded-full transform -translate-y-1/2"
            />

            {/* マイルストーン */}
            <div className="relative pt-16 pb-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="absolute transform -translate-x-1/2"
                  style={{ left: `${milestone.position}%` }}
                >
                  {/* マイルストーンポイント */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-full shadow-elevated flex items-center justify-center text-will-primary mb-3">
                      {milestone.icon}
                    </div>
                    
                    {/* ラベル */}
                    <div className={`absolute top-20 ${
                      milestone.position > 80 ? 'right-0' : 
                      milestone.position < 20 ? 'left-0' : 
                      'left-1/2 transform -translate-x-1/2'
                    } text-center`}>
                      <p className="font-bold text-depth-900 whitespace-nowrap">
                        Day {milestone.day}
                      </p>
                      <p className="text-sm font-semibold text-will-primary whitespace-nowrap">
                        {milestone.label}
                      </p>
                      <p className="text-xs text-depth-600 mt-1">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 成長曲線 */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d={`M 0,80 Q 25,70 50,40 T 100,10`}
                fill="none"
                stroke="url(#growth-gradient)"
                strokeWidth="0.5"
                strokeDasharray="1 1"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 3, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1976D2" />
                  <stop offset="50%" stopColor="#4CAF50" />
                  <stop offset="100%" stopColor="#9C27B0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 説明テキスト */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-depth-700">
              一人ひとりのペースに合わせた成長プログラム。
              <br />
              メンターがあなたの成長を見守り、適切なタイミングでサポートします。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};