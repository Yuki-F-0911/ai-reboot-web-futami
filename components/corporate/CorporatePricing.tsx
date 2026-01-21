"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporatePricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-6">
            料金について
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-harmony leading-[1.6]">
            助成金活用で、実質負担を大幅に軽減
          </p>
        </motion.div>

        {/* 料金案内 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="text-center mb-10">
            <p className="text-lg text-depth-700 leading-relaxed">
              研修費用の詳細は、貴社の課題やご希望の内容に応じて柔軟にご提案いたします。<br />
              <span className="text-harmony font-bold">人材開発支援助成金（リスキリング）を活用することで、実質負担を大幅に軽減</span>できます。
            </p>
          </div>
        </motion.div>

        {/* 助成金活用 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-depth-800 mb-6 leading-[1.4]">
                助成金活用シミュレーション
              </h3>
              <p className="text-base md:text-lg text-depth-700 leading-[1.8]">
                実際にどの程度の実質負担額になるのか、具体的な計算例をご紹介します。
              </p>
            </div>

            {/* 例1と例2を横並び - Clean Bordered Style */}
            <div className="grid lg:grid-cols-2 gap-0 border border-depth-200 rounded-xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-depth-200 shadow-sm">
              {/* 例1 */}
              <div className="bg-white p-8 md:p-10">
                <div className="text-center mb-8 pb-6 border-b border-depth-100">
                  <h4 className="text-xl font-bold text-depth-800 mb-2">
                    【例1】AIリブート研修（3日間）
                  </h4>
                  <p className="text-sm text-depth-600">参加者数: 10名 / 18時間</p>
                </div>

                {/* ビジュアル表示 */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-depth-600">研修費用（税抜）</span>
                    <span className="text-2xl font-bold text-depth-800">210万円</span>
                  </div>

                  <div className="space-y-3 pl-4 border-l-2 border-harmony/30">
                    <div className="flex justify-between items-center text-harmony">
                      <span className="text-sm">経費助成（75%）</span>
                      <span className="font-bold">▲157.5万円</span>
                    </div>
                    <div className="flex justify-between items-center text-will-primary">
                      <span className="text-sm">賃金助成</span>
                      <span className="font-bold">▲18万円</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-depth-100">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold text-depth-800">実質負担額</span>
                      <span className="text-4xl font-black text-harmony">55.5<span className="text-xl font-bold ml-1 text-depth-600">万円</span></span>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                      <span className="text-xs text-depth-500">（内消費税 21万円）</span>
                      <span className="inline-block px-3 py-1 bg-harmony/10 text-harmony text-sm font-bold rounded">負担率 約26%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 例2 */}
              <div className="bg-white p-8 md:p-10 bg-depth-50/30">
                <div className="text-center mb-8 pb-6 border-b border-depth-100">
                  <h4 className="text-xl font-bold text-depth-800 mb-2">
                    【例2】研修 ＋ フォローアップ
                  </h4>
                  <p className="text-sm text-depth-600">参加者 15名 / 4日間 + 12回フォロー</p>
                </div>

                {/* ビジュアル表示 */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-depth-600">研修費用（税抜）</span>
                    <span className="text-2xl font-bold text-depth-800">420万円</span>
                  </div>

                  <div className="space-y-3 pl-4 border-l-2 border-harmony/30">
                    <div className="flex justify-between items-center text-harmony">
                      <span className="text-sm">経費助成（75%）</span>
                      <span className="font-bold">▲315万円</span>
                    </div>
                    <div className="flex justify-between items-center text-will-primary">
                      <span className="text-sm">賃金助成</span>
                      <span className="font-bold">▲54万円</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-depth-100">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold text-depth-800">実質負担額</span>
                      <span className="text-4xl font-black text-harmony">93<span className="text-xl font-bold ml-1 text-depth-600">万円</span></span>
                    </div>
                    <div className="flex justify-end items-center gap-3">
                      <span className="text-xs text-depth-500">（内消費税 42万円）</span>
                      <span className="inline-block px-3 py-1 bg-harmony/10 text-harmony text-sm font-bold rounded">負担率 約22%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 助成金メリット */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto border-t border-depth-200 pt-12">
            <div className="text-center">
              <div className="text-harmony mb-3 flex justify-center">
                <div className="p-3 bg-harmony/5 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-bold text-depth-800 mb-1">経費助成</h4>
              <p className="text-depth-700 text-sm">訓練経費の最大75%を助成</p>
            </div>

            <div className="text-center">
              <div className="text-will-primary mb-3 flex justify-center">
                <div className="p-3 bg-will-primary/5 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="font-bold text-depth-800 mb-1">賃金助成</h4>
              <p className="text-depth-700 text-sm">研修時間中の賃金も助成対象</p>
            </div>
          </div>

          {/* 締めメッセージ */}
          <div className="bg-depth-50 rounded-lg p-8 text-center border border-depth-100">
            <p className="text-lg text-depth-800 leading-relaxed font-medium">
              助成金を活用することで、<span className="font-bold text-harmony">実質2割程度の負担</span>で<br className="hidden md:block" />
              組織全体のAI活用力を強化する研修を実施することが可能です。
            </p>
            <p className="text-sm text-depth-600 mt-4">
              ※助成金の要件確認や申請サポートも行っております。お気軽にご相談ください。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};