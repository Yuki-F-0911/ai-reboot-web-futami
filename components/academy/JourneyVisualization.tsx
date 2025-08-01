"use client";

import { motion } from "framer-motion";

export const JourneyVisualization = () => {
  const milestones = [
    { day: 0, label: "スタート", progress: 0 },
    { day: 2, label: "キャンプ修了", progress: 10 },
    { day: 30, label: "習慣化", progress: 35 },
    { day: 60, label: "実践深化", progress: 65 },
    { day: 100, label: "DEMO DAY", progress: 100 }
  ];

  return (
    <section className="py-24 md:py-32 bg-depth-50/30">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-depth-900 mb-4">
              100日間の成長ジャーニー
            </h2>
            <p className="text-lg text-depth-600">
              段階的に、着実に、あなたのペースで成長
            </p>
          </motion.div>

          {/* プログレスバー */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative mb-20"
          >
            {/* 背景バー */}
            <div className="h-2 bg-depth-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-will-primary via-wisdom to-harmony"
              />
            </div>
            
            {/* マイルストーン */}
            <div className="relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute transform -translate-x-1/2"
                  style={{ left: `${milestone.progress}%` }}
                >
                  <div className="relative">
                    {/* ドット */}
                    <div className="w-4 h-4 bg-will-primary border-2 border-white rounded-full absolute top-[-4px] left-1/2 transform -translate-x-1/2 shadow-md" />
                    
                    {/* ラベル */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center">
                      <p className="text-sm font-medium text-depth-900 whitespace-nowrap">
                        Day {milestone.day}
                      </p>
                      <p className="text-xs text-depth-600 whitespace-nowrap">
                        {milestone.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* メトリクス */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-depth-900 mb-2">100日間</p>
              <p className="text-depth-600">実践的な学習期間</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-depth-900 mb-2">24時間</p>
              <p className="text-depth-600">メンターサポート</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-depth-900 mb-2">3回</p>
              <p className="text-depth-600">キャリア面談</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};