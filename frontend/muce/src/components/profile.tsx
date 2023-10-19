import Image from "next/image"
import NameProfile from "./nameProfile"
import StudyNow from "./studyNow"
import ScrollQualifications from "./scrollQualifications"

export default function Profile(props:any) {
    const Oq = ["基本情報技術者試験", "MOS・Word", "マーケティング検定", "TOEIC", "メンタルヘルス・マネジメント(R)検定試験", "名探偵コナン検定"]
    return (
        <div className="w-[1120px] bg-white flex p-[40px] flex-col justify-center items-start gap-[43px] shadow-[0_0_20px_0_rgba(0,0,0,0.3)] rounded-[20px]">
            <div className="flex w-[1021px] items-center gap-[300px]">
                <NameProfile name="高本龍信" />
                <StudyNow sn="基本情報技術者試験" />
            </div>
            <div className="inline-flex flex-col justify-center items-start gap-2">
                <span className="text-black text-[20px] font-bold font-['Yu Gothic UI']">所有資格</span>
                <ScrollQualifications arr={Oq} />
            </div>
        </div>
    )
};
