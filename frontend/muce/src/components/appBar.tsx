"use client"

import Image from 'next/image'
import {useState, useEffect} from "react"
import Link from "next/link"

export default function appBar() {

    const [active, setActive] = useState(0)

    useEffect(() => {
        const storedActive = localStorage.getItem('active');
        if (storedActive) {
            setActive(Number(storedActive));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('active', active.toString());
    }, [active]);

    return (
        <div className="w-[122px] h-[1024px] fixed left-0 top-0 bg-amber-500">
            <div className="flex pt-[50px] px-[16px] pb-0 flex-col items-center gap-[50px]">
                {active==0 ?
                    <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px]'>
                        <Image src="/personActive.svg" width={40} height={40} alt='home' />
                    </div>
                    :
                    <Link href="/home">
                        <Image src="/person.svg" width={40} height={40} alt='home' onClick={() => setActive(0)}/>
                    </Link>
                }
                {active==1 ?
                    <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px]'>
                        <Image src="/chatActive.svg" width={40} height={40} alt='chat' />
                    </div>
                    :
                    <Link href="/chat">
                        <Image src="/chat.svg" width={40} height={40} alt='chat' onClick={() => setActive(1)} />
                    </Link>
                }
                {active==2 ?
                    <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px] '>
                        <Image src="/bookActive.svg" width={40} height={40} alt='book' />
                    </div>
                    :
                    <Link href="/question">
                        <Image src="/book.svg" width={40} height={40} alt='book' onClick={() => setActive(2)} />
                    </Link>
                }
                {active==3 ?
                    <div className='flex w-[90px] h-[90px] p-[25px] justify-center items-center bg-white rounded-[30px]'>
                        <Image src="/settingActive.svg" width={40} height={40} alt='setting' />
                    </div>
                    :
                    <Link href="/setting">
                        <Image src="/setting.svg" width={40} height={40} alt='setting' onClick={() => setActive(3)} />
                    </Link>
                }
            </div>
        </div>
    )
};
