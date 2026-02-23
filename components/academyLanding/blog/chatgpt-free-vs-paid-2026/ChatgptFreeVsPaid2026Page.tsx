"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, RichTable, Callout } from "@/components/blog/ArticleBody";

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

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = [
  "ChatGPT 課金 すべき",
  "ChatGPT 無料 有料 違い",
  "ChatGPT Plus 料金",
  "ChatGPT 月額 元が取れる",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "free-features", label: "無料版でできること（2026年2月時点）" },
  { id: "plus-features", label: "Plus版でできること（月額20ドル）" },
  { id: "pro-note", label: "Pro版（月額200ドル）は必要か" },
  { id: "decision", label: "あなたは課金すべき？ユースケース別判定" },
  { id: "alternatives", label: "ChatGPT以外の選択肢" },
  { id: "final-conclusion", label: "正直な結論" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const comparisonRows = [
  {
    axis: "月額料金",
    free: "0円",
    plus: "20ドル（約3,000円）",
    pro: "200ドル（約30,000円）",
  },
  {
    axis: "主要モデル",
    free: "GPT-4o（利用制限あり）",
    plus: "GPT-4o（拡張）+ GPT-o3系へアクセス",
    pro: "全機能を高上限で利用可能",
  },
  {
    axis: "画像生成",
    free: "DALL-E 3（制限あり）",
    plus: "DALL-E 3（制限緩和）",
    pro: "さらに高い上限",
  },
  {
    axis: "ファイル分析",
    free: "基本利用のみ",
    plus: "PDF・Excel等の分析を実務で使いやすい",
    pro: "高頻度の分析でも止まりにくい",
  },
  {
    axis: "カスタムGPTs",
    free: "利用中心",
    plus: "作成・利用が可能",
    pro: "作成・利用が可能（高頻度運用向け）",
  },
  {
    axis: "向いている人",
    free: "週に数回のライト利用",
    plus: "毎日の仕事利用",
    pro: "ヘビーユーザー・開発者",
  },
] as const;

const freePoints = [
  "GPT-4oへのアクセス（ただし利用制限あり）",
  "画像生成（DALL-E 3、制限あり）",
  "Webブラウジング（制限あり）",
  "スマホアプリでの利用（音声会話含む）",
  "意外と無料でもできることが増えたのは事実",
] as const;

const plusPoints = [
  "GPT-4oの利用枠が拡張され、GPT-o3系（高度推論モデル）も使いやすくなる",
  "画像生成の制限が緩和され、実務で継続利用しやすい",
  "ファイルアップロードと分析（PDF・Excel等）が実用段階になる",
  "カスタムGPTsの作成・利用が可能",
  "新機能の先行アクセス対象になりやすい",
  "長い会話を継続しやすく、文脈保持が安定しやすい",
] as const;

const shouldPayCases = [
  "仕事でAIを毎日使う人",
  "長い文書を分析したい人",
  "複雑な問題（数学・コーディング等）を解きたい人",
  "GPT-4oの制限に毎日引っかかる人",
] as const;

const freeEnoughCases = [
  "週に数回、短い質問をする程度",
  "翻訳・要約程度の用途",
  "まだAIに慣れていない段階",
  "月額20ドルが気になる人",
] as const;

const decisionRows = [
  {
    type: "課金を検討すべき",
    user: "営業・企画・管理職で毎日使う",
    usage: "提案書、メール、会議整理を毎日AIで回す",
    recommendation: "Plusが有力",
  },
  {
    type: "課金を検討すべき",
    user: "資料分析が多い人",
    usage: "PDF・Excelの読み込みを繰り返す",
    recommendation: "Plusが有力",
  },
  {
    type: "無料で十分",
    user: "まず試している段階",
    usage: "週2〜3回、短い質問と要約中心",
    recommendation: "Free継続",
  },
  {
    type: "無料で十分",
    user: "月額固定費を増やしたくない人",
    usage: "使う日と使わない日の差が大きい",
    recommendation: "Free継続",
  },
] as const;

function BlogLineCta({ slug }: { slug: string }) {
  const href = `${lineUrl}?${new URLSearchParams({ src: "blog", slug }).toString()}`;

  return (
    <LineCtaBox
      className="border-green-200 bg-green-50"
      href={href}
      title="AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）"
      description="まずは無料で、AI活用の判断軸を増やしませんか。最新アップデートの要点、仕事に直結する使い方、迷いやすい論点の整理を毎週お届けします。"
      buttonLabel="LINEで週1AI通信を受け取る（無料）"
    />
  );
}

export default function ChatgptFreeVsPaid2026Page({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPTに課金すべき？無料と有料の違い【2026年版】" },
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
                title="ChatGPTに課金すべき？無料と有料（Plus/Pro）の違いを正直に解説【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTに課金すべき？無料と有料（Plus/Pro）の違いを正直に解説【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月24日 / 情報確認日: 2026年2月23日</p>

          <p className="mt-6 text-base leading-8 text-gray-700">
            ChatGPTを使い始めたとき、必ず直面する疑問：月額20ドル、払うべき？
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            無料版で十分なのか、有料版に変えたら何が変わるのか。ネットには「絶対課金すべき！」という意見も「無料で十分」という意見も溢れていて迷いますよね。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            この記事では、2026年現在の実際の違いを正直にまとめ、あなたの使い方に合わせた判断基準をお伝えします。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-free-guide-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT無料版の最新ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプラン比較
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-plus-honest-review-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT Plus正直レビュー
          </Link>
          ・
          <Link href="/academy/blog/gpt-vs-claude-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            GPTとClaudeの比較
          </Link>
          も参考になります。
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
            title="要点まとめ"
            items={[
              "無料版でもGPT-4o・画像生成・Webブラウジング・音声会話まで使えるため、初心者が試す入口としては十分に強いです。",
              "Plusは月額20ドル。利用上限、ファイル分析、カスタムGPTs、長い会話の継続で差が出ます。",
              "Proは月額200ドルで、一般初心者には不要。ヘビーユーザーや開発者向けです。",
              "最も失敗しにくい順番は、まず1ヶ月無料版を使い倒してから課金判断することです。",
            ]}
          />
        </motion.section>

        <Callout type="info" title="この記事の前提">
          料金や機能は更新されます。この記事は2026年2月23日時点の公開情報をもとに整理しています。契約前に公式の料金・ヘルプページで最終確認してください。
        </Callout>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <BlogLineCta slug="chatgpt-free-vs-paid-2026" />
        </motion.section>

        <motion.section
          id="free-features"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="free-features">無料版（Free）でできること（2026年現在）</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            先に結論です。2026年の無料版は、以前より明確に強くなっています。最低限の試用ではなく、実務の入口としても使えるレベルです。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-8 text-gray-700">
            {freePoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ただし、制限は確実にあります。特に利用回数が多い日、長い会話、重い推論タスクでは上限に達しやすく、そこで「課金した方が速いか」を判断する段階に入ります。
          </p>
        </motion.section>

        <motion.section
          id="plus-features"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="plus-features">Plus版（月額20ドル）でできること</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            Plusの本質は「機能がゼロから増える」というより、「止まらずに使える時間が増える」ことです。毎日使う人ほど差が出ます。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-8 text-gray-700">
            {plusPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>

          <RichTable className="mt-8">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 font-bold text-gray-900">比較軸</th>
                <th className="px-6 py-4 font-bold text-gray-900">Free</th>
                <th className="px-6 py-4 font-bold text-gray-900">Plus</th>
                <th className="px-6 py-4 font-bold text-gray-900">Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((row) => (
                <tr key={row.axis} className="hover:bg-gray-50/60 transition-colors">
                  <th className="whitespace-nowrap bg-gray-50/40 px-6 py-4 text-gray-900">{row.axis}</th>
                  <td className="px-6 py-4 text-gray-700">{row.free}</td>
                  <td className="px-6 py-4 text-gray-700">{row.plus}</td>
                  <td className="px-6 py-4 text-gray-700">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
        </motion.section>

        <motion.section
          id="pro-note"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="pro-note">Pro版（月額200ドル）は今回どう考えるか</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            Proは明確に上級者向けです。一般初心者には不要で、ヘビーユーザー・開発者・高頻度運用者が対象です。この記事では「まずFreeかPlusか」を判断対象にし、Proは必要になってから検討すれば十分です。
          </p>
        </motion.section>

        <motion.section
          id="decision"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="decision">判断基準：あなたは課金すべき？（ユースケース別）</ArticleH2>

          <ArticleH3>課金すべき人</ArticleH3>
          <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-gray-700">
            {shouldPayCases.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>

          <ArticleH3>無料で十分な人</ArticleH3>
          <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-gray-700">
            {freeEnoughCases.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>

          <RichTable className="mt-8">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 font-bold text-gray-900">判定</th>
                <th className="px-6 py-4 font-bold text-gray-900">ユーザー像</th>
                <th className="px-6 py-4 font-bold text-gray-900">利用パターン</th>
                <th className="px-6 py-4 font-bold text-gray-900">推奨</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {decisionRows.map((row, index) => (
                <tr key={`${row.user}-${index}`} className="hover:bg-gray-50/60 transition-colors">
                  <td className="px-6 py-4 text-gray-900">{row.type}</td>
                  <td className="px-6 py-4 text-gray-700">{row.user}</td>
                  <td className="px-6 py-4 text-gray-700">{row.usage}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{row.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>

          <Callout type="tip" title="迷ったときの実行順">
            まず1ヶ月無料版を使い倒してから判断するのが最も合理的です。制限に当たる頻度、用途、時短効果を記録してから課金すると、後悔が減ります。
          </Callout>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <BlogLineCta slug="chatgpt-free-vs-paid-2026-mid" />
        </motion.section>

        <motion.section
          id="alternatives"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="alternatives">ChatGPT以外の選択肢にも触れておく</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            ChatGPTだけが選択肢ではありません。無料で試しながら、自分の用途に合うサービスを見極めるのが現実的です。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-8 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Claude（Anthropic）: 長文処理・文章作成が得意。無料版も有能。
            </li>
            <li className="pl-1 marker:text-gray-500">
              Gemini（Google）: Googleサービスとの連携が強み。無料版で試せる。
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「どれが最強か」より「自分の用途で続けやすいか」で決める方が、結果的にコストと時間の無駄を減らせます。
          </p>
        </motion.section>

        <motion.section
          id="final-conclusion"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="final-conclusion">正直な結論</ArticleH2>
          <p className="text-base leading-8 text-gray-700">
            AIを日常的に仕事に使いたいなら、月額20ドルは十分元が取れる。これは多くの実務ユーザーに当てはまる判断です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            でも最初から課金する必要はない。無料版で慣れてから判断して、というのが正直な答えです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            迷ったら、まず1ヶ月無料版を本気で使ってみてください。そこで見えた課題に対して、Plusにするか、他サービスを併用するかを決めるのが最短です。
          </p>
        </motion.section>

        <motion.section
          className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter/40 p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">AIをもっと活用するための学び方を探しているなら</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-gray-700">
            <li className="pl-1 marker:text-will-primary">生成AI活用力: 実務で使える判断軸を体系化する</li>
            <li className="pl-1 marker:text-will-primary">自己理解・キャリアデザイン: 強みと価値観を言語化し、次の一歩を具体化する</li>
            <li className="pl-1 marker:text-will-primary">仲間と共に学ぶ環境: 対話と協働で継続学習の速度を高める</li>
          </ul>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ツール選びで終わらず、仕事とキャリア全体に活かす学習設計を考えたい方は、LINEから相談できます。
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
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={[...faqItems]} />
        </motion.section>
      </article>
    </main>
  );
}
