"use client";

import { useRef } from "react";
import Link from "next/link";

export const CorporateCTA = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className="py-14 md:py-24 bg-depth-50">
      <div className="container-section px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-depth-800 leading-tight">
            組織のOSを再起動する、その第一歩を今日から
          </h2>

          <p className="text-sm md:text-base text-depth-600 mb-8 md:mb-10 leading-relaxed">
            AI導入を「いつかやる」と先延ばしにしている間に、競合は着実に生産性を高めています。
          </p>

          {/* まずは無料相談から */}
          <div className="mb-8 md:mb-10">
            <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-6 text-depth-800">まずは無料相談から</h3>

            {/* 無料相談の内容 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left mb-8 md:mb-10 max-w-2xl mx-auto">
              {/* こんな方におすすめ */}
              <div className="bg-white rounded-lg p-4 md:p-5 border border-depth-100">
                <h4 className="text-sm font-bold mb-3 md:mb-4 text-depth-800">
                  こんな方におすすめ
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-depth-600">
                    <span className="text-harmony mt-0.5 flex-shrink-0">✓</span>
                    <span>AIを導入したいが、何から始めればいいか分からない</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-depth-600">
                    <span className="text-harmony mt-0.5 flex-shrink-0">✓</span>
                    <span>社内でAI活用を定着させる方法が知りたい</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-depth-600">
                    <span className="text-harmony mt-0.5 flex-shrink-0">✓</span>
                    <span>助成金を活用して研修費用を抑えたい</span>
                  </li>
                </ul>
              </div>

              {/* 無料相談の内容 */}
              <div className="bg-white rounded-lg p-4 md:p-5 border border-depth-100">
                <h4 className="text-sm font-bold mb-3 md:mb-4 text-depth-800">
                  無料相談でお話しすること
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-depth-600">
                    <span className="text-harmony mt-0.5 flex-shrink-0">•</span>
                    <span>貴社の現状ヒアリングと課題整理</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-depth-600">
                    <span className="text-harmony mt-0.5 flex-shrink-0">•</span>
                    <span>具体的な活用イメージのご提案</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-depth-600">
                    <span className="text-harmony mt-0.5 flex-shrink-0">•</span>
                    <span>最適な研修プログラムの設計</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-depth-600">
                    <span className="text-harmony mt-0.5 flex-shrink-0">•</span>
                    <span>助成金活用による実質料金のご案内</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="max-w-sm mx-auto">
            <Link href="#contact">
              <button className="w-full bg-harmony hover:bg-harmony-dark text-white font-bold px-6 md:px-8 py-3.5 md:py-4 rounded-lg transition-colors duration-200 text-base md:text-lg">
                無料相談を申し込む
              </button>
            </Link>
          </div>

          {/* 締めメッセージ */}
          <p className="mt-6 md:mt-8 text-xs md:text-sm text-depth-500">
            組織のOSを再起動し、AI時代の競争力を手に入れる。その第一歩は、まず相談することから。
          </p>
        </div>
      </div>
    </section>
  );
};