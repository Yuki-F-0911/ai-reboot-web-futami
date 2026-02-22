"use client";

import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

type ArticleTOCItem = {
  id: string;
  label: string;
};

type ArticleTOCProps = {
  items: readonly ArticleTOCItem[];
  className?: string;
};

export default function ArticleTOC({ items, className = "" }: ArticleTOCProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const observers = new Map();
    const options = {
      rootMargin: "-100px 0px -80% 0px",
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
        observers.set(item.id, element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    const offset = 100; // Header height approx
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    
    window.history.replaceState(null, "", `#${id}`);
    
    // Mobile: automatically collapse after selection
    if (window.innerWidth < 768) {
      setIsExpanded(false);
    }
  };

  return (
    <div className={`relative ${className}`.trim()}>
      <motion.nav
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-label="記事目次"
        className="mt-12 sticky top-24 z-30 rounded-3xl border border-slate-200/60 bg-white/70 p-6 sm:p-8 shadow-[0_12px_40px_rgb(0,0,0,0.06)] backdrop-blur-xl overflow-hidden"
        data-copy-exclude
      >
        {/* 背景の装飾 */}
        <div className="absolute -right-4 -top-4 opacity-[0.04] pointer-events-none">
          <Sparkles className="w-32 h-32 text-will-primary" />
        </div>
        
        {/* デザインアクセント */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-will-primary via-will-secondary to-will-tertiary opacity-40" />
        
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100/80">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-3 text-left group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-will-primary/10 to-will-secondary/5 text-will-primary transition-all duration-300 group-hover:shadow-glow group-hover:shadow-will-primary/20">
              <List className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.15em] text-slate-900 uppercase">Index</p>
              <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">記事の内容をみる</p>
            </div>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center rounded-full bg-slate-100/80 px-3 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest backdrop-blur-sm border border-slate-200/30">
              {items.length} sections
            </span>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-slate-200/50 text-slate-400 hover:bg-will-primary hover:text-white hover:border-will-primary transition-all duration-300 shadow-sm"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1.5 mt-2">
                {items.map((item, index) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id} className="group">
                      <a
                        href={`#${item.id}`}
                        onClick={(event) => handleAnchorClick(event, item.id)}
                        className={`flex items-start gap-4 py-2.5 px-3 rounded-xl text-[14px] sm:text-[15px] leading-relaxed transition-all duration-300 ${
                          isActive 
                            ? "bg-gradient-to-r from-will-primary/10 to-transparent text-will-primary font-bold shadow-[inset_2px_0_0_0_#f34f2d]" 
                            : "text-slate-600 hover:bg-slate-50 hover:text-will-primary"
                        }`}
                      >
                        <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold transition-all duration-300 ${
                          isActive 
                            ? "bg-gradient-to-br from-will-primary to-will-secondary text-white shadow-glow shadow-will-primary/30" 
                            : "bg-slate-100 text-slate-500 group-hover:bg-will-primary/10 group-hover:text-will-primary"
                        }`}>
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="flex-1 transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
                        {isActive && (
                          <motion.div 
                            layoutId="active-indicator"
                            className="ml-auto"
                          >
                            <Sparkles className="h-3 w-3 text-will-primary animate-pulse" />
                          </motion.div>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

