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
            <p className="text-lg text-depth-700 leading-relaxed text-center mb-8">
              研修費用の詳細は、貴社の課題やご希望の内容に応じて柔軟にご提案いたします。<br />
              <span className="font-bold text-harmony">人材開発支援助成金（リスキリング）を活用することで、実質負担を大幅に軽減</span>できます。
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
          <div className="bg-gradient-to-br from-will-lighter via-white to-harmony-lighter p-10 rounded-3xl shadow-elevated">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-depth-800 mb-4">
                助成金活用例
              </h3>
              <p className="text-lg text-depth-700">
                実際にどの程度の実質負担額になるのか、具体的な計算例をご紹介します。
              </p>
            </div>
            
            {/* 例1 */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-soft">
              <h4 className="text-xl font-bold text-depth-800 mb-6">
                【例1】AIリブート研修（3日間・18時間）
              </h4>
              <div className="mb-4">
                <p className="text-depth-700"><span className="font-bold">参加者数:</span> 10名</p>
                <p className="text-depth-700"><span className="font-bold">研修費用（税抜）:</span> 210万円</p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-depth-200">
                    <th className="py-3 text-left text-depth-800">項目</th>
                    <th className="py-3 text-right text-depth-800">金額</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-depth-200">
                  <tr>
                    <td className="py-4 text-depth-700">助成額</td>
                    <td className="py-4 text-right text-depth-700">
                      <div><span className="font-bold text-harmony">157.5万円</span>（経費助成75%）</div>
                      <div className="mt-2">＋</div>
                      <div className="mt-2"><span className="font-bold text-will-primary">18万円</span>（賃金助成：1,000円×10名×18時間）</div>
                    </td>
                  </tr>
                  <tr className="bg-harmony-lighter">
                    <td className="py-4 font-bold text-depth-800 text-lg">実質負担額</td>
                    <td className="py-4 text-right text-2xl font-bold text-harmony">34.5万円 ＋ 総額に対する消費税</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center mt-6 text-lg font-bold text-depth-800">
                実質負担率：約17%
              </p>
            </div>
            
            {/* 例2 */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-soft">
              <h4 className="text-xl font-bold text-depth-800 mb-6">
                【例2】AIリブート研修＋フォロー研修（4日間・24時間 ＋ 1時間×12回）
              </h4>
              <div className="mb-4">
                <p className="text-depth-700"><span className="font-bold">参加者数:</span> 10名</p>
                <p className="text-depth-700"><span className="font-bold">研修費用（税抜）:</span> 420万円</p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-depth-200">
                    <th className="py-3 text-left text-depth-800">項目</th>
                    <th className="py-3 text-right text-depth-800">金額</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-depth-200">
                  <tr>
                    <td className="py-4 text-depth-700">助成額</td>
                    <td className="py-4 text-right text-depth-700">
                      <div><span className="font-bold text-harmony">315万円</span>（経費助成75%）</div>
                      <div className="mt-2">＋</div>
                      <div className="mt-2"><span className="font-bold text-will-primary">36万円</span>（賃金助成：1,000円×10名×36時間）</div>
                    </td>
                  </tr>
                  <tr className="bg-harmony-lighter">
                    <td className="py-4 font-bold text-depth-800 text-lg">実質負担額</td>
                    <td className="py-4 text-right text-2xl font-bold text-harmony">69万円 ＋ 総額に対する消費税</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center mt-6 text-lg font-bold text-depth-800">
                実質負担率：約17%
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