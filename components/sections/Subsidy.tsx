import React from 'react';
import { GradientText, Button } from '@/components/ui';

export const Subsidy: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ai-light-pink via-white to-ai-light-purple">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          {/* 経済産業省ロゴプレースホルダー */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md">
              <span className="text-sm font-semibold text-ai-dark-gray">
                経済産業省
              </span>
              <span className="text-sm text-ai-medium-gray">
                リスキリングを通じたキャリアアップ支援事業
              </span>
            </div>
          </div>

          {/* メインコンテンツ */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-h1 font-bold text-center mb-8">
              受講料の<GradientText>最大70%</GradientText>が補助されます
            </h2>

            {/* 料金情報 */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <p className="text-sm text-ai-medium-gray mb-2">通常受講料</p>
                <p className="text-3xl font-bold text-ai-dark-gray line-through">
                  300,000円
                </p>
                <p className="text-sm text-ai-medium-gray">（税別）</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-ai-purple font-semibold mb-2">
                  補助適用後（最大）
                </p>
                <p className="text-4xl font-bold text-ai-pink">
                  90,000円〜
                </p>
                <p className="text-sm text-ai-medium-gray">（税別）</p>
              </div>
            </div>

            {/* 補助金の特徴 */}
            <div className="bg-ai-light-gray rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">補助金の対象</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-ai-purple mr-2">✓</span>
                  <span>在職者・転職希望者どちらも申請可能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-purple mr-2">✓</span>
                  <span>最大補助額：56万円（受講料の70%まで）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-purple mr-2">✓</span>
                  <span>申請サポートも無料で提供</span>
                </li>
              </ul>
            </div>

            {/* 注意事項 */}
            <p className="text-sm text-ai-medium-gray text-center mb-8">
              ※補助金の適用には一定の条件があります。詳細は無料相談でご説明します。
            </p>

            {/* CTA */}
            <div className="text-center">
              <Button size="lg" href="#contact">
                補助金について相談する
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};