import { marked } from 'marked'

const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:'])
const URL_BASE = 'https://ai-reboot.io'

function decodeHtmlCharacterReferences(value: string): string {
  return value
    .replace(/&#x([0-9a-f]+);?/gi, (_, hexValue: string) => {
      const codePoint = Number.parseInt(hexValue, 16)
      if (!Number.isFinite(codePoint) || codePoint < 0 || codePoint > 0x10ffff) {
        return ''
      }

      return String.fromCodePoint(codePoint)
    })
    .replace(/&#([0-9]+);?/g, (_, intValue: string) => {
      const codePoint = Number.parseInt(intValue, 10)
      if (!Number.isFinite(codePoint) || codePoint < 0 || codePoint > 0x10ffff) {
        return ''
      }

      return String.fromCodePoint(codePoint)
    })
    .replace(/&colon;/gi, ':')
}

function normalizeUrlForProtocolCheck(value: string): string {
  const htmlDecoded = decodeHtmlCharacterReferences(value)
  let uriDecoded = htmlDecoded

  try {
    uriDecoded = decodeURIComponent(htmlDecoded)
  } catch {
    // Keep original when URL decode fails
  }

  return uriDecoded.replace(/[\u0000-\u0020\u007f]+/g, '').toLowerCase()
}

function hasHtmlToken(value: unknown): boolean {
  if (Array.isArray(value)) {
    return value.some((item) => hasHtmlToken(item))
  }

  if (!value || typeof value !== 'object') {
    return false
  }

  const candidate = value as Record<string, unknown>
  if (candidate.type === 'html') {
    return true
  }

  return Object.values(candidate).some((item) => hasHtmlToken(item))
}

function isSafeMarkdownUrl(rawUrl: string): boolean {
  const url = rawUrl.trim()
  if (!url) return false

  if (/[\u0000-\u001f\u007f]/.test(url)) {
    return false
  }

  const lowerUrl = normalizeUrlForProtocolCheck(url)
  if (
    lowerUrl.startsWith('javascript:') ||
    lowerUrl.startsWith('data:') ||
    lowerUrl.startsWith('vbscript:') ||
    lowerUrl.startsWith('file:')
  ) {
    return false
  }

  try {
    const parsed = new URL(url, URL_BASE)
    return SAFE_PROTOCOLS.has(parsed.protocol)
  } catch {
    return false
  }
}

function hasUnsafeLinkToken(value: unknown): boolean {
  if (Array.isArray(value)) {
    return value.some((item) => hasUnsafeLinkToken(item))
  }

  if (!value || typeof value !== 'object') {
    return false
  }

  const candidate = value as Record<string, unknown>
  if (
    (candidate.type === 'link' || candidate.type === 'image') &&
    typeof candidate.href === 'string' &&
    !isSafeMarkdownUrl(candidate.href)
  ) {
    return true
  }

  return Object.values(candidate).some((item) => hasUnsafeLinkToken(item))
}

export function assertAiTopicMarkdownIsSafe(content: string): void {
  const tokens = marked.lexer(content, {
    gfm: true,
    breaks: true,
  })

  if (hasHtmlToken(tokens)) {
    throw new Error('AiTopics markdown must not include raw HTML tags.')
  }

  if (hasUnsafeLinkToken(tokens)) {
    throw new Error('AiTopics markdown contains an unsafe URL.')
  }
}

export function renderAiTopicMarkdown(content: string): string {
  assertAiTopicMarkdownIsSafe(content)

  const parsed = marked.parse(content, {
    gfm: true,
    breaks: true,
  })

  if (typeof parsed !== 'string') {
    throw new Error('AiTopics markdown parser returned an async response unexpectedly.')
  }

  return parsed
}
