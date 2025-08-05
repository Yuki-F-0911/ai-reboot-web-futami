"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchEffectProps {
  children: React.ReactNode;
  isActive?: boolean;
}

export function GlitchEffect({ children, isActive = false }: GlitchEffectProps) {
  const [glitchKey, setGlitchKey] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setGlitchKey(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive]);

  const glitchVariants = {
    normal: {
      x: 0,
      y: 0,
      scale: 1,
      rotateZ: 0,
      filter: "hue-rotate(0deg) blur(0px)",
    },
    glitch: {
      x: [-2, 2, -1, 1, 0],
      y: [1, -1, 0, -1, 0],
      scale: [1, 1.01, 0.99, 1.01, 1],
      rotateZ: [0, -0.5, 0.5, -0.2, 0],
      filter: [
        "hue-rotate(0deg) blur(0px)",
        "hue-rotate(90deg) blur(1px)",
        "hue-rotate(-90deg) blur(0.5px)",
        "hue-rotate(45deg) blur(0.3px)",
        "hue-rotate(0deg) blur(0px)",
      ],
      transition: {
        duration: 0.2,
        times: [0, 0.2, 0.4, 0.6, 1],
      },
    },
  };

  return (
    <div className="relative">
      <motion.div
        key={glitchKey}
        variants={glitchVariants}
        initial="normal"
        animate={isActive ? "glitch" : "normal"}
      >
        {children}
      </motion.div>
      
      {/* グリッチ時の残像効果 */}
      {isActive && (
        <>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.1, 0, 0.05, 0],
              x: [0, -3, 2, -1, 0],
            }}
            transition={{ duration: 0.2 }}
            style={{ mixBlendMode: "screen" }}
          >
            {children}
          </motion.div>
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.1, 0, 0.05, 0],
              x: [0, 3, -2, 1, 0],
              filter: "hue-rotate(180deg)",
            }}
            transition={{ duration: 0.2, delay: 0.05 }}
            style={{ mixBlendMode: "multiply" }}
          >
            {children}
          </motion.div>
        </>
      )}
    </div>
  );
}