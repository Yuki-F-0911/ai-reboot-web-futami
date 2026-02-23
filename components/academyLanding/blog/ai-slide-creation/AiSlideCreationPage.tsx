"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiSlideCreationPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "AI プレゼン スライド 自動生成",
  "Gamma AI 使い方",
  "Beautiful.ai",
  "PowerPoint AI",
  "プレゼン 時短 AI",
] as const;

const tocItems = [
  { id: "summary", label: "結論: どれを選ぶべきか" },
  { id: "what-ai-can-do", label: "AIスライド生成でできること" },
  { id: "tool-comparison", label: "主要ツール比較" },
  { id: "gamma-steps", label: "Gamma無料手順" },
  { id: "design-tips", label: "それっぽく作るコツ" },
  { id: "manual-fix", label: "手動微調整ポイント" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
  { id: "academy-cta", label: "次の学習ステップ" },
  { id: "line-cta-final", label: "LINEで継続学習する" },
] as const;

const capabilityRows = [
  {
    phase: "入力",
    canDo: "箇条書きメモや企画文を読み取り、章立てと流れを作る",
    caution: "目的・聞き手・制約（時間/枚数）を曖昧にすると冗長化しやすい",
  },
  {
    phase: "生成",
    canDo: "各スライドのタイトル、本文、レイアウト案を短時間で作る",
    caution: "主張に対する根拠の粒度が揃わないことがある",
  },
  {
    phase: "再編集",
    canDo: "要約、言い換え、トーン調整、図解案の追加を反復できる",
    caution: "数値・固有名詞・出典情報は人の確認が必要",
  },
  {
    phase: "共有",
    canDo: "レビュー用の初稿を即時共有し、修正ラウンドを減らせる",
    caution: "社内テンプレートやブランド基準への最終整形は手動が必要",
  },
] as const;

const comparisonRows = [
  {
    tool: "Gamma",
    pricing: "Free: 月400 AI credits / 1回最大10 cards、Plus/Pro/Ultraあり（年払いは約28%割引）",
    requirement: "ブラウザのみで開始可能",
    japanese: "日本語出力は可能。固有名詞や業界用語は確認推奨",
    bestFor: "短時間で初稿を複数案作りたい個人・小規模チーム",
  },
  {
    tool: "Beautiful.ai",
    pricing: "Pro $12/mo（年払い） / Team $40/member/mo（年払い）",
    requirement: "Webアプリ。14日トライアルあり",
    japanese: "100+言語翻訳とCJKフォント運用あり [要確認: UI日本語化範囲]",
    bestFor: "テンプレート運用で見た目を均一化したいチーム",
  },
  {
    tool: "PowerPoint + Copilot",
    pricing: "Copilot for Microsoft 365: $18 user/month（年契約）",
    requirement: "対象M365商用ライセンス + Copilot契約が必要",
    japanese: "日本語利用は可能。社内用語統一は追加指示が必要",
    bestFor: "既存のPowerPoint資産を活かす法人運用",
  },
  {
    tool: "Google Slides + Gemini",
    pricing: "Workspace契約プラン依存（Gemini in Slides対象エディション）",
    requirement: "Google Workspaceの対象エディション",
    japanese: "対応言語で運用可能。導入前に管理者設定の確認が必要",
    bestFor: "共同編集中心のチームと教育・社内共有用途",
  },
] as const;

const gammaSteps = [
  {
    step: "1. 無料アカウントを作成し、目的を先に固定する",
    detail:
      "資料タイトルだけで始めると情報が広がりやすいため、最初に「聞き手」「目的」「想定時間」「枚数」を入れます。ここを固定すると最初の生成精度が安定します。",
  },
  {
    step: "2. 10 cards単位で分割生成する",
    detail:
      "Freeプランは1回最大10 cardsなので、20〜30枚資料は章単位で生成します。例: 導入10枚、提案本編10枚、実行計画10枚のように分けると管理しやすくなります。",
  },
  {
    step: "3. 生成後すぐに「削る編集」を行う",
    detail:
      "AI初稿は情報過多になりやすいため、1スライド1メッセージに圧縮します。説明を増やすより、不要要素を削って視線誘導を整える方が改善効果が高いです。",
  },
  {
    step: "4. レビュー前に事実確認リストを通す",
    detail:
      "数値、社名、固有名詞、日付を先に確認してから共有します。ここを省略するとレビューで差し戻しが増え、時短効果が消えます。",
  },
] as const;

const designTips = [
  {
    tip: "1スライド1メッセージに固定する",
    why: "要点が曖昧なまま生成すると、聞き手の理解が遅くなるため。",
  },
  {
    tip: "本文は3〜5行、1行40文字以内を目安にする",
    why: "読み上げを前提にすると、視認性と説明速度が安定するため。",
  },
  {
    tip: "強調色は1色に絞る",
    why: "複数色で強調すると、重要点が埋もれてしまうため。",
  },
  {
    tip: "同じレイアウトを3枚以上連続させない",
    why: "単調さを防ぎ、セクション切替を視覚的に伝えやすくするため。",
  },
  {
    tip: "最後の1枚は『次アクション』専用にする",
    why: "プレゼン終了後の意思決定が明確になり、行動に移りやすいため。",
  },
] as const;

const manualCheckpoints = [
  {
    point: "主張と根拠の整合",
    action: "各スライドで「結論→理由→次アクション」が繋がっているか確認する。",
  },
  {
    point: "数値・固有名詞・日付",
    action: "一次情報を照合し、誤字より先にファクトの一致を優先して直す。",
  },
  {
    point: "社内テンプレート適合",
    action: "フォント、余白、見出し階層、ロゴ位置を会社標準に合わせる。",
  },
  {
    point: "話す順番との一致",
    action: "スピーカーノートを見直し、口頭説明とスライド順のズレを解消する。",
  },
  {
    point: "レビュー観点の先回り",
    action: "想定質問を3つ先に書き、回答スライドを予備で準備する。",
  },
] as const;

const promptTemplate = `あなたは法人向け提案資料の編集者です。
以下の条件でスライド構成を作成してください。

目的: {提案/報告/研修}
聞き手: {役職・人数・前提知識}
想定時間: {分}
想定枚数: {枚}
最終的に相手に取ってほしい行動: {1文}

制約:
- 1スライド1メッセージ
- 各スライド本文は3〜5行
- 専門用語は初出で補足
- 具体例を1つ以上入れる

出力形式:
1) 全体章立て
2) スライドごとのタイトルと要点
3) 想定質問と回答案`;

export default function AiSlideCreationPage({ faqItems }: AiSlideCreationPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIプレゼンスライド自動生成ツール比較2026" },
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
                title="AIプレゼンスライド自動生成ツール比較2026｜Gamma・Beautiful.ai・Copilot・Google Slides AI"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIプレゼンスライド自動生成ツール比較2026｜Gamma・Beautiful.ai・Copilot・Google Slides AI
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            AIスライド生成は、ゼロから資料を書く作業を短縮できます。特に「たたき台を10〜20分で出して、レビューで磨く」運用にすると、個人でも法人でも準備時間を圧縮しやすくなります。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            ただし、どのツールでも初稿をそのまま本番利用すると、論理飛躍や数値不整合が残る可能性があります。本記事では、ツール比較だけでなく、仕上げの手動調整までを前提に手順を整理します。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            個人利用は「まず形にする速さ」、法人利用は「既存テンプレート運用とライセンス整合」が判断軸になります。自分の利用文脈に合わせて読み進めると、導入判断がしやすくなります。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-600">
            価格・仕様の確認日: 2026-02-20（変動情報は導入前に公式ページで再確認してください）
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/ai-slide-creation/slide-01.png"
              alt="AIプレゼンスライド自動生成ツール比較の要点"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">
            結論: スライド生成AIは「資料の種類」と「最終編集環境」で選ぶ
          </h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            <li className="blog-li pl-1 marker:text-blue-700">
              短時間で初稿を作るならGamma、テンプレート整合を重視するならBeautiful.aiが使いやすいです。
            </li>
            <li className="blog-li pl-1 marker:text-blue-700">
              既存のPowerPoint運用がある法人は、Copilot連携の方が定着しやすいです。
            </li>
            <li className="blog-li pl-1 marker:text-blue-700">
              Google Workspace中心のチームは、Slides + Geminiの共同編集導線が効率的です。
            </li>
            <li className="blog-li pl-1 marker:text-blue-700">
              どの選択でも、最終品質は手動チェック工程を設計するかで差が出ます。
            </li>
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-blue-900">
            個人は「1人で完結できるか」を基準に、法人は「チーム共同編集と監修フローに載るか」を基準に比較すると、導入後の運用負荷を抑えられます。
          </p>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="what-ai-can-do"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            AIスライド自動生成でできること（テキスト入力→下書き完成）
          </h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            AIが得意なのは、空白から最初の形を作る作業です。メモ、議事録、提案骨子を入力すると、章立て・見出し・本文の下書きを短時間で出せます。資料作成の最初の壁を越える用途で効果が出やすいです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">工程</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">AIでできること</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">人が補うべき点</th>
                </tr>
              </thead>
              <tbody>
                {capabilityRows.map((row) => (
                  <tr key={row.phase} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.phase}</th>
                    <td className="px-4 py-4">{row.canDo}</td>
                    <td className="px-4 py-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            スライド作成全体の工程は、
            <Link
              href="/academy/blog/ai-presentation-workflow"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIプレゼン資料作成ワークフロー
            </Link>
            で詳しく整理しています。先に工程を決めると、ツール比較の判断が早くなります。
          </p>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox />
        </section>

        <motion.section
          id="tool-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            主要ツール比較（Gamma / Beautiful.ai / Microsoft Copilot / Google Slides AI）
          </h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            価格だけで選ぶと、実運用でライセンス条件や編集環境の違いに詰まりやすくなります。比較では「無料で試せる範囲」「導入要件」「日本語運用」「既存業務との接続」を同時に見てください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[1100px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">価格・無料枠（2026-02-20）</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">導入要件</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">日本語運用</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている用途</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.pricing}</td>
                    <td className="px-4 py-4">{row.requirement}</td>
                    <td className="px-4 py-4">{row.japanese}</td>
                    <td className="px-4 py-4">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-4 text-xs leading-6 text-gray-500">
            注記: GammaのPlus/Pro/Ultraの最新USD単価は価格ページで動的表示のため、公開前に目視で最終確認してください。
          </p>
          <p className="blog-p mt-2 text-xs leading-6 text-gray-500">
            注記: Beautiful.aiの日本語運用は翻訳機能/CJKフォント対応を確認済み。UIローカライズ範囲は契約環境で差が出るため要確認です。
          </p>
        </motion.section>

        <motion.section
          id="gamma-steps"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Gammaの使い方（無料で試せる4ステップ）
          </h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Gammaを最短で試すコツは、最初から長尺資料を作らないことです。Freeプランの制約（1回最大10 cards）を前提に、章ごと分割で下書きを作ると実運用に繋がります。
          </p>
          <div className="mt-6 grid gap-4">
            {gammaSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{item.step}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">Gamma入力用のプロンプト例（コピペ可）</h3>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-7 text-gray-700">
            <code>{promptTemplate}</code>
          </pre>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            PowerPoint前提の組織運用に移行する場合は、
            <Link
              href="/academy/blog/microsoft-copilot-guide"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              Microsoft Copilot使い方ガイド
            </Link>
            でライセンス条件を先に確認しておくと、切替時の手戻りを減らせます。
          </p>
        </motion.section>

        <motion.section
          id="design-tips"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            デザインセンス不要で「それっぽい」資料を作るコツ
          </h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            AIスライドの見た目は、センスよりもルール設計で安定します。作る前にルールを固定しておくと、誰が作っても一定品質に寄せやすくなります。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {designTips.map((item) => (
              <li key={item.tip} className="blog-li pl-1 marker:text-gray-500">
                <strong className="text-gray-900">{item.tip}</strong>：{item.why}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            チームで使う場合は、ルールを文章化してテンプレートにしておくと、属人化を抑えられます。プロンプト整備の具体例は
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事で使えるプロンプトテンプレート集
            </Link>
            を参照してください。
          </p>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox />
        </section>

        <motion.section
          id="manual-fix"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            完成後の微調整ポイント（AIの苦手領域を手動で補う）
          </h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            AIで早く作れても、最終品質は仕上げの質で決まります。特に法人の提案資料は、主張と根拠の一貫性、社内表現ルール、レビュー耐性を揃えることが重要です。
          </p>
          <div className="mt-6 grid gap-4">
            {manualCheckpoints.map((item) => (
              <section key={item.point} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{item.point}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.action}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            導入判断を組織全体で進める場合は、
            <Link
              href="/academy/blog/corporate-ai-adoption-guide"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              企業のAI導入ガイド
            </Link>
            で、運用設計と教育設計を同時に見直すのが有効です。
          </p>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
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
          id="related-links"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">関連記事</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/ai-presentation-workflow"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIでプレゼン資料を効率的に作る方法
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/prompt-template-for-work"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                仕事で使えるプロンプトテンプレート集
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/microsoft-copilot-guide"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Microsoft Copilot使い方ガイド
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 text-xl font-bold text-will-primary">AI活用の判断軸とキャリア設計を同時に整える</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、特定ツールの操作習得ではなく、実務で再現できる学習設計を重視しています。次の3本柱を一体で扱い、AI活用を継続できる状態へ繋げます。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">生成AI活用力: 実務で使えるAI活用の型を体系化する</li>
            <li className="blog-li pl-1 marker:text-gray-500">
              自己理解・キャリアデザイン: AIを鏡に強みと価値観を言語化し、次の役割を設計する
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">仲間と共に学ぶ環境: 対話と協働を通じて、実践を継続できる土台を作る</li>
          </ul>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            スライド作成の時短をきっかけに、業務設計とキャリア設計を同時に更新したい方は、学習プロセス全体を見直す選択肢が有効です。
          </p>
        </motion.section>

        <section id="line-cta-final" className="mt-14">
          <LineCtaBox />
        </section>
      </article>
    </main>
  );
}
