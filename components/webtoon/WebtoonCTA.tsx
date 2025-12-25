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
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10"
        >
          <a
            href="https://line.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white bg-[#06C755] hover:bg-[#05b54d] rounded-full transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            まずはLINEで相談
          </a>
          <Link
            href="/academy"
            className="inline-flex items-center justify-center px-6 py-4 text-base font-bold text-amber-600 bg-transparent border-2 border-amber-500/50 hover:border-amber-400 hover:bg-amber-500/10 rounded-full transition-all duration-300"
          >
            またはアカデミー詳細を見る
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

