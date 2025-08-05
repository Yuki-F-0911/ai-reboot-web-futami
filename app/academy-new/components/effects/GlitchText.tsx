"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function GlitchText({ text, className = "", delay = 0 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        
        // グリッチテキストを生成
        const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
        const glitchedText = text
          .split("")
          .map((char, index) => {
            if (Math.random() > 0.7) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join("");
        
        setDisplayText(glitchedText);
        
        // 短時間で元に戻す
        setTimeout(() => {
          setDisplayText(text);
          setIsGlitching(false);
        }, 100);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <motion.span
      className={className}
      animate={{
        x: isGlitching ? [-2, 2, -1, 0] : 0,
        filter: isGlitching 
          ? ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(-90deg)", "hue-rotate(0deg)"]
          : "hue-rotate(0deg)",
      }}
      transition={{ duration: 0.1 }}
      style={{
        display: "inline-block",
        textShadow: isGlitching 
          ? "2px 0 #ff0080, -2px 0 #00ffff, 0 2px #ff00ff"
          : "none",
      }}
    >
      {displayText}
    </motion.span>
  );
}