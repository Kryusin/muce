export default function chooseQua(props:any) {

    return (
        <div>
            <form className="flex w-[1121px] p-[40px] flex-col items-start gap-[70px]  rounded-[20px] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.3)] relative left-[226px] top-[30px]">
                <div className="flex flex-col items-start gap-[30px]">
                    <span className="text-gray-500 text-[25px] not-italic font-bold">問題を作成する資格を選択してください。</span>
                    <select className="border-2 border-solid border-[#227DEE] rounded-[10px] px-[20px] text-[20px] font-bold">
                        <option value="">基本情報技術者試験</option>
                    </select>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col items-start gap-[30px]">
                        <span className="text-gray-500 text-[25px] not-italic font-bold">難易度を選択してください。</span>
                        <div className="flex flex-row justify-center gap-[20px] font-bold">
                            <input type="radio" value="0" className="radiobutton input-radio" id="0" name="difficult" />
                            <label htmlFor="0" className="btn-label">簡単</label>
                            <input type="radio" value="1" className="radiobutton input-radio" id="1" name="difficult" />
                            <label htmlFor="1" className="btn-label">普通</label>
                            <input type="radio" value="2" className="radiobutton input-radio" id="2" name="difficult" />
                            <label htmlFor="2" className="btn-label">難しい</label>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col items-end gap-[8px]">
                    <a href="/app/untangle" className="px-[40px] py-[15px] text-center rounded-[20px] bg-[#227DEE] text-white text-[20px] font-bold">作成</a>
                </div>
            </form>
        </div>
    )
};
