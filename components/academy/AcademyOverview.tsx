"use client";

import { motion } from "framer-motion";

export const AcademyOverview = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-20%" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-depth-900 mb-16">
            AIリブートアカデミーとは
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-depth-700 leading-relaxed">
              生成AIツールの使い方を学ぶだけではなく、生成AIツールを使いこなすための
              <strong className="font-semibold text-will-primary">マインドセット</strong>と
              <strong className="font-semibold text-will-primary">スキル</strong>を身につけることで、
              研修後も持続的に生成AI活用で個人をアップデートしつづけるためのプログラムです。
            </p>
            
            <div className="h-px bg-depth-200 my-8" />
            
            <div className="bg-gradient-to-br from-will-primary/5 to-wisdom/5 rounded-xl p-8 md:p-10 border border-will-primary/10">
              <p className="text-lg text-depth-800 font-medium text-center">
                2日間の宿泊型集合研修 ＋ 100日間の実践プログラム
              </p>
              <p className="text-base text-depth-600 text-center mt-4">
                生成AI時代を生き抜く「思考OS」をインストールします
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};