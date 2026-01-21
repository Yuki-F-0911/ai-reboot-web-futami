"use client";

import { useRef } from "react";
import { Brain, Zap, Users, Target, Clock, Presentation, UserCheck } from "lucide-react";

export const CorporateAbout = () => {
  const ref = useRef(null);

  // 3つのコアメッセージ - 色をharmony中心に統一
  const coreMessages = [
    {
      icon: Brain,
      title: "思考のOS書き換え",
      subtitle: "マインドセット変革",
      description: "AIツールの操作方法ではなく、AI時代に必要な思考法・問題解決アプローチを根本から変える",
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
      details: [
        "カスタムGPT・専用AIアシスタントの構築",
        "チーム共通のプロンプトライブラリ整備",
        "AI活用推進体制と内製化支援"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-14 md:py-24 bg-white">
      <div className="container-section px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-4 md:mb-5">
            AIリブート研修で得られる<span className="text-harmony">3つの力</span>
          </h2>
          <p className="text-base md:text-lg text-depth-600">
            単なるスキル研修ではなく、組織が自走できる基盤を構築します
          </p>
        </div>

        {/* 3つのコアメッセージ - シンプルなカード */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {coreMessages.map((message, index) => {
              const Icon = message.icon;
              return (
                <div key={index} className="bg-depth-50 md:bg-transparent rounded-xl p-5 md:p-0 text-left">
                  <div className="flex flex-col items-start">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-harmony/10 flex items-center justify-center mb-3 md:mb-4">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-harmony" />
                    </div>
                    <p className="text-xs font-semibold text-harmony mb-1.5 md:mb-2 uppercase tracking-wider">{message.subtitle}</p>
                    <h3 className="text-lg md:text-xl font-bold text-depth-800 mb-2 md:mb-3">
                      {message.title}
                    </h3>
                    <p className="text-sm text-depth-600 leading-relaxed mb-4 md:mb-5">
                      {message.description}
                    </p>

                    <ul className="space-y-2 text-left w-full">
                      {message.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-depth-600">
                          <span className="text-harmony mt-0.5 flex-shrink-0">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 研修概要（コンパクト版） */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-depth-50 rounded-lg p-5 md:p-8 border border-depth-100">
            <h3 className="text-base md:text-lg font-bold mb-5 md:mb-6 text-depth-800 text-center">研修概要</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="text-center bg-white rounded-lg p-3 md:p-0 md:bg-transparent">
                <div className="w-9 h-9 md:w-10 md:h-10 mx-auto rounded-lg bg-white flex items-center justify-center mb-2 border border-depth-100 md:border">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-harmony" />
                </div>
                <p className="text-[10px] md:text-xs text-depth-500 mb-0.5 md:mb-1">目的</p>
                <p className="text-xs md:text-sm font-medium text-depth-800 leading-tight">AI活用力向上から内製化まで</p>
              </div>
              <div className="text-center bg-white rounded-lg p-3 md:p-0 md:bg-transparent">
                <div className="w-9 h-9 md:w-10 md:h-10 mx-auto rounded-lg bg-white flex items-center justify-center mb-2 border border-depth-100 md:border">
                  <UserCheck className="w-4 h-4 md:w-5 md:h-5 text-harmony" />
                </div>
                <p className="text-[10px] md:text-xs text-depth-500 mb-0.5 md:mb-1">対象人数</p>
                <p className="text-xs md:text-sm font-medium text-depth-800 leading-tight">10〜30名程度</p>
              </div>
              <div className="text-center bg-white rounded-lg p-3 md:p-0 md:bg-transparent">
                <div className="w-9 h-9 md:w-10 md:h-10 mx-auto rounded-lg bg-white flex items-center justify-center mb-2 border border-depth-100 md:border">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-harmony" />
                </div>
                <p className="text-[10px] md:text-xs text-depth-500 mb-0.5 md:mb-1">研修時間</p>
                <p className="text-xs md:text-sm font-medium text-depth-800 leading-tight">10時間以上</p>
              </div>
              <div className="text-center bg-white rounded-lg p-3 md:p-0 md:bg-transparent">
                <div className="w-9 h-9 md:w-10 md:h-10 mx-auto rounded-lg bg-white flex items-center justify-center mb-2 border border-depth-100 md:border">
                  <Presentation className="w-4 h-4 md:w-5 md:h-5 text-harmony" />
                </div>
                <p className="text-[10px] md:text-xs text-depth-500 mb-0.5 md:mb-1">形式</p>
                <p className="text-xs md:text-sm font-medium text-depth-800 leading-tight">集合研修</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
