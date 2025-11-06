"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporatePricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
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
          <div className="bg-white rounded-3xl p-10 shadow-elevated border border-depth-100">
            <p className="text-base md:text-lg text-depth-700 leading-[1.8] text-center">
              研修費用の詳細は、貴社の課題やご希望の内容に応じて柔軟にご提案いたします。
            </p>
            <p className="text-base md:text-lg text-depth-800 leading-[1.8] text-center mt-4 font-semibold">
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
          <div className="bg-gradient-to-br from-will-lighter via-white to-harmony-lighter p-10 md:p-12 rounded-3xl shadow-elevated border border-harmony/10">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-depth-800 mb-6 leading-[1.4]">
                助成金活用例
              </h3>
              <p className="text-base md:text-lg text-depth-700 leading-[1.8]">
                実際にどの程度の実質負担額になるのか、具体的な計算例をご紹介します。
              </p>
            </div>
            
            {/* 例1と例2を横並び */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* 例1 */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-elevated border border-depth-100">
                <div className="text-center mb-6">
                  <h4 className="text-lg md:text-xl font-bold text-depth-800 mb-2 leading-[1.4]">
                    【例1】AIリブート研修（3日間・18時間）
                  </h4>
                  <p className="text-sm text-depth-600">参加者数: 10名</p>
                </div>
                
                {/* ビジュアル表示 */}
                <div className="space-y-4">
                  {/* 研修費用 */}
                  <div className="text-center p-4 bg-depth-50 rounded-2xl">
                    <p className="text-xs md:text-sm text-depth-600 mb-1">研修費用（税抜）</p>
                    <p className="text-2xl md:text-3xl font-bold text-depth-800">210万円</p>
                  </div>
                  
                  {/* 矢印 */}
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-harmony" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  
                  {/* 助成金 */}
                  <div className="space-y-2">
                    <div className="p-3 bg-harmony/10 rounded-xl text-center">
                      <p className="text-xs text-depth-600 mb-1">経費助成（75%）</p>
                      <p className="text-xl font-bold text-harmony">▲157.5万円</p>
                    </div>
                    <div className="p-3 bg-will-primary/10 rounded-xl text-center">
                      <p className="text-xs text-depth-600 mb-1">賃金助成</p>
                      <p className="text-xl font-bold text-will-primary">▲18万円</p>
                    </div>
                  </div>
                  
                  {/* 実質負担 */}
                  <div className="text-center p-5 bg-gradient-to-r from-harmony-lighter to-will-lighter rounded-2xl border-2 border-harmony">
                    <p className="text-xs text-depth-600 mb-2">実質負担額</p>
                    <p className="text-3xl md:text-4xl font-black text-harmony mb-2">55.5万円</p>
                    <p className="text-xs text-depth-600 mb-1">（内消費税 21万円）</p>
                    <div className="inline-block px-4 py-2 bg-harmony text-white rounded-full mt-2">
                      <p className="text-base md:text-lg font-bold">約26%</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 例2 */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-elevated border border-depth-100">
                <div className="text-center mb-6">
                  <h4 className="text-lg md:text-xl font-bold text-depth-800 mb-2 leading-[1.4]">
                    【例2】AIリブート研修＋フォロー研修
                  </h4>
                  <p className="text-sm text-depth-600">4日間・24時間 ＋ 1時間×12回 / 参加者数: 15名</p>
                </div>
                
                {/* ビジュアル表示 */}
                <div className="space-y-4">
                  {/* 研修費用 */}
                  <div className="text-center p-4 bg-depth-50 rounded-2xl">
                    <p className="text-xs md:text-sm text-depth-600 mb-1">研修費用（税抜）</p>
                    <p className="text-2xl md:text-3xl font-bold text-depth-800">420万円</p>
                  </div>
                  
                  {/* 矢印 */}
                  <div className="flex justify-center">
                    <svg className="w-6 h-6 text-harmony" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  
                  {/* 助成金 */}
                  <div className="space-y-2">
                    <div className="p-3 bg-harmony/10 rounded-xl text-center">
                      <p className="text-xs text-depth-600 mb-1">経費助成（75%）</p>
                      <p className="text-xl font-bold text-harmony">▲315万円</p>
                    </div>
                    <div className="p-3 bg-will-primary/10 rounded-xl text-center">
                      <p className="text-xs text-depth-600 mb-1">賃金助成</p>
                      <p className="text-xl font-bold text-will-primary">▲54万円</p>
                    </div>
                  </div>
                  
                  {/* 実質負担 */}
                  <div className="text-center p-5 bg-gradient-to-r from-harmony-lighter to-will-lighter rounded-2xl border-2 border-harmony">
                    <p className="text-xs text-depth-600 mb-2">実質負担額</p>
                    <p className="text-3xl md:text-4xl font-black text-harmony mb-2">93万円</p>
                    <p className="text-xs text-depth-600 mb-1">（内消費税 42万円）</p>
                    <div className="inline-block px-4 py-2 bg-harmony text-white rounded-full mt-2">
                      <p className="text-base md:text-lg font-bold">約22%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 助成金メリット */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-2xl text-center">
                <div className="text-harmony mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-depth-800 mb-2">経費助成</h4>
                <p className="text-depth-700 text-sm">訓練経費の最大75%を助成</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl text-center">
                <div className="text-will-primary mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-depth-800 mb-2">賃金助成</h4>
                <p className="text-depth-700 text-sm">研修時間中の賃金も助成対象</p>
              </div>
            </div>
            
            {/* 締めメッセージ */}
            <div className="bg-harmony/10 rounded-2xl p-6 text-center">
              <p className="text-lg text-depth-800 leading-relaxed">
                助成金を活用することで、組織全体のAI活用力を強化する研修を、<br />
                <span className="font-bold text-harmony">実質2割以下の負担で実施</span>することが可能です。
              </p>
              <p className="text-xl font-bold text-depth-800 mt-6">
                まずは無料相談で、貴社の状況に合わせた最適なプランと料金をご提案させてください。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};