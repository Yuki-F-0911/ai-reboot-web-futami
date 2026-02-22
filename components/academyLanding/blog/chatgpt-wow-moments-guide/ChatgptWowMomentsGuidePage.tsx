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

const keywordTags = ["ChatGPT すごい 体験", "生成AI 感動", "AI 初心者 体験談", "ChatGPT びっくりした", "AI 何がすごい"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-no-wow", label: "感動できないのはあなたのせいじゃない" },
  { id: "ten-moments", label: "ChatGPTに感動した10の瞬間" },
  { id: "ng-patterns", label: "「感動できない」人がやりがちなNG使い方" },
  { id: "try-now", label: "今すぐ試せる「感動体験」再現プロンプト集" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ：発見の喜びは、試した人だけのもの" },
  { id: "related-links", label: "関連リンク" },
] as const;

const wowMoments = [
  {
    id: "moment-01",
    number: "01",
    title: "「あのメール、3分で書いてくれた」",
    scene:
      "取引先へのお断りメールを書かなければならないのに、言葉が出てこない。ためらいながらChatGPTに「3年付き合いのある取引先への納期延期のお詫びメール、角が立たない文面で」と入力すると、30秒で完成形が返ってきた。",
    voice: "「え、これそのまま使えるじゃん……！」と思わず声に出た瞬間でした。メールの下書きに30分かかっていた作業が、確認・修正込みで5分に。（30代・営業職）",
    prompt: "あなたはビジネスメールの専門家です。【状況：取引先へ今月中の納品が難しくなった旨をお詫びする】メールを、誠実で丁寧なトーンで書いてください。相手は3年以上付き合いのある会社です。",
  },
  {
    id: "moment-02",
    number: "02",
    title: "「難しい書類の意味を5歳向けに説明してくれた」",
    scene:
      "保険の更新書類に「特定疾病保険料払込免除特則」と書いてある。何度読んでも意味がわからない。ChatGPTに「この言葉を5歳の子どもでもわかるように説明して」と入力してみた。",
    voice: "「もし体が本当に悪くなってしまったとき、お金を払わなくてもいいよって約束のこと」——この説明で、スッと頭に入ってきた。難しい言葉を誰でもわかる言葉に変えてくれる能力がすごい。（40代・主婦）",
    prompt: "「特定疾病保険料払込免除特則」を、保険の知識が全くない人にもわかるように、日常の言葉だけを使って説明してください。",
  },
  {
    id: "moment-03",
    number: "03",
    title: "「アイデア出しが自分より速くて多い」",
    scene:
      "部署の新しい研修テーマを考えなければならず、思い浮かばない。ChatGPTに「チームのモチベーション向上につながる社内研修テーマを10個考えて」と入力したら、10秒で10案が返ってきた。",
    voice: "自分では3つくらいしか思い浮かばなかったのに、10案どころか求めれば30案でも出てくる。しかも各案の理由も説明してくれて。AIはアイデアの量産機だと実感した。（30代・人事担当）",
    prompt: "チームのモチベーションを高めるための社内研修テーマを10個提案してください。各テーマについて、実施形式（ワークショップ/講義/グループワーク等）と期待できる効果も簡単に教えてください。",
  },
  {
    id: "moment-04",
    number: "04",
    title: "「英語メールを即翻訳・ニュアンスまで改善」",
    scene:
      "海外の取引先から英語でメールが届いた。Google翻訳で訳したが、なんとなくニュアンスがつかめない。ChatGPTに「このメールの日本語訳と、相手が伝えたいことの要点を教えて」と依頼してみた。",
    voice: "単なる翻訳じゃなく、「このメールの真意は〇〇だと思います」と背景まで解説してくれた。しかも返信文まで英語で作ってくれて。英語が苦手な私でも、海外対応が怖くなくなった。（40代・貿易事務）",
    prompt: "この英語のメールを日本語に翻訳し、相手の要点と感情トーン（丁寧/急いでいる/不満など）を分析してください。また、日本語で作成した返信文を英語に翻訳してください。",
  },
  {
    id: "moment-05",
    number: "05",
    title: "「複雑な問題をステップ別に整理してくれた」",
    scene:
      "プロジェクトが炎上しかかっていて、何から手をつければいいかわからない。混乱した状況をChatGPTに箇条書きで伝えたら、優先順位付きの対処ステップが返ってきた。",
    voice: "自分の頭の中にあるごちゃごちゃを整理するのが苦手なんですが、AIに話し込んだら「3日以内にやること」「1週間以内にやること」「後回しでいいこと」に分類してくれた。思考の整理コーチみたいな使い方ができると知った。（30代・プロジェクトマネージャー）",
    prompt: "以下の状況について、今日〜3日以内・1週間以内・それ以降に分けて、優先順位付きのアクションプランを作ってください：【状況を具体的に入力】",
  },
  {
    id: "moment-06",
    number: "06",
    title: "「自分の話を聞いて、思考整理に付き合ってくれた」",
    scene:
      "転職を考えているが、決断できずにいる。友人に話すのも気が引けて、ChatGPTに「転職すべきか迷っている。自分の状況を話していいか？」と打ち込んだ。そこからしばらく、AIと対話が続いた。",
    voice: "否定もせず、焦らせもせず、「それは具体的にどういう状況ですか？」と質問を返してくれた。カウンセリングみたいな感覚。最終的に自分が本当に何に悩んでいるかが見えてきた。（20代・会社員）",
    prompt: "私は【状況を入力】で悩んでいます。急かさずゆっくりと対話しながら、私が自分の考えを整理するのを手伝ってください。まず、私の状況についていくつか質問してください。",
  },
  {
    id: "moment-07",
    number: "07",
    title: "「プログラミングを知らなくても、アプリのアイデアを形にしてくれた」",
    scene:
      "「こんなアプリがあったらいいな」というアイデアがあるが、ITの知識はゼロ。ChatGPTに「こういうアプリを作りたいんだけど、どうすればいい？どんな技術が必要？費用は？」と聞いた。",
    voice: "技術用語はわからなかったけど、「ノーコードツールのBolt.newで試作できますよ」と具体的なツールを教えてくれた上に、「まずこういう機能から作り始めるといい」という順番まで提示してくれた。アイデアが地に足のついた計画に変わった感じがした。（30代・アイデアはあるけど行動できないタイプ）",
    prompt: "私がアイデアを持つアプリについて相談したいです。【アイデアを入力】。プログラミング知識ゼロでも実現できる方法、使うべきツール、かかる費用の目安、最初のステップを教えてください。",
  },
  {
    id: "moment-08",
    number: "08",
    title: "「資料の要約が秒でできた」",
    scene:
      "会議前に10ページのPDFを読まなければならないのに時間がない。ChatGPTにPDFを貼り付けて「この資料の要点を箇条書き5つで教えて」と入力した。",
    voice: "3秒で要点が返ってきた。しかも「特に注意すべき点」と「背景情報」まで補足してくれた。この機能だけで月$20の価値があると思った。（40代・管理職）",
    prompt: "この文書の要点を箇条書き5つでまとめ、特に注意すべき重要なポイントと、読み飛ばせる部分を教えてください。\n\n【文書の内容を貼り付け】",
  },
  {
    id: "moment-09",
    number: "09",
    title: "「苦手な敬語メールをスムーズに変換してくれた」",
    scene:
      "敬語が苦手で、上司や目上の人へのメールに毎回時間がかかる。カジュアルな文章をそのまま貼り付けて「ビジネス敬語で書き直して」と頼んでみた。",
    voice: "「ちょっと待ってください」が「少々お待ちいただけますでしょうか」に。「確認しておきます」が「確認のうえご連絡差し上げます」に。こんな変換を一瞬でやってくれる。敬語コンプレックスがなくなった。（20代・社会人2年目）",
    prompt: "以下のカジュアルな文章を、社外の方や目上の人に送れるビジネス敬語の文章に書き直してください。意味は変えずに、丁寧さのレベルは「一般的なビジネスメール」程度でお願いします。\n\n【カジュアルな文章を入力】",
  },
  {
    id: "moment-10",
    number: "10",
    title: "「学習計画を自分に合わせて作ってくれた」",
    scene:
      "英語を勉強したいが、何から始めればいいかわからない。自分のレベル・目標・使える時間をChatGPTに伝えたら、週単位のスケジュールが返ってきた。",
    voice: "「TOEIC550点で、1日30分しか取れなくて、半年後のビジネス英語を目指している」という条件を伝えたら、週ごとのテーマと具体的な教材・勉強法まで設計してくれた。市販の学習プランより自分に合ってると感じた。（30代・英語学習者）",
    prompt: "私の【目標を入力】という目標に向けた学習計画を作ってください。条件：現在のレベルは【レベルを入力】、1日使える時間は【時間】分、期間は【期間】。毎週何をやればいいか、具体的な教材や方法も含めて週単位で計画してください。",
  },
] as const;

const ngPatterns = [
  {
    title: "NG①：検索エンジンの代わりに使う",
    bad: "「東京の天気は？」「Pythonとは何ですか？」のような一問一答型の使い方。",
    good: "「私はPythonを学びたい完全な初心者です。最初の2週間で何を学べばいいですか？独学で使えるリソースも教えてください」のように、自分の状況と目的を組み合わせる。",
  },
  {
    title: "NG②：1文だけで終わらせる",
    bad: "「メールを書いて」とだけ入力して、出てきた結果に満足できずやめてしまう。",
    good: "「もう少し丁寧に」「結論を先に持ってきて」「もっと短く」と追加指示を出して、対話を続ける。ChatGPTはやり取りを重ねるほど良くなる。",
  },
  {
    title: "NG③：最初の回答に期待しすぎる",
    bad: "最初の出力が期待外れで「やっぱりAIはダメだ」とやめてしまう。",
    good: "最初の回答はたたき台。「〇〇の部分を具体的にして」「△△の視点を加えて」と修正を重ねることで、想定外の完成度になることが多い。",
  },
  {
    title: "NG④：自分の情報を伝えない",
    bad: "「いい文章を書いて」「アドバイスして」だけ。",
    good: "「私は35歳・営業職・チームリーダーで、部下のモチベーション管理に悩んでいます」のように、役割・状況・背景を伝えると、回答が何倍も具体的になる。",
  },
] as const;

const reproduciblePrompts = [
  {
    title: "感動体験①：どんなメールもプロ品質で",
    prompt:
      "以下の状況でのビジネスメールを書いてください。\n・宛先：【相手（上司/取引先/同僚など）】\n・用件：【用件を入力】\n・トーン：丁寧、誠実、かつ読みやすい\n・長さ：200字程度",
    point: "「どんな相手に、どんな用件か」を具体的に伝えると、使えるクオリティになります。",
  },
  {
    title: "感動体験②：難しい言葉の即席解説",
    prompt: "「【難しい言葉・用語を入力】」を、その分野の知識が全くない人にもわかるように、例え話を使って説明してください。",
    point: "法律・医療・金融などの専門用語に特に効果的。「5歳向けに」と指定するとさらにシンプルになります。",
  },
  {
    title: "感動体験③：アイデアを30秒で20個",
    prompt: "【テーマを入力】についてのアイデアを20個出してください。ユニークなものから実用的なものまで幅広く。",
    point: "最初は使えないアイデアが多くても、「このアイデアをもっと具体的に」と深掘りすると宝が見つかります。",
  },
  {
    title: "感動体験④：思考整理の壁打ち相手",
    prompt:
      "【悩みや課題を入力】について整理したいです。結論を急かさず、まず私の状況について3〜5個の質問をしてください。その後、一緒に考えてください。",
    point: "答えを求めるより、「一緒に考える」モードで使うと、AIがコーチになります。",
  },
  {
    title: "感動体験⑤：文章のトーン変換",
    prompt:
      "以下の文章を【目的に合わせたトーン：丁寧なビジネス語/カジュアルなSNS向け/説得力のあるプレゼン向けなど】に書き直してください。\n\n【元の文章を入力】",
    point: "1つの文章から複数のバリエーションを作れます。プレゼン・SNS・社内向けで使い分けると便利。",
  },
  {
    title: "感動体験⑥：自分だけの学習プランを作る",
    prompt:
      "私は【学びたいことを入力】をゼロから学びたいです。現在のレベル：【現在のスキルを入力】。使える時間：1日【時間】分、期間：【期間】。私に合った学習プランと、最初の1週間に使うべき具体的なリソースを教えてください。",
    point: "汎用的なノウハウではなく、あなたの状況に合わせた計画が出てきます。",
  },
] as const;

export default function ChatgptWowMomentsGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTに「すごい」と感じた瞬間10選" },
          ]}
        />

        {/* ヘッダー */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
                title="ChatGPTに「すごい」と感じた瞬間10選"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTに「すごい」と感じた瞬間10選｜初めて使ったときの感動と活用法
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTを使ってみたけど、何がすごいのかよくわからなかった」——こう感じたことはありませんか？
            実は、感動できるかどうかは<strong>使い方次第</strong>です。
            検索エンジンのように使うと平凡な答えしか返ってきませんが、
            「正しい使い方」を知ると、同じChatGPTが全く別のツールに見えてきます。
            この記事では、実際にChatGPTを使い始めた人たちが「これはすごい！」と感じた10の瞬間を、
            具体的なシーンとそのまま使えるプロンプト例とともにご紹介します。
            読み終わったら、きっと「自分も今すぐ試したい」という気持ちになっているはずです。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIが怖い・難しいを乗り越えるガイド
          </Link>
          ・
          <Link href="/academy/blog/how-to-ask-ai-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIへの質問・相談の仕方入門
          </Link>
          ・
          <Link href="/academy/blog/ai-30min-challenge-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            30分で体験できる7つのAIチャレンジ
          </Link>
          もあわせてどうぞ。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              ChatGPTで感動できないのは「使い方が浅い」から。自分の状況・背景・目的を伝えると別物になる
            </li>
            <li className="pl-1 marker:text-gray-500">
              感動体験のポイントは「メール作成・要約・翻訳・思考整理・学習計画」の5領域に集中している
            </li>
            <li className="pl-1 marker:text-gray-500">
              最初の回答に期待しすぎず、追加指示で対話を重ねることで完成度が上がる
            </li>
            <li className="pl-1 marker:text-gray-500">
              この記事のプロンプトをコピペするだけで、今日からWow体験を再現できる
            </li>
          </ul>
        </motion.section>

        {/* 感動できないのはあなたのせいじゃない */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-no-wow" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            感動できないのはあなたのせいじゃない
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「周りがChatGPTに感動しているのに、自分が使っても何もすごいと思えなかった」——こう感じている人は、実はとても多いです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この感覚の差は、AIの能力ではなく<strong>「使い方の差」</strong>から生まれています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ChatGPTを検索エンジンのように使うと（「東京の人口は？」「ChatGPTとは？」のような質問）、Google検索と大差ない結果しか返ってきません。
            しかし、<strong>「自分の具体的な状況・目的・制約」を伝えた上でお願いする</strong>と、
            個人に特化した回答が返ってきます。これが感動体験の正体です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            次の章では、実際に感動体験をした人たちのリアルなシーンを10個紹介します。
            それぞれに「そのまま使えるプロンプト」もついているので、読みながら試してみてください。
          </p>
        </motion.section>

        {/* 10の瞬間 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ten-moments" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPTに感動した10の瞬間
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIリブートが収集したユーザーの声をもとに再構成した、リアルな感動シーンです。
            プロンプト例はそのままコピペして試せます。
          </p>
          <div className="mt-8 space-y-8">
            {wowMoments.map((moment) => (
              <section key={moment.id} id={moment.id} className="scroll-mt-28 rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 rounded-full bg-will-primary px-3 py-1 text-sm font-bold text-white">
                    {moment.number}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{moment.title}</h3>
                </div>
                <div className="mt-5 rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-700">シーン</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{moment.scene}</p>
                </div>
                <blockquote className="mt-4 rounded-lg border-l-4 border-will-primary/40 bg-will-lighter/30 p-4">
                  <p className="text-sm leading-7 text-gray-700 before:content-['「'] after:content-['」']">
                    {moment.voice}
                  </p>
                </blockquote>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-gray-500">実際に使ったプロンプト例（コピペOK）</p>
                  <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-gray-900 p-4 text-xs leading-6 text-green-300">
                    {moment.prompt}
                  </pre>
                </div>
              </section>
            ))}
          </div>
          <p className="mt-6 text-xs text-gray-500">
            ※ ユーザーの声はAIリブートが収集した体験談をもとに、プライバシーに配慮して再構成したものです。
          </p>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="chatgpt-wow-moments-guide" />
        </motion.section>

        {/* NGパターン */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ng-patterns" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「感動できない」人がやりがちなNG使い方
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTで感動できない最大の理由は、使い方のパターンにあります。よくある4つのNGと、改善策を整理しました。
          </p>
          <div className="mt-6 space-y-5">
            {ngPatterns.map((pattern) => (
              <section key={pattern.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-base font-bold text-gray-900">{pattern.title}</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-red-50 p-3">
                    <p className="text-xs font-semibold text-red-700">❌ やりがちな使い方</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{pattern.bad}</p>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-3">
                    <p className="text-xs font-semibold text-emerald-700">✅ こうするとすごくなる</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{pattern.good}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 今すぐ試せるプロンプト集 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="try-now" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            今すぐ試せる「感動体験」再現プロンプト集
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事を読んだあとすぐに試せる6つのプロンプトをまとめました。
            【】内を自分の状況に合わせて書き換えてコピペするだけです。
          </p>
          <div className="mt-6 space-y-6">
            {reproduciblePrompts.map((item) => (
              <section key={item.title} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-gray-900 p-4 text-xs leading-6 text-green-300">
                  {item.prompt}
                </pre>
                <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-800">
                  💡 {item.point}
                </p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：発見の喜びは、試した人だけのもの
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTの感動体験は、ツールの能力ではなく「使い方の質」によって決まります。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">自分の状況・背景・目的を具体的に伝える</li>
            <li className="pl-1 marker:text-gray-500">最初の回答はたたき台。追加指示で対話を重ねる</li>
            <li className="pl-1 marker:text-gray-500">感動体験は「メール・要約・翻訳・思考整理・学習計画」の5領域に多い</li>
            <li className="pl-1 marker:text-gray-500">この記事のプロンプトをそのままコピペして今日から試せる</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「こんなことで感動してもいいのかな」と遠慮する必要はありません。
            メールが3分で書けた、難しい言葉の意味がわかった——そういう小さな感動の積み重ねが、
            AIを日常に取り入れる第一歩です。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            発見の喜びは、試した人だけのものです。今日、一つだけでもプロンプトを試してみてください。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="自分の業種・職種でChatGPTを活かすプロンプト集を受け取ろう"
            description="この記事のプロンプトを自分の仕事に応用したい方へ。AIリブートのLINEでは「業種別プロンプト50選」を無料配布しています。営業・事務・マーケ・医療・教育など業種ごとにすぐ使えるプロンプトをまとめました。"
            buttonLabel="LINEで業種別プロンプト50選を受け取る（無料）"
          />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="next-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のステップ：感動を日常に変えるために
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            感動体験ができたら、次はプロンプトの書き方を学ぶことで活用の幅が広がります。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
            </Link>
            <Link
              href="/academy/blog/ai-30min-challenge-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              30分チャレンジを試す
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-30min-challenge-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを今日から実感！初心者でも30分で体験できる7つのチャレンジ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-ask-ai-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTに何を聞けばいい？AIへの質問・相談の仕方がわかる完全入門ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-templates-50" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                すぐ使える！ChatGPTプロンプトテンプレート50選
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-3month-journey" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを3ヶ月使い続けたら、こんな変化が起きた
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを「使えるようになった人」がやっていた5つのこと
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
