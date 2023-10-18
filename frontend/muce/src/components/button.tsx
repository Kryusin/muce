export default function Button(props: any) {
    let button;
    if (props.type === "blue") {
        button = <button className="w-full border-2 border-blue-theme text-blue-theme bg-white rounded-xl h-[58px] hover:bg-blue-theme hover:text-white">{props.props}</button>
    } else if (props.type === "orange") {
        button = <button className="w-full border-2 border-orange-theme text-orange-theme bg-white rounded-xl h-[58px] hover:bg-orange-theme hover:text-white">{props.props}</button>
    }
    return (
        <div>
            {button}
        </div>
    )
}