import { getCertById, getAllIDs } from '@/data/certificates';
import { generate } from 'random-key';

export async function getStaticPaths() {
const paths = getAllIDs();

return {
    paths,
    fallback: false,
};
}


export async function getStaticProps({ params }) {
const certData =  getCertById(params.id);
return {
    props: {
        certData,
    },
};
}


export default function Certification({certData})
{
    return(
        <div className=" w-full max-w-xl h-fit bg-white bg-opacity-90 text-black rounded-sm shrink-0">
            <div className=" w-full p-3 min-h-[112px] border-black border-b-2 flex justify-between gap-3">
                <div className="flex flex-col justify-around">
                    <div className=" text-sm sm:text-base md:text-xl text-blue-700 font-mono">{certData.title}</div>
                    <div>{certData.date}</div>
                </div>
                <div className="h-full flex flex-col min-w-[120px] justify-start">
                    {certData.link ? <a className="w-fit p-2 text-xs md:text-sm rounded-sm bg-slate-400 hover:bg-slate-500 overflow-hidden whitespace-nowrap" href={certData.link}>Certification Proof</a> : ""}
                </div>
            </div>
            <div className="p-3 flex flex-col">
                <div>
                    {certData.description}
                </div>
            </div>
            
        </div>
    )
}