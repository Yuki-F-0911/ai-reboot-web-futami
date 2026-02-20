import Link from "next/link";
import { ACADEMY_COLORS } from "../sections/academyDesignTokens";

export default function WebtoonBannerSection() {
  return (
    <Link
      href="/webtoon"
      className="my-10 flex items-center justify-between gap-4 rounded-lg border-l-4 px-5 py-4 transition-opacity hover:opacity-80 sm:px-6"
      style={{
        borderLeftColor: ACADEMY_COLORS.accentMain,
        backgroundColor: ACADEMY_COLORS.bgSection,
        borderTopColor: ACADEMY_COLORS.lineSoft,
        borderRightColor: ACADEMY_COLORS.lineSoft,
        borderBottomColor: ACADEMY_COLORS.lineSoft,
      }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span
          className="shrink-0 rounded px-2 py-0.5 text-[10px] font-bold tracking-widest"
          style={{ backgroundColor: ACADEMY_COLORS.accentMain, color: "#fff" }}
        >
          MANGA
        </span>
        <p className="truncate text-sm font-medium" style={{ color: ACADEMY_COLORS.textBody }}>
          「AIって結局、自分には関係ない話？」 ― 漫画3分で確かめる
        </p>
      </div>
      <span className="shrink-0 text-sm font-bold" style={{ color: ACADEMY_COLORS.accentMain }}>
        読む →
      </span>
    </Link>
  );
}
