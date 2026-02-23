"use client";

import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, ChevronDown, ChevronUp } from "lucide-react";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "../sections/academyDesignTokens";

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
        className="mt-12 sticky top-24 z-30 rounded-xl border bg-white p-6 sm:p-8 shadow-sm overflow-hidden"
        style={{ borderColor: ACADEMY_COLORS.lineSoft }}
        data-copy-exclude
      >
        <div className="flex items-center justify-between pb-5 mb-5 border-b" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-3 text-left group"
          >
            <div 
              className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
              style={{ backgroundColor: ACADEMY_COLORS.bgCanvas, color: ACADEMY_COLORS.accentMain }}
            >
              <List className="w-5 h-5" />
            </div>
            <div>
              <p 
                className="text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric, color: ACADEMY_COLORS.accentMain }}
              >
                Index
              </p>
              <p className="text-[11px] font-bold tracking-widest uppercase" style={{ color: ACADEMY_COLORS.textMuted }}>記事の内容をみる</p>
            </div>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest" style={{ backgroundColor: ACADEMY_COLORS.bgSection, color: ACADEMY_COLORS.textMuted }}>
              {items.length} sections
            </span>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex h-8 w-8 items-center justify-center rounded-full border text-slate-400 hover:text-white transition-all duration-300"
              style={{ borderColor: ACADEMY_COLORS.lineSoft, backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = ACADEMY_COLORS.accentMain;
                e.currentTarget.style.borderColor = ACADEMY_COLORS.accentMain;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = ACADEMY_COLORS.lineSoft;
              }}
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
              <div role="list" className="grid grid-cols-1 gap-y-2 mt-2">
                {items.map((item, index) => {
                  const isActive = activeId === item.id;
                  return (
                    <div key={item.id} role="listitem">
                      <a
                        href={`#${item.id}`}
                        onClick={(event) => handleAnchorClick(event, item.id)}
                        className="flex items-start gap-3 py-1.5 text-[14px] sm:text-[15px] leading-relaxed transition-colors duration-300"
                        style={{
                          color: isActive ? ACADEMY_COLORS.accentMain : ACADEMY_COLORS.textBody,
                          fontWeight: isActive ? 700 : 500,
                          borderBottom: "none",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.color = ACADEMY_COLORS.accentMain;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.color = ACADEMY_COLORS.textBody;
                          }
                        }}
                      >
                        <span
                          className="shrink-0 pt-0.5 text-[13px] leading-none"
                          style={{ color: isActive ? ACADEMY_COLORS.accentMain : ACADEMY_COLORS.textMuted }}
                          aria-hidden="true"
                        >
                          •
                        </span>
                        <span
                          className="shrink-0 pt-0.5 text-[11px] tracking-[0.12em]"
                          style={{
                            fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                            color: isActive ? ACADEMY_COLORS.accentMain : ACADEMY_COLORS.textMuted,
                          }}
                        >
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="flex-1">{item.label}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
