"use client";

import { motion } from "framer-motion";

const voices = [
  "AIの使い方ではなく本質的なことをお聞きできて貴重な時間でした。会社でのサービス品質においても再現性をどう維持するかということにも悩んでいたのでAIを活用していきます。",
  "哲学的な話も興味深かったし、プロンプトの設定の巧拙は過去のものであることなど、アップデートできました。",
  "AIを使いこなす能力を高めるにはどうするかと課題が強かったが、クリエイティビティの重要性について改めて大切さを感じました。",
  "AIはまだ全然活用できていないですが、これからの業務にどう活かすか、AIと共に何を成し遂げたいのかを日々考える重要性を感じました。まずは課金して自分で使っていこうと思います。",
  "AIがあたりまえの時代に対する人間としての生き方を考えるきっかけになりました。",
  "全編に渡って心に響き、突き刺さる言葉がたくさんありました。",
  "これまではまずはAIのことを学ぼう、のようなイメージがありました。しかし今回のセミナーを通して今後はより一層何か目的とする成果物に対してAIをとにかく活用してみようと思いました。",
  "AIに対しての人側の意識など整理のヒントになった。",
  "AIの進化のスケールの大きさに驚きました。まさに光の速さのようでした。",
];

const VoicesSection = () => {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-orange-500 font-bold text-base tracking-wider mb-3 sm:mb-4">
            VOICES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-3 sm:mb-4">
            過去セミナー参加者の声
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            過去のセミナーに参加された方からいただいた感想をご紹介します
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 gap-4 sm:gap-6">
          {voices.map((voice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid mb-4 sm:mb-6"
            >
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-shadow duration-300">
                <svg
                  className="w-6 h-6 text-orange-300 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M11.3 2.6C6 2.6 1.8 6 1.8 10.3c0 2 .9 3.8 2.5 5.2-.2.7-.5 1.6-1.2 2.8-.1.2 0 .4.2.5h.2c1.6-.4 3-1 4.2-1.7 1.1.3 2.3.5 3.6.5 5.3 0 9.5-3.4 9.5-7.7s-4.2-7.3-9.5-7.3z" />
                </svg>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {voice}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;
