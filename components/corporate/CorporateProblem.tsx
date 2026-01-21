"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateProblem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-depth-50 overflow-hidden relative">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-harmony/3 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-will-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-6">
            なぜ、多くの企業の
            <br className="md:hidden" />
            AI導入は失敗するのか？
          </h2>
          <p className="text-lg md:text-xl text-depth-700">
            単なるツール導入だけでは、組織は変わりません
          </p>
        </motion.div>

        {/* 3つの壁 - B2B Grid Style */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 px-4">
          {/* 1. マインドセットの壁 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-transparent"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-xl bg-harmony/10 flex items-center justify-center mb-6 text-harmony">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-depth-800 mb-4 tracking-tight">
                マインドセットの壁
              </h3>
              <div className="w-12 h-1 bg-harmony mb-6 mx-auto"></div>
              <p className="text-depth-700 leading-relaxed">
                「AIに仕事が奪われる」という不安や、<br className="hidden md:block" />変化への抵抗感が強く、<br className="hidden md:block" />現場での活用が進まない。
              </p>
            </div>
          </motion.div>

          {/* 2. スキルの壁 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-transparent relative md:before:content-[''] md:before:absolute md:before:left-[-1rem] md:before:top-1/4 md:before:h-1/2 md:before:w-[1px] md:before:bg-depth-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-xl bg-will-primary/10 flex items-center justify-center mb-6 text-will-primary">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-depth-800 mb-4 tracking-tight">
                実践スキルの壁
              </h3>
              <div className="w-12 h-1 bg-will-primary mb-6 mx-auto"></div>
              <p className="text-depth-700 leading-relaxed">
                一般的なプロンプト講座を受けても、<br className="hidden md:block" />自社の具体的な業務に<br className="hidden md:block" />どう適用すればいいか分からない。
              </p>
            </div>
          </motion.div>

          {/* 3. 組織文化の壁 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-transparent relative md:before:content-[''] md:before:absolute md:before:left-[-1rem] md:before:top-1/4 md:before:h-1/2 md:before:w-[1px] md:before:bg-depth-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-xl bg-wisdom/10 flex items-center justify-center mb-6 text-wisdom">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-depth-800 mb-4 tracking-tight">
                組織文化の壁
              </h3>
              <div className="w-12 h-1 bg-wisdom mb-6 mx-auto"></div>
              <p className="text-depth-700 leading-relaxed">
                推進者だけが詳しくなり、<br className="hidden md:block" />チーム全体でのナレッジ共有や<br className="hidden md:block" />ルール作りが追いついていない。
              </p>
            </div>
          </motion.div>
        </div>

        {/* 解決策への導入 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-harmony to-will-primary rounded-lg p-1 shadow-elevated max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[1.4rem] p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-depth-800 mb-6">
              必要なのは、<span className="text-transparent bg-clip-text bg-gradient-to-r from-harmony to-will-primary">「思考のOS」</span>のアップデート
            </h3>
            <p className="text-lg text-depth-700 leading-relaxed">
              AIリブート研修は、表面的なツールの使い方ではなく、<br className="hidden md:block" />
              組織全体がAI時代に適応するための<span className="font-bold border-b-2 border-harmony/30">マインド・スキル・文化</span>を同時に醸成します。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};