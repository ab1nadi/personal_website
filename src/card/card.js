import React from 'react'
import './card.css';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import { useEffect, useState } from 'react';
// react component
// for a card
export default function Card(props) {

    const [ref, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;
    const [show, setShow] = useState(false);
   
    // want it to be shown forever
    // after it has been in view once
    useEffect(() => {
      if(isVisible && !show)
      {
        setShow(true);
      }
    }, [isVisible]);
  

    return (
        <div className="card">
            <div ref={ref} className={`card_box  ${show? "slideInAnimation" : "invisible" }`}> 
                <div className="card_title">{props.data.title}</div>
                <div className= {"card_box_content "}>
                    <List style={props.data.style} list={props.data.listItems}></List>
               </div>
            </div>
        </div>
    );
  
  
}



// List
// a recursive comp
// that creates lists
function List(props)
{
    let returned = (
        <ul>
            {props.list.map((item,key) => 
            {
                let mainItem;
                if(item.href)
                {
                    mainItem = <li key={key} className={props.style + " " +item.style}><a href={item.href}>{item.value}</a></li>
                }
                else 
                    mainItem = <li key={key} className={props.style + " " +item.style} >{item.value}</li>

                let subList = null;

                if(item.listItems)
                {
                    subList = <List  style={props.style} list={item.listItems}></List>

                    return <>{mainItem}  {subList}</>;
                }
                else 
                    return mainItem

            })
            }
        </ul>
    );
    return returned;
}



