'use client'
import Image from "next/image";
import {useState} from "react";

export default function ChangeIconField() {

    const [show, setShow] = useState(false);
    const [url, setUrl] = useState("");

    function ChangeHandler(e) {
        setShow(true);
        var fileReader = new FileReader();
        var parent = document.getElementById("imgField")
        if(e.target.files.length !== 0){
            setUrl(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div>
            <input type="file" name="icon" id="icon" className="hidden" accept="image/png,image/jpeg" onChange={ChangeHandler} />
            <label htmlFor="icon" className="cursor-pointer">
                <div className="bg-[#f5f5f5] rounded-[20px] absolute w-44 h-44 right-[10%] top-[20%] flex justify-center items-center gap-[5px] overflow-hidden">
                    {url?
                        <div className="w-full h-full">
                            <Image src={url} width={0} height={0} fill={true} alt="" id="imgField" />
                        </div>
                    :
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 28 22" fill="none">
                                <path d="M14 16.6253V8.18777M14 8.18777L17.75 11.9378M14 8.18777L10.25 11.9378M7.43751 20.3753C6.0993 20.3767 4.80441 19.901 3.78538 19.0336C2.76636 18.1662 2.08995 16.9639 1.87765 15.6427C1.66534 14.3214 1.93104 12.9677 2.62704 11.8248C3.32303 10.6818 4.40371 9.82437 5.67501 9.40652C5.34839 7.73298 5.68596 5.99802 6.61624 4.56904C7.54653 3.14006 8.99647 2.12926 10.659 1.75071C12.3216 1.37215 14.0662 1.65556 15.5235 2.54091C16.9807 3.42627 18.0361 4.84405 18.4663 6.49402C19.1313 6.27774 19.8435 6.25172 20.5225 6.41889C21.2016 6.58607 21.8203 6.93978 22.3089 7.44007C22.7975 7.94036 23.1365 8.56731 23.2875 9.2501C23.4386 9.93289 23.3957 10.6443 23.1638 11.304C24.1871 11.6949 25.0413 12.4316 25.5782 13.3865C26.1151 14.3413 26.3009 15.4539 26.1033 16.5314C25.9057 17.6088 25.3372 18.5831 24.4963 19.2852C23.6555 19.9873 22.5954 20.373 21.5 20.3753H7.43751Z" stroke="black" stroke-opacity="0.3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="text-black/30 font-semibold">アイコンを選択</span>
                        </>
                    }
                </div>
            </label>
        </div>
    );
};
