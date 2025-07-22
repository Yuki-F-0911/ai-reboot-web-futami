'use client';

import React from 'react';
import { Button } from '@/components/ui';
import { GradientText } from '@/components/ui';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-white to-pink-100">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-ai-purple/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ai-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative z-10 text-center py-20">
        {/* メインタイトル */}
        <h1 className="text-hero font-bold mb-6 leading-tight">
          AIで<GradientText as="span">「働き方」</GradientText>と
          <br />
          <GradientText as="span">「自分」</GradientText>を再起動する
        </h1>

        {/* サブタイトル */}
        <p className="text-xl md:text-2xl text-ai-medium-gray mb-8 max-w-3xl mx-auto">
          AIと共存する未来で、あなたのWillを実現する
          <br />
          100日間の実践的プログラム
        </p>

        {/* 補助金情報 */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-md">
          <span className="text-sm font-semibold text-ai-purple">
            経済産業省リスキリング補助金
          </span>
          <span className="text-sm font-bold text-ai-pink">
            最大70%補助
          </span>
        </div>

        {/* CTA ボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" href="#contact">
            無料相談を申し込む
          </Button>
          <Button variant="secondary" size="lg" href="#services">
            サービス詳細を見る
          </Button>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-ai-medium-gray"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};