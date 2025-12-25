import React from "react";
import Button from "@/components/academyLanding/ui/Button";

const SeminarsPage = () => {
    const seminars = [
        {
            title: "2025年AIトレンドを振り返り、2026年の展望を読む",
            date: "2025年12月30日（火）",
            time: "19:00-21:00",
            place: "オンライン",
            desc: "「AIのある暮らし」とのコラボ企画。本アカデミー主宰成瀬、「AIのある暮らし」岩本かずさんに加え、デザイナーやWebマーケター、異業種のAI活用者などゲストを招き、座談会・パネルディスカッション形式で実施。年末の忘年会的な雰囲気で、各登壇者が今年使ったツールや2025年の振り返りを語ります。",
            tag: "コラボ企画"
        },
        {
            title: "AI時代のキャリアハックセミナー",
            date: "2026年1月2日（金）",
            time: "16:00-17:00",
            place: "オンライン",
            desc: "AIを武器にして自分の「Will（実現したい生き方）」を叶えるためのキャリア形成について、本アカデミー主宰 成瀬拓也がお伝えします。単にツールを学ぶのではなく、AIと共に成長するキャリア戦略を一緒に考えましょう。",
            tag: "本アカデミー主宰成瀬拓也"
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-navy-900 !text-navy-900 mb-4">セミナー・イベント</h1>
                    <p className="text-xl text-slate-600 mb-6">AIリブートアカデミーへの第一歩となるセミナーを開催しています</p>
                    <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        単にツールを学ぶのではなく、AIを武器にして自分の「Will（実現したい生き方）」を叶えるためのキャリア形成を重視しています。
                    </p>
                </div>

                {/* ターゲット層の説明 */}
                <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
                    <h2 className="text-lg font-bold text-navy-900 mb-3">🎯 こんな方におすすめ</h2>
                    <ul className="text-slate-600 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-500 mt-1">✓</span>
                            <span>20代〜30代で「このままでいいのかな」とキャリアに悩んでいる方</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-500 mt-1">✓</span>
                            <span>AI時代に向けて現状を変えたい、スキルアップしたい方</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-500 mt-1">✓</span>
                            <span>転職を考えている、またはキャリアの選択肢を広げたい方</span>
                        </li>
                    </ul>
                    <p className="text-xs text-slate-400 mt-4">
                        ※ 公務員・個人事業主の方もお気軽にご参加いただけます
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid gap-8">
                    {seminars.map((seminar, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-3/4 space-y-4">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                                            {seminar.tag}
                                        </span>
                                        <h3 className="text-2xl font-bold text-navy-900">{seminar.title}</h3>
                                    </div>
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
                                        詳細・申込
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeminarsPage;
