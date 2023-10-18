export default function ScrollQualifications(props:any) {
    const list = props.arr
    return (
        <div className="flex h-[73px] p-2.5 justify-start items-start gap-[15px] overflow-x-auto hide-scroll-bar">
            {list.map((value:string) =>{
                return (
                    <div key={value} className="py-2.5 px-[30px] justify-center items-center gap-2 bg-amber-500 rounded-[30px] flex-none">
                        <span className= "text-white font-['Murecho'] text-[20px] not-italic font-medium">{value}</span>
                    </div>
                )
            })}
        </div>
    )
};
