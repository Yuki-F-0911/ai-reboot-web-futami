"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type GithubCopilotGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["GitHub Copilot 使い方", "AIコーディング", "VS Code"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is", label: "GitHub Copilotとは" },
  { id: "setup", label: "導入（VS Codeの例）" },
  { id: "how-to", label: "使い方：精度を上げるコツ" },
  { id: "workflow", label: "実務フロー：テストとレビュー" },
  { id: "team", label: "チーム導入の注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related", label: "関連記事（内部リンク）" },
  { id: "cta", label: "AIリブートアカデミーで学ぶ" },
] as const;

const tips = [
  {
    title: "1. 先に「制約」を書く",
    body: "型、入力/出力、エラー処理、パフォーマンス要件などを短く明文化すると、提案のブレが減ります。",
  },
  {
    title: "2. 例（サンプル）を置く",
    body: "期待する入出力例や、似た関数の実装例が近くにあると、文脈の取り違えが起きにくくなります。",
  },
  {
    title: "3. 小さく分割する",
    body: "「関数1つ」「テスト1ケース」など小さな単位にすると、生成→検証→修正が速くなります。",
  },
  {
    title: "4. 説明できないコードは採用しない",
    body: "提案をそのまま貼るのではなく、何をしているかを理解してから入れます。ここが品質の分かれ目です。",
  },
] as const;

const workflowSteps = [
  {
    title: "下書きを作る（生成）",
    body: "まずは「動く形」を作り、足りない例外処理・境界条件を洗い出します。",
  },
  {
    title: "テストで固定する（検証）",
    body: "生成コードの品質はテストで守ります。バグが出る箇所ほど先にテストを書きます。",
  },
  {
    title: "レビューで担保する（合意）",
    body: "意図・影響範囲・安全性をレビューで確認します。AI支援が入るほどレビューの重要性は上がります。",
  },
] as const;

