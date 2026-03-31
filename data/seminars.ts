import type { SeminarData } from "@/types/seminar";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf8nTvEXBRIJSzcb_4SbMrwPi5NKx9_ihR6kzjYeCu1ngKrdA/viewform?usp=dialog";

export const seminars: SeminarData[] = [
  // ── 開催予定セミナー ──
  {
    slug: "gemini-notebooklm",
    title: "初心者でも60分で分かる Gemini × NotebookLM 超入門シャドーイング講座",
    subtitle: "明日の仕事ですぐ使える2大AIツール",
    description:
      "いきなり高度なツールを使い始める前に。「明日の仕事ですぐ使える」GeminiとNotebookLMを使い倒す60分の実践セミナーです。「見て終わり」ではなく、一緒に手を動かしてAI活用の基礎体力をつけましょう。",
    tag: "NEW",
    date: "2026年4月9日（木）",
    dateShort: "4月9日(木)",
    time: "20:00-21:30",
    place: "オンライン（Zoom）",
    heroCopy:
      "「AIすごいのはわかる。でも何から始めれば？」そんな方にこそ届けたい、60分の実践セミナー",
    googleFormUrl: "https://luma.com/2l9vjsh7",
    ended: false,
    hasLandingPage: true,
    metaTitle:
      "初心者でも60分で分かる Gemini × NotebookLM 超入門講座 | AI REBOOT",
    metaDescription:
      "「何から始めれば？」という初心者向け。明日の仕事ですぐ使えるGeminiとNotebookLMを使い倒す60分間の実践セミナー（シャドーイング形式）です。4月9日(木) 20:00〜21:30 無料オンライン開催。",
    ogImageAlt: "Gemini × NotebookLM 超入門シャドーイング講座 4月9日",
  },
  {
    slug: "ai-career-hack-mar",
    title: "AIキャリアハック ── 生成AIで「市場価値」を書き換える60分",
    subtitle: "AIを味方にしたキャリア戦略",
    description:
      "「AIに仕事を奪われる」側ではなく「AIで市場価値を上げる」側へ。人事のプロ×AI実践者が、生成AIを武器にキャリアを切り拓くロードマップを60分で解説します。",
    tag: "NEW",
    date: "2026年3月26日（木）",
    dateShort: "3月26日(木)",
    time: "20:00-21:00",
    place: "オンライン（Zoom）",
    heroCopy:
      "「AIに奪われる」側から「AIで市場価値を上げる」側へ。キャリアの主導権を取り戻す",
    googleFormUrl: GOOGLE_FORM_URL,
    ended: false,
    hasLandingPage: true,
    metaTitle:
      "AIキャリアハック ── 生成AIで市場価値を書き換える60分 | AI REBOOT",
    metaDescription:
      "AIに仕事を奪われる側ではなく、AIで市場価値を上げる側へ。人事のプロ×AI実践者が生成AIを武器にキャリアを切り拓くロードマップを60分で解説。3月26日(木) 20:00〜21:00 無料オンライン開催。",
    ogImageAlt: "AIキャリアハックセミナー 3月26日",
  },
  {
    slug: "ai-career-hack-apr",
    title: "AIキャリアハック ── 100日で「替えの利かない人材」になる方法",
    subtitle: "思考OSアップデートで差をつける",
    description:
      "生成AI時代は学歴も社歴もリセットできる史上初のチャンス。ツールの使い方ではなく「思考OS」をアップデートし、100日でキャリア下剋上を実現するロードマップをお伝えします。",
    tag: "NEW",
    date: "2026年4月16日（木）",
    dateShort: "4月16日(木)",
    time: "20:00-21:00",
    place: "オンライン（Zoom）",
    heroCopy:
      "ツールの使い方ではなく「思考のOS」を変える。100日後、替えの利かない人材へ",
    googleFormUrl: GOOGLE_FORM_URL,
    ended: false,
    hasLandingPage: true,
    metaTitle:
      "AIキャリアハック ── 100日で替えの利かない人材になる方法 | AI REBOOT",
    metaDescription:
      "生成AI時代は学歴も社歴もリセットできるチャンス。思考OSをアップデートし100日でキャリア下剋上を実現するロードマップを解説。4月16日(木) 20:00〜21:00 無料オンライン開催。",
    ogImageAlt: "AIキャリアハックセミナー 4月16日",
  },

  // ── 過去のセミナー ──
  {
    slug: "ai-career-anxiety",
    title: "「このままで大丈夫？」を解消するAIキャリア戦略",
    subtitle: "不安をエネルギーに変える60分",
    description:
      "AIが仕事を奪うのか、それとも味方になるのか。キャリアの先行きに不安を感じている方に、人事のプロとAI実践者が「思考OSアップデート」という処方箋を提示します。",
    tag: "NEW",
    date: "2026年3月11日（水）",
    dateShort: "3月11日(水)",
    time: "20:00-21:00",
    place: "オンライン（Zoom）",
    heroCopy:
      "「何をすればいいかわからない」その不安を、行動に変えるロードマップ",
    googleFormUrl: GOOGLE_FORM_URL,
    ended: true,
    hasLandingPage: true,
    metaTitle:
      "「このままで大丈夫？」を解消するAIキャリア戦略 | AI REBOOT",
    metaDescription:
      "AIが仕事を奪うのか味方になるのか。キャリアの先行きに不安を感じている方へ、人事のプロ×AI実践者が「思考OSアップデート」で不安を行動に変えるロードマップを提示。3月11日(水) 20:00〜21:00 無料オンライン開催。",
    ogImageAlt: "AIキャリア戦略セミナー 3月11日",
  },
  {
    slug: "ai-career-advantage",
    title: "AIを「武器」に変える人のキャリア戦略",
    subtitle: "同世代と差がつく思考法",
    description:
      "生成AIを「ちょっと便利なツール」で終わらせる人と、「キャリアの武器」に変える人。その違いはツールの使い方ではなく、思考のOSにあります。",
    tag: "NEW",
    date: "2026年3月18日（水）",
    dateShort: "3月18日(水)",
    time: "20:00-21:00",
    place: "オンライン（Zoom）",
    heroCopy:
      "「AIを使える」だけでは武器にならない。差がつくのは、思考のOS",
    googleFormUrl: GOOGLE_FORM_URL,
    ended: true,
    hasLandingPage: true,
    metaTitle: "AIを「武器」に変える人のキャリア戦略 | AI REBOOT",
    metaDescription:
      "生成AIを「ちょっと便利なツール」で終わらせる人と、「キャリアの武器」に変える人の違いとは？思考のOSをアップデートし、同世代と差をつけるキャリア戦略を解説。3月18日(水) 20:00〜21:00 無料オンライン開催。",
    ogImageAlt: "AIキャリア戦略セミナー 3月18日",
  },
  {
    slug: "ai-career-reinvention",
    title: "学歴も社歴もリセット。AI時代のキャリア再設計",
    subtitle: "100日でキャリア下剋上を起こす方法",
    description:
      "これまでの経歴にコンプレックスを感じていませんか？生成AI時代は、学歴も社歴もリセットできる史上初のチャンス。キャリアを根本から再設計する思考法をお伝えします。",
    tag: "NEW",
    date: "2026年3月25日（水）",
    dateShort: "3月25日(水)",
    time: "20:00-21:00",
    place: "オンライン（Zoom）",
    heroCopy:
      "生成AIは、あなたのキャリアを「リセット＆リビルド」する最強の武器になる",
    googleFormUrl: GOOGLE_FORM_URL,
    ended: true,
    hasLandingPage: true,
    metaTitle:
      "学歴も社歴もリセット。AI時代のキャリア再設計 | AI REBOOT",
    metaDescription:
      "学歴や社歴にコンプレックスを感じている方へ。生成AI時代は過去の経歴をリセットできる史上初のチャンス。100日でキャリア下剋上を起こす方法を解説。3月25日(水) 20:00〜21:00 無料オンライン開催。",
    ogImageAlt: "AIキャリア再設計セミナー 3月25日",
  },
  {
    slug: "ai-career-now",
    title: "「今なら」間に合う。AI時代のキャリア生存戦略",
    subtitle: "この波に乗るか、呑まれるか",
    description:
      "生成AIの波は待ってくれません。先行者利益が取れる「今だけ」の窓が閉じる前に、キャリア下剋上のロードマップを手に入れてください。",
    tag: "NEW",
    date: "2026年4月1日（水）",
    dateShort: "4月1日(水)",
    time: "20:00-21:00",
    place: "オンライン（Zoom）",
    heroCopy: "先行者利益を取れる窓は「今」閉じ始めている",
    googleFormUrl: GOOGLE_FORM_URL,
    ended: true,
    hasLandingPage: true,
    metaTitle:
      "「今なら」間に合う。AI時代のキャリア生存戦略 | AI REBOOT",
    metaDescription:
      "生成AIの波は待ってくれません。先行者利益が取れる窓が閉じる前に、キャリア下剋上のロードマップを手に入れましょう。4月1日(水) 20:00〜21:00 無料オンライン開催。",
    ogImageAlt: "AIキャリア生存戦略セミナー 4月1日",
  },
  {
    slug: "career-design",
    title: "生成AI時代のキャリア設計論",
    subtitle: "ツールに依存しない「本質的な強み」の作り方",
    description:
      "人事・採用のプロ×AI実践者が教える「キャリア下剋上」のロードマップ。ツールに依存しない「本質的な強み」の作り方をお伝えします。AIを学んで終わりにしない、思考OSのアップデートがテーマです。",
    tag: "NEW",
    date: "2026年1月18日（日）",
    dateShort: "1月18日(日)",
    time: "20:00-21:00",
    place: "オンライン（Zoom）",
    heroCopy:
      "人事・採用のプロ×AI実践者が教える「キャリア下剋上」のロードマップ",
    googleFormUrl: GOOGLE_FORM_URL,
    ended: true,
    hasLandingPage: true,
    metaTitle: "生成AI時代のキャリア設計論 | AI REBOOT",
    metaDescription:
      "人事・採用のプロ×AI実践者が教える「キャリア下剋上」のロードマップ。ツールに依存しない「本質的な強み」の作り方を学ぶ無料オンラインセミナー。",
    ogImageAlt: "生成AI時代のキャリア設計論",
  },
  {
    slug: "ai-trends-2025",
    title: "2025年AIトレンドを振り返り、2026年の展望を読む",
    subtitle: "「AIのある暮らし」コラボ企画",
    description:
      "「AIのある暮らし」とのコラボ企画。本アカデミー主宰成瀬、「AIのある暮らし」岩本かずさんに加え、デザイナーやWebマーケター、異業種のAI活用者などゲストを招き、座談会・パネルディスカッション形式で実施。年末の忘年会的な雰囲気で、各登壇者が今年使ったツールや2025年の振り返りを語ります。",
    tag: "コラボ企画",
    date: "2025年12月30日（火）",
    dateShort: "12月30日(火)",
    time: "19:00-21:00",
    place: "オンライン",
    heroCopy: "",
    googleFormUrl: GOOGLE_FORM_URL,
    ended: true,
    hasLandingPage: false,
    metaTitle: "",
    metaDescription: "",
    ogImageAlt: "",
  },
  {
    slug: "ai-career-hack-jan",
    title: "AI時代のキャリアハックセミナー",
    subtitle: "AIを武器にして「Will」を叶える",
    description:
      "AIを武器にして自分の「Will（実現したい生き方）」を叶えるためのキャリア形成について、本アカデミー主宰 成瀬拓也がお伝えします。単にツールを学ぶのではなく、AIと共に成長するキャリア戦略を一緒に考えましょう。",
    tag: "本アカデミー主宰成瀬拓也",
    date: "2026年1月2日（金）",
    dateShort: "1月2日(金)",
    time: "16:00-17:00",
    place: "オンライン",
    heroCopy: "",
    googleFormUrl: GOOGLE_FORM_URL,
    ended: true,
    hasLandingPage: false,
    metaTitle: "",
    metaDescription: "",
    ogImageAlt: "",
  },
];

export function getAllSeminars(): SeminarData[] {
  return seminars;
}

export function getSeminarBySlug(slug: string): SeminarData | undefined {
  return seminars.find((s) => s.slug === slug);
}

export function getUpcomingSeminars(): SeminarData[] {
  return seminars.filter((s) => !s.ended);
}

export function getEndedSeminars(): SeminarData[] {
  return seminars.filter((s) => s.ended);
}

export function getSeminarsWithLandingPage(): SeminarData[] {
  return seminars.filter((s) => s.hasLandingPage);
}
