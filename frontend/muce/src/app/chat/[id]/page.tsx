'use client'

import Image from 'next/image'
import Talk from '@/components/talk'
import AppBar from '@/components/appBar'
import { useEffect, useState } from 'react'
import { getAuth } from "firebase/auth";// Firebase Authのインポート
import { collection, query, orderBy, getDocs, doc, getDoc, limit } from 'firebase/firestore'
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

export default function Chat(props: any) {
    const scroll = () => {
        const chatElement: any = document.querySelector('#chatElement')
        chatElement.scrollTo(0, chatElement.scrollHeight)
    }
    const [currentUser, setCurrentUser]: any = useState([])
    const [chatData, setChatData] = useState([])
    const [userData, setUserData]: any = useState([])

    const auth = getAuth();// Firebase Authのインスタンス

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
        const fetchData = async () => {
            const userDoc = doc(collection(db, 'Chat'), props.params.id);
            const ud = await getDoc(userDoc);
            let newUserData: any = []
            if (ud.exists()) {
                const users = ud.data().uid.filter((item: any) => item !== currentUser.uid)
                console.log("相手の情報", users);
                users.forEach(async (ud: any) => {
                    const userDoc = doc(collection(db, 'Users'), ud);
                    const user = await getDoc(userDoc);
                    newUserData.push(user.data())
                });
            }
            console.log("相手の情報", newUserData);
            setUserData(newUserData);
            const messageQuery = query(
                collection(db, 'Chat', props.params.id, 'Message'),
                orderBy('created_at', 'asc')
            );
            const messageDocs = await getDocs(messageQuery);
            const newChatData: any = await Promise.all(
                messageDocs.docs.map(async (md: any) => {
                    const mditem = md.data();
                    mditem.id = md.id;
                    console.log(`めっさげ${mditem}`);
                    const userDoc = doc(collection(db, 'Users'), md.data().user);
                    const ud = await getDoc(userDoc);
                    if (ud.exists()) {
                        const uditem = ud.data();
                        uditem.id = ud.id;
                        mditem.user = uditem;
                    }
                    return mditem;
                })
            );
            console.log('newChatData', newChatData);
            setChatData(newChatData);
        };
        fetchData()
        scroll()
    }, [props, currentUser])

    return (
        <>
            <AppBar />
            <div className="flex-row px-44 w-screen h-screen justify-end items-center fixed">
                <div className='h-12 flex items-center'>
                    {userData.map((ud: any, i: number) => {
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
                    <div className="relative h-12 w-full min-w-[200px]">
                        <div className="z-10 absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                            <Image src={"/Send.svg"} width={20} height={20} alt="送信アイコン" className='cursor-pointer' />
                        </div>
                        <input
                            className="z-20 peer drop-shadow-xl bg-white h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder="メッセージ"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}