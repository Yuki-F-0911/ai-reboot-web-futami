import React from 'react';
import { MorphingCard } from '@/components/ui/MorphingCard';

export const MissionReborn: React.FC = () => {
  const concepts = [
    {
      symbol: '🌱',
      title: 'Will の芽生え',
      description: '内なる意志が、AIという土壌で新たに芽吹く',
      gradient: 'from-green-400 to-emerald-400',
    },
    {
      symbol: '∞',
      title: '無限の可能性',
      description: '人とAIが織りなす、予測不能な創造の連鎖',
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      symbol: '◯',
      title: '共生の円環',
      description: '教える側と学ぶ側の境界が溶け合う場所',
      gradient: 'from-blue-400 to-cyan-400',
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-950 to-gray-900">
      {/* 背景のテクスチャ */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(147, 71, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255, 75, 139, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* セクションタイトル（詩的な表現） */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            <span className="block text-gray-400 text-2xl mb-4">なぜ、今、</span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                AIリブート
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            </span>
            <span className="block text-gray-400 text-2xl mt-4">なのか</span>
          </h2>
        </div>

        {/* 3つのコンセプト（非対称配置） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {concepts.map((concept, index) => (
            <MorphingCard
              key={index}
              className={`transform ${
                index === 1 ? 'md:translate-y-12' : ''
              }`}
              delay={index * 200}
            >
              {/* シンボル */}
              <div className={`text-6xl mb-6 text-transparent bg-clip-text bg-gradient-to-r ${concept.gradient}`}>
                {concept.symbol}
              </div>
              
              {/* タイトル */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {concept.title}
              </h3>
              
              {/* 説明 */}
              <p className="text-gray-400 leading-relaxed">
                {concept.description}
              </p>
            </MorphingCard>
          ))}
        </div>

        {/* 中央のメッセージ（インパクトのある配置） */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative text-center py-16 px-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
              私たちは、
              <span className="text-white font-normal">AIを恐れる</span>のではなく、
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-normal">
                AIと共に進化する
              </span>
              道を選んだ。
              <br />
              <br />
              それは、人間だけが持つ
              <span className="text-white font-normal">「Will」</span>
              こそが、
              <br />
              最も強力な
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-normal">
                創造の源泉
              </span>
              だと信じているから。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};