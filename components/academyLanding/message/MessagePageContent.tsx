"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Chapter = {
  id: string;
  title: string;
  subtitle: string;
  content: ReactNode;
};

const chapters: Chapter[] = [
  {
    id: "01",
    title: "変革の波",
    subtitle: "生成AIが変えていく世界のルール",
    content: (
      <>
        <p className="mb-4">生成AIの登場により、世界のルールが根底から塗り替えられようとしています。</p>
        <p className="mb-4">かつては「安定」の象徴とされていたホワイトカラーの頂点とも言えるエンジニアやコンサルタントの仕事も、世界各地でリストラの波に直面しています。</p>
        <p>生成AIと共に働くことが当たり前の時代に急速にシフトする中で、これまでの経験やスキルは通用しなくなってきています。</p>
      </>
    ),
  },
  {
    id: "02",
    title: "共感と決意",
    subtitle: "不安の前に立って",
    content: (
      <>
        <p className="message-quote font-bold text-lg mb-4 text-slate-800">「静観していることは既に退化をしている」</p>
        <p className="mb-4">「今までのスキルではもう通用しないかもしれない」「この変化のスピードに、正直ついていけるか不安だ」</p>
        <p className="mb-4">と感じているのはむしろ正常で、決してあなただけが感じているものではありません。何を隠そうこの講座を開講する私たちも同様に、変化の早さに不安を感じています。</p>
        <p>それでも一つ確信していることがあります。それは、「静観していることは既に退化をしている」ということ。なので、私たちは動き続けることを選びました。</p>
      </>
    ),
  },
  {
    id: "03",
    title: "私たちの選択",
    subtitle: "生成AIとどう向き合うか",
    content: (
      <>
        <p className="message-quote font-bold text-lg mb-4 text-slate-800">私たち一人ひとりには、この時代をつくる責任がある</p>
        <p className="mb-4">「生成AIとの未来」を誰かに委ねることができたかもしれません。でも、私たちは自分たちもその変化に向き合い続ける道を選びました。</p>
        <p>なぜなら、私たちウィルフォワードは2011年の創業以来、「世界を一つの家族にする」というビジョンを掲げ、常に働き方・生き方のあり方を問い続け、トライしつづけてきたという歴史があるからです。</p>
      </>
    ),
  },
  {
    id: "04",
    title: "実践の記録",
    subtitle: "生成AIに取り組む日々",
    content: (
      <>
        <p className="mb-4">そこで、私たちは生成AIの活用に徹底的に取り組みました。とにかく取り組んでみたいことにはわからないことがたくさんあると思ったからです。</p>
        <p className="mb-4">これまでの事業を減速させ、人によってはストップさせ、1日中生成AIの活用方法に取り組みました。とてつもない速度でできることが増えていき、自分が魔法使いにでもなったかのような錯覚を覚えながらも、あまりの進化の早さに日々目が回るような1年でした。</p>
        <p>そして、一つ確信にたどり着きました。これは「生成AIを使ったらこんなことができる」という単なる便利ツールの範疇などではなく、<strong className="text-slate-800">「人類の未来そのものを左右する転換点になる」</strong>ということです。</p>
      </>
    ),
  },
  {
    id: "05",
    title: "本質の追求",
    subtitle: "「スキル」ではなく「思考OS」",
    content: (
      <>
        <p className="message-quote font-bold text-lg mb-4 text-slate-800">どんな環境の変化にも適応できる思考のOS</p>
        <p className="mb-4">私たちが提供すべきなのは、明日には陳腐化するかもしれない小手先の生成AI活用「スキル」だとは思いません。</p>
        <p className="mb-4">未知の課題に直面したとき、自ら問い、学び、AIと共に答えを見つけていく、まさに乗り越えていく力です。</p>
        <p>文明の進化により、剣が銃に変わり、馬が自動車に変わっていったように、時にこれまでの時代に役立った考え方を捨てて、これからの時代に必要などんな環境の変化にも適応できる思考のOSを身につける機会。</p>
      </>
    ),
  },
  {
    id: "06",
    title: "内なる発見",
    subtitle: "あなたの中にある答えを",
    content: (
      <>
        <p className="message-quote font-bold text-lg mb-4 text-slate-800">「あなたのウェルビーイングの答えは、あなたの内側にしかない」</p>
        <p className="mb-4">そして、そのOSは、私たちが与えるものでは完成しません。なぜならば、「何を望み、何に幸福を感じるか」というあなたのウェルビーイングの答えは、あなたの内側にしかないからです。</p>
        <p>だから私たちは「教える教育」だけではなく、あえて「教えない」教育、問いを投げつづける伴走者である必要があると感じています。</p>
      </>
    ),
  },
  {
    id: "07",
    title: "普遍的な力",
    subtitle: "まだ見ぬ生成AIツールにも対応できるように",
    content: (
      <>
        <p className="message-quote font-bold text-lg mb-4 text-slate-800">考え方と学び方を身につけることが最強の武器になる</p>
        <p className="mb-4">加えて、今、主流となっているChatGPTやGeminiなどのツールの使い方を覚えるのもだいじですが、それ以上に、どんな生成AIも使いこなせる「考え方」や「学び方」を身につけることの方が大事です。</p>
        <p>またマーケティングやエンジニアリングの汎用的な思考スキルと組み合わせることが、時代の主流が変化しつづけたとしても、これからの時代を生き抜くための最強の武器になると信じています。</p>
      </>
    ),
  },
  {
    id: "08",
    title: "共に歩む",
    subtitle: "同志を求めています",
    content: (
      <>
        <p className="message-quote font-bold text-lg mb-4 text-slate-800">「この時代を一緒に創っていきたい」</p>
        <p className="mb-4">私たちは、教壇に立つ「先生」ではありません。今この瞬間も挑戦を続ける現役の「実践者集団」です。</p>
        <p className="mb-4">今この瞬間に進化している世界に、今この瞬間挑んでいる私たちだからこそ、まだ教科書には載っていない「生きた知見」で、あなたの成長をブーストできるのだと確信しています。</p>
        <p>生成AIを身につけて、キャリアアップしたいという方も歓迎です。それ以上に、私たちの想いに共感し、<strong className="text-slate-800">「この時代を一緒に創っていきたい」</strong>と思っていただける方と出会えることを楽しみにしています。</p>
      </>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const LineIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
  </svg>
);

const MidChapterCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className="mt-8 md:mt-10 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12"
  >
    <p className="text-xl md:text-2xl font-bold text-slate-900 text-center">
      あなたも一歩踏み出しませんか？
    </p>
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
      <a
        href="https://lin.ee/KkMHGGv"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-[#06C755] hover:bg-[#05b54d] rounded-full transition-all duration-300 shadow-lg shadow-green-500/25"
      >
        <LineIcon />
        LINE登録
      </a>
      <Link
        href="/academy/seminars"
        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-orange-600 bg-white border border-orange-300 hover:border-orange-400 hover:bg-orange-50 rounded-full transition-all duration-300"
      >
        無料セミナー
      </Link>
    </div>
  </motion.div>
);

const MessagePageContent = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[140%] h-56 border border-white/20 rounded-[9999px] opacity-40" />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 left-0 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="text-white/80 font-bold text-sm tracking-wider uppercase mb-4">
              MESSAGE
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              メッセージ
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
              この時代に私たちが問いかける、
              <br className="hidden sm:block" />
              挑戦と共創の物語。
            </p>
            <p className="text-sm text-white/70 mt-6">
              成瀬拓也 ― AIリブートアカデミー代表
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-10 md:h-14 text-slate-50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,64 C200,120 420,0 600,48 C760,92 980,118 1200,72 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-10 md:mb-16"
          >
            <p className="text-orange-500 font-bold text-sm tracking-wider uppercase mb-2">
              MESSAGE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              私たちが届けたい8つのメッセージ
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {chapters.map((chapter, index) => (
              <motion.article
                key={chapter.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="py-8 md:py-10"
              >
                <div className={chapter.id === "04" || chapter.id === "08" ? "bg-gradient-to-br from-orange-50/50 to-amber-50/30 rounded-2xl p-6 md:p-8" : ""}>
                  <div className="mb-5">
                    <p className={chapter.id === "04" || chapter.id === "08" ? "text-orange-500 font-bold text-lg tracking-wide" : "text-orange-500 font-semibold text-sm tracking-wide"}>
                      {chapter.id}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
                      {chapter.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 mt-2">
                      {chapter.subtitle}
                    </p>
                  </div>
                  <div className="text-base md:text-lg text-slate-700 leading-loose [&_p]:mb-5 [&_p:last-child]:mb-0 [&_.message-quote]:border-l-2 [&_.message-quote]:border-orange-300 [&_.message-quote]:pl-4 [&_.message-quote]:text-slate-800">
                    {chapter.content}
                  </div>
                </div>
                {(chapter.id === "04" || chapter.id === "08") && <MidChapterCTA />}
                {index < chapters.length - 1 && (
                  <div className="pt-8 md:pt-10 flex justify-center">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-24 left-0 w-72 h-72 rounded-full bg-orange-100/70 blur-3xl" />
          <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-amber-100/60 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 md:p-12 text-center shadow-lg shadow-orange-200"
          >
            <p className="font-bold text-sm tracking-wider uppercase text-white/80 mb-3">
              NEXT STEP
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              私たちと一緒に、
              <br className="hidden sm:block" />
              この時代を創りませんか？
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
              まずは無料説明会で、あなたの想いを聞かせてください。
              <br />
              無理な勧誘は一切ありません。対話から始めましょう。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://bexn9pao.autosns.app/line"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-[#06C755] hover:bg-[#05b54d] rounded-full transition-all duration-300 shadow-lg shadow-green-500/30"
              >
                <LineIcon />
                まずはLINEで相談
              </a>
              <Link
                href="/academy/seminars"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-orange-600 bg-white border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50 rounded-full transition-all duration-300"
              >
                またはオンライン説明会に参加
              </Link>
            </div>
            <p className="text-white/80 text-sm mt-6">
              ※ 無理な勧誘は一切ございません。安心してお申し込みください。
            </p>
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/academy"
              className="text-slate-500 hover:text-orange-500 transition-colors inline-flex items-center gap-2"
            >
              アカデミートップに戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MessagePageContent;
