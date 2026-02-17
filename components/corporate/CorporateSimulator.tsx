"use client";

import { useState, useEffect, useCallback } from "react";

type CompanySize = "sme" | "large";

const plans = [
  { id: "A", name: "スタンダード・集中研修プラン", pricePerDay: 700000 },
  { id: "B", name: "動画アーカイブ付き・定着強化プラン", pricePerDay: 840000 },
  { id: "C", name: "複数講師・徹底サポートプラン", pricePerDay: 1000000 },
];

const dayOptions = [
  { value: 2, label: "2日間（14時間）" },
  { value: 3, label: "3日間（21時間）" },
  { value: 4, label: "4日間（28時間）" },
  { value: 5, label: "5日間（35時間）" },
];

export const CorporateSimulator = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0].pricePerDay);
  const [days, setDays] = useState(3);
  const [companySize, setCompanySize] = useState<CompanySize>("sme");
  const [participants, setParticipants] = useState(10);

  const [results, setResults] = useState({
    totalCost: 0,
    totalGrant: 0,
    grantExp: 0,
    grantWage: 0,
    realCost: 0,
  });

  const calculate = useCallback(() => {
    const hoursPerDay = 7;
    const totalHours = days * hoursPerDay;

    // 助成率・賃金助成単価・経費助成限度額
    let grantRate = 0;
    let wageUnit = 0;
    let grantLimit = 0;

    if (companySize === "sme") {
      grantRate = 0.75;
      wageUnit = 1000;
      grantLimit = 300000;
    } else {
      grantRate = 0.6;
      wageUnit = 500;
      grantLimit = 200000;
    }

    // 研修費用総額
    const totalCost = selectedPlan * days;

    // 賃金助成額
    const totalWageGrant = wageUnit * totalHours * participants;

    // 経費助成額
    const costPerPerson = totalCost / participants;
    let grantPerPersonCalc = costPerPerson * grantRate;

    if (grantPerPersonCalc > grantLimit) {
      grantPerPersonCalc = grantLimit;
    }

    const totalExpGrant = Math.floor(grantPerPersonCalc * participants);

    // 助成金合計
    const totalGrant = totalWageGrant + totalExpGrant;

    // 実質負担額
    const realCost = totalCost - totalGrant;

    setResults({
      totalCost,
      totalGrant,
      grantExp: totalExpGrant,
      grantWage: totalWageGrant,
      realCost,
    });
  }, [companySize, days, participants, selectedPlan]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString();
  };

  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="container-section px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6">
            <div className="flex items-center gap-2 mb-3 md:mb-0 md:flex-col md:items-center md:pt-1">
              <div className="w-8 h-px md:w-px md:h-6 bg-harmony/40"></div>
              <span className="text-harmony font-semibold text-xs tracking-wider whitespace-nowrap">
                SIMULATOR
              </span>
              <div className="hidden md:block w-px h-6 bg-harmony/40"></div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-depth-800 leading-[1.3] tracking-tight mb-3 md:mb-4">
                助成金シミュレーター
              </h2>
              <p className="text-base md:text-lg text-harmony font-medium mb-2">
                貴社の条件に合わせて実質負担額を計算
              </p>
              <p className="text-sm text-depth-600">
                <a
                  href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-harmony underline hover:text-harmony/80 transition-colors"
                >
                  人材開発支援助成金（事業展開等リスキリング支援コース）
                </a>
                に基づく試算
              </p>
            </div>
          </div>
        </div>

        {/* シミュレーター本体 */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-depth-50 rounded-2xl p-6 md:p-8 border border-depth-100">
            {/* プラン選択 */}
            <div className="mb-6 pb-6 border-b border-depth-200">
              <label className="block text-sm font-bold text-depth-700 mb-3">
                1. プラン選択
              </label>
              <div className="space-y-2">
                {plans.map((plan) => (
                  <label
                    key={plan.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedPlan === plan.pricePerDay
                        ? "bg-harmony/10 border border-harmony/30"
                        : "bg-white border border-depth-100 hover:border-depth-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={plan.pricePerDay}
                      checked={selectedPlan === plan.pricePerDay}
                      onChange={(e) => setSelectedPlan(Number(e.target.value))}
                      className="w-4 h-4 text-harmony focus:ring-harmony"
                    />
                    <span className="text-sm text-depth-700">
                      <span className="font-bold text-depth-800">
                        PLAN {plan.id}
                      </span>
                      ：{plan.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 研修日数 */}
            <div className="mb-6 pb-6 border-b border-depth-200">
              <label className="block text-sm font-bold text-depth-700 mb-3">
                2. 研修日数（1日7時間）
              </label>
              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full p-3 rounded-lg border border-depth-200 bg-white text-depth-800 focus:outline-none focus:ring-2 focus:ring-harmony/30 focus:border-harmony"
              >
                {dayOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 企業規模 */}
            <div className="mb-6 pb-6 border-b border-depth-200">
              <label className="block text-sm font-bold text-depth-700 mb-3">
                3. 企業規模
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg cursor-pointer transition-colors text-center ${
                    companySize === "sme"
                      ? "bg-harmony/10 border border-harmony/30"
                      : "bg-white border border-depth-100 hover:border-depth-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="size"
                    value="sme"
                    checked={companySize === "sme"}
                    onChange={() => setCompanySize("sme")}
                    className="w-4 h-4 text-harmony focus:ring-harmony"
                  />
                  <span className="text-sm text-depth-700">
                    中小企業
                    <span className="block text-xs text-harmony font-medium">
                      助成率75%
                    </span>
                  </span>
                </label>
                <label
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg cursor-pointer transition-colors text-center ${
                    companySize === "large"
                      ? "bg-harmony/10 border border-harmony/30"
                      : "bg-white border border-depth-100 hover:border-depth-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="size"
                    value="large"
                    checked={companySize === "large"}
                    onChange={() => setCompanySize("large")}
                    className="w-4 h-4 text-harmony focus:ring-harmony"
                  />
                  <span className="text-sm text-depth-700">
                    大企業
                    <span className="block text-xs text-harmony font-medium">
                      助成率60%
                    </span>
                  </span>
                </label>
              </div>
            </div>

            {/* 受講人数 */}
            <div className="mb-8 pb-6 border-b border-depth-200">
              <label className="block text-sm font-bold text-depth-700 mb-3">
                4. 受講人数
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={participants}
                  onChange={(e) =>
                    setParticipants(Math.max(1, Number(e.target.value)))
                  }
                  min="1"
                  className="w-24 p-3 rounded-lg border border-depth-200 bg-white text-depth-800 text-center focus:outline-none focus:ring-2 focus:ring-harmony/30 focus:border-harmony"
                />
                <span className="text-depth-700">名</span>
              </div>
            </div>

            {/* 計算結果 */}
            <div className="bg-white rounded-xl p-5 md:p-6 border border-depth-100">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-depth-600">
                    研修費用総額（税別）
                  </span>
                  <span className="text-lg font-bold text-depth-800">
                    {formatCurrency(results.totalCost)}円
                  </span>
                </div>
                <div className="flex justify-between items-center text-harmony">
                  <span className="text-sm">助成金受給額（目安）</span>
                  <span className="text-lg font-bold">
                    ▲{formatCurrency(results.totalGrant)}円
                  </span>
                </div>
                <div className="text-right text-xs text-depth-500">
                  (内訳: 経費助成 {formatCurrency(results.grantExp)}円 / 賃金助成{" "}
                  {formatCurrency(results.grantWage)}円)
                </div>
              </div>

              <div className="border-t-2 border-harmony pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-depth-800">
                    実質負担額（税別）
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-harmony">
                    {formatCurrency(results.realCost)}円
                  </span>
                </div>
              </div>
            </div>

            {/* 注意事項 */}
            <div className="mt-5 text-xs text-depth-500 space-y-1">
              <p>※上記はシミュレーションであり、受給を保証するものではありません。</p>
              <p>※助成金の受給には各種要件（雇用保険加入等）があります。</p>
              <p>
                ※消費税は別途発生いたしますが、実質コスト算出のため税別表記としています。
              </p>
              <p className="mt-2">
                詳細は
                <a
                  href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-harmony underline hover:text-harmony/80 transition-colors mx-1"
                >
                  厚生労働省の公式ページ
                </a>
                をご確認ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
