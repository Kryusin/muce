import Image from "next/image"

export default function NameProfile(props:any) {
    return (
        <div className="flex items-center gap-[80px]">
            <div className="w-[100px] h-[100px] rounded-[30px] opacity-50 bg-[#000]/20"></div>
            <div className="flex items-center gap-[16px]">
                <span className="text-black font-['Inter'] font-bold text-[30px]">{props.name}</span>
                <Image width={35} height={35} src="./edit.svg" alt="edit" />
            </div>
        </div>
    )
};
