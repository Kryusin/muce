import Image from "next/image"// Next/imageのインポート

export default function Genre(props: any) {
    return (
        <div className="bg-white mx-48 drop-shadow-lg rounded-lg h-32 cursor-pointer mb-8 gap-4">
            <div className="flex justify-start items-start">
                <div className="flex flex-col justify-center items-center m-5 gap-3">
                    <Image src={props.src} alt="ジャンルアイコン" width={50} height={50} />
                    <p className="font-mono font-semibold text-lg">{props.name}</p>
                </div>
                <div>
                    <p className="font-mono font-medium tracking-wide">{props.contents}</p>
                </div>
            </div>
        </div>
    )
}