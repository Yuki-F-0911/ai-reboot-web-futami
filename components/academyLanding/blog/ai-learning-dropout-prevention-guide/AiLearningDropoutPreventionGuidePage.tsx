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

const keywordTags = ["AI学習 続かない", "生成AI 挫折", "ChatGPT 使いこなせない", "AI習慣化", "AI 継続"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "not-alone", label: "あなただけじゃない：AI学習が続かない人は多い" },
  { id: "seven-reasons", label: "AI学習が続かない7つの本当の理由" },
  { id: "seven-habits", label: "続く人がやっている7つの習慣" },
  { id: "try-today", label: "今日だけ試してみる：5つのプロンプト例" },
  { id: "restart", label: "挫折後の再スタート：3日間チャレンジ" },
  { id: "mindset-shift", label: "「勉強」→「お供」への発想転換" },
  { id: "community", label: "コミュニティとつながることの大切さ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const sevenReasons = [
  {
    id: "reason-expectation",
    number: "01",
    title: "期待値が高すぎる（魔法の杖だと思っていた）",
    body: `「ChatGPTを使えば仕事が劇的に変わる」「プロンプト1つで完璧な成果物ができる」——こう期待して始めた方ほど、最初の落胆が大きくなります。

AIは確かに強力なツールですが、電卓と同じです。使い方次第で効果が大きく変わります。最初から「魔法」を期待すると、「普通の回答が返ってきた」だけで失望してしまいます。

現実的な期待値：AIは「仕事を10倍速くする」ではなく「特定の作業を1/3の時間で終わらせる可能性がある」ツールです。まずは小さな改善から体験することが長続きの第一歩です。`,
  },
  {
    id: "reason-purpose",
    number: "02",
    title: "使う目的が曖昧（「なんとなく」では続かない）",
    body: `「AIを勉強しなきゃ」という焦りだけで始めると、何に使えばいいかわからず、結局ブラウザを閉じてしまいます。

続く人は「AIを使って〇〇したい」という具体的なゴールを持っています。たとえば「毎日書いているメールをAIに下書きさせる」「週報の文章をAIにまとめてもらう」など、日常の作業と直結した目的です。

目的が曖昧な場合の解決策：今週の仕事で「面倒だな」と感じた作業を1つ書き出してください。それがあなたの「AIを使う理由」になります。`,
  },
  {
    id: "reason-perfectionism",
    number: "03",
    title: "完璧主義（プロンプトが下手なのが恥ずかしい）",
    body: `「上手く指示できないと恥ずかしい」「プロンプトを完璧に書いてから使いたい」——この完璧主義がAI学習の最大の敵です。

AIは試行錯誤を前提に設計されています。「こういう感じで」「なんか違う、もっと〇〇に」という対話を重ねることで、最終的に欲しい成果に近づいていきます。

実際、AIを使いこなしているビジネスパーソンの多くは「ざっくりした指示を出して、返ってきた回答を見てから修正する」という方法で使っています。最初から完璧な指示を出そうとしなくて大丈夫です。`,
  },
  {
    id: "reason-study-mode",
    number: "04",
    title: "勉強モードで入る（楽しくないから続かない）",
    body: `「AIを勉強する」というモードで入ると、教材を読んで、ノートを取って、テストをして——という義務感が生まれます。楽しくなければ、続きません。

続く人は「遊び」としてAIを使い始めます。「今日の夕飯レシピを考えてもらおう」「好きな映画のあらすじを800字で書いてもらおう」「明日の会議で言えそうなジョークを考えてもらおう」——こうした気軽な使い方が、自然と活用スキルを高めていきます。

AI学習は「習得」ではなく「探索」です。知識の正解より、使って「これは使えそう！」という発見を積み重ねることが大切です。`,
  },
  {
    id: "reason-alone",
    number: "05",
    title: "一人でやる（フィードバックがない）",
    body: `一人でAIを使い続けるのは、一人でジムに通い続けるのと同じくらい難しいことです。仲間がいないと、モチベーションが下がったときに復帰するきっかけがありません。

また、「こんな使い方をした」「このプロンプトが効果的だった」という情報共有がないと、自分だけの使い方が固定化してしまいます。

コミュニティや勉強仲間がいると、「そんな使い方があるのか！」という発見が生まれ、好奇心が続く原動力になります。`,
  },
  {
    id: "reason-no-result",
    number: "06",
    title: "結果が見えない（変化が実感できない）",
    body: `AIを使い始めても、最初は「これがAIのおかげかどうかわからない」状態が続きます。変化が見えないと、「続ける意味あるのかな」と思い始めます。

解決策は「記録する」こと。AIを使って「30分かかっていたメール文章が5分で完成した」「アイデア出しに悩んでいたが、AIの提案で方向性が決まった」——こうした小さな成功をメモしておくことで、積み重なりが実感できます。

最初の2週間は「劇的な変化」より「小さな効率化」を集めることを意識してみてください。`,
  },
  {
    id: "reason-confusion",
    number: "07",
    title: "ツールが多すぎて混乱（何を使えばいいかわからない）",
    body: `ChatGPT、Claude、Gemini、Perplexity、Copilot——AIツールは次々と登場します。「どれが一番いいの？」「全部試さなきゃ？」という情報過多が、何も始めない言い訳になってしまいます。

シンプルな解決策：ChatGPTだけに集中してください。最も情報が多く、使っている人が多いため、困ったときの解決方法が見つかりやすいです。1つのツールを使い込んでから、必要に応じて他のツールを試すのが効率的です。

「全部知ってから始める」ではなく「1つで始めて、困ったら増やす」が続く人の原則です。`,
  },
] as const;

