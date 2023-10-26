'use client'
import {useState} from 'react'

export default function HaveQualification() {
    const qualifications = [
        ["教育",['日本語検定', '漢字検定', '歴史能力検定', '美術検定', '世界遺産検定', '実用理科技能検定', '天文宇宙検定', 'コミュニケーション認定資格']],
        ["美容",['骨格診断アドバイザー検定', '日本化粧品検定', '繊維テキスタイル認定資格', 'ファッションビジネス能力検定', 'ファッション販売能力検定']],
    ]
    const [show, setShow] = useState(false)
    const [select, setSelect] = useState([]);

    function disp(e) {
        const get = e.target.name
        const checkarr = [...select]
        const found = checkarr.some((e) => e.includes(get));
        if(!found) {
            setSelect([...select, get])
        } else if(found) {
            const filteredArr = checkarr.filter((e) => e !== get);
            setSelect(filteredArr)
        }
    }
    console.log(select.length);

    return (
        <div className="flex flex-row gap-10 items-center">
            <div className="w-[226.4px]">
                <div className="flex flex-col gap-2">
                    <span className="text-black font-bold">所有資格</span>
                    <div className="relative w-full">
                        <div className="absolute top-2 left-44 flex items-center pl-3.5 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>
                        </div>
                        {select.length!==0 ? (
                            <div className="bg-[#f5f5f5] outline-none px-3 py-2 rounded-[10px] focus:outline-amber-500 appearance-none font-semibold text-black w-full" onClick={() => setShow(!show)}>資格選択済み</div>
                        ) : (
                            <div className="bg-[#f5f5f5] outline-none px-3 py-2 rounded-[10px] focus:outline-amber-500 appearance-none font-semibold text-black w-full" onClick={() => setShow(!show)}>----------</div>
                        )}
                        {show && (
                            <div className="absolute px-3 py-2 bg-[#f5f5f5] mt-2 rounded-[10px] duration-500 ease-in">
                                {qualifications.map((qua, index) => {
                                    return (
                                        <ul key={index}>
                                            <li className="font-bold">{qua[0]}</li>
                                            <ul>
                                                {qua[1].map((val, j) => {
                                                    return (
                                                        <li key={j} className="mb-1"><input type="checkbox" name={val} id={`${index}-${j}`} onChange={disp} /><label htmlFor={`${index}-${j}`}>{val}</label></li>
                                                    );
                                                })}
                                            </ul>
                                        </ul>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {select.length!==0 ? (
                <div>
                    {...select.map((s, i) => {
                        return (
                            <span key={i} className="text-gray-400 font-bold">{s}　</span>
                        )
                    })}
                </div>
            ) : (
                <div>
                        <span className="text-gray-400 font-bold">選択している資格はございません。</span>
                </div>
            )}
        </div>
    );
};
