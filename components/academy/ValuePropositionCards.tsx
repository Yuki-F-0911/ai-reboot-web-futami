"use client";

import { motion } from "framer-motion";

export const ValuePropositionCards = () => {
  const cards = [
    {
      icon: "🚀",
      title: "100日で変わる",
      subtitle: "実践的カリキュラム",
      description: "2日間の集合研修＋100日間の伴走支援",
      gradient: "from-will-primary to-will-secondary"
    },
    {
      icon: "💰",
      title: "最大70%補助",
      subtitle: "実質負担18万円〜",
      description: "経済産業省リスキリング補助金対象",
      gradient: "from-harmony to-wisdom"
    },
    {
      icon: "🤝",
      title: "挫折させない",
      subtitle: "伴走型サポート",
      description: "メンター＋キャリアコンサルタントが支援",
      gradient: "from-will-secondary to-harmony"
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
            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
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