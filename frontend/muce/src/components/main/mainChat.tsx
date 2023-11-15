'use client'
import AppBar from "@/components/AppBar"
import ChatUI from "@/components/chat"
import { getAuth } from "firebase/auth";// Firebase Authのインポート
import { initializeFirebaseApp, db } from '@/firebase/client'
import { collection, getDocs, getDoc, limit, doc, orderBy, query } from 'firebase/firestore';
import { useState, useEffect } from "react"
import dayjs from 'dayjs'
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ja from 'dayjs/locale/ja';
initializeFirebaseApp()// Firebaseの初期化
dayjs.locale(ja);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export default function Chat() {
    const [tab, setTab] = useState([true, false])
    const [currentUser, setCurrentUser]: any = useState([])
    const [userData, setUserData]: any = useState([])
    const [chatData, setChatData]: any = useState([])// チャットのデータ

    const auth = getAuth();// Firebase Authのインスタンス
    const changetab = (e: any) => {
        if (e.target.innerHTML == '個人') {
            setTab([true, false])
        } else if (e.target.innerHTML == '資格グループ') {
            setTab([false, true])
        }
    }
    const GetDateDiff = (to: dayjs.Dayjs) => {
        to = dayjs(to).tz()
        const from = dayjs().tz();
        const year = from.diff(to, 'year')
        const month = from.diff(to, 'month')
        const day = from.diff(to, 'day')
        const hour = from.diff(to, 'hour')
        const minute = from.diff(to, 'minute')
        const second = from.diff(to, 'second')
        let dateDiff: string = ''
        if (month >= 12) {
            dateDiff = `${year}年`
        } else if (day >= 30) {
            dateDiff = `${month}ヶ月`
        } else if (hour >= 24) {
            dateDiff = `${day}日`
        } else if (minute >= 60) {
            dateDiff = `${hour}時間`
        } else if (second >= 60) {
            dateDiff = `${minute}分`
        } else {
            dateDiff = `${second}秒`
        }
        return dateDiff;

    };
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

    useEffect(() => {
        let newChatList: any = []
        let newUserData: any = []
        const chatDocs = getDocs(collection(db, "Chat"))
        chatDocs.then((chatDoc) => {
            chatDoc.forEach((cd) => {
                const user = cd.data().uid.filter(item => item !== currentUser.uid)
                if (cd.data().uid.includes(currentUser.uid)) {
                    const messageQuery = query(collection(db, "Chat", cd.id, "Message"), orderBy("created_at", "desc"), limit(1))
                    const messageDocs = getDocs(messageQuery)
                    messageDocs.then((messageDoc) => {
                        messageDoc.forEach((md) => {
                            const item = md.data()
                            item.id = cd.id
                            newChatList = [...newChatList, item]
                        })
                        const usersDoc = doc(collection(db, "Users"), user.join(''))
                        getDoc(usersDoc).then((ud) => {
                            newUserData = [...newUserData, ud.data()]
                            setUserData(newUserData)
                        })
                        setChatData(newChatList)
                    })
                }
            })
        })
    }, [currentUser])

    return (
        <div className="w-[1460px]">
            <div className="flex justify-center items-center h-10 bg-gray-300 font-mono font-medium rounded drop-shadow-lg text-gray-800 ml-[170px] mr-[50px] mt-[30px] mb-[20px] text-lg">
                {tab[0]
                    ?//個人ON
                    <div className="cursor-pointer bg-orange-theme w-1/2 rounded-xl text-center text-white ml-10 mr-2" onClick={(e) => changetab(e)}>
                        個人
                    </div>
                    ://個人OFF
                    <div className="cursor-pointer w-1/2 rounded-xl text-center ml-10 mr-2" onClick={(e) => changetab(e)}>
                        個人
                    </div>
                }
                {tab[1]
                    ?//資格グループON
                    <div className="cursor-pointer bg-orange-theme w-1/2 rounded-xl text-center text-white mr-10 ml-2" onClick={(e) => changetab(e)}>
                        資格グループ
                    </div>
                    ://資格グループOFF
                    <div className="cursor-pointer w-1/2 rounded-xl text-center mr-10 ml-2 off" onClick={(e) => changetab(e)}>
                        資格グループ
                    </div>
                }
            </div>
            <div className="flex-col overflow-y-auto h-screen hide-scroll-bar">
                {chatData.length && userData.length && chatData.map((cd: any, i: number) => {
                    return (
                        <ChatUI
                            key={i}
                            id={cd.id}
                            name={userData[i].name}
                            src={userData[i].icon}
                            message={cd.message}
                            time={GetDateDiff(cd.created_at.toDate())}
                        />
                    )
                })}
            </div>
        </div>
    )
}