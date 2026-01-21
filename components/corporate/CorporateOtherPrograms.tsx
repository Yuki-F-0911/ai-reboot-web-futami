"use client";

import { useRef } from "react";

export const CorporateOtherPrograms = () => {
  const ref = useRef(null);

  const programs = [
    {
      number: "1",
      title: "AI活用力強化研修",
      description: "全社員のAIリテラシーを高め、日常業務での生成AI活用を定着させる基礎プログラム。"
    },
    {
      number: "2",
      title: "組織変革DX研修",
      description: "AI活用を組織のDNAとして定着させ、社内推進体制の構築を支援するプログラム。"
    },
    {
      number: "3",
      title: "AI活用型新規事業開発研修",
      description: "生成AIの可能性を活かした新規事業の企画・検証を実践するプログラム。"
    },
    {
      number: "4",
      title: "採用DX研修",
      description: "採用活動の各プロセスにAIを活用し、採用効率と品質を向上させるプログラム。"
    },
    {
      number: "5",
      title: "営業DX研修",
      description: "営業活動の各場面でAIを活用し、生産性を向上させるプログラム。"
    }
  ];

  return (
    <section ref={ref} className="py-10 md:py-16 bg-depth-50">
      <div className="container-section px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-depth-800">
            その他のプログラム
          </h2>
          <p className="text-xs md:text-sm text-depth-600">
            貴社の業種や具体的な課題に応じて、特化型の研修プログラムもご提案可能です。
          </p>
        </div>

        {/* プログラム一覧 - コンパクトに */}
        <div className="max-w-3xl mx-auto mb-6 md:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-3.5 md:p-4 rounded-lg border border-depth-100"
              >
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-harmony font-semibold text-xs md:text-sm flex-shrink-0">{program.number}.</span>
                  <h4 className="text-xs md:text-sm font-bold text-depth-800">
                    {program.title}
                  </h4>
                </div>
                <p className="text-[11px] md:text-xs text-depth-500 leading-relaxed pl-4 md:pl-5">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 注記 */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs md:text-sm text-depth-500">
            ※ これらのプログラムの詳細は、無料相談にてご提案いたします。
          </p>
        </div>
      </div>
    </section>
  );
};

