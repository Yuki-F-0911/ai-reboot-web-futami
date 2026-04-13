"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, AlertCircle, Lightbulb, ChevronDown, LucideIcon } from "lucide-react";
import { renderReadableJapaneseText } from "@/components/typography/ReadableText";

// --- Headings ---

export const ArticleH2 = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <h2
    id={id}
    className={`text-balance-ja group relative mt-16 mb-8 scroll-mt-28 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl ${className}`}
  >
    <span className="absolute -left-4 top-1 bottom-1 w-1.5 rounded-full bg-gradient-to-b from-will-primary to-will-secondary opacity-80" />
    {typeof children === "string" ? renderReadableJapaneseText(children) : children}
  </h2>
);

export const ArticleH3 = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-balance-ja mt-10 mb-4 flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 ${className}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-will-primary" />
    {typeof children === "string" ? renderReadableJapaneseText(children) : children}
  </h3>
);

// --- Callouts ---

type CalloutType = "info" | "tip" | "warning";

const calloutStyles: Record<CalloutType, { container: string; icon: LucideIcon; iconColor: string; title: string }> = {
  info: {
    container: "bg-blue-50 border-blue-200 text-blue-900",
    icon: Info,
    iconColor: "text-blue-500",
    title: "補足情報",
  },
  tip: {
    container: "bg-orange-50 border-orange-200 text-orange-900",
    icon: Lightbulb,
    iconColor: "text-orange-500",
    title: "ヒント・コツ",
  },
  warning: {
    container: "bg-red-50 border-red-200 text-red-900",
    icon: AlertCircle,
    iconColor: "text-red-500",
    title: "注意点",
  },
};

export const Callout = ({ type = "info", title, children }: { type?: CalloutType; title?: string; children: React.ReactNode }) => {
  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <div className={`my-8 flex gap-4 rounded-xl border p-5 sm:p-6 ${style.container}`}>
      <div className={`mt-0.5 shrink-0 ${style.iconColor}`}>
        <Icon size={24} />
      </div>
      <div>
        {title && <div className="text-balance-ja mb-2 font-bold">{renderReadableJapaneseText(title)}</div>}
        {!title && <div className="mb-2 font-bold">{style.title}</div>}
        <div className="text-pretty-ja text-sm leading-relaxed opacity-90 sm:text-base">{children}</div>
      </div>
    </div>
  );
};

// --- Summary Box ---

export const SummaryBox = ({ title = "要点まとめ", items }: { title?: string; items: readonly string[] | string[] }) => (
  <section className="my-12 rounded-2xl border-2 border-orange-100 bg-orange-50/50 p-6 shadow-sm sm:p-8">
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
        <Check size={20} strokeWidth={3} />
      </div>
      <h2 className="text-balance-ja text-xl font-bold text-gray-900 sm:text-2xl">{renderReadableJapaneseText(title)}</h2>
    </div>
    <ul className="grid gap-4">
      {items.map((item, i) => (
        <li key={i} className="text-pretty-ja flex gap-3 text-sm leading-relaxed text-gray-700 sm:text-base">
          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
          <span>{renderReadableJapaneseText(item)}</span>
        </li>
      ))}
    </ul>
  </section>
);

// --- Rich Table ---

export const RichTable = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`my-10 overflow-hidden rounded-xl border border-gray-200 shadow-sm ${className}`}>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm leading-6 text-gray-700 sm:text-base">
        {children}
      </table>
    </div>
  </div>
);

// --- Rich FAQ (Accordion) ---

export const RichFAQ = ({ items }: { items: readonly { question: string; answer: string }[] | { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="my-10 space-y-4">
      {items.map((item, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-gray-50"
          >
            <span className="text-balance-ja pr-4 font-bold text-gray-900 sm:text-lg">
              Q. {renderReadableJapaneseText(item.question)}
            </span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 text-gray-400"
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="text-pretty-ja border-t border-gray-100 bg-gray-50/50 p-5 text-sm leading-relaxed text-gray-700 sm:text-base">
                  <div className="flex gap-3">
                    <span className="font-bold text-will-primary shrink-0">A.</span>
                    <div>{renderReadableJapaneseText(item.answer)}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

// --- Blockquote ---

export const RichBlockquote = ({ children, cite }: { children: React.ReactNode; cite?: string }) => (
  <blockquote className="relative my-10 rounded-2xl bg-gray-50 py-8 pl-10 pr-8 sm:pl-12">
    <span className="absolute left-4 top-6 text-6xl text-gray-200 font-serif leading-none select-none">&quot;</span>
    <div className="text-pretty-ja relative z-10 text-lg italic leading-relaxed text-gray-700 sm:text-xl">
      {typeof children === "string" ? renderReadableJapaneseText(children) : children}
    </div>
    {cite && (
      <cite className="text-balance-ja mt-4 block text-sm font-medium not-italic text-gray-500">
        — {renderReadableJapaneseText(cite)}
      </cite>
    )}
  </blockquote>
);
