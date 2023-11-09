'use client'

import Link from 'next/link'// NextLinkのインポート
import Image from 'next/image'// NextImageのインポート
import Modal from '@/components/modal'// モーダルのインポート

export default function Navi() {
    const SwitchModal = () => {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.toggle('hidden');
        }
    }
    return (
        <>
            <div className='flex justify-between mx-4'>
                {/* ロゴ */}
                <Link href="/production">
                    <Image src="/muceLogo.svg" alt='logo' width={140} height={40} className='bg-white drop-shadow-lg rounded-lg mt-5 cursor-pointer' />
                </Link>
                <div className='flex justify-end items-center bg-white drop-shadow-lg rounded-lg mt-5 gap-7 px-4 text-gray-theme font-medium'>
                    <div className="flex justify-center items-center gap-1 cursor-pointer">
                        <Link href={"/production/qualification_list"}>
                            <p className='hover:text-orange-theme duration-300'>資格一覧</p>
                        </Link>
                        <Image src="/Hat.svg" alt="hatIcon" width={20} height={20} />
                    </div>
                    <div className="flex justify-center items-center gap-1 cursor-pointer">
                        <p className='hover:text-orange-theme duration-300' onClick={() => SwitchModal()}>お問い合わせ</p>
                        <Image src="/Inquiry.svg" alt="inquiryIcon" width={20} height={20} />
                    </div>
                    <div className="flex justify-center items-center gap-1 cursor-pointer">
                        <Link href={"/production/login"}>
                            <p className='hover:text-orange-theme duration-300'>ログイン</p>
                        </Link>
                        <Image src="/User.svg" alt="userIcon" width={20} height={20} />
                    </div>
                </div>
            </div>
            <div id="modal" className='hidden'>
                <Modal />
            </div>
        </>
    )
}