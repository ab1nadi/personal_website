import '@/styles/globals.css'

import { useRef } from 'react'

import MainLayout from "@/components/main_layout";
import Nav from '@/components/nav';
export default function App({ Component, pageProps }) {

  // need a ref so that we can 
  // send postMessage data to the rubiks cube iframe
  const iframe = useRef(null);
  

  // setShowRubiks
  // passed to all child
  // pages so that they 
  // can contorol if the rubiks cube
  // is shown on their page or not
  function setShowRubiks(v)
  {
    // sends a postMessage to the rubiks cube iframe
    iframe.current.contentWindow.postMessage(JSON.stringify(v), "*");
  }


  return (
    <div className="w-screen h-screen">
      <iframe  ref={iframe} id="rubiks" className=" w-full h-full fixed top-0 left-0 -z-20" src={`https://ab1nadi.github.io/rubiks/?center=true&top=340`}/>
        <MainLayout>
          <div className="w-screen p-3 flex justify-center items-center flex-wrap gap-3 bg-white text-2xl text-black z-50">
            <div>This website is out of date, please go to:</div> 
            <a className="hover:text-green-800" href="https://ab1nadi.github.io/portfolio_website/">
              https://ab1nadi.github.io/portfolio_website/
            </a>
          </div>
          <Nav/>
          <Component showRubiks={setShowRubiks} {...pageProps} />
        </MainLayout>
    </div>
  )
}
