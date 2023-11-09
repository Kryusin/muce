'use client'

import Image from 'next/image'// Next/imageのインポート
import Link from "next/link";//Linkコンポーネントのインポート
import { useState, useEffect } from 'react';// useStateのインポート
import { useRouter } from "next/navigation"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";// Firebase Authのインポート
import { initializeFirebaseApp, db } from '@/firebase/client'
import { setDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';

initializeFirebaseApp()// Firebaseの初期化

export default function Account(props: any) {
    let offer: any;// 新規登録・ログインを促す文言
    if (props.text === '新規登録') {
        offer = <p className='text-center text-gray-theme-2'>アカウントをお持ちの方は<Link href="/login" className='text-blue-theme'>こちら</Link></p>
    } else if (props.text === 'ログイン') {
        offer = <p className='text-center text-gray-theme-2'>アカウントをお持ちでない方は<Link href="/signup" className='text-blue-theme'>こちら</Link></p>
    }
    const [email, setEmail] = useState('');// メールアドレスのstate
    const [password, setPassword] = useState('');// パスワードのstate
    const [errorMsg, setErrorMsg] = useState('');// エラーメッセージのstate
    const router = useRouter();

    const auth = getAuth();// Firebase Authのインスタンス

    useEffect(() => {
        // ログイン状態をウォッチ
        let unsubscribe = auth.onAuthStateChanged((user: any) => {
            if (user) {
                // ログインしている
                console.log(user);
                // どっか遷移
            }
            unsubscribe()
        })
    }, [auth])

    const doLogin = (e: any) => {
        e.preventDefault();
        // エラーメッセージの初期化
        setErrorMsg('')

        if (e.target.value === 'ログイン') {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // ログイン成功時の処理
                    const user = userCredential.user;
                    // データベースにユーザー情報を登録
                    const users = collection(db, 'Users');// usersコレクションの参照を作成
                    const userDoc = doc(users, user.uid);// usersコレクションのドキュメントの参照を作成
                    // usersコレクションのドキュメントのupdated_atを更新
                    updateDoc(userDoc, {
                        updated_at: serverTimestamp(),
                    })
                    console.log(user.uid);
                    router.push('/app')
                })
                .catch((error) => {
                    if (error.code === 'auth/invalid-email') {
                        // メールアドレスの形式がおかしい
                        setErrorMsg("メールのアドレスを確認してください")
                    } else if (error.code === 'auth/user-disabled') {
                        // ユーザが無効になっている
                        setErrorMsg("ユーザが無効です")
                    } else if (error.code === 'auth/user-not-found') {
                        // ユーザが存在しない
                        setErrorMsg("ユーザが存在しません")
                    } else if (error.code === 'auth/wrong-password') {
                        // パスワードが間違っている
                        setErrorMsg("パスワードが違います")
                    } else if (error.code === 'auth/too-many-requests') {
                        // 何度もパスワードを間違えた
                        setErrorMsg("パスワードを複数回違っています")
                    } else {
                        // その他
                        setErrorMsg('ログインに失敗しました')
                    }
                });
        } else if (e.target.value === '新規登録') {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // 新規登録成功時の処理
                    const user = userCredential.user;
                    // データベースにユーザー情報を登録
                    const users = collection(db, 'Users');// usersコレクションの参照を作成
                    const userDoc = doc(users, user.uid);// usersコレクションのドキュメントの参照を作成
                    const userData = {
                        name: "ゲスト",
                        email: email,
                        updated_at: serverTimestamp(),
                        created_at: serverTimestamp(),
                    }
                    // usersコレクションにuserDataを追加
                    setDoc(userDoc, userData)
                    // ユーザー名をゲストに設定
                    updateProfile(user, {
                        displayName: "ゲスト"
                    })
                })
                .catch((error) => {
                    if (error.code === 'auth/weak-password') {
                        setErrorMsg("パスワードは6 文字以上の文字列を指定する必要があります")
                    } else if (error.code === 'auth/email-already-in-use') {
                        setErrorMsg("既にメールアドレスは使用されています")
                    } else if (error.code === 'auth/invalid-email') {
                        setErrorMsg("メールアドレスの形式が正しくありません")
                    } else {
                        setErrorMsg("登録に失敗しました")
                    }
                });
        }
    }
    return (
        <>
            {errorMsg &&
                <div className="drop-shadow-2xl bg-red-200 rounded-4xl mx-auto mt-[20px] px-8 py-[10px] w-1/3">
                    <p className='text-center text-sm font-normal text-red-500'>{errorMsg}</p>
                </div>
            }

            <div className="drop-shadow-2xl w-1/3 bg-white rounded-4xl mx-auto px-8 py-8 my-12">
                <Link href="/production">
                    <Image src="/muceLogo.svg" alt='logo' width={140} height={40} className='bg-white mx-auto ' />
                </Link>
                <form>
                    {/* メールアドレス */}
                    <div className="relative bg-gray-theme rounded-xl my-8">
                        <input
                            type="email"
                            className="peer m-0 block h-[58px] w-full bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-gray-theme-2 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                            id="floatingInput"
                            placeholder=""
                            onChange={(e) => setEmail(e.target.value)} />
                        <label
                            htmlFor="floatingInput"
                            className="pointer-events-none absolute left-0 top-0 origin-[0_0] px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                            <div className='flex gap-5'>
                                <Image src={"/Mail.svg"} width={20} height={20} alt="Mail" />
                                <p className='text-gray-theme-2'>メールアドレス</p>
                            </div>
                        </label>
                    </div>
                    {/* パスワード */}
                    <div className="relative bg-gray-theme rounded-xl my-8">
                        <input
                            type="password"
                            className="peer m-0 block h-[58px] w-full bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-gray-theme-2 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-gray-theme-2 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                            id="floatingInput"
                            placeholder=""
                            onChange={(e) => setPassword(e.target.value)} />
                        <label
                            htmlFor="floatingInput"
                            className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                            <div className='flex gap-5'>
                                <Image src={"/Pass.svg"} width={20} height={20} alt="Pass" />
                                <p className='text-gray-theme-2'>パスワード</p>
                            </div>
                        </label>
                    </div>
                    <div className="mb-7">
                        {/* 新規登録・ログインするボタン */}
                        <button className="w-full border-2 border-blue-theme text-blue-theme mt-5 bg-white rounded-xl h-[58px] hover:bg-blue-theme hover:text-white" onClick={(e) => doLogin(e)} value={props.text}>{props.text}</button>
                    </div>
                </form>
                {/* 新規登録・ログインを促す文言 */}
                {offer}
            </div>
        </>
    )
}