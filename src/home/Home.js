import React from 'react'
import './home.css';

// react component that holds home page
export default class Home extends React.Component{

render() {

  return (
      <div className="home">
          <div className="home-text slideInAnimation"> 
              <div>Abinadi Swapp</div>
              <div>Software Dev</div>
          </div>
      </div>
  );
}

}