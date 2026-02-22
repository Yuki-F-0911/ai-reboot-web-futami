import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";

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
    slug: "grok-3-beginners-guide",
    title: "Grok 3完全入門ガイド2026：イーロン・マスクの最新AIを初心者が試した正直レポート",
    summary:
      "2026年2月にリリースされたGrok 3を初心者目線で徹底解説。ChatGPT・Claude・Geminiとの違い、無料で始める方法、実際に試してわかった強み・弱みを正直レポート。",
    category: "最新AIツール",
    publishedAt: "2026-02-22T20:00:00+09:00",
    tags: ["Grok 3", "xAI", "ChatGPT 比較", "AI選び"],
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
    publishedAt: "2026-02-22T13:00:00+09:00",
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
      "ChatGPT・Claude・Gemini・Grok 3...AIツールが多すぎて迷っていませんか？2026年春時点の生成AI全体像を「地図」のように整理。テキスト・画像・音声・動画・コーディングの5カテゴリと、あなたに合った入り口を案内します。",
    category: "AI基礎知識",
    publishedAt: "2026-02-22T11:00:00+09:00",
    tags: ["生成AI 全体像 2026", "AI ツール 種類 初心者", "ChatGPT Claude 違い", "生成AI 何から始める", "AI 地図 わかりやすい"],
  },
  {
    slug: "ai-results-gap-honest-guide",
    title: "AIで成果が出る人・出ない人の本当の差｜使い方よりも大切な3つのマインドセット",
    summary:
      "「AIを使っても変わらない」そのモヤモヤには理由があります。ツールの問題ではなく、思考の問題。①70点で動く ②対話を重ねる ③一緒に考える——成果を出している人が実践している3つのマインドセットを事例と共に解説します。",
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
      "献立の自動提案、宿題サポート、PTA文書作成、育児の悩み相談まで。忙しい子育て世代がAIを味方にする20の実践術を、そのまま使えるプロンプト例つきで紹介。ChatGPT・Claude・Geminiの無料プランで今日から始められます。",
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
      "Claude 4.6、GPT-5.2、Gemini 3、AIエージェント、日本のリスキリング政策——2026年2月の生成AI最新動向を初心者目線でわかりやすく解説。各トレンドの「あなたへの影響」と「今日からできること」を整理しました。",
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
  {
    slug: "assistants-api-migration-checklist-2026",
    title: "Assistants API移行チェックリスト2026｜Responses API/Chat Completions移行手順",
    summary:
      "Assistants API sunset（target: 2026-08-26）に向けて、Responses API/Chat Completionsへの移行背景、10項目チェックリスト、落とし穴対策、段階移行スケジュールを法人担当者向けに整理した実務ガイドです。",
    category: "法人向け",
    publishedAt: "2026-02-21T09:30:00+09:00",
    tags: ["Assistants API 移行 2026", "Assistants API sunset", "OpenAI Responses API 移行"],
  },
  {
    slug: "claude-sonnet-4-6-guide",
    title: "Claude Sonnet 4.6使い方ガイド｜料金・Opus 4.6比較・API実装【2026年2月】",
    summary:
      "Claude Sonnet 4.6を2026年2月時点で解説。公開日、Opus 4.6との使い分け、API呼び出し例、文書作成・要約・コード補助の実務活用、Claude.aiとAPIの料金比較まで整理した中級者向けガイドです。",
    category: "最新AIツール",
    publishedAt: "2026-02-21T09:00:00+09:00",
    tags: ["Claude Sonnet 4.6 使い方", "Claude Sonnet 4.6 料金", "Claude Sonnet 4.6 API"],
  },
  {
    slug: "github-copilot-agent-hq-guide",
    title: "GitHub Copilot Agent HQ使い方ガイド｜Issue→PR自動化とClaude Code使い分け【2026年版】",
    summary:
      "2026年2月時点のGitHub Copilot Agent HQを解説。Claude + Codex統合の位置づけ、GitHub.comでの起動手順、Issue→PR自動化ワークフロー、Copilot Workspaceとの違い、許可リポジトリ限定のセキュリティ設定まで整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "openai-codex-app-guide",
    title: "Codex App使い方ガイド｜macOS版の始め方とSpark/Classic比較【2026年版】",
    summary:
      "2026年2月2日リリースのmacOS版Codex Appを解説。Codex SparkとCodex Classicの違い、ローカルコード読み取りの仕組みとセキュリティ、インストールから初回使用手順、Cursor/Claude Codeとの使い分けまで整理します。",
    category: "最新AIツール",
  },
  {
    slug: "ai-pc-copilot-plus-guide",
    title: "Copilot+ PC活用ガイド｜NPU 40TOPS基準と購入前チェック5点【2026年版】",
    summary:
      "Copilot+ PCの定義（NPU 40TOPS以上）、Recall・Live Captions・AI画像生成の実務活用、Surface Pro 11やThinkPad X1 Carbonなどの機種比較、購入前チェック5点を在宅ワーク視点で整理したガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "n8n-vs-make-comparison",
    title: "n8nとMake比較ガイド｜2ツール深掘りで選ぶワークフロー自動化【2026年版】",
    summary:
      "n8nとMake.comを2ツール限定で深掘り比較。費用、セルフホスト可否、生成AI連携、学習コスト、サポートの5軸と、中小企業・個人・エンタープライズ別フローチャートで選び方を整理した実務記事です。",
    category: "実務活用",
  },
  {
    slug: "gpt-5-3-guide",
    title: "GPT-5.3 使い方ガイド｜Codex・Spark連携・料金・Claude Opus 4.6比較【2026年2月版】",
    summary:
      "GPT-5.3の概要とGPT-5.2からの変化点、Codex/Sparkとの使い分け、ビジネス実務（文書作成・分析・コード補助）での活用シーン、Claude Opus 4.6との強み・弱み・料金比較を2026年2月時点で解説します。",
    category: "最新AIツール",
  },
  {
    slug: "claude-code-beginners-guide",
    title: "Claude Code入門｜インストール・基本コマンド・Vibe Coding活用まで【2026年版】",
    summary:
      "AnthropicのCLIツール「Claude Code」の概要・インストール手順・基本コマンドとワークフロー・GitHub Copilot/Cursorとの比較・Vibe Codingとの親和性を2026年2月時点でわかりやすく解説します。",
    category: "最新AIツール",
  },
  {
    slug: "openai-o3-o4mini-guide",
    title: "OpenAI o3/o4-mini使い方ガイド｜推論モデルの実務選定と料金判断【2026年版】",
    summary:
      "OpenAI o3/o4-miniの違いを2026年2月時点で整理。推論モデルを選ぶ理由、GPT-5系との役割分担、o3 API運用、料金の判断基準、実務向け選定チャートまで中級者向けに解説したガイドです。",
    category: "実務活用",
  },
  {
    slug: "openai-responses-api-guide",
    title: "OpenAI Responses API実装ガイド｜移行・function calling・運用設計 | AIリブート",
    summary:
      "OpenAI Responses APIの始め方を2026年2月時点で整理。Chat Completionsからの移行手順、function callingとbuilt-in toolsの設計、previous_response_idでの会話管理、Background mode運用まで実務目線で解説します。",
    category: "実務活用",
    publishedAt: "2026-02-20T15:30:00+09:00",
    tags: ["OpenAI Responses API 使い方", "Chat Completions 移行", "function calling 実装"],
  },
  {
    slug: "aireboot-academy-reviews",
    title: "AIリブートアカデミーの評判・口コミは実際どう？受講前に確認すべきポイントを正直解説",
    summary:
      "AIリブートアカデミーの評判・口コミを、公式公開の第一期コメントと講座情報をもとに整理。向いている人・向いていない人、受講後の変化、受講前に確認すべき懸念点まで最終判断用にまとめた記事です。",
    category: "キャリア・転職",
  },
  {
    slug: "make-automation-guide",
    title: "Make.com×生成AI自動化ガイド｜最初の1本を実装する手順【2026年版】",
    summary:
      "Make.comの使い方を比較ではなく実装手順に特化して解説。シナリオ設計、Webhook受信、生成AI処理、通知、失敗時の復旧まで、最初の1本を動かす流れを整理した実務ガイドです。",
    category: "実務活用",
  },
  {
    slug: "llm-cost-optimization-guide",
    title: "LLM APIコスト最適化ガイド｜トークン節約・モデル選定・キャッシュ設計【2026年版】",
    summary:
      "LLM API費用を運用面から最適化する実践ガイド。トークン節約、モデルルーティング、キャッシュ、監視指標を分解し、ChatGPT APIを含む日常運用での費用削減手順を解説します。",
    category: "実務活用",
  },
  {
    slug: "perplexity-pages-guide",
    title: "Perplexity Pages使い方ガイド｜公開・共有・SEO活用の実務手順【2026年2月最新版】",
    summary:
      "Perplexity Pagesに特化し、公開・共有・更新運用までを実務目線で整理。2026年2月時点はCreate page一時停止のため、Threads/Spacesで検証→Share/Exportで配布→（Convert復活後にPage化）という現実的フローで解説します。",
    category: "実務活用",
  },
  {
    slug: "flux-image-generation-guide",
    title: "Flux画像生成の使い方ガイド｜Dev/Schnell/Pro/Ultra比較とローカル運用【2026年版】",
    summary:
      "Flux.1 Dev/Schnell/Pro/Ultraの違いを、ライセンス・商用可否・速度・品質で整理。ComfyUI/Forgeのローカル運用、Replicate/fal.ai/Hugging Faceのクラウド活用、日本語プロンプト実践までまとめたガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "mcp-tool-integration-guide",
    title: "MCP使い方実践ガイド｜Claude Desktop・Claude CodeでNotion/GitHub/Slack連携【2026年版】",
    summary:
      "MCPの実践運用を2026年2月20日時点で解説。Claude Desktop/Codeの設定手順、公式MCPサーバーの使い道、Notion・GitHub・Slack連携、自作サーバー最小実装、トラブルシューティングまで中級者向けに整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-music-generation-2026",
    title: "AI音楽生成ツール比較2026｜Suno最新版・Udio・Mureka V8の違いと選び方",
    summary:
      "2026年2月時点でSuno最新版・Udio・Mureka V8を比較。音質、スタイル幅、歌詞対応、日本語対応、商用利用条件、料金の差を整理し、BGM・ポップス・ボカロ風・プロ品質の用途別に選び方を解説した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "ai-coding-tool-comparison-2026",
    title: "AIコーディングツール比較 2026年版｜Cursor・Claude Code・GitHub Copilotの選び方",
    summary:
      "2026年2月時点でCursor・Claude Code・GitHub Copilotを比較。Agent/Composer機能、コンテキスト長、モデル選択、Vibe Coding対応力、料金と年間コスト、用途別おすすめ、Copilot Agent HQの最新情報を整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "ai-research-tool-2026",
    title: "AI情報収集ツール比較2026｜Perplexity・Deep Research・Gensparkの選び方",
    summary:
      "2026年2月時点で、Perplexity・ChatGPT Deep Research・Gensparkを比較。リアルタイム検索型/深掘り型/専門特化型の違い、用途別選択チャート、料金と無料枠、ハルシネーション対策まで整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "ai-side-business-2026",
    title: "AI副業の稼ぎ方2026｜初心者が月5万円を目指す3分野と6か月ロードマップ",
    summary:
      "2026年のAI副業トレンドを踏まえ、記事生成代行・SNS運用代行・データ分析レポート代行の始め方、0〜6か月の収益化ロードマップ、月5万円の匿名実例、税務の注意点まで整理した実践ガイドです。",
    category: "副業・フリーランス",
  },
  {
    slug: "claude-opus-4-6-guide",
    title: "Claude Opus 4.6使い方ガイド｜1Mトークン・Adaptive Thinking・料金比較【2026年2月版】",
    summary:
      "Claude Opus 4.6を2026年2月20日時点で解説。1Mトークンコンテキスト、Adaptive Thinking、effort controls、ベンチ比較、API/Claude.ai料金、実務導入手順を中級者向けに整理したガイドです。",
    category: "最新AIツール",
    thumbnail: "/images/blog/claude-opus-4-6-guide/slide-01.png",
  },
  {
    slug: "gemini-deep-think-guide",
    title: "Gemini Deep Think使い方ガイド｜ARC-AGI-2・Codeforces・AI Ultra料金・推論AI比較",
    summary:
      "Gemini 3 Deep Thinkを2026年2月時点で解説。公開日と提供条件、ARC-AGI-2/Codeforcesの読み方、Gemini 1.5/2.0との使い分け、Google AI Ultraの料金、Claude Opus 4.6・GPT-5.2比較まで整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "openai-deep-research-guide",
    title: "OpenAI Deep Research使い方ガイド｜市場調査・競合分析の実務手順【2026年版】",
    summary:
      "OpenAI Deep Researchの使い方を2026年2月時点で解説。通常検索との違い、ChatGPT Plus/Pro/Business(旧Team)/Enterpriseでの起動手順、2026-02-10のMCP接続アップデート、レポート活用と誤情報対策、Perplexity・Gemini比較まで整理した実務ガイドです。",
    category: "実務活用",
  },
  {
    slug: "elevenlabs-guide",
    title: "ElevenLabs使い方ガイド2026｜料金・音声クローン・日本語対応を解説",
    summary:
      "ElevenLabsの始め方を、登録から初回音声生成、音声クローン、活用事例、日本語発音の実態、Free/Starter/Creator/Pro比較、VOICEVOX・NijiVoice・CoeFontとの違い、商用利用の注意点まで整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "ai-writing-tool",
    title: "AI文章作成ツール比較2026｜ChatGPT・Claude・Jasper・Copy.ai・Notion AIの選び方",
    summary:
      "AI文章作成ツールを2026年基準で比較。汎用チャット型と専門ライティング型の違い、主要5ツールの料金・日本語対応、ブログ/SNS/メール/広報での使い分け、AIらしい文を防ぐ編集手順まで整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "adobe-firefly-guide",
    title: "Adobe Firefly使い方ガイド2026｜商用利用・料金・Photoshop連携まで解説",
    summary:
      "Adobe Fireflyの使い方を2026年基準で解説。Photoshop・Illustrator・Adobe ExpressでのAI機能、商用利用ライセンス、無料版と有料Creative Cloudの違い、Midjourney・DALL·Eとの比較まで整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "gpt-vs-claude-2026",
    title: "ChatGPTとClaude比較 2026年版｜GPT-5.2 vs Claude 3.7 Sonnetの選び方",
    summary:
      "ChatGPT（GPT-5.2）とClaude 3.7 Sonnetを、文章・コード・分析・翻訳・創作の用途別に比較。無料/有料プラン、API単価、コンテキスト窓の差と、どっちを選ぶかの判断チャートまで整理した最新版ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "ai-smartphone-apps",
    title: "AIアプリおすすめ20選【スマホ版2026】iPhone/Android比較・無料TOP5",
    summary:
      "2026年時点のAIスマホアプリ20選をカテゴリ別で比較。iPhone/Androidの差、完全無料TOP5、課金判断、日本語対応が強いアプリまで初心者向けに整理したガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "midjourney-guide",
    title: "Midjourney v7使い方完全ガイド｜Discord・Web・料金・商用利用【2026年版】",
    summary:
      "Midjourney v7の始め方、DiscordとWebアプリの使い分け、日本語プロンプトの実態、Basic/Standard/Pro/Mega料金、DALL·E 3・Stable Diffusion・Canva AI比較、商用利用の注意点を整理した実践ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "midjourney-video-guide",
    title: "Midjourney V1 Video使い方ガイド｜静止画から動画生成・設定・商用利用【2026年版】",
    summary:
      "Midjourney V1 Videoの使い方を2026年2月時点で解説。正式公開日（2025-06-18）、Basic/Standard/Pro/Megaの対応差、Web/DiscordのAnimate手順、最大秒数・解像度、Runway Gen-3・Kling AIとの使い分けを整理した実践ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "ai-transcription-guide",
    title:
      "AI文字起こしアプリ比較2026｜Notta・Clova Note後継・Whisper・Otter・Google Recorderの選び方",
    summary:
      "AI文字起こしアプリを2026年基準で比較。Notta・LINE WORKS AiNote（旧Clova Note後継）・Whisper・Otter.ai・Google Recorderの料金、無料枠、日本語精度、会議連携を整理した実務ガイドです。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-transcription-guide/slide-01.png",
  },
  {
    slug: "what-is-generative-ai",
    title: "生成AIとは？初心者向けにわかりやすく解説",
    summary: "生成AIの定義、主要ツールの違い、最初の使い方を非技術者向けに整理した入門記事です。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/what-is-generative-ai/slide-1.png",
  },
  {
    slug: "context-engineering-guide",
    title: "コンテキストエンジニアリングとは？AIの出力品質を上げる設計思想を非エンジニアが解説",
    summary:
      "プロンプト改善だけでは品質が安定しない理由と、役割設定・背景情報・制約条件・出力形式の4要素でAI指示の再現性を上げる実践手順をまとめた記事です。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/context-engineering-guide/slide-1.png",
  },
  {
    slug: "what-is-ai-agent",
    title: "AIエージェントとは？定義・種類・作り方を解説",
    summary: "AIエージェントの基礎、従来AIとの違い、導入ステップと注意点を実務目線で整理した記事です。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/what-is-ai-agent/slide-1.png",
  },
  {
    slug: "ai-agent-build-guide",
    title: "AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説",
    summary:
      "AIエージェントの基本構造、開発5ステップ、主要フレームワーク比較、ノーコード実装、実務の活用例と注意点までをまとめた実装ガイドです。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-agent-build-guide/slide-01.png",
  },
  {
    slug: "dify-beginner-guide",
    title: "Difyの使い方完全ガイド｜ノーコードでAI業務ボットを最短で作る方法",
    summary:
      "Difyの定義・料金・インストール方法から、社内FAQボット作成の5ステップ、業種別5事例、失敗しない3つのポイントまでを解説。Difyスターターテンプレ（5ユースケース）配布中。",
    category: "実務活用",
    thumbnail: "/images/blog/dify-beginner-guide/slide-1.png",
  },
  {
    slug: "ai-customer-support-guide",
    title: "カスタマーサポートのAI活用｜一次対応・ナレッジ管理・品質管理の実装ガイド",
    summary:
      "CS現場の問い合わせ工数を削減するために、FAQボットの一次対応自動化、RAG前提のナレッジ管理、回答品質管理、クレーム対応設計までを段階的に解説した実務ガイドです。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-customer-support-guide/slide-01.png",
  },
  {
    slug: "workflow-automation-comparison",
    title: "ワークフロー自動化ツール比較｜Make・Zapier・n8nを徹底比較【2026年版】",
    summary:
      "Make・Zapier・n8nを料金・機能・難易度・セキュリティの4軸で徹底比較。部門別おすすめ活用パターン5選と最初のフロー作成3ステップも解説。5業種対応スターターテンプレ配布中。",
    category: "実務活用",
    thumbnail: "/images/blog/workflow-automation-comparison/slide-01.png",
  },
  {
    slug: "n8n-beginner-guide",
    title: "n8n入門ガイド｜初心者が業務自動化を最初の1本から実装する手順【2026年版】",
    summary:
      "n8nとは何か、最初のワークフローを作る3ステップ、Cloudとセルフホストの判断軸、止まらない運用設計までを初心者向けに整理した実践ガイドです。",
    category: "実務活用",
  },
  {
    slug: "power-automate-ai-guide",
    title: "Power Automate × 生成AI活用｜Microsoft環境の現場自動化レシピ集",
    summary:
      "Power AutomateとCopilot Studio・AI Builderを組み合わせ、Teams自動返信、Excel分析レポート自動生成、メール仕分け×ChatGPT要約まで実務直結で解説。Azure OpenAIとの選び方とIT連携の境界線も整理した実践ガイドです。",
    category: "実務活用",
  },
  {
    slug: "claude-code-intro",
    title: "Claude Codeとは？使い方・料金・始め方を完全解説【2026年版】",
    summary:
      "AnthropicのCLI型AIコーディングアシスタント「Claude Code」の仕組み・料金・セットアップから、GitHub Copilot・Cursorとの違い、最初の5タスクと失敗しないポイントまでを解説。スターターキット配布中。",
    category: "実務活用",
    thumbnail: "/images/blog/claude-code-intro/slide-01.png",
  },
  {
    slug: "multimodal-ai-intro",
    title: "マルチモーダルAIとは？テキスト・画像・音声を横断する次世代AIを解説",
    summary: "マルチモーダルAIの定義、仕組み、代表モデル、業務活用と導入ステップを初心者向けに整理した入門記事です。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/multimodal-ai-intro/slide-01.png",
  },
  {
    slug: "how-to-learn-generative-ai",
    title: "生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ",
    summary:
      "何から始めればいいかわからない社会人向けに、基礎→実務→応用の学習ステージ、独学vsスクール比較、2026年版おすすめ学習リソースを整理した実践ガイドです。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/how-to-learn-generative-ai/slide-1.png",
  },
  {
    slug: "generative-ai-skills-checklist",
    title: "生成AIスキルを身につける5段階チェックリスト【2026年版】",
    summary:
      "あなたは今どのレベルかを診断し、入門〜プロの5段階で次に伸ばすべきスキルと練習方法を整理した社会人向けチェックリスト記事です。",
    category: "資格・スキル",
  },
  {
    slug: "ai-for-non-engineers",
    title: "文系・非エンジニアのAI活用ガイド",
    summary: "AIが怖いと感じる理由を整理し、プログラミング不要で始める学習と実務活用の進め方を解説します。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/ai-for-non-engineers/slide-01.png",
  },
  {
    slug: "ai-coding-for-beginners",
    title: "AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方",
    summary:
      "AIコーディングの基本、代表ツール、非エンジニアができること、始め方5ステップとプロンプト例、注意点までを整理した入門ガイドです。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/ai-coding-for-beginners/slide-1.png",
  },
  {
    slug: "vibe-coding-beginner-guide",
    title: "Vibe Coding入門｜非エンジニアがAIでWebアプリを作る手順とツール比較【2026年版】",
    summary:
      "Vibe Codingの定義、従来開発/ノーコードとの違い、Cursor・Claude Code・v0・Replit・Bolt.newの使い分け、非エンジニア向け実装手順、限界とセキュリティ注意点を整理した入門ガイドです。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/vibe-coding-beginner-guide/slide-01.png",
  },
  {
    slug: "cursor-ai-coding-guide",
    title: "Cursor × AIコーディング入門｜非エンジニアでも使える実践ガイド",
    summary:
      "Cursorとは何か、インストール方法、AIと対話しながらLPを作る具体手順、1日で形にした実例、GitHub Copilotとの違いまでを実務目線で整理した入門記事です。",
    category: "実務活用",
  },
  {
    slug: "github-copilot-guide",
    title: "GitHub Copilotの使い方｜導入・設定・効率化のコツを初心者向けに解説",
    summary:
      "導入（VS Code等）から指示の出し方、レビュー・テストの流れ、チーム導入時の情報管理/運用ルールまでを手順化したガイドです。",
    category: "実務活用",
    thumbnail: "/images/blog/github-copilot-guide/slide-1.png",
  },
  {
    slug: "microsoft-copilot-guide",
    title: "Microsoft Copilot使い方ガイド｜無料版・有料版・M365比較【2026年版】",
    summary:
      "Microsoft Copilotの種類（無料版/Pro/M365）を整理し、Windows・Edgeでできること、Copilot Pro月額3,200円の差分、Word/Excel/PowerPoint/Outlook活用、ChatGPT・Geminiとの使い分けまで解説した記事です。",
    category: "最新AIツール",
  },
  {
    slug: "python-ai-intro",
    title: "Python×AI入門｜環境構築からはじめての機械学習までの学習ロードマップ",
    summary:
      "PythonでAI開発を始めるための環境構築、基礎文法、主要ライブラリ、最初の機械学習プロジェクト、0→3ヶ月の学習ロードマップを整理した入門記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "prompt-template-for-work",
    title: "仕事で使えるプロンプトテンプレート集",
    summary: "メール・議事録・資料作成など、業務で再利用できる実践テンプレートをカテゴリ別にまとめました。",
    category: "実務活用",
    thumbnail: "/images/blog/prompt-template-for-work/slide-1.png",
  },
  {
    slug: "ai-sales-prompt-templates",
    title: "営業の生成AIプロンプト20選｜提案書・メール・ヒアリング設計まで",
    summary:
      "営業の生成AI活用を4カテゴリで整理し、企業研究・提案書作成・営業メール・商談振り返りで使えるコピペ可能プロンプト20本をまとめた実践記事です。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-sales-prompt-templates/slide-01.png",
  },
  {
    slug: "ai-presentation-workflow",
    title: "AIでプレゼン資料を効率的に作る方法",
    summary: "構成案作成からスライド原稿、デザイン、推敲まで、AIを使った資料作成ワークフローを段階別に解説します。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-presentation-workflow/slide-1.png",
  },
  {
    slug: "ai-slide-creation",
    title: "AIプレゼンスライド自動生成ツール比較2026｜Gamma・Beautiful.ai・Copilot・Google Slides AI",
    summary:
      "AIスライド自動生成ツールを2026年基準で比較。Gamma無料手順、Beautiful.ai・PowerPoint Copilot・Google Slides AIの違い、時短のための手動微調整ポイントまで整理した実務ガイドです。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-slide-creation/slide-01.png",
  },
  {
    slug: "ai-business-efficiency-cases",
    title: "AI業務効率化事例集",
    summary: "営業・マーケ・管理部門の一般的な活用傾向と、導入前に押さえる設計ポイントや失敗対策を整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-real-estate-guide",
    title: "AI不動産活用ガイド2026｜査定・物件探し・業務効率化・投資分析の実践ポイント",
    summary:
      "不動産業界でのAI活用を、査定・物件マッチング・書類作成・投資分析まで体系化。消費者向けAI査定サービスの使い方、不動産会社の業務効率化、精度限界と補正ルールを実務目線で解説します。",
    category: "実務活用",
  },
  {
    slug: "what-is-rag",
    title: "RAG（検索拡張生成）とは？仕組み・メリット・活用事例をわかりやすく解説",
    summary:
      "RAG（Retrieval-Augmented Generation）の定義、仕組み、メリットと限界、活用事例、始め方、ファインチューニングとの違いを整理した入門記事です。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/what-is-rag/slide-1.png",
  },
  {
    slug: "vector-db-intro",
    title: "ベクターデータベース入門｜Pinecone・Weaviate・ChromaDBの比較と選び方",
    summary:
      "ベクターデータベースの仕組みを類似度検索から解説し、Pinecone・Weaviate・ChromaDBを運用形態・コスト・スケールで比較。RAG実装で迷わない選定フローを整理した記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "rag-vs-finetuning-guide",
    title: "RAGとファインチューニング、どちらを選ぶ？社内データ活用の判断フレーム",
    summary:
      "社内データ活用で迷うRAGとファインチューニングを、コスト・用途・更新頻度・精度・実装難易度で比較し、3ステップ判断フローで選び方を整理した実務ガイドです。",
    category: "AI基礎知識",
  },
  {
    slug: "rag-use-cases",
    title: "RAG（検索拡張生成）の活用事例8選｜業種・業務別に解説",
    summary: "RAGの実務ユースケース8選と、導入ステップ・注意点を要点から整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-data-analysis-excel",
    title: "AIでExcelデータ分析を効率化する方法",
    summary: "関数生成、データ整理、可視化、レポート作成まで、ChatGPT/Claude/Copilotでの実践手順とプロンプト例をまとめます。",
    category: "実務活用",
  },
  {
    slug: "dx-reskilling-subsidy-guide",
    title: "DXリスキリング助成金ガイド｜対象条件・申請手順・併用可否を解説",
    summary: "DXリスキリング助成金の概要、個人向け補助金との違い、申請の流れと実務上の注意点を整理した記事です。",
    category: "実務活用",
    thumbnail: "/images/blog/dx-reskilling-subsidy-guide/slide-1.png",
  },
  {
    slug: "ai-certification-guide",
    title: "AI資格おすすめ一覧｜難易度・費用を比較",
    summary: "G検定やE検定を含む主要資格を、目的・難易度・費用で比較して選び方を整理します。",
    category: "資格・スキル",
  },
  {
    slug: "ai-study-learning-guide",
    title: "AI×勉強・資格・語学学習完全ガイド｜ChatGPTで最短合格する方法",
    summary:
      "独学で続かない社会人向けに、資格勉強の問題集生成、語学の会話練習、スキルアップの学習計画作成を1本で実践できるAI活用法を解説します。",
    category: "資格・スキル",
  },
  {
    slug: "ai-english-learning-guide",
    title: "AI英語学習ガイド2026｜ChatGPT英会話・アプリ比較・継続設計",
    summary:
      "ChatGPT/Gemini英会話のプロンプト実践、Duolingo Max・ELSA Speak・Speak比較、ビジネス英語への落とし込み、30日継続設計まで社会人向けに整理した実践ガイドです。",
    category: "資格・スキル",
  },
  {
    slug: "generative-ai-passport-guide",
    title: "生成AIパスポート試験の合格法2026｜勉強時間・おすすめ教材・出題傾向まとめ",
    summary:
      "生成AIパスポートの難易度・勉強時間・教材・出題傾向を整理し、独学で合格を目指すための実践的な学習プランを解説します。",
    category: "資格・スキル",
    thumbnail: "/images/blog/generative-ai-passport-guide/slide-01.png",
  },
  {
    slug: "g-e-certification-comparison",
    title: "G検定とE検定の違いを徹底比較｜難易度・費用・向いている人",
    summary: "G検定とE検定（JDLA認定）の違いを比較表で整理し、目的別にどちらを選ぶべきかを解説します。",
    category: "資格・スキル",
  },
  {
    slug: "ai-course-ranking",
    title: "AI講座ランキング2026｜選び方の基準と目的別おすすめ",
    summary: "AI講座を比較する評価基準、目的別の選び方、失敗回避のポイントを整理したガイド記事です。",
    category: "資格・スキル",
    thumbnail: "/images/blog/ai-course-ranking/slide-1.png",
  },
  {
    slug: "skills-for-ai-era-career",
    title: "AI時代に必要なスキルを職種別に解説",
    summary: "営業、マーケ、管理職など職種ごとに、AI時代のキャリアに必要なスキルを整理した記事です。",
    category: "資格・スキル",
    thumbnail: "/images/blog/skills-for-ai-era-career/slide-01.png",
  },
  {
    slug: "ai-career-change-cases",
    title: "AI時代のキャリアチェンジ事例集",
    summary: "職種転換の進め方をBefore/Afterの観点で整理し、学習と実務接続の共通ポイントを紹介します。",
    category: "キャリア・転職",
  },
  {
    slug: "ai-job-hunting-guide",
    title: "AI×転職完全ガイド｜職務経歴書・面接対策・企業研究の実践テクニック",
    summary:
      "転職活動でAIを使う3フェーズ（職務経歴書・企業研究・面接対策）を実務手順で解説し、ChatGPTプロンプトと面接Q&A生成テンプレまで整理した記事です。",
    category: "キャリア・転職",
    thumbnail: "/images/blog/ai-job-hunting-guide/slide-01.png",
  },
  {
    slug: "ai-engineer-career-change",
    title: "未経験からAIエンジニアへの転職ロードマップ",
    summary: "未経験からAIエンジニアを目指すために必要なスキル、学習段階、ポートフォリオ設計を解説した記事です。",
    category: "キャリア・転職",
  },
  {
    slug: "corporate-ai-adoption-guide",
    title: "中小企業の生成AI導入ガイド",
    summary: "導入ロードマップ、費用目安、部門別活用例を法人担当者向けに段階的に解説します。",
    category: "法人向け",
  },
  {
    slug: "ai-poc-guide",
    title: "生成AI PoCの進め方（30日テンプレ）｜成功条件と失敗パターンを先に潰す",
    summary: "30日でPoCを完了するテンプレートと失敗パターン対策。PoC計画書テンプレート付き。",
    category: "法人向け",
  },
  {
    slug: "ai-training-curriculum",
    title: "AI研修カリキュラム例（職種別）｜社内定着まで見据えた設計",
    summary: "職種別AI研修カリキュラムの設計方法。研修企画書テンプレート付き。",
    category: "法人向け",
  },
  {
    slug: "ai-agent-deployment-checklist",
    title: "AIエージェント導入チェックリスト｜権限・ログ・承認フローの作り方",
    summary: "AIエージェントの安全な導入に必要な権限・ログ・承認フローの設計チェックリスト。",
    category: "法人向け",
  },
  {
    slug: "ai-agent-operations-guide",
    title: "AI業務自動化の始め方｜AIエージェント導入を失敗させない運用設計ガイド",
    summary:
      "AI業務自動化を業務選定、権限設計、承認フロー、監査ログまで実務手順で解説。導入前チェックシートと30日運用プラン付き。",
    category: "法人向け",
  },
  {
    slug: "what-is-mcp",
    title: "MCP（Model Context Protocol）とは？できることと危険な落とし穴",
    summary: "MCPの仕組みとセキュリティリスクをわかりやすく解説。安全な連携チェックポイント付き。",
    category: "法人向け",
  },
  {
    slug: "ai-guideline-template",
    title: "生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計",
    summary:
      "生成AI（ChatGPT・Claude・Copilot等）の社内利用ガイドラインをコピペ可能な1枚雛形で設計。禁止事項・入力ルール・権限・ログ・例外申請・インシデント対応まで30日導入ステップ付き。",
    category: "法人向け",
  },
  {
    slug: "ai-adoption-cost-roi",
    title: "生成AI導入の費用相場とROIの考え方｜PoC予算の決め方まで",
    summary: "生成AI導入にかかる費用の相場とROI算出方法。PoC予算の決め方とROI試算シート付き。",
    category: "法人向け",
  },
  {
    slug: "ai-adoption-proposal-template",
    title: "稟議が通る生成AI導入計画書の作り方｜目的・リスク・費用を1枚で整理",
    summary:
      "生成AI導入の稟議が通らない理由を承認者視点で整理し、目的・期待効果・リスク対策・費用・ロードマップを1枚に落とし込む実践テンプレを解説。",
    category: "法人向け",
  },
  {
    slug: "llm-evaluation-guide",
    title: "生成AIの評価（LLM評価）入門｜“任せていい品質”を測る指標と運用",
    summary: "LLM評価を品質・安全性・運用性の3軸で設計する実務ガイド。週次運用できる評価シート付き。",
    category: "法人向け",
  },
  {
    slug: "shadow-ai-countermeasures",
    title: "シャドーAI対策の進め方｜\"禁止\"せず安全に使わせる統制設計",
    summary:
      "社員の無断AI利用を禁止ではなく統制で解決する方法。発見・可視化・ルール設計・監査の4段階フレームワーク。",
    category: "法人向け",
  },
  {
    slug: "ai-copyright-commercial-guide",
    title: "生成AIの著作権・商用利用ガイド（画像/動画/文章）｜現場で迷う論点を整理",
    summary: "AI生成物の著作権と商用利用の論点を網羅整理。権利チェックリスト付き。",
    category: "法人向け",
  },
  {
    slug: "corporate-ai-training",
    title: "法人向けAI研修で成果を出す完全ガイド",
    summary: "研修形式の選び方、KPI設計、社内定着の進め方を比較観点付きで整理した法人向け記事です。",
    category: "法人向け",
  },
  {
    slug: "ai-training-subsidy-guide",
    title: "生成AI研修に助成金を使う手順｜対象条件・落とし穴・申請フロー完全版",
    summary:
      "社員向けAI研修で使える助成金の全体像を、人材開発支援助成金中心に解説。事前申請から支給申請までの5ステップと不支給を避ける実務ポイントを整理した法人向け記事です。",
    category: "法人向け",
  },
  {
    slug: "reskilling-over-40",
    title: "40代・50代からのAIリスキリング完全ガイド",
    summary:
      "40代・50代がAIを学ぶ理由、年代別の学習アプローチ、独学の挫折対策と学習手段の比較を整理した記事です。",
    category: "キャリア・転職",
  },
  {
    slug: "education-training-benefit-ai",
    title: "教育訓練給付金でAI講座を受講するガイド",
    summary:
      "教育訓練給付金の3種の概要、リスキリング補助金との違い、AI講座の費用相場とコスパの良い選び方を整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-school-for-working-adults",
    title: "社会人向けAIスクールの選び方ガイド",
    summary:
      "社会人がAIスクールを選ぶ際の5つの基準、オンラインvs通学の比較、目的別の選び方と補助金活用法を整理した記事です。",
    category: "資格・スキル",
  },
  {
    slug: "ai-teacher-education-guide",
    title: "AI講師とは？教育現場での活用・失敗パターン・導入手順を解説",
    summary:
      "AI講師の定義、成果が出る導入条件、失敗しやすい運用パターン、30日で回す導入チェックリストを一次情報ベースで整理した実践ガイドです。",
    category: "資格・スキル",
  },
  {
    slug: "chatgpt-claude-beginners-guide",
    title: "ChatGPT・Claude初心者ガイド｜最初の1週間でできること",
    summary:
      "アカウント作成から最初の質問まで、無料プランと有料プランの違い、1週間で試すべき使い方を整理した入門記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "claude-beginner-guide",
    title: "Claudeの使い方入門｜登録から最初のチャットまで初心者向け解説【2026年版】",
    summary:
      "Anthropic製Claudeとは何か、無料登録から初回チャットまでの手順、最新モデル（4.6世代）とClaude 3.7の関係、無料とPro（月額20ドル）の違いを初心者向けに整理した入門記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "chatgpt-start-guide-smartphone",
    title: "ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド",
    summary:
      "公式アプリの入れ方、アカウント作成・ログイン、初期設定、便利機能、無料/有料の違いまでをiPhone/Android別に整理したスマホ入門ガイドです。",
    category: "AI基礎知識",
  },
  {
    slug: "chatgpt-prompt-beginner",
    title: "ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例",
    summary:
      "思い通りの答えが返らない理由を整理し、初心者向けに役割指定・ステップ分解・出力形式指定など15の型を例文付きで解説。実務・学習・副業のNG/OK比較と、追質問を使った会話設計までまとめた入門記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "chatgpt-plan-comparison",
    title: "ChatGPT無料・Plus・Proの違いを比較｜2026年版の料金と選び方",
    summary:
      "無料プラン・Plus（月額20ドル）・Pro（月額200ドル）の違いを、上限、モデルアクセス、用途別の判断軸で比較。GPT-5.2とGPT-5.3-Codexの制限差、変更・解約方法まで初心者向けに整理した記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "chatgpt-gpt5-guide",
    title: "ChatGPTとGPT-5の違いを整理｜2026年版モデル選びと使い分けガイド",
    summary:
      "GPT-5とGPT-5.2の現状、ChatGPTのAuto/Thinkingの使い分け、ChatGPT利用とAPI利用の課金・運用責任の違いを確認日付きで整理した実務判断ガイドです。",
    category: "AI基礎知識",
  },
  {
    slug: "chatgpt-advanced-tips",
    title: "ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips",
    summary:
      "文章作成・調査・分析・プレゼン・日常業務の5カテゴリで、仕事に直結するChatGPT活用Tipsを50個とコピペ可能なプロンプト例つきでまとめた実践記事です。",
    category: "実務活用",
  },
  {
    slug: "gpt-vs-claude-comparison",
    title: "GPT-4とClaude徹底比較｜性能・得意分野・料金の違いを解説【2026年版】",
    summary:
      "GPT-4系とClaudeの違いを性能比較（文章/コード/分析/要約/創造性）で整理し、料金の考え方と用途別おすすめ、併用のコツまでまとめた比較記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "corporate-ai-training-internal",
    title: "社内AI研修の始め方と定着の進め方",
    summary:
      "社内AI研修の設計ステップ、外部研修との比較、定着施策と効果測定の進め方を整理した法人向け記事です。",
    category: "法人向け",
  },
  {
    slug: "ai-training-kpi",
    title: "研修が\"やりっぱなし\"で終わる理由｜KPI設計と現場タスク化のコツ",
    summary: "AI研修が定着しない原因とKPI設計方法。KPIシートテンプレート付き。",
    category: "法人向け",
  },
  {
    slug: "ai-data-leak-patterns",
    title: "生成AIで情報漏えいが起きるパターン10選｜現場のNG例とルール",
    summary: "ChatGPT・Claude等で情報漏えいが起きる10パターンを現場のNG例で解説。入力ルールと防止策を整理。",
    category: "法人向け",
  },
  {
    slug: "ai-hr-recruiting",
    title: "AI × 人事・採用｜業務効率化から戦略的活用までの実践ガイド",
    summary:
      "採用・人事領域でのAI活用（求人票作成〜候補者対応、評価分析など）と導入ステップ、注意点、プロンプト例をまとめた実践ガイドです。",
    category: "法人向け",
  },
  {
    slug: "ai-side-business-guide",
    title: "副業でAIを活用する始め方ガイド",
    summary: "AIスキルで始められる副業の種類、学習ステップ、必要なスキルレベルと注意点を整理した記事です。",
    category: "キャリア・転職",
  },
  {
    slug: "ai-freelance-work-guide",
    title: "フリーランス・副業のAI活用術｜提案・作業・請求まで効率化する実践ガイド",
    summary:
      "案件獲得、実作業、請求・管理までを一連で効率化する実務ガイド。提案書・見積書のコピペ可能プロンプトと週次ワークフロー設計を解説します。",
    category: "副業・フリーランス",
  },
  {
    slug: "freelancer-ai-checklist",
    title: "個人事業主・フリーランスのためのAI活用チェックリスト50｜今日からできること",
    summary:
      "営業・作業・経理・発信・学習の5カテゴリで、個人事業主・フリーランスが今日から実行できるAI活用チェックリストを50項目で整理した実践記事です。",
    category: "副業・フリーランス",
  },
  {
    slug: "ai-portfolio-guide",
    title: "AIスキルのポートフォリオ作り方2026｜転職・副業・社内評価につながる実績のまとめ方",
    summary:
      "AIポートフォリオの成果物の種類、転職・副業・社内評価のシーン別の見せ方、GitHubやNotionでの公開方法を5ステップで整理した記事です。",
    category: "キャリア・転職",
  },
  {
    slug: "gemini-beginners-guide",
    title: "Google Gemini完全入門ガイド｜使い方・ChatGPTとの違い・無料で始める方法",
    summary:
      "Google Geminiの基本操作、ChatGPT・Claudeとの違い、無料プランの始め方、業務活用パターンを整理した入門記事です。",
    category: "AI基礎知識",
  },
  {
    slug: "gemini-workspace-guide",
    title: "Gemini for Google Workspace使い方ガイド｜料金・活用・Copilot比較【2026年版】",
    summary:
      "Gemini for Google Workspaceのプラン差、Gmail・Docs・Sheets・Meetの活用、導入コストとROI、Copilot比較、日本語環境での評価手順を法人向けに整理した実務ガイドです。",
    category: "法人向け",
    thumbnail: "/images/blog/gemini-workspace-guide/slide-01.png",
  },
  {
    slug: "gemini-3-practical-guide",
    title: "Gemini 3.1 Proの使い方実務ガイド｜3.0との違い・料金・Workspace連携・GPT-5.2比較",
    summary:
      "Gemini 3.1 Proと3.0 Proの機能差・料金差、Workspace連携の現状、マルチモーダル対応範囲、ChatGPT GPT-5.2との使い分けを公式情報ベースで整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "ollama-local-llm-guide",
    title: "Ollamaで始めるローカルLLM実務ガイド｜導入手順・モデル選定・安全運用【2026年版】",
    summary:
      "Ollamaの導入手順、モデルサイズと量子化タグの見方、公開設定とログ管理の運用ポイント、ローカル単独運用とCloud/API併用の判断基準を整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "ai-notion-guide",
    title: "Notion AIの使い方完全ガイド｜料金・実務活用・連携術【2026年版】",
    summary:
      "Notion AIの最新機能、Notion AI Plus 2026の見方、無料版とBusiness/Enterpriseの違い、議事録・タスク管理・文書整理での活用、ChatGPT/Gemini連携とデータベース制限を確認日つきで整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "notebooklm-guide",
    title: "NotebookLMの使い方完全ガイド｜AIで情報整理・学習を効率化する方法",
    summary:
      "ソース取り込み→要約・質問の基本操作から、リサーチ/報告書整理/学習ノートへの活用、Audio Overviewの使い方までを整理した入門ガイドです。",
    category: "実務活用",
  },
  {
    slug: "perplexity-ai-guide",
    title: "Perplexity AIの使い方完全ガイド2026｜ChatGPTとの違いと検索AIの活用法",
    summary:
      "Google検索との違いを起点に、Perplexityの基本、無料/有料の使い分け、ChatGPTとの比較、調査・比較・要約で使える実践プロンプトをまとめた解説記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-agent-landscape-2026",
    title: "AIエージェント比較2026｜主要プレイヤーの勢力図・料金・日本対応を整理",
    summary:
      "2026年2月時点のAIエージェント勢力図を3カテゴリで整理し、Operator/Atlas/Mariner/Computer Use/Manus/Genspark/Claude Code/Copilot/Cursorの違いを、対応タスク・料金・日本語対応・自律度で比較した実務判断ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "manus-ai-guide",
    title: "Manus AIとは？使い方と活用シーン解説｜AIエージェントで仕事を自動化する",
    summary:
      "Manusとは何か、ChatGPTとの違い、AIエージェントの基本、リサーチ・文書作成・データ収集での自動化シーン、無料可否・日本語対応・セキュリティまで確認日付きで整理した最新AIツール解説です。",
    category: "最新AIツール",
  },
  {
    slug: "anthropic-cowork-guide",
    title: "AnthropicのCoworkとは？使い方と活用シーン完全ガイド",
    summary:
      "AnthropicのCoworkとは何かを冒頭で定義し、個人向けの使い方、ChatGPT・Geminiとの使い分け、無料可否・日本語対応・ChatGPT Teamsとの差分を2026年2月時点で整理した最新AIツール解説です。",
    category: "最新AIツール",
  },
  {
    slug: "openai-atlas-guide",
    title: "OpenAI Atlasとは？AIブラウザの使い方と活用シーン完全解説",
    summary:
      "OpenAI Atlasとは何かを冒頭で明確化し、通常ブラウザとの違い、情報収集・フォーム入力・Web操作の活用法、Atlas vs Operator、無料可否と日本語対応まで確認日付きで整理した最新AIツール解説です。",
    category: "最新AIツール",
  },
  {
    slug: "openai-operator-guide",
    title: "OpenAI Operator使い方ガイド｜Atlasとの違い・日本での始め方・安全な自動操作",
    summary:
      "Operator（現agent mode）を2026年2月時点で整理し、Atlasとの違い、日本での開始時期とプラン条件、フォーム入力・予約・EC・データ収集の実務活用、制限サイトとセキュリティ設定、Anthropic/Google比較まで解説した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "deepseek-guide",
    title: "DeepSeekとは？使い方と実務活用の始め方｜ChatGPTとの違いも解説",
    summary:
      "DeepSeekの基本、R1/V3の使い分け、ChatとAPIの違い、ChatGPTとの分業、業務利用時の情報管理と根拠確認ルールまでを確認日付きで整理した実務ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "genspark-guide",
    title: "Gensparkとは？AI検索の新世代ツールを徹底解説｜Perplexityとの違いと使い分け",
    summary:
      "Gensparkの基本機能、Perplexityとの違い、ビジネス情報収集シーン別の使い分け、無料利用可否と日本語運用の注意点を確認日付きで整理した最新AIツール解説です。",
    category: "最新AIツール",
  },
  {
    slug: "google-ai-studio-guide",
    title: "Google AI Studio使い方完全ガイド｜Geminiモデルをすぐ試せるAI開発環境",
    summary:
      "Google AI Studioとは何か、Geminiアプリ/ChatGPTとの違い、無料で始める10ステップ、プロンプト・画像入力・会話テストの使い方を非エンジニア向けに整理した最新AIツール入門です。",
    category: "最新AIツール",
    thumbnail: "/images/blog/google-ai-studio-guide/slide-01.png",
  },
  {
    slug: "google-ai-studio-app-build-guide",
    title: "Google AI StudioのApp Build機能とは？アプリ作成の始め方と活用法",
    summary:
      "Google AI StudioのApp Build機能に絞って、準備、ステップ実装、業務アプリ3パターン（FAQ Bot・プロンプト整形・データ要約）の作り方、ノーコード運用の限界まで整理した実践ガイドです。",
    category: "最新AIツール",
    thumbnail: "/images/blog/google-ai-studio-app-build-guide/slide-01.png",
  },
  {
    slug: "ai-image-generation-guide",
    title: "AI画像生成おすすめツール比較｜Nano Banana・Midjourney・DALL-Eの使い方と選び方",
    summary:
      "Gemini Nano Banana、Midjourney、DALL-E、Stable Diffusionの特徴比較、始め方、業務活用パターン、著作権の注意点を整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-video-tool-comparison",
    title: "AI動画生成ツールおすすめ比較｜用途別の選び方と始め方",
    summary:
      "Sora/Runway/Pika/Kling/Veo/Luma Dream Machineの比較、用途別おすすめ、無料で試す始め方、著作権・商用利用の注意点を整理した記事です。",
    category: "実務活用",
  },
  {
    slug: "ai-video-editing-guide",
    title: "AI動画編集の始め方｜初心者向けツール比較とCapCut無料実践【2026】",
    summary:
      "AI動画編集初心者向けに、CapCut・Descript・VEED・Premiere Pro AIを比較。自動字幕・自動カット・翻訳・ノイズ除去の使い方、無料実践、SNS最適化、課金判断と商用利用の注意点を整理した実践ガイドです。",
    category: "実務活用",
  },
  {
    slug: "ai-video-generation-comparison",
    title: "動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方",
    summary:
      "Kling・Runway・Seedance・Soraを品質・速度・価格・日本語対応・商用利用の5軸で比較し、SNS動画・プレゼン・副業・個人制作の用途別選び方と無料で始める手順を整理した記事です。",
    category: "最新AIツール",
    thumbnail: "/images/blog/ai-video-generation-comparison/slide-01.png",
  },
  {
    slug: "kling-ai-guide",
    title: "Kling AI使い方ガイド2026｜登録・動画生成・料金・商用利用を解説",
    summary:
      "Kling AIの登録から初回動画生成、Text to VideoとImage to Videoの使い分け、無料枠と料金、Runway Gen-3・Sora比較、商用利用時の確認ポイントまでを確認日付きで整理した実践ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "suno-ai-music-guide",
    title: "Sunoで音楽を作る方法入門｜プロンプトから楽曲生成・ビジネス活用まで",
    summary:
      "Sunoの無料プランの始め方、BGM向けプロンプトの書き方、商用利用と著作権の判断ポイント、プレゼン・YouTube・SNSリールでの実務活用までを確認日付きで整理した入門ガイドです。",
    category: "最新AIツール",
  },
  {
    slug: "new-employee-ai-starter-guide",
    title: "新入社員のAI活用スタートガイド2026｜最初の1ヶ月でやること完全版",
    summary:
      "職場でのAI活用マナー・情報管理ルール・週別スケジュールを完全解説。機密情報の扱い方からプロンプト習慣化まで、入社後の最初の1ヶ月でやることをステップ別にまとめた新入社員向けガイドです。",
    category: "AI基礎知識",
    thumbnail: "/images/blog/new-employee-ai-starter-guide/slide-01.png",
  },
  {
    slug: "ai-meeting-tools-comparison",
    title: "AI議事録ツール比較2026｜Fireflies・Otter・Notion AIの選び方と会議効率化",
    summary:
      "Fireflies.ai・Otter.ai・Notion AI・tl;dv・Nottaを日本語精度・Zoom/Teams/Meet対応・料金・要約品質の4軸で比較。シーン別おすすめと導入後のワークフロー設計を解説します。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-meeting-tools-comparison/slide-01.png",
  },
  {
    slug: "ai-pm-tools-guide",
    title: "AIプロジェクト管理ツール比較2026｜Asana AI・Linear・Notion・Jiraの選び方",
    summary:
      "Asana AI・Linear・Notion Projects・Jira AIを対応プラン、価格、優先順位付け・進捗予測・リスク検出の観点で比較。スタートアップと大企業の選定軸、導入定着の実践ポイントまで整理した法人向けガイドです。",
    category: "法人向け",
  },
  {
    slug: "canva-ai-guide",
    title: "Canva AI（Magic Studio）使い方ガイド2026｜無料版・Proの違いと実務活用",
    summary:
      "Magic Write・Magic Design・Text to Image・背景削除の実践手順を、SNS投稿・プレゼン・チラシ制作の用途別に整理。無料版とProの違い、商用利用の注意点、Adobe Express・Microsoft Designer比較までまとめた実務ガイドです。",
    category: "実務活用",
  },
  {
    slug: "ai-document-ocr-guide",
    title: "AI OCRで書類処理を自動化する方法｜請求書・契約書の読取と会計連携【2026】",
    summary:
      "AI OCRの基礎から、請求書・領収書・契約書の自動読み取り、freee・マネーフォワード連携、主要4ツール比較、導入ROIと電子帳簿保存法対応までを法人バックオフィス向けに整理した実務ガイドです。",
    category: "法人向け",
  },
  {
    slug: "ai-accounting-guide",
    title: "経理・財務部門のAI活用ガイド2026｜仕訳・レポート・予算管理の自動化事例",
    summary:
      "仕訳確認・経費精算・月次レポート・予算差異分析でのAI活用を具体的に解説。機密データのリスク対策、ExcelマクロのAI生成、自然言語でのデータ集計まで経理現場で使える知識を網羅。",
    category: "実務活用",
  },
  {
    slug: "ai-tax-accounting-guide",
    title: "税務・会計業務のAI活用ガイド2026｜申告前レビューと説明文作成を効率化",
    summary:
      "税務・会計のAI活用を、申告判断ではなく説明文作成・論点整理・レビュー準備の観点で整理。機密データ管理、レビュー体制、導入ステップを実務向けに解説します。",
    category: "実務活用",
  },
  {
    slug: "ai-legal-guide",
    title: "法務の生成AI活用ガイド｜契約レビューを「任せない」運用設計と実践的な使い方",
    summary:
      "法務で生成AIを安全に使うために、契約レビューを全面委任しない理由、使える場面/使えない場面、機密情報を扱う際の運用フレームワークと実践プロンプトを整理した実務ガイドです。",
    category: "実務活用",
  },
  {
    slug: "ai-medical-nursing-guide",
    title: "AI医療・看護活用ガイド2026｜診断支援・記録自動化・電子カルテ連携の実務",
    summary:
      "医療現場でのAI活用を、画像診断・投薬管理・記録自動化の3領域で整理。看護師が使える文書支援、電子カルテ連携の動向、個人情報・責任・精度リスク対策までを確認日付きで解説した実務ガイドです。",
    category: "実務活用",
  },
  {
    slug: "ai-content-sns-guide",
    title: "AI×ブログ・SNS・YouTube台本の作り方｜コンテンツ制作を10倍速にする",
    summary:
      "ブログ構成・本文、X/Instagram/LinkedIn投稿、YouTube台本を媒体別に効率化する実践ガイド。コピペ可能プロンプトと週次運用の型をまとめています。",
    category: "実務活用",
    thumbnail: "/images/blog/ai-content-sns-guide/slide-01.png",
  },
  {
    slug: "ai-youtube-content-guide",
    title: "YouTube AI動画制作ガイド2026｜企画・台本・編集・サムネを一気通貫で効率化",
    summary:
      "YouTube AI動画制作を、企画・台本・編集・サムネの全工程で整理。ChatGPT/Geminiの台本設計、Descript・CapCut AI比較、YouTubeショート向けAI活用まで確認日付きで解説した実務ガイドです。",
    category: "実務活用",
  },
  {
    slug: "aio-seo-strategy-guide",
    title: "AI Overviews時代のSEO完全ガイド｜「AIに引用される」コンテンツ設計チェック",
    summary:
      "AIO SEOと従来SEOの違い、AI Overviews・Perplexity・ChatGPT Searchで引用される条件、3行要約・比較表・FAQSchemaの実装手順をまとめた実務ガイドです。",
    category: "AIO/マーケ",
  },
  {
    slug: "ai-study-continue-habits",
    title: "生成AIを続けるための習慣デザイン｜初心者が3ヶ月後も使い続けられる7つのコツ",
    summary:
      "AIを始めたのに続かない原因は意欲ではなく習慣設計の問題。続けられた人の共通点、挫折しやすいポイント、今日から試せる7つのテクニックと3ヶ月ロードマップを解説します。",
    category: "AI活用術",
    publishedAt: "2026-02-22T09:00:00+09:00",
    tags: ["生成AI 続けられない", "AI 習慣化 方法", "ChatGPT 継続 コツ", "AI 学習 モチベーション", "生成AI 初心者 続け方"],
  },
  {
    slug: "eu-ai-act-2026-compliance-jp",
    title: "EU AI法（EU AI Act）2026年対応ガイド｜日本企業が今すぐ確認すべき7つのポイント",
    summary:
      "2026年8月から本格適用のEU AI法。日本企業でも対応が必要なケースと不要なケースを整理。リスクレベル別分類、義務一覧、今すぐ確認すべき7つのポイントをわかりやすく解説。",
    category: "法人向け",
    publishedAt: "2026-02-22T10:00:00+09:00",
    tags: ["EU AI Act 2026", "EU AI法 日本", "EU AI規制 対応", "AI規制 日本企業", "EU AI Act コンプライアンス"],
  },
  {
    slug: "ai-first-month-honest-diary",
    title: "AIを始めて1ヶ月、正直に日記にしてみた｜戸惑いから小さな奇跡まで全部書いた",
    summary:
      "「AIって難しそう」から始まった1ヶ月。最初の混乱、小さな感動、失敗、そして習慣になる瞬間まで正直に記録。AIを始めようか迷っているあなたへ、飾らない等身大の体験談をお届けします。",
    category: "AI活用術",
    publishedAt: "2026-02-22T15:00:00+09:00",
    tags: ["AI 始め方 体験談", "生成AI 初心者 1ヶ月", "ChatGPT リアル感想", "AI 初めて 正直", "生成AI 使い続けた 体験"],
  },
  {
    slug: "chatgpt-vision-camera-guide",
    title: "ChatGPT画像認識（Vision）の使い方完全ガイド｜スマホで写真を撮るだけでAIが解説してくれる",
    summary:
      "ChatGPTは文字だけじゃない。写真を送れば料理のカロリー計算・英語の看板翻訳・複雑な書類の解読まで何でも分析。2026年最新の画像認識機能を初心者向けに完全解説。",
    category: "ChatGPT",
    publishedAt: "2026-02-22T16:00:00+09:00",
    tags: ["ChatGPT 画像認識 使い方", "ChatGPT カメラ 機能", "ChatGPT 写真 送り方", "AI 画像 分析", "ChatGPT Vision 入門"],
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

const categoryClassName: Record<BlogCategory, string> = {
  "AI基礎知識": "border border-harmony-light bg-harmony-lighter text-harmony",
  "AI活用術": "border border-violet-200 bg-violet-50 text-violet-700",
  実務活用: "border border-orange-200 bg-orange-50 text-orange-700",
  "AIO/マーケ": "border border-sky-200 bg-sky-50 text-sky-700",
  "最新AIツール": "border border-cyan-200 bg-cyan-50 text-cyan-700",
  ChatGPT: "border border-teal-200 bg-teal-50 text-teal-700",
  "資格・スキル": "border border-wisdom-light bg-wisdom-lighter text-wisdom",
  "キャリア・転職": "border border-amber-200 bg-amber-50 text-amber-700",
  "副業・フリーランス": "border border-emerald-200 bg-emerald-50 text-emerald-700",
  法人向け: "border border-will-primary/20 bg-will-lighter text-will-primary",
  "AI学習": "border border-indigo-200 bg-indigo-50 text-indigo-700",
};

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

      <main className="bg-slate-50 pb-20 pt-24 sm:pt-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AcademyBreadcrumb
            className="mb-6"
            items={[
              { label: "ホーム", href: "/" },
              { label: "アカデミー", href: "/academy" },
              { label: "ブログ" },
            ]}
          />

          <header className="rounded-2xl border border-will-primary/15 bg-gradient-to-br from-white via-will-lighter to-wisdom-lighter p-6 shadow-subtle sm:p-8">
            <p className="text-sm font-semibold tracking-wide text-will-primary">ACADEMY BLOG</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              アカデミーブログ一覧
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
              生成AIの基礎知識から、実務活用、資格・スキル、キャリア、法人向け導入まで、目的別に記事を探せます。
            </p>
          </header>

          <section className="mt-6 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 via-white to-emerald-50 p-6 shadow-subtle sm:p-8">
            <p className="text-xs font-semibold tracking-wide text-green-700">LINE BONUS</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              記事で学んだ内容を、LINEで実務アクションに落とし込む
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              LINE登録で「3行要約テンプレート」「補助金対象の簡易診断」「次に読むべき記事の優先順位表」を無料配布しています。
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li className="pl-1 marker:text-slate-500">毎週1本、仕事で使えるAI活用の実践ヒント</li>
              <li className="pl-1 marker:text-slate-500">受講前の不安を整理する個別相談（無料）</li>
              <li className="pl-1 marker:text-slate-500">アカデミー受講判断のためのチェックリスト</li>
            </ul>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#05b54d]"
              >
                LINEで無料特典を受け取る
              </a>
              <Link
                href="/academy/seminars"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
              >
                無料セミナーを見る
              </Link>
            </div>
          </section>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {sortedBlogPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-subtle transition-all duration-300 hover:-translate-y-0.5 hover:border-will-primary/25 hover:shadow-soft"
              >
                {post.thumbnail && (
                  <Link href={`/academy/blog/${post.slug}`}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  <p
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${categoryClassName[post.category]}`}
                  >
                    {post.category}
                  </p>
                  <h2 className="mt-4 text-xl font-bold leading-tight text-slate-900">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{post.summary}</p>
                  <Link
                    href={`/academy/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-will-primary transition-colors group-hover:text-growth"
                  >
                    記事を読む
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
