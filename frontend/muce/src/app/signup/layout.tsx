import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'MUCE | アカウント作成',
}

export default function SignupLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // スクロースできないようにfixedにしている
        <div className='w-full h-screen fixed'>
            {children}
        </div>
    )
}
