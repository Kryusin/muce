export default function Genre(props: any) {
    // props
    // name: ジャンル名
    // contents: 資格名の配列
    return (
        <>
            <p className="border-l-2 border-l-orange-theme text-2xl font-bold tracking-wide">{props.name}</p>
            <div className="flex justify-start items-center overflow-x-auto hide-scroll-bar h-20 gap-4 px-3 my-10">
                {props.contents.map((content: any, i: number) => (
                    <div className="flex-none drop-shadow-lg p-5 my-2 bg-white rounded text-center font-bold" key={i}>
                        {content}
                    </div>
                ))}
            </div>
        </>
    )
}