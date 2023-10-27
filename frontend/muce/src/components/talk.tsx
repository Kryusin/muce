import Image from 'next/image'

export default function Talk(props: any) {
    return (
        <>
            {props.type == 'my' ?
                <div className="flex justify-end items-center gap-2 h-16">
                    <div className='flex-col text-xs font-semibold'>
                        <p>既読</p>
                        <p>12:32</p>
                    </div>
                    <div className="flex-col justify-center items-center pr-5">
                        <p className='bg-orange-theme rounded-3xl p-3 text-white'>こんにちは</p>
                    </div>
                </div>
                :
                <div className="flex justify-start items-center gap-5 h-16">
                    <Image src="/Top.png" width={80} height={80} alt="ユーザーアイコン" className='rounded-xl drop-shadow-md bg-white aspect-square' />
                    <div className="flex-col justify-center items-center">
                        <p className='bg-black-theme rounded-3xl p-3 text-white'>こんにちは</p>
                    </div>
                </div>
            }
        </>
    )
}