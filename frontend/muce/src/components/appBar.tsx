"use client"

import Image from 'next/image'
import {useState} from "react"

export default function appBar() {

    const [active, setActive] = useState(0)

    const handleClick = (click:any) => {
        setActive(click)
    }
    return (
        <div className="w-[122px] h-[1024px] fixed left-0 top-0 bg-amber-500">
            <div className="flex pt-[50px] px-[16px] pb-0 flex-col items-center gap-[50px]">
                {active==0 ? 
                    <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px]'>
                        <Image src="/personActive.svg" width={40} height={40} alt='home' />
                    </div>
                    :
                    <Image src="/person.svg" width={40} height={40} alt='home' onClick={() => handleClick(0)}/>
                }
                {active==1 ?
                    <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px]'>
                        <Image src="/chatActive.svg" width={40} height={40} alt='chat' />
                    </div>
                    :
                    <Image src="/chat.svg" width={40} height={40} alt='chat' onClick={() => handleClick(1)} />
                }
                {active==2 ?
                    <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px] '>
                        <Image src="/bookActive.svg" width={40} height={40} alt='book' />
                    </div>
                    :
                    <Image src="/book.svg" width={40} height={40} alt='book' onClick={() => handleClick(2)} />
                }
                {active==3 ?
                    <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px]'>
                        <Image src="/settingActive.svg" width={40} height={40} alt='setting' />
                    </div>
                    :
                    <Image src="/setting.svg" width={40} height={40} alt='setting' onClick={() => handleClick(3)} />
                }
            </div>
        </div>
    )
};
