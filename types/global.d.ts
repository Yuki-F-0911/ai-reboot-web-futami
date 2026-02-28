export {}

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      params?: Record<string, string | number | boolean>
    ) => void
    dataLayer?: unknown[]
  }
}
