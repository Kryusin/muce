import Image from 'next/image'// NextImageのインポート
import Nav from '@/components/nav'// ナビゲーションのインポート

export default function Top(props: any) {
    return (
        <div>
            {/* 背景画像 */}
            <div>
                <Image src={props.src} alt="TopImage" layout='fill' objectFit='contain' className='w-full h-screen z-[-1] absolute' />
            </div>
            {/* メニュー */}
            <Nav />
        </div>
    )
}