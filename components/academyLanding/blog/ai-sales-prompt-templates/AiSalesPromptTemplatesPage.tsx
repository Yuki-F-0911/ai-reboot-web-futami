"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiSalesPromptTemplatesPageProps = {
  faqItems: readonly FAQItem[];
};

type PromptItem = {
  title: string;
  useCase: string;
  prompt: string;
};

type PromptCategory = {
  id: string;
  title: string;
  conclusion: string;
  prompts: readonly PromptItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "生成AI 営業 活用",
  "営業 プロンプト テンプレ",
  "提案書 AI 作成",
  "営業メール AI 生成",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "sales-ai-overview", label: "営業での使いどころ" },
  { id: "pre-meeting", label: "カテゴリ1: 事前準備" },
  { id: "proposal-docs", label: "カテゴリ2: 提案書・資料作成" },
  { id: "email-communication", label: "カテゴリ3: メール・コミュニケーション" },
  { id: "review-improvement", label: "カテゴリ4: 振り返り・改善" },
  { id: "confidentiality", label: "機密情報リスクの扱い" },
  { id: "faq", label: "よくある質問" },
] as const;

const promptCategories: readonly PromptCategory[] = [
  {
    id: "pre-meeting",
    title: "カテゴリ1: 事前準備（企業研究・競合調査・ヒアリング項目設計）",
    conclusion:
      "商談前の準備をAIで型化すると、情報収集の漏れとヒアリングの抜けを減らせます。最初に「顧客業種・提案目的・制約条件」を固定してください。",
    prompts: [
      {
        title: "Prompt 01: 企業研究サマリー作成",
        useCase: "初回訪問前に、短時間で企業理解を揃えたいとき",
        prompt:
          "あなたは法人営業リサーチ担当です。以下の企業情報を要約してください。\n[企業名]: [ ]\n[業種]: [ ]\n[提案予定テーマ]: [ ]\n\n出力条件:\n- 事業概要を3行\n- 想定課題を3点\n- 商談で確認すべき論点を5点\n- 不明点は「要確認」と明記",
      },
      {
        title: "Prompt 02: 競合比較の論点抽出",
        useCase: "提案の差別化ポイントを明確にしたいとき",
        prompt:
          "あなたは営業企画担当です。競合比較表を作成してください。\n[自社サービス]: [ ]\n[競合A]: [ ]\n[競合B]: [ ]\n[評価軸候補]: [価格/導入期間/サポート/機能]\n\n出力条件:\n- 比較表（評価軸×3社）\n- 自社の優位点3つ\n- 劣位点への補足説明案2つ",
      },
      {
        title: "Prompt 03: 仮説ベースの商談準備",
        useCase: "商談で話すべき順序を先に決めたいとき",
        prompt:
          "あなたは営業マネージャーです。商談準備メモを作成してください。\n[顧客課題の仮説]: [ ]\n[提案したい価値]: [ ]\n[想定予算感]: [ ]\n[想定決裁者]: [ ]\n\n出力条件:\n- オープニングで確認すべき質問3つ\n- 深掘り質問5つ\n- 最後に合意すべき次アクション2つ",
      },
      {
        title: "Prompt 04: ヒアリング質問リスト設計",
        useCase: "ヒアリングの質を上げて再商談を減らしたいとき",
        prompt:
          "あなたはB2B営業担当です。ヒアリング質問を設計してください。\n[商材]: [ ]\n[対象顧客]: [ ]\n[導入目的]: [ ]\n\n出力条件:\n- 現状把握質問5つ\n- 課題特定質問5つ\n- 意思決定質問5つ\n- 優先度をHigh/Medium/Lowで付与",
      },
      {
        title: "Prompt 05: キーパーソン整理",
        useCase: "関係者が多い案件で提案先を見失いたくないとき",
        prompt:
          "あなたは営業戦略担当です。案件の関係者整理を作成してください。\n[顧客組織情報]: [ ]\n[既知の関係者]: [ ]\n[案件テーマ]: [ ]\n\n出力条件:\n- 役割別ステークホルダー表\n- 影響度と関心度を3段階評価\n- 次に接触すべき順序を提案",
      },
    ],
  },
  {
    id: "proposal-docs",
    title: "カテゴリ2: 提案書・資料作成（構成・本文・要約）",
    conclusion:
      "提案書はゼロから書くより、構成と論点を先にAIで固定すると早くなります。AIには初稿を任せ、顧客固有の判断は人が上書きする運用が実務的です。",
    prompts: [
      {
        title: "Prompt 06: 提案書構成案の生成",
        useCase: "提案資料の骨子を最短で作りたいとき",
        prompt:
          "あなたは提案書作成の専門家です。提案書構成案を作成してください。\n[顧客業種]: [ ]\n[顧客課題]: [ ]\n[提案サービス]: [ ]\n[期待成果]: [ ]\n\n出力条件:\n- 8〜10章の構成\n- 各章の目的を1行\n- 先方が意思決定しやすい順序",
      },
      {
        title: "Prompt 07: 課題と提案の対応表",
        useCase: "提案の論理を見やすく整理したいとき",
        prompt:
          "あなたは営業コンサルタントです。課題と提案の対応表を作ってください。\n[顧客課題一覧]: [ ]\n[提案内容一覧]: [ ]\n\n出力条件:\n- 表形式（課題/提案/期待効果/測定指標）\n- 課題未対応があれば指摘\n- 測定指標は定量・定性を分ける",
      },
      {
        title: "Prompt 08: 提案本文ドラフト",
        useCase: "提案書本文の初稿を効率化したいとき",
        prompt:
          "あなたは法人営業担当です。提案本文の初稿を作成してください。\n[顧客名(匿名化)]: [ ]\n[課題]: [ ]\n[提案の要点]: [ ]\n[導入スケジュール]: [ ]\n\n出力条件:\n- 1,000〜1,500字\n- 背景→課題→提案→効果→進め方の順\n- 断定が難しい点は「要確認」と記載",
      },
      {
        title: "Prompt 09: 役員向け1ページ要約",
        useCase: "決裁者向けに短い資料を作りたいとき",
        prompt:
          "あなたは営業部長です。役員向けに提案内容を1ページで要約してください。\n[提案書本文]: [ ]\n\n出力条件:\n- 結論を冒頭2行で提示\n- 投資対効果の観点を3点\n- 決裁に必要な判断事項を箇条書き",
      },
      {
        title: "Prompt 10: プレゼン台本の下書き",
        useCase: "提案時の説明順序を整えたいとき",
        prompt:
          "あなたは提案プレゼンのコーチです。説明台本を作ってください。\n[提案スライド構成]: [ ]\n[持ち時間]: [ ]分\n\n出力条件:\n- スライドごとに話す要点\n- 想定質問を5つ\n- 回答の要点を各2行で提示",
      },
    ],
  },
  {
    id: "email-communication",
    title: "カテゴリ3: メール・コミュニケーション（初回アプローチ・フォロー・クロージング）",
    conclusion:
      "営業メールはAIで下書きを作ると速度が上がりますが、返信率は文脈次第です。相手情報と目的を変数化して、テンプレ感を薄める運用が重要です。",
    prompts: [
      {
        title: "Prompt 11: 初回アプローチメール",
        useCase: "新規リードに失礼なく接触したいとき",
        prompt:
          "あなたは法人営業担当です。初回アプローチメールを作成してください。\n[相手企業]: [ ]\n[担当者役職]: [ ]\n[連絡目的]: [ ]\n[提案価値]: [ ]\n\n出力条件:\n- 件名 + 本文\n- 250〜350字\n- 売り込み感を抑え、相談ベースで記載",
      },
      {
        title: "Prompt 12: 日程調整メール",
        useCase: "商談候補日を明確に提示したいとき",
        prompt:
          "あなたは営業アシスタントです。日程調整メールを作成してください。\n[相手名]: [ ]\n[打ち合わせ目的]: [ ]\n[候補日時]: [候補1/候補2/候補3]\n[所要時間]: [ ]分\n\n出力条件:\n- 候補日時を箇条書き\n- 返信しやすい文面\n- 200〜300字",
      },
      {
        title: "Prompt 13: 商談後フォローメール",
        useCase: "商談後の次アクションを確定したいとき",
        prompt:
          "あなたは営業担当です。商談後フォローメールを作成してください。\n[商談日]: [ ]\n[決定事項]: [ ]\n[未決事項]: [ ]\n[次回アクション]: [ ]\n\n出力条件:\n- お礼を1文入れる\n- 決定事項と宿題を分ける\n- 期限を明記",
      },
      {
        title: "Prompt 14: 失注後の再アプローチ文",
        useCase: "失注案件を将来案件として再接続したいとき",
        prompt:
          "あなたは営業担当です。失注後の再アプローチメールを作ってください。\n[失注理由]: [ ]\n[前回提案内容]: [ ]\n[今回の変化点]: [ ]\n\n出力条件:\n- 過度な売り込みは避ける\n- 情報提供中心で記載\n- 相手の判断余地を残す文面",
      },
      {
        title: "Prompt 15: クロージング確認メール",
        useCase: "最終判断前の認識ズレを防ぎたいとき",
        prompt:
          "あなたは法人営業の責任者です。クロージング前の確認メールを作成してください。\n[提案名]: [ ]\n[合意済み条件]: [ ]\n[未確定事項]: [ ]\n[希望回答期限]: [ ]\n\n出力条件:\n- 合意事項と未確定事項を明確に分ける\n- 丁寧語で簡潔\n- 次に決めるべき事項を箇条書き",
      },
    ],
  },
  {
    id: "review-improvement",
    title: "カテゴリ4: 振り返り・改善（商談メモ要約・ロールプレイ）",
    conclusion:
      "営業成果を上げるには、提案前より提案後の改善速度が重要です。商談メモ要約とロールプレイをAIで回すと、改善サイクルを短縮できます。",
    prompts: [
      {
        title: "Prompt 16: 商談メモ要約",
        useCase: "商談直後に記録を共有したいとき",
        prompt:
          "あなたは営業オペレーション担当です。商談メモを要約してください。\n[商談メモ原文]: [ ]\n\n出力条件:\n- 決定事項\n- 未決事項\n- 次アクション（担当/期限）\n- それぞれ箇条書き",
      },
      {
        title: "Prompt 17: 失注要因の整理",
        useCase: "失注理由を次提案に生かしたいとき",
        prompt:
          "あなたは営業マネージャーです。失注分析を作成してください。\n[案件概要]: [ ]\n[失注理由メモ]: [ ]\n[競合状況]: [ ]\n\n出力条件:\n- 要因を3分類（提案内容/タイミング/関係構築）\n- 再発防止策を3つ\n- 次回案件での改善行動を明記",
      },
      {
        title: "Prompt 18: 反論対応ロールプレイ",
        useCase: "商談でよく出る反論への対応力を上げたいとき",
        prompt:
          "あなたは営業トレーナーです。ロールプレイを実施してください。\n[商材]: [ ]\n[よくある反論]: [ ]\n\n出力条件:\n- 顧客役として反論を5つ提示\n- 営業役の回答例を提示\n- 改善ポイントを各回答ごとに1つ示す",
      },
      {
        title: "Prompt 19: 週次レビュー生成",
        useCase: "営業活動の振り返りを定例化したいとき",
        prompt:
          "あなたは営業企画です。週次レビューを作成してください。\n[今週の活動ログ]: [ ]\n[商談件数]: [ ]\n[受注件数]: [ ]\n\n出力条件:\n- 良かった点3つ\n- 課題3つ\n- 来週の改善アクション3つ",
      },
      {
        title: "Prompt 20: 次回商談アクションプラン",
        useCase: "次商談に向けて準備を具体化したいとき",
        prompt:
          "あなたは営業責任者です。次回商談までの行動計画を作成してください。\n[案件名]: [ ]\n[現状ステータス]: [ ]\n[残課題]: [ ]\n[次回商談日]: [ ]\n\n出力条件:\n- 当日までのタスクを時系列で整理\n- 担当者と期限を明記\n- リスクと代替案を1つずつ提示",
      },
    ],
  },
] as const;

