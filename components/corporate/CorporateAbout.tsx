"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const content = [
    {
      title: "マインドセット変革",
      items: [
        "AI活用が進まない3つの壁と突破法",
        "AI時代に求められるパラダイムシフト",
        "なぜAI革命が起こるのか（歴史的位置づけ）",
        "AIと人間の役割分担の考え方",
        "思考の型（ロジカル・システム・クリティカルシンキング）"
      ]
    },
    {
      title: "AI活用の基本スキル",
      items: [
        "生成AI（ChatGPT、Claude、Gemini等）の特徴と使い分け",
        "プロンプトエンジニアリングの基礎と実践",
        "プロンプトの型とテンプレート活用",
        "個人のAI作業環境構築",
        "AI搭載IDE（統合開発環境）の活用"
      ]
    },
    {
      title: "実務でのAI活用",
      items: [
        "情報収集・整理の効率化",
        "文章・資料作成へのAI活用",
        "音声入力との組み合わせによる思考整理",
        "自社データの整理・分析・可視化",
        "仮説立案と洞察の抽出"
      ]
    },
    {
      title: "業務変革とDX推進",
      items: [
        "事業・業務の棚卸しと整理",
        "定型業務の洗い出しとワークフロー設計",
        "業務プロセスのAI代替可能性診断",
        "AIを「部下化」する発想と業務設計",
        "DXの3つのステップ"
      ]
    },
    {
      title: "顧客価値の再設計",
      items: [
        "顧客価値と期待値の再定義",
        "ファン化・ロイヤル顧客育成の設計",
        "成長曲線と「絶望の谷」の理解"
      ]
    },
    {
      title: "チーム・組織でのAI活用体制",
      items: [
        "カスタムGPT・専用AIアシスタントの設計と構築",
        "ナレッジマネジメントとRAG活用",
        "チーム共通のプロンプトライブラリ構築",
        "AIエージェント・オーケストレーション（複数AI連携）",
        "ノーコードツールを活用したAI連携",
        "部門別AI活用体制の設計演習"
      ]
    },
    {
      title: "内製化と継続的成長",
      items: [
        "業務別AI活用ユースケースの創出",
        "AI活用推進体制と内製化支援",
        "継続的な学習とスキル定着の仕組み",
        "AI時代のキャリア戦略とマインドセット"
      ]
    }
  ];
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            AIリブート研修について
          </h2>
          <p className="text-2xl font-bold text-harmony mb-6">
            貴社の課題に合わせた実践型プログラム
          </p>
        </motion.div>
        
        {/* 研修概要 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-harmony-lighter to-will-lighter rounded-3xl p-10 shadow-elevated">
            <h3 className="text-2xl font-bold mb-6 text-depth-800">研修概要</h3>
            <p className="text-lg text-depth-700 mb-6 leading-relaxed">
              <strong>AIリブート研修</strong>は、組織全体がAI時代に適応し、自走できる力を養成する実践型プログラムです。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold text-harmony mb-3">研修時間</h4>
                <p className="text-depth-700">10時間以上（貴社の状況に合わせて設計）</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold text-harmony mb-3">対象</h4>
                <p className="text-depth-700">10〜30名程度</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold text-harmony mb-3">形式</h4>
                <p className="text-depth-700">集合研修（対面推奨、オンラインも可）</p>
              </div>
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold text-harmony mb-3">目的</h4>
                <p className="text-depth-700">個人のAI活用力向上から、チーム全体での環境構築・内製化まで</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 主な研修内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-depth-800 text-center">主な研修内容</h3>
          <p className="text-center text-depth-700 mb-12 text-lg">
            研修では、以下のようなテーマを扱います<br />
            <span className="text-harmony font-bold">（貴社の課題に応じてカスタマイズ可能）</span>
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.05 }}
                className="bg-white rounded-3xl p-8 shadow-elevated hover:shadow-floating transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-harmony flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-depth-800">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-harmony mt-1 flex-shrink-0">•</span>
                      <span className="text-depth-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

