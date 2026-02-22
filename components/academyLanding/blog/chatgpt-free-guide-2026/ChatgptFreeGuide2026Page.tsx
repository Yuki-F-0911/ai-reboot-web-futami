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
  "ChatGPT 無料 できること",
  "ChatGPT 無料版 使い方",
  "ChatGPT 無料 有料 違い",
  "ChatGPT Free 制限",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "free-features", label: "ChatGPT無料版でできること（2026年2月最新）" },
  { id: "free-scenarios", label: "無料版だけで実現できる具体シナリオ5選" },
  { id: "free-limits", label: "無料版の制限（正直に伝えます）" },
  { id: "plan-comparison", label: "有料版（Plus/Team/Pro）の違いを図解" },
  { id: "other-ai-comparison", label: "Claude・Geminiの無料版との比較" },
  { id: "free-tips", label: "無料版を最大限活用するコツ5つ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const freeFeatures = [
  {
    title: "GPT-5.2が使える",
    desc: "以前の無料版はGPT-3.5限定でしたが、2026年には最新のGPT-5.2を無料で利用可能。文章力・推論力が飛躍的に向上しています。",
    note: "利用回数超過時は軽量モデルに自動切替",
  },
  {
    title: "画像生成（DALL-E 3）",
    desc: "テキストから画像を生成できます。「猫がパソコンで仕事をしているイラスト」のように日本語で指示するだけ。SNS投稿やプレゼン資料の素材作りに便利です。",
    note: "1日あたりの生成回数に制限あり",
  },
  {
    title: "ファイルアップロード",
    desc: "PDF・Excel・Word・画像などをアップロードして、内容の要約・分析・翻訳を依頼できます。長い報告書の要約や、英語論文の翻訳に重宝します。",
    note: "高度なデータ分析は制限あり",
  },
  {
    title: "Web検索モード",
    desc: "AIがリアルタイムでWebを検索し、最新情報を取得して回答します。「今日の東京の天気」「最新のiPhone情報」など、情報鮮度が必要な質問に対応。",
    note: "利用回数に制限あり",
  },
  {
    title: "音声会話モード",
    desc: "スマホアプリで、AIと音声で会話できます。通勤中・料理中でもハンズフリーで使えるため、AIとの対話のハードルがぐっと下がります。",
    note: "月あたりの音声時間に制限あり",
  },
  {
    title: "GPTストア（カスタムGPTs）の利用",
    desc: "他のユーザーが作成した専門特化型のGPTsを利用できます。英会話練習、プレゼン添削、レシピ提案など、目的別に最適化されたAIが数万種類。",
    note: "GPTsの「作成」は有料プラン限定",
  },
] as const;

