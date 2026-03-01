# Codex Review 2回目: blog-glossary-improvement-plan

## 判定: CONDITIONAL_PASS

## 前回MUST FIX対応状況
- /glossary/mcp修正: 対応済み
- sitemap検証手順: 対応済み
- 回帰チェック: 対応済み

## 新規MUST FIX（あれば）
- デプロイ前検証手順の `node -e` が `.next/server/app/sitemap.xml` をファイルとして `readFileSync` しており、実際はディレクトリのため `EISDIR` で失敗する。検証対象を `.next/server/app/sitemap.xml.body` に修正するか、`npm run start` 後の `curl http://localhost:3000/sitemap.xml` 検証に統一する必要がある。

## SHOULD FIX（あれば）
- 「222記事が全てsitemapから除外」という記述は厳密には不正確。現状は記事URLが欠落している一方で `/academy/blog` 一覧URLは含まれるため、表現を「記事URLが除外」に寄せると誤解がない。
- `robots.ts` は既に `https://ai-reboot.io/sitemap.xml` を返しているため、「追加調査タスク」より「確認済み」として優先度整理した方がよい。
- `ai-music-generation-2026` 改善案で `Mureka` / `Mereka` の表記ゆれが残っているため統一した方がよい。

## 総評
前回レビューの3つの MUST FIX はいずれも計画書に反映されており、計画全体の実行性は明確に向上している。  
一方で、デプロイ前の差分検証コマンドに実行エラーとなる箇所が1点残っているため、そこだけ修正すれば実装着手可能な品質。
