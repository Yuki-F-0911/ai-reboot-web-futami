"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateProgram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-depth-100 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            法人向けプログラムの内容と特徴
          </h2>
          <p className="text-2xl font-bold text-harmony mb-4">
            座学＋実践＋伴走型開発支援の三段構成
          </p>
          <p className="text-xl text-depth-700">
            生成AIの活用環境を整え、個人・チームレベルで業務に組み込み、<br />
            メンターが開発・実装まで徹底伴走します。
          </p>
        </motion.div>
        
        {/* STEP1の内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-16"
        >
            <div className="bg-white rounded-3xl p-10 shadow-elevated">
              <h3 className="text-2xl font-bold mb-8 text-depth-800 text-center">
                STEP1｜AIリブート研修（10時間）
              </h3>
              
              <div className="grid md:grid-cols-2 gap-10">
                {/* DAY1 */}
                <div className="bg-gradient-to-br from-harmony-lighter to-white p-8 rounded-2xl">
                  <h4 className="text-xl font-bold mb-4 text-harmony">
                    DAY1：個人作業環境の構築
                  </h4>
                  <ul className="space-y-3 text-depth-700">
                    <li className="flex items-start gap-3">
                      <span className="text-harmony mt-1">•</span>
                      <span>生成AI（ChatGPT等）を活用するための業務環境を整備</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-harmony mt-1">•</span>
                      <span>貴社ニーズに基づき、取り組みたいテーマを選定</span>
                    </li>
                    <li className="pl-6 text-sm text-depth-600">
                      - 資料作成／画像生成／動画生成／音楽生成／チャットボット開発 等
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-harmony mt-1">•</span>
                      <span>実際に個別の業務にAIを活用し成果を出すハンズオンワーク</span>
                    </li>
                  </ul>
                </div>
                
                {/* DAY2 */}
                <div className="bg-gradient-to-br from-will-lighter to-white p-8 rounded-2xl">
                  <h4 className="text-xl font-bold mb-4 text-will-primary">
                    DAY2：チーム作業環境の構築
                  </h4>
                  <ul className="space-y-3 text-depth-700">
                    <li className="flex items-start gap-3">
                      <span className="text-will-primary mt-1">•</span>
                      <span>チームで共有できる生成AIリポジトリの構築</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-will-primary mt-1">•</span>
                      <span>ナレッジ共有や情報管理の仕組みを実装</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-will-primary mt-1">•</span>
                      <span>チーム全体でAIを活用した共同作業を体験</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-depth-100 rounded-2xl">
                <p className="text-depth-700 text-center">
                  ※10時間のプログラムは以下の形式から選択可能<br />
                  ・2日間連続の集中合宿プラン<br />
                  ・分割開催プラン（例：3時間＋2時間＋5時間）
                </p>
              </div>
            </div>
        </motion.div>
        
        {/* STEP2の内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
            <div className="bg-white rounded-3xl p-10 shadow-elevated">
              <h3 className="text-2xl font-bold mb-8 text-depth-800 text-center">
                STEP2｜伴走型開発支援（3ヶ月）
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-harmony rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h4 className="font-bold mb-2 text-depth-800">研修で得たスキルを現場の実務で実践</h4>
                  <p className="text-depth-600">実際の業務課題にAIを適用</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-harmony rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h4 className="font-bold mb-2 text-depth-800">専属メンターが週1回オンラインで伴走</h4>
                  <p className="text-depth-600">課題解決を徹底サポート</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-harmony-lighter to-will-lighter p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-depth-800">
                  サポート内容
                </h4>
                <ul className="space-y-3 text-depth-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-harmony mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>環境構築、プロンプト作成、ツール統合の実務サポート</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-harmony mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>完成まで伴走し、現場に再現性のあるスキルを定着</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-harmony mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>部門内でのナレッジ共有・マニュアル化まで支援</span>
                  </li>
                </ul>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};