const scenarios = [
  {
    title: "英語メールの翻訳・添削",
    desc: "海外取引先からのメールを自然な日本語に翻訳し、返信メールの英語添削も依頼できます。",
    conversation: [
      { role: "user" as const, text: "以下の英語メールを日本語に翻訳して。ビジネスメールなので丁寧なトーンで。\n\nDear Mr. Tanaka,\nThank you for your prompt response. We would like to schedule a meeting next week to discuss the partnership proposal in detail.\nPlease let us know your availability.\nBest regards, John" },
      { role: "ai" as const, text: "田中様\n\n迅速なご返信をいただき、ありがとうございます。来週、提携のご提案について詳細を打ち合わせるお時間をいただきたく存じます。\nご都合のよろしい日時をお知らせいただけますでしょうか。\n\n敬具\nジョン" },
      { role: "user" as const, text: "「来週の火曜か水曜の午後が空いています」という返信メールを英語で作って。カジュアルすぎない、でも堅すぎないトーンで。" },
      { role: "ai" as const, text: "Dear John,\n\nThank you for your message. I would be happy to schedule a meeting to discuss the partnership proposal.\n\nI am available on Tuesday or Wednesday afternoon next week. Please let me know which works best for you.\n\nBest regards,\nTanaka" },
    ],
  },
  {
    title: "Excel関数の相談",
    desc: "「やりたいこと」を日本語で説明するだけで、適切なExcel関数を教えてもらえます。",
    conversation: [
      { role: "user" as const, text: "Excelで、A列に日付、B列に売上金額が入っています。月ごとの売上合計を出したいのですが、どの関数を使えばいいですか？" },
      { role: "ai" as const, text: "月ごとの売上合計には SUMIFS 関数が便利です。\n\n=SUMIFS(B:B, A:A, \">=\"&DATE(2026,1,1), A:A, \"<\"&DATE(2026,2,1))\n\nこれで2026年1月の売上合計が出ます。\n\nもっと簡単にやるなら、ピボットテーブルがおすすめです。\n①データ範囲を選択\n②「挿入」→「ピボットテーブル」\n③行に「日付」を月でグループ化、値に「売上金額」の合計\n\nどちらがいいですか？" },
    ],
  },
  {
    title: "子どもの自由研究の壁打ち",
    desc: "「テーマが決まらない」段階から、AIが一緒にアイデアを考えてくれます。",
    conversation: [
      { role: "user" as const, text: "小学4年生の夏休みの自由研究、何かいいテーマある？子どもが恐竜と宇宙が好きです。" },
      { role: "ai" as const, text: "恐竜と宇宙が好きなお子さんにぴったりのテーマを5つ提案しますね。\n\n① 「もし恐竜が絶滅しなかったら？」——隕石と恐竜絶滅の関係を調べて、想像図を描く\n② 「太陽系の惑星と恐竜の大きさ比べ」——スケールを計算してポスターにする\n③ 「恐竜の化石はどうやってできる？」——身近な材料で化石レプリカを作る実験\n④ 「宇宙で恐竜は生きられる？」——重力・空気・温度の条件を調べる\n⑤ 「日本で見つかった恐竜」——地域別に発見された恐竜をマップにまとめる\n\nどれが気になりますか？もう少し詳しい進め方もお手伝いしますよ。" },
    ],
  },
  {
    title: "SNS投稿文の作成",
    desc: "伝えたい内容を伝えるだけで、プラットフォームに合った投稿文を提案してくれます。",
    before: "新商品のグラノーラ出ました！おいしいので買ってください。#新商品",
    after: "朝5分で「ちゃんと食べた」が手に入る。\n\n国産オーツ麦×4種のナッツ×はちみつのやさしい甘さ。\n牛乳をかけて30秒待つだけ。\n\n忙しい朝こそ、体が喜ぶ朝ごはんを。\n\n#朝ごはん #グラノーラ #新商品 #時短朝食",
    prompt: "以下の商品について、Instagramの投稿文を作ってください。\n・商品名：朝のナッツグラノーラ\n・特徴：国産オーツ麦、4種のナッツ入り、はちみつ風味\n・ターゲット：忙しい30代女性\n・トーン：親しみやすく、でも安っぽくない\n・ハッシュタグ5つ付き",
  },
  {
    title: "旅行プランの相談",
    desc: "条件を伝えるだけで、具体的な旅行プランを提案してもらえます。",
    conversation: [
      { role: "user" as const, text: "来月、夫婦で京都旅行を計画しています。2泊3日、予算は2人で10万円くらい。紅葉の名所を回りたいけど、人混みが苦手です。" },
      { role: "ai" as const, text: "人混みを避けながら紅葉を楽しむ京都プランですね。\n\n【1日目】\n・午前：大原 三千院（市街地から離れているため比較的静か）\n・昼食：大原の里で湯葉ランチ（予算2人で4,000円）\n・午後：詩仙堂→圓光寺（穴場の紅葉スポット。徒歩圏内）\n・夕食：四条烏丸エリアで京料理（予算8,000円）\n\n【2日目】\n・早朝7時：嵐山 竹林の小径（朝イチなら人が少ない）\n・午前：天龍寺の紅葉（開門直後がおすすめ）\n・昼食：嵯峨野で豆腐料理\n・午後：鷹峯エリア 源光庵・光悦寺（超穴場）\n\n【3日目】\n・午前：東福寺（早朝拝観がある場合は朝一番で）\n・昼食前：伏見稲荷の山頂ルート（途中からは人が激減）\n\n宿泊は四条烏丸エリアがアクセス◎。2泊で約3〜4万円、全体予算10万円以内に収まります。\n\n日程の調整や、もっと穴場を知りたい場合はお気軽にどうぞ！" },
    ],
  },
] as const;

