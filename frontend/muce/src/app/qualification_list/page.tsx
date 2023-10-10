import Top from "@/components/top"//トップ画面のインポート
import Genre from "@/components/genre"//ジャンル画面のインポート

export default function Qualification_List() {
    const education = ['〇〇検定', '××検定']
    return (
        <>
            <Top src="/genre.png" />    {/* トップ画面の背景をsrcで変更 */}
            <Genre name="教育" src="/education.svg" contents={education} />
            <Genre name="教育" src="/education.svg" />
        </>
    )
}