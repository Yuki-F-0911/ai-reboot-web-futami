"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateCase = () => {
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
            導入実績：ウィルトラスト様
          </h2>
          <p className="text-xl text-depth-700 leading-relaxed">
            ゴルフ練習場運営企業が、AIリブート研修で実現したこと
          </p>
        </motion.div>
        
        {/* 企業概要 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-harmony-lighter to-will-lighter p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 text-depth-800">企業概要</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold text-harmony mb-2">業種</h4>
                <p className="text-depth-700">ゴルフ練習場運営・コンサルティング</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold text-harmony mb-2">従業員数</h4>
                <p className="text-depth-700">約20名</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold text-harmony mb-2">導入期間</h4>
                <p className="text-depth-700">2024年8月〜12月（5ヶ月間）</p>
              </div>
            </div>
            
            <div className="mt-6 bg-white p-6 rounded-2xl">
              <h4 className="font-bold text-harmony mb-3">課題</h4>
              <ul className="space-y-2 text-depth-700">
                <li className="flex items-start gap-2">
                  <span className="text-harmony mt-1">•</span>
                  <span>事業拡大に伴うマンパワー不足</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-harmony mt-1">•</span>
                  <span>新規事業（買収案件・他県からのコンサル依頼）への対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-harmony mt-1">•</span>
                  <span>全社員のスキルレベル底上げ</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* 導入内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="bg-white rounded-3xl p-10 shadow-elevated">
            <h3 className="text-2xl font-bold mb-6 text-depth-800">導入内容</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-harmony flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <p className="font-bold text-depth-800 mb-1">ベーシック研修＋アドバンス研修</p>
                  <p className="text-depth-700">2日間×2回（8月、10月）</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-will-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <p className="font-bold text-depth-800 mb-1">フォロー研修</p>
                  <p className="text-depth-700">週1回×12回（1時間）</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-wisdom flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <p className="font-bold text-depth-800 mb-1">対象</p>
                  <p className="text-depth-700">全社員（約20名）</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 成果 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-depth-100 to-white rounded-3xl p-10 shadow-elevated">
            <h3 className="text-2xl font-bold mb-8 text-depth-800 text-center">成果</h3>
            
            {/* 定量的成果 */}
            <div className="mb-10">
              <h4 className="text-xl font-bold mb-6 text-harmony">定量的成果</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-harmony mb-2">70%</div>
                  <p className="text-depth-700">議事録作成時間を削減</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-will-primary mb-2">5倍</div>
                  <p className="text-depth-700">提案資料作成スピードが向上</p>
                </div>
                <div className="bg-white p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-wisdom mb-2">3倍</div>
                  <p className="text-depth-700">社内ナレッジの共有率が増加</p>
                </div>
              </div>
            </div>
            
            {/* 定性的成果 */}
            <div className="mb-10">
              <h4 className="text-xl font-bold mb-6 text-will-primary">定性的成果</h4>
              <ul className="space-y-3 text-depth-700">
                <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                  <span className="text-will-primary mt-1">•</span>
                  <span>全社員が日常業務でAIを活用する文化が定着</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                  <span className="text-will-primary mt-1">•</span>
                  <span>「やりたいことができない」という諦めから、「やりたいことに挑戦できる」というマインドセットに変化</span>
                </li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                  <span className="text-will-primary mt-1">•</span>
                  <span>他ゴルフ練習場へのコンサルティング提案力が大幅に向上</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* 参加者の声 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-depth-800 text-center">参加者の声</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-elevated">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-harmony flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-depth-800">営業担当</p>
                </div>
              </div>
              <p className="text-depth-700 leading-relaxed italic">
                「AIという武器を手にしたことで、これまで『自分にはできない』と思っていたことに挑戦できるようになった。会社の成長スピードが明らかに変わった。」
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-elevated">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-will-primary flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-depth-800">企画担当</p>
                </div>
              </div>
              <p className="text-depth-700 leading-relaxed italic">
                「音声入力でAIと会話しながら資料を作るスタイルに変えたことで、思考が整理され、アウトプットの質が上がった。」
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

