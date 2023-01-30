import React from 'react'
import './App.css';
import {initRubiks, animateRubiks, doodleRubiks, setRubiksPosition} from 'rubiks'
import Home from './home/Home'
import Card from './card/card';
import { data } from './data';
export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {rubiksRight: 300, rubiksTop: window.innerHeight/2, mobileMode: false};

    this.mobileRubiksYPos = ()=> window.innerHeight-200;
    this.nonMobileRubiksYPos = ()=>window.innerHeight/2;


    // bind some functions
    this.windowResize = this.windowResize.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.cosFunc = this.cosFunc.bind(this);
  }

  componentDidMount()
  {

    // setup and animate the rubiks cube
    initRubiks("background", "App_background");
    animateRubiks();


    // does the rubiks cube animation
    setTimeout(()=>
    {
      doodleRubiks();
    },5000)

    // we want to resize things initially
    this.windowResize();

    // then we want the window to continually listen
    // for resizes
    window.addEventListener('resize',  ()=>this.windowResize())

  }


  // called when window resizes
  // handles the position of the
  // rubiks cube
  windowResize()
  {
    if(window.innerWidth > 600)
      {
        // when we are not in mobile mode
        // we want the rubiks cube to stay in the middle of the
        // page
        this.setState({rubiksTop: this.nonMobileRubiksYPos()})

        if((window.innerWidth-this.state.rubiksRight) < 300)
          this.setState({rubiksRight: window.innerWidth-300})


        // lets update the rubiksRight state
        // so when they resize its not in some 
        // random place
        this.cosFunc( document.getElementsByClassName("App")[0]);
        

        setRubiksPosition(window.innerWidth-this.state.rubiksRight,this.state.rubiksTop);
        this.setState({mobileMode:false});
      }
    else 
    {

      // pretty much when it is in mobile mode
      // we want the rubiks cube to scroll with the home page
      let appScrollTop = document.getElementsByClassName("App")[0].scrollTop
      setRubiksPosition(window.innerWidth/2,this.mobileRubiksYPos()-appScrollTop);
      this.setState({mobileMode:true});
    }
  }


  // handles the scrolling 
  // with the rubiks cube
  scrollHandler(e)
  {


    if(!this.state.mobileMode)
    {

     let rubiksPos =  this.cosFunc(e.target);

      // set the position
      setRubiksPosition(rubiksPos,this.nonMobileRubiksYPos());

    }
    else 
    {

      // when not in mobile mode
      // lets have the rubiks cube follow the home page
      let yScrollValue = e.target.scrollTop;

      this.setState({rubiksTop: this.mobileRubiksYPos() -yScrollValue})
      setRubiksPosition(window.innerWidth/2, this.state.rubiksTop)

      
    }
    
  }


  // basically this function finds
  // the right offset of the rubiks cube
  // for a particular scrolltop
  // it is a cosfunc
  cosFunc(element)
  {
       // rubiks cube on scroll
       let yScrollValue = element.scrollTop;
       let stepPerPixel = Math.PI/element.clientHeight;
       let rubiksPos = Math.sin(((yScrollValue*stepPerPixel)-Math.PI/2))*(window.innerWidth/2-300);
       rubiksPos = window.innerWidth/2+(-1*rubiksPos);
 
       // so that the page resize maintains the current x positon of the 
       // rubiks cube
       this.setState({rubiksRight: window.innerWidth-rubiksPos})


       return rubiksPos;
  }


// render those elements
render() {


  return (
    <div className="App" onScroll={this.scrollHandler}>
      <div className="background"></div>
        <Home/>
        {
        data.map((item,key) => (<Card key = {key} data={item}></Card>))
        }
    

    </div>
  );
}

}
