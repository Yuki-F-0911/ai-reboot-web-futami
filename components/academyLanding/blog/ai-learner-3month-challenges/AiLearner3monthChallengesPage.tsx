"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 学習 続かない", "ChatGPT 飽きた", "AI 挫折 乗り越え", "生成AI 続け方", "AI マンネリ 3ヶ月"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "wall1", label: "壁1：新鮮味がなくなる" },
  { id: "wall2", label: "壁2：期待と現実のギャップ" },
  { id: "wall3", label: "壁3：情報が多すぎて迷う" },
  { id: "wall4", label: "壁4：話せる人がいない孤独感" },
  { id: "wall5", label: "壁5：上達しているかわからない" },
  { id: "mindset", label: "共通のメンタリティ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

type Wall = {
  id: string;
  number: string;
  title: string;
  diagnosis: string;
  reframe: string;
  howTo: string;
  howToBody: string;
};

const walls: readonly Wall[] = [
  {
    id: "wall1",
    number: "壁1",
    title: "「新鮮味がなくなる」",
    diagnosis:
      "使い始めた最初の1〜2週間は、何でも試してみる「冒険期」です。でも3ヶ月が経つころには、気づいたら同じことしかしていない。メールの下書き、要約、翻訳。毎回同じ。新しい使い道を探す気力も薄れてきた——このパターン、多くの人が経験します。",
    reframe:
      "これは「AIに飽きた」のではなく、「AIが日常の一部になってきた」証拠です。自転車に乗れるようになった直後の「楽しい！」という感覚は薄れますが、それは乗れなくなったわけではありません。慣れた、ということです。",
    howTo: "乗り越え方：まだ試していない場面を1つ選んで実験する",
    howToBody:
      "今月、仕事や生活の中で「まだAIを使っていない場面」を1つ見つけて、そこで試してみてください。「会議の準備に使えないか」「悩みごとを相談してみたらどうか」「家事の計画を立てさせてみたらどうか」——何でも構いません。新しい場面で試すたびに、また小さな「これ使えるな」が生まれます。",
  },
  {
    id: "wall2",
    number: "壁2",
    title: "「期待と現実のギャップ」",
    diagnosis:
      "「思っていたより賢くない」「平気でウソをつく」「同じことを繰り返してもうまくいかない」——AIへの失望感は、多くの人が3ヶ月以内に経験します。最初は「夢のツール」だと思っていたのに、実際は穴だらけ。この落差が、静かにモチベーションを削ります。",
    reframe:
      "AIの限界は、確かに存在します。正直に言えば、現在のAIは「万能なアシスタント」ではなく「賢いけど信頼性の低いインターン」のようなものです。それを認めることが出発点です。ただし——使い方を変えると、劇的に変わります。",
    howTo: "乗り越え方：AIに頼む仕事の「粒度」を細かくする",
    howToBody:
      "大きなタスクをそのままAIに渡すと、曖昧な回答が返ってきます。たとえば「企画書を書いて」ではなく、「①まず目的を3行でまとめて」「②次に課題を箇条書きにして」「③最後に解決策を2案出して」と3つに分解してから渡す。粒度を小さくするだけで、使えない回答が激減します。これはプロンプトの「型」を身につけると自然にできるようになります。",
  },
  {
    id: "wall3",
    number: "壁3",
    title: "「情報が多すぎて何を学べばいいか迷う」",
    diagnosis:
      "毎週のように「新しいAIが登場」「○○の革命的な使い方」「これを知らないと乗り遅れる」という情報が流れてきます。何を学べばいいか迷っているうちに、何もしない日が続く。情報に疲れて、AIから距離を置き始める——この「情報疲れ」も3ヶ月後の壁として多く報告されています。",
    reframe:
      "「乗り遅れている感」は、ほぼ全員が感じています。AI業界は更新速度が異常に早く、プロでも全部は追えていません。あなたが感じている「置いていかれ感」は、あなたが鈍感なのではなく、変化のスピードが速すぎるだけです。",
    howTo: "乗り越え方：「今の自分の仕事」に限定してAIを使う",
    howToBody:
      "新しいツール情報は週1回だけ、決まったタイミングで見ると決めましょう。それ以外の時間は「今の自分の仕事でAIをどう使うか」だけに集中します。最新のGPT-5が出ようが、新しいMCPが話題になろうが、「今週の自分の仕事で何か1つ試せるか」だけを問う。この絞り込みだけで、学習の密度が大きく上がります。",
  },
  {
    id: "wall4",
    number: "壁4",
    title: "「周りにAIの話ができる人がいない孤独感」",
    diagnosis:
      "AIを使い始めて「これすごい！」と思ったのに、職場では「ふーん」で終わる。「先週こんな使い方をしたんだけど」と話したら引かれた。AIの話ができる人が周りにいない——この孤独感は、想像以上にモチベーションを奪います。成功体験を分かち合えない人は、続けにくくなります。",
    reframe:
      "あなたの職場が遅れているのではなく、AI活用が日常になっている人はまだ少数派です。でも同じ悩みを持つ人は、確実に存在します。ただし、あなたの職場にはいないかもしれない——それだけの話です。",
    howTo: "乗り越え方：オンラインコミュニティで「同じフェーズ」の仲間を見つける",
    howToBody:
      "AI学習が続く人の多くに共通しているのは、「同じフェーズにいる仲間がいる」ことです。完璧に使いこなしている人より、「自分と同じくらいの人」が近くにいることがモチベーションになります。AIリブートアカデミーでは、始めたばかりの人から3ヶ月目の人まで、同じ悩みを持つ仲間が集まるコミュニティがあります。「孤独にやめてしまう」より、「仲間と話しながら続ける」——この違いは思っているより大きいです。",
  },
  {
    id: "wall5",
    number: "壁5",
    title: "「上達しているのかわからない」",
    diagnosis:
      "ゲームなら数値やレベルで「上達」がわかります。英語なら試験で測れます。でもAIスキルは、どこで「使えている」と判断すればいい？「使っているつもりだけど、本当に上手くなっているの？」という不安が、3ヶ月後に多くの人を悩ませます。",
    reframe:
      "AI活用は「テスト」で測れるものではありません。でも、確かに上達している証拠はあります。3ヶ月前と比べて、「使える場面の数」は増えていませんか？「最初の1回で使えるプロンプトの質」は上がっていませんか？「AIなしでは難しかった仕事」が1つでもあれば、それが答えです。",
    howTo: "乗り越え方：「AIなしでは難しかった仕事」を月1つ記録する",
    howToBody:
      "毎月1回、「今月AIを使って達成できたこと」を1行だけメモしておきましょう。「提案書の初稿を30分で書けた」「苦手な断りメールをAIに手伝ってもらってうまく送れた」——どんな小さなことでも構いません。3ヶ月後には3つのメモが、6ヶ月後には6つが溜まります。それが、あなた自身のAI活用の実績集になります。数字より、「具体的な場面の記憶」が一番の自信になります。",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line?src=blog&slug=ai-learner-3month-challenges&bonus=bonus06";

export default function AiLearner3monthChallengesPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIを使い始めた人が3ヶ月後に直面する5つの壁" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="AIを使い始めた人が3ヶ月後に直面する5つの壁と、それぞれの乗り越え方【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIを使い始めた人が3ヶ月後に直面する5つの壁と、それぞれの乗り越え方【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月23日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI、使い始めたときの興奮——今も続いていますか？
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            ChatGPTを初めて触ったあの日。「なんでもできる」「仕事が変わる」という感覚。でも3ヶ月が経ったとき、ふと気づいたら最初の1週間となんとなく使っているだけになっていた。返ってくる答えもどこかマンネリ。新しい使い道を試す気持ちも薄れてきた……。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            これは<strong>意志力の問題でも、あなたのせいでもありません</strong>。AI学習には、3ヶ月後に多くの人が経験する「特有のパターン」があります。この記事では、それを正直に話します。5つの壁と、それぞれの乗り越え方です。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AI学習を始めたばかりの方は
          <Link href="/academy/blog/ai-first-3days-action-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            最初の3日間アクションガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-study-continue-habits" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI習慣化の7つのコツ
          </Link>
          も参考になります。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <strong>壁1「新鮮味がなくなる」</strong>→ 慣れた証拠。まだ試していない場面を1つ選んで実験する
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>壁2「期待と現実のギャップ」</strong>→ AIの限界を認め、タスクを3つに分解してから渡す
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>壁3「情報が多すぎて迷う」</strong>→ 「今の仕事」に限定。新ツール情報は週1回だけ見る
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>壁4「話せる人がいない孤独感」</strong>→ 同じフェーズの仲間がいるコミュニティへ
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>壁5「上達しているかわからない」</strong>→ 「AIなしでは難しかった仕事」を月1つ記録する
            </li>
            <li className="pl-1 marker:text-gray-500">3ヶ月は「卒業」ではなく「日常化のスタート」地点</li>
          </ul>
        </motion.section>

        {/* 5つの壁 */}
        {walls.map((wall, index) => (
          <motion.section
            key={wall.id}
            id={wall.id}
            className="mt-14 scroll-mt-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-will-primary px-4 py-1 text-sm font-bold text-white">
                {wall.number}
              </span>
              <h2 className="text-2xl font-bold text-gray-900">{wall.title}</h2>
            </div>

            <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-600">こんな状態になっていませんか？</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">{wall.diagnosis}</p>
            </div>

            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-semibold text-blue-900">捉え直すと——</p>
              <p className="mt-3 text-sm leading-7 text-blue-900">{wall.reframe}</p>
            </div>

            <div className="mt-4 rounded-xl border-l-4 border-will-primary bg-white p-5 shadow-subtle">
              <p className="text-base font-bold text-will-primary">{wall.howTo}</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">{wall.howToBody}</p>
            </div>

            {/* 壁4の後にMidArticleCTA */}
            {index === 3 && (
              <motion.div
                className="mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={sectionReveal}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <MidArticleCtaBox slug="ai-learner-3month-challenges" />
              </motion.div>
            )}
          </motion.section>
        ))}

        {/* 共通のメンタリティと締め */}
        <motion.section
          id="mindset"
          className="mt-14 scroll-mt-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">
            3ヶ月は「卒業」ではなく「日常化のスタート」
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            5つの壁を並べてきましたが、気づきましたか——これらはすべて「AIが日常の一部になりかけている」からこそ起きる壁です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            まったく使っていない人には、「マンネリ」は起きません。「期待と現実のギャップ」も感じません。「孤独感」も「上達感のなさ」も、使い続けているからこそ生まれる悩みです。
          </p>
          <div className="mt-6 rounded-xl border-2 border-will-primary/20 bg-will-lighter/30 p-6">
            <p className="text-base font-bold text-gray-900">マンネリを感じているということは——</p>
            <p className="mt-3 text-base leading-8 text-gray-700">
              AIがあなたの生活の中に<strong>確かに入り込んだ</strong>ということです。あとは「続ける技術」を少し整えるだけです。
            </p>
            <p className="mt-4 text-base leading-8 text-gray-700">
              「続ける技術」を持っている人が、AI時代に最も強い人になります。天才的な使い方をする人より、地道に毎日使い続けている人が、半年後に大きな差をつけます。
            </p>
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            3ヶ月後のあなたは、まだスタートラインにいます。でも3ヶ月前のあなたとは、すでに違う場所に立っています。その事実を、一度だけ、ちゃんと認めてあげてください。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            学習の段階別の指針については
            <Link href="/academy/blog/ai-learning-roadmap-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI学習ロードマップ2026
            </Link>
            もあわせて参考にしてください。
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：壁は「やめるサイン」ではなく「日常化のサイン」
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを使い始めて3ヶ月後に感じる壁は、挫折のサインではありません。それは「AIが当たり前になりかけている」からこそ生まれる壁です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">新鮮味がなくなったら——まだ試していない場面を1つ選ぶ</li>
            <li className="pl-1 marker:text-gray-500">期待と現実のギャップを感じたら——タスクを細かく分解して渡す</li>
            <li className="pl-1 marker:text-gray-500">情報に疲れたら——「今の仕事」に絞り、新情報は週1回だけ</li>
            <li className="pl-1 marker:text-gray-500">孤独感を感じたら——同じフェーズの仲間がいる場所を探す</li>
            <li className="pl-1 marker:text-gray-500">上達感がないなら——月1つ「AIで達成できたこと」を記録する</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            今日できることはただ一つ：この5つの中から「自分に当てはまる壁」を1つだけ選んで、今週試してみてください。それだけで、3ヶ月後が変わります。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="AIリブートのLINEで、3ヶ月目の壁を一緒に乗り越える仲間と出会う"
            description="「孤独にAIを学んでいる」「続け方がわからなくなってきた」——そんな方のために、AIリブートのLINEでは週1本のAI学習コンテンツとコミュニティ情報を配信しています。同じフェーズの仲間と繋がれる場所を、まず一歩。登録無料。"
            buttonLabel="LINEで仲間と繋がる（無料）"
            href={lineUrl}
          />
        </motion.section>

        {/* アカデミーCTA */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「続ける仕組み」がある環境で学ぶ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            一人でAIを学ぶと、どうしても「壁4（孤独感）」と「壁5（上達感のなさ）」が繰り返されます。AIリブートアカデミーでは、同じ悩みを持つ仲間と一緒に学ぶ環境を用意しています。「続ける仕組み」を自分の外に持つことが、3ヶ月目の壁を超える最短ルートです。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/ai-study-continue-habits"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AI習慣化の7つのコツを読む
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-first-3days-action-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI入門、最初の3日間でやるべき5つのこと【今日から始める完全アクションガイド2026】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-study-continue-habits" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを続けるための習慣デザイン｜初心者が3ヶ月後も使い続けられる7つのコツ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-3month-journey" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを3ヶ月使い続けたら、こんな変化が起きた
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-learning-roadmap-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI学習ロードマップ2026：ゼロから100日間で仕事に使えるようになるまでの完全地図
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-try-fail-breakthrough-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを何度試しても続かなかった私が、やっと使いこなせた理由【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-value-not-felt-honest-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを試したけど、正直よくわからなかった人へ：本当の価値に気づく3つの転換点
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-results-gap-honest-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIの「期待と現実」のギャップを正直に話す
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
