"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

type LineCtaBoxProps = {
  className?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

const defaultLineUrl = "https://bexn9pao.autosns.app/line";
const defaultTitle = "AIで仕事を変えたい方へ｜LINEで無料相談する";
const defaultDescription =
  "経産省リスキリング補助金対象の100日間プログラム「AIリブートアカデミー」について、LINEで気軽に相談できます。補助金の使い方・カリキュラム・学習イメージを無料でお伝えします。";
const defaultButtonLabel = "LINEで無料相談する（登録無料）";

export default function LineCtaBox({
  className = "blog-cta-box rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-green-50/50 p-8 sm:p-10 shadow-elevated relative overflow-hidden",
  title = defaultTitle,
  description = defaultDescription,
  buttonLabel = defaultButtonLabel,
  href = defaultLineUrl,
}: LineCtaBoxProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${className} group`}
    >
      {/* プレミアムな背景装飾 */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl transition-all duration-700 group-hover:bg-emerald-300/30" />
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-green-200/20 blur-3xl transition-all duration-700 group-hover:bg-green-300/30" />
      
      {/* 装飾的なサイドライン */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#06C755] via-[#05b04b] to-emerald-400" />
      
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
        <div className="flex-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-700 backdrop-blur-sm border border-emerald-200/50">
            <Sparkles className="h-3 w-3 animate-pulse" />
            <span>Support & Consultation</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl leading-tight">
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-2xl font-medium">
            {description}
          </p>
        </div>
        
        <div className="shrink-0">
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="line-cta-button relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-[#06C755] px-10 py-5 text-lg font-bold text-white shadow-xl shadow-green-200 transition-all duration-300 hover:bg-[#05b04b] hover:shadow-green-300"
          >
            {/* ボタン内の光沢エフェクト */}
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
            
            <span className="mr-3">
              <MessageCircle className="h-6 w-6 fill-white" />
            </span>
            <span>{buttonLabel}</span>
            <ArrowRight className="ml-2 h-5 w-5 opacity-70 transition-transform group-hover:translate-x-1" />
          </motion.a>
          
          <p className="mt-4 text-center text-xs font-semibold text-emerald-600/80">
            ＼ 1分で完了・匿名性も安心 ／
          </p>
        </div>
      </div>
    </motion.section>
  );
}
