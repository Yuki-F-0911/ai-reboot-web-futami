export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

export function sendGAEvent(
  eventName: string,
  params?: Record<string, string | number>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export const trackEvent = {
  contactFormSubmit: () =>
    sendGAEvent('contact_form_submit', { event_category: 'conversion' }),

  seminarApplyClick: (seminarName: string) =>
    sendGAEvent('seminar_apply_click', { seminar_name: seminarName }),

  lineRegisterClick: (source: string) =>
    sendGAEvent('line_register_click', { source }),

  briefingApplyClick: () =>
    sendGAEvent('briefing_apply_click', { event_category: 'conversion' }),

  scrollDepth: (depth: 25 | 50 | 75 | 90) =>
    sendGAEvent(`scroll_depth_${depth}`, {
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    }),
}
