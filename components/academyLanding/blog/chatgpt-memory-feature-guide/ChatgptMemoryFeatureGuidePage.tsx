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

const keywordTags = [
  "ChatGPT メモリ",
  "ChatGPT Memory 設定",
  "ChatGPT 記憶",
  "ChatGPT 覚えさせる",
  "AI 記憶 機能",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-forgets", label: "ChatGPTが「忘れる」理由" },
  { id: "what-is-memory", label: "メモリ機能とは何か？" },
  { id: "how-to-setup", label: "メモリ機能の設定方法" },
  { id: "what-to-memorize", label: "何を覚えさせると便利？実例15選" },
  { id: "manage-memory", label: "メモリの確認・編集・削除方法" },
  { id: "vs-custom-instructions", label: "Custom Instructionsとの違いと使い分け" },
  { id: "privacy-safety", label: "プライバシーと安全な使い方" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const memorizeExamples = [
  {
    category: "職業・役職",
    example: "「私はITベンチャーの営業部長です」",
    benefit: "業界用語や職場の文脈に合った回答になる",
  },
  {
    category: "仕事の目標",
    example: "「今期の目標はチームのKPI達成率120%」",
    benefit: "具体的で実践的なアドバイスを得やすくなる",
  },
  {
    category: "出力形式の好み",
    example: "「回答は常に箇条書きで300字以内にして」",
    benefit: "毎回フォーマット指示が不要になる",
  },
  {
    category: "日本語の口調",
    example: "「友達に話すような柔らかい言葉で答えて」",
    benefit: "毎回希望する文体の説明が不要になる",
  },
  {
    category: "使用ツール・環境",
    example: "「仕事でSlack・Notion・G Suiteを使用」",
    benefit: "ツール連携のアドバイス精度が上がる",
  },
  {
    category: "家族構成",
    example: "「妻と小学生の子ども2人の4人家族」",
    benefit: "ライフイベント・教育の相談に活用できる",
  },
  {
    category: "趣味・関心",
    example: "「週末はロードバイクと料理を楽しむ」",
    benefit: "趣味に関連した提案の精度が向上する",
  },
  {
    category: "健康・体質",
    example: "「花粉症で春は特につらい」",
    benefit: "季節・健康に応じたアドバイスが可能になる",
  },
  {
    category: "学習スタイル",
    example: "「具体例を先に見せてから説明してほしい」",
    benefit: "自分の理解しやすい説明スタイルで返ってくる",
  },
  {
    category: "業界・専門知識",
    example: "「医療業界10年、薬機法は詳しい」",
    benefit: "基礎説明をスキップした高度な回答が得られる",
  },
  {
    category: "拠点・タイムゾーン",
    example: "「大阪在住、海外との取引もある」",
    benefit: "時差を考慮したスケジュール提案をしてもらえる",
  },
  {
    category: "言語対応",
    example: "「英文メールも頻繁に書く」",
    benefit: "英日両対応の文書作成に対応してもらえる",
  },
  {
    category: "スキルレベル",
    example: "「ExcelはVBAまで使えるがPythonは初心者」",
    benefit: "適切な難易度の説明を出力してくれる",
  },
  {
    category: "情報収集習慣",
    example: "「日経ビジネスとNewsPicksを毎日チェック」",
    benefit: "ビジネストレンドの文脈を共有できる",
  },
  {
    category: "価値観・働き方",
    example: "「効率より丁寧さを重視する仕事スタイル」",
    benefit: "価値観に合った提案・文体で返ってくる",
  },
] as const;

const privacyPoints = [
  {
    title: "個人を特定する情報は入力しない",
    body: "フルネーム・住所・電話番号・マイナンバー・クレジットカード番号などは絶対に入力しないことが鉄則です。これらはメモリに保存せず、そもそもChatGPTへの入力自体を避けましょう。",
  },
  {
    title: "会社の機密情報を覚えさせない",
    body: "未公開の製品情報・財務データ・顧客情報・人事情報などは、メモリに保存してはいけません。メモリに保存された内容はOpenAIのサーバーに保存されます。社内のAI利用ガイドラインがある場合は必ずそれに従ってください。",
  },
  {
    title: "学習利用をオフにする",
    body: '設定 → Data Controls → 「Improve the model for everyone」をオフにすることで、会話内容がAIのトレーニングデータとして使われなくなります。プライバシーを重視するなら最初に必ず設定しましょう。',
  },
  {
    title: "定期的にメモリを見直す",
    body: "月に1回程度、設定 → パーソナライゼーション → メモリ → 管理 からメモリ内容を確認しましょう。古くなった情報・間違って保存された情報は削除するのが安全です。",
  },
  {
    title: "機密性の高い話題はTemporary Chatを使う",
    body: "健康の悩み・家庭の問題・財務の相談など、記録を残したくない話題はTemporary Chatモードを使いましょう。このモードでは会話履歴もメモリも残りません。",
  },
] as const;

export default function ChatgptMemoryFeatureGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTのメモリ機能完全ガイド" },
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
                title="ChatGPTのメモリ機能とは？設定方法から活用術まで、会話を記憶するAIの使い方完全ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTのメモリ機能とは？設定方法から活用術まで、会話を記憶するAIの使い方完全ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「毎回ChatGPTに自己紹介するのが面倒」「先週教えた設定、また忘れてる……」——そう感じたことはありませんか？
            ChatGPTはデフォルトで会話をまたいで記憶を保持しない仕様になっています。しかし2024年2月から登場した「メモリ機能（Memory）」を使えば、
            職業・好み・家族構成・よく使うフォーマットなどを一度覚えさせるだけで、以降のすべての会話で自動的に活用してくれるようになります。
            この記事では、メモリ機能の仕組みから設定方法・活用術・プライバシー対策まで、初めての方にもわかるよう詳しく解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTカスタム指示完全ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプトの書き方入門
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-free-plan-comparison-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI無料プラン比較2026
          </Link>
          もあわせて参照ください。
        </p>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ（結論先出し）"
            items={[
              "ChatGPTはセッション（会話ウィンドウ）単位で動作し、新しいチャットを始めると記憶がリセットされる仕様",
              "メモリ機能（Memory）は2024年2月登場。無料・Plusどちらでも利用可能で、会話から自動学習または手動で情報を蓄積できる",
              "設定は「設定 → パーソナライゼーション → メモリ」から3ステップで完了。PC・スマホどちらでも同じ操作",
              "職業・好みの出力形式・家族構成など「毎回伝えていた情報」を登録すると作業効率が大幅にアップ",
              "Custom Instructionsは「固定の指示文」、メモリは「会話から自動蓄積」という違い。両方を組み合わせて使うのが最強",
            ]}
          />
        </motion.section>

        {/* ChatGPTが「忘れる」理由 */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="why-forgets">ChatGPTが「忘れる」理由——セッションとコンテキストの仕組み</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            「先週あなたに教えた私の仕事、覚えてる？」と新しいチャットでChatGPTに聞くと、必ず「申し訳ありませんが、以前の会話の内容は記憶していません」と返ってきます。これはChatGPTのバグではなく、<strong>設計上の仕様</strong>です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ChatGPTは<strong>「セッション単位」</strong>で動作します。セッションとは、今開いている一つの会話ウィンドウのことです。同じセッション内では過去の発言（コンテキスト）を保持して会話が成立しますが、ウィンドウを閉じるか新しいチャットを始めると、その記憶はリセットされます。
          </p>
          <ArticleH3>なぜ「忘れる」設計にしているのか</ArticleH3>
          <p className="text-base leading-8 text-gray-700">この仕様には主に3つの理由があります。</p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-semibold text-gray-900">1. プライバシー保護</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                会話をまたいで記憶が蓄積されると、意図しない形で過去の会話内容が別のセッションに混入するリスクがあります。デフォルトでリセットすることで、このリスクを排除しています。
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-semibold text-gray-900">2. コンテキストウィンドウの制限</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                AIが一度に処理できるテキスト量（コンテキストウィンドウ）には上限があります。すべての過去会話を保持しようとすると、この上限に素早く達してしまい、直近の会話の精度が下がります。
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-semibold text-gray-900">3. セキュリティ設計</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                デフォルトで会話を分離することで、例えば家族や同僚が同じアカウントを使った場合でも、互いの会話内容が意図せず参照されるのを防ぎます。
              </p>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            この「忘れる」仕様を補うために開発されたのが、2024年2月に登場した<strong>メモリ機能（Memory）</strong>です。次のセクションで詳しく解説します。
          </p>
        </motion.section>

        {/* メモリ機能とは何か */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-is-memory">メモリ機能（Memory）とは何か？いつから使えるようになったか</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            OpenAIは2024年2月14日、ChatGPTに「Memory」機能をテストユーザー向けに公開し、その後2024年4月に全ユーザーへ段階的にロールアウトしました。日本語UIでは「メモリ」と表示されます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            メモリ機能は、<strong>会話をまたいで情報を記憶・蓄積し、以降のすべてのチャットで自動的に活用する</strong>仕組みです。一度「私は40代のマーケターです」と伝えれば、次の会話を始めた時にもChatGPTはその情報を持った状態で回答してくれます。
          </p>
          <ArticleH3>2つのメモリ保存方式</ArticleH3>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6">
              <p className="text-lg font-bold text-gray-900">自動メモリ（Automatic Memory）</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                会話の中でChatGPTが「これは重要な情報だ」と判断した内容を自動的に保存します。例えば「私は3人子どもがいます」と話すだけで、ChatGPTが自動的に「3人の子どもがいる」というメモリを作成します。
                会話後に「〇〇を記憶しました」というポップアップが表示されることもあります。
              </p>
            </div>
            <div className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6">
              <p className="text-lg font-bold text-gray-900">手動メモリ（Manual Memory）</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                「〇〇を覚えておいて」「この情報を記憶しておいて：…」と明示的に伝えることで、確実に保存させる方法です。自動判定を待つより確実なので、重要な設定は手動で追加するのがおすすめです。
              </p>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                <span className="font-semibold">入力例：</span>「これを覚えておいて：私は毎週水曜にチームMTGがあり、議事録をまとめる役割を担っています」
              </p>
            </div>
          </div>
          <ArticleH3>プランごとの利用状況</ArticleH3>
          <p className="text-base leading-8 text-gray-700">
            メモリ機能は無料プランを含む全プランで利用できます（2026年2月時点）。ただしプランによって保存できる容量に差があります。
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 text-xs font-semibold uppercase text-gray-600">
                <tr>
                  <th className="px-4 py-3">プラン</th>
                  <th className="px-4 py-3">月額</th>
                  <th className="px-4 py-3">メモリ容量</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Free（無料）</td>
                  <td className="px-4 py-3">無料</td>
                  <td className="px-4 py-3">利用可（制限あり）</td>
                </tr>
                <tr className="bg-will-lighter/20">
                  <td className="px-4 py-3 font-medium">Plus</td>
                  <td className="px-4 py-3">$20/月</td>
                  <td className="px-4 py-3">拡大（多くのメモリを保存可）</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Pro</td>
                  <td className="px-4 py-3">$200/月</td>
                  <td className="px-4 py-3">さらに大容量（業務利用向け）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Callout type="info" title="Temporary Chat（一時的なチャット）ではメモリは使われない">
            メモリをオンにしていても、「Temporary Chat」モードで会話した場合はメモリが使用されません。機密性の高い相談や、記録を残したくない話題にはTemporary Chatを活用しましょう。PCブラウザでは左サイドバー上部の鉛筆マークから切り替えられます。
          </Callout>
        </motion.section>

        {/* 設定方法 */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="how-to-setup">メモリ機能の設定方法（PC・スマホ別の手順）</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            メモリ機能の設定はとても簡単です。PC・スマホともに「設定 → パーソナライゼーション → メモリ」の順に進むだけで、オン/オフを切り替えられます。
          </p>
          <ArticleH3>PCブラウザ（ChatGPT.com）での設定手順</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              { step: "1", title: "ChatGPT.comにアクセスしてサインイン", body: "左サイドバー最下部のアカウント名（またはプロフィールアイコン）をクリックします。" },
              { step: "2", title: "「設定（Settings）」を選択", body: "ポップアップメニューから「Settings（設定）」をクリックします。" },
              { step: "3", title: "「パーソナライゼーション」を開く", body: "設定パネルの左メニューから「Personalization（パーソナライゼーション）」をクリックします。" },
              { step: "4", title: "「メモリ」のトグルをオンにする", body: "「Memory（メモリ）」という項目のトグルスイッチをオンにします。すでにオンになっていれば設定済みです。" },
              { step: "5", title: "「Manage（管理）」ボタンで内容を確認", body: "「Manage Memory（メモリを管理する）」ボタンをクリックすると、現在保存されているメモリの一覧を確認できます。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border border-gray-200 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <ArticleH3>スマホアプリ（iOS・Android）での設定手順</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              { step: "1", title: "ChatGPTアプリを開く", body: "App Store（iPhone）またはGoogle Play（Android）から公式のChatGPTアプリをインストールし、サインインします。" },
              { step: "2", title: "右上のプロフィールアイコンをタップ", body: "画面右上のプロフィールアイコン（人物マーク）をタップします。" },
              { step: "3", title: "「設定（Settings）」をタップ", body: "メニューから「Settings（設定）」を選択します。" },
              { step: "4", title: "「パーソナライゼーション → メモリ」へ進む", body: "「Personalization（パーソナライゼーション）」→「Memory（メモリ）」の順にタップします。" },
              { step: "5", title: "トグルをオンにする", body: "メモリのトグルをオンにして設定完了。「Manage Memory（メモリを管理）」からメモリ内容の確認・削除も行えます。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border border-gray-200 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Callout type="tip" title="PCで設定した内容はスマホにも同期される">
            同じChatGPTアカウントでサインインしている限り、PCで設定したメモリの内容はスマホアプリにも自動同期されます。どちらのデバイスからでもメモリを管理できます。
          </Callout>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="chatgpt-memory-feature-guide" />
        </motion.section>

        {/* 何を覚えさせると便利？実例15選 */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-to-memorize">ChatGPTに何を覚えさせると便利？実例15選</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            メモリ機能を設定しても「何を覚えさせればいいかわからない」という方のために、カテゴリ別に15の実例をご紹介します。「毎回ChatGPTに説明していること」をリストアップして、そのままメモリに追加してみましょう。
          </p>
          <RichTable>
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">カテゴリ</th>
                <th className="px-4 py-3 text-left">覚えさせる内容の例</th>
                <th className="px-4 py-3 text-left hidden sm:table-cell">メリット</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {memorizeExamples.map((item) => (
                <tr key={item.category} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-semibold text-will-primary whitespace-nowrap">{item.category}</td>
                  <td className="px-4 py-3 text-gray-700">{item.example}</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{item.benefit}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <Callout type="tip" title="「覚えて」と言葉で伝えるのが一番確実">
            自動メモリは便利ですが、確実に保存したい場合は「これを覚えておいて：〇〇」と明示的に伝えましょう。ChatGPTが「〇〇を記憶しました」と確認を返してくれれば保存完了です。
          </Callout>
        </motion.section>

        {/* メモリの確認・編集・削除 */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="manage-memory">メモリの内容を確認・編集・削除する方法</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            ChatGPTが覚えている内容を確認したり、古い情報や間違った情報を削除したりできます。定期的に見直して、常に最新の情報に保っておきましょう。
          </p>
          <ArticleH3>PCブラウザでのメモリ管理手順</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              { step: "1", body: "左下のアカウント名 → 「設定（Settings）」をクリック" },
              { step: "2", body: "「パーソナライゼーション（Personalization）」→「メモリ（Memory）」を開く" },
              { step: "3", body: "「メモリを管理（Manage Memory）」をクリックするとメモリ一覧が表示される" },
              { step: "4", body: "特定のメモリの右側にある「×」ボタンまたは「…」→「削除（Delete）」で個別削除" },
              { step: "5", body: "「すべてのメモリを消去（Clear all memories）」ですべてのメモリを一括削除" },
            ].map((item) => (
              <div key={item.step} className="flex gap-3 items-start text-sm leading-7 text-gray-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-700">
                  {item.step}
                </span>
                <span>{item.body}</span>
              </div>
            ))}
          </div>
          <ArticleH3>スマホアプリでのメモリ管理手順</ArticleH3>
          <div className="mt-4 space-y-3">
            {[
              { step: "1", body: "右上のプロフィールアイコン → 「設定（Settings）」→「パーソナライゼーション」→「メモリを管理」をタップ" },
              { step: "2", body: "保存されているメモリの一覧が表示される" },
              { step: "3", body: "削除したいメモリを長押し（iOS）またはスワイプ（Android）で個別削除" },
              { step: "4", body: "一括削除も同じ画面から実行可能" },
            ].map((item) => (
              <div key={item.step} className="flex gap-3 items-start text-sm leading-7 text-gray-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-700">
                  {item.step}
                </span>
                <span>{item.body}</span>
              </div>
            ))}
          </div>
          <Callout type="info" title="チャットでメモリを確認する方法">
            設定画面を開かなくても、会話中に「あなたが私について覚えていることを教えて」と質問すれば、ChatGPTが現在のメモリ内容をすべてリストアップしてくれます。
            また「〇〇という情報は削除して」と伝えれば、会話の中で直接メモリを削除することもできます。
          </Callout>
          <Callout type="warning" title="間違ったメモリが蓄積されている場合">
            ChatGPTが誤って「医者だと覚えている」「趣味が釣りだと覚えている」など間違った情報を保存してしまうことがあります。定期的に設定画面でメモリ内容を確認し、
            誤った情報は削除して正しい情報を伝え直しましょう。「〇〇という情報は間違いです。正しくは△△です。これを覚えておいて」と伝えるのが効果的です。
          </Callout>
        </motion.section>

        {/* Custom Instructionsとの違い */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="vs-custom-instructions">Custom Instructions（カスタム指示）との違いと使い分け</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            ChatGPTには「メモリ機能」と似た機能として「Custom Instructions（カスタム指示）」もあります。この2つはよく混同されますが、仕組みも向いている用途も異なります。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">比較項目</th>
                <th className="px-4 py-3 text-left">メモリ機能</th>
                <th className="px-4 py-3 text-left">Custom Instructions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { item: "情報の蓄積方法", memory: "会話から自動学習 or 手動追加", custom: "ユーザーが手動で入力" },
                { item: "更新タイミング", memory: "会話のたびに更新・蓄積される", custom: "自分が編集したときのみ変更" },
                { item: "文字制限", memory: "制限なし（メモリ項目数に上限）", custom: "各欄1,500文字まで" },
                { item: "向いている情報", memory: "変動する情報・進行中のプロジェクト", custom: "固定の基本情報・常に守るルール" },
                { item: "設定場所", memory: "設定 → パーソナライゼーション → メモリ", custom: "設定 → パーソナライゼーション → カスタム指示" },
                { item: "無料プランでの利用", memory: "利用可（容量制限あり）", custom: "利用可（文字制限内で自由に記入）" },
              ].map((row) => (
                <tr key={row.item} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-semibold text-gray-800">{row.item}</td>
                  <td className="px-4 py-3 text-gray-700">{row.memory}</td>
                  <td className="px-4 py-3 text-gray-700">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <Callout type="tip" title="理想的な使い分けのコツ">
            <p><strong>Custom Instructionsに書くもの：</strong>名前・職業・好みの出力フォーマット・言語設定など、ほぼ変わらない基本情報と、「常に箇条書きで答えて」「必ず根拠を示して」などの固定ルール。</p>
            <p className="mt-3"><strong>メモリに任せるもの：</strong>今進めているプロジェクト・最近学んでいること・直近の悩みや課題など、日々変化する情報。</p>
            <p className="mt-3">両方を組み合わせることで、「自分専用にカスタマイズされたChatGPT」が完成します。</p>
          </Callout>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Custom Instructionsの詳しい設定方法や職業別テンプレートについては、
            <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTのカスタム指示（Custom Instructions）完全ガイド
            </Link>
            をあわせてご覧ください。
          </p>
        </motion.section>

        {/* プライバシーと安全な使い方 */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="privacy-safety">メモリ機能のプライバシーと安全な使い方（注意すべき5点）</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            メモリ機能は便利ですが、個人情報や機密情報を扱う際には注意が必要です。以下の5点を守ることで、安全に活用できます。
          </p>
          <div className="mt-6 space-y-4">
            {privacyPoints.map((point, i) => (
              <div key={point.title} className="rounded-xl border border-gray-200 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{point.title}</p>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{point.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-900">会社でChatGPTを使う場合の特別注意事項</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-900">
              <li>会社のAI利用ガイドライン・社内規定がある場合は必ずそれに従う</li>
              <li>顧客情報・取引先情報をメモリに保存しない</li>
              <li>会社支給のアカウントでは個人情報をメモリに入力しない</li>
              <li>ChatGPT Enterpriseプランを使用している場合は、そちらの利用規約を確認する</li>
            </ul>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={[...faqItems]} />
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="summary" className="mt-0">まとめ：一度設定すれば毎回が変わる</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            この記事では、ChatGPTのメモリ機能について全体像から実践的な活用法まで解説しました。要点を整理します。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">ChatGPTはセッション単位で動作し、新しい会話では記憶がリセットされる——これは仕様</li>
            <li className="pl-1 marker:text-gray-500">メモリ機能を使えば、職業・好み・スタイルなどを一度登録するだけで全会話に活用される</li>
            <li className="pl-1 marker:text-gray-500">設定はPC・スマホともに3〜5ステップで完了。「設定 → パーソナライゼーション → メモリ」で操作可能</li>
            <li className="pl-1 marker:text-gray-500">Custom Instructionsと組み合わせることで、より精度の高いパーソナライズが実現する</li>
            <li className="pl-1 marker:text-gray-500">個人情報・会社機密はメモリに保存せず、定期的に内容を見直すことが安全な活用の基本</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「毎回同じ説明をする手間」をなくし、ChatGPTをより自分専用のアシスタントとして育てていくことができます。今日からメモリ機能をオンにして、まず3つの情報を覚えさせてみましょう。
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
            title="AIをもっと自分らしく使うヒントを、毎週お届けします"
            description="AIをもっと自分らしく使うヒントを、AIリブートのLINE公式アカウントで配信中です。登録して毎週の学びをスタートしましょう。"
            buttonLabel="LINEで無料登録する"
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
            メモリ機能をマスターしたら、Custom Instructionsと組み合わせてさらにパーソナライズを深めましょう。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/chatgpt-custom-instructions-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              カスタム指示の完全ガイドを読む
            </Link>
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              プロンプトの書き方も学ぶ
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-custom-instructions-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTのカスタム指示（Custom Instructions）完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜すぐ使える15の型
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude・Gemini 無料プラン比較2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
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