export default function GithubCopilotGuidePage({ faqItems }: GithubCopilotGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "GitHub Copilotの使い方" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="GitHub Copilotの使い方｜導入・設定・効率化のコツを初心者向けに解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            GitHub Copilotの使い方｜導入・設定・効率化のコツを初心者向けに解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            導入は「拡張機能→サインイン→有効化」で完了します（IDEにより手順は多少異なります）。
            Copilotとは、「実装の下書きを速くする道具」で、品質は制約の明文化＋テスト＋レビューで守ります。
            Copilotを入れてみたけど、提案がブレる/レビューが不安…という悩みがよく出ます。
          </p>
        </motion.header>

        <figure className="my-8">
          <Image
            src="/images/blog/github-copilot-guide/slide-1.png"
            alt="GitHub Copilot導入・活用ガイド タイトルスライド"
            width={800}
            height={450}
            className="rounded-lg"
            priority
          />
        </figure>

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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">導入は「拡張機能→サインイン→有効化」で完了します（IDEにより手順は多少異なります）。</li>
            <li className="pl-1 marker:text-gray-500">精度を上げる鍵は「制約・例・分割」。一度に大きく生成しないこと。</li>
            <li className="pl-1 marker:text-gray-500">生成コードは必ずテストで固定し、レビューで意図と安全性を担保します。</li>
            <li className="pl-1 marker:text-gray-500">チーム導入は、機密情報の扱い・ログ・ポリシーを先に決めると失敗しにくいです。</li>
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
          <h2 id="what-is" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GitHub Copilotとは
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: Copilotは「IDE上で書く/読む/直す」を加速する開発者向けAIで、曖昧な要件のまま使うと意図と違う実装が混ざりやすいです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            GitHub Copilotは、コード補完やチャットを通じて、実装・リファクタ・テスト作成などを支援する開発者向けAIです。強いのは「手を動かす」
            部分で、要件や制約が曖昧なまま使うと、見た目は動くが意図と違うコードが混ざりやすくなります。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/github-copilot-guide/slide-2.png"
              alt="Copilotは実装の下書きを加速する道具（手を動かす作業に向く）"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
            <p className="font-semibold text-slate-800">向いている使い方</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li className="pl-1 marker:text-slate-400">定型コードの下書き（DTO/バリデーション/簡単なCRUD）</li>
              <li className="pl-1 marker:text-slate-400">既存コードの改善（命名・抽出・重複排除）</li>
              <li className="pl-1 marker:text-slate-400">ユニットテストの雛形作成（境界条件の洗い出し）</li>
            </ul>
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
          <h2 id="setup" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入（VS Codeの例）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: まずは拡張機能を入れてサインインし、小さな関数で提案の癖を掴むところまでやればOKです。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/github-copilot-guide/slide-3.png"
              alt="導入は拡張機能の追加→サインイン&有効化→小さな関数で試す"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">VS Codeに拡張機能（Copilot/Copilot Chat等）を追加します。</li>
            <li className="pl-1 marker:text-gray-500">GitHubアカウントでサインインし、利用が有効になっているか確認します。</li>
            <li className="pl-1 marker:text-gray-500">
              まずは小さなファイル/小さな関数で試し、提案の癖（得意/苦手）を把握します。
            </li>
          </ol>
          <p className="mt-6 text-xs leading-6 text-gray-500">
            ※ 料金・プラン・機能は変更される可能性があるため、最新情報は公式案内で確認してください。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="how-to" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            使い方：精度を上げるコツ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 精度を上げる鍵は「制約・例・分割」。先にチームの方針を書くほど、提案がブレにくくなります。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tips.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">{tip.title}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{tip.body}</p>
              </div>
            ))}
          </div>
          <figure className="my-8">
            <Image
              src="/images/blog/github-copilot-guide/slide-4.png"
              alt="精度を上げる鍵は制約の明文化（曖昧な指示を減らす）"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-800">例: 「コメントで仕様を書く」だけでも効果が出ます</p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs leading-6 text-slate-100">
              {`// 要件:
// - 入力はメールアドレス
// - 不正なら例外ではなく Result 型で返す
// - 正規化（小文字化/前後空白除去）を行う
// - 既存の validateEmail() を使う

export function normalizeEmail(input: string) {
  // ...
}
`}
            </pre>
            <p className="mt-3 text-xs leading-6 text-slate-600">
              先に制約を書くと、提案が「チームのやり方」に寄りやすくなります。
            </p>
          </div>
          <figure className="my-8">
            <Image
              src="/images/blog/github-copilot-guide/slide-5.png"
              alt="例（サンプル）と分割で文脈を伝える（理解してから採用）"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="workflow" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            実務フロー：テストとレビュー
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 生成コードは「テストで固定→レビューで担保」が前提。速度が上がるほど、担保の仕組みが重要になります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Copilotをうまく使うチームほど、生成したコードを「自動テスト」と「レビュー」で守る運用になっています。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/github-copilot-guide/slide-6.png"
              alt="生成コードはテストとレビューで守る（Generate→Test→Reviewの循環）"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {workflowSteps.map((step) => (
              <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
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
          <h2 id="team" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            チーム導入の注意点
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: チーム導入は、入力データ・レビュー基準・責任の所在を「先に決める」ほど安全です。
          </p>
          <figure className="my-8">
            <Image
              src="/images/blog/github-copilot-guide/slide-7.png"
              alt="チーム導入はルールが先（安全とセキュリティ／責任と運用）"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">入力データ:</span> APIキー、顧客情報、未公開仕様などを入力しない運用にします。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">レビュー基準:</span> 生成コードでも例外なく、意図・安全性・テストを確認する基準を作ります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">責任の所在:</span> 最終責任は人に残る前提で、承認フローを崩さないことが重要です。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-gray-900">{item.question}</summary>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
              </details>
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
          <h2 id="related" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            関連記事（内部リンク）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: まずは「AIコーディング入門」→「プロンプトの型」→「初心者ガイド」の順で読むと迷いにくいです。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/academy/blog/ai-coding-for-beginners"
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-will-primary/40"
            >
              <p className="text-sm font-semibold text-gray-900">AIコーディング入門：初心者が挫折しない始め方</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">ChatGPT/Claude/Copilot/Cursorの使い分けを整理。</p>
            </Link>
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-will-primary/40"
            >
              <p className="text-sm font-semibold text-gray-900">仕事で使えるプロンプトテンプレ集</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">要件整理→出力品質を安定させる型を紹介。</p>
            </Link>
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-will-primary/40"
            >
              <p className="text-sm font-semibold text-gray-900">ChatGPT/Claude初心者ガイド</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">まず何から始めるかを1ページで整理。</p>
            </Link>
            <Link
              href="/academy/blog/ai-agent-build-guide"
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-will-primary/40"
            >
              <p className="text-sm font-semibold text-gray-900">AIエージェントの作り方（実装ガイド）</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">計画→実行→観察→修正の基本構造を解説。</p>
            </Link>
          </div>
        </motion.section>

        
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <figure className="my-8">
            <Image
              src="/images/blog/github-copilot-guide/slide-8.png"
              alt="まとめ：AIと賢く付き合うために（制約・例・分割、テストとレビュー、機密情報の扱い）"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">導入は「拡張機能→サインイン→有効化」で完了します（IDEにより手順は多少異なります）。</li>
            <li className="pl-1 marker:text-gray-500">精度を上げる鍵は「制約・例・分割」。一度に大きく生成しないこと。</li>
            <li className="pl-1 marker:text-gray-500">生成コードは必ずテストで固定し、レビューで意図と安全性を担保します。</li>
            <li className="pl-1 marker:text-gray-500">チーム導入は、機密情報の扱い・ログ・ポリシーを先に決めると失敗しにくいです。</li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
	        >
	          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
	            AIリブートアカデミーで、Copilot活用を「仕事の型」へ
	          </h2>
	          <p className="mt-4 text-base font-medium leading-8 text-gray-900">
	            結論: Copilot活用は「知識」だけでなく、「自分の価値×AI」として仕事の型に落とし込めるかが勝負です。
	          </p>
	          <p className="mt-4 text-sm leading-7 text-gray-700">
	            まずは全体像と優先順位を整理し、100日間の伴走で仲間と一緒に現場へ定着させましょう。
	          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              アカデミーを見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-will-primary/40"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/academy/blog"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-will-primary/40"
            >
              ブログ一覧へ戻る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
