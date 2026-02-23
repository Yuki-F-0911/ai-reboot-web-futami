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
  "生成AI 全体像 2026",
  "AI ツール 種類 初心者",
  "ChatGPT Claude 違い",
  "生成AI 何から始める",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "ai-map-categories", label: "生成AIの地図：カテゴリ別整理" },
  { id: "tool-comparison", label: "2026年春の主要ツール早見表" },
  { id: "latest-models", label: "最新モデルを平易に解説" },
  { id: "start-guide", label: "あなたはどこから始めるべき？" },
  { id: "first-week", label: "初心者の最初の1週間でやること" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const aiCategories = [
  {
    icon: "💬",
    name: "テキスト生成AI",
    description:
      "文章を書いたり、質問に答えたり、要約したりするAI。最もポピュラーなカテゴリ。LINEで友人に相談する感覚で使える。",
    tools: "ChatGPT / Claude / Gemini / Perplexity",
    bestFor: "文章作成・要約・翻訳・アイデア出し・調査・相談",
  },
  {
    icon: "🎨",
    name: "画像生成AI",
    description:
      "テキストで指示するだけで、オリジナルの画像やイラストを生成するAI。デザイン経験ゼロでも使える。",
    tools: "DALL-E 3（ChatGPT内）/ Midjourney / Adobe Firefly / Stable Diffusion",
    bestFor: "SNS画像・プレゼン素材・アイデア可視化・ロゴ草案",
  },
  {
    icon: "🎙️",
    name: "音声生成AI",
    description:
      "テキストを自然な音声に変換したり、音声から文字を起こしたりするAI。議事録作成や音声コンテンツ制作に便利。",
    tools: "ElevenLabs / OpenAI Whisper / VOICEVOX / Adobe Podcast",
    bestFor: "議事録自動化・音声コンテンツ制作・多言語ナレーション",
  },
  {
    icon: "🎬",
    name: "動画生成AI",
    description:
      "テキストや画像から動画を生成するAI。2025年以降急速に進化し、商用品質に近いものも出てきた。",
    tools: "Sora（OpenAI）/ Runway Gen-4 / Kling AI / Pika",
    bestFor: "SNS動画・プロモーション素材・デモ動画・教材制作",
  },
  {
    icon: "💻",
    name: "コーディングAI",
    description:
      "プログラムを書いたり、バグを修正したり、コードを解説したりするAI。エンジニア以外でも簡単なWebツール作成に使える。",
    tools: "GitHub Copilot / Cursor / Bolt.new / GPT-5.3 Codex",
    bestFor: "コード補完・バグ修正・Webサイト作成・スクリプト自動化",
  },
] as const;

const toolComparison = [
  {
    tool: "ChatGPT（OpenAI）",
    strongPoint: "バランス型・最大ユーザー数",
    free: "◎ 無料あり",
    recommended: "初心者の最初の1本",
    note: "GPT-5.3 Codexを含む最新モデルも搭載",
  },
  {
    tool: "Claude（Anthropic）",
    strongPoint: "長文分析・倫理的回答",
    free: "◎ 無料あり（Sonnet 4.6）",
    recommended: "長文読解・文書要約・ライティング",
    note: "Opus 4.6が最上位、Sonnet 4.6が無料枠",
  },
  {
    tool: "Gemini（Google）",
    strongPoint: "マルチモーダル・Google連携",
    free: "◎ 無料あり",
    recommended: "Gmail・Googleドキュメント利用者",
    note: "Gemini 3は動画・音声・テキストを統合処理",
  },
  {
    tool: "Grok 3（xAI）",
    strongPoint: "リアルタイム情報・X連携",
    free: "△ X Premiumが必要",
    recommended: "X活用者・最新情報収集",
    note: "X上のリアルタイムトレンドを参照可能",
  },
  {
    tool: "Perplexity AI",
    strongPoint: "AI検索・出典明示",
    free: "◎ 無料あり",
    recommended: "情報収集・ファクトチェック",
    note: "回答に出典URLを自動添付するのが特徴",
  },
  {
    tool: "Midjourney",
    strongPoint: "高品質AI画像生成",
    free: "× 有料のみ",
    recommended: "クリエイティブ系コンテンツ制作",
    note: "芸術的・写真風画像の品質はトップクラス",
  },
] as const;

const latestModels = [
  {
    name: "GPT-5.3 Codex（OpenAI）",
    emoji: "🤖",
    summary: "コーディング特化の最新モデル",
    details:
      "OpenAIが2026年2月にリリースしたコーディング特化モデル。プログラムを書いたり修正したりするのが得意で、ChatGPT内から利用できます。「このExcelを自動処理するプログラムを作って」と指示するだけで、コードを生成してくれます。プログラミング経験者だけでなく、業務自動化に興味がある非エンジニアにとっても強力な武器です。",
    targetUser: "業務自動化・プログラミング学習・WebアプリやツールをAIで作りたい人",
  },
  {
    name: "Claude Opus 4.6 / Sonnet 4.6（Anthropic）",
    emoji: "🧠",
    summary: "長文・分析・倫理的回答に強い",
    details:
      "AnthropicのClaudeシリーズの最新版。Opus 4.6は最上位モデルで、長い文書の読み込みや複雑な分析が得意です。Sonnet 4.6は無料プランでも利用でき、コストと性能のバランスに優れています。「このレポートを読んで要点を教えて」など、大量のテキストを扱う作業に向いています。日本語の自然さと回答の丁寧さも評価が高いモデルです。",
    targetUser: "長文レポート分析・ライティング改善・緻密なロジックが必要な作業",
  },
  {
    name: "Gemini 3（Google）",
    emoji: "🌐",
    summary: "マルチモーダル・Google製品との連携",
    details:
      "Googleが開発する最新モデル。テキスト・画像・音声・動画を統合的に処理できるマルチモーダル性能が特徴です。GmailやGoogleドキュメントとの連携が深く、「このメールスレッドを要約して」「このGoogleドキュメントをブラッシュアップして」のような作業が得意です。Googleアカウントがあれば今すぐ無料で使い始めることができます。",
    targetUser: "Google Workspace利用者・マルチモーダルな作業・Googleサービス活用者",
  },
  {
    name: "Grok 3（xAI）",
    emoji: "⚡",
    summary: "リアルタイム情報とX（旧Twitter）連携",
    details:
      "イーロン・マスク率いるxAIが開発したモデル。X（旧Twitter）のリアルタイム投稿データを参照できるのが最大の特徴で、「今日のAI業界の最新ニュースを教えて」のような時事的な質問が得意です。他のモデルが学習データの締め切りまでしか答えられないのに対し、Grokは最新情報を返せます。X Premiumの契約が必要なため、X をヘビーに使っている方向けです。",
    targetUser: "最新ニュース収集・X活用者・リアルタイムトレンド調査",
  },
] as const;

const startGuideItems = [
  {
    condition: "まずAIを体験してみたい・何でもいいから試したい",
    recommendation: "→ ChatGPT（無料）から始める",
    action: "chatgpt.com にアクセス → Googleアカウントで登録 → 「こんにちは」と打つだけ",
  },
  {
    condition: "仕事の文章作成・長い文書の要約をしたい",
    recommendation: "→ Claude Sonnet 4.6（無料）を試す",
    action: "claude.ai にアクセス → 登録後、長いPDFや文書を貼り付けて「要約して」と送る",
  },
  {
    condition: "Gmailを毎日使う・Googleのサービスが好き",
    recommendation: "→ Gemini（無料）をGmailに連携する",
    action: "Gmail右側の「Gemini」アイコンをクリック → 「このメールを要約して」と試す",
  },
  {
    condition: "画像やビジュアルをAIで作ってみたい",
    recommendation: "→ ChatGPT（DALL-E 3）またはAdobe Fireflyを試す",
    action: "ChatGPTに「ミニマルなロゴを作って」と送るか、firefly.adobe.com で試す（無料）",
  },
  {
    condition: "プログラムを書いてみたい・業務を自動化したい",
    recommendation: "→ ChatGPT（GPT-5.3 Codex）またはBolt.newを試す",
    action: "ChatGPTに「Excelで○○を自動処理するコードを作って」と相談するか、bolt.new で試す",
  },
] as const;

const weekActions = [
  {
    day: "Day 1〜2",
    title: "ChatGPTに登録して、仕事の相談を1つする",
    detail:
      "chatgpt.comでアカウント作成（無料・5分）。メールの返信や会議の準備で困っていることを1つ相談してみましょう。「完璧な質問」でなくていいです。「明日の会議で使う挨拶文を考えて」のような一言で十分です。",
  },
  {
    day: "Day 3〜4",
    title: "Claudeで長い文書を要約させてみる",
    detail:
      "claude.aiに登録（無料）。普段読むのが面倒な長いPDF・記事・レポートをClaudeに貼り付けて「箇条書きで要約して」と頼んでみましょう。時間の節約感が体感できます。",
  },
  {
    day: "Day 5",
    title: "Geminiをスマホに入れてみる",
    detail:
      "スマホのApp StoreまたはGoogle PlayでGeminiアプリをインストール（無料）。通勤中に「今日のニュースで気になることを教えて」と音声で話しかけてみましょう。",
  },
  {
    day: "Day 6〜7",
    title: "使ったAIの感想をメモして「続けるもの」を1つ決める",
    detail:
      "3つのAIを試して「これが一番使いやすい」「この用途が便利だった」をメモ。続けて使いたいツールを1本に絞りましょう。全部使おうとすると続きません。まず1本を深める方が効果的です。",
  },
] as const;

export default function AiOverviewMap2026Page({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "2026年春のAI全体マップ" },
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
                title="2026年春のAI全体マップ｜初心者がまず知っておくべきツール・できること・始め方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            2026年春のAI全体マップ｜初心者がまず知っておくべきツール・できること・始め方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPT、Claude、Gemini、Sora、Midjourney…AIのツールが多すぎてどれから手を付ければいいのかわからない」——そう思っていませんか？
            ニュースやSNSでAIの話題を目にするたびに「自分には難しそう」と思考停止してしまう。その気持ちはよくわかります。
            この記事では、2026年春時点の生成AI全体を「地図」のように整理し、初心者がどこから入るべきかを明確に示します。
            全部覚える必要はありません。まずあなたに合った入り口を見つけましょう。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連記事も参考にどうぞ：
          <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIとは？初心者向け解説
          </Link>
          ・
          <Link href="/academy/blog/ai-trends-february-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            2026年2月の生成AI最新トレンド
          </Link>
          ・
          <Link href="/academy/blog/gpt-vs-claude-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT vs Claude 2026年比較
          </Link>
          ・
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIが怖い・難しいを乗り越えるガイド
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              生成AIは「テキスト・画像・音声・動画・コーディング」の5カテゴリに整理できる
            </li>
            <li className="pl-1 marker:text-gray-500">
              初心者はまずChatGPTから。慣れたらClaude（長文分析）やGemini（Google連携）を用途で使い分ける
            </li>
            <li className="pl-1 marker:text-gray-500">
              2026年春の主要モデル：GPT-5.3 Codex（コーディング）・Claude Opus 4.6（分析）・Gemini 3（マルチモーダル）・Grok 3（リアルタイム）
            </li>
            <li className="pl-1 marker:text-gray-500">
              「どれが最強？」への答えは「用途による」。全部覚えなくていい、まず1本を深める
            </li>
            <li className="pl-1 marker:text-gray-500">
              最初の1週間でChatGPT→Claude→Geminiを順番に試すと、自分に合ったツールが見えてくる
            </li>
          </ul>
        </motion.section>

        {/* カテゴリ別整理 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ai-map-categories" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            生成AIの地図：カテゴリ別整理
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            生成AIを難しく感じる最大の理由は「ツール名が多すぎる」ことです。でも整理してみると、すべて5つのカテゴリに収まります。
            地図を描くように、全体を俯瞰してみましょう。
          </p>
          <div className="mt-8 space-y-5">
            {aiCategories.map((cat) => (
              <section key={cat.name} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{cat.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">{cat.description}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 px-4 py-2">
                    <p className="text-xs font-semibold text-gray-500">代表ツール</p>
                    <p className="mt-1 text-sm text-gray-800">{cat.tools}</p>
                  </div>
                  <div className="rounded-lg bg-will-lighter/50 px-4 py-2">
                    <p className="text-xs font-semibold text-will-primary">こんな用途に</p>
                    <p className="mt-1 text-sm text-gray-800">{cat.bestFor}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-500">
            ※ 2026年2月時点の情報です。AI業界は変化が速いため、各ツールの公式サイトで最新情報をご確認ください。
          </p>
        </motion.section>

        {/* ツール早見表 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="tool-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年春の主要ツール早見表
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「どれを使えばいいかわからない」という声に答える早見表です。用途と無料/有料の観点で整理しました。
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">ツール名</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">得意なこと</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">無料で使えるか</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">推奨用途</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {toolComparison.map((row) => (
                  <tr key={row.tool} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.tool}</td>
                    <td className="px-4 py-3 text-gray-700">{row.strongPoint}</td>
                    <td className="px-4 py-3 text-gray-700">{row.free}</td>
                    <td className="px-4 py-3 text-gray-700">{row.recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            ◎=無料プランあり　△=一部機能のみ無料　×=有料のみ（2026年2月時点）
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
          <MidArticleCtaBox slug="ai-overview-map-2026" />
        </motion.section>

        {/* 最新モデル解説 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="latest-models" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年春の最新モデルを平易に解説
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ニュースで見かけるモデル名がよくわからない、という方のために、初心者でも理解できる言葉で整理しました。
            「技術的にすごい」ではなく「あなたにとって何が便利か」の観点で解説します。
          </p>
          <div className="mt-8 space-y-6">
            {latestModels.map((model) => (
              <section key={model.name} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{model.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{model.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-will-primary">{model.summary}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-700">{model.details}</p>
                <div className="mt-4 rounded-lg bg-will-lighter/50 px-4 py-3">
                  <p className="text-xs font-semibold text-will-primary">こんな人に向いている</p>
                  <p className="mt-1 text-sm text-gray-700">{model.targetUser}</p>
                </div>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">「どれが最強？」への正直な答え</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              「ChatGPTとClaudeどちらが優れているか？」という質問はよくありますが、答えは「用途による」です。
              コーディングならCodex、長文分析ならClaude、Google連携ならGemini、リアルタイム情報ならGrok——それぞれ得意分野が異なります。
              「最強のAI」を探すより、「自分の作業に合ったAI」を見つける方が何倍も実用的です。
            </p>
          </div>
        </motion.section>

        {/* 始め方判断フロー */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="start-guide" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            あなたはどこから始めるべき？用途別スタートガイド
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「全部試してみよう」は挫折の原因になります。あなたの状況に合わせて「最初の1本」を選びましょう。
          </p>
          <div className="mt-6 space-y-4">
            {startGuideItems.map((item) => (
              <div key={item.condition} className="rounded-xl border border-gray-200 p-5">
                <p className="text-sm font-semibold text-gray-900">✦ {item.condition}</p>
                <p className="mt-2 text-sm font-bold text-will-primary">{item.recommendation}</p>
                <p className="mt-2 text-xs leading-6 text-gray-600">
                  <span className="font-semibold">今日できること：</span>
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 最初の1週間 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="first-week" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            初心者の最初の1週間でやること
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「いつか始めよう」は始まりません。1週間の具体的なアクションを示します。
            1日10〜15分あれば十分です。
          </p>
          <div className="mt-6 space-y-5">
            {weekActions.map((action) => (
              <div key={action.day} className="flex gap-4 rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-5">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">{action.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{action.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="text-sm font-semibold text-green-800">1週間後のゴール</p>
            <p className="mt-2 text-sm leading-7 text-green-900">
              「AIって難しい」が「ChatGPTはこういう時に使うもの」「Claudeはこの作業に便利」という具体的な理解に変わっているはずです。
              完璧に使いこなせなくていい。「1つ使えるものが見つかった」だけで、この1週間は大成功です。
            </p>
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            もっと体系的に学びたい方は、
            <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
            </Link>
            もあわせてご覧ください。
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
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：地図を持てば、迷わなくなる
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事で整理したAI全体マップを振り返りましょう。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">生成AIは「テキスト・画像・音声・動画・コーディング」の5カテゴリに整理できる</li>
            <li className="pl-1 marker:text-gray-500">2026年春の主要モデルはGPT-5.3 Codex・Claude 4.6・Gemini 3・Grok 3。それぞれ得意分野が異なる</li>
            <li className="pl-1 marker:text-gray-500">初心者はまずChatGPTから。慣れたら用途でツールを使い分ける</li>
            <li className="pl-1 marker:text-gray-500">最初の1週間で3つのAIを試して「続けるもの」を1本に絞る</li>
            <li className="pl-1 marker:text-gray-500">「全部使いこなせる必要はない」——まず1つ、仕事の役に立つAIを見つけることが最初のゴール</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            地図があれば、迷わなくなります。この記事がその地図になれれば嬉しいです。
            あとは地図を見ながら、一歩踏み出すだけです。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            AIで人生をリブートする——最初の一歩を、今日踏み出してみませんか。
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
            title="AIリブートのLINEを追加して、あなただけの30日プランをもらおう"
            description="「この記事を読んで始めたいけど、何から手をつければいいかわからない」——そんな方のために、あなたの状況・職種・目標に合わせた30日学習プランテンプレートをLINEでプレゼントしています。まずは気軽にご登録ください。"
            buttonLabel="LINEで30日プランを受け取る（無料）"
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
          <h2 id="academy-cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のステップ：もっとAIを使いこなしたくなったら
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            全体像を掴んだら、次は実際の使い方を深めましょう。
            プロンプトの書き方を学ぶと、AIの回答品質が格段に上がります。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              プロンプトの書き方を学ぶ
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
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けわかりやすい解説【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT vs Claude 2026年徹底比較｜用途別おすすめの選び方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-plan-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT料金プラン比較｜無料・Plus・Teamの違いと選び方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-trends-february-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                【2026年2月】生成AIの最新トレンド5選
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを仕事で使い始めた人の「最初の30日」完全ガイド
              </Link>
            </li>
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
