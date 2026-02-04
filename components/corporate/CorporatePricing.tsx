"use client";

import { useRef } from "react";

const plans = [
  {
    id: "A",
    name: "スタンダード・集中研修プラン",
    tagline: "迷ったらこれ。最短で成果を出すための濃縮プログラム",
    description:
      "基礎から応用まで、3日間に凝縮した実践型カリキュラム。コストパフォーマンスを最大化したい企業様に最適です。",
    price: 210,
    actualCost: 31.5,
  },
  {
    id: "B",
    name: "動画アーカイブ付き・定着強化プラン",
    tagline: "『やりっぱなし』を防ぐ。録画データで永続的な学習効果を",
    description:
      "研修の全工程を録画し、復習用アーカイブとして提供。欠席者の補講や、受講後の振り返りに活用でき、ノウハウが社内に資産として残ります。",
    price: 252,
    actualCost: 42.0,
  },
  {
    id: "C",
    name: "複数講師・徹底サポートプラン",
    tagline: "落ちこぼれゼロへ。メイン＋サポート講師の盤石体制",
    description:
      "メイン講師に加え、個別フォローを行う専任アシスタントを複数名配置。受講者の理解度に合わせて手厚く指導し、確実なスキル習得を保証します。",
    price: 300,
    actualCost: 54.0,
  },
];

export const CorporatePricing = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className="py-14 md:py-24 bg-depth-50">
      <div className="container-section px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6">
            {/* ラベル部分 */}
            <div className="flex items-center gap-2 mb-3 md:mb-0 md:flex-col md:items-center md:pt-1">
              <div className="w-8 h-px md:w-px md:h-6 bg-harmony/40"></div>
              <span className="text-harmony font-semibold text-xs tracking-wider whitespace-nowrap">
                PRICING
              </span>
              <div className="hidden md:block w-px h-6 bg-harmony/40"></div>
            </div>
            {/* コンテンツ部分 */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-3 md:mb-4">
                プランと料金
              </h2>
              <p className="text-base md:text-lg text-harmony font-medium">
                助成金活用で、実質負担を大幅に軽減
              </p>
            </div>
          </div>
        </div>

        {/* プランカード */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-10">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-xl overflow-hidden border border-depth-100"
              >
                <div className="p-5 md:p-6">
                  {/* プランラベル */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-depth-50 text-depth-600 text-xs font-bold tracking-wider rounded">
                      PLAN {plan.id}
                    </span>
                  </div>

                  {/* プラン名 */}
                  <h3 className="text-lg md:text-xl font-bold text-depth-800 mb-2 leading-tight">
                    {plan.name}
                  </h3>

                  {/* キャッチコピー */}
                  <p className="text-sm text-harmony font-medium mb-3 leading-relaxed">
                    「{plan.tagline}」
                  </p>

                  {/* 説明 */}
                  <p className="text-sm text-depth-600 leading-relaxed mb-6 min-h-[4.5rem]">
                    {plan.description}
                  </p>

                  {/* 料金表示 */}
                  <div className="border-t border-depth-100 pt-5 space-y-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-depth-500">
                        研修費（税別）
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-depth-800">
                        {plan.price}
                        <span className="text-sm font-medium ml-0.5">万円</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline bg-harmony/5 -mx-5 md:-mx-6 px-5 md:px-6 py-3">
                      <span className="text-sm font-medium text-harmony">
                        実質負担額
                      </span>
                      <span className="text-2xl md:text-3xl font-bold text-harmony">
                        {plan.actualCost}
                        <span className="text-sm font-medium ml-0.5">
                          万円
                          <span className="text-depth-400 font-normal">
                            （税別）
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 注釈 */}
          <div className="text-center mb-8 md:mb-10">
            <p className="inline-block text-sm md:text-base text-depth-700 font-medium bg-harmony/10 px-4 py-2 rounded-lg">
              ※実質負担額は中小企業を対象に3日間10人開催した場合の助成金を差し引いたものです。
            </p>
          </div>

          {/* 助成金メリット */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="text-center">
              <p className="font-medium text-sm md:text-base text-depth-800">
                経費助成
              </p>
              <p className="text-xs md:text-sm text-depth-400">最大75%</p>
            </div>
            <span className="text-harmony font-bold text-lg">+</span>
            <div className="text-center">
              <p className="font-medium text-sm md:text-base text-depth-800">
                賃金助成
              </p>
              <p className="text-xs md:text-sm text-depth-400">研修中の賃金</p>
            </div>
          </div>

          {/* 締めメッセージ */}
          <div className="bg-white rounded-lg p-5 md:p-6 text-center border border-depth-100">
            <p className="text-sm md:text-base text-depth-700 leading-relaxed">
              <span className="font-medium text-harmony">
                人材開発支援助成金（リスキリング）
              </span>
              を活用することで、実質負担を大幅に軽減できます。
            </p>
            <p className="text-xs md:text-sm text-depth-500 mt-2">
              ※助成金の要件確認や申請サポートも行っております。お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};