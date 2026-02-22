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

const keywordTags = ["AI 面接対策", "ChatGPT 就活", "自己分析 AI", "模擬面接 ChatGPT", "転職 AI 活用"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "why-ai-interview", label: "面接の不安をAIが解消できる理由" },
  { id: "self-analysis", label: "AIで自己分析をする方法（強み発見・棚卸し）" },
  { id: "pr-motivation", label: "自己PR・志望動機をAIで磨く手順" },
  { id: "mock-interview", label: "ChatGPTを「面接官役」にして模擬面接する方法" },
  { id: "star-method", label: "STAR法でAIに回答を構造化してもらう" },
  { id: "question-list", label: "業界・職種別の想定質問リストをAIで作る" },
  { id: "after-interview", label: "面接後の振り返りもAIと一緒に" },
  { id: "caution", label: "注意点：AIの回答をそのまま使わない" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "conclusion", label: "まとめ" },
] as const;

const summaryItems = [
  "AIは「面接官役」になれる。何度でも練習できて、フィードバックも即座にもらえる。「失敗が怖い」という壁がなくなる",
  "自己分析から自己PR・志望動機の磨き込みまで、全プロセスでAIが補助できる。「強みがわからない」状態からでも始められる",
  "STAR法（Situation・Task・Action・Result）の構造化をAIに手伝ってもらうと、説得力のある回答が作れる",
  "業界・職種別の想定質問リストをAIで自動生成できる。「こんな質問が来るとは思わなかった」という失敗が減る",
  "大切なのは「AIの文章をそのまま暗記する」ではなく「AIの提案を参考に自分の言葉に直す」こと",
] as const;

const selfAnalysisSteps = [
  {
    step: "Step 1: 過去の経験を年表形式で書き出す",
    body: "「幼稚園から現在まで、印象に残っている出来事を10個書いてください」とAIに聞きながら自分の年表を作ります。AIはその出来事に「どんな強みが見えますか？」と問いかけてくれます。自分では気づいていない強みが言語化されることがよくあります。",
    prompt: "私の強みを一緒に見つけてください。以下の3つの質問に答えるので、私の回答から強みを整理して教えてください。①熱中して取り組んだことは何ですか？②周りから「あなたは〇〇が得意だね」と言われたことは？③失敗したけど諦めなかった経験を教えてください。",
  },
  {
    step: "Step 2: 価値観の棚卸しをする",
    body: "仕事を選ぶ軸・大切にしているもの・嫌なことの裏返しにある本音——これらをAIと対話しながら言語化します。「なぜその仕事が嫌だったの？」という深掘り質問を繰り返すと、自分でも気づいていなかった本音の価値観が出てきます。",
    prompt: "私の仕事における価値観を整理するのを手伝ってください。①これまでやりがいを感じた仕事のシーンを3つ話します。②逆に嫌だった・辛かった仕事のシーンを2つ話します。それぞれを聞いて、私が仕事で大切にしている価値観を5つ言語化してください。",
  },
  {
    step: "Step 3: 強みを「エピソードと数値」で裏付ける",
    body: "「行動力がある」という強みも、エピソードと数値がないと説得力がありません。AIに「この強みをエピソードで証明する構成を作って」と依頼すると、面接で話せる形に整えてくれます。",
    prompt: "「課題発見力」という私の強みを面接で伝えるために、以下の経験をSTAR法（状況・課題・行動・成果）で整理してください。[ここに経験を書く]",
  },
] as const;

const prSteps = [
  {
    step: "Step 1: 粗削りな「素材」を渡す",
    body: "完璧な文章を最初から作ろうとしないで、箇条書きで「自分の経験・強み・やりたいこと」を羅列してAIに渡します。AIがそれを読みやすい文章に整えてくれます。最初から「自己PRを書いて」と頼むより、素材を渡してから「これを200字の自己PRに」と依頼する方が精度が上がります。",
    prompt: "以下の素材をもとに、面接で話す200字程度の自己PRを作ってください。\n・強み：問題の根本原因を見つけること\n・経験：前職でコールセンターの対応時間を30%削減したこと\n・やりたいこと：業務改善を通じて組織の生産性向上に貢献したい",
  },
  {
    step: "Step 2: 複数バリエーションを出してもらう",
    body: "1つのパターンだけでなく、「①熱意を前面に出したバージョン、②実績を強調したバージョン、③応募企業の課題に寄せたバージョン」の3パターンを作ってもらい、どれが一番「自分らしい」か感じ取ります。最終的に自分で統合して「自分版」を作ります。",
    prompt: "私の自己PRを以下の3パターンで作ってください。①情熱・人柄を前面に出したバージョン、②実績・数値を強調したバージョン、③応募企業の求める人物像に寄せたバージョン。素材：[経験を記入]",
  },
  {
    step: "Step 3: 「なぜこの会社？」の志望動機を企業研究と紐付ける",
    body: "AIに企業のプレスリリースや決算発表の内容を貼り付けて「この会社の課題と方向性を要約して、私の経験を活かせる点を教えて」と依頼すると、説得力のある志望動機が作りやすくなります。",
    prompt: "以下の企業情報（採用ページ・プレスリリース）を読んで、①この企業が抱えていそうな課題、②私の経験（業務改善・データ分析が得意）が活かせるポイント、③志望動機の骨格を教えてください。[企業情報を貼り付け]",
  },
] as const;

