"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type MotionHeaderProps = ComponentProps<typeof motion.header>;
type MotionSectionProps = ComponentProps<typeof motion.section>;

export function MotionHeader(props: MotionHeaderProps) {
  return <motion.header {...props} />;
}

export function MotionSection(props: MotionSectionProps) {
  return <motion.section {...props} />;
}
