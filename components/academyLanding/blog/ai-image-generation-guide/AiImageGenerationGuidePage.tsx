"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiImageGenerationGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI画像生成 おすすめ", "Gemini 画像生成", "Midjourney 使い方"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-ai-image-generation", label: "AI画像生成とは？（概要と用途）" },
  { id: "tool-comparison", label: "主要ツール比較表" },
  { id: "gemini-nano-banana", label: "Google Gemini（画像生成）の使い方" },
  { id: "midjourney", label: "Midjourneyの使い方" },
  { id: "dalle", label: "ChatGPT（画像生成）の使い方" },
  { id: "stable-diffusion", label: "Stable Diffusionの使い方" },
  { id: "business-use", label: "業務での活用パターン" },
  { id: "copyright", label: "注意点（著作権・商用利用）" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "next-step", label: "次の一歩を決めたい方へ" },
] as const;

const toolComparisonRows = [
  {
    tool: "Google Gemini（画像生成）",
    strengths: "Googleアカウントで始めやすく、文章指示から画像生成まで一気通貫で進めやすい。",
    howToStart: "Geminiで画像生成機能を開き、用途・構図・サイズを日本語で指定する。",
    caution: "提供範囲や制限はプラン・地域で変わることがあるため公式で確認する。",
    fit: "まず無料で試し、業務素材の初稿を早く作りたい人。",
  },
  {
    tool: "Midjourney",
    strengths: "アート寄りの高品質な表現に強く、雰囲気づくりの再現性が高い。",
    howToStart: "Discordまたは公式UIでプロンプトを送って生成し、候補から選ぶ。",
    caution: "料金・商用利用条件・運用導線は更新されるため公式で確認する。",
    fit: "ブランド表現や世界観が重要なクリエイティブを作りたい人。",
  },
  {
    tool: "ChatGPT（画像生成）",
    strengths: "会話の文脈を踏まえて指示を調整しやすく、修正依頼が自然言語でできる。",
    howToStart: "ChatGPTで画像生成が利用できる環境で、目的と禁止事項を文章で伝える。",
    caution: "利用可否・回数・出力仕様（DALL·E等の提供状況含む）はプランや提供状況で変わるため公式で確認する。",
    fit: "文章とセットで、提案資料やSNS素材を効率よく作りたい人。",
  },
  {
    tool: "Stable Diffusion",
    strengths: "オープンソース系の選択肢が多く、自由度（モデル/LoRA/設定）が高い。",
    howToStart: "クラウドやGUIツールで試し、必要ならローカル環境へ移行する。",
    caution: "設定が複雑になりやすく、モデルや素材のライセンス確認が必須。",
    fit: "自由度を優先し、社内ワークフローに合わせて作り込みたい人。",
  },
  {
    tool: "Adobe Firefly",
    strengths: "Adobe製品との連携や商用利用前提の素材づくりで検討されやすく、業務導入の説明がしやすい。",
    howToStart: "Fireflyで生成機能を試し、必要ならPhotoshop/Illustrator等の制作フローに接続する。",
    caution: "利用条件や出力の扱いは契約・プランで変わるため、最新の規約と公式情報で確認する。",
    fit: "既存のデザイン制作フロー（Adobe）に組み込みたい人。",
  },
] as const;

const usagePatterns = [
  {
    title: "SNS素材（サムネ/投稿画像）の初稿",
    detail:
      "まずは「テキスト→ラフ」までAIで作り、最後の微調整（フォント・余白・ブランド色）はデザインツールで仕上げると品質が安定します。",
  },
  {
    title: "提案資料のイメージ作成（雰囲気案）",
    detail:
      "複数案を短時間で出し、チーム内で方向性を決める用途に向きます。確定案は権利面の確認を含めて再制作する運用が安全です。",
  },
  {
    title: "バナー/LPの素材づくり",
    detail:
      "写真素材が用意できないときの代替や、抽象表現の背景生成に向きます。人物やロゴが絡む場合は特に注意が必要です。",
  },
] as const;

