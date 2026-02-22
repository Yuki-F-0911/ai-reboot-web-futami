"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, CircleHelp, Sparkles, Tag } from "lucide-react";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

type GlossaryTerm = {
  term: string;
  oneLine: string;
  explanation: string;
  example: string;
};

type GlossaryCategory = {
  id: string;
  title: string;
  lead: string;
  terms: readonly GlossaryTerm[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
} as const;

const keywordTags = [
  "生成AI 用語",
  "AI 用語集",
  "プロンプト 意味",
  "LLM とは",
  "AI 初心者 用語",
] as const;

const tocItems = [
  { id: "answer-box", label: "この記事でわかること" },
  { id: "how-to-use", label: "用語辞典の使い方" },
  { id: "category-basic", label: "カテゴリ1: AIの基本概念" },
  { id: "category-tools", label: "カテゴリ2: 主要AIツール・モデル" },
  { id: "category-prompt", label: "カテゴリ3: プロンプトエンジニアリング" },
  { id: "category-business", label: "カテゴリ4: ビジネス・活用" },
  { id: "category-tech", label: "カテゴリ5: 技術用語" },
  { id: "category-safety", label: "カテゴリ6: AI安全・倫理" },
  { id: "category-trends", label: "カテゴリ7: 最新トレンド" },
  { id: "category-career", label: "カテゴリ8: 学習・キャリア" },
  { id: "faq", label: "FAQ" },
  { id: "summary", label: "まとめ" },
] as const;

const glossaryCategories: readonly GlossaryCategory[] = [
  {
    id: "category-basic",
    title: "カテゴリ1: AIの基本概念（15語）",
    lead: "まずは会話でよく出る土台の言葉から押さえます。",
    terms: [
      {
        term: "プロンプト（Prompt）",
        oneLine: "AIへの指示文",
        explanation:
          "つまりAIにしてほしいことを書く文章のことです。短くても目的がはっきりしていれば、十分に動いてくれます。",
        example: "使用例：『この文章を3行で要約して』と入力する。",
      },
      {
        term: "LLM（大規模言語モデル）",
        oneLine: "言葉を扱うAIの頭脳",
        explanation:
          "つまり大量の文章を学んで会話できるAIの仕組みです。ChatGPTのような対話サービスの中心で動いています。",
        example: "使用例：社内チャットで『このAIはLLMを使っている』と説明する。",
      },
      {
        term: "生成AI（ジェネレーティブAI）",
        oneLine: "新しい内容を作るAI",
        explanation:
          "つまり文章や画像などをゼロから作るAIのことです。検索だけでなく、下書きを作る場面で力を発揮します。",
        example: "使用例：企画書のたたき台を生成AIで作る。",
      },
      {
        term: "マルチモーダル（Multimodal）",
        oneLine: "文字と画像などを同時に扱う",
        explanation:
          "つまり1つのAIが文字・画像・音声をまとめて理解することです。文章で質問しながら画像も見せる使い方ができます。",
        example: "使用例：写真を見せて『この内容を説明して』と頼む。",
      },
      {
        term: "ファインチューニング（Fine-tuning）",
        oneLine: "用途に合わせた追加学習",
        explanation:
          "つまり元のAIに特定分野を覚えさせて調整することです。会社ごとの言い回しや業界特有の表現に寄せられます。",
        example: "使用例：社内FAQの回答文体に合わせてAIを調整する。",
      },
      {
        term: "トークン（Token）",
        oneLine: "AIが数える文字の単位",
        explanation:
          "つまりAIが文章を読むときの小さな区切りのことです。利用量や料金の目安にも使われます。",
        example: "使用例：『この長文はトークンが多いので短くしよう』と判断する。",
      },
      {
        term: "コンテキスト（Context）",
        oneLine: "会話の前提情報",
        explanation:
          "つまりAIが答えるときに参照する背景メモのことです。目的や対象者を先に伝えると回答精度が上がります。",
        example: "使用例：『対象は新入社員です』と前提を添えて質問する。",
      },
      {
        term: "ハルシネーション（幻覚）",
        oneLine: "AIのもっともらしい誤答",
        explanation:
          "つまりAIが本当らしく見える間違いを返す現象です。重要な数字や制度は必ず公式情報で確認する運用が必要です。",
        example: "使用例：法律情報の回答をそのまま使わず、一次情報で裏取りする。",
      },
      {
        term: "AGI（汎用人工知能）",
        oneLine: "人に近い広い知能の構想",
        explanation:
          "つまり人のように幅広い課題へ対応できるAIの将来像です。現時点では研究段階で、明確な実現時期は決まっていません。",
        example: "使用例：経営会議で『今はAGIより実務AI活用を優先』と整理する。",
      },
      {
        term: "推論（Reasoning）",
        oneLine: "筋道を立てて考える処理",
        explanation:
          "つまり答えを出すまでの考え方を組み立てる動きです。複数条件の比較や手順整理で効果が出ます。",
        example: "使用例：候補3案を条件ごとに比較して順位づけしてもらう。",
      },
      {
        term: "チャットBot（Chatbot）",
        oneLine: "会話型の自動応答システム",
        explanation:
          "つまり質問すると定型的に返してくれる会話窓口です。最近は生成AI連携で自然な返答ができるようになりました。",
        example: "使用例：ECサイトの問い合わせ一次対応に設置する。",
      },
      {
        term: "AIエージェント（AI Agent）",
        oneLine: "目標に向けて動くAI",
        explanation:
          "つまり指示を受けて複数ステップを進める実行型AIです。調査から要約までをまとめて任せられます。",
        example: "使用例：営業リスト作成の下調べを自動で進める。",
      },
      {
        term: "RAG（Retrieval-Augmented Generation）",
        oneLine: "資料を見てから答える方式",
        explanation:
          "つまり外部資料を探してから回答を作る方法です。社内文書に基づく回答で、ずれを減らしやすくなります。",
        example: "使用例：就業規則PDFを参照して社内質問に答える。",
      },
      {
        term: "MCP（Model Context Protocol）",
        oneLine: "AIと外部ツールの接続規格",
        explanation:
          "つまりAIに必要な情報源を安全に渡すための共通ルールです。ツール連携の作り方をそろえられます。",
        example: "使用例：AIが社内DBにアクセスする連携方式として採用する。",
      },
      {
        term: "Foundation Model",
        oneLine: "多用途の土台モデル",
        explanation:
          "つまり多くの用途に使える大きな基本モデルです。ここから各社サービスや用途別機能が作られます。",
        example: "使用例：『この製品はFoundation Modelを元に構築』と説明する。",
      },
    ],
  },
  {
    id: "category-tools",
    title: "カテゴリ2: 主要AIツール・モデル（15語）",
    lead: "日常利用でよく比較されるサービス名とモデル名です。",
    terms: [
      {
        term: "ChatGPT",
        oneLine: "OpenAIの対話AIサービス",
        explanation:
          "つまり文章作成や要約を会話形式で行える代表的なAIです。個人利用から業務活用まで幅広く使われています。",
        example: "使用例：会議議事録の下書きをChatGPTで作る。",
      },
      {
        term: "Claude",
        oneLine: "長文処理に強い対話AI",
        explanation:
          "つまり丁寧な文章整理や長い資料読解に強いAIサービスです。文書ベースの仕事で使われることが多いです。",
        example: "使用例：契約書ドラフトの論点整理をClaudeに依頼する。",
      },
      {
        term: "Gemini",
        oneLine: "Google系の生成AI",
        explanation:
          "つまりGoogleのサービス連携がしやすい対話AIです。メールやドキュメントと組み合わせた活用に向いています。",
        example: "使用例：Gmail返信案をGeminiで作成する。",
      },
      {
        term: "Grok",
        oneLine: "xAIの対話AI",
        explanation:
          "つまりxAIが提供する会話型AIサービスです。情報収集や質問応答で利用されます。",
        example: "使用例：最新トピックの要点整理をGrokで確認する。",
      },
      {
        term: "Copilot",
        oneLine: "作業支援のAIアシスタント群",
        explanation:
          "つまり作業アプリに組み込まれて補助してくれるAIです。文章作成や集計補助など日常業務で使われます。",
        example: "使用例：Excel作業の式提案をCopilotで出す。",
      },
      {
        term: "Perplexity",
        oneLine: "調査向きのAI検索",
        explanation:
          "つまり出典を示しながら答える検索寄りAIです。調べ物の初動を早くしたいときに便利です。",
        example: "使用例：市場動向の概要をPerplexityで調べる。",
      },
      {
        term: "DALL-E",
        oneLine: "OpenAIの画像生成モデル",
        explanation:
          "つまり文章から画像を作るAIモデルです。企画段階のラフビジュアル作成に使われます。",
        example: "使用例：イベント告知案のイメージ画像を生成する。",
      },
      {
        term: "Midjourney",
        oneLine: "高品質画像を作るAI",
        explanation:
          "つまりビジュアル表現に強い画像生成サービスです。広告やコンセプト制作で採用されることがあります。",
        example: "使用例：ブランド世界観の参考ビジュアルを作る。",
      },
      {
        term: "Stable Diffusion",
        oneLine: "拡張しやすい画像生成基盤",
        explanation:
          "つまりカスタマイズしやすい画像生成の仕組みです。自社用途に合わせて調整したいときに使われます。",
        example: "使用例：社内サーバーで画像生成ワークフローを構築する。",
      },
      {
        term: "ElevenLabs",
        oneLine: "自然音声を作るAI",
        explanation:
          "つまり読み上げ音声を高品質で作れるサービスです。ナレーション制作や試作音声に使われます。",
        example: "使用例：eラーニング教材の仮ナレーションを生成する。",
      },
      {
        term: "Suno",
        oneLine: "楽曲生成AIサービス",
        explanation:
          "つまりテキスト指示から曲を作るAIです。アイデア段階のBGMづくりに使えます。",
        example: "使用例：動画の仮BGMをSunoで作る。",
      },
      {
        term: "Runway",
        oneLine: "映像生成・編集AI",
        explanation:
          "つまり動画の生成や編集を助けるAIツールです。短尺動画の試作や演出確認で活用されます。",
        example: "使用例：広告動画のラフカットをRunwayで作る。",
      },
      {
        term: "Whisper",
        oneLine: "音声文字起こしモデル",
        explanation:
          "つまり話した内容を文字に変換する音声認識AIです。議事録作成の時短に役立ちます。",
        example: "使用例：インタビュー録音をWhisperでテキスト化する。",
      },
      {
        term: "Codex",
        oneLine: "コード作成支援モデル",
        explanation:
          "つまりプログラムを書く作業を補助するAIです。初期実装や修正案づくりを速められます。",
        example: "使用例：簡単なAPI処理のひな形をCodexで生成する。",
      },
      {
        term: "GPT",
        oneLine: "OpenAIのモデル系列名",
        explanation:
          "つまりOpenAIが提供する言語モデルの総称です。ChatGPTはこのGPT系列モデルを利用しています。",
        example: "使用例：『この機能はGPTベース』と仕様説明に書く。",
      },
    ],
  },
  {
    id: "category-prompt",
    title: "カテゴリ3: プロンプトエンジニアリング（10語）",
    lead: "AIへの頼み方を改善するための実践用語です。",
    terms: [
      {
        term: "ゼロショット（Zero-shot）",
        oneLine: "例なしでいきなり依頼",
        explanation:
          "つまり見本を与えずに直接指示する方法です。簡単な要約や言い換えなどでまず試しやすいです。",
        example: "使用例：『この文を敬語に直して』だけで依頼する。",
      },
      {
        term: "フューショット（Few-shot）",
        oneLine: "少数の見本つき依頼",
        explanation:
          "つまり2〜3個の見本を見せてから依頼する方法です。文体や出力形式を合わせたい場面で安定します。",
        example: "使用例：過去の回答例を2件示して同形式で出力させる。",
      },
      {
        term: "Chain of Thought",
        oneLine: "考える手順を重視する指示",
        explanation:
          "つまり結論だけでなく途中の考え方を意識させる方法です。複雑な比較や手順分解で使われます。",
        example: "使用例：『判断理由を順番に説明して』と頼む。",
      },
      {
        term: "System Prompt",
        oneLine: "AIの基本ルール設定",
        explanation:
          "つまり会話全体で守る方針を最初に決める指示です。口調や禁止事項を固定したいときに有効です。",
        example: "使用例：『常に中学生向けのやさしい言葉で答える』と設定する。",
      },
      {
        term: "Role Play Prompting",
        oneLine: "役割を与える指示法",
        explanation:
          "つまりAIに特定の立場を与えて答えさせる方法です。対象者に合わせた説明にしやすくなります。",
        example: "使用例：『あなたは採用担当者として回答してください』と頼む。",
      },
      {
        term: "温度（Temperature）",
        oneLine: "回答の自由度を調整",
        explanation:
          "つまり回答をどれだけ自由に広げるかの設定値です。低いと堅実、高いと発想的な答えが出やすくなります。",
        example: "使用例：提案アイデア出しでは温度を高めに設定する。",
      },
      {
        term: "Top-P",
        oneLine: "語彙の広がり調整",
        explanation:
          "つまり次の言葉候補をどこまで広く選ぶかの設定です。回答のぶれを抑えたいときに調整します。",
        example: "使用例：定型文作成ではTop-Pを控えめにする。",
      },
      {
        term: "プロンプトインジェクション",
        oneLine: "悪意ある指示の差し込み",
        explanation:
          "つまり外部テキストがAIのルールを書き換えようとする攻撃です。安全運用では入力内容の検証が必要です。",
        example: "使用例：問い合わせ文の中に不正指示がないか確認する。",
      },
      {
        term: "Few-shot learning",
        oneLine: "少数例から学ばせる手法",
        explanation:
          "つまり少ない見本を提示して期待する出力に寄せる考え方です。フューショットの英語表記として扱われます。",
        example: "使用例：良い回答例を3件見せて同品質の出力を狙う。",
      },
      {
        term: "CoT（思考の連鎖）",
        oneLine: "段階的に考える書き方",
        explanation:
          "つまり問題を小さく分けて順に考えさせる方法です。長い判断をするときの抜け漏れを減らせます。",
        example: "使用例：企画案を『目的→条件→案比較』で順に整理する。",
      },
    ],
  },
  {
    id: "category-business",
    title: "カテゴリ4: ビジネス・活用（15語）",
    lead: "職場導入や成果管理で頻出する言葉をまとめます。",
    terms: [
      {
        term: "リスキリング（Reskilling）",
        oneLine: "新しい仕事に向けた学び直し",
        explanation:
          "つまり変化した業務に合わせてスキルを更新することです。AI時代では継続的な学習が競争力につながります。",
        example: "使用例：営業職がAI活用講座で資料作成を学び直す。",
      },
      {
        term: "DX（デジタルトランスフォーメーション）",
        oneLine: "業務の仕組み自体を変える",
        explanation:
          "つまり紙や手作業中心の流れを、デジタルで再設計することです。単なるツール導入より業務全体の見直しが重要です。",
        example: "使用例：申請業務をオンライン化し承認時間を短縮する。",
      },
      {
        term: "AI活用",
        oneLine: "AIを実務で使い成果を出す",
        explanation:
          "つまり日々の業務にAIを組み込み、時間や品質を改善することです。小さな用途から始めると定着しやすいです。",
        example: "使用例：週報作成の下書きをAIで行う。",
      },
      {
        term: "ナレッジマネジメント",
        oneLine: "知見を組織で共有する仕組み",
        explanation:
          "つまり個人の経験やノウハウを組織資産にする考え方です。AIと組み合わせると検索性が上がります。",
        example: "使用例：FAQと議事録を集約し、AI検索可能にする。",
      },
      {
        term: "自動化（オートメーション）",
        oneLine: "繰り返し作業を機械化",
        explanation:
          "つまり毎回同じ手順の仕事を自動で回すことです。人は判断が必要な仕事に集中しやすくなります。",
        example: "使用例：定型メール送信を自動化する。",
      },
      {
        term: "ワークフロー自動化",
        oneLine: "複数工程を連続自動化",
        explanation:
          "つまり入力から通知までの一連作業をつなげて自動実行することです。部門間連携の待ち時間を減らせます。",
        example: "使用例：フォーム送信後に承認依頼と記録を同時実行する。",
      },
      {
        term: "AI倫理",
        oneLine: "AI利用の道徳的な基準",
        explanation:
          "つまり便利さだけでなく公正さや人への配慮を守る考え方です。運用ルールを先に決めることが重要です。",
        example: "使用例：採用選考でAI判断を補助用途に限定する。",
      },
      {
        term: "著作権",
        oneLine: "作品の権利を守る法律概念",
        explanation:
          "つまり文章や画像の利用範囲を決める権利のことです。AI生成物でも利用前に権利確認が必要です。",
        example: "使用例：商用利用前に素材の利用規約をチェックする。",
      },
      {
        term: "プライバシー",
        oneLine: "個人情報と私生活の保護",
        explanation:
          "つまり個人を特定できる情報を守る考え方です。AI入力前に個人名や住所を除く運用が基本です。",
        example: "使用例：顧客相談文を匿名化してAIに渡す。",
      },
      {
        term: "AIガバナンス",
        oneLine: "AI利用の統制と管理",
        explanation:
          "つまり安全に使うための社内ルールと責任体制です。承認手順と監査記録を持つと運用が安定します。",
        example: "使用例：AI利用ガイドラインと申請フローを整備する。",
      },
      {
        term: "ROI",
        oneLine: "投資に対する成果指標",
        explanation:
          "つまりかけた費用に対してどれだけ効果が出たかを示す数字です。AI導入では時間削減も価値として測ります。",
        example: "使用例：工数削減時間を金額換算してROIを算出する。",
      },
      {
        term: "生産性向上",
        oneLine: "同じ時間で成果を増やす",
        explanation:
          "つまり作業時間を減らしながら品質や量を上げることです。AIは下準備の時短で効果が出やすいです。",
        example: "使用例：提案資料の構成案作成を30分短縮する。",
      },
      {
        term: "ペルソナ",
        oneLine: "想定ユーザー像",
        explanation:
          "つまりサービス対象を具体化した人物モデルです。AIにペルソナを渡すと文章の方向性がそろいます。",
        example: "使用例：『40代の転職希望者向け』と指定して記事案を作る。",
      },
      {
        term: "カスタムGPT",
        oneLine: "目的別に作る専用AI",
        explanation:
          "つまり特定用途向けに指示や資料を設定したGPTです。毎回同じ説明をせずに運用できます。",
        example: "使用例：社内規程回答専用のカスタムGPTを用意する。",
      },
      {
        term: "GPTs",
        oneLine: "公開・共有できるGPT群",
        explanation:
          "つまり用途別に作られたGPTを探して使える仕組みです。自分向けに複製して調整することもできます。",
        example: "使用例：企画ブレスト用GPTを選び業務に取り入れる。",
      },
    ],
  },
  {
    id: "category-tech",
    title: "カテゴリ5: 技術用語（10語）",
    lead: "導入時に最低限押さえたい技術の基本語です。",
    terms: [
      {
        term: "API",
        oneLine: "サービス同士をつなぐ窓口",
        explanation:
          "つまり別システムに機能をお願いするための接続口です。画面操作なしで連携処理を組めます。",
        example: "使用例：自社アプリからAI要約機能を呼び出す。",
      },
      {
        term: "クラウドAI",
        oneLine: "ネット経由で使うAI",
        explanation:
          "つまり自分の端末に重い処理を置かずに使う形です。初期構築が軽く、すぐ試せる利点があります。",
        example: "使用例：ブラウザからクラウドAIで翻訳を行う。",
      },
      {
        term: "オープンソース",
        oneLine: "公開されたソフト資産",
        explanation:
          "つまり中身が公開され、改善や再利用ができるソフトのことです。導入時はライセンス条件の確認が必要です。",
        example: "使用例：オープンソースのモデルを社内検証に使う。",
      },
      {
        term: "ベクトルデータベース",
        oneLine: "意味の近さで検索するDB",
        explanation:
          "つまり単語一致でなく内容の近さで探せる保存庫です。RAGの資料検索でよく使われます。",
        example: "使用例：FAQ本文を登録し、似た質問を高速検索する。",
      },
      {
        term: "エンベディング（Embedding）",
        oneLine: "文章の意味を数字化",
        explanation:
          "つまり文章の意味を数値の形に変える処理です。意味検索やおすすめ機能の土台になります。",
        example: "使用例：問い合わせ文をエンベディング化して分類する。",
      },
      {
        term: "インファレンス（Inference）",
        oneLine: "学習済みAIで実際に回答する処理",
        explanation:
          "つまり学習後のAIを使って答えを出す実行段階です。利用時の速度やコストに関わります。",
        example: "使用例：チャットで返答が生成される瞬間がインファレンス。",
      },
      {
        term: "GPU",
        oneLine: "AI計算を高速化する装置",
        explanation:
          "つまり大量計算が得意な部品で、AI処理を速くします。画像生成や学習で特に重要です。",
        example: "使用例：重いモデル実行にGPU搭載サーバーを使う。",
      },
      {
        term: "オフラインAI（ローカルLLM）",
        oneLine: "ネットなしで動くAI",
        explanation:
          "つまり端末内で完結して動作するAIのことです。機密保持を重視する場面で選ばれます。",
        example: "使用例：機密文書要約を社内PCだけで処理する。",
      },
      {
        term: "オーケストレーション",
        oneLine: "複数処理の進行管理",
        explanation:
          "つまり複数ツールや手順を順番に動かす管理の仕組みです。大きな自動化で欠かせません。",
        example: "使用例：取得→要約→通知の流れを一括制御する。",
      },
      {
        term: "パラメータ",
        oneLine: "AI内部の調整値",
        explanation:
          "つまりAIのふるまいを決める内部の数値群です。モデル規模や性能の説明でよく登場します。",
        example: "使用例：モデル比較で『パラメータ数が大きい』と語られる。",
      },
    ],
  },
  {
    id: "category-safety",
    title: "カテゴリ6: AI安全・倫理（10語）",
    lead: "安心して使うために知っておくべき安全関連の語です。",
    terms: [
      {
        term: "AI安全性（AI Safety）",
        oneLine: "危険を減らす設計思想",
        explanation:
          "つまりAIが人や社会に悪影響を出さないよう管理する考え方です。導入前にリスク想定を行うことが重要です。",
        example: "使用例：公開前に不適切出力テストを実施する。",
      },
      {
        term: "バイアス（偏り）",
        oneLine: "データ由来の偏った判断",
        explanation:
          "つまり学習データの偏りが回答に現れる現象です。多様な視点で結果を確認する運用が必要です。",
        example: "使用例：採用文案を複数属性でチェックする。",
      },
      {
        term: "フェイク（ディープフェイク）",
        oneLine: "本物に見える偽コンテンツ",
        explanation:
          "つまりAIで作られた偽の映像や音声です。見た目だけで判断せず出所確認が必要です。",
        example: "使用例：拡散前に公式発表と照合する。",
      },
      {
        term: "透明性",
        oneLine: "仕組みと判断理由の見える化",
        explanation:
          "つまり何を根拠に答えたか説明できる状態です。社内利用では記録を残すと信頼を得やすいです。",
        example: "使用例：回答に参照資料リンクを添えて提出する。",
      },
      {
        term: "説明可能AI",
        oneLine: "判断理由を説明できるAI",
        explanation:
          "つまり結果だけでなく理由も説明しやすいAI設計です。高リスク業務では特に重視されます。",
        example: "使用例：審査結果と理由をセットで表示する。",
      },
      {
        term: "著作権侵害リスク",
        oneLine: "権利を侵す可能性",
        explanation:
          "つまり生成物が他者作品に近すぎる場合の法的リスクです。公開前の確認フローが必要です。",
        example: "使用例：広告画像を公開前に権利チェックする。",
      },
      {
        term: "個人情報保護",
        oneLine: "個人データを守る運用",
        explanation:
          "つまり氏名や連絡先などを適切に扱うためのルールです。匿名化とアクセス制限が基本です。",
        example: "使用例：顧客データをマスキングして分析する。",
      },
      {
        term: "AIリスク",
        oneLine: "AI利用に伴う総合的な危険",
        explanation:
          "つまり誤情報・漏えい・差別表現などの潜在問題を指します。事前に想定して対策を決めることが重要です。",
        example: "使用例：導入時にリスク一覧と対応責任者を定める。",
      },
      {
        term: "ウォーターマーク",
        oneLine: "生成物を識別する目印",
        explanation:
          "つまりAI生成物に埋め込む識別情報です。真正性確認や改ざん検知の補助に使われます。",
        example: "使用例：配布画像に生成元ウォーターマークを付ける。",
      },
      {
        term: "セーフガード",
        oneLine: "不適切利用を防ぐ防波堤",
        explanation:
          "つまり危険な指示を止める仕組みや運用ルールです。技術対策と人の確認を両方組み合わせます。",
        example: "使用例：禁止ワード検知と承認フローを併用する。",
      },
    ],
  },
  {
    id: "category-trends",
    title: "カテゴリ7: 最新トレンド（10語）",
    lead: "2026年に実務で話題の新しい使い方・概念です。",
    terms: [
      {
        term: "AI PC",
        oneLine: "AI処理を意識したPC",
        explanation:
          "つまりAI機能を快適に動かす設計のパソコンです。会議要約や画像補正などが端末側で行いやすくなります。",
        example: "使用例：AI PCでローカル字幕生成を行う。",
      },
      {
        term: "Copilot+ PC",
        oneLine: "AI体験を前提にしたPC規格",
        explanation:
          "つまりCopilot活用を前提に性能要件が定められたPC群です。日常操作でAI機能を使いやすくします。",
        example: "使用例：要約や検索補助をOS機能として使う。",
      },
      {
        term: "AIエージェント型ワークフロー",
        oneLine: "AIが工程をまたいで実行",
        explanation:
          "つまり1回の依頼で複数手順を連続実行する業務設計です。人は確認と判断に集中しやすくなります。",
        example: "使用例：問い合わせ分類から返信案生成まで自動化する。",
      },
      {
        term: "Vibe Coding",
        oneLine: "対話中心で進める開発",
        explanation:
          "つまり細かい文法より意図を伝えて形にする開発スタイルです。試作速度を上げる目的で使われます。",
        example: "使用例：自然文で要件を伝えてプロトタイプを作る。",
      },
      {
        term: "コンテキストエンジニアリング",
        oneLine: "前提情報を設計する技術",
        explanation:
          "つまりAIに渡す背景情報を最適化する実務です。資料や制約を整理して渡すほど回答品質が安定します。",
        example: "使用例：顧客属性と目的をセットで毎回渡す。",
      },
      {
        term: "Computer Use",
        oneLine: "AIが画面操作まで行う機能",
        explanation:
          "つまりAIがアプリ画面を見てクリックや入力を進める使い方です。定型PC作業の自動化が進みます。",
        example: "使用例：日次レポート入力をAI操作で半自動化する。",
      },
      {
        term: "マルチエージェント",
        oneLine: "複数AIの役割分担",
        explanation:
          "つまり調査役・要約役のようにAIを分担して動かす構成です。大きな業務で品質と速度を両立しやすいです。",
        example: "使用例：調査AIと校正AIを分けて記事作成する。",
      },
      {
        term: "Memory機能",
        oneLine: "会話設定を覚える機能",
        explanation:
          "つまりAIがユーザーの好みや前提を継続記憶する機能です。毎回同じ説明を減らせます。",
        example: "使用例：敬語希望や職種情報を覚えさせる。",
      },
      {
        term: "リアルタイム音声AI",
        oneLine: "話しながら即応答するAI",
        explanation:
          "つまり通話のように遅延少なく会話できるAIです。接客支援や学習サポートで注目されています。",
        example: "使用例：英会話練習をリアルタイム音声AIで行う。",
      },
      {
        term: "Tool Use",
        oneLine: "AIが外部ツールを使う機能",
        explanation:
          "つまりAIが計算機や検索APIを呼び出して作業することです。回答だけでなく実処理まで進められます。",
        example: "使用例：AIがカレンダーを更新して予定を登録する。",
      },
    ],
  },
  {
    id: "category-career",
    title: "カテゴリ8: 学習・キャリア（15語）",
    lead: "学び直しやキャリア形成で押さえたい実践用語です。",
    terms: [
      {
        term: "プロンプターエンジニア",
        oneLine: "AI指示設計の実務担当",
        explanation:
          "つまりAIに伝える指示文を最適化する役割です。業務理解と文章設計の両方が求められます。",
        example: "使用例：CS向け自動返信プロンプトを整備する。",
      },
      {
        term: "AI活用人材",
        oneLine: "AIを成果に変える人材",
        explanation:
          "つまりツール知識だけでなく業務改善まで実行できる人です。部署横断で価値を出せる点が強みです。",
        example: "使用例：現場課題をAI導入で短期間に改善する。",
      },
      {
        term: "リスキリング補助金",
        oneLine: "学び直しを支える公的制度",
        explanation:
          "つまり学習費用の一部を支援する仕組みです。対象講座や条件を確認して活用するのがポイントです。",
        example: "使用例：補助金対象講座でAI学習を始める。",
      },
      {
        term: "AI資格",
        oneLine: "AI知識を示す認定",
        explanation:
          "つまり学習到達度を外部に示すための資格です。基礎理解の証明や学習計画づくりに役立ちます。",
        example: "使用例：転職準備で基礎資格を取得する。",
      },
      {
        term: "生成AI検定",
        oneLine: "生成AIの基礎力を測る試験",
        explanation:
          "つまり生成AIの用語や活用知識を確認する検定です。初心者が学習範囲を明確にしやすくなります。",
        example: "使用例：社内研修の目標として受験する。",
      },
      {
        term: "AIリテラシー",
        oneLine: "AIを正しく使う基礎力",
        explanation:
          "つまり便利さと危険の両方を理解して判断する力です。全職種で共通して必要な土台です。",
        example: "使用例：情報真偽の確認ルールを日常業務で徹底する。",
      },
      {
        term: "AIコーチ",
        oneLine: "AI学習を伴走する支援役",
        explanation:
          "つまり学習計画やつまずき解消を手伝う指導者です。自己流で止まりやすい人に有効です。",
        example: "使用例：週次レビューでプロンプト改善を受ける。",
      },
      {
        term: "オンボーディング",
        oneLine: "導入初期の定着支援",
        explanation:
          "つまり新メンバーが早く使えるようにする立ち上げ支援です。最初の成功体験を作る設計が重要です。",
        example: "使用例：入社1週目にAI利用ハンズオンを実施する。",
      },
      {
        term: "AIプロジェクト管理",
        oneLine: "AI案件の進行管理",
        explanation:
          "つまり目標設定から検証までを管理する実務です。小さな検証を短く回す運営が成果につながります。",
        example: "使用例：2週間単位でPoC評価を実施する。",
      },
      {
        term: "PoC（概念実証）",
        oneLine: "小規模で効果を検証",
        explanation:
          "つまり本導入前に実現性を試す小さな実験です。失敗コストを抑えながら判断できます。",
        example: "使用例：1部署限定でAI要約導入を試す。",
      },
      {
        term: "AI内製化",
        oneLine: "社内でAI運用を回す体制",
        explanation:
          "つまり外部任せにせず自社で改善を続ける状態です。現場理解が深く、改善速度を上げられます。",
        example: "使用例：社内チームでプロンプト資産を管理する。",
      },
      {
        term: "スキルギャップ",
        oneLine: "必要能力との不足差",
        explanation:
          "つまり業務に必要な力と現状スキルの差です。可視化すると学習優先度を決めやすくなります。",
        example: "使用例：部署ごとにAIスキル診断を実施する。",
      },
      {
        term: "デジタルスキル",
        oneLine: "デジタル活用の基本能力",
        explanation:
          "つまりPC・クラウド・データ活用を進める土台能力です。AI活用はこの基礎の上で伸びます。",
        example: "使用例：表計算とAI要約を組み合わせて報告を作る。",
      },
      {
        term: "AI学習コミュニティ",
        oneLine: "仲間と学ぶ実践の場",
        explanation:
          "つまり同じ目標を持つ人と知見共有しながら学ぶ場です。継続しやすく、成功例が増えます。",
        example: "使用例：週1回の学習会で活用事例を交換する。",
      },
      {
        term: "メンタリング",
        oneLine: "経験者による個別伴走",
        explanation:
          "つまり先に経験した人から定期的に助言を受ける支援です。遠回りを減らし、学習速度を上げられます。",
        example: "使用例：月2回の面談で実務課題を相談する。",
      },
    ],
  },
];

const firstHalfCategories = glossaryCategories.slice(0, 4);
const secondHalfCategories = glossaryCategories.slice(4);

export default function GenerativeAiDictionary2026Page({ faqItems }: Props) {
  return (
    <main className="overflow-hidden bg-white pb-24 pt-28 sm:pt-32">
      <article className="markdown-content mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-8"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AI用語辞典2026" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
          className="relative"
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-will-primary/5 blur-3xl -z-10" />
          <div className="mb-8 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-will-primary/10 bg-will-lighter/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            生成AI用語辞典2026
            <br className="hidden sm:block" />
            初心者が今日から使えるAI用語100語をわかりやすく解説
          </h1>

          <div className="mt-8 flex flex-col justify-between gap-6 border-b border-slate-100 pb-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Published on</p>
              <time className="text-sm font-semibold text-slate-700">2026年2月23日</time>
            </div>
            <CopyAsMarkdownButton
              title="生成AI用語辞典2026：初心者が今日から使えるAI用語100語をわかりやすく解説"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-16 rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="m-0 flex items-center gap-2 border-none pb-0 text-2xl text-slate-900">
            <CheckCircle2 className="h-6 w-6 text-emerald-500" />
            この記事でわかること
          </h2>
          <div className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
            <p>生成AIでよく聞く100語を、初心者向けに「つまり〇〇のこと」で理解できます。</p>
            <p>単語の意味だけでなく、実際の仕事や学習での使いどころまでイメージできます。</p>
            <p>AIツール選び、プロンプト作成、導入時の安全対策まで、会話で困らない語彙がそろいます。</p>
            <p>わからない用語が出たときに、カテゴリ別で素早く引ける実用辞典として使えます。</p>
          </div>
        </motion.section>

        <motion.section
          id="how-to-use"
          className="mt-12 rounded-3xl border border-slate-100 bg-slate-50/60 p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="m-0 flex items-center gap-2 border-none pb-0 text-2xl text-slate-900">
            <BookOpen className="h-6 w-6 text-will-primary" />
            用語辞典の使い方（カテゴリ別に探せます）
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
            <li>まず目次からカテゴリを選び、今の目的に近い章へ移動してください。</li>
            <li>各用語は「1行定義 → やさしい説明 → 使用例」の順で読める構成です。</li>
            <li>会議中に意味確認したいときは、用語名だけ拾っても理解できるように作っています。</li>
            <li>学習用途では、使用例を自分の業務に置き換えると定着しやすくなります。</li>
          </ul>
        </motion.section>

        {firstHalfCategories.map((category) => (
          <motion.section
            key={category.id}
            id={category.id}
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionReveal}
          >
            <h2 className="scroll-mt-28">{category.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{category.lead}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {category.terms.map((term) => (
                <section key={term.term} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-subtle">
                  <h3 className="m-0 border-none pb-0 text-lg font-bold text-slate-900">{term.term}</h3>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-will-lighter/50 px-3 py-1 text-xs font-bold text-will-primary">
                    <Tag className="h-3.5 w-3.5" />
                    {term.oneLine}
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-slate-700">{term.explanation}</p>
                  <p className="mt-3 text-[14px] leading-7 text-slate-600">
                    <span className="font-bold text-slate-800">使用例：</span>
                    {term.example.replace("使用例：", "")}
                  </p>
                </section>
              ))}
            </div>
          </motion.section>
        ))}

        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <MidArticleCtaBox slug='generative-ai-dictionary-2026' />
        </motion.section>

        {secondHalfCategories.map((category) => (
          <motion.section
            key={category.id}
            id={category.id}
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionReveal}
          >
            <h2 className="scroll-mt-28">{category.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{category.lead}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {category.terms.map((term) => (
                <section key={term.term} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-subtle">
                  <h3 className="m-0 border-none pb-0 text-lg font-bold text-slate-900">{term.term}</h3>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-will-lighter/50 px-3 py-1 text-xs font-bold text-will-primary">
                    <Tag className="h-3.5 w-3.5" />
                    {term.oneLine}
                  </p>
                  <p className="mt-4 text-[15px] leading-7 text-slate-700">{term.explanation}</p>
                  <p className="mt-3 text-[14px] leading-7 text-slate-600">
                    <span className="font-bold text-slate-800">使用例：</span>
                    {term.example.replace("使用例：", "")}
                  </p>
                </section>
              ))}
            </div>
          </motion.section>
        ))}

        <motion.section
          id="faq"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="scroll-mt-28">よくある質問（FAQ）</h2>
          <div className="mt-8 divide-y divide-slate-100 border-t border-slate-100">
            {faqItems.map((item) => (
              <div key={item.question} className="py-8">
                <dt className="flex items-start gap-3 text-lg font-bold leading-relaxed text-slate-900">
                  <CircleHelp className="mt-1 h-5 w-5 shrink-0 text-will-primary" />
                  {item.question}
                </dt>
                <dd className="mt-3 pl-8 text-base leading-relaxed text-slate-600">{item.answer}</dd>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="summary"
          className="mt-24 rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 shadow-soft sm:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="m-0 border-none pb-0 text-2xl font-black text-slate-900">まとめ：言葉がわかると、AI活用は一気に進みます</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-700">
            生成AIは「単語の壁」で止まりやすい領域です。つまり、意味がわかるだけで会話・調査・導入検討のスピードが上がります。
            この辞典を手元に置き、知らない言葉が出たらすぐ確認する運用を続けてください。
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            AIリブートアカデミーでは、生成AI活用力だけでなく、自己理解・キャリアデザイン、仲間と共に学ぶ環境の3本柱で、実務に活かせる学びを支援しています。
          </p>
        </motion.section>

        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <LineCtaBox
            title="AI用語がわかったら、次は実際に使いこなしてみましょう"
            description="AIの言葉はわかってきた。でも実際に使いこなすには、正しい学び方が必要です。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラム。LINEで無料相談受付中。"
            buttonLabel="LINEで無料相談する（登録無料）"
          />
        </motion.section>

        <motion.section
          className="mt-20 border-t border-slate-100 pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
        >
          <h2 className="m-0 border-none pb-0 text-xl font-bold text-slate-900">関連リンク</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/academy/blog/what-is-generative-ai", label: "生成AIとは？初心者向け基礎ガイド" },
              { href: "/academy/blog/chatgpt-start-guide-smartphone", label: "ChatGPTをスマホで始める方法" },
              { href: "/academy/blog/how-to-ask-ai-beginners", label: "AIへの聞き方入門" },
              { href: "/academy/blog/ai-overview-map-2026", label: "2026年春のAI全体マップ" },
              { href: "/academy/blog/chatgpt-custom-gpts-guide", label: "GPTs完全入門" },
              { href: "/academy", label: "AIリブートアカデミーTOP" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-will-primary/30 hover:text-will-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2 text-xs text-slate-400">
            <Sparkles className="h-3.5 w-3.5" />
            この辞典は2026年2月時点の主要用語をもとに作成しています。
          </p>
        </motion.section>
      </article>
    </main>
  );
}
