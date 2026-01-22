"use client";

import { useRef } from "react";

export const CorporatePricing = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className="py-14 md:py-24 bg-depth-50">
      <div className="container-section px-5 sm:px-6">
        <div className="max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6">
            {/* ラベル部分 */}
            <div className="flex items-center gap-2 mb-3 md:mb-0 md:flex-col md:items-center md:pt-1">
              <div className="w-8 h-px md:w-px md:h-6 bg-harmony/40"></div>
              <span className="text-harmony font-semibold text-xs tracking-wider whitespace-nowrap">PRICING</span>
              <div className="hidden md:block w-px h-6 bg-harmony/40"></div>
            </div>
            {/* コンテンツ部分 */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-3 md:mb-4">
                料金について
              </h2>
              <p className="text-base md:text-lg text-harmony font-medium">
                助成金活用で、実質負担を大幅に軽減
              </p>
            </div>
          </div>
        </div>

        {/* 料金案内 */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-sm md:text-base text-depth-600 leading-relaxed max-w-2xl mx-auto">
              研修費用の詳細は、貴社の課題やご希望の内容に応じて柔軟にご提案いたします。
              <span className="font-medium text-depth-700">人材開発支援助成金（リスキリング）を活用することで、実質負担を大幅に軽減</span>できます。
            </p>
          </div>

          {/* 助成金活用例 */}
          <div className="mb-8 md:mb-12">
            {/* 例1と例2を横並び */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* 例1 */}
              <div className="bg-white rounded-lg p-5 md:p-8 border border-depth-100">
                <div className="text-center mb-5 md:mb-6 pb-3 md:pb-4 border-b border-depth-100">
                  <span className="text-xs md:text-sm text-harmony font-medium tracking-wider">助成金活用例</span>
                  <h4 className="text-sm md:text-base font-bold text-depth-800 mt-1">
                    AIリブート研修（3日間）
                  </h4>
                  <p className="text-xs md:text-sm text-depth-500 mt-1">参加者 10名 / 18時間</p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs md:text-sm text-depth-500">研修費用（税抜）</span>
                    <span className="text-lg md:text-xl font-bold text-depth-800">210万円</span>
                  </div>

                  <div className="space-y-1.5 md:space-y-2 pl-3 border-l-2 border-harmony/20">
                    <div className="flex justify-between items-center text-harmony">
                      <span className="text-xs md:text-sm">経費助成（75%）</span>
                      <span className="font-semibold text-sm md:text-base">▲157.5万円</span>
                    </div>
                    <div className="flex justify-between items-center text-harmony">
                      <span className="text-xs md:text-sm">賃金助成</span>
                      <span className="font-semibold text-sm md:text-base">▲18万円</span>
                    </div>
                  </div>

                  <div className="pt-3 md:pt-4 border-t border-depth-100">
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-xs md:text-sm font-medium text-depth-700">実質負担額</span>
                      <span className="text-xl md:text-2xl font-bold text-harmony">55.5<span className="text-sm md:text-base font-medium ml-0.5 text-depth-500">万円</span></span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end items-end sm:items-center gap-1 sm:gap-2">
                      <span className="text-xs text-depth-400">（内消費税 21万円）</span>
                      <span className="inline-block px-2 py-0.5 bg-harmony/10 text-harmony text-xs md:text-sm font-medium rounded">負担率 約26%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 例2 */}
              <div className="bg-white rounded-lg p-5 md:p-8 border border-depth-100">
                <div className="text-center mb-5 md:mb-6 pb-3 md:pb-4 border-b border-depth-100">
                  <span className="text-xs md:text-sm text-harmony font-medium tracking-wider">助成金活用例</span>
                  <h4 className="text-sm md:text-base font-bold text-depth-800 mt-1">
                    研修 ＋ フォローアップ
                  </h4>
                  <p className="text-xs md:text-sm text-depth-500 mt-1">参加者 15名 / 4日間 + 12回フォロー</p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xs md:text-sm text-depth-500">研修費用（税抜）</span>
                    <span className="text-lg md:text-xl font-bold text-depth-800">420万円</span>
                  </div>

                  <div className="space-y-1.5 md:space-y-2 pl-3 border-l-2 border-harmony/20">
                    <div className="flex justify-between items-center text-harmony">
                      <span className="text-xs md:text-sm">経費助成（75%）</span>
                      <span className="font-semibold text-sm md:text-base">▲315万円</span>
                    </div>
                    <div className="flex justify-between items-center text-harmony">
                      <span className="text-xs md:text-sm">賃金助成</span>
                      <span className="font-semibold text-sm md:text-base">▲54万円</span>
                    </div>
                  </div>

                  <div className="pt-3 md:pt-4 border-t border-depth-100">
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-xs md:text-sm font-medium text-depth-700">実質負担額</span>
                      <span className="text-xl md:text-2xl font-bold text-harmony">93<span className="text-sm md:text-base font-medium ml-0.5 text-depth-500">万円</span></span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end items-end sm:items-center gap-1 sm:gap-2">
                      <span className="text-xs text-depth-400">（内消費税 42万円）</span>
                      <span className="inline-block px-2 py-0.5 bg-harmony/10 text-harmony text-xs md:text-sm font-medium rounded">負担率 約22%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 助成金メリット - シンプルに */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="text-center">
              <p className="font-medium text-sm md:text-base text-depth-800">経費助成</p>
              <p className="text-xs md:text-sm text-depth-400">最大75%</p>
            </div>
            <span className="text-harmony font-bold text-lg">×</span>
            <div className="text-center">
              <p className="font-medium text-sm md:text-base text-depth-800">賃金助成</p>
              <p className="text-xs md:text-sm text-depth-400">研修中の賃金</p>
            </div>
          </div>

          {/* 締めメッセージ */}
          <div className="bg-white rounded-lg p-5 md:p-6 text-center border border-depth-100">
            <p className="text-sm md:text-base text-depth-700 leading-relaxed">
              助成金を活用することで、<span className="font-medium text-harmony">実質2割程度の負担</span>で組織全体のAI活用力を強化する研修を実施することが可能です。
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