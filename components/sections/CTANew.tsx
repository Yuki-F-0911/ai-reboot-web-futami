"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const CTANew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-will-lighter via-white to-harmony-lighter relative overflow-hidden">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-will-gradient rounded-full blur-3xl" />
        <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-harmony-gradient rounded-full blur-3xl" />
      </div>
      
      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-h1 md:text-5xl lg:text-6xl font-bold mb-8 text-depth-800">
            今すぐ、AIと共に新しい一歩を
          </h2>
          
          <p className="text-xl md:text-2xl text-depth-700 mb-12 leading-relaxed">
            AIの可能性は無限大。<br />
            あなたのWillと共に、新しい未来を創造しましょう。
          </p>
          
          {/* 個人向けCTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 mb-8 shadow-elevated"
          >
            <h3 className="text-2xl font-bold mb-4 text-depth-800">
              個人の方
            </h3>
            <p className="text-lg text-depth-600 mb-6">
              まずは無料説明会へ<br />
              オンライン・オフラインで随時開催中
            </p>
            <Link href="https://forms.gle/MX5sobbPkch5U2QF8" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-will-gradient text-white font-bold px-8 py-4 rounded-2xl shadow-glow hover:shadow-glow-hover transition-all duration-300"
              >
                説明会に申し込む
              </motion.button>
            </Link>
          </motion.div>
          
          {/* 法人向けCTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-elevated"
          >
            <h3 className="text-2xl font-bold mb-4 text-depth-800">
              法人の方
            </h3>
            <p className="text-lg text-depth-600 mb-6">
              貴社に最適なプランをご提案<br />
              まずはお気軽にご相談ください
            </p>
            <Link href="/corporate#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-harmony text-white font-bold px-8 py-4 rounded-2xl shadow-glow hover:shadow-glow-hover transition-all duration-300"
              >
                お問い合わせする
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};