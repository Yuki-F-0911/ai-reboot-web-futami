"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "@/components/academyLanding/sections/academyDesignTokens";
import { trackEvent } from "@/lib/analytics";

type LineCtaBoxProps = {
  className?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
  analyticsSource?: string;
};

const defaultLineUrl = "https://bexn9pao.autosns.app/line";
const defaultTitle = "あなたが使うべきAIを、30秒で診断します｜LINE登録（無料）";
const defaultDescription =
  "LINEに登録して30秒の診断に答えるだけで、ChatGPT・Claude・Geminiの中からあなたに最適なAIツール3選がわかります。さらに無料の攻略本もすぐに届きます。";
const defaultButtonLabel = "LINEで無料AI診断をはじめる";
const defaultAnalyticsSource = "blog_cta_box";

export default function LineCtaBox({
  className = "",
  title = defaultTitle,
  description = defaultDescription,
  buttonLabel = defaultButtonLabel,
  href = defaultLineUrl,
  analyticsSource = defaultAnalyticsSource,
}: LineCtaBoxProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-xl border p-8 sm:p-10 bg-white shadow-sm ${className}`}
      style={{ borderColor: ACADEMY_COLORS.lineSoft }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="flex-1">
          <p
            className="text-2xl font-bold text-slate-900 tracking-tight sm:text-3xl leading-tight"
            style={{ fontFamily: ACADEMY_TYPOGRAPHY.serif }}
          >
            {title}
          </p>
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
            onClick={() => trackEvent.lineRegisterClick(analyticsSource)}
            className="inline-flex items-center justify-center rounded-lg px-10 py-4 text-base font-bold text-white transition-all duration-300"
            style={{ backgroundColor: ACADEMY_COLORS.ctaLine, color: 'white', border: 'none' }}
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
            ＼ 登録30秒・匿名OK・勧誘なし ／
          </p>
        </div>
      </div>
    </motion.section>
  );
}
