import Image from 'next/image'// Next/imageのインポート
import Link from "next/link";//Linkコンポーネントのインポート
import Button from '@/components/button'// ボタンコンポーネントのインポート

export default function Account(props: any) {
    let offer;
    if (props.props === '新規登録') {
        offer = <p className='text-center text-gray-theme-2'>アカウントをお持ちの方は<Link href="/login" className='text-blue-theme'>こちら</Link></p>
    } else if (props.props === 'ログイン') {
        offer = <p className='text-center text-gray-theme-2'>アカウントをお持ちでない方は<Link href="/signup" className='text-blue-theme'>こちら</Link></p>
    }
    return (
        <>
            <div className="drop-shadow-2xl bg-white w-1/3 h-4/5 rounded-4xl mx-auto mt-16 px-12">
                <Link href="/">
                    <Image src="/muceLogo.svg" alt='logo' width={140} height={40} className='bg-white mx-auto py-8' />
                </Link>
                <form>
                    {/* メールアドレス */}
                    <div className="relative mb-9 bg-gray-theme rounded-xl">
                        <input
                            type="email"
                            className="peer m-0 block h-[58px] w-full bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-gray-theme-2 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                            id="floatingInput"
                            placeholder="" />
                        <label
                            htmlFor="floatingInput"
                            className="pointer-events-none absolute left-0 top-0 origin-[0_0] px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                            <div className='flex gap-5'>
                                <Image src={"/mail.svg"} width={20} height={20} alt="Mail" />
                                <p className='text-gray-theme-2'>メールアドレス</p>
                            </div>
                        </label>
                    </div>
                    {/* パスワード */}
                    <div className="relative mb-9 bg-gray-theme rounded-xl">
                        <input
                            type="password"
                            className="peer m-0 block h-[58px] w-full bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-gray-theme-2 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-gray-theme-2 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                            id="floatingInput"
                            placeholder="" />
                        <label
                            htmlFor="floatingInput"
                            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                            <div className='flex gap-5'>
                                <Image src={"/pass.svg"} width={20} height={20} alt="Pass" />
                                <p className='text-gray-theme-2'>パスワード</p>
                            </div>
                        </label>
                    </div>
                    <div className="mb-7">
                        {/* 新規登録・ログインするボタン */}
                        <Button props={props.props} />
                    </div>
                </form>
                {/* 新規登録・ログインを促す文言 */}
                {offer}
            </div>
        </>
    )
}