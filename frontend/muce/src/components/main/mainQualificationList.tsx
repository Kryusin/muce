import Genre from "@/components/genre"//ジャンル画面のインポート
import Image from "next/image"// Next/imageのインポート
import Nav from "@/components/nav"

export default function Qualification_List() {
    const education = ['日本語検定', '漢字検定', '歴史能力検定', '美術検定', '世界遺産検定', '実用理科技能検定', '天文宇宙検定', 'コミュニケーション認定資格']
    return (
        <>
            <Nav />
            <div className="mx-44">
                <div className="flex justify-center items-center pt-10">
                    <p className="border-b-4 border-orange-theme text-4xl font-mono font-bold mx-auto">ジャンル</p>
                </div>
                <form className="w-full pr-5 flex items-end justify-end">
                    <div className="flex items-center border-b border-black py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="検索" aria-label="Full name" />
                        <button className="flex-shrink-0" type="button">
                            <Image src="/Search.svg" width={30} height={30} alt="Search"></Image>
                        </button>
                    </div>
                </form>
                <Genre name="教育" contents={education} />
                <Genre name="教育" contents={education} />
            </div>
        </>
    )
}