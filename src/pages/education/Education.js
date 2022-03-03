import React from 'react'
import './education.css';

export default class Education extends React.Component{

render() {

  return (
      <div className="education">
          <div className="education_box"> 
              <div className="education_title">Education</div>
              <div className="education_box_content">
                   <EducationItem value="Utah Valley University, 2016-2020"/>
                        <EducationSubItem value="Bachelor in Computer Science,  GPA of 3.93."/>
                   <EducationItem value="Utah Valley University, 2021-now"/>
                        <EducationSubItem value="Masters in Computer Science."/>


             </div>
          </div>
      </div>
  );
}

}

function EducationItem(props)
{
    return <div className="education_box_item">+ {props.value}</div>
}

function EducationSubItem(props)
{
    if(!props.href)
        return <div className="education_box_sub_item">- {props.value}</div>
    else
        return <div className="education_box_sub_item">- {props.value} <a href={props.href}>{props.href}</a></div>
}
