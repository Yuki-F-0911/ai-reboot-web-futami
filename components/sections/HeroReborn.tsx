'use client';

import React, { useState, useEffect } from 'react';
import { ParticleField } from '@/components/effects/ParticleField';

export const HeroReborn: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [textPhase, setTextPhase] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setTextPhase(1), 500);
    const timer2 = setTimeout(() => setTextPhase(2), 1500);
    const timer3 = setTimeout(() => setTextPhase(3), 2500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* 生きているパーティクル背景 */}
      {mounted && <ParticleField />}
      
      {/* メインコンテンツ */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* タイトルアニメーション */}
          <div className="mb-12 space-y-4">
            <h1 className="relative">
              <span
                className={`block text-5xl md:text-7xl font-light transition-all duration-1000 ${
                  textPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <span className="text-gray-400">あなたの</span>
                <span className="relative inline-block mx-3">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    Will
                  </span>
                  {/* Willの下に動く線 */}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-1000 ${
                      textPhase >= 2 ? 'w-full' : 'w-0'
                    }`}
                  />
                </span>
                <span className="text-gray-400">が</span>
              </span>
              
              <span
                className={`block text-6xl md:text-8xl font-bold mt-4 transition-all duration-1000 delay-300 ${
                  textPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <span className="relative inline-block">
                  <span className="text-white">再起動</span>
                  {/* 再起動の文字が震える効果 */}
                  <span 
                    className={`absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ${
                      textPhase >= 3 ? 'animate-glitch' : ''
                    }`}
                  >
                    再起動
                  </span>
                </span>
                <span className="text-gray-400 text-5xl md:text-7xl">する</span>
              </span>
            </h1>
          </div>

          {/* サブメッセージ */}
          <div
            className={`mb-16 transition-all duration-1000 delay-1000 ${
              textPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              AIという新たな知性と共に歩む時代。
              <br />
              <span className="text-purple-300">100日間</span>で、あなたは変わる。
            </p>
          </div>

          {/* CTAボタン（有機的な形状） */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1500 ${
              textPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="group relative px-8 py-4 overflow-hidden">
              <span className="relative z-10 text-lg font-semibold text-white">
                無料相談を始める
              </span>
              {/* 有機的な背景 */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform scale-x-110 group-hover:scale-x-125 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-700" />
            </button>

            <button className="group relative px-8 py-4">
              <span className="relative z-10 text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                もっと知る
              </span>
              {/* 有機的なボーダー */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
              >
                <path
                  d="M10,30 Q30,10 50,20 T90,25 T130,20 T170,25 Q190,30 190,30 Q190,40 170,35 T130,40 T90,35 T50,40 Q30,50 10,30"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>

          {/* 補助金情報（控えめに） */}
          <div
            className={`mt-12 transition-all duration-1000 delay-2000 ${
              textPhase >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-sm text-gray-500">
              経済産業省リスキリング補助金
              <span className="text-purple-400 ml-2">最大70%補助</span>
            </p>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター（有機的な動き） */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="relative w-6 h-10">
          <div className="absolute inset-0 border-2 border-gray-600 rounded-full" />
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full animate-scroll-organic" />
        </div>
      </div>

      <style jsx>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(1px, -1px); }
          60% { transform: translate(-1px, 0); }
          80% { transform: translate(1px, 0); }
        }
        
        .animate-glitch {
          animation: glitch 0.3s ease-in-out infinite;
        }
        
        @keyframes scroll-organic {
          0% { 
            transform: translateX(-50%) translateY(0) scale(1, 1);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(-50%) translateY(20px) scale(0.8, 1.2);
            opacity: 0;
          }
        }
        
        .animate-scroll-organic {
          animation: scroll-organic 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};