import { Metadata } from 'next'
import Seminar0828Page from './Seminar0828Page'

export const metadata: Metadata = {
  title: 'AI革命時代のキャリアハック術 - 100日間でAI下剋上する方法',
  description: '2025年8月28日(木) 20:00-21:00開催。生成AIを使いこなすための「思考OS」を伝える無料オンラインセミナー。',
  openGraph: {
    title: 'AI革命時代のキャリアハック術 - 100日間でAI下剋上する方法',
    description: '生成AIを使いこなすための「思考OS」を伝える無料オンラインセミナー',
    images: ['/lp/seminar0828/naruse.webp'],
  },
}

export default function Page() {
  return <Seminar0828Page />
}