export default function AiSalesPromptTemplatesPage({ faqItems }: AiSalesPromptTemplatesPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "営業の生成AIプロンプト20選" },
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
                title="営業の生成AIプロンプト20選｜提案書・メール・ヒアリング設計まで"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            営業の生成AIプロンプト20選｜提案書・メール・ヒアリング設計まで
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            営業の生成AI活用は、ツール名より「どの場面で使うか」を先に決めると成果が出ます。この記事では、事前準備・提案書作成・メール・振り返りの4カテゴリで、コピペして使える営業プロンプト20本を整理しました。
            実務での応用を広げたい方は
            <Link
              href="/academy/blog/chatgpt-advanced-tips"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT実践テクニック集
            </Link>
            と
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事用プロンプトテンプレート集
            </Link>
            も合わせて確認してください。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              営業でAIを使う最短ルートは、準備・提案・連絡・振り返りの4場面をテンプレ化することです。
            </li>
            <li className="pl-1 marker:text-gray-500">
              各プロンプトは `[ ]` の変数だけ差し替えて使える形式にしてあるため、AI未経験でも再利用しやすくなっています。
            </li>
            <li className="pl-1 marker:text-gray-500">
              顧客情報の入力は「契約プランのポリシー + 社内規程 + 匿名化」の3点を満たした場合のみ行う運用が安全です。
            </li>
          </ul>
        </motion.section>

        <LineCtaBox />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="sales-ai-overview" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            営業で生成AIを使うときの前提は「成果が出る場面」を先に固定すること
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            営業のAI活用は、文章生成そのものより「営業プロセスのどこを短縮するか」を定義した時点で効果が出やすくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <section className="rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900">1. 事前準備</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">企業研究と質問設計を標準化して、初回商談の質を上げる。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900">2. 提案書作成</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">構成案と本文初稿を高速化し、レビュー時間に集中する。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900">3. メール対応</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">初回、フォロー、クロージングの連絡品質を安定させる。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900">4. 振り返り</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">商談後の学習サイクルを短くして、次回受注率を高める。</p>
            </section>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            営業部門全体での導入観点を見たい場合は、
            <Link
              href="/academy/blog/ai-business-efficiency-cases"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI業務効率化事例集
            </Link>
            で部門横断の設計ポイントも確認できます。
          </p>
        </motion.section>

        {promptCategories.map((category, categoryIndex) => (
          <motion.section
            key={category.id}
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 id={category.id} className="scroll-mt-28 text-2xl font-bold text-gray-900">
              {category.title}
            </h2>
            <p className="mt-5 text-base font-medium text-gray-900">{category.conclusion}</p>
            <div className="mt-6 space-y-4">
              {category.prompts.map((item) => (
                <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-700">
                    <span className="font-semibold text-gray-900">使いどころ:</span> {item.useCase}
                  </p>
                  <p className="mt-4 text-xs font-semibold tracking-wide text-gray-500">コピペ用プロンプト</p>
                  <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                    <code>{item.prompt}</code>
                  </pre>
                </section>
              ))}
            </div>
            {categoryIndex === 1 && <LineCtaBox />}
          </motion.section>
        ))}

        <motion.section
          className="mt-14 rounded-lg border border-amber-200 bg-amber-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="confidentiality" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPTに機密情報を入れても大丈夫か: 結論は「条件を満たすときだけ」
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            2026年2月20日時点の公開ポリシーでは、ChatGPT Business/EnterpriseやAPIのデータ取り扱い方針が明示されています。ただし、安全性は契約プランと自社運用で決まるため、無条件での入力は避けるべきです。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              原則入力しない: 顧客名、担当者名、個人情報、未公開見積、契約条件、認証情報
            </li>
            <li className="pl-1 marker:text-gray-500">
              入力が必要なとき: 匿名化・抽象化し、社内ガイドラインと契約プランのデータポリシーを先に確認
            </li>
            <li className="pl-1 marker:text-gray-500">
              運用で必須: 出力の事実確認、営業責任者レビュー、誤送信防止チェック
            </li>
          </ul>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">確認項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務での判断基準</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">入力データ</th>
                  <td className="py-4 pl-4">特定可能情報が含まれない状態まで加工できているか</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">契約プラン</th>
                  <td className="py-4 pl-4">利用中プランのデータ利用方針と管理者設定を確認済みか</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">社内規程</th>
                  <td className="py-4 pl-4">AI利用ルールで許可された入力範囲か、承認フローは必要か</td>
                </tr>
                <tr className="align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">最終チェック</th>
                  <td className="py-4 pl-4">顧客送付前に人が最終確認し、誤記・誤送信を防止できるか</td>
                </tr>
              </tbody>
            </table>
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            営業現場で多い疑問は「どこまで任せるか」と「情報管理」です。まずは頻出業務を限定して小さく運用し、テンプレを育てる形が定着しやすくなります。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <LineCtaBox />

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/chatgpt-advanced-tips"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/prompt-template-for-work"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集｜営業・マーケ・管理部門の活用ポイントを解説
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="next-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のステップ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIリブートアカデミーでは、営業現場で成果につながる
            <span className="font-semibold text-gray-900">生成AI活用力</span>
            だけでなく、
            <span className="font-semibold text-gray-900">自己理解・キャリアデザイン</span>
            と
            <span className="font-semibold text-gray-900">仲間と共に学ぶ環境</span>
            を一体で設計しています。この記事の20プロンプトを実務に定着させたい方は、週次で改善ログを回しながら運用を進めてください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/blog"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              他の記事も読む
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
