"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  label?: string;
  description?: string;
};

export const YouTubeEmbed = ({ videoId, title, className, label, description }: YouTubeEmbedProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div className={className}>
      {(label || description) && (
        <div className="mb-6">
          {label && (
            <span className="inline-block text-[10px] tracking-[0.2em] font-bold text-slate-400 uppercase mb-2">
              {label}
            </span>
          )}
          {description && (
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {description}
            </p>
          )}
        </div>
      )}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
        className="w-full aspect-video overflow-hidden rounded-lg shadow-sm bg-slate-100"
      >
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </div>
  );
};
