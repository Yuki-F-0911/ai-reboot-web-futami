"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Chapter2() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const toolExamples = [
    { name: "ChatGPT", color: "from-green-400 to-blue-500" },
    { name: "Claude", color: "from-purple-400 to-pink-500" },
    { name: "Midjourney", color: "from-orange-400 to-red-500" },
    { name: "???", color: "from-gray-400 to-gray-500" },
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
        第二章：どんな新しいAIが現れても、使いこなせる自分になる
      </motion.h2>

      <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
        <motion.div
          className="space-y-4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>今日覚えたAIツールが、明日には別のものに置き換わる。</p>
          <p>毎朝のニュースで、また新しいサービスが生まれている。</p>
          <p>ChatGPTの使い方だけ覚えても、</p>
          <p>来週にはもっとすごいツールが出てくるかもしれない。</p>
        </motion.div>

        {/* AIツールのビジュアル表現 */}
        <motion.div
          className="flex justify-center space-x-4 my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {toolExamples.map((tool, index) => (
            <motion.div
              key={index}
              className={`relative w-20 h-20 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white font-bold cursor-pointer shadow-lg`}
              whileHover={{ 
                scale: 1.1, 
                rotate: hoveredTool === index ? [0, -5, 5, 0] : 5,
                transition: { rotate: { duration: 0.5 } }
              }}
              onHoverStart={() => setHoveredTool(index)}
              onHoverEnd={() => setHoveredTool(null)}
              initial={{ opacity: 0, y: 20, rotateY: -90 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                delay: 0.6 + index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* 光沢効果 */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredTool === index ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              />
              
              {tool.name === "???" ? (
                <motion.span 
                  className="text-2xl relative z-10"
                  animate={{ rotate: hoveredTool === index ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  ?
                </motion.span>
              ) : (
                <span className="text-xs text-center relative z-10">{tool.name}</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-amber-50 p-8 rounded-lg my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-medium text-gray-900 mb-4">
            だから我々は、「使い方」ではなく、<br />
            「使いこなし方の発想法」を、あなたの中に育てます。
          </p>
        </motion.div>

        <motion.p
          className="text-xl italic text-gray-600 my-8"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          どんな新しいツールが現れても、<br />
          「ああ、これは私のやりたいことに、こう使える」と、<br />
          瞬時にひらめく思考回路。
        </motion.p>

        <motion.div
          className="space-y-6 my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="border-l-4 border-amber-400 pl-6">
            <p className="font-medium text-gray-900 mb-2">まず必要なのは、自分の軸を見つけること。</p>
            <p className="text-gray-600">
              「私は本当は何がしたいんだっけ？」<br />
              散らばった経験や想いを整理して、<br />
              あなたの中にある「Will」を言語化する。
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-gray-50 to-amber-50 p-8 rounded-lg my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-4">そうすると、AIとの関係が変わる。</p>
          <div className="space-y-3">
            <p className="flex items-center">
              <span className="text-gray-400 line-through mr-3">「このAIで何ができるか」</span>
              <span className="text-2xl">→</span>
            </p>
            <p className="text-xl font-medium text-amber-600 ml-8">
              「私のやりたいことに、このAIをどう活かすか」
            </p>
          </div>
          <p className="text-lg mt-4">という発想に、自然と切り替わる。</p>
        </motion.div>

        <motion.div
          className="text-center my-16"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-700 mb-4">
            新しいツールが出るたびに、
          </p>
          <p className="text-2xl">
            <span className="text-gray-400 line-through">「また覚えなきゃ」</span>
            <span className="mx-4">→</span>
            <span className="text-amber-600 font-medium">「また面白いおもちゃが来た！」</span>
          </p>
          <p className="text-xl text-gray-700 mt-4">
            と思える。
          </p>
        </motion.div>

        <motion.p
          className="text-2xl font-serif text-center text-gray-900 mt-16"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 1.8 }}
          viewport={{ once: true }}
        >
          それが、本当の意味でAIを使いこなすということ。
        </motion.p>
      </div>
    </div>
  );
}