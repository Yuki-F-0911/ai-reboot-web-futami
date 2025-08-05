"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const AcademyApplicationFlow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "説明会参加",
      description: "無料オンライン説明会でプログラムの詳細を確認",
      details: [
        "プログラム内容の詳細説明",
        "補助金制度の説明",
        "質疑応答・個別相談"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      color: "from-will-primary to-will-secondary"
    },
    {
      number: "02", 
      title: "申込み・審査",
      description: "簡単な適性審査と補助金申請サポート",
      details: [
        "オンライン申込みフォーム記入",
        "簡単な適性診断",
        "補助金申請サポート"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "from-will-secondary to-wisdom"
    },
    {
      number: "03",
      title: "受講開始",
      description: "仲間と共に100日間の挑戦スタート",
      details: [
        "キックオフ集合研修",
        "学習環境のセットアップ",
        "メンター・チームとの顔合わせ"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
      color: "from-wisdom to-growth"
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-depth-50 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 mb-6">
            簡単3ステップで、新しい未来へ
          </h2>
          <p className="text-xl text-depth-700">
            申込みから受講開始までの流れをご説明します。
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
              <div className="flex justify-center">
                <div className="w-2/3 h-1 bg-gradient-to-r from-will-primary via-will-secondary to-wisdom rounded-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className={`hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-12 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full shadow-elevated flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-depth-100 h-full">
                  {/* Mobile step number */}
                  <div className={`md:hidden inline-flex items-center gap-2 bg-gradient-to-r ${step.color} text-white px-4 py-2 rounded-full mb-4`}>
                    <span className="font-bold">STEP {step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`text-will-primary mb-4 flex justify-center md:justify-start`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-depth-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-depth-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2 text-sm text-depth-700">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-will-primary mr-2 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-depth-700 mb-8">
            まずは無料説明会で、あなたの疑問や不安を解消しませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#session">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-will-gradient text-white font-bold text-lg rounded-full shadow-elevated hover:shadow-floating transition-all duration-300"
              >
                無料説明会に参加
              </motion.button>
            </Link>
            <Link href="https://forms.gle/MX5sobbPkch5U2QF8" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-depth-300 text-depth-700 font-semibold text-lg rounded-full hover:bg-depth-50 transition-all duration-300"
              >
                個別相談を予約
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};