import Image from "next/image"

export default function Chat(props: any) {
    return (
        <div className="flex justify-start items-center drop-shadow-2xl h-[110px] bg-white rounded-lg ml-[170px] mr-[50px] mt-[10px]">
            <Image src={props.src} width={80} height={80} alt="User" className="p-2 mx-10" />
            <div className="flex-col mr-52">
                <p className="text-lg font-semibold mb-2">{props.name}</p>
                <p className="text-sm mt-2">{props.message}</p>
            </div>
            <p className="ml-auto mx-10">{props.time}前</p>
        </div>
    )
}