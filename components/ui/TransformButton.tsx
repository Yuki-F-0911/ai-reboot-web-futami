"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

interface TransformButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const TransformButton = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
}: TransformButtonProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm min-h-[36px]",
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[52px]",
  };
  
  const variantClasses = {
    primary: "bg-will-gradient text-white shadow-elevated hover:shadow-floating",
    secondary: "bg-white text-will-primary border-2 border-will-primary hover:bg-will-lighter",
    ghost: "bg-transparent text-will-primary hover:bg-will-lighter/20",
  };
  
  const content = (
    <motion.div
      className={`
        relative inline-flex items-center justify-center
        font-bold rounded-2xl overflow-hidden
        transition-all duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {/* 内部グロー効果 */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* コンテンツ */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* リップル効果 */}
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 1 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{ borderRadius: "50%" }}
      />
    </motion.div>
  );
  
  if (href) {
    return <a href={href}>{content}</a>;
  }
  
  return content;
};