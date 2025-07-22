"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AcademyConcept = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const concepts = [
    {
      title: "オンライン完結ではない理由",
      description: "全国から集まる仲間との出会い、リアルな熱量、対面でしか生まれない化学反応。オンラインとリアルのハイブリッドで、最高の学習体験を提供します。",
      icon: (
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "やり方ではなく、生き方を学ぶ",
      description: "ChatGPTの使い方を覚えるだけなら、YouTubeで十分です。私たちが提供するのは、AX（AI Transformation） - AIによる働き方と生き方の変革です。",
      icon: (
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "座学で終わらせない、徹底実践",
      description: "知識を詰め込むだけでは意味がありません。専属メンターが100日間伴走し、あなたの「できた！」まで責任を持ってサポートします。",
      icon: (
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
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
            単なるAI講座ではない、<br />
            人生を変える100日間
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-will-primary mb-6">{concept.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-depth-800">
                {concept.title}
              </h3>
              <p className="text-depth-600 leading-relaxed">
                {concept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};