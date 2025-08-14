'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { MessageCircle, FileText } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef(null)
  useInView(ref, { once: true, amount: 0.5 })  // Trigger animations

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-8 text-center">
        {/* メインメッセージ */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-light text-gray-900 mb-12"
        >
          準備ができたら
        </motion.h2>

        {/* CTAボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* お問い合わせボタン */}
          <Link href="/contact">
            <button className="group px-8 py-4 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-all duration-300">
              <div className="flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  お問い合わせ
                </span>
              </div>
            </button>
          </Link>

          {/* 無料相談ボタン */}
          <Link href="/contact">
            <button className="group px-8 py-4 bg-gradient-to-r from-will-primary to-will-secondary text-white rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center gap-3">
                <FileText className="w-5 h-5" />
                <span>無料相談</span>
              </div>
            </button>
          </Link>
        </motion.div>

        {/* 補足メッセージ（控えめに） */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-sm text-gray-500"
        >
          あなたのペースで、あなたの道を
        </motion.p>
      </div>
    </section>
  )
}