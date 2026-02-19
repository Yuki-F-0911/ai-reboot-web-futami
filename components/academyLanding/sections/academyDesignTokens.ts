/**
 * Design Tokens for Academy LP Redesign (Direction B: Quiet Workshop)
 */

export const ACADEMY_COLORS = {
  bgCanvas: '#f8f8f7',
  bgSection: '#f1f5f9',
  bgPanel: '#ffffff',
  textStrong: '#0f172a', // slate-900
  textBody: '#334155',   // slate-700
  textMuted: '#64748b',  // slate-500
  lineSoft: '#cbd5e1',   // slate-300
  lineStrong: '#94a3b8', // slate-400
  accentMain: '#d46a1f', // orange-700 equivalent for UI
  accentSoft: '#f7e7d8', // light orange
  accentDeep: '#9a4c16', // darker orange
  ctaLine: '#06c755',    // LINE Green
} as const;

export const ACADEMY_TYPOGRAPHY = {
  serif: 'var(--font-noto-serif-jp)',
  sans: 'var(--font-noto-sans-jp)',
  numeric: 'var(--font-inter)',
} as const;

export const ACADEMY_SPACING = {
  sectionPy: 'py-24 lg:py-32',
  container: 'max-w-6xl mx-auto px-6 lg:px-8',
} as const;
