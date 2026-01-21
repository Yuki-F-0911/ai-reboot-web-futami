"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateTestimonialVideo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-depth-100">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-6">
            お客様の声
          </h2>
          <p className="text-base md:text-lg text-depth-700 leading-[1.8]">
            研修を通じて得られた気づきと変化について語っていただきました。
          </p>
        </motion.div>
        
        {/* 動画埋め込み */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-lg p-8 md:p-10 shadow-elevated border border-depth-100">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-depth-800 leading-[1.4]">ウィルトラスト社 礒崎様より</h3>
            </div>
            
            {/* YouTube埋め込み */}
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/AcJrcmt1bp8"
                      title="お客様の声 - ウィルトラスト社 礒崎様"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

