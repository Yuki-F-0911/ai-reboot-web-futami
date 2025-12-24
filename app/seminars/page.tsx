import React from "react";
import Button from "@/components/academyLanding/ui/Button";

const SeminarsPage = () => {
    const seminars = [
        {
            title: "生成AI活用入門セミナー",
            date: "2025年1月15日（水）",
            time: "19:00-20:30",
            place: "オンライン（Zoom）",
            desc: "ChatGPT、Claude、Geminiの基本的な使い方と、業務効率化のヒントをお伝えします。"
        },
        {
            title: "AI時代のキャリア戦略セミナー",
            date: "2025年1月22日（水）",
            time: "19:00-20:30",
            place: "オンライン（Zoom）",
            desc: "生成AIがもたらすキャリアへの影響と、これからの時代に求められるスキルについて解説します。"
        },
        {
            title: "プロンプトエンジニアリング実践ワークショップ",
            date: "2025年1月29日（水）",
            time: "19:00-21:00",
            place: "オンライン（Zoom）",
            desc: "より良い結果を引き出すためのプロンプト設計テクニックを実践形式で学びます。"
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-navy-900 !text-navy-900 mb-4">セミナー</h1>
                    <p className="text-xl text-slate-600">生成AI活用に関する各種セミナーを開催しています</p>
                </div>

                <div className="max-w-4xl mx-auto grid gap-8">
                    {seminars.map((seminar, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col md:flex-row gap-8 items-start">
                            <div className="md:w-3/4 space-y-4">
                                <h3 className="text-2xl font-bold text-navy-900">{seminar.title}</h3>
                                <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                                    <span className="flex items-center gap-1">📅 {seminar.date}</span>
                                    <span className="flex items-center gap-1">⏰ {seminar.time}</span>
                                    <span className="flex items-center gap-1">📍 {seminar.place}</span>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {seminar.desc}
                                </p>
                            </div>
                            <div className="md:w-1/4 w-full flex items-center justify-end">
                                <Button href="/briefing" variant="outline" className="w-full text-center">
                                    詳細を見る
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeminarsPage;
