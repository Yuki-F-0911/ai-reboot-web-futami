"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export const AcademyCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    // ハッシュが#ctaの場合、またはビューに入った場合はアニメーションを開始
    if (typeof window !== 'undefined' && window.location.hash === '#cta') {
      setShouldAnimate(true);
    } else if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);
  return (
    <section className="section-spacing bg-gradient-to-br from-will-primary to-will-secondary relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0">
        <div className="absolute top-[-50%] left-[-25%] w-[150%] h-[150%] bg-white/5 rounded-full" />
        <div className="absolute bottom-[-50%] right-[-25%] w-[150%] h-[150%] bg-white/5 rounded-full" />
      </div>
      
      <div className="container-section relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            あなたの「Will」を見つけ、
            <br />
            AIと共に実現する力を。
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            100日後、あなたは生成AI時代を生き抜く
            <br />
            新しい思考OSを手に入れている。
          </p>
          
          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "#"} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-will-primary font-bold text-lg rounded-full shadow-elevated hover:shadow-floating transition-all duration-300"
              >
                今すぐ申し込む
              </motion.button>
            </Link>
            <Link href="#program">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-will-primary transition-all duration-300"
              >
                プログラム詳細を見る
              </motion.button>
            </Link>
          </div>
          
          {/* 補助金情報 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12"
          >
            <p className="text-white/80 mb-2">
              経済産業省リスキリング補助金対象講座
            </p>
            <p className="text-2xl font-bold text-white">
              最大70%（21万円）の補助金活用可能
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};