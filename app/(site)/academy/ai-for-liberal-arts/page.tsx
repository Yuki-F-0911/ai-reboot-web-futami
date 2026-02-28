import type { Metadata } from "next";
import AiForLiberalArtsPage from "@/components/academyLanding/ai-for-liberal-arts/AiForLiberalArtsPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const aiForLiberalArtsTitle = "文系・非エンジニアのためのAI活用入門｜文系だからこそ、言葉で使える";
const aiForLiberalArtsDescription =
  "「AIは理系の人のもの」という思い込みがあっても大丈夫。生成AIは言葉で指示して、整理・下書き・観点出しを助けるツールです。AIリブートアカデミーは、生成AI活用力/自己理解・キャリアデザイン/仲間と共に学ぶ環境の3本柱で、文系・非エンジニアの最初の一歩を支えます。";
const aiForLiberalArtsUrl = "https://ai-reboot.io/academy/ai-for-liberal-arts";
const aiForLiberalArtsOgImagePath = "/academy/opengraph-image";

const aiForLiberalArtsFaqItems = [
  {
    question: "文系で、プログラミング未経験でも大丈夫ですか？",
    answer:
      "大丈夫です。生成AIはコードを書く人だけのものではなく、言葉で指示して「整理・下書き・観点出し」を助けるツールです。文系の強み（要約・質問・構成）を活かして、まずは身近な業務から使える形にしていきます。",
  },
  {
    question: "プロンプト（指示文）が難しそうで不安です。",
    answer:
      "プロンプトは、魔法の言い回しではなく「仕事の整理」です。目的/背景/条件（相手・トーン・文字数・入れる要素）を言葉にすると出力が安定します。最初はテンプレート化し、迷いにくい形にしていきます。",
  },
  {
    question: "人事の仕事だと、具体的にどう使えますか？",
    answer:
      "採用文面の叩き台、案内文や返信文の下書き、面接質問の観点出し、研修資料の構成案、アンケート自由記述の整理などから始めやすいです。AIの出力をそのまま採用するのではなく、あなたが判断と最終調整を担います。",
  },
  {
    question: "個人情報や社内情報の扱いが心配です。",
    answer:
      "候補者の個人情報や社内の機密情報は、そのまま入力しないのが基本です。匿名化・抽象化、社内ルールに沿った運用など、安全に使う前提を押さえたうえで進めます。",
  },
  {
    question: "補助金は使えますか？",
    answer:
      "制度の対象条件や募集状況は変動するため、まずは公式情報と確認手順を押さえるのが安全です。制度概要と確認ポイントは「補助金ガイド」で整理しています。",
  },
  {
    question: "受講生の評判・口コミはどこで確認できますか？",
    answer:
      "「受講生の評判・口コミ」ページで確認できます。セミナーやLINE相談では、あなたの状況に合わせて、学び方や進め方の整理も可能です。",
  },
] as const;

export const metadata: Metadata = {
  title: aiForLiberalArtsTitle,
  description: aiForLiberalArtsDescription,
  keywords: ["AI 文系", "非エンジニア AI活用", "文系 リスキリング", "人事 AI活用", "生成AI 入門", "プロンプト 初心者"],
  alternates: {
    canonical: aiForLiberalArtsUrl,
  },
  openGraph: {
    title: aiForLiberalArtsTitle,
    description: aiForLiberalArtsDescription,
    url: aiForLiberalArtsUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: aiForLiberalArtsOgImagePath,
        width: 1200,
        height: 630,
        alt: "文系・非エンジニアのためのAI活用入門",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aiForLiberalArtsTitle,
    description: aiForLiberalArtsDescription,
    images: [aiForLiberalArtsOgImagePath],
  },
};

export default function AiForLiberalArtsRoute() {
  return (
    <>
      <FAQStructuredData items={[...aiForLiberalArtsFaqItems]} />
      <AiForLiberalArtsPage faqItems={[...aiForLiberalArtsFaqItems]} />
    </>
  );
}

