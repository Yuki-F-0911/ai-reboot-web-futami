"use client";

import { useRef } from "react";

export const CorporateCase = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className="py-14 md:py-24 bg-white">
      <div className="container-section px-5 sm:px-6">
        <div className="max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6">
            {/* ラベル部分 */}
            <div className="flex items-center gap-2 mb-3 md:mb-0 md:flex-col md:items-center md:pt-1">
              <div className="w-8 h-px md:w-px md:h-6 bg-harmony/40"></div>
              <span className="text-harmony font-semibold text-xs tracking-wider whitespace-nowrap">CASE STUDY</span>
              <div className="hidden md:block w-px h-6 bg-harmony/40"></div>
            </div>
            {/* コンテンツ部分 */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-3 md:mb-4">
                導入実績：ウィルトラスト様
              </h2>
              <p className="text-base md:text-lg text-depth-600">
                ゴルフ練習場運営企業が、AIリブート研修で実現したこと
              </p>
            </div>
          </div>
        </div>

        {/* 企業概要と導入内容 */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* 企業概要 */}
            <div className="border-l-2 border-harmony pl-4 py-2 sm:py-0">
              <h3 className="text-xs md:text-sm font-semibold text-depth-500 uppercase tracking-wider mb-1">企業概要</h3>
              <p className="text-sm text-depth-700">
                <span className="font-medium">業種:</span> ゴルフ練習場運営・コンサルティング
              </p>
            </div>

            {/* 導入内容 */}
            <div className="border-l-2 border-harmony pl-4 py-2 sm:py-0">
              <h3 className="text-xs md:text-sm font-semibold text-depth-500 uppercase tracking-wider mb-1">導入内容</h3>
              <ul className="space-y-0.5 text-sm text-depth-700">
                <li><span className="font-medium">研修:</span> 4日間（24時間）＋フォロー研修（1時間×12回）</li>
                <li><span className="font-medium">参加者数:</span> 10名</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 実施後の感想 */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-base md:text-lg font-bold mb-1 text-depth-800 text-center">実施後の感想</h3>
          <p className="text-xs md:text-sm text-depth-500 mb-5 md:mb-6 text-center">
            代表取締役礒崎様より
          </p>

          {/* 動画と文章を横並び */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* 左：動画 */}
            <div className="lg:sticky lg:top-24">
              <div className="relative w-full rounded-lg overflow-hidden shadow-sm" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/AcJrcmt1bp8"
                  title="お客様の声 - ウィルトラスト社 礒崎様"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* 右：テキストの声 */}
            <div className="bg-depth-50 rounded-lg p-4 md:p-5 lg:bg-transparent lg:p-0">
              <blockquote className="border-l-2 border-depth-200 pl-4 md:pl-5 text-depth-600 leading-[1.8] md:leading-[1.9] space-y-3 md:space-y-4 text-sm">
                <p>
                  AI研修については、実は私はこれまで多くの企業から営業を受けてきました。しかし、そこで聞いたほぼすべての企業で言われるのは、「AIツールの使い方をスタッフに学んでもらうことが、何よりも大事です」ということでした。
                </p>
                <p>
                  それに対し、ウィルフォワード社の研修は、焦点がまったく異なりました。そこ（ツールの使い方）ではなく、もっと上位の概念、つまり<span className="font-medium text-depth-800">「そのツールを使って、自分たちはどうしていくのか」</span>という点を重視しています。
                </p>
                <p>
                  単なるツールの使い方以上に、<span className="font-medium text-depth-800">「自分たちの思い（Will）は何か」「将来どうなっていきたいのか」</span>というビジョンを、研修と同時に深く考えさせてくれるきっかけとなる、そんな4日間だったと感じています。
                </p>
                <p>
                  この研修は、単に「AIツールを導入しよう」と考えている企業ではなく、<span className="font-medium text-depth-800">「もう一度、自分たちの組織を大きくしていきたい」</span>と本気で考えている、そんな情熱のある会社や経営者にこそ強くお勧めします。
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

