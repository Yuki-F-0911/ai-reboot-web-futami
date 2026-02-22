"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, RichTable, Callout } from "@/components/blog/ArticleBody";

type FAQItem = {
  question: string;
  answer: string;
};

type ChatgptPlanComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = [
  "ChatGPT 無料 有料 違い",
  "ChatGPT Plus Pro 比較 2026",
  "ChatGPT 料金 2026",
  "ChatGPT プラン 選び方",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "plan-diff", label: "無料・Plus・Proの違い" },
  { id: "free-or-plus", label: "無料で十分かの判断基準" },
  { id: "model-access", label: "GPT-5.2とGPT-5-Codexの差" },
  { id: "usecase-recommendation", label: "実務別おすすめプラン" },
  { id: "manage-plan", label: "プラン変更・解約方法" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const planComparisonRows = [
  {
    axis: "月額料金",
    free: "無料",
    plus: "20ドル",
    pro: "200ドル",
  },
  {
    axis: "GPT-5.2（標準）",
    free: "利用可（制限あり。上限到達時は軽量モデルへ切替）",
    plus: "利用可（Freeより高い上限）",
    pro: "利用可（最も高い上限）",
  },
  {
    axis: "GPT-5.2 Thinking",
    free: "利用可（制限付き）",
    plus: "利用可（拡張上限）",
    pro: "利用可（さらに拡張上限）",
  },
  {
    axis: "GPT-5.2 Pro",
    free: "不可",
    plus: "不可",
    pro: "利用可",
  },
  {
    axis: "GPT-5-Codex",
    free: "不可（有料プラン向け提供）",
    plus: "利用可",
    pro: "利用可",
  },
  {
    axis: "Codex agentアクセス",
    free: "なし",
    plus: "あり",
    pro: "拡張アクセス",
  },
  {
    axis: "向いている使い方",
    free: "試用・短時間の質問",
    plus: "日常業務の本格利用",
    pro: "高頻度の重いタスク運用",
  },
] as const;

const freeEnoughChecks = [
  "1日合計で20〜30往復程度の短いやり取りが中心で、長時間連続利用をしない",
  "画像生成・深い調査・コーディング支援を毎日回す予定はない",
  "上限到達時にminiへ切り替わっても、学習用途としては困らない",
  "まずは操作に慣れることを優先し、課金判断を1〜2週間後に行う",
] as const;

const plusUpgradeChecks = [
  "仕事で毎日使うため、無料上限で止まる回数を減らしたい",
  "提案書、メール、資料作成などで出力品質の安定性を上げたい",
  "GPT-5.2 ThinkingやCodex agentを使って、作業の深掘りをしたい",
  "Proほどの高額投資は不要だが、実務で使える上限は確保したい",
] as const;

const modelAccessRows = [
  {
    model: "GPT-5.2（標準）",
    feature: "日常の相談、文章作成、要約、調査の基本軸",
    free: "制限付き。上限到達時は軽量モデルへ切り替わる場合あり",
    paid: "Plus/ProはFreeより高い上限（Proが最大）",
  },
  {
    model: "GPT-5.2 Thinking",
    feature: "比較検討や条件分岐が多い深掘りタスク",
    free: "制限付きで利用可",
    paid: "Plus/Proは利用可能（Proが最大上限）",
  },
  {
    model: "GPT-5-Codex",
    feature: "コーディング特化（Codex app / CLI / IDE / web）",
    free: "使えない（有料プラン対象）",
    paid: "Plus/Proで利用可。ProはCodex拡張アクセス",
  },
] as const;

const usecaseRows = [
  {
    user: "学習・日常利用",
    tasks: "調べもの、要約、文章の下書き、学習計画づくり",
    plan: "Freeから開始",
    reason: "まずは使い方を固める段階。上限に当たる頻度を観測してから課金判断が合理的",
  },
  {
    user: "副業プレイヤー",
    tasks: "提案文、SNS案、営業文、簡易リサーチを毎日作る",
    plan: "Plus",
    reason: "作業量が増えると無料上限で停止しやすい。20ドル投資で回転率が上がるケースが多い",
  },
  {
    user: "エンジニア",
    tasks: "設計相談、コード生成、改修提案、デバッグ支援",
    plan: "Plus開始、重負荷ならPro",
    reason: "Codexを使う頻度が高く、待ち時間や上限が収益に直結するならProの判断余地がある",
  },
  {
    user: "ビジネス用途（企画/管理職）",
    tasks: "会議要約、資料骨子、意思決定の比較検討",
    plan: "Plus",
    reason: "コストと機能のバランスが良い。長時間連続で高負荷分析を回す場合のみProを検討",
  },
] as const;

type LineCtaBoxProps = {
  className: string;
  slug: string;
};

function LineCtaBox({
  className,
  slug,
}: LineCtaBoxProps) {
  const lineHref = `${lineUrl}?${new URLSearchParams({
    src: "blog",
    slug,
  }).toString()}`;

  return (
    <section className={className}>
      <p className="text-base font-semibold text-gray-900">AIで仕事を変えたい方へ｜LINEで無料相談する</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">経産省リスキリング補助金対象の100日間プログラム「AIリブートアカデミー」について、LINEで気軽に相談できます。補助金の使い方・カリキュラム・学習イメージを無料でお伝えします。</p>
      <a
        href={lineHref}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで無料相談する（登録無料）
      </a>
    </section>
  );
}

export default function ChatgptPlanComparisonPage({ faqItems }: ChatgptPlanComparisonPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPT無料・Plus・Proの違いを比較" },
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
                title="ChatGPT無料・Plus・Proの違いを比較｜2026年版の料金と選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPT無料・Plus・Proの違いを比較｜2026年版の料金と選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月21日（確認日）</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ChatGPTを始めると、最初に迷うのが「無料のままで十分か」「PlusやProに課金すべきか」です。料金差だけを見ても判断しにくく、実際は使えるモデルと上限で体感が大きく変わります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            この記事では、2026年2月21日時点のOpenAI公式情報を基準に、無料・Plus・Proの違い、GPT-5.2とGPT-5-Codexのアクセス制限、用途別の選び方、変更・解約手順まで初心者向けに整理します。
          </p>
        </motion.header>

        <section className="mt-8 rounded-lg border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-base font-bold text-gray-900">この記事でわかること</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">ChatGPT無料・Plus（月額20ドル）・Pro（月額200ドル）の料金と利用上限の比較（2026年2月時点）</li>
            <li className="pl-1">GPT-5.2とGPT-5-Codexのプランごとのアクセス差</li>
            <li className="pl-1">用途・利用頻度別のおすすめプランの選び方</li>
            <li className="pl-1">変更・解約の手順（Web/iOS/Android別）</li>
          </ul>
        </section>

        <Callout type="info" title="この記事の結論">
          ChatGPTのプラン選びは料金より「利用上限」と「使うモデル」で決めるのが正解です。毎日業務で使うならまずPlus、Proは高頻度のコーディングや重い比較分析を長時間回す人向けです。無料で始める場合も、上限到達が続くなら早めにPlusへ切り替えると作業停止を減らせます。GPT-5-Codexを本格利用したいなら有料プランが前提です。
        </Callout>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT実践テクニック
          </Link>
          ・
          <Link href="/academy/blog/ai-free-plan-comparison-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI無料プラン比較
          </Link>
          ・
          <Link href="/academy/blog/gpt-vs-claude-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            GPTとClaudeの性能比較
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-templates-50" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプトテンプレート50選
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
            title="要点まとめ"
            items={[
              "Plusは月額20ドル、Proは月額200ドル。無料は料金ゼロですが上限が小さい設計です。",
              "無料でもGPT-5は使えますが、上限に達すると軽量モデルへ切り替わるなど制限があります。",
              "GPT-5-Codexは有料ChatGPTプラン向けです。コーディング用途の頻度が高いほどPlus/Proの差が出ます。",
              "初心者はFreeで開始し、上限に当たる頻度と作業時間を2週間記録してからPlus判定する方法が失敗しにくいです。",
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
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6"
            slug="chatgpt-plan-comparison"
          />
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="plan-diff"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="plan-diff">
            無料・Plus・Proの料金と機能差は「上限」と「使えるモデル」で見る
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            初心者向けに結論から言うと、差が出るのは価格より上限です。無料でも始められますが、毎日使うほど上限差が効いてきます。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">比較軸</th>
                <th className="py-4 px-6 font-bold text-gray-900">Free</th>
                <th className="py-4 px-6 font-bold text-gray-900">Plus</th>
                <th className="py-4 px-6 font-bold text-gray-900">Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {planComparisonRows.map((row) => (
                <tr key={row.axis} className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.axis}</th>
                  <td className="py-4 px-6 text-gray-700">{row.free}</td>
                  <td className="py-4 px-6 text-gray-700">{row.plus}</td>
                  <td className="py-4 px-6 text-gray-700">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            補足として、PlusとProの料金はOpenAI Helpでそれぞれ「20ドル/月」「200ドル/月」と案内されています。上限・機能は更新されるため、必ず最新の公式ページで再確認してください。
          </p>
          <p className="mt-3 text-xs leading-6 text-gray-500">情報確認日: 2026年2月21日</p>
        </motion.section>

        <motion.section
          id="free-or-plus"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="free-or-plus">無料で十分な人の条件と、Plusに課金すべき人の条件</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「無料で十分か」は、月額ではなく利用密度で判断します。無料プランでもGPT-5は使えますが、利用上限は需要や会話の重さで変動します。添付ファイルや長い会話を使うほど上限到達が早くなるため、実利用で確認するのが確実です。
          </p>

          <ArticleH3>無料で十分な人のチェック</ArticleH3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {freeEnoughChecks.map((check) => (
              <li key={check} className="pl-1 marker:text-gray-500">
                {check}
              </li>
            ))}
          </ul>

          <ArticleH3>Plusに課金すべき人のチェック</ArticleH3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {plusUpgradeChecks.map((check) => (
              <li key={check} className="pl-1 marker:text-gray-500">
                {check}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            スマホでまず始めたい場合は
            <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTをスマホで始める方法
            </Link>
            を先に実施し、日々の利用回数を記録してから課金判断すると無駄が減ります。
          </p>
        </motion.section>

        <motion.section
          id="model-access"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="model-access">
            GPT-5.2（標準）とGPT-5-Codex（コーディング特化）のアクセス制限はここが違う
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            GPT-5.2はChatGPT標準の利用軸です。一方でGPT-5-Codexはコーディング特化モデルとして、Codex app・CLI・IDE連携などの面で提供されます。ポイントは、GPT-5-Codexが有料プラン対象であることです。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">モデル</th>
                <th className="py-4 px-6 font-bold text-gray-900">用途</th>
                <th className="py-4 px-6 font-bold text-gray-900">Free</th>
                <th className="py-4 px-6 font-bold text-gray-900">Plus/Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {modelAccessRows.map((row) => (
                <tr key={row.model} className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.model}</th>
                  <td className="py-4 px-6 text-gray-700">{row.feature}</td>
                  <td className="py-4 px-6 text-gray-700">{row.free}</td>
                  <td className="py-4 px-6 text-gray-700">{row.paid}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            エンジニア用途で比較したい場合は、
            <Link href="/academy/blog/gpt-vs-claude-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GPT系とClaude系の比較記事
            </Link>
            も合わせて読むと、モデル選択の視点を増やせます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox
            slug="chatgpt-plan-comparison"
          />
        </motion.section>

        <motion.section
          id="usecase-recommendation"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="usecase-recommendation">実務別おすすめプラン（副業・学習・エンジニア・ビジネス）</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            迷ったときは、まず「1週間で何時間使うか」を先に決めると選びやすくなります。利用時間が短いのに高額プランへ進むと、費用対効果が出にくくなります。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">利用タイプ</th>
                <th className="py-4 px-6 font-bold text-gray-900">主な作業</th>
                <th className="py-4 px-6 font-bold text-gray-900">推奨</th>
                <th className="py-4 px-6 font-bold text-gray-900">判断理由</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {usecaseRows.map((row) => (
                <tr key={row.user} className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.user}</th>
                  <td className="py-4 px-6 text-gray-700">{row.tasks}</td>
                  <td className="py-4 px-6 text-gray-700">{row.plan}</td>
                  <td className="py-4 px-6 text-gray-700">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            学習段階の人は、
            <Link href="/academy/blog/how-to-learn-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AI学習ロードマップ
            </Link>
            と組み合わせて、課金前に「何に使うか」を定義しておくと継続しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="manage-plan"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="manage-plan">プラン変更・解約の方法（Web/iOS/Android）</ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            変更・解約は「どこで契約したか」で手順が変わります。Web契約なのにApp Store側で探すと解約できないため、契約経路を先に確認してください。
          </p>

          <ArticleH3>Webで契約した場合</ArticleH3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">ChatGPT画面右上のプロフィールから設定を開く</li>
            <li className="pl-1">`Subscription` を開き、`Manage` からプラン管理へ進む</li>
            <li className="pl-1">変更または解約を選択する（解約は次回請求24時間前までが安全）</li>
          </ol>

          <ArticleH3>iOSで契約した場合</ArticleH3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">iPhoneの `設定` → Apple ID → `サブスクリプション` を開く</li>
            <li className="pl-1">ChatGPTを選び、解約または変更を実行する</li>
            <li className="pl-1">FreeからProへの直接アップグレードはWebのみ対応なので注意する</li>
          </ol>

          <ArticleH3>Androidで契約した場合</ArticleH3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">Google Playの定期購入管理を開く</li>
            <li className="pl-1">ChatGPTサブスクリプションを選択して解約する</li>
            <li className="pl-1">同一アカウントでWebとアプリの二重契約になっていないか確認する</li>
          </ol>

          <Callout type="tip" title="支払い方法の確認">
            日本での支払いは、Web契約ではクレジットカード/デビットカードが公式案内です。iOSはApple課金、AndroidはGoogle課金になるため、請求明細の確認先も分かれます。Apple Payの表示可否はApple ID設定と地域条件に依存するため、購入画面で最終確認してください。
          </Callout>
        </motion.section>

        <motion.section
          className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter/40 p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            料金比較を終えたあとに本当に効いてくるのは、「どの業務課題にAIを当てるか」を自分で設計できるかです。AIリブートアカデミーでは、生成AI活用力の習得に加えて、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまでを一体で進めます。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            ツール名に振り回されず、業務成果と次のキャリアに接続する学び方を整えたい方は、無料カウンセリングで現在地を言語化してみてください。
          </p>
          <Link
            href="/academy"
            className="mt-5 inline-flex items-center rounded-lg bg-will-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-will-primary/90"
          >
            AIリブートアカデミーを確認する
          </Link>
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
          <RichFAQ items={faqItems} />
        </motion.section>

        <section id="related-links" className="mt-12 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-bold text-gray-900">あわせて読みたい</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-blue-700 underline hover:text-blue-900">ChatGPTをスマホで始める方法</Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-blue-700 underline hover:text-blue-900">ChatGPT実践テクニック集</Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-blue-700 underline hover:text-blue-900">生成AI無料プラン比較2026</Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-blue-700 underline hover:text-blue-900">ChatGPT・Claude初心者ガイド</Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-comparison" className="text-blue-700 underline hover:text-blue-900">GPTとClaudeの性能比較ガイド</Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-templates-50" className="text-blue-700 underline hover:text-blue-900">ChatGPTプロンプトテンプレート50選</Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-voice-mode-guide" className="text-blue-700 underline hover:text-blue-900">ChatGPT音声モード活用ガイド</Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-hallucination-fact-check-guide" className="text-blue-700 underline hover:text-blue-900">AIのハルシネーション対策ガイド</Link>
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
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6"
            slug="chatgpt-plan-comparison"
          />
          <p className="mt-4 text-xs leading-6 text-gray-500">
            ※料金・上限・機能は2026年2月21日時点の公開情報に基づきます。最新情報は公式サイトで再確認してください。
          </p>
        </motion.section>

        <motion.section
          className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-sm font-bold text-gray-900">参照した主な一次情報</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs leading-6 text-gray-600">
            <li className="pl-1 marker:text-gray-500">OpenAI Help: What is ChatGPT Plus? / What is ChatGPT Pro?</li>
            <li className="pl-1 marker:text-gray-500">OpenAI Help: GPT-5.2 in ChatGPT</li>
            <li className="pl-1 marker:text-gray-500">OpenAI: Introducing GPT-5-Codex</li>
            <li className="pl-1 marker:text-gray-500">OpenAI Help: Multi-currency billing / cancellation guides</li>
          </ul>
        </motion.section>
      </article>
    </main>
  );
}
