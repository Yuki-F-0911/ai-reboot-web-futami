"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AcademyTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "山田太郎さん",
      age: "35歳",
      previousJob: "元営業職",
      currentJob: "AIコンサルタントへ",
      quote: "AIなんて自分には関係ないと思っていました。でも、100日後には自社のAI活用を推進する立場に。年収も1.5倍になりました。",
      bgColor: "from-will-primary/10 to-will-secondary/10",
      accentColor: "will-primary"
    },
    {
      name: "鈴木花子さん",
      age: "42歳",
      previousJob: "マーケティング",
      currentJob: "子育て中でもキャリアアップ",
      quote: "オンライン中心だから、子育てしながらでも学べました。今では副業でAIライティングの仕事も。可能性が広がりました。",
      bgColor: "from-wisdom/10 to-will-secondary/10",
      accentColor: "wisdom"
    },
    {
      name: "佐藤次郎さん",
      age: "58歳",
      previousJob: "製造業",
      currentJob: "定年前の新たな挑戦",
      quote: "この歳で新しいことを学ぶのは不安でしたが、メンターのサポートで着実に成長。定年後の新しいキャリアが見えてきました。",
      bgColor: "from-growth/10 to-harmony/10", 
      accentColor: "growth"
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
            卒業生が語る、リアルな変化
          </h2>
          <p className="text-xl text-depth-700">
            100日間のプログラムを通じて、実際にキャリアチェンジを果たした受講生の声をご紹介します。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`bg-gradient-to-br ${testimonial.bgColor} rounded-3xl p-8 relative overflow-hidden`}
            >
              {/* Quote icon */}
              <div className={`absolute top-6 right-6 opacity-20 ${
                testimonial.accentColor === 'will-primary' ? 'text-will-primary' : 
                testimonial.accentColor === 'wisdom' ? 'text-wisdom' : 'text-growth'
              }`}>
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-depth-800 mb-1">
                    {testimonial.name}
                  </h3>
                  <div className="text-sm text-depth-600 mb-2">
                    {testimonial.age}・{testimonial.previousJob}
                  </div>
                  <div className={`text-sm font-semibold ${
                    testimonial.accentColor === 'will-primary' ? 'text-will-primary' : 
                    testimonial.accentColor === 'wisdom' ? 'text-wisdom' : 'text-growth'
                  }`}>
                    {testimonial.currentJob}
                  </div>
                </div>

                <blockquote className="text-depth-700 leading-relaxed text-sm md:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              {/* Accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                testimonial.accentColor === 'will-primary' ? 'bg-will-primary' : 
                testimonial.accentColor === 'wisdom' ? 'bg-wisdom' : 'bg-growth'
              }`} />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-depth-700 mb-8">
            あなたも、AIリブートアカデミーで新しいキャリアを始めませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-will-gradient text-white font-bold text-lg rounded-full shadow-elevated hover:shadow-floating transition-all duration-300"
            >
              無料説明会に参加
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-depth-300 text-depth-700 font-semibold rounded-full hover:bg-depth-50 transition-all duration-300"
            >
              資料請求
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};