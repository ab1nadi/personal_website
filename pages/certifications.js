import { useEffect } from "react";
import { certificate_data } from "@/data/certificates";
import Certification from "./certifications/[id]";
export default function Certifications({showRubiks})
{
    // Don't show the 
    // rubiks cube when 
    // this page mounts
    useEffect(()=>
    {
      showRubiks(false);
    })

    return (
        <div className="flex flex-col gap-10  w-full h-full items-center p-5 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
            <h6 className=" text-white font-mono text-3xl">Certifications</h6>

            {/* Load up all the certifications into a list */}
            {certificate_data.map(p=><Certification key={p.id} certData={p}></Certification>)}
        </div>
    )
}