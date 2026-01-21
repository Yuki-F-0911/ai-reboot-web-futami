"use client";

import { useRef } from "react";

export const CorporateReasons = () => {
  const ref = useRef(null);

  const reasons = [
    {
      number: "1",
      title: "市場の変化スピードが加速している",
      points: [
        "AI活用企業と非活用企業の生産性格差は拡大し続けている",
        "先行者利益を獲得するなら、今がチャンス"
      ]
    },
    {
      number: "2",
      title: "採用・人材確保が困難になっている",
      points: [
        "AI活用力が採用競争力を左右する時代に",
        "「AI活用企業」であることが、優秀な人材を惹きつける武器になる"
      ]
    },
    {
      number: "3",
      title: "小さく始めても、大きな効果が得られる",
      points: [
        "優先ユースケースを1〜2個に絞り、小さく始めて成果を積み上げる",
        "助成金を活用すれば、実質的な負担はさらに軽減"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
      <div className="container-section px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-depth-800">
            今すぐ始めるべき3つの理由
          </h2>
          <p className="text-sm md:text-base text-depth-600">
            AI導入の遅れは、競争力の低下に直結します
          </p>
        </div>

        {/* 理由リスト - シンプル */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 md:gap-5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-4 md:p-5 bg-depth-50 rounded-lg"
              >
                <div className="flex items-start md:items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-harmony flex-shrink-0">0{reason.number}</span>
                  <h3 className="text-base md:text-lg font-bold text-depth-800 leading-tight">
                    {reason.title}
                  </h3>
                </div>
                <ul className="space-y-1.5 md:space-y-1 pl-6 md:pl-7">
                  {reason.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-depth-600">
                      <span className="text-harmony mt-0.5 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

