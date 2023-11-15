import Image from "next/image"
import { useEffect, useState } from "react"
import { getAuth } from "firebase/auth";
import { collection, setDoc, doc, addDoc } from "firebase/firestore";
import { initializeFirebaseApp, db } from '@/firebase/client'

export default function SearchResult(props: any) {
    const auth = getAuth();// Firebase Authのインスタンス
    const [currentUser, setCurrentUser]: any = useState([])

    const addUser = async () => {
        // Chatコレクションに新しいドキュメントを追加
        const chatRef = doc(collection(db, 'Chat'));

        setDoc(chatRef, {
            uid: [currentUser.uid, props.uid],  // ここにUIDを入力
            // 他のフィールドもここに追加できます
        })
            .then(() => {
                console.log("Document successfully written!");
                // Messageコレクションを追加
                return addDoc(collection(chatRef, 'Message'), {
                    // ここにMessageコレクションのフィールドを追加します
                });
            })
            .then(() => {
                console.log("Message collection successfully added!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        // collection(db, "Chat", cid1, "collection2")
    }

    useEffect(() => {
        // ログイン状態をウォッチ
        let unsubscribe = auth.onAuthStateChanged((user: any) => {
            if (user) {
                // ログインしている
                setCurrentUser(user)
                // どっか遷移
            }
            unsubscribe()
        })
    }, [auth])
    return (
        <>
            {props.type == "person"
                ?//人の検索結果
                <div className="bg-white drop-shadow-lg mx-40 my-10 h-28 rounded-2xl flex justify-between items-center">
                    <Image src={props.src} width={60} height={60} alt="person" className="mx-12" />
                    <p className="text-2xl font-bold mx-12">{props.name}</p>
                    <Image src="/add_Icon.svg" width={50} height={40} alt="addIcon" className="mx-12 cursor-pointer" onClick={() => addUser()} />
                </div>
                ://グループの検索結果
                <div className="bg-white drop-shadow-lg mx-40 my-10 h-28 rounded-2xl flex justify-between items-center">
                    <Image src={props.src} width={60} height={60} alt="person" className="mx-12" />
                    <div className="flex mx-12">
                        <p className="text-2xl font-bold mr-4">{props.name}</p>
                        <Image src="/official.svg" width={30} height={30} alt="" />
                    </div>
                    <Image src="/add_Icon.svg" width={50} height={50} alt="addIcon" className="mx-12 cursor-pointer" />
                </div>
            }
        </>
    )
}