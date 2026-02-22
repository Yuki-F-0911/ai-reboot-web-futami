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

const keywordTags = ["生成AI 初心者 試し方", "ChatGPT 始め方 簡単", "AI すぐ試せる", "生成AI 体験", "AI 30分"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "preparation", label: "チャレンジ開始前の準備（5分）" },
  { id: "challenges", label: "7つのチャレンジ" },
  { id: "next-step", label: "チャレンジを終えて：次のステップ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const challenges = [
  {
    id: "challenge-01",
    number: "01",
    title: "仕事のメールを代わりに書いてもらう",
    time: "3分",
    purpose: "AIが文章作成の強力な相棒になることを体感する",
    prompt:
      "以下の状況のビジネスメールを書いてください。\n・宛先：取引先の担当者（3年来の付き合い）\n・用件：今月中の納品が予定より1週間遅れる旨のお詫びと代替案の提示\n・トーン：誠実かつ丁寧に、でも重すぎない",
    expected:
      "あいさつから始まり、お詫びの言葉、遅延の理由（簡潔に）、代替案、再度のお詫びで締める、自然なビジネスメールが30秒で返ってきます。",
    point:
      "完璧じゃなくてOK。「もう少し丁寧に」「結論を先に」と追加指示を出すと、会話しながら育てていけます。",
    encouragement: "このチャレンジで「下書きをAIに任せる」という感覚がつかめます。",
  },
  {
    id: "challenge-02",
    number: "02",
    title: "難しいニュースを小学生向けに説明してもらう",
    time: "3分",
    purpose: "AIの「翻訳力」を体感する。難しい情報をわかりやすくする能力",
    prompt:
      "以下のニュースを、小学校4年生でもわかるように説明してください。難しい言葉は使わず、身近な例え話を使ってください。\n\n【ニュースの内容をコピペして貼り付け】",
    expected:
      "経済ニュースや政治ニュースが、子どもでもわかる言葉に「翻訳」されて返ってきます。「円安って何？」を「お菓子の値段が上がる仕組み」として説明してくれたりします。",
    point:
      "ニュース以外にも、契約書・保険書類・専門用語など「意味がわからない文章」に使えます。",
    encouragement: "理解できなかったことが突然わかる瞬間——これがAIの「翻訳力」です。",
  },
  {
    id: "challenge-03",
    number: "03",
    title: "自分の悩みを相談して、アドバイスをもらう",
    time: "5分",
    purpose: "AIが「相談相手」になれることを体験する",
    prompt:
      "私は今【悩みや困っていること】で悩んでいます。急かさず、まず私の状況についていくつか質問してください。私の答えを聞いてから、一緒に考えてください。",
    expected:
      "AIが「それは具体的にどんな状況ですか？」「どのくらい続いていますか？」と質問を返してきます。対話を重ねると、自分の頭の中が整理されていくような感覚を体験できます。",
    point:
      "仕事の悩み・人間関係・将来の不安など、何でもOK。AIは否定しないし、急かさない。整理のための壁打ち相手として使えます。",
    encouragement: "友人に言いにくいことも、AIなら気軽に話せます。",
  },
  {
    id: "challenge-04",
    number: "04",
    title: "来週の夕食メニューを1週間分考えてもらう",
    time: "3分",
    purpose: "日常生活でのAI活用を体感する。「献立を考える」というありふれた悩みに効く",
    prompt:
      "来週の夕食メニューを月〜日の7日分考えてください。条件：\n・家族構成：大人2人、子ども1人（小学生）\n・苦手な食材：【苦手なものを入力、なければ「特になし」】\n・予算感：1食あたり500〜800円程度\n・できれば栄養バランスも考慮して",
    expected:
      "月曜から日曜まで、具体的なメニュー名と簡単な理由が返ってきます。さらに「月曜のレシピを詳しく教えて」と追加質問すると材料・手順まで教えてくれます。",
    point:
      "「冷蔵庫に○○と△△がある。今日の夕食を考えて」という使い方も実用的。毎日の献立迷いが一瞬で解決します。",
    encouragement: "「こんな使い方でいいの？」と思うくらい日常的な相談に一番使えます。",
  },
  {
    id: "challenge-05",
    number: "05",
    title: "自分のSNSプロフィールを改善してもらう",
    time: "5分",
    purpose: "AIが「文章のブラッシュアップ役」になることを体験する",
    prompt:
      "私のSNSプロフィール（X/Instagram/LinkedInなど）を改善してください。\n\n現在のプロフィール：\n【今のプロフィール文を入力】\n\n目的：【何のために使っているか（仕事の人脈を広げたい/趣味仲間を見つけたい等）】\n\n3パターン案を出してください。",
    expected:
      "現在のプロフィール文を分析した上で、目的に合わせた3つの改善案が返ってきます。自分では気づかなかった言い回しや切り口を提示してくれます。",
    point:
      "自己紹介文・プレゼンのイントロ・名刺の肩書きなど「自分を表現する言葉」の改善に全般的に使えます。",
    encouragement: "自分の言葉を「外の目で見てもらう」——これがAIと人間の協働の形です。",
  },
  {
    id: "challenge-06",
    number: "06",
    title: "英語のメールや文章を日本語に訳してもらう",
    time: "3分",
    purpose: "AIの翻訳力と文脈読み取り力を体感する。Google翻訳との違いを感じる",
    prompt:
      "以下の英語のメール（文章）を日本語に翻訳し、以下も教えてください。\n1. 送り主が最も伝えたいこと（要点）\n2. 文章のトーン（丁寧/フォーマル/急いでいる/など）\n3. 返信が必要な場合、どう返すべきか（日本語と英語の両方で）\n\n【英語の文章を貼り付け】",
    expected:
      "単なる翻訳だけでなく、相手の意図・感情トーン・返信の提案まで一括で返ってきます。「この人、ちょっと焦ってるな」という文脈まで読んでくれることも。",
    point:
      "英語が苦手でも海外とのやり取りに自信が持てるようになります。英語メールの作成も同様に依頼できます。",
    encouragement: "英語アレルギーが少し和らぐ瞬間を体験してください。",
  },
  {
    id: "challenge-07",
    number: "07",
    title: "今の自分の仕事の課題を整理してもらう",
    time: "10分",
    purpose: "AIが「思考の整理役」として機能することを体感する最も深い体験",
    prompt:
      "私の仕事の課題を整理したいです。以下の状況から、課題の優先度をつけてください。\n\n【自分の仕事・役割・現在困っていること・その背景をできるだけ詳しく書く】\n\n整理してほしいこと：\n1. 今最も解決すべき課題はどれか\n2. それぞれの課題に対してできる具体的なアクション\n3. まず今週やるべき1つのこと",
    expected:
      "書き込んだ情報をもとに、課題の優先度整理・具体的なアクションプラン・今週の最優先タスクが整理されて返ってきます。「こんな視点があったのか」という気づきが生まれることも多い。",
    point:
      "「情報を整理してもらう」という使い方の中で最も高度です。自分の状況を詳しく書けば書くほど、回答の質が上がります。",
    encouragement: "10分かけて書いた情報が、すっきり整理されて返ってくる。AIコンサルの体験です。",
  },
] as const;

