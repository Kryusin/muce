import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'MUCE | ログイン',
}

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // スクロースできないようにfixedにしている
        <div className='w-full h-full fixed'>
            {children}
        </div>
    )
}
