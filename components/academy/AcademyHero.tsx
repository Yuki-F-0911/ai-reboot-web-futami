"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const AcademyHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* 繊細な背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-depth-50/30 to-white" />
      
      <div className="container-section relative z-10 py-20">
        {/* メインコンテンツ */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* 小見出し */}
            <p className="text-sm font-medium text-depth-600 tracking-wider uppercase mb-6">
              AI REBOOT ACADEMY
            </p>
            
            {/* メインタイトル */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-depth-900 mb-6 leading-[1.15]">
              生成AI時代の
              <br />
              <span className="relative inline-block">
                新しい自分へ
                <span className="absolute bottom-1 left-0 w-full h-3 bg-will-primary/20 -z-10" />
              </span>
            </h1>
            
            {/* サブタイトル */}
            <p className="text-xl md:text-2xl text-depth-700 mb-8 font-light">
              100日間で、AIと共創する力を身につける
            </p>
            
            {/* 説明文 */}
            <p className="text-base md:text-lg text-depth-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              単なるツールの使い方ではなく、変化し続けるAI時代を生き抜く
              <br className="hidden md:block" />
              思考法とマインドセットを習得する実践的プログラム
            </p>
          </motion.div>
          
          {/* CTA ボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="#application">
              <button className="relative px-10 py-4 bg-will-primary text-white font-medium rounded-lg transition-all duration-200 min-w-[220px] shadow-md hover:shadow-xl hover:scale-[1.02] hover:bg-will-primary/95">
                無料説明会に申し込む
              </button>
            </Link>
            
            <Link href="#program">
              <button className="px-8 py-4 text-depth-700 font-medium rounded-lg border border-depth-300 hover:bg-depth-50 transition-all duration-200 min-w-[200px]">
                プログラム詳細を見る
              </button>
            </Link>
          </motion.div>
          
          {/* 補助金情報 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            {/* 経済産業省リスキリング補助金ロゴ */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/keisan-reskiling-logo.webp"
                alt="経済産業省 リスキリング通じたキャリアアップ支援事業"
                width={280}
                height={80}
                className="h-16 md:h-20 w-auto"
                priority
              />
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
              {/* 経済産業省認定 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
                <div className="w-12 h-12 bg-depth-100 rounded-lg flex items-center justify-center ring-1 ring-depth-200">
                  <svg className="w-6 h-6 text-depth-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-depth-500 uppercase tracking-wider">経済産業省</p>
                  <p className="text-sm font-semibold text-depth-800">認定講座</p>
                </div>
              </div>
              
              {/* 補助金情報 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
                <div className="w-12 h-12 bg-depth-100 rounded-lg flex items-center justify-center ring-1 ring-depth-200">
                  <svg className="w-6 h-6 text-depth-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-depth-500 uppercase tracking-wider">リスキリング補助金</p>
                  <p className="text-sm font-semibold text-depth-800">最大70%補助</p>
                </div>
              </div>
              
              {/* 受講形式 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
                <div className="w-12 h-12 bg-depth-100 rounded-lg flex items-center justify-center ring-1 ring-depth-200">
                  <svg className="w-6 h-6 text-depth-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs text-depth-500 uppercase tracking-wider">集合研修</p>
                  <p className="text-sm font-semibold text-depth-800">2日間宿泊型</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};