'use client';

import React, { useState } from 'react';
import { FluidButton } from '@/components/ui/FluidButton';

export const Subsidy: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const benefits = [
    {
      icon: '💰',
      title: '最大70%補助',
      description: '受講料の最大70%が国から支援されます',
    },
    {
      icon: '🎯',
      title: '対象者幅広く',
      description: '正社員・契約社員・パート・アルバイトも対象',
    },
    {
      icon: '📋',
      title: 'シンプルな手続き',
      description: '申請サポートで安心してスタート',
    },
  ];

  const conditions = [
    '在職者（正社員・契約社員・パート・アルバイト）',
    '雇用保険の被保険者',
    'リスキリングに意欲がある方',
    '所属企業の承認が得られる方',
  ];

  return (
    <section id="subsidy" className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* 背景の動的なグラデーション */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-purple-500/10 rounded-full">
            <span className="text-purple-400">🏛️</span>
            <span className="text-purple-300 text-sm font-medium">経済産業省リスキリング支援事業</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            国の支援で
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 ml-2">
              新しい一歩を
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            あなたの学びを、社会全体で応援する仕組みがあります
          </p>
        </div>

        {/* メインカード */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* カードの有機的な背景 */}
            <div className="absolute inset-0">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 500"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="subsidyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2d1b3d" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#1a0f1f" stopOpacity="0.95" />
                  </linearGradient>
                </defs>
                <path
                  d="M50,80 Q150,30 300,40 T600,35 Q750,40 750,100 L750,400 Q700,460 550,450 T200,455 Q50,460 50,400 Z"
                  fill="url(#subsidyGradient)"
                  stroke="url(#subsidyBorder)"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
                <defs>
                  <linearGradient id="subsidyBorder" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* コンテンツ */}
            <div className="relative z-10 p-12">
              {/* 補助金額の強調表示 */}
              <div className="text-center mb-12">
                <div className="inline-block">
                  <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mb-2">
                    最大70%
                  </div>
                  <div className="text-gray-300 text-lg">受講料を国が補助</div>
                </div>
              </div>

              {/* ベネフィット */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center group"
                  >
                    <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* 対象条件 */}
              <div className={`transition-all duration-700 overflow-hidden ${
                isExpanded ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="border-t border-purple-500/20 pt-8">
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">
                    補助金の対象となる方
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {conditions.map((condition, index) => (
                      <div
                        key={index}
                        className="flex items-start"
                      >
                        <span className="text-purple-400 mr-3 text-xl">✓</span>
                        <span className="text-gray-300">{condition}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-gray-400 text-sm mt-8">
                    ※詳細な条件は無料相談でご確認ください
                  </p>
                </div>
              </div>

              {/* 詳細ボタン */}
              <div className="text-center mt-8">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center text-purple-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <span>{isExpanded ? '閉じる' : '詳細を見る'}</span>
                  <span className={`ml-2 transform transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            補助金の申請方法や条件について、詳しくご説明します
          </p>
          <FluidButton size="lg" href="#contact">
            無料相談で詳しく聞く
          </FluidButton>
        </div>

        {/* 装飾的な要素 */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
    </section>
  );
};