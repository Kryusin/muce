export default function SettingField() {
    return (
        <>
            <span className="text-[25px] text-black font-bold">設定</span>
            <div className="relative">
                <div className="absolute top-3 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 fill-[#000000]/30">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>
                <input type="text" className="bg-[#f5f5f5] w-[40%] h-[200%] rounded-[10px] pl-11 focus:outline-amber-500 font-semibold" placeholder="ユーザ名" />
            </div>
        </>
    );
};
