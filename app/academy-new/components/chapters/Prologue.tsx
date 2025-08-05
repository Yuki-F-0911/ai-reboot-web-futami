"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Prologue() {
  const [highlightIndex, setHighlightIndex] = useState(-1);

  useEffect(() => {
    // 重要な単語を順番にハイライト
    const timer = setInterval(() => {
      setHighlightIndex(prev => (prev + 1) % 5);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-12">
      <motion.h2 
        className="text-2xl md:text-3xl font-serif text-gray-900 mb-12 relative"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.span
          className="absolute -left-4 top-0 text-6xl text-gray-100 select-none"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          「
        </motion.span>
        序章：これは、あなたの物語だ
      </motion.h2>

      <motion.blockquote 
        className="border-l-4 border-gray-300 pl-6 my-8"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
          <strong>毎日、同じことの繰り返し。</strong><br />
          <strong>その違和感を、見て見ぬふりしていませんか。</strong>
        </p>
      </motion.blockquote>

      <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <strong>世界の変化とか、未来の不安とか、</strong><br />
          <strong>そういう大きな話は、もう聞き飽きた。</strong><br />
          <strong>問題は、いつだって、あなた自身のことだ。</strong>
        </motion.p>

        <motion.div
          className="space-y-3"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <strong className={`inline-block transition-all duration-700 ${
              highlightIndex === 0 
                ? "text-amber-600 scale-105 translate-x-2" 
                : ""
            }`}>
              仕事の合間にふと感じる「もっと違う方法があるはず」
            </strong>
          </motion.p>
          <motion.p
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <strong className={`inline-block transition-all duration-700 ${
              highlightIndex === 1 
                ? "text-amber-600 scale-105 translate-x-2" 
                : ""
            }`}>
              会議中に浮かぶ「本当はこうしたい」
            </strong>
          </motion.p>
          <motion.p
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <strong className={`inline-block transition-all duration-700 ${
              highlightIndex === 2 
                ? "text-amber-600 scale-105 translate-x-2" 
                : ""
            }`}>
              帰り道の「明日も同じなのか」という、ため息。
            </strong>
          </motion.p>
        </motion.div>

        <motion.p
          className="mt-12 text-2xl"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>その小さな違和感の中にこそ、</strong><br />
          <strong>あなたの<span className="text-amber-600 underline decoration-2 decoration-amber-400/50">「Will」</span>が眠っている。</strong>
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <strong>AIという時代の大きな変化が、</strong><br />
          <strong>それを浮き彫りにし始めている。</strong>
        </motion.p>

        <motion.p
          className="mt-16 text-center text-2xl font-serif italic text-gray-600"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: true }}
        >
          静かな革命は、いつも夜明け前に始まる。
        </motion.p>
      </div>
    </div>
  );
}