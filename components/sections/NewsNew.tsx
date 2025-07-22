"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface NewsItem {
  date: string;
  category: string;
  title: string;
  link: string;
}

export const NewsNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const newsItems: NewsItem[] = [
    {
      date: "2025.01.15",
      category: "お知らせ",
      title: "AIリブートアカデミー第3期生募集開始",
      link: "/news/academy-3rd-recruitment"
    },
    {
      date: "2025.01.10",
      category: "メディア掲載",
      title: "日経新聞にて当社の取り組みが紹介されました",
      link: "/news/nikkei-feature"
    },
    {
      date: "2025.01.05",
      category: "イベント",
      title: "無料オンラインセミナー「AI時代のキャリア戦略」開催",
      link: "/news/career-strategy-seminar"
    }
  ];
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "お知らせ":
        return "bg-will-primary text-white";
      case "メディア掲載":
        return "bg-wisdom text-white";
      case "イベント":
        return "bg-harmony text-white";
      default:
        return "bg-depth-400 text-white";
    }
  };
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-depth-100">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-6 text-depth-800">
            最新情報
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-soft p-8 md:p-10">
            <ul className="space-y-6">
              {newsItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Link href={item.link} className="group block">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 pb-6 border-b border-depth-200 last:border-none hover:bg-depth-100 -mx-4 px-4 py-2 rounded-xl transition-colors duration-300">
                      {/* 日付 */}
                      <time className="text-depth-500 font-medium whitespace-nowrap">
                        {item.date}
                      </time>
                      
                      {/* カテゴリー */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(item.category)} whitespace-nowrap`}>
                        【{item.category}】
                      </span>
                      
                      {/* タイトル */}
                      <h3 className="text-depth-800 font-medium group-hover:text-will-primary transition-colors duration-300 flex-1">
                        {item.title}
                      </h3>
                      
                      {/* 矢印 */}
                      <svg 
                        className="w-5 h-5 text-depth-400 group-hover:text-will-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* すべて見るリンク */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mt-8"
            >
              <Link href="/news" className="inline-flex items-center gap-2 text-will-primary font-bold hover:gap-3 transition-all duration-300">
                <span>すべて見る</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};