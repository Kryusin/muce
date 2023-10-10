import Loading from '@/components/loading'// ローディング画面のインポート
import Top from '@/components/top'// トップ画面のインポート

export default function Index() {
  return (
    <>
      <Loading />
      <Top src="/top.png" />      {/* トップ画面の背景をsrcで変更 */}
      <p className='font-Sedgwick text-8xl font-bold'>MUCE<span>とは</span></p>
    </>
  )
}