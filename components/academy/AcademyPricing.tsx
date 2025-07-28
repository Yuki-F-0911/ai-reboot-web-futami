"use client";

import { motion } from "framer-motion";

export const AcademyPricing = () => {
  const pricingData = [
    {
      label: "一般受講料",
      price: "330,000円",
      subsidy: "",
      actualPrice: "ー"
    },
    {
      label: "補助金活用料金",
      price: "▲150,000円",
      note: "（税抜価格の50%分）",
      actualPrice: "実質自己負担額：180,000円",
      highlight: true
    },
    {
      label: "受講後に転職成功し、1年勤務した場合",
      price: "▲60,000円",
      note: "（税抜価格の20%分）",
      actualPrice: "実質自己負担額：120,000円"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-will-gradient bg-clip-text text-transparent">
              費用・助成金制度
            </span>
          </h2>
          
          {/* 料金表 */}
          <div className="bg-white rounded-3xl shadow-elevated overflow-hidden mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-will-primary to-will-secondary text-white">
                  <th className="px-6 py-4 text-left">項目</th>
                  <th className="px-6 py-4 text-center">金額（税込）</th>
                  <th className="px-6 py-4 text-center">補助金後実質負担</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr key={index} className={`border-b ${item.highlight ? 'bg-will-lighter' : ''}`}>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-depth-900">{item.label}</p>
                        {item.note && <p className="text-sm text-depth-600">{item.note}</p>}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <p className={`text-lg font-bold ${item.price.startsWith('▲') ? 'text-harmony' : 'text-depth-900'}`}>
                        {item.price}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <p className={`font-bold ${item.highlight ? 'text-will-primary text-xl' : 'text-depth-900'}`}>
                        {item.actualPrice}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* 補助金バッジ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-will-primary to-will-secondary text-white px-8 py-4 rounded-full shadow-glow mb-4">
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