'use client';

import React, { useState } from 'react';
import { FluidButton } from '@/components/ui/FluidButton';

export const ServicesReborn: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      type: '個人',
      title: 'AIリブートアカデミー',
      duration: '100日間',
      description: 'あなたのWillを見つけ、AIと共に実現する旅',
      features: [
        '自己との対話から始まる変革',
        '専属メンターとの深い探求',
        '実践を通じた確かな成長',
        '仲間と共に歩む100日',
      ],
      color: 'purple',
      subsidy: true,
    },
    {
      id: 2,
      type: '法人',
      title: 'AI活用コンサルティング',
      duration: '10時間〜',
      description: '組織のDNAにAIを融合させる変革',
      features: [
        'チームの潜在力を解放',
        '業界特化の実践的活用',
        '共創による組織進化',
        'OJT伴走で確実な定着',
      ],
      color: 'blue',
      subsidy: false,
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-950">
      {/* 背景の有機的なパターン */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='1' fill='white'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            <span className="block text-gray-400 text-2xl mb-4">選べる2つの</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              変革の道
            </span>
          </h2>
        </div>

        {/* サービスカード（非対称配置） */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative transform transition-all duration-500 ${
                index === 0 ? 'md:-translate-y-8' : 'md:translate-y-8'
              } ${hoveredCard === service.id ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* カードの背景（有機的な形状） */}
              <div className="absolute inset-0">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 500"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`cardGradient${service.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={service.color === 'purple' ? '#1a0f1f' : '#0f1a1f'} />
                      <stop offset="100%" stopColor={service.color === 'purple' ? '#2d1b3d' : '#1b2d3d'} />
                    </linearGradient>
                  </defs>
                  <path
                    d={hoveredCard === service.id
                      ? "M30,50 Q50,20 100,30 T200,25 T300,30 Q370,40 370,80 L370,420 Q350,470 280,480 Q200,490 120,480 Q50,470 30,420 Z"
                      : "M50,50 Q70,50 100,50 T200,50 T300,50 Q350,50 350,100 L350,400 Q350,450 300,450 Q200,450 100,450 Q50,450 50,400 Z"
                    }
                    fill={`url(#cardGradient${service.id})`}
                    className="transition-all duration-700 ease-out"
                    stroke={service.color === 'purple' ? '#a855f7' : '#3b82f6'}
                    strokeWidth="1"
                    strokeOpacity="0.3"
                  />
                </svg>
              </div>

              {/* カードコンテンツ */}
              <div className="relative z-10 p-10">
                {/* タイプバッジ */}
                <div className="inline-flex items-center mb-6">
                  <span className={`text-sm font-light tracking-widest ${
                    service.color === 'purple' ? 'text-purple-300' : 'text-blue-300'
                  }`}>
                    {service.type}向け
                  </span>
                </div>

                {/* タイトル */}
                <h3 className="text-3xl font-bold text-white mb-2">
                  {service.title}
                </h3>

                {/* 期間 */}
                <p className={`text-4xl font-light mb-6 ${
                  service.color === 'purple' ? 'text-purple-400' : 'text-blue-400'
                }`}>
                  {service.duration}
                </p>

                {/* 説明 */}
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* 特徴リスト */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-3 text-xl ${
                        service.color === 'purple' ? 'text-purple-400' : 'text-blue-400'
                      }`}>
                        •
                      </span>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* 補助金情報 */}
                {service.subsidy && (
                  <div className="mb-8">
                    <div className="inline-flex items-center space-x-2 bg-purple-500/10 rounded-full px-4 py-2">
                      <span className="text-purple-300 text-sm">
                        経済産業省補助金
                      </span>
                      <span className="text-purple-400 font-bold">
                        最大70%
                      </span>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <FluidButton 
                  variant={service.color === 'purple' ? 'primary' : 'secondary'}
                  href="#contact"
                >
                  詳しく見る
                </FluidButton>
              </div>

              {/* ホバー時の光の効果 */}
              {hoveredCard === service.id && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute top-1/4 left-1/4 w-32 h-32 ${
                    service.color === 'purple' ? 'bg-purple-500' : 'bg-blue-500'
                  } rounded-full blur-3xl opacity-20 animate-pulse`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};