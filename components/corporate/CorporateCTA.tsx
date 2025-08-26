"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const CorporateCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-harmony-lighter via-white to-will-lighter relative overflow-hidden">
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
            AI変革を始めましょう
          </h2>
          
          <p className="text-xl md:text-2xl text-depth-700 mb-12 leading-relaxed">
            貴社の課題を、ぜひ私たちにお聞かせください。<br /><br />
            AI時代の波を乗りこなし、貴社がさらなる高みへと飛躍するための<br />
            最適なAI活用の道筋を、経験豊富な専門家チームが、<br />
            貴社と共に徹底的に見つけ出し、実現に向けて伴走いたします。<br /><br />
            未来を共に創りましょう。
          </p>
          
          {/* CTAカード */}
          <div className="max-w-lg mx-auto">
            {/* お問い合わせ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-elevated hover:shadow-floating transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-harmony" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-depth-800">
                まずは無料相談から
              </h3>
              <p className="text-depth-700 mb-6">
                貴社の状況をヒアリングし、<br />
                最適なプランをご提案します
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-harmony text-white font-bold px-6 py-4 rounded-2xl shadow-glow hover:shadow-glow-hover transition-all duration-300"
                >
                  無料相談を申し込む
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};