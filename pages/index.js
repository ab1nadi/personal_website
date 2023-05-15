import MainLayout from "@/components/main_layout"
import { useEffect } from "react"

export default function Home({showRubiks}) {

  // show the rubiks cube when 
  // this page mounts
  // it is the home page
  useEffect(()=>
  {
    showRubiks(true);
  })


  return (
    <MainLayout>
        <h6 className=" md:mt-96  md:pt-10 mt-[450px] text-white font-mono md:text-6xl text-4xl">Abinadi Swapp</h6>
        <h6 className=" text-white font-mono md:text-3xl text-xl">Software Dev</h6>
    </MainLayout>
  )
}
