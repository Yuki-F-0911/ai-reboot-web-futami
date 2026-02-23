import type { ReactNode } from "react";
import { ACADEMY_COLORS } from "@/components/academyLanding/sections/academyDesignTokens";

type PromptBlockProps = {
  children: ReactNode;
  label?: string;
};

const defaultLabel = "プロンプト例（コピーして使えます）";

export default function PromptBlock({ children, label = defaultLabel }: PromptBlockProps) {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ backgroundColor: ACADEMY_COLORS.bgSection, borderColor: ACADEMY_COLORS.lineStrong }}
    >
      {label && (
        <p className="mb-3 text-xs font-semibold" style={{ color: ACADEMY_COLORS.accentMain }}>
          {label}
        </p>
      )}
      <div className="whitespace-pre-wrap text-sm leading-relaxed" style={{ color: ACADEMY_COLORS.textBody }}>
        {children}
      </div>
    </div>
  );
}
