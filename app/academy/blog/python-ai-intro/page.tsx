import type { Metadata } from "next";
import PythonAiIntroPage from "@/components/academyLanding/blog/python-ai-intro/PythonAiIntroPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Python × AI入門｜環境構築からはじめての機械学習までの学習ロードマップ | AIリブート";
const pageDescription =
  "「Python AI 入門」「Python 機械学習 始め方」「Python AI プログラミング」で調べる方向けに、PythonがAI開発で選ばれる理由、環境構築（Anaconda/Colab/VS Code）、基礎文法、主要ライブラリ、はじめての機械学習プロジェクト、生成AI時代の活用までを、0→3ヶ月の学習ロードマップとして整理した入門ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/python-ai-intro";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";
const faqItems = [
  {
    question: "Python初心者でもAI開発を始められますか？",
    answer:
      "はい。最初は数学よりも「データを読み込む→加工する→モデルで予測する」の流れを体験することが重要です。まずはGoogle Colabなど環境構築が不要な方法で、scikit-learnのサンプルから始めると挫折しにくくなります。",
  },
  {
    question: "Pythonはどのバージョンを選べばよいですか？",
    answer:
      "基本はPython 3.11以上を選ぶのが無難です（新しすぎる版はライブラリ対応が追いつかない場合があります）。困ったら「利用するライブラリが推奨するPythonバージョン」に合わせるのが安全です。",
  },
  {
    question: "Anacondaと通常のPython（venv）はどちらがよいですか？",
    answer:
      "学習目的ならどちらでもOKです。データ分析系をまとめて入れたいならAnaconda、軽量にプロジェクト単位で管理したいならvenv（+ pip）がおすすめです。迷う場合はColabで学習を進め、必要になってからローカルへ移行するとスムーズです。",
  },
  {
    question: "最初に学ぶべきAIライブラリは何ですか？",
    answer:
      "最短で成果を出すなら、NumPy/Pandasでデータ操作の基礎を固めてから、scikit-learnで機械学習の全体像を掴む流れがおすすめです。深層学習はその後にTensorFlowやPyTorchへ進むと理解が安定します。",
  },
  {
    question: "GPUは必要ですか？",
    answer:
      "はじめての機械学習（scikit-learn中心）ではGPUは不要です。深層学習や画像・大規模モデルを扱う段階で必要になることが多く、その場合はColabなどクラウドGPUを使うと初期投資を抑えられます。",
  },
  {
    question: "生成AI（LLM）開発もPythonでできますか？",
    answer:
      "はい。OpenAI APIなどの外部API連携、LangChain等のフレームワーク、ローカルLLMの実行・評価など、Pythonは周辺ツールが充実しています。機密情報の取り扱いと、出力の品質確認ルールは最初に決めておくのが安全です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["Python AI 入門", "Python 機械学習 始め方", "Python AI プログラミング", "Python", "機械学習", "深層学習", "scikit-learn", "PyTorch", "TensorFlow"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: pageOgImageUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageOgImageUrl],
  },
};

export default function PythonAiIntroRoute() {
  return (
    <>
      <ArticleStructuredData
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        imageUrl={pageOgImageUrl}
        articleType="BlogPosting"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://ai-reboot.io" },
          { name: "アカデミー", url: "https://ai-reboot.io/academy" },
          { name: "ブログ", url: "https://ai-reboot.io/academy/blog" },
          { name: "Python×AI入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <PythonAiIntroPage faqItems={[...faqItems]} />
    </>
  );
}
