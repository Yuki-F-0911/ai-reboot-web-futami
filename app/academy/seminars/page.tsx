import React from "react";
import type { Metadata } from "next";

const seminarsTitle = "無料オンライン説明会・セミナー | AIリブートアカデミー";
const seminarsDescription =
    "AIリブートアカデミーの無料オンライン説明会・セミナー情報。補助金の活用方法や講座内容を詳しくご説明します。お気軽にご参加ください。";
const seminarsUrl = "https://ai-reboot.io/academy/seminars";

export const metadata: Metadata = {
    title: seminarsTitle,
    description: seminarsDescription,
    alternates: {
        canonical: seminarsUrl,
    },
    openGraph: {
        title: seminarsTitle,
        description: seminarsDescription,
        url: seminarsUrl,
        siteName: "AIリブートアカデミー",
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: seminarsTitle,
        description: seminarsDescription,
    },
};

const SeminarsPage = () => {
    const seminars = [
        {
            title: "生成AI時代のキャリア設計論",
            date: "2026年1月18日（日）",
            time: "20:00-21:00",
            place: "オンライン（Zoom）",
            desc: "人事・採用のプロ×AI実践者が教える「キャリア下剋上」のロードマップ。ツールに依存しない「本質的な強み」の作り方をお伝えします。AIを学んで終わりにしない、思考OSのアップデートがテーマです。",
            tag: "NEW",
            link: "/seminars/career-design",
            ended: true
        },
        {
            title: "2025年AIトレンドを振り返り、2026年の展望を読む",
            date: "2025年12月30日（火）",
            time: "19:00-21:00",
            place: "オンライン",
            desc: "「AIのある暮らし」とのコラボ企画。本アカデミー主宰成瀬、「AIのある暮らし」岩本かずさんに加え、デザイナーやWebマーケター、異業種のAI活用者などゲストを招き、座談会・パネルディスカッション形式で実施。年末の忘年会的な雰囲気で、各登壇者が今年使ったツールや2025年の振り返りを語ります。",
            tag: "コラボ企画",
            ended: true
        },
        {
            title: "AI時代のキャリアハックセミナー",
            date: "2026年1月2日（金）",
            time: "16:00-17:00",
            place: "オンライン",
            desc: "AIを武器にして自分の「Will（実現したい生き方）」を叶えるためのキャリア形成について、本アカデミー主宰 成瀬拓也がお伝えします。単にツールを学ぶのではなく、AIと共に成長するキャリア戦略を一緒に考えましょう。",
            tag: "本アカデミー主宰成瀬拓也",
            ended: true
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12">
                    <p className="text-orange-500 font-bold text-sm tracking-wider mb-2">
                        SEMINARS & EVENTS
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 mb-4">セミナー・イベント</h1>
                    <p className="text-xl text-slate-600 mb-6">AI時代のキャリアや最新トレンドについて気軽に学べるイベントを開催しています</p>
                    <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        アカデミーへの入会を検討していなくても大丈夫。「ちょっと話を聞いてみたい」「AIについて知りたい」という方も大歓迎です。
                    </p>
                </div>


                <div className="max-w-4xl mx-auto grid gap-8">
                    {seminars.map((seminar, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-full opacity-50" />

                            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                <div className="md:w-3/4 space-y-4">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <span className="inline-block bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full border border-orange-200">
                                            {seminar.tag}
                                        </span>
                                        <h3 className="text-2xl font-bold text-slate-900">{seminar.title}</h3>
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
                                    {seminar.ended ? (
                                        <span className="w-full px-6 py-3 text-center text-slate-400 font-bold bg-slate-100 rounded-full border border-slate-200">
                                            受付終了
                                        </span>
                                    ) : (
                                        <a
                                            href={seminar.link || "/briefing"}
                                            className="w-full px-6 py-3 text-center text-white font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-full transition-all duration-300 shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300"
                                        >
                                            詳細・申込
                                        </a>
                                    )}
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
