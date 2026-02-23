"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiWritingCopyrightGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 著作権 文章", "ChatGPT 著作権 問題", "AI 文章 使っていい", "生成AI 著作権 2026"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "intro", label: "「なんとなく後ろめたい」気持ちに向き合う" },
  { id: "q1-copyright", label: "Q1: AIが書いた文章の著作権は誰のもの？" },
  { id: "q2-school", label: "Q2: 学校のレポート・論文にAIを使っていいの？" },
  { id: "q3-work", label: "Q3: 仕事でAIが書いた文章を使っていいの？" },
  { id: "q4-copy", label: "Q4: AIが他の人の文章をコピーしていないか心配" },
  { id: "scene-chart", label: "場面別・実用判断チャート" },
  { id: "guilt", label: "「AIを使うことへの罪悪感」について" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "AIを正しく・倫理的に使いながら生産性を上げたい方へ" },
] as const;

const quickSummaryPoints = [
  "AIが自動生成した文章は、原則として著作権保護の対象外とされています（2026年2月時点の日本の状況）。",
  "学校のレポートへのAI使用は「学校の規則による」。提出前に確認するのが鉄則です。",
  "仕事でのAI使用は基本的にOKですが、機密情報をAIに入力しないことが大前提です。",
  "AIは「丸ごとコピー」をほぼしませんが、重要な事実・引用は出典確認の習慣をつけましょう。",
  "最終的な責任は自分にある、という意識を持って使うことが大切です。",
];

const sceneChartItems = [
  {
    scene: "個人ブログ",
    verdict: "OK",
    verdictColor: "text-green-700 bg-green-100",
    note: "ただし「AI生成コンテンツを含む」と明記すると誠実な姿勢が伝わります。",
  },
  {
    scene: "SNSの投稿",
    verdict: "基本OK",
    verdictColor: "text-green-700 bg-green-100",
    note: "各SNSの利用規約を確認してください。現時点では多くのSNSで使用可能とされています。",
  },
  {
    scene: "学校の宿題・レポート",
    verdict: "要確認",
    verdictColor: "text-amber-700 bg-amber-100",
    note: "学校・大学のガイドラインを必ず確認。「完全禁止」「開示すれば可」「用途次第」と方針が異なります。",
  },
  {
    scene: "会社の文書・メール",
    verdict: "基本OK",
    verdictColor: "text-green-700 bg-green-100",
    note: "機密情報を入力しなければOK。社内規定がある場合はそれに従ってください。",
  },
  {
    scene: "商業出版（本・雑誌）",
    verdict: "要確認",
    verdictColor: "text-amber-700 bg-amber-100",
    note: "出版社によってAI使用に関する方針が異なります。事前に出版社の方針を確認しましょう。",
  },
  {
    scene: "クライアントへの納品物",
    verdict: "事前確認推奨",
    verdictColor: "text-orange-700 bg-orange-100",
    note: "「人間が書いた文章」と契約・合意している場合は別途判断が必要です。曖昧な場合は事前確認を。",
  },
  {
    scene: "プレスリリース・公式文書・契約書",
    verdict: "慎重に",
    verdictColor: "text-red-700 bg-red-100",
    note: "正確性・信頼性が特に求められる文書です。AIを参考程度に使い、必ず人間が確認・編集してください。",
  },
];

