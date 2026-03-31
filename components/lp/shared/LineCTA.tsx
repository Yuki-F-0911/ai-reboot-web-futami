"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

/* ── LINE Icon SVG ── */
export function LineIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.48 2 2 5.92 2 10.72c0 3.3 2.1 6.18 5.22 7.8-.22.82-.8 2.98-.92 3.44-.15.57.21.56.44.41.18-.11 2.86-1.9 4.02-2.68.38.05.77.08 1.17.08 5.52 0 10-3.92 10-8.72C22 5.92 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface LineCTAProps {
  label?: string;
  className?: string;
  analyticsSource?: string;
  lineUrl?: string;
}

export function LineCTA({
  label = "LINEに追加して無料診断を受ける",
  className,
  analyticsSource = "lp_line",
  lineUrl = "https://bexn9pao.autosns.app/line",
}: LineCTAProps) {
  const src = analyticsSource;
  const href = `${lineUrl}?src=${src}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent.lineRegisterClick(src)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      <LineIcon />
      <span>{label}</span>
      <ArrowRight style={{ width: 16, height: 16, opacity: 0.6 }} />
    </motion.a>
  );
}
