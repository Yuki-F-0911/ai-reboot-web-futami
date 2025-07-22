'use client';

import React, { useState } from 'react';
import { GradientText } from '@/components/ui';

export const Curriculum: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'corporate'>('personal');

  const personalCurriculum = [
    {
      phase: 'PHASE 1',
      title: 'Willの発見',
      duration: '〜30日目',
      content: [
        'キャリアや働き方の原点を見つめ直すワーク',
        '自己分析とWillの言語化',
        'AI時代のキャリア設計',
      ],
    },
    {
      phase: 'PHASE 2',
      title: 'AIリテラシーの基礎',
      duration: '〜50日目',
      content: [
        '生成AIの可能性とリスクを学習',
        'ChatGPT、Claude等の基本操作',
        'プロンプトエンジニアリングの基礎',
      ],
    },
    {
      phase: 'PHASE 3',
      title: '業務・生活での活用実践',
      duration: '〜80日目',
      content: [
        '文章生成、企画書作成の実践',
        'SNS活用、時間管理への応用',
        '個人プロジェクトの推進',
      ],
    },
    {
      phase: 'PHASE 4',
      title: '定着と習慣化',
      duration: '〜100日目',
      content: [
        'メンターとの週次セッション',
        '習慣記録とフィードバック',
        '最終プレゼンテーション準備',
      ],
    },
  ];

  const corporateCurriculum = [
    {
      day: 'DAY 1',
      title: 'AI活用の個人作業環境構築',
      content: [
        'ChatGPT等の生成AIツール導入',
        'ウェブサイト制作の実践',
        'マーケティングコンテンツ自動生成',
        '画像・動画・音楽生成ツールの活用',
      ],
    },
    {
      day: 'DAY 2',
      title: 'チームでの共通環境構築',
      content: [
        '共有リポジトリの構築',
        'ナレッジベースの整備',
        'プロジェクトベースでのAI活用',
        'チーム協働ワークフローの設計',
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-20 bg-ai-light-gray">
      <div className="container-section">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold mb-4">
            <GradientText>カリキュラム</GradientText>
          </h2>
          <p className="text-xl text-ai-medium-gray">
            実践的なステップで確実に成果を出す
          </p>
        </div>

        {/* タブ切り替え */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white shadow-sm">
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-8 py-3 rounded-l-lg font-semibold transition-all ${
                activeTab === 'personal'
                  ? 'bg-ai-gradient text-white'
                  : 'text-ai-medium-gray hover:text-ai-dark-gray'
              }`}
            >
              個人向け（100日間）
            </button>
            <button
              onClick={() => setActiveTab('corporate')}
              className={`px-8 py-3 rounded-r-lg font-semibold transition-all ${
                activeTab === 'corporate'
                  ? 'bg-ai-gradient text-white'
                  : 'text-ai-medium-gray hover:text-ai-dark-gray'
              }`}
            >
              法人向け（10時間〜）
            </button>
          </div>
        </div>

        {/* カリキュラム内容 */}
        {activeTab === 'personal' ? (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {personalCurriculum.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-ai-purple font-bold">{item.phase}</span>
                  <span className="text-sm text-ai-medium-gray">{item.duration}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.content.map((content, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-ai-pink mr-2">•</span>
                      <span className="text-ai-dark-gray">{content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {corporateCurriculum.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-ai-blue font-bold text-xl">{item.day}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.content.map((content, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-ai-blue mr-2">•</span>
                      <span className="text-ai-dark-gray">{content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="md:col-span-2 bg-gradient-to-r from-ai-light-purple to-ai-light-blue rounded-xl p-6">
              <p className="text-center">
                <span className="font-semibold">カスタマイズ可能：</span>
                業界特性や企業のニーズに応じて、プログラム内容をカスタマイズいたします。
                OJT伴走支援も追加可能です。
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};