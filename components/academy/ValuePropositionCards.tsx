"use client";

import { motion } from "framer-motion";

export const ValuePropositionCards = () => {
  const values = [
    {
      title: "実践的な100日間",
      description: "2日間の集合研修と100日間の伴走支援で確実にスキルを定着",
    },
    {
      title: "最大70%の補助金",
      description: "経済産業省認定講座。実質18万円から受講可能",
    },
    {
      title: "挫折させない仕組み",
      description: "専門メンターとキャリアコンサルタントによる個別サポート",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20"
    >
      {values.map((value, index) => (
        <div key={index} className="text-center">
          <h3 className="text-lg font-semibold text-depth-900 mb-2">
            {value.title}
          </h3>
          <p className="text-sm text-depth-600 leading-relaxed">
            {value.description}
          </p>
        </div>
      ))}
    </motion.div>
  );
};