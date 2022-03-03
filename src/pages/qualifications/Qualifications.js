import React from 'react'
import './qualifications.css';

export default class Qualifications extends React.Component{

render() {

  return (
      <div className="qualif">
          <div className="qualif_box"> 
              <div className="qualif_title">Skills and Languages</div>
              <div className="qualif_box_content">
                    <QualifItem value="C/C++"></QualifItem>
                    <QualifItem value="C#"></QualifItem>
                    <QualifItem value="Java"></QualifItem>
                    <QualifItem value="Javascript, including frameworks/libraries such as:"></QualifItem>
                        <QualifSubItem value="Node.js"></QualifSubItem>
                        <QualifSubItem value="React.js"></QualifSubItem>
                        <QualifSubItem value="Vue.js"></QualifSubItem>
                        <QualifSubItem value="Three.js"></QualifSubItem>
                        <QualifSubItem value="React Native"></QualifSubItem>
                        <QualifSubItem value="Express Js"></QualifSubItem>
                    <QualifItem value="HTML5"></QualifItem>
                    <QualifItem value="CSS"></QualifItem>
                    <QualifItem value="SASS (minimally used)"></QualifItem>
                    <QualifItem value="PHP"></QualifItem>
                    <QualifItem value="SQL"></QualifItem>
                    <QualifItem value="Web Pack"></QualifItem>
                    <QualifItem value="Parse Server"></QualifItem>
                    <QualifItem value="Single Page Apps"></QualifItem>
                    <QualifItem value="Git"></QualifItem>
                    <QualifItem value="Rest APIs"></QualifItem>


             </div>
          </div>
      </div>
  );
}

}

function QualifItem(props)
{
    return <div className="qualif_box_item">+ {props.value}</div>
}

function QualifSubItem(props)
{
    return <div className="qualif_box_sub_item">- {props.value}</div>
}