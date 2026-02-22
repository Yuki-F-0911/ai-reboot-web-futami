"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import {
  ArticleH2,
  ArticleH3,
  Callout,
  SummaryBox,
  RichTable,
  RichFAQ,
} from "@/components/blog/ArticleBody";

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

const keywordTags = ["ChatGPT 検索機能", "ChatGPT Search", "ウェブ検索 AI", "Google 使い分け", "ChatGPT 無料"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-search", label: "ChatGPTの検索機能とは" },
  { id: "free-plan", label: "無料プランでも使える？" },
  { id: "how-to-use", label: "使い方ステップバイステップ" },
  { id: "vs-google", label: "ChatGPT検索 vs Google：使い分け早見表" },
  { id: "use-cases", label: "日常活用ユースケース8選" },
  { id: "limitations", label: "苦手なことと注意点（ハルシネーション対策）" },
  { id: "tips", label: "もっと便利に使う5つのコツ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "conclusion", label: "まとめ" },
] as const;

const summaryItems = [
  "ChatGPTの検索機能（Search）は2024年後半から無料プランを含む全ユーザーに順次開放。今すぐ試せる",
  "Googleとの最大の違いは「回答が文章で返ってくる」こと。複数サイトを読み比べる手間がなく、まとめて答えをもらえる",
  "得意なのは「最新情報を交えた質問への回答」「複数情報の要約」。苦手なのはリアルタイム株価・速報ニュースなど秒単位で変わる情報",
  "ハルシネーション（事実と異なる情報の生成）は検索機能を使っても完全にはなくならない。重要な情報は引用元リンクを必ず確認",
  "日常ユースケースのおすすめは：ニュース調査・商品比較・旅行情報収集・専門用語の解説・健康情報の下調べなど",
] as const;

const howToSteps = [
  {
    step: "Step 1：ChatGPTを開く",
    content:
      "ChatGPT（chatgpt.com）をブラウザで開くか、スマホアプリを起動します。無料アカウントをお持ちでない方は、メールアドレスまたはGoogleアカウントで無料登録できます。すでにアカウントがある方はサインインしてください。",
  },
  {
    step: "Step 2：検索アイコンを確認する",
    content:
      "チャット入力欄の下部または左側に「🌐（地球儀）」アイコンや「Search」ボタンが表示されていれば、検索機能が利用可能です。表示されていない場合は、入力欄左の「+」アイコンをタップして「Search the web」をオンにしましょう。",
  },
  {
    step: "Step 3：質問を入力して送信する",
    content:
      "普通の日本語で質問を送信するだけです。特別な操作は不要で、ChatGPTが自動的にウェブを検索して回答に組み込みます。「今日のニュースを教えて」「〇〇とはどういう意味？最新情報で教えて」のように入力してみましょう。",
  },
  {
    step: "Step 4：引用元リンクを確認する",
    content:
      "回答の末尾または文中に「出典：〇〇」「[1][2]」のような引用元表示が付きます。重要な情報（医療・法律・金融など）は、必ずリンク先の元記事を開いて内容を確認してください。AIの回答をそのまま信じるのは禁物です。",
  },
  {
    step: "Step 5：追加で深掘りする",
    content:
      "「もっと詳しく教えて」「この情報は信頼できる？」「別の視点からも教えて」と追加質問できます。一度の検索で満足できない場合でも、対話を重ねるほど必要な情報に近づけます。Googleとは異なり、会話が続く点がChatGPT検索の強みです。",
  },
] as const;

const useCases = [
  {
    icon: "📰",
    title: "ニュース・時事情報の素早い把握",
    description:
      "「今週の日本経済の主なニュースを3つ要約して」「〇〇事件について最新情報を教えて」のように聞くと、複数のニュースサイトの情報をまとめて要約してくれます。毎朝5分でニュースを把握したい方に最適です。",
    example: "「今日の朝のニュースで特に重要なものを3つ、わかりやすく要約してください」",
  },
  {
    icon: "🛒",
    title: "商品・サービスの比較と口コミ調査",
    description:
      "「〇〇の掃除機のメリット・デメリットを教えて」「スマホのAとBを比較して、どちらが初心者向け？」のように聞くと、複数の評判情報をまとめて教えてくれます。ただし、最新の価格は各ショッピングサイトで確認を。",
    example: "「ルンバとブラーバの違いを教えて。一人暮らしの狭い部屋向けにはどちらがおすすめ？」",
  },
  {
    icon: "✈️",
    title: "旅行の事前情報収集",
    description:
      "「〇〇（観光地）の見どころと2026年最新の注意点」「〇〇空港から市内へのアクセス方法」など、旅行前の下調べに活躍します。複数のブログや観光サイトを読み比べる手間が大幅に省けます。",
    example: "「台湾・台北旅行でのMRTの乗り方と便利なICカードについて教えてください」",
  },
  {
    icon: "📚",
    title: "専門用語・難しい言葉の解説",
    description:
      "「量的緩和ってどういう意味？最近のニュースと合わせて説明して」のように、難しい言葉を時事ニュースと絡めて解説してもらえます。Google検索で複数の説明記事を読み比べる必要がなくなります。",
    example: "「インフレとは何ですか？今の日本の状況も踏まえて、初心者にわかるように説明してください」",
  },
  {
    icon: "🏥",
    title: "健康・医療情報の下調べ（受診前の予習）",
    description:
      "「〇〇という症状について調べたい」「□□という薬の一般的な副作用は？」など、病院へ行く前の予備知識集めに役立ちます。ただし、必ず「受診前の参考情報」として使い、自己診断・自己判断は禁物です。",
    example: "「健康診断でHbA1cが6.0と出ました。これはどういう意味か教えてください（受診前の参考として）」",
  },
  {
    icon: "📱",
    title: "SNS・話題のトレンド調査",
    description:
      "「最近Xで話題になっていることを教えて」「今流行っている〇〇について詳しく知りたい」と聞くと、最新のトレンド情報を教えてくれます。SNSをあまりチェックしない方でも、話題についていけます。",
    example: "「最近バズっているAI関係のニュースを3つ、わかりやすく説明してください」",
  },
  {
    icon: "🍽️",
    title: "飲食店・お店の情報収集",
    description:
      "「〇〇駅近くのランチにおすすめのお店を教えて（2026年時点で人気の場所）」のように聞けます。ただし、営業時間・定休日・予約の必要性は公式サイトか電話で確認するのが安全です。",
    example: "「渋谷でディナーに使えるイタリアンを探しています。雰囲気の良い落ち着いたお店は？」",
  },
  {
    icon: "💼",
    title: "仕事のリサーチ・業界情報収集",
    description:
      "「〇〇業界の最新動向を教えて」「競合A社とB社の強みの違いは？」など、ビジネスリサーチにも活用できます。報告書や企画書の事前情報収集として、複数の業界ニュースをまとめて確認できます。",
    example: "「2026年の生成AI市場の動向を、主要なトピックを3つ挙げて解説してください」",
  },
] as const;

const tips = [
  {
    tip: "コツ1：「最新情報で」「〇〇年時点で」と明示する",
    detail:
      "ChatGPTは学習データの知識と検索結果を組み合わせて回答します。「最新の情報で」「2026年現在の」と一言添えることで、より新しい検索結果を優先して回答してくれます。古い情報と新しい情報が混在しやすい話題（法律・制度・サービス内容など）では特に有効です。",
  },
  {
    tip: "コツ2：情報源を聞く",
    detail:
      "「その情報の出典を教えてください」と追加で質問すると、参照したウェブサイトや記事のリンクを提示してくれます。特に重要な決断に関わる情報（医療・法律・投資など）は、引用元を自分で確認する習慣をつけましょう。",
  },
  {
    tip: "コツ3：「複数の視点から教えて」と付け加える",
    detail:
      "一方的な意見に偏りやすいテーマ（政治・健康法・投資など）では、「賛成意見と反対意見を両方教えて」「複数の視点から解説して」と加えると、偏りのないバランスの良い情報が得られやすくなります。",
  },
  {
    tip: "コツ4：曖昧な結果は「別のキーワードで調べ直して」と頼む",
    detail:
      "回答が期待と違ったり薄かったりした場合、「別の言い方で検索し直してください」「〇〇という観点で改めて調べてください」と指示できます。ChatGPTは再度異なるキーワードで検索し直してくれます。Googleのように自分でキーワードを考える必要がありません。",
  },
  {
    tip: "コツ5：Googleとの使い分けを意識する",
    detail:
      "「概要を知りたい・まとめてほしい」ならChatGPT検索、「特定の公式サイトにアクセスしたい」「最安値を調べたい」「リアルタイムの株価・天気を知りたい」ならGoogle（またはYahoo）が向いています。どちらが優れているかではなく、目的に応じて使い分けるのが正解です。",
  },
] as const;

export default function ChatgptWebSearchGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPT検索機能ガイド2026" },
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
                title="ChatGPTの検索機能が超便利！使い方・活用術を初心者向けに解説【2026年最新】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTの検索機能が超便利！使い方・活用術を初心者向けに解説【2026年最新】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTって、質問に答えてくれるだけじゃなくて、ネットも検索できるの？」——そう思った方、正解です。
            2024年後半から、ChatGPTにはウェブ検索機能が搭載され、無料プランのユーザーでも最新情報を含む回答を得られるようになりました。
            Googleのように自分でリンクを開いて読み比べる必要がなく、
            AIが複数のサイトをまとめて読んで「わかりやすい日本語の回答」として届けてくれます。
            この記事では、ChatGPT検索の使い方・Googleとの違いと使い分け・日常の活用ユースケース8選・注意すべきハルシネーションの話まで、
            初心者の方でもすぐ使えるよう丁寧に解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          ChatGPT全般の使い方を学びたい方は
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプト入門
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            上級活用テクニック
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            カスタム指示の設定方法
          </Link>
          もあわせてご覧ください。
        </p>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox title="要点まとめ（結論先出し）" items={summaryItems} />
        </motion.section>

        {/* ChatGPTの検索機能とは */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-is-search">ChatGPTの検索機能（Search）とは何か</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTの検索機能（ChatGPT Search）は、AIがリアルタイムでウェブを検索し、
            その結果をもとに回答を生成する機能です。
            従来のChatGPTは学習データ（一定の時点までの情報）しか参照できませんでしたが、
            検索機能を使うことで<strong>「今日のニュース」「最新の製品情報」「現在の法律・制度」</strong>など、
            最新情報を含む回答が得られるようになりました。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            仕組みを簡単に言うと、
            <strong>「GoogleやBingなどの検索エンジンで検索した結果の記事を、AIが読んでまとめて答えてくれる」</strong>
            イメージです。
            あなたが複数のサイトを開いて読み比べる作業をAIが代わりにやってくれる——
            これがChatGPT検索の最大の価値です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            また、通常のGoogleと異なり、<strong>会話が続く</strong>のもChatGPT検索の大きな特徴です。
            「さっきの情報についてもっと詳しく」「別の角度からも教えて」と追加質問を重ねることで、
            どんどん深い情報を引き出せます。
          </p>

          <Callout type="info" title="「ChatGPT Search」の正式名称について">
            この機能はOpenAIが「ChatGPT Search」と呼んでいますが、ユーザーからは単に「Search機能」「ウェブ検索機能」と呼ばれています。
            本記事でも「検索機能」として統一して説明します。なお、機能はモデルや地域によって表示が異なる場合があります。
          </Callout>
        </motion.section>

        {/* 無料プランでも使える？ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="free-plan">無料プランでも使える？プラン別の対応状況（2026年2月時点）</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            <strong>はい、無料プランでも使えます。</strong>
            OpenAIは2024年後半から段階的に無料ユーザーへの検索機能の開放を進めており、
            2026年2月時点では無料プランのユーザーでもウェブ検索機能を利用できます。
          </p>

          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">プラン</th>
                <th className="px-4 py-3 font-semibold text-gray-900">検索機能</th>
                <th className="px-4 py-3 font-semibold text-gray-900">主な制限</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">無料プラン</td>
                <td className="px-4 py-3 text-gray-600">◎ 利用可</td>
                <td className="px-4 py-3 text-gray-600">1日の利用回数に上限あり。混雑時に制限がかかることがある</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">Plus（月額約3,000円）</td>
                <td className="px-4 py-3 text-gray-600">◎ 優先利用可</td>
                <td className="px-4 py-3 text-gray-600">無料より多い回数。高速レスポンス優先</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">Pro（月額約30,000円）</td>
                <td className="px-4 py-3 text-gray-600">◎ 無制限に近い利用</td>
                <td className="px-4 py-3 text-gray-600">ほぼ無制限で高度な検索が可能</td>
              </tr>
            </tbody>
          </RichTable>

          <Callout type="tip" title="無料で使うときのコツ">
            無料プランでは1日あたりの検索回数に上限があります。重要な調べものは集中して行い、
            軽い質問（ChatGPTの学習データで答えられるもの）には通常チャットを使うと節約できます。
            混雑する時間帯（昼・夜の利用ピーク時）を避けると快適に使えます。
          </Callout>
        </motion.section>

        {/* 使い方ステップバイステップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="how-to-use">ChatGPT検索の使い方ステップバイステップ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            難しい設定は一切不要です。基本的には普通のChatGPTと同じように使えます。
          </p>
          <div className="mt-8 space-y-6">
            {howToSteps.map((step, index) => (
              <div key={step.step} className="flex gap-5 rounded-xl border border-gray-200 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-will-primary text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{step.step}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-700">{step.content}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout type="tip" title="今すぐ試せるプロンプト例">
            <ul className="space-y-2">
              <li>「最近の日本の物価上昇について、2026年最新の状況を教えてください」</li>
              <li>「iPhone 17とAndroidの最新機種を比較して、普段使いにおすすめなのはどちら？」</li>
              <li>「今週末、東京で開催されているイベントを教えてください」</li>
            </ul>
          </Callout>
        </motion.section>

        {/* ChatGPT検索 vs Google */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="vs-google">ChatGPT検索 vs Google：使い分け早見表</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「ChatGPT検索がすごいなら、Googleはもう不要？」——そんなことはありません。
            両者にはそれぞれ得意・不得意があります。正しい使い分けを知るのが一番の近道です。
          </p>

          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">シーン</th>
                <th className="px-4 py-3 font-semibold text-gray-900 bg-will-lighter/30">ChatGPT検索</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Google</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">複数情報をまとめて理解したい</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">◎ 得意（要約して回答）</td>
                <td className="px-4 py-3 text-gray-600">△ 自分でサイトを読む必要あり</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">最安値・価格比較</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">△ 概算のみ（要確認）</td>
                <td className="px-4 py-3 text-gray-600">◎ 価格サイトに直接アクセス</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">特定の公式サイトを開きたい</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">△ URLを開く操作はできない</td>
                <td className="px-4 py-3 text-gray-600">◎ クリック一発でアクセス</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">リアルタイムの株価・為替</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">✕ 数分〜数十分のラグあり</td>
                <td className="px-4 py-3 text-gray-600">◎ ほぼリアルタイム</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">旅行先の概要・観光情報の把握</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">◎ 会話で深掘りできる</td>
                <td className="px-4 py-3 text-gray-600">○ ブログ・観光サイトを参照</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">専門用語・難しい概念の解説</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">◎ 自分のレベルに合わせてくれる</td>
                <td className="px-4 py-3 text-gray-600">○ 解説記事を検索</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">地図・経路案内</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">✕ 非対応</td>
                <td className="px-4 py-3 text-gray-600">◎ Googleマップと連携</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">ニュースの要約・解説</td>
                <td className="px-4 py-3 text-gray-600 bg-will-lighter/10">◎ わかりやすく説明してくれる</td>
                <td className="px-4 py-3 text-gray-600">○ ニュースサイトの一覧</td>
              </tr>
            </tbody>
          </RichTable>

          <p className="mt-5 text-base leading-8 text-gray-700">
            一言でまとめると、<strong>「何かを理解したい・まとめてほしい」ならChatGPT検索、「特定の場所に行きたい・リアルタイムのデータが必要」ならGoogle</strong>です。
            どちらが優れているかではなく、目的で使い分けるのがスマートな活用法です。
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
          <MidArticleCtaBox slug="chatgpt-web-search-guide" />
        </motion.section>

        {/* 日常活用ユースケース8選 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="use-cases">ChatGPT検索の日常活用ユースケース8選</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実際にどんな場面で使えるのか、初心者の方でもすぐ試せる8つのユースケースをご紹介します。
          </p>
          <div className="mt-8 space-y-6">
            {useCases.map((useCase, index) => (
              <section key={useCase.title} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{useCase.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      <span className="mr-2 text-will-primary">活用{index + 1}.</span>
                      {useCase.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{useCase.description}</p>
                    <div className="mt-3 rounded-md bg-gray-50 p-3">
                      <p className="text-xs font-semibold text-gray-500">プロンプト例</p>
                      <p className="mt-1 text-sm leading-7 text-gray-700">{useCase.example}</p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 苦手なことと注意点 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="limitations">ChatGPT検索が苦手なことと注意点（ハルシネーション対策）</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPT検索は非常に便利ですが、正直に言うと苦手なこともあります。
            「万能だと思って使ったら間違った情報を信じてしまった」という失敗を防ぐため、
            しっかりと把握しておきましょう。
          </p>

          <ArticleH3>ハルシネーション（事実と異なる情報の生成）は検索でも起こる</ArticleH3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            「ハルシネーション」とは、AIが事実でない情報をもっともらしく生成してしまう現象です。
            検索機能を使っても、この問題は完全にはなくなりません。
            AIが参照するウェブサイト自体が誤情報を掲載していた場合、その情報をそのまま回答に含めることがあります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            <strong>対策：</strong>回答に含まれる引用元リンクを必ず確認する習慣をつけましょう。
            特に医療・法律・金融・人の生死に関わる情報は、AIの回答を出発点にして
            必ず公式サイトや専門家に確認してください。
          </p>

          <ArticleH3>リアルタイム情報には限界がある</ArticleH3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            「今この瞬間の株価」「速報ニュース（発生直後）」「リアルタイムの交通情報」など、
            秒単位で更新される情報はChatGPT検索では対応できません。
            数分〜数十分のタイムラグが生じる場合があります。
            このような情報は専門サービス（Yahoo!ファイナンス・NHKニュース・Googleマップなど）を使いましょう。
          </p>

          <ArticleH3>地域限定・ローカル情報は精度が下がることがある</ArticleH3>
          <p className="mt-3 text-base leading-8 text-gray-700">
            「〇〇市の今週末のイベント」「近所のおすすめ飲食店の最新口コミ」など、
            非常にローカルな情報は検索の網に引っかかりにくく、
            古い情報や不正確な情報が含まれることがあります。
            地元の飲食店情報はGoogleマップ・食べログなどの専門サービスを使うのが確実です。
          </p>

          <Callout type="warning" title="医療・法律・金融情報の取り扱いに注意">
            ChatGPT検索で得た医療・法律・税務・投資に関する情報は、あくまで「参考情報」です。
            実際の判断には必ず専門家（医師・弁護士・税理士・FPなど）にご相談ください。
            AIの回答だけで行動するのは非常に危険です。
          </Callout>
        </motion.section>

        {/* 5つのコツ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="tips">ChatGPT検索をもっと便利に使う5つのコツ</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ただ使うだけでも十分便利ですが、ちょっとしたコツを知っておくと情報の質がぐっと上がります。
          </p>
          <div className="mt-8 space-y-6">
            {tips.map((item, index) => (
              <div key={item.tip} className="rounded-xl border-l-4 border-will-primary bg-gray-50 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.tip}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
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
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={faqItems} />
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
          <ArticleH2 id="conclusion">まとめ：ChatGPT検索はGoogleの「競合」ではなく「相棒」</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事でお伝えしてきたポイントを振り返りましょう。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              ChatGPT検索は無料プランでも使える。複数サイトを読み比べる手間を省いて「まとめた回答」を得られる
            </li>
            <li className="pl-1 marker:text-gray-500">
              Googleとの使い分けが大切。「理解・まとめ」はChatGPT、「リアルタイム価格・公式サイトへのアクセス」はGoogle
            </li>
            <li className="pl-1 marker:text-gray-500">
              日常の活用シーンは豊富。ニュース把握・商品比較・旅行調査・専門用語解説など8つのユースケース
            </li>
            <li className="pl-1 marker:text-gray-500">
              ハルシネーションは検索でも起きる。重要な情報は引用元を必ず確認する習慣を
            </li>
            <li className="pl-1 marker:text-gray-500">
              「最新情報で」「複数の視点から」などのコツを使うと情報の質がさらに上がる
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPT検索を使いこなすと、インターネットの情報収集の質と速度が大きく変わります。
            まずは今日、気になっているニュースや疑問を一つ、ChatGPTに検索させてみてください。
            「こんなに楽に調べられるんだ！」という体験が、AI活用の入り口になります。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            ChatGPTをもっと活用するヒントを毎週お届けしています。AIリブートのLINEをぜひ登録してください。
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
            title="ChatGPTの最新機能・活用術を毎週配信中"
            description="ChatGPTの検索機能をはじめ、最新のAI機能や実務ですぐ使えるプロンプト集を、AIリブートのLINE公式アカウントで毎週配信しています。登録は無料。初心者でも安心してAIを使い始めるサポートをします。"
            buttonLabel="LINEで登録する（無料）"
            href="/line"
          />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">次のステップ</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ChatGPT検索を使いこなしたら、プロンプトの書き方を学ぶとさらに精度の高い回答が得られます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
            </Link>
            <Link
              href="/academy/blog/chatgpt-advanced-tips"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              ChatGPT上級活用テクニック
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT上級活用テクニック｜使いこなしの差がつく15の方法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTカスタム指示完全ガイド｜設定するだけで毎回の回答が変わる方法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-canvas-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT Canvas完全ガイド2026｜文書・コード作成に革命
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-overview-map-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                2026年春のAI全体マップ｜初心者が知っておくべきツールと始め方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-healthy-usage-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIに頼りすぎていない？健全なAI活用のための7つのルール
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
