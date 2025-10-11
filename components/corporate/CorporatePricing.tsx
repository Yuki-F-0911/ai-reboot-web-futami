"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporatePricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            料金について
          </h2>
          <p className="text-xl text-depth-700 leading-relaxed">
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
          <div className="bg-white rounded-3xl p-10 shadow-elevated">
            <h3 className="text-2xl font-bold mb-8 text-depth-800 text-center">料金のご案内</h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-harmony-lighter to-white p-6 rounded-2xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-bold text-depth-800 mb-2">
                      ベーシック研修・アドバンス研修（各2日間・12時間）
                    </h4>
                    <p className="text-depth-600">実践型AI活用研修プログラム</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-depth-600">税抜</p>
                    <p className="text-3xl font-bold text-harmony">140万円</p>
                    <p className="text-sm text-depth-600 mt-1">税込 154万円</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 助成金活用 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-will-lighter via-white to-harmony-lighter p-10 rounded-3xl shadow-elevated">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-depth-800 mb-4">
                人材開発支援助成金（リスキリング）で、実質負担が約37万円に
              </h3>
              <p className="text-lg text-depth-700">
                人材開発支援助成金を活用した場合の例（10名参加の場合）
              </p>
            </div>
            
            {/* 計算表 */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-soft">
              <table className="w-full">
                <tbody className="divide-y divide-depth-200">
                  <tr>
                    <td className="py-4 text-depth-700">研修費用（税込）</td>
                    <td className="py-4 text-right text-xl font-bold text-depth-800">154万円</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-depth-700">
                      <span className="font-bold text-harmony">経費助成</span>（75%）
                    </td>
                    <td className="py-4 text-right text-xl font-bold text-harmony">▲105万円</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-depth-700">
                      <span className="font-bold text-will-primary">賃金助成</span>（研修時間分）
                    </td>
                    <td className="py-4 text-right text-xl font-bold text-will-primary">▲12万円</td>
                  </tr>
                  <tr className="bg-harmony-lighter">
                    <td className="py-4 font-bold text-depth-800 text-lg">実質負担額</td>
                    <td className="py-4 text-right text-2xl font-bold text-harmony">約37万円</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center mt-6 text-lg font-bold text-depth-800">
                実質負担率：約24%
              </p>
            </div>
            
            {/* 助成金メリット */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
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
              
              <div className="bg-white p-6 rounded-2xl text-center">
                <div className="text-wisdom mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-depth-800 mb-2">申請サポート</h4>
                <p className="text-depth-700 text-sm">手続きも丁寧に支援いたします</p>
              </div>
            </div>
            
            {/* 注意書き */}
            <div className="bg-harmony/10 rounded-2xl p-6 text-center">
              <p className="text-depth-800 leading-relaxed">
                助成金の活用により料金が変動する可能性がありますので、<br />
                <span className="font-bold text-harmony">まずは無料相談で、貴社の状況に合わせた最適なプランと料金をご提案させてください。</span>
              </p>
              <p className="text-depth-700 mt-4">
                詳しい料金や助成金の活用方法については、無料相談にてご案内いたします。<br />
                お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};