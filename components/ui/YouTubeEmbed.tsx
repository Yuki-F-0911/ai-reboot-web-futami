"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

export const YouTubeEmbed = ({ videoId, title, className }: YouTubeEmbedProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const wrapperClassName = ["w-full aspect-video overflow-hidden rounded-2xl shadow-lg", className]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={wrapperClassName}
    >
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  );
};
