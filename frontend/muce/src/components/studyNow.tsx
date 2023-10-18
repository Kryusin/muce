export default function StudyNow(props:any) {
    return (
        <div className="flex flex-col justify-center items-center gap-[20px] text-center">
            <span className="w-[151px] text-black align-center font-['Inter'] text-[15px] font-bold not-italic">学習中の資格</span>
            <div className="py-2.5 px-[30px] justify-center items-center gap-2 bg-blue-600 rounded-[30px] border-2 border-blue-600 inline-flex">
                <span className="text-white font-['Murecho'] font-bold text-[20px]">{props.sn}</span>
            </div>
        </div>
    )
};
