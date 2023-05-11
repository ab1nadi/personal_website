
import { useEffect } from "react";

export default function Experience({showRubiks})
{
    useEffect(()=>
    {
      showRubiks(false);
    })
    return (
        <div className="w-full h-full flex justify-center items-center">
            Page is under construction.
        </div>
    )
}