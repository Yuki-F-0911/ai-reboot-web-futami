"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "@/components/academyLanding/sections/academyDesignTokens";

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
  className = "",
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
      className={`rounded-xl border p-8 sm:p-10 relative overflow-hidden bg-white shadow-sm ${className} group`}
      style={{ borderColor: ACADEMY_COLORS.lineSoft }}
    >
      <div 
        className="absolute left-0 top-0 bottom-0 w-1" 
        style={{ backgroundColor: ACADEMY_COLORS.ctaLine }}
      />
      
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
        <div className="flex-1">
          <h3 
            className="text-2xl font-bold text-slate-900 tracking-tight sm:text-3xl leading-tight"
            style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
          >
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600 max-w-2xl">
            {description}
          </p>
        </div>
        
        <div className="shrink-0">
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-lg px-10 py-4 text-base font-bold text-white transition-all duration-300"
            style={{ backgroundColor: ACADEMY_COLORS.ctaLine }}
          >
            <span className="mr-3">
              <MessageCircle className="h-5 w-5 fill-white" />
            </span>
            <span>{buttonLabel}</span>
            <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
          </motion.a>
          
          <p 
            className="mt-4 text-center text-[10px] font-bold tracking-wider"
            style={{ color: ACADEMY_COLORS.ctaLine }}
          >
            ＼ 1分で完了・匿名性も安心 ／
          </p>
        </div>
      </div>
    </motion.section>
  );
}
