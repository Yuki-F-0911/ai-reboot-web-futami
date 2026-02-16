import type { Metadata } from "next";
import MessagePageContent from "@/components/academyLanding/message/MessagePageContent";

const messageTitle = "メッセージ | AIリブートアカデミー";
const messageDescription =
    "AIリブートアカデミーを運営する想いと、受講生に届けたいメッセージ。なぜ今AIリスキリングが必要なのか。";
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
        siteName: "AIリブートアカデミー",
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
