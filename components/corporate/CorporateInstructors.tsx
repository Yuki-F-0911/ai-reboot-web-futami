"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const CorporateInstructors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const instructors = [
    {
      name: "成瀬 拓也",
      title: "ウィルフォワード代表",
      description: "経営・AX・人材開発の専門家として多くの企業支援実績を持つ。AI活用の戦略設計に精通。",
      color: "harmony",
      image: "/images/naruse.jpg"
    },
    {
      name: "坂本 拓磨",
      title: "生成AI活用ディレクター",
      description: "Web/映像領域でのAI実装経験が豊富。一般社団法人生成AI活用普及協会「生成AIパスポート」保有。",
      certification: true,
      color: "will-primary",
      image: "/images/sakamoto.jpg"
    },
    {
      name: "青木 玲仁",
      title: "AI業務改善コンサルタント",
      description: "人事・業務プロセス改善におけるAI活用の実践者。一般社団法人生成AI活用普及協会「生成AIパスポート」保有。",
      certification: true,
      color: "wisdom",
      image: "/images/aoki.jpg"
    }
  ];
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-depth-100 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            講師陣
          </h2>
          <p className="text-xl text-depth-700">
            実践経験豊富な専門家が、貴社のAI変革を支援します
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-elevated hover:shadow-floating transition-all duration-300"
            >
              {/* プロフィール画像 */}
              <div className="w-32 h-32 relative overflow-hidden rounded-full mx-auto mb-6">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* 名前と肩書き */}
              <h3 className="text-xl font-bold text-center mb-2 text-depth-800">
                {instructor.name}
              </h3>
              <p className="text-center text-depth-600 mb-4">
                {instructor.title}
              </p>
              
              
              {/* 説明 */}
              <p className="text-depth-700 text-center leading-relaxed">
                {instructor.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};