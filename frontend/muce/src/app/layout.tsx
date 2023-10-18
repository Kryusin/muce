import './globals.css'
import type { Metadata } from 'next'
import Loading from '@/components/loading'// ローディング画面のインポート
import { initializeFirebaseApp } from '@/firebase/client'
initializeFirebaseApp()

export const metadata: Metadata = {
  title: 'MUCE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Loading />
        {children}
      </body>
    </html>
  )
}
