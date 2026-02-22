"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import { ArticleH2, ArticleH3, SummaryBox, RichFAQ, RichTable, Callout } from "@/components/blog/ArticleBody";

type FAQItem = {
  question: string;
  answer: string;
};

type ClaudeBeginnerGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["Claude 使い方 入門", "Claude 登録方法", "Anthropic Claude 2026", "Claude 日本語"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ（2026-02-20時点）" },
  { id: "what-is-claude", label: "Claudeとは何かとChatGPTとの違い" },
  { id: "signup-first-chat", label: "登録から最初のチャットまでの手順" },
  { id: "strengths", label: "Claudeの強みと日本語利用の注意点" },
  { id: "plans", label: "無料プランとClaude Proの違い" },
  { id: "use-cases", label: "非エンジニア向け実務活用3パターン" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const summaryPoints = [
  "2026年2月時点のClaudeはSonnet 4.6/Opus 4.6世代が中心で、Claude 3.7は最新ラインではありません。",
  "無料プランの制限は固定「1日◯件」ではなく、会話の長さや混雑状況で変動します。",
  "入門は「登録→用途を1つ決める→同じ依頼を改善する」の順で進めると定着しやすくなります。",
  "本記事は一般ユーザー向けで、開発者向けのCLI解説（Claude Code）は対象外です。",
] as const;

const compareRows = [
  {
    axis: "開発元と設計方針",
    claude: "Anthropic製。文脈理解と長文処理を重視し、対話品質と安全性のバランスを取る運用が特徴。",
    chatgpt: "OpenAI製。幅広い機能拡張と連携を含む総合的なAIアシスタント運用が進んでいる。",
  },
  {
    axis: "初心者の始めやすさ",
    claude: "画面構成がシンプルで、まず文章作成・要約から始めやすい。",
    chatgpt: "利用者が多く、用途別の情報が豊富で比較しながら学びやすい。",
  },
  {
    axis: "長文読解・要点整理",
    claude: "長文入力を前提にした要約・構造化が得意で、文書整理で使いやすい。",
    chatgpt: "要約や構造化も可能。併用時は同一入力で比較し、業務に合う出力を選ぶ運用が有効。",
  },
  {
    axis: "選び方",
    claude: "企画書・議事録・調査メモなど文章比率が高い業務と相性が良い。",
    chatgpt: "複数ツールや既存ワークフローとの接続を重視する場合に選びやすい。",
  },
] as const;

const signupSteps = [
  {
    step: "Step 1. 公式サイトへアクセスして「Sign up」を選ぶ",
    detail:
      "ブラウザでClaudeの公式ページを開き、新規登録を開始します。業務利用を想定する場合は、先に会社ルール（入力禁止情報、外部共有ルール）を確認しておくと後戻りを防げます。",
  },
  {
    step: "Step 2. メールアドレスで登録し、必要な認証を完了する",
    detail:
      "登録メールの確認と、必要に応じて電話番号認証を進めます。認証画面で止まる場合は、通信環境やブラウザを切り替えると解消するケースがあります。",
  },
  {
    step: "Step 3. 初期設定で言語を日本語に合わせる",
    detail:
      "Settingsで表示言語を日本語に設定できます。日本語UIはベータ扱いのため、表現が不自然な箇所は英語UIへ一時切替して確認すると操作ミスを減らせます。",
  },
  {
    step: "Step 4. 最初のチャットは用途を1つに絞って入力する",
    detail:
      "最初から複数用途を試すと評価しにくくなります。例として「会議メモを300文字で要約」など、成果が判断しやすい依頼1件で開始するのが実践的です。",
  },
  {
    step: "Step 5. 追加入力で品質を上げる",
    detail:
      "1回で完成を目指さず、「もう少し具体化」「表に変換」「結論先出しで再作成」のように再指示します。初心者ほど、再指示の前提で使うと結果が安定します。",
  },
] as const;

const strengthCards = [
  {
    title: "長文理解がしやすい",
    body:
      "長い会議録、調査メモ、提案書の下書きをまとめて渡し、論点整理や要約に落とし込みやすい点がClaudeの強みです。情報を細切れにせず扱えるため、背景を踏まえた出力を作りやすくなります。",
    point: "活用例: 20ページの資料から「結論・根拠・未決事項」を分離する",
  },
  {
    title: "コードを「書く」だけでなく「読む・説明する」に使える",
    body:
      "非エンジニアでも、Web制作や自動化スクリプトの断片を貼り付けて「何をしているコードか」を説明させる使い方ができます。実装そのものより、仕様理解と依頼精度を上げる用途で効果が出ます。",
    point: "活用例: 外注コードのレビュー観点を箇条書きで整理する",
  },
  {
    title: "論理的思考の補助がしやすい",
    body:
      "比較検討や意思決定メモを作る際に、判断軸を先に定義してから案を並べると、Claudeの出力品質が安定します。結論だけでなく、判断理由まで構造化しやすいのが利点です。",
    point: "活用例: 「費用・効果・運用負荷」で施策を比較表に変換する",
  },
  {
    title: "日本語運用は実用可能だが、最終確認は必須",
    body:
      "日本語UIと日本語会話に対応しており、日常業務で使える水準です。一方で固有名詞、敬語のニュアンス、業界用語は揺れることがあるため、対外文書は必ず人が最終編集してください。",
    point: "活用例: 下書き作成はClaude、公開前の文責は人間という役割分担",
  },
] as const;

const planRows = [
  {
    axis: "料金",
    free: "無料",
    pro: "月額20ドル（確認日: 2026-02-20）",
  },
  {
    axis: "利用量",
    free: "変動制限（会話長・需要に応じて変動、固定日次件数の公表なし）",
    pro: "無料の少なくとも5倍。短い会話なら45メッセージ/5時間以上が目安",
  },
  {
    axis: "モデル選択",
    free: "基本はデフォルトモデル中心",
    pro: "モデルセレクター利用可（用途に応じて選択）",
  },
  {
    axis: "向いている人",
    free: "まず使い方を習得したい初心者",
    pro: "毎日継続利用し、制限や処理量不足を感じる人",
  },
] as const;

const usageCautions = [
  "無料上限は固定件数ではないため、「昨日使えた量」が毎日同じとは限りません。",
  "長文入力や添付ファイルが多いと、上限到達が早くなる傾向があります。",
  "利用制限は更新されるため、運用ルールに確認日を入れてチーム共有するのが安全です。",
] as const;

const useCases = [
  {
    title: "ケース1. 文書作成: メール・提案メモの初稿を短時間で作る",
    point:
      "目的が曖昧だと出力が散るため、「誰に」「何を」「どのトーンで」を先に指定します。初稿作成はClaudeに任せ、最終調整は自分で行う分業が実務向きです。",
    prompt:
      "目的: 取引先向け提案メールの初稿作成\n前提: 納期は来週金曜、予算上限あり\n制約: 300文字以内、丁寧語、断定しすぎない\n出力形式: 件名候補2つ + 本文1案",
  },
  {
    title: "ケース2. 要約: 会議メモを意思決定に使える形式に再構成する",
    point:
      "議事録は「要点」「決定事項」「未決事項」「次アクション」に分けるだけで使いやすさが上がります。長いメモをそのまま共有するより、意思決定に必要な情報へ圧縮する運用が有効です。",
    prompt:
      "目的: 会議メモを共有用に要約\n前提: 箇条書きメモを貼り付ける\n制約: 重要論点3つ、決定事項、未決事項、担当者付き次アクション\n出力形式: 見出し付きMarkdown",
  },
  {
    title: "ケース3. 分析: 複数案を比較して判断材料をつくる",
    point:
      "比較の質は軸設計で決まります。先に評価軸を宣言し、各案を同じ基準で採点させると、議論の土台として使える分析メモになります。",
    prompt:
      "目的: ツール選定の比較表を作成\n前提: 候補A/B/Cの説明文を貼り付ける\n制約: 導入コスト・運用負荷・効果・リスクの4軸で評価\n出力形式: 比較表 + 推奨案 + 判断理由",
  },
] as const;

type LineCtaBoxProps = {
  className: string;
};

function LineCtaBox({ className }: LineCtaBoxProps) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-gray-900">AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        ClaudeやChatGPTの更新情報を、現場判断で使える要点に整理して配信しています。仕様変更の確認漏れを減らしたい方に向いた無料チャンネルです。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </section>
  );
}

