"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CorporateProgram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-depth-100 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            プログラムの内容と特徴
          </h2>
          <div className="bg-gradient-to-r from-harmony-lighter to-will-lighter p-8 rounded-3xl mb-4">
            <p className="text-2xl font-bold text-depth-800 mb-4">
              座学＋実践＋伴走型開発支援の三段構成
            </p>
            <p className="text-xl text-depth-700">
              生成AIの活用環境を整え、個人・チームレベルで業務に組み込み、<br />
              メンターが開発・実装まで徹底伴走します
            </p>
          </div>
          <p className="text-lg text-depth-600 italic">
            ※以下の時間数は一例です。企業の課題や状況に応じてカスタマイズ可能です。
          </p>
        </motion.div>
        
        {/* 3つのプログラム概要 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        >
          <div className="bg-white rounded-3xl p-8 shadow-elevated text-center">
            <h3 className="text-xl font-bold mb-4 text-harmony">
              1. 初回集中研修<br />
              <span className="text-sm font-normal">（例：12時間）</span>
            </h3>
            <p className="text-depth-700 mb-4">
              AIの活用方法や編集スキルの習得を目的とした対面での集中研修
            </p>
            <ul className="text-left space-y-2 text-depth-700">
              <li className="flex items-start gap-2">
                <span className="text-harmony mt-1">•</span>
                <span>生成AI活用で実現できること</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-harmony mt-1">•</span>
                <span>個人・チーム作業環境の構築</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-harmony mt-1">•</span>
                <span>実践的な活用演習</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-elevated text-center">
            <h3 className="text-xl font-bold mb-4 text-will-primary">
              2. オンライン講座学習<br />
              <span className="text-sm font-normal">（例：10時間超）</span>
            </h3>
            <p className="text-depth-700 mb-4">
              受講者が各自で学習を進める形式
            </p>
            <ul className="text-left space-y-2 text-depth-700">
              <li className="flex items-start gap-2">
                <span className="text-will-primary mt-1">•</span>
                <span>生成AIの仕組みと倫理</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-will-primary mt-1">•</span>
                <span>実践演習（データ分析、資料作成、画像・動画生成等）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-will-primary mt-1">•</span>
                <span>各講義ごとの学習評価テスト</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-elevated text-center">
            <h3 className="text-xl font-bold mb-4 text-wisdom">
              3. 伴走型開発支援<br />
              <span className="text-sm font-normal">（例：10時間/人）</span>
            </h3>
            <p className="text-depth-700 mb-4">
              専属メンターが現場での実践を徹底サポート
            </p>
            <ul className="text-left space-y-2 text-depth-700">
              <li className="flex items-start gap-2">
                <span className="text-wisdom mt-1">•</span>
                <span>初回研修後の実践をサポート</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wisdom mt-1">•</span>
                <span>業務への実装支援</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wisdom mt-1">•</span>
                <span>課題解決の伴走</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        {/* 初回集中研修の詳細 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl p-10 shadow-elevated">
            <h3 className="text-2xl font-bold mb-8 text-depth-800 text-center">
              初回集中研修の詳細
            </h3>
            <p className="text-center text-depth-700 mb-8">
              AIの活用方法や編集スキルの習得を目的とした対面での集中研修。
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* DAY1 */}
              <div className="bg-gradient-to-br from-harmony-lighter to-white p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-harmony">
                  DAY1：個人作業環境の構築
                </h4>
                <ul className="space-y-3 text-depth-700">
                  <li className="flex items-start gap-3">
                    <span className="text-harmony mt-1">•</span>
                    <span>生成AI活用で実現できること</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-harmony mt-1">•</span>
                    <span>生成AIが変える未来</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-harmony mt-1">•</span>
                    <span>生成AI活用事例</span>
                  </li>
                  <li className="pl-6 text-sm text-depth-600">
                    - データ分析／資料作成／画像生成／動画生成／音楽生成／チャットボット開発 等
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-harmony mt-1">•</span>
                    <span>個人作業環境（AI搭載IDEおよびLLMチャットツール等）の構築</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-harmony mt-1">•</span>
                    <span>生成AI活用実践（実際に個別の業務にAIを活用する）</span>
                  </li>
                </ul>
              </div>
              
              {/* DAY2 */}
              <div className="bg-gradient-to-br from-will-lighter to-white p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-will-primary">
                  DAY2：チーム作業環境の構築
                </h4>
                <ul className="space-y-3 text-depth-700">
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span>チームでAI活用にレバレッジをかける</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span>チームで共有できる生成AIリポジトリの構築</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span>ナレッジ共有や情報管理の仕組みを実装</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-will-primary mt-1">•</span>
                    <span>チーム全体でAIを活用した共同作業を体験</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-depth-100 rounded-2xl">
              <p className="text-depth-700 text-center font-bold">
                研修のポイント<br />
                実際の業務環境で即座に活用できる<br />
                実践的なスキルを身につけます
              </p>
              <p className="text-sm text-depth-600 mt-4 text-center">
                ※日程や時間配分は、貴社のご要望に応じて調整いたします
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* オンライン講座学習の詳細 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-10 shadow-elevated">
            <h3 className="text-2xl font-bold mb-8 text-depth-800 text-center">
              オンライン講座学習
            </h3>
            <p className="text-center text-depth-700 mb-8">
              受講者が各自で学習を進める形式（各自自身の業務と関連性の高い内容の講座を選択）
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-4 text-harmony text-lg">基礎編</h4>
                <ol className="space-y-2 text-depth-700">
                  <li>1. 生成AIの仕組み</li>
                  <li>2. 生成AI関連言語の理解</li>
                  <li>3. AI活用の倫理</li>
                  <li>4. 生成AIパスポート対策</li>
                </ol>
                
                <h4 className="font-bold mb-4 text-harmony text-lg mt-8">実践編（前半）</h4>
                <ol className="space-y-2 text-depth-700" start={5}>
                  <li>5. 生成AI活用実習（データ分析）</li>
                  <li>6. 生成AI活用実習（ダッシュボード生成）</li>
                  <li>7. 生成AI活用実習（資料作成）</li>
                </ol>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-will-primary text-lg">実践編（後半）</h4>
                <ol className="space-y-2 text-depth-700" start={8}>
                  <li>8. 生成AI活用実習（画像生成）</li>
                  <li>9. 生成AI活用実習（動画生成）</li>
                  <li>10. 生成AI活用実習（音楽生成）</li>
                  <li>11. 自動化・API連携</li>
                </ol>
                
                <div className="bg-gradient-to-r from-harmony-lighter to-will-lighter p-6 rounded-2xl mt-8">
                  <p className="text-depth-800 font-bold">
                    学習のポイント<br />
                    • 各講義ごとに学習評価テストを実施<br />
                    • 業務に即した内容を選択可能<br />
                    • 実践的なスキルの習得に重点
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};