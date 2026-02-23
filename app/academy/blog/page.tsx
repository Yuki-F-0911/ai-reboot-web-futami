import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "@/components/academyLanding/sections/academyDesignTokens";

const pageTitle = "アカデミーブログ一覧 | AIリブート";
const pageDescription =
  "AIリブートアカデミーのブログ一覧です。生成AIの基礎知識、実務活用、最新AIツール、資格・スキル、キャリア、法人向け導入ガイドまで多数の記事をカテゴリ別に掲載しています。";
const pageUrl = "https://ai-reboot.io/academy/blog";
const pageOgImagePath = "/academy/opengraph-image";
const lineUrl = "https://bexn9pao.autosns.app/line";

type BlogCategory =
  | "AI基礎知識"
  | "AI活用術"
  | "実務活用"
  | "AIO/マーケ"
  | "最新AIツール"
  | "ChatGPT"
  | "資格・スキル"
  | "キャリア・転職"
  | "副業・フリーランス"
  | "法人向け"
  | "AI学習";

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: BlogCategory;
  publishedAt?: string;
  tags?: readonly string[];
  thumbnail?: string;
};

const blogPosts: readonly BlogPost[] = [
  {
    slug: "ai-guilt-free-guide",
    title: "AIを使うと「ズルい気がする」あなたへ：罪悪感の正体と、AI時代の正しい向き合い方【2026年版】",
    summary:
      "「AIに文章を書いてもらうのはズルくないか？」「考える力が落ちそう...」そんな罪悪感を持ちながらAIを使っていませんか？その感情の正体と、健全なAIとの向き合い方を丁寧に解説します。",
    category: "AI基礎知識",
    publishedAt: "2026-02-23T18:00:00+09:00",
    tags: ["AI 罪悪感", "ChatGPT ズルい", "AI 使うの 抵抗ある", "AI 依存 怖い", "AI 向き合い方"],
  },
  {
    slug: "ai-learner-3month-challenges",
    title: "AIを使い始めた人が3ヶ月後に直面する5つの壁と、それぞれの乗り越え方【2026年版】",
    summary:
      "AI学習を始めて3ヶ月、あの新鮮な興奮が薄れてきた...そんなあなたへ。「飽き」「期待はずれ」「孤独感」「上達感のなさ」など、多くの人が3ヶ月後に直面するリアルな壁を正直に解説し、それぞれの乗り越え方を提示します。",
    category: "AI学習",
    publishedAt: "2026-02-23T16:00:00+09:00",
    tags: ["AI 学習 続かない", "ChatGPT 飽きた", "AI 挫折 乗り越え", "生成AI 続け方", "AI 学習 3ヶ月"],
  },
  {
    slug: "ai-practical-uses-spring-2026",
    title: "今すぐ試せる！生成AIが仕事と日常で本当に役立った使い方15選【2026年春版】",
    summary:
      "ChatGPT・Claude・Geminiを使って実際に業務が楽になった15の活用例を紹介。仕事のメール・会議・資料作成から日常の調べ物まで、初心者でも今日から試せる具体的な使い方をプロンプト例つきで解説します。",
    category: "AI活用術",
    publishedAt: "2026-02-23T12:00:00+09:00",
    tags: ["生成AI 使い方 仕事 具体例", "ChatGPT 活用法 初心者", "AI 業務効率化 例", "生成AI 活用術 2026"],
  },
  {
    slug: "ai-learning-diy-vs-school-guide",
    title: "AIを独学で学ぶ vs スクールで学ぶ：後悔しない選び方の完全ガイド【2026年版】",
    summary:
      "AIを独学で習得しようとして挫折した人、スクールに入るべきか迷っている人へ。独学とスクール学習の具体的な違い・向いている人の特徴・費用対効果を正直に比較します。3つの質問で自分に合う方法がわかる判断フレームワーク付き。",
    category: "AI学習",
    publishedAt: "2026-02-23T14:00:00+09:00",
    tags: ["AI 学習 独学 スクール 比較", "AI スクール 必要", "生成AI 独学 難しい", "AI 学習 費用", "ChatGPT 独学 挫折"],
  },
  {
    slug: "ai-first-3days-action-guide",
    title: "AI入門、最初の3日間でやるべき5つのこと【今日から始める完全アクションガイド2026】",
    summary:
      "「AIを始めたいけど何からやればいい?」その答えがここにあります。ChatGPT・Gemini・Claudeを使った最初の3日間の具体的なアクションプランを、AI初心者向けに分かりやすく解説します。",
    category: "AI学習",
    publishedAt: "2026-02-23T15:00:00+09:00",
    tags: ["AI 始め方 初心者 2026", "ChatGPT 始め方 スマホ", "生成AI 入門 最初", "AI アカウント作り方", "ChatGPT 使い方 初めて"],
  },
  {
    slug: "ai-try-fail-breakthrough-guide",
    title: "AIを何度試しても続かなかった私が、やっと使いこなせた理由【2026年版】",
    summary:
      "何度もAIを試しては挫折した。ChatGPT、Gemini、Claude…「すごい」と聞いて始めるけど、気づけば使わなくなる。そのループを抜け出した実体験と、初心者が続くようになる5つの転換点をお伝えします。",
    category: "AI学習",
    publishedAt: "2026-02-23T10:00:00+09:00",
    tags: ["AI 挫折 続かない 対策", "ChatGPT 使い続けられない", "生成AI 初心者 続け方", "AI学習 モチベーション", "生成AI 習慣化"],
  },
  {
    slug: "ai-learning-roadmap-2026",
    title: "AI学習ロードマップ2026：ゼロから100日間で仕事に使えるようになるまでの完全地図",
    summary:
      "AI学習を始めたいのに何から手をつければいいかわからない方へ。0から100日間で仕事に活用できるレベルに達するための段階的ロードマップを完全公開。挫折しない学び方の秘訣と、各フェーズの具体的な目標・行動を解説します。",
    category: "AI学習",
    publishedAt: "2026-02-23T15:00:00+09:00",
    tags: ["AI学習 ロードマップ", "AI 勉強 方法 初心者", "生成AI 学習 計画", "AI 初心者 何から始める"],
  },
  {
    slug: "ai-learning-start-now-2026",
    title: "AIを学ぶなら2026年の今がベストな理由：「後でいいか」が取り返しのつかない差になる前に",
    summary:
      "「AIはそのうち学べばいい」と思っていませんか？AI活用スキルの格差は今、静かに広がっています。今学ぶのが最善な5つの理由と、始め方の最短ルートを正直に解説します。補助金活用で実質0円で学べるチャンスも今だけです。",
    category: "AI学習",
    publishedAt: "2026-02-23T16:00:00+09:00",
    tags: ["AI いつから学ぶ", "AI 学習 今すぐ", "生成AI 始める 理由 2026", "AI 後回し", "リスキリング 今すぐ"],
  },
  {
    slug: "ai-learning-cost-roi-guide-2026",
    title: "AI学習にいくらかかる？無料と有料の境界線と、補助金で実質0円になる方法2026",
    summary:
      "AI学習の費用相場を徹底比較。無料YouTubeから有料スクールまで、本当のコストと価値を正直に解説。経産省リスキリング補助金を活用すれば最大70%補助。2026年最新の補助金情報と賢い選び方を届けます。",
    category: "AI学習",
    publishedAt: "2026-02-23T14:00:00+09:00",
    tags: ["AI学習 費用", "リスキリング補助金 AI", "AI スクール 値段", "経産省 補助金 AI"],
  },
  {
    slug: "ai-work-with-ai-180days-diary",
    title: "AIと仕事して180日：失ったもの・得たもの・気づいたことをすべて話します",
    summary:
      "生成AIを仕事で使い始めて半年。便利になったこと、失敗したこと、変わった価値観を正直に記録。「AIを導入したら本当に効率が上がるの？」という疑問に、一人の会社員が正直に答えます。",
    category: "AI活用術",
    publishedAt: "2026-02-23T13:00:00+09:00",
    tags: ["AI 仕事 体験談", "生成AI 使い続けた", "ChatGPT 仕事 変化", "AI 半年 効果", "AI 習慣化 仕事"],
  },
  {
    slug: "ai-value-not-felt-honest-guide",
    title: "AIを試したけど、正直よくわからなかった人へ：本当の価値に気づく3つの転換点",
    summary:
      "ChatGPTを触ってみたけど「だからなに？」と感じた経験はありますか？AI学習が続かない本当の理由は「使い方を知らないまま試した」こと。見落としていた3つの転換点と、AIが急に役立つようになる瞬間を正直に解説します。",
    category: "AI基礎知識",
    publishedAt: "2026-02-23T12:00:00+09:00",
    tags: ["ChatGPT 使い方 わからない", "AI 価値 感じない", "AI 使いこなせない 初心者", "AI 始め方 2026"],
  },
  {
    slug: "ai-business-document-templates-2026",
    title: "AIビジネス文書テンプレート完全版2026：議事録・報告書・メール・企画書をAIで10分で完成させる",
    summary:
      "議事録、報告書、ビジネスメール、企画書をAIで10分作成。ChatGPT・Claude対応のコピペ可能な実務テンプレート50選を用途別に収録。会議後すぐ使える2026年版の決定版です。",
    category: "AI活用術",
    publishedAt: "2026-02-23T18:00:00+09:00",
    tags: ["AI 議事録 テンプレート", "ChatGPT ビジネスメール", "AI 報告書 作成", "AI 企画書 プロンプト"],
  },
  {
    slug: "generative-ai-dictionary-2026",
    title: "生成AI用語辞典2026：初心者が今日から使えるAI用語100語をわかりやすく解説",
    summary:
      "プロンプト、LLM、ハルシネーション、RAG、MCPまで、2026年版の生成AI重要用語100語を初心者向けに整理。カテゴリ別で意味・やさしい説明・使用例をまとめた実用辞典です。",
    category: "AI基礎知識",
    publishedAt: "2026-02-23T16:00:00+09:00",
    tags: ["生成AI 用語", "AI 用語集", "LLM とは", "プロンプト 意味"],
  },
  {
    slug: "chatgpt-plus-honest-review-2026",
    title: "ChatGPT Plusに月3,000円払う価値はあるか？半年使った会社員の正直レビュー2026",
    summary:
      "ChatGPT Plusと無料版の本当の違いを半年使った視点から正直にレポート。o3・画像生成・メモリ機能など有料機能の価値を初心者向けに解説。課金すべきか迷っているあなたへの正直な答えを届けます。",
    category: "ChatGPT",
    publishedAt: "2026-02-23T10:00:00+09:00",
    tags: ["ChatGPT Plus", "ChatGPT 料金", "o3 初心者", "AI課金 判断"],
  },
  {
    slug: "ai-tool-choice-fatigue-guide",
    title: "AIツール選び疲れ、もうやめませんか？2026年春版・初心者が最初に使うべきAIはたった1つでいい",
    summary:
      "ChatGPT・Claude・Gemini・Grok…AIが多すぎて選べない「AI選び疲れ」を解消する処方箋。初心者が本当に最初に使うべき1つのAIとその理由を、正直に解説します。",
    category: "AI基礎知識",
    publishedAt: "2026-02-23T11:00:00+09:00",
    tags: ["AI ツール 選び方", "生成AI どれを使えばいい", "AI 選び疲れ", "ChatGPT 始め方 初心者"],
  },
  {
    slug: "ai-search-tool-comparison-2026",
    title: "情報収集はどのAIが最強？2026年版：Perplexity・ChatGPT・Gemini・Copilotを実際に使って比べた",
    summary:
      "2026年の情報収集AI4強を初心者目線で徹底比較。Perplexity・ChatGPT・Gemini・Copilotを同じ質問で試し、速さ・正確さ・無料範囲・使い分けのコツを実例付きで解説します。",
    category: "最新AIツール",
    publishedAt: "2026-02-23T12:00:00+09:00",
    tags: ["Perplexity 使い方", "AI 情報収集 比較", "Perplexity ChatGPT 比較", "生成AI 検索 2026"],
  },
  {
    slug: "apple-intelligence-guide",
    title: "Apple Intelligence完全ガイド2026：iPhoneのAI機能を初心者向けに徹底解説",
    summary:
      "iPhone・MacのApple Intelligenceを初心者向けに解説。対応機種、日本語対応、Writing Tools、通知要約、画像生成、Siri進化、プライバシー設計まで1記事で理解できます。",
    category: "最新AIツール",
    publishedAt: "2026-02-23T09:00:00+09:00",
    tags: ["Apple Intelligence", "iPhone AI機能", "Siri AI 進化", "Apple Intelligence 日本語"],
  },
  {
    slug: "enterprise-ai-cost-governance-2026",
    title: "生成AIのコストガバナンス完全ガイド2026：CFO・情シスが押さえるべきコスト最適化と予算設計",
    summary:
      "企業の生成AI投資コストを可視化し、ROI計測・コスト圧縮の具体策と稟議書のキーポイントを解説。Azure OpenAI・AWS Bedrock・Google Vertex AIの費用比較も掲載。",
    category: "法人向け",
    publishedAt: "2026-02-22T22:00:00+09:00",
    tags: ["生成AI コスト", "企業AI 予算", "AI ROI", "コストガバナンス"],
  },
  {
    slug: "grok-4-beginners-guide",
    title: "Grok 4完全入門ガイド2026：イーロン・マスクの最新AIを初心者が試した正直レポート",
    summary:
      "2026年2月にリリースされたGrok 4を初心者目線で徹底解説。ChatGPT・Claude・Geminiとの違い、無料で始める方法、実際に試してわかった強み・弱みを正直レポート。推論能力・コーディング性能・リアルタイム検索強化の実力を正直にお伝えします。",
    category: "最新AIツール",
    publishedAt: "2026-02-23T10:00:00+09:00",
    tags: ["Grok 4", "xAI", "ChatGPT 比較", "AI選び"],
  },
  {
    slug: "ai-learning-dropout-prevention-guide",
    title: "AIの勉強が続かない…を卒業する：挫折する人と続く人の決定的な7つの違い",
    summary:
      "AI学習が続かない7つの本当の理由と、モチベーションなしで続けられる習慣を解説。初心者向けの再スタート方法と明日から使えるプロンプト付き。",
    category: "AI基礎知識",
    publishedAt: "2026-02-22T21:00:00+09:00",
    tags: ["AI学習 続かない", "生成AI 挫折", "AI習慣化"],
  },
  {
    slug: "chatgpt-exam-study-guide",
    title: "ChatGPTで資格・試験勉強が変わる！暗記・過去問・弱点克服に使えるAI活用術【2026年版】",
    summary:
      "ChatGPTを使った資格勉強の活用法をプロンプト例付きで完全解説。暗記カードの自動生成・過去問の解説依頼・弱点分析・学習スケジュール作成まで網羅。FP・TOEIC・宅建・ITパスポートなど人気資格への応用ヒントとChatGPT vs Gemini比較付き。AIの限界と注意点も丁寧に解説します。",
    category: "資格・スキル",
    publishedAt: "2026-02-22T16:00:00+09:00",
    tags: ["ChatGPT 資格勉強", "AI 試験対策", "暗記カード AI", "過去問 解説 AI", "TOEIC FP 宅建 AI"],
  },
  {
    slug: "ai-pet-care-guide",
    title: "AIでペットのお世話がもっと楽しく安心に！ChatGPTを使った犬・猫のケア＆相談術",
    summary:
      "ChatGPTをペットケアに活用する5つの場面を解説。体調変化の相談・食事選び・しつけアドバイス・Vision機能で品種推定・用品比較まで、プロンプト例付きで紹介。AIはあくまで情報収集のサポーターという前提を大切に、緊急時の対応方針も丁寧に解説します。",
    category: "AI活用術",
    publishedAt: "2026-02-22T17:00:00+09:00",
    tags: ["AI ペット", "ChatGPT 犬 猫", "ペット 体調 相談 AI", "ChatGPT Vision 品種", "犬 猫 しつけ AI"],
  },
  {
    slug: "ai-morning-habits-guide",
    title: "AIを朝の5分ルーティンに入れるだけで1日が変わる！毎朝続けたいAI活用習慣術",
    summary:
      "朝5分でできるAI活用ルーティン6選。TODOの整理・振り返り日記・ニュースまとめ・気分に合わせたアドバイス・学習1問1答・目標宣言まで、毎朝コピペして使えるプロンプトテンプレート付き。習慣化のコツ・ChatGPTカスタム指示の活用法まで初心者向けに解説。",
    category: "AI活用術",
    publishedAt: "2026-02-22T18:00:00+09:00",
    tags: ["AI 朝活", "ChatGPT 朝ルーティン", "AI 習慣化", "毎朝 AI 活用", "生産性 AI"],
  },
  {
    slug: "ai-book-reading-guide",
    title: "AIで読書が変わる！ChatGPT・Claudeを使った本の要約・理解・アウトプット活用術【2026年版】",
    summary:
      "読書×AIの6つの方法を解説。本の概要把握・PDFをClaudeで要約・ラバーダック学習法・疑問の深掘り・仕事への活用アイデア・感想文作成まで、コピペで使えるプロンプト例付き。Claude vs ChatGPT読書活用比較・著作権の注意点も丁寧に解説します。",
    category: "AI活用術",
    publishedAt: "2026-02-22T18:00:00+09:00",
    tags: ["AI 読書活用", "ChatGPT 本 要約", "Claude PDF 要約", "読書 AI 活用術", "読書習慣 AI"],
  },
  {
    slug: "ai-novel-creative-writing-guide",
    title: "AIで小説・創作文章が書ける！ChatGPT・Claudeを使った創作入門ガイド【2026年版】",
    summary:
      "「アイデアはあるのに書き出せない」「途中で行き詰まる」——そんな創作の悩みをAIが解消。プロット設計・キャラ設定・場面描写・セリフ磨き・行き詰まり打開の5場面でのAI活用法と、ジャンル別（ファンタジー・恋愛・ミステリー）コピーして使えるプロンプト集を収録。著作権の考え方もわかりやすく解説。",
    category: "AI活用術",
    publishedAt: "2026-02-22T15:00:00+09:00",
    tags: ["AI 小説 書き方", "ChatGPT 創作", "Claude 創作", "創作 プロンプト", "AI 物語 書き方"],
  },
  {
    slug: "ai-job-interview-prep-guide",
    title: "AIで面接対策が変わる！ChatGPTを使った自己分析・想定質問・模擬面接の完全ガイド【2026年版】",
    summary:
      "面接の不安をAIで解消。ChatGPTを面接官役にした模擬面接・自己分析から自己PR磨き・STAR法での回答構造化・業界別想定質問リスト作成・面接後の振り返りまで、就職・転職活動に即使えるプロンプト付きで完全解説。「失敗が怖い」という壁がなくなります。",
    category: "キャリア・転職",
    publishedAt: "2026-02-22T15:00:00+09:00",
    tags: ["AI 面接対策", "ChatGPT 就活", "模擬面接 AI", "自己分析 AI", "転職 AI 活用"],
  },
  {
    slug: "ai-cooking-recipe-guide",
    title: "AIで料理が楽しくなる！ChatGPT・Geminiを使ったレシピ&料理活用術入門",
    summary:
      "冷蔵庫の食材を伝えるだけでレシピ提案・1週間献立の自動生成・アレルギー対応・カロリー計算・料理の失敗リカバリーまで、AI×料理の活用法をプロンプト例付きで網羅。初心者から忙しい方・ダイエット中の方まで、今日の夕食の悩みが消えます。",
    category: "AI活用術",
    publishedAt: "2026-02-22T15:00:00+09:00",
    tags: ["AI 料理 レシピ", "ChatGPT 献立", "冷蔵庫 食材 レシピ AI", "AI 料理 初心者", "Gemini 料理"],
  },
  {
    slug: "chatgpt-web-search-guide",
    title: "ChatGPTの検索機能が超便利！使い方・活用術を初心者向けに解説【2026年最新】",
    summary:
      "ChatGPTのウェブ検索機能（Search）を初心者向けに徹底解説。無料プランでも使える方法・Googleとの使い分け・日常活用ユースケース8選・ハルシネーション対策・もっと便利に使う5つのコツ付き。情報収集の質と速度が劇的に変わります。",
    category: "ChatGPT",
    publishedAt: "2026-02-22T15:00:00+09:00",
    tags: ["ChatGPT 検索機能", "ChatGPT Search 使い方", "ChatGPT Google 違い", "ChatGPT Search 無料", "AI 検索 活用術"],
  },
  {
    slug: "claude-artifacts-guide",
    title: "Claude Artifactsとは？コードなしでHTMLページ・ツール・スライドを作る方法【初心者向け】",
    summary:
      "ClaudeのArtifacts機能を徹底解説。プログラミング知識ゼロで計算ツール・ゲーム・HTML名刺・プレゼンスライドが作れる仕組みと使い方。無料プランでの利用可否・ChatGPT Canvasとの違い・今すぐ試せるプロンプト12選・使いこなす5つのコツを初心者向けに丁寧に解説します。",
    category: "最新AIツール",
    publishedAt: "2026-02-22T12:00:00+09:00",
    tags: ["Claude Artifacts", "Artifacts 使い方", "コードなし HTML作成", "Claude 初心者", "AI ツール作成"],
  },
  {
    slug: "ai-travel-planning-guide",
    title: "AIで旅行計画が変わる！ChatGPT・Geminiを使った旅行準備の完全ガイド",
    summary:
      "ChatGPT・GeminiでAI旅行計画を徹底解説。行き先選び・旅程表作成・持ち物リスト・費用シミュレーション・英会話フレーズ準備まで旅行の全ステップをAIで効率化。国内旅行・海外旅行両対応、今すぐ使えるプロンプト15選付き。AIの情報の注意点も丁寧に解説します。",
    category: "AI活用術",
    publishedAt: "2026-02-22T12:00:00+09:00",
    tags: ["AI 旅行計画", "ChatGPT 旅行", "Gemini 旅行", "旅程表 自動作成", "旅行 AI 活用"],
  },
  {
    slug: "chatgpt-canvas-guide",
    title: "ChatGPTのCanvas（キャンバス）とは？文書・コード作成に革命！初心者でも使える新機能完全ガイド2026",
    summary:
      "ChatGPTのCanvas機能を徹底解説。2024年10月に追加された共同編集機能の使い方・起動方法・3つの主要用途（文書作成・コード・プレゼン）・特に役立つ場面8選・使いこなすコツ5つをステップバイステップで紹介。修正のたびにコピペ不要でAIとリアルタイム編集できるようになります。",
    category: "ChatGPT",
    publishedAt: "2026-02-22T12:00:00+09:00",
    tags: ["ChatGPT Canvas", "Canvas 使い方", "ChatGPT 新機能", "AI 文書作成", "共同編集"],
  },
  {
    slug: "ai-healthy-usage-guide",
    title: "AIに頼りすぎていない？健全なAI活用のための7つのルール｜思考力・判断力を守りながら使う方法",
    summary:
      "「ChatGPTに何でも頼って自分で考えなくなった」という不安に正直に向き合う。AI依存の正体・使うべき場面と自分でやるべき場面の見分け方・健全なAI活用の7つのルール・1週間改善プランを解説。思考力・判断力を守りながらAIを最大限活用する方法。",
    category: "AI活用術",
    publishedAt: "2022-02-22T13:00:00+09:00",
    tags: ["AI 頼りすぎ", "AI 依存", "健全なAI活用", "AI 思考力", "AI 付き合い方"],
  },
  {
    slug: "ai-hobby-lifestyle-guide",
    title: "AIで趣味が10倍楽しくなる！料理・旅行・読書・音楽・映画の活用術2026｜初心者でも今日からできる55の使い方",
    summary:
      "「AIは仕事専用」という誤解を解消。料理・旅行・読書・音楽・映画・ガーデニング・ペット・スポーツ・DIY・写真など日常の趣味にAIを取り入れる具体的な方法を55例紹介。今日から始められる3ステップ付き。",
    category: "AI活用術",
    publishedAt: "2026-02-22T11:00:00+09:00",
    tags: ["AI 趣味", "AI 料理", "AI 旅行", "AI 読書", "AI 音楽", "AI 映画"],
  },
  {
    slug: "claude-projects-guide",
    title: "Claude Projectsとは？使い方から活用術まで完全ガイド｜長い資料や仕事を一元管理する新習慣",
    summary:
      "Claude Projectsの始め方・使い方を初心者向けにわかりやすく解説。通常の会話との違い、Pro限定機能の全貌、活用シーン、GPTsとの比較、ベストプラクティス5つを網羅しています。",
    category: "最新AIツール",
    publishedAt: "2026-02-22T11:00:00+09:00",
    tags: ["Claude Projects", "Claude Pro", "AI 資料管理", "GPTs 比較", "Claude ワークフロー"],
  },
  {
    slug: "ai-tool-cost-guide-2026",
    title: "AI有料プランの費用対効果を正直比較2026｜ChatGPT・Claude・Gemini、月いくら払うべき？",
    summary:
      "ChatGPT Plus・Claude Pro・Gemini Advanced・Perplexity Proを価格・性能・コスパで正直比較. 無料プランでできることとできないことを整理し、ユーザータイプ別のおすすめプランと有料化すべきタイミングの目安を解説します。",
    category: "最新AIツール",
    publishedAt: "2026-02-22T10:00:00+09:00",
    tags: ["AI 有料プラン 比較", "ChatGPT Plus", "Claude Pro", "Gemini Advanced", "AI コスパ"],
  },
  {
    slug: "chatgpt-custom-instructions-guide",
    title: "ChatGPTのカスタム指示（Custom Instructions）完全ガイド｜設定するだけで毎回の回答が劇的に変わる方法",
    summary:
      "ChatGPTのCustom Instructions（カスタム指示）の設定方法をPC・スマホ別に解説。「自分について」「回答の仕方」2つの項目の書き方と、職業別・用途別15のテンプレートを収録。設定前後の比較・メモリ機能との違いも丁寧に説明します。",
    category: "ChatGPT",
    publishedAt: "2026-02-22T11:00:00+09:00",
    tags: ["ChatGPT カスタム指示", "Custom Instructions", "ChatGPT パーソナライズ", "ChatGPT 設定"],
  },
  {
    slug: "chatgpt-custom-gpts-guide",
    title: "ChatGPTのGPTs（カスタムGPT）完全入門2026｜無料で使える便利GPT15選と自分専用GPTの作り方",
    summary:
      "GPTsとは何か・GPT Storeの場所・今すぐ使えるおすすめGPT15選（英語学習・料理・プログラミング・文章作成・デザインなどカテゴリ別）・自分専用GPTの作り方をステップバイステップで解説。ChatGPT Plusの隠れた最強機能を使いこなす完全入門ガイド。",
    category: "ChatGPT",
    publishedAt: "2026-02-22T09:00:00+09:00",
    tags: ["GPTs 使い方", "カスタムGPT 作り方", "GPT Store", "ChatGPT GPTs 初心者", "おすすめ GPT"],
  },
  {
    slug: "chatgpt-memory-feature-guide",
    title: "ChatGPTのメモリ機能とは？設定方法から活用術まで、会話を記憶するAIの使い方完全ガイド",
    summary:
      "毎回「私は〇〇の仕事をしていて…」と説明するのが面倒な人へ。ChatGPTのメモリ機能の仕組み・設定手順（スマホ/PC別）・覚えさせると便利なこと15選・確認&削除方法・Custom Instructionsとの違い・プライバシーの注意点まで徹底解説。",
    category: "ChatGPT",
    publishedAt: "2026-02-22T09:00:00+09:00",
    tags: ["ChatGPT メモリ機能", "ChatGPT 記憶", "ChatGPT Memory 設定", "ChatGPT 覚えさせる", "カスタム指示"],
  },
  {
    slug: "ai-overview-map-2026",
    title: "2026年春のAI全体マップ｜初心者がまず知っておくべきツール・できること・始め方",
    summary:
      "ChatGPT・Claude・Gemini・Grok 4...AIツールが多すぎて迷っていませんか？2026年春時点の生成AI全体像を「地図」のように整理。テキスト・画像・音声・動画・コーディングの5カテゴリと、あなたに合った入り口を案内します。",
    category: "AI基礎知識",
    publishedAt: "2026-02-22T11:00:00+09:00",
    tags: ["生成AI 全体像 2026", "AI ツール 種類 初心者", "ChatGPT Claude 違い", "生成AI 何から始める", "AI 地図 わかりやすい"],
  },
  {
    slug: "ai-results-gap-honest-guide",
    title: "AIで成果が出る人・出ない人の本当の差｜使い方よりも大切な3つのマインドセット",
    summary:
      "「AIを使っても変わらない」そのモヤモヤには理由があります。ツールの問題ではなく、思考の問題。①70点で動く ②対話を重ねる ③一緒に考える——成果を出している人が実践している3つのマインドセットを事例とともに解説します。",
    category: "AI活用術",
    publishedAt: "2026-02-22T12:00:00+09:00",
    tags: ["AI 成果 出ない 理由", "生成AI 活用 できない", "ChatGPT うまく使えない", "AI マインドセット", "生成AI 使いこなし 差"],
  },
  {
    slug: "chatgpt-wow-moments-guide",
    title: "ChatGPTに「すごい」と感じた瞬間10選｜初めて使ったときの感動と活用法",
    summary:
      "「ChatGPTって何がすごいの？」その答えは、実際に使った人の感動体験にあります。メール3分・難しい書類の翻訳・思考整理——10の感動シーンをプロンプト例付きで紹介。読み終わったら今すぐ試したくなります。",
    category: "AI活用術",
    publishedAt: "2026-02-22T13:00:00+09:00",
    tags: ["ChatGPT すごい 体験", "生成AI 感動", "ChatGPT 初めて 使った 感想", "AI 何がすごい", "ChatGPT びっくりした"],
  },
  {
    slug: "ai-30min-challenge-beginner",
    title: "生成AIを今日から実感！初心者でも30分で体験できる7つのチャレンジ",
    summary:
      "コピペで試せる7つのプロンプトチャレンジで、AIの手触り感を30分以内に実感。メール・翻訳・悩み相談・献立・SNS・仕事整理まで、難しい知識ゼロ・スマホだけで今日から始められます。",
    category: "AI基礎知識",
    publishedAt: "2026-02-22T14:00:00+09:00",
    tags: ["生成AI 初心者 試し方", "ChatGPT 使い方 初めて", "AI すぐ試せる", "生成AI 体験 方法", "ChatGPT 始め方 簡単"],
  },
  {
    slug: "ai-mindset-3habits",
    title: "AI時代に「使いこなせる人」になるための3つの思考習慣【2026年版】",
    summary:
      "AIがうまく使えない原因はツールではなく思考の癖。「60点のラフ案を育てる」「背景を毎回渡す」「失敗を探索と捉える」3つの思考習慣と30日プランを、具体的なBefore/After例とともに解説。",
    category: "AI活用術",
    publishedAt: "2026-02-22T12:00:00+09:00",
    tags: ["AI 活用 思考法", "生成AI うまく使う コツ", "AI 使いこなせない 原因", "AI思考習慣", "AIリテラシー 高める"],
  },
  {
    slug: "chatgpt-3month-journey",
    title: "ChatGPTを3ヶ月使い続けたら、こんな変化が起きた｜AI初心者が正直に語る体験記【2026年版】",
    summary:
      "「AIを使ってみたいけど続けられるか不安」という方へ。AI初心者がChatGPTを3ヶ月使い続けて感じたリアルな変化を正直に語ります。1週間後の小さな驚き、1ヶ月後の活用シーン15例、3ヶ月後の思考の変化、続けるコツを体験談形式で解説。",
    category: "AI活用術",
    publishedAt: "2026-02-22T23:00:00+09:00",
    tags: ["ChatGPT 使い続けた 変化", "AI 生活 変わった", "生成AI 体験談", "ChatGPT 続けるコツ", "AI習慣化"],
  },
  {
    slug: "bolt-new-beginners-guide",
    title: "Bolt.new完全入門ガイド｜AIでWebサイトを一瞬で作る方法【2026年最新版】",
    summary:
      "プログラミング経験ゼロでもOK。Bolt.newの始め方をステップバイステップで解説。プロンプトの書き方、v0・Lovable・Replitとの比較、無料枠の活用法、料金プラン、初心者がつまずきやすいポイントまで2026年2月最新情報でまとめました。",
    category: "最新AIツール",
    publishedAt: "2026-02-22T22:00:00+09:00",
    tags: ["Bolt.new 使い方", "Bolt.new 入門", "AIでWebサイト作成", "ノーコード AI Web制作", "Bolt.new 無料"],
  },
  {
    slug: "ai-parenting-guide",
    title: "AI×子育て・育児活用ガイド｜忙しいパパ・ママのためのChatGPT実践術20選【2026年版】",
    summary:
      "献立の自動提案、宿題サポート、PTA文書作成、育児の悩み相談まで。忙しい子育て世代がAIを味方にする20の実践術を、そのまま使えるプロンプト例つきで紹介. ChatGPT・Claude・Geminiの無料プランで今日から始められます。",
    category: "AI活用術",
    publishedAt: "2026-02-22T22:00:00+09:00",
    tags: ["AI 子育て 活用", "ChatGPT 育児", "AI 子育て 便利", "生成AI ママ パパ 使い方", "ChatGPT 子供 教育"],
  },
  {
    slug: "ai-job-future-career-guide",
    title: "AIに仕事を奪われる？不安の正体と、今日から始めるAI時代のキャリア戦略【2026年版】",
    summary:
      "「AIに仕事を奪われるかも」という不安の正体をデータで整理し、職種別の影響度マトリクスと今日から始められる3ステップのキャリア戦略を解説。煽りでも楽観でもない、2026年最新の事実に基づくAI時代のキャリアガイド。",
    category: "キャリア・転職",
    publishedAt: "2026-02-22T21:00:00+09:00",
    tags: ["AI 仕事 奪われる", "AI時代 キャリア", "生成AI 仕事 なくなる", "AI 転職 不安", "ChatGPT 仕事への影響"],
  },
  {
    slug: "chatgpt-free-guide-2026",
    title: "ChatGPT無料版でここまでできる！2026年最新｜有料版との違いと賢い使い方",
    summary:
      "2026年2月最新のChatGPT無料版を徹底解説。GPT-5.2・画像生成・音声会話・Web検索まで無料で使える時代に。有料版との違い、Claude・Geminiとの比較、無料で最大限活用する5つのコツをプロンプト例つきで紹介します。",
    category: "ChatGPT",
    publishedAt: "2026-02-22T20:00:00+09:00",
    tags: ["ChatGPT 無料 できること", "ChatGPT 無料版 使い方", "ChatGPT 無料 有料 違い", "ChatGPT Free 制限", "ChatGPT Plus 必要"],
  },
  {
    slug: "how-to-ask-ai-beginners",
    title: "ChatGPTに何を聞けばいい？｜AIへの質問・相談の仕方がわかる完全入門ガイド",
    summary:
      "ChatGPTをインストールしたけど「何を聞けばいいかわからない」方へ。AIは検索ではなく相談相手。5つの質問パターン、今日すぐ試せる10のアイデア、会話のコツを実例付きで解説。下手でもOK、AIは怒りません。",
    category: "AI基礎知識",
    publishedAt: "2026-02-22T19:00:00+09:00",
    tags: ["ChatGPT 何を聞けばいい", "AI 質問の仕方", "ChatGPT 使い方 わからない", "生成AI 何ができる", "ChatGPT 聞き方 コツ"],
  },
  {
    slug: "ai-daily-life-guide",
    title: "AIで暮らしが変わる｜日常生活×生成AI活用術20選【2026年版】",
    summary:
      "食事の献立・冷蔵庫の残り物レシピ・健康相談・子育て・趣味まで、日常生活でAIを活用する20の方法をプロンプト例つきで紹介。ChatGPT・Claude・Geminiの無料プランで今日から始められます。",
    category: "AI活用術",
    publishedAt: "2026-02-22T18:00:00+09:00",
    tags: ["生成AI 日常生活 活用", "ChatGPT 生活 便利", "AI 暮らし 使い方", "ChatGPT 日常 活用例", "AI できること 日常"],
  },
  {
    slug: "chatgpt-voice-mode-guide",
    title: "ChatGPT音声モード完全ガイド｜スマホで話しかけるだけのAI活用術【2026年版】",
    summary:
      "ChatGPTの音声モードの始め方から便利な活用シーンまで完全解説。通勤中・料理中・運転中・英会話練習・寝る前のブレストなど、ハンズフリーでAIを使いこなす方法を紹介。無料プランでも利用可能。",
    category: "AI活用術",
    publishedAt: "2026-02-22T17:00:00+09:00",
    tags: ["ChatGPT 音声モード 使い方", "ChatGPT 音声会話", "AI 音声入力 活用", "ChatGPT 話しかける", "AI 音声 スマホ"],
  },
  {
    slug: "ai-beginners-guide-over-50",
    title: "50代60代から始めるAI入門｜スマホだけでできるChatGPT活用ガイド【2026年版】",
    summary:
      "50代60代の方向けに、スマホだけでChatGPTを始める手順をステップバイステップで解説。音声入力の活用法、健康相談・旅行計画・趣味・町内会文書作成など生活に直結する7つの活用シナリオ、よくある失敗と対処法まで。",
    category: "AI基礎知識",
    publishedAt: "2026-02-22T16:00:00+09:00",
    tags: ["AI 50代 始め方", "ChatGPT シニア 使い方", "50代 AI入門", "生成AI 初心者 60代", "ChatGPT 簡単 始める"],
  },
  {
    slug: "chatgpt-prompt-templates-50",
    title: "すぐ使える！ChatGPTプロンプトテンプレート50選｜仕事・勉強・日常のAI活用集【2026年版】",
    summary:
      "コピペで即使えるChatGPTプロンプトテンプレートを50個厳選。仕事効率化・文章作成・勉強・日常生活・クリエイティブの5カテゴリに分類し、NG例/OK例の対比付きで使い方のコツを解説。ChatGPT・Claude・Geminiすべてで使えます。",
    category: "実務活用",
    publishedAt: "2026-02-22T15:00:00+09:00",
    tags: ["ChatGPT プロンプト テンプレート", "ChatGPT 使い方 例文", "AI プロンプト 便利", "ChatGPT 活用 仕事"],
  },
  {
    slug: "ai-privacy-safety-guide",
    title: "生成AIに個人情報を入れても大丈夫？｜安全に使うための5つのルール【2026年版】",
    summary:
      "ChatGPT・Claude・Geminiに個人情報や会社の情報を入力しても安全？2026年2月時点の各ツールのデータポリシーを正確に比較し、オプトアウト設定の手順を図解。「何が危険で何は安全か」を5つのルールで解説。",
    category: "AI基礎知識",
    publishedAt: "2026-02-22T13:00:00+09:00",
    tags: ["生成AI 個人情報 大丈夫", "ChatGPT セキュリティ 安全性", "AI 情報漏洩 対策", "ChatGPT 会社で使う 注意点"],
  },
  {
    slug: "ai-hallucination-fact-check-guide",
    title: "ChatGPTが嘘をつく？｜生成AIのハルシネーションを見抜く7つの実践テクニック",
    summary:
      "AIが「嘘をつく」のはなぜ？ハルシネーションの仕組みをわかりやすく解説し、今日から使える7つの見抜き方を具体的なプロンプト例つきで紹介。GPT-5.2・Claude Opus 4.6・Gemini 3の2026年2月最新ハルシネーション改善状況も。",
    category: "AI基礎知識",
    publishedAt: "2026-02-22T12:00:00+09:00",
    tags: ["ChatGPT 嘘 見分け方", "生成AI ハルシネーション 対策", "AI 間違い なぜ", "AI ファクトチェック 方法"],
  },
  {
    slug: "ai-trends-february-2026",
    title: "【2026年2月】生成AIの最新トレンド5選｜初心者が\u201c今\u201d知っておくべきこと",
    summary:
      "Claude 4.6、GPT-5.2、Gemini 3、AIエージェント、日本のリスキリング政策——2026年2月の生成AI最新動向を初心者目線でわかりやすく解説. 各トレンドの「あなたへの影響」と「今日からできること」を整理しました。",
    category: "AI基礎知識",
    publishedAt: "2026-02-22T11:00:00+09:00",
    tags: ["生成AI 最新 2026", "AI トレンド 2026年", "ChatGPT 最新情報", "Claude 最新"],
  },
  {
    slug: "ai-mastery-tips-for-beginners",
    title: "生成AIを「使えるようになった人」がやっていた5つのこと｜挫折しないためのリアルな始め方",
    summary:
      "「うまく使えない」「何を聞けばいいかわからない」と感じている方へ。AIを使いこなしている人が実践していた5つの行動パターンを、コピペで使えるプロンプト例つきで解説。ChatGPT・Claude・Geminiの2026年2月最新比較も。",
    category: "AI基礎知識",
    publishedAt: "2026-02-22T10:00:00+09:00",
    tags: ["生成AI 使いこなす コツ", "ChatGPT うまく使えない", "AI 使い方 初心者", "生成AI 挫折"],
  },
  {
    slug: "ai-first-30-days-work-guide",
    title: "生成AIを仕事で使い始めた人の「最初の30日」完全ガイド｜週別ロードマップ＆プロンプト例つき",
    summary:
      "生成AIを仕事に取り入れたい社会人向け。Week 1〜4の週別ロードマップで、アカウント作成からチームへの展開まで30日で「AI使える人」になる手順をコピペ可能なプロンプト例つきで解説します。",
    category: "実務活用",
    publishedAt: "2026-02-21T21:00:00+09:00",
    tags: ["生成AI 仕事 始め方", "AI 最初の30日", "ChatGPT 業務活用"],
  },
  {
    slug: "ai-free-plan-comparison-2026",
    title: "ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較",
    summary:
      "ChatGPT・Claude・Geminiの無料プランを2026年2月時点で徹底比較。利用モデル・上限・ファイル添付・画像生成・外部連携の違い、実務シーン別おすすめ、課金タイミング、30分で全ツールを試せるガイドまで。",
    category: "AI基礎知識",
    publishedAt: "2026-02-21T20:00:00+09:00",
    tags: ["ChatGPT 無料 できること", "Claude 無料プラン", "Gemini 無料 比較"],
  },
  {
    slug: "ai-anxiety-overcome-guide",
    title: "「AIが怖い・難しい」を乗り越える安心スタートガイド2026｜5つの不安と正直な答え",
    summary:
      "AIに興味はあるけど怖い・難しそうと感じている方へ。仕事が奪われる？個人情報は？使いこなせる？——5つの不安にデータと公式情報で正直に答え、最初の3日間でやることを具体的に解説します。",
    category: "AI基礎知識",
    publishedAt: "2026-02-21T18:00:00+09:00",
    tags: ["AI 怖い", "生成AI 不安", "AI 難しい", "AI 始め方 不安"],
  },
] as const;

