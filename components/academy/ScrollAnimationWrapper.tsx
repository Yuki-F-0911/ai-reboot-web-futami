"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: "fadeUp" | "fadeIn" | "slideIn" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollAnimationWrapper = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  className = "",
}: ScrollAnimationWrapperProps) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });

  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideIn: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // カスタムイージング
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};