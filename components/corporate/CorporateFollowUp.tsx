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
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6">
            {/* ラベル部分 */}
            <div className="flex items-center gap-2 mb-3 md:mb-0 md:flex-col md:items-center md:pt-1">
              <div className="w-8 h-px md:w-px md:h-6 bg-harmony/40"></div>
              <span className="text-harmony font-semibold text-xs tracking-wider whitespace-nowrap">OPTION</span>
              <div className="hidden md:block w-px h-6 bg-harmony/40"></div>
            </div>
            {/* コンテンツ部分 */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-depth-800">
                フォロー研修
              </h2>
              <p className="text-sm md:text-base text-depth-600 leading-relaxed mb-4 md:mb-5">
                研修後、現場での定着を確実にし、変化し続けるAI環境に適応するための継続的な学習プログラムです。
              </p>
              
              {/* 特徴 */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-1.5 text-depth-600">
                      <Icon className="w-4 h-4 text-harmony flex-shrink-0" />
                      <span className="text-xs md:text-sm">{feature.label}</span>
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

