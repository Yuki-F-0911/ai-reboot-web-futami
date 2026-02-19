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

type GoogleAiStudioAppBuildGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Google AI Studio App Build 使い方",
  "Google AI Studio アプリ作成",
  "AI アプリ 作成 ノーコード",
  "Gemini アプリ 開発",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "q1-scope", label: "Q1. App Build機能とは？入門記事との違いと対象読者" },
  { id: "q2-prep", label: "Q2. App Buildを始める準備（10分チェック）" },
  { id: "q3-build-steps", label: "Q3. 最初のアプリを作る手順（ステップバイステップ）" },
  { id: "q4-three-patterns", label: "Q4. 業務アプリ3パターンの作り方" },
  { id: "q5-fit-limit", label: "Q5. コードなし運用の限界と向いている人" },
  { id: "q6-next", label: "Q6. 次の学習導線と実務導入の進め方" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";

const summaryPoints = [
  "App Buildは、Google AI Studioの中で「要件を自然言語で伝えてアプリ試作を回す」ことに特化した機能です。検証スピードを上げる目的で使うと成果が出ます。",
  "この記事はApp Buildの実装手順に特化しています。Google AI Studio全体像の整理が先なら、先に入門記事を確認してから戻るほうが理解しやすくなります。",
  "最初の1本は、要件を小さく区切って作るのが前提です。1回で完成を狙うより、Previewで検証しながら改良するほうが安定します。",
  "業務向けの初手はFAQ Bot、プロンプト整形ツール、データ要約アシスタントの3種類です。いずれも社内の定型業務に接続しやすい構成です。",
  "ノーコードで試作までは可能ですが、認証や監査ログを含む本番運用ではエンジニア連携が必要になる場面があります。",
] as const;

const prepChecklist = [
  {
    title: "1. 目的を1文で決める",
    body: "例: 「営業向けFAQ回答を60秒以内に作る」。業務成果を先に固定すると、App Buildへの指示がぶれません。",
  },
  {
    title: "2. 入力と出力を決める",
    body: "入力はユーザーが何を入れるか、出力はどの形式で返すかを先に定義します。ここが曖昧だとPreviewで評価できません。",
  },
  {
    title: "3. 判定基準を3つ作る",
    body: "正確性、再現性、実務転用性の3項目で評価します。感覚だけで判断すると改善方向が定まりません。",
  },
  {
    title: "4. 公式の利用条件を確認する",
    body: "料金・無料枠・利用条件は更新されます。公式Pricing/Billingを確認した日付をメモしてから作業を始めます。",
  },
  {
    title: "5. 共有範囲を先に決める",
    body: "個人検証なのか、社内共有なのかで公開設定と運用責任が変わります。共有前提ならAPIキー管理も同時に設計します。",
  },
] as const;

const buildSteps = [
  {
    step: "Step 1. Build modeを開き、作るアプリを1行で宣言する",
    action:
      "App Build画面に入り、「誰が・何のために・どの出力を得るか」を1行で指示します。最初から細部まで書かず、用途を固定することを優先します。",
    check: "確認ポイント: 1回目の生成で画面構成が目的に沿っているか。",
  },
  {
    step: "Step 2. 入力項目を最小構成で定義する",
    action:
      "入力欄を増やし過ぎると検証が遅くなります。最初は「必須2〜3項目」だけにして、Previewの挙動確認を優先します。",
    check: "確認ポイント: 入力の不足時にエラーや補足案内が返るか。",
  },
  {
    step: "Step 3. 出力フォーマットを明示する",
    action:
      "箇条書き、表、JSON風など、受け取り側が使いやすい形式を固定します。形式を固定すると比較検証が速くなります。",
    check: "確認ポイント: 同じ入力で毎回同じ骨格の出力になるか。",
  },
  {
    step: "Step 4. Previewで1変更ずつ検証する",
    action:
      "一度に複数変更を加えると原因追跡が難しくなります。1変更ごとにPreview確認し、良し悪しを記録します。",
    check: "確認ポイント: 変更前後でどこが改善したか説明できる状態か。",
  },
  {
    step: "Step 5. エラー時は要件を分解して再指示する",
    action:
      "大きな指示を投げるほど破綻しやすい傾向があります。入力チェック、出力整形、文体調整を分割して順番に改善します。",
    check: "確認ポイント: 失敗時に戻せるよう、成功状態を残しているか。",
  },
  {
    step: "Step 6. 実データに近いサンプルで精度を測る",
    action:
      "ダミー文だけで合格判定しないことが重要です。実務で出る長文・曖昧な入力・誤字入り入力で再現性を確認します。",
    check: "確認ポイント: 想定外入力でも安全な出力方針を維持できるか。",
  },
  {
    step: "Step 7. 共有前に公開設定と責任範囲を確認する",
    action:
      "社内で使う場合は、誰が更新し、誰が品質を確認するかを決めます。公開導線に進む前にルールを整えると運用事故を減らせます。",
    check: "確認ポイント: 共有対象、禁止入力、問い合わせ先が明文化されているか。",
  },
  {
    step: "Step 8. 必要ならコード出力を持ち帰り、実装へ接続する",
    action:
      "App Buildで検証した仕様をそのまま実装へ渡せる状態にします。ノーコードで完結しない要件は早めにエンジニアへ連携します。",
    check: "確認ポイント: 入力仕様、出力仕様、例外処理が文章で引き継げるか。",
  },
] as const;

const recoveryChecklist = [
  "不安定になった時点の仕様をメモし、直前の変更点を1つだけ取り消す。",
  "入力仕様、出力仕様、エラーメッセージの3点に分解して再指示する。",
  "想定外入力（空欄、誤字、長文）を再投入し、壊れる条件を特定する。",
  "壊れた状態を削除せず残し、成功状態との比較材料にする。",
  "同じ要件を短文版で再生成し、過剰指示が原因かを確認する。",
  "必要なら別セッションで最小再現を作り、運用アプリへ戻し反映する。",
] as const;

const launchChecklist = [
  "利用対象者（誰が使うか）と利用目的（何に使うか）を明記したか",
  "入力禁止情報（個人情報、機密情報など）を画面に明記したか",
  "出力の誤り時に確認すべき担当部署を案内したか",
  "週次で品質確認する担当者と点検タイミングを決めたか",
  "仕様変更の履歴を残す運用（更新日、変更理由）を作ったか",
  "公式仕様変更時に見直す対象項目を洗い出したか",
] as const;

const appPatterns = [
  {
    title: "パターン1: 社内FAQ Bot",
    purpose: "問い合わせ一次対応を短時間化し、回答のばらつきを減らす。",
    buildPrompt:
      "営業部向けFAQ Botを作成。入力は「質問」「顧客タイプ」「緊急度」。出力は「推奨回答」「根拠」「未確定事項」を日本語で返す。根拠が不足するときは『追加確認項目』を提示する。",
    steps: [
      "既存FAQを10〜20件抽出し、回答トーンを統一する。",
      "入力項目に「顧客タイプ」を入れて、回答文の粒度を調整する。",
      "誤回答時の安全策として「断定せず確認を促す」文言を固定する。",
    ],
    test: [
      "同じ質問で担当者ごとの差が減るか",
      "不明点を不明と言えるか",
      "顧客にそのまま転送できる文面か",
    ],
  },
  {
    title: "パターン2: プロンプト整形ツール",
    purpose: "曖昧な依頼を実行しやすいプロンプト形式に整え、AI活用の再現性を上げる。",
    buildPrompt:
      "入力された依頼文を、目的・前提・制約・出力形式の4ブロックに再構成するアプリを作成。出力はMarkdown。最後に『不足情報チェック』を3項目表示する。",
    steps: [
      "社内でよく使う依頼文を5件集め、整形前後を比較する。",
      "業務別テンプレート（営業/採用/管理）を切り替えられるようにする。",
      "整形後プロンプトをコピーしやすい出力に固定する。",
    ],
    test: [
      "初学者でも再利用できるか",
      "長文依頼を分解して整理できるか",
      "出力フォーマットが毎回ぶれないか",
    ],
  },
  {
    title: "パターン3: データ要約アシスタント",
    purpose: "会議メモ、アンケート自由記述、日報の要点抽出を短縮する。",
    buildPrompt:
      "長文テキストを入力すると、要点5行、重要数値、次アクション3件を出力する要約アプリを作成。出力は『要点』『懸念』『次アクション』の3セクションに固定する。",
    steps: [
      "部署ごとの用語辞書を簡易的に定義し、誤解釈を減らす。",
      "文字数制限を設けて過剰な要約を防ぐ。",
      "次アクションに担当者/期限の空欄テンプレを含める。",
    ],
    test: [
      "要点が短すぎず長すぎないか",
      "抜け落ちて困る情報がないか",
      "会議後のタスク管理に直接使えるか",
    ],
  },
] as const;

const fitRows = [
  {
    heading: "向いている人",
    details:
      "業務課題を文章で定義できる人、短い試作を反復できる人、PoCを1〜2週間単位で回せる人。非エンジニアでもこの条件を満たせば前進できます。",
  },
  {
    heading: "向いていない進め方",
    details:
      "最初から全機能を載せる、運用ルールなしで共有する、評価基準を作らない進め方。コミュニティでもこの進め方は不安定化しやすい報告があります。",
  },
  {
    heading: "ノーコードの限界が出る場面",
    details:
      "認証、厳密な権限管理、監査ログ、既存基幹システム連携、厳格なSLAが必要な運用。ここは実装と運用設計を分けて判断するのが安全です。",
  },
] as const;

const communityVoices = [
  {
    title: "実声1: Preview不具合の報告",
    body:
      "ForumではPreviewが壊れて利用できない報告があり、運営側から修正ロールアウト案内が出たケースがあります。検証が止まった場合は、環境問題だけでなく既知不具合情報の確認も必要です。",
  },
  {
    title: "実声2: 作成はできても公開段階で詰まる",
    body:
      "Redditでは、短期間でアプリ試作に成功した一方、公開やCloud連携の段階で躓く声が見られます。作成と公開を別タスクに分ける進め方が有効です。",
  },
  {
    title: "実声3: 大きな変更を一気に入れると崩れやすい",
    body:
      "連続した大規模修正で挙動が不安定になる体験談があり、1変更ごとにPreview確認する運用が推奨されます。小刻みな差分管理が品質を守ります。",
  },
] as const;

const sourceLinks = [
  {
    name: "Google AI Studio Build mode（公式）",
    href: "https://ai.google.dev/gemini-api/docs/ai-studio-build-mode",
  },
  {
    name: "Google AI Studio Quickstart（公式）",
    href: "https://ai.google.dev/gemini-api/docs/ai-studio-quickstart",
  },
  {
    name: "Gemini API Billing（公式）",
    href: "https://ai.google.dev/gemini-api/docs/billing",
  },
  {
    name: "Gemini API Pricing（公式）",
    href: "https://ai.google.dev/gemini-api/docs/pricing",
  },
  {
    name: "Gemini API Key（公式）",
    href: "https://ai.google.dev/gemini-api/docs/api-key",
  },
] as const;

const executionRoadmap = [
  "1週目: FAQ Botを作り、入力仕様と出力仕様を固定する。",
  "2週目: プロンプト整形ツールを導入し、社内プロンプト品質を揃える。",
  "3週目: データ要約アシスタントを追加し、会議後タスクの整理時間を短縮する。",
  "4週目: 評価指標（時間短縮、再利用率、手戻り率）を測定し、次の改善テーマを決める。",
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";
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
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで週1AI通信を受け取る（無料）
      </a>
    </motion.section>
  );
}

