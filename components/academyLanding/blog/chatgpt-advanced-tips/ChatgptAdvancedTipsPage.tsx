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

type ChatgptAdvancedTipsPageProps = {
  faqItems: readonly FAQItem[];
};

type TipItem = {
  title: string;
  description: string;
  prompt: string;
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["ChatGPT 使いこなし", "ChatGPT 仕事 活用", "GPT-4o 活用法", "ChatGPT 業務効率化"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "setup", label: "入門の次にやる運用設計" },
  { id: "writing-tips", label: "文章作成Tips 10" },
  { id: "research-tips", label: "調査Tips 10" },
  { id: "analysis-tips", label: "分析Tips 10" },
  { id: "presentation-tips", label: "プレゼンTips 10" },
  { id: "daily-tips", label: "日常業務Tips 10" },
  { id: "gpt4o-chatgpt-api", label: "GPT-4o / ChatGPT / APIの違い" },
  { id: "faq", label: "よくある質問" },
] as const;

const writingTips: readonly TipItem[] = [
  {
    title: "メール初稿を30秒で作る",
    description: "宛先・目的・期限を先に固定すると、後工程の修正が減ります。",
    prompt:
      "あなたは営業アシスタントです。以下で返信メール初稿を作成してください。\n宛先:{宛先} / 目的:{目的} / 期限:{期限}\n出力: 件名→本文（250字以内、丁寧語）",
  },
  {
    title: "文体を3段階で出し分ける",
    description: "同じ内容を「社内」「顧客」「役員」で並べて比較すると選定が早くなります。",
    prompt:
      "次の文章を3パターンで書き換えてください: 社内向け / 顧客向け / 役員向け。\n各120字以内、意味は変えない。",
  },
  {
    title: "長文を「結論→理由→次アクション」で再構成する",
    description: "報告文の読了率を上げたいときに有効です。",
    prompt:
      "以下の文章を「結論・理由・次アクション」の3見出しで再構成してください。\n冗長表現を削り、要点を5行以内で。",
  },
  {
    title: "言いにくい依頼文を角が立たない表現へ変換する",
    description: "依頼やリマインドを送るときの心理負荷を下げられます。",
    prompt:
      "次の依頼文を、相手の負担に配慮した文面に書き換えてください。\n条件: 命令口調を避ける / 期限は明確にする / 200字以内。",
  },
  {
    title: "議事メモから共有文を自動生成する",
    description: "会議後の共有速度が上がり、認識ズレを減らせます。",
    prompt:
      "この会議メモを共有文にしてください。\n出力形式: 決定事項 / 未決事項 / 次アクション(担当・期限)\n事実のみ、推測は書かない。",
  },
  {
    title: "文章の根拠不足をセルフチェックする",
    description: "主張に対して「根拠が弱い文」を抽出してもらう使い方です。",
    prompt:
      "以下の文章をレビューし、根拠が弱い主張を3つ抽出してください。\n各項目に『不足している根拠』を1行で追記。",
  },
  {
    title: "FAQを下書きして問い合わせ対応を短縮する",
    description: "同じ質問が繰り返される業務で効率化しやすいです。",
    prompt:
      "次のサービス説明文から、想定FAQを10問作成してください。\n出力形式: Q→A（各Aは120字以内、専門用語は平易に）。",
  },
  {
    title: "日本語資料を英語版のたたき台に変換する",
    description: "直訳ではなく用途別にトーンを指定すると品質が安定します。",
    prompt:
      "次の日本語文をビジネス英語に翻訳してください。\n条件: 顧客向け、丁寧、直訳調を避ける。\n出力: Subject / Body。",
  },
  {
    title: "社内ナレッジ記事のテンプレを作る",
    description: "毎回ゼロから書かずに済むため、運用が継続しやすくなります。",
    prompt:
      "『手順書』のテンプレートを作ってください。\n構成: 目的 / 前提 / 手順 / 失敗例 / 確認項目。\nMarkdownで出力。",
  },
  {
    title: "文章を「読む相手が行動できる形」に直す",
    description: "情報提供で終わらず、次行動まで明示した文面にできます。",
    prompt:
      "次の文章を、読者が次に何をすべきか分かる形に改善してください。\n各段落末尾に『次アクション』を1行追加。",
  },
] as const;

