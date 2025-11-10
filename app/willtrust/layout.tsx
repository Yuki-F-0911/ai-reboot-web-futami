import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ウィルトラストAIリブート研修 振り返りページ',
  description: '生成AI活用力研修 振り返りページ',
}

export default function WilltrustLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link rel="stylesheet" href="/willtrust/styles.css" />
      {children}
    </>
  )
}