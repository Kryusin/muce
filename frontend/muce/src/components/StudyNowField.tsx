export default function StudyNowField() {
    const education = ['日本語検定', '漢字検定', '歴史能力検定', '美術検定', '世界遺産検定', '実用理科技能検定', '天文宇宙検定', 'コミュニケーション認定資格']
    const beauty = ['骨格診断アドバイザー検定', '日本化粧品検定', '繊維テキスタイル認定資格', 'ファッションビジネス能力検定', 'ファッション販売能力検定']
    return (
        <div className="flex flex-col gap-2">
            <span className="text-black font-bold">学習中の資格</span>
            <div className="relative">
                <div className="absolute top-2 left-44 flex items-center pl-3.5 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                </div>
                <select name="qualification" className="bg-[#f5f5f5] outline-none px-3 py-2 rounded-[10px] focus:outline-amber-500 appearance-none font-semibold text-black w-[21.77%]">
                    <optgroup label="教育">
                        {
                            education.map(function (val) {
                                return (
                                    <option value="" key={val}>{val}</option>
                                );
                            })
                        }
                    </optgroup>
                    <optgroup label="美容">
                        {
                            beauty.map(function (val) {
                                return (
                                    <option value="" key={val}>{val}</option>
                                );
                            })
                        }
                    </optgroup>
                </select>
            </div>
        </div>
    );
};
