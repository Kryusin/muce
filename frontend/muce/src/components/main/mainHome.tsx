import AppBar from "@/components/appBar"
import Profile from "@/components/profile"
import ChatHistory from "@/components/chatHistory"

export default function Home() {
    return (
        <div className="relative">
            <div className="relative left-[226px] top-[30px] flex flex-col gap-[76px]">
                <Profile />
                <ChatHistory />
            </div>
        </div>
    )
};