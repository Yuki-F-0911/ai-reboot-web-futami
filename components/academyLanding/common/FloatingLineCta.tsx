"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const lineUrl = "https://bexn9pao.autosns.app/line";
const dismissKey = "academy-floating-line-cta-dismissed";

export default function FloatingLineCta() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.sessionStorage.getItem(dismissKey);
    if (saved === "1") {
      setDismissed(true);
    } else {
      // 少し遅れて表示させることで注目を集める
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const isAcademyPath = useMemo(() => pathname?.startsWith("/academy"), [pathname]);
  const isBlogTop = pathname === "/academy/blog";

  if (!isAcademyPath || dismissed) return null;

  const close = () => {
    setIsVisible(false);
    setTimeout(() => {
      setDismissed(true);
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(dismissKey, "1");
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile version */}
          <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 sm:hidden"
          >
            <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-white/95 p-1 shadow-[0_12px_40px_-10px_rgba(6,199,85,0.4)] backdrop-blur-md">
              <div className="flex items-center gap-2 p-1">
                <motion.a
                  href={lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#06C755] to-[#05b54d] px-4 py-4.5 text-base font-black text-white shadow-[0_4px_14px_0_rgba(6,199,85,0.39)]"
                >
                  {/* Pulse effect background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0, 0.15, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-white"
                  />
                  
                  <LineIcon className="relative z-10 h-6 w-6" />
                  <span className="relative z-10 tracking-tight text-[15px] sm:text-base">
                    {isBlogTop ? "LINE登録で特典を受け取る" : "LINEで無料相談する"}
                  </span>
                  
                  {/* Subtle shine effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 2
                    }}
                    className="absolute inset-0 z-10 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                  />
                </motion.a>
                
                <button
                  type="button"
                  onClick={close}
                  aria-label="閉じる"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Desktop version */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-8 right-8 z-[70] hidden sm:block"
          >
            <div className="group relative">
              {/* Tooltip-like badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="absolute -top-12 right-0 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg after:absolute after:right-6 after:top-full after:border-4 after:border-transparent after:border-t-slate-900"
              >
                まずはLINEで気軽に相談 ✨
              </motion.div>

              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(6, 199, 85, 0)",
                      "0 0 0 10px rgba(6, 199, 85, 0.2)",
                      "0 0 0 20px rgba(6, 199, 85, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="rounded-full"
                >
                  <motion.a
                    href={lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#06C755] to-[#05b54d] pl-5 pr-7 py-4 text-base font-black text-white shadow-[0_10px_20px_-5px_rgba(6,199,85,0.4)] transition-all hover:shadow-[0_15px_30px_-5px_rgba(6,199,85,0.5)]"
                  >
                    <LineIcon className="h-6 w-6" />
                    <span className="tracking-tight">
                      {isBlogTop ? "LINEで特典を受け取る" : "LINEで無料相談する"}
                    </span>
                  </motion.a>
                </motion.div>

                <motion.button
                  type="button"
                  onClick={close}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="閉じる"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-400 shadow-sm backdrop-blur-sm transition-all hover:border-slate-300 hover:text-slate-600 hover:shadow-md"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

