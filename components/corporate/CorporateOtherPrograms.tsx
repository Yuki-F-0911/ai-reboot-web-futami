"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateOtherPrograms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const programs = [
    {
      number: "1",
      title: "AI活用力強化研修",
      description: "全社員のAIリテラシーを高め、日常業務での生成AI活用を定着させる基礎プログラム。ChatGPT、Claude、Geminiなどの主要ツールの実践的な使い方から、プロンプトエンジニアリングの基礎、業務別活用事例まで、即座に現場で使えるスキルを習得します。"
    },
    {
      number: "2",
      title: "組織変革DX研修",
      description: "AI活用を一時的な取り組みで終わらせず、組織のDNAとして定着させるためのプログラム。AIパラダイムシフトの理解から、社内推進体制の構築、ガイドライン策定、部門チャンピオンの育成まで、組織全体の変革をリードする力を養成します。"
    },
    {
      number: "3",
      title: "AI活用型新規事業開発研修",
      description: "生成AIの可能性を最大限に活かした新規事業の企画・検証を実践するプログラム。市場分析、アイデア創出、プロトタイピング、事業計画策定まで、AIを活用しながら新規事業開発の一連のプロセスを体験します。",
      note: "貴社の事業領域や目標に応じたセミオーダーメイド型のプログラムです"
    },
    {
      number: "4",
      title: "採用DX研修",
      description: "採用活動の各プロセス（求人票作成、スカウト文面、面接設計、オンボーディング資料など）にAIを活用し、採用効率と採用品質を同時に向上させるプログラム。魅力的な採用コンテンツの作成から、候補者体験の設計まで、採用DXを実現します。"
    },
    {
      number: "5",
      title: "営業DX研修",
      description: "提案資料作成、顧客分析、商談準備、フォローアップなど、営業活動の各場面でAIを活用し、営業パーソンがより付加価値の高い活動に時間を使えるようにするプログラム。データドリブンな営業戦略の立案から、AIを活用した顧客インサイトの発見まで実践します。"
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
            その他のプログラム
          </h2>
          <p className="text-2xl text-harmony font-bold mb-4">
            貴社の課題に特化したカスタマイズプログラム
          </p>
          <p className="text-lg text-depth-700 leading-relaxed">
            貴社の業種や具体的な課題に応じて、特化型の研修プログラムもご提案可能です。
          </p>
        </motion.div>
        
        {/* プログラム一覧 */}
        <div className="max-w-6xl mx-auto space-y-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-depth-100 to-white rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-harmony flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{program.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-depth-800">
                    {program.title}
                  </h3>
                  <p className="text-depth-700 leading-relaxed">
                    {program.description}
                  </p>
                  {program.note && (
                    <p className="mt-4 text-harmony font-bold">
                      ※ {program.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 注記 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-harmony-lighter to-will-lighter p-8 rounded-3xl">
            <p className="text-xl font-bold text-depth-800">
              ※ これらのプログラムの詳細は、無料相談にてご提案いたします。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

