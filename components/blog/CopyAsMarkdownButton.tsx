'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

type CopyStatus = 'idle' | 'copying' | 'copied' | 'error'

interface CopyAsMarkdownButtonProps {
  title: string
  sourceSelector: string
}

function normalizeMarkdown(markdown: string): string {
  return markdown
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

async function copyTextToClipboard(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.left = '-999999px'
  textArea.style.top = '-999999px'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const ok = document.execCommand('copy')
    if (!ok) throw new Error('document.execCommand(copy) returned false')
  } finally {
    document.body.removeChild(textArea)
  }
}

function getMarkdownFromHtml(title: string, htmlRoot: HTMLElement, turndown: TurndownService): string {
  const clonedRoot = htmlRoot.cloneNode(true) as HTMLElement

  clonedRoot.querySelectorAll('[data-copy-exclude]').forEach((node) => {
    node.remove()
  })

  const firstHeading = clonedRoot.querySelector('h1')
  if (firstHeading?.textContent?.trim() === title.trim()) {
    firstHeading.remove()
  }

  const bodyMarkdown = normalizeMarkdown(turndown.turndown(clonedRoot))
  const heading = `# ${title.trim()}`

  if (!bodyMarkdown) return `${heading}\n`
  return `${heading}\n\n${bodyMarkdown}\n`
}

export default function CopyAsMarkdownButton({ title, sourceSelector }: CopyAsMarkdownButtonProps) {
  const [status, setStatus] = useState<CopyStatus>('idle')
  const resetTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current)
      }
    }
  }, [])

  const turndown = useMemo(() => {
    const service = new TurndownService({
      headingStyle: 'atx',
      bulletListMarker: '-',
      codeBlockStyle: 'fenced',
      emDelimiter: '_',
    })

    service.use(gfm)

    service.addRule('linksAsText', {
      filter: 'a',
      replacement: (content) => content,
    })

    service.addRule('imageAsMarkdown', {
      filter: 'img',
      replacement: (_content, node) => {
        if (!(node instanceof HTMLImageElement)) return ''

        const alt = (node.getAttribute('alt') ?? '').trim()
        const rawSrc = node.getAttribute('src')

        if (!rawSrc) return alt

        const src = (() => {
          try {
            return new URL(rawSrc, window.location.href).toString()
          } catch {
            return rawSrc
          }
        })()

        return `![${alt}](${src})`
      },
    })

    return service
  }, [])

  const handleCopy = useCallback(async () => {
    if (!title.trim()) return
    if (status === 'copying') return

    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current)
      resetTimerRef.current = null
    }

    const source = document.querySelector(sourceSelector)
    if (!(source instanceof HTMLElement)) {
      setStatus('error')
      resetTimerRef.current = window.setTimeout(() => setStatus('idle'), 2000)
      return
    }

    setStatus('copying')
    try {
      const markdown = getMarkdownFromHtml(title, source, turndown)
      await copyTextToClipboard(markdown)
      setStatus('copied')
      resetTimerRef.current = window.setTimeout(() => setStatus('idle'), 2000)
    } catch {
      setStatus('error')
      resetTimerRef.current = window.setTimeout(() => setStatus('idle'), 2500)
    }
  }, [sourceSelector, status, title, turndown])

  const label =
    status === 'copied'
      ? 'コピーしました！'
      : status === 'error'
        ? 'コピーに失敗しました'
        : status === 'copying'
          ? 'コピー中...'
          : '記事をコピー'

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur transition hover:bg-white hover:text-gray-900 hover:shadow sm:w-auto"
      aria-label="記事本文をマークダウンでコピー"
      data-copy-exclude
    >
      {status === 'copied' ? (
        <Check className="h-4 w-4 text-will-primary" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4 text-gray-500 transition group-hover:text-gray-700" aria-hidden="true" />
      )}
      <span aria-live="polite">{label}</span>
    </button>
  )
}
