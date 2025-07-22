"use client"

import { motion } from "framer-motion"

const AcademyPricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8">料金プラン</h2>
          <p className="text-xl text-gray-600 mb-12">
            経済産業省リスキリング補助金で最大70%OFF
          </p>
          <div className="bg-gray-100 rounded-lg p-8">
            <p className="text-gray-500">このセクションは現在準備中です</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { AcademyPricing }