const copyrightChecklist = [
  "各ツールの利用規約（商用利用・禁止事項）を確認する",
  "第三者の著作権・商標・肖像権を侵害しない（ロゴ/有名キャラクター/特定人物の再現など）",
  "クライアントワークは「生成物の扱い・再利用・責任分界」を明文化する",
  "社内ルールとして、機密情報や未公開情報を入力しない運用を徹底する",
] as const;

const promptStarter = [
  "目的: 何に使う画像か（SNS/提案資料/バナーなど）",
  "被写体: 何を描くか（人物/製品/抽象表現など）",
  "スタイル: 写真風/イラスト/フラット/3D/水彩など（特定作家の模倣は避ける）",
  "構図: 俯瞰/寄り/余白/テキストを置くスペース",
  "制約: NG要素（ロゴ、人物の顔、過度な文字など）と出力比率",
] as const;

export default function AiImageGenerationGuidePage({ faqItems }: AiImageGenerationGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI画像生成ツール比較" },
          ]}
        />

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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI画像生成おすすめツール比較｜Google Gemini・Midjourney・ChatGPT画像生成の使い方と選び方【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI画像生成は「まず試す」までのハードルが下がり、SNS素材や提案資料の初稿づくりに活用しやすくなりました。一方で、ツールごとに得意分野や操作導線、商用利用の注意点が異なります。
            ここでは、Google Gemini（画像生成）・Midjourney・ChatGPT（画像生成）・Stable Diffusion・Adobe Fireflyを比較し、用途別の選び方と基本手順を整理します（「Nano Banana」はGeminiの通称として紹介されることがあります）。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            ※料金や提供機能は更新されるため、最新の条件は公式サイトで確認してください。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              まずは<strong className="font-semibold text-gray-900">目的（何の素材を作るか）</strong>を決めると、ツール選びとプロンプトがブレにくくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong className="font-semibold text-gray-900">Google Gemini（画像生成）</strong>は日本語で始めやすく、まず試したい人向きです（「Nano Banana」と呼ばれることもあります）。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong className="font-semibold text-gray-900">Midjourney</strong>は高品質なアート表現に強く、世界観づくりに向きます（Discord/公式UI）。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong className="font-semibold text-gray-900">ChatGPT（画像生成）</strong>は会話の流れで修正しやすく、文章作成と相性が良い傾向です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              商用利用は<strong className="font-semibold text-gray-900">規約・著作権・商標・肖像権</strong>の確認が必須です。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-ai-image-generation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI画像生成とは？（概要と用途）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI画像生成は、テキストで指示（プロンプト）を与えることで画像を作る仕組みです。業務では「完成品を一発で作る」よりも、「アイデアのたたき台や素材の初稿を増やす」用途で効果が出やすい傾向があります。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">まず押さえるプロンプトの型</h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {promptStarter.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="tool-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            主要ツール比較表
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「まず試す」なら始めやすさ、「表現品質」ならMidjourney、「会話で調整」ならChatGPT系、「自由度」ならStable Diffusionという整理がわかりやすいです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">始め方</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {toolComparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="py-4 px-4">{row.strengths}</td>
                    <td className="py-4 px-4">{row.howToStart}</td>
                    <td className="py-4 px-4">{row.caution}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="gemini-nano-banana" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Google Gemini（画像生成）の使い方
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「Nano Banana」は、Geminiの画像生成機能の通称として紹介されることがあります。実務では、文章で目的と制約を伝え、まずは小さく試して当たりの型を作るのが失敗しにくい方法です。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">ステップ（初心者向け）</h3>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Geminiを開き、画像生成（または画像関連）の機能を選びます。</li>
            <li className="pl-1 marker:text-gray-500">
              目的（例: SNS投稿用の背景）と、NG（例: ロゴや人物の顔を入れない）を先に書きます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              構図（余白の位置）と比率（例: 1:1 / 16:9）を指定し、まず1回生成します。
            </li>
            <li className="pl-1 marker:text-gray-500">
              良かった点を残しつつ、修正は1つずつ（色→構図→質感の順）追加します。
            </li>
          </ol>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="midjourney" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Midjourneyの使い方
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Midjourneyは高品質な表現が魅力で、雰囲気づくりの案出しに向きます。Discordまたは公式UIでプロンプトを送って生成し、候補からアップスケールやバリエーション作成を行います。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">ステップ（基本の流れ）</h3>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">DiscordでMidjourneyの案内に従い、利用設定を行います。</li>
            <li className="pl-1 marker:text-gray-500">生成したいイメージを文章で書き、比率や雰囲気を追記します。</li>
            <li className="pl-1 marker:text-gray-500">候補が出たら、良い方向の画像をアップスケールし、必要ならバリエーションを増やします。</li>
            <li className="pl-1 marker:text-gray-500">用途（バナー/資料）に合わせて、余白や文字載せスペースを調整します。</li>
          </ol>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="dalle" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT（画像生成）の使い方
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPT上で画像生成が利用できる場合、会話しながら「どこを直すか」を詰めやすいのが利点です。資料文章と画像を同じ会話内で整えたいときに相性が良い傾向があります。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">ステップ（会話で精度を上げる）</h3>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">用途とターゲット（誰に見せるか）を文章で共有します。</li>
            <li className="pl-1 marker:text-gray-500">NG条件（ロゴ、人物の顔、特定ブランドを連想させる要素など）を明記します。</li>
            <li className="pl-1 marker:text-gray-500">1回生成したら、良い点を維持しつつ修正点を箇条書きで伝えます。</li>
            <li className="pl-1 marker:text-gray-500">仕上げは、テキスト配置や余白などのデザイン調整を別ツールで行います。</li>
          </ol>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="stable-diffusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Stable Diffusionの使い方
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Stable Diffusion系は自由度が高い一方、設定やライセンス確認が重要です。初心者はまずクラウドやGUIツールで触り、必要になった段階でローカル実行を検討するとスムーズです。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">ステップ（安全に始める）</h3>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">目的に合う提供形態（クラウド/GUI/ローカル）を選びます。</li>
            <li className="pl-1 marker:text-gray-500">使うモデルや追加素材のライセンス（商用利用可否）を確認します。</li>
            <li className="pl-1 marker:text-gray-500">プロンプトの型を固定し、同じ条件で比較しながら設定を調整します。</li>
            <li className="pl-1 marker:text-gray-500">運用が固まったら、テンプレ化してチームで再現できる形にします。</li>
          </ol>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="business-use" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            業務での活用パターン
          </h2>
          <div className="mt-6 space-y-4">
            {usagePatterns.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="copyright" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            注意点（著作権・商用利用）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI画像生成は便利ですが、商用利用では「ツールの規約」と「第三者権利」の両方を確認する必要があります。判断が難しい場合は、社内の法務/コンプライアンスと相談しながら運用ルールを整えるのが安全です。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">チェックリスト</h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {copyrightChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
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

        <section className="mt-14 border-t border-slate-200 pt-12 pb-4">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けにわかりやすく解説｜ChatGPT・Claude・Geminiの違いと始め方【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/multimodal-ai-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                マルチモーダルAIとは？テキスト・画像・音声を横断する次世代AIを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-video-tool-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI動画生成ツールおすすめ比較｜用途別の選び方と始め方 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-presentation-workflow"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIでプレゼン資料を効率的に作る方法｜構成・デザイン・推敲まで | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/prompt-template-for-work"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="next-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次に画像生成を業務に組み込みたい方へ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            業務での使いどころ（SNS、提案資料、バナー）を決め、ルール（機密情報・権利確認・最終チェック）までセットで整えると、AI画像生成は継続的な時短になります。まずは無料セミナーで活用事例を確認し、個別相談で自社に合う運用の作り方を相談できます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーに参加する
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              個別相談を申し込む
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
