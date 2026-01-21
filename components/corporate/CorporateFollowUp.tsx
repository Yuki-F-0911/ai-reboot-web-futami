"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RefreshCw, Calendar, Video, Users } from "lucide-react";

export const CorporateFollowUp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Calendar, label: "週1回×6〜12回" },
    { icon: Video, label: "オンライン形式" },
    { icon: Users, label: "少人数制" },
    { icon: RefreshCw, label: "柔軟にカスタマイズ" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-depth-100 to-white">
      <div className="container-section">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* 左側：タイトルと説明 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="md:col-span-7"
            >
              <span className="inline-block py-1 px-3 bg-wisdom/10 text-wisdom font-bold text-sm mb-4">OPTION</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-depth-800">
                フォロー研修
              </h2>
              <p className="text-lg text-depth-700 leading-relaxed mb-6">
                研修後、現場での定着を確実にし、変化し続けるAI環境に適応するための継続的な学習プログラムです。
              </p>
              <p className="text-depth-600 border-l-4 border-harmony pl-4">
                貴社の状況に合わせて、回数や形態を柔軟にカスタマイズ可能
              </p>
            </motion.div>

            {/* 右側：特徴アイコン */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5"
            >
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 py-3 border-b border-depth-200">
                      <Icon className="w-5 h-5 text-harmony flex-shrink-0" />
                      <span className="text-sm font-medium text-depth-700">{feature.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

