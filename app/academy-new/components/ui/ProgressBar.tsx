"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { easings } from "../../lib/animations";

export function ProgressBar() {
  const { percentage, currentSection } = useScrollProgress();

  // セクションごとのラベル
  const sectionLabels: Record<string, string> = {
    hero: "始まり",
    prologue: "序章",
    chapter1: "第一章",
    chapter2: "第二章",
    chapter3: "第三章",
    chapter4: "第四章",
    finale: "最終章",
  };

  // セクションごとの色
  const sectionColors: Record<string, string> = {
    hero: "from-gray-400 to-gray-500",
    prologue: "from-gray-500 to-gray-600",
    chapter1: "from-amber-400 to-amber-500",
    chapter2: "from-blue-400 to-blue-500",
    chapter3: "from-green-400 to-green-500",
    chapter4: "from-orange-400 to-orange-500",
    finale: "from-purple-400 to-purple-500",
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: easings.smoothOut }}
    >
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="relative h-1 bg-gray-100 overflow-hidden">
          <motion.div
            className={`absolute h-full bg-gradient-to-r ${sectionColors[currentSection]}`}
            initial={{ width: "0%" }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.3, ease: easings.standard }}
          />
          
          {/* 光沢効果 */}
          <motion.div
            className="absolute h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: `${percentage * 10}%` }}
            transition={{ duration: 0.3, ease: easings.standard }}
          />
        </div>
        
        {/* 現在のセクション表示 */}
        <div className="absolute top-2 right-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              className="text-xs text-gray-500 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: easings.standard }}
            >
              {sectionLabels[currentSection]} 
              <span className="ml-2 text-gray-400">
                {Math.round(percentage)}%
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* セクションインジケーター */}
        <div className="absolute top-0 left-0 w-full h-1 flex">
          {Object.keys(sectionLabels).map((section, index) => (
            <div
              key={section}
              className="flex-1 relative"
              style={{ opacity: currentSection === section ? 1 : 0.3 }}
            >
              <div className="absolute inset-0 border-r border-gray-200 last:border-r-0" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}