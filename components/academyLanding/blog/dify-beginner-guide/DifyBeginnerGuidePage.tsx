"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type DifyBeginnerGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Dify 使い方", "ノーコードAI", "AIエージェント", "RAG 活用", "業務自動化"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-dify", label: "Difyとは？" },
  { id: "pricing", label: "料金と始め方" },
  { id: "build-steps", label: "FAQボット作成5ステップ" },
  { id: "use-cases", label: "業種別5事例" },
  { id: "pitfalls", label: "失敗しない3つのポイント" },
  { id: "faq", label: "よくある質問" },
  { id: "related-links", label: "関連リンク" },
  { id: "article-summary", label: "まとめ" },
  { id: "cta", label: "次のアクション" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const comparisonRows = [
  {
    tool: "Dify",
    category: "LLMアプリPF",
    noCode: "◯（低コード）",
    rag: "◯（組み込み）",
    agent: "◯",
    selfHost: "◯（OSS）",
    bestFor: "業務ボット・RAGの最短構築",
  },
  {
    tool: "n8n / Make",
    category: "ワークフロー自動化",
    noCode: "◯（低コード）",
    rag: "△（別途設計）",
    agent: "△",
    selfHost: "◯（OSS）",
    bestFor: "既存SaaS間の連携・自動化",
  },
  {
    tool: "LangChain",
    category: "LLMフレームワーク",
    noCode: "✕（コード必須）",
    rag: "◯（柔軟）",
    agent: "◯",
    selfHost: "◯",
    bestFor: "高度なカスタム実装",
  },
  {
    tool: "ChatGPT Teams",
    category: "AIチャット",
    noCode: "◯（不要）",
    rag: "△（ファイルアップ）",
    agent: "△",
    selfHost: "✕",
    bestFor: "全社員の汎用チャット活用",
  },
] as const;

const buildSteps = [
  {
    num: "Step 1",
    title: "アプリタイプを選ぶ",
    detail:
      "Difyのダッシュボードで「アプリを作成」→ タイプを選択します。社内FAQや問い合わせ対応には「チャットボット」、複数の処理を順番に実行する自動化には「ワークフロー」が基本の選択肢です。エージェントタイプはツール呼び出しが必要な場合に選びます。",
    tip: "迷ったら「チャットボット＋RAG」から始めるのが最短です。後からワークフローに移行できます。",
  },
  {
    num: "Step 2",
    title: "ナレッジ（データセット）を登録する",
    detail:
      "「ナレッジ」メニューから社内ドキュメント（PDF・Word・TXT・Webページ）をアップロードします。Difyが自動でチャンク分割・ベクトル化するため、RAGの技術知識は不要です。",
    tip: "精度を上げるコツは「1ドキュメント1テーマ」に整理してから投入すること。古いバージョンや重複ファイルは事前に除外してください。",
  },
  {
    num: "Step 3",
    title: "LLMとシステムプロンプトを設定する",
    detail:
      "「オーケストレーション」画面でモデル（GPT-5.2 / Claude Sonnet 4.6 / Gemini 等）を選択し、システムプロンプトを入力します。プロンプトには役割・制約・回答できない場合の対応を明示すると品質が安定します。",
    tip: "プロンプト例：「あなたは〇〇株式会社のサポートアシスタントです。登録されたナレッジから回答し、情報がない質問には『担当者に確認の上、ご連絡します』と返答してください。」",
  },
  {
    num: "Step 4",
    title: "APIまたはWebウィジェットで公開する",
    detail:
      "完成したアプリは「APIアクセス」でエンドポイントを取得するか、「Webアプリとして公開」で埋め込みウィジェットコードを発行できます。社内向けならSlack連携（API経由）、対外向けならWebサイト埋め込みが一般的です。",
    tip: "まず「Webアプリとして公開」で社内テスターに触れてもらい、フィードバックを集めてからAPI連携に移行する順序がおすすめです。",
  },
  {
    num: "Step 5",
    title: "会話ログを確認してプロンプトを改善する",
    detail:
      "「ログとアノテーション」画面で会話履歴を確認します。「回答がズレている」「ナレッジが引き当たっていない」ケースを週次でレビューし、プロンプト修正またはナレッジ追加を繰り返すことで精度が向上します。",
    tip: "スタッフが回答に「◯」「✕」でフィードバックできるアノテーション機能を活用すると、問題ケースの収集が効率化されます。",
  },
] as const;

const useCases = [
  {
    emoji: "📋",
    title: "①社内FAQボット（総務・人事）",
    scene:
      "就業規則・経費精算ルール・福利厚生制度などを社内ドキュメントからナレッジ登録し、従業員が自然文で質問できるボットを構築します。",
    effect: "担当者へのFAQ系問い合わせを一次自動対応。担当者は例外ケースやポリシー更新業務に集中できます。",
    point: "ポイント：社内規程の更新タイミングでナレッジも更新するルールを先に決めておくと運用が継続します。",
  },
  {
    emoji: "🎧",
    title: "②問い合わせ一次対応（CS部門）",
    scene:
      "製品マニュアル・サポート手順書をナレッジに設定し、Webサイトに埋め込むチャットウィジェットとして展開します。対応できない質問のみ有人エスカレーションします。",
    effect: "24時間対応が可能になり、よくある質問への一次応答時間をゼロに短縮。有人対応件数の削減に貢献します。",
    point: "ポイント：エスカレーション条件（例：返金・クレーム・技術深掘り）をプロンプトで明示し、ボットが勝手に判断しない設計にすることが重要です。",
  },
  {
    emoji: "📊",
    title: "③営業提案書アシスタント",
    scene:
      "過去の提案書・受注事例・競合比較データをナレッジ登録。営業担当が「〇〇業界の中小製造業向け提案のポイントは？」と入力すると、関連事例と構成案の骨子を返します。",
    effect: "提案書の下書き時間を短縮。若手担当者でも過去ノウハウを引き出せるようになります。",
    point: "ポイント：「この情報を使って提案書を書いて」ではなく「構成案と使えそうな過去事例を3つ教えて」という使い方が実態に合っています。",
  },
  {
    emoji: "📝",
    title: "④定例レポート自動生成",
    scene:
      "月次売上データや進捗メモをワークフロータイプで「要約→課題抽出→提言文作成」の3ノード構成で自動処理。担当者はデータ入力だけでレポート草稿を取得できます。",
    effect: "定型レポートの作成工数を削減。管理職は数値確認・判断・加筆に集中できます。",
    point: "ポイント：ワークフローの各ノードに「出力形式（箇条書き／表）」を指定することで、後段での修正が減ります。",
  },
  {
    emoji: "🤝",
    title: "⑤採用スクリーニング補助",
    scene:
      "採用要件・評価軸・よくある懸念点をナレッジに設定。応募者の職務経歴書テキストを貼り付けると、評価ポイントと確認すべき懸念点の整理を返します。",
    effect: "書類選考での観点抜けを防止。採用担当の判断補助資料として活用でき、選考の一貫性が上がります。",
    point: "ポイント：「合否の判断」をさせるのではなく「確認ポイントの整理」に限定することがリスク管理上も重要です。",
  },
] as const;

const pitfalls = [
  {
    num: "01",
    title: "ゴミを入れるとゴミが出る——データ品質の過小評価",
    bad: "古いバージョンのマニュアル、重複した内容のPDF、OCRが崩れたスキャンデータをそのままナレッジに投入してしまう。",
    good: "登録前に「最新版のみ」「1ドキュメント1テーマ」「表はCSV形式に変換」「OCRの文字化けを修正」のルールを設ける。週次またはドキュメント更新のたびにナレッジも更新するサイクルを決める。",
  },
  {
    num: "02",
    title: "品質管理なしの本番公開——出力をそのまま信用しない",
    bad: "プロトタイプが動いた瞬間にエンドユーザーへ公開し、誤った回答が大量に出てしまう。",
    good: "最初の2〜4週間は社内スタッフが回答を確認する「クローズドβ」で運用する。ログでミス回答を収集しプロンプトを改善してから段階的に公開範囲を広げる。アノテーション機能で担当者が回答を評価できる仕組みを入れる。",
  },
  {
    num: "03",
    title: "権限とAPIキーの管理を後回しにする",
    bad: "APIキーをNotionやSlackに平文で貼る。全メンバーに管理者権限を付与する。セルフホスト版をインターネットに直接公開する。",
    good: "APIキーは秘密管理ツール（.envファイルまたはシークレットマネージャー）で管理する。Difyのメンバーロールは「閲覧」「編集」「管理者」で分離する。セルフホスト版は社内ネットワークに閉じるか、認証ゲートウェイ経由でアクセス制御する。",
  },
] as const;

export default function DifyBeginnerGuidePage({ faqItems }: DifyBeginnerGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Difyの使い方完全ガイド" },
          ]}
        />

        {/* ヘッダー */}
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
                title="Difyの使い方完全ガイド｜ノーコードでAI業務ボットを最短で作る方法【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Difyの使い方完全ガイド｜ノーコードでAI業務ボットを最短で作る方法【2026年版】
          </h1>
          <p className="mt-2 text-sm text-gray-500">公開日: 2026年2月19日</p>

          <p className="mt-6 text-base leading-8 text-gray-700">
            「社内FAQボットを作りたいけど、エンジニアに頼むとコストも時間もかかる」——そんな課題を解決するのが
            <span className="font-semibold text-gray-900">Dify</span>です。
            LangChainやPythonの知識がなくても、GUIの操作だけでRAG対応のAIチャットボット・ワークフローを構築できます。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、Difyとは何かという基礎から、料金・プランの選び方、社内FAQボット作成の5ステップ、業種別5つの活用事例、
            失敗しないための3つのポイントまでを一気通貫で解説します。
          </p>

          <figure className="my-8">
            <Image
              src="/images/blog/dify-beginner-guide/slide-1.png"
              alt="Dify初心者向けガイドの全体像"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Difyは<span className="font-semibold text-gray-900">ノーコード・低コードでAIチャットボット・ワークフローを構築できるオープンソースのLLMアプリ開発プラットフォーム</span>
            </li>
            <li className="pl-1 marker:text-gray-500">
              クラウド版（無料プランあり）とセルフホスト版（完全無料・OSSライセンス）を選択でき、社内機密情報を扱う場合でも安全に運用できる
            </li>
            <li className="pl-1 marker:text-gray-500">
              社内FAQ・CS一次対応・営業提案補助など、「社内文書を賢く答えるボット」を最短30分で試作できる
            </li>
            <li className="pl-1 marker:text-gray-500">
              成功のカギは「データ品質の整理」「クローズドβからの段階公開」「APIキーと権限管理」の3点
            </li>
          </ul>
        </motion.section>

        {/* LINE CTA #1 */}
        <motion.section
          className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-green-900">
            📩 LINEで毎週AI知識を配信中
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            今すぐ無料で登録する（30秒）
          </a>
        </motion.section>

        {/* Difyとは */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-dify" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Difyとは？LangChain・n8n・ChatGPTとの違いを一言で整理
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            DifyはAIチャットボットやワークフローを、コーディングなしで設計・デプロイできるLLMアプリ開発プラットフォームです。
            オープンソースで公開されており、クラウド版とセルフホスト版の両方を利用できます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            特徴は<span className="font-semibold text-gray-900">RAG（検索拡張生成）機能が組み込まれている</span>点です。
            社内ドキュメントをアップロードするだけで「ナレッジ」として登録され、チャットボットが該当文書を参照しながら回答します。
            ベクトルDBの構築やLangChainコードの記述は不要です。
          </p>

          <figure className="my-8">
            <Image
              src="/images/blog/dify-beginner-guide/slide-2.png"
              alt="Difyの特徴とRAG機能の概要"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">Dify vs 類似ツール 比較表</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            「どのツールを選ぶべきか？」は多くの現場で最初の迷いどころです。用途ごとの選択基準を比較表で整理します。
          </p>

          <figure className="my-8">
            <Image
              src="/images/blog/dify-beginner-guide/slide-3.png"
              alt="Difyと類似ツールの比較イメージ"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">カテゴリ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ノーコード</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">RAG</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">エージェント</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">セルフホスト</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いているケース</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <td className="px-4 py-4 font-semibold text-gray-900">{row.tool}</td>
                    <td className="px-4 py-4">{row.category}</td>
                    <td className="px-4 py-4">{row.noCode}</td>
                    <td className="px-4 py-4">{row.rag}</td>
                    <td className="px-4 py-4">{row.agent}</td>
                    <td className="px-4 py-4">{row.selfHost}</td>
                    <td className="px-4 py-4">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">Difyに向いているケース・向いていないケース</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-green-200 bg-green-50 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-green-900">✓ 向いているケース</h4>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">社内ドキュメントを元に回答するボットを作りたい</li>
                <li className="pl-1">エンジニアなしで非エンジニアが主導してAIツールを試作したい</li>
                <li className="pl-1">複数のLLMプロバイダーを使い分けたい（コスト・品質の最適化）</li>
                <li className="pl-1">データを自社サーバーに置きたい（セルフホスト版）</li>
                <li className="pl-1">会話ログを確認しながらPDCAを回したい</li>
              </ul>
            </section>
            <section className="rounded-lg border border-red-200 bg-red-50 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-red-900">✕ 向いていないケース</h4>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">既存SaaSを大量に連携する複雑な自動化（→ n8n / Zapierが得意）</li>
                <li className="pl-1">細かいロジック制御が必要な高度なエージェント実装（→ LangChain/LangGraph）</li>
                <li className="pl-1">全社員が汎用的にチャット利用するだけ（→ ChatGPT Teamsで十分）</li>
                <li className="pl-1">リアルタイム音声通話や動画処理が必要なアプリ</li>
              </ul>
            </section>
          </div>
        </motion.section>

        {/* 料金と始め方 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="pricing" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Difyの料金・プランと始め方の選択肢
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Difyには「クラウド版」と「セルフホスト版」の2系統があります。まず試したいだけならクラウド版の無料プラン、
            本番運用や機密情報を扱うならセルフホスト版が基本の判断軸です。
          </p>

          <figure className="my-8">
            <Image
              src="/images/blog/dify-beginner-guide/slide-4.png"
              alt="Difyの料金プランと導入パターン"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">クラウド版のプラン概要</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            クラウド版（<span className="font-semibold text-gray-900">dify.ai</span>）はアカウント作成だけで即日利用を開始できます。
            プランはSandbox（無料）・Professional・Teamの3段階が用意されており、上位プランほどメッセージ数・ナレッジ容量・チームメンバー数の上限が拡大されます。
            ※最新のプラン詳細・料金はDify公式サイトをご確認ください。
          </p>

          <figure className="my-8">
            <Image
              src="/images/blog/dify-beginner-guide/slide-5.png"
              alt="Difyクラウド版プランの選び方"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">費用</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <td className="px-4 py-4 font-semibold text-gray-900">Sandbox（無料）</td>
                  <td className="px-4 py-4">無料</td>
                  <td className="px-4 py-4">個人学習・プロトタイプ検証</td>
                  <td className="px-4 py-4">メッセージ数・ナレッジ容量に上限あり</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="px-4 py-4 font-semibold text-gray-900">Professional</td>
                  <td className="px-4 py-4">有料（公式サイト参照）</td>
                  <td className="px-4 py-4">小規模チームの業務利用</td>
                  <td className="px-4 py-4">チームメンバー数の上限あり</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="px-4 py-4 font-semibold text-gray-900">Team</td>
                  <td className="px-4 py-4">有料（公式サイト参照）</td>
                  <td className="px-4 py-4">中規模以上の法人利用</td>
                  <td className="px-4 py-4">SSO・権限管理など法人機能が充実</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">セルフホスト版（無料・OSS）の選択肢</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            DifyはApache 2.0ライセンスで公開されており、GitHubからソースコードを取得して自社サーバーに立ち上げることができます。
            Dockerが動く環境（Linux / Mac / Windows）であれば、
            <span className="font-semibold text-gray-900">docker compose up</span>のコマンド1本でローカル起動が可能です。
          </p>

          <figure className="my-8">
            <Image
              src="/images/blog/dify-beginner-guide/slide-6.png"
              alt="Difyセルフホスト版の導入イメージ"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>

          <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-7 text-gray-700">
            <p className="font-semibold text-gray-900">セルフホスト版のクイックスタート（概要）</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5">
              <li className="pl-1">GitHubから公式リポジトリをクローン</li>
              <li className="pl-1">.env.example を .env にコピーしAPIキーなどを設定</li>
              <li className="pl-1">docker compose up でコンテナ起動（初回は数分かかります）</li>
              <li className="pl-1">ブラウザでhttp://localhost/apps を開いてセットアップ完了</li>
            </ol>
            <p className="mt-3 text-xs text-gray-500">
              ※詳細は公式ドキュメントのDeployment（Self-hosting）を参照してください。手順はバージョンにより変わる場合があります。
            </p>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            セルフホスト版の最大のメリットは<span className="font-semibold text-gray-900">データが自社サーバー内に留まる</span>点です。
            個人情報・機密情報を含むドキュメントをナレッジに使う場合、セルフホスト版を社内ネットワーク内に閉じる構成が情報漏えいリスクを最小化します。
          </p>
        </motion.section>

        {/* FAQボット作成5ステップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="build-steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            社内FAQボット作成の5ステップ（実践ガイド）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「社内規程を元に質問に答えるFAQボット」を例に、Difyでのアプリ作成の流れを5ステップで解説します。
            初回セットアップから最初の動作確認まで、慣れれば30〜60分で完了します。
          </p>

          <figure className="my-8">
            <Image
              src="/images/blog/dify-beginner-guide/slide-7.png"
              alt="Difyで社内FAQボットを作る5ステップ"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>

          <div className="mt-6 space-y-6">
            {buildSteps.map((step, i) => (
              <div key={step.num} className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.num}：{step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.detail}</p>
                <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
                  <p className="text-xs font-semibold text-blue-800">💡 実務のコツ</p>
                  <p className="mt-1 text-xs leading-6 text-gray-700">{step.tip}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            内部リンク：AIエージェントの全体的な構成や設計パターンを学びたい方は
            <Link href="/academy/blog/ai-agent-build-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントの作り方完全ガイド
            </Link>
            も参照してください。
          </p>
        </motion.section>

        {/* 業種別5事例 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Dify活用事例5選｜業種・部門別の実践パターン
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Difyが最も力を発揮するのは「社内に文書があるが、検索しにくく、担当者への問い合わせが多い」状況です。
            以下の5事例はそれぞれシステムプロンプトの設計パターンが異なります。
          </p>

          <figure className="my-8">
            <Image
              src="/images/blog/dify-beginner-guide/slide-8.png"
              alt="Difyの業種別活用事例"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>

          <div className="mt-6 space-y-5">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-base font-semibold text-gray-900">
                  {uc.emoji} {uc.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">活用シーン：</span>
                  {uc.scene}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">期待効果：</span>
                  {uc.effect}
                </p>
                <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
                  <p className="text-xs leading-6 text-gray-700">{uc.point}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* LINE CTA #2 */}
        <motion.section
          className="mt-10 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-orange-800">
            📩 LINEで毎週AI知識を配信中
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            今すぐ無料で登録する（30秒）
          </a>
        </motion.section>

        {/* 失敗しない3つのポイント */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="pitfalls" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Difyで陥りやすい失敗3パターンと対策
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「動いた！」から「業務で使える」へのギャップを埋めるのに最も必要なのは技術知識ではなく、運用設計の意識です。
            現場でよく見られる3つの失敗パターンとその対策を整理します。
          </p>

          <figure className="my-8">
            <Image
              src="/images/blog/dify-beginner-guide/slide-9.png"
              alt="Dify導入で失敗しないための3つのポイント"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </figure>

          <div className="mt-6 space-y-6">
            {pitfalls.map((p) => (
              <div key={p.num} className="rounded-lg border border-gray-200 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                    {p.num}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-gray-900">{p.title}</h3>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <p className="text-xs font-semibold text-red-800">❌ よくある失敗</p>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{p.bad}</p>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                    <p className="text-xs font-semibold text-green-800">✓ 対策</p>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{p.good}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            AIエージェントの権限設計や監査フローについて詳しく知りたい方は
            <Link href="/academy/blog/ai-agent-deployment-checklist" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェント導入チェックリスト
            </Link>
            も参照してください。
          </p>
        </motion.section>

        {/* FAQ */}
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
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/academy/blog/what-is-ai-agent"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェントとは？定義・種類・作り方を解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-agent-build-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/what-is-mcp"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                MCP（Model Context Protocol）とは？できることと危険な落とし穴
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-agent-deployment-checklist"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェント導入チェックリスト｜権限・ログ・承認フローの作り方
              </Link>
            </li>
          </ul>
        </section>

        {/* まとめ */}
        <motion.section
          className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="article-summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Difyはノーコード・低コードでRAG対応のAIチャットボット・ワークフローを構築できるオープンソースプラットフォーム
            </li>
            <li className="pl-1 marker:text-gray-500">
              クラウド版（無料プランあり）とセルフホスト版（OSS・無料）を用途に応じて選択できる
            </li>
            <li className="pl-1 marker:text-gray-500">
              基本の作成手順はアプリタイプ選択→ナレッジ登録→LLM設定→公開→ログ改善の5ステップ
            </li>
            <li className="pl-1 marker:text-gray-500">
              社内FAQ・CS対応・営業提案・レポート生成・採用補助の5ユースケースが特に相性が良い
            </li>
            <li className="pl-1 marker:text-gray-500">
              成功のカギはデータ品質の整理・段階的公開・権限とAPIキー管理の3点
            </li>
          </ul>
        </motion.section>

        {/* 次のアクション */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のアクション
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Difyに興味を持ったら、まずクラウド版の無料プランで試作してみてください。
            AIリブートアカデミーでは、DifyをはじめとするAIエージェント・ノーコードAIツールの活用方法を体系的に学べるプログラムを提供しています。
            AI活用の相談はLINEからどうぞ。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              今すぐ無料で登録する（30秒）
            </a>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              アカデミーTOPへ
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
