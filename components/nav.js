import { useState, useEffect, useLayoutEffect } from 'react';
import { Spin as Hamburger } from 'hamburger-react'
import { demo_data } from '@/data/demos';
import Link from 'next/link';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useWindowResize } from '@/lib/window_resize_hook';

export default function Nav({small, forceHamburger})
{
    const [isOpen, setOpen] = useState(false)
    const [navAnimation, setNavAnimation] = useState("");

    const [fullDropDown, setFullDropDown]  = useState(false);
    const [miniDropDown, setMiniDropDown]  = useState(false);



    // handlenav
    // sets the animations
    // for the navbar
    function handleNav(open)
    {
        if(open)
        {
            setNavAnimation("animate-opennav");
        }
        else 
        {
            setNavAnimation("animate-closenav");
        }
    }
    
    // closeOnButtonPress
    // closes the nav when one of the
    // buttons gets pressed
    function closeOnLinkPress()
    {
        setOpen(false);

        

        if(navAnimation == "animate-opennav")
            handleNav(false);

            setMiniDropDown(false);
            setFullDropDown(false);
    }


    // removeAnimateCloseNav
    // the only way I could get this 
    // to remove the animatation css class
    // when the nav is closed
    function removeAnimateCloseNav(e)
    {
        if(e.animationName == 'slide_left')
        {   
            setNavAnimation("");
        }
    }

    useWindowResize((w,h)=> 
    {
        setMiniDropDown(false);
        setFullDropDown(false);

        setOpen(false);

        if(navAnimation == "animate-opennav")
            handleNav(false);
    });




    return (
    <div  className={" w-full max-w-6xl h-fit  flex items-center justify-between z-40 p-5"} >

        <div className={`w-fit  text-white  md:hidden visible z-10` }>
            <Hamburger toggled={isOpen} toggle={setOpen} onToggle={handleNav} size={40} />
        </div>

        <div className={` text-xl  flex-row relative   md:h-fit  w-fit md:flex hidden animate-slideup `}>
            <Link href="/" onClick={closeOnLinkPress} className=" p-3 hover:text-white text-blue-300 font-mono font-light md:text-center text-left">Home</Link>
            <Link href="/projects" onClick={closeOnLinkPress} className=" p-3 hover:text-white text-blue-300 font-mono font-light md:text-center text-left">Projects</Link>
            
            <DropdownMenu.Root key={1} className="hidden md:visible" open={fullDropDown} onOpenChange={setFullDropDown}>
                <DropdownMenu.Trigger asChild>
                    <button className="IconButton p-3 hover:text-white text-blue-300 font-mono font-light md:text-center text-left outline-none	" aria-label="Customise options">
                        Demos
                        {fullDropDown ?  <span className="pl-2 hover:text-white text-blue-300 text-sm">&#9650;</span> : <span className="pl-2 hover:text-white text-blue-300 text-sm">&#9660;</span>}
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal >
                <DropdownMenu.Content className="z-50 " >

                    {
                        demo_data.map((demo)=>
                        {
                            return (
                                <DropdownMenu.Item key={demo.id} className="w-40 bg-white  hover:bg-slate-400 outline-none">
                                    <Link onClick={()=>{setOpen(false); closeOnLinkPress();}} className="w-full h-full p-4 block" href={"/demos/"+demo.id}>{demo.id}</Link>
                                </DropdownMenu.Item>
                            )
                        })
                    }

                </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>


            <Link href="/certifications" onClick={closeOnLinkPress} className=" p-3 hover:text-white text-blue-300 font-mono font-light md:text-center text-left">Certificates</Link>
            <Link href="/experience" onClick={closeOnLinkPress} className=" p-3 hover:text-white text-blue-300 font-mono font-light md:text-center text-left" >Experience</Link>
            <Link href="/contact_me" onClick={closeOnLinkPress} className=" p-3 hover:text-white text-blue-300 font-mono font-light md:text-center text-left overflow-hidden whitespace-nowrap">Contact Me</Link>
        </div>


        <div className="text-3xl h-fit w-fit font-mono overflow-hidden whitespace-nowrap">Abinadi Swapp</div>


        {/* hidden nav */}
        <div  onAnimationEndCapture={removeAnimateCloseNav} className={` mt-0 pt-20 text-2xl  h-screen flex flex-col bg-slate-600 w-56 -left-56 top-0 fixed ${navAnimation}`}>
            <Link href="/" onClick={closeOnLinkPress} className=" p-5 hover:text-white text-blue-300 font-mono font-ligh ttext-left">Home</Link>
            <Link href="/projects" onClick={closeOnLinkPress} className=" p-5 hover:text-white text-blue-300 font-mono font-light text-left">Projects</Link>
            
            <DropdownMenu.Root key={2} open={miniDropDown} onOpenChange={setMiniDropDown}>
                <DropdownMenu.Trigger asChild>
                    <button className=" z-50 p-5 hover:text-white text-blue-300 font-mono font-ligh text-left outline-none	" aria-label="Customise options">
                        Demos
                        {miniDropDown ?  <span className="pl-2 hover:text-white text-blue-300 text-base">&#9650;</span> : <span className="pl-2 hover:text-white text-blue-300 text-sm">&#9660;</span>}
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal className="rounded-lg">
                <DropdownMenu.Content className="z-50">

                    {
                        demo_data.map((demo)=>
                        {
                            return (
                                <DropdownMenu.Item key={demo.id} className="w-40 bg-white  hover:bg-slate-400 outline-none">
                                    <Link onClick={()=>{setOpen(false); closeOnLinkPress();}} className="w-full h-full p-4 block" href={"/demos/"+demo.id}>{demo.id}</Link>
                                </DropdownMenu.Item>
                            )
                        })
                    }

                </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>


            <Link href="/certifications" onClick={closeOnLinkPress} className=" p-5 hover:text-white text-blue-300 font-mono font-light text-left">Certificates</Link>
            <Link href="/experience" onClick={closeOnLinkPress} className=" p-5 hover:text-white text-blue-300 font-mono font-light text-left" >Experience</Link>
            <Link href="/contact_me" onClick={closeOnLinkPress} className=" p-5 hover:text-white text-blue-300 font-mono font-light text-left">Contact Me</Link>
        </div>

    </div>
    );
}

