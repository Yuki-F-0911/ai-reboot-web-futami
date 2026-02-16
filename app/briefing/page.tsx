import React from "react";
import type { Metadata } from "next";
import Button from "@/components/academyLanding/ui/Button";

const briefingTitle = "無料説明会 | AIリブートアカデミー";
const briefingDescription =
  "AIリブートアカデミーの無料説明会ページです。100日間プログラムの内容、補助金活用、参加条件を1時間で確認し、オンラインで気軽に相談できます。";
const briefingUrl = "https://ai-reboot.io/briefing";

export const metadata: Metadata = {
  title: briefingTitle,
  description: briefingDescription,
  alternates: {
    canonical: briefingUrl,
  },
  openGraph: {
    title: briefingTitle,
    description: briefingDescription,
    url: briefingUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/academy/seminars/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AIリブートアカデミー 無料説明会",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: briefingTitle,
    description: briefingDescription,
    images: ["/academy/seminars/opengraph-image"],
  },
};

const BriefingPage = () => {

    const faqs = [
        { q: "説明会は無料ですか？", a: "はい、完全無料です。お気軽にご参加ください。" },
        { q: "オンラインで参加できますか？", a: "Zoomを使用したオンライン開催です。全国どこからでもご参加いただけます。" },
        { q: "参加したら申し込む必要がありますか？", a: "いいえ。じっくりご検討ください。" },
        { q: "日程が合わない場合は？", a: "個別の日程調整も可能です。お申し込みフォームからご希望をお知らせください。" },
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-navy-900 !text-navy-900 mb-4">無料説明会</h1>
                    <p className="text-xl text-slate-600">AIリブートアカデミーの詳細を約1時間でご説明します</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Info Column */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-cyan-500">
                            <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl">💡</span> 説明会で分かること
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "プログラム詳細: 100日間で何を学び、どう成長できるのか",
                                    "補助金活用: 最大70%補助を受けるための条件と方法",
                                    "スケジュール: 集合研修からプログラム終了までの流れ",
                                    "質疑応答: 気になることは何でもご質問ください"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="bg-cyan-100 text-cyan-700 font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm">{i + 1}</span>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-navy-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4">開催概要</h3>
                                <ul className="space-y-3 text-slate-300">
                                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span>約1時間</li>
                                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span>Zoom開催</li>
                                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span>日程調整可</li>
                                </ul>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-10 text-9xl">📅</div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-navy-900 mb-6">よくある質問</h3>
                            <div className="space-y-6">
                                {faqs.map((faq, i) => (
                                    <div key={i}>
                                        <p className="font-bold text-navy-800 mb-2 flex items-start gap-2">
                                            <span className="text-cyan-500">Q.</span> {faq.q}
                                        </p>
                                        <p className="text-slate-600 pl-6 text-sm md:text-base">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div>
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 sticky top-24">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-navy-900">お申し込み</h2>
                                <p className="text-slate-500 text-sm mt-2">Googleフォームから必要事項をご記入ください。<br />スタッフより日程のご連絡をさせていただきます。</p>
                            </div>

                            {/* Placeholder for Google Form Iframe or Link */}
                            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl h-64 flex flex-col items-center justify-center text-slate-400 mb-8">
                                <span className="text-4xl mb-4">📝</span>
                                <p>Google Form Loading...</p>
                                <p className="text-xs mt-2">(Actual integration requires embed code)</p>
                            </div>

                            <Button href="https://forms.google.com/placeholder" variant="primary" fullWidth className="text-lg py-4 shadow-cyan-200">
                                フォームを開く (デモ)
                            </Button>

                            <div className="mt-6 flex justify-around text-xs text-slate-400">
                                <span className="flex items-center gap-1">✅ 参加費無料</span>
                                <span className="flex items-center gap-1">✅ キャンセル可</span>
                                <span className="flex items-center gap-1">✅ 勧誘なし</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BriefingPage;