const researchTips: readonly TipItem[] = [
  {
    title: "調査の論点を先に分解する",
    description: "調査範囲を先に定義すると、情報過多を防げます。",
    prompt:
      "テーマ: {調査テーマ}\n3層で論点分解してください: 事実確認 / 比較検討 / 意思決定。\n各層で確認すべき質問を5個ずつ。",
  },
  {
    title: "一次情報だけを先に抽出する",
    description: "ニュース要約より先に公式ソースを押さえる運用です。",
    prompt:
      "テーマ{テーマ}について、一次情報にあたる資料タイプを列挙してください。\n例: 公式ドキュメント、公的統計、一次発表。検索順も提案。",
  },
  {
    title: "比較表の軸を自動生成する",
    description: "ツール比較やサービス選定で抜け漏れを減らせます。",
    prompt:
      "{比較対象A/B/C}を比較するための評価軸を12個提案してください。\n軸ごとに『定義』『評価方法』『注意点』を1行で。",
  },
  {
    title: "ヒアリング前に質問リストを作る",
    description: "打ち合わせの質が上がり、再調査を減らせます。",
    prompt:
      "私は{役割}です。{目的}のためのヒアリング質問を20個作成してください。\n優先度High/Medium/Lowで分類。",
  },
  {
    title: "調査メモを要点・示唆・不確実性に分ける",
    description: "そのまま資料化しやすいメモ形式に整えます。",
    prompt:
      "次の調査メモを整理してください。\n出力形式: 要点 / 示唆 / 不確実性 / 次に確認すべき情報。",
  },
  {
    title: "複数記事の主張差分を抽出する",
    description: "主張が割れている点を先に見つけると検証効率が上がります。",
    prompt:
      "以下の3記事要約を比較し、主張が一致する点と不一致の点を分類してください。\n不一致には『追加確認方法』を付ける。",
  },
  {
    title: "調査結果の社内共有文を即時作成する",
    description: "調査完了後すぐに共有し、意思決定の遅延を防げます。",
    prompt:
      "この調査結果を社内共有文にしてください。\n条件: 3分で読める長さ、結論先出し、意思決定に必要な論点のみ。",
  },
  {
    title: "反対意見を先回りで生成する",
    description: "提案前に懸念点を把握し、資料の説得力を高められます。",
    prompt:
      "この提案に対して想定される反対意見を10個挙げてください。\n各反対意見に対する対処案を1つずつ提示。",
  },
  {
    title: "調査の深掘り順序を決める",
    description: "優先順位が定まらない状態を解消できます。",
    prompt:
      "下記の調査論点を、重要度×緊急度で優先順位付けしてください。\n出力: 優先順位表 + 今週やるべき3項目。",
  },
  {
    title: "調査結果を1ページ要約に圧縮する",
    description: "上司報告用のフォーマットに合わせる用途です。",
    prompt:
      "次の調査結果をA4 1ページ想定で要約してください。\n構成: 背景 / 要点3つ / 推奨アクション / 残課題。",
  },
] as const;

const analysisTips: readonly TipItem[] = [
  {
    title: "KPI差分の一次分析を作る",
    description: "どこから見るべきかを短時間で整理できます。",
    prompt:
      "このKPI表を分析し、前月比の変動が大きい項目TOP5を抽出してください。\n各項目に原因仮説を1つ添える。",
  },
  {
    title: "数値コメントの型を固定する",
    description: "月次報告でコメント品質を平準化できます。",
    prompt:
      "以下の数値から月次コメントを作成してください。\n形式: 事実→解釈→次アクション。\n全体250字以内。",
  },
  {
    title: "異常値チェックの観点をリスト化する",
    description: "データ不整合と業績変動を切り分けやすくなります。",
    prompt:
      "CVR急落時の一次切り分け観点を一覧化してください。\n分類: 計測不備 / 施策影響 / 外部要因 / データ欠損。",
  },
  {
    title: "セグメント比較を表で出す",
    description: "施策優先度を判断しやすい出力形式です。",
    prompt:
      "この顧客データをセグメント別に比較してください。\n出力: セグメント / 指標 / 傾向 / 優先施策 の表。",
  },
  {
    title: "分析前の不足データを特定する",
    description: "結論を急ぎすぎるリスクを抑えられます。",
    prompt:
      "この分析依頼を実施する前提で、足りないデータを洗い出してください。\n項目ごとに『不足時のリスク』も記載。",
  },
  {
    title: "複数仮説を並列で作る",
    description: "1つの解釈に偏らない分析ができます。",
    prompt:
      "売上低下の原因仮説を5つ出してください。\n各仮説に『検証用データ』『反証条件』を付ける。",
  },
  {
    title: "分析結果を上司向けに短文化する",
    description: "意思決定者向けに情報密度を調整できます。",
    prompt:
      "次の分析結果を部長向けに120字で要約してください。\n条件: 結論先出し、数字を2つだけ残す。",
  },
  {
    title: "データ可視化の指示書を作る",
    description: "BI作業を依頼するときの手戻りを減らせます。",
    prompt:
      "このデータに対して作成すべきグラフを5種類提案してください。\n各グラフに『目的』『見るべき指標』を添える。",
  },
  {
    title: "分析会議の議題を組み立てる",
    description: "会議が報告会で終わるのを防げます。",
    prompt:
      "この分析結果を使う会議アジェンダを作成してください。\n構成: 現状 / 課題 / 仮説 / 意思決定 / 次アクション。",
  },
  {
    title: "再利用できる分析テンプレを作る",
    description: "定例分析の運用を標準化できます。",
    prompt:
      "月次分析レポートのテンプレートを作成してください。\n見出し: KPI概要 / 変動要因 / リスク / 来月施策。",
  },
] as const;

