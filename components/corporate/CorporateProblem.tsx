"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateProblem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const challenges = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "壁1: 言語の壁",
      subtitle: "「専門用語が分からず、導入に踏み切れない」",
      points: [
        "API、RAG、プロンプトエンジニアリング...",
        "横文字だらけで何から始めればいいか分からない",
        "社内に詳しい人材がいない"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "壁2: 未経験の壁",
      subtitle: "「ツールを触ったことがなく、怖い」",
      points: [
        "ChatGPTは知っているが、業務でどう使えばいいか分からない",
        "間違った使い方をして、情報漏洩しないか不安",
        "一部の社員だけが使い、組織に浸透しない"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "壁3: 習慣の壁",
      subtitle: "「今までのやり方を変えられない」",
      points: [
        "AIを使うより、自分でやった方が早いと感じてしまう",
        "研修を受けても、実務で継続して使えない",
        "結局、元の仕事のやり方に戻ってしまう"
      ]
    }
  ];
  
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
            なぜ、多くの企業のAI導入は失敗するのか？
          </h2>
          <p className="text-xl text-depth-700 leading-relaxed">
            組織が直面する3つの壁
          </p>
        </motion.div>
        
        {/* 課題カード */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-depth-100 to-white p-8 rounded-3xl shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="text-harmony mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-depth-800">
                {challenge.title}
              </h3>
              <p className="text-lg font-bold text-harmony mb-4">
                {challenge.subtitle}
              </p>
              <ul className="space-y-2 text-depth-700">
                {challenge.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-harmony mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* 締めメッセージ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-harmony-lighter via-will-lighter to-harmony-lighter p-8 rounded-3xl">
            <p className="text-xl font-bold text-depth-800 leading-relaxed">
              <span className="text-harmony">この3つの壁を突破しなければ、AI導入は絵に描いた餅で終わります。</span><br />
              AIリブート研修は、この壁を一つずつ丁寧に突破し、<br />
              <span className="text-will-primary">組織全体がAIネイティブになる</span>ための実践プログラムです。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};