const freeLimitations = [
  {
    title: "GPT-5.2の利用回数制限",
    desc: "無料プランではGPT-5.2に利用回数制限があります。制限に達した場合は軽量モデルに自動で切り替わり、応答の質がやや下がります。",
    impact: "日常的な質問なら問題なし。複雑な分析を連続で行う場合に影響",
  },
  {
    title: "画像生成の回数制限",
    desc: "DALL-E 3による画像生成は1日あたりの生成回数に上限があります。たくさんの画像を一度に作りたい場合は制限に引っかかります。",
    impact: "1日2〜3枚なら問題なし。デザイン業務で大量生成が必要な場合に影響",
  },
  {
    title: "高度なデータ分析の制限",
    desc: "Code Interpreter（Advanced Data Analysis）によるPythonコード実行やグラフ作成の利用回数に制限があります。",
    impact: "簡単な分析は可能。毎日大量のデータ処理には不向き",
  },
  {
    title: "カスタムGPTsの作成不可",
    desc: "GPTストアのGPTsを「利用する」ことは可能ですが、自分で新しいGPTsを「作成する」には有料プランが必要です。",
    impact: "既存のGPTsで十分な場合は問題なし",
  },
  {
    title: "プロジェクト機能なし",
    desc: "有料版で使える「プロジェクト」機能（複数の会話をまとめて管理、カスタム指示を設定）は無料版では利用できません。",
    impact: "1つのテーマで継続的に作業する場合にやや不便",
  },
  {
    title: "混雑時の優先アクセスなし",
    desc: "アクセスが集中する時間帯（日本時間の夜22〜24時など）に、応答速度が遅くなったり、一時的に利用できない場合があります。",
    impact: "時間をずらせば問題なし。急ぎの業務には不安定",
  },
] as const;

const planComparison = [
  {
    plan: "Free（無料）",
    price: "0円",
    model: "GPT-5.2（回数制限あり）\n軽量モデルに自動切替（制限後）",
    imageGen: "あり（回数制限）",
    upload: "あり",
    webSearch: "あり（回数制限）",
    voice: "あり（時間制限）",
    gpts: "利用のみ",
    projects: "なし",
    priority: "なし",
    best: "AIを試してみたい人\n日常的な質問・翻訳・文章作成",
    highlight: false,
  },
  {
    plan: "Plus（月額$20）",
    price: "約3,000円/月",
    model: "GPT-5.2（大幅に増量）\nGPT-5.2 mini相当（無制限）",
    imageGen: "あり（大幅に増量）",
    upload: "あり",
    webSearch: "あり（増量）",
    voice: "あり（拡張）",
    gpts: "利用＋作成",
    projects: "あり",
    priority: "あり",
    best: "毎日の仕事でAIを使う人\n回数制限がストレスな人",
    highlight: true,
  },
  {
    plan: "Team（月額$25/人）",
    price: "約3,750円/人/月",
    model: "Plusと同等＋管理機能",
    imageGen: "あり（Plus同等）",
    upload: "あり",
    webSearch: "あり（Plus同等）",
    voice: "あり（Plus同等）",
    gpts: "利用＋作成＋チーム共有",
    projects: "あり",
    priority: "あり",
    best: "チームでAIを導入したい企業\n社内データの安全管理が必要",
    highlight: false,
  },
  {
    plan: "Pro（月額$200）",
    price: "約30,000円/月",
    model: "全モデル無制限\nOpenAI o1含む",
    imageGen: "無制限",
    upload: "あり",
    webSearch: "無制限",
    voice: "無制限",
    gpts: "利用＋作成",
    projects: "あり",
    priority: "最優先",
    best: "AIをフル活用するプロ\n開発者・研究者・ヘビーユーザー",
    highlight: false,
  },
] as const;

