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
            実践を重視した2段階プログラム
          </h2>
          <div className="bg-gradient-to-r from-harmony-lighter to-will-lighter p-8 rounded-3xl">
            <p className="text-xl text-depth-700 leading-relaxed">
              ベーシック研修で基礎力を固め、アドバンス研修で実装力を高める。<br />
              さらにフォロー研修で確実に定着させる、段階的な学習プログラムです。
            </p>
          </div>
        </motion.div>
        
        {/* プログラム一覧 */}
        <div className="space-y-16 max-w-6xl mx-auto mt-16">
          {/* ベーシック研修 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-10 shadow-elevated">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-harmony flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-3xl font-bold text-depth-800">
                  ベーシック研修
                </h3>
              </div>
              
              <p className="text-xl text-harmony font-bold mb-4">
                AIパラダイムシフト＆生成AI活用力向上（2日間）
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-depth-800 mb-3">概要</h4>
                  <ul className="space-y-2 text-depth-700">
                    <li><span className="font-bold">期間:</span> 2日間（12時間）</li>
                    <li><span className="font-bold">対象:</span> 10〜30名程度</li>
                    <li><span className="font-bold">形式:</span> 集合研修（対面推奨）</li>
                    <li><span className="font-bold">目的:</span> 個人が業務でAIを使いこなせる基礎力を習得</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-depth-800 mb-3">主な内容</h4>
                  <ul className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>AIパラダイムシフトの理解（思考のOSを書き換える）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>組織が直面する3つの壁の突破（言語・未経験・習慣の壁）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>各種AIツールの実践的な体験と活用</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>個人のAI作業環境構築</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>業務での活用アイデア創出</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-harmony-lighter to-will-lighter p-6 rounded-2xl">
                <h4 className="font-bold text-depth-800 mb-3">研修の成果物</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>個人のAI作業環境（設定済み）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>プロンプトテンプレート集</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>業務別活用アイデアリスト</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony mt-1">•</span>
                      <span>AI活用ガイドライン</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* アドバンス研修 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl p-10 shadow-elevated">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-will-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-3xl font-bold text-depth-800">
                  アドバンス研修
                </h3>
              </div>
              
              <p className="text-xl text-will-primary font-bold mb-4">
                チーム活用＆AIエージェント開発（2日間）
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-depth-800 mb-3">概要</h4>
                  <ul className="space-y-2 text-depth-700">
                    <li><span className="font-bold">期間:</span> 2日間（12時間）</li>
                    <li><span className="font-bold">対象:</span> 10〜30名程度</li>
                    <li><span className="font-bold">形式:</span> 集合研修（対面推奨）</li>
                    <li><span className="font-bold">目的:</span> チーム全体でAI活用環境を構築し、AIエージェント開発まで実装</li>
                    <li><span className="font-bold">前提:</span> AI基礎知識があることが望ましい（ベーシック研修受講者推奨）</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-depth-800 mb-3">主な内容</h4>
                  <ul className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>チーム共通リポジトリの構築（プロンプトライブラリ・ナレッジベース）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>業務フロー分析とAIエージェント化の設計</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>AIエージェントのプロトタイピング実践</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>社内AI活用推進体制の設計</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>内製化・展開計画の策定</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-will-lighter to-harmony-lighter p-6 rounded-2xl">
                <h4 className="font-bold text-depth-800 mb-3">研修の成果物</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>チーム共通のAIリポジトリ（構築済み）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>AIエージェントのプロトタイプ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>業務フロー改善提案書</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>社内AI活用推進ガイドライン</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary mt-1">•</span>
                      <span>内製化・展開計画書</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* フォロー研修（オプション） */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-10 shadow-elevated border-2 border-wisdom">
              <div className="flex items-center gap-4 mb-6">
                <div className="px-4 py-2 rounded-xl bg-wisdom flex items-center justify-center">
                  <span className="text-lg font-bold text-white whitespace-nowrap">Option</span>
                </div>
                <h3 className="text-3xl font-bold text-depth-800">
                  フォロー研修
                </h3>
              </div>
              
              <p className="text-xl text-wisdom font-bold mb-4">
                継続的な学習プログラム
              </p>
              
              <p className="text-depth-700 mb-8 leading-relaxed">
                研修後、現場での定着を確実にし、変化し続けるAI環境に適応するための継続的な学習プログラム
              </p>
              
              <div className="bg-harmony-lighter p-6 rounded-2xl mb-6">
                <p className="text-depth-800 font-bold">
                  現在のAI活用力や企業の目指すところに応じて、回数や形態を柔軟に設計します
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-depth-800 mb-3">概要</h4>
                  <ul className="space-y-2 text-depth-700">
                    <li><span className="font-bold">期間・形態:</span> 週1回×10〜12回（各60分）のオンライン形式など、貴社の状況に合わせてカスタマイズ可能</li>
                    <li><span className="font-bold">対象:</span> 研修受講者（全員または選抜メンバー）</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-depth-800 mb-3">主な内容</h4>
                  <ul className="space-y-2 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-wisdom mt-1">•</span>
                      <span>実践での課題解決とスキル定着支援</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wisdom mt-1">•</span>
                      <span>チーム活用の最適化とナレッジ共有の促進</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wisdom mt-1">•</span>
                      <span>AIエージェントの改善と横展開</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wisdom mt-1">•</span>
                      <span>社内推進体制の強化</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wisdom mt-1">•</span>
                      <span>最新AI技術のキャッチアップ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};