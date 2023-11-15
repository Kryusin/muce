'use client'

import Image from 'next/image'
import Talk from '@/components/talk'
import AppBar from '@/components/AppBar'
import { useEffect, useState, useCallback } from 'react'
import { getAuth } from "firebase/auth";// Firebase Authのインポート
import { collection, query, orderBy, getDocs, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { initializeFirebaseApp, db } from '@/firebase/client'
import dayjs from 'dayjs'
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ja from 'dayjs/locale/ja';
initializeFirebaseApp()// Firebaseの初期化
dayjs.locale(ja);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export default function ChatDatail(props: any) {
    const scroll = () => {
        const chatElement: any = document.querySelector('#chatElement')
        chatElement.scrollTo(0, chatElement.scrollHeight)
    }
    const [currentUser, setCurrentUser]: any = useState([])
    const [chatData, setChatData]: any = useState([])
    const [userData, setUserData]: any = useState([])
    const [message, setMessage] = useState('')

    const auth = getAuth();// Firebase Authのインスタンス

    const SendMessage = async (e: any) => {
        e.preventDefault()
        setMessage('')
        const userDoc = await getDoc(doc(collection(db, 'Users'), currentUser.uid));
        if (userDoc.exists()) {
            const user = userDoc.data()
            user.id = userDoc.id
            const chatDoc = doc(collection(db, 'Chat', props.params.id, "Message"));
            const sendChatData = {
                message: message,
                user: user,
                created_at: serverTimestamp()
            }
            setDoc(chatDoc, sendChatData)
            let newChatData = [...chatData]
            const cd = await getDoc(chatDoc)
            newChatData.push(cd.data({ serverTimestamps: "estimate" }))
            console.log("newChatData", newChatData);
            setChatData(newChatData)
            scroll()
        }
    }
    const fetchData = useCallback(async () => {
        const userDoc = doc(collection(db, 'Chat'), props.id);
        const ud = await getDoc(userDoc);
        console.log("ud", ud.data());
        let newUserData: any = []
        if (ud.exists()) {
            const users = ud.data()
            const filter_user = await users.uid.filter((item: any) => item !== currentUser.uid)
            filter_user.forEach(async (ud: any) => {
                const userDoc = doc(collection(db, 'Users'), ud);
                const user = await getDoc(userDoc);
                newUserData.push(user.data())
            });
        }
        setUserData(newUserData);
        const messageQuery = query(
            collection(db, 'Chat', props.params.id, 'Message'),
            orderBy('created_at', 'asc')
        );
        const messageDocs = await getDocs(messageQuery);
        const newChatData: any = await Promise.all(
            messageDocs.docs.map(async (md: any) => {
                return md.data();
            })
        );
        setChatData(newChatData);
    }, [props, currentUser])

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
        fetchData()
        scroll()
    }, [props, currentUser, fetchData])

    return (
        <>
            <div className="flex-row px-44 w-screen h-screen justify-end items-center fixed">
                <div className='h-12 flex items-center bg-transparent'>
                    {userData.length !== 0 && userData.map((ud: any, i: number) => {
                        return (
                            <p className='text-lg font-bold' key={i}>{ud.name}</p>
                        )
                    })}
                </div>
                <div className='h-3/4 overflow-y-auto hide-scroll-bar' id='chatElement'>
                    {chatData.map((cd: any, i: number) => {
                        const created_at = dayjs(cd.created_at.toDate()).format('MM/DD HH:mm')
                        if (currentUser.uid == cd.user.id) {
                            return (
                                //自分のメッセージ
                                <Talk key={i} type="my" message={cd.message} time={created_at} />
                            )
                        } else {
                            return (
                                //相手のメッセージ
                                <Talk key={i} type="your" message={cd.message} icon={cd.user.icon} time={created_at} />
                            )
                        }
                    })}
                </div>
                <div className="w-full px-32 py-5 ml-10">
                    <form className="relative h-12 w-full min-w-[200px]" onSubmit={(e) => SendMessage(e)}>
                        <div className="z-10 absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                            <Image src={"/Send.svg"} width={20} height={20} alt="送信アイコン" className='cursor-pointer' onClick={(e) => SendMessage(e)} />
                        </div>
                        <input
                            className="z-20 peer drop-shadow-xl bg-white h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder="メッセージ"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}