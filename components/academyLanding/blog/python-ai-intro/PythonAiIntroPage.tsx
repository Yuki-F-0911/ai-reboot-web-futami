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

type PythonAiIntroPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Python AI 入門", "Python 機械学習 始め方", "Python AI プログラミング"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ（結論）" },
  { id: "why-python", label: "なぜPythonがAI開発で選ばれるのか" },
  { id: "setup", label: "Python環境構築ガイド（Anaconda/Colab/VS Code）" },
  { id: "python-basics", label: "AI開発に必要なPython基礎文法" },
  { id: "ai-libraries", label: "主要AIライブラリ入門（NumPy/Pandas/…）" },
  { id: "first-ml-project", label: "はじめての機械学習プロジェクト（実践手順）" },
  { id: "python-for-genai", label: "生成AI時代のPython活用（LangChain/OpenAI API/ローカルLLM）" },
  { id: "roadmap", label: "学習ロードマップ（0→3ヶ月）" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
  { id: "cta", label: "AIリブートアカデミーへ" },
] as const;

const conclusionPoints = [
  "最短ルートは「環境を決める（Colab or ローカル）→ Python基礎（関数/リスト/import）→ NumPy/Pandas → scikit-learnで1本作る」です。",
  "深層学習（TensorFlow/PyTorch）は、機械学習の流れ（前処理→学習→評価）を一度体験してから進むと挫折しにくくなります。",
  "生成AI（LLM）は「API連携」か「RAG（社内/自分のデータを参照）」が実務の入口。機密情報の扱いと品質確認ルールを最初に決めましょう。",
] as const;

const whyPythonPoints = [
  "ライブラリが豊富（データ処理〜機械学習〜深層学習〜生成AIまで一気通貫）",
  "学習コストが低め（読みやすい文法で、試行錯誤を回しやすい）",
  "コミュニティが大きく、例・教材・実装パターンが見つかりやすい",
] as const;

const environmentOptions = [
  {
    title: "Google Colab（最速で始めたい人向け）",
    bestFor: "環境構築なしで学習を始めたい／GPUを試したい",
    notes: [
      "ブラウザで動くのでインストール不要",
      "ノートブック形式で学習・実験がしやすい",
      "社内データを扱う場合はアップロード運用に注意",
    ],
  },
  {
    title: "Python + venv（ローカル開発の基本形）",
    bestFor: "プロジェクト単位で軽量に管理したい／アプリ開発につなげたい",
    notes: ["標準機能で完結しやすい", "依存関係をプロジェクトごとに分離できる", "最初はpipで十分（慣れたらPoetry等も検討）"],
  },
  {
    title: "Anaconda（データ分析をまとめて入れたい人向け）",
    bestFor: "データ分析寄り／配布済みパッケージをまとめて使いたい",
    notes: [
      "科学計算系が揃っていて導入が楽な場合が多い",
      "会社で使う場合、Anacondaのdefault channelは利用条件（TOS）の対象になるため注意（厳しいならvenv運用か、conda系ならチャンネル設計まで検討）",
      "環境が重くなりやすいので用途を絞ると良い",
    ],
  },
  {
    title: "VS Code（エディタはこれでOK）",
    bestFor: "ローカルで快適に書く／補完・デバッグを使いたい",
    notes: ["Python拡張機能を入れる", "仮想環境を選択して実行できる", "ノートブックも扱える（Jupyter連携）"],
  },
] as const;

const routeCards = [
  {
    id: "A",
    title: "機械学習ルート（予測モデルを作りたい）",
    steps: ["NumPy/Pandas", "scikit-learn", "（必要なら）PyTorch/TensorFlow"],
    href: "#first-ml-project",
    linkLabel: "機械学習の実践へ",
  },
  {
    id: "B",
    title: "生成AIルート（LLMを使ってアプリを作りたい）",
    steps: ["Python基礎", "API呼び出し", "プロンプト設計", "RAG", "評価/運用"],
    href: "#python-for-genai",
    linkLabel: "生成AIの入口へ",
  },
  {
    id: "C",
    title: "深層学習ルート（画像/音声/学習・微調整）",
    steps: ["scikit-learnで型を掴む", "PyTorch（主流） or TF/Keras"],
    href: "#ai-libraries",
    linkLabel: "主要ライブラリへ",
  },
] as const;

const setupCommands = [
  {
    title: "ローカル（venv）での最小セット",
    code: `python -m venv .venv
source .venv/bin/activate  # Windowsは .venv\\\\Scripts\\\\activate
python -m pip install -U pip
pip install numpy pandas scikit-learn`,
  },
  {
    title: "Colabで最初にやること（例）",
    code: `import sys
print(sys.version)

# 必要なら追加インストール（例）
!pip -q install numpy pandas scikit-learn`,
  },
] as const;

