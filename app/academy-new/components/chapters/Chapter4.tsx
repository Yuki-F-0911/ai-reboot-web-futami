"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Chapter4() {
  const [activeChange, setActiveChange] = useState(0);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const changeExamples = [
    {
      before: "「今週は何を試してみようか」",
      after: "月曜日の朝が、憂鬱じゃなくなる。",
      icon: "☀️",
    },
    {
      before: "「それは難しいですね」",
      after: "「こんなアプローチはどうでしょう」",
      icon: "💡",
    },
    {
      before: "愚痴の時間が、",
      after: "アイデアを出し合う時間に。",
      icon: "✨",
    },
    {
      before: "「こうあるべき」から",
      after: "「こうありたい」へ。",
      icon: "🌱",
    },
  ];

  return (
    <div className="space-y-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-serif text-gray-900 mb-12"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        第四章：小さな変化が、大きな違いを生む
      </motion.h2>

      <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
        <motion.p
          className="text-2xl font-medium"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          個人の「Will」が目覚めるとき、<br />
          まず、日常の見え方が変わる。
        </motion.p>

        {/* 変化の例をインタラクティブに表示 */}
        <motion.div
          className="space-y-4 my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {changeExamples.map((change, index) => (
            <motion.div
              key={index}
              className={`relative p-6 rounded-xl cursor-pointer overflow-hidden ${
                activeChange === index 
                  ? "bg-gradient-to-r from-amber-50 to-orange-50" 
                  : "bg-gray-50"
              }`}
              onClick={() => setActiveChange(index)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* アクティブ時の背景アニメーション */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: activeChange === index ? 1 : 0,
                  scale: activeChange === index ? 1 : 0.8
                }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="relative flex items-center space-x-4">
                <motion.span 
                  className="text-3xl"
                  animate={{ 
                    rotate: activeChange === index ? [0, -10, 10, 0] : 0,
                    scale: activeChange === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {change.icon}
                </motion.span>
                <div className="flex-1">
                  <motion.p 
                    className="text-gray-600 mb-2"
                    animate={{ 
                      opacity: activeChange === index ? 1 : 0.7
                    }}
                  >
                    {change.after}
                  </motion.p>
                  <motion.p 
                    className="text-xl font-medium text-gray-900"
                    animate={{ 
                      opacity: activeChange === index ? 1 : 0.5,
                      x: activeChange === index ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {change.before}
                  </motion.p>
                </div>
                
                {/* アクティブインジケーター */}
                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: activeChange === index ? 1 : 0,
                    scale: activeChange === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center my-16"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 mb-4">
            退屈だった仕事が、自分だけの実験場に変わる。
          </p>
          <motion.div
            className="inline-block"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <p className="text-3xl font-medium text-amber-600">
              「こうあるべき」から「こうありたい」へ。
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-xl my-16"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="h-1 bg-amber-300 rounded-full"
                style={{ width: `${20 + i * 20}%` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2 + i * 0.2, duration: 0.8 }}
              />
            ))}
          </motion.div>
          <p className="text-2xl font-medium text-gray-900 mt-8 text-center">
            小さな変化の積み重ねが、<br />
            いつの間にか、あなたの人生を変えている。
          </p>
        </motion.div>

        <motion.p
          className="text-2xl font-serif text-center text-gray-900 mt-16"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 1.4 }}
          viewport={{ once: true }}
        >
          それが、本当の幸せへの道筋だと、<br />
          我々は信じています。
        </motion.p>
      </div>
    </div>
  );
}