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

const keywordTags = ["AI 50代 始め方", "ChatGPT シニア 使い方", "50代 AI入門", "生成AI 初心者 60代"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-now", label: "50代60代の今こそ、AIを始めるベストタイミング" },
  { id: "setup", label: "スマホでChatGPTを始める5ステップ" },
  { id: "voice-input", label: "タイピング不要！音声入力でラクラク会話" },
  { id: "use-cases", label: "生活が変わる！7つの活用シナリオ" },
  { id: "mistakes", label: "よくある失敗と対処法" },
  { id: "strength", label: "50代60代だからこそAIをうまく使える理由" },
  { id: "voices", label: "始めた人の声" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const setupSteps = [
  {
    step: "1",
    title: "App StoreまたはGoogle Playを開く",
    body: "iPhoneの方は「App Store」、Androidの方は「Google Play ストア」を開いてください。普段アプリをダウンロードするときと同じ画面です。",
  },
  {
    step: "2",
    title: "「ChatGPT」と検索する",
    body: "検索窓に「ChatGPT」と入力します。緑色のアイコンで「OpenAI」と書かれた公式アプリが表示されます。類似アプリがいくつか出ますが、開発元が「OpenAI」と書かれているものを選んでください。",
  },
  {
    step: "3",
    title: "アプリをインストールする",
    body: "「入手」（iPhone）または「インストール」（Android）ボタンをタップします。ダウンロードは無料です。数十秒で完了します。",
  },
  {
    step: "4",
    title: "アカウントを作成する",
    body: "アプリを開くと「サインアップ」の画面が出ます。メールアドレスで登録するか、「Googleで続ける」「Appleで続ける」を選ぶのが一番簡単です。パスワードを新しく考える必要もありません。",
  },
  {
    step: "5",
    title: "最初の一言を送ってみる",
    body: "画面の下にメッセージ入力欄があります。「こんにちは」とだけ打って送信してみましょう。AIがすぐに返事をしてくれます。これだけで準備完了です。",
  },
] as const;

const useCaseScenarios = [
  {
    title: "健康の相談相手として",
    situation: "膝が痛い。何科に行けばいい？",
    prompt: "最近、階段を降りるときに右膝が痛みます。60代男性です。何科を受診すればよいですか？考えられる原因もいくつか教えてください。",
    response: "膝の痛みでしたら、まず「整形外科」の受診をおすすめします。考えられる原因としては、(1)変形性膝関節症、(2)半月板の損傷、(3)関節リウマチなどがあります。階段の下りで痛む場合は(1)の可能性が比較的高いです。まずは整形外科でレントゲンを撮ってもらい...",
    note: "医療の最終判断は必ずお医者さんに。AIは「最初の相談相手」として活用しましょう。",
  },
  {
    title: "旅行プランの作成",
    situation: "夫婦で箱根に行きたい。プランを考えて。",
    prompt: "60代夫婦で箱根に1泊2日の旅行を計画しています。あまり歩き回らなくても楽しめるプランを作ってください。温泉と美味しいものが好きです。予算は2人で5万円くらいです。",
    response: "【1日目】ロマンスカーで箱根湯本→チェックイン後に温泉→彫刻の森美術館（バスで10分）→宿に戻って懐石料理の夕食 【2日目】朝風呂→朝食後にガラスの森美術館→帰りに湯本で寄木細工のお土産...",
    note: null,
  },
  {
    title: "孫へのプレゼント選び",
    situation: "小学3年生の孫の誕生日プレゼント、何がいい？",
    prompt: "小学3年生の男の子の誕生日プレゼントを探しています。予算は5,000円くらい。最近はゲームばかりしているので、できれば頭を使う遊びか、外で遊べるものがいいです。おすすめを5つ教えて。",
    response: "頭を使う・外遊びのおすすめ5選：(1)ナノブロック動物セット（集中力UP）、(2)ラビリンスボードゲーム（家族で遊べる）、(3)天体望遠鏡入門セット（冬の星座を一緒に）、(4)プログラミングロボット（遊びながら学べる）、(5)バドミントンセット...",
    note: null,
  },
  {
    title: "趣味をもっと楽しく",
    situation: "俳句を作りたいけど、なかなかいい表現が浮かばない。",
    prompt: "春の俳句を作りたいです。テーマは「桜と散歩」。初心者なので、季語の使い方も教えてもらいながら、3つほど候補を出してもらえますか？",
    response: "春の季語「桜」を使った俳句の候補です。(1)「散る桜 歩幅ゆるめて 風を聴く」——散歩の途中でふと立ち止まる情景。(2)「花びらの 道しるべたどる 朝の径」——桜の花びらが導いてくれるような春の朝。(3)「老桜の 根方に座して 時忘れ」...",
    note: null,
  },
  {
    title: "町内会の案内文作成",
    situation: "お花見会の案内を作らなきゃ。文章が苦手で……。",
    prompt: "町内会のお花見会の案内文を作ってください。日時は4月6日（日）11時から14時、場所は中央公園、参加費は500円（お茶とお菓子付き）、雨天の場合は集会所で開催、申し込みは回覧板に記入、です。",
    response: "【町内会お花見会のご案内】\n春の陽気が心地よい季節となりました。恒例のお花見会を下記のとおり開催いたします。ご近所お誘い合わせのうえ、お気軽にご参加ください。\n\n■日時：4月6日（日）11:00〜14:00\n■場所：中央公園 桜広場\n■参加費：500円（お茶・お菓子付き）\n■雨天時：町内集会所にて開催...",
    note: null,
  },
  {
    title: "年金・税金の疑問を整理",
    situation: "確定申告が必要かどうかわからない。",
    prompt: "63歳で今年退職しました。年金と退職金を受け取っています。来年の確定申告は必要ですか？必要な場合、何を準備すればいいですか？わかりやすく教えてください。",
    response: "退職された年は確定申告をしたほうが良いケースが多いです。主な理由は、(1)年末調整がされていない可能性、(2)退職金の税金が精算できる場合がある、(3)医療費控除や生命保険料控除で還付される可能性...",
    note: "税金の最終判断は税務署や税理士に確認を。AIは「事前の情報整理」に使いましょう。",
  },
  {
    title: "脳トレ代わりの会話",
    situation: "テレビばかりで頭を使っていない気がする……。",
    prompt: "頭の体操をしたいです。ことわざを使ったクイズを5問出してください。ヒントつきで、答えは最後にまとめて教えてください。",
    response: "ことわざクイズ5問、いきますよ！\n\n【第1問】「○○の○も○○たず」\nヒント：急いでいるときの失敗について\n\n【第2問】「○○○ ○○を噛む」\nヒント：よく起きることは何度も...",
    note: null,
  },
] as const;

const mistakes = [
  {
    title: "変な回答が返ってきた",
    desc: "「AIが嘘をついた！」と感じる場面。AIは正確でない情報を自信満々に答えることがあります。",
    solution: "大事な情報は必ず別の方法でも確認しましょう。病院や役所に関わることは、AIの回答をメモして、直接問い合わせるのが安心です。",
  },
  {
    title: "個人情報を入力してしまった",
    desc: "名前・住所・マイナンバーなどをうっかり入力してしまうケース。",
    solution: "AIに入力した情報は学習に使われる可能性があります。名前・住所・電話番号・クレジットカード番号などの個人情報は入力しないでください。設定で「チャット履歴とトレーニング」をオフにすることもできます。",
  },
  {
    title: "何を聞いていいかわからない",
    desc: "画面を開いたまま固まってしまう。",
    solution: "まずは「こんにちは。何ができますか？」と聞いてみてください。AIが自分のできることを教えてくれます。あるいはこの記事の「活用シナリオ7選」の文章をそのままコピーして送っても大丈夫です。",
  },
  {
    title: "文字が小さくて読みにくい",
    desc: "スマホの画面でAIの長い回答が読みにくい。",
    solution: "スマホの「設定」→「画面表示」→「文字サイズ」を大きくすると、ChatGPTアプリ内の文字も大きくなります。また、AIに「箇条書きで短くまとめて」と頼むと読みやすい回答が返ってきます。",
  },
] as const;

const strengths = [
  {
    title: "人生経験が「良い質問」を生む",
    body: "AIに一番大事なのは「何を聞くか」です。30年、40年の社会経験がある方は、仕事でも生活でも「本当に知りたいこと」が明確。だから、的確な質問ができます。若い人には真似できない「質問力」が、すでにあなたにはあるのです。",
  },
  {
    title: "「常識」がAIの間違いに気づかせてくれる",
    body: "AIは時々おかしなことを言います。でも、長年の経験から培った常識があれば「これはおかしい」と気づけます。AIの回答を鵜呑みにしないリテラシーは、人生経験がある方のほうが圧倒的に高いのです。",
  },
  {
    title: "時間の使い方が自由",
    body: "現役世代は忙しくてAIを試す時間がないことも。でも50代60代の方は、自分のペースでじっくり学べます。「今日はこれを試してみよう」と、ゆったり楽しみながら使えるのは大きなアドバンテージです。",
  },
] as const;

const voiceTestimonials = [
  {
    name: "田中 義男さん",
    age: "62歳",
    occupation: "元メーカー勤務・退職後",
    quote: "息子に勧められてChatGPTを入れたんですが、最初は全然わかりませんでした。でも「旅行のプランを考えて」と話しかけたら、すごく丁寧に答えてくれて。今では妻との旅行計画はいつもAIに相談しています。先日は確定申告の書類で悩んでいたときも助けてもらいました。",
    started: "趣味の旅行計画がきっかけ。今は日常のあらゆる場面で活用。",
  },
  {
    name: "佐藤 美恵子さん",
    age: "57歳",
    occupation: "パート勤務",
    quote: "パソコンは全然ダメなんですが、スマホの音声入力でChatGPTに話しかけたら、ちゃんと答えが返ってきて感動しました。町内会の回覧板の文面を考えてもらったり、パートの報告書の下書きを手伝ってもらったり。「こんなこともできるの？」って毎回驚いています。",
    started: "職場の若い同僚が使っているのを見て興味を持った。",
  },
  {
    name: "山本 信二さん",
    age: "68歳",
    occupation: "年金生活",
    quote: "定年後は時間があるので、趣味の俳句をAIと一緒に楽しんでいます。「この句の季語は合っていますか？」と聞くと、丁寧に解説してくれるんです。あと、孫がプログラミングの宿題で困っていたとき、AIに聞いて一緒に解決したのが嬉しかった。孫から「おじいちゃんすごい！」と言われましたよ。",
    started: "新聞でChatGPTの記事を読んで。俳句の相談がきっかけ。",
  },
] as const;

export default function AiBeginnersGuideOver50Page({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "50代60代から始めるAI入門" },
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
                title="50代60代から始めるAI入門｜スマホだけでできるChatGPT活用ガイド【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            50代60代から始めるAI入門
          </h1>
          <p className="mt-2 text-lg text-gray-600" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            スマホだけでできるChatGPT活用ガイド【2026年版】
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIって、なんだか若い人のものでしょう？」「パソコンが苦手な私には無理じゃないかしら」——そう感じていませんか？
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            安心してください。<strong>AIはスマホさえあれば、今日から始められます。</strong>
            LINEでメッセージを送れる方なら、ChatGPTは必ず使えます。パソコンもプログラミングも、まったく必要ありません。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、50代60代の方に向けて、スマホでChatGPTを始める手順を1ステップずつ丁寧にご説明します。
            健康相談、旅行計画、趣味の俳句、町内会の案内文——あなたの生活がもっと便利に、もっと楽しくなる活用法を、具体的な会話例つきでご紹介します。
          </p>
        </motion.header>

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
              AIはスマホだけで始められる。LINEが使える方なら、ChatGPTも必ず使える
            </li>
            <li className="pl-1 marker:text-gray-500">
              アプリのダウンロードから初回の会話まで、わずか5分で完了する
            </li>
            <li className="pl-1 marker:text-gray-500">
              音声入力を使えば、タイピングが苦手でもまったく問題ない
            </li>
            <li className="pl-1 marker:text-gray-500">
              健康相談・旅行計画・趣味・町内会の文書作成など、生活に直結する使い道がたくさんある
            </li>
            <li className="pl-1 marker:text-gray-500">
              50代60代の豊富な人生経験は、AIを活用する上で大きな強みになる
            </li>
          </ul>
        </motion.section>

        {/* なぜ今始めるべきか */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-now" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            50代60代の今こそ、AIを始めるベストタイミング
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIなんて若い人が使うもの」と思われるかもしれません。でも実は、<strong>50代60代こそAIの恩恵を一番受けられる世代</strong>です。その理由を3つお伝えします。
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold text-will-primary">理由 1</p>
              <p className="mt-2 text-base font-bold text-gray-900">今のAIは「話しかけるだけ」で使える</p>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                2〜3年前のAIは設定が大変でした。でも2026年のChatGPTは、スマホにアプリを入れて話しかけるだけ。
                しかも音声入力に対応しているので、キーボードを打つ必要すらありません。LINEで友達にメッセージを送る感覚で使えます。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold text-will-primary">理由 2</p>
              <p className="mt-2 text-base font-bold text-gray-900">生活に直結する使い道がたくさんある</p>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                健康の相談、旅行プランの作成、孫へのプレゼント選び、趣味の俳句、町内会の案内文、年金や確定申告の疑問——
                50代60代の日常にピッタリの使い方が山ほどあります。ビジネス用語を覚える必要もありません。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold text-will-primary">理由 3</p>
              <p className="mt-2 text-base font-bold text-gray-900">無料で使える。お金のリスクはゼロ</p>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                ChatGPTは無料で使えます。アプリのダウンロードも無料、アカウント登録も無料。
                「試してみて合わなかったらやめる」ができるので、リスクは一切ありません。
              </p>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            総務省の「令和6年版 情報通信白書」によると、60代のスマートフォン保有率は約90%に達しています。
            <strong>あなたがこの記事をスマホで読んでいるなら、もうAIを始める準備は整っています。</strong>
          </p>
        </motion.section>

        {/* スマホでChatGPTを始める手順 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="setup" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            スマホでChatGPTを始める5ステップ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            準備するものは<strong>スマートフォンだけ</strong>です。全部で5分もかかりません。ゆっくり、一つずつ進めてみましょう。
          </p>
          <div className="mt-6 space-y-4">
            {setupSteps.map((item) => (
              <div key={item.step} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-will-primary">
                  <span className="text-lg font-bold text-white">{item.step}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">うまくいかないときは</p>
            <p className="mt-2 text-sm leading-7 text-emerald-900">
              「サインアップの画面が出ない」「エラーが出る」という場合は、アプリを一度閉じてもう一度開いてみてください。
              スマホの再起動でも解決することが多いです。Googleアカウントをお持ちなら、「Googleで続ける」を選ぶのが最もスムーズです。
            </p>
          </div>
        </motion.section>

        {/* 音声入力 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="voice-input" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            タイピング不要！音声入力でラクラク会話
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「スマホで長い文章を打つのが苦手」という方に、ぜひ知っていただきたい機能があります。
            <strong>ChatGPTは音声入力に対応しています。</strong>スマホに向かって話しかけるだけで、あなたの言葉が文字に変換されてAIに送信されます。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">音声入力の使い方（2つの方法）</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold text-will-primary">方法 1：スマホのキーボードの音声入力</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                メッセージ入力欄をタップしてキーボードを表示し、キーボードにあるマイクのアイコンをタップ。
                話しかけると文字に変換されます。iPhoneでもAndroidでも同じように使えます。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-xs font-semibold text-will-primary">方法 2：ChatGPTアプリの音声会話機能</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                ChatGPTアプリの画面右下にあるヘッドフォンのアイコンをタップすると、AIと音声で直接会話できます。
                まるで電話で話しているような感覚で、AIに質問したり相談したりできます。
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">音声入力のコツ</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-amber-900">
              <li>ゆっくり、はっきり話すと認識精度が上がります</li>
              <li>周りが静かな場所で使うのがおすすめです</li>
              <li>句読点は「まる」「てん」と言えば入力できます</li>
              <li>間違って変換された部分は、後から手で直してもOKです</li>
            </ul>
          </div>
        </motion.section>

        {/* 活用シナリオ7選 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            生活が変わる！7つの活用シナリオ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIで何ができるの？」という疑問にお答えします。ここでは、50代60代の方の生活に直結する活用シナリオを7つご紹介します。
            <strong>「こんな時に」→「こう聞く」→「こんな回答が返ってくる」</strong>の3ステップでご説明しますので、気になるものから試してみてください。
          </p>

          <div className="mt-8 space-y-6">
            {useCaseScenarios.map((scenario, i) => (
              <div key={scenario.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-will-primary text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-base font-bold text-gray-900">{scenario.title}</h3>
                  </div>
                  <p className="mt-1 ml-10 text-sm text-gray-600">{scenario.situation}</p>
                </div>
                <div className="space-y-4 p-5">
                  <div>
                    <p className="text-xs font-semibold text-blue-700">あなたが送るメッセージ（コピペOK）</p>
                    <div className="mt-2 rounded-lg bg-blue-50 p-4">
                      <p className="text-sm leading-7 text-gray-700">{scenario.prompt}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-700">AIの回答イメージ</p>
                    <div className="mt-2 rounded-lg bg-emerald-50 p-4">
                      <p className="text-sm leading-7 text-gray-700">{scenario.response}</p>
                    </div>
                  </div>
                  {scenario.note ? (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                      <p className="text-xs leading-6 text-amber-800">
                        <span className="font-semibold">注意：</span>{scenario.note}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
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
          <MidArticleCtaBox slug="ai-beginners-guide-over-50" />
        </motion.section>

        {/* よくある失敗と対処法 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="mistakes" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある失敗と対処法
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを使い始めると、「あれ？」と思うこともあります。でも心配いりません。<strong>誰でも最初は同じ失敗をします。</strong>
            よくある4つのケースと、その対処法をまとめました。
          </p>
          <div className="mt-6 space-y-4">
            {mistakes.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-bold text-red-700">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">{item.desc}</p>
                <div className="mt-3 rounded-lg bg-emerald-50 p-3">
                  <p className="text-xs font-semibold text-emerald-800">対処法</p>
                  <p className="mt-1 text-sm leading-7 text-emerald-900">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">覚えておきたいこと</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              <strong>AIは万能ではありませんが、とても優秀な「相談相手」です。</strong>
              人間の友達と同じで、全部を鵜呑みにするのではなく、「参考にしつつ自分で判断する」という付き合い方がベストです。
              失敗しても、AIは怒りませんし、何度聞き直しても嫌な顔をしません。気軽に試してみましょう。
            </p>
          </div>
        </motion.section>

        {/* 50代60代だからこその強み */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="strength" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            50代60代だからこそAIをうまく使える理由
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「若い人のほうがAIに詳しいのでは？」と思うかもしれません。確かに操作に慣れるスピードは若い世代のほうが早いこともあります。
            でも、<strong>AIを「うまく使う」のと、「操作が早い」のは、まったく別のことです。</strong>
          </p>
          <div className="mt-6 space-y-4">
            {strengths.map((item, i) => (
              <div key={item.title} className="rounded-xl border-2 border-will-primary/15 bg-white p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-8 text-gray-700">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 始めた人の声 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="voices" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            始めた人の声
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実際にAIを始めた50代60代の方の体験をご紹介します。
          </p>
          <div className="mt-6 space-y-5">
            {voiceTestimonials.map((person) => (
              <div key={person.name} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <span className="text-lg">&#128100;</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">{person.name}（{person.age}・{person.occupation}）</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-4 border-will-primary/30 pl-4 text-sm leading-8 text-gray-700 italic">
                  &ldquo;{person.quote}&rdquo;
                </blockquote>
                <p className="mt-3 text-xs text-gray-500">
                  きっかけ：{person.started}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-400">
            ※ プライバシー保護のため、お名前は仮名を使用しています。
          </p>
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
          className="mt-14 rounded-lg border border-gray-200 bg-white p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：この歳だからこそ、AIで人生はもっと楽しくなる
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事でお伝えしたことをまとめます。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1"><strong>AIはスマホだけで始められる</strong>——アプリをダウンロードして、話しかけるだけ</li>
            <li className="pl-1"><strong>音声入力があるから、タイピングは不要</strong>——スマホに話しかけるだけでOK</li>
            <li className="pl-1"><strong>生活に直結する使い道がたくさん</strong>——健康、旅行、趣味、町内会、年金の相談まで</li>
            <li className="pl-1"><strong>失敗しても大丈夫</strong>——個人情報だけ気をつければ、何を聞いてもOK</li>
            <li className="pl-1"><strong>人生経験こそが最大の武器</strong>——良い質問ができるのは、あなたの経験があるから</li>
          </ol>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「もう歳だから」と遠慮する必要はまったくありません。むしろ、<strong>人生で培った知恵と経験がある方こそ、AIの本当の力を引き出せます。</strong>
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            最初の一歩は、今日ChatGPTに「こんにちは」と話しかけてみること。それだけで十分です。
            明日は「明日の天気は？」、明後日は「○○の作り方を教えて」——そうやって、少しずつ。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            何歳から始めても、遅すぎることはありません。
            <br />
            あなたの第二の人生に、新しい相談相手を。
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
          <LineCtaBox />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                【スマホ完全対応】ChatGPTの始め方ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを「使えるようになった人」がやっていた5つのこと
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-hallucination-fact-check-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTが嘘をつく？｜ハルシネーションを見抜く7つの実践テクニック
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-privacy-safety-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIに個人情報を入れても大丈夫？｜安全に使うための5つのルール
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
