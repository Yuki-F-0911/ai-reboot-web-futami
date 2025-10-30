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
          className="max-w-6xl mx-auto mb-12"
        >
          <h3 className="text-2xl font-bold mb-8 text-depth-800 text-center">参加者の声</h3>
          
          {/* 動画 */}
          <div className="bg-white rounded-3xl p-8 shadow-elevated mb-8">
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2 text-depth-800">礒崎様より、研修を通じて得られた気づきと変化について語っていただきました。</h4>
            </div>
            
            {/* YouTube埋め込み */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/1AcgnjtTlCY"
                title="お客様の声 - ウィルトラスト社 礒崎様"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* テキストの声 */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-elevated">
              <h4 className="text-xl font-bold mb-4 text-harmony">
                「ツールの使い方」ではなく、「会社の未来そのもの」を問い直す研修でした。
              </h4>
              <p className="text-depth-700 leading-relaxed mb-4">
                これまで多くの「AI研修」の営業を受けましたが、どれも「ツールの使い方」を教えるものばかりでした。しかし、ウィルフォワードさんの研修は根本から違いました。
              </p>
              <p className="text-depth-700 leading-relaxed">
                研修で問われ続けたのは、「AIで何をするか」ではなく、<strong className="text-harmony">「AIを使って、私たちは将来どうありたいか」という本質的な「Will（意志）」</strong>そのものです。
              </p>
              <p className="text-depth-700 leading-relaxed mt-4">
                おかげで、私たちがもともと描いていたビジョンを遥かに超える、とてつもなく大きな未来を描く「きっかけ」をいただきました。
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-elevated">
              <h4 className="text-xl font-bold mb-4 text-will-primary">
                メンバーの強みを再発見し、「チームで勝てる」と確信した。
              </h4>
              <p className="text-depth-700 leading-relaxed mb-4">
                研修後のメンバーの感想を聞き、「私より学びが深い」「こんなことまで考えているのか」と、その頼もしさに胸が熱くなりました。
              </p>
              <p className="text-depth-700 leading-relaxed">
                AIに苦手意識があった私自身も、メンバーそれぞれの強み（分析、コーディング、コンテンツ制作など）とAIが組み合わさる未来を想像し、心からワクワクしています。
              </p>
              <p className="text-depth-700 leading-relaxed mt-4">
                これは個人の学びで終わるものではなく、「共同学習」によってチーム全体の成長スピードを加速させていくものだと確信しました。
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-elevated">
              <h4 className="text-xl font-bold mb-4 text-wisdom">
                これは「研修」ではなく、未来への「出発点」です。
              </h4>
              <p className="text-depth-700 leading-relaxed">
                この研修は、私たちにとって「百億企業」を目指すための本当の「出発点」です。
              </p>
              <p className="text-depth-700 leading-relaxed mt-4">
                単にAIツールを導入したい企業ではなく、<strong className="text-harmony">「もう一度、本気で会社を大きくしたい」と願うすべての経営者に、この「AIリブート研修」を心から推薦します。</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

