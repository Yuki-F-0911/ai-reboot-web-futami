import React from "react";
import Link from "next/link";

const MessagePage = () => {
    const chapters = [
        {
            id: "01",
            title: "変革の波",
            subtitle: "生成AIが変えていく世界のルール",
            accent: "from-blue-500 to-cyan-500",
            accentLight: "from-blue-50 to-cyan-50",
            content: (
                <>
                    <p className="mb-4">生成AIの登場により、世界のルールが根底から塗り替えられようとしています。</p>
                    <p className="mb-4">かつては「安定」の象徴とされていたホワイトカラーの頂点とも言えるエンジニアやコンサルタントの仕事も、世界各地でリストラの波に直面しています。</p>
                    <p>生成AIと共に働くことが当たり前の時代に急速にシフトする中で、これまでの経験やスキルは通用しなくなってきています。</p>
                </>
            )
        },
        {
            id: "02",
            title: "共感と決意",
            subtitle: "不安の前に立って",
            accent: "from-purple-500 to-pink-500",
            accentLight: "from-purple-50 to-pink-50",
            content: (
                <>
                    <p className="font-bold text-lg mb-4 text-slate-800">「静観していることは既に退化をしている」</p>
                    <p className="mb-4">「今までのスキルではもう通用しないかもしれない」「この変化のスピードに、正直ついていけるか不安だ」</p>
                    <p className="mb-4">と感じているのはむしろ正常で、決してあなただけが感じているものではありません。何を隠そうこの講座を開講する私たちも同様に、変化の早さに不安を感じています。</p>
                    <p>それでも一つ確信していることがあります。それは、「静観していることは既に退化をしている」ということ。なので、私たちは動き続けることを選びました。</p>
                </>
            )
        },
        {
            id: "03",
            title: "私たちの選択",
            subtitle: "生成AIとどう向き合うか",
            accent: "from-orange-500 to-amber-500",
            accentLight: "from-orange-50 to-amber-50",
            content: (
                <>
                    <p className="font-bold text-lg mb-4 text-slate-800">私たち一人ひとりには、この時代をつくる責任がある</p>
                    <p className="mb-4">「生成AIとの未来」を誰かに委ねることができたかもしれません。でも、私たちは自分たちもその変化に向き合い続ける道を選びました。</p>
                    <p>なぜなら、私たちウィルフォワードは2011年の創業以来、「世界を一つの家族にする」というビジョンを掲げ、常に働き方・生き方のあり方を問い続け、トライしつづけてきたという歴史があるからです。</p>
                </>
            )
        },
        {
            id: "04",
            title: "実践の記録",
            subtitle: "生成AIに取り組む日々",
            accent: "from-emerald-500 to-teal-500",
            accentLight: "from-emerald-50 to-teal-50",
            content: (
                <>
                    <p className="mb-4">そこで、私たちは生成AIの活用に徹底的に取り組みました。とにかく取り組んでみたいことにはわからないことがたくさんあると思ったからです。</p>
                    <p className="mb-4">これまでの事業を減速させ、人によってはストップさせ、1日中生成AIの活用方法に取り組みました。とてつもない速度でできることが増えていき、自分が魔法使いにでもなったかのような錯覚を覚えながらも、あまりの進化の早さに日々目が回るような1年でした。</p>
                    <p>そして、一つ確信にたどり着きました。これは「生成AIを使ったらこんなことができる」という単なる便利ツールの範疇などではなく、<strong className="text-slate-800">「人類の未来そのものを左右する転換点になる」</strong>ということです。</p>
                </>
            )
        },
        {
            id: "05",
            title: "本質の追求",
            subtitle: "「スキル」ではなく「思考OS」",
            accent: "from-rose-500 to-red-500",
            accentLight: "from-rose-50 to-red-50",
            content: (
                <>
                    <p className="font-bold text-lg mb-4 text-slate-800">どんな環境の変化にも適応できる思考のOS</p>
                    <p className="mb-4">私たちが提供すべきなのは、明日には陳腐化するかもしれない小手先の生成AI活用「スキル」だとは思いません。</p>
                    <p className="mb-4">未知の課題に直面したとき、自ら問い、学び、AIと共に答えを見つけていく、まさに乗り越えていく力です。</p>
                    <p>文明の進化により、剣が銃に変わり、馬が自動車に変わっていったように、時にこれまでの時代に役立った考え方を捨てて、これからの時代に必要などんな環境の変化にも適応できる思考のOSを身につける機会。</p>
                </>
            )
        },
        {
            id: "06",
            title: "内なる発見",
            subtitle: "あなたの中にある答えを",
            accent: "from-indigo-500 to-violet-500",
            accentLight: "from-indigo-50 to-violet-50",
            content: (
                <>
                    <p className="font-bold text-lg mb-4 text-slate-800">「あなたのウェルビーイングの答えは、あなたの内側にしかない」</p>
                    <p className="mb-4">そして、そのOSは、私たちが与えるものでは完成しません。なぜならば、「何を望み、何に幸福を感じるか」というあなたのウェルビーイングの答えは、あなたの内側にしかないからです。</p>
                    <p>だから私たちは「教える教育」だけではなく、あえて「教えない」教育、問いを投げつづける伴走者である必要があると感じています。</p>
                </>
            )
        },
        {
            id: "07",
            title: "普遍的な力",
            subtitle: "まだ見ぬ生成AIツールにも対応できるように",
            accent: "from-sky-500 to-blue-500",
            accentLight: "from-sky-50 to-blue-50",
            content: (
                <>
                    <p className="font-bold text-lg mb-4 text-slate-800">考え方と学び方を身につけることが最強の武器になる</p>
                    <p className="mb-4">加えて、今、主流となっているChatGPTやGeminiなどのツールの使い方を覚えるのもだいじですが、それ以上に、どんな生成AIも使いこなせる「考え方」や「学び方」を身につけることの方が大事です。</p>
                    <p>またマーケティングやエンジニアリングの汎用的な思考スキルと組み合わせることが、時代の主流が変化しつづけたとしても、これからの時代を生き抜くための最強の武器になると信じています。</p>
                </>
            )
        },
        {
            id: "08",
            title: "共に歩む",
            subtitle: "同志を求めています",
            accent: "from-orange-500 to-rose-500",
            accentLight: "from-orange-50 to-rose-50",
            content: (
                <>
                    <p className="font-bold text-lg mb-4 text-slate-800">「この時代を一緒に創っていきたい」</p>
                    <p className="mb-4">私たちは、教壇に立つ「先生」ではありません。今この瞬間も挑戦を続ける現役の「実践者集団」です。</p>
                    <p className="mb-4">今この瞬間に進化している世界に、今この瞬間挑んでいる私たちだからこそ、まだ教科書には載っていない「生きた知見」で、あなたの成長をブーストできるのだと確信しています。</p>
                    <p>生成AIを身につけて、キャリアアップしたいという方も歓迎です。それ以上に、私たちの想いに共感し、<strong className="text-slate-800">「この時代を一緒に創っていきたい」</strong>と思っていただける方と出会えることを楽しみにしています。</p>
                </>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl" />
                    <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl relative z-10">
                    <div className="text-center">
                        <p className="text-orange-500 font-semibold tracking-widest text-sm mb-6 uppercase">Our Message</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 mb-8">
                            なぜ私たちが
                            <br />
                            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                                AIリブートアカデミー
                            </span>
                            <br />
                            をやるのか
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            この時代に私たちが問いかける、
                            <br className="hidden md:block" />
                            挑戦と共創の物語。
                        </p>

                        {/* Scroll Indicator */}
                        <div className="mt-16 flex flex-col items-center gap-2 text-slate-400">
                            <span className="text-xs tracking-wider">Scroll</span>
                            <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter Cards */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
                    <div className="space-y-8">
                        {chapters.map((chapter, index) => (
                            <article
                                key={chapter.id}
                                className={`group relative bg-gradient-to-br ${chapter.accentLight} rounded-2xl p-8 md:p-12 border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-xl`}
                            >
                                {/* Gradient Line */}
                                <div className={`absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b ${chapter.accent} rounded-full opacity-80`} />

                                <div className="flex flex-col md:flex-row gap-8 md:gap-12 pl-6">
                                    {/* Chapter Info */}
                                    <div className="md:w-1/4 shrink-0">
                                        <div className="flex items-baseline gap-3 mb-3">
                                            <span className={`text-5xl md:text-6xl font-black bg-gradient-to-br ${chapter.accent} bg-clip-text text-transparent`}>
                                                {chapter.id}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                            {chapter.title}
                                        </h2>
                                        <p className={`text-sm font-semibold bg-gradient-to-r ${chapter.accent} bg-clip-text text-transparent`}>
                                            {chapter.subtitle}
                                        </p>
                                    </div>

                                    {/* Chapter Content */}
                                    <div className="md:w-3/4 text-base md:text-lg text-slate-600 leading-relaxed">
                                        {chapter.content}
                                    </div>
                                </div>

                                {/* Connecting Line */}
                                {index < chapters.length - 1 && (
                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-slate-200 to-transparent" />
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl relative z-10">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl shadow-orange-200 relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                私たちと一緒に、
                                <br />
                                この時代を創りませんか？
                            </h2>
                            <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                                まずは無料説明会で、あなたの想いを聞かせてください。
                                <br />
                                無理な勧誘は一切ありません。対話から始めましょう。
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    href="/briefing"
                                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-orange-600 bg-white hover:bg-slate-50 rounded-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    無料説明会に申し込む
                                </Link>
                            </div>

                            <p className="mt-8 text-sm text-white/80">
                                経済産業省認定リスキリング講座 ・ 最大70%助成金適用可能
                            </p>
                        </div>
                    </div>

                    {/* Back to Top Link */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/academy"
                            className="text-slate-500 hover:text-orange-500 transition-colors inline-flex items-center gap-2 group"
                        >
                            <svg className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            アカデミートップに戻る
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MessagePage;
