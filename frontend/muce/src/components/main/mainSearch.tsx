import Image from "next/image"
import SearchResult from "../SearchResult"
import { collection, getDocs, where, query } from 'firebase/firestore'
import { initializeFirebaseApp, db } from '@/firebase/client'
import { useState } from "react"

export default function Search() {
    const [userData, setUserData]: any = useState([])
    const [searchData, setSearchData]: any = useState([])

    const SearchSubmit = async (e: any) => {
        e.preventDefault()
        console.log("検索")
        const q = query(collection(db, 'Users'), where('name', '>=', searchData), where('name', '<=', searchData + '\uf8ff'))
        const userDoc = await getDocs(q)
        let newUserData: any = []
        userDoc.forEach((doc: any) => {
            const data = doc.data()
            data.id = doc.id
            newUserData.push(data)
        });
        const chatDocs = getDocs(collection(db, "Chat"))
        chatDocs.then((chatDoc) => {
            chatDoc.forEach((doc) => {
                const data = doc.data()
                if (data.uid.includes(newUserData.id)) {
                    newUserData.push(data)
                }
            })
        })
        setUserData(newUserData)
    }
    return (
        <>
            <div className="flex-row pl-32 w-screen h-screen justify-end items-center fixed">
                <form onSubmit={(e) => SearchSubmit(e)}>
                    <div className="flex border-b border-black px-7 mx-40 mt-5">
                        <input type="text" className="outline-none w-full h-12" placeholder="検索" onChange={(e: any) => setSearchData(e.target.value)} />
                        <Image src={"/search_black.svg"} height={20} width={20} alt="SearchIcon" />
                    </div>
                </form>
                <div className="flex-col items-center justify-center">
                    {userData.map((data: any, i: number) => (
                        <SearchResult name={data.name} src={data.icon} type="person" uid={data.id} key={i} />
                    ))}
                </div>
            </div>
        </>
    )
}