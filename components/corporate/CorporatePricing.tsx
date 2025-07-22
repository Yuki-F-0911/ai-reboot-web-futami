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
            価格とリスキリング補助金
          </h2>
        </motion.div>
        
        {/* 価格表 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl shadow-elevated overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-harmony to-will-secondary text-white">
                  <th className="px-6 py-4 text-left">プログラム</th>
                  <th className="px-6 py-4 text-right">料金（税抜）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-depth-200">
                  <td className="px-6 py-6">
                    <div className="font-bold text-depth-800">AIリブート研修（10時間）</div>
                    <div className="text-sm text-depth-600 mt-1">座学＋実践の基礎研修</div>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="text-2xl font-bold text-depth-800">1,400,000円</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-6">
                    <div className="font-bold text-depth-800">伴走型開発支援（3ヶ月）</div>
                    <div className="text-sm text-depth-600 mt-1">現場での実践サポート</div>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="text-2xl font-bold text-depth-800">200,000円／人</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
        
        {/* リスキリング補助金 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-will-lighter via-white to-harmony-lighter p-10 rounded-3xl shadow-elevated">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-depth-800 mb-4">
                リスキリング補助金について
              </h3>
              <p className="text-xl font-bold text-harmony">
                経済産業省「リスキリングを通じたキャリアアップ支援事業」対象講座
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* OFF-JT研修 */}
              <div className="bg-white p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-harmony">
                  OFF-JT研修（AIリブート研修）
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-depth-700">受講料補助</span>
                    <span className="text-2xl font-bold text-harmony">75%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-depth-700">実質負担額</span>
                    <span className="text-xl font-bold text-depth-800">35万円（税別）</span>
                  </div>
                  <div className="pt-4 border-t border-depth-200">
                    <div className="flex items-start gap-2">
                      <span className="text-depth-700">賃金補助</span>
                      <div className="text-right flex-1">
                        <span className="font-bold text-depth-800">1,000円/時間</span>
                        <span className="text-sm text-depth-600 block">（最大1万円/人）</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* OJT */}
              <div className="bg-white p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-will-primary">
                  OJT（伴走型実践支援）
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-depth-700">補助上限</span>
                    <span className="text-2xl font-bold text-will-primary">最大20万円</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-depth-700">対象</span>
                    <span className="text-depth-800">1人あたり</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-harmony/10 rounded-2xl text-center">
              <p className="text-depth-800 font-bold">
                補助金活用で、企業負担を大幅に軽減可能です。
              </p>
              <p className="text-depth-700 mt-2">
                申請方法・対象条件についてもサポートいたします。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};