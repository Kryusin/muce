import AppBar from "@/components/appBar"
import Judgement from "@/components/Judgement"

export default function Judgment() {
    return (
        <div>
            <AppBar />
            <div className="relative left-[226px] top-[30px] flex flex-col gap-[76px]">
                <Judgement color={1} />
            </div>
        </div>
    )
}
