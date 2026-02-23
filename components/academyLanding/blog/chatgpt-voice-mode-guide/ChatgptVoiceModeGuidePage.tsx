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

const keywordTags = [
  "ChatGPT 音声モード 使い方",
  "ChatGPT 音声会話",
  "AI 音声入力 活用",
  "ChatGPT 話しかける",
  "AI 音声 スマホ",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-voice-mode", label: "そもそもChatGPTの音声モードって？" },
  { id: "how-to-start", label: "始め方：3タップで音声会話スタート" },
  { id: "scene-1", label: "シーン1：通勤中に「今日のニュースまとめて」" },
  { id: "scene-2", label: "シーン2：料理中に「次の手順は？」" },
  { id: "scene-3", label: "シーン3：英会話の練習相手として" },
  { id: "scene-4", label: "シーン4：運転中のハンズフリー情報検索" },
  { id: "scene-5", label: "シーン5：寝る前のブレスト・日記代わり" },
  { id: "voice-tips", label: "音声プロンプトのコツ：テキストとここが違う" },
  { id: "comparison", label: "ChatGPT・Claude・Gemini 音声機能比較" },
  { id: "privacy", label: "プライバシーと音声データの扱い" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

/* ---------- 会話吹き出しコンポーネント ---------- */
function VoiceBubble({
  messages,
}: {
  messages: readonly { role: "user" | "ai"; text: string }[];
}) {
  return (
    <div className="mt-4 space-y-3 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
      {messages.map((msg, i) => (
        <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
          {msg.role === "ai" && (
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
              AI
            </div>
          )}
          <div className={`max-w-[80%] ${msg.role === "user" ? "text-right" : ""}`}>
            <p className="text-xs font-semibold text-gray-500">
              {msg.role === "user" ? "あなた（音声入力）" : "AIの音声回答"}
            </p>
            <div
              className={`mt-1 inline-block rounded-2xl px-4 py-2.5 text-sm leading-7 ${
                msg.role === "user"
                  ? "rounded-tr-sm bg-blue-500 text-white"
                  : "rounded-tl-sm bg-gray-100 text-gray-700"
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>
            </div>
          </div>
          {msg.role === "user" && (
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
              You
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- シーンカード ---------- */
type SceneData = {
  icon: string;
  title: string;
  when: string;
  description: string;
  conversation: readonly { role: "user" | "ai"; text: string }[];
  tip: string;
};

const scenes: readonly SceneData[] = [
  {
    icon: "🚃",
    title: "通勤中に「今日のニュースまとめて」",
    when: "電車・バスの移動中（イヤホン使用）",
    description:
      "満員電車でスマホを操作する必要はありません。イヤホンをつけて話しかけるだけで、その日のニュースや天気、スケジュールの確認ができます。",
    conversation: [
      { role: "user", text: "今日のAI関連のニュース、3つくらい簡単に教えて" },
      {
        role: "ai",
        text: "はい、今日のAI関連ニュースを3つお伝えしますね。\n\n1つ目、OpenAIが新しい画像生成機能をリリースしました。より自然な写真風の画像が作れるようになっています。\n\n2つ目、GoogleがGeminiの日本語対応を強化したと発表しました。\n\n3つ目、経産省がAIリスキリング補助金の対象講座を拡大するとのことです。\n\nどれか詳しく聞きたいものはありますか？",
      },
      { role: "user", text: "3つ目、もう少し詳しく教えて" },
    ],
    tip: "イヤホンのマイクを使えば、周りを気にせず小声で会話できます。片耳イヤホンなら周囲の音も聞こえて安全です。",
  },
  {
    icon: "🍳",
    title: "料理中に「次の手順は？」",
    when: "キッチンで手が濡れている・両手がふさがっているとき",
    description:
      "手が汚れていてスマホに触れないとき、音声モードが最高に便利です。レシピを聞きながら、手順を一つずつ教えてもらえます。",
    conversation: [
      {
        role: "user",
        text: "鶏むね肉で簡単な夕飯を作りたい。家にある調味料は醤油、みりん、酒、マヨネーズ。15分くらいで作れるレシピ教えて",
      },
      {
        role: "ai",
        text: "鶏むね肉のマヨ照り焼きはいかがですか？15分で作れますよ。\n\nまず、鶏むね肉を1センチくらいのそぎ切りにして、塩を軽く振ってください。できたら教えてくださいね。",
      },
      { role: "user", text: "切ったよ、次は？" },
      {
        role: "ai",
        text: "フライパンにマヨネーズ大さじ1を入れて中火で溶かしてください。そこに鶏肉を並べて、両面に焼き色がつくまで3分ずつ焼きます。焼けたら声かけてくださいね。",
      },
    ],
    tip: "「次は？」「できた」「もう一回言って」——短い言葉で会話を進められるのが音声モードの強みです。",
  },
  {
    icon: "🗣️",
    title: "英会話の練習相手として",
    when: "通勤前・昼休み・寝る前のスキマ時間",
    description:
      "英会話スクールに通う時間がなくても、ChatGPTが24時間対応の会話パートナーになります。発音を気にせず、何度でも繰り返し練習できます。",
    conversation: [
      {
        role: "user",
        text: "I want to practice English conversation. Can you be my conversation partner? Let's talk about weekend plans. Please correct my mistakes gently.",
      },
      {
        role: "ai",
        text: "Of course! I'd love to be your conversation partner. So, do you have any plans for this weekend? I'm curious to hear what you're thinking of doing!",
      },
      {
        role: "user",
        text: "I will go to shopping with my friend in Shibuya.",
      },
      {
        role: "ai",
        text: "That sounds like fun! Just a small note — it's more natural to say \"I'm going shopping with my friend\" instead of \"go to shopping.\" We don't use \"to\" before \"shopping\" in this case. What are you planning to shop for?",
      },
    ],
    tip: "音声モードなら実際の会話に近い練習ができます。「間違いを優しく直して」と最初にお願いすると、恥ずかしさなく上達できます。",
  },
  {
    icon: "🚗",
    title: "運転中のハンズフリー情報検索",
    when: "車の運転中・サイクリング中",
    description:
      "運転中にスマホを触るのは危険で違法です。でも音声モードなら、ハンズフリーで安全に情報を得られます。目的地の情報やちょっとした疑問をすぐに解決できます。",
    conversation: [
      {
        role: "user",
        text: "横浜でおすすめのラーメン屋を3つ教えて。駐車場があるところがいい",
      },
      {
        role: "ai",
        text: "横浜で駐車場があるラーメン屋さんですね。3つご紹介します。\n\n1つ目は吉村家。横浜家系ラーメンの総本山で、近隣にコインパーキングがあります。\n\n2つ目は...\n\n到着時間の目安が分かれば、混雑状況もお伝えできますよ。",
      },
    ],
    tip: "バックグラウンド会話をONにすると、画面を消していても音声会話が続きます（iOS の設定 > Voice Mode > Background Conversations）。",
  },
  {
    icon: "🌙",
    title: "寝る前のブレスト・日記代わり",
    when: "ベッドの中・リラックスタイム",
    description:
      "寝る前にスマホの画面を見るのは睡眠に悪いと言われますが、音声モードなら画面を見ずに済みます。その日あったことを話すだけで、思考の整理や翌日の準備ができます。",
    conversation: [
      {
        role: "user",
        text: "今日あったことを聞いて。朝のミーティングで新しいプロジェクトの話が出て、ちょっとワクワクしたんだけど、午後は書類仕事が溜まってて疲れた。あと同僚に相談されて嬉しかった。",
      },
      {
        role: "ai",
        text: "お疲れさまでした。充実した一日でしたね。\n\n新しいプロジェクトにワクワクしているのは素敵です。どんな内容か、もう少し教えてもらえますか？明日に向けて考えを整理するお手伝いもできますよ。\n\n同僚に頼ってもらえるのは、あなたが信頼されている証拠ですね。",
      },
    ],
    tip: "「今日の振り返りをして」「明日やることを整理して」と頼めば、音声で日記・タスク整理ができます。画面を見ないので睡眠の質も守れます。",
  },
] as const;

/* ---------- 音声プロンプトのコツ ---------- */
const voiceTips = [
  {
    title: "「えーっと」「あのー」をそのまま言ってOK",
    body: "テキストでは書かない言い淀みも、音声では自然に認識されます。完璧な文章を頭の中で組み立てる必要はありません。普段の話し言葉でそのまま話しかけてください。",
  },
  {
    title: "長い指示は区切って伝える",
    body: "テキストなら一度に長文を送れますが、音声では短い文を連続で話す方がうまく伝わります。「まず〇〇して」→AIの返答→「次に△△して」のように対話形式で進めましょう。",
  },
  {
    title: "「もう一回言って」が使える",
    body: "聞き逃してもテキストのように戻って読み返せないのが音声の弱点。でも「もう一回言って」「最後の部分だけ繰り返して」と頼めば、何度でも聞き直せます。",
  },
  {
    title: "静かな環境でなくても大丈夫",
    body: "ChatGPTの音声認識は雑音にかなり強くなっています。カフェや電車内でも、普通の声量で話せば正確に認識されます。ゆっくり・はっきり話す必要もありません。",
  },
  {
    title: "途中で遮って話し直せる",
    body: "AIの回答が長いときや、方向性が違うときは、途中で話しかけて遮れます。「ちょっと待って」「そうじゃなくて」と言えば、AIはすぐに聞く体制に切り替わります。",
  },
] as const;

/* ---------- 3ツール音声比較テーブル ---------- */
const voiceComparison = [
  {
    name: "ChatGPT",
    freeVoice: "利用可（最新GPT系モデル / 時間制限あり）",
    voices: "9種類",
    languages: "13言語（日本語対応）",
    video: "Plus/Pro のみ",
    background: "対応（iOS）",
    bestFor: "総合力No.1。日本語の音声会話を本格的に使いたい人",
  },
  {
    name: "Claude",
    freeVoice: "利用可（メッセージ数制限あり）",
    voices: "5種類",
    languages: "英語のみ（2026年2月時点）",
    video: "非対応",
    background: "非対応",
    bestFor: "英語での深い議論・文章推敲をしたい人",
  },
  {
    name: "Gemini Live",
    freeVoice: "無料・回数無制限",
    voices: "複数＋キャラクターボイス",
    languages: "40言語以上（日本語対応）",
    video: "無料で利用可",
    background: "非対応",
    bestFor: "とにかく無料で使い倒したい人。Google連携が多い人",
  },
] as const;

export default function ChatgptVoiceModeGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPT音声モード完全ガイド" },
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
                title="ChatGPT音声モード完全ガイド｜スマホで話しかけるだけのAI活用術"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            ChatGPT音声モード完全ガイド
          </h1>
          <p className="mt-2 text-lg text-gray-600" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            スマホで話しかけるだけのAI活用術【2026年版】
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>

          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTは便利そうだけど、文字を打つのが面倒で結局使っていない」——そんな方に朗報です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            実は、ChatGPTは<strong>スマホに話しかけるだけ</strong>で使えます。キーボード入力は一切不要。
            通勤中、料理中、運転中、寝る前——<strong>両手がふさがっているときでも、声だけでAIと会話できる</strong>のです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、ChatGPTの音声モードの始め方から、日常生活が変わる5つの活用シーン、
            テキスト入力と違う音声ならではのコツまで、すべてを図解付きで解説します。
            2026年2月時点の最新情報を反映しています。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプト入門
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-templates-50" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプトテンプレート50選
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT実践テクニック
          </Link>
          ・
          <Link href="/academy/blog/ai-english-learning-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI英語学習ガイド
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
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
              ChatGPTの音声モードは<strong>無料プランでも利用可能</strong>。スマホアプリの音声アイコンをタップするだけで始められる
            </li>
            <li className="pl-1 marker:text-gray-500">
              「ゆっくり・はっきり」話す必要はない。普段の話し言葉で、「えーっと」「あのー」が入っても正確に認識される
            </li>
            <li className="pl-1 marker:text-gray-500">
              通勤中・料理中・運転中・英会話練習・寝る前——ハンズフリーで使える5つのシーンが特に便利
            </li>
            <li className="pl-1 marker:text-gray-500">
              2025年11月のアップデートで、音声とテキストが統合。会話しながらテキスト回答も同時に表示される
            </li>
            <li className="pl-1 marker:text-gray-500">
              音声データはデフォルトでAI学習に使われない。設定でオプトインしない限り安心
            </li>
          </ul>
        </motion.section>

        {/* そもそも音声モードって？ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-voice-mode" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            そもそもChatGPTの音声モードって？
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTの音声モード（Advanced Voice Mode）は、<strong>スマホに話しかけてAIと音声で会話できる機能</strong>です。
            Siriのような一問一答ではなく、人間同士の会話のように自然にやりとりが続きます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            2025年11月のアップデートで大きく進化し、音声モードが通常のチャット画面と統合されました。
            話しかけながら、AIの回答がテキストでも画面に表示されるので、「聞き逃した」ときも安心です。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "応答速度",
                value: "約1.5秒",
                desc: "話し終わると、ほぼ即座にAIが返答を始めます",
              },
              {
                label: "対応言語",
                value: "13言語",
                desc: "日本語に完全対応。英語・中国語・韓国語など",
              },
              {
                label: "音声の種類",
                value: "9種類",
                desc: "好みの声を選べます。落ち着いた声から明るい声まで",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-5 text-center">
                <p className="text-xs font-semibold text-will-primary">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-gray-900">{item.value}</p>
                <p className="mt-2 text-xs leading-5 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm leading-6 text-gray-700">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-900">機能</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">無料プラン</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">Plus（月$20）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">音声会話</td>
                    <td className="px-4 py-3">利用可（最新GPT系モデル / 1日の時間制限あり）</td>
                    <td className="px-4 py-3">ほぼ無制限（GPT-5.2）</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">ビデオ通話・カメラ共有</td>
                    <td className="px-4 py-3">非対応</td>
                    <td className="px-4 py-3">対応</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">画面共有</td>
                    <td className="px-4 py-3">非対応</td>
                    <td className="px-4 py-3">対応</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">バックグラウンド会話</td>
                    <td className="px-4 py-3">対応（iOS）</td>
                    <td className="px-4 py-3">対応（iOS）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            ※ 2026年2月時点の情報です。最新情報は
            <a
              href="https://help.openai.com/en/articles/8400625-voice-mode-faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 underline hover:text-gray-700"
            >
              OpenAI公式FAQ
            </a>
            をご確認ください。
          </p>
        </motion.section>

        {/* 始め方 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="how-to-start" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            始め方：3タップで音声会話スタート
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTの音声モードは、スマホアプリ（iOS / Android）で使えます。
            Webブラウザ版（chatgpt.com）でも音声アイコンから利用可能です。
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                step: "1",
                title: "ChatGPTアプリを開く",
                body: "App StoreまたはGoogle Playから「ChatGPT」をインストール。無料のOpenAIアカウントでログインします。Googleアカウントでのサインアップも可能です。",
              },
              {
                step: "2",
                title: "音声アイコンをタップ",
                body: "チャット画面の右下にある音声アイコン（波形のマーク）をタップします。初回は好みの声を選ぶ画面が表示されます。9種類の中から選べますが、後から設定で変更できるので気軽に選んでOKです。",
              },
              {
                step: "3",
                title: "話しかける",
                body: "マイクがオンになったら、そのまま話しかけるだけ。「こんにちは」でも「今日の天気教えて」でも何でもOKです。AIが音声で返答してくれます。終了するときは画面右下のアイコンをタップします。",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                <div>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">ワンポイント</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              初めての方は、まず<strong>「こんにちは、何ができるか教えて」</strong>と話しかけてみてください。
              AIが自己紹介とできることを説明してくれるので、会話の感覚がつかめます。
            </p>
          </div>
        </motion.section>

        {/* 5つの活用シーン */}
        {scenes.map((scene, idx) => (
          <motion.section
            key={scene.title}
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 id={`scene-${idx + 1}`} className="scroll-mt-28 text-2xl font-bold text-gray-900">
              シーン{idx + 1}：{scene.title}
            </h2>
            <div className="mt-5 flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <span className="text-4xl" role="img" aria-label={scene.title}>
                {scene.icon}
              </span>
              <div>
                <p className="text-xs font-semibold text-will-primary">{scene.when}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{scene.description}</p>
              </div>
            </div>

            <h3 className="mt-6 text-lg font-bold text-gray-900">実際の会話イメージ</h3>
            <VoiceBubble messages={scene.conversation} />

            <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">活用のコツ</p>
              <p className="mt-2 text-sm leading-7 text-blue-900">{scene.tip}</p>
            </div>

            {/* シーン3の後に中間CTA */}
            {idx === 2 && (
              <div className="mt-10">
                <MidArticleCtaBox slug="chatgpt-voice-mode-guide" />
              </div>
            )}
          </motion.section>
        ))}

        {/* 音声プロンプトのコツ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="voice-tips" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            音声プロンプトのコツ：テキストとここが違う
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            テキストで入力するときと、声で話しかけるときでは、少しだけ勝手が違います。
            でも心配無用——むしろ<strong>音声の方がラクに使えるポイント</strong>がたくさんあります。
          </p>

          <div className="mt-6 space-y-4">
            {voiceTips.map((tip, i) => (
              <div key={tip.title} className="rounded-xl border-2 border-will-primary/15 bg-white p-6">
                <div className="flex items-start gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                    <p className="mt-3 text-sm leading-8 text-gray-700">{tip.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">テキスト入力 vs 音声入力まとめ</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4">
                <p className="text-xs font-bold text-gray-500">テキスト入力が向いている場面</p>
                <ul className="mt-2 space-y-1 text-sm leading-7 text-gray-700">
                  <li>・長い資料やデータを貼り付けたいとき</li>
                  <li>・正確な固有名詞・数値を伝えたいとき</li>
                  <li>・コードやプログラミングの相談</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="text-xs font-bold text-gray-500">音声入力が向いている場面</p>
                <ul className="mt-2 space-y-1 text-sm leading-7 text-gray-700">
                  <li>・両手がふさがっているとき</li>
                  <li>・アイデアをどんどん出したいとき</li>
                  <li>・会話形式で段階的に進めたいとき</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3ツール比較 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT・Claude・Gemini 音声機能比較
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            音声でAIと会話できるのはChatGPTだけではありません。ClaudeとGeminiにも音声機能があります。
            2026年2月時点の比較です。
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm leading-6 text-gray-700">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-900">項目</th>
                    {voiceComparison.map((tool) => (
                      <th key={tool.name} className="px-4 py-3 font-semibold text-gray-900">
                        {tool.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">無料の音声会話</td>
                    {voiceComparison.map((t) => (
                      <td key={t.name} className="px-4 py-3 text-sm">
                        {t.freeVoice}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">声の種類</td>
                    {voiceComparison.map((t) => (
                      <td key={t.name} className="px-4 py-3 text-sm">
                        {t.voices}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">対応言語</td>
                    {voiceComparison.map((t) => (
                      <td key={t.name} className="px-4 py-3 text-sm">
                        {t.languages}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">ビデオ/カメラ</td>
                    {voiceComparison.map((t) => (
                      <td key={t.name} className="px-4 py-3 text-sm">
                        {t.video}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">バックグラウンド</td>
                    {voiceComparison.map((t) => (
                      <td key={t.name} className="px-4 py-3 text-sm">
                        {t.background}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">こんな人向け</td>
                    {voiceComparison.map((t) => (
                      <td key={t.name} className="px-4 py-3 text-sm font-medium">
                        {t.bestFor}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">結局どれがいい？</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              <strong>日本語で音声会話をするなら、ChatGPTかGemini Live</strong>の二択です。
              Claudeの音声は2026年2月時点で英語のみのため、英語学習目的以外では選びにくい状況です。
              Gemini Liveは無料で回数無制限、カメラ・画面共有も無料と機能面では充実しています。
              ChatGPTは応答の自然さと統合UIが強みです。まずは両方試して比較してみてください。
            </p>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            ※ 各社の公式サイトで最新情報をご確認ください。Claude音声は
            <a
              href="https://support.claude.com/en/articles/11101966-using-voice-mode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 underline hover:text-gray-700"
            >
              Anthropic公式
            </a>
            、Gemini Liveは
            <a
              href="https://blog.google/products/gemini/gemini-live-audio-updates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 underline hover:text-gray-700"
            >
              Google公式ブログ
            </a>
            をご覧ください。
          </p>
        </motion.section>

        {/* プライバシー */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="privacy" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            プライバシーと音声データの扱い
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIに声を聞かれて大丈夫？」と不安に思うのは自然なことです。
            ChatGPTの音声データの扱いについて、2026年2月時点の公式情報をまとめます。
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                title: "音声データはデフォルトでAI学習に使われない",
                body: "OpenAIは、音声チャットの音声・ビデオクリップをデフォルトではモデルのトレーニングに使用しないと明言しています。自分から設定をオンにしない限り、録音データが学習に使われることはありません。",
              },
              {
                title: "テキスト変換後のデータには注意",
                body: "音声はテキストに変換されて処理されます。このテキストデータは、設定によってはモデル改善に使われる可能性があります。気になる方は「設定 > データ管理 > モデルの改善」をオフにしてください。",
              },
              {
                title: "機密情報・個人情報は音声でも入力しない",
                body: "テキスト入力と同じルールです。パスワード、クレジットカード番号、社外秘の情報などは音声でも伝えないようにしましょう。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-500">
            出典：
            <a
              href="https://help.openai.com/en/articles/8400625-voice-mode-faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 underline hover:text-gray-700"
            >
              OpenAI Voice Mode FAQ
            </a>
            ｜
            <a
              href="https://help.openai.com/en/articles/7730893-data-controls-faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 underline hover:text-gray-700"
            >
              OpenAI Data Controls FAQ
            </a>
          </p>

          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">プライバシー設定の確認方法</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              ChatGPTアプリの<strong>「設定」→「データ管理（Data Controls）」</strong>から、
              音声データや会話データの学習利用のオン/オフを確認・変更できます。
              詳しくは
              <Link
                href="/academy/blog/ai-privacy-safety-guide"
                className="text-amber-700 underline underline-offset-4 hover:text-amber-900"
              >
                生成AIプライバシー安全ガイド
              </Link>
              もあわせてご覧ください。
            </p>
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
          className="mt-14 rounded-lg border border-gray-200 bg-white p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：「話しかけるだけ」で、AIはもっと身近になる
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事で紹介したポイントを振り返ります。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">
              <strong>音声モードは無料で使える</strong>——スマホアプリのアイコンをタップするだけで始められる
            </li>
            <li className="pl-1">
              <strong>通勤・料理・運転・英会話・就寝前</strong>——ハンズフリーだからこそ便利な5つのシーン
            </li>
            <li className="pl-1">
              <strong>普段の話し言葉でOK</strong>——「えーっと」が入っても、途中で遮っても大丈夫
            </li>
            <li className="pl-1">
              <strong>テキストと音声、使い分けがベスト</strong>——場面に応じて両方を組み合わせる
            </li>
            <li className="pl-1">
              <strong>音声データは学習に使われない（デフォルト）</strong>——プライバシー設定は自分で確認
            </li>
          </ol>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「文字を打つのが面倒」「タイピングが苦手」——そんな理由でAIを使っていなかったなら、
            今日がチャンスです。スマホに向かって「こんにちは」と話しかけるだけで、
            AIとの新しいコミュニケーションが始まります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            一度体験すれば、「なぜもっと早く使わなかったんだろう」と思うはずです。
            キーボードを打つ必要はありません。<strong>あなたの声だけで、AIは動き出します。</strong>
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
          <LineCtaBox />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/chatgpt-prompt-beginner"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-mastery-tips-for-beginners"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIを「使えるようになった人」がやっていた5つのこと
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-privacy-safety-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIに個人情報を入れても大丈夫？｜安全に使うための5つのルール
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-free-plan-comparison-2026"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/gemini-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Gemini使い方ガイド｜初心者向け完全解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-prompt-templates-50"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTプロンプトテンプレート50選｜音声モードでも使える実例集
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-advanced-tips"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT上級テクニック｜仕事の質を上げる使い方
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-english-learning-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI英語学習ガイド｜音声会話を伸ばす練習設計
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-hallucination-fact-check-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIのハルシネーション対策ガイド｜音声回答の確認ポイント
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-beginners-guide-over-50"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                50代からのAI初心者ガイド｜スマホで続ける活用法
              </Link>
            </li>
            <li>
              <Link
                href="/academy"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
