import type { Metadata } from "next";
import MessagePageContent from "@/components/academyLanding/message/MessagePageContent";

const messageTitle = "代表メッセージ | AIリブートアカデミー";
const messageDescription =
    "AIリブートアカデミー代表メッセージ。なぜ今この講座を運営するのか、生成AI時代に必要な思考OSと、受講生と共に挑戦し続ける想いをお伝えします。";
const messageUrl = "https://ai-reboot.io/academy/message";

export const metadata: Metadata = {
    title: messageTitle,
    description: messageDescription,
    alternates: {
        canonical: messageUrl,
    },
    openGraph: {
        title: messageTitle,
        description: messageDescription,
        url: messageUrl,
        siteName: "AI REBOOT",
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: messageTitle,
        description: messageDescription,
    },
};

const MessagePage = () => {
  return <MessagePageContent />;
};

export default MessagePage;
