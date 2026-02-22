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

const keywordTags = ["AI 挫折 続かない 対策", "ChatGPT 使い続けられない", "生成AI 初心者 続け方", "AI学習 モチベーション", "生成AI 習慣化"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "my-story", label: "何度試しても続かなかった、私の話" },
  { id: "fail-patterns", label: "続かなかった3つのパターン" },
  { id: "turning-points", label: "やっと使いこなせた5つの転換点" },
  { id: "real-scenes", label: "実際に変わった具体的なシーン" },
  { id: "why-environment", label: "一人でやるのが難しい理由" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const failPatterns = [
  {
    number: "01",
    title: "「とりあえず話しかけてみたら、普通の回答が来ただけ」問題",
    description:
      "ChatGPTを開いて「こんにちは」「おすすめの本を教えて」と入力した。返ってきたのは、確かに流暢な文章だった。でも、それだけだった。「Googleと何が違うんだろう」と感じて、そのままアプリを閉じた。この経験、多くの人に共通しています。AIは話しかければ何かを返してくれます。でも「何がすごいのか」がわからないまま使い始めると、すごさに気づけません。まるで高機能な電子レンジを「温め」だけに使い、他の機能を知らずに「普通じゃん」と判断するようなものです。",
  },
  {
    number: "02",
    title: "「プロンプトが難しそう」で最初のハードルが高すぎた",
    description:
      "「AIをうまく使うにはプロンプトが大事」「プロンプトエンジニアリングを学ぶべき」——そういう情報を目にして、「ちゃんと学んでから使おう」と思いました。でも、プロンプトの書き方記事を読み始めると内容が難しくて、そのうち「勉強してから使う→勉強が面倒→使わなくなる」というループに入りました。これは逆順です。プロンプトは使いながら身につくもので、使う前に完璧に習得するものではありません。「まず使う、うまくいかなかったら直す」——このサイクルが正解なのに、勉強を先にしようとして止まってしまうのです。",
  },
  {
    number: "03",
    title: "「何を聞けばいいかわからなくて、結局Googleで調べてしまう」",
    description:
      "使いたい気持ちはあるのに、ChatGPTを開くと「えっと、何を聞けば…」と固まってしまう。10秒考えて答えが出なければ、もうGoogleに戻っていました。これは「AIへの質問の立て方」を知らないからではなく、「今の自分の困りごとをAIに渡す」という習慣がまだないからです。Googleは検索キーワードを入れるものという感覚が染み付いているので、文章で「相談する」感覚に切り替わるのに少し時間がかかります。この切り替えができた瞬間に、急にAIが使いやすくなります。",
  },
] as const;

const turningPoints = [
  {
    number: "01",
    title: "「AIは道具。使う目的を先に決める」",
    body: "「AIをうまく使えるようになりたい」という目標を持っていたとき、ずっとうまくなれませんでした。転換したのは「明日の朝会議の議事録をAIで仕上げる」という具体的な目的を先に立てたときです。道具は使い方が決まって初めて意味を持ちます。ハンマーを使う前に「釘を打つ」という目的があるように、AIも「これに使う」が先です。「AIを練習する」ではなく「今日のこれにAIを使う」——この順番に変えただけで、使用頻度が劇的に変わりました。",
  },
  {
    number: "02",
    title: "「最初は1つのことに絞る（欲張らない）」",
    body: "「ChatGPT、Claude、Gemini、全部試して比較しよう」と思っていた時期があります。結果、どれも中途半端に触っただけで、どれも自分の使い方が定まりませんでした。今思えば当然で、道具の使い方を3つ同時に習得しようとしたら、どれも身につかない。最初の1ヶ月はChatGPTだけ、用途も「ビジネスメールの下書き」だけに絞る。そう決めてから初めて、「こういう指示の仕方をするとうまくいく」という手応えが生まれました。1つを深く使えるようになると、他のツールの使い方も応用できます。",
  },
  {
    number: "03",
    title: "「完璧な結果を期待しない（7割でOK）」",
    body: "AIの回答を読んで「なんかちょっと違う」「もう少し私のニュアンスが入ってほしい」と感じて、使うのをやめていた時期がありました。でも考えてみれば、新入社員にお願いした資料のたたき台に「完璧を求めない」のと同じです。AIは「完成品を出す機械」ではなく「たたき台を瞬時に用意してくれる助手」です。7割の回答をもらって、残り3割を自分で手直しする——この役割分担が決まったとき、毎回の「期待外れ感」がなくなりました。7割で受け取る習慣が、AIを使い続ける鍵です。",
  },
  {
    number: "04",
    title: "「毎日5分だけ使う習慣をつける」",
    body: "「毎日使おう」という漠然とした決意は、3日で崩れました。「今日は忙しいから明日でいいや」がすぐ始まるからです。変えたのは、習慣に具体的な時間と場所を紐づけること。「朝、コーヒーを飲みながらAIに今日の優先タスクを3つ整理してもらう。5分だけ」。これだけです。5分という制限があるから、完璧を目指さなくていい。コーヒーというトリガーがあるから、思い出せる。この小さな仕組みが機能し始めたとき、「使わない日」がほとんどなくなりました。",
  },
  {
    number: "05",
    title: "「仲間や体系的な学習環境を持つ」",
    body: "一人で試行錯誤していたとき、何度かAIに失敗して「やっぱり自分には無理なのかも」と感じました。でも、同じようにAIを学んでいる仲間がいる環境に入ったとき、状況が変わりました。「自分だけが続けられていないわけじゃない」「こういう使い方があるんだ」「この段階でつまずくのは普通」——その安心感と情報量が、自分一人では越えられなかった壁を越えさせてくれました。一人でやると感情の波に飲み込まれますが、仲間がいると客観的に進められます。",
  },
] as const;

const realScenes = [
  {
    title: "週報作成が30分から5分になった日",
    body: "毎週金曜の夕方、週報を書くのに30分かかっていました。何を書くか考えて、文章を整えて、誤字を直して——。ある週、試しにその週の出来事をメモ書きでAIに渡して「これをもとに週報を書いて」と頼んでみました。返ってきた文章は8割そのまま使えるクオリティで、残り2割を直して完成。5分でした。「あれ、これ毎週やれるじゃないか」と気づいた瞬間、AIが「特別なもの」から「当たり前の道具」に変わりました。",
  },
  {
    title: "断りにくいメールを頼んだら、自分より上手かった",
    body: "取引先への断りのメール。「丁重に、でも明確に」という微妙なバランスが必要で、毎回悩んでいました。「取引先への断りのメールを丁寧に書いてほしい。背景はこれ」とAIに渡したら、3パターンの文章が返ってきました。1つ目を読んで「私より上手い」と素直に思いました。自分のメールより角が立たず、言いたいことが明確で、読後感もいい。以来、「迷うメール」はすべてAIに下書きを頼むようになりました。",
  },
  {
    title: "会議の録音をテキスト化して要約してもらった朝",
    body: "1時間の会議録音をAIにテキスト化・要約してもらいました。手作業なら1時間かかる作業が10分で終わり、しかも「決定事項」「アクションアイテム」「次回確認事項」に整理された形で出てきました。上司に送ったら「これわかりやすいね」と言われた。その日から、会議の後には必ずAIで要約するようになりました。",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line?src=blog&slug=ai-try-fail-breakthrough-guide";

export default function AiTryFailBreakthroughGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIを何度試しても続かなかった私が、やっと使いこなせた理由" },
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
                title="AIを何度試しても続かなかった私が、やっと使いこなせた理由【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIを何度試しても続かなかった私が、やっと使いこなせた理由【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月23日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ChatGPT、Gemini、Claude——「すごい」と聞くたびに試してきた。最初の数回は感動した気がした。でも気づいたら使わなくなっている。また新しいAIが出たら試して、また使わなくなる。そのループを何周もしてきた。
            <br />
            <br />
            「自分にはAIは向いていないのかもしれない」と思いかけたこともあります。でも実は、問題はAIでも、自分の能力でもありませんでした。<strong>「使い始め方」と「続け方の設計」</strong>が、少しずれていただけでした。
            <br />
            <br />
            この記事では、私自身がAIを使いこなせるようになるまでに経験した失敗パターンと、状況が変わった5つの転換点を正直にお伝えします。「また続かないかもしれない…」と感じている方に、少しでも届けばと思います。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AIの基礎から学びたい方は
          <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIとは？初心者向け解説
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          もあわせてどうぞ。
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
            <li className="pl-1 marker:text-gray-500">AIが続かないのは「能力の問題」ではなく「使い始め方と設計の問題」</li>
            <li className="pl-1 marker:text-gray-500">続かなかった3パターン：感動できなかった・勉強から始めた・何を聞けばいいかわからなかった</li>
            <li className="pl-1 marker:text-gray-500">転換点は「目的を先に決める」「1つに絞る」「7割で受け取る」「5分ルール」「仲間と学ぶ」</li>
            <li className="pl-1 marker:text-gray-500">週報・メール・会議要約など「繰り返す仕事」から使い始めると変化が早い</li>
            <li className="pl-1 marker:text-gray-500">一人では感情の波で止まりやすい。体系的な環境と仲間が継続の鍵</li>
          </ul>
        </motion.section>

        {/* 何度試しても続かなかった、私の話 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="my-story" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            何度試しても続かなかった、私の話
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTが話題になった頃、私もすぐに使い始めました。最初の数回は確かに「すごい！」と思いました。文章を書いてくれる。質問に答えてくれる。でも、1週間も経たないうちに開く頻度が落ちていきました。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            その後、Geminiが出て、Claudeが出て、そのたびに「今度こそ使いこなしてみよう」と試しました。でも結果はいつも同じ。最初の数日だけ使って、気づいたら開かなくなっている。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-800">あのとき感じていたこと、正直に書くと</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700">
              <li>「使ってみたけど、特別すごいとは感じなかった」</li>
              <li>「プロンプトとかちゃんと勉強してからじゃないと意味ないのかな」</li>
              <li>「結局Googleで調べたほうが早い気がする」</li>
              <li>「自分はITが苦手だから向いてないのかも」</li>
            </ul>
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            今振り返ると、これらはすべて「誤解」でした。AIが使いこなせなかったのは、私のITリテラシーのせいでも、AIが難しいせいでもありませんでした。使い始め方が少しだけずれていただけです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            その「ずれ」に気づいた後、AIは急に「使えるもの」になりました。今では仕事で毎日欠かさず使っています。何が変わったのかを、次から正直に話します。
          </p>
        </motion.section>

        {/* 続かなかった3つのパターン */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="fail-patterns" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            続かなかった3つのパターン
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            私が経験した失敗と、同じように「続かない」という声を聞いてきた中で、パターンが3つに絞られてきました。あなたが当てはまるものがあれば、そこに「続けられなかった原因」のヒントがあります。
          </p>
          <div className="mt-8 space-y-6">
            {failPatterns.map((item) => (
              <section key={item.number} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-4">
                  <span className="min-w-[2rem] text-2xl font-bold text-will-primary/40">{item.number}</span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">この3パターンに共通していること</p>
            <p className="mt-3 text-sm leading-7 text-blue-900">
              どれも「AIへの接し方の設計」の問題であって、あなたの能力や適性とは無関係です。使い方の入り口が少しだけずれていた。それだけです。逆に言えば、<strong>入り口を変えれば、誰でも変わります。</strong>
            </p>
          </div>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-try-fail-breakthrough-guide" />
        </motion.section>

        {/* 転換点になった5つの考え方 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="turning-points" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            やっと使いこなせた、5つの転換点
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「続けられるようになった」転換点は、スキルでも技術でもなく、<strong>考え方のシフト</strong>でした。以下の5つは、どれも劇的な行動変化ではなく、「見方を少し変えた」だけのことです。
          </p>
          <div className="mt-8 space-y-5">
            {turningPoints.map((item) => (
              <section key={item.number} className="rounded-xl border-l-4 border-will-primary bg-white p-5 shadow-subtle">
                <div className="flex items-start gap-4">
                  <span className="min-w-[2rem] text-2xl font-bold text-will-primary/40">{item.number}</span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            この5つのうち、どれか1つでも「そういうことか」と思えるものがあれば、それがあなたの変化の起点になります。全部を同時にやろうとしなくていい。一番刺さったものから試してみてください。
          </p>
        </motion.section>

        {/* 実際に変わった具体的なシーン */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="real-scenes" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            実際に変わった、具体的なシーン
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「考え方が変わった」だけでは実感が湧かないと思うので、具体的に「どんな場面でAIが使えるようになったか」をお伝えします。特別なことではなく、日常の仕事での話です。
          </p>
          <div className="mt-8 space-y-6">
            {realScenes.map((item) => (
              <section key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-orange-200 bg-orange-50 p-5">
            <p className="text-sm font-semibold text-orange-900">共通していること</p>
            <p className="mt-3 text-sm leading-7 text-orange-900">
              3つのシーンに共通しているのは「<strong>繰り返す作業</strong>」に使ったことです。週報・メール・会議要約——毎週・毎回必ずやる仕事にAIを組み込むと、使用頻度が自然に上がります。「特別なときに使う道具」ではなく「いつもある道具」になることが、習慣化の鍵です。
            </p>
          </div>
        </motion.section>

        {/* 一人でやるのが難しい理由 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-environment" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            一人でやるのが難しい理由と、体系的な環境の価値
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            5つの転換点を読んで「わかった、明日からやってみる」と思った方も多いと思います。でも、もう一つだけ正直に伝えたいことがあります。<strong>一人で続けるのは、思っているより難しい</strong>、という話です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            私自身、転換点に気づいた後も、しばらく一人でやっていました。うまくいく日もあれば、「今日はうまくいかなかった。やっぱり自分には向いていないのかも」と感じる日もある。そういう感情の波が来たとき、一人だと立て直せないことがありました。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
              <h3 className="text-sm font-bold text-gray-900">一人で続けるときの壁</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700">
                <li>• うまくいかなかった時に「自分のせい」と思いがち</li>
                <li>• 正解の使い方がわからず試行錯誤が非効率</li>
                <li>• 成功体験を共有する相手がいなくてモチベーションが続かない</li>
                <li>• 情報が多すぎてどれを信じていいかわからない</li>
              </ul>
            </div>
            <div className="rounded-xl border border-will-primary/20 bg-will-lighter p-5">
              <h3 className="text-sm font-bold text-gray-900">仲間・環境があるときの変化</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700">
                <li>• うまくいかなかった原因を一緒に考えてもらえる</li>
                <li>• 他の人の成功事例から自分のヒントを得られる</li>
                <li>• 「この段階でつまずくのは普通」と客観的にわかる</li>
                <li>• 体系的なカリキュラムで遠回りしない</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIリブートアカデミーを選んだ方々の声でも、「一人でYouTubeやネット記事で学んでいたけど、体系的に学べる環境に入ったら急に伸びた」という内容を多く聞きます。知識の量より、学ぶ構造と仲間の存在が、続ける力を生んでいます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「もう一度ちゃんとやり直したい」「今度こそ続けたい」という方は、体系的な学習環境を検討してみてください。一人で抱え込まない、ということが、意外と最大の近道になります。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/blog/ai-study-continue-habits"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AI習慣化の7つのコツを読む
            </Link>
          </div>
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
            まとめ：「続かなかった」は、あなたのせいじゃない
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを何度試しても続かなかった経験は、失敗ではありません。「向いていないのかも」と感じる必要もありません。続かなかった理由のほとんどは、使い始め方のデザインの問題です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">3つの失敗パターン（感動できなかった・勉強から始めた・何を聞けばいいかわからなかった）はすべて「設計の問題」</li>
            <li className="pl-1 marker:text-gray-500">5つの転換点は技術ではなく「見方のシフト」——今日から試せる</li>
            <li className="pl-1 marker:text-gray-500">週報・メール・会議要約など「繰り返す作業」から使い始めるのが最速</li>
            <li className="pl-1 marker:text-gray-500">一人で感情の波に飲まれないために、仲間と体系的な環境を持つことが有効</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            今日から試せることは、たった一つ：「今日の仕事で面倒くさいと思っている作業を1つ、AIに頼んでみる」こと。完璧でなくていい。7割の結果で十分です。その1回が、ループを抜け出す最初の一歩になります。
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
            title="AIリブートのLINEを追加して、30日学習プランを受け取る"
            description="「何から始めればいいか」「自分に合った使い方がわからない」——そんな方のために、AIリブートのLINEでは30日学習プランテンプレートを配布しています。週1本のAI学習コンテンツも届きます。登録無料。"
            buttonLabel="LINEで30日学習プランを受け取る（無料）"
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
            今度こそ続けたい方へ——体系的な環境で学ぶ選択肢
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            一人でやって何度か挫折してきたなら、環境を変えることが最短ルートになることがあります。AIリブートアカデミーでは、生成AI活用力の習得だけでなく、仲間と一緒に学ぶ環境、体系的なカリキュラム、そして「続ける仕組み」まで含めて設計しています。
            「今度こそ本気でAIを使いこなしたい」という方に向けた内容です。一度のぞいてみてください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/blog/ai-learning-roadmap-2026"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AI学習ロードマップ2026を読む
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けにわかりやすく解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-study-continue-habits" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを続けるための習慣デザイン｜初心者が3ヶ月後も使い続けられる7つのコツ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-learning-roadmap-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI学習ロードマップ2026：ゼロから100日間で仕事に使えるようになるまでの完全地図
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-3month-journey" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを3ヶ月使い続けたら、こんな変化が起きた
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-value-not-felt-honest-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを試したけど、正直よくわからなかった人へ：本当の価値に気づく3つの転換点
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
