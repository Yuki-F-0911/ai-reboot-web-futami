import type { Metadata } from "next";
import Link from "next/link";
import { getAllGlossaryTerms } from "@/data/glossary";
import GlossaryCard from "@/components/glossary/GlossaryCard";
import type { GlossaryTerm } from "@/types/glossary";

const baseUrl = "https://ai-reboot.io";

export const metadata: Metadata = {
  title: "生成AI用語集｜AIの基礎から応用まで わかりやすく解説｜AI Reboot",
  description:
    "LLM・RAG・プロンプトエンジニアリング・ハルシネーションなど、生成AIの重要用語を初心者向けにわかりやすく解説。AI活用に必要な基礎知識を体系的に学べる用語集です。",
  alternates: {
    canonical: `${baseUrl}/glossary`,
  },
  openGraph: {
    title: "生成AI用語集｜AI Reboot",
    description:
      "生成AIの重要用語を初心者向けにわかりやすく解説。LLM・RAG・エージェントなど30語以上を収録。",
    url: `${baseUrl}/glossary`,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/ogp-default.webp`,
        width: 1200,
        height: 630,
        alt: "生成AI用語集 | AI Reboot",
      },
    ],
  },
};

// 50音インデックスの定義
const KANA_ROWS = ["英数", "ア", "カ", "サ", "タ", "ナ", "ハ", "マ", "ヤ", "ラ", "ワ"] as const;
type KanaRow = (typeof KANA_ROWS)[number];

const KANA_ROW_MAP: Record<string, KanaRow> = {
  ア: "ア", イ: "ア", ウ: "ア", エ: "ア", オ: "ア",
  カ: "カ", キ: "カ", ク: "カ", ケ: "カ", コ: "カ",
  ガ: "カ", ギ: "カ", グ: "カ", ゲ: "カ", ゴ: "カ",
  サ: "サ", シ: "サ", ス: "サ", セ: "サ", ソ: "サ",
  ザ: "サ", ジ: "サ", ズ: "サ", ゼ: "サ", ゾ: "サ",
  タ: "タ", チ: "タ", ツ: "タ", テ: "タ", ト: "タ",
  ダ: "タ", ヂ: "タ", ヅ: "タ", デ: "タ", ド: "タ",
  ナ: "ナ", ニ: "ナ", ヌ: "ナ", ネ: "ナ", ノ: "ナ",
  ハ: "ハ", ヒ: "ハ", フ: "ハ", ヘ: "ハ", ホ: "ハ",
  バ: "ハ", ビ: "ハ", ブ: "ハ", ベ: "ハ", ボ: "ハ",
  パ: "ハ", ピ: "ハ", プ: "ハ", ペ: "ハ", ポ: "ハ",
  マ: "マ", ミ: "マ", ム: "マ", メ: "マ", モ: "マ",
  ヤ: "ヤ", ユ: "ヤ", ヨ: "ヤ",
  ラ: "ラ", リ: "ラ", ル: "ラ", レ: "ラ", ロ: "ラ",
  ワ: "ワ", ヲ: "ワ", ン: "ワ",
};

function getKanaRow(reading: string): KanaRow {
  const firstChar = reading.charAt(0);
  // 小文字カナを大文字に変換（ぁ→ア等）
  const normalized = firstChar
    .normalize("NFKC")
    .replace(/[ぁ-ん]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
  return KANA_ROW_MAP[normalized] ?? "英数";
}

function groupTermsByKana(terms: GlossaryTerm[]): Map<KanaRow, GlossaryTerm[]> {
  const groups = new Map<KanaRow, GlossaryTerm[]>();
  for (const row of KANA_ROWS) {
    groups.set(row, []);
  }
  for (const term of terms) {
    const row = getKanaRow(term.reading);
    groups.get(row)!.push(term);
  }
  return groups;
}

export default function GlossaryPage() {
  const terms = getAllGlossaryTerms();
  const groups = groupTermsByKana(terms);

  const activeRows = KANA_ROWS.filter((row) => (groups.get(row)?.length ?? 0) > 0);

  return (
    <main className="min-h-screen bg-depth-100">
      {/* ヒーロー - bg-depth-900はgradientが適用されない場合のフォールバック */}
      <section className="bg-depth-900 bg-gradient-to-br from-depth-900 via-depth-800 to-depth-700 text-white pt-24 pb-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-will-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Glossary
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">生成AI用語集</h1>
          <p className="text-depth-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            LLM・RAG・エージェントなど、生成AIの重要用語を
            <br className="hidden sm:block" />
            初心者向けにわかりやすく解説します。
          </p>
          <p className="mt-4 text-depth-400 text-xs">{terms.length}件収録</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* 50音インデックス */}
        <nav aria-label="50音インデックス" className="mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {KANA_ROWS.map((row) => {
              const count = groups.get(row)?.length ?? 0;
              const isActive = count > 0;
              return isActive ? (
                <a
                  key={row}
                  href={`#kana-${row}`}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white border border-depth-200 text-depth-700 hover:border-will-primary hover:text-will-primary transition-colors"
                >
                  {row}行
                  <span className="ml-1 text-xs text-depth-400">({count})</span>
                </a>
              ) : (
                <span
                  key={row}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-depth-200 text-depth-400 cursor-default"
                >
                  {row}行
                </span>
              );
            })}
          </div>
        </nav>

        {/* カテゴリ凡例 */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {(
            [
              { label: "基礎概念", cls: "bg-blue-100 text-blue-700" },
              { label: "モデル", cls: "bg-purple-100 text-purple-700" },
              { label: "実装", cls: "bg-green-100 text-green-700" },
              { label: "評価", cls: "bg-amber-100 text-amber-700" },
              { label: "法務・倫理", cls: "bg-red-100 text-red-700" },
            ] as const
          ).map(({ label, cls }) => (
            <span key={label} className={`text-xs font-medium px-2.5 py-1 rounded-full ${cls}`}>
              {label}
            </span>
          ))}
        </div>

        {/* 各行セクション */}
        <div className="space-y-12">
          {activeRows.map((row) => {
            const rowTerms = groups.get(row) ?? [];
            return (
              <section key={row} id={`kana-${row}`}>
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="text-xl font-bold text-depth-900">{row}行</h2>
                  <div className="flex-1 h-px bg-depth-200" />
                  <span className="text-sm text-depth-500">{rowTerms.length}件</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rowTerms.map((term) => (
                    <GlossaryCard key={term.slug} term={term} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* フッターリンク */}
        <div className="mt-16 pt-8 border-t border-depth-200 text-center">
          <p className="text-depth-500 text-sm mb-4">
            生成AI活用力を体系的に習得しながら、自己理解・キャリアデザインを深め、
            <br className="hidden sm:block" />
            志を同じくする仲間と共に学べる環境が「AIリブートアカデミー」です。
          </p>
          <Link
            href="/academy"
            className="inline-flex items-center gap-2 bg-will-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            AIリブートアカデミーを見る →
          </Link>
        </div>
      </div>
    </main>
  );
}