const plusCheckList = [
  "毎日の業務でChatGPTを使い、回数制限に頻繁に引っかかる",
  "画像生成を仕事で定期的に使いたい",
  "自分専用のカスタムGPTsを作成したい",
  "会話をプロジェクト単位で整理して管理したい",
  "混雑時間帯でも安定してアクセスしたい",
] as const;

const roiCalculation = {
  dailyMinutesSaved: 30,
  workDaysPerMonth: 20,
  hourlyRate: 2500,
  plusCost: 3000,
  get totalMinutesSaved() {
    return this.dailyMinutesSaved * this.workDaysPerMonth;
  },
  get totalHoursSaved() {
    return this.totalMinutesSaved / 60;
  },
  get valuePerMonth() {
    return Math.round(this.totalHoursSaved * this.hourlyRate);
  },
};

const otherAiComparison = [
  {
    name: "ChatGPT Free",
    company: "OpenAI",
    model: "GPT-5.2（回数制限）→ 軽量モデルに自動切替",
    strength: "万能型。画像生成・音声・Web検索・ファイル対応。ユーザー数最多で情報が豊富",
    weakness: "ピーク時にモデルが切り替わる。長文は途中で切れやすい",
    bestFor: "何でもバランスよく使いたい人",
  },
  {
    name: "Claude Free",
    company: "Anthropic",
    model: "Claude Sonnet 4.6",
    strength: "長文の文章品質が高い。指示の意図を正確に汲む。丁寧な日本語で出力される",
    weakness: "画像生成不可。Web検索不可。ファイル形式の対応がやや少ない",
    bestFor: "文章作成・企画書・レポートなど「書く仕事」が多い人",
  },
  {
    name: "Gemini Free",
    company: "Google",
    model: "Gemini 2.0 Flash",
    strength: "Gmail・Googleドキュメント連携。最新情報の検索に強い。回数制限が緩い",
    weakness: "日本語の自然さがやや劣る場合がある。クリエイティブ系は弱め",
    bestFor: "Google Workspaceをメインで使っている人",
  },
] as const;

const usageTips = [
  {
    title: "プロンプトに「役割」を与える",
    body: "「あなたはプロの編集者です」「マーケティングの専門家として回答してください」と最初に伝えるだけで、回答の質が劇的に変わります。",
    prompt: "あなたはプロのコピーライターです。以下の商品について、30代女性向けのInstagram投稿文を3パターン作ってください。",
  },
  {
    title: "1回で完璧を求めず「追加指示」する",
    body: "最初の回答は「たたき台」と割り切りましょう。「もう少し短く」「具体例を入れて」「トーンを変えて」と追加指示することで、望み通りの回答に近づきます。",
    prompt: "もう少しカジュアルなトーンにして。絵文字は控えめに。最初の1文でインパクトを出して。",
  },
  {
    title: "回数制限に引っかかったらClaude/Geminiに切り替え",
    body: "ChatGPTの無料プランで回数制限に達したら、同じ質問をClaudeやGeminiに投げましょう。3つのサービスを回せば、実質的に1日中AIを無料で使い続けられます。",
    prompt: "（ChatGPTで制限に達したとき）同じ質問をclaude.aiまたはgemini.google.comに貼り付けるだけ",
  },
  {
    title: "よく使うプロンプトはメモアプリに保存",
    body: "毎回同じ指示を打つのは非効率。「メール添削用」「議事録作成用」「アイデア出し用」など、テンプレートをスマホのメモ帳やNotionに保存しておけば、コピペですぐ使えます。",
    prompt: "【議事録テンプレ】以下の会議メモから議事録を作成してください。\n・参加者・決定事項・次のアクション・保留事項に分けて整理\n・敬体（です/ます）で統一\n\n（ここに会議メモを貼り付け）",
  },
  {
    title: "スマホアプリの音声モードを活用する",
    body: "キーボード入力が面倒なら、音声で話しかけましょう。通勤中・料理中・散歩中でもAIに相談できます。「声で聞いて、目で確認する」スタイルは意外とハマります。",
    prompt: "（スマホアプリで🎙ボタンを押して）来週の営業会議のアジェンダを一緒に考えて。参加者は5人で、テーマは第2四半期の振り返りと下半期の戦略。",
  },
] as const;

