
import { useEffect } from "react";
import Image from "next/image";
export default function ContactMe({showRubiks})
{
    useEffect(()=>
    {
      showRubiks(false);
    })
    return (
        <div className="flex flex-col gap-10  w-full h-full items-center pt-5">
            <h6 className=" text-white font-mono text-3xl">ContactMe</h6>
            <Image className=" rounded-full max-w-lg" width="200" height="200" src='/meee.png'></Image>
            <div className=" w-full max-w-lg h-fit bg-white bg-opacity-90  text-black rounded-sm overflow-x-hidden">
                <div className="border-b-2 border-black p-3">
                    <div className="w-full flex justify-center text-2xl font-mono">
                        abinadiswapp@gmail.com
                    </div>
                </div>
                <div className="flex w-full flex-col gap-3 p-3">
                    <a className="w-full p-2 text-sm rounded-sm bg-slate-400 hover:bg-slate-500 overflow-hidden whitespace-nowrap" href={'https://github.com/ab1nadi'}>GitHub</a>
                    <a className="w-full p-2 text-sm rounded-sm bg-slate-400 hover:bg-slate-500 overflow-hidden whitespace-nowrap" href={'https://www.linkedin.com/in/aswapp-0104ab1b7'}>Linkedin</a>

                </div>

            </div>
        </div>
    )
}