const mockInterviewGuide = [
  {
    phase: "開始プロンプト（面接官設定）",
    content:
      "「これから私の模擬面接官をやってください。応募先は[業界・職種]で、[選考フェーズ：一次・最終]面接です。私が回答したら、①良かった点、②改善できる点、③より深掘りされそうな追加質問、の3点でフィードバックしてください。それでは最初の質問をお願いします。」",
  },
  {
    phase: "想定質問の指定",
    content:
      "「以下の想定質問を順番に聞いてください：①自己紹介、②志望動機、③強みと弱み、④最近取り組んでいること、⑤逆質問。各回答後にフィードバックをください。」",
  },
  {
    phase: "深掘り質問への対応練習",
    content:
      "「私が答えるたびに、面接官が実際にしそうな深掘り質問を1つ追加してください。たとえば『その経験で何が一番難しかったですか？』『具体的にどう行動しましたか？』のような形です。」",
  },
  {
    phase: "振り返り総評",
    content:
      "「今の模擬面接の総評をしてください。①全体的な印象、②特に良かったポイント、③改善すると合格率が上がりそうな点、④次に練習すべきこと、の順で教えてください。」",
  },
] as const;

const starExamples = [
  {
    label: "Situation（状況）",
    content: "前職のコールセンターで、1件あたりの対応時間が業界平均より40%長く、顧客満足度も低下していた",
    colorClass: "bg-blue-50 border-blue-200",
  },
  {
    label: "Task（課題・役割）",
    content: "チームリーダーとして対応時間の短縮と顧客満足度の改善を同時に達成する必要があった",
    colorClass: "bg-yellow-50 border-yellow-200",
  },
  {
    label: "Action（行動）",
    content: "通話録音100件を分析して「説明の重複」が主因と特定。標準スクリプトを作成し、週1回のロールプレイ研修を導入した",
    colorClass: "bg-green-50 border-green-200",
  },
  {
    label: "Result（成果）",
    content: "3ヶ月で対応時間を30%短縮、顧客満足度スコアが4.1→4.7に改善。取り組みが全社に展開された",
    colorClass: "bg-orange-50 border-orange-200",
  },
] as const;

const industryQuestionPrompts = [
  {
    industry: "IT・エンジニア",
    prompt: "ITエンジニア（バックエンド）への転職面接で聞かれやすい質問を10個作ってください。技術面・チームワーク・キャリア志向の観点を含めてください。",
  },
  {
    industry: "営業・法人営業",
    prompt: "法人営業職への転職一次面接で頻出の質問15個と、それぞれに回答する際のポイントをまとめてください。",
  },
  {
    industry: "マーケティング",
    prompt: "デジタルマーケター志望の転職面接で聞かれやすい質問を、①スキル確認系、②思考プロセス確認系、③カルチャーフィット系に分けて10問ずつ作ってください。",
  },
  {
    industry: "第二新卒・就職活動",
    prompt: "第二新卒として転職活動をしています。「前職を短期間で辞めた理由」「社会人経験が短いがどう補う？」など、不利な質問への回答例を5パターン作ってください。",
  },
] as const;