export default function GoogleAiStudioAppBuildGuidePage({ faqItems }: GoogleAiStudioAppBuildGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Google AI Studio App Build機能ガイド" },
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
            Google AI StudioのApp Build機能とは？アプリ作成の始め方と活用法
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-19">2026年2月19日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="Google AI StudioのApp Build機能とは？アプリ作成の始め方と活用法"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            この記事の対象読者：App Build機能で実際にアプリを作りたい人向け。全体像は
            <Link
              href="/academy/blog/google-ai-studio-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              google-ai-studio-guide
            </Link>
            へ。本記事ではApp Build機能のみに絞って、準備、作成手順、業務活用パターン、運用時の限界までを実務目線で解説します。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            ※仕様・料金・利用条件は変動します。本文内の公式情報確認日は 2026-02-19 です。
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
          <h2 className="text-xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="q1-scope"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q1. App Build機能とは？入門記事との違いと対象読者</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            App Build機能は、Google AI Studioで「アプリ試作を反復する工程」に焦点を当てた機能です。入門記事が全体像の理解を目的にするのに対し、本記事は実際に作る工程へ進む読者向けです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            棲み分けを明確にすると、学習効率が上がります。全体像の確認は
            <Link
              href="/academy/blog/google-ai-studio-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              Google AI Studio使い方完全ガイド
            </Link>
            、Gemini自体の基礎は
            <Link
              href="/academy/blog/gemini-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              Gemini完全入門ガイド
            </Link>
            を参照し、本記事ではApp Buildの操作と実務接続に集中してください。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            公式ドキュメント上でも、Build modeは作成、編集、反復、公開までを一連で扱う構成になっています。つまり、App Buildは「読む機能」ではなく「作って検証する機能」です。
          </p>
        </motion.section>

        <motion.section
          id="q2-prep"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q2. App Buildを始める準備（10分チェック）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            App Buildの成功率は、作る前の定義でほぼ決まります。10分で終わる準備を先に行うだけで、試作の手戻りを減らせます。
          </p>
          <div className="mt-6 space-y-4">
            {prepChecklist.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            料金と利用条件は固定ではありません。作業前に公式のBilling/Pricingを確認し、確認日を記録しておく運用を推奨します。これにより、後日の仕様変更時に原因の切り分けがしやすくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            もう一つ重要なのは、成功の定義を「アプリが動くこと」だけに置かないことです。業務で使うなら、回答に責任を持てるか、修正依頼に追従できるか、運用担当が維持できるかまで含めて準備します。準備段階でここを言語化しておくと、App Build後の定着率が上がります。
          </p>
        </motion.section>

        <motion.section
          id="q3-build-steps"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Q3. App Buildで最初のアプリを作る手順（ステップバイステップ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            初めてのApp Buildは、8ステップを順番に実行するだけで十分です。重要なのは、1変更ずつPreviewで検証し、成功状態を残しながら進めることです。
          </p>
          <div className="mt-6 space-y-4">
            {buildSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.action}</p>
                <p className="mt-2 text-sm leading-7 text-gray-600">{item.check}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">公式情報とコミュニティ実声の使い分け</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            手順は公式ドキュメントを基準にし、つまずき予防にはコミュニティ実声を補助根拠として使うのが実務的です。以下の3点は現場で頻出します。
          </p>
          <div className="mt-4 space-y-4">
            {communityVoices.map((voice) => (
              <section key={voice.title} className="rounded-lg border border-amber-200 bg-amber-50 p-5">
                <h4 className="text-base font-semibold text-amber-900">{voice.title}</h4>
                <p className="mt-2 text-sm leading-7 text-amber-800">{voice.body}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">失敗時のリカバリー手順（実務向け）</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {recoveryChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ここまで実施しても改善しない場合は、機能要件を削り、最小機能へ戻す判断が必要です。App Buildは短い反復に強いため、複雑化した状態を抱えたまま進むより、戻して再構築したほうが総工数を抑えられます。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="q4-three-patterns"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Q4. 業務アプリ3パターンの作り方（FAQ Bot / プロンプト整形ツール / データ要約アシスタント）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            App Buildで成果が出やすいのは、反復頻度が高い定型業務です。ここでは社内導入しやすい3パターンを、目的、初期プロンプト、実装手順、検証項目まで具体化します。
          </p>
          <div className="mt-6 space-y-6">
            {appPatterns.map((pattern) => (
              <section key={pattern.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">{pattern.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">目的:</span> {pattern.purpose}
                </p>
                <p className="mt-3 text-sm font-semibold text-gray-900">App Buildへの初期指示例</p>
                <pre className="mt-2 overflow-x-auto rounded bg-white p-4 text-xs leading-6 text-gray-700">{pattern.buildPrompt}</pre>
                <p className="mt-4 text-sm font-semibold text-gray-900">作成ステップ</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  {pattern.steps.map((step) => (
                    <li key={step} className="pl-1 marker:text-gray-500">
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-sm font-semibold text-gray-900">合格判定チェック</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  {pattern.test.map((item) => (
                    <li key={item} className="pl-1 marker:text-gray-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            プロンプト改善の引き出しを増やしたい場合は、
            <Link
              href="/academy/blog/chatgpt-advanced-tips"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT活用上級テクニック
            </Link>
            の改善手順を参考にすると、App Build上の指示も安定しやすくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            3パターンは独立して見えますが、運用では連結できます。例えばFAQ Botで得た問い合わせ傾向をデータ要約アシスタントで整理し、改善用プロンプトを整形ツールで標準化すると、チーム全体の再利用率が上がります。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="q5-fit-limit"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q5. コードなし運用の限界と、どんな人に向いているか</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、ノーコードで「業務に使える試作」までは十分可能です。一方で、本番利用の信頼性を求めるほど、権限管理と監査設計が必要になり、エンジニア連携の比重が高まります。
          </p>
          <div className="mt-6 space-y-4">
            {fitRows.map((row) => (
              <section key={row.heading} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{row.heading}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{row.details}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            重要なのは「コードを書いたか」ではなく、「業務要件を検証可能な形で定義できたか」です。App Buildは要件整理と試作反復に強みがあるため、要件が固まるほど効果が上がります。
          </p>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">公開前チェックリスト（最低限）</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {launchChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="q6-next"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q6. 次の学習導線と実務導入の進め方</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            App Buildで1本作れたら、次は運用に耐える形へ育てる段階です。4週間で小さく回し、成果指標を測りながら改善すると、チーム導入に接続しやすくなります。
          </p>
          <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {executionRoadmap.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">公式情報（確認日: 2026-02-19）</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {sourceLinks.map((source) => (
              <li key={source.href} className="pl-1 marker:text-gray-500">
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  {source.name}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xl font-semibold text-gray-900">関連記事（内部リンク）</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/google-ai-studio-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Google AI Studio使い方完全ガイド
              </Link>
              : 全体像の復習と基本機能の確認
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/gemini-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Gemini完全入門ガイド
              </Link>
              : モデル活用の前提知識を補強
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT活用上級テクニック
              </Link>
              : プロンプト改善の再現手順を学ぶ
            </li>
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、そして仲間と共に学ぶ環境を一体で設計しています。App Buildで作る力を高めるほど、実務成果とキャリア設計を同時に進めやすくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            本記事の位置づけは「実装開始のガイド」です。判断に迷った場合は、全体像記事の
            <Link
              href="/academy/blog/google-ai-studio-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              Google AI Studio使い方完全ガイド
            </Link>
            へ戻り、機能理解を再確認してからApp Buildへ再着手してください。入門記事と実装記事を往復する学習が、最短で定着しやすい進め方です。
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
        </motion.section>

        <LineCtaBox tone="green" />
      </article>
    </main>
  );
}
