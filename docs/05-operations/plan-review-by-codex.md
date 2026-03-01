# Codex Review: blog-glossary-improvement-plan

## 判定: CONDITIONAL_PASS

## MUST FIX（実装前に必須対応）
- `glossary` のリンク先スラッグ定義を修正してください。計画書では `/glossary/mcp` と `mcp` を前提にしていますが（`docs/05-operations/blog-glossary-improvement-plan.md:317`, `:320`）、実データのスラッグは `model-context-protocol` です（`data/glossary.ts:1509`）。このまま実装すると 404 内部リンクが発生します。
- `sitemap` 検証手順を「ローカル/ステージング確認」と「本番確認」に分離してください。現行手順は `npm run build` の直後に本番 `https://ai-reboot.io/sitemap.xml` を叩くため、デプロイ前に差分検証できません（`docs/05-operations/blog-glossary-improvement-plan.md:87-97`）。
- `sitemap` 修正の回帰防止チェックを計画に追加してください。実際に現状は `academy/blog` エントリが一覧ページ1件のみで、記事URLが欠落しています（`app/sitemap.ts:151-154` の参照パス不一致が原因）。再発防止のため、CIまたは手順に「`academy/blog/{slug}` が一定件数以上含まれる」検査を必須化すべきです。

## SHOULD FIX（品質向上のために推奨）
- 件数の表現を実測ベースに更新してください。現状ファイル構造では `app/(site)/academy/blog/*/page.tsx` は 221 件で、`/academy/blog` 一覧を含めると 222 URL です。計画書の「222記事が全て除外」は厳密には不正確です（`docs/05-operations/blog-glossary-improvement-plan.md:54`, `:81-83`）。
- `robots.ts` は既に sitemap を正しく指しているため（`app/robots.ts:12`）、`追加調査タスク` ではなく「確認済み」に落とすと優先度が明確になります。
- `ai-music-generation-2026` のタイトル改善案で `Mureka` / `Mereka` の表記ゆれを解消してください。固有名詞ゆれはCTRより先に信頼性を落とします。
- SEO効果の期待値は「インデックス候補増加」と「インデックス保証」を分けて記載してください。sitemap修正は発見性改善には有効ですが、登録可否は品質・重複・クロール状況にも依存します。

## 確認済み良好点
- Route Group `(site)` 未考慮が根本原因という技術診断は正確です（`app/sitemap.ts:151-154` と実ファイル構造が一致）。
- 提案されている `sitemap.ts` の2箇所修正は TypeScript strict mode で問題なく実装可能です（`tsconfig.json` の `strict: true` を確認）。
- 現行コードベースは `npm run build` が成功し、提案変更はビルド破壊リスクが低いです（警告のみ）。
- CTR改善対象として挙げた4記事の実ファイルパスはすべて存在し、`metadata` 定義も計画書記載と整合しています。
- `mcp-tool-integration-guide` からの発リンク候補記事（`claude-code-beginners-guide` など）は実在し、内部リンク施策の方向性は妥当です。

## 総評
計画の中核である `sitemap.ts` の不具合特定と修正方針は妥当で、実装順序も「インデックス改善→CTR改善→内部リンク強化」の流れで合理的です。  
一方で、`/glossary/mcp` のスラッグ不一致と、デプロイ前検証手順の不足は実装時の事故に直結するため、先に是正が必要です。これらを修正すれば、実装計画書として実行可能な品質に到達します。
