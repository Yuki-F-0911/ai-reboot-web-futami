"use client";

import Link from "next/link";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "../sections/academyDesignTokens";

export default function WebtoonBannerSection() {
  return (
    <section
      className="mt-10 rounded-2xl border p-5 sm:p-7"
      style={{
        background: `linear-gradient(135deg, ${ACADEMY_COLORS.accentSoft} 0%, #fff7e6 52%, #fffdf8 100%)`,
        borderColor: "#f3cfac",
      }}
    >
      <div className="mb-4 inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.08em]" style={{ color: ACADEMY_COLORS.accentDeep, borderColor: "#e7b98d" }}>
        MANGA
      </div>

      <div className="grid gap-5 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="rounded-2xl border border-[#f1be8f] bg-white/85 p-4 sm:p-5">
          <p className="rounded-2xl border border-[#f4d5b8] bg-white px-4 py-3 text-sm leading-7 sm:text-base" style={{ color: ACADEMY_COLORS.textStrong }}>
            「AIって結局、自分には関係ない話？」
          </p>
          <p className="mt-3 rounded-2xl border border-[#f0c090] bg-[#fff4e9] px-4 py-3 text-sm font-bold leading-7 sm:text-base" style={{ color: ACADEMY_COLORS.accentDeep }}>
            「…本当にそれでいいの？」
          </p>
        </div>

        <div className="rounded-2xl border border-[#f0c090] bg-white/80 p-5">
          <p className="text-xs font-semibold tracking-[0.08em]" style={{ color: ACADEMY_COLORS.accentMain }}>
            漫画3分で読める
          </p>
          <h3 className="mt-2 text-xl font-bold leading-tight sm:text-2xl" style={{ color: ACADEMY_COLORS.textStrong, fontFamily: ACADEMY_TYPOGRAPHY.serif }}>
            AIに怯える32歳が、走り出すまで
          </h3>
          <Link
            href="/webtoon"
            className="mt-4 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: ACADEMY_COLORS.accentMain, color: "#ffffff", fontFamily: ACADEMY_TYPOGRAPHY.sans }}
          >
            漫画を読む →
          </Link>
        </div>
      </div>
    </section>
  );
}
