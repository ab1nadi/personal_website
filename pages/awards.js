
import { useEffect } from "react";

export default function Awards({showRubiks})
{
    useEffect(()=>
    {
      showRubiks(false);
    })
    return (
        <>
            Awards
        </>
    )
}