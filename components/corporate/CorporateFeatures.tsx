"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      number: "1",
      title: "パラダイムシフトから始める",
      subtitle: "単なるツール研修ではなく、思考のOSを書き換える",
      description: "AIという技術革命は、農業革命・産業革命・IT革命に匹敵する大変革です。表面的なツールの使い方だけでなく、AIがもたらすパラダイムシフトを理解することで、組織と個人の可能性を根本から拡張します。",
      themes: [
        "なぜ今、AI研修が必要なのか？",
        "AIが変える未来の働き方",
        "人間に残される価値とは？（Will：したい、の重要性）",
        "スコトーマ（心理的盲点）を外し、新しい視点を獲得する"
      ],
      color: "harmony"
    },
    {
      number: "2",
      title: "目的に応じて選べる2つのプログラム",
      subtitle: "個人のAI活用力向上 / チーム全体でのAI活用推進",
      description: "多くの企業が、研修を受けただけで終わり、現場で定着しないという課題に直面します。私たちは、企業の課題と状況に応じて選べる2つの実践型プログラムをご用意しています。",
      themes: [
        "ベーシック研修（2日間）: 個人のAI活用力を引き上げる",
        "アドバンス研修（2日間）: チーム全体でAI活用環境構築＋AIエージェント開発まで実装",
        "両方の受講を推奨: より確実に組織全体のAI活用を定着させたい企業様には、ベーシックとアドバンスの両方の受講をおすすめしています",
        "フォロー研修（オプション）: 現在のAI活用力や企業の目指すところに応じて、回数や形態を柔軟に設計する継続的な学習プログラム"
      ],
      color: "will-primary"
    },
    {
      number: "3",
      title: "実務の中で成果を出すOJT型支援",
      subtitle: "座学ではなく、現場の業務課題を実際に解決しながら学ぶ",
      description: "研修室での学習だけでは、実務での活用は困難です。私たちは、貴社の実際の業務プロセスの中で、具体的なユースケースを一緒に設計・実装することで、確実に成果を出します。",
      themes: [
        "議事録・報告書の自動生成",
        "マーケティング資料の効率化",
        "データ分析と可視化",
        "顧客対応の自動化",
        "社内ナレッジベース構築"
      ],
      color: "wisdom"
    },
    {
      number: "4",
      title: "内製化・自走できる組織を作る",
      subtitle: "共通リポジトリとガイドラインで、研修後も持続可能に",
      description: "AI活用を一時的なブームで終わらせず、組織文化として定着させます。",
      themes: [
        "チーム共通のAIリポジトリ（Notion / Google Drive等）",
        "社内AIガイドライン（プロンプト・品質・セキュリティ）",
        "再現性のある教育資産（ナレッジベース）",
        "推進体制（部門チャンピオン・ワーキンググループ）"
      ],
      color: "harmony"
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white via-depth-100 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            AIリブート研修の特徴
          </h2>
          <p className="text-xl text-depth-700 leading-relaxed">
            自走できる組織を作る、4つの設計原則
          </p>
        </motion.div>

        {/* 特徴リスト - B2B Clean Style */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="grid md:grid-cols-12 gap-8 md:gap-12 pb-16 border-b border-depth-200 last:border-0 last:pb-0"
              >
                {/* 左側: 番号とタイトル */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-6xl font-black text-${feature.color}/20`}>0{feature.number}</span>
                    <div className={`h-px flex-1 bg-${feature.color}/30`}></div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-depth-800 leading-tight mb-4">
                    {feature.title}
                  </h3>
                  <p className={`text-lg font-bold text-${feature.color} mb-4`}>
                    {feature.subtitle}
                  </p>
                </div>

                {/* 右側: 詳細とテーマ */}
                <div className="md:col-span-8">
                  <p className="text-depth-700 leading-relaxed mb-8 text-lg">
                    {feature.description}
                  </p>

                  {/* テーマリスト - シンプルなリスト形式 */}
                  <div className="bg-depth-50/50 rounded-lg p-6 border-l-4 border-depth-300">
                    <h4 className="font-bold text-depth-800 mb-4 text-sm uppercase tracking-wider text-depth-500">
                      {index === 0 && "Key Themes"}
                      {index === 1 && "Program Structure"}
                      {index === 2 && "Use Cases"}
                      {index === 3 && "Deliverables"}
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                      {feature.themes.map((theme, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                          <span className={`text-${feature.color} mt-1.5 flex-shrink-0`}>■</span>
                          <span className="text-depth-700">{theme}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