const pythonBasicsPoints = [
  { title: "変数と型（数値・文字列）", code: `x = 10\nname = "AI REBOOT"\nprint(x, name)` },
  { title: "リストと辞書（データを扱う基本）", code: `nums = [1, 2, 3]\nuser = {"name": "Taro", "age": 30}\nprint(nums[0], user["name"])` },
  { title: "関数（処理を部品化する）", code: `def mean(values):\n    return sum(values) / len(values)\n\nprint(mean([1, 2, 3]))` },
  { title: "import（ライブラリを使う入口）", code: `import numpy as np\n\narr = np.array([1, 2, 3])\nprint(arr.mean())` },
] as const;

const libraryCards = [
  {
    name: "NumPy",
    role: "数値計算の土台。配列・行列を高速に扱う。",
    useCases: ["特徴量（数値）の扱い", "ベクトル・行列計算", "前処理の基礎"],
  },
  {
    name: "Pandas",
    role: "表形式データ（CSV/Excel相当）を扱う中心ライブラリ。",
    useCases: ["データ読み込み", "欠損値処理", "集計・結合・フィルタ"],
  },
  {
    name: "scikit-learn",
    role: "機械学習の定番。分類/回帰/クラスタリングを一通り体験できる。",
    useCases: ["はじめてのML", "前処理＋モデルのパイプライン", "評価指標の理解"],
  },
  {
    name: "TensorFlow / Keras",
    role: "深層学習フレームワーク。学習済みモデルの活用も広い。",
    useCases: ["画像/テキストの深層学習", "モデルの学習・推論", "MLOps連携"],
  },
  {
    name: "PyTorch",
    role: "研究・開発で広く使われる深層学習フレームワーク（PyTorch 2.x系）。",
    useCases: ["カスタムモデル実装", "Transformer系の学習/微調整", "実験の高速化"],
  },
] as const;

const mlProjectSteps = [
  {
    step: "Step 1. 目的を決める（分類/回帰）",
    body: "まずは「何を予測したいか（目的変数）」と「何から予測するか（特徴量）」を言語化します。最初は分類（例: 3種類の花の判定）のほうが理解しやすいです。",
  },
  {
    step: "Step 2. データを準備して分割する",
    body: "学習用とテスト用に分けることで、作ったモデルが「初見のデータ」にどの程度通用するかを確認できます（過学習の検知）。",
  },
  {
    step: "Step 3. まずはベースラインを作る",
    body: "最初から難しいモデルを狙わず、ロジスティック回帰や決定木などで一度動く形を作ります。改善はその後です。",
  },
  {
    step: "Step 4. 評価して改善する",
    body: "精度（accuracy）だけでなく、目的に応じて再現率/適合率なども見ます。特徴量の見直しや前処理の追加で改善します。",
  },
] as const;

const firstMlCode = `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

model = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000))
model.fit(X_train, y_train)

pred = model.predict(X_test)
print("accuracy:", accuracy_score(y_test, pred))`;

const genAiUseCases = [
  {
    title: "API連携（アプリにLLMを組み込む）",
    body: "社内ツールやWebアプリにLLMを組み込みたい場合は、PythonでAPI呼び出し→入力整形→出力検証の流れを作ります。まずは「入力の設計（前提/制約/出力形式）」を固定すると品質が安定します。",
  },
  {
    title: "RAG（自分の資料・社内文書を参照して回答）",
    body: "生成AIの弱点は根拠が曖昧になりやすいこと。RAGでは検索で根拠を取り出してから回答を生成します。概念を押さえたい方は",
    link: { href: "/academy/blog/what-is-rag", label: "RAGとは？（検索拡張生成）の解説記事" },
    suffix: "も合わせて確認してください。",
  },
  {
    title: "ローカルLLM（機密性を重視する）",
    body: "機密情報を扱う場合は、ローカル実行や閉域環境での運用を検討します。推論基盤（例: Transformers / vLLM等）は状況により選び分けます。最初は「小さな検証（安全なダミーデータ）」から始め、運用ルールを作ってから広げるのが安全です。",
  },
] as const;

const roadmapPhases = [
  {
    phase: "0〜2週目：環境構築＋Python基礎",
    goals: ["Colabまたはローカルで実行できる", "関数/リスト/importを使える", "CSVを読み書きできる（Pandas）"],
  },
  {
    phase: "3〜4週目：データ処理（NumPy/Pandas）",
    goals: ["欠損値・型・集計・結合を触る", "可視化（必要なら）を試す", "前処理のパターンを増やす"],
  },
  {
    phase: "2ヶ月目：機械学習の全体像（scikit-learn）",
    goals: ["分類/回帰を1本ずつ作る", "train/test分割と評価を説明できる", "過学習と改善の考え方を理解する"],
  },
  {
    phase: "3ヶ月目：深層学習 or 生成AIに分岐",
    goals: [
      "深層学習ならPyTorch/TensorFlowで小さなモデルを動かす",
      "生成AIならAPI連携やRAGの最小構成を作る",
      "「実務で使う条件（品質・セキュリティ・運用）」を定義する",
    ],
  },
] as const;