export default function ClaudeBeginnerGuidePage({ faqItems }: ClaudeBeginnerGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Claudeの使い方入門" },
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
              <CopyAsMarkdownButton title="Claudeの使い方入門｜登録から最初のチャットまで初心者向け解説【2026年版】" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Claudeの使い方入門｜登録から最初のチャットまで初心者向け解説【2026年版】
          </h1>
          <Callout type="info" title="この記事でわかること">
            Claudeの使い方は、最新モデルの位置づけと無料枠の特性を最初に押さえると失敗しにくくなります。この記事では、登録から初回チャットまでの手順、無料プランとProの違い、日本語利用時の注意点、ChatGPTとの使い分け、回答品質を安定させる指示テンプレート、Claude Codeとの対象範囲の違いまでを2026年2月時点の情報で整理し、非エンジニアでも今日から実務で使える状態を目指します。登録直後のつまずき対策も含めて解説します。
          </Callout>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Claudeを初めて使う人が迷いやすいのは、「最新モデルはどれか」「無料でどこまでできるか」「どう指示すれば結果が安定するか」の3点です。
            本記事では、2026年2月20日時点の公式情報を基準に、登録から初回チャットまでを手順化し、実務で使える最初の型まで整理します。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            なお、開発者向けCLIツールの使い方は
            <Link href="/academy/blog/claude-code-intro" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Code入門
            </Link>
            で扱います。本記事は非エンジニアの一般利用が対象です。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude初心者ガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT料金プラン比較
          </Link>
          ・
          <Link href="/academy/blog/ai-for-non-engineers" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            非エンジニア向けAI活用
          </Link>
          ・
          <Link href="/academy/blog/ai-free-plan-comparison-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI無料プラン比較
          </Link>
          ・
          <Link href="/academy/blog/gpt-vs-claude-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            GPTとClaudeの性能比較
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SummaryBox
            title="要点まとめ（確認日: 2026-02-20）"
            items={summaryPoints}
          />
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="what-is-claude"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-is-claude">
            Claudeとは何か: Anthropic製AIとして、長文整理と実務文章の下書きに強い
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ClaudeはAnthropicが提供する対話型AIです。はじめて使う人は、まず「万能ツール」としてではなく、文章整理と意思決定メモを補助する実務アシスタントとして導入すると成果が出やすくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ChatGPTとの比較は、優劣で決めるより用途で分ける方が現実的です。以下は、初心者が使い分けるときに確認しやすい観点です。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">比較軸</th>
                <th className="py-4 px-6 font-bold text-gray-900">Claude</th>
                <th className="py-4 px-6 font-bold text-gray-900">ChatGPT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {compareRows.map((row) => (
                <tr key={row.axis} className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.axis}</th>
                  <td className="py-4 px-6 text-gray-700">{row.claude}</td>
                  <td className="py-4 px-6 text-gray-700">{row.chatgpt}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ChatGPTとの基礎比較を先に整理したい場合は、
            <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT・Claude初心者ガイド
            </Link>
            をあわせて確認すると、導入判断がしやすくなります。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <motion.section
          id="signup-first-chat"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="signup-first-chat">
            Claudeの登録方法: 無料アカウント作成から最初のチャット開始まで
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ここでは「画面でどこを押すか」を想定した、スクリーンショット代替の手順で説明します。手順は5ステップだけです。
          </p>
          <div className="mt-6 space-y-4">
            {signupSteps.map((item) => (
              <section key={item.step} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.step}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Claudeは対応地域と年齢要件があります。登録前に公式ヘルプの最新条件を確認し、社内利用ならアカウント管理ルールを先に決めておくと運用が安定します。
          </p>
        </motion.section>

        <motion.section
          id="strengths"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="strengths">
            Claudeの強み: 長文理解・コード補助・論理整理・日本語運用をまとめて扱える
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「Claude 3.7の使い方」を探している人も多いですが、2026年時点で最新ラインは4.6世代です。入門では旧モデル名の情報より、実務で再現しやすい使い方を先に押さえる方が効果的です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {strengthCards.map((card) => (
              <section key={card.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{card.title}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
                <p className="mt-3 text-xs leading-6 text-gray-600">{card.point}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            より詳細な比較が必要なら、
            <Link href="/academy/blog/gpt-vs-claude-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GPT系とClaudeの比較記事
            </Link>
            を参照してください。用途別の判断がしやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="plans"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="plans">
            無料プランとClaude Pro（月額20ドル）の違い: まず無料で型を作り、必要時に課金する
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            課金判断は「使い込んでから」が基本です。無料で運用パターンを固め、制限が業務ボトルネックになった段階でProを検討すると、コスト判断の失敗を減らせます。
          </p>
          <RichTable className="mt-6">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-900">比較軸</th>
                <th className="py-4 px-6 font-bold text-gray-900">無料プラン</th>
                <th className="py-4 px-6 font-bold text-gray-900">Claude Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {planRows.map((row) => (
                <tr key={row.axis} className="hover:bg-gray-50/50 transition-colors">
                  <th className="py-4 px-6 font-bold text-gray-900 bg-gray-50/30 whitespace-nowrap">{row.axis}</th>
                  <td className="py-4 px-6 text-gray-700">{row.free}</td>
                  <td className="py-4 px-6 text-gray-700">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <ArticleH3>無料利用で誤解しやすいポイント</ArticleH3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {usageCautions.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            利用制限・料金情報の確認日: 2026-02-20（更新される可能性があります）
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </motion.section>

        <motion.section
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="use-cases">
            非エンジニア向け実務活用: 文書作成・要約・分析の3パターンから始める
          </ArticleH2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            初心者が成果を出しやすいのは、毎週発生する定型業務にClaudeを当てる方法です。以下の3パターンは、今日から試せる実務導線です。
          </p>
          <div className="mt-6 space-y-5">
            {useCases.map((item) => (
              <section key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-soft transition-shadow">
                <ArticleH3>{item.title}</ArticleH3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.point}</p>
                <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">
{item.prompt}
                </pre>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            プロンプトの型を増やしたい場合は、
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            を併用すると、再利用しやすい運用に移行できます。
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
          <RichFAQ items={faqItems} />
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="mb-4 scroll-mt-28 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPT系とClaudeの違いを比較して選ぶポイント
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-code-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Codeとは？使い方・料金・始め方を完全解説【開発者向け】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けにわかりやすく解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-free-plan-comparison-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude・Gemini無料プラン比較【2026年2月版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-plan-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT料金プラン比較｜Free・Plus・Proの違い
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-voice-mode-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT音声モード活用ガイド｜会話で使う実践手順
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-hallucination-fact-check-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIのハルシネーション対策ガイド｜誤情報を見抜くコツ
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-8">
          <p className="text-sm font-semibold tracking-[0.08em] text-will-primary">AIリブートアカデミー</p>
          <ArticleH2 id="academy-cta">AI活用の判断軸とキャリアを同時に設計する</ArticleH2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、特定ツールの操作習得を目的にした講座ではありません。生成AIを実務で使う力を伸ばしながら、自己理解とキャリア設計を深め、仲間と継続的に学ぶ環境を一体で設計します。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-will-primary">生成AI活用力: 実務で使える型を身につける</li>
            <li className="pl-1 marker:text-will-primary">自己理解・キャリアデザイン: 強みと価値観を言語化し、次の選択を明確にする</li>
            <li className="pl-1 marker:text-will-primary">仲間と共に学ぶ環境: 対話と協働で実践の継続率を高める</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              アカデミーの学習設計を見る
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
