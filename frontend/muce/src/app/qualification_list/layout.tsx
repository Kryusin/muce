import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'MUCE | 資格一覧',
}

export default function QualificationListLayout({
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
