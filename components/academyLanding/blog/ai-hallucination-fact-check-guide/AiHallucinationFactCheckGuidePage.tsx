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
  "ChatGPT 嘘 見分け方",
  "生成AI ハルシネーション 対策",
  "AI 間違い なぜ",
  "ChatGPT 正確性",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-hallucination", label: "そもそもハルシネーションとは何か？" },
  { id: "technique-1", label: "テクニック1：「出典を教えて」と聞く" },
  { id: "technique-2", label: "テクニック2：数字と固有名詞をダブルチェック" },
  { id: "technique-3", label: "テクニック3：「自信がない部分を教えて」と聞く" },
  { id: "technique-4", label: "テクニック4：質問を具体的にする" },
  { id: "technique-5", label: "テクニック5：複数のAIでクロスチェック" },
  { id: "technique-6", label: "テクニック6：長い回答の後半に注意する" },
  { id: "technique-7", label: "テクニック7：AI検索ツールと使い分ける" },
  { id: "model-comparison", label: "2026年2月：各モデルの改善状況" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const hallucinationTypes = [
  {
    label: "事実の捏造",
    example: "「東京タワーは1964年のオリンピックに合わせて建設されました」→ 実際は1958年竣工",
    desc: "存在しない事実をもっともらしく生成する。最も多いパターン",
  },
  {
    label: "出典の捏造",
    example: "「Nature誌の2024年の論文によると…」→ その論文は存在しない",
    desc: "実在しない論文・記事・URLを引用として提示する",
  },
  {
    label: "数字の誤り",
    example: "「日本の人口は約1億5000万人です」→ 実際は約1億2400万人",
    desc: "統計データや年号などの数字を微妙に、あるいは大きく間違える",
  },
] as const;

function PromptComparison({
  ng,
  ok,
  point,
}: {
  ng: { label: string; text: string };
  ok: { label: string; text: string };
  point: string;
}) {
  return (
    <div className="mt-5 grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border-2 border-red-200 bg-red-50/60 p-4">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            NG
          </span>
          <span className="text-sm font-semibold text-red-700">{ng.label}</span>
        </div>
        <p className="mt-3 whitespace-pre-line rounded-lg bg-white/80 px-3 py-2.5 text-sm leading-7 text-gray-700">
          {ng.text}
        </p>
      </div>
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/60 p-4">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
            OK
          </span>
          <span className="text-sm font-semibold text-emerald-700">{ok.label}</span>
        </div>
        <p className="mt-3 whitespace-pre-line rounded-lg bg-white/80 px-3 py-2.5 text-sm leading-7 text-gray-700">
          {ok.text}
        </p>
      </div>
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 sm:col-span-2">
        <p className="text-sm font-semibold text-amber-800">ポイント</p>
        <p className="mt-1 text-sm leading-7 text-amber-900">{point}</p>
      </div>
    </div>
  );
}

function HallucinationQuote({ text, truth }: { text: string; truth: string }) {
  return (
    <div className="mt-4 rounded-xl border-l-4 border-red-300 bg-gray-50 p-4">
      <p className="text-sm leading-7 text-gray-700">
        <span className="mr-1 font-semibold text-red-600">AIの回答例：</span>
        {text}
      </p>
      <p className="mt-2 text-sm leading-7 text-emerald-700">
        <span className="mr-1 font-semibold">事実：</span>
        {truth}
      </p>
    </div>
  );
}

const modelComparison = [
  {
    name: "ChatGPT（GPT-5.2）",
    company: "OpenAI",
    improvement: "前バージョン（GPT-5.1）から約30%のハルシネーション率低減を公表。ただし独立検証では差異あり",
    note: "推論モデル（o3/o4-mini）はかえってハルシネーションが増える場合があるとOpenAI自身が認めており、「さらなる研究が必要」としている",
  },
  {
    name: "Claude（Opus 4.6 / Sonnet 4.6）",
    company: "Anthropic",
    improvement: "Constitutional AIアプローチによる安全性向上。不確実な場合に「わかりません」と回答する傾向が強化",
    note: "CEOのDario Amodei氏は「AIモデルのハルシネーションは人間より少ない可能性があるが、より意外な形で起きる」と発言（2025年5月）",
  },
  {
    name: "Gemini（3 Pro / 3 Flash）",
    company: "Google",
    improvement: "自己整合性チェック機能を搭載。Vectara社のベンチマークではFlashモデルが0.7%と業界最低のハルシネーション率を記録",
    note: "Google Workspaceとの連携で、社内ドキュメントに基づいた回答（RAG）が利用可能。情報の根拠を社内データに限定できる",
  },
] as const;

export default function AiHallucinationFactCheckGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-[#f8f8f7] pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIのハルシネーションを見抜く7つのテクニック" },
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
                title="ChatGPTが嘘をつく？｜生成AIのハルシネーションを見抜く7つの実践テクニック"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1
            className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            ChatGPTが嘘をつく？
            <br className="sm:hidden" />
            生成AIのハルシネーションを見抜く7つの実践テクニック
          </h1>
          <p className="mt-2 text-lg text-gray-600" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            怖がるのではなく、賢く付き合う方法
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTの回答を信じていいの？」「AIが嘘をつくって本当？」——生成AIを使い始めた多くの方が、こんな不安を感じています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            結論から言うと、<strong>AIは意図的に嘘をついているわけではありません。</strong>
            しかし、事実と異なる情報をもっともらしく回答してしまうことがあります。これを<strong>「ハルシネーション（幻覚）」</strong>と呼びます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            怖がる必要はありません。仕組みを理解し、いくつかのテクニックを身につければ、AIの間違いは見抜けます。この記事では、<strong>今日から使える7つの実践テクニック</strong>を、具体的なプロンプト例とともに紹介します。
          </p>
        </motion.header>

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
              AIは「嘘をついている」のではなく、仕組み上「もっともらしい文章」を生成しているだけ。悪意はない
            </li>
            <li className="pl-1 marker:text-gray-500">
              特に間違いやすいのは「数字」「固有名詞」「出典URL」——この3つを重点的にチェックすればリスクは大幅に減る
            </li>
            <li className="pl-1 marker:text-gray-500">
              「出典を教えて」「自信がない部分は？」とAIに聞くだけで、間違いの手がかりが得られる
            </li>
            <li className="pl-1 marker:text-gray-500">
              質問を具体的にするほど、ハルシネーションは減る。曖昧な質問が最大のリスク要因
            </li>
            <li className="pl-1 marker:text-gray-500">
              複数のAIツールやAI検索（Perplexity等）を併用することで、情報の信頼性を高められる
            </li>
            <li className="pl-1 marker:text-gray-500">
              2026年2月現在、各モデルのハルシネーション率は大幅に改善中。ただし「ゼロ」にはならないため、人間の確認は引き続き重要
            </li>
          </ul>
        </motion.section>

        {/* ハルシネーションとは何か */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-hallucination" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            そもそもハルシネーションとは何か？——AIが「嘘」をつく仕組み
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTやClaudeなどの生成AIは、<strong>膨大なテキストデータから「次に来る可能性が高い言葉」を予測する</strong>ことで文章を作っています。検索エンジンのようにデータベースから正解を引っ張ってくるのではなく、言葉のパターンから「それっぽい文章」を組み立てています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            つまり、AIは<strong>「正しいかどうか」ではなく「自然かどうか」を基準に回答している</strong>のです。その結果、事実と異なる情報でも、文章として自然であれば堂々と出力してしまいます。これがハルシネーション（hallucination＝幻覚）です。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">ハルシネーションの代表的なパターン</h3>
          <div className="mt-4 space-y-4">
            {hallucinationTypes.map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-red-100 px-3 py-0.5 text-xs font-bold text-red-700">{item.label}</span>
                </div>
                <div className="mt-3 rounded-lg border-l-4 border-red-300 bg-gray-50 px-4 py-3">
                  <p className="text-sm leading-7 text-gray-700">{item.example}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">覚えておきたいこと</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              AIが間違えるのは「壊れている」からでも「嘘つき」だからでもありません。<strong>仕組み上、避けられない特性</strong>です。人間だって記憶違いや勘違いはありますよね。AIも同じです。大切なのは「間違える可能性がある」と知った上で、賢く使うこと。以下の7つのテクニックで、その方法を見ていきましょう。
            </p>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            参考：
            <a href="https://openai.com/index/introducing-simpleqa/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              OpenAI: Introducing SimpleQA
            </a>
            ｜
            <a href="https://www.allaboutai.com/resources/ai-statistics/ai-hallucinations/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              AllAboutAI: AI Hallucination Statistics 2026
            </a>
          </p>
        </motion.section>

        {/* テクニック1 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="technique-1" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            テクニック1：「出典を教えて」と聞く——AIに根拠を求める習慣
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            最も簡単で効果的なテクニックは、<strong>AIの回答に対して「出典はどこ？」と聞く</strong>ことです。根拠を求めるだけで、AIは情報の裏付けを意識した回答をするようになります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ただし注意点があります。<strong>AIが提示する出典URL自体がハルシネーションである可能性がある</strong>ということです。「存在しない論文」や「アクセスできないURL」を堂々と提示することがあります。出典が返ってきたら、必ずそのURLを開いて実在するか確認してください。
          </p>

          <PromptComparison
            ng={{
              label: "出典を求めない質問",
              text: "リモートワークの生産性への影響を教えてください。",
            }}
            ok={{
              label: "出典を明示的に求める質問",
              text: "リモートワークの生産性への影響について教えてください。\n\n回答には以下を含めてください：\n・情報の出典（調査名、実施機関、発表年）\n・引用元のURLがあれば記載\n・確認できなかった情報は「未確認」と明記",
            }}
            point="出典を求めるだけでなく、「確認できなかった情報は『未確認』と明記して」と追加すると、AIが不確実な情報にラベルを付けてくれます。これがファクトチェックの大きな手がかりになります。"
          />

          <h3 className="mt-8 text-lg font-bold text-gray-900">実際にやってみると…</h3>
          <HallucinationQuote
            text="スタンフォード大学の2024年の研究では、Perplexityが提示する情報源の約26%に不正確な引用が含まれていたと報告されています。"
            truth="この数字は複数のメディアで引用されていますが、原論文の特定が難しいケースです。「複数メディアが報道」と「査読済み論文で確認済み」は別物——こうした確認姿勢が大切です。"
          />
        </motion.section>

        {/* テクニック2 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="technique-2" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            テクニック2：数字と固有名詞をダブルチェック——特に間違いやすい箇所
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIが最も間違いやすいのは、<strong>数字・日付・人名・組織名・統計データ</strong>です。文章の流れは自然なのに、数字だけが微妙に違う——これがハルシネーションの厄介なところです。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">特に要注意な4つのカテゴリ</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { category: "統計データ", example: "「日本のAI導入率は72%」→ 調査元によって数字が大きく異なる", check: "調査名・実施機関・調査年を確認" },
              { category: "年号・日付", example: "「2023年にサービス開始」→ 実際は2022年だった", check: "公式サイトのプレスリリースで確認" },
              { category: "人名・役職", example: "「○○社のCEO、△△氏」→ すでに退任している", check: "企業の公式サイトで現在の役員を確認" },
              { category: "法律・制度", example: "「補助金の上限は100万円」→ 制度改定で金額が変わっている", check: "省庁の公式サイトで最新情報を確認" },
            ].map((item) => (
              <div key={item.category} className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-bold text-gray-900">{item.category}</p>
                <div className="mt-2 rounded-lg border-l-4 border-red-300 bg-red-50/50 px-3 py-2">
                  <p className="text-xs leading-6 text-gray-600">{item.example}</p>
                </div>
                <p className="mt-2 text-xs leading-6 text-emerald-700">
                  <span className="font-semibold">確認方法：</span>{item.check}
                </p>
              </div>
            ))}
          </div>

          <PromptComparison
            ng={{
              label: "回答をそのまま使う",
              text: "日本企業のAI導入率を教えてください。",
            }}
            ok={{
              label: "数字の確認を前提にした質問",
              text: "日本企業のAI導入率について、2024年〜2025年の主要な調査結果を教えてください。\n\n各数字について以下を明記してください：\n・調査機関名と調査時期\n・サンプル数（わかる場合）\n・「AI導入」の定義（調査によって異なるため）",
            }}
            point="同じ「AI導入率」でも、調査によって30%〜70%まで幅があります。これはAIの嘘ではなく、「導入」の定義が調査ごとに違うから。数字を見たら「誰が・いつ・どう測ったか」をセットで確認する習慣をつけましょう。"
          />
        </motion.section>

        {/* テクニック3 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="technique-3" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            テクニック3：「自信がない部分を教えて」と聞く——AIの不確実性を引き出す
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIに「この情報は正しいですか？」と聞くと、多くの場合「はい、正しいです」と答えます。AIには<strong>自分の回答を肯定する傾向（確証バイアス）</strong>があるからです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            代わりに<strong>「不確実な部分を教えて」と聞く</strong>と、AIは自分の回答を批判的に見直し、怪しい箇所を指摘してくれます。この聞き方の違いだけで、ファクトチェックの効率が大きく変わります。
          </p>

          <PromptComparison
            ng={{
              label: "正しいか確認する（効果薄）",
              text: "上の回答は正しいですか？間違いはありませんか？",
            }}
            ok={{
              label: "不確実性を引き出す（効果大）",
              text: "いま回答してくれた内容について質問です。\n\n・あなたの回答の中で、事実として確信が持てない部分はありますか？\n・最新情報と異なる可能性がある箇所はどこですか？\n・推測や一般論で補った部分があれば教えてください。",
            }}
            point="このテクニックは「メタ認知プロンプト」と呼ばれます。AIに自分自身の回答を客観的に評価させることで、人間が気づきにくい不確実箇所を浮かび上がらせます。特にClaudeは不確実性の明示が得意な傾向があります。"
          />

          <h3 className="mt-8 text-lg font-bold text-gray-900">さらに効果を高めるフォローアップ</h3>
          <div className="mt-4 space-y-2">
            {[
              "確信度を5段階で評価してください。「5=公式情報で確認済み」「1=推測」として、各ポイントに評価をつけて。",
              "もしこの回答の中に1つ間違いがあるとしたら、どこが最も怪しいですか？",
              "この回答の内容を裏取りするために、私が確認すべき情報源を3つ教えてください。",
            ].map((prompt, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white px-4 py-3">
                <p className="text-sm leading-7 text-gray-700">
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-will-primary/10 text-xs font-bold text-will-primary">
                    {i + 1}
                  </span>
                  {prompt}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* テクニック4 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="technique-4" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            テクニック4：質問を具体的にする——曖昧な質問ほどハルシネーションが増える
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIについて教えて」のような曖昧な質問は、ハルシネーションの温床です。質問が曖昧なほど、AIは「それっぽい一般論」で埋めようとし、結果として不正確な情報が混じりやすくなります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            逆に、<strong>「いつ」「誰が」「何を」「どのような条件で」を明示した具体的な質問</strong>をすると、AIの回答精度は格段に上がります。
          </p>

          <PromptComparison
            ng={{
              label: "曖昧な質問",
              text: "AIの市場規模について教えて。",
            }}
            ok={{
              label: "具体的な質問",
              text: "2025年の日本国内における生成AI市場の市場規模について、以下の情報を教えてください。\n\n・市場規模（金額）\n・前年比の成長率\n・情報の出典（調査会社名と発表時期）\n・対象範囲（SaaSのみか、ハードウェア含むか等）",
            }}
            point="具体的な質問をすることで、AIが「知らない情報を推測で埋める」余地が減ります。「5W1H」を意識するだけで効果があります。特に「いつの情報か」「誰の調査か」を指定するとハルシネーション率が大幅に下がります。"
          />

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">プロンプトの「具体性」チェックリスト</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-blue-900">
              <li className="pl-1">時期を指定しているか？（「最新の」は曖昧。「2025年の」「2026年2月時点の」が具体的）</li>
              <li className="pl-1">対象を限定しているか？（「AI」より「生成AI」、「日本」より「日本の従業員100名以上の企業」）</li>
              <li className="pl-1">出力フォーマットを指定しているか？（箇条書き・表・出典つき等）</li>
              <li className="pl-1">情報がない場合の対応を指示しているか？（「わからない場合は『不明』と記載して」）</li>
            </ul>
          </div>
        </motion.section>

        {/* Mid-Article CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-hallucination-fact-check-guide" />
        </motion.section>

        {/* テクニック5 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="technique-5" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            テクニック5：複数のAIツールで同じ質問をする——クロスチェックの方法
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            1つのAIツールだけに頼ると、そのツール固有の癖や弱点に気づけません。<strong>同じ質問をChatGPT・Claude・Geminiの3つに投げる</strong>だけで、情報の信頼性が格段に上がります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            3つのAIが同じ回答をした場合、その情報の信頼度は高いと判断できます。逆に、回答が食い違った場合は「要追加調査」のサインです。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">クロスチェックの3ステップ</h3>
          <div className="mt-4 space-y-3">
            {[
              {
                step: "1",
                title: "同じ質問を3つのAIに投げる",
                body: "全く同じ文面をChatGPT・Claude・Geminiに送ります。コピペでOKです。所要時間は3分。",
              },
              {
                step: "2",
                title: "回答の一致点と相違点を整理する",
                body: "3つとも一致 → 信頼度高い。2つ一致・1つ不一致 → 不一致の情報を追加確認。3つともバラバラ → その情報は信頼できない可能性大。",
              },
              {
                step: "3",
                title: "相違点を公式情報で確認する",
                body: "食い違った情報は、公式サイト・省庁の発表・論文など一次情報で裏取りします。AIの回答は「あたり」をつけるために使い、最終確認は人間が行います。",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-will-primary/10">
                  <span className="text-sm font-bold text-will-primary">{item.step}</span>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">手間を減らすコツ</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              すべての回答をクロスチェックする必要はありません。<strong>「この情報を仕事で使う」「他の人に共有する」場面だけ</strong>でOKです。個人的なアイデア出しや下書きの段階では、1つのAIで十分です。
            </p>
          </div>
        </motion.section>

        {/* テクニック6 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="technique-6" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            テクニック6：長い回答の後半に注意する——コンテキストと精度の関係
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIに長文の回答を求めると、<strong>回答の後半になるほど精度が落ちる傾向</strong>があります。AIは文章を先頭から順に生成していくため、長くなるほど「つじつまを合わせる」ために事実から離れた内容を生成しやすくなります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            また、長い入力文（たとえば大量の資料を貼り付けた場合）でも、<strong>入力の中盤にある情報は見落とされやすい</strong>ことが研究で指摘されています（「Lost in the Middle」問題）。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">長文回答で気をつけるべきこと</h3>
          <div className="mt-4 space-y-3">
            {[
              { title: "回答は分割して依頼する", desc: "「10項目をまとめて」より「まず項目1〜3について詳しく教えて」と分割した方が精度が高い" },
              { title: "後半の事実情報は特に確認する", desc: "箇条書きの後半、長文レポートの終盤は重点的にファクトチェック" },
              { title: "入力が長い場合は重要情報を先頭に", desc: "AIは入力の先頭と末尾を重視する傾向。最も重要な指示や条件は冒頭に配置" },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <span className="text-xs font-bold text-orange-700">{i + 1}</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                  <p className="mt-1 text-sm leading-7 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <PromptComparison
            ng={{
              label: "一度に全部聞く",
              text: "AIのメリットとデメリット、導入事例、コスト、法規制、将来展望、おすすめツール、学習方法、資格情報をまとめて教えて。",
            }}
            ok={{
              label: "分割して聞く",
              text: "生成AIの企業導入について、段階的に教えてください。\n\nまず第1回として、以下の2点に絞って回答してください：\n1. 導入のメリット（具体的な業務効率化の事例つき）\n2. 導入のデメリット・リスク（対策も含めて）\n\n回答後、続きを別途質問します。",
            }}
            point="1回のやり取りで聞く量を減らすことで、AIの「文章を埋めるために事実をでっち上げる」余地が減ります。面倒に感じるかもしれませんが、後から間違いを修正するコストに比べれば、はるかに効率的です。"
          />
        </motion.section>

        {/* テクニック7 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="technique-7" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            テクニック7：AI検索ツール（Perplexity等）と使い分ける——情報検索にはAI検索が向いている
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTやClaudeは「文章生成」が得意ですが、「最新の事実情報を正確に返す」ことは必ずしも得意ではありません。<strong>事実確認や最新情報のリサーチには、AI検索ツールを使い分ける</strong>のが賢い方法です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Perplexityなどの<strong>AI検索ツール</strong>は、Webの情報をリアルタイムに検索し、出典付きで回答してくれます。OpenAIのSimpleQAベンチマークでは、PerplexityのDeep Researchが93.9%の正答率を記録しました。従来のAIチャットが46%前後であることと比較すると、情報検索における精度の差は歴然です。
          </p>

          <h3 className="mt-8 text-lg font-bold text-gray-900">ツールの使い分けガイド</h3>
          <div className="mt-4 overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-600">用途</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-600">おすすめツール</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-600">理由</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { use: "事実確認・最新情報の検索", tool: "Perplexity / Gemini", reason: "Web検索と出典付き回答で正確性が高い" },
                    { use: "文章作成・企画書・メール", tool: "Claude / ChatGPT", reason: "長文の品質と指示理解力が高い" },
                    { use: "アイデア出し・ブレスト", tool: "ChatGPT / Claude", reason: "創造的な回答の幅が広い" },
                    { use: "データ分析・可視化", tool: "ChatGPT / Gemini", reason: "ファイルアップロード＋コード実行に対応" },
                    { use: "コード生成・プログラミング", tool: "Claude / ChatGPT", reason: "コードの品質と説明の正確さが高い" },
                  ].map((row) => (
                    <tr key={row.use}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.use}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{row.tool}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">ただし過信は禁物</p>
            <p className="mt-2 text-sm leading-7 text-blue-900">
              AI検索ツールも万能ではありません。出典付きで回答されていても、<strong>引用元の解釈が間違っている</strong>ケースがあります。重要な情報は、AI検索で見つけた出典リンクを直接開いて、自分の目で確認する習慣をつけましょう。
            </p>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            参考：
            <a href="https://openai.com/index/introducing-simpleqa/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              OpenAI: Introducing SimpleQA
            </a>
            ｜
            <a href="https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              Perplexity: Introducing Deep Research
            </a>
          </p>
        </motion.section>

        {/* 2026年2月の各モデル改善状況 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="model-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年2月：各AIモデルのハルシネーション改善状況
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIのハルシネーション率は年々改善しています。業界全体で見ると、2021年の約21.8%から2025年にはベストモデルで0.7%まで低下したというデータがあります（Vectara社ベンチマーク）。ただし、ベンチマークの測定方法によって数値は大きく異なるため、あくまで「改善傾向にある」という理解が正確です。
          </p>

          <div className="mt-6 space-y-4">
            {modelComparison.map((model) => (
              <div key={model.name} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-gray-900">{model.name}</h3>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">{model.company}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-emerald-700">改善点：</span>{model.improvement}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  <span className="font-semibold text-gray-700">注意点：</span>{model.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">結局、どのモデルが一番正確？</p>
            <p className="mt-2 text-sm leading-7 text-amber-900">
              答えは「質問の種類による」です。文書要約ではGemini Flashが最も正確で、事実に関する質問ではGPT-5.2が強く、不確実な場合に正直に認める傾向はClaudeが優れています。<strong>1つのモデルに頼るより、テクニック5で紹介したクロスチェックが最も確実</strong>です。
            </p>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            参考：
            <a href="https://github.com/vectara/hallucination-leaderboard" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              Vectara: Hallucination Leaderboard
            </a>
            ｜
            <a href="https://techcrunch.com/2025/04/18/openais-new-reasoning-ai-models-hallucinate-more/" target="_blank" rel="noopener noreferrer" className="text-gray-500 underline hover:text-gray-700">
              TechCrunch: OpenAI&apos;s reasoning models hallucinate more
            </a>
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
          className="mt-14 rounded-lg border border-gray-200 bg-white p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：AIの嘘を見抜く力は、AIを使いこなす力
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事で紹介した7つのテクニックを振り返ります。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1"><strong>「出典を教えて」と聞く</strong>——根拠を求める一言でAIの回答の質が変わる</li>
            <li className="pl-1"><strong>数字と固有名詞をダブルチェック</strong>——AIが最も間違いやすい箇所を重点的に確認</li>
            <li className="pl-1"><strong>「自信がない部分を教えて」と聞く</strong>——AIの不確実性を引き出すメタ認知プロンプト</li>
            <li className="pl-1"><strong>質問を具体的にする</strong>——5W1Hを明示して「推測の余地」を減らす</li>
            <li className="pl-1"><strong>複数のAIでクロスチェック</strong>——3分の投資で情報の信頼性が格段に向上</li>
            <li className="pl-1"><strong>長い回答の後半に注意する</strong>——分割して聞くことで精度を維持</li>
            <li className="pl-1"><strong>AI検索ツールと使い分ける</strong>——事実確認にはPerplexity等のAI検索が有効</li>
          </ol>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ハルシネーションは怖いものではありません。包丁が便利な道具であるのと同じように、AIも「特性を理解して使う」ことで、圧倒的に便利な道具になります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            大切なのは、<strong>「AIの回答を疑う」のではなく「AIの回答を確認する」</strong>という姿勢です。これは否定ではなく、AIとのより良い付き合い方です。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            7つのテクニックのうち、まず1つだけ試してみてください。今日のAIとの会話で「出典を教えて」と一言添えるだけ——それが、AIを賢く使いこなす第一歩です。
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
          <LineCtaBox />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを「使えるようになった人」がやっていた5つのこと
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者にもわかる基礎知識
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
