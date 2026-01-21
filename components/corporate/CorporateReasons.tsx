"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateReasons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      number: "1",
      title: "市場の変化スピードが加速している",
      points: [
        "2025年までに、70%の企業が生成AIを活用する予測（Gartner）",
        "AI活用企業と非活用企業の生産性格差は3倍以上に広がっている",
        "先行者利益を獲得するなら、今が最後のチャンス"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "harmony"
    },
    {
      number: "2",
      title: "採用・人材確保が困難になっている",
      points: [
        "慢性的な人手不足の中、AI活用力が採用競争力を左右する",
        "「AI活用企業」であることが、優秀な人材を惹きつける武器になる",
        "社員のスキルアップが、採用コスト削減にも繋がる"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "will-primary"
    },
    {
      number: "3",
      title: "小さく始めても、大きな効果が得られる",
      points: [
        "いきなり大規模投資は不要。優先ユースケースを1〜2個に絞り、小さく始めて成果を積み上げることができる",
        "研修費用は、業務効率化による工数削減で、3〜6ヶ月で回収可能",
        "助成金を活用すれば、実質的な負担はさらに軽減"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "wisdom"
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-b from-depth-100 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            今すぐ始めるべき3つの理由
          </h2>
          <p className="text-xl text-depth-700 leading-relaxed">
            <span className="font-bold text-harmony">AI導入の遅れは、競争力の低下に直結します</span>
          </p>
        </motion.div>

        {/* 理由カード */}
        <div className="space-y-8 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-elevated hover:shadow-floating transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* アイコンと番号 */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-${reason.color} flex items-center justify-center mb-4`}>
                    <span className="text-white">{reason.icon}</span>
                  </div>
                  <div className="text-center">
                    <span className={`text-2xl font-bold text-${reason.color}`}>理由{reason.number}</span>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-6 text-depth-800">
                    {reason.title}
                  </h3>
                  <ul className="space-y-3">
                    {reason.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`text-${reason.color} mt-1 flex-shrink-0`}>•</span>
                        <span className="text-depth-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

