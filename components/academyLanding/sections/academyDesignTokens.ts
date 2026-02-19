/**
 * Design Tokens for Academy LP Redesign (Direction B: Quiet Workshop)
 */

export const ACADEMY_COLORS = {
  bgCanvas: '#f8f8f7',
  bgWarm: '#faf8f5',
  bgSection: '#f5f5f4',  // stone-100
  bgPanel: '#ffffff',
  textStrong: '#0f172a', // slate-900 (kept as per instructions)
  textBody: '#44403c',   // stone-700
  textMuted: '#78716c',  // stone-500
  lineSoft: '#e7e5e4',   // stone-200
  lineStrong: '#d6d3d1', // stone-300
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
