import React from 'react'
import './contact.css';

export default class Contact extends React.Component{

render() {

  return (
      <div className="contact">
          <div className="contact_box"> 
              <div className="contact_title">Contact Me</div>
              <div className="contact_box_content">
                <ContactItem value="Email: abinadiSwapp@gmail.com"></ContactItem>

             </div>
          </div>
      </div>
  );
}

}

function ContactItem(props)
{
    return <div className="contact_box_item">+ {props.value}</div>
}

function ContactSubItem(props)
{
    if(!props.href)
        return <div className="contact_box_sub_item">- {props.value}</div>
    else
        return <div className="contact_box_sub_item">- {props.value} <a href={props.href}>{props.href}</a></div>
}
