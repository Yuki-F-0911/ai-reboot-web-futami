'use client';

import React, { useState } from 'react';

export const Features: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: 'Will の発見',
      subtitle: '内なる衝動との出会い',
      description: '押し殺してきた本当の想い、諦めかけていた夢。AIとの対話を通じて、あなたの中に眠る可能性を呼び覚まします。',
      icon: '✨',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: '実践的な学び',
      subtitle: '手を動かす100日間',
      description: '理論だけでは変われない。実際のプロジェクトを通じて、AIを味方につける本物のスキルを身につけます。',
      icon: '🚀',
      gradient: 'from-pink-500 to-blue-500',
    },
    {
      id: 3,
      title: '仲間との共創',
      subtitle: '孤独じゃない挑戦',
      description: '同じ志を持つ仲間、伴走するメンター。支え合い、刺激し合いながら、共に新しい未来を創造します。',
      icon: '🤝',
      gradient: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <section id="features" className="relative py-32 bg-gray-950 overflow-hidden">
      {/* 背景のグラデーションメッシュ */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            <span className="block text-gray-500 text-xl mb-4 tracking-widest">WHY AI REBOOT?</span>
            選ばれる
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 ml-2">
              3つの理由
            </span>
          </h2>
        </div>

        {/* フィーチャーカード */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative transform transition-all duration-700 ${
                index === 1 ? 'md:-translate-y-6' : ''
              }`}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* カードの背景 */}
              <div className="absolute inset-0">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 300 400"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`featureGradient${feature.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a1a2e" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0f0f23" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  <path
                    d={hoveredFeature === feature.id
                      ? "M20,40 Q30,10 60,15 T120,20 T180,15 Q270,10 280,40 L280,350 Q270,380 240,385 T180,390 T120,385 Q30,380 20,350 Z"
                      : "M30,50 Q40,50 60,50 T120,50 T180,50 Q260,50 270,50 L270,350 Q260,350 240,350 T180,350 T120,350 Q40,350 30,350 Z"
                    }
                    fill="url(#featureGradient${feature.id})"
                    className="transition-all duration-700 ease-out"
                    stroke={`url(#${feature.gradient.replace(' ', '-')})`}
                    strokeWidth="0.5"
                    strokeOpacity="0.5"
                  />
                </svg>
              </div>

              {/* コンテンツ */}
              <div className="relative z-10 p-8">
                {/* アイコン */}
                <div className={`text-5xl mb-6 transform transition-transform duration-500 ${
                  hoveredFeature === feature.id ? 'scale-110 rotate-6' : ''
                }`}>
                  {feature.icon}
                </div>

                {/* タイトル */}
                <h3 className={`text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                  {feature.title}
                </h3>

                {/* サブタイトル */}
                <p className="text-gray-400 text-sm mb-4">
                  {feature.subtitle}
                </p>

                {/* 説明 */}
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* ホバー時の装飾 */}
                {hoveredFeature === feature.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute top-8 right-8 w-24 h-24 bg-gradient-to-r ${feature.gradient} rounded-full blur-2xl opacity-20 animate-pulse`} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 装飾的な要素 */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2">
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <span className="text-purple-400 text-sm tracking-widest">TRANSFORM YOUR FUTURE</span>
            <span className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};