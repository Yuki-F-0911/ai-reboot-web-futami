"use client";

import { motion } from "framer-motion";

export const AcademyProgram = () => {
  return (
    <section id="program" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-depth-900 mb-16">
            プログラムの流れ
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* 左側のタイムライン */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-will-primary via-will-primary/50 to-transparent" />
              
              {/* 無料説明会 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6 md:gap-8 mb-8"
              >
                {/* タイムラインのポイント */}
                <div className="absolute left-0 md:left-8 w-4 h-4 bg-will-primary/50 rounded-full -translate-x-[7px] mt-6 z-10" />
                
                <div className="ml-8 md:ml-20 flex-1 bg-gradient-to-br from-will-primary/5 to-will-primary/10 rounded-xl p-6 border border-will-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-will-primary bg-will-primary/10 px-3 py-1 rounded-full">無料</span>
                    <h3 className="text-lg font-bold text-depth-900">オンライン説明会</h3>
                  </div>
                  <p className="text-sm text-depth-600">プログラムの詳細説明・質疑応答・個別相談</p>
                </div>
              </motion.div>
              
              {/* AIリブートキャンプ */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6 md:gap-8"
              >
                {/* タイムラインのポイント */}
                <div className="absolute left-0 md:left-8 w-4 h-4 bg-will-primary rounded-full -translate-x-[7px] mt-8 z-10">
                  <div className="absolute inset-0 bg-will-primary rounded-full animate-ping" />
                </div>
                
                <div className="ml-8 md:ml-20 flex-1 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-depth-900 mb-3">AIリブートキャンプ</h3>
                  <p className="text-depth-600 mb-4">2日間の宿泊型集合研修</p>
                  <div className="space-y-2 text-depth-700">
                    <p>• 生成AI活用の基礎と応用</p>
                    <p>• AI時代のマインドセット形成</p>
                    <p>• 実践演習とプロトタイピング</p>
                    <p>• 100日間の目標設定</p>
                  </div>
                </div>
              </motion.div>

              {/* 100日間の期間表示 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative py-2"
              >
                <div className="absolute left-0 md:left-8 -translate-x-1/2 bg-white px-2 py-1">
                  <p className="text-xs font-bold text-will-primary">100日間</p>
                </div>
              </motion.div>

              {/* AIリブート100（縦長デザイン） */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6 md:gap-8"
              >
                {/* 100日間の継続線 */}
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-will-primary/30 via-will-primary/40 to-will-primary/30 -translate-x-[1px]" />
                
                <div className="ml-8 md:ml-20 flex-1">
                  <div className="bg-gradient-to-br from-will-primary/5 to-will-primary/10 rounded-xl p-8 border border-will-primary/20">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-depth-900 mb-2">AIリブート100</h3>
                      <p className="text-depth-600">100日間の継続的な実践プログラム</p>
                    </div>
                    
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white/70 rounded-lg p-5"
                      >
                        <h4 className="font-semibold text-depth-800 mb-2">📅 毎週のオンラインセッション</h4>
                        <p className="text-sm text-depth-600">最新のAI活用事例と実践的なワークショップ</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white/70 rounded-lg p-5"
                      >
                        <h4 className="font-semibold text-depth-800 mb-2">💬 個別メンタリング</h4>
                        <p className="text-sm text-depth-600">一人ひとりの課題に寄り添うフィードバック</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white/70 rounded-lg p-5"
                      >
                        <h4 className="font-semibold text-depth-800 mb-2">🎯 キャリアコンサルティング</h4>
                        <p className="text-sm text-depth-600">月1回の自己理解とキャリア設計支援</p>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/70 rounded-lg p-5"
                      >
                        <h4 className="font-semibold text-depth-800 mb-2">🚀 実践プロジェクト</h4>
                        <p className="text-sm text-depth-600">実際の課題解決に挑戦する実践的な学び</p>
                      </motion.div>
                    </div>
                    
                    {/* 100日間のビジュアル表現 */}
                    <div className="mt-8 pt-8 border-t border-will-primary/20">
                      <div className="flex items-center justify-center gap-4">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-will-primary">100</p>
                          <p className="text-xs text-depth-600">DAYS</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(10)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: 0.7 + i * 0.05 }}
                              viewport={{ once: true }}
                              className="w-1 h-8 bg-will-primary/30 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-depth-500 text-center mt-3">
                        ※期間は目安です。スケジュールにより前後する場合があります。
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* スペーサー */}
              <div className="py-4" />

              {/* DEMO DAY */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6 md:gap-8"
              >
                {/* タイムラインのポイント */}
                <div className="absolute left-0 md:left-8 w-4 h-4 bg-will-primary rounded-full -translate-x-[7px] mt-8 z-10">
                  <div className="absolute inset-0 bg-will-primary rounded-full animate-ping" />
                </div>
                
                <div className="ml-8 md:ml-20 flex-1 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <div className="absolute -top-4 left-8 bg-will-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                    100日間終了
                  </div>
                  <h3 className="text-2xl font-bold text-depth-900 mb-3">DEMO DAY</h3>
                  <p className="text-depth-600 mb-4">最終発表会</p>
                  <div className="space-y-2 text-depth-700">
                    <p>• 100日間の成果発表</p>
                    <p>• 自己成長の振り返り</p>
                    <p>• 今後のビジョン共有</p>
                    <p>• 修了証授与</p>
                  </div>
                </div>
              </motion.div>

              {/* プログラム終了後のサポート */}
              <div className="relative mt-12 pt-12 border-t-2 border-dashed border-depth-200">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-50 px-4">
                  <p className="text-sm font-semibold text-depth-500">プログラム終了後のサポート</p>
                </div>
              </div>

              {/* 転職支援 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6 md:gap-8 mt-8"
              >
                {/* タイムラインのポイント（色変更） */}
                <div className="absolute left-0 md:left-8 w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full -translate-x-[7px] mt-8 z-10">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping" />
                </div>
                
                <div className="ml-8 md:ml-20 flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 shadow-sm border border-emerald-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-depth-900">転職支援</h3>
                  </div>
                  <p className="text-depth-600 mb-4">AI人材としてのキャリア形成サポート</p>
                  <div className="space-y-2 text-depth-700">
                    <p>• AI人材としてのポートフォリオ作成支援</p>
                    <p>• キャリアカウンセリング</p>
                    <p>• 転職エージェント連携</p>
                    <p>• 継続的なスキルアップ支援</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};