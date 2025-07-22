import React from 'react';
import { GradientText } from '@/components/ui';

export const Features: React.FC = () => {
  const features = [
    {
      icon: '🎯',
      title: '実践型アプローチ',
      description: 'ツールの使い方だけでなく、実際の業務で成果を出すまで徹底支援',
    },
    {
      icon: '💡',
      title: 'Will（意志）重視',
      description: '技術習得だけでなく、生き方・働き方の再設計を含む包括的プログラム',
    },
    {
      icon: '👥',
      title: '伴走型支援',
      description: '専属メンターやキャリアコンサルタントによる継続的なサポート',
    },
    {
      icon: '🏢',
      title: 'チーム活用視点',
      description: '個人スキルからチーム・組織での活用まで一気通貫で支援',
    },
    {
      icon: '🔄',
      title: '応用力重視',
      description: '特定ツールではなく、あらゆるAIツールに応用可能な力を育成',
    },
    {
      icon: '🎓',
      title: '現役実践者が指導',
      description: '実際にAIを業務活用している現役コンサルタントが直接指導',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold mb-4">
            AIリブートが選ばれる<GradientText>6つの理由</GradientText>
          </h2>
          <p className="text-xl text-ai-medium-gray max-w-3xl mx-auto">
            他のAI研修とは一線を画す、本質的な変革を実現するプログラム
          </p>
        </div>

        {/* 特徴グリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-transform duration-base"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-ai-purple transition-colors">
                  {feature.title}
                </h3>
                <p className="text-ai-medium-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 差別化ポイント */}
        <div className="mt-16 bg-gradient-to-r from-ai-light-purple to-ai-light-pink rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-6">
            単なる「AIツールの使い方講座」ではありません
          </h3>
          <p className="text-lg text-center leading-relaxed">
            AIリブートは、あなたの人生とキャリアを根本から見直し、
            <br className="hidden md:block" />
            AI時代に本当に必要な力を身につける変革プログラムです。
            <br />
            <br />
            100日間の旅を通じて、あなた自身のWillを発見し、
            <br className="hidden md:block" />
            AIと共に新たな価値を創造する力を手に入れましょう。
          </p>
        </div>
      </div>
    </section>
  );
};