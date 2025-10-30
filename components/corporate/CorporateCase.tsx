"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateCase = () => {
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
            導入実績：ウィルトラスト様
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-harmony leading-[1.6]">
            ゴルフ練習場運営企業が、AIリブート研修で実現したこと
          </p>
        </motion.div>
        
        {/* 企業概要と導入内容を横並び */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {/* 企業概要 */}
            <div className="bg-gradient-to-br from-harmony-lighter to-will-lighter p-6 md:p-8 rounded-3xl border border-harmony/10">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-depth-800 leading-[1.4]">企業概要</h3>
              <div className="bg-white p-5 rounded-2xl">
                <p className="text-base md:text-lg text-depth-700 leading-[1.8]">
                  <span className="font-bold text-harmony">業種:</span> ゴルフ練習場運営・コンサルティング
                </p>
              </div>
            </div>
            
            {/* 導入内容 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-elevated border border-depth-100">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-depth-800 leading-[1.4]">導入内容</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-harmony text-base font-bold flex-shrink-0">●</span>
                  <p className="text-sm md:text-base text-depth-700 leading-[1.7]">
                    <span className="font-bold text-depth-800">AIリブート研修:</span> 4日間（24時間）＋フォロー研修（1時間×12回）
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-harmony text-base font-bold flex-shrink-0">●</span>
                  <p className="text-sm md:text-base text-depth-700 leading-[1.7]">
                    <span className="font-bold text-depth-800">参加者数:</span> 10名
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 参加者の声 */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-depth-800 text-center leading-[1.4]">参加者の声</h3>
          
          <div className="mb-6">
            <p className="text-sm md:text-base text-depth-700 leading-[1.7] text-center">
              礒崎様より、研修を通じて得られた気づきと変化について語っていただきました。
            </p>
          </div>
          
          {/* 動画と文章を横並び */}
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* 左：動画 */}
            <div className="md:sticky md:top-20 lg:top-24 lg:self-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="bg-white rounded-3xl p-6 shadow-elevated border border-depth-100">
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
              </motion.div>
            </div>
            
            {/* 右：テキストの声 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-5 md:p-6 shadow-elevated border border-depth-100">
                <h4 className="text-base md:text-lg font-bold mb-3 text-depth-800 leading-[1.4]">
                  ウィルトラスト社 礒崎様（引用・要約）
                </h4>
                <div className="space-y-3">
                  <p className="text-sm md:text-base text-depth-700 leading-[1.8]">
                    「最初は“AI研修＝ツールの使い方”だと思ってました。でも違いました。日常から少し離れて、会社の未来をとことん考える時間になった。<span className="font-semibold text-harmony">『Will（どうありたいか）に徹底してこだわろう』</span>というメッセージが腹に落ちました。」
                  </p>
                  <p className="text-sm md:text-base text-depth-700 leading-[1.8]">
                    「みんなの強みとAIが噛み合った瞬間、<span className="font-semibold text-will-primary">チームで勝てる</span>って本気で思えた。学びを個人で完結させず、共同学習で成長スピードが上がるのを実感しました。正直、頼もしさで胸が熱くなりました。」
                  </p>
                  <p className="text-sm md:text-base text-depth-700 leading-[1.8]">
                    「世の中のAI研修はツールの使い方が中心。でもウィルフォワードの研修はもっと上位概念。Willやビジョンから始まる。単なる研修じゃなくて、<span className="font-semibold text-wisdom">会社の未来への出発点</span>。<span className="font-semibold">もう一度、本気で会社を大きくしたい</span>企業にこそ勧めたいです。」
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

