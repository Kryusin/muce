import Account from '@/components/account';// アカウント画面のインポート propsでsignup,login,logoutを渡す

export default function Signup() {
    return (
        <>
            <Account props={"新規登録"} />
        </>
    )
}