export default function Ai30MinChallengeBeginnerPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "30分で体験できる7つのAIチャレンジ" },
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
                title="生成AIを今日から実感！初心者でも30分で体験できる7つのチャレンジ"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIを今日から実感！初心者でも30分で体験できる7つのチャレンジ
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「生成AIって結局何がいいの？」という疑問に、一番早く答える方法は<strong>自分で体験すること</strong>です。
            この記事では、AIの知識ゼロ・スマホ1台・合計30分以内で体験できる7つのチャレンジをご用意しました。
            プロンプト（AIへの指示文）はそのままコピペするだけ。難しいことは何もありません。
            チャレンジを重ねるごとに「できた！」という小さな達成感が積み重なり、
            AIが身近な道具になっていく感覚を体験してください。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          体験後にもっと深く学びたい方は
          <Link href="/academy/blog/chatgpt-wow-moments-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTに感動した10の瞬間
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIが怖い・難しいを乗り越えるガイド
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
              7つのチャレンジは合計30分以内。スマホだけで、今日今すぐ始められる
            </li>
            <li className="pl-1 marker:text-gray-500">
              プロンプトはコピペOK。【】内を自分の状況に書き換えるだけでOK
            </li>
            <li className="pl-1 marker:text-gray-500">
              メール・翻訳・相談・献立・SNS・仕事整理——日常のあらゆる場面でAIが使えると実感できる
            </li>
            <li className="pl-1 marker:text-gray-500">
              「できた！」の積み重ねが、AI活用の自信につながる
            </li>
          </ul>
        </motion.section>

        {/* 準備 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="preparation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            チャレンジ開始前の準備（5分）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            チャレンジに必要なのは<strong>AIツールのアカウント（無料）</strong>だけです。まだ持っていない方は以下の手順で登録してください。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <section className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-base font-bold text-gray-900">ChatGPT（推奨）</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                chatgpt.com にアクセス→「始める」→Googleアカウントまたはメールで登録（2分）。スマホアプリ（ChatGPT）もあります。
              </p>
              <p className="mt-3 text-xs font-semibold text-emerald-700">✅ 無料で今すぐ使えます</p>
            </section>
            <section className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-base font-bold text-gray-900">Claude</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                claude.ai にアクセス→「Sign Up」→Googleアカウントまたはメールで登録（2分）。文章の質が高いと評判。
              </p>
              <p className="mt-3 text-xs font-semibold text-emerald-700">✅ 無料で今すぐ使えます</p>
            </section>
            <section className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-base font-bold text-gray-900">Gemini</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                gemini.google.com にアクセス→Googleアカウントでログイン（Googleアカウントがあれば即利用可能）。
              </p>
              <p className="mt-3 text-xs font-semibold text-emerald-700">✅ Googleアカウントだけで使えます</p>
            </section>
          </div>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">始める前の注意点</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-amber-900">
              <li className="pl-1 marker:text-amber-400">名前・住所・電話番号などの個人情報は入力しないこと</li>
              <li className="pl-1 marker:text-amber-400">会社の機密情報は入力しないこと</li>
              <li className="pl-1 marker:text-amber-400">AIの回答は参考情報。重要な判断は必ず自分で確認すること</li>
            </ul>
          </div>
        </motion.section>

        {/* 7つのチャレンジ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="challenges" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            7つのチャレンジ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            チャレンジ1から順に試してもいいし、興味があるものから始めてもOKです。
            プロンプトの【】内は自分の状況に合わせて書き換えてください。
          </p>

          <div className="mt-8 space-y-10">
            {challenges.map((challenge, index) => (
              <section
                key={challenge.id}
                id={challenge.id}
                className="scroll-mt-28 rounded-xl border-2 border-will-primary/15 bg-white p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex-shrink-0 rounded-full bg-will-primary px-3 py-1 text-sm font-bold text-white">
                    チャレンジ {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    ⏱ {challenge.time}
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-3">
                    <p className="text-xs font-semibold text-gray-500">このチャレンジの目的</p>
                    <p className="mt-1 text-sm leading-6 text-gray-700">{challenge.purpose}</p>
                  </div>
                  <div className="rounded-lg bg-emerald-50 p-3">
                    <p className="text-xs font-semibold text-emerald-700">期待できる結果</p>
                    <p className="mt-1 text-sm leading-6 text-gray-700">{challenge.expected}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold text-gray-500">コピペOKプロンプト</p>
                  <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-gray-900 p-4 text-xs leading-6 text-green-300">
                    {challenge.prompt}
                  </pre>
                </div>

                <div className="mt-4 rounded-lg bg-amber-50 px-4 py-3">
                  <p className="text-xs font-semibold text-amber-800">活用のポイント</p>
                  <p className="mt-1 text-sm leading-6 text-amber-900">{challenge.point}</p>
                </div>

                <p className="mt-3 text-sm font-medium italic text-will-primary">
                  💡 {challenge.encouragement}
                </p>
              </section>
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
          <MidArticleCtaBox slug="ai-30min-challenge-beginner" />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="next-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            チャレンジを終えて：次のステップへ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            7つのチャレンジを終えたあなたは、もうAIユーザーです。おめでとうございます！
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ここからさらに活用の幅を広げるために、以下の3つのステップをおすすめします。
          </p>
          <div className="mt-6 space-y-4">
            <section className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-base font-bold text-gray-900">ステップ1：自分の「困りごとリスト」を作る</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                仕事・生活・勉強で「毎回時間がかかっていること」「面倒くさいと感じること」を5つメモしてください。
                それをAIに頼めるかを一つずつ試してみましょう。AIの使い道は「困りごと」の数だけあります。
              </p>
            </section>
            <section className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-base font-bold text-gray-900">ステップ2：プロンプトの書き方を学ぶ</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                今回はコピペで体験しましたが、プロンプトの基本パターンを覚えると応用が利きます。
                <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  ChatGPTプロンプトの書き方入門
                </Link>
                で、15の型とNG/OK例を学べます。
              </p>
            </section>
            <section className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-base font-bold text-gray-900">ステップ3：30日の学習プランを立てる</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                「続けられるか不安」という方のために、AIリブートのLINEでは「30日学習プランテンプレ」を無料配布しています。
                今日の体験をベースに、自分だけの計画を作りましょう。
              </p>
            </section>
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
            まとめ：30分の体験が、AI活用の扉を開く
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事の7つのチャレンジで体験できること：
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">AIがメール作成・翻訳・要約・提案を「秒」でやってくれる</li>
            <li className="pl-1 marker:text-gray-500">相談相手・壁打ち役として思考整理を助けてくれる</li>
            <li className="pl-1 marker:text-gray-500">日常生活（献立・SNS・仕事）にも自然に溶け込む</li>
            <li className="pl-1 marker:text-gray-500">「できた！」という小さな成功体験が積み重なる</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIは難しいツールではありません。話しかけて、試して、修正する——その繰り返しの中で、
            あなた自身のAI活用スタイルが育っていきます。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            まず今日、1つのチャレンジを試してみてください。最初の「できた！」がすべての始まりです。
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
            title="まずは今日の体験をベースに、自分だけの30日学習プランを作ろう"
            description="「チャレンジはできた。でもこれをどう続けるか不安」という方のために、AIリブートのLINEでは「30日学習プランテンプレ」を無料配布しています。今日の体験を活かして、自分に合ったペースで学習を続けられます。"
            buttonLabel="LINEで30日学習プランテンプレを受け取る（無料）"
          />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-wow-moments-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTに「すごい」と感じた瞬間10選｜初めて使ったときの感動と活用法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
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
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを「使えるようになった人」がやっていた5つのこと
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-3month-journey" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを3ヶ月使い続けたら、こんな変化が起きた
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを仕事で使い始めた人の「最初の30日」完全ガイド
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
