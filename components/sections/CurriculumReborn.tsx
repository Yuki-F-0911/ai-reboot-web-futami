'use client';

import React, { useState } from 'react';

export const Curriculum: React.FC = () => {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      id: 1,
      phase: 'Phase 1',
      title: '自己との対話',
      duration: '〜30日',
      description: 'AIを鏡として、本当の自分と向き合う',
      modules: [
        'Will探索ワークショップ',
        'AI対話術の基礎',
        'セルフリフレクション',
        'ビジョンマッピング',
      ],
      color: 'purple',
    },
    {
      id: 2,
      phase: 'Phase 2',
      title: 'スキルの覚醒',
      duration: '31〜70日',
      description: 'AIと共に、新しい創造の扉を開く',
      modules: [
        'プロンプトエンジニアリング',
        'AI活用実践プロジェクト',
        'クリエイティブ・コーディング',
        'プロトタイピング',
      ],
      color: 'pink',
    },
    {
      id: 3,
      phase: 'Phase 3',
      title: '未来の創造',
      duration: '71〜100日',
      description: '学びを形に、想いを現実に',
      modules: [
        '個人プロジェクト実装',
        'メンター伴走セッション',
        'ピッチ＆フィードバック',
        'ネクストステップ設計',
      ],
      color: 'blue',
    },
  ];

  return (
    <section id="curriculum" className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            <span className="block text-gray-500 text-xl mb-4 tracking-widest">CURRICULUM</span>
            100日間の
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 ml-2">
              変革の旅
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            段階的に深まる学びと実践。あなたのペースで、確実に前へ。
          </p>
        </div>

        {/* フェーズナビゲーション */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-900/50 rounded-full p-1 backdrop-blur-sm">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activePhase === phase.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {phase.phase}
              </button>
            ))}
          </div>
        </div>

        {/* アクティブフェーズの詳細 */}
        <div className="max-w-4xl mx-auto">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`transition-all duration-700 ${
                activePhase === phase.id
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8 absolute'
              }`}
              style={{ display: activePhase === phase.id ? 'block' : 'none' }}
            >
              {/* フェーズカード */}
              <div className="relative">
                {/* 背景の有機的な形状 */}
                <div className="absolute inset-0">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 800 400"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id={`phaseGradient${phase.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a2e" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0f0f23" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M50,50 Q100,20 200,30 T400,25 T600,30 Q750,40 750,80 L750,320 Q700,370 600,360 T400,365 T200,360 Q100,370 50,320 Z"
                      fill={`url(#phaseGradient${phase.id})`}
                      stroke={`${phase.color === 'purple' ? '#a855f7' : phase.color === 'pink' ? '#ec4899' : '#3b82f6'}`}
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      className="transition-all duration-1000"
                    />
                  </svg>
                </div>

                {/* コンテンツ */}
                <div className="relative z-10 p-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* 左側：フェーズ情報 */}
                    <div>
                      <div className="mb-6">
                        <span className={`text-sm font-light tracking-widest ${
                          phase.color === 'purple' ? 'text-purple-400' : 
                          phase.color === 'pink' ? 'text-pink-400' : 'text-blue-400'
                        }`}>
                          {phase.duration}
                        </span>
                      </div>
                      
                      <h3 className={`text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${
                        phase.color === 'purple' ? 'from-purple-400 to-purple-300' : 
                        phase.color === 'pink' ? 'from-pink-400 to-pink-300' : 'from-blue-400 to-blue-300'
                      }`}>
                        {phase.title}
                      </h3>
                      
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {phase.description}
                      </p>

                      {/* 装飾的な要素 */}
                      <div className="mt-8">
                        <div className={`w-24 h-1 bg-gradient-to-r ${
                          phase.color === 'purple' ? 'from-purple-500 to-purple-400' : 
                          phase.color === 'pink' ? 'from-pink-500 to-pink-400' : 'from-blue-500 to-blue-400'
                        }`} />
                      </div>
                    </div>

                    {/* 右側：モジュール一覧 */}
                    <div>
                      <h4 className="text-gray-400 text-sm tracking-widest mb-6">学習内容</h4>
                      <ul className="space-y-4">
                        {phase.modules.map((module, index) => (
                          <li
                            key={index}
                            className="flex items-start group"
                          >
                            <span className={`mr-4 text-2xl transform transition-transform duration-300 group-hover:rotate-12 ${
                              phase.color === 'purple' ? 'text-purple-400' : 
                              phase.color === 'pink' ? 'text-pink-400' : 'text-blue-400'
                            }`}>
                              ◈
                            </span>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                              {module}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ホバー時の光の効果 */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${
                    phase.color === 'purple' ? 'bg-purple-500' : 
                    phase.color === 'pink' ? 'bg-pink-500' : 'bg-blue-500'
                  } rounded-full blur-3xl opacity-10 animate-pulse`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 進行イメージ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-1000 rounded-full"
              style={{ width: `${(activePhase / 3) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-4">
            {phases.map((phase) => (
              <div
                key={phase.id}
                className={`text-xs transition-all duration-300 ${
                  activePhase >= phase.id ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Day {phase.id === 1 ? '1' : phase.id === 2 ? '31' : '71'}
              </div>
            ))}
            <div className="text-xs text-gray-300">Day 100</div>
          </div>
        </div>
      </div>
    </section>
  );
};