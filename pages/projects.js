import { useEffect } from "react";
import Project from "./projects/[id]";
import { project_data } from "@/data/projects";
export default function Projects({showRubiks})
{
    useEffect(()=>
    {
      showRubiks(false);
    })
    return (
        <div className="flex flex-col gap-10  w-full h-full items-center p-5 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
            <h6 className=" text-white font-mono text-3xl">Projects</h6>
            {project_data.map(p=><Project key={p.id} projectData={p}></Project>)}
        </div>

    )
}