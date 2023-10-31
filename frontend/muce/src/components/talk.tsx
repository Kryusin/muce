import Image from 'next/image'

export default function Talk(props: any) {
    return (
        <>
            {props.type == 'my' ?
                <div className="flex justify-end items-center gap-2 h-16">
                    <div className='flex-col text-xs font-semibold'>
                        <p>{props.time}</p>
                    </div>
                    <div className="flex-col justify-center items-center pr-5">
                        <p className='bg-orange-theme rounded-3xl p-3 text-white'>{props.message}</p>
                    </div>
                </div>
                :
                <div className="flex justify-start items-center gap-5 h-16">
                    <Image src={props.icon} width={80} height={80} alt="ユーザーアイコン" className='rounded-xl drop-shadow-md bg-white aspect-square' />
                    <div className="flex-col justify-center items-center">
                        <p className='bg-black-theme rounded-3xl p-3 text-white'>{props.message}</p>
                    </div>
                    <div className='flex-col text-xs font-semibold'>
                        <p>{props.time}</p>
                    </div>
                </div>
            }
        </>
    )
}