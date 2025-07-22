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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v1m-.75 3h.008v.008h-.008V18.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      title: "AI導入の迷い",
      description: "AIを活用せずに成長を続けることは困難な時代。でも何から始めればいいか分からない。"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
      title: "成長の停滞",
      description: "従来のやり方では限界を感じている。新しい価値創造の方法を模索している。"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "人材の課題",
      description: "AI時代に対応できる人材の採用も育成も難しい。組織全体の変革が必要。"
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
            企業が直面するAI時代の課題
          </h2>
          <p className="text-xl text-depth-700 leading-relaxed">
            AIの急速な進化は既存の常識を大きく変え、<br />
            企業がAIを活用せずに成長を続けることは困難な時代です。
          </p>
        </motion.div>
        
        {/* 課題カード */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <p className="text-depth-700 leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};