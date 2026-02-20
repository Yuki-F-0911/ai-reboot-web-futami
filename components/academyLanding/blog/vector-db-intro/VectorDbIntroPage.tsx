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

type VectorDbIntroPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["ベクターデータベース とは", "ベクトルDB 比較", "Pinecone 使い方", "RAG 実装"] as const;

const tocItems = [
  { id: "conclusion", label: "結論: 選定軸を先に固定する" },
  { id: "basics", label: "ベクターDBの仕組みを理解する" },
  { id: "comparison", label: "3製品比較表" },
  { id: "decision-flow", label: "用途×コスト×スケール判断フロー" },
  { id: "cases", label: "個人実装〜企業導入の事例" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
  { id: "cta", label: "LINEで継続学習する" },
] as const;

const comparisonRows = [
  {
    axis: "運用形態",
    pinecone: "フルマネージド（serverless運用を選びやすい）。",
    weaviate: "オープンソース基盤 + マネージドクラウドの両方を選択可能。",
    chroma: "ローカル実行で始めやすく、Persistent/Cloudへ段階移行できる。",
    note: "インフラ運用を誰が持つかを先に決める。",
  },
  {
    axis: "初期セットアップ",
    pinecone: "最短で開始しやすい。SDK中心でPoC着手が速い。",
    weaviate: "構成の自由度が高い分、設計項目は増える。",
    chroma: "in-memoryなら最速。検証用途の立ち上げ負荷が低い。",
    note: "最初の1週間で価値検証したいなら着手速度が重要。",
  },
  {
    axis: "検索・インデックス設計",
    pinecone: "マネージド前提で実装を進めやすい。",
    weaviate: "HNSW/flat/dynamicなど、検索挙動の調整余地が広い。",
    chroma: "軽量な構成で扱いやすいが、本番要件は別途設計が必要。",
    note: "検索精度の改善ループをどこまで内製するかで選ぶ。",
  },
  {
    axis: "コスト構造",
    pinecone: "保存量・操作量・スキャン量の管理が重要。",
    weaviate: "セルフホストならインフラ費、クラウドなら運用委譲コストを考慮。",
    chroma: "個人検証は低コストで始めやすいが、運用機能追加時にコスト増。",
    note: "月額単価より、3か月運用総額で比較する。",
  },
  {
    axis: "スケールとSLO",
    pinecone: "中〜大規模運用で安定性を取りやすい。",
    weaviate: "設計次第で柔軟に拡張できるが、運用設計が必要。",
    chroma: "小〜中規模に強い。高負荷時は構成見直し前提。",
    note: "P95遅延と同時実行数を評価指標に置く。",
  },
  {
    axis: "運用チーム適性",
    pinecone: "少人数で運用したいチーム向き。",
    weaviate: "検索基盤を主体的に設計したい技術チーム向き。",
    chroma: "個人開発者・小規模チームの検証開始に向く。",
    note: "体制とスキルに合わない選択は長続きしない。",
  },
  {
    axis: "注意点",
    pinecone: "namespaceやデータ分割の設計を誤るとコストが増えやすい。",
    weaviate: "運用責任範囲を曖昧にすると性能問題の切り分けが難しい。",
    chroma: "ローカル構成のまま本番へ進めると永続化/監視が不足しやすい。",
    note: "PoC時点で移行計画を持っておく。",
  },
] as const;

const decisionFlow = [
  {
    title: "Step 1: 用途を決める（個人検証 / チームPoC / 本番運用）",
    detail:
      "まず、何をどこまで実現したいかを明確にします。個人検証なら実装速度を優先、部門PoCなら再現性と権限管理、本番運用なら可用性と監視が必須です。ここを曖昧にすると、比較表を見ても結論が出ません。",
    output: "用途が決まると、候補製品の絞り込みが一気に進みます。",
  },
  {
    title: "Step 2: コスト構造を分解する（初期費 + 運用費 + 改善費）",
    detail:
      "初期費用だけで比較せず、3か月で必要になる運用作業まで含めます。埋め込み再生成、インデックス再構築、検索チューニング、障害対応工数まで積むと、実際の差が見えます。",
    output: "見積もりは「月額」ではなく「運用付き総額」で判断します。",
  },
  {
    title: "Step 3: スケール目標を設定する（データ件数 / QPS / P95遅延）",
    detail:
      "RAGは回答品質だけでなく応答速度も体験品質に直結します。検索対象件数、同時アクセス数、許容遅延を先に置けば、必要な構成が定まり、製品選定を感覚で進めずに済みます。",
    output: "最低でもP95遅延、検索ヒット率、1クエリあたりコストを追跡します。",
  },
] as const;

const caseStudies = [
  {
    stage: "ケース1: 個人実装（1人でRAGを検証）",
    decision: "ChromaDBで開始し、検索品質評価に集中する。",
    reason:
      "最小構成で立ち上げが速く、文書分割・埋め込みモデル・検索条件の試行錯誤に時間を使えるためです。いきなり本番級運用に寄せるより、まず「質問に対して正しい文書が取れるか」を確認します。",
    caution: "in-memoryのまま進めると再現が難しくなるため、早期にPersistent構成へ移行します。",
  },
  {
    stage: "ケース2: 部門PoC（3〜10人で社内展開）",
    decision: "PineconeまたはWeaviate Cloudを候補に、運用責任の分担で決める。",
    reason:
      "部門利用では、アクセス制御、障害時対応、監視、問い合わせ窓口が必要になります。運用を委譲したいならマネージド寄り、検索ロジックを深く内製したいならWeaviate寄りが現実的です。",
    caution: "PoC時点でnamespace設計やコレクション設計を統一しておかないと、後で再投入コストが発生します。",
  },
  {
    stage: "ケース3: 企業導入（複数部門・高トラフィック）",
    decision: "SLOと監査要件を先に固定し、製品より運用設計を優先する。",
    reason:
      "本番は機能差より、データ更新運用、権限管理、監査ログ、障害復旧フローが成功要因になります。製品を決める前に、運用手順書と評価指標を合意しておくと導入後のトラブルを減らせます。",
    caution: "検索精度改善の責任者を明確にしないと、品質問題が放置されやすくなります。",
  },
] as const;

const evaluationChecklist = [
  "評価クエリを最低30問用意し、検索ヒット率を毎週測定する",
  "P95遅延の目標値を先に決める（体験品質基準）",
  "1クエリあたりコストを可視化し、増加時のアラートを設定する",
  "権限モデル（誰がどの文書へアクセス可能か）を先に定義する",
  "障害時の暫定運用（フェイルオーバー/復旧手順）を決める",
  "埋め込みモデル更新時の再インデックス手順を手順化する",
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "📩 LINEで毎週AI知識を配信中";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";
const lineCtaButtonLabel = "LINEで週1AI通信を受け取る（無料）";

function LineCtaBox({ className = "blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" }: { className?: string }) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-green-900">{lineCtaTitle}</p>
      <p className="mt-3 text-sm leading-7 text-green-900">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          {lineCtaButtonLabel}
        </a>
      </div>
    </section>
  );
}

