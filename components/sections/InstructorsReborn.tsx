'use client';

import React, { useState } from 'react';

export const Instructors: React.FC = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<number | null>(null);

  const instructors = [
    {
      id: 1,
      name: '山田 太郎',
      role: 'リードメンター',
      specialty: 'AI戦略・ビジョン設計',
      bio: '大手テック企業でAI事業を立ち上げ、独立。「技術は人を幸せにするためにある」が信条。',
      experience: '15年',
      avatar: '👨‍💼',
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      id: 2,
      name: '鈴木 花子',
      role: 'テクニカルメンター',
      specialty: 'プロンプトエンジニアリング',
      bio: 'エンジニアからAIスペシャリストへ。「誰もがAIと創造できる世界」を目指す。',
      experience: '10年',
      avatar: '👩‍💻',
      gradient: 'from-pink-400 to-blue-400',
    },
    {
      id: 3,
      name: '佐藤 次郎',
      role: 'キャリアメンター',
      specialty: 'ライフデザイン・Will探索',
      bio: 'キャリアコンサルタント。1000人以上の「本当にやりたいこと」を引き出してきた。',
      experience: '12年',
      avatar: '🧑‍🏫',
      gradient: 'from-blue-400 to-purple-400',
    },
  ];

  return (
    <section id="instructors" className="relative py-32 bg-gray-900">
      {/* 背景パターン */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-64 h-64 rounded-full border border-purple-500/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `scale(${0.5 + Math.random() * 1.5})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* セクションタイトル */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            <span className="block text-gray-500 text-xl mb-4 tracking-widest">INSTRUCTORS</span>
            共に歩む
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 ml-2">
              メンターたち
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            各分野のプロフェッショナルが、あなたの変革を全力でサポート
          </p>
        </div>

        {/* インストラクターカード */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedInstructor(
                selectedInstructor === instructor.id ? null : instructor.id
              )}
            >
              {/* カードの背景 */}
              <div className="absolute inset-0 transform transition-all duration-500 group-hover:scale-105">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 300 400"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`instructorGradient${instructor.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a1a2e" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0f0f23" stopOpacity="0.95" />
                    </linearGradient>
                  </defs>
                  <path
                    d={selectedInstructor === instructor.id
                      ? "M20,30 Q40,5 80,10 T150,8 T220,10 Q280,15 280,50 L280,350 Q260,390 220,385 T150,387 T80,385 Q20,390 20,350 Z"
                      : "M40,50 Q50,50 80,50 T150,50 T220,50 Q260,50 260,50 L260,350 Q250,350 220,350 T150,350 T80,350 Q50,350 40,350 Z"
                    }
                    fill={`url(#instructorGradient${instructor.id})`}
                    className="transition-all duration-500"
                    stroke="url(#borderGradient)"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <defs>
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* コンテンツ */}
              <div className="relative z-10 p-8">
                {/* アバター */}
                <div className="text-6xl mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  {instructor.avatar}
                </div>

                {/* 名前と役割 */}
                <h3 className={`text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${instructor.gradient}`}>
                  {instructor.name}
                </h3>
                <p className="text-purple-300 text-sm mb-4">{instructor.role}</p>

                {/* 専門分野 */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-500/10 rounded-full text-purple-300 text-xs">
                    {instructor.specialty}
                  </span>
                </div>

                {/* 経験年数 */}
                <p className="text-gray-400 text-sm mb-4">
                  経験: {instructor.experience}
                </p>

                {/* バイオ（展開時のみ表示） */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  selectedInstructor === instructor.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-300 text-sm leading-relaxed pt-4 border-t border-gray-700/50">
                    {instructor.bio}
                  </p>
                </div>

                {/* ホバー効果 */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r ${instructor.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
              </div>

              {/* 選択インジケーター */}
              <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${instructor.gradient} transition-all duration-300 ${
                selectedInstructor === instructor.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>

        {/* サポート体制の説明 */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center space-y-4 p-8 bg-gradient-to-b from-gray-800/50 to-transparent rounded-3xl">
            <div className="flex items-center space-x-2">
              <span className="text-purple-400">💫</span>
              <span className="text-gray-300">1対1のメンタリング</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-pink-400">🤝</span>
              <span className="text-gray-300">週次グループセッション</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400">📱</span>
              <span className="text-gray-300">24時間Slackサポート</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};