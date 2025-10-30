"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const CorporateCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-br from-harmony-lighter via-white to-will-lighter relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-harmony rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-will-gradient rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-h1 md:text-5xl lg:text-6xl font-bold mb-8 text-depth-800">
            組織のOSを再起動する、その第一歩を今日から
          </h2>
          
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-depth-700 mb-8 leading-relaxed">
              AI導入を「いつかやる」と先延ばしにしている間に、<br />
              競合は着実に生産性を高め、市場での優位性を確立しています。
            </p>
            <p className="text-2xl font-bold text-depth-800 leading-relaxed">
              <span className="text-harmony">今、動き出すか。このまま見送るか。</span><br />
              その選択が、3年後の組織の競争力を大きく左右します。
            </p>
          </div>
          
          {/* まずは無料相談から */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-depth-800">まずは無料相談から</h3>
            
            {/* こんな方におすすめ */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-elevated mb-8">
              <h4 className="text-xl font-bold mb-6 text-harmony">こんな方におすすめです</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-harmony mt-1">•</span>
                    <span className="text-depth-700">AIを導入したいが、何から始めればいいか分からない</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-harmony mt-1">•</span>
                    <span className="text-depth-700">社内でAI活用を定着させる方法が知りたい</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span className="text-depth-700">助成金を活用して研修費用を抑えたい</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span className="text-depth-700">ウィルトラスト様のような成果を自社でも実現したい</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 無料相談の内容 */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-elevated mb-8">
              <h4 className="text-xl font-bold mb-6 text-will-primary">無料相談では、こんなことをお話しします（30〜45分）</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-harmony mt-1">•</span>
                    <span className="text-depth-700">貴社の現状ヒアリングと課題整理</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-harmony mt-1">•</span>
                    <span className="text-depth-700">具体的な活用イメージのご提案</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span className="text-depth-700">最適な研修プログラムの設計</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span className="text-depth-700">助成金活用による実質料金のご案内</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <Link href="#contact-form">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-harmony text-white font-bold px-8 py-6 rounded-2xl shadow-glow hover:shadow-glow-hover transition-all duration-300 text-xl"
              >
                無料相談を申し込む
              </motion.button>
            </Link>
          </motion.div>
          
          {/* 締めメッセージ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-depth-700 leading-relaxed">
              <span className="font-bold text-depth-800">組織のOSを再起動し、AI時代の競争力を手に入れる。</span><br />
              その第一歩は、まず相談することから始まります。
            </p>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};