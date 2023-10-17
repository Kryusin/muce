import '../globals.css'
import type { Metadata } from 'next'
import Loading from '@/components/loading'// ローディング画面のインポート

export const metadata: Metadata = {
    title: 'MUCE | チャット',
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
