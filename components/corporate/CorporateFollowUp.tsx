"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateFollowUp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-b from-depth-100 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            フォロー研修（オプション）
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-10 shadow-elevated">
            <p className="text-xl text-depth-700 mb-8 leading-relaxed">
              研修後、現場での定着を確実にし、変化し続けるAI環境に適応するための継続的な学習プログラムです。
            </p>

            <div className="bg-gradient-to-r from-harmony-lighter to-will-lighter p-8 rounded-2xl mb-8">
              <p className="text-lg font-bold text-depth-800 text-center">
                <span className="text-harmony">貴社の状況に合わせて、回数や形態を柔軟にカスタマイズ可能</span><br />
                （例：週1回×6〜12回、各60分のオンライン形式など）
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

