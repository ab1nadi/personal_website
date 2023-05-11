import Nav from "./nav";
export default function MainLayout({rubiks, children})
{

    return (
        <div className="w-screen h-screen flex flex-col items-center z-0 text-white pl-3 pr-3 overflow-x-hidden"> 
            {children} 
        </div>
    );
}