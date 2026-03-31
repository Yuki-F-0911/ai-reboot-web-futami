import React from "react";
import type { Metadata } from "next";
import { getUpcomingSeminars, getEndedSeminars } from "@/data/seminars";
import type { SeminarData } from "@/types/seminar";

const seminarsTitle = "無料オンライン説明会・セミナー | AIリブートアカデミー";
const seminarsDescription =
    "AIリブートアカデミーの無料オンライン説明会・セミナー情報。AIリスキリングを検討中の会社員・個人事業主・転職検討者に向けて、オンライン開催で講座内容や補助金活用を解説します。";
const seminarsUrl = "https://ai-reboot.io/academy/seminars";
const seminarsOgImagePath = "/academy/seminars/opengraph-image";

export const metadata: Metadata = {
    title: seminarsTitle,
    description: seminarsDescription,
    keywords: [
        "AIリブートアカデミー 無料セミナー",
        "オンライン説明会",
        "生成AI リスキリング",
        "経産省認定 講座",
        "AI キャリアアップ",
    ],
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
        images: [
            {
                url: seminarsOgImagePath,
                width: 1200,
                height: 630,
                alt: "AIリブートアカデミー 無料オンライン説明会",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: seminarsTitle,
        description: seminarsDescription,
        images: [seminarsOgImagePath],
    },
};

function SeminarCard({ seminar }: { seminar: SeminarData }) {
    const link = seminar.hasLandingPage ? `/seminars/${seminar.slug}` : "/briefing";

    return (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
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
                        {seminar.description}
                    </p>
                </div>
                <div className="md:w-1/4 w-full flex items-center justify-end">
                    {seminar.ended ? (
                        <span className="w-full px-6 py-3 text-center text-slate-400 font-bold bg-slate-100 rounded-full border border-slate-200">
                            受付終了
                        </span>
                    ) : (
                        <a
                            href={link}
                            className="w-full px-6 py-3 text-center text-white font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-full transition-all duration-300 shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300"
                        >
                            詳細・申込
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function PastSeminarCard({ seminar }: { seminar: SeminarData }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-300">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-bl-full opacity-50" />

            <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200">
                        {seminar.tag}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{seminar.dateShort}</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug flex-grow">
                    {seminar.title}
                </h3>
                
                <p className="text-sm text-slate-500 mb-4 line-clamp-3">
                    {seminar.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100">
                    <span className="w-full block py-2 text-center text-slate-400 text-sm font-bold bg-slate-50 rounded-lg border border-slate-100">
                        受付終了
                    </span>
                </div>
            </div>
        </div>
    );
}

const SeminarsPage = () => {
    const upcomingSeminars = getUpcomingSeminars();
    const endedSeminars = getEndedSeminars();

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

                {/* 開催予定のセミナー */}
                {upcomingSeminars.length > 0 && (
                    <>
                        <div className="max-w-4xl mx-auto mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                                開催予定のセミナー
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                対象者: 生成AIスキルを仕事で活かしたい会社員・個人事業主・転職検討中の方
                                <br />
                                開催形式: オンライン（Zoom）
                            </p>
                        </div>
                        <div className="max-w-4xl mx-auto grid gap-8 mb-16">
                            {upcomingSeminars.map((seminar) => (
                                <SeminarCard key={seminar.slug} seminar={seminar} />
                            ))}
                        </div>
                    </>
                )}

                {/* 過去のセミナー */}
                {endedSeminars.length > 0 && (
                    <>
                        <div className="max-w-7xl mx-auto mt-24 mb-8 border-t border-slate-200 pt-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-500 mb-2 text-center">
                                過去の代表的なセミナー
                            </h2>
                            <p className="text-center text-slate-400 text-sm mb-10">
                                過去に開催されたセミナーの一部をご紹介します。最新の開催情報は上部をご確認ください。
                            </p>
                        </div>
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {endedSeminars.map((seminar) => (
                                <PastSeminarCard key={seminar.slug} seminar={seminar} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SeminarsPage;
