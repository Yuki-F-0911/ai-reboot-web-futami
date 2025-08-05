"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Finale() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
        最終章：で、どうする？
      </motion.h2>

      <motion.p
        className="text-xl text-gray-700"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        ここまで読んでくれた、あなたへ。
      </motion.p>

      <motion.div
        className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>
          たぶん、あなたは、もう気づいている。<br />
          AIに仕事を奪われる人間と、<br />
          AIを最高の相棒にする人間の、<br />
          決定的な違いを。
        </p>

        <motion.div
          className="bg-gray-900 text-white p-8 rounded-lg my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl mb-4">
            それは、自分の「なぜ」を知っているかどうか。
          </p>
          <p>
            つまり、何のために生きて、何のために働いているのか。<br />
            自分の<span className="text-amber-400 font-bold">「Will」</span>に正直かどうか。
          </p>
        </motion.div>

        <motion.p
          className="text-2xl font-medium text-center my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          我々は、その「Will」を一緒に見つける、<br />
          小さな秘密基地です。
        </motion.p>

        <motion.div
          className="bg-amber-50 p-6 rounded-lg text-center my-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-bold text-amber-600">
            経済産業省認定で、最大70%の受講料支援。
          </p>
        </motion.div>

        <motion.div
          className="space-y-4 text-lg"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p>
            でも、本当の投資は、あなた自身との時間。<br />
            もし、ピンと来たら。<br />
            まずは、あなたの「なぜ」を、聞かせてください。
          </p>

          <p className="text-gray-600 italic mt-8">
            うまい話も、正解も、ここにはありません。
          </p>

          <p>
            あるのは、あなたの物語を面白がる、最高の聞き手。<br />
            そして、毎日AIと新しい可能性を探っている、現役の実践者たち。
          </p>

          <p>
            「それ、私も悩んだなぁ」と共感しながら、<br />
            「こんな使い方もあるよ」と、実例を見せてくれる。
          </p>

          <p className="font-medium">
            理論じゃない、リアルな体験の共有が、ここにあります。
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col space-y-4 mt-16"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/academy/consultation"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors duration-200"
          >
            → まずは、自分の「なぜ」について話してみる（無料相談会）
          </Link>
          
          <Link
            href="/academy/stories"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-amber-600 bg-white border-2 border-amber-600 rounded-lg hover:bg-amber-50 transition-colors duration-200"
          >
            → 「Will」を見つけた人たちの物語
          </Link>
        </motion.div>

        <motion.p
          className="text-2xl font-serif text-center text-gray-600 italic mt-20"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.2, delay: 1.6 }}
          viewport={{ once: true }}
        >
          あなたの「Will」が、静かに待っている。
        </motion.p>
      </motion.div>
    </div>
  );
}