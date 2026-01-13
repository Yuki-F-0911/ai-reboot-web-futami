"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateProblem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-depth-50 overflow-hidden relative">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-harmony/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-will-primary/5 rounded-full blur-3xl" />
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
          <p className="text-lg md:text-xl text-depth-600">
            単なるツール導入だけでは、組織は変わりません
          </p>
        </motion.div>

        {/* 3つの壁 */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* 1. マインドセットの壁 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-soft border border-depth-100 relative group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-harmony/10 flex items-center justify-center mb-6 text-harmony group-hover:bg-harmony group-hover:text-white transition-colors duration-300">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-depth-800 mb-4">
              マインドセットの壁
            </h3>
            <p className="text-depth-600 leading-relaxed">
              「AIに仕事が奪われる」という不安や、変化への抵抗感が強く、現場での活用が進まない。
            </p>
          </motion.div>

          {/* 2. スキルの壁 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-soft border border-depth-100 relative group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-will-primary/10 flex items-center justify-center mb-6 text-will-primary group-hover:bg-will-primary group-hover:text-white transition-colors duration-300">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-depth-800 mb-4">
              実践スキルの壁
            </h3>
            <p className="text-depth-600 leading-relaxed">
              一般的なプロンプト講座を受けても、自社の具体的な業務にどう適用すればいいか分からない。
            </p>
          </motion.div>

          {/* 3. 組織文化の壁 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-soft border border-depth-100 relative group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-wisdom/10 flex items-center justify-center mb-6 text-wisdom group-hover:bg-wisdom group-hover:text-white transition-colors duration-300">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-depth-800 mb-4">
              組織文化の壁
            </h3>
            <p className="text-depth-600 leading-relaxed">
              推進者だけが詳しくなり、チーム全体でのナレッジ共有やルール作りが追いついていない。
            </p>
          </motion.div>
        </div>

        {/* 解決策への導入 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-harmony to-will-primary rounded-3xl p-1 shadow-elevated max-w-4xl mx-auto"
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