const sevenHabits = [
  {
    number: "01",
    title: "毎日1つだけAIに話しかける（量より継続）",
    body: "1日1回、何でもいいのでAIに話しかけることをルールにします。「今日の昼ごはんを提案して」でも十分。量より続けることが重要です。",
  },
  {
    number: "02",
    title: "「面倒リスト」を作ってAIに丸投げする",
    body: "毎週月曜日に「今週面倒だと感じそうなこと」を3つリストアップし、そのままAIに相談します。面倒をなくすためにAIを使う、という目的意識が生まれます。",
  },
  {
    number: "03",
    title: "プロンプトを保存しておく（再利用する）",
    body: "「良い回答が返ってきた」プロンプトはメモアプリに保存します。同じ状況のときに使い回せるので、効率が上がり、「AIが自分に合ってきた」という実感が生まれます。",
  },
  {
    number: "04",
    title: "仕事の成果をAIと一緒に振り返る",
    body: "週に1回、「今週の仕事でうまくいったこと・うまくいかなかったこと」をAIに入力して、振り返りと改善案を出してもらいます。PDCAがAIと一緒に回り始めます。",
  },
  {
    number: "05",
    title: "「今日もAI使った」を誰かに話す",
    body: "家族・同僚・友人に「今日AIでこんなことをした」と話してみましょう。反応があることでモチベーションが維持され、相手に使い方が伝わる副次効果もあります。",
  },
  {
    number: "06",
    title: "AIの回答を「素材」として扱う",
    body: "AIが出した文章をそのまま使うのではなく、「素材」として自分の言葉でアレンジする習慣をつけます。こうすることで「AIに頼りすぎ」という罪悪感がなくなり、自分の思考力も活かせます。",
  },
  {
    number: "07",
    title: "週1回「新しい使い方」を1つ試す",
    body: "毎週1つだけ、まだ試したことのない使い方に挑戦します。「画像を読み込ませてみた」「会議の録音から議事録を作った」「英語メールの返信を日本語で作ってもらった」——小さな発見が好奇心を維持します。",
  },
] as const;

