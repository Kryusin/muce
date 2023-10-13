import Top from '@/components/top'// トップ画面のインポート
import Circle from '@/components/circle'// 円のインポート
import Image from 'next/image'// NextImageのインポート
import Link from "next/link";//Linkコンポーネントのインポート

export default function Index() {
  return (
    <div className="snap-y snap-mandatory scroll-smooth h-screen w-full overflow-scroll overflow-x-hidden">
      {/* トップ画面 */}
      <div id="Top" className="snap-start h-screen w-screen">
        <Top src="/top.png" />
      </div>
      {/* Muceとは */}
      <div className="snap-start h-screen w-screen bg-white">
        <div className="flex justify-center items-center py-20">
          <Image src={"/MUCE.svg"} alt="MUCE" width={150} height={70} />
          <p>とは</p>
        </div>
        <div className='flex justify-center items-center gap-32'>
          <Circle src="/Q_men.svg" width={90} height={90} description="同じ資格を勉強している人がいない" />
          <Circle src="/Q_women.svg" width={90} height={90} description="気軽に質問できる場所がない" />
          <Circle src="/Money_men.svg" width={130} height={130} description="勉強するのにコストをかけたくない" />
        </div>
      </div>
      {/* Muceの機能 */}
      <div className="snap-start h-screen w-screen bg-white">
        <div className='flex justify-start items-center pt-2 pl-2 gap-2'>
          <Image src="/MUCEIS.svg" width={115} height={40} alt='MUCEIS' />
          <p className='font-mono font-semibold'>とは</p>
        </div>
        <div className='text-center font-mono font-bold tracking-wider leading-10'>
          <p>Mutualはおたがいにという意味があり、Assistanceは手伝うという意味があります。</p>
          <div className='flex justify-center items-center'>
            <p>そこで、お互いに資格勉強を助け合えるアプリ</p>
            <p>「</p>
            <Image src="/MUCEIS.svg" width={60} height={60} alt='MUCE' />
            <p>」</p>
            <p>が誕生しました。</p>
          </div>
          <div className='flex justify-center items-center mt-8'>
            <Image src="/MUCEIS.svg" width={80} height={80} alt='MUCE' />
            <p className='text-xl'>って何？</p>
          </div>
          <p>MUCEとは、各資格に対してのChatRoomが用意されており、各ROOMでその資格に対して</p>
          <p>アドバイスを与えたり、受けたりできます。</p>
          <p>さらに 、<span className='text-orange-theme text-xl'>個人チャット・AI(質問・問題作成)</span>などの機能が搭載されています。</p>
          <p className='text-xl mt-8'>他社とは何が違うの？</p>
          <p>大きな点は、<span className='text-orange-theme text-2xl'>無料</span>で各資格の難易度・対策・質問が可能なところ。</p>
          <p>有料なサイトは多種存在するが、無料で質問・問題作成ができるサイトは</p>
          <div className='flex justify-center items-center pt-10 gap-3'>
            <Image src="/MUCEIS.svg" width={100} height={80} alt='MUCE' />
            <p>だけ。</p>
          </div>
        </div>
      </div>
      <div className='snap-start h-screen w-screen bg-orange-theme'>
        <div className='flex justify-end items-center pr-14 pt-5'>
          <Link href="#Top">
            <Image src="/TopIcon.svg" width={50} height={50} alt='TopIcon' />
          </Link>
        </div>
        <div className='flex justify-center items-center pt-7'>
          <Image src="/MuceFooter.svg" width={200} height={200} alt='MuceFooter' />
        </div>
        <div className='flex justify-center items-center pt-10 text-white font-mono font-semibold text-2xl gap-20'>
          <Link href="/qualification_list">資格一覧</Link>
          <p className='cursor-pointer'>お問い合わせ</p>
        </div>
        <div className='flex-col justify-center items-center pt-12 text-white font-mono font-semibold text-xl'>
          {/* DBから取得できたらいいね */}
          <div className='flex justify-center items-center gap-10 pb-5'>
            <p className='cursor-pointer'>教育</p>
            <p className='cursor-pointer'>美容</p>
            <p className='cursor-pointer'>デザイン</p>
            <p className='cursor-pointer'>財務</p>
            <p className='cursor-pointer'>建築</p>
            <p className='cursor-pointer'>語学</p>
            <p className='cursor-pointer'>事務</p>
          </div>
          <div className='flex justify-center items-center gap-10 pb-5'>
            <p className='cursor-pointer'>車両</p>
            <p className='cursor-pointer'>公務員</p>
            <p className='cursor-pointer'>スポーツ</p>
            <p className='cursor-pointer'>自然</p>
            <p className='cursor-pointer'>調理</p>
            <p className='cursor-pointer'>技術</p>
          </div>
          <div className='flex justify-center items-center gap-10 pb-5'>
            <p className='cursor-pointer'>生活</p>
            <p className='cursor-pointer'>娯楽</p>
            <p className='cursor-pointer'>適正検査</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-10 pt-10'>
          <Image src="/LineLogo.svg" width={40} height={40} alt='LineLogo' />
          <Image src="/InstagramLogo.svg" width={40} height={40} alt='InstagramLogo' />
          <Image src="/XLogo.svg" width={40} height={40} alt='XLogo' />
          <Image src="/FacebookLogo.svg" width={40} height={40} alt='FacebookLogo' />
        </div>
        <div className='flex justify-end items-center'>
          <p className='text-white font-mono font-light text-xl pr-14'>©︎MUCE</p>
        </div>
      </div>
    </div>
  )
}