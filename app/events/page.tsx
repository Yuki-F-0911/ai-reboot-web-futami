import React from "react";
import Button from "@/components/academyLanding/ui/Button";

const EventsPage = () => {
    const events = [
        {
            title: "AIリブートアカデミー 説明会＆交流会",
            date: "2025年1月25日（土）",
            time: "14:00-17:00",
            place: "東京都内（詳細は参加者にご連絡）",
            desc: "プログラムの説明と、過去受講生との交流会を開催します。リアルな体験談を聞けるチャンス！"
        },
        {
            title: "AI活用事例共有会",
            date: "2025年2月8日（土）",
            time: "13:00-16:00",
            place: "オンライン（Zoom）",
            desc: "様々な業界でのAI活用事例を共有し、実践的な知見を得られるネットワーキングイベント。"
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-navy-900 !text-navy-900 mb-4">イベント</h1>
                    <p className="text-xl text-slate-600">交流会やワークショップなど、各種イベントを開催しています</p>
                </div>

                <div className="max-w-4xl mx-auto grid gap-8">
                    {events.map((event, i) => (
                        <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col md:flex-row gap-8 items-start">
                            <div className="md:w-3/4 space-y-4">
                                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 font-bold text-xs rounded-full">交流会</span>
                                <h3 className="text-2xl font-bold text-navy-900">{event.title}</h3>
                                <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                                    <span className="flex items-center gap-1">📅 {event.date}</span>
                                    <span className="flex items-center gap-1">⏰ {event.time}</span>
                                    <span className="flex items-center gap-1">📍 {event.place}</span>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {event.desc}
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

export default EventsPage;
