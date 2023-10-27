export default function problem() {
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

    return (
        <div className="relative left-[226px] top-[30px] flex flex-col gap-[76px] w-[1120px] bg-white p-[40px] shadow-[0_0_20px_0_rgba(0,0,0,0.3)] rounded-[20px]">
            <div className="w-full text-center">
                <span className="border-b-4 border-solid border-[#EE9322] font-bold text-[30px]">問題</span>
            </div>
            <div className="flex flex-col gap-[50px] w-full">
                {questions ? (
                    questions.map((que, i) => (
                        <div key={i} className="flex flex-col gap-[50px] w-full">
                            <span className="font-bold text-[20px]">Q{i + 1}.{que["q"]}</span>
                            <div className="w-full">
                                <div className="w-full flex flex-wrap gap-[40px] items-center justify-center">
                                    {que["options"].map((option, j) => (
                                        <div key={j}>
                                            <input type="radio" id={`${i}-${j}`} className="questionbutton input-radio" name={`${i}`} />
                                            <label htmlFor={`${i}-${j}`} className="question-label">
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <></>
                )}
                <div className="w-full flex flex-row justify-end">
                    <button className="px-[20px] py-[10px] bg-[#227DEE] text-white font-bold text-[18px] rounded-[10px]">判定する</button>
                </div>
            </div>
        </div>
    );
};
