'use client'

export default function Chat() {
    const changetab = (e: any) => {
        console.log("changetab")
        e.target.classList.add("bg-orange-theme")
        e.target.classList.remove("bg-gray-300")
        e.target.classList.add("text-white")
        e.target.classList.remove("text-gray-800")
        e.target.classList.add("on")
        e.target.classList.remove("off")
        console.log(e.target.innerHTML)
    }
    return (
        <div>
            <div className="flex justify-center items-center h-10 bg-gray-300 font-mono font-medium rounded drop-shadow-lg text-gray-800 m-10 text-lg">
                <div className="cursor-pointer bg-orange-theme w-1/2 rounded-xl text-center text-white ml-10 mr-2 on" onClick={(e) => changetab(e)}>
                    個人
                </div>
                <div className="cursor-pointer w-1/2 rounded-xl text-center mr-10 ml-2 off" onClick={(e) => changetab(e)}>
                    資格グループ
                </div>
            </div>
        </div>
    )
}