export default function Button(props: any) {
    return (
        <>
            <button className="w-full border-2 border-blue-theme text-blue-theme bg-white rounded-xl h-[58px] hover:bg-blue-theme hover:text-white">{props.props}</button>
        </>
    )
}