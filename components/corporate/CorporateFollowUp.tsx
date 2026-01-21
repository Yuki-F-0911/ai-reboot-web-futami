"use client";

import { useRef } from "react";
import { RefreshCw, Calendar, Video, Users } from "lucide-react";

export const CorporateFollowUp = () => {
  const ref = useRef(null);

  const features = [
    { icon: Calendar, label: "週1回×6〜12回" },
    { icon: Video, label: "オンライン形式" },
    { icon: Users, label: "少人数制" },
    { icon: RefreshCw, label: "柔軟にカスタマイズ" },
  ];

  return (
    <section ref={ref} className="py-10 md:py-16 bg-depth-50">
      <div className="container-section px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 items-start md:items-center">
            {/* 左側：タイトルと説明 */}
            <div className="md:col-span-7">
              <span className="inline-block py-1 px-2 bg-harmony/10 text-harmony font-semibold text-xs mb-2 md:mb-3">OPTION</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-depth-800">
                フォロー研修
              </h2>
              <p className="text-sm md:text-base text-depth-600 leading-relaxed mb-3 md:mb-4">
                研修後、現場での定着を確実にし、変化し続けるAI環境に適応するための継続的な学習プログラムです。
              </p>
              <p className="text-xs md:text-sm text-depth-500 border-l-2 border-harmony pl-3">
                貴社の状況に合わせて、回数や形態を柔軟にカスタマイズ可能
              </p>
            </div>

            {/* 右側：特徴アイコン */}
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-2 md:gap-3 bg-white md:bg-transparent rounded-lg p-3 md:p-0">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 py-1.5 md:py-2">
                      <Icon className="w-4 h-4 text-harmony flex-shrink-0" />
                      <span className="text-xs md:text-sm text-depth-600">{feature.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

