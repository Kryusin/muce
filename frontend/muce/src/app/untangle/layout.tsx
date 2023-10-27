import '../globals.css'
import type { Metadata } from 'next'
import Loading from '@/components/loading'// ローディング画面のインポート

export const metadata: Metadata = {
    title: 'MUCE | 問題を解く',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}
