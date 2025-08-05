'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Guide {
  name: string
  role: string
  passion: string
  image?: string
}

interface Pioneer {
  type: 'individual' | 'corporate'
  title: string
  before: string
  after: string
  story: string
}

export default function TheVanguard() {
  const [selectedPioneer, setSelectedPioneer] = useState<Pioneer | null>(null)

  const guides: Guide[] = [
    {
      name: '山田 太郎',
      role: 'AIストラテジスト',
      passion: 'AIは人間を置き換えるものではなく、人間の可能性を無限に広げる鏡だと信じています。'
    },
    {
      name: '佐藤 花子',
      role: 'Willコーチ',
      passion: '誰もが心の奥底に「本当の自分」を持っています。その声を聞く勇気を、共に育てたい。'
    },
    {
      name: '鈴木 一郎',
      role: 'トランスフォーメーション・ガイド',
      passion: '変革とは、新しい何かになることではなく、本来の自分に還ることだと実感しています。'
    }
  ]

  const pioneers: Pioneer[] = [
    {
      type: 'individual',
      title: 'ある営業職の覚醒',
      before: '「数字を追うだけの日々に、意味を見出せなくなっていた」',
      after: '「今は、AIを活用して顧客の真の課題を解決するコンサルタントとして活躍」',
      story: '売上目標に追われる毎日。でも心の中では「これが本当にやりたいことなのか」という問いが消えなかった。AIリブートで自分のWillと向き合い、「人の成長を支援したい」という本当の想いに気づく。今では、AIツールを駆使して顧客の潜在ニーズを可視化し、真の価値を提供している。'
    },
    {
      type: 'corporate',
      title: 'ある製造業の進化',
      before: '「効率化の名の下に、社員は疲弊し、イノベーションは停滞していた」',
      after: '「AIと人間の共創により、クリエイティビティが爆発的に向上」',
      story: '創業50年の製造業。DXの必要性は理解していたが、現場の抵抗は強かった。AIリブートで「なぜ我々は存在するのか」という原点に立ち返り、「世界に新しい価値を生み出す」という使命を再定義。AIを「効率化の道具」ではなく「創造性の触媒」として導入し、社員一人ひとりがイノベーターへと変貌を遂げた。'
    }
  ]

  return (
    <section className="relative min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッドライン */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-20"
        >
          変革の先駆者たちと、その伴走者。
        </motion.h2>

        {/* ガイド紹介 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-2xl font-light text-center mb-12 text-gray-400">
            伴走者たち
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* プロフィール画像プレースホルダー */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-4xl text-gray-600">
                    {guide.name.charAt(0)}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium mb-1">{guide.name}</h4>
                <p className="text-sm text-gray-500 mb-4">{guide.role}</p>
                <p className="text-sm text-gray-400 italic leading-relaxed">
                  &ldquo;{guide.passion}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 先駆者の物語 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light text-center mb-12 text-gray-400">
            先駆者たちの物語
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pioneers.map((pioneer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedPioneer(pioneer)}
              >
                <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
                  <h4 className="text-xl font-medium mb-4">{pioneer.title}</h4>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Before:</span>
                      <p className="text-gray-400 italic">{pioneer.before}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">After:</span>
                      <p className="text-gray-300 italic">{pioneer.after}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
                    クリックして詳細を読む →
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 詳細モーダル */}
        <AnimatePresence>
          {selectedPioneer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedPioneer(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-medium mb-6">{selectedPioneer.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{selectedPioneer.story}</p>
                <button
                  onClick={() => setSelectedPioneer(null)}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  [ 閉じる ]
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}