export default function AiJobInterviewPrepGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIで面接対策｜自己分析・模擬面接完全ガイド2026" },
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
                title="AIで面接対策が変わる！ChatGPTを使った自己分析・想定質問・模擬面接の完全ガイド【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIで面接対策が変わる！ChatGPTを使った自己分析・想定質問・模擬面接の完全ガイド【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            面接が怖い。何を話せばいいかわからない。練習しようにも相手がいない——就職・転職活動中、
            そんな孤独な不安を抱えたことはありませんか？
            実は今、ChatGPTを使えばその不安をかなりの部分で解消できます。
            面接官役を何百回でも務めてくれて、鋭いフィードバックをくれて、想定外の深掘り質問まで練習させてくれる——
            しかも24時間、無料で。
            この記事では、AIを使った面接対策の「具体的なやり方」を、すぐ使えるプロンプトと一緒に丁寧に解説します。
            自己分析の壁打ちから、自己PR磨き、模擬面接、振り返りまで——一通りの対策がAIだけでできるようになります。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          転職・就活でAIを使うなら
          <Link href="/academy/blog/ai-job-hunting-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI転職活用ガイド（職務経歴書・企業研究編）
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT上級活用テクニック
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            プロンプトの書き方入門
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

        {/* 面接の不安をAIが解消できる理由 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="why-ai-interview">面接の不安をAIが解消できる理由</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            なぜ、面接対策にAIが有効なのでしょうか。従来の面接準備と比べて、AIにしかできないことがあります。
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border-l-4 border-will-primary bg-gray-50 p-5">
              <h3 className="text-base font-bold text-gray-900">① 「失敗が怖い」という壁がなくなる</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                友人や家族に面接練習を頼むのは気恥ずかしかったり、忙しくて頼めなかったりします。
                AIなら何度失敗しても気を使わず、何度でも「もう一回やり直して」と言えます。
                「変な回答をして笑われたら」という恐怖がゼロ——これが最大の心理的なメリットです。
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-will-primary bg-gray-50 p-5">
              <h3 className="text-base font-bold text-gray-900">② 深掘り質問まで練習できる</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                面接で苦手な人が多いのは「最初の回答」ではなく、「なぜ？」「具体的には？」と続く深掘り質問への対応です。
                AIは「本物の面接官のような深掘り質問をしてください」と指示するだけで、予想外の角度から質問してくれます。
                これを繰り返すことで、どんな質問が来ても動じない地力がつきます。
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-will-primary bg-gray-50 p-5">
              <h3 className="text-base font-bold text-gray-900">③ 24時間・何社分でも準備できる</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                転職活動中は、複数社を同時に受けることが多いですよね。AIなら「A社向け」「B社向け」と会社ごとに
                シミュレーションを変えられます。夜中でも、移動中でも、思い立ったときにすぐ練習できる——この
                「練習機会の総量」が圧倒的に増えることが、AI面接対策の本質的な強みです。
              </p>
            </div>
          </div>

          <Callout type="info" title="面接対策に使うAIはChatGPTがおすすめ">
            この記事では主にChatGPT（無料プランでも利用可能）を使った方法を紹介します。
            長文の回答整理・構造化が得意で、「面接官役」としての対話能力も高いため、面接対策の用途には特に向いています。
          </Callout>
        </motion.section>

        {/* 自己分析 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="self-analysis">AIで自己分析をする方法（強み発見・棚卸し）</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「自己分析が苦手」「自分の強みがわからない」——就活・転職でよく聞く悩みです。
            AIは「あなたにとっての当たり前」が実は強みだということを発見する手助けをしてくれます。
            以下の3ステップで、AIと対話しながら自己分析を進めてみてください。
          </p>
          <div className="mt-8 space-y-6">
            {selfAnalysisSteps.map((item, index) => (
              <div key={item.step} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-will-primary text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.step}</h3>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-700">{item.body}</p>
                <div className="mt-4 rounded-lg bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">プロンプト例</p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-800">{item.prompt}</p>
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-job-interview-prep-guide" />
        </motion.section>

        {/* 自己PR・志望動機 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="pr-motivation">自己PR・志望動機をAIで磨く手順</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「自己PRって何を書けばいいかわからない」「志望動機が薄い気がする」——そんな方のために、
            AIを使って自己PRと志望動機を段階的に磨く手順を紹介します。
          </p>
          <div className="mt-8 space-y-6">
            {prSteps.map((item, index) => (
              <div key={item.step} className="rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-will-primary text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.step}</h3>
                </div>
                <p className="mt-4 text-sm leading-8 text-gray-700">{item.body}</p>
                <div className="mt-4 rounded-lg bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">プロンプト例</p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-800">{item.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 模擬面接 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="mock-interview">ChatGPTを「面接官役」にして模擬面接する方法</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを面接官役にするだけで、本番に近い緊張感の練習ができます。
            以下のプロンプトを使えば、志望職種に合わせた模擬面接がすぐに始められます。
          </p>
          <div className="mt-6 space-y-4">
            {mockInterviewGuide.map((phase) => (
              <div key={phase.phase} className="rounded-xl border border-gray-200 p-5">
                <p className="text-sm font-bold text-will-primary">{phase.phase}</p>
                <p className="mt-3 text-sm leading-7 text-gray-800 italic">{phase.content}</p>
              </div>
            ))}
          </div>

          <Callout type="tip" title="模擬面接を効果的にするコツ">
            <ul className="space-y-2">
              <li>実際に声に出して答える（頭の中だけでなく）。声に出すと「言えない」部分が明確になる</li>
              <li>1回の模擬面接で2〜3問だけ深掘りする。全部やろうとすると疲弊する</li>
              <li>AIのフィードバックはメモに残す。同じ指摘が繰り返されたら、そこが真の弱点</li>
              <li>本番前日は模擬面接より「自分の言葉で話すこと」を確認することを優先する</li>
            </ul>
          </Callout>
        </motion.section>

        {/* STAR法 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="star-method">STAR法を使った回答の構造化プロンプト</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            面接での「エピソードを話して」という質問に答える際、最も効果的な構造が<strong>STAR法</strong>です。
            STAR法とは、以下の4要素で経験談を組み立てる手法です。
          </p>
          <div className="mt-6 space-y-3">
            {starExamples.map((item) => (
              <div key={item.label} className={`rounded-lg border p-4 ${item.colorClass}`}>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-600">{item.label}</p>
                <p className="mt-2 text-sm leading-7 text-gray-800">{item.content}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-base leading-8 text-gray-700">
            このSTAR構造を自分で作るのは意外と難しいです。AIに手伝ってもらいましょう。
          </p>

          <div className="mt-5 rounded-lg bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">STAR法で回答を整理するプロンプト</p>
            <p className="mt-3 text-sm leading-7 text-gray-800">
              「私の以下の経験を、面接でのSTAR法（Situation・Task・Action・Result）の構造で整理してください。
              話せるエピソードとして約2分（500字程度）になるようにまとめてください。<br />
              経験：[ここに経験を書く]」
            </p>
          </div>

          <ArticleH3>STAR法のよくある失敗パターン</ArticleH3>
          <RichTable>
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 font-semibold text-gray-900">失敗パターン</th>
                <th className="px-4 py-3 font-semibold text-gray-900">AIでの改善方法</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 text-gray-700">「頑張りました」で終わって成果がない</td>
                <td className="px-4 py-3 text-gray-600">「成果を数値化または比較できる形で表現してください」</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">状況説明が長すぎてActionが薄くなる</td>
                <td className="px-4 py-3 text-gray-600">「SituationとTaskは合計2〜3文に圧縮して、Actionを最も詳しく書いてください」</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">「チームで取り組みました」が多く自分の役割が見えない</td>
                <td className="px-4 py-3 text-gray-600">「私個人が担った役割・行動に絞って書いてください」</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">エピソードが抽象的で印象に残らない</td>
                <td className="px-4 py-3 text-gray-600">「面接官が思わず「それ面白いですね」と言いそうな具体的な表現に変えてください」</td>
              </tr>
            </tbody>
          </RichTable>
        </motion.section>

        {/* 業界・職種別の想定質問リスト */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="question-list">業界・職種別の想定質問リストをAIで作る方法</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            面接は業界・職種によって聞かれることが大きく変わります。AIに「この職種の面接でよく聞かれること」を作ってもらうことで、
            準備の抜け漏れを減らせます。以下はそのまま使えるプロンプト例です。
          </p>
          <div className="mt-6 space-y-4">
            {industryQuestionPrompts.map((item) => (
              <div key={item.industry} className="rounded-xl border border-gray-200 p-5">
                <p className="text-sm font-bold text-gray-900">{item.industry}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700 italic">{item.prompt}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-base leading-8 text-gray-700">
            プロンプトで「私はこういう経験があります：[経験]」と自分の情報を加えると、
            より個人に合ったカスタム想定質問リストが作れます。「弱点になりそうな部分への質問も含めて作って」
            と指定するのも効果的です。
          </p>
        </motion.section>

        {/* 面接後の振り返り */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="after-interview">面接後の振り返りもAIと一緒に</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            面接が終わったら、その経験を次に活かすための振り返りが大切です。でも「何がよくて何がダメだったか」を
            一人で客観的に振り返るのは難しい。AIに振り返りを手伝ってもらいましょう。
          </p>

          <div className="mt-5 rounded-lg bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">面接後振り返りプロンプト</p>
            <p className="mt-3 text-sm leading-7 text-gray-800">
              「今日の面接の振り返りをしたいです。以下の情報をもとに分析してください。<br />
              ・応募先：[会社名・職種]<br />
              ・聞かれた質問と私の回答（覚えている範囲で）：[記入]<br />
              ・うまくいったと感じた質問：[記入]<br />
              ・うまく答えられなかった質問：[記入]<br />
              ・面接官の反応で気になったこと：[記入]<br />
              <br />
              分析してほしい内容：①回答で特に改善すべきポイント、②次回同じ質問が来たらどう答えるべきか、③準備不足だった点と対策」
            </p>
          </div>

          <p className="mt-5 text-base leading-8 text-gray-700">
            面接の記憶は時間が経つと薄れます。できれば面接当日中か翌朝に、記憶が鮮明なうちにAIとの振り返りをしておくことをおすすめします。
            この振り返りの積み重ねが、選考が進むにつれて「なぜか面接が得意になってきた」という感覚につながります。
          </p>
        </motion.section>

        {/* 注意点 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="caution">注意点：AIの回答をそのまま使わず自分の言葉で</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここまで読んで、「AIに全部任せればいいんじゃ？」と思った方、少し待ってください。
            面接官は数百・数千の応募者と会ってきたプロです。
            <strong>「AIが作ったような自己PR」は経験豊かな面接官にはわかります。</strong>
          </p>

          <Callout type="warning" title="AIの回答を「素材」として扱う3つのルール">
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong>出てきた文章を必ず自分の言葉に書き直す</strong>——
                AIが作った表現でも、一度自分で「なぜこう言えるか」を考え、自分なりの言葉に翻訳する
              </li>
              <li>
                <strong>事実確認を必ずする</strong>——
                AIは「っぽい」文章を作るのが得意なので、数字・社名・日付など事実は必ず原資料と照合する
              </li>
              <li>
                <strong>「自分が言えるか」を基準にする</strong>——
                どれだけ良い文章でも、声に出して自然に言えないものは使わない。
                「この言葉、本当に自分が言いそう？」と毎回確認する
              </li>
            </ol>
          </Callout>

          <p className="mt-5 text-base leading-8 text-gray-700">
            AIはあくまで「たたき台」と「壁打ち相手」です。最終的な言葉を磨き、自分のものにするのはあなた自身です。
            その手間を惜しまない人が、AI時代の面接対策で本当に強くなれます。
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
          <ArticleH2 id="conclusion">まとめ：面接は準備した量が結果に出る。AIで練習量を10倍に</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            面接はスポーツに似ています。才能よりも練習量が結果を大きく左右します。
            そして今、AIというコーチが24時間そこにいます。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              自己分析はAIとの対話で「自分の当たり前＝強み」を発見できる
            </li>
            <li className="pl-1 marker:text-gray-500">
              自己PRと志望動機は「素材を渡して複数バリエーションを出してもらう」フローで磨ける
            </li>
            <li className="pl-1 marker:text-gray-500">
              模擬面接は「面接官役」プロンプトを使えば即開始。深掘り質問まで練習できる
            </li>
            <li className="pl-1 marker:text-gray-500">
              STAR法での回答整理をAIに手伝ってもらうと、説得力が一気に上がる
            </li>
            <li className="pl-1 marker:text-gray-500">
              面接後の振り返りをAIと行うことで、次の面接への具体的な改善点が見えてくる
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            就職・転職活動中の不安は、ゼロにはなりません。でも「準備した」という実感は、あなたの背中を押してくれます。
            今日から、ChatGPTと一緒に一歩ずつ面接対策を始めてみてください。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            AIリブートのLINEでは、こういったAI活用の実践Tips・最新情報を毎週無料でお届けしています。
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
            title="面接対策・就活・転職活動に使えるAI活用法を毎週配信中"
            description="就活・転職活動でAIを使いこなすためのプロンプト・Tips・事例を毎週お届けします。登録は無料、配信解除もいつでもできます。AIリブートのLINE公式アカウントへぜひご登録ください。"
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
            面接対策と合わせて、職務経歴書・企業研究でのAI活用も学んでおくと転職活動全体が変わります。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/ai-job-hunting-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AI転職活用ガイドを読む
            </Link>
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              プロンプトの書き方を学ぶ
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-job-hunting-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIで転職・就職活動を効率化！職務経歴書・企業研究・面接準備の完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT上級活用テクニック｜使いこなしの差がつく15の方法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の一歩から丁寧に解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-side-business-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを使った副業・フリーランス入門2026
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
