import { useEffect} from "react";
import { useRouter } from "next/router";
import { getAllIDs, getDemoById } from "@/data/demos";


// runs at compile time
// gets ids for all possible
// demo paths at compile time
export async function getStaticPaths() {
const paths = getAllIDs();
return {
    paths,
    fallback: false,
};
}

    

// runs at compile time
// gets demo data for a single
// demo id and passes it to a 
// demo component
export async function getStaticProps({ params }) {
const demoData =  getDemoById(params.id);
return {
    props: {
    demoData,
    },
};
}
    


// Demo
// Holds a demo component
// essentially this component
// uses iframes to list 
// demos that are on github
export default function Demo({showRubiks, demoData})
{
    const router = useRouter();


    // we don't want to show 
    // rubiks cubes on demos
    // runs whenever a demo is mounted
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



