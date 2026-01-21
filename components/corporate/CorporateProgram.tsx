"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateProgram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-depth-100 to-white">
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
          <div className="bg-gradient-to-r from-harmony-lighter to-will-lighter p-8 rounded-lg">
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
            className="pb-16 border-b border-depth-200"
          >
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <span className="inline-block py-1 px-3 rounded bg-harmony/10 text-harmony font-bold text-sm mb-4">STEP 1</span>
                <h3 className="text-3xl md:text-4xl font-bold text-depth-800 mb-4">
                  ベーシック研修
                </h3>
                <p className="text-lg text-harmony font-bold mb-6">
                  AIパラダイムシフト＆<br />生成AI活用力向上（2日間）
                </p>
                <div className="bg-depth-50 p-6 rounded-lg">
                  <h4 className="font-bold text-depth-800 mb-3 text-sm uppercase text-depth-500 tracking-wider">Overview</h4>
                  <ul className="space-y-2 text-sm text-depth-700">
                    <li><span className="font-bold">期間:</span> 2日間（12時間）</li>
                    <li><span className="font-bold">対象:</span> 10〜30名程度</li>
                    <li><span className="font-bold">形式:</span> 集合研修（対面推奨）</li>
                    <li><span className="font-bold">目的:</span> 個人が業務でAIを使いこなせる基礎力を習得</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-8">
                <div className="mb-8">
                  <h4 className="font-bold text-depth-800 mb-4 border-b border-depth-100 pb-2">主な内容</h4>
                  <ul className="grid md:grid-cols-2 gap-4 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-harmony font-bold">01.</span>
                      <span>AIパラダイムシフトの理解（思考のOSを書き換える）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony font-bold">02.</span>
                      <span>組織が直面する3つの壁の突破（言語・未経験・習慣の壁）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony font-bold">03.</span>
                      <span>各種AIツールの実践的な体験と活用</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony font-bold">04.</span>
                      <span>個人のAI作業環境構築</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-harmony font-bold">05.</span>
                      <span>業務での活用アイデア創出</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-depth-800 mb-4 border-b border-depth-100 pb-2">研修の成果物</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-depth-700">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-harmony" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>個人のAI作業環境（設定済み）</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-harmony" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>プロンプトテンプレート集</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-depth-700">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-harmony" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>業務別活用アイデアリスト</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-harmony" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>AI活用ガイドライン</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* アドバンス研修 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pb-16 border-b border-depth-200"
          >
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <span className="inline-block py-1 px-3 rounded bg-will-primary/10 text-will-primary font-bold text-sm mb-4">STEP 2</span>
                <h3 className="text-3xl md:text-4xl font-bold text-depth-800 mb-4">
                  アドバンス研修
                </h3>
                <p className="text-lg text-will-primary font-bold mb-6">
                  チーム活用＆<br />AIエージェント開発（2日間）
                </p>
                <div className="bg-depth-50 p-6 rounded-lg">
                  <h4 className="font-bold text-depth-800 mb-3 text-sm uppercase text-depth-500 tracking-wider">Overview</h4>
                  <ul className="space-y-2 text-sm text-depth-700">
                    <li><span className="font-bold">期間:</span> 2日間（12時間）</li>
                    <li><span className="font-bold">対象:</span> 10〜30名程度</li>
                    <li><span className="font-bold">形式:</span> 集合研修（対面推奨）</li>
                    <li><span className="font-bold">目的:</span> チームでAI活用環境を構築、AIエージェント開発へ</li>
                    <li><span className="font-bold">前提:</span> ベーシック研修受講者推奨</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-8">
                <div className="mb-8">
                  <h4 className="font-bold text-depth-800 mb-4 border-b border-depth-100 pb-2">主な内容</h4>
                  <ul className="grid md:grid-cols-2 gap-4 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary font-bold">01.</span>
                      <span>チーム共通リポジトリの構築（プロンプトライブラリ・ナレッジベース）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary font-bold">02.</span>
                      <span>業務フロー分析とAIエージェント化の設計</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary font-bold">03.</span>
                      <span>AIエージェントのプロトタイピング実践</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary font-bold">04.</span>
                      <span>社内AI活用推進体制の設計</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-will-primary font-bold">05.</span>
                      <span>内製化・展開計画の策定</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-depth-800 mb-4 border-b border-depth-100 pb-2">研修の成果物</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-depth-700">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-will-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>チーム共通のAIリポジトリ（構築済み）</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-will-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>AIエージェントのプロトタイプ</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-depth-700">
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-will-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>業務フロー改善提案書</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-will-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>内製化・展開計画書</span>
                      </li>
                    </ul>
                  </div>
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
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <span className="inline-block py-1 px-3 rounded bg-wisdom/10 text-wisdom font-bold text-sm mb-4">OPTION</span>
                <h3 className="text-3xl md:text-4xl font-bold text-depth-800 mb-4">
                  フォロー研修
                </h3>
                <p className="text-lg text-wisdom font-bold mb-6">
                  継続的な学習プログラム
                </p>
                <div className="bg-depth-50 p-6 rounded-lg">
                  <h4 className="font-bold text-depth-800 mb-3 text-sm uppercase text-depth-500 tracking-wider">Overview</h4>
                  <ul className="space-y-2 text-sm text-depth-700">
                    <li><span className="font-bold">期間:</span> 週1回×10〜12回などカスタマイズ</li>
                    <li><span className="font-bold">対象:</span> 研修受講者</li>
                    <li><span className="font-bold">目的:</span> 現場定着・継続学習</li>
                    <li className="mt-2 text-xs text-depth-600">※企業の目指すところに応じて柔軟に設計</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-8">
                <div className="mb-6">
                  <p className="text-depth-700 mb-8 leading-relaxed text-lg">
                    研修後、現場での定着を確実にし、変化し続けるAI環境に適応するための継続的な学習プログラムです。
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-depth-800 mb-4 border-b border-depth-100 pb-2">主な内容</h4>
                  <ul className="grid md:grid-cols-2 gap-4 text-depth-700">
                    <li className="flex items-start gap-2">
                      <span className="text-wisdom font-bold">•</span>
                      <span>実践での課題解決とスキル定着支援</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wisdom font-bold">•</span>
                      <span>チーム活用の最適化とナレッジ共有の促進</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wisdom font-bold">•</span>
                      <span>AIエージェントの改善と横展開</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wisdom font-bold">•</span>
                      <span>社内推進体制の強化</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wisdom font-bold">•</span>
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