const genAiFirstProjects = [
  {
    duration: "半日",
    title: "APIで小ツール（入力→整形→JSON出力）",
    body: "出力形式を固定して、失敗時のリトライ/バリデーションまで入れると「実務っぽい完成形」になります。",
  },
  {
    duration: "1日",
    title: "自分のPDF数本でRAG（引用付き回答）",
    body: "根拠（引用）を必須にして、回答の品質と安全性を担保する練習に向きます。",
  },
  {
    duration: "2日",
    title: "簡単なWeb UIで社内デモ（FastAPI/Streamlit等）",
    body: "入力フォーム→回答→ログ保存まで作ると、運用の論点（機密/監査/評価）が見えてきます。",
  },
] as const;

export default function PythonAiIntroPage({ faqItems }: PythonAiIntroPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Python×AI入門" },
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
                title="Python × AI入門｜環境構築からはじめての機械学習までの学習ロードマップ"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Python × AI入門｜環境構築からはじめての機械学習までの学習ロードマップ
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AIの学習全体の進め方も合わせて知りたい方は 社会人のための生成AI学習ロードマップも参考になります。
            この記事では、最短で1本作って学習を線にするために、環境選びから機械学習の実践、生成AI時代の活用までをロードマップ形式で整理します。
            PythonでAI開発を始めるときに迷いやすいのは「環境構築」「何から学ぶべきか」「ライブラリの順番」です。
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
            要点まとめ（結論）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {conclusionPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-900">あなたはA/B/Cどれ？最短ルートはこれ</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {routeCards.map((route) => (
                <section key={route.id} className="rounded-lg border border-orange-200 bg-white p-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                      {route.id}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold leading-6 text-gray-900">{route.title}</h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-gray-700">
                        {route.steps.map((step) => (
                          <li key={step} className="pl-1 marker:text-gray-400">
                            {step}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={route.href}
                        className="mt-3 inline-flex text-xs font-semibold text-orange-700 underline underline-offset-4 hover:text-orange-800"
                      >
                        {route.linkLabel}
                      </Link>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            生成AIの学習全体の進め方も合わせて知りたい方は
            <Link href="/academy/blog/how-to-learn-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              社会人のための生成AI学習ロードマップ
            </Link>
            も参考になります。
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
          <h2 id="why-python" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            なぜPythonがAI開発で選ばれるのか（ライブラリ、学習コスト、コミュニティ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Pythonは「AIに必要な道具が揃っていて、学習の順番も組みやすい」ことが強みです。特に初心者は、同じ言語のままデータ処理→機械学習→深層学習→生成AIへと段階的に進められる点が大きなメリットになります。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {whyPythonPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
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
          <h2 id="setup" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Python環境構築ガイド（Python/Anaconda/Google Colab/VS Code）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            迷う場合は「今すぐ動かしたいならColab」「継続して開発するならローカル（venv + VS Code）」が基本です。最初は環境に時間を使いすぎず、動く状態を作ってから改善していきましょう。
          </p>

          <section className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-gray-900">Pythonの推奨バージョン（目的別の安全帯）</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">
                機械学習（scikit-learn中心）: Python 3.11〜3.14でOK（ただしプロジェクトのPython/依存は固定推奨）
              </li>
              <li className="pl-1 marker:text-gray-500">
                TensorFlowを触る予定がある: 公式の対応状況を確認。迷うなら3.12（「とりあえず最新」が地雷になりやすい）
              </li>
            </ul>
          </section>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {environmentOptions.map((option) => (
              <section key={option.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-base font-semibold text-gray-900">{option.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">向いている人:</span> {option.bestFor}
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {option.notes.map((note) => (
                    <li key={note} className="pl-1 marker:text-gray-500">
                      {note}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            {setupCommands.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-4 text-xs leading-6 text-gray-700">
                  <code>{item.code}</code>
                </pre>
              </section>
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
          <h2 id="python-basics" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI開発に必要なPython基礎文法（変数/リスト/関数/import）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI開発に必要な文法は、まず「データを入れる（変数/リスト/辞書）」「処理をまとめる（関数）」「ライブラリを呼ぶ（import）」の4つです。最初から難しい書き方を覚えるより、短いコードを動かして理解を固めましょう。
          </p>
          <div className="mt-6 space-y-5">
            {pythonBasicsPoints.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-4 text-xs leading-6 text-gray-700">
                  <code>{item.code}</code>
                </pre>
              </section>
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
          <h2 id="ai-libraries" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            主要AIライブラリ入門（NumPy/Pandas/scikit-learn/TensorFlow/PyTorch）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            すべてを一度に覚える必要はありません。おすすめは「NumPy/Pandas → scikit-learn →（必要なら）TensorFlow/PyTorch」の順です。先にscikit-learnで機械学習の流れを掴むと、深層学習に進んだときの理解が安定します。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {libraryCards.map((card) => (
              <section key={card.name} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.role}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {card.useCases.map((item) => (
                    <li key={item} className="pl-1 marker:text-gray-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
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
          <h2 id="first-ml-project" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            はじめての機械学習プロジェクト（実践チュートリアル）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            最初は「データを読み込んでモデルで予測する」一連の流れを体験することが最優先です。ここでは、scikit-learnで定番の小さな分類問題（Irisデータセット）を例に、最小の手順を紹介します。
          </p>
          <div className="mt-6 space-y-4">
            {mlProjectSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-gray-900">最小コード例（scikit-learn）</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              「標準化 → ロジスティック回帰」のパイプラインで学習し、テストデータで精度を確認します。まずは動かして、次に「別モデルに変える」「評価指標を増やす」「前処理を足す」などで改善していきましょう。
            </p>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-4 text-xs leading-6 text-gray-700">
              <code>{firstMlCode}</code>
            </pre>
          </section>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="python-for-genai" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            生成AI時代のPython活用（LangChain/OpenAI API/ローカルLLM）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 生成AIの実務は「API連携」か「RAG」が入口で、Pythonは周辺ライブラリが揃っているため実装と検証を回しやすいです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            生成AI（LLM）は、機械学習とは違って「既存モデルを使う」比重が大きくなります。実務では、(1)API連携でプロダクトに組み込む、(2)自分のデータに基づいて回答する（RAG）、の2パターンが入口になりやすいです。
          </p>
          <section className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-gray-900">最初の1本（最小の完成形イメージ）</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {genAiFirstProjects.map((project) => (
                <section key={project.title} className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold text-gray-500">{project.duration}</p>
                  <h4 className="mt-1 text-sm font-semibold text-gray-900">{project.title}</h4>
                  <p className="mt-2 text-xs leading-6 text-gray-700">{project.body}</p>
                </section>
              ))}
            </div>
          </section>
          <div className="mt-6 space-y-4">
            {genAiUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  {item.body}
                  {"link" in item && item.link ? (
                    <>
                      <Link href={item.link.href} className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                        {item.link.label}
                      </Link>
                      {item.suffix}
                    </>
                  ) : null}
                </p>
              </section>
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
          <h2 id="roadmap" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            学習ロードマップ（0→3ヶ月の段階別）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            3ヶ月で「作って理解する」状態を作るなら、段階を固定して迷いを減らすのがコツです。最初はテーマを増やさず、毎週1つだけ前に進めましょう。
          </p>
          <div className="mt-6 space-y-4">
            {roadmapPhases.map((phase) => (
              <section key={phase.phase} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {phase.goals.map((goal) => (
                    <li key={goal} className="pl-1 marker:text-gray-500">
                      {goal}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            学習の成果を資格で可視化したい場合は
            <Link href="/academy/blog/ai-certification-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI資格おすすめ一覧（難易度・費用）
            </Link>
            も参考になります。
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
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-certification-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI資格おすすめ一覧（難易度・費用）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAGとは？（検索拡張生成）
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
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
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">生成AIの学習全体の進め方も合わせて知りたい方は 社会人のための生成AI学習ロードマップ も参考になります。</li>
            <li className="pl-1 marker:text-gray-500">生成AIの実務は「API連携」か「RAG」が入口で、Pythonは周辺ライブラリが揃っているため実装と検証を回しやすいです。</li>
            <li className="pl-1 marker:text-gray-500">要点まとめ（結論）のポイントを振り返る。</li>
          </ul>
        </motion.section>
<motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
	        >
	          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
	            AIリブートアカデミーで、Python×AIを「実務で使える型」＋キャリアの武器へ
	          </h2>
	          <p className="mt-4 text-base leading-8 text-gray-700">
	            AI開発は、ライブラリ名よりも「何の価値を出すか」を言語化する思考OSと、「検証→改善」を回す運用が成果を分けます。型の習得だけでなく、自分の強みをどう伸ばすかまで整理しながら100日間の伴走で実務に定着させたい方は、アカデミーの講座一覧をご覧ください。
	          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              無料セミナーを見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
