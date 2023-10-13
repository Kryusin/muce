'use client'
import Button from '@/components/button'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Modal() {
    const [Inquiry, setInquiry] = useState('');// お問い合わせ内容
    const SwitchModal = () => {
        const modal: any = document.getElementById('modal');
        const inquiry: any = document.getElementById('floatingInputInquiry');
        const mail: any = document.getElementById('floatingInputEmail');


        // 非表示にしたとき内容をリセット
        modal.classList.toggle('hidden');
        inquiry.value = '';
        mail.value = '';
    }
    return (
        <>
            <div id='modal' className="block w-full h-full bg-black/70 absolute top-0 left-0">
                <Link href="#" className="block w-full h-full cursor-default" onClick={() => SwitchModal()} />
                <div className="w-2/5 h5/6 mx-auto mt-6 relative -top-full bg-white font-mono rounded-xl">
                    <div className='flex justify-end items-center pr-6 pt-4'>
                        <Image src={"/Close.svg"} width={40} height={40} alt="Close" className='cursor-pointer' onClick={() => SwitchModal()} />
                    </div>
                    <p className="w-52 mx-auto border-b-4 border-orange-theme font-semibold tracking-wider text-3xl">お問い合わせ</p>
                    <p className="text-center py-7">※入力欄はすべて必須項目です。</p>
                    <div className="flex-row justify-center items-center gap-4">
                        <form action="">
                            <div className="relative mb-9 bg-gray-theme rounded-xl mx-16 border-2 border-gray-500">
                                <input
                                    type="email"
                                    className="peer m-0 block h-[58px] w-full bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-gray-theme-2 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                    id="floatingInputEmail"
                                    placeholder="" />
                                <label
                                    htmlFor="floatingInput"
                                    className="pointer-events-none absolute left-0 top-0 origin-[0_0] px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    <p className='text-gray-theme-2'>メールアドレス</p>
                                </label>
                            </div>
                            <div className="relative mb-9 bg-gray-theme rounded-xl mx-16 border-2 border-gray-500">
                                <textarea
                                    className="peer resize-none m-0 block h-[100px] w-full bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-gray-theme-2 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                    id="floatingInputInquiry"
                                    placeholder=""
                                    onChange={(e: any) => setInquiry(e.target.value)}
                                />
                                <label
                                    htmlFor="floatingInput"
                                    className="pointer-events-none absolute left-0 top-0 origin-[0_0] px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                    <p className='text-gray-theme-2'>お問い合わせ内容</p>
                                </label>
                            </div>
                            <div className="px-16 pb-12">
                                <Button props={"送信"} type="orange" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}