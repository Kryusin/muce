'use client'
import AppBar from "@/components/appBar"
import ChatUI from "@/components/chat"
import { useState } from "react"

export default function Chat() {
    const [tab, setTab] = useState([true, false])
    const changetab = (e: any) => {
        if (e.target.innerHTML == '個人') {
            setTab([true, false])
        } else if (e.target.innerHTML == '資格グループ') {
            setTab([false, true])
        }
    }
    return (
        <div>
            <AppBar />
            <div className="flex justify-center items-center h-10 bg-gray-300 font-mono font-medium rounded drop-shadow-lg text-gray-800 ml-[170px] mr-[50px] mt-[30px] mb-[20px] text-lg">
                {tab[0]
                    ?//個人ON
                    <div className="cursor-pointer bg-orange-theme w-1/2 rounded-xl text-center text-white ml-10 mr-2" onClick={(e) => changetab(e)}>
                        個人
                    </div>
                    ://個人OFF
                    <div className="cursor-pointer w-1/2 rounded-xl text-center ml-10 mr-2" onClick={(e) => changetab(e)}>
                        個人
                    </div>
                }
                {tab[1]
                    ?//資格グループON
                    <div className="cursor-pointer bg-orange-theme w-1/2 rounded-xl text-center text-white mr-10 ml-2" onClick={(e) => changetab(e)}>
                        資格グループ
                    </div>
                    ://資格グループOFF
                    <div className="cursor-pointer w-1/2 rounded-xl text-center mr-10 ml-2 off" onClick={(e) => changetab(e)}>
                        資格グループ
                    </div>
                }
            </div>
            <div className="flex-col overflow-y-auto h-screen hide-scroll-bar">
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
                <ChatUI name="勝田" src="/User.svg" message="Auto Gun Herosせん？笑笑" time="2分" />
            </div>
        </div>
    )
}