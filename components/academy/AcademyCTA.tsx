"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const AcademyCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8">今すぐ始めましょう</h2>
          <p className="text-xl text-gray-600 mb-12">
            AIで新しいキャリアの可能性を切り開く第一歩を踏み出しませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              無料相談を申し込む
            </Link>
            <Link href="/academy#subsidy" className="btn-secondary">
              補助金・料金を見る
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { AcademyCTA }