"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export const AcademySchedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-depth-50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 mb-6">
            お急ぎください！定員に限りがあります
          </h2>
          <p className="text-xl text-depth-700">
            第4期生の募集が始まりました。先着順での受付となります。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 第4期生募集情報 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-elevated mb-8 border border-depth-100"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-will-primary to-will-secondary text-white px-6 py-3 rounded-full shadow-glow mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-lg">第4期生募集</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 募集詳細 */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-will-primary mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-depth-800 mb-1">募集期間</h4>
                    <p className="text-depth-700">2025年2月1日〜2月28日</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-will-primary mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-depth-800 mb-1">開講日</h4>
                    <p className="text-depth-700">2025年3月15日</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-will-primary mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 8a2 2 0 11-4 0 2 2 0 014 0zM7 11a2 2 0 11-4 0 2 2 0 014 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM15 11a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-depth-800 mb-1">定員</h4>
                    <p className="text-depth-700">30名（先着順）</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-will-primary mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-depth-800 mb-1">集合研修会場</h4>
                    <p className="text-depth-700">東京・大阪・福岡</p>
                  </div>
                </div>
              </div>

              {/* 募集状況 */}
              <div className="bg-gradient-to-br from-will-primary/10 to-will-secondary/10 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-depth-800 mb-4 text-center">
                  現在の募集状況
                </h4>
                
                <div className="text-center mb-4">
                  <div className="text-3xl md:text-4xl font-bold text-will-primary mb-2">
                    残り12名
                  </div>
                  <p className="text-sm text-depth-600">
                    （2025年1月20日現在）
                  </p>
                </div>

                {/* Progress bar */}
                <div className="bg-white/50 rounded-full h-3 mb-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "60%" } : {}}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-will-primary to-will-secondary rounded-full"
                  />
                </div>
                
                <div className="flex justify-between text-xs text-depth-600">
                  <span>募集開始</span>
                  <span>60%埋まりました</span>
                  <span>募集終了</span>
                </div>

                <div className="mt-4 p-3 bg-white/60 rounded-lg">
                  <p className="text-xs text-depth-700 text-center flex items-center justify-center gap-1">
                    <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>
                      リスキリング補助金の予算には限りがあります。<br />
                      お早めのお申し込みをお勧めします。
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-depth-700 mb-8">
              まずは無料説明会で詳細をご確認ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#session">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-will-gradient text-white font-bold text-lg rounded-full shadow-elevated hover:shadow-floating transition-all duration-300"
                >
                  今すぐ申し込む
                </motion.button>
              </Link>
              <Link href="#session">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-will-primary text-will-primary font-semibold text-lg rounded-full hover:bg-will-primary hover:text-white transition-all duration-300"
                >
                  無料説明会に参加
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};