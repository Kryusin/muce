import Image from 'next/image'// Next/imageのインポート

export default function Loading() {
    return (
        <div className='w-full h-full flex items-center justify-center absolute bg-white animate-fade-out'>
            <Image src="/muceLogo.svg" alt="logo" width={220} height={220} />
        </div>
    )
}