const presentationTips: readonly TipItem[] = [
  {
    title: "発表目的から逆算して構成を作る",
    description: "情報量より意思決定に必要な順序を優先できます。",
    prompt:
      "テーマ:{テーマ} / 目的:{承認獲得など} / 時間:{分}\nこの条件で10枚構成のスライド案を作成してください。",
  },
  {
    title: "タイトルを結論型に直す",
    description: "スライド単位のメッセージが伝わりやすくなります。",
    prompt:
      "次のスライドタイトル一覧を『結論が一目で分かる形』に改善してください。\n各タイトルは25字以内。",
  },
  {
    title: "1枚1メッセージに削る",
    description: "詰め込み過多のスライドを修正できます。",
    prompt:
      "このスライド本文を1枚1メッセージになるよう圧縮してください。\n不要情報は削除理由付きで示す。",
  },
  {
    title: "図解の言語化を先に作る",
    description: "デザイナーへの依頼精度を上げられます。",
    prompt:
      "この内容を図解化するために、図の構成要素を言語化してください。\n出力: 要素 / 関係性 / 強調ポイント。",
  },
  {
    title: "想定質問と回答草案を準備する",
    description: "質疑応答の準備時間を短縮できます。",
    prompt:
      "このプレゼンに対する想定質問を15個作り、回答草案を添えてください。\n厳しめの質問を5個含める。",
  },
  {
    title: "3分版・10分版の2種類を同時に作る",
    description: "説明時間の変更に柔軟に対応できます。",
    prompt:
      "同じ内容で3分版と10分版の説明台本を作成してください。\n両方とも結論先出しで。",
  },
  {
    title: "スピーカーノートを生成する",
    description: "発表練習時の抜け漏れを減らせます。",
    prompt:
      "このスライド構成に対して、各ページのスピーカーノートを作ってください。\n1ページあたり120字以内。",
  },
  {
    title: "データスライドの注釈を統一する",
    description: "数値解釈の誤解を防ぎます。",
    prompt:
      "この数値スライドに必要な注釈文を作成してください。\n含める: 集計期間 / 定義 / 例外条件。",
  },
  {
    title: "締めスライドのCTAを最適化する",
    description: "発表後の行動につながる設計にできます。",
    prompt:
      "この提案の締めスライド文を改善してください。\n出力: 今回決めること / 決裁者 / 次の期限。",
  },
  {
    title: "プレゼン後のフォローメールを自動化する",
    description: "会議後の進行を止めずに済みます。",
    prompt:
      "プレゼン終了後に送るフォローメールを作成してください。\n内容: お礼 / 決定事項 / 宿題 / 次回日程。",
  },
] as const;

