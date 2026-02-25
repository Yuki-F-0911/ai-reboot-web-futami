import type { GlossaryTerm } from "@/types/glossary";

export const categoryColorMap: Record<GlossaryTerm["category"], string> = {
  基礎概念: "bg-blue-100 text-blue-700",
  モデル: "bg-purple-100 text-purple-700",
  実装: "bg-green-100 text-green-700",
  評価: "bg-amber-100 text-amber-700",
  "法務・倫理": "bg-red-100 text-red-700",
};

export function getCategoryColor(category: GlossaryTerm["category"]): string {
  return categoryColorMap[category] ?? "bg-depth-600 text-depth-200";
}
