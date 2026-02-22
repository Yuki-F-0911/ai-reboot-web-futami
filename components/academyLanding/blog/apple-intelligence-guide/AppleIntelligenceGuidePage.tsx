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

const keywordTags = ["Apple Intelligence", "iPhone AI", "Siri進化", "日本語対応", "初心者向け"] as const;

const tocItems = [
  { id: "answer-box", label: "まず結論：Apple Intelligenceとは" },
  { id: "overview-2026", label: "2025-2026年の展開と現状" },
  { id: "supported-devices", label: "対応機種・OSバージョン一覧" },
  { id: "japanese-support", label: "日本語対応状況（2026年時点）" },
  { id: "six-features", label: "6大機能を初心者向けに解説" },
  { id: "privacy", label: "プライバシーの仕組み" },
  { id: "positioning", label: "ChatGPT・Geminiとの使い分け" },
  { id: "activation", label: "有効化手順（図解）" },
  { id: "narrative", label: "実際に使って感じたこと" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ・LINE CTA" },
] as const;

const rolloutTimeline = [
  {
    phase: "2025年前半",
    title: "Apple Intelligenceの初期展開",
    body: "iPhone・iPad・Mac向けに、文章支援や通知要約などの日常機能から展開。既存アプリにAIが自然に組み込まれた点が大きな特徴です。",
  },
  {
    phase: "2025年後半",
    title: "Siriの文脈理解と連携が前進",
    body: "Siriが連続した質問の文脈を保ちやすくなり、必要に応じて外部AIとの連携が可能に。単発の音声操作から、対話型の補助へと進みました。",
  },
  {
    phase: "2026年",
    title: "対応言語・対応地域の拡大フェーズ",
    body: "日本語を含む多言語対応が拡大。機能によって段階差はありますが、日常利用の入口として使いやすい環境が整ってきています。",
  },
] as const;

const supportedDevices = [
  {
    category: "iPhone",
    models: "iPhone 15 Pro / 15 Pro Max 以降",
    os: "iOS 18系 以降",
    point: "iPhone 15（無印）・15 Plusは対象外",
  },
  {
    category: "iPad",
    models: "Apple Silicon搭載iPad（Mシリーズ）",
    os: "iPadOS 18系 以降",
    point: "機種とOSの両方を満たす必要あり",
  },
  {
    category: "Mac",
    models: "Apple Silicon搭載Mac（M1以降）",
    os: "macOS Sequoia系 以降",
    point: "Intel Macは対象外",
  },
] as const;

const featureGuides = [
  {
    title: "文章の書き直し・校正（Writing Tools）",
    what: "メモ・メール・メッセージなどで、文章のトーン変更、要約、誤字修正を即時に実行できます。",
    scene: "上司に送るメールだけ丁寧語に整えたい、長文を3行に圧縮したい、という場面で便利です。",
    tip: "最初は「短くする」「丁寧にする」の2つだけ覚えると、日常業務で十分使えます。",
  },
  {
    title: "通知の要約（Priority Notifications）",
    what: "大量の通知を要点だけにまとめ、先に見るべきものを優先表示します。",
    scene: "朝に通知が40件以上たまっているときでも、重要な連絡から順に追えるため見落としを減らせます。",
    tip: "通知を完全オフにするより、要約＋優先表示の併用が実務では使いやすいです。",
  },
  {
    title: "画像生成（Image Playground / Genmoji）",
    what: "キーワード入力でイラストを生成したり、自分用の絵文字を作ったりできます。",
    scene: "プレゼン資料の挿絵、家族グループのメッセージ用スタンプ、ちょっとした企画のラフ作成に向きます。",
    tip: "最初は「用途」を先に決めると迷いません。例: 社内資料のアイコン、LINEの返信用など。",
  },
  {
    title: "Siriの進化（ChatGPT連携含む）",
    what: "自然な言い回しでも意図を理解しやすくなり、複雑な質問は必要に応じてChatGPT連携で補完できます。",
    scene: "「この予定に移動時間を足してリマインドして」のような複合指示を、音声だけで処理したい場面で役立ちます。",
    tip: "短文命令ではなく、普段の言葉で話しかけるほど差を実感しやすいです。",
  },
  {
    title: "フォトアプリのクリーンアップ",
    what: "写真内の不要物を目立たなくしたり、見せたい被写体を強調したりできます。",
    scene: "旅行写真の背景に写り込んだ人や看板を整理して、家族アルバム用に整えるときに便利です。",
    tip: "仕上がりは100点を狙わず、共有前の軽い調整として使うと満足度が高いです。",
  },
  {
    title: "メールの要約・返信提案",
    what: "長いメールスレッドを短く要約し、返信案の下書きまで提案してくれます。",
    scene: "朝の受信箱整理や、返信の言い回しに時間がかかる場面で時短効果が出ます。",
    tip: "下書きをそのまま送らず、固有名詞と日付だけ最終確認する運用が安全です。",
  },
] as const;

const activationSteps = [
  {
    step: "手順1：対応機種とOSを確認する",
    description:
      "設定アプリで機種とOSバージョンを確認します。対応外の場合は設定項目が表示されないため、まずここをチェックするのが最短です。",
  },
  {
    step: "手順2：Siriと言語設定を整える",
    description:
      "Siriが有効になっているか、端末の言語と地域設定に不整合がないかを確認します。日本語で使う場合は入力言語も日本語を優先にします。",
  },
  {
    step: "手順3：Apple Intelligenceをオンにする",
    description:
      "設定内のApple Intelligence関連項目をオンにします。初回は準備処理に時間がかかることがあるため、Wi-Fi接続時の実行が安定です。",
  },
  {
    step: "手順4：よく使うアプリで1機能だけ試す",
    description:
      "最初から全部試す必要はありません。メール要約かWriting Toolsのどちらか1つに絞ると、導入の負荷が下がります。",
  },
  {
    step: "手順5：必要ならChatGPT連携を許可する",
    description:
      "Siri経由で高度な生成を使いたい場合のみ連携を有効化します。毎回確認する設定にしておくと、安心して使い分けできます。",
  },
] as const;

const toolPositioning = [
  {
    tool: "Apple Intelligence",
    strength: "OS標準機能として自然に使える。通知・メール・写真など日常操作との統合が強い。",
    bestFor: "iPhone中心の生活で、まずは安全にAIを使い始めたい人。",
  },
  {
    tool: "ChatGPT",
    strength: "発想支援、要約、企画、学習、文章生成など幅広い対話タスクに強い。",
    bestFor: "深い壁打ちや、長文の整理・アイデア発散をしたい人。",
  },
  {
    tool: "Gemini",
    strength: "Googleサービスとの連携が強く、検索やWorkspace連携を使いやすい。",
    bestFor: "Gmail・Googleドキュメント中心で作業している人。",
  },
] as const;

export default function AppleIntelligenceGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Apple Intelligence完全ガイド2026" },
          ]}
        />

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
                title="Apple Intelligence完全ガイド2026：iPhoneのAI機能を初心者向けに徹底解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Apple Intelligence完全ガイド2026：iPhoneのAI機能を初心者向けに徹底解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月23日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「iPhoneは毎日使っているけれど、AIはまだ使ったことがない」。そんな方にとって、Apple Intelligenceは最初の入口として扱いやすい機能群です。
            新しいアプリを増やさなくても、いつものメール、通知、写真、Siriの中で自然に使い始められるからです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            このガイドでは、難しい専門用語をできるだけ避けながら、Apple Intelligenceの全体像、対応機種、日本語対応、6大機能、プライバシー、ChatGPTとの違いまで一気に整理します。
            結論から言うと、Apple Intelligenceは「生成AI入門の最初の一歩」として非常に相性が良い選択肢です。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          先に基礎を押さえるなら
          <Link href="/academy/blog/ai-overview-map-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI全体マップ
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-30min-challenge-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            初心者30分チャレンジ
          </Link>
          もあわせて読むと理解が早くなります。
        </p>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="check-box mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="answer-box" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            冒頭アンサーボックス：Apple Intelligenceとは何か・誰に向いているか
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Apple Intelligenceは、iPhone・iPad・Macに統合されたAI機能群です。別アプリを追加しなくても使い始められます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              向いているのは「AIは気になるけれど、難しい設定や専門用語は避けたい」人です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              特徴は、端末内処理を中心にしたプライバシー設計と、日常アプリとの自然な統合です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              まずはWriting Toolsか通知要約のどちらか1つを試すだけで、AI活用の感覚をつかめます。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="overview-2026" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Apple Intelligenceとは：2025-2026年の展開と現状
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Apple Intelligenceは、単体アプリではなく「OS機能としてのAI」です。チャットを開いて使うだけのAIと違い、通知、メール、写真、Siriのような日常操作に直接入り込んでいる点が本質です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            2025年から2026年にかけての流れをみると、最初は英語圏中心の展開でしたが、現在は多言語対応の拡大フェーズに入っています。日本語環境でも利用できる範囲が広がり、初めてAIを触るユーザーでも使いやすい状態になってきました。
          </p>
          <div className="mt-8 space-y-4">
            {rolloutTimeline.map((item) => (
              <section key={item.phase} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-will-primary">{item.phase}</p>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            つまり今のApple Intelligenceは、「最先端の実験機能」よりも「毎日の小さな手間を減らす実用機能」に重心があります。AIに慣れていない人にとって、ここが大きな利点です。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="supported-devices" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            対応機種・OSバージョン一覧（iPhone 15 Pro以降 / iPad / Mac）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「設定を探しても見つからない」という場合、原因の多くは機種かOSです。まずは下の一覧で対象条件を確認してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">カテゴリ</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">対応機種の目安</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">OS要件の目安</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">初心者向けメモ</th>
                </tr>
              </thead>
              <tbody>
                {supportedDevices.map((device) => (
                  <tr key={device.category}>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-900">{device.category}</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">{device.models}</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">{device.os}</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">{device.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            重要ポイントは、<strong>iPhone 15（無印）は対象外で、15 Pro系以降が対象</strong>という点です。買い替え検討中の方は、この条件だけ先に押さえておくと失敗が減ります。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="japanese-support" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            日本語対応状況（2026年時点）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2026年時点で、日本語対応は「使える機能が増えているが、機能ごとに段階差がある」という状態です。ここを最初に理解しておくと、「思ったのと違う」を防げます。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">文章の書き直しや要約は、日本語でも実用レベルで使える場面が多い</li>
            <li className="pl-1 marker:text-gray-500">画像生成系は、プロンプト表現によって結果の品質に差が出る</li>
            <li className="pl-1 marker:text-gray-500">Siri連携は改善中で、話し方や文脈によって精度差が出ることがある</li>
            <li className="pl-1 marker:text-gray-500">機能解放タイミングは地域設定やOS更新タイミングで差が出る場合がある</li>
          </ul>
          <div className="caution-box mt-8">
            <h4>実用上のコツ</h4>
            <p className="mt-2 text-sm leading-7">
              「全部が完璧に日本語対応してから始める」より、いま安定している機能から使う方が効果的です。まずはWriting Tools、次に通知要約、その後にSiri連携へ進む順番が失敗しにくいです。
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="six-features" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            6大機能を初心者目線で解説
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここでは、機能そのものの説明だけでなく「実際にどんな場面で使えるか」をセットで整理します。最初から6つ全部を使う必要はありません。1つ使えて2つ目に進めれば十分です。
          </p>
          <div className="mt-8 space-y-6">
            {featureGuides.map((feature) => (
              <section key={feature.title} className="point-box">
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-700">
                  <span className="font-semibold">できること：</span>
                  {feature.what}
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold">こんな場面で使える：</span>
                  {feature.scene}
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold">初心者向けの使い方：</span>
                  {feature.tip}
                </p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            6機能の中でも、最初の一歩としては「文章の書き直し」と「通知要約」が最も失敗しにくいです。入力がシンプルで、すぐ結果が出るため、AIに対する心理的なハードルを下げられます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="apple-intelligence-guide" />
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="privacy" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            プライバシーの仕組み：オンデバイスAIとクラウドAIの違い
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Apple Intelligenceを語るとき、重要なのが「処理場所」です。すべてをクラウドに送る設計ではなく、まず端末内で処理し、端末だけでは難しいときに限定してクラウド処理を使う考え方が基本です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-900">オンデバイスAI</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">処理の多くをiPhone / iPad / Mac内で完結</li>
                <li className="pl-1 marker:text-gray-500">応答が速く、ネット不安定時でも使える場面がある</li>
                <li className="pl-1 marker:text-gray-500">入力データを外部送信しない設計を取りやすい</li>
              </ul>
            </section>
            <section className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-lg font-bold text-gray-900">クラウドAI（必要時）</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">端末負荷が高いタスクを安全に補助するために利用</li>
                <li className="pl-1 marker:text-gray-500">常時送信ではなく、条件付きで活用する設計</li>
                <li className="pl-1 marker:text-gray-500">複雑な生成や推論で品質を確保しやすい</li>
              </ul>
            </section>
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここで覚えるべき要点は1つです。<strong>Apple Intelligenceは「使いやすさ」と「プライバシー」を両立するために、処理場所を使い分けている</strong>ということです。AIが怖いと感じる人にとって、最初に安心材料になるポイントです。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="positioning" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT・Geminiとの位置づけと使い分け
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Apple IntelligenceとChatGPTは競合というより、役割が違います。どちらか1つに決めるより、用途で分ける方が実務では合理的です。
          </p>
          <div className="mt-6 space-y-4">
            {toolPositioning.map((tool) => (
              <section key={tool.tool} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">{tool.tool}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold">強み：</span>
                  {tool.strength}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold">向いている人：</span>
                  {tool.bestFor}
                </p>
              </section>
            ))}
          </div>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">日々の端末操作を楽にしたいならApple Intelligence</li>
            <li className="pl-1 marker:text-gray-500">企画書の構成や学習相談など深い対話はChatGPT</li>
            <li className="pl-1 marker:text-gray-500">Googleサービス中心の業務ならGemini</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI初心者の現実的な始め方は、まずApple Intelligenceで日常にAIをなじませ、必要になったときだけChatGPTやGeminiを追加する流れです。導入負荷が低く、継続しやすい構成になります。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="activation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Apple Intelligence有効化の手順（スクショ代わりの図解説明）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここでは、画面を見ながら進める感覚で手順を整理します。実際のメニュー名はOS更新で少し変わることがありますが、流れは同じです。
          </p>
          <div className="mt-8 space-y-4">
            {activationSteps.map((item) => (
              <section key={item.step} className="rounded-xl border border-will-primary/15 bg-will-lighter/30 p-5">
                <h3 className="text-base font-bold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-bold text-gray-900">図解イメージ（テキスト版）</h3>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-700">
              設定アプリを開く
              {"\n"}↓
              {"\n"}機種・OSを確認
              {"\n"}↓
              {"\n"}Siri設定と言語設定を確認
              {"\n"}↓
              {"\n"}Apple Intelligenceをオン
              {"\n"}↓
              {"\n"}メール要約 or Writing Toolsを1つ試す
              {"\n"}↓
              {"\n"}必要ならChatGPT連携を追加
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="narrative" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Apple Intelligenceを使ってみて感じたこと（ナラティブ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            最初に感じたのは、「AIを使うためにAIアプリを開かなくていい」ことのラクさでした。メールを書いている途中で文面を整え、通知を確認するときに要点を先に読み、必要なときだけSiriに相談する。
            使っている側の意識としては、AIを操作している感覚より、普段のiPhone操作が少し賢くなった感覚に近いです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            特に初心者視点で良かったのは、失敗してもダメージが小さい点です。たとえば文章の書き直しは「気に入らなければ戻す」で済みますし、通知要約も「結局は元通知を開けば確認できる」ので心理的な負担が少ないです。
            この小さな成功体験の積み重ねが、AIへの抵抗感を確実に下げてくれます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            一方で、万能ではありません。画像生成の仕上がりにばらつきが出たり、Siriの意図解釈が期待とズレたりする場面もあります。ただ、それを理由に使わないのではなく、
            「どの用途なら安定するか」を先に決めることで実用性は上がります。Apple Intelligenceは、AIを完璧に使いこなすための機能ではなく、AIを日常に取り入れる習慣づくりに向いた機能だと感じました。
          </p>
        </motion.section>

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

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：Apple Intelligenceは「生成AI入門の最初の一歩」
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Apple Intelligenceは、iPhoneユーザーがAIに入るための負担を大きく下げてくれます。特別なツール知識がなくても、普段の操作の中で少しずつ使えるからです。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">iPhone・iPad・Macの日常操作に統合されているため始めやすい</li>
            <li className="pl-1 marker:text-gray-500">オンデバイス中心設計で、プライバシー面の安心感を持ちやすい</li>
            <li className="pl-1 marker:text-gray-500">ChatGPTやGeminiと競合ではなく、用途で使い分けると効果が出る</li>
            <li className="pl-1 marker:text-gray-500">最初はWriting Toolsか通知要約の1機能だけで十分</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            さらに一歩進めるなら、単にツールを触るだけでなく、生成AI活用力を土台にしながら、自分の強みや価値観を言語化し、仲間との対話で実践を深める学び方が有効です。
            その組み合わせが、AI活用を一時的な流行ではなく、キャリアの選択肢に変えていきます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="iPhoneのAIが気になったら、本格的なAI活用も一緒に学びませんか"
            description="Apple Intelligenceをきっかけに生成AI全体を学びたい方へ。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラムです。LINEで無料相談を受け付けています。"
            buttonLabel="LINEで無料相談する（登録無料）"
          />
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-overview-map-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                2026年春のAI全体マップ｜初心者がまず知っておくべきツール・できること・始め方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-web-search-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTの検索機能が超便利！使い方・活用術を初心者向けに解説
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
