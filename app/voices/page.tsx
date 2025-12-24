import React from "react";

const VoicesPage = () => {
    const voices = [
        {
            name: "田中 太郎",
            role: "1期生 / ITエンジニア → AIコンサルタント",
            age: "30代",
            logo: "🏢",
            quote: "単なるツールの使い方ではなく、思考法が変わった。これからの時代を生き抜く自信がついた。",
            story: "最初はAIに仕事を奪われるのではという不安から受講を決意。しかし100日間を通じて、AIは脅威ではなく最高のパートナーになることを実感しました。今では社内でAI活用推進リーダーとして、チームの生産性向上に貢献しています。",
            results: ["業務効率300%向上", "社内AI推進リーダーに抜擢", "年収150万円UP"]
        },
        {
            name: "鈴木 花子",
            role: "1期生 / マーケター",
            age: "40代",
            logo: "📈",
            quote: "100日間、仲間と共に学べたことが大きかった。一人では絶対に続かなかったと思う。",
            story: "マーケティング業務でのAI活用を模索していましたが、独学に限界を感じて参加。同期との切磋琢磨が刺激になり、最後まで走りきることができました。今ではキャンペーン企画の壁打ち相手としてAIが欠かせません。",
            results: ["企画立案時間 1/3に短縮", "新規施策の成功率向上"]
        }
    ];

    const stats = [
        { label: "受講満足度", value: "98%" },
        { label: "修了率", value: "95%" },
        { label: "キャリア変化", value: "87%" },
        { label: "累計受講生", value: "300+" },
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-navy-900 !text-navy-900 mb-4">受講生の声</h1>
                    <p className="text-xl text-slate-600">プログラムを修了した受講生のリアルな声をお届けします</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto mb-20">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-slate-100">
                            <p className="text-slate-500 text-sm font-bold mb-2">{stat.label}</p>
                            <p className="text-4xl font-black text-cyan-500">{stat.value}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {voices.map((voice, i) => (
                        <div key={i} className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100">
                            <div className="flex flex-col md:flex-row gap-6 mb-6">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl shrink-0">
                                    {voice.logo}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-navy-900">{voice.name}</h3>
                                    <p className="text-slate-500 text-sm font-medium mt-1">
                                        {voice.role} / {voice.age}
                                    </p>
                                </div>
                            </div>

                            <blockquote className="text-xl md:text-2xl font-bold text-navy-800 leading-snug mb-8 relative z-10">
                                <span className="text-6xl text-slate-100 absolute -top-8 -left-4 -z-10 select-none">“</span>
                                {voice.quote}
                            </blockquote>

                            <div className="bg-slate-50 p-6 rounded-xl mb-6">
                                <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                                    {voice.story}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {voice.results.map((result, idx) => (
                                    <span key={idx} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-blue-700 text-sm font-bold rounded-full border border-blue-100">
                                        ✨ {result}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VoicesPage;
