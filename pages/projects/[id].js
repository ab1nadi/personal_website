import {getProjectById, getAllIDs} from "@/data/projects";
import { generate } from 'random-key';

export async function getStaticPaths() {
const paths = getAllIDs();

return {
    paths,
    fallback: false,
};
}


export async function getStaticProps({ params }) {
const projectData =  getProjectById(params.id);
return {
    props: {
    projectData,
    },
};
}


export default function Project({projectData})
{
    return(
        <div className=" w-full max-w-xl h-fit bg-white bg-opacity-90 text-black rounded-sm shrink-0">
            <div className=" w-full p-3 h-28 min-h-[112px] border-black border-b-2 flex  gap-3 justify-between">

                <div className="flex flex-col w-96 min-w-[100px] justify-around ">
                    <div className=" text-sm sm:text-base md:text-xl text-blue-700 font-mono">{projectData.title}</div>
                    <div>{projectData.date}</div>
                </div>
                <div className=" h-full min-w-[120px] flex flex-col itesm-start justify-around">
                    {projectData.github ? <a className="w-fit p-2 md:text-sm text-xs rounded-sm bg-slate-400 hover:bg-slate-500 overflow-hidden whitespace-nowrap" href={projectData.github}>Go To Github</a> : <div className="md:text-sm text-xs overflow-hidden whitespace-nowrap">Github not available</div>}
                    {projectData.demo ? <a className="w-fit p-2 md:text-sm text-xs rounded-sm bg-slate-400 hover:bg-slate-500 overflow-hidden whitespace-nowrap" href={projectData.demo}>Go To Demo</a> : <div className="md:text-sm text-xs overflow-hidden whitespace-nowrap">Demo not available</div>}
                </div>

            </div>


            <div className="p-3 flex flex-col">
                <div className=" md:text-base text-sm">
                    {projectData.description}
                </div>
                <ul className="list-disc">
                    {projectData.bullet_points.map(point=> <li className=" ml-4 md:text-sm text-xs" key={generate()}>{point}</li>)}
                </ul>

            </div>
            
        </div>
    )
}