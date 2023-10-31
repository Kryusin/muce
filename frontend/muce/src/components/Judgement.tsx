'use client';
import {useEffect, useState} from 'react';
import Image from 'next/image';

export default function Judgement(props:any) {
    const color = props.color
    const questions = [
        {
            "q": "コンピューターの基本的な構成要素として、主記憶装置の他に何が挙げられるか。",
            "options": ["a. CPU", "b. マザーボード", "c. キーボード", "d. マウス"],
            "answer": "a. CPU"
        },
        {
            "q": "コンピューターウイルスに感染しないための対策として適切なものはどれか。",
            "options": ["a. インターネットを利用しない", "b. ウイルス対策ソフトの定期的な更新", "c. パスワードを短く設定する", "d. ハードディスクを定期的にフォーマットする"],
            "answer": "b. ウイルス対策ソフトの定期的な更新"
        },
        {
            "q": "TCP/IPモデルにおける最上位の層はどれか。",
            "options": ["a. ネットワーク層", "b. リンク層", "c. アプリケーション層", "d. トランスポート層"],
            "answer": "c. アプリケーション層"
        },
        {
            "q": "情報セキュリティにおける「セキュリティポリシー」とは何か。",
            "options": ["a. ウイルス対策ソフトの定められた利用ルール", "b. 企業内での情報セキュリティの方針や目標", "c. セキュリティカメラの設置に関する規定", "d. インターネット利用規約の一部"],
            "answer": "b. 企業内での情報セキュリティの方針や目標"
        },
        {
            "q": "データベースにおける「DBMS」とは何か。",
            "options": ["a. データベースマネジメントシステム", "b. データベース管理ソフトウェア", "c. データバックアップの手法", "d. データベースのモデル構築システム"],
            "answer": "a. データベースマネジメントシステム"
        },
        {
            "q": "プログラムの開発工程の中で、テストを行う工程はどれか。",
            "options": ["a. 設計", "b. 実装", "c. 運用", "d. テスト"],
            "answer": "d. テスト"
        },
        {
            "q": "LANとは何の略か。",
            "options": ["a. Local Address Network", "b. Large Area Network", "c. Local Area Network", "d. Limited Access Network"],
            "answer": "c. Local Area Network"
        },
        {
            "q": "パケット交換方式において、ネットワーク上をパケットが自由に動き回るように制御する役割を持つものは何か。",
            "options": ["a. ルーター", "b. ハブ", "c. スイッチ", "d. ブリッジ"],
            "answer": "a. ルーター"
        },
        {
            "q": "プログラムの文法や処理規則に誤りがないかをチェックする作業を何というか。",
            "options": ["a. テスト", "b. デバッグ", "c. コンパイル", "d. インストール"],
            "answer": "b. デバッグ"
        },
        {
            "q": "コンピューターシステムにおいて、計算機の構成やプログラムの解釈を行う基本ソフトウェアを何というか。",
            "options": ["a. アプリケーションソフトウェア", "b. システムソフトウェア", "c. ユーティリティソフトウェア", "d. ミドルウェア"],
            "answer": "b. システムソフトウェア"
        }
    ];

    const my_ans = ['a', 'c', 'b', 'b', 'd', 'a', 'c', 'd', 'b', 'a'];

    const [questionList, setQuestionList] = useState(questions.map((item) => item.q));
    const ans = questions.map((item) => item.answer.charAt(0));
    const result = my_ans.map((a, i) => ans[i] == a ? 0 : 1);
    const count = result.filter((res) => res === 0).length;

    console.log(result);
    console.log(`correct: ${count}`)
    
    useEffect(() => {
        const ans_bar = document.getElementById('ans-bar');
        ans_bar.style.width = `${count*10}%`
        const percent = document.getElementById('percent');
        percent.innerHTML = `${count*10}%`;
    }, [count])

    return (
        <div className="w-[1120px] flex p-[40px] flex-col justify-center items-start gap-[20px] shadow-[0_0_20px_0_rgba(0,0,0,0.3)] rounded-[20px]">
            <div className="w-full flex justify-center">
                <span className="font-bold text-[24px]">あなたの正答率は<span className='text-[32px] text-amber-500 mx-[20px]' id="percent"></span>です。</span>
            </div>
            <div className="w-full h-[50px] bg-gray-200 rounded-[50px] relative">
                <div id="ans-bar" className='absolute h-full bg-amber-500 rounded-[50px]'>
                </div>
            </div>
            <div className='w-full text-center'>
                <span className='font-bold text-[25px]'>解答</span>
            </div>
                {questions.map((ques,i) => (
                    !result[i] ? (
                        <div key={i} className="w-full flex flex-col p-[40px] bg-[#31ED5A]/30 rounded-[20px] justify-center items-center gap-[20px]">
                            <div className="w-full flex flex-col gap-[20px]">
                                <div className="flex justify-center">
                                    <Image src="/clear.svg" alt='clear' width={68} height={68} />
                                </div>
                                <span className='font-bold text-[25px]'>Q{i+1}: {ques["q"]}</span>
                            </div>
                            <div className="w-full flex justify-center">
                                <span className="font-bold text-[25px]">あなたの回答　{my_ans[i]}</span>
                            </div>
                            <div className="w-full flex justify-center">
                                <span className='font-bold text-[25px]'>正解</span>
                                <span className='font-bold text-[25px]'>{ques["answer"]}</span>
                            </div>
                        </div>
                    ) : (
                            <div key={i} className="w-full flex flex-col p-[40px] bg-[#EC0C0C]/30 rounded-[20px] justify-center items-center gap-[20px]">
                                <div className="w-full flex flex-col gap-[20px]">
                                    <div className="flex justify-center">
                                        <Image src="/unclear.svg" alt="unclear" width={68} height={68} />
                                    </div>
                                    <span className='font-bold text-[25px]'>Q{i + 1}: {ques["q"]}</span>
                                </div>
                                <div className="w-full flex justify-center">
                                    <span className="font-bold text-[25px]">あなたの回答　{my_ans[i]}</span>
                                </div>
                                <div className="w-full flex justify-center">
                                    <span className='font-bold text-[25px]'>正解</span>
                                    <span className='font-bold text-[25px]'>{ques["answer"]}</span>
                                </div>
                            </div>
                    )
                ))}
        </div>
    );
};
