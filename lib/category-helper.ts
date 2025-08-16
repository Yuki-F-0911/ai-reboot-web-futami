// カテゴリーを正規化する（配列の場合は最初の要素を取得）
export function normalizeCategory(category: string[] | string | undefined): string {
  if (!category) return ''
  if (Array.isArray(category)) {
    return category[0] || ''
  }
  return category
}

// カテゴリーが指定の値と一致するか確認（配列対応）
export function categoryMatches(category: string[] | string | undefined, target: string): boolean {
  if (!category) return false
  if (Array.isArray(category)) {
    return category.includes(target)
  }
  return category === target
}

// カテゴリーが複数の値のいずれかと一致するか確認
export function categoryMatchesAny(category: string[] | string | undefined, targets: string[]): boolean {
  if (!category) return false
  return targets.some(target => categoryMatches(category, target))
}