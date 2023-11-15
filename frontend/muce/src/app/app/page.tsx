'use client';
import Image from 'next/image'// NextImageのインポート
import { useState } from "react"
import Home from "@/components/main/mainHome";
import Chat from '@/components/main/mainChat';
import Search from '@/components/main/mainSearch';
import Question from '@/components/main/mainQuestion';
import Setting from '@/components/main/mainSetting';

export default function Index() {

  const [active, setActive] = useState(0)

  return (
    <div className='flex flex-row gap-0'>
      <div className="w-[122px] h-[1024px] fixed left-0 top-0 bg-amber-500 z-20">
        <div className="flex pt-[50px] px-[16px] pb-0 flex-col items-center gap-[50px]">
          {active == 0 ?
            <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px]'>
              <Image src="/personActive.svg" width={40} height={40} alt='home' />
            </div>
            :
            <div className='cursor-pointer' onClick={() => (setActive(0))}>
              <Image src="/person.svg" width={40} height={40} alt='home' />
            </div>
          }
          {active == 1 ?
            <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px]'>
              <Image src="/searchActive.svg" width={40} height={40} alt='chat' />
            </div>
            :
            <div className='cursor-pointer'>
              <Image src="/search.svg" width={40} height={40} alt='chat' onClick={() => setActive(1)} />
            </div>
          }
          {active == 2 ?
            <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px]'>
              <Image src="/chatActive.svg" width={40} height={40} alt='chat' />
            </div>
            :
            <div className='cursor-pointer' onClick={() => (setActive(2))}>
              <Image src="/chat.svg" width={40} height={40} alt='chat' />
            </div>
          }
          {active == 3 ?
            <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px] '>
              <Image src="/bookActive.svg" width={40} height={40} alt='book' />
            </div>
            :
            <div className='cursor-pointer' onClick={() => (setActive(3))}>
              <Image src="/book.svg" width={40} height={40} alt='book' />
            </div>
          }
          {active == 4 ?
            <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px]'>
              <Image src="/settingActive.svg" width={40} height={40} alt='setting' />
            </div>
            :
            <div className="cursor-pointer" onClick={() => (setActive(4))}>
              <Image src="/setting.svg" width={40} height={40} alt='setting' />
            </div>
          }
        </div>
      </div>
      <div className='h-screen'>
        {active == 0 ? (
          <Home />
        ) : active == 1 ? (
          <Search />
        ) : active == 2 ? (
          <Chat />
        ) : active == 3 ? (
          <Question />
        ) : active == 4 && (
          <Setting />
        )}
      </div>
    </div>
  )
}