function ConversationExample({ messages }: { messages: readonly { role: "user" | "ai"; text: string }[] }) {
  return (
    <div className="mt-4 space-y-3 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
      {messages.map((msg, i) => (
        <div key={i} className={`flex gap-3`}>
          <div
            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
              msg.role === "user" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {msg.role === "user" ? "You" : "AI"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-gray-500">{msg.role === "user" ? "あなた" : "AIの回答"}</p>
            <p className="mt-1 whitespace-pre-line text-sm leading-7 text-gray-700">{msg.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ChatgptFreeGuide2026Page({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPT無料版でここまでできる！2026年最新" },
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
                title="ChatGPT無料版でここまでできる！2026年最新｜有料版との違いと賢い使い方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            ChatGPT無料版でここまでできる！2026年最新
          </h1>
          <p className="mt-2 text-lg text-gray-600" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            有料版との違いと賢い使い方
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPT、無料のままでいいのかな？」「月3,000円払う価値あるの？」——そう迷っている方、多いですよね。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            結論から言うと、<strong>2026年のChatGPT無料版は、驚くほど進化しています。</strong>以前は低性能のGPT-3.5しか使えなかった無料プランが、今ではGPT-5.2を搭載。画像生成、ファイル分析、Web検索、音声会話まで——かつては有料プラン限定だった機能の多くが、無料で使えるようになりました。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事では、ChatGPT無料版で「できること」と「できないこと」を正直にお伝えし、有料版（Plus/Team/Pro）との違い、さらにClaude・Geminiとの比較まで、あなたに合ったプランを選ぶための判断材料をすべてまとめました。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ初期設定ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプラン比較（無料/Plus/Pro）
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプトの書き方入門
          </Link>
          もあわせて読むと、活用の幅がさらに広がります。
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
              2026年のChatGPT無料版はGPT-5.2搭載。画像生成・ファイル分析・Web検索・音声会話も利用可能
            </li>
            <li className="pl-1 marker:text-gray-500">
              英語メール、Excel相談、自由研究、SNS投稿、旅行プラン——無料版だけで実用レベルの成果が出せる
            </li>
            <li className="pl-1 marker:text-gray-500">
              制限は主に「回数」。ピーク時はモデルが切り替わるが、Claude/Geminiと併用すれば終日無料で使える
            </li>
            <li className="pl-1 marker:text-gray-500">
              Plus（月約3,000円）は「毎日仕事でガッツリ使い、回数制限がストレスな人」向け
            </li>
            <li className="pl-1 marker:text-gray-500">
              まずは無料で始めて、「回数制限に毎日ぶつかる」ようになったら有料版を検討するのがベスト
            </li>
          </ul>
        </motion.section>

        {/* セクション1: ChatGPT無料版でできること */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="free-features" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT無料版でできること（2026年2月最新）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「無料版＝おまけ」だと思っていませんか？ 2026年2月時点のChatGPT無料プランは、ほんの1年前の有料プランに匹敵する機能を備えています。まずは「何ができるか」を正確に把握しましょう。
          </p>

          <div className="mt-8 space-y-4">
            {freeFeatures.map((feature, i) => (
              <div key={feature.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{feature.desc}</p>
                    <p className="mt-2 text-xs text-amber-700">
                      <span className="inline-block rounded bg-amber-50 px-2 py-0.5 font-medium">注意: {feature.note}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">知っておきたいポイント</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              無料版の各機能には利用回数の制限がありますが、具体的な上限数は非公開で、時期や混雑状況によって変動します。
              体感としては、1日に10〜20回程度の質問であれば、GPT-5.2のまま快適に使えることがほとんどです。
              <strong>「試してみて、制限に引っかかったらその日はClaude/Geminiに切り替える」</strong>くらいの気楽さで始めてOKです。
            </p>
          </div>
        </motion.section>

        {/* セクション2: 具体シナリオ5選 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="free-scenarios" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料版だけで実現できる具体シナリオ5選
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「機能はわかったけど、実際に何に使えるの？」——ここからは、ChatGPT無料版だけで実現できる具体的な活用シナリオを5つ紹介します。
            すべてプロンプト例または会話例つきなので、そのまま試せます。
          </p>

          {scenarios.map((scenario, idx) => (
            <div key={scenario.title} className="mt-8">
              <h3 className="text-lg font-bold text-gray-900">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-will-primary text-xs font-bold text-white">{idx + 1}</span>
                {scenario.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">{scenario.desc}</p>

              {"conversation" in scenario && scenario.conversation && (
                <ConversationExample messages={scenario.conversation} />
              )}

              {"before" in scenario && scenario.before && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <p className="text-xs font-semibold text-red-700">Before（自分で書いた場合）</p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-red-900">{scenario.before}</p>
                  </div>
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-xs font-semibold text-emerald-700">After（AIと作った場合）</p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-emerald-900">{scenario.after}</p>
                  </div>
                </div>
              )}

              {"prompt" in scenario && scenario.prompt && (
                <div className="mt-4 rounded-lg bg-gray-50 p-4">
                  <p className="text-xs font-semibold text-gray-500">コピペで使えるプロンプト例</p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-700">{scenario.prompt}</p>
                </div>
              )}
            </div>
          ))}

          <p className="mt-6 text-sm leading-7 text-gray-600">
            もっと詳しいプロンプト例が欲しい方は
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="ml-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTプロンプトの書き方入門
            </Link>
            をご覧ください。
          </p>
        </motion.section>

        {/* セクション3: 無料版の制限 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="free-limits" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料版の制限（正直に伝えます）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            無料版は想像以上に使えますが、もちろん制限もあります。「こんなはずじゃなかった」とならないよう、正直にお伝えします。
          </p>

          <div className="mt-6 space-y-3">
            {freeLimitations.map((limit) => (
              <div key={limit.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-bold text-gray-900">{limit.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{limit.desc}</p>
                <p className="mt-2 text-xs text-gray-600">
                  <span className="inline-block rounded bg-gray-100 px-2 py-0.5 font-medium">影響度: {limit.impact}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">制限との付き合い方</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              無料版の制限は「使えない」レベルではなく「ヘビーに使うとたまに止まる」レベルです。
              <strong>週に数回、1日30分程度の利用であれば、制限を意識する場面はほぼありません。</strong>
              「毎日2時間以上使って、頻繁に制限に引っかかる」ようになったら、有料版を検討するタイミングです。
            </p>
          </div>
        </motion.section>

        {/* セクション4: 有料版との比較 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="plan-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            有料版（Plus/Team/Pro）の違いを図解
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「じゃあ有料版は何が違うの？」——ここでは、Free・Plus・Team・Proの4プランを、2026年2月時点の情報で比較します。
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm leading-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-900">項目</th>
                    {planComparison.map((p) => (
                      <th key={p.plan} className={`px-4 py-3 text-xs font-semibold ${p.highlight ? "bg-will-primary/10 text-will-primary" : "text-gray-900"}`}>
                        {p.plan}
                        <br />
                        <span className="text-[10px] font-normal text-gray-500">{p.price}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                  {([
                    ["AIモデル", "model"],
                    ["画像生成", "imageGen"],
                    ["ファイル", "upload"],
                    ["Web検索", "webSearch"],
                    ["音声会話", "voice"],
                    ["GPTs", "gpts"],
                    ["プロジェクト", "projects"],
                    ["優先アクセス", "priority"],
                  ] as const).map(([label, key]) => (
                    <tr key={key}>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">{label}</td>
                      {planComparison.map((p) => (
                        <td key={p.plan} className={`whitespace-pre-line px-4 py-3 text-xs ${p.highlight ? "bg-will-primary/5" : ""}`}>
                          {p[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-3 font-bold text-gray-900">こんな人向け</td>
                    {planComparison.map((p) => (
                      <td key={p.plan} className={`whitespace-pre-line px-4 py-3 text-xs font-medium ${p.highlight ? "bg-will-primary/5 text-will-primary" : "text-gray-700"}`}>
                        {p.best}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            ※ 2026年2月22日時点の公式情報に基づきます。価格は1ドル≒150円で換算。
            最新情報は
            <a href="https://openai.com/chatgpt/pricing/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              OpenAI公式サイト
            </a>
            をご確認ください。プラン比較の詳細は
            <Link href="/academy/blog/chatgpt-plan-comparison" className="text-gray-500 underline hover:text-gray-700">
              ChatGPTプラン比較記事
            </Link>
            もご覧ください。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">「こんな人はPlusがおすすめ」チェックリスト</h3>
          <div className="mt-4 rounded-xl border-2 border-will-primary/15 bg-white p-5">
            <p className="text-sm text-gray-700">以下の項目に<strong>3つ以上</strong>当てはまるなら、Plusを検討する価値があります。</p>
            <ul className="mt-4 space-y-3">
              {plusCheckList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-gray-300 text-[10px] text-gray-400">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-7 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="mt-8 text-lg font-bold text-gray-900">Plusの「元を取る」計算</h3>
          <div className="mt-4 rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-5">
            <div className="grid gap-4 sm:grid-cols-4">
              <div className="text-center">
                <p className="text-xs text-gray-500">1日の時短</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">{roiCalculation.dailyMinutesSaved}<span className="text-sm font-normal text-gray-500">分</span></p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">月の稼働日</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">{roiCalculation.workDaysPerMonth}<span className="text-sm font-normal text-gray-500">日</span></p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">時給換算</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">{roiCalculation.hourlyRate.toLocaleString()}<span className="text-sm font-normal text-gray-500">円</span></p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">月の節約価値</p>
                <p className="mt-1 text-2xl font-bold text-emerald-600">{roiCalculation.valuePerMonth.toLocaleString()}<span className="text-sm font-normal text-emerald-500">円</span></p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-white/80 p-4 text-center">
              <p className="text-sm text-gray-700">
                仕事で1日<strong>{roiCalculation.dailyMinutesSaved}分</strong>の時短ができれば、月<strong>{roiCalculation.totalHoursSaved}時間</strong>の節約。
                時給{roiCalculation.hourlyRate.toLocaleString()}円で換算すると、<strong>月{roiCalculation.valuePerMonth.toLocaleString()}円の価値</strong>。
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Plus月額{roiCalculation.plusCost.toLocaleString()}円に対して、約{Math.round(roiCalculation.valuePerMonth / roiCalculation.plusCost)}倍のリターン。
              </p>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              ※ 日常的な使い方の一例です。実際の効果は業務内容・使い方によって異なります。
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
          <MidArticleCtaBox slug="chatgpt-free-guide-2026" />
        </motion.section>

        {/* セクション5: Claude・Geminiの無料版との比較 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="other-ai-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Claude・Geminiの無料版との比較
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「ChatGPTにこだわる必要はあるの？」——実は、Claude（Anthropic）とGemini（Google）の無料版も非常に優秀です。
            ChatGPTだけでなく、3つのサービスを使い分けることで、無料のまま実用レベルのAI環境が手に入ります。
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm leading-6 text-gray-700">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-900">サービス</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">無料で使えるモデル</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">弱み</th>
                    <th className="px-4 py-3 font-semibold text-gray-900">こんな人向け</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {otherAiComparison.map((tool) => (
                    <tr key={tool.name}>
                      <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900">
                        {tool.name}
                        <br />
                        <span className="text-xs font-normal text-gray-500">{tool.company}</span>
                      </td>
                      <td className="px-4 py-4 text-sm">{tool.model}</td>
                      <td className="px-4 py-4 text-sm">{tool.strength}</td>
                      <td className="px-4 py-4 text-sm">{tool.weakness}</td>
                      <td className="px-4 py-4 text-sm">{tool.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            ※ 2026年2月22日時点の情報です。各社公式サイト（
            <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">ChatGPT</a>・
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">Claude</a>・
            <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">Gemini</a>
            ）で最新情報をご確認ください。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">おすすめの使い分けパターン</h3>
          <div className="mt-4 space-y-3">
            {[
              { pattern: "汎用的な質問・画像生成", tool: "ChatGPT", reason: "GPT-5.2＋DALL-E 3の組み合わせが最強。困ったらまずここ" },
              { pattern: "長文の文章作成・企画書", tool: "Claude", reason: "日本語の文章品質が高く、構成力に優れる。レポートや提案書に最適" },
              { pattern: "最新情報の検索・Google連携", tool: "Gemini", reason: "Google検索との連動が強み。時事ニュースや最新データの質問に" },
              { pattern: "回数制限に達したとき", tool: "別サービスに切り替え", reason: "ChatGPT→Claude→Geminiとローテーションすれば、終日無料で使い続けられる" },
            ].map((item) => (
              <div key={item.pattern} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-900">{item.pattern}</p>
                  <p className="mt-1 text-sm text-gray-700">
                    <span className="mr-1 font-semibold text-will-primary">{item.tool}</span>
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            3サービスの無料プランをもっと詳しく比較したい方は
            <Link href="/academy/blog/ai-free-plan-comparison-2026" className="ml-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT・Claude・Gemini 無料プラン比較記事
            </Link>
            をご覧ください。Claudeの使い方は
            <Link href="/academy/blog/claude-beginner-guide" className="ml-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude初心者ガイド
            </Link>
            、Geminiは
            <Link href="/academy/blog/gemini-beginners-guide" className="ml-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Gemini初心者ガイド
            </Link>
            もあります。
          </p>
        </motion.section>

        {/* セクション6: 無料版を最大限活用するコツ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="free-tips" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料版を最大限活用するコツ5つ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            無料版でも使い方次第で有料版に匹敵する成果が出せます。ここでは、無料ユーザーが知っておくべき5つのコツを紹介します。
          </p>

          <div className="mt-6 space-y-6">
            {usageTips.map((tip, i) => (
              <div key={tip.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-gray-900">{tip.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{tip.body}</p>
                    <div className="mt-3 rounded-lg bg-gray-50 p-3">
                      <p className="text-xs font-semibold text-gray-500">コピペで使えるプロンプト例</p>
                      <p className="mt-1 whitespace-pre-line text-sm leading-7 text-gray-700">{tip.prompt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-600">
            プロンプトの基本テクニックをもっと学びたい方は
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="ml-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              プロンプトの書き方入門
            </Link>
            や
            <Link href="/academy/blog/chatgpt-advanced-tips" className="ml-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT上級テクニック集
            </Link>
            もおすすめです。
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
          className="mt-14 rounded-lg border border-gray-200 bg-white p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：まずは無料で始めよう
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事のポイントを振り返ります。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1"><strong>無料版の進化がすごい</strong>——GPT-5.2、画像生成、音声会話、Web検索まで無料で使える時代</li>
            <li className="pl-1"><strong>実用レベルで使える</strong>——翻訳・Excel相談・SNS投稿・旅行プランなど、日常シーンで十分な成果が出る</li>
            <li className="pl-1"><strong>制限は「回数」だけ</strong>——ヘビーに使わなければ、制限を意識する場面はほぼない</li>
            <li className="pl-1"><strong>3サービス併用で無敵</strong>——ChatGPT・Claude・Geminiを使い回せば、終日無料でAIが使える</li>
            <li className="pl-1"><strong>有料版は「必要になってから」</strong>——毎日回数制限にぶつかるようになったら検討すればいい</li>
          </ol>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「お金をかけないとダメなんでしょ？」——そう思っていた方に、この記事が「意外と無料でここまでできるんだ」という発見を届けられたなら嬉しいです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIを使い始めるのに、特別なスキルもお金も必要ありません。必要なのは「今日、ChatGPTに1つ質問してみる」という小さなアクションだけ。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            まずは無料で。あなたのペースで。AIのある生活を、今日から始めてみませんか？
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
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-plan-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT無料・Plus・Proの違いを比較｜2026年版の料金と選び方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT上級テクニック集｜仕事の生産性を上げる使い方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-beginner-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude完全入門｜特徴・始め方・ChatGPTとの違いまで
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gemini-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Gemini初心者ガイド｜Google AIの始め方と活用法
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
