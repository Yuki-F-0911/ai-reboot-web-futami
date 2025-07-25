"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AcademyPhilosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "自己認識を深める：変わらない価値を見つけるメンタリング",
      description: "AIは目的じゃない、手段です。あなたの本質的な価値、情熱、大切にしているものを発見し、AI時代でも変わらない「軸」を見つけます。専門メンターがあなたのキャリアアセットを一緒に棚卸しします。",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "変化を楽しむ力を身につける：教わるのではなく、自ら学ぶ100日間",
      description: "新しいツールを「教えてもらう」のではなく「自分で使えるようになる」力を養います。AIツールの使い方を通じて、変化への抵抗を乗り越え、未知のものを楽しむマインドセットを獲得します。",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "仲間と共に新しい生き方を：同じ志を持つコミュニティ",
      description: "一人では続かない変化も、仲間となら乗り越えられます。同じ不安を抱え、同じ目標を持つ仲間と出会い、お互いに刺激し合いながら、オーセンティックな生き方を実現していきます。",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-depth-50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 mb-6">
            君たちはどう生きるか
          </h2>
          <p className="text-xl text-depth-700 leading-relaxed">
            AI時代に必要なのは、技術じゃない。
            <br />
            変わらないものを守る、変化への適応力です。
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex items-start gap-4 md:w-1/3">
                  <div className="bg-will-gradient text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-elevated">
                    {step.number}
                  </div>
                  <div className="text-will-primary hidden md:block">{step.icon}</div>
                </div>
                
                <div className="md:w-2/3 bg-white rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-depth-800">
                    {step.title}
                  </h3>
                  <p className="text-lg text-depth-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 h-20 w-0.5 bg-gradient-to-b from-will-primary to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};