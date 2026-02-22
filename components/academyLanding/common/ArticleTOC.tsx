"use client";

import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { List, ChevronRight, Sparkles } from "lucide-react";

type ArticleTOCItem = {
  id: string;
  label: string;
};

type ArticleTOCProps = {
  items: readonly ArticleTOCItem[];
  className?: string;
};

export default function ArticleTOC({ items, className = "" }: ArticleTOCProps) {
  if (items.length === 0) {
    return null;
  }

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="記事目次"
      className={`mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50/30 to-slate-100/50 p-8 sm:p-10 shadow-elevated relative overflow-hidden ${className}`.trim()}
      data-copy-exclude
    >
      {/* 繊細な装飾 */}
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Sparkles className="w-24 h-24 text-will-primary" />
      </div>
      
      {/* デザインの要となるサイドグラデーション */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-will-primary via-will-secondary to-will-tertiary opacity-40" />
      
      <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-200/60">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-will-primary/5 text-will-primary">
            <List className="w-5 h-5" />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900">CONTENTS</p>
            <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">この記事の内容</p>
          </div>
        </div>
        
        <div className="hidden sm:block">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {items.length} sections
          </span>
        </div>
      </div>
      
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {items.map((item, index) => (
          <li key={item.id} className="group">
            <a
              href={`#${item.id}`}
              onClick={(event) => handleAnchorClick(event, item.id)}
              className="flex items-start gap-4 py-1 text-[15px] leading-relaxed text-slate-600 transition-all hover:text-will-primary"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[11px] font-bold text-slate-500 transition-all duration-300 group-hover:bg-will-primary group-hover:text-white group-hover:shadow-glow group-hover:shadow-will-primary/30">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <span className="font-semibold transition-transform duration-300 group-hover:translate-x-1">
                {item.label}
              </span>
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ml-auto text-will-primary/40" />
            </a>
          </li>
        ))}
      </ol>
    </motion.nav>
  );
}
