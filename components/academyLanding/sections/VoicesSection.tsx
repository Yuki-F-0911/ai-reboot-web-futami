"use client";

const voices = [
    {
        category: "マインドセット",
        title: "単なる便利ツールだと思っていたAIが、自分の深層を掘り下げるパートナーに変わりました",
        body: "正直、参加する前は「ChatGPTにコードを書いてもらうことの延長線上でしょ？」と思っていました。でも、全く違いました。答えのない問いをAIと、そして仲間と共に探求していく過程で、「ここまで深められるのか」という衝撃を受けました。単に学ぶだけでなく、その場でMDMやWebサイトという具体的な「成果物」まで形にできたのが大きな収穫です。",
    },
    {
        category: "自己投資",
        title: "自腹での参加。でも、それ以上の未来への投資になりました",
        body: "決して安い金額ではありませんでしたが、直感を信じて飛び込んで正解でした。「やっちゃうか！」というチャレンジ精神で集まったメンバーとの出会いは、何にも代えがたい資産です。自分のキャリアや過去の経験が、AIという武器を得てどう花開くのか。自分にとって良い未来にしかならないという確信があります。",
    },
    {
        category: "コミュニティ",
        title: "一人なら動画を1本見て終わっていた。仲間がいるから、限界を超えられる",
        body: "最初は「本当に自分にできるのか」と不安でした。でも、ここに来て一番良かったのは「仲間」ができたことです。おそらく一人で独学していたら、途中で行き詰まって挫折していたと思います。励まし合い、知恵を出し合える環境があるからこそ、密度の濃い2日間を走り切れました。この後の100日間も、この仲間となら頑張れます。",
    },
];

const VoicesSection = () => {
    return (
        <section className="py-12 md:py-28 bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <p className="text-orange-500 font-bold text-sm tracking-wider mb-2">
                        VOICES
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                        参加者の声
                    </h2>
                    <p className="mt-4 text-lg sm:text-lg text-slate-600">
                        たった2日間で、ここまで変わった。では、100日後は？
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
                    {voices.map((voice) => (
                        <article
                            key={voice.title}
                            className="h-full bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center text-3xl font-bold leading-none shadow-lg shadow-orange-200/70 mb-5">
                                &ldquo;
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug mb-4">
                                {voice.title}
                            </h3>

                            <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-1">
                                {voice.body}
                            </p>

                            <div className="mt-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-orange-600 bg-orange-100 border border-orange-200">
                                    {voice.category}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VoicesSection;
