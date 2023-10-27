'use client'

import Image from 'next/image'
import Talk from '@/components/talk'
import AppBar from '@/components/appBar'
import { useEffect } from 'react'

export default function Chat(props: any) {
    const scroll = () => {
        const chatElement: any = document.querySelector('#chatElement')
        chatElement.scrollTo(0, chatElement.scrollHeight)
    }
    useEffect(() => {
        scroll()
    }, [])
    return (
        <>
            <AppBar />
            <div className="flex-row px-44 w-screen h-screen justify-end items-center fixed">
                <div className='h-12 flex items-center'>
                    <p className='text-lg font-bold'>勝田紳太郎</p>
                </div>
                <div className='h-3/4 overflow-y-auto hide-scroll-bar' id='chatElement'>
                    <Talk type="your" />
                    <Talk type="your" />
                    <Talk type="your" />
                    <Talk type="your" />
                    <Talk type="your" />
                    <Talk type="your" />
                    <Talk type="your" />
                    <Talk type="your" />
                    <Talk type="my" />
                    <Talk type="my" />
                    <Talk type="my" />
                    <Talk type="my" />
                    <Talk type="my" />
                    <Talk type="my" />
                    <Talk type="my" />
                    <Talk type="my" />
                </div>
                <div className="w-full px-32 py-5 ml-10">
                    <div className="relative h-12 w-full min-w-[200px]">
                        <div className="z-10 absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                            <Image src={"/Send.svg"} width={20} height={20} alt="送信アイコン" className='cursor-pointer' />
                        </div>
                        <input
                            className="z-20 peer drop-shadow-xl bg-white h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder="メッセージ"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}