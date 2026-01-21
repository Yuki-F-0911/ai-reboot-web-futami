"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateProblem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-28 bg-depth-50">
      <div className="container-section px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-4 md:mb-6">
            なぜ、多くの企業のAI導入は失敗するのか？
          </h2>
          <p className="text-base md:text-lg text-depth-600">
            単なるツール導入だけでは、組織は変わりません
          </p>
        </div>

        {/* 3つの壁 - シンプルなグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-10 md:mb-16">
          {/* 1. マインドセットの壁 */}
          <div className="text-center bg-white rounded-xl p-5 md:p-6 md:bg-transparent">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-harmony/10 flex items-center justify-center mb-4 md:mb-5 mx-auto text-harmony">
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-depth-800 mb-2 md:mb-3">
              マインドセットの壁
            </h3>
            <p className="text-depth-600 leading-relaxed text-sm max-w-xs mx-auto">
              「AIに仕事が奪われる」という不安や、変化への抵抗感が強く、現場での活用が進まない。
            </p>
          </div>

          {/* 2. スキルの壁 */}
          <div className="text-center bg-white rounded-xl p-5 md:p-6 md:bg-transparent">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-harmony/10 flex items-center justify-center mb-4 md:mb-5 mx-auto text-harmony">
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-depth-800 mb-2 md:mb-3">
              実践スキルの壁
            </h3>
            <p className="text-depth-600 leading-relaxed text-sm max-w-xs mx-auto">
              一般的なプロンプト講座を受けても、自社の具体的な業務にどう適用すればいいか分からない。
            </p>
          </div>

          {/* 3. 組織文化の壁 */}
          <div className="text-center bg-white rounded-xl p-5 md:p-6 md:bg-transparent">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-harmony/10 flex items-center justify-center mb-4 md:mb-5 mx-auto text-harmony">
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-depth-800 mb-2 md:mb-3">
              組織文化の壁
            </h3>
            <p className="text-depth-600 leading-relaxed text-sm max-w-xs mx-auto">
              推進者だけが詳しくなり、チーム全体でのナレッジ共有やルール作りが追いついていない。
            </p>
          </div>
        </div>

        {/* 解決策への導入 - グラデーション枠はここだけ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-harmony to-harmony-dark rounded-xl p-[2px] max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl p-6 md:p-10 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-depth-800 mb-3 md:mb-4">
              必要なのは、<span className="text-harmony">「思考のOS」</span>のアップデート
            </h3>
            <p className="text-sm md:text-base text-depth-600 leading-relaxed max-w-2xl mx-auto">
              AIリブート研修は、表面的なツールの使い方ではなく、組織全体がAI時代に適応するための<span className="font-semibold text-depth-800">マインド・スキル・文化</span>を同時に醸成します。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};