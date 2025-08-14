import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rebooters — あなたの物語を、AIは待っている',
  description: 'Webtoon的演出と内声の体験で、AI時代の自分の物語へ。無料説明会から小さく再起動を。',
  openGraph: {
    title: 'Rebooters — あなたの物語を、AIは待っている',
    description: 'Webtoon的演出と内声の体験で、AI時代の自分の物語へ。無料説明会から小さく再起動を。',
    type: 'website',
    images: [
      {
        url: '/images/ogp/rebooters-ogp.jpg',
        width: 1200,
        height: 630,
        alt: 'Rebooters | あなたの物語を、AIは待っている',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rebooters — あなたの物語を、AIは待っている',
    description: 'Webtoon的演出と内声の体験で、AI時代の自分の物語へ。',
    images: ['/images/ogp/rebooters-ogp.jpg'],
  },
}

export default metadata
