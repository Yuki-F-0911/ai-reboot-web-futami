import React from 'react';
import Image from 'next/image';
import { Card, GradientText } from '@/components/ui';

export const Instructors: React.FC = () => {
  const instructors = [
    {
      name: '成瀬 拓也',
      title: 'ウィルフォワード代表',
      role: 'AI事業プロデューサー',
      expertise: '採用・ブランディング・事業開発',
      description: '幅広い業界での支援実績を持ち、AIを活用した事業変革をリード',
      image: '/images/naruse.jpg',
    },
    {
      name: '坂本 拓磨',
      title: '生成AI活用ディレクター',
      qualification: '生成AI活用アドバイザー資格保有',
      expertise: 'Web/動画/デザイン分野でのAI活用',
      description: 'クリエイティブ領域でのAI実装に精通し、実践的な活用方法を指導',
      image: '/images/sakamoto.jpg',
    },
    {
      name: '青木 亮人',
      title: 'AI業務改善コンサルタント',
      qualification: '生成AI活用アドバイザー資格保有',
      expertise: '採用・教育・業務プロセス設計',
      description: '組織変革の観点からAI導入を支援し、業務効率化を実現',
      image: '/images/aoki.jpg',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-section">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold mb-4">
            <GradientText>講師陣</GradientText>
          </h2>
          <p className="text-xl text-ai-medium-gray max-w-3xl mx-auto">
            実際にAIを業務活用している現役のコンサルタントが
            <br />
            あなたの成長を直接サポートします
          </p>
        </div>

        {/* 講師カード */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card key={index} className="text-center">
              {/* プロフィール画像 */}
              <div className="w-32 h-32 mx-auto mb-6 relative overflow-hidden rounded-full">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
              <p className="text-ai-purple font-semibold mb-2">{instructor.title}</p>
              
              {instructor.role && (
                <p className="text-sm text-ai-medium-gray mb-2">{instructor.role}</p>
              )}
              

              <div className="mb-4">
                <p className="text-sm text-ai-dark-gray font-semibold mb-1">専門分野</p>
                <p className="text-sm text-ai-medium-gray">{instructor.expertise}</p>
              </div>

              <p className="text-sm text-ai-dark-gray leading-relaxed">
                {instructor.description}
              </p>
            </Card>
          ))}
        </div>

        {/* 追加メッセージ */}
        <div className="mt-16 text-center">
          <p className="text-lg text-ai-medium-gray">
            その他、各分野のAIスペシャリストや
            <br />
            キャリアコンサルタントがあなたの学びをサポートします
          </p>
        </div>
      </div>
    </section>
  );
};