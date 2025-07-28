"use client";

import { motion } from "framer-motion";

export const TrustIndicators = () => {
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
      
      {/* リスキリング補助金 */}
      <div className="text-center">
        <motion.p
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-2xl md:text-3xl font-bold text-will-primary"
        >
          最大70%補助
        </motion.p>
        <p className="text-sm text-depth-600">リスキリング補助金対象</p>
      </div>
      
      {/* 宿泊型研修 */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-1">
          <svg className="w-8 h-8 text-harmony" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <p className="text-xl font-bold text-depth-900">2日間</p>
        <p className="text-sm text-depth-600">宿泊型集合研修</p>
      </div>
    </motion.div>
  );
};