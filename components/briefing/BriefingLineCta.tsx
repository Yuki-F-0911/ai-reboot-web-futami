"use client";
import { trackEvent } from "@/lib/analytics";

type Position = "hero" | "mid" | "bottom";

const LABELS: Record<Position, string> = {
  hero: "LINEで無料相談する",
  mid: "LINEで無料相談する",
  bottom: "今すぐLINEで相談する（無料）",
};

const LINE_URL = "https://bexn9pao.autosns.app/line?src=briefing";

export function BriefingLineCta({ position }: { position: Position }) {
  return (
    <a
      href={LINE_URL}
      onClick={() => trackEvent.lineRegisterClick(`briefing_${position}`)}
      className="inline-flex items-center justify-center rounded-xl bg-[#06C755] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[#05b04b]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {LABELS[position]}
    </a>
  );
}
