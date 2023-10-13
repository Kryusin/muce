import Image from "next/image";

export default function Circle(props: any) {
    return (
        <div className='flex-col justify-center items-center'>
            <div className='flex justify-center items-center w-52 h-52 rounded-full bg-orange-theme mb-5'>
                <Image src={props.src} alt={"Circle"} width={props.width} height={props.height} />
            </div>
            <p className="font-medium">{props.description}</p>
        </div>
    )
}