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

type AiCopyrightCommercialGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI 著作権", "商用利用", "画像/動画/文章", "社内チェックリスト"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "copyright-basics", label: "著作権の基本（生成AI時代）" },
  { id: "image-copyright", label: "画像生成AI：著作権と商用利用" },
  { id: "text-copyright", label: "文章生成AI：著作権と商用利用" },
  { id: "video-copyright", label: "動画生成AI：著作権と商用利用" },
  { id: "global-regulations", label: "海外の法規制と最新動向" },
  { id: "checklist", label: "社内チェックリスト（8項目）" },
  { id: "ng-examples", label: "よくあるNG例と対処法" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "summary", label: "まとめ" },
  { id: "cta", label: "CTA" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

export default function AiCopyrightCommercialGuidePage({ faqItems }: AiCopyrightCommercialGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIの著作権・商用利用ガイド" },
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
                title="生成AIの著作権・商用利用ガイド（画像/動画/文章）｜現場で迷う論点を整理【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIの著作権・商用利用ガイド（画像/動画/文章）｜現場で迷う論点を整理【2026年版】
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AIを業務に入れると、最終的にぶつかるのが「著作権」と「商用利用」です。画像・動画・文章のいずれも、判断は{" "}
            <span className="font-semibold text-gray-900">利用規約／学習データ／生成物の類似性</span>で揺れます。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、日本の現行整理（著作権法の原則・30条の4）を踏まえつつ、現場で迷いやすい論点を「使い方のチェック項目」として落とし込みます。
            法務レビュー前の叩き台としても使えるように、社内チェックリスト（8項目）を添えます。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            ※本記事は一般的な情報提供を目的としており、個別案件の法的助言ではありません。最終判断は社内法務/顧問弁護士とご確認ください。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-10 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              AI生成物に著作権が発生するかは、<span className="font-semibold text-gray-900">「人間の創作的関与」</span>
              の度合いで判断されます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              商用利用は<span className="font-semibold text-gray-900">利用規約・学習データ・類似性</span>の3点をクリアすることが条件です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              社内チェックリストを整備し、用途（社内/社外、広告/記事/資料、制作物/検証）別に判断基準を持つのが最短です。
            </li>
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
          <h2 id="copyright-basics" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            生成AI時代の著作権の基本
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            まずは「何が著作物か」を揃えます。社内議論が割れるときは、法律用語の前提がズレていることが多いです。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">著作権法の原則（思想・感情の創作的表現）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            日本の著作権は「思想又は感情を創作的に表現したもの」を保護します。ポイントは「誰が創作したか」と「どこに創作性があるか」です。
            生成AIの利用では、プロンプト、編集、選択、構成、レイアウトなどの人の関与が争点になりやすくなります。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">AI生成物と著作権の関係（日本の現行整理）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            実務上は「AIが自律生成した部分は原則として著作権が発生しない」「人が創作的に関与した部分は著作物になりうる」と整理しておくと運用が安定します。
            外部公開や商用利用では、著作権だけでなく<span className="font-semibold text-gray-900">契約（利用規約）</span>の制約も同時に見る必要があります。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">著作権法30条の4（情報解析の例外規定）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            学習データに著作物が含まれている場合でも、日本では著作権法30条の4により「情報解析」を目的とする利用は原則として適法の範囲が広いとされています。
            ただし、生成物が特定作品に似すぎる場合や、別の権利（商標、パブリシティ、肖像等）が絡む場合は別論点になります。
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
          <h2 id="image-copyright" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            画像生成AIの著作権と商用利用
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            画像は「似た/似てない」で揉めます。結論は、利用規約と類似性チェックを運用に組み込み、再現性の高い生成フローを避けることです。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">主要サービスの利用規約の見方（Midjourney / DALL·E / Stable Diffusion）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            各サービスで「商用利用可否」「クレジット要否」「禁止コンテンツ」「学習利用（入力データの扱い）」が異なります。
            ルールは頻繁に更新されるため、社内では「ツール別に最新版の規約URLと要点」を台帳化するのが安全です。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">チェック① 利用規約</h4>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                商用利用、クレジット、禁止事項、入力データの取扱いを確認。プラン差（無料/有料）で条件が変わることもあります。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">チェック② 学習データ</h4>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                生成元モデルの学習データに関する開示、追加学習（LoRA等）で持ち込む素材の権利を確認します。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">チェック③ 類似性</h4>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                既存作品に酷似しないか（構図、特徴、ロゴ、キャラ、スタイル）を人が確認。必要なら差し替えます。
              </p>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">類似性リスクと対策（i2i / LoRA / 特定作家スタイル模倣）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            i2i（画像→画像）や特定作家名の指定、特定作品のワンシーンを想起させる指示は、類似性の再現性を高めます。
            実務対策は「作家名・作品名を指示しない」「参照素材は権利クリア済みに限定」「出力は公開前に第三者権利（著作権/商標/肖像）でチェック」です。
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-700">
            画像生成のツール選びと運用フローは
            <Link href="/academy/blog/ai-image-generation-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI画像生成おすすめツール比較
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
          <h2 id="text-copyright" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            文章生成AIの著作権と商用利用
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            文章は「著作権」よりも先に「誤情報」と「盗用（類似）」が事故になります。公開前提なら、ファクトチェックと類似性チェックを工程化します。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">ChatGPT/Claude等の出力物の権利（実務上の見方）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            多くの文章生成AIは、利用規約上は「出力物を利用できる」設計になっています。ただし、著作権侵害の有無は規約ではなく、アウトプットの内容（他者作品との類似）で判断されます。
            また、社内の入力データの扱い（学習/保存/共有）も規約・設定で変わるため、運用上は「入力データの禁止事項」を先に決める必要があります。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">商用コンテンツに使うときの注意点</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">誤情報：一次情報（公式・統計・論文）に当たり、出典を残す</li>
            <li className="pl-1 marker:text-gray-500">類似：特定サイトや書籍の言い回しを引きずっていないか確認する</li>
            <li className="pl-1 marker:text-gray-500">機密：社外秘・個人情報が混入していないか、公開前に検査する</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">事実確認・ファクトチェックの必要性</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            「生成→そのまま公開」を禁止し、最低でも「生成→人の編集→最終レビュー→公開」の順にします。とくに法律・医療・金融などは誤情報の影響が大きいため、レビュー責任者を明確化してください。
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
          <h2 id="video-copyright" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            動画生成AIの著作権と商用利用
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            動画は「画像の論点」に加えて、音楽・声・出演者の権利が重なります。素材の権利を分解して管理するのがコツです。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">Sora / Runway等の利用規約（見るべきポイント）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            動画生成では、出力物だけでなく、アップロード素材（画像・動画・音声）の取り扱いが重要です。社内規程では、アップロード可能な素材の範囲（自社制作/権利クリア済み/許諾済み）を明確にします。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">音楽・声の権利問題（BGM / ナレーション / 声優）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            BGMの著作権・隣接権、ナレーションの実演家人格権/契約、声の類似（“〇〇風の声”）など、炎上リスクが高い論点です。
            声や音は「似てしまった」でアウトになりやすいので、社内のNG例に入れておくと安全です。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">商用利用時のクレジット・開示ルール</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            クレジット表記やAI利用の開示は、利用規約・媒体（広告/PR）・国/地域で扱いが変わります。グローバル配信の可能性がある場合は、後述の海外動向も踏まえて「開示ルール」を決めます。
            動画生成のツール比較は
            <Link href="/academy/blog/ai-video-tool-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI動画生成ツールおすすめ比較
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
          <h2 id="global-regulations" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            海外の法規制と最新動向
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            海外展開（越境EC、広告、アプリ配信）を想定する場合、国内ルールだけでは足りません。社内運用は「最も厳しい要件」に寄せるのが現実的です。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">日本</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">著作権法30条の4（情報解析の例外）</li>
                <li className="pl-1 marker:text-gray-500">文化庁の整理・ガイドラインの参照</li>
                <li className="pl-1 marker:text-gray-500">実務は「規約＋類似性＋権利（商標/肖像）」で統制</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">EU</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">AI Act：生成物への表示義務など</li>
                <li className="pl-1 marker:text-gray-500">著作権指令（DSM指令）との整合</li>
                <li className="pl-1 marker:text-gray-500">広告/プラットフォーム要件も含めた運用が必要</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">米国</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">米国著作権局：人間の創作性を重視</li>
                <li className="pl-1 marker:text-gray-500">登録時にAI利用の開示が求められる場合</li>
                <li className="pl-1 marker:text-gray-500">判例・係争動向は変動が大きい</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">中国</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">生成AI管理規定（表示・管理の要件）</li>
                <li className="pl-1 marker:text-gray-500">プラットフォーム側の審査要件が厳しい領域がある</li>
                <li className="pl-1 marker:text-gray-500">越境配信は現地ルールの確認が必須</li>
              </ul>
            </section>
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
          <h2 id="checklist" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            社内チェックリスト（8項目）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            まずは「誰が・何を・どの基準で」見るかを決めます。迷ったら、社外公開物（広告・Web・動画）を最も厳しい基準にして揃えるのが安全です。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">チェック項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">判断基準</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">担当</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">利用規約確認</th>
                  <td className="py-4 px-4">ツール/プランの商用可否、禁止事項、クレジット/開示要件を満たす</td>
                  <td className="py-4 pl-4">制作/情シス</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">学習データリスク評価</th>
                  <td className="py-4 px-4">追加学習素材（LoRA等）は権利クリア済み、持ち込みデータは許諾済み</td>
                  <td className="py-4 pl-4">制作/法務</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">類似性チェック</th>
                  <td className="py-4 px-4">特定作品/作家/ブランドに酷似しない。必要なら差し替え・再生成</td>
                  <td className="py-4 pl-4">制作</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">第三者権利確認</th>
                  <td className="py-4 px-4">著作権だけでなく商標、肖像、パブリシティ、音源/実演の権利も確認</td>
                  <td className="py-4 pl-4">法務</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">用途別承認レベル</th>
                  <td className="py-4 px-4">社外公開物は必ずレビュー。社内資料でも配布範囲に応じて基準を分ける</td>
                  <td className="py-4 pl-4">責任者</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">クレジット表記/開示</th>
                  <td className="py-4 px-4">規約・媒体・国/地域要件に従い、必要ならAI利用を明示する</td>
                  <td className="py-4 pl-4">広報/制作</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">保存・証跡管理</th>
                  <td className="py-4 px-4">プロンプト、参照素材、生成日時、使用ツール/モデル、採用理由を残す</td>
                  <td className="py-4 pl-4">制作/情シス</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">定期見直し</th>
                  <td className="py-4 px-4">規約・法規制・社内事例の変化に合わせ、四半期〜半期で更新する</td>
                  <td className="py-4 pl-4">責任者</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ng-examples" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくあるNG例と対処法
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            NG例は「ルール違反」というより、現場がつい踏みがちな近道です。先に例を共有して、事故の芽を摘みます。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-rose-700">NG例1</h3>
              <p className="mt-2 text-sm font-semibold text-gray-900">特定アーティストのスタイルを指定して生成</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                作家名・作品名の指示は、類似性の再現性を上げます。スタイル模倣で炎上・差し止めリスクもあります。
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                対処: 作家名/作品名を使わず、要素分解（配色/質感/構図）で指示。参照素材は権利クリア済みに限定します。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-rose-700">NG例2</h3>
              <p className="mt-2 text-sm font-semibold text-gray-900">他社ロゴ・キャラクターに似た画像を商用利用</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                著作権だけでなく、商標や不正競争の論点になります。広告では特にリスクが高いです。
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                対処: 類似性チェックを必須化し、少しでも似たら差し替え。素材はストック/自社制作へ切り替えます。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-rose-700">NG例3</h3>
              <p className="mt-2 text-sm font-semibold text-gray-900">AI生成文章を著作者名義で論文に使用</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                著作権とは別に、研究倫理・引用ルール・開示義務の問題になります。公開後の信頼毀損が大きいです。
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                対処: 生成AIの利用範囲を明確化し、出典・引用・開示ルールに従う。最終責任は著者が負います。
              </p>
            </section>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            社内で議論になりやすい質問を、運用できる形でまとめます。迷ったら「規約」「類似性」「証跡」の3点に戻してください。
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

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h3 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形（#1 ガイドライン雛形）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/shadow-ai-countermeasures" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                シャドーAI対策（#2 シャドーAI対策）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-image-generation-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI画像生成ガイド（既存記事）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-video-tool-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI動画生成ツール比較（既存記事）
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                アカデミーTOP
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            生成AIの著作権・商用利用は、「著作権だけ」の話ではなく、利用規約・学習データ・類似性・第三者権利・海外規制が絡む総合判断です。
            まずは社内チェックリストを作り、用途別に承認レベルと証跡を揃えることで、現場の迷いと事故を同時に減らせます。
          </p>
        </motion.section>

        <motion.section
          className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            迷うなら、社内ルール設計から一緒に整えます
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            法務・制作・現場で判断が割れる領域を、運用できる形に落とし込みます。ガイドライン整備、研修、導入設計までまとめて進めたい方はご相談ください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              LINEで相談する
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}

