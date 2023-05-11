import { useEffect, useState} from "react";
import { useRouter } from "next/router";
import { getAllIDs, getDemoById, demo_data } from "@/data/demos";
import Link from "next/link";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


export async function getStaticPaths() {
    const paths = getAllIDs();
    
    return {
        paths,
        fallback: false,
    };
    }
    
    
    export async function getStaticProps({ params }) {
    const demoData =  getDemoById(params.id);
    return {
        props: {
        demoData,
        },
    };
    }
    



export default function Demo({showRubiks, demoData})
{
    const router = useRouter();


    useEffect(()=>
    {        
        showRubiks(false);
    })


    return (

        <div className="w-full h-full fixed top-0 left-0 rounded-lg" >
   
            <iframe className="w-full h-full mt-20" width="100%" height="100%" src={demoData.url}></iframe>
        </div>
    )
}



