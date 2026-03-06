"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const modalShownKey = "academy-blog-line-modal-closed";
const lineUrl = "https://bexn9pao.autosns.app/line";

export default function ArticleReadLineModal() {
  const pathname = usePathname();
  const isArticle = useMemo(() => {
    if (!pathname) return false;
    return pathname.startsWith("/academy/blog/") && pathname !== "/academy/blog";
  }, [pathname]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isArticle || typeof window === "undefined") return;
    if (window.sessionStorage.getItem(modalShownKey) === "1") return;

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = window.scrollY / total;
      if (progress >= 0.6) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isArticle]);

  if (!isArticle || !open) return null;

  const close = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(modalShownKey, "1");
    }
  };

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        aria-label="モーダルを閉じる"
        className="absolute inset-0 bg-slate-900/45"
        onClick={close}
      />
      <div className="absolute inset-x-4 bottom-4 mx-auto max-w-xl rounded-2xl border border-green-200 bg-white p-6 shadow-2xl sm:bottom-8 sm:inset-x-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-green-700">AI DIAGNOSIS OFFER</p>
            <h3 className="mt-2 text-xl font-bold leading-tight text-slate-900">
              あなたに合うAIを診断します — 登録は30秒
            </h3>
          </div>
          <button
            type="button"
            onClick={close}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100"
            aria-label="モーダルを閉じる"
          >
            ×
          </button>
        </div>

        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
          <li className="pl-1 marker:text-slate-500">
            30秒の診断で、あなたが使うべきAIツール3選がわかる
          </li>
          <li className="pl-1 marker:text-slate-500">
            ChatGPT・Claude・Gemini など主要AIの中から個別診断
          </li>
          <li className="pl-1 marker:text-slate-500">
            今すぐ無料の攻略本も届く
          </li>
        </ul>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-[#06C755] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#05b54d]"
          >
            LINEで無料AI診断をはじめる
          </a>
          <Link
            href="/academy/seminars"
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            無料セミナーを見る
          </Link>
        </div>

        <p className="mt-3 text-center text-xs text-slate-500">
          ※ 匿名OK・勧誘なし・いつでも退会可
        </p>
      </div>
    </div>
  );
}
