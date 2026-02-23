import type { ReactNode } from "react";
import { ACADEMY_COLORS } from "@/components/academyLanding/sections/academyDesignTokens";

type ResultBlockProps = {
  children: ReactNode;
  label?: string;
};

const defaultLabel = "AIの回答イメージ";

export default function ResultBlock({ children, label = defaultLabel }: ResultBlockProps) {
  return (
    <div className="rounded-xl border p-5" style={{ backgroundColor: ACADEMY_COLORS.accentSoft, borderColor: "#e8c4a0" }}>
      {label && (
        <p className="mb-3 text-xs font-semibold" style={{ color: ACADEMY_COLORS.accentDeep }}>
          {label}
        </p>
      )}
      <div className="whitespace-pre-wrap text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
        {children}
      </div>
    </div>
  );
}