function parsePublishedTimestamp(publishedAt?: string): number {
  if (!publishedAt) return Number.NEGATIVE_INFINITY;
  const timestamp = Date.parse(publishedAt);
  return Number.isNaN(timestamp) ? Number.NEGATIVE_INFINITY : timestamp;
}

const sortedBlogPosts = [...blogPosts].sort((left, right) => {
  const leftTimestamp = parsePublishedTimestamp(left.publishedAt);
  const rightTimestamp = parsePublishedTimestamp(right.publishedAt);

  if (rightTimestamp !== leftTimestamp) {
    if (rightTimestamp === Number.NEGATIVE_INFINITY) return -1;
    if (leftTimestamp === Number.NEGATIVE_INFINITY) return 1;
    return rightTimestamp - leftTimestamp;
  }

  return blogPosts.indexOf(left) - blogPosts.indexOf(right);
});

const categoryColors = {
  "AI基礎知識": { border: "#e2e8f0", bg: "#f8fafc", text: "#475569" },
  "AI活用術": { border: "#e9d5ff", bg: "#f5f3ff", text: "#7c3aed" },
  "実務活用": { border: "#fed7aa", bg: "#fff7ed", text: "#ea580c" },
  "AIO/マーケ": { border: "#bae6fd", bg: "#f0f9ff", text: "#0284c7" },
  "最新AIツール": { border: "#a5f3fc", bg: "#ecfeff", text: "#0891b2" },
  "ChatGPT": { border: "#99f6e4", bg: "#f0fdfa", text: "#0d9488" },
  "資格・スキル": { border: "#ddd6fe", bg: "#f5f3ff", text: "#6d28d9" },
  "キャリア・転職": { border: "#fde68a", bg: "#fffbeb", text: "#d97706" },
  "副業・フリーランス": { border: "#a7f3d0", bg: "#f0fdf4", text: "#059669" },
  "法人向け": { border: "#e2e8f0", bg: "#f8fafc", text: "#0f172a" },
  "AI学習": { border: "#c7d2fe", bg: "#eef2ff", text: "#4f46e5" },
} as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: pageOgImagePath,
        width: 1200,
        height: 630,
        alt: "AIリブートアカデミー ブログ一覧",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageOgImagePath],
  },
};

