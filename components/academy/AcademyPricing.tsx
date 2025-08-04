"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AcademyPricing = () => {
  const pricingCards = [
    {
      title: "一般受講料",
      price: "330,000",
      unit: "円",
      description: "通常価格",
      features: [
        "100日間の実践プログラム",
        "2日間の宿泊型集合研修",
        "メンター伴走サポート",
        "キャリアコンサルティング3回"
      ]
    },
    {
      title: "補助金活用時",
      price: "180,000",
      unit: "円～",
      description: "最大70%補助",
      originalPrice: "330,000円",
      discount: "最大150,000円OFF",
      features: [
        "経済産業省リスキリング補助金対象",
        "税抜価格の50%補助",
        "全てのプログラム内容を含む",
        "転職成功でさらに20%補助"
      ],
      highlight: true
    }
  ];

  return (
    <section id="apply" className="section-spacing">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-will-gradient bg-clip-text text-transparent">
              費用・助成金制度
            </span>
          </h2>
          
          {/* 料金カード */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {pricingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${card.highlight ? 'md:scale-105' : ''}`}
              >
                {card.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-will-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                    おすすめ
                  </div>
                )}
                <div className={`bg-white rounded-3xl p-8 md:p-10 shadow-elevated h-full ${
                  card.highlight ? 'ring-2 ring-will-primary ring-offset-4' : ''
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-depth-900 mb-2">{card.title}</h3>
                    <p className="text-depth-600 mb-4">{card.description}</p>
                    {card.originalPrice && (
                      <p className="text-depth-500 line-through mb-1">{card.originalPrice}</p>
                    )}
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-will-primary">{card.price}</span>
                      <span className="text-2xl text-depth-700">{card.unit}</span>
                    </div>
                    {card.discount && (
                      <p className="text-harmony font-bold mt-2">{card.discount}</p>
                    )}
                  </div>
                  <ul className="space-y-4">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-will-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-depth-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* 補助金バッジ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* 経済産業省リスキリング補助金ロゴ */}
            <div className="mb-8">
              <Image
                src="/images/keisan-reskiling-logo.webp"
                alt="経済産業省 リスキリング通じたキャリアアップ支援事業"
                width={320}
                height={90}
                className="h-20 md:h-24 w-auto"
              />
            </div>
            
            <div className="inline-flex items-center gap-3 bg-white text-will-primary border-2 border-will-primary px-8 py-4 rounded-full mb-6">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-lg">経済産業省認定講座</span>
            </div>
            <p className="text-center text-depth-700">
              AIリブートアカデミーは経済産業省「リスキリングを通じたキャリアアップ支援事業」認定講座です。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};