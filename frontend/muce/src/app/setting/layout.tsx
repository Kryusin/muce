import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'MUCE | ホーム',
}

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='w-full h-full'>
            {children}
        </div>
    )
}
