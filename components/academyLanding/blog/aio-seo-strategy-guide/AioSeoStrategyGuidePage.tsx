"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type AioSeoStrategyGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";

const keywordTags = [
  "LLMO GEO とは",
  "AI Overviews 対策",
  "AIO SEO",
  "Perplexity SEO 対策",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ（3行）" },
  { id: "seo-vs-aio", label: "従来SEOとAIO/GEOの違い" },
  { id: "quote-conditions", label: "AIに引用される条件" },
  { id: "structure-design", label: "引用されやすい構造設計" },
  { id: "aio-checklist", label: "AIO診断チェックリスト15項目" },
  { id: "ai-reboot-practice", label: "AIリブートの実践方針" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const summaryLines = [
  "AIO/LLMO/GEOは、順位を上げる施策ではなく「AIが引用しやすい情報設計」を先に作る実務です。",
  "Google AI Overviews・Perplexity・ChatGPT Searchは、要約可能性と根拠確認のしやすさを重視するため、3行要約・比較表・FAQSchemaが効きます。",
  "本記事の15項目チェックリストを使えば、既存記事を「検索される記事」から「引用される記事」へ段階的にリライトできます。",
] as const;

const seoVsAioRows = [
  {
    axis: "最適化の主目的",
    seo: "検索結果での順位改善とクリック獲得",
    aio: "AI回答内での引用獲得と要点採用",
    action: "順位施策と並行し、引用される断片を先に設計する",
  },
  {
    axis: "評価される情報単位",
    seo: "ページ全体の網羅性や内部構造",
    aio: "質問に直接答える短い根拠ブロック",
    action: "見出しごとに結論1文を先頭配置する",
  },
  {
    axis: "ユーザー行動の入口",
    seo: "一覧からクリックして本文を読む",
    aio: "AI回答を読んだ後、必要箇所だけ遷移する",
    action: "最初の数行で判断可能な要約を置く",
  },
  {
    axis: "重要な構造要素",
    seo: "タイトル、見出し、内部リンク、被リンク",
    aio: "3行要約、比較表、FAQ、出典の明示",
    action: "H2ごとに再利用可能な情報ブロックを作る",
  },
  {
    axis: "更新運用",
    seo: "順位変動を見て月次で改善",
    aio: "引用される質問軸を見て短サイクルで追記",
    action: "FAQを起点に週次で追記テーマを決める",
  },
  {
    axis: "失敗パターン",
    seo: "網羅目的で冗長化し、主張が埋もれる",
    aio: "結論不在で要点抽出できず引用されない",
    action: "各セクションを『結論→根拠→実行手順』で統一する",
  },
] as const;

const quoteConditionRows = [
  {
    engine: "Google AI Overviews",
    condition: "検索品質要件を満たし、質問への直接回答がページ内に明示されていること",
    whatToDo: "見出し直下に結論1文、可変情報には確認日、`max-snippet`設定の意図確認",
    note: "確認日: 2026-02-19（仕様は更新されるため定期確認）",
  },
  {
    engine: "Perplexity",
    condition: "質問に対して、比較しやすい構造と根拠参照しやすい文脈があること",
    whatToDo: "比較表と定義文を分離し、主語を省略しない。引用前提の文章長に調整する",
    note: "引用は補助であり、最終判断は一次情報の再確認が前提",
  },
  {
    engine: "ChatGPT Search",
    condition: "クロール許可と可読性が担保され、質問に対する要点が短く整理されていること",
    whatToDo: "OAI-SearchBot/GPTBot制御を確認し、1見出し1結論を徹底する",
    note: "robots設定で意図せず除外していないかを定期監査する",
  },
] as const;

const structurePatterns = [
  {
    title: "1. 3行要約を冒頭固定する",
    why: "AIは冒頭の短い要点を抽出しやすいため、導入文より先に『結論3行』を置く方が引用の再現性が上がります。",
    template:
      "1行目: この記事の結論\n2行目: なぜそう言えるか（根拠の型）\n3行目: 読者が次に取る行動",
  },
  {
    title: "2. 比較表で判断軸を固定する",
    why: "AIO文脈では、長文説明より比較軸の明示が優先されます。定義・違い・使い分けを表で示すと引用単位が明確になります。",
    template: "列例: 比較軸 / 従来SEO / AIO-GEO / 実務での意思決定",
  },
  {
    title: "3. FAQSchemaで質問単位の再利用性を高める",
    why: "FAQは検索クエリに近い形で回答を構造化でき、要点抽出時の文脈補完に有効です。",
    template: "質問文は具体化（対象、条件、用途）し、回答は結論先出しで120〜220字に収める",
  },
] as const;

const aioChecklist = [
  "記事冒頭に3行要約を置いている（導入前）",
  "各H2の1段落目が結論文で始まっている",
  "主語と対象読者が曖昧な文を削除している",
  "比較が必要な論点を比較表で提示している",
  "可変情報（仕様・料金・制度）に確認日を記載している",
  "FAQを5〜7問に絞り、質問単位で自己完結させている",
  "FAQSchemaを本文のQ&Aと同一内容で実装している",
  "内部リンクを文脈上必要な位置に3本以上設置している",
  "抽象語だけの見出しを避け、結論型見出しにしている",
  "各セクションに『読者が次にやること』を1つ入れている",
  "根拠が弱い数値には断定を避ける注記を付けている",
  "robots設定でAI検索向けクロールを誤って遮断していない",
  "生成AIで作成した下書きを人間が検証している",
  "記事公開後に検索クエリ単位で追記方針を決めている",
  "自社の実践知（失敗と改善）を最低1箇所で言語化している",
] as const;

const aiRebootPillars = [
  {
    title: "生成AI活用力",
    body: "AIO対応は、単なる文章量ではなく、AIが再利用しやすい情報設計を実務で回す力です。記事単位で要約・比較・FAQを設計し、運用までつなげます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "SEO担当者でも、得意領域は『分析』『編集』『実装』で異なります。AIを使って強みを可視化し、担当範囲を再設計することで継続運用が安定します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "AIOは仕様変化が速いため、1人で検証し続けると限界が来ます。検証結果を共有し合える学習環境が、再現性のある改善速度を作ります。",
  },
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass =
    tone === "green"
      ? "blog-cta-box mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : "blog-cta-box mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";
  const titleClass = tone === "green" ? "text-base font-semibold text-green-800" : "text-base font-semibold text-orange-800";

  return (
    <motion.section
      className={boxClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className={titleClass}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで週1AI通信を受け取る（無料）
      </a>
    </motion.section>
  );
}

export default function AioSeoStrategyGuidePage({ faqItems }: AioSeoStrategyGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI Overviews時代のSEO完全ガイド" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            AI Overviews時代のSEO完全ガイド｜「AIに引用される」コンテンツ設計チェック
          </h1>
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-19">2026年2月19日</time> 公開 / 確認日: 2026年2月19日
            </p>
            <CopyAsMarkdownButton
              title="AI Overviews時代のSEO完全ガイド｜AIに引用されるコンテンツ設計チェック"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIO SEOやLLMO/GEOは、従来SEOを置き換える概念ではありません。検索順位を追う設計に加えて、AI回答に引用されるための情報単位を設計する実務です。この記事では、Google
            AI Overviews・Perplexity・ChatGPT Searchに共通する引用条件を整理し、既存記事をリライトするための実装チェックまで一気にまとめます。生成AIの基礎整理がまだの方は
            <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIとは何か
            </Link>
            を先に押さえると、判断軸が揃いやすくなります。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="scroll-mt-28 mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">要点まとめ（3行）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryLines.map((line) => (
              <li key={line} className="pl-1 marker:text-blue-500">
                {line}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="seo-vs-aio"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            従来SEOとAIO/GEOの違いは「順位最適化」から「引用最適化」への設計転換
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、AIO対応は「別施策を足す」より「記事の情報粒度を再設計する」作業です。順位を狙うSEOの土台を残しながら、AIが引用しやすい最小単位を作ることが成果の分岐点になります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            LLMO（Large Language Model Optimization）やGEO（Generative Engine Optimization）は、検索アルゴリズムの裏技ではなく、質問応答型の検索体験に合わせて情報を構造化する考え方です。特に、要点が文中に埋もれている記事は、通常検索では評価されてもAI要約で引用されにくくなります。逆に、見出しごとに「結論」「比較」「次アクション」が揃っていれば、AI回答に採用される可能性が高まります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            実務では「SEO担当」「編集担当」「実装担当」が分断されるほど、AIO対応が遅れがちです。比較軸を最初に共通化し、記事テンプレートに落とすところまでを1セットで回すと、チームの再現性が上がります。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">従来SEO</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">AIO/GEO</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">実務アクション</th>
                </tr>
              </thead>
              <tbody>
                {seoVsAioRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.seo}</td>
                    <td className="px-4 py-4">{row.aio}</td>
                    <td className="px-4 py-4">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            既存記事のリライトでは、まず見出しを結論型に直し、次に比較表を追加し、最後にFAQを整備する順番が効率的です。この順番は
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIツール比較記事
            </Link>
            の改善にも再利用できます。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="quote-conditions"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI Overviews・Perplexity・ChatGPT Searchで引用される条件は「要約性・検証性・再利用性」
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI検索ごとに見え方は違っても、引用されるページの共通点は3つです。短く要約できること、根拠を確認できること、質問が変わっても再利用できることです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            逆に言えば、長文で丁寧に説明していても、結論が遅い記事は引用単位として扱われにくくなります。特に「定義」「比較」「手順」の順で段落が分離されていないページは、AI側が解釈しづらく、抽出時に不利です。
            Perplexityの使い方と引用確認の実務は
            <Link href="/academy/blog/perplexity-ai-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Perplexity AIガイド
            </Link>
            にも整理しています。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">エンジン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">引用されやすい条件</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">実務でやること</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">運用メモ</th>
                </tr>
              </thead>
              <tbody>
                {quoteConditionRows.map((row) => (
                  <tr key={row.engine} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.engine}</th>
                    <td className="px-4 py-4">{row.condition}</td>
                    <td className="px-4 py-4">{row.whatToDo}</td>
                    <td className="px-4 py-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            重要なのは、どのエンジンでも「引用されること」と「正しく解釈されること」は別問題だという点です。公開後は検索流入だけでなく、引用されやすい質問群を観測してFAQを追記する運用に切り替えると、AIO対応は継続しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="structure-design"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            引用されやすいコンテンツ構造は「3行要約・比較表・FAQSchema」の3点セット
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AIO対応の中核は、ページ全体の文章量ではなく「抽出しやすいブロック設計」です。3行要約・比較表・FAQを固定化すると、既存記事の改善が体系化できます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ここでのポイントは、テンプレート化して横展開できる状態にすることです。毎回ゼロから書くと品質がぶれるため、まず型を固定してからテーマだけ差し替える運用に切り替えてください。長文ソースを短時間で構造化する作業は
            <Link href="/academy/blog/notebooklm-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              NotebookLM活用ガイド
            </Link>
            と併用すると効率が上がります。
          </p>

          <div className="mt-8 space-y-6">
            {structurePatterns.map((pattern) => (
              <section key={pattern.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{pattern.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pattern.why}</p>
                <pre className="mt-3 overflow-x-auto rounded bg-white p-4 text-xs leading-6 text-gray-700">{pattern.template}</pre>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            FAQSchemaは「入れれば勝てる」施策ではありません。本文と同じ意味のQ&Aを維持し、更新のたびにズレを解消する運用が必要です。構造化データと本文が乖離すると、引用精度より先に信頼性が落ちます。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="aio-checklist"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIO診断チェックリスト15項目で、引用される記事の最低ラインを可視化する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            以下の15項目は、公開前の最終確認だけでなく、既存記事の改善優先度を決める基準として使えます。まずは「10項目以上を満たす」状態を最低ラインにしてください。
          </p>
          <ol className="mt-6 space-y-3">
            {aioChecklist.map((item, index) => (
              <li key={item} className="rounded-lg border border-gray-200 p-4 text-sm leading-7 text-gray-700">
                <span className="font-semibold text-gray-900">{index + 1}.</span> {item}
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">運用ルール（推奨）</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-800">
              <li className="pl-1 marker:text-amber-500">0〜9項目: 構造不足。新規記事化または大幅リライトを優先。</li>
              <li className="pl-1 marker:text-amber-500">10〜12項目: 引用可能性はあるが、比較表とFAQの精度改善が必要。</li>
              <li className="pl-1 marker:text-amber-500">13〜15項目: 運用段階。クエリ別の追記サイクルへ移行。</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="ai-reboot-practice"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIリブートはAIO対応を「生成AI活用力＋自己理解＋仲間学習」で実装している
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AIリブートでは、AIOをテクニック集としてではなく、実務運用の型として扱います。記事制作の段階でAIO構造を実装し、学習と改善を回す仕組みまでをセットで設計しています。
          </p>
          <div className="mt-6 space-y-4">
            {aiRebootPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            本記事自体も、3行要約、比較表、FAQSchema、内部リンクというAIO前提の構造で設計しています。関連知識は
            <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの基礎
            </Link>
            、
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT/Claudeの使い分け
            </Link>
            、
            <Link href="/academy/blog/perplexity-ai-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Perplexity運用
            </Link>
            、
            <Link href="/academy/blog/notebooklm-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              NotebookLM活用
            </Link>
            を組み合わせると、施策の実行速度が上がります。
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <p className="text-sm leading-7 text-gray-700">
              施策を単発で終わらせず、毎週の更新運用として定着させたい方は、LINEで配信している週次のAI実務解説を活用してください。
            </p>
          </div>
          <div className="mt-5">
            <LineCtaBox tone="green" />
          </div>
        </motion.section>
      </article>
    </main>
  );
}