const todayPrompts = [
  {
    title: "職場の困りごとを相談する",
    prompt: "私は[あなたの職種]をしています。最近、[具体的な悩み]で困っています。どうすれば効率的に解決できますか？",
    tip: "[　]の部分を自分の状況に変えるだけでOKです。",
  },
  {
    title: "メールの返信を代わりに書いてもらう",
    prompt: "以下のメールへの返信を、丁寧かつ簡潔に書いてください。\n\n[受け取ったメールの内容をそのままペースト]",
    tip: "メールをコピペするだけ。思った以上に自然な文章が返ってきます。",
  },
  {
    title: "今日の仕事のアイデア出しを頼む",
    prompt: "[プロジェクトや課題の概要]について、10個のアイデアを出してください。実現可能性は問いません。",
    tip: "「実現可能性は問いません」を加えると、AIが遠慮なく多様なアイデアを出してくれます。",
  },
  {
    title: "文章を短くまとめてもらう",
    prompt: "以下の文章を、要点を保ちつつ3行以内に要約してください。\n\n[要約したい文章をペースト]",
    tip: "議事録・報告書・長いメール——何でも要約できます。",
  },
  {
    title: "自己紹介や自己PRを作ってもらう",
    prompt: "私は[経歴・スキルを2〜3行で説明]です。社内発表や名刺交換に使える、印象的な自己紹介文を作ってください。",
    tip: "転職活動や社内異動のタイミングで使えます。",
  },
] as const;

const restartDays = [
  {
    day: "Day 1：「ただ話しかけるだけ」の日",
    goal: "プレッシャーなし、成果なし。ただAIと会話する",
    steps: [
      {
        title: "ChatGPTを開いて「こんにちは、久しぶりです」と打つ",
        body: "以前挫折した記憶は一旦置いておきましょう。AIは毎回リセットされています。あなたも今日から新しいスタートです。",
      },
      {
        title: "今日あった出来事を1つ話す",
        body: "「今日、職場でこんなことがあった」と雑談する感覚で話しかけてみてください。AIが共感し、何か返してくれます。それだけで十分です。",
      },
      {
        title: "「明日使えそうなこと」を1つメモする",
        body: "AIとの会話から「これは職場で使えそう」と思ったことを1つメモします。メモするだけでOK。実行は明日でいいです。",
      },
    ],
  },
  {
    day: "Day 2：「小さな仕事」を1つ任せる日",
    goal: "AIに仕事を1つ任せて、時間短縮を体感する",
    steps: [
      {
        title: "今日の仕事で「5〜30分かかりそう」なタスクを1つ選ぶ",
        body: "メールの返信、資料のまとめ、アイデア出し——何でもいいです。「これくらいならAIに頼んでみてもいいかな」と思えるものを選びます。",
      },
      {
        title: "AIに丸投げしてみる",
        body: "完璧な指示でなくていいです。「こんな感じで書いてほしいんですが」という口語でOK。返ってきた回答を見て、必要なら「もう少し〇〇して」と追加指示を出します。",
      },
      {
        title: "かかった時間を記録する",
        body: "AIを使う前と使った後で、同じ作業がどのくらい短縮されたかを記録します。この「効率化の実感」が再スタートのモチベーションになります。",
      },
    ],
  },
  {
    day: "Day 3：「続ける仕組み」を作る日",
    goal: "AIを毎日使いたくなる環境を整える",
    steps: [
      {
        title: "ChatGPTをブラウザのホームページに設定する",
        body: "ブラウザを開くたびにChatGPTが表示されるだけで、「ちょっと聞いてみようか」という気持ちになりやすくなります。環境を整えることが継続の鍵です。",
      },
      {
        title: "「毎日AIに聞くこと」を1つ決める",
        body: "「朝のニュースを要約してもらう」「今日のToDoを優先順位付けしてもらう」など、毎日行うルーティンにAIを組み込みます。決めることで、考えなくても使えるようになります。",
      },
      {
        title: "3日間の感想をAIに話す",
        body: "「3日間AIを使ってみた感想と、これから続けるために必要なことを教えて」とAIに聞いてみてください。自分の状況を整理するのに、AIが一番の相談相手になります。",
      },
    ],
  },
] as const;

