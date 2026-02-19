"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const lineUrl = "https://bexn9pao.autosns.app/line";
const dismissKey = "academy-floating-line-cta-dismissed";

export default function FloatingLineCta() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.sessionStorage.getItem(dismissKey);
    if (saved === "1") setDismissed(true);
  }, []);

  const isAcademyPath = useMemo(() => pathname?.startsWith("/academy"), [pathname]);
  const isBlogTop = pathname === "/academy/blog";

  if (!isAcademyPath || dismissed) return null;

  const close = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(dismissKey, "1");
    }
  };

  return (
    <>
      <div className="fixed bottom-4 left-1/2 z-[70] w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 sm:hidden">
        <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-white/95 px-3 py-3 shadow-lg backdrop-blur">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#06C755] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#05b54d]"
          >
            <LineIcon className="h-4 w-4" />
            LINEで無料相談
          </a>
          <button
            type="button"
            onClick={close}
            aria-label="追従LINEボタンを閉じる"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100"
          >
            ×
          </button>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-[70] hidden sm:block">
        <div className="flex items-center gap-2">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#05b54d]"
          >
            <LineIcon className="h-4 w-4" />
            {isBlogTop ? "LINEで特典を受け取る" : "LINEで無料相談"}
          </a>
          <button
            type="button"
            onClick={close}
            aria-label="追従LINEボタンを閉じる"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:bg-slate-100"
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}