export default function AcademyBlogPage() {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://ai-reboot.io" },
          { name: "アカデミー", url: "https://ai-reboot.io/academy" },
          { name: "ブログ", url: pageUrl },
        ]}
      />

      <main style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }} className="pb-20 pt-24 sm:pt-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AcademyBreadcrumb
            className="mb-6"
            items={[
              { label: "ホーム", href: "/" },
              { label: "アカデミー", href: "/academy" },
              { label: "ブログ" },
            ]}
          />

          <header 
            className="rounded-xl border bg-white p-6 sm:p-8"
            style={{ borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <p 
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric, color: ACADEMY_COLORS.accentMain }}
            >
              Academy Blog
            </p>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              アカデミーブログ一覧
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
              生成AIの基礎知識から、実務活用、資格・スキル、キャリア、法人向け導入まで、目的別に記事を探せます。
            </p>
          </header>

          <section 
            className="mt-6 rounded-xl border p-6 sm:p-8 bg-white"
            style={{ borderColor: ACADEMY_COLORS.lineSoft }}
          >
            <p 
              className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: ACADEMY_TYPOGRAPHY.numeric, color: ACADEMY_COLORS.ctaLine }}
            >
              Line Bonus
            </p>
            <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              記事で学んだ内容を、LINEで実務アクションに落とし込む
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              LINE登録で「3行要約テンプレート」「補助金対象の簡易診断」「次に読むべき記事の優先順位表」を無料配布しています。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-8 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
              >
                LINEで無料特典を受け取る
              </a>
              <Link
                href="/academy/seminars"
                className="inline-flex items-center justify-center rounded-lg border px-8 py-3 text-base font-bold transition-opacity hover:opacity-70"
                style={{ backgroundColor: ACADEMY_COLORS.bgPanel, borderColor: ACADEMY_COLORS.lineSoft, color: ACADEMY_COLORS.textBody }}
              >
                無料セミナーを見る
              </Link>
            </div>
          </section>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedBlogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:border-orange-300"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                {post.thumbnail && (
                  <Link href={`/academy/blog/${post.slug}`}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  <p
                    className="inline-block rounded px-2 py-0.5 text-[10px] font-bold"
                    style={{ 
                      backgroundColor: categoryColors[post.category].bg, 
                      color: categoryColors[post.category].text,
                      border: `1px solid ${categoryColors[post.category].border}`
                    }}
                  >
                    {post.category}
                  </p>
                  <h2 className="mt-4 text-lg font-bold leading-tight text-slate-900 group-hover:text-[#d46a1f] transition-colors line-clamp-2">
                    <Link href={`/academy/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3">{post.summary}</p>
                  <div className="mt-5 pt-5 border-t" style={{ borderColor: ACADEMY_COLORS.lineSoft }}>
                    <Link
                      href={`/academy/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-bold text-slate-400 group-hover:text-[#d46a1f] transition-colors"
                    >
                      READ ARTICLE <ChevronRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
