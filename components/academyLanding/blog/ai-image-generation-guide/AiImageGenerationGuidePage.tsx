"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, RichTable, Callout } from "@/components/blog/ArticleBody";

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
  { id: "faq", label: "よくある質問（FAQ）" },
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
    caution: "利用可否・回数・出力仕様（GPT Image / DALL·E 3等の提供状況含む）はプランや提供状況で変わるため公式で確認する。",
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
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
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
                title="AI画像生成おすすめツール比較｜Google Gemini・Midjourney・ChatGPT画像生成の使い方と選び方【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI画像生成おすすめツール比較｜Google Gemini・Midjourney・ChatGPT画像生成の使い方と選び方【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            まずは目的（何の素材を作るか）を決めると、ツール選びとプロンプトがブレにくくなります。
            この記事では、Gemini/Midjourney/ChatGPT/Stable Diffusion/Fireflyを用途別に比較し、始め方・使いどころ・注意点を結論先出しで整理します（「Nano Banana（Pro）」はGeminiの画像生成機能の呼称として紹介されることがあります）。
            AI画像生成は手軽になった一方で、「どのツールを選ぶべきか」「商用利用は大丈夫か」で迷いやすくなりました。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            ※料金や提供機能は更新されるため、最新の条件は公式サイトで確認してください。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIとは？
          </Link>
          ・
          <Link href="/academy/blog/gemini-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            Gemini入門ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-side-business-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI副業ガイド
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ（AIO向け：結論先出し）"
            items={[
              "まずは目的（何の素材を作るか）を決めると、ツール選びとプロンプトがブレにくくなります。",
              "Google Gemini（画像生成）は日本語で始めやすく、まず試したい人向きです（「Nano Banana（Pro）」と呼ばれることもあります）。",
              "Midjourneyは高品質なアート表現に強く、世界観づくりに向きます（Discord/公式UI）。",
              "ChatGPT（画像生成）は会話の流れで修正しやすく、文章作成と相性が良い傾向です。",
              "商用利用は規約・著作権・商標・肖像権の確認が必須です。",
            ]}
          />
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-is-ai-image-generation">
            AI画像生成とは？（概要と用途）
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI画像生成は、テキストで指示（プロンプト）を与えることで画像を作る仕組みです。業務では「完成品を一発で作る」よりも、「アイデアのたたき台や素材の初稿を増やす」用途で効果が出やすい傾向があります。
          </p>
          <ArticleH3>まず押さえるプロンプトの型</ArticleH3>
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="tool-comparison">
            主要ツール比較表
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「まず試す」なら始めやすさ、「表現品質」ならMidjourney、「会話で調整」ならChatGPT系、「自由度」ならStable Diffusionという整理がわかりやすいです。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 font-semibold text-gray-900">ツール</th>
                <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                <th className="py-3 px-4 font-semibold text-gray-900">始め方</th>
                <th className="py-3 px-4 font-semibold text-gray-900">注意点</th>
                <th className="py-3 px-4 font-semibold text-gray-900">向いている人</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {toolComparisonRows.map((row) => (
                <tr key={row.tool} className="hover:bg-gray-50/50 transition-colors align-top">
                  <th className="py-4 px-4 font-semibold text-gray-900 whitespace-nowrap">{row.tool}</th>
                  <td className="py-4 px-4">{row.strengths}</td>
                  <td className="py-4 px-4">{row.howToStart}</td>
                  <td className="py-4 px-4">{row.caution}</td>
                  <td className="py-4 px-4">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="gemini-nano-banana">
            Google Gemini（画像生成）の使い方
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「Nano Banana（Pro）」は、Geminiの画像生成機能の呼称として紹介されることがあります。実務では、文章で目的と制約を伝え、まずは小さく試して当たりの型を作るのが失敗しにくい方法です。
          </p>
          <ArticleH3>ステップ（初心者向け）</ArticleH3>
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="midjourney">
            Midjourneyの使い方
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Midjourneyは高品質な表現が魅力で、雰囲気づくりの案出しに向きます。Discordまたは公式UIでプロンプトを送って生成し、候補からアップスケールやバリエーション作成を行います。
          </p>
          <ArticleH3>ステップ（基本の流れ）</ArticleH3>
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="dalle">
            ChatGPT（画像生成）の使い方
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPT上で画像生成が利用できる場合、会話しながら「どこを直すか」を詰めやすいのが利点です。資料文章と画像を同じ会話内で整えたいときに相性が良い傾向があります。
          </p>
          <ArticleH3>ステップ（会話で精度を上げる）</ArticleH3>
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="stable-diffusion">
            Stable Diffusionの使い方
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Stable Diffusion系は自由度が高い一方、設定やライセンス確認が重要です。初心者はまずクラウドやGUIツールで触り、必要になった段階でローカル実行を検討するとスムーズです。
          </p>
          <ArticleH3>ステップ（安全に始める）</ArticleH3>
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="business-use">
            業務での活用パターン
          </ArticleH2>
          <div className="mt-6 space-y-4">
            {usagePatterns.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.title}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
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
          <ArticleH2 id="copyright">
            注意点（著作権・商用利用）
          </ArticleH2>
          <Callout type="warning" title="商用利用の注意点">
            AI画像生成は便利ですが、商用利用では「ツールの規約」と「第三者権利」の両方を確認する必要があります。判断が難しい場合は、社内の法務/コンプライアンスと相談しながら運用ルールを整えるのが安全です。
          </Callout>
          <ArticleH3>チェックリスト</ArticleH3>
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">
            よくある質問（FAQ）
          </ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pt-12 pb-4">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
            関連リンク
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                生成AIとは？初心者向けにわかりやすく解説｜ChatGPT・Claude・Geminiの違いと始め方【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/multimodal-ai-intro" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                マルチモーダルAIとは？テキスト・画像・音声を横断する次世代AIを解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-video-tool-comparison" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AI動画生成ツールおすすめ比較｜用途別の選び方と始め方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-presentation-workflow" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AIでプレゼン資料を効率的に作る方法｜構成・デザイン・推敲まで
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化
              </Link>
            </li>
            <li>
              <Link href="/academy" className="block rounded-xl border border-gray-100 p-4 text-sm text-gray-700 hover:border-orange-200 hover:bg-orange-50 transition-all">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="まとめ"
            items={[
              "まずは目的（何の素材を作るか）を決めると、ツール選びとプロンプトがブレにくくなります。",
              "Google Gemini（画像生成）は日本語で始めやすく、まず試したい人向きです（「Nano Banana（Pro）」と呼ばれることもあります）。",
              "Midjourneyは高品質なアート表現に強く、世界観づくりに向きます（Discord/公式UI）。",
              "ChatGPT（画像生成）は会話の流れで修正しやすく、文章作成と相性が良い傾向です。",
              "商用利用は規約・著作権・商標・肖像権の確認が必須です。",
            ]}
          />
        </motion.section>

        <motion.section
          id="next-step"
          className="mt-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-floating"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold">
            次に画像生成を業務に組み込みたい方へ
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            業務での使いどころ（SNS、提案資料、バナー）を決め、ルール（機密情報・権利確認・最終チェック）までセットで整えると、AI画像生成は継続的な時短になります。まずは無料セミナーで活用事例を確認し、個別相談で自社に合う運用の作り方を相談できます。
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-xl bg-will-primary px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-will-primary/90 active:scale-[0.98]"
            >
              無料セミナーに参加する
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              個別相談を申し込む
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
