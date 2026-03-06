"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ACADEMY_COLORS } from "../sections/academyDesignTokens";
import { trackEvent } from "@/lib/analytics";

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
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const isAcademyPath = useMemo(() => pathname?.startsWith("/academy"), [pathname]);

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
            <div 
              className="relative overflow-hidden rounded-xl border bg-white/95 p-1 shadow-md backdrop-blur-md"
              style={{ borderColor: ACADEMY_COLORS.lineSoft }}
            >
              <div className="flex items-center gap-2 p-1">
                <motion.a
                  href={lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => trackEvent.lineRegisterClick('floating_cta_mobile')}
                  className="relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-lg px-4 py-4 text-base font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: ACADEMY_COLORS.ctaLine }}
                >
                  <LineIcon className="h-5 w-5" />
                  <span className="tracking-tight text-[15px] sm:text-base">
                    30秒AI診断 → ツール3選＋攻略本
                  </span>
                </motion.a>
                
                <button
                  type="button"
                  onClick={close}
                  aria-label="閉じる"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-stone-100 text-stone-400"
                  style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
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
              <div className="flex items-center gap-3">
                <motion.a
                  href={lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => trackEvent.lineRegisterClick('floating_cta_desktop')}
                  className="flex items-center gap-3 rounded-lg pl-5 pr-7 py-3.5 text-base font-bold text-white shadow-md transition-all hover:opacity-90"
                  style={{ backgroundColor: ACADEMY_COLORS.ctaLine }}
                >
                  <LineIcon className="h-5 w-5" />
                  <span className="tracking-tight">
                    LINE登録→30秒診断→AIツール3選＋攻略本を受け取る
                  </span>
                </motion.a>

                <motion.button
                  type="button"
                  onClick={close}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="閉じる"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border bg-white/80 text-stone-400 shadow-sm backdrop-blur-sm transition-all hover:bg-stone-50"
                  style={{ borderColor: ACADEMY_COLORS.lineSoft }}
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
