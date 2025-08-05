"use client";

import { motion } from "framer-motion";

export function Chapter1() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const questionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
        第一章：あなたの「なぜ」を、見せてください
      </motion.h2>

      <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          仮に、AIに何かを教えるとしたら。<br />
          それは、教科書に載ってる正解じゃないですよね。
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          我々が、最初に聞きたいこと。<br />
          それは、あなたの輝かしい成功体験でもありません。
        </motion.p>

        <motion.div
          className="my-12 space-y-4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600">履歴書に書けなかった情熱。</p>
          <p className="text-gray-600">損益計算書に載らなかった執着。</p>
          <p className="text-gray-600">誰も評価しなかった、あなただけの「なぜ」。</p>
        </motion.div>

        <motion.div
          className="bg-gray-50 p-8 rounded-lg my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-medium text-gray-900 mb-6">つまり、</p>
          <div className="space-y-3">
            <motion.p
              className="pl-4 border-l-2 border-amber-400"
              variants={questionVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              「なぜ、それにこだわるのか」
            </motion.p>
            <motion.p
              className="pl-4 border-l-2 border-amber-400"
              variants={questionVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              「なぜ、それを諦められないのか」
            </motion.p>
            <motion.p
              className="pl-4 border-l-2 border-amber-400"
              variants={questionVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              「なぜ、それに心が動くのか」
            </motion.p>
          </div>
        </motion.div>

        <motion.p
          className="text-2xl font-medium mt-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          その答えこそが、AIが逆立ちしても作れない、<br />
          あなただけの<span className="text-amber-600">「Will（意志）」</span>だから。
        </motion.p>

        <motion.div
          className="my-12 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700">
            「どうやって」や「何を」は、AIが得意とする領域。<br />
            でも「なぜ」は、永遠にあなたのものだ。
          </p>
        </motion.div>

        <motion.p
          className="text-center text-xl italic text-gray-600 mt-16"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
        >
          教科書には載っていない、<br />
          正解のない、あなただけの物語。<br />
          AI時代の価値は、そこからしか生まれない。
        </motion.p>

        <motion.p
          className="text-center text-2xl font-medium text-gray-900 mt-8"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 2.2 }}
          viewport={{ once: true }}
        >
          我々は、そう確信しています。
        </motion.p>
      </div>
    </div>
  );
}