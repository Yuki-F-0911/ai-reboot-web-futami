'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function WebtoonCTA() {
  return (
    <section id="cta" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-[1000px] mx-auto text-center">
        {/* バッジ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500 text-white text-sm font-bold rounded-full">
            現在募集中
          </span>
        </motion.div>

        {/* タイトル */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
        >
          あなたのキャリアを、<br />
          <span className="text-amber-600">OSから再起動</span>する。
        </motion.h2>

        {/* 説明 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed"
        >
          AI時代を生き抜くための「思考」と「技術」を手に入れる。<br />
          100日間で生成AI時代を生き抜く思考OSをインストールする。
        </motion.p>

        {/* CTAボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center mb-10"
        >
          <Link
            href="/academy"
            className="inline-flex items-center gap-2 px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>AIリブートアカデミーについて詳しく見る</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* 補助金バナー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 md:p-8"
        >
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-full">
                経済産業省認定
              </span>
              <div className="text-center md:text-left">
                <div className="font-bold text-gray-900 mb-1">
                  リスキリング補助金対象講座
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  最大<em className="text-3xl not-italic">70%</em>補助
                </div>
              </div>
            </div>
            <div className="text-center pt-4 border-t border-blue-200">
              <span className="text-gray-600 line-through mr-2">通常価格 330,000円</span>
              <span className="text-xl font-bold text-gray-900">
                実質 <strong className="text-2xl text-blue-600">120,000円</strong>〜
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

