import '@/styles/globals.css'

import { useRef, useState } from 'react'

import MainLayout from "@/components/main_layout";
import Nav from '@/components/nav';
export default function App({ Component, pageProps }) {

  const iframe = useRef(null);
  
  function setShowRubiks(v)
  {
    iframe.current.contentWindow.postMessage(JSON.stringify(v), "*");
  }


  return (
    <div className="w-screen h-screen">
      <iframe  ref={iframe} id="rubiks" className=" w-full h-full fixed top-0 left-0 -z-20" src={`https://ab1nadi.github.io/rubiks/?center=true&top=340`}/>
        <MainLayout>
          <Nav/>

            <Component showRubiks={setShowRubiks} {...pageProps} />
         
        </MainLayout>
    </div>
  )
}
