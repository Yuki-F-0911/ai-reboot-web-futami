import React from 'react';
import { GradientText } from '@/components/ui';

export const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container-section">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold mb-4">
            <GradientText>AIリブート</GradientText>とは
          </h2>
          <p className="text-xl text-ai-medium-gray max-w-3xl mx-auto">
            AIが当たり前になる時代に、人間本来の価値を再定義し、
            <br />
            ウェルビーイングな未来を創造する
          </p>
        </div>

        {/* ミッションカード */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-ai-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Willの発見</h3>
            <p className="text-ai-medium-gray">
              自分の意志と未来を見つめ直し、
              AIと共に実現する道を探る
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-ai-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">実践的な学び</h3>
            <p className="text-ai-medium-gray">
              単なるツールの使い方ではなく、
              業務で成果を出す力を身につける
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-ai-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🌟</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">共創する未来</h3>
            <p className="text-ai-medium-gray">
              個人と組織が共に成長し、
              社会全体の幸福を増やす
            </p>
          </div>
        </div>

        {/* ビジョンテキスト */}
        <div className="bg-gradient-to-r from-ai-light-purple to-ai-light-pink rounded-2xl p-8 md:p-12">
          <p className="text-lg leading-relaxed text-center">
            私たちは、AIの進化を恐れるのではなく、
            <br className="hidden md:block" />
            人間だからこそできる価値創造に目を向けます。
            <br />
            <br />
            一人ひとりの「Will（意志）」を大切にし、
            <br className="hidden md:block" />
            AIを最大限に活用することで、
            <br className="hidden md:block" />
            誰もが自分らしく輝ける社会を実現します。
          </p>
        </div>
      </div>
    </section>
  );
};