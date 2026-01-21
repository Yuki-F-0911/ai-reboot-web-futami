import { Metadata } from "next";
import WebtoonPageClient from "./WebtoonPageClient";

export const metadata: Metadata = {
  title: "AIリブートアカデミー | 漫画で分かる生成AI時代のキャリア | AI REBOOT",
  description: "経済産業省認定リスキリング講座。100日間で生成AI時代を生き抜く思考OSをインストール。最大70%の補助金活用可能。",
};

export default function WebtoonPage() {
  return <WebtoonPageClient />;
}