const stories = [
  {
    role: "30代・マーケティング担当",
    quote: "3回挫折しました。毎回「すごい！」と感動して、1週間後には使わなくなって。変わったのは「勉強」をやめたことです。今は週次レポートの要約だけAIにやってもらっています。それだけで続いています。",
  },
  {
    role: "40代・営業職",
    quote: "プロンプトの書き方を勉強しようとして挫折しました。今は「なんか違う、もっと短く」「もっとフランクに」って追加指示を出すだけで、ほとんど解決しています。最初から上手く書こうとしなくてよかったと今は思います。",
  },
  {
    role: "50代・管理職",
    quote: "「何に使えばいいかわからない」状態が続いていました。部下に「面倒なことを何でもAIに頼んでみてください」と言われて、試したら本当に全部こなしてくれて。面倒くさがり屋ほどAIは向いていると思います。",
  },
  {
    role: "20代・フリーランス",
    quote: "一人でやっていたので、誰かと比べることもなく使い方がずっと同じでした。コミュニティに入ってから「そんな使い方があるの！」という発見が増えて、楽しくなってきました。一人でやり続けないことが大事だと思います。",
  },
] as const;

export default function AiLearningDropoutPreventionGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIの勉強が続かない…を卒業する" },
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
                title="AIの勉強が続かない…を卒業する：挫折する人と続く人の決定的な7つの違い"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIの勉強が続かない…を卒業する：挫折する人と続く人の決定的な7つの違い
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTを使ってみたけど、何を聞けばいいかわからなかった」「最初は楽しかったけど、すぐ使わなくなった」「みんな使いこなしているのに、自分だけ乗り遅れている気がする」——もしそう感じているなら、この記事はあなたのために書きました。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            先に伝えておきたいのは、<strong>AI学習が続かないのはあなたの意志が弱いからではない</strong>、ということです。続かない理由には、ほぼ毎回「設計の問題」「期待値の問題」「使い方の問題」のどれかがあります。
            この記事では、その7つの理由を正直に解説し、続く人がやっている7つの習慣と、今日から使えるプロンプト例をご紹介します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          あわせて読みたい：
          <Link href="/academy/blog/how-to-learn-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIの学び方【2026年版】
          </Link>
          ・
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIが怖い・難しいを乗り越えるガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude初心者ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI最初の30日ガイド
          </Link>
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
              AI学習が続かないのは意志の問題ではなく「設計・期待値・使い方」の問題
            </li>
            <li className="pl-1 marker:text-gray-500">
              続かない7大原因：期待値が高すぎる・目的が曖昧・完璧主義・勉強モード・一人でやる・結果が見えない・ツールが多すぎる
            </li>
            <li className="pl-1 marker:text-gray-500">
              続く人の共通点：「勉強」ではなく「日常のお供」としてAIを使っている
            </li>
            <li className="pl-1 marker:text-gray-500">
              今日から始める再スタートは3日間チャレンジ——Day 1は「ただ話しかけるだけ」でOK
            </li>
            <li className="pl-1 marker:text-gray-500">
              一人ではなく仲間と続けることが、長期継続の最大のカギ
            </li>
          </ul>
        </motion.section>

        {/* あなただけじゃない */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="not-alone" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            あなただけじゃない：AI学習が続かない人は多い
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「ChatGPTを試したけど、なんとなく使わなくなった」——実は、これは非常によくある経験です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            2025年のBCG「AI at Work」調査によると、日本でAIツールを使っている人の割合は51%ですが、「使いこなしている」と感じている人はさらに少数です。多くの人が「触ってみた→続かなかった」というパターンを経験しています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            また、米国の調査（Morning Consult 2025）では、ChatGPTを試した人のうち<strong>約40%が1ヶ月以内に利用を中断</strong>したと報告されています。これだけ多くの人が同じ状況を経験しているということは、「続かない」のは個人の問題ではなく、AIツール自体の「始め方の問題」でもあります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            大切なのは、挫折した経験を「自分はAIに向いていない」という証拠にしないことです。スポーツでも楽器でも、最初から続けられる人は少ない。<strong>続けられる「仕組み」を持つかどうか</strong>——それが、挫折する人と続く人の本当の違いです。
          </p>
        </motion.section>

        {/* 7つの理由 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="seven-reasons" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI学習が続かない7つの本当の理由
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「続かない」には必ず理由があります。感情論ではなく、構造的に見ていきましょう。
          </p>
          <div className="mt-8 space-y-6">
            {sevenReasons.map((item) => (
              <section key={item.id} id={item.id} className="scroll-mt-28 rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-will-primary/10 px-3 py-1 text-sm font-bold text-will-primary">{item.number}</span>
                  <h3 className="text-lg font-bold leading-snug text-gray-900">{item.title}</h3>
                </div>
                <div className="mt-4 whitespace-pre-line text-sm leading-8 text-gray-700">{item.body}</div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 体験談 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">続けられるようになった人たちの声</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            挫折を経験し、それでも続けられるようになった方々の言葉をご紹介します。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {stories.map((story) => (
              <blockquote key={story.role} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-will-primary">{story.role}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700 before:content-['「'] after:content-['」']">
                  {story.quote}
                </p>
              </blockquote>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            ※ AIリブートが収集した利用者の声をもとに、プライバシーに配慮して再構成したエピソードです。
          </p>
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
          <MidArticleCtaBox slug="ai-learning-dropout-prevention-guide" />
        </motion.section>

        {/* 続く人の7つの習慣 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="seven-habits" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            続く人がやっている7つの習慣
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            挫折する人と続く人の差は才能ではなく、習慣の設計にあります。以下の7つは、明日から実践できるものだけに絞りました。
          </p>
          <div className="mt-8 space-y-4">
            {sevenHabits.map((habit) => (
              <div key={habit.number} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-orange-50 px-3 py-1 text-sm font-bold text-orange-600">{habit.number}</span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{habit.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{habit.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 今日だけ試してみるプロンプト */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="try-today" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「今日だけ試してみる」ための5つのプロンプト例
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            プロンプトを考える必要はありません。以下の5つから1つをコピーして、[　]の部分を書き換えて送るだけです。
          </p>
          <div className="mt-6 space-y-6">
            {todayPrompts.map((item, index) => (
              <div key={item.title} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-will-primary/10 text-sm font-bold text-will-primary">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                </div>
                <div className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <p className="whitespace-pre-line font-mono text-sm leading-7 text-gray-800">{item.prompt}</p>
                </div>
                <p className="mt-3 text-xs leading-6 text-gray-500">
                  <span className="font-semibold text-orange-600">ポイント：</span>{item.tip}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 挫折後の再スタート */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="restart" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            挫折後の再スタート：3日間チャレンジ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            一度やめてしまっても大丈夫です。3日間の小さなチャレンジで、ゆっくり再起動しましょう。
          </p>
          <div className="mt-8 space-y-8">
            {restartDays.map((day) => (
              <section key={day.day} className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <h3 className="text-xl font-bold text-gray-900">{day.day}</h3>
                  <span className="w-fit rounded-full bg-will-primary/10 px-3 py-1 text-xs font-semibold text-will-primary">
                    ゴール：{day.goal}
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  {day.steps.map((step) => (
                    <div key={step.title} className="rounded-lg bg-white p-4 shadow-subtle">
                      <h4 className="text-base font-semibold text-gray-900">{step.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            3日間が終わったころには、「またやめちゃうかも」という不安より「もう少し続けてみようかな」という気持ちが勝っているはずです。
          </p>
        </motion.section>

        {/* 発想転換 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="mindset-shift" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIを日常に馴染ませる発想転換：「勉強」→「お供」
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            続く人の多くが共通して言うのは、<strong>「AIの勉強をしようとやめた」</strong>ということです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「勉強」という言葉には、教材・ノート・テスト・進捗管理というイメージがつきまといます。それが義務感を生み、挫折の遠因になります。
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
            <div className="grid grid-cols-2 divide-x divide-gray-200">
              <div className="bg-red-50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-red-500">続かない考え方</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
                  <li>「プロンプトの書き方を勉強してから使う」</li>
                  <li>「毎日30分AIの勉強をする」</li>
                  <li>「ChatGPTとClaudeの違いを理解してから始める」</li>
                  <li>「使いこなせるようになったら職場で使う」</li>
                </ul>
              </div>
              <div className="bg-green-50 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-green-600">続く考え方</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
                  <li>「困ったらAIに話しかける」</li>
                  <li>「仕事の隙間に1つだけ聞く」</li>
                  <li>「とりあえずChatGPTだけ使う」</li>
                  <li>「下手でもいいから今日使ってみる」</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIは「習得するもの」ではなく「一緒に仕事するもの」です。毎日使う電話やメールと同じように、気づいたら自然に使っている——そのレベルになれば、「続けよう」と意識する必要がなくなります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            まずは「今日の面倒なこと」を1つAIに任せてみてください。それが「勉強」から「お供」への最初の一歩です。
          </p>
        </motion.section>

        {/* コミュニティ */}
        <motion.section
          className="mt-14 rounded-xl border border-will-primary/20 bg-will-lighter/40 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="community" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            コミュニティとつながることの大切さ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            習慣研究でも示されているように、<strong>習慣の継続率は「一人でやるか、仲間とやるか」で大きく変わります</strong>。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AI学習も同じです。一人でやっていると、
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">飽きたとき・つまずいたときに復帰するきっかけがない</li>
            <li className="pl-1 marker:text-gray-500">「こんな使い方があるのか！」という発見が生まれにくい</li>
            <li className="pl-1 marker:text-gray-500">「自分が成長しているのかどうか」がわからない</li>
          </ul>
          <p className="mt-4 text-base leading-8 text-gray-700">
            同じ目標を持つ仲間がいると、「あの人も使っているなら自分も」という自然な動機が生まれ、新しい使い方を共有し合える環境が生まれます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIリブートアカデミーは、<strong>100日間のプログラムを仲間と一緒に続けられる設計</strong>になっています。一人で挫折した経験がある方にこそ、コミュニティの力を体験していただきたいと思っています。
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
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
            まとめ：続けることより、馴染ませることを目指そう
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事では、AI学習が続かない7つの理由と、続く人がやっている7つの習慣をお伝えしました。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">続かないのは意志の問題ではなく、設計の問題</li>
            <li className="pl-1 marker:text-gray-500">「勉強モード」から「お供モード」への発想転換が鍵</li>
            <li className="pl-1 marker:text-gray-500">最初の一歩は「今日の面倒なこと1つをAIに任せる」だけでいい</li>
            <li className="pl-1 marker:text-gray-500">挫折後の再スタートは3日間チャレンジから——Day 1は話しかけるだけ</li>
            <li className="pl-1 marker:text-gray-500">一人ではなく仲間と続けることが、長期継続の最大の近道</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを「また挫折するかもしれない危険なもの」ではなく、「いつでも戻ってこられるお供」と思えると、気が楽になります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            今日から始める必要はありません。でも、この記事を読み終えた今が、再スタートに一番良いタイミングかもしれません。
            まず1つ、今日の面倒をAIに任せてみてください。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            AIと一緒に、日常を少しずつ楽にしていきましょう。
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
            title="一人で悩まず、一緒に続けましょう"
            description="「また挫折したらどうしよう」という不安はよくわかります。AIリブートアカデミーは、仲間と一緒に100日間継続できる設計になっています。経産省リスキリング補助金対象。まずはLINEで気軽にご相談ください。"
            buttonLabel="LINEで相談してみる（無料）"
          />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AI最初の30日ガイド｜仕事で使い始める人のロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTカスタム指示の設定方法｜毎回の説明を省く初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
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
