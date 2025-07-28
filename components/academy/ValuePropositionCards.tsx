"use client";

import { motion } from "framer-motion";

export const ValuePropositionCards = () => {
  const cards = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "100日で変わる",
      subtitle: "実践的カリキュラム",
      description: "2日間の集合研修＋100日間の伴走支援",
      gradient: "from-will-primary to-will-secondary",
      iconColor: "text-will-primary"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "最大70%補助",
      subtitle: "実質負担18万円〜",
      description: "経済産業省リスキリング補助金対象",
      gradient: "from-harmony to-wisdom",
      iconColor: "text-harmony"
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "挫折させない",
      subtitle: "伴走型サポート",
      description: "メンター＋キャリアコンサルタントが支援",
      gradient: "from-will-secondary to-harmony",
      iconColor: "text-will-secondary"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="group"
        >
          <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 h-full border border-depth-100 relative overflow-hidden">
            {/* 背景グラデーション */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            {/* アイコン */}
            <div className={`mb-4 ${card.iconColor} transform group-hover:scale-110 transition-transform duration-300`}>
              {card.icon}
            </div>
            
            {/* タイトル */}
            <h3 className="text-2xl font-bold text-depth-900 mb-1">
              {card.title}
            </h3>
            
            {/* サブタイトル */}
            <p className="text-lg font-semibold text-will-primary mb-3">
              {card.subtitle}
            </p>
            
            {/* 説明 */}
            <p className="text-depth-700 leading-relaxed">
              {card.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};