import React from 'react'
import './certificates_awards.css';


// react component
// for the awards page
export default class Awards extends React.Component{

render() {

  return (
      <div className="awards">
          <div className="awards_box"> 
              <div className="awards_title">Awards</div>
              <div className="awards_box_content">
                <AwardsItem value="Sterling Scholar Winner for Computer IT, 2016"></AwardsItem>
                <AwardsSubItem href="https://www.nshcounseling.org/sterling-scholar"></AwardsSubItem>

             </div>
          </div>
      </div>
  );
}

}

// functional component
function AwardsItem(props)
{
    return <div className="awards_box_item">+ {props.value}</div>
}


// functional component
function AwardsSubItem(props)
{
    if(!props.href)
        return <div className="awards_box_sub_item">- {props.value}</div>
    else
        return <div className="awards_box_sub_item">- {props.value} <a href={props.href}>{props.href}</a></div>
}