export default function AiWritingCopyrightGuidePage({ faqItems }: AiWritingCopyrightGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIに書かせた文章は自分の文章か？著作権・倫理・クレジット問題を初心者向けに解説" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="AIに書かせた文章は自分の文章か？著作権・倫理・クレジット問題を初心者向けに解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIに書かせた文章は自分の文章か？著作権・倫理・クレジット問題を初心者向けに解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月24日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            AIで文章を書いたとき、なんとなく後ろめたさを感じたことはありませんか？
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            でも逆に「何がいけないの？」と思うこともありますよね。「ダメなら使わないけど、本当にダメなの？」というモヤモヤを抱えている方は多いはずです。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            この記事では、2026年2月時点の日本の現状と、実用的な判断基準をお伝えします。「何でも使っていい」とも「AIは危険」とも言わない、正直でバランスのとれた情報をお届けします。
          </p>
          <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">
              ⚠️ 免責事項：本記事は2026年2月時点の情報に基づいています。法律・制度は変化する可能性があります。具体的な法的判断が必要な場合は、専門家（弁護士等）にご相談ください。
            </p>
          </div>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AI全般の基礎知識については
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude初心者ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-copyright-commercial-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI著作権・商用利用ガイド（企業向け）
          </Link>
          もあわせてご覧ください。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {quickSummaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* はじめに */}
        <motion.section
          id="intro"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">「なんとなく後ろめたい」気持ちに向き合う</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            AIで文章を作るとき、心のどこかに引っかかりを感じる人は少なくありません。「これは本当に自分の言葉なのか」「人に見せていいのか」「何かルールに違反していないか」。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            その感覚は、決しておかしくありません。<strong>新しい技術に対して「どう使うのが正しいか」を考えることは、誠実な姿勢の表れです。</strong>むしろ、何も考えずに使うより、疑問を持つことの方が大切です。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            一方で、「後ろめたさ」の中には、根拠のない不安が混じっていることもあります。「なんとなく悪いことをしている気がする」という漠然とした感覚は、正確な情報があれば解消できます。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            この記事では、「著作権はどうなるの？」「どんな場面で使っていいの？」という具体的な疑問に、Q&A形式でひとつひとつ答えていきます。
          </p>
        </motion.section>

        {/* Q1: 著作権 */}
        <motion.section
          id="q1-copyright"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Q1: AIが書いた文章の著作権は誰のもの？
          </h2>
          <div className="mt-5 rounded-xl border border-will-primary/20 bg-will-lighter p-5">
            <p className="text-sm font-semibold text-will-primary">結論（2026年2月時点）</p>
            <p className="mt-2 text-base font-bold text-gray-900">
              AIが自動生成した文章は、原則として著作権保護の対象外とされています。ただし、使い方によって変わります。
            </p>
          </div>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            日本の著作権法では、著作権は「人間の創作的な表現」に認められます。AIが自動的に生成した文章は「人間の創作」ではないため、原則として著作権による保護の対象外とされています。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            つまり、「AIが生成した文章には、AIや開発会社の著作権があるのでは？」という心配は、現時点では当てはまらないとされています。
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="blog-h3 text-base font-semibold text-gray-900">
                人間がAIを「道具」として使った場合はどうなる？
              </h3>
              <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                「AIに詳細な指示を出し、生成された文章を大幅に編集・加筆した」場合は、人間の創作的な関与があるとして、著作権が認められる可能性があるとされています。どの程度の関与で著作権が認められるかは、個別のケースによって異なり、明確な基準はまだ定まっていないのが現状です。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="blog-h3 text-base font-semibold text-gray-900">
                実用上の意味は？
              </h3>
              <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                「AIが生成した文章をそのまま使っても、著作権侵害にはなりにくい」というのが現在の一般的な見解です。ただし、AIが学習データに含まれる既存の著作物に非常に似た文章を出力してしまった場合には、別の問題が生じる可能性があります。重要な文書を使用する際は、検索などで確認する習慣をつけることをおすすめします。
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-800">補足：AI開発会社の利用規約にも注意</p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              著作権とは別に、ChatGPTやClaudeなどのAI開発会社の利用規約も確認が必要です。多くのサービスでは、生成されたコンテンツはユーザーが使用できるとされていますが、規約は変更されることもあります。商業利用や重要な用途での使用前には、最新の利用規約を確認してください。
            </p>
          </div>
        </motion.section>

        <LineCtaBox />

        {/* Q2: 学校 */}
        <motion.section
          id="q2-school"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Q2: 学校のレポート・大学の論文にAIを使っていいの？
          </h2>
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">結論</p>
            <p className="mt-2 text-base font-bold text-gray-900">
              学校・大学の規則による。まず「提出先のルールを確認する」ことが鉄則です。
            </p>
          </div>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            2026年現在、多くの大学や学校がAI使用に関するガイドラインを策定しています。しかし、その内容は学校によって大きく異なります。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                type: "完全禁止",
                icon: "🚫",
                color: "border-red-200 bg-red-50",
                titleColor: "text-red-800",
                body: "AIの使用を一切認めない方針の学校・授業。違反した場合は不正行為とみなされる可能性があります。",
              },
              {
                type: "開示すれば使用可",
                icon: "✅",
                color: "border-green-200 bg-green-50",
                titleColor: "text-green-800",
                body: "「AIを使用した」と明記することを条件に使用を認める方針。使用したAIの名称や使い方を記載します。",
              },
              {
                type: "用途によって判断",
                icon: "⚖️",
                color: "border-blue-200 bg-blue-50",
                titleColor: "text-blue-800",
                body: "「アイデア出しにはOK、最終的な文章はNG」など、用途や使い方によって判断する方針。",
              },
            ].map((item) => (
              <div key={item.type} className={`rounded-xl border p-4 ${item.color}`}>
                <p className="text-2xl">{item.icon}</p>
                <h3 className={`blog-h3 mt-2 text-sm font-bold ${item.titleColor}`}>{item.type}</h3>
                <p className="mt-2 text-xs leading-6 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="blog-h3 text-lg font-bold text-gray-900">アカデミックインテグリティ（学問的誠実さ）の観点から</h3>
            <p className="blog-p mt-4 text-base leading-8 text-gray-700">
              学校のルールがどうであれ、もうひとつ考えておきたいのは「学びの意味」についてです。
            </p>
            <p className="blog-p mt-4 text-base leading-8 text-gray-700">
              レポートや論文は、調べて考えて書くプロセス自体に学習効果があります。AIに全部書かせて提出することは、ルール上OKだとしても、<strong>「学びの機会を自分から放棄している」</strong>とも言えます。
            </p>
            <p className="blog-p mt-4 text-base leading-8 text-gray-700">
              AIをうまく活用するとしたら、「アイデアを整理する」「自分が書いた文章をフィードバックしてもらう」「調査の出発点にする」といった使い方が、学習効果を保ちながらAIを活かす方法として考えられます。
            </p>
          </div>
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">確認すべき場所</p>
            <ul className="mt-3 space-y-2 pl-1 text-sm leading-7 text-blue-800">
              <li>✓ 授業のシラバス・ガイドライン</li>
              <li>✓ 大学・学校のAI使用ポリシーページ（ウェブサイトに掲載されていることが多い）</li>
              <li>✓ 担当教員に直接確認する</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-blue-700">
              「わからない」まま使うより、事前に確認する方が安心です。確認すること自体は、誠実な姿勢として好印象を与えることが多いです。
            </p>
          </div>
        </motion.section>

        {/* Q3: 仕事 */}
        <motion.section
          id="q3-work"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Q3: 仕事でAIが書いた文章を使っていいの？
          </h2>
          <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-5">
            <p className="text-sm font-semibold text-green-800">結論</p>
            <p className="mt-2 text-base font-bold text-gray-900">
              会社の規定がなければ基本的に使用可能です。ただし「機密情報をAIに入力しない」という大前提があります。
            </p>
          </div>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            仕事でAIを使うことは、多くの企業でスタンダードになりつつあります。メールの下書き、議事録の要約、資料の構成案作成など、様々な場面で活用されています。
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="blog-h3 text-base font-bold text-red-900">⚠️ 最重要：機密情報は入力しない</h3>
              <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                クライアント名・取引金額・未公開のビジネス情報・個人情報（顧客・社員）・特許出願前の技術情報などは、AIに入力してはいけません。AIサービスのプロバイダーによって、入力されたデータの扱い方は異なりますが、機密情報を外部サービスに送ることのリスクは常に意識してください。
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                社内独自のAI環境（Microsoft Copilot for Microsoft 365など、企業向けセキュリティが確保されたサービス）を使っている場合は、この限りではありません。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="blog-h3 text-base font-bold text-gray-900">クライアントへの開示について</h3>
              <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                クライアントに納品する文章を作成する場合、「人間のライターが書いた文章」と明示的に契約している場合は、AIで生成した文章をそのまま納品することは契約違反になる可能性があります。曖昧な場合は事前に確認・合意を取ることをおすすめします。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="blog-h3 text-base font-bold text-gray-900">特に慎重にすべき文書の種類</h3>
              <ul className="mt-3 space-y-2 pl-4 text-sm leading-7 text-gray-700 list-disc">
                <li><strong>プレスリリース・公式発表</strong>：事実関係・数字の正確性を必ず確認</li>
                <li><strong>法的文書・契約書</strong>：専門家のレビューが不可欠</li>
                <li><strong>医療・金融・法律アドバイス</strong>：AIの出力をそのまま使うのは避ける</li>
                <li><strong>上司・顧客へのメール</strong>：最終的には人間がチェックして送る</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <LineCtaBox />

        {/* Q4: コピー */}
        <motion.section
          id="q4-copy"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Q4: AIが他の人の文章を「コピー」していないか心配
          </h2>
          <div className="mt-5 rounded-xl border border-will-primary/20 bg-will-lighter p-5">
            <p className="text-sm font-semibold text-will-primary">結論</p>
            <p className="mt-2 text-base font-bold text-gray-900">
              「丸ごとコピー」はほぼ起こりませんが、念のため重要な事実・引用は出典確認が必要です。
            </p>
          </div>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            ChatGPTやClaudeなどの現代的なAIは、「学習データからそのままコピーして出力する」という仕組みではありません。統計的なパターンを学習し、新しく文章を生成しています。そのため、既存の文章を「丸ごとコピー」することはほぼ起こらないとされています。
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="blog-h3 text-base font-semibold text-gray-900">注意が必要なケース</h3>
              <ul className="mt-3 space-y-3 pl-4 text-sm leading-7 text-gray-700 list-disc">
                <li>
                  <strong>固有の表現・フレーズ</strong>：有名な書籍や詩の特定のフレーズが似た形で出力されることがあります。重要な文書で使う場合は検索で確認を。
                </li>
                <li>
                  <strong>事実・統計・引用</strong>：AIは「それっぽい数字」を生成することがあります（いわゆる「ハルシネーション」）。数字・固有名詞・引用文は必ず出典を確認してください。
                </li>
                <li>
                  <strong>専門的・技術的な内容</strong>：特定の技術文書や専門書に酷似した文章が生成されることも稀にあります。専門分野での使用時は注意が必要です。
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-semibold text-blue-900">実践的な確認習慣</p>
              <ul className="mt-3 space-y-2 pl-1 text-sm leading-7 text-blue-800">
                <li>✓ 数字・統計は別途検索や公式情報源で裏取りする</li>
                <li>✓ 固有名詞・固有の表現が含まれる場合は検索確認</li>
                <li>✓ 重要な文書はコピーチェックツールで確認する</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 場面別判断チャート */}
        <motion.section
          id="scene-chart"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">場面別・実用判断チャート</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            「自分のケースはどうなの？」という疑問に答えるために、場面ごとの判断基準をまとめました。
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">場面</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">判断</th>
                  <th className="hidden sm:table-cell px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">注意点</th>
                </tr>
              </thead>
              <tbody>
                {sceneChartItems.map((item, i) => (
                  <tr key={item.scene} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-medium text-gray-900 border-b border-gray-100 align-top">{item.scene}</td>
                    <td className="px-4 py-3 border-b border-gray-100 align-top">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.verdictColor}`}>
                        {item.verdict}
                      </span>
                    </td>
                    <td className="hidden sm:table-cell px-4 py-3 text-xs leading-6 text-gray-600 border-b border-gray-100">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            ※ 上記はあくまで一般的な目安です。具体的な状況や契約内容によって異なります。
          </p>
        </motion.section>

        {/* 罪悪感について */}
        <motion.section
          id="guilt"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">「AIを使うことへの罪悪感」について</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            ここまで読んで、「思っていたよりいろいろOKなんだ」と感じた方も多いかもしれません。でも、もうひとつ大事なことをお伝えします。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            <strong>電卓を使って計算することに罪悪感を感じる人はいません。</strong>AIも同じです。道具として適切に使うこと自体は、何ら問題ではありません。
          </p>
          <div className="mt-6 rounded-xl border border-will-primary/20 bg-will-lighter p-6">
            <h3 className="blog-h3 text-base font-bold text-will-primary">AIを道具として使うときの健全な姿勢</h3>
            <div className="mt-4 space-y-3">
              {[
                {
                  title: "最終的な責任は自分にある",
                  body: "AIが書いた文章であっても、それを選んで使ったのは自分です。内容の正確性・適切さについての責任は、使用者にあります。「AIが間違えた」は言い訳にはなりません。",
                },
                {
                  title: "AIの出力をそのまま信じない",
                  body: "AIは自信満々に間違えることがあります（ハルシネーション）。特に事実・数字・引用は必ず確認する習慣をつけましょう。「AIが言っていたから」ではなく、「自分が確認した」という状態で使うことが大切です。",
                },
                {
                  title: "透明性を持つ",
                  body: "相手が「AI生成か人間作成か」を気にするような文脈では、正直に伝えることが信頼につながります。隠す必要はなくても、求められたときに正直に話せる状態でいましょう。",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-xs text-white font-bold">✓</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-7 text-gray-700">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            「罪悪感なく使えるようになりたい」のであれば、使い方を正しく知ることが一番の近道です。怪しいことをしているのではなく、新しい道具を責任ある形で使っているのだ、という自信を持てるようになることが目標です。
          </p>
        </motion.section>

        <LineCtaBox />

        {/* FAQ */}
        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">Q. {item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-copyright-commercial-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコンテンツの著作権・商用利用完全ガイド（企業向け）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者完全ガイド｜どっちを使うべき？
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-spring-2026-whats-new" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                2026年春、生成AIは何が変わったか：初心者が驚く最新5つの進化
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-writing-tool" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI文章作成ツール完全比較｜2026年おすすめランキング
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                社内AI利用ガイドライン作成テンプレート
              </Link>
            </li>
          </ul>
        </section>

        {/* Academy CTA */}
        <motion.section
          id="academy-cta"
          className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AIを正しく・倫理的に使いながら生産性を上げたい方へ</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            「使っていいのか不安」「会社でどう使えばいいかわからない」というモヤモヤを解消し、自信を持ってAIを活用できるようになりたい方へ。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、著作権・倫理・リスク管理といった「正しく使うための知識」から、実際の業務・学習への活用法まで、体系的に学べる環境を提供しています。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "正しい知識で安心して使える",
                body: "「何がOKで何がNGか」を体系的に理解することで、後ろめたさなく堂々とAIを活用できるようになります。",
              },
              {
                title: "実務に直結するスキルを習得",
                body: "著作権・倫理だけでなく、実際の仕事・学習で使えるプロンプト設計・活用法を実践的に学びます。",
              },
              {
                title: "最新情報をキャッチアップ",
                body: "AI関連の法律・ガイドラインは急速に変化しています。最新情報に基づいたアップデートを受け続けられる環境があります。",
              },
            ].map((pillar) => (
              <section key={pillar.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-7">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              アカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
