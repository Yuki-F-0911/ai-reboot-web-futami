import type { Metadata } from "next";
import Script from "next/script";
import MessagePageContent from "@/components/academyLanding/message/MessagePageContent";

const messageTitle = "メッセージ | AIリブートアカデミー";
const messageDescription =
    "AIリブートアカデミー代表・成瀬拓也のメッセージ。運営者プロフィールと実務実績を通じて、なぜ今AIリスキリングが必要なのかをお伝えします。";
const messageUrl = "https://ai-reboot.io/academy/message";
const messageOgImagePath = "/academy/message/opengraph-image";

export const metadata: Metadata = {
    title: messageTitle,
    description: messageDescription,
    keywords: [
        "AIリブートアカデミー 代表メッセージ",
        "成瀬拓也",
        "運営者プロフィール",
        "AIリスキリング 実務実績",
        "株式会社ウィルフォワード",
    ],
    alternates: {
        canonical: messageUrl,
    },
    openGraph: {
        title: messageTitle,
        description: messageDescription,
        url: messageUrl,
        siteName: "AIリブートアカデミー",
        locale: "ja_JP",
        type: "website",
        images: [
            {
                url: messageOgImagePath,
                width: 1200,
                height: 630,
                alt: "AIリブートアカデミー 代表メッセージ",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: messageTitle,
        description: messageDescription,
        images: [messageOgImagePath],
    },
};

const MessagePage = () => {
  const operatorProfileStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "AIリブートアカデミー 代表メッセージ",
    description: messageDescription,
    url: messageUrl,
    inLanguage: "ja-JP",
    mainEntity: {
      "@type": "Person",
      name: "成瀬 拓也",
      jobTitle: "AIリブートアカデミー主宰 / 株式会社ウィルフォワード 代表取締役",
      worksFor: {
        "@type": "Organization",
        name: "株式会社ウィルフォワード",
        url: "https://ai-reboot.io",
      },
      description:
        "経営者として複数の事業を創出しながら、経済産業省認定リスキリング講座「AIリブートアカデミー」を主宰。ホラクラシー経営やティール組織など次世代の組織開発を実践。",
      knowsAbout: ["生成AI活用", "キャリア支援", "組織開発", "リスキリング"],
      subjectOf: [
        {
          "@type": "CreativeWork",
          name: "経済産業省認定リスキリング講座「AIリブートアカデミー」の運営",
        },
        {
          "@type": "CreativeWork",
          name: "ホラクラシー経営・ティール組織を含む次世代組織開発の実務",
        },
      ],
    },
  };

  return (
    <>
      <Script
        id="academy-message-profile-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(operatorProfileStructuredData),
        }}
      />
      <MessagePageContent />
    </>
  );
};

export default MessagePage;
