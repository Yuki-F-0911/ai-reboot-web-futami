"use client";

import Button from "@/components/academyLanding/ui/Button";

export default function ProgramPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-navy-900 text-white py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
                    <p className="text-cyan-400 font-bold tracking-widest uppercase mb-4">PROGRAM</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">プログラム詳細</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        AIリブートアカデミーの100日間プログラム。<br />
                        あなたのキャリアを変革する、実践的なカリキュラムをご紹介します。
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
                    <div className="prose prose-lg mx-auto text-slate-600">
                        <h2 className="text-3xl font-bold text-navy-900 mb-8">カリキュラム概要</h2>

                        <div className="space-y-12">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center gap-3">
                                    <span className="bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">01</span>
                                    AIリブートキャンプ（Day 1-2）
                                </h3>
                                <p className="mb-4">
                                    2日間の宿泊型集中研修で、生成AIの基礎から応用までを集中的に学びます。
                                    マインドセットの変革と、同期とのコミュニティ形成を行います。
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                    <li>生成AIの現在地と未来予測</li>
                                    <li>プロンプトエンジニアリング基礎</li>
                                    <li>AIツール活用ワークショップ</li>
                                    <li>課題発見と解決のフレームワーク</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center gap-3">
                                    <span className="bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">02</span>
                                    実践プログラム（Day 3-90）
                                </h3>
                                <p className="mb-4">
                                    オンラインでの継続学習と、専属メンターによる個別指導。<br />
                                    実際の業務課題や個人の目標に合わせたプロジェクトに取り組みます。
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                                    <li>週1回のオンライングループワーク</li>
                                    <li>隔週のメンタリングセッション</li>
                                    <li>最新AIツールのアップデート講座</li>
                                    <li>プロジェクト進捗報告会</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-navy-800 mb-4 flex items-center gap-3">
                                    <span className="bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">03</span>
                                    成果発表会（Day 100）
                                </h3>
                                <p className="mb-4">
                                    100日間の取り組みの成果を発表するデモデイ。<br />
                                    修了生ネットワークへの参加資格が得られます。
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <h3 className="text-2xl font-bold text-navy-900 mb-6">まずは無料説明会へ</h3>
                            <p className="mb-8">
                                プログラムの詳細や、具体的なスケジュールについては無料説明会でご案内しています。<br />
                                無理な勧誘はございませんので、お気軽にご参加ください。
                            </p>
                            <div className="flex justify-center">
                                <Button href="/briefing" variant="primary" className="px-12 py-4 text-lg">
                                    無料説明会に参加する
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
