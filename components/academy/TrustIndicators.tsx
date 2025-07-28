"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TrustIndicators = () => {
  const [count, setCount] = useState(0);
  const targetCount = 523; // 受講者数
  
  useEffect(() => {
    const duration = 2000; // 2秒でカウントアップ
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-12"
    >
      {/* 経済産業省認定バッジ */}
      <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-soft">
        <svg className="w-8 h-8 text-will-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="text-xs text-depth-600">経済産業省</p>
          <p className="text-sm font-bold text-depth-900">認定講座</p>
        </div>
      </div>
      
      {/* 受講者数カウンター */}
      <div className="text-center">
        <motion.p
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-will-primary"
        >
          {count}名
        </motion.p>
        <p className="text-sm text-depth-600">受講者数突破</p>
      </div>
      
      {/* 満足度 */}
      <div className="text-center">
        <div className="flex items-center gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.svg
              key={star}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + star * 0.1 }}
              className={`w-6 h-6 ${star <= 4 ? 'text-harmony' : 'text-harmony/50'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>
        <p className="text-xl font-bold text-depth-900">4.8/5.0</p>
        <p className="text-sm text-depth-600">満足度</p>
      </div>
    </motion.div>
  );
};