export default function VectorDbIntroPage({ faqItems }: VectorDbIntroPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ベクターデータベース入門" },
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
                title="ベクターデータベース入門｜Pinecone・Weaviate・ChromaDBの比較と選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ベクターデータベース入門｜Pinecone・Weaviate・ChromaDBの比較と選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月19日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            RAGの品質は、生成モデルだけで決まりません。検索基盤であるベクターデータベースの選定が、回答精度・応答速度・運用コストを左右します。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事では、ベクターデータベースの仕組みを類似度計算から整理し、Pinecone・Weaviate・ChromaDBを同じ軸で比較します。最後に、用途×コスト×スケールで決める実務フローを提示します。
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
          <h2 id="conclusion" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            結論: RAG向けベクターDBは「用途×コスト×スケール」を先に決めると選びやすい
          </h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              ベクターDB選定の最初の論点は、機能数ではなく「どの運用フェーズで使うか」です。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              個人検証なら実装速度、部門PoCなら運用負荷、本番導入ならSLOと監査要件を優先します。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              Pinecone・Weaviate・ChromaDBはいずれも有力ですが、最適解はチーム体制と責任分担で変わります。
            </li>
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            まずRAG全体像を確認したい場合は
            <Link href="/academy/blog/what-is-rag" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              RAG（検索拡張生成）とは
            </Link>
            を先に読むと、選定論点を整理しやすくなります。
          </p>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox />
        </div>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="basics" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            ベクターデータベースとは何か: 埋め込みと類似度検索の仕組みを最短で理解する
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            ベクターデータベースは、文書を数値ベクトルとして保存し、質問ベクトルとの距離を計算して近い情報を返すデータ基盤です。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            通常のキーワード検索は文字の一致に強い一方、意味が近いが表現が違う文章を拾いにくい場面があります。ベクトル検索は、文章の意味を埋め込み（embedding）で表現し、
            cosineやdot productなどの距離指標で近さを判定します。
          </p>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">RAGでの処理フロー</h3>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">文書をチャンク化し、埋め込みベクトルを生成して保存する。</li>
            <li className="pl-1">ユーザー質問をベクトル化し、近い文書を上位k件検索する。</li>
            <li className="pl-1">取得文書をコンテキストとしてLLMへ渡し、最終回答を生成する。</li>
          </ol>

          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            実務では、近似最近傍探索（ANN）を使って速度を確保します。代表的なHNSWは、精度と速度のバランスを取りやすく、多くの実装で採用されています。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            ただし、ベクターDBを入れるだけで精度は上がりません。チャンク設計、メタデータ設計、再ランキング、評価クエリ運用まで含めて初めて品質が安定します。
            RAGの評価設計は
            <Link href="/academy/blog/rag-vs-finetuning-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              RAGとファインチューニングの判断フレーム
            </Link>
            もあわせて参照してください。
          </p>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">通常のRDB/全文検索だけでは不足しやすい理由</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            社内文書検索では、「言い換え」「略語」「表記ゆれ」が頻繁に発生します。キーワード一致だけで運用すると、正しい文書が検索上位に来ないケースが増え、結果として回答精度のばらつきが大きくなります。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              問い合わせ文と文書本文で語彙が一致しなくても、意味的に近い文書を取得したい。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              改訂版・旧版が混在する場合に、メタデータで優先度を制御したい。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              検索結果に根拠文書IDを返し、監査可能な回答にしたい。
            </li>
          </ul>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            つまりベクターDBの導入目的は、単なる高速化ではなく「意味検索を業務要件へ接続すること」です。ここを定義してから製品比較に進むと、導入後の手戻りを減らせます。
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
          <h2 id="comparison" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Pinecone・Weaviate・ChromaDBの比較表: 運用形態・費用構造・拡張性を同じ軸で見る
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            以下の比較は、公式ドキュメントの公開情報をベースに「導入時に意思決定へ直結する軸」に絞って整理しています。単純な優劣ではなく、運用条件との適合性を確認してください。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Pinecone</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Weaviate</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">ChromaDB</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">判断メモ</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.pinecone}</td>
                    <td className="py-4 px-4">{row.weaviate}</td>
                    <td className="py-4 px-4">{row.chroma}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            価格・仕様は更新されるため、実装前に公式ページで再確認してください（確認日: 2026-02-19）。特に、Pineconeは操作量・スキャン量、Weaviateは運用責任範囲、
            ChromaDBは永続化構成と運用機能の設計が費用と品質に直結します。
          </p>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">比較時に見落としやすい実装論点</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">データ更新頻度:</span> 日次更新か月次更新かで、再インデックス運用の負荷が変わる。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">テナント分離:</span> 顧客単位で分離する場合、namespace/collection設計がコストと安全性に影響する。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">可観測性:</span> 「検索に失敗した理由」を追えるログ設計がないと、精度改善サイクルが止まる。
            </li>
          </ul>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            コミュニティでも、PoC段階では問題が見えず、本番トラフィックで遅延や再現性課題が顕在化するケースが繰り返し報告されています。導入初期から評価指標を固定し、
            運用チームが毎週改善できる構造にしておくことが重要です。
          </p>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="decision-flow" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            RAG向けの選定フロー: 用途×コスト×スケールを3ステップで判断する
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            製品比較の前に、評価軸を固定します。以下の順で確認すると、チーム内で判断根拠を共有しやすくなります。
          </p>

          <div className="mt-7 space-y-4">
            {decisionFlow.map((step, index) => (
              <section key={step.title} className="rounded-lg border border-emerald-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-emerald-600 px-2 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="blog-h3 text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{step.detail}</p>
                <p className="blog-p mt-3 text-sm font-semibold leading-7 text-emerald-700">{step.output}</p>
              </section>
            ))}
          </div>

          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            業務別のRAG活用像は
            <Link href="/academy/blog/rag-use-cases" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              RAG活用事例8選
            </Link>
            で整理しています。選定フローと合わせると、優先順位を決めやすくなります。
          </p>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">判断フローを会議で使うときのテンプレート</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            実際の導入会議では、以下の3行をそのまま埋めるだけで方針が固まります。重要なのは、技術選定と運用責任者の合意を同時に取ることです。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">用途: 「社内FAQ一次回答を、まず1部門で運用する」</li>
            <li className="blog-li pl-1 marker:text-gray-500">コスト: 「3か月総額と運用人件費を見積もり、予算上限を設定する」</li>
            <li className="blog-li pl-1 marker:text-gray-500">スケール: 「月間クエリ数とP95遅延目標を設定する」</li>
          </ul>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            この3点が決まらない状態で製品名だけ議論すると、評価軸がずれて比較不能になります。選定に時間がかかる原因はツール数ではなく、判断条件の未定義であることがほとんどです。
          </p>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </div>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cases" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            個人実装〜企業導入のケース別に見る選び方: 移行前提で設計すると失敗を減らせる
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            ベクターDB選定は一度決めたら終わりではありません。多くの現場では、個人検証からPoC、本番運用へ段階的に要件が変わります。
            そのため、最初から「次の段階へどう移るか」を決めておくことが重要です。
          </p>

          <div className="mt-7 space-y-4">
            {caseStudies.map((item) => (
              <section key={item.stage} className="rounded-lg border border-gray-200 p-6">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{item.stage}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">選択方針:</span> {item.decision}
                </p>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">理由:</span> {item.reason}
                </p>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">注意点:</span> {item.caution}
                </p>
              </section>
            ))}
          </div>

          <h3 className="blog-h3 mt-10 text-lg font-semibold text-gray-900">選定後に最低限追跡するチェックリスト</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {evaluationChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="blog-h3 mt-10 text-lg font-semibold text-gray-900">移行時に実施しておくと効果が大きい3項目</h3>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">
              <span className="font-semibold text-gray-900">評価セットの固定:</span> 検索クエリと期待回答を固定し、製品変更時も同じ条件で比較する。
            </li>
            <li className="pl-1">
              <span className="font-semibold text-gray-900">データスキーマの抽象化:</span> コレクション定義とメタデータ項目をコード上で統一し、移行コストを下げる。
            </li>
            <li className="pl-1">
              <span className="font-semibold text-gray-900">段階移行:</span> 全量移行ではなく、業務単位でカナリア運用しながら切り替える。
            </li>
          </ol>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            本番導入前には、運用面の抜け漏れを
            <Link href="/academy/blog/ai-agent-deployment-checklist" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェント導入チェックリスト
            </Link>
            で確認しておくと、運用開始後の手戻りを抑えられます。
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
          <h2 id="faq" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
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

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="related-links" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            関連記事
          </h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/what-is-rag" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）とは？仕組み・メリット・活用事例をわかりやすく解説
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/rag-use-cases" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）の活用事例8選｜業種・業務別に解説
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/rag-vs-finetuning-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAGとファインチューニング、どちらを選ぶ？社内データ活用の判断フレーム
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-agent-deployment-checklist" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェント導入チェックリスト｜運用前に確認すべき要件
              </Link>
            </li>
          </ul>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、生成AI活用力の習得だけでなく、自己理解・キャリアデザイン、仲間と共に学ぶ環境の3本柱で、実務に定着する学びを支援しています。
          </p>
        </motion.section>

        <section id="cta" className="mt-14">
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </section>
      </article>
    </main>
  );
}
