"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Zap, Users, ChevronDown, Target, Clock, Presentation, UserCheck } from "lucide-react";

export const CorporateAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  // 3つのコアメッセージに集約
  const coreMessages = [
    {
      icon: Brain,
      title: "思考のOS書き換え",
      subtitle: "マインドセット変革",
      description: "AIツールの操作方法ではなく、AI時代に必要な思考法・問題解決アプローチを根本から変える",
      color: "harmony",
      details: [
        "AI活用が進まない3つの壁と突破法",
        "AI時代に求められるパラダイムシフト",
        "AIと人間の役割分担の考え方"
      ]
    },
    {
      icon: Zap,
      title: "実務への即時適用",
      subtitle: "スキル習得 × 業務変革",
      description: "習ったその日から使える。自社の業務に直結したAI活用スキルを実践形式で習得",
      color: "will-primary",
      details: [
        "生成AI（ChatGPT、Claude、Gemini等）の実践活用",
        "プロンプトエンジニアリングの基礎と応用",
        "業務プロセスのAI代替可能性診断"
      ]
    },
    {
      icon: Users,
      title: "組織全体の自走化",
      subtitle: "チーム構築 × 内製化",
      description: "研修後も自ら学び続ける組織へ。AI活用が個人のスキルではなく、組織の文化になる",
      color: "wisdom",
      details: [
        "カスタムGPT・専用AIアシスタントの構築",
        "チーム共通のプロンプトライブラリ整備",
        "AI活用推進体制と内製化支援"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-6">
            研修で得られる
            <span className="text-harmony">3つの力</span>
          </h2>
          <p className="text-lg md:text-xl text-depth-600 leading-[1.8]">
            単なるスキル研修ではなく、組織が自走できる基盤を構築します
          </p>
        </motion.div>

        {/* 3つのコアメッセージ */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {coreMessages.map((message, index) => {
              const Icon = message.icon;
              const isExpanded = expandedSection === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div
                    className={`bg-gradient-to-br from-${message.color}/5 to-white rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-${message.color}/10 h-full flex flex-col`}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-${message.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className={`text-sm font-medium text-${message.color} mb-2`}>{message.subtitle}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-depth-800 mb-4 leading-tight">
                      {message.title}
                    </h3>
                    <p className="text-depth-600 leading-relaxed mb-6 flex-grow">
                      {message.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setExpandedSection(isExpanded ? null : index)}
                      className={`flex items-center gap-2 text-sm font-semibold text-${message.color} hover:opacity-80 transition-opacity`}
                    >
                      <span>{isExpanded ? "閉じる" : "詳しく見る"}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-depth-200"
                      >
                        <ul className="space-y-2">
                          {message.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-depth-700">
                              <span className={`text-${message.color} mt-0.5`}>•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 研修概要（コンパクト版） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-depth-50 to-white rounded-3xl p-8 md:p-10 border border-depth-100">
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-depth-800 text-center">研修概要</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-harmony/10 flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-harmony" />
                </div>
                <p className="text-sm text-depth-500 mb-1">目的</p>
                <p className="text-sm md:text-base font-semibold text-depth-800">AI活用力向上から内製化まで</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-will-primary/10 flex items-center justify-center mb-3">
                  <UserCheck className="w-6 h-6 text-will-primary" />
                </div>
                <p className="text-sm text-depth-500 mb-1">対象人数</p>
                <p className="text-sm md:text-base font-semibold text-depth-800">10〜30名程度</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-wisdom/10 flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-wisdom" />
                </div>
                <p className="text-sm text-depth-500 mb-1">研修時間</p>
                <p className="text-sm md:text-base font-semibold text-depth-800">10時間以上</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-harmony/10 flex items-center justify-center mb-3">
                  <Presentation className="w-6 h-6 text-harmony" />
                </div>
                <p className="text-sm text-depth-500 mb-1">形式</p>
                <p className="text-sm md:text-base font-semibold text-depth-800">集合研修</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
