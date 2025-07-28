"use client";

import { motion } from "framer-motion";

export const AcademyOverview = () => {
  return (
    <section className="section-spacing">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="bg-will-gradient bg-clip-text text-transparent">
              AIリブートアカデミーとは
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-will-lighter to-wisdom-lighter p-8 md:p-12 rounded-3xl shadow-soft">
            <p className="text-lg md:text-xl text-depth-800 leading-relaxed mb-6">
              生成AIツールの使い方を学ぶだけではなく、生成AIツールを使いこなすためのマインドセットとスキルを身につけることで、研修後も持続的に生成AI活用で個人をアップデートしつづけるためのプログラム。
            </p>
            <p className="text-lg md:text-xl text-depth-800 leading-relaxed">
              そのために、<span className="font-bold text-will-primary">2日間の宿泊型集合研修</span>を含む<span className="font-bold text-will-primary">100日間の実践プログラム</span>を通して、生成AI時代を生き抜く思考OSをインストールします。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};