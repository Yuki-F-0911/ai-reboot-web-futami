"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateCase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 bg-harmony/10 text-harmony font-bold text-sm mb-4">CASE STUDY</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-6">
            導入実績：ウィルトラスト様
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-harmony leading-[1.6]">
            ゴルフ練習場運営企業が、AIリブート研修で実現したこと
          </p>
        </motion.div>

        {/* 企業概要と導入内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* 企業概要 */}
            <div className="border-l-4 border-harmony pl-6">
              <h3 className="text-sm font-bold text-depth-500 uppercase tracking-wider mb-2">企業概要</h3>
              <p className="text-lg text-depth-800">
                <span className="font-bold">業種:</span> ゴルフ練習場運営・コンサルティング
              </p>
            </div>

            {/* 導入内容 */}
            <div className="border-l-4 border-will-primary pl-6">
              <h3 className="text-sm font-bold text-depth-500 uppercase tracking-wider mb-2">導入内容</h3>
              <ul className="space-y-1 text-depth-800">
                <li><span className="font-bold">研修:</span> 4日間（24時間）＋フォロー研修（1時間×12回）</li>
                <li><span className="font-bold">参加者数:</span> 10名</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 実施後の感想 */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-depth-800 text-center leading-[1.4]">実施後の感想</h3>
          <p className="text-sm text-depth-600 mb-8 text-center">
            代表取締役礒崎様より
          </p>

          {/* 動画と文章を横並び */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* 左：動画 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:sticky lg:top-24"
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/AcJrcmt1bp8"
                  title="お客様の声 - ウィルトラスト社 礒崎様"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* 右：テキストの声 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <blockquote className="border-l-4 border-harmony pl-6 text-depth-700 leading-[1.9] space-y-4">
                <p>
                  AI研修については、実は私はこれまで多くの企業から営業を受けてきました。しかし、そこで聞いたほぼすべての企業で言われるのは、「AIツールの使い方をスタッフに学んでもらうことが、何よりも大事です」ということでした。
                </p>
                <p>
                  それに対し、ウィルフォワード社の研修は、焦点がまったく異なりました。そこ（ツールの使い方）ではなく、もっと上位の概念、つまり<span className="font-semibold text-harmony">「そのツールを使って、自分たちはどうしていくのか」</span>という点を重視しています。
                </p>
                <p>
                  単なるツールの使い方以上に、<span className="font-semibold text-will-primary">「自分たちの思い（Will）は何か」「将来どうなっていきたいのか」</span>というビジョンを、研修と同時に深く考えさせてくれるきっかけとなる、そんな4日間だったと感じています。
                </p>
                <p>
                  この研修は、単に「AIツールを導入しよう」と考えている企業ではなく、<span className="font-semibold text-wisdom">「もう一度、自分たちの組織を大きくしていきたい」</span>と本気で考えている、そんな情熱のある会社や経営者にこそ強くお勧めします。
                </p>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

