"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type ContextEngineeringGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = [
  "コンテキストエンジニアリング",
  "AIプロンプト設計",
  "AI指示精度を上げる",
  "非エンジニア向けAI活用",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "prompt-limit", label: "プロンプトだけでは限界になる理由" },
  { id: "what-is-context-engineering", label: "コンテキストエンジニアリングの意味" },
  { id: "difference-from-prompt", label: "プロンプトエンジニアリングとの違い" },
  { id: "four-elements-practice", label: "4要素で設計する実践手順" },
  { id: "checksheet", label: "10項目チェックシートで運用を標準化" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const contextElements = [
  {
    title: "1. 役割設定（Role）",
    description:
      "AIにどの立場で判断してほしいかを決めます。例: 「あなたは法人営業の提案責任者です」。立場が明確になると、語彙と判断基準が揃います。",
  },
  {
    title: "2. 背景情報（Context）",
    description:
      "対象者、現状、前提条件、目的を渡します。背景が薄いと一般論に寄るため、現場情報を短く入れるだけでも出力の具体性が上がります。",
  },
  {
    title: "3. 制約条件（Constraints）",
    description:
      "守るべきルールを先に固定します。文字数、トーン、禁止事項、利用できるデータ範囲などを明示すると、手戻りを減らせます。",
  },
  {
    title: "4. 出力形式（Format）",
    description:
      "レビューしやすい形式を先に指定します。箇条書き、表、見出し構成、JSONなどを決めると、チーム内で再利用しやすくなります。",
  },
] as const;

const comparisonRows = [
  {
    item: "主な対象",
    promptEngineering: "指示文そのもの",
    contextEngineering: "指示文＋周辺情報全体",
  },
  {
    item: "改善の起点",
    promptEngineering: "言い回しや書式の調整",
    contextEngineering: "役割・背景・制約・出力形式の設計",
  },
  {
    item: "再現性",
    promptEngineering: "担当者依存になりやすい",
    contextEngineering: "テンプレート化しやすい",
  },
  {
    item: "チーム展開",
    promptEngineering: "個人最適で止まりやすい",
    contextEngineering: "運用ルールとして共有しやすい",
  },
  {
    item: "向いている場面",
    promptEngineering: "単発の生成タスク",
    contextEngineering: "継続的に品質が必要な業務",
  },
] as const;

const businessExamples = [
  {
    title: "営業提案メールの改善",
    before:
      "明日の提案メールを作って。丁寧にお願いします。",
    afterRole: "あなたは法人営業5年目の担当者です。",
    afterContext:
      "宛先は既存顧客の部長。先週の商談で見積の費用対効果に懸念が出ている。目的は再商談の合意。",
    afterConstraints:
      "220〜280文字。断定的すぎる表現は避ける。費用に触れるときは根拠を1つ入れる。",
    afterFormat: "件名3案＋本文1案。最後に返信しやすい候補日時を2つ提示。",
    outcome:
      "先に相手の懸念を受け止めた文面になり、返信率が上がりやすい構成に変わります。",
  },
  {
    title: "会議メモの共有文作成",
    before:
      "会議内容をまとめて。",
    afterRole: "あなたはPMOです。",
    afterContext:
      "参加者は営業、CS、開発の3部門。目的は来月リリースに向けた課題共有。元データは箇条書きメモ。",
    afterConstraints:
      "事実と意見を分ける。担当者と期限がない内容はアクションに入れない。",
    afterFormat: "見出しは「決定事項」「未決事項」「次アクション」。Markdownで出力。",
    outcome:
      "誰が何をいつまでに行うかが残るため、会議後の実行率が安定します。",
  },
  {
    title: "採用面接の評価コメント作成",
    before:
      "面接の評価をまとめてください。",
    afterRole: "あなたは採用責任者です。",
    afterContext:
      "候補者は法人営業職。評価軸は課題把握力、提案構成力、再現性の3つ。面接メモを入力する。",
    afterConstraints:
      "印象評価だけで断定しない。証拠となる発言を各評価軸に1つずつ紐づける。",
    afterFormat:
      "「総評」「評価軸別コメント」「次面接で確認する質問3つ」を出力。",
    outcome:
      "評価理由が構造化され、面接官ごとの評価ぶれを抑えられます。",
  },
] as const;

const checksheetItems = [
  "依頼の目的が1文で明確になっている",
  "AIに持たせる役割が具体的に定義されている",
  "対象読者・対象部門などの背景情報が入っている",
  "使ってよい情報と使ってはいけない情報が分かれている",
  "文字数・トーン・禁止表現などの制約が明文化されている",
  "出力形式（箇条書き、表、見出し等）が固定されている",
  "判断に必要な評価軸が指定されている",
  "一次情報が必要な場合は参照範囲が明示されている",
  "出力後に確認すべきチェック観点が定義されている",
  "チームで再利用できるテンプレートとして保存できる",
] as const;

const failurePatterns = [
  {
    title: "失敗1: 役割が曖昧で判断軸がぶれる",
    detail:
      "「専門家として回答して」とだけ書くと、どの専門領域の専門家かが不明です。業務、職種、経験年数などを指定しない場合、AIは一般論の平均値に寄ります。",
  },
  {
    title: "失敗2: 背景情報が不足し、優先順位が逆転する",
    detail:
      "同じ依頼でも、対象読者が経営層か実務担当者かで必要な情報は変わります。背景がないと、読む相手に合わない詳細度で出力されます。",
  },
  {
    title: "失敗3: 制約が後出しになり、修正往復が増える",
    detail:
      "初回に「短く」とだけ伝え、2回目で文字数、3回目でトーンを追加する流れは手戻りの典型です。最初に制約を固定する方が速く安定します。",
  },
  {
    title: "失敗4: 出力形式を決めず、レビュー観点が散らばる",
    detail:
      "担当者Aは箇条書き、担当者Bは長文で依頼すると、レビュー方法も保存形式も揃いません。運用では出力形式の統一が品質管理の起点になります。",
  },
] as const;

const implementationSteps = [
  "Step 1. 高頻度で短時間の業務を1つ選ぶ（例: 会議要約、メール返信）",
  "Step 2. 4要素テンプレートを作り、既存の依頼文を分解して再配置する",
  "Step 3. 初回出力を評価し、不足した要素だけを1つ追加して再実行する",
  "Step 4. 良い出力が出た版を「業務テンプレートv1」として保存する",
  "Step 5. チームで同じテンプレートを使い、週1で改善差分を反映する",
] as const;

type LineCtaBoxProps = {
  className: string;
  titleClassName: string;
};

function LineCtaBox({ className, titleClassName }: LineCtaBoxProps) {
  return (
    <div className={className}>
      <p className={titleClassName}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </div>
  );
}

export default function ContextEngineeringGuidePage({ faqItems }: ContextEngineeringGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "コンテキストエンジニアリングとは？" },
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
                title="コンテキストエンジニアリングとは？AIの出力品質を上げる設計思想を非エンジニアが解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            コンテキストエンジニアリングとは？AIの出力品質を上げる設計思想を非エンジニアが解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「プロンプトを工夫しているのに、日によってAIの回答品質がぶれる」という相談は多くの現場で起きています。
            原因の多くは、指示文の言い回しではなく、AIに渡す前提情報の設計不足です。
            ここで使うのがコンテキストエンジニアリングです。非エンジニアでも使える形で、実務に落とし込む手順を整理します。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/context-engineering-guide/slide-1.png"
              alt="コンテキストエンジニアリングの全体像"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            結論: コンテキストエンジニアリングは「AIへ渡す情報設計」を標準化して出力品質を安定させる手法
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              プロンプト単体の改善には限界があり、再現性を上げるには「役割・背景・制約・出力形式」の4要素を分けて設計する必要があります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              非エンジニアでも、メール、会議要約、資料作成などの業務から始めれば、短期間で効果を確認できます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              チェックシートで運用を標準化すると、個人差を抑えながらチーム全体のAI活用精度を引き上げられます。
            </li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            現場では「便利だけれど品質が読めない」という理由でAI活用が止まることがあります。コンテキストエンジニアリングは、この不安を設計で解消するアプローチです。
            入力を定義し、検証し、更新する流れを作れば、担当者の経験値に依存しない形で運用を継続できます。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/context-engineering-guide/slide-2.png"
              alt="情報設計を標準化して品質を安定化する要点"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
        </motion.section>

        <motion.section
          id="prompt-limit"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            プロンプトだけでは限界になる理由は、AIが判断に必要な前提を受け取れていないから
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            指示文の表現を工夫しても、AIが見る情報が不足していれば回答は一般論になります。これは文章力の問題ではなく、入力設計の問題です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            例えば「提案メールを作って」と指示すると、AIは誰に向けた提案か、何を優先すべきか、どの程度の丁寧さが必要かを判断できません。
            その結果、毎回似ているけれど使いにくい文章が返ってきます。
            まずは
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事で使えるプロンプトテンプレート集
            </Link>
            のように型を持つことが有効ですが、次の段階では型に流し込む「前提情報の粒度」を上げる必要があります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            重要なのは、うまい表現を探すことではなく、判断材料を不足なく渡すことです。
            AIは受け取った情報をもとに次の単語を予測して文章を組み立てるため、入力が曖昧なら結論も曖昧になります。
            非エンジニアが成果を出している現場ほど、プロンプトの小手先よりも、背景情報と制約条件の定義に時間を使っています。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/context-engineering-guide/slide-3.png"
              alt="プロンプトだけでは限界になる理由"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <div className="mt-7 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-semibold text-gray-900">現場で起きやすい3つの限界</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">担当者ごとに指示の粒度が違い、同じ業務でも品質差が出る</li>
              <li className="pl-1 marker:text-gray-500">制約条件を後から追加するため、修正回数が増える</li>
              <li className="pl-1 marker:text-gray-500">出力形式が毎回違い、レビューと転記の工数が増える</li>
            </ul>
          </div>
          <div className="mt-6 space-y-4">
            {failurePatterns.map((pattern) => (
              <div key={pattern.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{pattern.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pattern.detail}</p>
              </div>
            ))}
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
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
        </motion.section>

        <motion.section
          id="what-is-context-engineering"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            コンテキストエンジニアリングとは、ChatGPTに渡す情報を設計して回答精度を安定化させる方法
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            コンテキストエンジニアリングは、AIへの入力を「文章」ではなく「設計対象」として扱う考え方です。対象は指示文だけではありません。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            非エンジニア向けに言い換えると、「AIに何をどの順番で伝えるかを決める設計術」です。
            仕様書のような難しいドキュメントは不要で、4要素を短く明文化するだけで実務で使える形になります。
            生成AIそのものの基本をまだ整理していない場合は、
            <Link
              href="/academy/blog/what-is-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              生成AIとは？初心者向けにわかりやすく解説
            </Link>
            を先に確認すると理解しやすくなります。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/context-engineering-guide/slide-4.png"
              alt="コンテキストエンジニアリングの4要素の考え方"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <div className="mt-7 space-y-4">
            {contextElements.map((element) => (
              <div key={element.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{element.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{element.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-semibold text-gray-900">4要素テンプレート（そのまま使える最小形）</h3>
            <pre className="mt-3 overflow-x-auto text-xs leading-6 text-gray-700">
{`役割:
背景:
制約:
出力形式:`}
            </pre>
          </div>
        </motion.section>

        <motion.section
          id="difference-from-prompt"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            プロンプトエンジニアリングとの違いは、改善対象が「1文」か「情報設計全体」かにある
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            どちらか一方が正しいという関係ではありません。実務では、プロンプト設計を土台に、コンテキスト設計で再現性を上げる順番が有効です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            プロンプトエンジニアリングは、良い指示文を書くための技術です。
            一方でコンテキストエンジニアリングは、指示文が機能するための前提を整える設計です。
            例えるなら「言葉の磨き込み」と「業務条件の明文化」の違いです。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/context-engineering-guide/slide-5.png"
              alt="プロンプトエンジニアリングとコンテキストエンジニアリングの違い"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">プロンプトエンジニアリング</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">コンテキストエンジニアリング</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="py-4 px-4">{row.promptEngineering}</td>
                    <td className="py-4 pl-4">{row.contextEngineering}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-semibold text-gray-900">実務での使い分け基準</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              単発で終わるタスクなら、プロンプトエンジニアリング中心でも十分です。例えば、1回だけのアイデア出しや下書き生成は、指示文の工夫だけで短時間に成果を出せます。
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              一方、毎週繰り返す業務や、複数人で回す業務ではコンテキストエンジニアリングが有効です。誰が担当しても同じ品質で出力できる状態を作るには、役割・背景・制約・出力形式を固定する必要があります。
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              現場で迷ったら「この業務は個人作業か、チーム運用か」で判断してください。チーム運用なら、最初からコンテキスト設計まで含めて進める方が総工数を下げられます。
            </p>
          </div>
        </motion.section>

        <motion.section
          id="four-elements-practice"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            役割設定・背景情報・制約条件・出力形式の4要素で設計すると、業務で使える回答に変わる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ここでは、ビジネス現場でよくある3場面を使って「指示1文」から「設計済み入力」へ変える手順を示します。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            実践時は、最初から完璧な入力を目指す必要はありません。4要素を埋めた初稿を作り、出力の不足点を見て1項目ずつ改善します。
            反復の進め方は
            <Link
              href="/academy/blog/chatgpt-advanced-tips"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPTを仕事で使いこなす実践テクニック集
            </Link>
            の「1回で決めない運用」が参考になります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            あわせて、出力の良し悪しだけでなく「修正回数」と「最終化までの時間」も記録してください。
            品質だけで判断すると、見た目は良いが運用コストの高いテンプレートを選んでしまうことがあります。
            コンテキストエンジニアリングの目的は、文章を整えることではなく、業務判断を短時間で行える状態を作ることです。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/context-engineering-guide/slide-6.png"
              alt="4要素で設計する実践フロー"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <div className="mt-7 space-y-6">
            {businessExamples.map((example) => (
              <section key={example.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-xl font-semibold text-gray-900">{example.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">Before:</span> {example.before}
                </p>
                <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-900">After（4要素で設計）</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                    <li className="pl-1 marker:text-gray-500">
                      <span className="font-semibold text-gray-900">役割:</span> {example.afterRole}
                    </li>
                    <li className="pl-1 marker:text-gray-500">
                      <span className="font-semibold text-gray-900">背景:</span> {example.afterContext}
                    </li>
                    <li className="pl-1 marker:text-gray-500">
                      <span className="font-semibold text-gray-900">制約:</span> {example.afterConstraints}
                    </li>
                    <li className="pl-1 marker:text-gray-500">
                      <span className="font-semibold text-gray-900">出力形式:</span> {example.afterFormat}
                    </li>
                  </ul>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">効果:</span> {example.outcome}
                </p>
              </section>
            ))}
          </div>
          <div className="mt-7 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-semibold text-gray-900">導入を定着させる5ステップ</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {implementationSteps.map((step) => (
                <li key={step} className="pl-1 marker:text-gray-500">
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-7 text-gray-700">
              5ステップの中で重要なのは、最後の「定期更新」です。AIモデルや業務要件は変化するため、最初に作ったテンプレートを固定すると精度は下がります。
              月1回でもよいので、実際の出力ログを見ながら改善差分を反映してください。
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
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" titleClassName="text-base font-semibold text-orange-800" />
        </motion.section>

        <motion.section
          id="checksheet"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            コンテキスト設計チェックシート10項目で、個人のコツをチームの運用ルールに変える
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI活用を継続できる組織は、入力設計を「担当者の感覚」に依存させません。実行前に同じ項目を確認し、出力品質を安定化させます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            下記10項目を満たせば、ほとんどの業務で初回出力の質が上がります。チーム導入時はこのチェック項目をテンプレートに紐づけて保存してください。
            導入の優先順位に迷う場合は、LINE無料相談で現状整理できます。AI活用ロードマップの案内も利用できます。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/context-engineering-guide/slide-7.png"
              alt="チェックシート運用でチーム品質を揃える方法"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {checksheetItems.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ol>
          <div className="mt-7 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-semibold text-gray-900">チェックシート運用の評価方法</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              運用を形だけで終わらせないために、3つの指標を記録してください。1つ目は初回出力の採用率、2つ目は修正往復回数、3つ目は最終化までの所要時間です。
              この3指標を見れば、チェックシートが実際に生産性へ効いているかを判断できます。
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              数値が改善しない場合は、10項目を一度に見直す必要はありません。欠損しやすい「背景情報」と「出力形式」の2項目から修正すると、改善幅が出やすくなります。
            </p>
          </div>
          <div className="mt-7">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <figure className="my-8">
            <Image
              src="/images/blog/context-engineering-guide/slide-8.png"
              alt="コンテキストエンジニアリング導入時のFAQ"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <div className="mt-6 space-y-4">
            {faqItems.map((faq, index) => (
              <section key={faq.question} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">
                  Q{index + 1}. {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{faq.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>
      </article>
    </main>
  );
}
