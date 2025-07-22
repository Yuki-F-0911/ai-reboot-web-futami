'use client';

import React from 'react';
import { Card, Button, GradientText } from '@/components/ui';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-ai-light-gray">
      <div className="container-section">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold mb-4">
            2つの<GradientText>AIリブート</GradientText>サービス
          </h2>
          <p className="text-xl text-ai-medium-gray">
            個人と企業、それぞれのニーズに応える実践的プログラム
          </p>
        </div>

        {/* サービスカード */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 個人向け */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-ai-gradient text-white text-sm font-semibold px-4 py-2 rounded-bl-xl">
              個人向け
            </div>
            
            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4">
                AIリブートアカデミー
              </h3>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-ai-purple mb-2">
                  100日間
                </p>
                <p className="text-ai-medium-gray">
                  実践的なAI活用プログラム
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-ai-pink mr-2">✓</span>
                  <span>自己のWillを発見するキャリア設計</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-pink mr-2">✓</span>
                  <span>専属メンターによる伴走支援</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-pink mr-2">✓</span>
                  <span>実務で使える成果物の作成</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-pink mr-2">✓</span>
                  <span>最終プレゼンでの成果発表</span>
                </li>
              </ul>

              <div className="bg-ai-light-pink rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-ai-purple mb-1">
                  経済産業省リスキリング補助金対象
                </p>
                <p className="text-2xl font-bold text-ai-pink">
                  最大70%補助
                </p>
              </div>

              <Button fullWidth href="#contact">
                詳細を見る
              </Button>
            </div>
          </Card>

          {/* 法人向け */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-ai-gradient text-white text-sm font-semibold px-4 py-2 rounded-bl-xl">
              法人向け
            </div>
            
            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4">
                AI活用コンサルティング
              </h3>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-ai-purple mb-2">
                  10時間〜
                </p>
                <p className="text-ai-medium-gray">
                  カスタマイズ型研修プログラム
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-ai-blue mr-2">✓</span>
                  <span>社内AI人材の育成</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-blue mr-2">✓</span>
                  <span>チーム共通環境の構築</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-blue mr-2">✓</span>
                  <span>業界特化型の実践演習</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-blue mr-2">✓</span>
                  <span>OJT伴走支援オプション</span>
                </li>
              </ul>

              <div className="bg-ai-light-blue rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-ai-dark-gray mb-1">
                  対応業界
                </p>
                <p className="text-sm">
                  伝統文化・介護・医療・農業・食・製造業など
                </p>
              </div>

              <Button variant="secondary" fullWidth href="#contact">
                お問い合わせ
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};