const dailyTips: readonly TipItem[] = [
  {
    title: "今日のタスクを30分単位に分解する",
    description: "着手しやすい単位へ分割し、先延ばしを防ぎます。",
    prompt:
      "次のToDoを30分単位に分解してください。\n優先順と見積工数も付ける: {ToDo一覧}",
  },
  {
    title: "朝会共有文を毎朝生成する",
    description: "日次報告の準備時間を短縮できます。",
    prompt:
      "昨日の実績と今日の予定を朝会共有用に整えてください。\n形式: 実績 / 今日やること / リスク。",
  },
  {
    title: "Slack返信の下書きを整える",
    description: "短文コミュニケーションの品質を保てます。",
    prompt:
      "次のメモからSlack返信文を3案作成してください。\n条件: 端的、誤解がない、丁寧。",
  },
  {
    title: "会議アジェンダを定型化する",
    description: "会議の目的不明を防止します。",
    prompt:
      "この会議目的に合わせてアジェンダを作成してください。\n項目: 目的 / 参加者 / 議題 / 決定事項 / 宿題。",
  },
  {
    title: "依頼タスクの受け漏れをチェックする",
    description: "曖昧な依頼を具体化する前処理に使えます。",
    prompt:
      "この依頼文をレビューし、不明点を質問リストにしてください。\n分類: 目的 / 期限 / 完了条件 / 担当範囲。",
  },
  {
    title: "週報を自動下書きする",
    description: "毎週の振り返り工数を抑えられます。",
    prompt:
      "この1週間のメモを週報にしてください。\n出力: 成果 / 課題 / 来週計画（各3点以内）。",
  },
  {
    title: "定型業務の手順書を更新する",
    description: "引き継ぎドキュメントの鮮度を保てます。",
    prompt:
      "以下の手順書を現行運用に合わせて更新してください。\n変更点を『追加/削除/修正』で最後に一覧化。",
  },
  {
    title: "会議準備のチェックリストを作る",
    description: "準備漏れを毎回同じ観点で確認できます。",
    prompt:
      "この会議タイプ向けの準備チェックリストを作ってください。\n時間軸: 前日 / 当日朝 / 開始10分前。",
  },
  {
    title: "日報から改善テーマを抽出する",
    description: "単なる記録を改善行動につなげられます。",
    prompt:
      "この日報ログから、繰り返し発生している課題を3つ抽出してください。\n各課題に改善案を2つずつ提示。",
  },
  {
    title: "翌日の優先順位を自動提案する",
    description: "業務終了前の5分で翌日の段取りを決められます。",
    prompt:
      "未完了タスク一覧から、明日の優先順位を提案してください。\n基準: 期限 / 影響度 / 着手難易度。",
  },
] as const;

const allCategories = [
  {
    id: "writing-tips",
    title: "文章作成で使えるTips 10",
    conclusion: "文章業務は、出力形式を先に固定すると品質が安定します。",
    tips: writingTips,
  },
  {
    id: "research-tips",
    title: "調査で使えるTips 10",
    conclusion: "調査業務は、論点分解と一次情報優先の順番を固定すると速くなります。",
    tips: researchTips,
  },
  {
    id: "analysis-tips",
    title: "分析で使えるTips 10",
    conclusion: "分析業務は、仮説と検証データを同時に出すと意思決定に直結しやすくなります。",
    tips: analysisTips,
  },
  {
    id: "presentation-tips",
    title: "プレゼンで使えるTips 10",
    conclusion: "プレゼン業務は、結論先出しの構成を機械的に守ると伝達精度が上がります。",
    tips: presentationTips,
  },
  {
    id: "daily-tips",
    title: "日常業務で使えるTips 10",
    conclusion: "日常業務は、報告・連絡・段取りをテンプレ化すると時間削減効果が出やすいです。",
    tips: dailyTips,
  },
] as const;

function LineCtaBox() {
  return (
    <motion.section
      className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-sm font-semibold text-gray-900">📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-3 text-sm leading-7 text-gray-700">
        AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
      </p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
        >
          LINEで無料個別相談する
        </a>
      </div>
    </motion.section>
  );
}

