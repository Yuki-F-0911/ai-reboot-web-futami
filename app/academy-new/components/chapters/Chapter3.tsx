"use client";

import { motion } from "framer-motion";

export function Chapter3() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handwritingVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

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
        第三章：我々は「共犯者」です
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
          <p>我々は、教壇に立つ「先生」ではありません。</p>
          <p>答えは、すべて、あなたの中にしかないからです。</p>
          <p className="text-2xl font-medium text-amber-600 mt-6">
            我々は、あなたの隣に座る「共犯者」です。
          </p>
        </motion.div>

        {/* 手書き風の「共犯者」アニメーション */}
        <motion.div
          className="flex justify-center my-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <svg width="300" height="100" viewBox="0 0 300 100" className="overflow-visible">
            <motion.path
              d="M 50 50 Q 100 20 150 50 T 250 50"
              stroke="#f59e0b"
              strokeWidth="3"
              fill="none"
              variants={handwritingVariants}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.text
              x="150"
              y="60"
              textAnchor="middle"
              className="text-3xl font-bold fill-amber-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              共犯者
            </motion.text>
          </svg>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-8 rounded-lg my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">
            あなたが、自分でも気づいていなかった、<br />
            内なる「Will」に耳を澄ます。
          </p>
          <p className="text-xl font-medium">
            そして、その声を聞いたとき、<br />
            <span className="text-amber-600">「それ、めちゃくちゃ面白いじゃん！」</span>と、<br />
            誰よりも興奮して、一緒に形にしていく。
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-medium text-gray-900 mb-2">定期的な対話セッション</h3>
            <p className="text-sm text-gray-600">あなたの想いを深く聞く時間</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-medium text-gray-900 mb-2">いつでも相談できる環境</h3>
            <p className="text-sm text-gray-600">困ったとき、迷ったときに</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-medium text-gray-900 mb-2">同じ旅をする仲間たち</h3>
            <p className="text-sm text-gray-600">一人じゃない安心感</p>
          </div>
        </motion.div>

        <motion.div
          className="text-center my-16 p-12 bg-gradient-to-b from-white to-gray-50 rounded-lg"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-serif text-gray-900">
            でも、最も大切なのは、
          </p>
          <p className="text-3xl font-serif text-amber-600 mt-4">
            あなた自身との、静かな対話の時間。
          </p>
        </motion.div>
      </div>
    </div>
  );
}