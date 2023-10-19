export default function ChatHistory(props:any) {
    const people = ["勝田", "御明","近藤", "中川", "平井"]
    return (
        <div className="w-[1120px] bg-white flex p-[40px] flex-col justify-center items-center gap-[43px] shadow-[0_0_20px_0_rgba(0,0,0,0.3)] rounded-[20px]">
            <span>会話履歴</span>
            <div className="flex w-[1021px] justify-center items-center gap-[70px]">
                {people.map(person => {
                    return (
                        <div key={person} className="flex flex-col gap-2 text-center">
                            <div className="w-[100px] h-[100px] bg-[#000]/20 rounded-[20px] opacity-50"></div>
                            <span className="text-black text-[16px] font-bold font-['Yu Gothic UI']">{person}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