export default function ChatgptAdvancedTipsPage({ faqItems }: ChatgptAdvancedTipsPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPT実践テクニック集" },
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
                title="ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ChatGPTを仕事で使いこなすには、便利機能を増やす前に「再利用できる型」を作ることが重要です。この記事は、
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT・Claude初心者ガイド
            </Link>
            と
            <Link
              href="/academy/blog/chatgpt-start-guide-smartphone"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPTスマホ入門
            </Link>
            の次に読む前提で設計しています。文章作成・調査・分析・プレゼン・日常業務の5カテゴリで、コピペ可能な50Tipsをまとめました。
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
          <p className="mt-5 text-sm leading-7 text-gray-700">先に全体像を押さえ、次のセクションで業務別テンプレへ落とし込むと導入が速くなります。</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              使いこなしの差は「質問力」より「運用設計」で生まれます。目的・前提・制約・出力形式を固定すると再現性が上がります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              業務別にテンプレを持つと、毎回の入力時間とレビュー時間の両方を短縮できます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              2026年2月20日時点では、ChatGPTの通常UI利用とAPI利用は別運用です。用途ごとに選び分ける必要があります。
            </li>
          </ul>
        </motion.section>

        <LineCtaBox />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="setup" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            入門の次にやるべき運用設計
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            入門段階を抜けるには、単発利用から「型の運用」へ切り替えるのが最短です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">1. 頻出業務を3つ決める</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                まずはメール、会議要約、報告文など、毎週必ず発生する業務を対象にします。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">2. プロンプトをテンプレ化する</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                目的・前提・制約・出力形式を固定し、案件情報だけ差し替える運用にします。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">3. 検証ルールを先に決める</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                事実確認、社内ルール適合、最終判断者を明確にすると、安全に継続利用できます。
              </p>
            </section>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            テンプレを先に整えたい場合は、
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事で使えるプロンプトテンプレート集
            </Link>
            を先に読んでから、この50Tipsに戻る流れが効率的です。
          </p>
        </motion.section>

        {allCategories.map((category, categoryIndex) => (
          <motion.section
            key={category.id}
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 id={category.id} className="scroll-mt-28 text-2xl font-bold text-gray-900">
              {category.title}
            </h2>
            <p className="mt-5 text-base font-medium text-gray-900">{category.conclusion}</p>
            <div className="mt-6 space-y-4">
              {category.tips.map((tip, tipIndex) => (
                <section key={tip.title} className="rounded-lg border border-gray-200 p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Tip {String(categoryIndex * 10 + tipIndex + 1).padStart(2, "0")}：{tip.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-700">{tip.description}</p>
                  <p className="mt-4 text-xs font-semibold tracking-wide text-gray-500">コピペ用プロンプト</p>
                  <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                    <code>{tip.prompt}</code>
                  </pre>
                </section>
              ))}
            </div>
            {category.id === "analysis-tips" && <LineCtaBox />}
          </motion.section>
        ))}

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="gpt4o-chatgpt-api" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            OpenAIモデルとChatGPTの使い分け、APIとの違い（2026年2月時点）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            「ChatGPTを使う」と「OpenAI APIを業務実装する」は同じではなく、運用責任と課金体系が異なります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            OpenAIのリリースノートやヘルプ情報でも、ChatGPTで選べるモデルや上限は更新されます。過去の入門情報だけで判断すると現在の仕様とずれることがあるため、
            導入時は確認日付きで運用してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">ChatGPT（アプリ利用）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">API（OpenAIモデルをコード利用）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">主用途</th>
                  <td className="py-4 px-4">個人やチームの対話、下書き、軽い分析</td>
                  <td className="py-4 pl-4">業務システム連携、自動化、独自ワークフロー実装</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">導入ハードル</th>
                  <td className="py-4 px-4">低い（すぐ使える）</td>
                  <td className="py-4 pl-4">中〜高（開発・監視・ログ設計が必要）</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">課金</th>
                  <td className="py-4 px-4">プラン契約ベース</td>
                  <td className="py-4 pl-4">トークン従量課金（ChatGPT契約とは別）</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">向いている段階</th>
                  <td className="py-4 px-4">まず成果を出す段階、個人最適</td>
                  <td className="py-4 pl-4">部署標準化、他ツール連携、再現性運用</td>
                </tr>
                <tr className="align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">注意点</th>
                  <td className="py-4 px-4">モデル提供状況は更新される</td>
                  <td className="py-4 pl-4">APIキー管理、コスト監視、障害時の代替設計が必要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            キャリア活用まで広げる場合は、
            <Link
              href="/academy/blog/ai-job-hunting-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI×転職完全ガイド
            </Link>
            で職務経歴書・面接準備への応用も確認できます。
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ここでは、導入時に判断が分かれやすい運用ルールを先に短く整理します。
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
          <p className="mb-4 text-sm leading-7 text-gray-700">導入フェーズ別に次に読むべき記事を絞るなら、次の内部リンクが有効です。</p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-start-guide-smartphone"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
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
              <Link href="/academy/blog/ai-job-hunting-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI×転職完全ガイド｜職務経歴書・面接対策・企業研究の実践テクニック
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="next-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のステップ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIリブートアカデミーでは、業務で即使える
            <span className="font-semibold text-gray-900">生成AI活用力</span>
            に加え、
            <span className="font-semibold text-gray-900">自己理解・キャリアデザイン</span>
            と
            <span className="font-semibold text-gray-900">仲間と共に学ぶ環境</span>
            を一体で設計しています。この記事の50Tipsを実務に定着させたい場合は、週次で1カテゴリずつ導入し、テンプレをチーム共有する運用から始めてください。
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
